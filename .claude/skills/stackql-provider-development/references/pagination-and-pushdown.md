# Pagination and query-parameter pushdown

Configure pagination **per the vendor's documented scheme**, confirmed per endpoint in the inventory - never assume. Place the block at the narrowest level that is true: method `config.pagination` (post-process) when one collection paginates, document-level `x-stackQL-config.pagination` (`--service-config`) when a whole service does, provider config when the whole API does. Prove every scheme against a two-page mock fixture.

```yaml
pagination:
  algorithm: <absent = token | page_number | odata_next_link>
  requestToken:   {key: <name>, location: query|path|header|body|request}
  responseToken:  {key: <JSONPath or header name>, location: body|header|query|path}
  responseTerminator: {key: <JSONPath>, location: body}      # page_number only
```

| Vendor scheme | Config |
|---|---|
| Cursor / next-token in the body (`{data, cursor}`, `{items, next_page_token}`) | `requestToken: {key: cursor, location: query}`, `responseToken: {key: $.cursor, location: body}` - stops when the token is absent or empty |
| Next-page URL in the body (`$.next`, OData `@odata.nextLink`) | `requestToken: {key: '', location: request}`, `responseToken: {key: $.next, location: body}` (the value is the whole next request URL); `algorithm: odata_next_link` for OData |
| RFC 5988 `Link: <url>; rel="next"` header (github) | `requestToken: {key: '', location: request}`, `responseToken: {key: Link, location: header}` |
| Page number with a page count in the body | `algorithm: page_number`, `requestToken: {key: page, location: query}`, `responseToken: {key: $.page, location: body}`, `responseTerminator: {key: $.pages, location: body}` - stops when page >= pages |
| Offset/limit with no next marker | not expressible - expose `offset`/`limit` as WHERE parameters (parameter-driven windowing) and document it; do not fake a loop that never terminates |
| GraphQL cursors | graphql-merge.md |

`--http.response.pageLimit` bounds traversal; the vendor's page size parameter is a pushdown (`top`), not a pagination key.

Token blocks also accept `algorithm` and `args` keys; they are inert (any-sdk `pagination.go`): the only algorithm-sensitive path is `location: header`, where an empty `algorithm` with `key: Link` selects the RFC 5988 transformer and any other header key has the same `rel="next"` regex applied. Do not author them. Pagination blocks resolve method -> resource -> service -> providerService (`providerServices.<name>.config` in `provider.yaml`) -> provider.

**Predicate pushdown** needs no configuration for plain parameters: WHERE keys are matched against the operation's `parameters` by name in the order path -> query -> header -> cookie; `in: header` parameters are set as request headers; **any leftover WHERE key with no matching parameter is appended as a query parameter**. So `WHERE reveal = 'true'`, `WHERE services = 'db'`, `WHERE iso_timestamp_start = '...'` push down as soon as the parameter is declared (declare undocumented-but-real query params in pre-normalize when the vendor omits them). `x-stackQL-alias` on a parameter/property accepts an alternative WHERE name.

**Clause pushdown** (`queryParamPushdown`, inheriting method -> resource -> service -> providerService -> provider as whole-block replacement) rewrites SELECT columns, WHERE, ORDER BY, LIMIT, OFFSET and COUNT into API parameters:

```yaml
queryParamPushdown:
  select:  {dialect: odata|custom, paramName: $select, delimiter: ',', supportedColumns: [...]}
  filter:  {dialect: odata, paramName: $filter, syntax: odata, supportedOperators: [eq, ne, gt, ge, lt, le, startswith, endswith, contains, and], supportedColumns: [...]}
  orderBy: {dialect: odata, paramName: $orderby, supportedColumns: [...]}
  top:     {dialect: custom, paramName: limit, maxValue: 1000}
  skip:    {dialect: custom, paramName: offset, maxValue: ...}
  count:   {dialect: odata, paramName: $count, paramValue: 'true', responseKey: '@odata.count'}
```

- `dialect: odata` fills the `$select/$filter/$orderby/$top/$skip/$count` defaults (entra_id/msgraph/azure style); `custom` (the default) uses `paramName` verbatim - the common case is `top: {paramName: limit, maxValue: N}` so `LIMIT n` becomes `?limit=n` (clamped).
- Only OData rendering of `filter`/`orderBy` is implemented today (`query_param_pushdown_apply.go`): the `key_value`, `simple`, `prefix` and `suffix` syntaxes in any-sdk's `docs/provider_spec.md` parse into config but are never rendered; non-OData predicates are evaluated client-side as residuals, which is still correct, just not pushed.
- Empty `supportedColumns`/`supportedOperators` means all; `select` and `orderBy` are all-or-nothing (one unsupported column suppresses the parameter); list `and` in `supportedOperators` to push more than one predicate.
- A method-level block masks the whole service-level block (no per-field merge) - restate everything when overriding.

Header-bound predicates (an `X-Org-Id` or `Accept-Version` header the API filters on) are plain `in: header` parameters; give them a `schema.default` when the API needs them always.
