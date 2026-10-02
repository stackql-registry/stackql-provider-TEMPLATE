# CLAUDE.md

## Project

This repository builds and documents the `myprovider` provider for [StackQL](https://github.com/stackql/stackql), enabling SQL-based query and provisioning operations against the My Provider API.

TODO(template): replace the paragraph above with what the provider covers (the API surface, the services in plain words) and the scope notes - what is deliberately out of scope and why, and any sibling provider reserved for the other surface - so they are never relitigated.

## How to work in this repository

The build procedure is the `stackql-provider-development` skill in `.claude/skills/stackql-provider-development/` (`SKILL.md` is the map; `references/*.md` are the procedures; `scripts/` holds `spec_diff.mjs` and `find_extension_examples.sh`). Read the reference file for a step before executing it. Work the steps in order: archetype -> spec pin -> inventory and split -> mappings -> pre-normalize / normalize / generate / post-process -> GraphQL and views -> Makefile -> the three credential-free test layers -> smoke suite -> docs and CI -> hand-over.

Starting from a fresh clone of the template: `bin/init-provider.sh <name> "<Title>" <api-base>` rewrites the placeholders (`myprovider`, `My Provider`, `MYPROVIDER`, `api.example.com`), then fill the constants in `provider-dev/scripts/lib/spec_helpers.mjs` (`SPEC_URL`, `SPEC_FILE`, `SCOPE_PREFIX`, `ROOT_PATHS`, `WIRE_CASING`) and `provider-dev/config/*.json`, and `make fetch-spec`. Every file carrying a `TODO(template)` marker is a decision the build must make; `grep -rn "TODO(template)" --exclude-dir=node_modules .` lists what is left.

## Archetype

TODO(template): direct (the vendor publishes OpenAPI / Swagger / a discovery document - this template's pipeline) or derived (the SDK is the truth; the provider is built in a fork of the SDK repository - see the skill's derived-spec-pipeline.md, which reuses everything here from the inventory step on). Record the spec source URL, how it is served (versioned or not, authenticated or not) and the refresh cadence.

## Design decisions (settled - see NOTES.md for the evidence)

TODO(template): one bullet each, as they are decided:

- **Authentication** - the `auth.type` and the env var(s), named as the vendor's Terraform provider names them (unless Terraform only offers `TF_VAR_*`, then the vendor CLI's). Fixed API base or a server template.
- **Scoping** - the server variable and its `x-stackQL-envVar` (or "none - fixed host"); which paths are root paths pinned to the API base; the JOIN-cannot-fan-out consequence and the `UNION ALL` pattern the docs teach.
- **The flagship mapping** - the capability the provider exists for and how it is bound.
- **Casing** - `snake_case_aliases` + `request.nativeCasing` when the wire is camelCase; the accepted column-rename break.
- **Pagination** - the vendor scheme per endpoint (confirmed in the inventory), placed at the narrowest true level; what is not expressible and is left as parameter-driven windowing.
- **Update semantics** - PATCH presumed partial; PUT is not REPLACE until proven live.
- **Skip codes** - the reason codes in use and their counts.
- **Rate limit** - the documented limit, the harness pacing constant; a 429 in CI is a harness bug.
- **Labels** - how beta / alpha / deprecated flow into the docs.
- **Engine typing** - UPDATE marshals every SET value as a string; INSERT and EXEC send typed JSON; EXEC cannot carry a boolean. Documented, not worked around.

## Toolchain rules

- Latest `@stackql/provider-utils`, `@stackql/pgwire-lite` and `@apidevtools/swagger-parser` (check npm before starting: `npm view @stackql/provider-utils version`); Docusaurus `^3.10.x`. Node >= 22.19 (Node 20 reached end of life in April 2026; swagger-parser 13 needs 22.19), `type: module`. `js-yaml` stays on 4.x: provider-utils emits with js-yaml 4, and v5 drops the default export, removes the `quotingType` dump option and changes scalar quoting, so that bump is a coordinated change with provider-utils. `package-lock.json` pins what CI installs; a toolchain bump is an explicit commit that regenerates the artifacts.
- Linux, macOS or WSL: GNU make + bash, a `stackql` binary (`$STACKQL`, `./stackql`, then PATH; `bin/start-server.sh` downloads one if none is found), Python 3 and yarn. The Makefile is the operator surface (`make help`).
- The two provider-utils CLI entry points are npm scripts invoked through `node` (never `.bin` shims); flags go after `--`.

## Repository layout

