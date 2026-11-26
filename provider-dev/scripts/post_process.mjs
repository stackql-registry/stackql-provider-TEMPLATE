#!/usr/bin/env node

// Post-generation fixes for everything the generator cannot express.
// Idempotent; re-run after every generate. Every rule is numbered and
// commented; the run validates and fails without writing.
//
// Rules the shipped providers needed (see the skill's request-response-
// shaping.md, pagination-and-pushdown.md, scoping-and-auth.md), each
// available as a helper below:
//   1. path-level `servers` overrides pinning ROOT_PATHS back to API_BASE_URL
//      (normalize strips path-level servers, so this runs here)
//   2. request.nativeCasing on every method when the wire is camel/pascal
//      (paired with snake_case_aliases: true in provider_config.json)
//   3. DELETE-with-body naive translation (the generator only emits it for
//      POST/PUT/PATCH) so body attributes become WHERE keys
//   4. objectKey on POST-backed reads (the CSV objectKey applies to GET only)
//   5. method-level or document-level pagination
//   6. response transforms for non-JSON payloads ({contents} rows)
//   7. request transforms for bare-array bodies ('[{{ . }}]')
//   8. queryParamPushdown (LIMIT -> ?limit=, OData $filter, ...)
//   9. x-stackQL-alias on parameters
//  10. snake_case path parameters (always; called last)
//
// Usage: npm run post-process

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {
  SERVICES_DIR, API_BASE_URL, SCOPE_PREFIX, ROOT_PATHS, WIRE_CASING,
  listServiceFiles, forEachMethod, sqlVerbOf, dumpYaml, makeResolver, camelToSnake, HTTP_VERBS
} from './lib/spec_helpers.mjs';

if (!fs.existsSync(SERVICES_DIR)) {
  console.error(`Error: ${SERVICES_DIR} not found - run the generate step first`);
  process.exit(1);
}

const docs = new Map();
for (const f of listServiceFiles()) docs.set(f, yaml.load(fs.readFileSync(path.join(SERVICES_DIR, f), 'utf8')));
if (docs.size === 0) {
  console.error('Error: no generated service specs found');
  process.exit(1);
}

const errors = [];
const counts = {};
const bump = (k, n = 1) => { counts[k] = (counts[k] || 0) + n; };

// ---------------------------------------------------------------------------
// Helpers (generic; each is a rule you can call from RULES below)
// ---------------------------------------------------------------------------

// 1. Pin root paths (outside SCOPE_PREFIX) to the bare API base.
function pinRootPaths() {
  if (!SCOPE_PREFIX || ROOT_PATHS.length === 0) return;
  let found = 0;
  for (const [f, doc] of docs) {
    for (const p of ROOT_PATHS) {
      if (doc.paths?.[p]) { doc.paths[p].servers = [{ url: API_BASE_URL }]; found++; bump('root paths pinned'); }
    }
    for (const p of Object.keys(doc.paths || {})) {
      if (!ROOT_PATHS.includes(p) && p.startsWith(SCOPE_PREFIX)) errors.push(`${f}: path ${p} was not rebased onto the scoped server`);
    }
    const srv = doc.servers?.[0];
    if (!srv?.variables || !Object.values(srv.variables).some((v) => v['x-stackQL-envVar'])) errors.push(`${f}: top-level server lacks an x-stackQL-envVar variable`);
  }
  if (found === 0) errors.push(`none of ROOT_PATHS (${ROOT_PATHS.join(', ')}) exist in the generated services`);
}

// 2. request.nativeCasing on every method (or those matching filter).
function setNativeCasing(casing, filter = () => true) {
  if (!casing) return;
  for (const doc of docs.values()) {
    forEachMethod(doc, (method, ctx) => {
      if (!filter(ctx)) return;
      method.request = { ...(method.request || {}), nativeCasing: casing };
      bump(`nativeCasing: ${casing}`);
    });
  }
}

// 3. Naive request-body translation on DELETE methods that carry a body.
function naiveDeleteBodies() {
  for (const doc of docs.values()) {
    forEachMethod(doc, (method, { operation, verb }) => {
      if (verb !== 'delete' || !operation?.requestBody) return;
      method.config = { ...(method.config || {}), requestBodyTranslate: { algorithm: 'naive' } };
      bump('DELETE naive body');
    });
  }
}

