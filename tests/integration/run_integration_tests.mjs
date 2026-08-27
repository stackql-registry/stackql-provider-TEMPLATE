#!/usr/bin/env node

// Integration tests: run the generated provider (local file registry)
// against the mock API and assert row-level results and wire calls for each
// operation archetype present in the provider:
//   - list wrap + single read (envelope unwrapping / bare-array wrap)
//   - auth header sent; wrong token -> 401 surfaced
//   - scoping: env var resolved, WHERE override beats it, unset fails
//   - root-path server overrides
//   - INSERT / UPDATE / DELETE lifecycles with their exact wire bodies
//   - every EXEC action and its body
//   - every transform (bare-array bodies, non-JSON responses)
//   - snake_case keys resolving to camelCase wire names
//   - pagination over a two-page fixture
//   - query-param pushdown (WHERE -> ?param=)
//   - objectKey projections, views, the flagship
//   - a 404 error envelope surfaced
//
// The vendor server template is https-only and cannot address the mock, so
// harness.mjs materialises a TEST COPY of provider-dev/openapi in
// tests/integration/.registry-tmp (gitignored, recreated each run) with the
// server URLs rewritten to the mock (server variables and x-stackQL-envVar
// preserved), and spawns stackql asynchronously (the mock runs on this
// process's event loop, so a synchronous wait deadlocks).
//
// TODO(template): replace the example checks with the provider's archetypes.
// The run FAILS while no provider-specific check exists.
//
// Requires a stackql binary: $STACKQL, ./stackql, or `stackql` on PATH.
// Usage: node tests/integration/run_integration_tests.mjs [--verbose]

import { startMockServer, EXPECTED_TOKEN, ORG_ID, OTHER_ORG_ID, ITEM_ID } from './mock_myprovider_server.mjs';
import { buildTestRegistry, registryArg, makeRunSql, findStackql } from './harness.mjs';
import { PROVIDER_NAME } from '../../provider-dev/scripts/lib/spec_helpers.mjs';

const verbose = process.argv.includes('--verbose');
const t0 = Date.now();

// The environment the provider reads. TODO(template): the credential
// variable(s) from provider_config.json and the scoping variable (if any).
const PROVIDER_ENV = { MYPROVIDER_API_TOKEN: EXPECTED_TOKEN, MYPROVIDER_ORG_ID: ORG_ID };

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${!cond && note ? `  [${String(note).slice(0, 220)}]` : ''}`);
}

const { server, port, log, state } = await startMockServer();
const registry = registryArg(buildTestRegistry(port));
const runSql = makeRunSql(registry, PROVIDER_ENV, { verbose });
console.log(`mock API on localhost:${port}, stackql: ${findStackql()}`);

// wire calls since `mark` matching method + path
const calls = (mark, method, p) => log.slice(mark).filter((e) => e.method === method && e.path === p);
let providerChecks = 0;
const pcheck = (...a) => { providerChecks++; check(...a); };

try {
  // --- meta sanity (generic)
  let r = await runSql(`SHOW SERVICES IN ${PROVIDER_NAME}`);
  check('show services returns at least one service', r.rows && r.rows.length > 0, r.err || `got ${r.rows?.length}`);

  // TODO(template): the provider's checks. The block below is an EXAMPLE
  // against the mock's /v1/items fixture - replace it. Use pcheck() for
  // provider-specific assertions so the run fails while none exist.
  //
  // let mark = log.length;
  // r = await runSql(`SELECT id, name FROM ${PROVIDER_NAME}.items.items`);
  // pcheck('items list (1 seed row)', r.rows && r.rows.length === 1, r.err || `got ${r.rows?.length}`);
  // const listCalls = calls(mark, 'GET', '/v1/items');
  // pcheck('bearer header sent', listCalls.length === 1 && /^bearer\s+mock-token$/i.test(listCalls[0].authorization), JSON.stringify(listCalls.map((c) => c.authorization)));
  // r = await runSql(`SELECT id FROM ${PROVIDER_NAME}.items.items`, { MYPROVIDER_API_TOKEN: 'wrong' });
  // pcheck('wrong token -> 401 surfaced', r.err && /401/.test(r.err), r.err || 'no error');
  //
  // // scoping (delete if the API has no scope variable)
  // mark = log.length;
  // r = await runSql(`SELECT id FROM ${PROVIDER_NAME}.items.items WHERE organization_id = '${OTHER_ORG_ID}'`);
  // pcheck('WHERE organization_id beats MYPROVIDER_ORG_ID', calls(mark, 'GET', `/v1/organizations/${OTHER_ORG_ID}/items`).length === 1, JSON.stringify(log.slice(mark).map((e) => e.path)));
  // r = await runSql(`SELECT id FROM ${PROVIDER_NAME}.items.items`, { MYPROVIDER_ORG_ID: undefined });
  // pcheck('unset scope env and no WHERE -> cannot find any viable servers', r.err && /viable servers|organization_id/i.test(r.err), r.err || 'no error');
  //
  // // lifecycle with exact wire bodies
  // mark = log.length;
  // r = await runSql(`INSERT INTO ${PROVIDER_NAME}.items.items (name, tags) SELECT 'stackql-smoke-it', '["a"]'`);
  // pcheck('item INSERT', !r.err, r.err);
  // const post = calls(mark, 'POST', '/v1/items');
  // pcheck('INSERT wire body {name, tags[]}', post.length === 1 && post[0].body?.name === 'stackql-smoke-it' && Array.isArray(post[0].body?.tags), JSON.stringify(post.map((c) => c.body)));
  // const item = [...state.items.values()].find((i) => i.name === 'stackql-smoke-it');
  // r = await runSql(`UPDATE ${PROVIDER_NAME}.items.items SET name = 'renamed' WHERE item_id = '${item.id}'`);
  // pcheck('item UPDATE (snake key -> wire)', !r.err && calls(mark, 'PATCH', `/v1/items/${item.id}`).length === 1, r.err);
  // r = await runSql(`EXEC ${PROVIDER_NAME}.items.items.restart @item_id = '${item.id}'`);
  // pcheck('item EXEC restart', !r.err && state.items.get(item.id)?.state === 'restarting', r.err);
  // r = await runSql(`DELETE FROM ${PROVIDER_NAME}.items.items WHERE item_id = '${item.id}'`);
  // pcheck('item DELETE (204)', !r.err && !state.items.has(item.id), r.err);
  //
  // // negative path
  // r = await runSql(`SELECT name FROM ${PROVIDER_NAME}.items.items WHERE item_id = 'does-not-exist'`);
  // pcheck('404 error envelope surfaced', r.err && /404/.test(r.err), r.err || 'no error');

  if (providerChecks === 0) check('provider-specific integration checks exist (TODO)', false, 'add pcheck() assertions for every archetype in the provider');
  void ITEM_ID; void state; void OTHER_ORG_ID; void pcheck;
} finally {
  server.close();
}

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (failed.length) {
  console.log('failed:');
  for (const f of failed) console.log(`  - ${f.name}${f.note ? `: ${String(f.note).slice(0, 300)}` : ''}`);
  process.exit(1);
}
