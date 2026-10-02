#!/usr/bin/env node

// Helper for bin/fetch-spec.sh: applies the deterministic fix classes to the
// freshly downloaded spec, validates it with @apidevtools/swagger-parser,
// redacts credential-shaped example values, verifies the upstream hash
// against provider-dev/config/spec_pin.json and only then writes the
// snapshot into provider-dev/downloaded/.
//
// - Validation failure: fail without writing anything.
// - No pin recorded: record it (first fetch).
// - Pin matches: refresh the fetched date only.
// - Pin mismatch: fail without writing, unless UPDATE=true (a reviewed
//   refresh) in which case the new hash is recorded.
//
// The pin records the raw upstream sha256 (drift is always compared against
// upstream) plus the sanitized sha256 of the file on disk, the per-class fix
// counts and the redaction counts. A fix class absent from a snapshot counts
// 0; add a class when a refresh introduces a new construct (never hand-edit
// the snapshot). Multi-document vendors pin each document under
// specs.<name> by calling this once per document.
//
// Inputs via environment: UPDATE, TMP_DIR, DOWNLOAD_DIR, PIN_FILE, SPEC_URL,
// SPEC_FILE.

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';
import yaml from 'js-yaml';

const update = process.env.UPDATE === 'true';
const tmpDir = process.env.TMP_DIR;
const downloadDir = process.env.DOWNLOAD_DIR;
const pinFile = process.env.PIN_FILE;
const specUrl = process.env.SPEC_URL;
const specFile = process.env.SPEC_FILE;

if (!tmpDir || !downloadDir || !pinFile || !specUrl || !specFile) {
  console.error('record_spec_pin.mjs: missing TMP_DIR / DOWNLOAD_DIR / PIN_FILE / SPEC_URL / SPEC_FILE');
  process.exit(1);
}

