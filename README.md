# StackQL provider template

A template repository for building a [StackQL](https://github.com/stackql/stackql) provider to the current standard: a deterministic `make` pipeline from a pinned upstream spec to a generated provider, every any-sdk primitive available where the API warrants it (snake_case surface, request and response transforms, pagination, query-parameter pushdown, `x-stackQL-envVar` scoping, `objectKey`, lifecycle `EXEC` methods, GraphQL merge, provider views), three credential-free test layers, a budgeted live smoke suite, a Docusaurus microsite and CI.

The procedure is the bundled Claude Code skill, [`.claude/skills/stackql-provider-development`](.claude/skills/stackql-provider-development/SKILL.md). The repository is laid out so a Claude Code session (or a person) can complete it for a given provider by working the skill's steps in order; every decision left open is marked `TODO(template)`. The skill also uplifts an existing provider repository - copy the `.claude/skills` directory there and start from its `references/uplift-checklist.md`.

The rest of this file is the shape of the finished provider README (numbered build guide, steps 0-8, with counts that match the committed artifacts). Replace the sections as the build settles them.

## Using the template

1. Create the repository from this template (GitHub "Use this template", or clone and re-init) and run `npm install`.
2. Rewrite the placeholders: `bin/init-provider.sh <name> "<Title>" [https://api.vendor.com]` replaces `myprovider`, `My Provider`, `MYPROVIDER` and `api.example.com` across the files that carry them (`grep -rn myprovider .` afterwards should find nothing outside `.claude/`).
3. Fill the constants in `provider-dev/scripts/lib/spec_helpers.mjs` (`SPEC_URL`, `SPEC_FILE`, `PATH_VERSION_PREFIX`, `SCOPE_PREFIX` / `ROOT_PATHS` for a scoped API, `WIRE_CASING`) and `provider-dev/config/` (`servers.json`, `provider_config.json`, `service_names.json`).
4. Open a Claude Code session in the repository and ask it to build the provider - it picks up `CLAUDE.md` and the skill. Or work the skill's steps by hand: `make fetch-spec`, `make inventory`, add service rules, `make split`, `make mappings-report` / `make mappings`, and so on to `make all`.
5. `grep -rn "TODO(template)" --exclude-dir=node_modules .` lists what is still open.

What the template is not: a publisher. Publishing to the public registry is a separate, human-in-the-loop step (section 7).

## What is StackQL

[StackQL](https://github.com/stackql/stackql) is an open-source SQL interface for cloud and SaaS APIs. A provider is a versioned set of OpenAPI documents plus `x-stackQL-resources` extensions that the [any-sdk](https://github.com/stackql/any-sdk) engine turns into SQL tables: `SELECT` for reads, `INSERT` / `UPDATE` / `REPLACE` / `DELETE` for lifecycle, `EXEC` for actions, with `json_extract` over nested fields and joins across providers.

## Prerequisites

- Node.js >= 22.19
- A `stackql` binary (`$STACKQL`, `./stackql`, or on `PATH`; `bin/start-server.sh` downloads one if none is found)
- GNU make and bash (Linux, macOS or WSL); Python 3 for the smoke suite; yarn for the website
- For live smoke tests: a dedicated dev account for the provider (never a production account) and its credentials in `.env` (see `.env.example`)

## Makefile

Every step is a `make` target (`make help` lists them). The composites:

```bash
make all      # deps, full pipeline (fetch/pin verify, inventory, split, mappings, pre-normalize,
              # normalize, generate, post-process, GraphQL merge), offline + integration + meta-route
              # tests, docs generation, website build - no credentials needed
make build    # the spec -> provider pipeline only
make test     # the three credential-free test layers
make smoke    # live smoke suite against the dev account (sources .env if present)
```

`make all` never touches a real account. The live suites are `smoke`, `smoke-live` (the published provider, post-publish verification), `smoke-read-only`, `smoke-gated-lifecycle` (the expensive create/delete, gated) and `smoke-cleanup` (sweep `stackql-smoke-*` breadcrumbs).

## 0. Download and pin the spec

```bash
make fetch-spec      # verify against the recorded pin (fails on drift)
make refresh-spec    # accept an upstream change (rewrites the pin - review the diff)
```

`bin/fetch-spec.sh` downloads the spec to a temp dir; `provider-dev/scripts/record_spec_pin.mjs` applies the deterministic fix classes (counted in the pin), validates with `@apidevtools/swagger-parser`, redacts credential-shaped example values, verifies the upstream sha256 against `provider-dev/config/spec_pin.json` and only then writes the snapshot into `provider-dev/downloaded/` (committed, so every refresh is a reviewable diff). Before accepting a refresh: `node .claude/skills/stackql-provider-development/scripts/spec_diff.mjs <pinned> <fetched>` and record the summary in `NOTES.md`.

TODO(template): the pinned snapshot's title, OpenAPI version, path and operation counts, fetch date and the fix classes applied.

## 1. Endpoint inventory and service split

```bash
make inventory
```

Writes `provider-dev/config/endpoint_inventory.csv`: one row per operation with scope, path params, pagination-looking query params, request body presence / media types / bare-array flag, the update-semantics presumption, vendor labels, response shape and envelope candidates, the proposed service / resource / method / verb / objectKey and a skip reason code.

The service split is the ordered path rules in `provider-dev/config/service_names.json` (first match wins; an unmatched path fails the build; `"excluded": true` classifies a service whose every operation is skip-coded without emitting it). Then:

```bash
make split
```

writes `provider-dev/source/<service>.yaml` (committed build artifacts), rebased onto the scoped server template in `provider-dev/config/servers.json` when `SCOPE_PREFIX` is set.

TODO(template): the inventory counts (operations, mapped, skipped by reason code, labelled) and the service table (service -> resources).

## 2. Mappings

```bash
make mappings-report   # print every derived mapping without writing
make mappings          # regenerate all_services.csv from scratch and apply the rules
```

`provider-dev/scripts/map_operations.mjs` fills `stackql_resource_name`, `stackql_method_name`, `stackql_verb` and `stackql_object_key` from the mechanical derivation plus `RESOURCE_RULES` / `METHOD_RULES`, and validates: every row mapped or skipped with a reason, every spec operation present, `(service, resource, method)` unique, unique required-parameter signatures per `(resource, sqlVerb)`. Fails without writing on any violation.

`provider-dev/config/all_services.csv` is the committed contract of every operation -> resource.method mapping; a diff on regeneration is a breaking-change review.

| Operation pattern | StackQL verb | Resource / method |
|---|---|---|
| GET collection | `SELECT` | `<resource>.list` (objectKey from the envelope) |
| GET single | `SELECT` | `<resource>.get` |
| POST create | `INSERT` | `<resource>.create` |
| PATCH / PUT | `UPDATE` | `<resource>.update` |
| DELETE | `DELETE` | `<resource>.delete` |
| PATCH / PUT action segment | `EXEC` | `<parent>.update_<segment>` |
| POST action segment | `EXEC` | `<parent>.<segment>` |
| POST read (search / query) | `SELECT` | `<resource>.list` (objectKey in post-process) |

## 3. Normalize

```bash
make pre-normalize   # provider-specific passes in provider-dev/scripts/pre_normalize.mjs
make normalize       # provider-utils: allOf flatten, oneOf/anyOf lowering, bare-array wrap
```

## 4. Generate

```bash
make generate        # rm output, generate (servers, auth, naive bodies, views), post-process, GraphQL merge
```

Output: `provider-dev/openapi/src/<name>/v00.00.00000/provider.yaml` + `services/*.yaml` (committed). `provider-dev/scripts/post_process.mjs` re-applies everything the generator cannot express as numbered rules (root-path server overrides, `nativeCasing`, DELETE-body translation, objectKeys on POST reads, pagination, transforms, pushdown, aliases). GraphQL fragments in `provider-dev/source-graphql/` and views in `views/<service>/views.yaml` are merged here.

## 5. Test

```bash
make test-offline        # SHOW / DESCRIBE against the local file registry
make test-integration    # mock API, row-level and wire-level assertions
make test-meta           # meta-route walk over a local stackql server
make smoke               # live (needs .env)
```

`npm run probe -- "SELECT ..."` runs ad-hoc SQL against the mock and prints the wire calls.

TODO(template): the smoke suite's design (which Terraform examples it mirrors), its budget, and the gated lifecycle.

## 6. Docs

```bash
make docs        # generate website/docs (snake_case surface) and sanitize for MDX
make website     # yarn install && yarn build (vendors the shared stackql/docusaurus-config)
make website-start
```

`provider-dev/docgen/provider-data/headerContent1.txt` is the landing-page front matter and pitch; `headerContent2.txt` is the getting-started page (installation, scope, authentication, the scoping variable, rate limit, labelling, example queries - lead with the queries the provider exists for). The examples close the file under an `## Example Queries` heading, the same table-of-contents entry on every provider site: one intro sentence under the H2 (so no heading sits directly on another), then one H3 per example with a one-sentence lead-in ending in a colon and one `sql` block. `website/provider.js` carries the site identity; `website/static/CNAME` the hostname; add `website/static/img/stackql-<name>-provider-featured-image.png`, and keep the favicon files at the `static/` root (the shared config links them root-relative). Commit `website/docs` after every regeneration.

To publish the site: rename `.github/workflows/prod-web-deploy.yml.disabled` and `test-web-deploy.yml.disabled`, enable GitHub Pages (source: GitHub Actions) and add the DNS record:

| Source domain | Record type | Target |
|---|---|---|
| `<name>-provider.stackql.io` | CNAME | `stackql.github.io.` |

## 7. Publish

Push the generated `provider-dev/openapi/src/<name>` directory to `providers/src` in a feature branch of [stackql-provider-registry](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md). Verify from the dev registry, then `make smoke-live`:

```bash
export DEV_REG='{ "url": "https://registry-dev.stackql.app/providers" }'
stackql --registry="${DEV_REG}" shell
```

```sql
REGISTRY PULL myprovider;
```

## 8. CI

`.github/workflows/build-and-test.yml`: on push / PR - `npm ci`, `stackql/setup-stackql`, pin verification (warns on drift), the build steps, a hard failure on uncommitted generation drift, the three credential-free test layers, docs generation; a secret-gated live smoke job (skipped with a notice otherwise; never the gated lifecycle); a weekly `spec-drift` job that fetches, compares with the pin and opens a labelled issue. The web deploy workflows build the site from `main` once enabled.

## Authentication reference

`provider-dev/config/provider_config.json` becomes `config:` in `provider.yaml`. Env var names follow the vendor's Terraform provider (unless it only offers `TF_VAR_*` names, then the vendor CLI's). The common `auth.type` values (the full table is in the skill's `scoping-and-auth.md`):

```json
{"auth": {"type": "bearer", "credentialsenvvar": "VENDOR_TOKEN"}}
{"auth": {"type": "api_key", "credentialsenvvar": "VENDOR_API_KEY", "valuePrefix": "SSWS "}}
{"auth": {"type": "basic", "username_var": "VENDOR_KEY_ID", "password_var": "VENDOR_KEY_SECRET"}}
{"auth": {"type": "custom", "location": "header", "name": "X-API-Key", "credentialsenvvar": "VENDOR_API_KEY"}}
{"auth": {"type": "oauth2", "grant_type": "client_credentials", "client_id_env_var": "VENDOR_CLIENT_ID", "client_secret_env_var": "VENDOR_CLIENT_SECRET", "token_url": "https://auth.vendor.com/oauth/token"}}
```

A user can override at runtime with `stackql --auth='{"<provider>": {...}}'`.

## Contributing

Contributions are welcome - rules in scripts, `make build && make test`, then a pull request.

## Security

Report vulnerabilities privately through the repository's advisory form, never in a public issue - see [SECURITY.md](SECURITY.md).

## License

MIT - see [LICENSE](LICENSE).