// 4. objectKey on a method by (service, resource, method).
function setObjectKey(service, resource, methodName, objectKey) {
  const doc = docs.get(`${service}.yaml`);
  const method = doc?.components?.['x-stackQL-resources']?.[resource]?.methods?.[methodName];
  if (!method) { errors.push(`setObjectKey: ${service}.${resource}.${methodName} not found`); return; }
  method.response = { ...(method.response || {}), objectKey };
  bump('objectKey set');
}

// 5a. Method-level pagination. 5b. Document-level pagination on a service.
function setMethodPagination(service, resource, methodName, pagination) {
  const doc = docs.get(`${service}.yaml`);
  const method = doc?.components?.['x-stackQL-resources']?.[resource]?.methods?.[methodName];
  if (!method) { errors.push(`setMethodPagination: ${service}.${resource}.${methodName} not found`); return; }
  method.config = { ...(method.config || {}), pagination };
  bump('method pagination');
}
function setServicePagination(service, pagination) {
  const doc = docs.get(`${service}.yaml`);
  if (!doc) { errors.push(`setServicePagination: ${service}.yaml not found`); return; }
  doc['x-stackQL-config'] = { ...(doc['x-stackQL-config'] || {}), pagination };
  bump('service pagination');
}

// 6. Non-JSON response -> one row with a `contents` column.
function setContentsTransform(service, resource, methodName, wireMediaType) {
  const doc = docs.get(`${service}.yaml`);
  const method = doc?.components?.['x-stackQL-resources']?.[resource]?.methods?.[methodName];
  if (!method) { errors.push(`setContentsTransform: ${service}.${resource}.${methodName} not found`); return; }
  method.response = {
    ...(method.response || {}),
    mediaType: wireMediaType,
    overrideMediaType: 'application/json',
    schema_override: { type: 'array', items: { type: 'object', properties: { contents: { type: 'string' } } } },
    transform: { type: 'golang_template_text_v0.3.0', body: '[{"contents": {{ toJson . }}}]' }
  };
  bump('contents transform');
}

// 7. Request transform (e.g. '[{{ . }}]' to wrap a single-item body into the
// bare array the API expects; pair with bareArrayBodyToItem in pre_normalize).
function setRequestTransform(service, resource, methodName, body, type = 'golang_template_text_v0.3.0') {
  const doc = docs.get(`${service}.yaml`);
  const method = doc?.components?.['x-stackQL-resources']?.[resource]?.methods?.[methodName];
  if (!method) { errors.push(`setRequestTransform: ${service}.${resource}.${methodName} not found`); return; }
  method.request = { ...(method.request || {}), transform: { type, body } };
  bump('request transform');
}

// 8. queryParamPushdown at method, resource, service level (whole-block).
function setPushdown(service, pushdown, resource = null, methodName = null) {
  const doc = docs.get(`${service}.yaml`);
  if (!doc) { errors.push(`setPushdown: ${service}.yaml not found`); return; }
  let target = doc;
  let key = 'x-stackQL-config';
  if (resource) {
    target = doc.components?.['x-stackQL-resources']?.[resource];
    if (!target) { errors.push(`setPushdown: ${service}.${resource} not found`); return; }
    if (methodName) {
      target = target.methods?.[methodName];
      if (!target) { errors.push(`setPushdown: ${service}.${resource}.${methodName} not found`); return; }
      key = 'config';
    }
  }
  target[key] = { ...(target[key] || {}), queryParamPushdown: pushdown };
  bump('queryParamPushdown');
}

// 9. Alternative WHERE name for a parameter on an operation.
function setParamAlias(service, pathKey, verb, paramName, alias) {
  const doc = docs.get(`${service}.yaml`);
  const op = doc?.paths?.[pathKey]?.[verb];
  const param = (op?.parameters || []).find((p) => p.name === paramName);
  if (!param) { errors.push(`setParamAlias: ${service} ${verb} ${pathKey} parameter ${paramName} not found`); return; }
  param['x-stackQL-alias'] = alias;
  bump('parameter alias');
}

