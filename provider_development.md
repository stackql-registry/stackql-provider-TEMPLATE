# Provider development brief

The brief for creating a new StackQL provider repository, or refreshing an existing one, from this template. Give it to a coding agent session as the task statement (with the placeholders in the first section filled in), or read it as the checklist for doing the work by hand. It states the goal, the standard the result must meet and the facts about the current engine that decide how a provider is built. The procedure itself is the `stackql-provider-development` skill in `.claude/skills/` (`SKILL.md` and `references/*.md`); this brief does not repeat it, and where the two differ on an engine fact, this brief is the newer source (see "Engine facts").

## The task

You are a StackQL provider developer creating or refreshing the `<provider>` provider for `<vendor and product>`, in the repository `stackql-registry/stackql-provider-<slug>`, created from this template.

Inputs to state when handing this over:

- the provider name (a lower snake_case SQL identifier) and its title
- create or refresh; for a refresh, the existing repository is **untrusted**: re-measure its claims before reusing any of them (finding 1 of the jira build's NOTES.md is the example)
- where the credentials are: a `.env` file in the repository root, to be sourced by the live targets and never read or printed
- the dev account, site or project the live tests may touch (never production)
- any provider-specific requirement (an extra authored resource, a public endpoint, a scope the vendor's Terraform provider lacks)

Deliverables, all three required:

1. A working provider: generated from the vendor's own spec (or one derived from its SDK), every engine primitive used where the API warrants it, `make all` green, and the live smoke suite (reads and CRUD lifecycles) passing against the dev account.
2. A documentation microsite consistent with the peer provider sites.
3. The record: AGENTS.md (settled decisions), NOTES.md (numbered findings with evidence, the engine issues to file, the open questions), README.md (the numbered build guide with counts that match the artifacts), `.env.example`.

## Reference repositories

The newest finished builds are the standard; read their AGENTS.md and NOTES.md before deciding anything they already decided.

| Repository | Use it for |
|---|---|
| [stackql-provider-jira](https://github.com/stackql-registry/stackql-provider-jira) | two pinned documents, tag-rule service split, an authored extra service, synthesised offset pagination, request bodies built from base and transforms, the omnisdk engine facts below, the microsite with all three StackQL Docusaurus plugins |
| [stackql-provider-ovh](https://github.com/stackql-registry/stackql-provider-ovh) | many family documents, the endpoint selector (`x-stackQL-envVarSelector`), project scoping by server template, header-driven list expansion, the microsite conventions (vendored shared config, sidebar, landing page) |
| [stackql-provider-github](https://github.com/stackql-registry/stackql-provider-github) | tag split, Link-header pagination, the GraphQL merge |
| [stackql-provider-cloudflare](https://github.com/stackql-registry/stackql-provider-cloudflare) | derived archetype from a Stainless SDK, GraphQL analytics |
| [stackql-provider-aws](https://github.com/stackql-registry/stackql-provider-aws) | derived archetype from botocore, XML transforms, SigV4 |
| clickhouse, supabase, openai, nvidia (stackql-registry) | lean direct builds, request transforms, query endpoints |
| [omnisdk](https://github.com/stackql-labs/omnisdk) | the engine stackql embeds: `pkg/docparse/stackqldoc` (what a provider document may say), `internal/system_g/exchange/docx` (how requests, pagination and transforms run), `pkg/omnisdk/omnisdk.go` (auth selection) |
| [stackql](https://github.com/stackql/stackql) | the CLI; robot tests under `test/` |
| [stackql-provider-registry](https://github.com/stackql/stackql-provider-registry) | every shipped provider; grep it for an extension key before authoring one |
| [@stackql/provider-utils](https://github.com/stackql-registry/stackql-provider-utils) | split, analyze, normalize, generate, docgen; read its CHANGELOG for the current version |
| [docusaurus-config](https://github.com/stackql/docusaurus-config) | the shared microsite configuration |

Keep local clones of these beside the provider repository (for example under `C:\LocalGitRepos\stackql\core\` and `C:\LocalGitRepos\stackql-registry\providers\<letter>\`) and pull them before starting; the engine moves faster than the docs that describe it.

## Archetypes

1. **Direct** - the vendor publishes an OpenAPI / Swagger document or a discovery document (github, clickhouse, openai, ovh, jira). Check for a hidden one before assuming there is none: `/openapi.json` on the API host, the docs site's download link and its static mirror, the SDK generator's input (a Stainless `.stats.yml`), the vendor's Terraform provider repository.
2. **Derived** - the spec is synthesised from a tracking fork of the vendor's SDK (cloudflare from the Stainless Python SDK, aws from botocore).

Everything after the spec exists is identical for both.

## Environment

- WSL is preferred on Windows; run `stackql` from the WSL path (the latest release binary, `~/.local/bin/stackql`). In scripted WSL calls use `wsl -e bash -lc '...'` (a login shell, so `~/.local/bin` is on PATH, and no re-parsing of the command line by the default shell); from Git Bash set `MSYS_NO_PATHCONV=1` before passing `/mnt/c/...` paths.
- Node >= 22.19, GNU make + bash, Python 3, yarn. A Python venv or `node_modules` on `/mnt/c` takes minutes to build; that is expected, not a hang.
- Never read or print the contents of `.env`: source it (`set -a; source <(tr -d '\r' < .env); set +a`) and print only variable names, HTTP status codes and non-secret fields.

## Standard: shared tooling

- Latest `@stackql/provider-utils`, `@stackql/pgwire-lite` and `@apidevtools/swagger-parser` (`npm view <package> version` first); Docusaurus `^3.10.x`; `js-yaml` stays on 4.x. `package-lock.json` pins what CI installs.
- The StackQL Docusaurus plugins in `website/package.json`: `@stackql/docusaurus-plugin-structured-data` (JSON-LD; 1.9.0 at the time of writing), `@stackql/docusaurus-plugin-aeo` (answer engine optimisation: `llms.txt` / `llms-full.txt`, Markdown companion files, the Ask AI button; 0.5.1 at the time of writing) and `@stackql/docusaurus-plugin-stackql-deploy-template` (the stackql-deploy template menu on resource pages; 0.1.0 at the time of writing). Always use the latest published version of each, on a new site and on every refresh; the versions here go stale. Check with `npm view <plugin> version` before adding or refreshing one, pin `^<latest>`, and refresh `website/yarn.lock` with `yarn install` in `website/`: CI installs with `--frozen-lockfile`, so a dependency missing from the lock fails the deploy.
- Every step is a `make` target and `make all` (deps, build, the three credential-free test layers, docs, site build) runs from any state without credentials. Live targets source `.env`: `smoke`, `smoke-live` (`--live`: the published provider), `smoke-read-only`, `smoke-cleanup`, a gated `smoke-<expensive-lifecycle>`, and any read-only live survey the build relies on (jira: `survey-pagination`).
- The smoke suite has a budget under $5 (aim under $1; most SaaS APIs cost nothing per call), exercises the reads and mutations people use most (take them from the vendor's Terraform provider - the registry's community provider when the vendor publishes none), names everything `stackql-smoke...`, sweeps breadcrumbs first, deletes what it creates, restores what it toggles, and paces under the vendor's rate limit (a 429 is a harness bug).
- **`provider-dev/config/all_services.csv` is the naming dictionary.** It has one row per operation, keyed by `filename::operationId`. It is committed, and it is the source of truth for the resource, method, SQL verb and objectKey of every operation it maps: a build never rewrites a mapped row. The rules and heuristics (`lib/mapping.mjs`, `lib/mapping_rules.mjs`) only name operations the dictionary does not have yet, and the names they produce are saved to it. To rename a resource or method, edit its row. A diff of the CSV is a breaking-change review (a method moving resource, a resource renamed), never noise. This supersedes the skill's `references/inventory-and-mapping.md` and the template Makefile, which delete the CSV and regenerate it from scratch on every build; that turns the CSV into a copy of the rules' output, so a rule change silently renames every operation it matches. jira is the reference implementation (`provider-dev/scripts/map_operations.mjs`, `make mappings`, finding 17 of its NOTES.md). On a new site, and to retrofit an existing one:
  1. `make mappings` runs provider-utils `analyze` (`npm run generate-mappings`), then the naming script, and never deletes the CSV: remove any `rm -f $(CONFIG_DIR)/all_services.csv` from the target. `analyze` appends a row with blank `stackql_*` columns for each operationId the CSV lacks and leaves the other rows alone.
  2. The naming script (`map_operations.mjs`) keeps every mapped row: one whose `stackql_resource_name` is `skip_this_resource`, or is set together with a method and a SQL verb. It names only the rows with no `stackql_resource_name`, from the rules.
  3. The naming script reconciles the dictionary with the spec:
     - it updates the `path` and `verb` of a mapped row whose operation moved, because the generator looks rows up by `filename::path::verb`;
     - it carries the names over when the vendor renames an operationId at the same path and verb;
     - it drops the rows of operations removed upstream and lists them;
     - it drops the duplicate rows `analyze` appends on every run for `skip_this_resource` entries (it treats a row without a method as unmapped).
  4. The naming script validates every row, whether the rules or a hand edit named it, and fails without writing on a violation:
     - names are lower snake_case;
     - each (service, resource, method) is unique;
     - each required-parameter signature is unique per (service, resource, SQL verb);
     - every spec operation has a row;
     - every rule matches an operation.
  5. Prove the retrofit: `make mappings` on the committed CSV leaves it byte-identical, and `make build && make test` reproduces the committed artifacts. Then try a hand rename, which a rebuild must keep, and a blanked `stackql_resource_name`, which the rules must fill again.
  6. To rename, edit the row (to skip an operation, or stop skipping it, set or replace `skip_this_resource` in its row), run `make build && make test`, update the tests, landing-page examples and docs that use the old name, and review the CSV and generated diffs; a rename after publishing breaks users' queries. A rule change names only operations added after it; to apply it to operations already in the dictionary, blank their `stackql_resource_name`. `make mappings-report` lists the rows that differ from what the rules derive (run `make split` first: after `normalize`, wrapped bare-array reads differ in objectKey only).
- AGENTS.md is the single guidance file; `CLAUDE.md` (`@AGENTS.md`) and `.github/copilot-instructions.md` are entry points to it.

## Standard: the provider

- **Authentication** - use the environment variable names the vendor's official Terraform provider reads (published by the vendor or HashiCorp; unless it only offers `TF_VAR_*`, then the vendor CLI's). Do not adopt community Terraform providers' conventions: without an official provider, use the names the owner gives (jira: `ATLASSIAN_CLIENT_ID`, `ATLASSIAN_CLIENT_SECRET`, `ATLASSIAN_CLOUD_ID`) and document only those. Prove the token flow live with a script before writing the provider config.
- **Surface** - expose every REST operation that a credential of the documented kind can call; skip-code the rest with a reason (app-only APIs, binary uploads, removed endpoints, deprecated operations whose replacement is mapped) and keep them in the inventory. Merge GraphQL query operations where the REST API lacks the data (github, cloudflare); say so in AGENTS.md when there are none.
- **Scoping** - put the tenant, site, organisation or project that addresses most paths in a server variable with `x-stackQL-envVar`, named like the Terraform variable (`DATABRICKS_DEPLOYMENT_NAME`, `OKTA_ORG_NAME`, `OVH_CLOUD_PROJECT_SERVICE`, `ATLASSIAN_CLOUD_ID`); use `x-stackQL-envVarSelector` when an environment variable selects among hosts.
- **Hard-to-find identifiers** - when users must supply an identifier the vendor hides (jira's cloud ID), add a small authored service that looks it up from a public or cheap endpoint (`jira.atlassian_tenant.info`), emitted by the split like a vendor service so it flows through mapping, generation, tests and docs. Document how to set it: the vendor endpoint with `curl` / `Invoke-RestMethod` into the environment variable when the endpoint is public, a join from the lookup resource to the resource read (the join supplies the server variable), and `SET "$.params_by_provider.<provider>" = '{"<variable>": "..."}'` as a session default.
- **snake_case** - `snake_case_aliases: true` and `request.nativeCasing` on every method whose wire is camel, pascal or kebab case; renaming a column between provider versions is an accepted break, renaming a resource or moving a method is not.
- **Bodies** - `config.requestBodyTranslate.algorithm: naive` on every method with a body (`--naive-req-body-translate`, and DELETE bodies in post-process); request transforms and `request.base` where the wire body is not a flat object of columns.
- **Responses** - `objectKey` on envelope reads, bare arrays wrapped by normalize, scalar and string-list reads turned into rows by a response transform, non-JSON payloads transformed or skip-coded.
- **Pagination and pushdown** - implement the vendor's scheme per endpoint, proved against a two-page mock fixture and live; `LIMIT` to the page-size parameter through `queryParamPushdown.top`; every other filter parameter is a plain WHERE key.
- **Lifecycle** - actions are EXEC methods on the resource they act on (`issues.transition`, `instances.reboot`); minimise resources with no SELECT.
- **Tests** - offline (`SHOW` / `DESCRIBE` against the local registry, every service's resources against `all_services.csv`), integration (a mock of the API's real wire shapes with row-level and wire-level assertions per archetype, and `npm run probe`), meta-route (every service, resource and method over a local server), then live smoke. All must pass.

## Standard: the microsite

- Docusaurus `^3.10.x` on the shared `stackql/docusaurus-config`, vendored to `website/.shared-config/` by `yarn vendor-config` before `start` and `build`; site-local files are `provider.js`, thin `docusaurus.config.js` and `sidebars.js`, `scripts/sanitize-docs.mjs`, `src/` components (`CopyableCode`, `SchemaTable`) and theme overrides (`Footer`, `Logo`), and `static/` (CNAME `<slug>-provider.stackql.io`, favicons at the root, registry logos, `img/stackql-<provider>-provider-featured-image.png` - docgen references it on every page).
- Every page date-stamped: `config.presets[0][1].docs.showLastUpdateTime = true;` and `website/docs` committed after each regeneration.
- The sidebar shape of every provider site: `Back to StackQL Docs` (`/stackqldocs`), `All Providers` (`/providers`), then the provider category with the autogenerated services tree.
- The landing page (`provider-dev/docgen/provider-data/headerContent1.txt` and `headerContent2.txt`): front matter and a one-paragraph scope statement; then See also, Installation, Scope, Authentication (bash and PowerShell, the `--auth` alternatives in a details block), the scoping variable, provider-specific usage sections, Rate limit, labelling, and last `## Example Queries` - one intro sentence, then an H3 per example with a one-sentence lead-in and one SQL block, leading with the queries the provider exists for and including at least one cross-provider query. Every example must run against the generated surface; run the non-trivial ones live.
- `make docs` passes `--snake-case-aliases` and `--source-project $(SOURCE_PROJECT)`; `sanitize-docs` escapes MDX-hostile vendor text and annotates the scoping variable "required unless <ENV> is set" (`scopeVariable` / `scopeEnvVar` in `provider.js`).
- **Structured data** - wrap the config with the shared config's `withStructuredData(createConfig({ providerName, providerTitle, prismThemes }), { providerName, providerTitle })` (its README, "Structured data"; homebrew is the shipped example). It registers `@stackql/docusaurus-plugin-structured-data` by name, so the site must carry the dependency. Add `softwareApplication: true` to the front matter in `headerContent1.txt` (the plugin then emits the SoftwareApplication node on the landing page), keep `fetch-depth: 0` on the Pages checkout (`dateModified` is each page's last commit), and check the build with the shared config's `scripts/structured-data/check-site.mjs <website/build> --git <website/docs>`. On Windows, build from an upper-case drive path (`C:\...`): with a lower-case drive letter every page gets the build time as `dateModified`. The shared config still calls this an opt-in pilot; adopt it on new and refreshed sites.
- **AEO** - register `@stackql/docusaurus-plugin-aeo` in `plugins` with an `llmsTxt` block (a `header`, the provider's one-line description, and `instanceSections: {'docusaurus-plugin-content-docs@default': {title: 'Documentation', order: 1}}`), as jira's `website/docusaurus.config.js` does. Most existing provider sites do not have it: add it on every site you create or refresh (it also supplies the Ask AI button of the breadcrumb row, below). The shared config does not wire it, so prove it with `make website` and check that `build/llms.txt` lists the service and resource pages; if the shared config later gains a wrapper for it, use that instead.
- **Breadcrumb row: Ask AI and the stackql-deploy template** - every doc page has the Ask AI button at the right of the breadcrumb row, where stackql.io has it, and every resource page has the "stackql-deploy Template" menu beside it (desktop only; the menu downloads or copies a `<resource>.iql` template built from the page's examples). Both come from plugins, not from `website/src`. `@stackql/docusaurus-plugin-stackql-deploy-template` ([README](https://www.npmjs.com/package/@stackql/docusaurus-plugin-stackql-deploy-template)) provides the `DocBreadcrumbs` row and renders the AEO plugin's Ask AI button in it, so register it in `plugins` after `@stackql/docusaurus-plugin-aeo`: theme components of two plugins do not chain, the one loaded last is used, and the build fails with a message when the order is wrong. Sites created from this template, and most existing sites, still carry the older site-level menu, and most have no AEO plugin. On a new or refreshed site:
  1. Add `@stackql/docusaurus-plugin-aeo` if the site does not have it (the AEO bullet above).
  2. Add `@stackql/docusaurus-plugin-stackql-deploy-template` at its latest version and register it after the AEO plugin, as jira's `website/docusaurus.config.js` does.
  3. Once the plugin is wired in, delete `website/src/components/StackqlDeployDropdown/` (the old menu), `website/src/theme/DocBreadcrumbs/` (the swizzle that rendered it: a site-level `DocBreadcrumbs` takes precedence over both plugins and would bring the old layout back) and the `.breadcrumbs-with-actions` rules in `website/src/css/global.css`. `grep -rn "StackqlDeployDropdown\|breadcrumbs-with-actions" website/src` then returns nothing.
  4. `make website` and check the served build: the landing page has Ask AI at the right of the breadcrumb row; a resource page has Ask AI and "stackql-deploy Template" side by side there; below 997px neither shows; the template downloaded from a resource page has an anchor (`/*+ exists */`, `/*+ create */` and so on) before each statement.

## Working method

1. **Measure before mapping.** Before writing service rules, call the live API with a small probe script (token, identity, one list per area, a page with `maxResults=1`) and record what the spec does not say: which host the credential is accepted on, scope errors, what pagination fields actually come back, which endpoints answer 410 or 500 for this credential. Record each as a NOTES.md finding with its evidence.
2. **Fix the spec, not the provider.** A spec defect (a response with an example and no schema, a parameter the vendor documents as required but does not flag) is a counted fix class at pin time, so every later step sees the corrected document.
3. **Prove a primitive before relying on it.** For every engine behaviour the design depends on, write the probe first (`npm run probe -- "<sql>"` shows stackql's output and the wire calls), then the rule, then the integration check. When a probe contradicts the skill, read the engine source and record the finding.
4. **Rules, not edits.** Every shaping and skip decision, and every naming exception for operations new to the dictionary, is a numbered, commented rule in a script; every rule must match something (a stale rule fails the run). The exception is `all_services.csv`: resource and method names, and skips, of operations already in it are edited in their rows (see "Standard: shared tooling"). Never hand-edit specs or generated output.
5. **Hand over honestly.** NOTES.md lists the engine issues to file (filing is for the maintainers) and the open questions a live run has not settled (missing scopes, unproved auth alternatives, presumed update semantics).

## Engine facts

Measured against stackql v1.1.959 (omnisdk v0.1.13-beta01, 2026-11) by the jira build; they supersede the "Engine facts" section of the skill's SKILL.md, which predates omnisdk. Re-verify with `probe.mjs` when the engine version moves.

**Authentication**

- Auth is provider-wide: omnisdk reads only the provider document's `config.auth` (`provider.Security()`); there is no service, resource or operation override (the document-level OpenAPI `security` is read only to detect SigV4).
- A runtime `--auth` override of type `bearer` or `basic` replaces a document's `oauth2` token exchange; `null_auth` does not (it has no request transform, and `providerOptions` only skips the exchange for one that has). A credential-free query against an oauth2 provider is therefore not possible today.
- `oauth2` client credentials: `client_id_env_var`, `client_secret_env_var`, `token_url`, optional `scopes`; the token request is form encoded. `basic` writes the scheme as `BASIC`.

**Requests**

- A WHERE key that names both a request parameter and a column of the returned rows is sent as the parameter and also applied as a row filter on the column - by design (`pkg/omnisdk/pushdown.go`: every filter still runs on the rows). Harmless when they mean the same thing (`id`); fatal when they do not (`expand`, `fields`, a required `permissions` list), and a parameter the vendor matches loosely (`name` as "contains") narrows to exact matches. Remove metadata columns that collide, reshape a map into rows, or document the parameter as unsettable. `x-stackQL-alias` is not implemented.
- A JOIN (or a CTE) supplies a server variable or required parameter of the right-hand table from a column of the left-hand table (`FROM t JOIN r ON r.cloud_id = t.cloud_id`); a scalar subquery in WHERE does not. This supersedes the older note that a join cannot fan out on a server variable.
- `SET` session variables take scalar literals only (`SET v = (SELECT ...)` is refused); `SET "$.params_by_provider.<provider>" = '{...}'` sets parameter and server-variable defaults for the session; a provider alias (`SET "$.providers.<alias>"`) needs `tenancy` and explicit `auth`.
- A parameter's `schema.default` is sent for header parameters only, not for query parameters. For a body, `request.base` (a JSON string) is merged under the statement's own body attributes and sent alone when there are none.
- Typed JSON: INSERT and UPDATE send numbers and booleans as written (`released = true` arrives as `true`) and JSON-shaped strings as objects and arrays when the schema property is typed `object` or `array`. A property with no type at all is sent as a string: type the properties that must carry JSON (rich text documents) as `object` with `additionalProperties`.
- A body that is a single raw value (an entity property write) can be expressed as a one-property body schema plus a `golang_template_json_v0.3.0` request transform: `{{ toJson .value }}`.
- The HTTP client follows a `303 See Other` with a GET: declare the followed resource's body as the operation's 200 so generation has a success response.

**Responses and pagination**

- The generator applies the CSV `stackql_object_key` to GET methods only; set the objectKey of a POST-backed read in post-process. A method with no objectKey takes `$.items` when the response has an `items` array.
- Clause pushdown (`queryParamPushdown`): `top` (LIMIT, into a query or body parameter), `skip` (OFFSET; pushed only for a single read with every filter pushed and the order pushed or absent), `orderBy` with `syntax` `odata`, `prefix` (`name`, `-name`), `suffix` (`name:desc`), `column_only` or `direction_only`, `select` with a delimiter, `count`; `filter` renders OData only. orderBy renders the SQL column name, so list in `supportedColumns` only sort keys whose wire name equals the column name. The engine reads one page past a satisfied LIMIT.
- Pagination: `responseToken` in the body with `requestToken` in the query or body (token), `location: request` with a body URL (follow the next link), `algorithm: page_number`, or a `Link` header. There is no offset arithmetic.
- The continuation token is read from the **transformed** response document, and response templates (`golang_template_text_v0.3.0`) have `jsonMapFromString`, `toJson`, `toInt`, `toBool`, `plus1`, a nil-tolerant `index`, and Go's variable reassignment. Offset pagination is therefore expressible: a transform that counts the rows of the page and adds `startAt + rows` as a token while more pages exist, paired with `requestToken: {key: startAt, location: query}` (jira post-process rule 6). It replaces next-page URLs that are absent or point at a host the credential cannot reach.
- Pair every response transform with `overrideMediaType` and a `schema_override` describing the transformed document (the shipped builds all do; the generator's own bare-array wraps emit the same trio).
- `stackql exec --output json` writes a result of any size as one JSON array (the 100-row split, stackql#925, is fixed).

**Tooling**

- pystackql returns an empty result for a read whose HTTP call failed (stdout `null`, the failure on stderr), even with `suppress_errors=False`. A smoke harness must run `stackql exec` itself (the binary pystackql manages, `sq.bin_path`) and read both streams, or a failed read passes as "no rows".
- The meta-route walk fails a resource with no columns; give a read with untyped row items an objectKey-free `get` (one JSON column) or skip-code it.

## Definition of done

`make all` green from a clean checkout; `make smoke` passing against the dev account with every write cleaned up; `all_services.csv`, `provider-dev/source`, `provider-dev/openapi` and `website/docs` committed; AGENTS.md, NOTES.md, README.md and `.env.example` current, with NOTES.md listing the engine issues to file and the open questions; the microsite built with the latest version of each StackQL Docusaurus plugin (structured data, AEO, stackql-deploy template) and no `StackqlDeployDropdown` component or `DocBreadcrumbs` override left in `website/src`. Publishing to the registry is a separate, human-in-the-loop step.

## Writing conventions

For every piece of text the build produces: measured, precise copy with no hyperbole; `-` rather than an em dash and never `--` as a dash; no characters that are not on a QWERTY keyboard (no emoji, no typographic quotes, `->` for arrows); no stacked headings. Vendor-owned text (operation and schema descriptions, the snapshots, the generated provider and docs) passes through as the vendor wrote it, apart from the MDX escaping `sanitize-docs` applies.
