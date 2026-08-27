#!/usr/bin/env node

// Diff two OpenAPI documents (JSON or YAML) at the level that matters for a
// provider refresh: operations added / removed / renamed (operationId),
// schemas added / removed / changed, and a scan for the JSON Schema
// 2019-09/2020-12 constructs that need a deterministic fix class before
// swagger-parser validates a 3.0 document. Read-only; prints a summary to
// paste into NOTES.md.
//
// Usage: node spec_diff.mjs <pinned-spec> <fetched-spec>
//   e.g. node spec_diff.mjs provider-dev/downloaded/api.json /tmp/api.json

import fs from 'fs';

const [oldPath, newPath] = process.argv.slice(2);
if (!oldPath || !newPath) {
  console.error('usage: node spec_diff.mjs <pinned-spec> <fetched-spec>');
  process.exit(2);
}

async function load(p) {
  const text = fs.readFileSync(p, 'utf8');
  if (/\.ya?ml$/i.test(p)) {
    const yaml = await import('js-yaml').catch(() => null);
    if (!yaml) throw new Error('js-yaml is needed to read YAML specs (npm i js-yaml)');
    return yaml.load(text);
  }
  return JSON.parse(text);
}

const VERBS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];
const ops = (s) => {
  const m = new Map();
  for (const [p, item] of Object.entries(s.paths || {})) {
    for (const v of VERBS) if (item?.[v]) m.set(`${v.toUpperCase()} ${p}`, item[v].operationId || '');
  }
  return m;
};

const a = await load(oldPath);
const b = await load(newPath);
const A = ops(a), B = ops(b);
console.log(`operations: ${A.size} -> ${B.size}; openapi ${a.openapi || a.swagger} -> ${b.openapi || b.swagger}; version ${a.info?.version} -> ${b.info?.version}`);
const added = [...B].filter(([k]) => !A.has(k));
const removed = [...A].filter(([k]) => !B.has(k));
const renamed = [...B].filter(([k, id]) => A.has(k) && A.get(k) !== id);
const list = (title, rows, fmt) => { console.log(`${title} (${rows.length})`); for (const r of rows) console.log(`  ${fmt(r)}`); };
list('ADDED', added, ([k, id]) => `${k}  ${id}`);
list('REMOVED', removed, ([k, id]) => `${k}  ${id}`);
list('RENAMED operationId', renamed, ([k, id]) => `${k}  ${A.get(k)} -> ${id}`);

const sa = a.components?.schemas || {}, sb = b.components?.schemas || {};
const ka = new Set(Object.keys(sa)), kb = new Set(Object.keys(sb));
const changed = [...kb].filter((k) => ka.has(k) && JSON.stringify(sa[k]) !== JSON.stringify(sb[k]));
console.log(`schemas: ${ka.size} -> ${kb.size}; added ${[...kb].filter((k) => !ka.has(k)).join(', ') || '-'}; removed ${[...ka].filter((k) => !kb.has(k)).join(', ') || '-'}`);
console.log(`changed schemas (${changed.length}): ${changed.join(', ') || '-'}`);

// constructs that OpenAPI 3.0 validation rejects - each needs a fix class
const counts = {};
const bump = (k) => { counts[k] = (counts[k] || 0) + 1; };
const walk = (n) => {
  if (Array.isArray(n)) { n.forEach(walk); return; }
  if (!n || typeof n !== 'object') return;
  if (n.type === 'null') bump('type: null (-> nullable: true)');
  if (Array.isArray(n.type)) bump('type array (3.1 -> single type + nullable)');
  if (typeof n.exclusiveMinimum === 'number' || typeof n.exclusiveMaximum === 'number') bump('numeric exclusiveMinimum/Maximum (-> minimum/maximum + boolean)');
  if ('propertyNames' in n) bump('propertyNames (remove)');
  if ('const' in n) bump('const (-> enum)');
  if (typeof n.$schema === 'string') bump('$schema key (remove)');
  if ('hideDefinitions' in n) bump('hideDefinitions (vendor artifact, remove)');
  if ('unevaluatedProperties' in n || 'prefixItems' in n || 'dependentRequired' in n) bump('2020-12 keyword (unevaluatedProperties/prefixItems/dependentRequired)');
  for (const v of Object.values(n)) walk(v);
};
walk(b);
console.log('fix-class candidates in the fetched spec:');
if (Object.keys(counts).length === 0) console.log('  none');
for (const [k, v] of Object.entries(counts)) console.log(`  ${String(v).padStart(4)}  ${k}`);
