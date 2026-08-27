// Shared plumbing for the integration runner and the probe: locate the
// stackql binary, materialise the test registry pointed at the mock, and run
// SQL asynchronously against it. No side effects on import.

import { spawn } from 'child_process';
import { existsSync, rmSync, cpSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { PROVIDER_NAME, API_BASE_URL } from '../../provider-dev/scripts/lib/spec_helpers.mjs';

export const here = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(here, '..', '..');

export function findStackql() {
  if (process.env.STACKQL) return process.env.STACKQL;
  const local = path.join(repoRoot, process.platform === 'win32' ? 'stackql.exe' : 'stackql');
  if (existsSync(local)) return local;
  return 'stackql'; // PATH
}

// Copy the generated provider docs into tests/integration/.registry-tmp
// (gitignored, recreated each run) and point every server - document-level
// and path-level - at the mock, preserving server variables and
// x-stackQL-envVar. provider-dev/** is never modified.
export function buildTestRegistry(port) {
  const srcDir = path.join(repoRoot, 'provider-dev', 'openapi');
  const tmpDir = path.join(here, '.registry-tmp');
  rmSync(tmpDir, { recursive: true, force: true });
  cpSync(srcDir, tmpDir, { recursive: true });
  const servicesDir = path.join(tmpDir, 'src', PROVIDER_NAME, 'v00.00.00000', 'services');
  const base = `http://localhost:${port}`;
  for (const f of readdirSync(servicesDir)) {
    if (!f.endsWith('.yaml')) continue;
    const fp = path.join(servicesDir, f);
    const doc = yaml.load(readFileSync(fp, 'utf8'));
    if (!doc.servers?.[0]?.url) throw new Error(`no top-level servers block found in ${f}`);
    doc.servers = doc.servers.map((s) => ({ ...s, url: s.url.replace(API_BASE_URL, base) }));
    for (const item of Object.values(doc.paths || {})) {
      if (item.servers) item.servers = item.servers.map((s) => ({ ...s, url: s.url.replace(API_BASE_URL, base) }));
    }
    writeFileSync(fp, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
  }
  return tmpDir;
}

export function registryArg(tmpDir) {
  const regPath = tmpDir.split(path.sep).join('/');
  return JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });
}

// IMPORTANT: async (spawn, not spawnSync) - the mock server runs on this
// process's event loop, so a synchronous wait for stackql deadlocks.
// Returns { rows, err }: rows is the parsed JSON (an empty array for zero
// rows, [{ _text }] for DML status text), err the stderr when it looks like
// an error.
export function makeRunSql(registry, baseEnv, { verbose = false, bin = findStackql() } = {}) {
  return function runSql(sql, envOverrides = {}) {
    return new Promise((resolve) => {
      const env = { ...process.env, ...baseEnv, ...envOverrides };
      for (const [k, v] of Object.entries(envOverrides)) if (v === undefined) delete env[k];
      const child = spawn(bin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
      let stdout = '', stderr = '';
      child.stdout.on('data', (d) => { stdout += d; });
      child.stderr.on('data', (d) => { stderr += d; });
      const timer = setTimeout(() => child.kill(), 120000);
      child.on('error', (e) => { clearTimeout(timer); resolve({ rows: null, err: String(e), stdout: '', stderr: String(e) }); });
      child.on('close', () => {
        clearTimeout(timer);
        stdout = stdout.trim();
        stderr = stderr.trim();
        if (verbose) console.log(`    sql: ${sql}\n    out: ${stdout.slice(0, 400)}${stderr ? `\n    err: ${stderr.slice(0, 400)}` : ''}`);
        const errish = /http response status code: [45]|error|panic|FindRoute|no matching operation|cannot find matching operation|disallowed|cannot find any viable servers/i;
        if (errish.test(stderr)) return resolve({ rows: null, err: stderr, stdout, stderr });
        if (!stdout) return resolve({ rows: [], err: null, stdout, stderr });
        try {
          resolve({ rows: JSON.parse(stdout) ?? [], err: null, stdout, stderr }); // literal null for zero rows
        } catch {
          resolve({ rows: [{ _text: stdout }], err: errish.test(stdout) ? stdout : null, stdout, stderr }); // DML status text
        }
      });
    });
  };
}