```
Makefile               # make help / build / test / smoke* / docs / website / all
bin/                   # fetch-spec.sh, split.mjs, init-provider.sh, server lifecycle, test-meta-routes.cjs
provider-dev/
  downloaded/          # pinned spec snapshot (committed)
  config/              # spec_pin.json, service_names.json, servers.json, provider_config.json,
                       # endpoint_inventory.csv, all_services.csv (the mapping contract)
  scripts/             # record_spec_pin, build_inventory, map_operations, pre_normalize, post_process,
                       # graphql_merge, lib/spec_helpers (the single source of provider constants)
  source/              # split + normalized service specs (committed build artifacts)
  source-graphql/      # manifest.yaml + ops/*.yaml GraphQL fragments (optional)
  openapi/src/<name>/  # generated provider (committed)
  docgen/provider-data # headerContent1.txt / headerContent2.txt (landing + getting-started page;
                       # examples close the page under "## Example Queries" - intro sentence, then
                       # H3 + lead-in + sql block per example, see docs-and-ci.md)
views/<service>/views.yaml   # optional provider views (spliced at generate time)
tests/
  offline_validation.mjs
  integration/         # mock_<name>_server.mjs, run_integration_tests.mjs, probe.mjs
  smoke_test.py        # pystackql live suite (--live, --read-only, --with-gated-lifecycle, --cleanup-only)
website/               # Docusaurus microsite (shared stackql/docusaurus-config vendored at build)
.github/workflows/     # build-and-test.yml (pin check, build, drift check, 3 test layers, gated smoke,
                       # weekly spec-drift); web deploys (.disabled until GitHub Pages is configured)
CLAUDE.md  NOTES.md  README.md  SECURITY.md  LICENSE  .env.example
```

## Build pipeline

`make all` = `deps build test docs website`: fetch-spec (pin verify) -> inventory -> split -> mappings -> pre-normalize -> normalize -> generate (+ post-process, views, GraphQL merge) -> test-offline -> test-integration -> test-meta -> docs -> website. It never needs credentials and never bills. Every step is deterministic and re-runnable; manual decisions are rules in scripts (`RESOURCE_RULES` / `METHOD_RULES` in `map_operations.mjs`, `SKIP_RULES` in `lib/spec_helpers.mjs`, fix classes in `record_spec_pin.mjs`, passes in `pre_normalize.mjs`, numbered rules in `post_process.mjs`), never hand-edits to CSVs or specs. Validate-and-fail-without-writing is the standard for every script. A regeneration reproduces the committed artifacts byte-for-byte (CI checks this).

`provider-dev/config/all_services.csv` is committed as the durable record of every operation -> resource.method mapping; a diff there on a regeneration is a breaking-change review (a method moving resource, a resource renamed), not noise.

## Tests

1. `make test-offline` - `SHOW` / `DESCRIBE` against the local file registry (services, resources, verbs, env-var behaviour, snake aliases, views, the flagship).
2. `make test-integration` - the mock API (`tests/integration/mock_<name>_server.mjs`, real wire shapes, auth enforced, request log) with row-level and wire-level assertions per archetype. `npm run probe -- "<sql>"` prints stackql output and the wire calls for ad-hoc binding checks.
3. `make test-meta` - the meta-route walk over a local server. A resource with no columns or a service with no resources fails it - fix the mapping, never the test.
4. `make smoke` / `make smoke-live` / `make smoke-read-only` / `make smoke-gated-lifecycle` / `make smoke-cleanup` - live, from `.env` (see `.env.example`), against a dedicated dev account. Budget under $5 (aim under $1); the expensive lifecycle only in its gated target.

Never run tests against a production account.

## Docs and publish

`make docs` (generate with `--snake-case-aliases`, then `sanitize-docs`) and `make website`; `website/docs` is committed after every regeneration so pages stamp with their regeneration date. Publishing to the registry is a separate, human-in-the-loop step (push the generated provider dir to `providers/src` in a feature branch of `stackql-provider-registry`, follow the release flow, verify with `make smoke-live`).

## Writing conventions

These apply to every piece of text the build generates, whoever or whatever reads it: README, docs headers and examples, NOTES, this file, code comments, commit messages, console output, inventory and CSV columns, mock fixtures, hand-over notes. Text the vendor owns (operation summaries, schema and parameter descriptions, examples carried from the upstream spec into the snapshot, `provider-dev/source`, the generated provider and `website/docs`) is passed through as the vendor wrote it; the only alteration is the MDX escaping `sanitize-docs` applies so the docs site builds.

- Measured, precise copy, no hyperbole. Comparisons with the vendor's Terraform provider are capability statements and runnable examples, never editorializing.
- No em dashes and no `--` as a dash; use `-`. No characters that are not on a QWERTY keyboard: no emoji, no typographic quotes, `->` for arrows. No stacked headings.
- Sample queries are realistic and runnable against the generated surface: snake_case names, `json_extract` for nested fields, parser keywords such as `"database"` quoted.

## Non-negotiables

1. Latest `@stackql/provider-utils`, always
2. The skill is the procedure; sibling-build NOTES.md findings (the repos in the skill's reference-repos.md) are reused, not re-derived - deviate only with a documented reason in NOTES.md
3. Deterministic scripts, never hand-edits to derived artifacts
4. Every regeneration is followed by `make test` before commit
5. Test harnesses pace under the rate limit - a 429 in CI is a harness bug
6. Smoke tests clean up everything they create and restore anything they toggle
