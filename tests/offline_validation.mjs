#!/usr/bin/env node

// Offline validation of the generated provider against the local file
// registry - no network, no server. Runs SHOW SERVICES / SHOW RESOURCES /
// SHOW METHODS and DESCRIBE EXTENDED over representative resources and
// asserts the expected surface: service and resource names, verbs and
// required params, the x-stackQL-envVar behaviour of the scoping variable,
// snake_case aliases, wrapped arrays and objectKey projections, views, the
// flagship binding. Exit 1 on any failure.
//
// TODO(template): fill EXPECTED_SERVICES / EXPECTED_RESOURCES from the
// mapping summary (make mappings prints resources per service) and add the
// representative DESCRIBE / SHOW METHODS checks. The run FAILS while the
// tables are empty so an unfinished suite cannot pass `make all`.
//
// Usage: node tests/offline_validation.mjs
// Binary resolution: $STACKQL, ./stackql(.exe), then PATH.
// Note: `--output json` renders scalars as strings.

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PROVIDER_NAME, SCOPE_PARAM } from '../provider-dev/scripts/lib/spec_helpers.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });

// ---------------------------------------------------------------------------
// Expectations. Exact sorted lists - a regeneration that adds or renames a
// resource must update these deliberately.
// ---------------------------------------------------------------------------

const EXPECTED_SERVICES = [];            // e.g. ['backups', 'keys', 'organizations', 'services']
const EXPECTED_RESOURCES = {};           // e.g. { keys: ['keys'], services: ['services', 'private_endpoints'] }

// The env var behind the scoping server variable (null when the API has no
// scope). With it unset the variable is a required param on every scoped
// method; with it set the param disappears from SHOW METHODS.
const SCOPE_ENV_VAR = null;              // e.g. 'MYPROVIDER_ORG_ID'
const SCOPED_RESOURCE = null;            // e.g. 'services.services' - a resource under the scoped server

// ---------------------------------------------------------------------------

function findBinary() {
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  for (const name of ['stackql', 'stackql.exe']) {
    const local = path.join(repoRoot, name);
    if (fs.existsSync(local)) return local;
  }
  return 'stackql'; // PATH
}
const bin = findBinary();

function runSql(sql, envOverrides = {}) {
  return new Promise((resolve) => {
    const env = { ...process.env, ...envOverrides };
    for (const [k, v] of Object.entries(envOverrides)) if (v === undefined) delete env[k];
    const child = spawn(bin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
    let stdout = '', stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      let rows = [];
      try { rows = JSON.parse(stdout) ?? []; } catch { rows = []; }
      resolve({ code, rows, stdout, stderr });
    });
    child.on('error', (err) => resolve({ code: -1, rows: [], stdout: '', stderr: String(err) }));
  });
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : `  [${String(note).slice(0, 160)}]`}`);
}
const names = (rows, key = 'name') => rows.map((x) => x[key]).sort();
const methodsByName = (rows) => Object.fromEntries(rows.map((m) => [m.MethodName, m]));

console.log(`stackql: ${bin}`);
console.log(`registry: ${regPath}`);

// --- services
let r = await runSql(`SHOW SERVICES IN ${PROVIDER_NAME}`);
if (EXPECTED_SERVICES.length === 0) {
  check('EXPECTED_SERVICES is populated (TODO)', false, `SHOW SERVICES returned: ${JSON.stringify(names(r.rows))}`);
} else {
  check(`SHOW SERVICES (${EXPECTED_SERVICES.length})`, JSON.stringify(names(r.rows)) === JSON.stringify([...EXPECTED_SERVICES].sort()), r.stderr || JSON.stringify(names(r.rows)));
}

// --- resources per service
for (const [svc, expected] of Object.entries(EXPECTED_RESOURCES)) {
  r = await runSql(`SHOW RESOURCES IN ${PROVIDER_NAME}.${svc}`);
  check(`SHOW RESOURCES IN ${PROVIDER_NAME}.${svc} (${expected.length})`, JSON.stringify(names(r.rows)) === JSON.stringify([...expected].sort()), r.stderr || JSON.stringify(names(r.rows)));
}

// --- scoping variable behaviour (x-stackQL-envVar)
if (SCOPE_ENV_VAR && SCOPED_RESOURCE && SCOPE_PARAM) {
  r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.${SCOPED_RESOURCE}`, { [SCOPE_ENV_VAR]: undefined });
  const unset = methodsByName(r.rows);
  check(`${SCOPE_PARAM} is required when ${SCOPE_ENV_VAR} is unset`, Object.values(unset).some((m) => String(m.RequiredParams || '').includes(SCOPE_PARAM)), r.stderr || JSON.stringify(unset));
  r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.${SCOPED_RESOURCE}`, { [SCOPE_ENV_VAR]: 'offline-validation' });
  const set = methodsByName(r.rows);
  check(`${SCOPE_PARAM} is optional when ${SCOPE_ENV_VAR} is set (x-stackQL-envVar)`, r.rows.length > 0 && !Object.values(set).some((m) => String(m.RequiredParams || '').includes(SCOPE_PARAM)), r.stderr || JSON.stringify(set));
}

// --- representative resources. TODO(template): one block per archetype:
//   - verbs and required params on a full-lifecycle resource
//   - DESCRIBE EXTENDED: snake aliases present, camel names absent
//   - a wide flat config resource (column count)
//   - a wrapped bare-array list (the wrapper key is NOT a column)
//   - an objectKey projection ($.result.costs rows, not the envelope)
//   - each view: SELECT * FROM <provider>.<service>.<view> parses
//   - the flagship binding exists
//
// r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.keys.keys`);
// const km = methodsByName(r.rows);
// check('keys.keys verbs', km.list?.SQLVerb === 'SELECT' && km.create?.SQLVerb === 'INSERT' && km.update?.SQLVerb === 'UPDATE' && km.delete?.SQLVerb === 'DELETE', JSON.stringify(km));
// r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.keys.keys`);
// const cols = names(r.rows);
// check('keys.keys snake_case columns', ['id', 'name', 'created_at'].every((c) => cols.includes(c)) && !cols.includes('createdAt'), JSON.stringify(cols));

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
