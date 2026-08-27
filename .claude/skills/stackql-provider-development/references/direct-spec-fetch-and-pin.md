# Direct archetype: fetch, fix, validate, pin the spec

`bin/fetch-spec.sh` -> `provider-dev/scripts/record_spec_pin.mjs`:

1. Download to a temp dir (`curl -fsSL`). Never write into `provider-dev/downloaded/` before validation passes.
2. Apply **deterministic fix classes** to the parsed document before validating, each counted: the typical NestJS/JSON-Schema-2020-12 leaks are `"type": "null"` -> `nullable: true`, `propertyNames` removed, numeric `exclusiveMinimum`/`exclusiveMaximum` -> `minimum`/`maximum` + boolean flag, `$schema` keys removed, `const` -> `enum`, vendor artifact keys (`hideDefinitions`) removed, OpenAPI 3.1 `type: [string, "null"]` arrays lowered to a single type + `nullable`, `openapi: 3.1.2` -> `3.1.1` (swagger-parser rejects 3.1.2 by string). Add a class when a refresh introduces a new construct; a class absent from a snapshot counts 0.
3. Validate with `@apidevtools/swagger-parser` (`SwaggerParser.validate(structuredClone(spec))`). Fail without writing on error.
4. **Redact** credential-shaped example values deterministically (Slack webhooks, tokens in examples trip GitHub push protection); record counts.
5. Pin in `provider-dev/config/spec_pin.json`: url, filename, stated version, openapi version, path and operation counts, upstream sha256 (of the raw bytes - drift always compares upstream), sanitized sha256, fix counts, redaction counts, bytes, fetched date. Pin mismatch fails unless `--update` (a reviewed refresh). Commit the snapshot so every refresh is a reviewable diff.
6. On a refresh, diff before accepting: added/removed/renamed operations, added/removed/changed schemas. A node one-liner over the two JSON files is enough; record the summary in NOTES.md.

A multi-spec vendor (several documents, or one per API family) pins each under `specs.<name>` with the same fields.

Next: inventory-and-mapping.md (shared with the derived archetype from here on).
