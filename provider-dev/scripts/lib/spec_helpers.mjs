// Shared helpers and the single source of provider constants for every
// pipeline script (bin/fetch-spec.sh, bin/split.mjs, build_inventory.mjs,
// map_operations.mjs, pre_normalize.mjs, post_process.mjs, graphql_merge.mjs)
// and the test harnesses. Single-sourced so the inventory and the
// authoritative mapping can never disagree on a classification.
//
// TODO(template): fill in the constants block, then extend the rule tables
// (SKIP_RULES, ACTION_SEGMENTS, POST_EXEC_SEGMENTS, ENVELOPE_KEY_PREFERENCE)
// as the inventory reveals what the API needs. Everything below the
// constants is generic and normally needs no change.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

// ---------------------------------------------------------------------------
// Provider constants
// ---------------------------------------------------------------------------

export const PROVIDER_NAME = 'myprovider';
export const PROVIDER_TITLE = 'My Provider';

// The bare API base (no trailing slash). Used for path-level server overrides
// of root paths and by the integration runner to redirect to the mock.
export const API_BASE_URL = 'https://api.example.com';

// Where the vendor publishes the spec and the snapshot filename under
// provider-dev/downloaded/ (.json or .yaml - both are handled).
export const SPEC_URL = 'https://api.example.com/openapi.json';
export const SPEC_FILE = `${PROVIDER_NAME}-v1.json`;

// A static path prefix stripped before resource-name derivation (the API
// version segment, typically). Set to '' if paths carry no such prefix.
export const PATH_VERSION_PREFIX = '/v1';

// Scoping: when most paths share one parent (/v1/organizations/{orgId}/...,
// /v1/projects/{ref}/...), set SCOPE_PREFIX to that prefix (with the vendor's
// path parameter name), list the paths outside it that must keep their full
// key in ROOT_PATHS, and author the server template with the x-stackQL-envVar
// variable in provider-dev/config/servers.json. bin/split.mjs rebases the
// paths; post_process.mjs pins ROOT_PATHS back to API_BASE_URL. Leave
// SCOPE_PREFIX null for a fixed-host API.
export const SCOPE_PREFIX = null;              // e.g. '/v1/organizations/{organizationId}'
export const ROOT_PATHS = [];                  // e.g. ['/v1/organizations', '/v1/organizations/{organizationId}']
export const SCOPE_PARAM = SCOPE_PREFIX ? (SCOPE_PREFIX.match(/\{([^}]+)\}/) || [])[1] : null;

// Wire casing of parameters and body properties. When 'camel' (or 'pascal',
// 'kebab'), post_process sets request.nativeCasing on every method and the
// provider config carries snake_case_aliases: true so the user surface is
// snake_case. Leave null when the wire is already snake_case.
export const WIRE_CASING = null;               // null | 'camel' | 'pascal' | 'kebab'

// Envelope keys, in order of preference, that hold the row array of a list
// response ({"result": [...]}, {"data": [...]}, {"items": [...]}). The
// inventory reports the candidates per operation; map_operations picks the
// first preferred key present, else the only array property.
export const ENVELOPE_KEY_PREFERENCE = ['result', 'data', 'items', 'results', 'records', 'value'];

export const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
export const REPO_ROOT = repoRoot;
export const PROVIDER_DIR = path.join(repoRoot, 'provider-dev', 'openapi', 'src', PROVIDER_NAME, 'v00.00.00000');
export const SERVICES_DIR = path.join(PROVIDER_DIR, 'services');
const serviceNamesPath = path.join(repoRoot, 'provider-dev', 'config', 'service_names.json');

// ---------------------------------------------------------------------------
// Generic utilities
// ---------------------------------------------------------------------------

export function camelToSnake(s) {
  return String(s)
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/[-. ]/g, '_')
    .toLowerCase();
}

export function pathParams(pathKey) {
  return (pathKey.match(/\{[^}]+\}/g) || []).map((s) => s.slice(1, -1));
}

export function normalizePath(pathKey) {
  return pathKey.replace(/\{[^}]+\}/g, '{}');
}

export function loadSpec(file) {
  const text = fs.readFileSync(file, 'utf8');
  return /\.ya?ml$/i.test(file) ? yaml.load(text) : JSON.parse(text);
}

export function dumpYaml(doc) {
  return yaml.dump(doc, { lineWidth: -1, noRefs: true });
}

