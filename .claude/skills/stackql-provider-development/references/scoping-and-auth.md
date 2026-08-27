# Scoping, authentication and provider config

## Scoping: server variables and x-stackQL-envVar

`x-stackQL-envVar` is valid **only on an OpenAPI server variable** (`servers[].variables.<name>`). Semantics: when the named env var resolves, the variable is not required (it disappears from `SHOW METHODS`); a WHERE value beats the env var beats `default`. Use it for the tenant/deployment/org/project parameter that scopes most of the API:

```json
[{"url": "https://api.example.com/v1/projects/{ref}",
  "variables": {"ref": {"description": "...", "x-stackQL-envVar": "EXAMPLE_PROJECT_ID"}}}]
```

Procedure (the clickhouse/supabase mould): the split strips the prefix (`/v1/projects/{ref}`) from every path under it and drops the path parameter; paths outside the prefix keep their full key and `post_process.mjs` pins them back to the bare base with a path-level `servers: [{url: https://api.example.com}]` (any-sdk resolves servers operation -> path item -> document; normalize strips path-level servers, hence post-process). Name the variable what users write in WHERE (`ref`, `organization_id`); name the env var to match the vendor's Terraform provider or CLI (`DATABRICKS_DEPLOYMENT_NAME`, `OKTA_ORG_NAME`, `CLICKHOUSE_ORG_ID`, `SUPABASE_PROJECT_ID`) - never a `TF_VAR_` name.

