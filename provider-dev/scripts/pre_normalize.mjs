#!/usr/bin/env node

// Provider-specific spec surgery applied to provider-dev/source before the
// generic provider-utils normalize pass. Each pass is numbered, counted,
// idempotent, and validates its own preconditions; the run fails without
// writing on any error.
//
// Typical passes (see the skill's normalize-and-generate.md):
//   - remove a non-JSON request media type declared before application/json
//     (any-sdk binds the body to the first declared type)
//   - remove deprecated query parameters that duplicate body properties
//     (an INSERT column binds to the query parameter first, body arrives empty)
//   - inject a response schema where the vendor declares none so a binding
//     exists (a 201 with no content on a query endpoint)
//   - rewrite a bare-array request body to its single-item object form
//     (paired with a request transform in post_process.mjs)
//   - drop a camelCase duplicate of a snake_case property that would collide
//     under snake_case_aliases
//   - declare an undocumented-but-real query parameter so WHERE pushes it down
//
// The generic OpenAPI 3.1 -> 3.0 lowering (type arrays, numeric exclusive
// bounds, 3.1.2) already ran in record_spec_pin.mjs; a derived-archetype
// build that bypasses the pin can enable LOWER_31_CONSTRUCTS below.
//
// Usage: npm run pre-normalize [-- --dry-run]

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { REPO_ROOT, HTTP_VERBS } from './lib/spec_helpers.mjs';

const sourceDir = path.join(REPO_ROOT, 'provider-dev', 'source');
const dryRun = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// Reusable pass builders. Each returns (doc, filename, errors) => count.
// ---------------------------------------------------------------------------

function forEachOperation(doc, fn) {
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    for (const verb of HTTP_VERBS) if (pathItem[verb]) fn(pathItem[verb], pathKey, verb, pathItem);
  }
}

// Keep only application/json on request bodies that also declare another
// media type first.
export function preferJsonRequestBody() {
  return (doc) => {
    let n = 0;
    forEachOperation(doc, (op) => {
      const content = op.requestBody?.content;
      if (!content) return;
      const types = Object.keys(content);
      const json = types.find((t) => t.includes('json'));
      if (json && types[0] !== json) {
        op.requestBody.content = { [json]: content[json] };
        n++;
      }
    });
    return n;
  };
}

// Remove query parameters whose names duplicate a request-body property on
// the same operation (matched by regex on the path when given).
export function dropQueryParamsDuplicatingBody(pathRe = /.*/) {
  return (doc) => {
    let n = 0;
    forEachOperation(doc, (op, pathKey) => {
      if (!pathRe.test(pathKey) || !op.requestBody || !op.parameters) return;
      const json = Object.values(op.requestBody.content || {})[0];
      const props = new Set(Object.keys(json?.schema?.properties || {}));
      const before = op.parameters.length;
      op.parameters = op.parameters.filter((p) => !(p.in === 'query' && props.has(p.name)));
      n += before - op.parameters.length;
    });
    return n;
  };
}

// Inject a response schema on operations matching pathRe/verb that declare a
// 2xx with no content.
export function injectResponseSchema(pathRe, verb, code, schema) {
  return (doc, filename, errors) => {
    let n = 0;
    forEachOperation(doc, (op, pathKey, v) => {
      if (v !== verb || !pathRe.test(pathKey)) return;
      const resp = op.responses?.[code];
      if (!resp) { errors.push(`${filename}: ${verb.toUpperCase()} ${pathKey} has no ${code} response to inject into`); return; }
      if (resp.content) return; // already typed
      resp.content = { 'application/json': { schema: JSON.parse(JSON.stringify(schema)) } };
      n++;
    });
    return n;
  };
}