// Resolves local $refs against the containing spec document
export function makeResolver(spec) {
  return function resolve(schema, depth = 0) {
    if (!schema || depth > 10) return schema;
    if (schema.$ref) {
      const parts = schema.$ref.replace(/^#\//, '').split('/').map((p) => p.replace(/~1/g, '/').replace(/~0/g, '~'));
      let node = spec;
      for (const p of parts) node = node?.[p];
      return resolve(node, depth + 1);
    }
    return schema;
  };
}

// Service resolution from the ordered path rules in service_names.json.
// Every operation path must match a rule; a miss is an error the caller
// must surface (fail without writing). Rules with "excluded": true classify
// the path but the service is never emitted.
export function makeServiceResolver() {
  const config = JSON.parse(fs.readFileSync(serviceNamesPath, 'utf8'));
  const rules = (config.rules || []).map((r) => ({ re: new RegExp(r.pathRegex), service: r.service, excluded: !!r.excluded }));
  const excludedServices = new Set(rules.filter((r) => r.excluded).map((r) => r.service));
  const resolveService = (pathKey) => {
    for (const rule of rules) if (rule.re.test(pathKey)) return rule.service;
    return null;
  };
  return { resolveService, excludedServices, rules };
}

// ---------------------------------------------------------------------------
// Response and request classification
// ---------------------------------------------------------------------------

export function success2xx(op) {
  const codes = Object.keys(op.responses || {}).filter((c) => /^2/.test(c)).sort();
  for (const code of codes) {
    const content = op.responses[code].content || {};
    const jsonType = Object.keys(content).find((m) => m.includes('json'));
    if (jsonType && content[jsonType].schema) return { code, schema: content[jsonType].schema, mediaTypes: Object.keys(content) };
    if (Object.keys(content).length > 0) return { code, schema: null, mediaTypes: Object.keys(content) };
  }
  return { code: codes[0] || null, schema: null, mediaTypes: [] };
}

// Response shape per the inventory contract:
//   bare-array    - the 2xx body is a JSON array
//   object        - a JSON object; arrayProps lists its top-level array
//                   properties (envelope candidates for objectKey)
//   scalar        - a JSON string/number/boolean
//   untyped-json  - application/json with an empty schema
//   non-json      - text/plain, octet-stream, PDF, ...
//   none          - no 2xx content
export function classifyResponse(op, resolve) {
  const { code, schema, mediaTypes } = success2xx(op);
  if (!schema) {
    if (mediaTypes.some((m) => m.includes('json'))) return { shape: 'untyped-json', arrayProps: [], mediaTypes, code };
    if (mediaTypes.length > 0) return { shape: 'non-json', arrayProps: [], mediaTypes, code };
    return { shape: 'none', arrayProps: [], mediaTypes, code };
  }
  const s = resolve(schema) || {};
  if (s.type === 'array' || (s.items && !s.properties)) return { shape: 'bare-array', arrayProps: [], mediaTypes, code };
  if (['string', 'number', 'integer', 'boolean'].includes(s.type)) return { shape: 'scalar', arrayProps: [], mediaTypes, code };
  const props = s.properties || (s.allOf || []).reduce((acc, part) => ({ ...acc, ...((resolve(part) || {}).properties || {}) }), {});
  if (Object.keys(props).length === 0 && !s.allOf) return { shape: 'untyped-json', arrayProps: [], mediaTypes, code };
  const isArray = (p) => { const r = resolve(p) || {}; return r.type === 'array' || (!!r.items && !r.properties); };
  const arrayProps = Object.entries(props).filter(([, p]) => isArray(p)).map(([name]) => name);
  // nested envelopes: {result: {items: [...]}} / {data: {costs: [...]}} -
  // the array properties of each preferred envelope key that holds an object
  const nestedArrayProps = {};
  for (const key of ENVELOPE_KEY_PREFERENCE) {
    const inner = props[key] ? resolve(props[key]) : null;
    if (inner?.properties) {
      const arrays = Object.entries(inner.properties).filter(([, p]) => isArray(p)).map(([name]) => name);
      if (arrays.length) nestedArrayProps[key] = arrays;
    }
  }
  return { shape: 'object', arrayProps, nestedArrayProps, mediaTypes, code };
}

// The objectKey a list read should project: the first preferred envelope key
// present, else the only top-level array property, else a nested envelope
// ({result: {items: [...]}} -> $.result.items), else blank (bare arrays are
// wrapped by normalize + generate and carry no objectKey of their own).
export function proposeObjectKey(classification) {
  if (classification.shape !== 'object') return '';
  const { arrayProps, nestedArrayProps = {} } = classification;
  const preferred = ENVELOPE_KEY_PREFERENCE.find((k) => arrayProps.includes(k));
  if (preferred) return `$.${preferred}`;
  if (arrayProps.length === 1) return `$.${arrayProps[0]}`;
  for (const key of ENVELOPE_KEY_PREFERENCE) {
    const arrays = nestedArrayProps[key];
    if (!arrays) continue;
    const inner = ENVELOPE_KEY_PREFERENCE.find((k) => arrays.includes(k)) || (arrays.length === 1 ? arrays[0] : null);
    if (inner) return `$.${key}.${inner}`;
  }
  return '';
}

// True when the response carries a row array somewhere a list read can project.
export function hasRowArray(classification) {
  return classification.shape === 'bare-array' || proposeObjectKey(classification) !== '';
}

export function classifyBody(op, resolve) {
  if (!op.requestBody) return { present: false, mediaTypes: [], bareArray: false };
  const content = (resolve(op.requestBody) || {}).content || {};
  const mediaTypes = Object.keys(content);
  const jsonType = mediaTypes.find((m) => m.includes('json'));
  const schema = jsonType ? resolve(content[jsonType].schema) : null;
  const bareArray = !!schema && (schema.type === 'array' || (!!schema.items && !schema.properties));
  return { present: true, mediaTypes, bareArray };
}

// PUT is not REPLACE until proven live; PATCH is presumed partial.
export function updateSemantics(verb) {
  if (verb === 'patch') return 'patch-partial-presumed';
  if (verb === 'put') return 'put-replace-unverified';
  return '';
}

// Vendor labels carried into the docs, never hidden.
export function vendorLabels(op) {
  const text = `${op.summary || ''} ${op.description || ''}`;
  const labels = [];
  if (/\[beta\]|\bbeta\b/i.test(text)) labels.push('beta');
  if (/\[alpha\]|\balpha\b/i.test(text)) labels.push('alpha');
  if (/\bpreview\b/i.test(text)) labels.push('preview');
  if (op.deprecated) labels.push('deprecated');
  return labels;
}

// Pagination-looking query parameters present on the operation: a
// per-endpoint confirmation for the inventory, never an assumption.
const PAGINATION_PARAM_NAMES = ['limit', 'offset', 'page', 'pageSize', 'page_size', 'per_page', 'perPage', 'cursor', 'next', 'nextToken', 'next_token', 'nextPageToken', 'page_token', 'pageToken', 'maxResults', 'max_results', 'startAt', 'start', 'marker', 'after', 'before', 'skip', 'top', '$top', '$skip'];
export function paginationParams(op, pathItem, resolve) {
  return [...(pathItem?.parameters || []), ...(op.parameters || [])]
    .map((p) => resolve(p))
    .filter((p) => p && p.in === 'query')
    .map((p) => p.name)
    .filter((n) => PAGINATION_PARAM_NAMES.includes(n));
}

// Which path parameter addresses the operation (org, project, account, ...).
// With SCOPE_PREFIX set, operations under it are scoped by SCOPE_PARAM.
export function scopeOf(pathKey) {
  if (SCOPE_PREFIX && pathKey.startsWith(SCOPE_PREFIX)) return SCOPE_PARAM;
  const params = pathParams(pathKey);
  return params.length ? params[0] : 'none';
}

// ---------------------------------------------------------------------------
// Skip rules - operations that stay visible in the CSV artifacts but are not
// mapped to StackQL methods. Standard reason codes (see the skill's
// inventory-and-mapping.md); add provider-specific rules with their own code.
// ---------------------------------------------------------------------------

export const SKIP_RULES = [
  { code: 'multipart_upload', test: (p, op, body) => body.present && body.mediaTypes.some((m) => /multipart|octet-stream/.test(m)) && !body.mediaTypes.some((m) => m.includes('json')) },
  { code: 'non_json_text_response', test: (p, op, body, resp) => resp.shape === 'non-json' },
  { code: 'untyped_json_response', test: (p, op, body, resp) => resp.shape === 'untyped-json' && (op.method === 'get') },
  { code: 'bare_array_bulk_body', test: (p, op, body) => body.bareArray && /bulk|batch/i.test(p) },
  { code: 'head_count_endpoint', test: (p, op) => op.method === 'head' },
  { code: 'oauth_user_agent_flow', test: (p) => /\/oauth\/(authorize|callback)/i.test(p) },
  { code: 'websocket_or_sse_stream', test: (p, op, body, resp) => resp.mediaTypes.some((m) => /event-stream/.test(m)) || /\/(ws|websocket|stream)$/i.test(p) }
  // TODO(template): provider-specific rules, e.g.
  // { code: 'prometheus_text_metrics', test: (p) => /\/prometheus$/.test(p) },
  // { code: 'deprecated_superseded', test: (p, op) => op.deprecated && /\/scaling$/.test(p) }
];

export function skipReason(pathKey, op, resolve, verb) {
  const body = classifyBody(op, resolve);
  const resp = classifyResponse(op, resolve);
  const opWithVerb = { ...op, method: verb };
  for (const rule of SKIP_RULES) {
    if (rule.test(pathKey, opWithVerb, body, resp)) return rule.code;
  }
  return '';
}

// ---------------------------------------------------------------------------
// Resource, method and verb derivation, shared by build_inventory.mjs (draft
// columns) and map_operations.mjs (authoritative mapping, plus RESOURCE_RULES
// / METHOD_RULES overrides there)
// ---------------------------------------------------------------------------

// PATCH/PUT on these trailing static segments is a state/credential command
// on the parent resource (EXEC update_<segment>), not an entity update
export const ACTION_SEGMENTS = new Set(['state', 'status', 'password', 'enable', 'disable']);
// POST on these trailing static segments is an action on the parent
// resource (EXEC <segment>), not a create
export const POST_EXEC_SEGMENTS = new Set([
  'start', 'stop', 'restart', 'pause', 'resume', 'suspend', 'activate', 'deactivate', 'apply', 'merge', 'restore',
  'retry', 'cancel', 'run', 'trigger', 'validate', 'verify', 'rotate', 'refresh', 'sync', 'clone', 'copy', 'move',
  'archive', 'unarchive', 'lock', 'unlock', 'approve', 'reject', 'publish', 'unpublish', 'reset', 'invalidate', 'test'
]);
// POST on these trailing segments is really a read (no side effects) and maps
// as SELECT list; the objectKey for a POST read is set in post_process
export const POST_READ_SEGMENTS = new Set(['search', 'query', 'retrieve', 'list', 'lookup']);

// Strips the version prefix, then iteratively strips scoping pairs (a static
// segment followed by a path parameter) while more segments follow:
// organizations/{orgId}/services/{serviceId}/backups -> backups. The last
// stripped parent is kept so action segments can resolve to it.
export function scopedSegments(pathKey) {
  let p = pathKey;
  if (SCOPE_PREFIX && p.startsWith(SCOPE_PREFIX)) p = p.slice(SCOPE_PREFIX.length);
  if (PATH_VERSION_PREFIX && p.startsWith(PATH_VERSION_PREFIX + '/')) p = p.slice(PATH_VERSION_PREFIX.length);
  let segs = p.split('/').filter(Boolean);
  let parent = null;
  while (segs.length > 2 && !segs[0].startsWith('{') && segs[1].startsWith('{')) {
    parent = segs[0];
    segs = segs.slice(2);
  }
  return { segs, parent };
}

export function deriveResource(pathKey, verb, service, pluralizeFn) {
  const { segs, parent } = scopedSegments(pathKey);
  let statics = segs.filter((s) => !s.startsWith('{'));
  const last = statics[statics.length - 1];
  if (verb !== 'get' && ACTION_SEGMENTS.has(last)) statics = statics.slice(0, -1);
  else if (verb === 'post' && (POST_EXEC_SEGMENTS.has(last) || POST_READ_SEGMENTS.has(last))) statics = statics.slice(0, -1);
  if (statics.length === 0 && parent) statics = [parent];
  if (statics.length === 0) statics = [service];
  // drop a leading segment that just restates the service name
  if (statics.length > 1 && camelToSnake(statics[0]) === service) statics = statics.slice(1);
  const snake = statics.map(camelToSnake);
  const lastSnake = snake[snake.length - 1];
  return [...snake.slice(0, -1), pluralizeFn(lastSnake)].join('_');
}

export function deriveVerb(verb, pathKey) {
  const { segs } = scopedSegments(pathKey);
  const statics = segs.filter((s) => !s.startsWith('{'));
  const last = statics[statics.length - 1];
  if (verb === 'get') return 'select';
  if (verb === 'delete') return 'delete';
  if (verb === 'patch' || verb === 'put') return ACTION_SEGMENTS.has(last) ? 'exec' : 'update';
  if (POST_EXEC_SEGMENTS.has(last) || ACTION_SEGMENTS.has(last)) return 'exec';
  if (POST_READ_SEGMENTS.has(last)) return 'select';
  return 'insert';
}

export function deriveMethod(verb, pathKey) {
  const { segs } = scopedSegments(pathKey);
  const statics = segs.filter((s) => !s.startsWith('{'));
  const last = statics[statics.length - 1];
  const lastSegIsParam = /\}$/.test(pathKey);
  if (verb === 'get') return lastSegIsParam ? 'get' : 'list';
  if (verb === 'delete') return 'delete';
  if (verb === 'patch' || verb === 'put') return ACTION_SEGMENTS.has(last) ? `update_${camelToSnake(last)}` : 'update';
  if (POST_EXEC_SEGMENTS.has(last) || ACTION_SEGMENTS.has(last)) return camelToSnake(last);
  if (POST_READ_SEGMENTS.has(last)) return 'list';
  return 'create';
}

