#!/usr/bin/env node

// Mock My Provider API for integration-testing the generated provider without
// an account. Serves canned JSON in the exact wire shapes the real API
// produces (capture from a dev account and redact): bare arrays, envelopes,
// empty 2xx, the vendor's error body. Mutable in-memory stores make the
// write lifecycles round-trip. Every request is appended to `log` (method,
// path, query, headers, body) so the runner can assert wire calls.
//
// Every request must carry the credential the provider is configured with
// (EXPECTED_TOKEN as a bearer token by default) or it is rejected 401 with
// the real error envelope - this proves the auth wiring end to end.
//
// The live API's rate-limit headers are echoed so tests can see the contract
// shape. TODO(template): replace the fixtures and routes with the provider's;
// keep the plumbing.
//
// Exports startMockServer() for the test runner; also runnable standalone:
//   node tests/integration/mock_myprovider_server.mjs [port]

import http from 'http';
import { URL } from 'url';

export const EXPECTED_TOKEN = 'mock-token';
// Scoping ids: ORG_ID is what MYPROVIDER_ORG_ID resolves to in the tests,
// OTHER_ORG_ID proves a WHERE value beats the environment. Delete if the API
// has no scoping variable.
export const ORG_ID = '11111111-1111-4111-8111-111111111111';
export const OTHER_ORG_ID = '22222222-2222-4222-8222-222222222222';
export const ITEM_ID = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';

const RATE_HEADERS = {
  'X-RateLimit-Limit': '100',
  'X-RateLimit-Remaining': '99'
};

let idCounter = 0;
export function newId(prefix = 'id') {
  idCounter++;
  return `${prefix}-${String(idCounter).padStart(6, '0')}`;
}

// ---------------------------------------------------------------------------
// Fixtures (redacted captures from a dev account). TODO(template)
// ---------------------------------------------------------------------------

function itemObj(id, name, extra = {}) {
  return { id, name, state: 'active', createdAt: '2026-01-01T00:00:00Z', tags: [], ...extra };
}

function makeState() {
  return {
    items: new Map([[ITEM_ID, itemObj(ITEM_ID, 'seed-item')]]),
    authFailures: 0
  };
}

// ---------------------------------------------------------------------------
// HTTP plumbing
// ---------------------------------------------------------------------------

function send(res, code, body) {
  res.writeHead(code, { 'Content-Type': 'application/json', ...RATE_HEADERS });
  res.end(body === undefined ? '' : JSON.stringify(body));
}
// TODO(template): match the vendor's envelope. Examples:
//   bare array          -> send(res, 200, [...])
//   {result: ...}       -> send(res, 200, { result, requestId, status: 200 })
//   {data: [...], next} -> send(res, 200, { data, cursor })
function ok(res, body) { send(res, 200, body); }
function created(res, body) { send(res, 201, body); }
function noContent(res) { res.writeHead(204, RATE_HEADERS); res.end(); }
function fail(res, code, message) { send(res, code, { error: { code, message } }); }

function readBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => { data += c; });
    req.on('end', () => {
      if (!data) return resolve(null);
      try { resolve(JSON.parse(data)); } catch { resolve({ _raw: data }); }
    });
  });
}

export function startMockServer(port = 0) {
  const state = makeState();
  const log = [];
  // TODO(template): match the provider's auth type. Bearer shown; for basic
  // compare base64(user:pass) (scheme token case-insensitively - any-sdk
  // sends `BASIC`), for api_key compare the named header / query param.
  const authOk = (h) => {
    const m = /^bearer\s+(\S+)$/i.exec(h || '');
    return !!m && m[1] === EXPECTED_TOKEN;
  };

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const body = await readBody(req);
    const entry = {
      method: req.method, path: url.pathname, query: Object.fromEntries(url.searchParams),
      authorization: req.headers['authorization'] || '', contentType: req.headers['content-type'] || '',
      headers: req.headers, body
    };
    log.push(entry);

    if (!authOk(req.headers['authorization'])) {
      state.authFailures++;
      return fail(res, 401, req.headers['authorization'] ? 'Invalid credentials' : 'No Authorization header provided');
    }

    const p = url.pathname;
    const m = req.method;

    // TODO(template): routes in the real path shapes. A scoped API matches
    // the scope prefix first and 404s unknown scope ids:
    //   const orgMatch = p.match(/^\/v1\/organizations\/([^/]+)(\/.*)?$/);
    //   if (orgMatch && orgMatch[1] !== ORG_ID && orgMatch[1] !== OTHER_ORG_ID) return fail(res, 404, 'Organization not found');

    // --- example collection with a full lifecycle
    if (p === '/v1/items') {
      if (m === 'GET') {
        // pagination fixture: two pages when the API pages
        return ok(res, [...state.items.values()]);
      }
      if (m === 'POST') {
        const id = newId('item');
        const item = itemObj(id, body?.name || 'unnamed', { tags: body?.tags || [] });
        state.items.set(id, item);
        return created(res, item);
      }
    }
    let mm = p.match(/^\/v1\/items\/([^/]+)$/);
    if (mm) {
      const item = state.items.get(mm[1]);
      if (!item) return fail(res, 404, `Item ${mm[1]} not found`);
      if (m === 'GET') return ok(res, item);
      if (m === 'PATCH' || m === 'PUT') { Object.assign(item, body || {}); return ok(res, item); }
      if (m === 'DELETE') { state.items.delete(mm[1]); return noContent(res); }
    }
    mm = p.match(/^\/v1\/items\/([^/]+)\/restart$/);
    if (mm && m === 'POST') {
      const item = state.items.get(mm[1]);
      if (!item) return fail(res, 404, 'Item not found');
      item.state = 'restarting';
      return ok(res, item);
    }

    return fail(res, 404, `no route for ${m} ${p}`);
  });

  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => {
      resolve({ server, port: server.address().port, log, state });
    });
  });
}

if (process.argv[1] && /mock_[a-z0-9_]+_server\.mjs$/.test(process.argv[1])) {
  const p = Number(process.argv[2] || 0);
  const { port } = await startMockServer(p);
  console.log(`mock API listening on http://127.0.0.1:${port}`);
  console.log(`expects: Authorization: Bearer ${EXPECTED_TOKEN}`);
}