// Rewrite a bare-array request body to its single-item object form; pair with
// a request transform ('[{{ . }}]') in post_process.mjs.
export function bareArrayBodyToItem(pathRe, verb) {
  return (doc, filename, errors) => {
    let n = 0;
    forEachOperation(doc, (op, pathKey, v) => {
      if (v !== verb || !pathRe.test(pathKey)) return;
      const json = op.requestBody?.content?.['application/json'];
      if (!json?.schema) return;
      if (json.schema.type === 'array' && json.schema.items) { json.schema = json.schema.items; n++; }
      else if (json.schema.type !== 'object' && !json.schema.$ref) errors.push(`${filename}: ${verb.toUpperCase()} ${pathKey} body is neither an array nor an object`);
    });
    return n;
  };
}

// Drop a camelCase property that duplicates a snake_case sibling in every
// schema (they would collide under snake_case_aliases).
export function dropCamelDuplicates() {
  const toSnake = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
  const walk = (node, visit) => {
    if (Array.isArray(node)) { node.forEach((v) => walk(v, visit)); return; }
    if (!node || typeof node !== 'object') return;
    visit(node);
    for (const v of Object.values(node)) walk(v, visit);
  };
  return (doc) => {
    let n = 0;
    walk(doc, (o) => {
      if (!o.properties || typeof o.properties !== 'object') return;
      for (const k of Object.keys(o.properties)) {
        const snake = toSnake(k);
        if (snake !== k && snake in o.properties) { delete o.properties[k]; n++; }
      }
    });
    return n;
  };
}

// Declare an (undocumented) query parameter on matching operations.
export function declareQueryParam(pathRe, verb, param) {
  return (doc) => {
    let n = 0;
    forEachOperation(doc, (op, pathKey, v) => {
      if (v !== verb || !pathRe.test(pathKey)) return;
      op.parameters = op.parameters || [];
      if (op.parameters.some((p) => p.in === 'query' && p.name === param.name)) return;
      op.parameters.push({ in: 'query', required: false, schema: { type: 'string' }, ...param });
      n++;
    });
    return n;
  };
}

// ---------------------------------------------------------------------------
// The pass list. TODO(template): enable / add passes as the API needs them.
// Every entry: { name, run: (doc, filename, errors) => count }
// ---------------------------------------------------------------------------

const PASSES = [
  { name: '1. prefer application/json request bodies', run: preferJsonRequestBody() }
  // { name: '2. drop deprecated query params duplicating the body', run: dropQueryParamsDuplicatingBody(/\/secrets$/) },
  // { name: '3. secrets: single-item body (transform in post_process)', run: bareArrayBodyToItem(/\/secrets$/, 'post') },
  // { name: '4. query endpoint: rows schema', run: injectResponseSchema(/\/query$/, 'post', '201', { type: 'object', properties: { rows: { type: 'array', items: { type: 'object' } } } }) },
  // { name: '5. drop camelCase duplicates', run: dropCamelDuplicates() },
  // { name: '6. declare reveal on secrets list', run: declareQueryParam(/\/secrets$/, 'get', { name: 'reveal', schema: { type: 'boolean' }, description: 'Return secret values.' }) }
];

const files = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir).filter((f) => f.endsWith('.yaml')).sort() : [];
if (files.length === 0) {
  console.error(`Error: no service specs in ${sourceDir} - run make split first`);
  process.exit(1);
}

const pending = [];
const errors = [];
const totals = {};
for (const f of files) {
  const fp = path.join(sourceDir, f);
  const doc = yaml.load(fs.readFileSync(fp, 'utf8'));
  for (const pass of PASSES) {
    const n = pass.run(doc, f, errors) || 0;
    totals[pass.name] = (totals[pass.name] || 0) + n;
  }
  pending.push({ fp, doc });
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
if (!dryRun) {
  for (const { fp, doc } of pending) fs.writeFileSync(fp, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
}
console.log(`pre_normalize: ${PASSES.length} pass(es) over ${files.length} service specs${dryRun ? ' (dry run)' : ''}`);
for (const [k, v] of Object.entries(totals)) console.log(`  ${k}: ${v}`);