// ---------------------------------------------------------------------------
// Scoped server rebase (bin/split.mjs; post_process.mjs pins ROOT_PATHS back)
// ---------------------------------------------------------------------------

// Rewrites a split service document in place: sets the scoped servers,
// strips SCOPE_PREFIX from every non-root path and drops the SCOPE_PARAM
// path parameter from those operations. Returns counts for the split summary.
export function rebaseScopedPaths(doc, servers) {
  if (!SCOPE_PREFIX) throw new Error('rebaseScopedPaths called with SCOPE_PREFIX unset');
  const newPaths = {};
  let rebased = 0, kept = 0;
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    if (ROOT_PATHS.includes(pathKey)) {
      newPaths[pathKey] = pathItem;
      kept++;
      continue;
    }
    if (!pathKey.startsWith(SCOPE_PREFIX + '/')) {
      throw new Error(`path ${pathKey} is neither a ROOT_PATHS entry nor under ${SCOPE_PREFIX} - add it to ROOT_PATHS or fix SCOPE_PREFIX`);
    }
    const shortPath = pathKey.slice(SCOPE_PREFIX.length);
    if (shortPath in newPaths) throw new Error(`rebase collision: ${pathKey} -> ${shortPath}`);
    const dropScopeParam = (params) => (params || []).filter((p) => !(p && p.in === 'path' && p.name === SCOPE_PARAM));
    if (pathItem.parameters) pathItem.parameters = dropScopeParam(pathItem.parameters);
    for (const verb of HTTP_VERBS) {
      if (pathItem[verb] && pathItem[verb].parameters) pathItem[verb].parameters = dropScopeParam(pathItem[verb].parameters);
    }
    newPaths[shortPath] = pathItem;
    rebased++;
  }
  doc.paths = newPaths;
  doc.servers = JSON.parse(JSON.stringify(servers));
  return { rebased, kept };
}

