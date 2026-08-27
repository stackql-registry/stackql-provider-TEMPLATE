#!/usr/bin/env node
// Post-docgen sanitizer for the generated provider docs. Run after
// `generate-docs`, before building the website (`make docs` does both).
//
// 1. MDX safety. Vendor descriptions carry literal angle-bracket placeholders
//    (<region>), stray unpaired HTML, XML samples and regex fragments. MDX v3
//    parses any raw <token> as JSX and fails the build on the first
//    mismatch; braces parse as JSX expressions. The generator's structure is
//    line-shaped (one <td>...</td> per line; description text only ever
//    appears as td inner content or TabItem prose), so: inside every
//    description cell escape angle brackets, braces and square brackets
//    (protecting backtick-wrapped `<placeholder>` tokens as <code>), and
//    leave every structural line byte-for-byte untouched.
//
// 2. Scope annotations (when provider.js exports scopeVariable and
//    scopeEnvVar). docgen merges server variables into every method's
//    required parameters and example WHERE clauses, which is right only
//    when the env var is unset; every `<var> = '{{ <var> }}' -- required`
//    example is annotated "required unless <ENV> is set".
//
// 3. Landing-page resource count. docgen's total includes each service
//    index page; recount from the generated service directories.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(siteDir, 'docs');
// provider.js is an ES module in a package without "type": "module" (the
// vendored shared config is CommonJS), so read the two exports as text.
const providerJs = fs.readFileSync(path.join(siteDir, 'provider.js'), 'utf8');
const exportOf = (name) => {
  const m = providerJs.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*(?:'([^']*)'|"([^"]*)"|(null))`));
  return m ? (m[1] ?? m[2] ?? null) : null;
};
const SCOPE_VAR = exportOf('scopeVariable');
const SCOPE_ENV = exportOf('scopeEnvVar');

const TD_LINE = /^(\s*<td>)(.*)(<\/td>\s*)$/;
const LINK_TOKEN = '<a href="#[^"]*">(?:<CopyableCode\\b[^<>]*\\/>|<code>[^<>]*<\\/code>)<\\/a>';
const LINK_TOKEN_CELL = new RegExp(`^${LINK_TOKEN}(?:,\\s*${LINK_TOKEN})*$`);
const BACKTICKED = /`<([A-Za-z][A-Za-z0-9_.:-]*)>`/g;
// Control-char sentinels: cannot occur in generated markdown.
const OPEN = '';
const CLOSE = '';

let filesChanged = 0;
let cellsEscaped = 0;
let scopeAnnotated = 0;

function annotateScope(lines) {
  if (!SCOPE_VAR || !SCOPE_ENV) return false;
  const sqlRe = new RegExp(`(${SCOPE_VAR}\\s*=\\s*'\\{\\{ ${SCOPE_VAR} \\}\\}'\\s*--\\s*required)(?!\\s+unless)`);
  const execRe = new RegExp(`(@${SCOPE_VAR}='\\{\\{ ${SCOPE_VAR} \\}\\}'\\s*--required)(?!\\s+unless)`);
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    if (sqlRe.test(lines[i])) { lines[i] = lines[i].replace(sqlRe, `$1 unless ${SCOPE_ENV} is set`); changed = true; scopeAnnotated++; }
    else if (execRe.test(lines[i])) { lines[i] = lines[i].replace(execRe, `$1 unless ${SCOPE_ENV} is set`); changed = true; scopeAnnotated++; }
  }
  return changed;
}

