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

`npm run generate-mappings -- --provider-name X --input-dir provider-dev/source --output-dir provider-dev/config` (provider-utils `analyze`) writes `all_services.csv` with one row per operation and blank `stackql_resource_name`, `stackql_method_name`, `stackql_verb`, `stackql_object_key` columns. **Delete the CSV first and regenerate from scratch** so retired operations disappear, then `provider-dev/scripts/map_operations.mjs` fills the columns from rules and validates:

- every row mapped or `skip_this_resource` with a reason; every spec operation present in the CSV
- `(service, resource, method)` unique
- for non-EXEC verbs, unique required-parameter signature per `(resource, sqlVerb)` - two SELECT methods on one resource that both need only `id` cannot be routed; split the resource or make one EXEC

How the engine routes a statement (any-sdk `methodSet.go`, `resource.go`): the refs under a `sqlVerbs` key are tried **in the order written** and the first method whose required parameters are satisfied by the statement wins - there is no sorting by selectivity, so list the less selective method (`list`) before the more selective one (`get`) and confirm an overload with `probe.mjs`. If a verb key is absent from `sqlVerbs` entirely, the engine falls back to method names (`select` -> `select|list|aggregatedList|get`, `insert` -> `insert|create`, `delete` -> `delete`); the generator always writes the lists, so this only matters for hand-authored fragments.

Mechanical derivation (then `RESOURCE_RULES` / `METHOD_RULES` for the exceptions): strip the scoping pairs (`projects/{ref}`), take the static segments, pluralize the last as the resource in snake_case; GET collection -> `list`, GET single -> `get`, POST -> `create`, PATCH/PUT -> `update`, DELETE -> `delete`, POST on an action segment (`pause`, `restart`, `apply`, `merge`, `activate`, `retrieve`, ...) -> EXEC `<action>` on the parent resource, PATCH/PUT on `status`/`password`/`state` -> EXEC `update_<segment>`.

Naming rules that hold across builds:

- resources are plural snake_case; singleton config surfaces are `<thing>_configs` (`auth_configs`, `ssl_enforcement_configs`)
- a resource projects **one shape**: if a detail read returns a different schema from the list, it is a separate resource (`branches` vs `branch_configs`)
- lifecycle operations live on the resource they act on (`projects.pause`, `services.update_state`, `instances.start`) - the aim is to minimise non-selectable resources; an EXEC-only resource is acceptable only when there is genuinely no read
- envelope list reads set `stackql_object_key` (`$.items`, `$.data`, `$.result`, `$.backups`); bare-array lists leave it blank (request-response-shaping.md)
- a POST that is really a read (`.../retrieve`, `.../search`, `.../query` with no side effects) maps as SELECT `list` - remember the generator applies the CSV objectKey to GET only, so set it in post-process
- deprecated operations stay mapped when no replacement exists; the deprecation flows into the docs
- `stackql_verb`: `select | insert | update | delete | exec` (there is also `replace`, used only with proven full-replacement PUT semantics)

Add a `--report` flag to the mapping script that prints every derived mapping without writing; it is the fastest way to design rules for a new service.
