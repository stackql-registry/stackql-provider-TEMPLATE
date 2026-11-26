# Inventory, service split and mappings

The most consequential step of the build: every later problem traces back to the inventory columns and the mapping rules. Applies to both archetypes (a derived build stamps breadcrumbs in its synthesised spec, then runs the same inventory and mapping).

## Inventory and service split

`provider-dev/scripts/build_inventory.mjs` writes `provider-dev/config/endpoint_inventory.csv`, one row per operation, from the pinned spec. Columns that decide everything downstream:

- scope (which path parameter addresses the row: org, project, account, none), path params
- pagination-looking query params (`limit`, `offset`, `page`, `cursor`, `page_token`, `next_token`, ...) - a per-endpoint **confirmation**, not an assumption
- request body presence, media types (json / form / multipart / octet / vendor types), and whether the body is a bare array
- update verb semantics presumption (`patch-partial-presumed`, `put-replace-unverified`) - the keycloak finding: PUT is not REPLACE until proven live
- vendor labels (`[Beta]`, `[Alpha]`, `deprecated`) - carried into docs, never hidden
- response shape: `bare-array`, `object` (with the names of its top-level array properties - envelope candidates), `scalar`, `untyped-json`, `non-json`, `none`
- proposed service, resource, verb, and a **skip reason code** where an operation will not be mapped

Standard skip codes (reason-coded in the CSV, listed in the README): `multipart_upload`/`multipart_eszip_deploy` (binary bodies - the CLI is the path), `non_json_text_response` (text/plain, Prometheus exposition, PDFs unless a transform makes them useful), `untyped_json_response` (empty schema and marginal value), `bare_array_bulk_body` (bulk endpoints with no per-statement form when a single-item endpoint exists), `head_count_endpoint`, `oauth_user_agent_flow` (browser redirect flows), `websocket`/`sse_stream`. Every skipped operation stays visible in the CSV.

**Service split** is recorded as ordered path rules in `provider-dev/config/service_names.json` (first match wins; an unmatched path fails the build) and applied by `bin/split.mjs` via `providerdev.split({svcDiscriminator: 'function', svcDiscriminatorFn})`. Use `--svc-discriminator tag` only when the vendor's tags are already a good service split (github). Aim for 8-20 services named for what a user would look for (`projects`, `config`, `network`, `secrets`, ...), not the vendor's controller names. A rule may carry `"excluded": true` for a service whose every operation is skip-coded (the split classifies it for the inventory but does not emit it - an empty service fails the meta-route walk).

Split writes `provider-dev/source/<service>.yaml` (committed build artifacts). If the API scopes most paths under one parent (`/v1/projects/{ref}/...`, `/organizations/{orgId}/...`, `/accounts/{account_id}/...`), rebase them here onto a server template - see scoping-and-auth.md.

## Mappings: the operation -> resource.method table

`all_services.csv` is the provider's naming dictionary: one row per operation, keyed by `filename::operationId`, committed, and the source of truth for the `stackql_resource_name`, `stackql_method_name`, `stackql_verb` and `stackql_object_key` of every operation it maps. A build never rewrites a mapped row; the rules only name operations the dictionary does not have yet. **Never delete the CSV** (a `make mappings` that does turns it into a copy of the rules' output, and a rule change then silently renames every operation it matches).

`make mappings` runs `npm run generate-mappings -- --provider-name X --input-dir provider-dev/source --output-dir provider-dev/config` (provider-utils `analyze`), which appends a row with blank `stackql_*` columns for each operationId the CSV lacks and leaves the other rows alone, then `provider-dev/scripts/map_operations.mjs`, which:

- keeps every mapped row (`skip_this_resource`, or a resource with a method and a SQL verb) and names only the rows with no `stackql_resource_name`, from the rules
- updates `path` and `verb` of a mapped row whose operation moved (the generator looks rows up by `filename::path::verb`), and carries the names over when the vendor renames an operationId at the same path and verb
- drops the rows of operations removed upstream (listing them), and the duplicate rows `analyze` re-appends for `skip_this_resource` entries on every run (it treats a row without a method as unmapped)
- validates every row, whether the rules or a hand edit named it, and fails without writing: every spec operation present; names lower snake_case; `(service, resource, method)` unique; for non-EXEC verbs a unique required-parameter signature per `(service, resource, sqlVerb)` - two SELECT methods on one resource that both need only `id` cannot be routed; split the resource or make one EXEC

