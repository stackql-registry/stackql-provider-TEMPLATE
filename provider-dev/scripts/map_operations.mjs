#!/usr/bin/env node

// Maintains provider-dev/config/all_services.csv, the provider's durable
// dictionary of operation -> stackql_resource_name, stackql_method_name,
// stackql_verb and stackql_object_key, keyed by filename::operationId. The
// CSV is the source of truth for every operation it maps: a mapped row is
// never rewritten. `make mappings` runs provider-utils analyze first, which
// appends a blank row for each operationId the CSV lacks; this script names
// only those rows (the derivation and override tables below, then the
// service prefix is dropped: see "Resource naming guidance" in
// provider_development.md), updates the path of an operation that moved,
// drops rows of removed operations and the duplicates analyze appends for
// skip_this_resource rows, and validates every row. To rename, edit the row;
// to have the rules name an operation again, blank its stackql_resource_name.
// Review the CSV diff after running - a method moving resource or a resource
// renamed is a breaking change to review, not noise.
//
// Mechanical derivation (lib/spec_helpers.mjs), then the override tables:
//   GET collection            -> SELECT <resource>.list   (objectKey from the envelope)
//   GET single                -> SELECT <resource>.get
//   POST create               -> INSERT <resource>.create
//   PATCH/PUT edit            -> UPDATE <resource>.update
//   DELETE                    -> DELETE <resource>.delete
//   PATCH/PUT action segment  -> EXEC   <parent>.update_<segment>
//   POST action segment       -> EXEC   <parent>.<segment>
//   POST read segment         -> SELECT <resource>.list (objectKey set in post_process)
//   skip rules                -> skip_this_resource (reason-coded in the inventory)
//
// Validates every row before writing, whether the rules or a hand edit named
// it: every spec operation present in the CSV, names lower snake_case, a
// known stackql_verb, (service, resource, method) unique, unique
// required-parameter signatures per (service, resource, sqlVerb), and every
// RESOURCE_RULES / METHOD_RULES entry matching an operation. Fails without
// writing on violations.
//
// Usage: npm run map-operations [-- --report] [-- --out other.csv]
//   --report prints the mapping and the rows where the dictionary differs
//   from what the rules derive, without writing - the fastest way to design
//   RESOURCE_RULES / METHOD_RULES for a new service.

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import pluralize from 'pluralize';
import {
  REPO_ROOT, HTTP_VERBS, camelToSnake, pathParams, normalizePath, makeResolver,
  classifyResponse, proposeObjectKey, hasRowArray, skipReason, scopedSegments,
  ACTION_SEGMENTS, POST_EXEC_SEGMENTS, POST_READ_SEGMENTS, deriveResource
} from './lib/spec_helpers.mjs';

const sourceDir = path.join(REPO_ROOT, 'provider-dev', 'source');
const csvPath = path.join(REPO_ROOT, 'provider-dev', 'config', 'all_services.csv');
const report = process.argv.includes('--report');

// ---------------------------------------------------------------------------
// Override tables. TODO(template): add rules as services come online.
// ---------------------------------------------------------------------------

// Explicit resource-name overrides, matched on (service optional, verb
// optional, normalized path with params collapsed to {}). First match wins.
const RESOURCE_RULES = [
  // { service: 'services', re: /\/clickhouseSettings\/schema$/, resource: 'clickhouse_settings_schemas' },
  // { service: 'postgres', re: /\/postgres(\/\{\})?$/, resource: 'services' }
];

// Method-name / verb / objectKey overrides for cases the generic rules
// cannot express, matched on (verb, normalized path). First match wins.
const METHOD_RULES = [
  // { verb: 'get', re: /\/usageCost$/, method: 'list', sqlVerb: 'select', objectKey: '$.result.costs' },
  // { verb: 'get', re: /\/settings$/, method: 'list', sqlVerb: 'select', objectKey: '$.result' }
];

// ---------------------------------------------------------------------------
// Index every operation in the split service specs
// ---------------------------------------------------------------------------

const ops = new Map(); // `${filename}::${path}::${verb}` -> { op, pathItem, resolve }
const specFiles = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir).filter((f) => f.endsWith('.yaml')).sort() : [];
if (specFiles.length === 0) {
  console.error(`Error: no service specs in ${sourceDir} - run make split first`);
  process.exit(1);
}
for (const filename of specFiles) {
  const spec = yaml.load(fs.readFileSync(path.join(sourceDir, filename), 'utf8'));
  const resolve = makeResolver(spec);
  for (const [pathKey, pathItem] of Object.entries(spec.paths || {})) {
    for (const verb of HTTP_VERBS) {
      if (!pathItem[verb]) continue;
      ops.set(`${filename}::${pathKey}::${verb}`, { op: pathItem[verb], pathItem, resolve });
    }
  }
}

