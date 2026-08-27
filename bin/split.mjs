#!/usr/bin/env node

// Splits the pinned spec into per-service StackQL service specs.
//
// The service for each path comes from the ordered path rules in
// provider-dev/config/service_names.json (first match wins; a path that
// matches no rule FAILS the run without writing - add a rule). A rule with
// "excluded": true classifies the path for the inventory but does not emit
// the service (a service whose every operation is skip-coded fails the
// meta-route walk, so it must not ship).
//
// provider-utils split() cleans its output dir on every call, so the spec is
// split into a temp dir and the requested service specs are copied into
// --output-dir (all services by default, or a --services subset).
//
// When SCOPE_PREFIX is set in lib/spec_helpers.mjs (an API whose paths mostly
// share one scoping prefix such as /v1/organizations/{orgId}), every service
// spec is rebased onto the server template in provider-dev/config/servers.json:
// paths lose the prefix and its path parameter, and the server variable
// carries x-stackQL-envVar so stackql resolves it from the environment. Paths
// outside the prefix (ROOT_PATHS) keep their full key and are pinned back to
// the bare API base by post_process.mjs (normalize strips path-level servers).
//
// Usage:
//   node bin/split.mjs --provider-name <name> \
//     [--api-doc provider-dev/downloaded/<spec>] \
//     [--output-dir provider-dev/source] \
//     [--services a,b,c] [--overwrite] [--verbose]

import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { providerdev } from '@stackql/provider-utils';
import {
  PROVIDER_NAME, SPEC_FILE, SCOPE_PREFIX, ROOT_PATHS,
  makeServiceResolver, loadSpec, rebaseScopedPaths
} from '../provider-dev/scripts/lib/spec_helpers.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const getArg = (flag) => {
  const index = args.indexOf(flag);
  return index !== -1 ? args[index + 1] : null;
};

const providerName = getArg('--provider-name') || PROVIDER_NAME;
const apiDoc = getArg('--api-doc') || path.join(repoRoot, 'provider-dev', 'downloaded', SPEC_FILE);
const outputDir = getArg('--output-dir') || path.join(repoRoot, 'provider-dev', 'source');
const servicesFilter = getArg('--services') ? getArg('--services').split(',').map((s) => s.trim()) : null;
const overwrite = args.includes('--overwrite');
const verbose = args.includes('--verbose');

if (!fs.existsSync(apiDoc)) {
  console.error(`Error: spec not found at ${apiDoc} (run npm run fetch-spec first)`);
  process.exit(1);
}
const { resolveService, excludedServices } = makeServiceResolver();
const serversPath = path.join(repoRoot, 'provider-dev', 'config', 'servers.json');
const servers = JSON.parse(fs.readFileSync(serversPath, 'utf8'));

// Prepare the output directory, preserving non-spec files (e.g. .gitkeep)
fs.mkdirSync(outputDir, { recursive: true });
const existing = fs.readdirSync(outputDir).filter((f) => /\.(yaml|yml|json)$/.test(f));
if (existing.length > 0 && !overwrite) {
  console.error(`Error: output directory ${outputDir} is not empty. Use --overwrite to replace existing service specs.`);
  process.exit(1);
}

// provider-utils split() accepts a JSON or YAML document; load through the
// shared helper so a YAML upstream is handled the same way everywhere.
loadSpec(apiDoc); // fail early on an unreadable document

const unmapped = new Set();
const svcDiscriminatorFn = (pathKey) => {
  const service = resolveService(pathKey);
  if (!service) {
    unmapped.add(pathKey);
    return 'unmapped_service';
  }
  return service;
};

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'stackql-split-'));
const written = [];
const skipped = [];
try {
  const result = await providerdev.split({
    apiDoc,
    providerName,
    outputDir: tmpDir,
    svcDiscriminator: 'function',
    svcDiscriminatorFn,
    overwrite: true,
    verbose,
    svcNameOverrides: {}
  });
  if (!result) {
    console.error('Error: split failed');
    process.exit(1);
  }
  if (unmapped.size > 0) {
    console.error('Error: paths with no service rule in provider-dev/config/service_names.json:');
    for (const t of [...unmapped].sort()) console.error(`  ${t}`);
    process.exit(1);
  }

  // Clear previous service specs only after the split and config validated
  for (const f of existing) {
    fs.rmSync(path.join(outputDir, f));
  }
  for (const outFile of fs.readdirSync(tmpDir)) {
    const service = outFile.replace(/\.(yaml|yml|json)$/, '');
    if (excludedServices.has(service)) { skipped.push(service); continue; }
    if (servicesFilter && !servicesFilter.includes(service)) continue;
    const doc = yaml.load(fs.readFileSync(path.join(tmpDir, outFile), 'utf8'));
    let note = '';
    if (SCOPE_PREFIX) {
      const { rebased, kept } = rebaseScopedPaths(doc, servers);
      note = ` (${rebased} paths rebased under ${SCOPE_PREFIX}${kept ? `, ${kept} root paths kept` : ''})`;
    } else {
      // no scoping prefix: every service uses the fixed server list verbatim
      doc.servers = JSON.parse(JSON.stringify(servers));
    }
    fs.writeFileSync(path.join(outputDir, outFile), yaml.dump(doc, { lineWidth: -1, noRefs: true }));
    written.push(`${outFile}${note}`);
  }
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

console.log(`Split completed: ${written.length} service specs written to ${outputDir}`);
for (const f of written.sort()) console.log(`  ${f}`);
if (skipped.length) console.log(`Excluded services (every operation skip-coded, not emitted): ${skipped.sort().join(', ')}`);
if (SCOPE_PREFIX) {
  const v = Object.entries(servers[0].variables || {}).map(([k, x]) => `${k} via x-stackQL-envVar ${x['x-stackQL-envVar']}`).join(', ');
  console.log(`Server template: ${servers[0].url} (${v}; root paths ${ROOT_PATHS.join(', ') || '-'} pinned to the API base in post_process)`);
}