Known consequence: rows of the scoped resources do not echo the variable, so a JOIN cannot fan out on it (`ON a.ref = p.ref` matches nothing; the inner read runs once for the environment's value). Teach list-then-per-key reads composed with `UNION ALL`.

Authentication env vars follow the same parity rule: use the Terraform provider's variable names (`SUPABASE_ACCESS_TOKEN`, `CLOUDFLARE_API_TOKEN`, `GITHUB_TOKEN`, `DIGITALOCEAN_TOKEN`), unless Terraform only offers `TF_VAR_*`, in which case use the vendor CLI's names.

## Authentication and other provider config

`config` in `provider.yaml` (from `--provider-config`) and `x-stackQL-config` at service/resource/method level share one schema with `additionalProperties: false` - a typo fails validation. Allowed keys: `auth`, `queryParamTranspose`, `requestTranslate`, `requestBodyTranslate`, `pagination`, `variations`, `views`, `sqlExternalTables`, `queryParamPushdown`, `retry`, `minStackQLVersion`, `snake_case_aliases`.

**`auth.type`** and the fields each takes (env var names follow the vendor's Terraform provider unless it only offers `TF_VAR_*`, then the vendor CLI):

| type | fields | example |
|---|---|---|
| `bearer` | `credentialsenvvar` | `{type: bearer, credentialsenvvar: CLOUDFLARE_API_TOKEN}` |
| `api_key` | `credentialsenvvar`, `valuePrefix` (the scheme word, with its trailing space), optional `location: header|query`, `name` | `{type: api_key, credentialsenvvar: OKTA_API_TOKEN, valuePrefix: 'SSWS '}` |
| `basic` | `username_var`, `password_var` (or `username`/`password` literals; `api_key_var`/`api_secret_var` for key-pair APIs) | `{type: basic, username_var: CLICKHOUSE_CLOUD_API_KEY, password_var: CLICKHOUSE_CLOUD_API_SECRET}` |
| `custom` | `location: header|query`, `name`, `credentialsenvvar`, optional `valuePrefix`; chain a second credential with `successor: {type: custom, ...}` | datadog: `DD-API-KEY` + successor `DD-APPLICATION-KEY` |
| `oauth2` (client credentials only) | `client_id_env_var`, `client_secret_env_var`, `grant_type: client_credentials`, `token_url` (may template `{{ .__env__VAR }}`), `scopes`, `auth_style` | databricks_account |
| `service_account` | `credentialsenvvar` (JSON key contents) or `credentialsfilepath` / `credentialsfilepathenvvar`, `scopes`, `sub` | google, firebase |
| `aws_signing_v4` / `aws_assume_role` | `credentialsenvvar` (secret), `keyIDenvvar` (key id) | aws |
| `azure_default` | none | azure |
| `oci_signing_v1` | `tenancy_ocid_envvar`, `user_ocid_envvar`, `oci_fingerprint_envvar`, `oci_private_key_envvar` / `oci_private_key_path_envvar`, `oci_passphrase_envvar`, `oci_region_envvar` | oci |
| `null_auth` | none (the literal is `null_auth`) | k8s (auth handled by the runtime) |
| `interactive` | none (`gcloud auth login` style) | google |

A user can override at runtime with `--auth='{"<provider>": {...}}'`; document that once.

Two structs, two key sets (any-sdk): the provider document's `auth:` block is `internal/anysdk/auth_dto.go`; the runtime `--auth` JSON is `pkg/dto/auth_ctx.go`. They overlap on everything in the table above, but the AWS assume-role keys (`aws_role_arn`, `aws_role_arn_env_var`, `aws_role_session_name`, `aws_role_external_id`, `aws_role_external_id_env_var`, `aws_sts_region`, `aws_sts_endpoint`, `aws_role_duration_seconds`) exist **only** on the runtime struct - a provider cannot pin them in its document. Trap: the AWS account-id env var key is `account_id_var` in YAML (the JSON tag is `account_id_env_var`). The doc-level OCI keys are `tenancy_ocid_envvar`, `user_ocid_envvar`, `oci_fingerprint_envvar`, `oci_private_key_envvar`, `oci_private_key_path_envvar`, `oci_passphrase_envvar`, `oci_region_envvar` (the runtime struct uses `_env_var` suffixes without the `oci_` prefix).

**Other provider-level keys**

- `snake_case_aliases: true` - request-response-shaping.md.
- `retry` - `{algorithm: exponential, max_attempts: 3, initial_delay_ms: 500, max_delay_ms: 10000, multiplier: 2.0, jitter_fraction: 0, retryable_methods: [GET, HEAD], retryable_conditions: {status_codes: [408, 429, 502, 503, 504]}}` are the defaults (five-level inheritance, whole-block). Set it only when the vendor's rate-limit contract calls for it; the test harnesses still treat a 429 as a harness bug.
- `minStackQLVersion` - set when the provider relies on an engine feature with a known landing version (e.g. `x-stackQL-envVar` needs >= v0.10.601); record the reason in NOTES.md.
- `variations.isObjectSchemaImplicitlyUnioned: true` (service or provider level only) - flattens `properties` + `allOf` unions for autorest/NestJS-composed DTOs that would otherwise surface empty column sets.
- `queryParamTranspose.algorithm: AWSCanonical` and `requestTranslate.algorithm: get_query_to_post_form_utf_8` - the AWS query-protocol pair (typed GET form translated to a signed POST form); `drop_double_underscore_params` for providers that still use `data__` columns on some methods.
- `sqlExternalTables` - external table declarations (`catalogName`, `schemaName`, `name`, `columns: [{name, type, oid, width, precision}]`) registered by stackql at load; rarely needed.
- Method-level keys that exist but a generated provider almost never needs: `serviceName` (overrides the service a method reports), `inverse` (`sqlVerb: {$ref: <method>}` plus `tokens: {<param>: {key, location}}` extracted from the response - the rollback hook stackql's HTTP stream consumes), and `protocolType: local_templated` on a provider or providerService (an OpenAPI document plus a `resources` block of templated local commands, `cicd/schema-definitions/local-templated.service-resources.schema.json` - the shape for CLI-backed providers, out of scope here).
- Async/long-running operations: any-sdk has no polling; `response.async_schema_override` / `asyncOverrideMediaType` only select the operation-handle schema. Model LROs as an EXEC that returns the handle plus a `get` on the status resource, and let the smoke test poll (`wait_for` with a timeout).

Vendor labels and rate limits belong in the docs header (Rate limit, Beta endpoints sections) and in the harness pacing constant, not in config.