// ---------------------------------------------------------------------------
// Generated-provider helpers (post_process.mjs, tests)
// ---------------------------------------------------------------------------

export function listServiceFiles(dir = SERVICES_DIR) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.yaml')).sort();
}

// Iterate every method of every resource in a generated service document:
// fn(method, {resource, resourceName, methodName, verb, pathKey, operation})
export function forEachMethod(doc, fn) {
  const resources = doc.components?.['x-stackQL-resources'] || {};
  for (const [resourceName, resource] of Object.entries(resources)) {
    for (const [methodName, method] of Object.entries(resource.methods || {})) {
      const ref = method.operation?.$ref || '';
      const m = ref.match(/^#\/paths\/(.+)\/(get|post|put|patch|delete)$/);
      const pathKey = m ? m[1].replace(/~1/g, '/').replace(/~0/g, '~') : null;
      const verb = m ? m[2] : null;
      const operation = pathKey ? doc.paths?.[pathKey]?.[verb] : null;
      fn(method, { resource, resourceName, methodName, verb, pathKey, operation });
    }
  }
}

// The SQL verb a method is bound to (EXEC when absent from every sqlVerbs list)
export function sqlVerbOf(resource, resourceName, methodName) {
  const ref = `#/components/x-stackQL-resources/${resourceName}/methods/${methodName}`;
  for (const [verb, list] of Object.entries(resource.sqlVerbs || {})) {
    if ((list || []).some((x) => x.$ref === ref)) return verb;
  }
  return 'exec';
}
