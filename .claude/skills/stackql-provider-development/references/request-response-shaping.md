# Request and response shaping

## Response shaping: objectKey, media types, transforms

`response` block on a method:

```yaml
response:
  mediaType: application/json      # content entry to type against
  openAPIDocKey: '200'             # which response code supplies the schema
  objectKey: $.items               # JSONPath to the row-bearing node ($.data.results, $.result.costs, $[*], XPath for XML)
  overrideMediaType: application/json
  schema_override: {$ref: '#/components/schemas/Wrapped'}
  transform: {type: golang_template_text_v0.3.0, body: '...'}
```

- **Envelope arrays**: set `objectKey` (from the CSV for GET; in post-process for POST reads).
- **Bare arrays**: normalize + generate emit the wrap trio automatically (`objectKey: $.<wrapperKey>`, `overrideMediaType`, `schema_override`, and a text transform `{{- $wrapped := printf "{\"<key>\":%s}" . -}}{{- $wrapped -}}`).
- **Query-dependent rows** (a SQL/NRQL/log query endpoint whose keys depend on the statement): the newrelic posture - one row whose single column carries the array. Inject `{rows: array of object}` as the response schema in pre-normalize and attach the same wrap trio in post-process with `{"rows": ...}`; users address values with `json_extract(rows, '$[0].col')`. Proven to flow through `INSERT ... RETURNING rows`.
- **Non-JSON responses** (octet-stream, PDF, text): `mediaType: <wire type>`, `overrideMediaType: application/json`, `transform: {type: golang_template_text_v0.3.0, body: '[{"contents": {{ toJson . }}}]'}` and a matching `schema_override`. Without `overrideMediaType` + `schema_override` the transform never fires.
- **XML** (AWS-style): `transform.type: schema_driven_xml_v0.1.0` (objectKey is the list property; it reads the info-level `x-protocol: query|ec2|rest-xml` hint to skip the right envelope), or the `golang_template_mxj_*` family; `request.xmlTransform` controls escaping and `request.xmlDeclaration` / `xmlRootAnnotation` wrap the body.
- Transform families: `golang_template_text_*` (raw payload string as `.`), `golang_template_json_*` (parsed first), `golang_template_mxj_*` (XML parsed), `schema_driven_xml_*`. Versions `v0.1.0`/`v0.3.0`; use `v0.3.0` for new work. There is no jsonnet transform. Template functions (`pkg/stream_transform`): `separator`, `jsonMapFromString`, `getXPath`, `getXPathAllOuter`, `getRegexpFirstMatch`, `getRegexpAllMatches`, `safeIndex`, `toBool`, `toInt`, and from `v0.2.0` `toJson`, `kindOf`, `plus1`; `printf "%q"` and the rest of Go's text/template are available.
- **String-typed fields**: `x-stackQL-stringOnly: true` on a schema property keeps a string value verbatim on the way in (a JSON-looking string such as a policy document or serialized config is not parsed into an object, `shims.go`) and marks the path as stringified on the way out. Set it in pre-normalize.

Skip a non-JSON endpoint unless the transform yields a genuinely useful row (a download URL, a rendered document as one text column).

## Request shaping: naive bodies, nativeCasing, request transforms

- `config.requestBodyTranslate.algorithm: naive` (from `--naive-req-body-translate`): body properties are bare columns. Without it, columns are `data__<name>`. `naive_<path>` takes the suffix as a path into the request-body schema (`FindByPath`, `operation_store.go`) and exposes the properties of the object at that path as the columns (with `nativeCasing` their snake forms too); nothing in the body assembly re-nests them under `<path>` on the wire, so for a `{parent: {...}}` body prove the wire shape against the mock and pair it with a request transform if the API needs the nesting.
- **Bare-array bodies** (`POST /secrets` taking `[{name, value}]`, `DELETE` taking `["name"]`): rewrite the body schema to the single-item object in pre-normalize and attach `request.transform` in post-process. The transform input is the marshalled JSON body string: text template `'[{{ . }}]'` wraps an object into an array; JSON template `'[{{ toJson .name }}]'` extracts a field. One item per statement - say so in the docs.
- **DELETE with a body**: add the naive config in post-process; the attributes are then WHERE keys (`DELETE FROM t WHERE ref = ... AND ipv4_addresses = '[...]'`).
- **Dual-declared parameters** (the same attribute as a deprecated query param and a body property): remove the query copies in pre-normalize or the body arrives empty.
- `request.mediaType` selects the request content type when several are declared. `request.base` is a JSON object merged **under** the statement's body attributes (the columns overwrite its keys) and sent alone when the statement supplies none; `request.default` is the body sent only when the statement supplies no body attributes at all (`request.go`). `request.required: [attr, ...]` marks body attributes required at the method level without editing the schema (`operation_store.go`) - the engine-native way to force INSERT columns. `request.projection_map` / `response.projection_map` (`alias: wireName`) feed the address-space aliasing; prefer `x-stackQL-alias` on the parameter or property.

Engine typing facts (stackql v0.10.6xx): INSERT marshals typed JSON (booleans, numbers); EXEC parses JSON-shaped strings into arrays/objects but cannot carry a boolean at all; **UPDATE marshals every SET value as a string** (`SET enabled = 'true'` -> `"enabled": "true"`; bare `true` is a parser error, `json('true')` serialises the AST). Document it and make the live smoke test the coercion probe. Parser keywords to quote as columns: `"database"`.

## snake_case surface

Two halves, both needed when the wire is camelCase (or mixed):

1. `snake_case_aliases: true` in the provider config - output columns display as `casing.ToSnake(wireKey)` while extraction uses the wire key. Nested JSON keeps wire casing (`json_extract(config, '$.dbAllowedCidrs')`).
2. `request.nativeCasing: camel` (also `pascal`, `kebab`, `snake`) on each method whose **parameters or body properties** are camelCase - snake SQL keys are converted back and re-resolved. Set it per method in post-process (provider-utils has no flag for it). Do not set it on methods whose wire is snake_case; do set it on body-less GETs with camelCase query parameters.

Then `generate-docs --snake-case-aliases` so the docs show the same surface. Renaming a column between provider versions (`instanceId` -> `instance_id`) is an accepted breaking change; renaming a resource or moving a method is not.

Watch for collisions: a schema carrying both `connection_string` and `connectionString` produces two identical snake columns and a DDL error at query time - drop the camel duplicate in pre-normalize.