// ---------------------------------------------------------------------------
// Mapping
// ---------------------------------------------------------------------------

function resourceFor(service, pathKey, verb) {
  const norm = normalizePath(pathKey);
  for (const rule of RESOURCE_RULES) {
    if (rule.service && rule.service !== service) continue;
    if (rule.verb && rule.verb !== verb) continue;
    if (rule.re.test(norm)) return rule.resource;
  }
  return deriveResource(pathKey, verb, service, pluralize);
}

// (service.resource) pairs that have a GET ending in a path parameter - used
// to classify a keyless GET on the same resource as the collection read.
const resourcesWithKeyedGet = new Set();
for (const key of ops.keys()) {
  const [filename, pathKey, verb] = key.split('::');
  if (verb !== 'get' || !/\}$/.test(pathKey)) continue;
  const service = filename.replace(/\.yaml$/, '');
  resourcesWithKeyedGet.add(`${service}.${resourceFor(service, pathKey, verb)}`);
}

function mapOperation(filename, pathKey, verb) {
  const entry = ops.get(`${filename}::${pathKey}::${verb}`);
  if (!entry) return { error: `operation not found in ${sourceDir}` };
  const { op, resolve } = entry;
  const service = filename.replace(/\.yaml$/, '');

  const skip = skipReason(pathKey, op, resolve, verb);
  if (skip) return { resource: 'skip_this_resource', method: '', sqlVerb: '', objectKey: '', skip };

  const norm = normalizePath(pathKey);
  const resource = resourceFor(service, pathKey, verb);
  const methodRule = METHOD_RULES.find((r) => r.verb === verb && r.re.test(norm));
  if (methodRule) return { resource, method: methodRule.method, sqlVerb: methodRule.sqlVerb, objectKey: methodRule.objectKey || '' };

  const { segs } = scopedSegments(pathKey);
  const statics = segs.filter((s) => !s.startsWith('{'));
  const lastStatic = statics[statics.length - 1];
  const lastSegIsParam = /\}$/.test(pathKey);
  const resp = classifyResponse(op, resolve);

  if (verb === 'get') {
    // the generator applies the CSV objectKey to GET only
    if (lastSegIsParam) return { resource, method: 'get', sqlVerb: 'select', objectKey: singleEnvelopeKey(resp, resolve, op) };
    // a keyless GET is the collection read when the response carries a row
    // array, or when the same resource also has a keyed GET (a nested
    // envelope the inventory could not see through); otherwise a singleton
    // read (configs, windows, schedules)
    const isCollection = hasRowArray(resp) || resourcesWithKeyedGet.has(`${service}.${resource}`);
    if (isCollection) return { resource, method: 'list', sqlVerb: 'select', objectKey: proposeObjectKey(resp) };
    return { resource, method: 'get', sqlVerb: 'select', objectKey: singleEnvelopeKey(resp, resolve, op) };
  }
  if (verb === 'delete') return { resource, method: 'delete', sqlVerb: 'delete', objectKey: '' };
  if (verb === 'patch' || verb === 'put') {
    if (ACTION_SEGMENTS.has(lastStatic)) return { resource, method: `update_${camelToSnake(lastStatic)}`, sqlVerb: 'exec', objectKey: '' };
    return { resource, method: 'update', sqlVerb: 'update', objectKey: '' };
  }
  // post
  if (POST_EXEC_SEGMENTS.has(lastStatic) || ACTION_SEGMENTS.has(lastStatic)) return { resource, method: camelToSnake(lastStatic), sqlVerb: 'exec', objectKey: '' };
  if (POST_READ_SEGMENTS.has(lastStatic)) return { resource, method: 'list', sqlVerb: 'select', objectKey: '' }; // objectKey in post_process
  return { resource, method: 'create', sqlVerb: 'insert', objectKey: '' };
}

// A single read whose body is {"result": {...}} / {"data": {...}} projects
// the inner object; only when the preferred envelope key holds an object.
function singleEnvelopeKey(resp, resolve, op) {
  const { schema } = (() => { const r = op.responses?.[resp.code]?.content || {}; const t = Object.keys(r).find((m) => m.includes('json')); return { schema: t ? r[t].schema : null }; })();
  const s = resolve(schema) || {};
  const props = s.properties || {};
  for (const k of ['result', 'data']) {
    if (props[k] && (resolve(props[k]) || {}).properties) return `$.${k}`;
  }
  return '';
}