To rename a resource or method, edit its row and run `make build && make test`; to have the rules name an operation again, blank its `stackql_resource_name`. Before a provider is published, a whole naming pass can be re-derived by blanking the column (or removing the CSV once); after publishing, every rename breaks users' queries. jira's `map_operations.mjs` and the template's are the reference implementations.

How the engine routes a statement: omnisdk (stackql >= v1.1.959) picks the method of the SQL verb whose required parameters the statement supplies, and the most specific one when several are satisfied - proved on jira with `probe.mjs`: `agile.issues WHERE board_id = ... AND sprint_id = ...` reaches the board-sprint issue list, `WHERE board_id = ...` the board list, no WHERE the parameterless list. (The retired any-sdk engine tried the `sqlVerbs` refs in the order written, first satisfied wins; providers built for it listed `list` before `get`.) Confirm every overload with `probe.mjs`. If a verb key is absent from `sqlVerbs` entirely, the engine falls back to method names (`select` -> `select|list|aggregatedList|get`, `insert` -> `insert|create`, `delete` -> `delete`); the generator always writes the lists, so this only matters for hand-authored fragments.

Mechanical derivation (then `RESOURCE_RULES` / `METHOD_RULES` for the exceptions): strip the scoping pairs (`projects/{ref}`), take the static segments, pluralize the last as the resource in snake_case; GET collection -> `list`, GET single -> `get`, POST -> `create`, PATCH/PUT -> `update`, DELETE -> `delete`, POST on an action segment (`pause`, `restart`, `apply`, `merge`, `activate`, `retrieve`, ...) -> EXEC `<action>` on the parent resource, PATCH/PUT on `status`/`password`/`state` -> EXEC `update_<segment>`.

Naming rules that hold across builds (the brief's "Resource naming guidance"; jira's `lib/mapping.mjs` implements them as passes after the rules, and `npm run map-operations -- --notes` lists what they did):

- resources are plural snake_case; singleton config surfaces are `<thing>_configs` (`auth_configs`, `ssl_enforcement_configs`)
- **no service prefix**: a resource name does not repeat the service name, singular or plural (`fields.schemes`, not `fields.field_schemes`; `projects.categories`, not `projects.project_categories`), unless the short name collides with another resource of the service (`projects.project_roles` beside `projects.roles`) or the remainder would not name the rows (`users.users_with_permissions`, `plans.plan_only_teams`)
- **one resource, routed by the WHERE clause**: reads of the same rows that differ only in the parameters that select them are one resource with a method per parameter set, not a resource per path - `agile.sprints` (`get` by `sprint_id`, `list_by_board` by `board_id`), `agile.issues` (`get`, `list_by_board`, `list_by_sprint`, `list_by_epic`, `list_by_board_sprint`, `list_without_epic`). Method names: `list_by_<qualifier>`, `get_by_<qualifier>` (the qualifier is the noun before the path parameter), `list_without_<noun>` for a literal `/<noun>/none/` path. A read joins only when its rows carry every column of the resource's rows and no two selects of the result share required parameters; otherwise it stays a resource of its own (a thinner projection such as jira's `agile.filter_boards`; a read with the same parameters as an existing method)
- a resource projects **one shape**: if a detail read returns a different schema from the list, it is a separate resource (`branches` vs `branch_configs`)
- **snake_case path parameters**: a path parameter's name never goes on the wire, so the provider names it for SQL (`/board/{board_id}`, parameter `board_id`), renamed by a last post-process rule (normalize-and-generate.md); query and body parameters keep their wire names behind `request.nativeCasing` (request-response-shaping.md)
- lifecycle operations live on the resource they act on (`projects.pause`, `services.update_state`, `instances.start`) - the aim is to minimise non-selectable resources; an EXEC-only resource is acceptable only when there is genuinely no read
- envelope list reads set `stackql_object_key` (`$.items`, `$.data`, `$.result`, `$.backups`); bare-array lists leave it blank (request-response-shaping.md)
- a POST that is really a read (`.../retrieve`, `.../search`, `.../query` with no side effects) maps as SELECT `list` - remember the generator applies the CSV objectKey to GET only, so set it in post-process
- deprecated operations stay mapped when no replacement exists; the deprecation flows into the docs
- `stackql_verb`: `select | insert | update | delete | exec` (there is also `replace`, used only with proven full-replacement PUT semantics)

Add a `--report` flag to the mapping script that prints the mapping without writing, and the rows where the dictionary and the rules disagree (run `make split` first: after `normalize`, wrapped bare-array reads differ in objectKey only); it is the fastest way to design rules for a new service.