const isYaml = /\.ya?ml$/i.test(specFile);
const tmpPath = path.join(tmpDir, specFile);
const content = fs.readFileSync(tmpPath);
const sha256 = crypto.createHash('sha256').update(content).digest('hex');
let spec;
try {
  spec = isYaml ? yaml.load(content.toString('utf8')) : JSON.parse(content.toString('utf8'));
} catch (err) {
  console.error(`Spec could not be parsed, nothing written: ${err.message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Deterministic fix classes. Each walks the document, rewrites in place and
// returns a count. The defaults cover the JSON Schema 2019-09/2020-12 and
// OpenAPI 3.1 leaks that swagger-parser (3.0 validation) and stackql's
// kin-openapi loader reject. TODO(template): append vendor-specific classes.
// ---------------------------------------------------------------------------

const SCALAR_PREFERENCE = ['string', 'integer', 'number', 'boolean', 'object', 'array'];

function walk(node, visit) {
  if (Array.isArray(node)) { node.forEach((v) => walk(v, visit)); return; }
  if (!node || typeof node !== 'object') return;
  visit(node);
  for (const v of Object.values(node)) walk(v, visit);
}

const FIX_CLASSES = [
  {
    name: 'type_null_to_nullable',
    apply: (doc) => { let n = 0; walk(doc, (o) => { if (o.type === 'null') { delete o.type; o.nullable = true; n++; } }); return n; }
  },
  {
    name: 'type_array_lowered',
    apply: (doc) => {
      let n = 0;
      walk(doc, (o) => {
        if (!Array.isArray(o.type)) return;
        const members = o.type.filter((t) => t !== 'null');
        const pick = SCALAR_PREFERENCE.find((t) => members.includes(t));
        if (!pick) throw new Error(`type array ${JSON.stringify(o.type)} has no usable member`);
        if (o.type.includes('null')) o.nullable = true;
        o.type = pick;
        n++;
      });
      return n;
    }
  },
  {
    name: 'numeric_exclusive_bounds',
    apply: (doc) => {
      let n = 0;
      walk(doc, (o) => {
        for (const [excl, bound] of [['exclusiveMinimum', 'minimum'], ['exclusiveMaximum', 'maximum']]) {
          if (typeof o[excl] === 'number') { o[bound] = o[excl]; o[excl] = true; n++; }
        }
      });
      return n;
    }
  },
  { name: 'property_names_removed', apply: (doc) => { let n = 0; walk(doc, (o) => { if ('propertyNames' in o) { delete o.propertyNames; n++; } }); return n; } },
  { name: 'schema_dialect_key_removed', apply: (doc) => { let n = 0; walk(doc, (o) => { if (typeof o.$schema === 'string') { delete o.$schema; n++; } }); return n; } },
  { name: 'const_to_enum', apply: (doc) => { let n = 0; walk(doc, (o) => { if ('const' in o && !('enum' in o)) { o.enum = [o.const]; delete o.const; n++; } }); return n; } },
  { name: 'hide_definitions_removed', apply: (doc) => { let n = 0; walk(doc, (o) => { if ('hideDefinitions' in o) { delete o.hideDefinitions; n++; } }); return n; } },
  {
    // swagger-parser 12 rejected the errata-only 3.1.2 by string match; 13
    // accepts it. Kept so a snapshot's declared version does not move on a
    // toolchain bump; the document semantics are unchanged.
    name: 'openapi_3_1_2_to_3_1_1',
    apply: (doc) => { if (doc.openapi === '3.1.2') { doc.openapi = '3.1.1'; return 1; } return 0; }
  }
  // TODO(template): vendor-specific classes, e.g. a required list naming an
  // absent property, a response declared twice under one code, ...
];

const fixCounts = {};
try {
  for (const cls of FIX_CLASSES) fixCounts[cls.name] = cls.apply(spec);
} catch (err) {
  console.error(`Fix class failed, nothing written: ${err.message}`);
  process.exit(1);
}

// Validate before anything else touches disk
try {
  await SwaggerParser.validate(structuredClone(spec));
  console.log('Spec validated OK (@apidevtools/swagger-parser)');
} catch (err) {
  console.error(`Spec validation FAILED, nothing written: ${err.message}`);
  process.exit(1);
}

const pathKeys = Object.keys(spec.paths || {});
const httpVerbs = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];
let opCount = 0;
for (const p of pathKeys) for (const v of httpVerbs) if (spec.paths[p][v]) opCount++;
console.log(`Spec: ${spec.info?.title} - openapi ${spec.openapi || spec.swagger}, stated version ${spec.info?.version}, ${pathKeys.length} paths, ${opCount} operations`);

// ---------------------------------------------------------------------------
// Deterministic redaction of credential-shaped example values (they trip
// GitHub push protection on every artifact that embeds them).
// TODO(template): add vendor-specific patterns seen in the snapshot.
// ---------------------------------------------------------------------------

const REDACTIONS = [
  { name: 'slack_webhook_url_example', re: /https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9\/]+/g, replacement: 'https://hooks.slack.com/services/EXAMPLE' },
  { name: 'github_token_example', re: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, replacement: 'ghp_EXAMPLE' },
  { name: 'aws_access_key_example', re: /\bAKIA[0-9A-Z]{16}\b/g, replacement: 'AKIAEXAMPLEEXAMPLE00' },
  { name: 'bearer_jwt_example', re: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g, replacement: 'eyJEXAMPLE.EXAMPLE.EXAMPLE' }
];
let sanitized = isYaml ? yaml.dump(spec, { lineWidth: -1, noRefs: true }) : JSON.stringify(spec, null, 2) + '\n';
const redactionCounts = {};
for (const r of REDACTIONS) {
  const matches = sanitized.match(r.re);
  if (matches) {
    redactionCounts[r.name] = matches.length;
    sanitized = sanitized.replace(r.re, r.replacement);
  }
}
const sanitizedSha256 = crypto.createHash('sha256').update(sanitized).digest('hex');

// ---------------------------------------------------------------------------
// Pin verification and write
// ---------------------------------------------------------------------------

let pin = { specs: {} };
if (fs.existsSync(pinFile)) pin = JSON.parse(fs.readFileSync(pinFile, 'utf8'));
const pinKey = specFile.replace(/\.(json|ya?ml)$/i, '');
const existing = pin.specs[pinKey];

if (existing && existing.sha256 !== sha256 && !update) {
  console.error(
    `Spec pin verification FAILED, nothing written: upstream content changed ` +
    `(pinned ${existing.sha256.slice(0, 12)}..., fetched ${sha256.slice(0, 12)}...). ` +
    `Re-run with --update (make refresh-spec) to accept the refresh, then diff the snapshots and record the summary in NOTES.md.`
  );
  process.exit(1);
}

const status = !existing ? 'pinned' : existing.sha256 === sha256 ? 'unchanged' : 'updated';
fs.mkdirSync(downloadDir, { recursive: true });
fs.writeFileSync(path.join(downloadDir, specFile), sanitized);
pin.specs[pinKey] = {
  url: specUrl,
  filename: specFile,
  spec_version: spec.info?.version,
  openapi: spec.openapi || spec.swagger,
  paths: pathKeys.length,
  operations: opCount,
  sha256,
  sanitized_sha256: sanitizedSha256,
  fixes: fixCounts,
  redactions: redactionCounts,
  bytes: content.length,
  fetched: new Date().toISOString().slice(0, 10)
};
fs.mkdirSync(path.dirname(pinFile), { recursive: true });
fs.writeFileSync(pinFile, JSON.stringify(pin, null, 2) + '\n');
console.log(`  ${specFile}: ${status} (upstream sha256 ${sha256.slice(0, 12)}..., ${content.length} bytes)`);
const applied = Object.entries(fixCounts).filter(([, n]) => n > 0);
if (applied.length) console.log(`  fix classes applied: ${applied.map(([k, n]) => `${k}=${n}`).join(', ')}`);
for (const [name, count] of Object.entries(redactionCounts)) {
  console.log(`  redacted ${count} ${name} value(s) in the written snapshot (sanitized sha256 ${sanitizedSha256.slice(0, 12)}...)`);
}
