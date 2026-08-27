#!/usr/bin/env node

// Builds the endpoint inventory (provider-dev/config/endpoint_inventory.csv)
// from the pinned spec: one row per operation with the columns that decide
// everything downstream - scope, path params, pagination-looking query
// params (a per-endpoint confirmation, not an assumption), request body
// presence / media types / bare-array flag, the update-semantics presumption,
// vendor labels, the response shape and its envelope candidates, the
// proposed service (from the path rules in service_names.json), a draft
// resource / method / verb / objectKey, and a skip reason code where the
// operation will not be mapped.
//
// The proposed columns are drafts - map_operations.mjs produces the
// authoritative mapping from the same derivation plus its rule tables.
// Fails without writing if any path lacks a service rule.
//
// Usage: npm run build-inventory

import fs from 'fs';
import path from 'path';
import pluralize from 'pluralize';
import {
  REPO_ROOT, SPEC_FILE, HTTP_VERBS, pathParams, makeResolver, makeServiceResolver, loadSpec,
  classifyResponse, classifyBody, proposeObjectKey, updateSemantics, vendorLabels, paginationParams,
  scopeOf, skipReason, deriveResource, deriveVerb, deriveMethod
} from './lib/spec_helpers.mjs';

const specPath = path.join(REPO_ROOT, 'provider-dev', 'downloaded', SPEC_FILE);
const outPath = path.join(REPO_ROOT, 'provider-dev', 'config', 'endpoint_inventory.csv');

if (!fs.existsSync(specPath)) {
  console.error(`Error: pinned spec not found at ${specPath} - run make fetch-spec first`);
  process.exit(1);
}
const spec = loadSpec(specPath);
const resolve = makeResolver(spec);
const { resolveService, excludedServices } = makeServiceResolver();

const rows = [];
const errors = [];
const stats = { byService: {}, byVerb: {}, byShape: {}, byLabel: {}, byDisposition: {} };
const paginationFindings = [];
const bump = (obj, key) => { obj[key] = (obj[key] || 0) + 1; };

for (const [pathKey, pathItem] of Object.entries(spec.paths || {})) {
  for (const verb of [...HTTP_VERBS, 'head']) {
    const op = pathItem[verb];
    if (!op) continue;

    const service = resolveService(pathKey);
    if (!service) {
      errors.push(`no service rule matches ${verb.toUpperCase()} ${pathKey}`);
      continue;
    }
    const resp = classifyResponse(op, resolve);
    const body = classifyBody(op, resolve);
    const labels = vendorLabels(op);
    const pageParams = paginationParams(op, pathItem, resolve);
    const skip = excludedServices.has(service) ? `excluded_service_${service}` : skipReason(pathKey, op, resolve, verb);

    if (pageParams.length > 0) paginationFindings.push(`${verb.toUpperCase()} ${pathKey}: ${pageParams.join(', ')}`);

    rows.push({
      method: verb,
      path: pathKey,
      operation_id: op.operationId || '',
      tags: (op.tags || []).join(';'),
      scope: scopeOf(pathKey),
      path_params: pathParams(pathKey).join(';'),
      pagination_params: pageParams.join(';'),
      has_request_body: body.present ? 'y' : 'n',
      body_media_types: body.mediaTypes.join(';'),
      body_bare_array: body.bareArray ? 'y' : '',
      update_semantics: updateSemantics(verb),
      labels: labels.join(';'),
      response_shape: resp.shape,
      response_array_props: resp.arrayProps.join(';'),
      response_media_types: resp.mediaTypes.join(';'),
      proposed_service: service,
      proposed_resource: skip ? '' : deriveResource(pathKey, verb, service, pluralize),
      proposed_method: skip ? '' : deriveMethod(verb, pathKey),
      proposed_verb: skip ? '' : deriveVerb(verb, pathKey),
      proposed_object_key: skip || verb !== 'get' ? '' : proposeObjectKey(resp),
      skip_reason: skip
    });

    bump(stats.byShape, resp.shape);
    for (const l of labels) bump(stats.byLabel, l);
    bump(stats.byDisposition, skip ? `skipped: ${skip}` : 'mapped');
    if (!skip) {
      bump(stats.byService, service);
      bump(stats.byVerb, deriveVerb(verb, pathKey));
    }
  }
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  console.error('Add ordered path rules to provider-dev/config/service_names.json (first match wins).');
  process.exit(1);
}
if (rows.length === 0) {
  console.error('FAILED: the spec has no operations');
  process.exit(1);
}

const columns = Object.keys(rows[0]);
const csvField = (v) => (/[",\n\r]/.test(v) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
const csv = [columns.join(',')]
  .concat(rows.map((r) => columns.map((c) => csvField(r[c] ?? '')).join(',')))
  .join('\n') + '\n';
fs.writeFileSync(outPath, csv);

console.log(`Endpoint inventory written to ${outPath} (${rows.length} operations)\n`);
const printStats = (title, obj) => {
  console.log(title);
  for (const [k, v] of Object.entries(obj).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`);
};
printStats('By disposition:', stats.byDisposition);
printStats('\nMapped operations by proposed service:', stats.byService);
printStats('\nMapped operations by proposed StackQL verb:', stats.byVerb);
printStats('\nBy response shape:', stats.byShape);
printStats('\nBy vendor label:', stats.byLabel);

console.log('\nPagination check (query parameters that look like paging - confirm the scheme per endpoint, see pagination-and-pushdown.md):');
if (paginationFindings.length === 0) console.log('  none - no list endpoint declares a paging parameter');
else for (const f of paginationFindings) console.log(`  ${f}`);