// 10. Path parameters in snake_case (resource naming guidance in
//     provider_development.md). A path parameter's name never goes on the
//     wire - its value is substituted into the URL - so the provider names it
//     for SQL: /projects/{projectId} -> /projects/{project_id}. Renames the
//     path keys, the parameters (inline and shared components) and every
//     method's operation $ref together. Call it last, after the rules that
//     match the vendor's path keys. Query parameters keep their wire names
//     (request.nativeCasing maps them, rule 2).
const escapePointer = (p) => p.replace(/~/g, '~0').replace(/\//g, '~1');
function snakePathParams() {
  for (const [f, doc] of docs) {
    const resolve = makeResolver(doc);
    const renamed = new Map();
    const paths = {};
    for (const [pathKey, item] of Object.entries(doc.paths || {})) {
      const snakeKey = pathKey.replace(/\{([^}]+)\}/g, (_, n) => `{${camelToSnake(n)}}`);
      if (snakeKey !== pathKey) {
        if (doc.paths[snakeKey] || paths[snakeKey]) { errors.push(`snakePathParams: ${f}: ${pathKey} and ${snakeKey} would be the same path`); continue; }
        renamed.set(pathKey, snakeKey);
      }
      paths[snakeKey] = item;
      for (const list of [item.parameters, ...HTTP_VERBS.map((v) => item[v]?.parameters)].filter(Array.isArray)) {
        for (const p of list) {
          const param = resolve(p);
          if (param?.in !== 'path') continue;
          const snake = camelToSnake(param.name);
          if (snake !== param.name) { param.name = snake; bump('path parameter renamed to snake_case'); }
        }
      }
    }
    doc.paths = paths;
    const byPointer = [...renamed].map(([from, to]) => [`#/paths/${escapePointer(from)}/`, `#/paths/${escapePointer(to)}/`]);
    for (const res of Object.values(doc.components?.['x-stackQL-resources'] || {})) {
      for (const m of Object.values(res.methods || {})) {
        const ref = m.operation?.$ref;
        const hit = ref && byPointer.find(([from]) => ref.startsWith(from));
        if (hit) m.operation.$ref = hit[1] + ref.slice(hit[0].length);
      }
    }
  }
}

// Sanity: every service has resources; every resource has at least one method.
function validateResources() {
  for (const [f, doc] of docs) {
    const resources = doc.components?.['x-stackQL-resources'] || {};
    if (Object.keys(resources).length === 0) errors.push(`${f}: no x-stackQL-resources (an empty service fails the meta-route walk - exclude it in service_names.json or fix the mapping)`);
    for (const [name, res] of Object.entries(resources)) {
      if (Object.keys(res.methods || {}).length === 0) errors.push(`${f}: resource ${name} has no methods`);
    }
  }
}

// ---------------------------------------------------------------------------
// The rules. TODO(template): add provider-specific calls in numbered order.
// ---------------------------------------------------------------------------

// 1. root paths outside the scoped server template
pinRootPaths();
// 2. snake_case surface (no-op when WIRE_CASING is null)
setNativeCasing(WIRE_CASING);
// 3. DELETE bodies
naiveDeleteBodies();
// 4-9. provider-specific, e.g.
// setObjectKey('database', 'queries', 'list', '$.rows');
// setServicePagination('udfs', { requestToken: { key: 'cursor', location: 'query' }, responseToken: { key: '$.result.pagination.nextCursor', location: 'body' } });
// setMethodPagination('activity', 'events', 'list', { requestToken: { key: '', location: 'request' }, responseToken: { key: 'Link', location: 'header' } });
// setContentsTransform('reports', 'exports', 'get', 'application/pdf');
// setRequestTransform('secrets', 'secrets', 'create', '[{{ . }}]');
// setPushdown('projects', { top: { dialect: 'custom', paramName: 'limit', maxValue: 1000 } });
// setParamAlias('projects', '/projects/{ref}', 'get', 'ref', 'project_ref');
// 10. snake_case path parameters (last: the rules above match vendor path keys)
snakePathParams();

validateResources();

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
for (const [f, doc] of docs) fs.writeFileSync(path.join(SERVICES_DIR, f), dumpYaml(doc));
console.log(`post_process: ${docs.size} service(s) written`);
for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`);
if (Object.keys(counts).length === 0) console.log('  (no rules applied)');

// The sqlVerbOf helper is exported for tests that need to know the verb a
// method landed in; referenced here so linters see it used.
void sqlVerbOf;
