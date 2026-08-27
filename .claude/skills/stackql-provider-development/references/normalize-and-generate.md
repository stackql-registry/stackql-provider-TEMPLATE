# Pre-normalize, normalize, generate, post-process

Shared by both archetypes once `provider-dev/source/<service>.yaml` and `all_services.csv` exist.

## Pre-normalize, normalize

`provider-dev/scripts/pre_normalize.mjs` holds the provider-specific spec surgery that must happen on `provider-dev/source` before the generic pass. Typical jobs (each validated, counted, idempotent):

- remove a non-JSON request media type declared before `application/json` (any-sdk binds the body to the first declared type)
- remove deprecated query parameters that duplicate body properties (any-sdk binds an INSERT column to the query parameter first and the body arrives empty)
- inject a response schema where the vendor declares none (a `201` with no content on a query endpoint) so a binding exists
- rewrite a bare-array request body to its single-item object form (paired with a request transform in post-process, see request-response-shaping.md)
- drop a camelCase duplicate of a snake_case property that would collide under `snake_case_aliases`
- lower OpenAPI 3.1 constructs the kin-openapi loader cannot read (type arrays, numeric exclusive bounds)

Then `npm run normalize -- --api-dir provider-dev/source`: flattens `allOf`, lowers `oneOf`/`anyOf` unions, strips misplaced keywords, converts opaque objects to strings, lifts path-item parameters onto operations, strips non-root `servers`, and **wraps bare-array responses** (marks the operation `x-stackql-bare-array-wrap` with a wrapper key derived from the operationId; `--bare-array-overrides '{"<operationId>": {"wrapperKey": "...", "columnName": "..."}}'` renames one). Some providers need a `post_normalize.mjs` to undo a wrap the vendor's own envelope makes wrong (github).

## Generate

```bash
rm -rf provider-dev/openapi/*
npm run generate-provider -- \
  --provider-name <name> \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/<name> \
  --config-path provider-dev/config/all_services.csv \
  --servers provider-dev/config/servers.json \
  --provider-config provider-dev/config/provider_config.json \
  [--service-config provider-dev/config/service_config.json] \
  [--skip-files '["internal.yaml"]'] \
  --naive-req-body-translate \
  --overwrite
node provider-dev/scripts/post_process.mjs
```

- `--servers` replaces `servers` on every service (inline JSON or a file). Server variables with `x-stackQL-envVar` are authored here.
- `--provider-config` becomes `config:` in `provider.yaml`: `auth`, `snake_case_aliases`, provider-wide `pagination`/`retry`.
- `--service-config` becomes the document-level `x-stackQL-config` on every service (document-level `pagination`, `variations`, `queryParamPushdown`).
- `--naive-req-body-translate` emits `config.requestBodyTranslate.algorithm: naive` on every POST/PUT/PATCH with a body, so body properties are plain columns (`INSERT INTO t (name, value)`) rather than `data__name`. It is not emitted for DELETE bodies - add it in post-process. It cannot address a bare-array body (request-response-shaping.md).
- `--views-dir` defaults to `./views` when the directory exists (provider-views.md).
- `--update-path-param-names` snake_cases path parameter names in the paths and parameters (use when the vendor's are camelCase and you want `WHERE instance_id`).

Output: `provider-dev/openapi/src/<name>/v00.00.00000/provider.yaml` + `services/*.yaml`. Each service carries `components.x-stackQL-resources.<resource>` with `methods.<name>` (`operation.$ref`, `request`, `response`, `config`) and `sqlVerbs` (`select`/`insert`/`update`/`delete`/`replace` lists of method refs). **EXEC is the fallback bin**: a method omitted from every `sqlVerbs` list is EXEC.

`post_process.mjs` re-applies everything the generator cannot express (idempotent, validates, fails without writing): path-level `servers` overrides, method-level `pagination`, `request.nativeCasing`, response transforms and `schema_override`, objectKeys on non-GET reads, request transforms, `queryParamPushdown`, DELETE-body naive translation, `x-stackQL-alias` on parameters. Everything in it is a numbered, commented rule.