function escapeDescription(inner) {
  let out = inner.replace(BACKTICKED, (m, name) => OPEN + name + CLOSE);
  out = out
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    // Regex fragments in descriptions ("s3://([^/]+)(/.*)?") read as
    // markdown links and crash the link resolver.
    .replace(/\[/g, '&#91;')
    .replace(/\]/g, '&#93;')
    // GFM autolinks bare "scheme://..." literals on the DECODED text tree
    // and Docusaurus crashes on regex-shaped ones. A zero-width space inside
    // "://" is invisible in rendering but breaks the autolink prefix match.
    .replace(/:\/\//g, ':​//');
  out = out.split(OPEN).join('<code>&lt;').split(CLOSE).join('&gt;</code>');
  return out;
}

// Inside a CodeBlock template literal, a lone backslash before u/x is a JS
// string escape and ${ starts interpolation. Double the backslash / escape
// the $ so the source text renders verbatim.
function escapeTemplateLiteral(line) {
  return line
    .replace(/(?<!\\)\\(?=[ux])/g, '\\\\')
    .replace(/(?<!\\)\$\{/g, '\\${');
}

function sanitize(text) {
  const lines = text.split('\n');
  let changed = annotateScope(lines);
  let inFence = false;
  let inTabItemProse = false;
  let inCodeBlock = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) { inFence = !inFence; continue; }
    if (inFence) continue;
    if (inCodeBlock) {
      if (/<\/CodeBlock>/.test(line)) inCodeBlock = false;
      const esc = escapeTemplateLiteral(line);
      if (esc !== line) { lines[i] = esc; changed = true; }
      continue;
    }
    if (/<CodeBlock\b/.test(line)) {
      if (!/<\/CodeBlock>/.test(line)) inCodeBlock = true;
      const esc = escapeTemplateLiteral(line);
      if (esc !== line) { lines[i] = esc; changed = true; }
      continue;
    }
    if (/^<TabItem\b/.test(trimmed)) { inTabItemProse = true; continue; }
    if (/^<\/TabItem>/.test(trimmed)) { inTabItemProse = false; continue; }

    // Description table cells (one <td>...</td> per line).
    const m = TD_LINE.exec(line);
    if (m) {
      const inner = m[2];
      if (/^<CopyableCode\b[^<>]*\/>$/.test(inner)) continue;
      // Structural link cells in the Methods/Parameters tables stay verbatim.
      if (LINK_TOKEN_CELL.test(inner)) continue;
      const codeCell = /^<code>([^<>]*)<\/code>$/.exec(inner);
      if (codeCell) {
        // Type/pattern cells: regex patterns form accidental markdown links
        // and MDX brace expressions ({4,7} quantifiers).
        const escaped = codeCell[1]
          .replace(/\[/g, '&#91;')
          .replace(/\]/g, '&#93;')
          .replace(/\{/g, '&#123;')
          .replace(/\}/g, '&#125;')
          .replace(/:\/\//g, ':​//');
        if (escaped !== codeCell[1]) {
          lines[i] = m[1] + '<code>' + escaped + '</code>' + m[3];
          cellsEscaped++;
          changed = true;
        }
        continue;
      }
      const escaped = escapeDescription(inner);
      if (escaped !== inner) {
        lines[i] = m[1] + escaped + m[3];
        cellsEscaped++;
        changed = true;
      }
      continue;
    }

    // Method-description prose inside <TabItem> blocks. Prose never starts
    // with '<'; anything with raw angle brackets or braces there is hostile
    // description content.
    if (inTabItemProse && trimmed && !trimmed.startsWith('<') && /[<>{}]/.test(line)) {
      const escaped = escapeDescription(line);
      if (escaped !== line) {
        lines[i] = escaped;
        cellsEscaped++;
        changed = true;
      }
    }
  }
  return { text: lines.join('\n'), changed };
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      const before = fs.readFileSync(p, 'utf8');
      const { text: after, changed } = sanitize(before);
      if (changed) { fs.writeFileSync(p, after); filesChanged++; }
    }
  }
}

// Landing-page resource count: docgen's `total resources: __N__` counts each
// service index page as a resource; recount the resource pages under
// docs/services/<service>/*/ and rewrite the number.
function fixResourceCount() {
  const servicesDir = path.join(docsDir, 'services');
  const indexFiles = fs.readdirSync(docsDir).filter((f) => /^index\.mdx?$/.test(f));
  if (!fs.existsSync(servicesDir) || indexFiles.length === 0) return 0;
  let resources = 0;
  for (const svc of fs.readdirSync(servicesDir, { withFileTypes: true })) {
    if (!svc.isDirectory()) continue;
    for (const res of fs.readdirSync(path.join(servicesDir, svc.name), { withFileTypes: true })) if (res.isDirectory()) resources++;
  }
  const indexPath = path.join(docsDir, indexFiles[0]);
  const text = fs.readFileSync(indexPath, 'utf8');
  const fixed = text.replace(/(total resources:\s*__)\d+(__)/, `$1${resources}$2`);
  if (fixed !== text) { fs.writeFileSync(indexPath, fixed); return resources; }
  return 0;
}

if (!fs.existsSync(docsDir)) {
  console.error(`sanitize-docs: ${docsDir} does not exist - run generate-docs first`);
  process.exit(1);
}
walk(docsDir);
const recount = fixResourceCount();
console.log(`sanitize-docs: escaped ${cellsEscaped} description cell(s) across ${filesChanged} file(s); ${scopeAnnotated} scope annotation(s)${recount ? `; landing page resource count set to ${recount}` : ''}`);
