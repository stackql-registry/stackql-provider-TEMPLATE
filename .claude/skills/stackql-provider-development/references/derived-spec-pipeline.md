# Derived archetype: synthesise a spec from an SDK fork

When the vendor publishes no usable spec, the SDK is the truth. The shipped pattern (cloudflare from `cloudflare/cloudflare-python`, aws from `boto/botocore`) is a **fork of the SDK repository itself**, with the whole provider build in one subdirectory of the fork (`stackql_cloudflare/`, `stackql_aws_provider/`) - no submodule, no vendored copy.

**Tracking and pinning**

- Two remotes: `origin` (the fork) and `upstream` (the vendor). `main` tracks upstream cleanly (`git fetch upstream && git merge --ff-only upstream/main`); the provider lives on a long-lived branch (`stackql-provider`) that merges `main` in on a feature branch. Never push or PR back to upstream. A `make upstream-sync` target wraps it.
- The pin is the merged upstream commit plus whatever version the SDK carries (`botocore/__init__.py __version__`, or a Stainless `.stats.yml` with `openapi_spec_url` + `openapi_spec_hash` - some SDK generators ship the spec they were built from, which turns the build back into a type 1 with extra parsing for service grouping).
- Guard inherited upstream CI: every workflow the fork inherits gets `if: github.repository == '<vendor>/<repo>'` so it skips on the fork; re-add the guard after each sync.
- Refresh cadence is a decision (quarterly for cloudflare); every sync is `make upstream-sync && make build && make test` with the mapping CSV diff reviewed.

**What to parse, per SDK style**

| SDK style | Source of truth | How |
|---|---|---|
| Stainless/Fern-generated Python or TS | the generator's spec URL in `.stats.yml` / config, plus the SDK source tree for service/resource grouping | download the spec; walk the SDK AST (`self._get/_post/_put/_patch/_delete` calls and `path_template(...)` f-strings) to build a `(verb, path) -> (service, resource_chain, sdk_method)` index |
| botocore-style JSON models | `data/<svc>/<ver>/service-2.json` + `paginators-1.json` (+ `waiters`) | iterate services, read operations/shapes/protocol metadata; synthesise paths per protocol |
| Hand-written Python/TS client | the client classes and typed models (Pydantic/dataclasses/TS interfaces) | walk the AST for HTTP calls and their request/response types; generate schemas from the type definitions |
| gRPC/proto | `.proto` files with HTTP annotations (`google.api.http`) | transcode annotations to paths, messages to schemas |

**Synthesising the spec** (`provider-dev/scripts/generate_specs.py` or equivalent; `make specs`, `make specs-refresh` to re-download): one ordered, numbered pass list, each pass counted in the log. The passes the two shipped builds needed, in the order they run:

1. fan out polymorphic path templates (`/{accounts_or_zones}/{id}/...` -> one path per concrete parent)
2. inline shared `components/parameters|responses|requestBodies` into each operation
3. snake_case path parameters; PascalCase/camelCase schema names
4. flatten multi-line descriptions (docgen turns newlines into `<br />`)
5. collapse `allOf`/`oneOf`/`anyOf` into a flat property union; strip `additionalProperties`/`discriminator`
6. fix `required` lists that name absent properties; strip `readOnly` properties from write-body `required` (the API rejects `unknown field "id"` otherwise)
7. force `required: true` on path parameters; hoist inline `result.items` into named schemas
8. canonicalise scoping parameter names (`account_id`, `zone_id`)
9. assign services: exact `(verb, path)` match against the SDK index, then a static capability map, then longest SDK prefix, then a URL-prefix fallback - every path must land somewhere
10. write `provider-dev/source/<service>.yaml`

For protocol families without REST paths (aws query/ec2, aws-json, rpc), **invent stable path keys** the any-sdk router can match: `/?Action=<Op>&Version=<v>` for query protocols, `/#<Op>` with an `X-Amz-Target` header for aws-json, `/graphql?resource=<name>` for GraphQL (graphql-merge.md). Stamp each synthesised operation with breadcrumbs (`x-stackql-resource`, `x-stackql-method`, `x-stackql-verb`, `x-stackql-objectKey`, pagination hints) so the next stage does not have to re-derive them.

**Mapping and breaking-change control** - the same `all_services.csv` contract as inventory-and-mapping.md (identical 13 columns), but the identity key is `(filename, path, verb)` or `filename::operationId` and **existing rows win over freshly derived breadcrumbs**: a regeneration maps a known operation to exactly the resource/method/verb/objectKey it shipped with; new operations are appended and a `--strict` run fails until they are curated; rows are never rewritten silently. Deleting the CSV forfeits every pin. Keep sidecars for forced decisions (`param_promotions.json` for `required: true` overrides) and write a `build-report.json` each run (promotions, demotions, zero-column resources).

**Surface-drift guard** - a committed `benchmarks.json` (`services`, `resources`, `methods`, `selectableResources`, `nonSelectableRatioPct`, `ratioTolerancePct`) that fails the build when any count falls or the non-selectable ratio spikes; re-baseline only with an explicit flag. A spike means a generator change started stranding readers.

**Provider generation** - either `providerdev.generate` with the usual flags (cloudflare) or a purpose-built emitter that reproduces the CSV contract and writes the service YAMLs directly (aws, because per-protocol request translation, XML transforms and sigv4 config are easier to emit than to post-process). Post-passes that recur in derived builds: non-JSON responses -> `{contents}` + text transform; request-body JSON transforms where naive translation string-wraps array/object SET values; octet-stream write bodies exposed as one `value` column via `request.schema_override` + `body: '{{ .value }}'`; families of near-identical per-model endpoints collapsed into one resource with a discriminating parameter; per-method `nativeCasing: pascal` for PascalCase wire APIs with `snake_case_aliases: true` on the provider.

**Derived-build pitfalls recorded by the shipped builds**: SDK-vs-API drift (sunset REST endpoints still present in the SDK - strip them; models declaring one protocol in `metadata.protocol` and another in `protocols`); global-endpoint metadata that is really a regional alias; YAML 1.1 boolean keywords in `required` lists must be quoted; NOCASE column collisions abort `CREATE TABLE` with exit code 0 (defend with a collision check at build time and fatal-pattern greps in the smoke harness); pagination schemes any-sdk cannot express (`page >= total_pages`) are parked, documented, and left off rather than looping forever; docgen sanitizers are needed for hostile description text; a CSV open in Excel is file-locked on Windows.

Everything from the inventory step onward applies unchanged: inventory-and-mapping.md, then normalize-and-generate.md (a derived build may replace provider-utils `generate` with a purpose-built emitter, as aws does, but the CSV contract, the post-process responsibilities and the test layers are the same).