// ---------------------------------------------------------------------------
// CSV read/transform/write (RFC 4180, preserves column order)
// ---------------------------------------------------------------------------

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else { field += c; }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else { field += c; }
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

function csvField(v) {
  return /[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

if (!fs.existsSync(csvPath)) {
  console.error(`Error: ${csvPath} not found - run the generate-mappings (analyze) step first (make mappings)`);
  process.exit(1);
}
const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const header = rows[0];
const col = Object.fromEntries(header.map((h, i) => [h, i]));
for (const required of ['filename', 'path', 'verb', 'operationId', 'stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key']) {
  if (!(required in col)) {
    console.error(`Missing expected CSV column: ${required}`);
    process.exit(1);
  }
}

const errors = [];
const stats = { select: 0, insert: 0, update: 0, delete: 0, exec: 0, skipped: 0 };
const SKIP = 'skip_this_resource';
const NAME_COLUMNS = ['stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key'];
const namesOf = (row) => NAME_COLUMNS.map((c) => row[col[c]]);
const setNames = (row, values) => NAME_COLUMNS.forEach((c, i) => { row[col[c]] = values[i]; });
// mapped: skip_this_resource, or a resource with a method and a SQL verb
const isMapped = (row) => row[col.stackql_resource_name] === SKIP
  || Boolean(row[col.stackql_resource_name] && row[col.stackql_method_name] && row[col.stackql_verb]);

// the dictionary key of every spec operation: filename::operationId
const specOps = new Map();
for (const [key, entry] of ops) {
  const [filename, pathKey, verb] = key.split('::');
  if (!entry.op.operationId) { errors.push(`${filename}: ${verb.toUpperCase()} ${pathKey} has no operationId (the dictionary key)`); continue; }
  const idKey = `${filename}::${entry.op.operationId}`;
  if (specOps.has(idKey)) { errors.push(`${filename}: operationId ${entry.op.operationId} is used twice`); continue; }
  specOps.set(idKey, { filename, pathKey, verb });
}

// Every rule must match an operation of the spec: a rule left behind by an
// upstream change fails the run instead of silently doing nothing.
const opKeys = [...ops.keys()].map((k) => { const [filename, pathKey, verb] = k.split('::'); return { service: filename.replace(/\.yaml$/, ''), norm: normalizePath(pathKey), verb }; });
for (const r of RESOURCE_RULES) {
  if (!opKeys.some((o) => (!r.service || r.service === o.service) && (!r.verb || r.verb === o.verb) && r.re.test(o.norm))) errors.push(`RESOURCE_RULES entry ${r.re} (${r.resource}) matched no operation`);
}
for (const r of METHOD_RULES) {
  if (!opKeys.some((o) => r.verb === o.verb && r.re.test(o.norm))) errors.push(`METHOD_RULES entry ${r.verb} ${r.re} (${r.method}) matched no operation`);
}

// Merge the dictionary with the spec: mapped rows are kept as they are;
// rows of removed operations and the duplicates analyze appends (it treats
// a row without a method, such as skip_this_resource, as unmapped) are
// dropped; an operation that moved keeps its names with its new path.
const kept = [];
const seen = new Set();
const removed = [];
const changes = [];
let duplicates = 0;
for (const row of rows.slice(1)) {
  const idKey = `${row[col.filename]}::${row[col.operationId]}`;
  if (seen.has(idKey)) { duplicates++; continue; }
  seen.add(idKey);
  const op = specOps.get(idKey);
  if (!op) { removed.push(row); continue; }
  if (row[col.path] !== op.pathKey || row[col.verb] !== op.verb) {
    changes.push(`moved, names kept: ${idKey}: ${row[col.verb]} ${row[col.path]} -> ${op.verb} ${op.pathKey}`);
    row[col.path] = op.pathKey;
    row[col.verb] = op.verb;
  }
  kept.push(row);
}
for (const idKey of specOps.keys()) if (!seen.has(idKey)) errors.push(`in spec but not in CSV: ${idKey} (make mappings runs analyze to add it)`);

// Name the unmapped rows with the rules. An operationId renamed upstream at
// the same path and verb keeps the names of the removed row.
const removedByPath = new Map(removed.filter(isMapped).map((r) => [`${r[col.filename]}::${r[col.path]}::${r[col.verb]}`, r]));
const named = [];
for (const row of kept) {
  if (isMapped(row)) continue;
  const previous = removedByPath.get(`${row[col.filename]}::${row[col.path]}::${row[col.verb]}`);
  if (previous) {
    setNames(row, namesOf(previous));
    removed.splice(removed.indexOf(previous), 1);
    changes.push(`operationId renamed upstream, names kept: ${previous[col.operationId]} -> ${row[col.operationId]}`);
    continue;
  }
  const m = mapOperation(row[col.filename], row[col.path], row[col.verb]);
  if (m.error) { errors.push(`${row[col.filename]} ${row[col.verb]} ${row[col.path]}: ${m.error}`); continue; }
  setNames(row, m.resource === SKIP ? [SKIP, '', '', ''] : [m.resource, m.method, m.sqlVerb, m.objectKey || '']);
  named.push({ row, skip: m.skip });
}

// Resource naming: drop a leading service name (singular or plural) from the
// names the rules just produced (fields.field_schemes -> fields.schemes), not
// when the remainder would start with a preposition or collide with another
// resource of the service. Rows already in the dictionary are not renamed.
const NOT_A_NAME_START = new Set(['with', 'without', 'by', 'for', 'in', 'of', 'to', 'from', 'on', 'only']);
const byService = new Map();
for (const row of kept) {
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!byService.has(service)) byService.set(service, new Set());
  if (row[col.stackql_resource_name] !== SKIP) byService.get(service).add(row[col.stackql_resource_name]);
}
for (const [service, names] of byService) {
  const words = service.split('_');
  const forms = [...new Set([service, [...words.slice(0, -1), pluralize.singular(words[words.length - 1])].join('_')])].sort((a, b) => b.length - a.length);
  const fresh = new Set(named.filter((n) => n.row[col.filename] === `${service}.yaml` && n.row[col.stackql_resource_name] !== SKIP).map((n) => n.row[col.stackql_resource_name]));
  const proposals = new Map();
  for (const name of fresh) {
    const form = forms.find((f) => name.startsWith(`${f}_`));
    const rest = form ? name.slice(form.length + 1) : '';
    if (rest && !NOT_A_NAME_START.has(rest.split('_')[0])) proposals.set(name, rest);
  }
  const counts = new Map();
  for (const rest of proposals.values()) counts.set(rest, (counts.get(rest) || 0) + 1);
  for (const [name, rest] of proposals) {
    if ((names.has(rest) && !proposals.has(rest)) || counts.get(rest) > 1) continue;
    for (const n of named) if (n.row[col.filename] === `${service}.yaml` && n.row[col.stackql_resource_name] === name) n.row[col.stackql_resource_name] = rest;
  }
}
for (const n of named) {
  const [resource, method, sqlVerb] = namesOf(n.row);
  changes.push(`added ${n.row[col.filename]}::${n.row[col.operationId]} -> ${resource === SKIP ? `${SKIP} (${n.skip})` : `${resource}.${method} (${sqlVerb})`}`);
}
for (const r of removed) changes.push(`removed (no longer in the spec): ${r[col.filename]}::${r[col.operationId]}`);
for (const row of kept) {
  const [resource, , sqlVerb] = namesOf(row);
  if (resource === SKIP) stats.skipped++;
  else if (sqlVerb in stats) stats[sqlVerb]++;
}
rows.splice(1, rows.length - 1, ...kept);

// ---------------------------------------------------------------------------
// Consistency checks
// ---------------------------------------------------------------------------

const methodSeen = new Map();
const sigSeen = new Map();
const SQL_VERBS = ['select', 'insert', 'update', 'replace', 'delete', 'exec'];
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  // every row is validated, whether the rules or a hand edit named it
  const where = `${row[col.filename]}::${row[col.operationId]}`;
  for (const ident of [resource, row[col.stackql_method_name]]) {
    if (!/^[a-z][a-z0-9_]*$/.test(ident)) errors.push(`${service}: '${ident}' is not a lower snake_case identifier (${where})`);
  }
  if (!SQL_VERBS.includes(row[col.stackql_verb])) errors.push(`${service}.${resource}.${row[col.stackql_method_name]}: unknown stackql_verb '${row[col.stackql_verb]}' (${where})`);
  const methodKey = `${service}.${resource}.${row[col.stackql_method_name]}`;
  if (methodSeen.has(methodKey)) {
    errors.push(`duplicate method ${methodKey} (${methodSeen.get(methodKey)} and ${row[col.path]}:${row[col.verb]}) - add a RESOURCE_RULES or METHOD_RULES entry`);
  }
  methodSeen.set(methodKey, `${row[col.path]}:${row[col.verb]}`);

  const sqlVerb = row[col.stackql_verb];
  if (sqlVerb === 'exec') continue;
  // signature = required inputs: path params plus required query params
  const entry = ops.get(`${row[col.filename]}::${row[col.path]}::${row[col.verb]}`);
  const requiredQuery = [...(entry?.pathItem?.parameters || []), ...(entry?.op.parameters || [])]
    .map((p) => entry.resolve(p))
    .filter((p) => p && p.in === 'query' && p.required)
    .map((p) => p.name);
  const sig = [...pathParams(row[col.path]), ...requiredQuery].sort().join(',');
  const sigKey = `${service}.${resource}.${sqlVerb}::${sig}`;
  if (sigSeen.has(sigKey)) {
    errors.push(`signature clash on ${service}.${resource} ${sqlVerb} [${sig}] (${sigSeen.get(sigKey)} and ${row[col.stackql_method_name]}) - split the resource or make one EXEC`);
  }
  sigSeen.set(sigKey, row[col.stackql_method_name]);
}

