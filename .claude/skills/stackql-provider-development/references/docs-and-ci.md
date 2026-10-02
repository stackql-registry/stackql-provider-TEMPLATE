# Docs microsite and CI

## Docs microsite

Docusaurus `^3.10.x` on the shared `stackql/docusaurus-config` (vendored to `.shared-config/` by `yarn vendor-config` in `prebuild`/`prestart`). Site-local files only: `provider.js` (`providerName`, `providerTitle`), `docusaurus.config.js` (createConfig + registry logos + `config.presets[0][1].docs.showLastUpdateTime = true;`), `sidebars.js`, `scripts/sanitize-docs.mjs`, `src/` (CopyableCode, SchemaTable, StackqlDeployDropdown, theme overrides), `static/` (CNAME `<provider>-provider.stackql.io`, favicons, manifest, registry logos, `stackql-featured-image.png`, `stackql-<provider>-provider-featured-image.png`). No Docusaurus boilerplate (no undraw images, HomepageFeatures, stock README).

`headerContent1.txt` is the front matter + one-paragraph pitch; `headerContent2.txt` is the getting-started page: See also / Installation (`REGISTRY PULL`) / Scope / Authentication (env vars, bash and PowerShell) / the scoping variable / Rate limit / Beta labelling / Example Queries - lead with the queries the provider exists for (estate inventory, posture set, the flagship, provisioning with INSERT/UPDATE/EXEC/DELETE, a cross-provider UNION). Examples must be runnable against the generated surface (snake names, quoted keywords).

The example section has one shape on every provider site, so the table of contents reads the same everywhere:

- The H2 is exactly `## Example Queries` and it is the last section of `headerContent2.txt` (docgen appends `## Services` after it).
- The H2 is followed by one intro sentence, `Try the following queries using \`stackql shell\`, or run them from a script or CI pipeline with \`stackql exec\`.`, so the H2 never sits directly on an H3. No two headings anywhere in the file are back to back.
- Each example is an H3 named for what it answers (`### Estate inventory`), with a one-sentence lead-in ending in a colon and one ` ```sql ` block (two at most). Setup material (scope, auth, casing, rate limits, pagination) stays in its own H2 sections above, never inside the examples.
- Plain prose, `-` rather than em dashes, no ASCII arrows; SQL with uppercase keywords, single-quoted strings, semicolon terminated; placeholders in the same style the generated resource pages use.
- Favicons live at the `static/` root (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `safari-pinned-tab.svg`, `site.webmanifest`); the shared config links them root-relative, so copies under `static/img/` are never served as the site icon.

`make docs` = `generate-docs --snake-case-aliases` + `sanitize-docs.mjs` (escapes MDX-hostile description text, annotates env-var-defaulted parameters "required unless X is set", corrects docgen's landing-page resource count which includes each service index). `make website` = `yarn install && yarn build`. Commit `website/docs` after every regeneration so pages stamp with their regeneration date.

## CI

`build-and-test.yml`: on push/PR - `actions/setup-node@v7` on Node 22, `npm ci`, `stackql/setup-stackql@v2`, `make fetch-spec` (warn on drift, build from the pin), build steps, **fail on uncommitted generation drift** (`git add -N . && git diff --quiet -- provider-dev/openapi provider-dev/config provider-dev/source`), `make test-offline test-integration test-meta`, `make docs`. A `smoke` job gated on secrets (skipped with a notice otherwise; never the expensive lifecycle). A weekly `spec-drift` job that fetches, compares with the pin, and opens a labelled issue with the diff stat. Web deploy workflows build the site from `main` with `yarn install --frozen-lockfile`, cached on `website/yarn.lock`; the first `make website` writes that lockfile, so commit it before enabling them.
