# Reference repositories

Clone these next to the provider repo (shallow clones are fine) and grep them for any extension key to find a real, shipped example. Sibling build repos carry a NOTES.md (or CLAUDE.md) of findings - reuse them, do not re-derive.

| Repo | What to read |
|---|---|
| https://github.com/stackql/any-sdk | the engine: `docs/provider_spec.md` is the extension contract; `cicd/schema-definitions/stackql-config.schema.json` the allowed config keys; `internal/anysdk/*.go` struct yaml tags are the source of truth for key names |
| https://github.com/stackql/stackql | the CLI: robot tests under `test/` show working SQL for every feature; `test/registry` holds fixture providers |
| https://github.com/stackql/stackql-provider-registry | every shipped provider under `providers/src/<provider>/v00.00.00000/` - grep for a key (`objectKey`, `nativeCasing`, `x-stackQL-graphQL`, `queryParamPushdown`, `transform`) to see it used for real |
| https://github.com/stackql-registry/stackql-provider-utils | `@stackql/provider-utils` source: `src/providerdev/{split,normalize,analyze,generate}.js`, `src/docgen/` |
| https://github.com/stackql-registry/stackql-provider-clickhouse | the lean direct-archetype mould: fixed host, org-scoped server variable, mock integration suite, Makefile, smoke suite |
| https://github.com/stackql-registry/stackql-provider-supabase | direct archetype with a project-scoped server variable, query-endpoint `INSERT ... RETURNING`, request transforms, views-ready |
| https://github.com/stackql-registry/stackql-provider-github | direct archetype split by tag, Link-header pagination, the GraphQL merge (`provider-dev/source-graphql/`, `graphql_merge.mjs`) |
| https://github.com/stackql-registry/stackql-provider-openai | direct archetype with predecessor-inventory and residual-variant lowering scripts |
| https://github.com/stackql-registry/stackql-provider-confluent | provider views (`views/<service>/views.yaml`) |
| https://github.com/stackql-registry/stackql-provider-cloudflare | derived archetype: fork of the Stainless-generated Python SDK, build under `stackql_cloudflare/` |
| https://github.com/stackql-registry/stackql-provider-aws | derived archetype: fork of botocore, build under `stackql_aws_provider/`, purpose-built emitter, XML transforms, sigv4 |
| https://github.com/stackql/docusaurus-config | the shared Docusaurus configuration every microsite vendors at build time |

`scripts/find_extension_examples.sh <key> [registry-clone-dir]` greps a registry clone for an extension key and prints the first shipped examples with context.