if (report) {
  console.log('service,resource,method,verb,objectKey,path,httpVerb');
  for (const row of rows.slice(1)) {
    console.log([row[col.filename].replace(/\.yaml$/, ''), row[col.stackql_resource_name], row[col.stackql_method_name], row[col.stackql_verb], row[col.stackql_object_key], row[col.path], row[col.verb]].join(','));
  }
  // Where the dictionary and the rules disagree: a hand rename, or a rule
  // changed after the row was named (blank stackql_resource_name to have the
  // rules name it again). Run `make split` first: after normalize, wrapped
  // bare-array reads differ in objectKey only.
  const fresh = new Set(named.map((n) => n.row));
  const drift = [];
  for (const row of rows.slice(1)) {
    if (fresh.has(row)) continue;
    const m = mapOperation(row[col.filename], row[col.path], row[col.verb]);
    if (m.error) continue;
    const service = row[col.filename].replace(/\.yaml$/, '');
    let resource = m.resource;
    if (resource !== SKIP) {
      // the service-prefix strip applied to newly named rows
      const words = service.split('_');
      const forms = [...new Set([service, [...words.slice(0, -1), pluralize.singular(words[words.length - 1])].join('_')])].sort((a, b) => b.length - a.length);
      const form = forms.find((f) => resource.startsWith(`${f}_`));
      const rest = form ? resource.slice(form.length + 1) : '';
      // a collision is another resource of the service already named `rest`
      const taken = (byService.get(service) || new Set()).has(rest) && rest !== row[col.stackql_resource_name];
      if (rest && !NOT_A_NAME_START.has(rest.split('_')[0]) && !taken) resource = rest;
    }
    const derived = resource === SKIP ? [SKIP, '', '', ''] : [resource, m.method, m.sqlVerb, m.objectKey || ''];
    const current = namesOf(row);
    if (derived.join('|') !== current.join('|')) drift.push(`  ${row[col.filename]}::${row[col.operationId]}: dictionary ${current.filter(Boolean).join(' ')} | rules ${derived.filter(Boolean).join(' ')}`);
  }
  console.log(`\nRows where the dictionary differs from the rules: ${drift.length}`);
  for (const d of drift) console.log(d);
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
if (report) {
  console.log(`\n(report only - nothing written)`);
  process.exit(0);
}

const outArgIdx = process.argv.indexOf('--out');
const outPath = outArgIdx !== -1 ? path.resolve(process.argv[outArgIdx + 1]) : csvPath;
const out = rows.map((r) => r.map(csvField).join(',')).join('\n') + '\n';
fs.writeFileSync(outPath, out);

// summary
const resourcesByService = new Map();
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!resourcesByService.has(service)) resourcesByService.set(service, new Set());
  resourcesByService.get(service).add(resource);
}
for (const c of changes) console.log(c);
if (duplicates) console.log(`dropped ${duplicates} duplicate row(s) analyze re-appended (rows without a method, such as ${SKIP})`);
console.log(`Dictionary: ${kept.length - named.length} operation(s) kept, ${named.length} added, ${removed.length} removed`);
console.log(`Mapped: select ${stats.select}, insert ${stats.insert}, update ${stats.update}, delete ${stats.delete}, exec ${stats.exec}; skipped ${stats.skipped}`);
console.log('Resources per service:');
for (const [service, resources] of [...resourcesByService.entries()].sort()) {
  console.log(`  ${service}: ${[...resources].sort().join(', ')}`);
}
