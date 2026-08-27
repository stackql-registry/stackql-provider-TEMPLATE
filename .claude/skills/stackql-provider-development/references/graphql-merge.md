# GraphQL operations

Merge GraphQL-backed resources when the REST API lacks the data (GitHub Discussions, star history with `starred_at`, contribution calendars, SAML identities, Cloudflare's GraphQL Analytics replacing sunset REST analytics). They are SELECT-only resources declared through the operation-level extension `x-stackQL-graphQL`:

```yaml
  /graphql?resource=star_history:          # synthetic unique path key; the reader clears the query string
    post:
      operationId: graphql/activity/star_history/list
      x-stackQL-graphQL:
        url: https://api.github.com/graphql   # informational - routing is servers + path key
        httpVerb: POST
        responseSelection:
          jsonPath: $.data.repository.stargazers.edges[*]
        cursor:
          strategy: page_info                  # cursor_after (default) | page_info | keyset | offset
          jsonPath: $.data.repository.stargazers.pageInfo.endCursor
          terminateOnJsonPath: $.data.repository.stargazers.pageInfo.hasNextPage
        query: |
          query {
            repository(owner: "{{ .owner }}", name: "{{ .repo }}") {
              stargazers(first: 100, orderBy: {field: STARRED_AT, direction: ASC}{{ .cursor }}) {
                pageInfo { endCursor hasNextPage }
                edges { starred_at: starredAt user: node { login id url } }
              }
            }
          }
      x-stackql-protocol: graphql
      parameters:
        - {name: owner, in: query, required: true, schema: {type: string}}
        - {name: repo, in: query, required: true, schema: {type: string}}
      responses:
        '200': {description: Response, content: {application/json: {schema: {...nested envelope down to edges: array of row objects...}}}}
```

```yaml
    star_history:
      id: github.activity.star_history
      name: star_history
      methods:
        list:
          operation: {$ref: '#/paths/~1graphql?resource=star_history/post'}
          response: {mediaType: application/json, openAPIDocKey: '200', objectKey: $.data.repository.stargazers.edges}
          x-stackql-protocol: graphql
      sqlVerbs:
        select: [{$ref: '#/components/x-stackQL-resources/star_history/methods/list'}]
        insert: []
        update: []
        delete: []
        replace: []
```

Semantics: every declared parameter supplied in WHERE becomes a Go-template variable of the same name (`{{ .owner }}`); a pushed-down `LIMIT` arrives as `{{ .limit }}` (guard optional ones with `{{ if .x }}...{{ end }}`); `{{ .cursor }}` is spliced by the cursor strategy (`, after: "..."` for `cursor_after`/`page_info`, a `format` template rendered from the last row's key for `keyset`, `, offset: N` for `offset` with `pageSize`); `responseSelection.jsonPath` must select an array of objects (a `response.transform` on the method runs first, so a JSON template can flatten `dimensions`/`sum` groups into flat rows); any non-empty top-level `errors` aborts the read; GraphQL string literals must not contain newlines or backslashes (the query is newline-stripped and only `"` is escaped).

Process (github's `provider-dev/source-graphql/` + `graphql_merge.mjs`, run as the last step of `make provider`):

1. Author one fragment per op: `service`, `resource`, `title`, `description`, `parameters` (plain OpenAPI parameter objects), `selection` (a plain dotted path, no `[*]`), optional `cursor`, `query`, `rowSchema` (so `DESCRIBE` and the docs show real columns). A `manifest.yaml` lists the `graphql_url`, any GraphQL-only services, and the ops.
2. The merge script builds the operation (`responseSelection` = selection + `[*]`), reconstructs the nested response schema down to `items: rowSchema` (plus a `pageInfo` sibling for `page_info`), builds the select-only resource (`objectKey` = the bare selection), appends `providerServices` entries for GraphQL-only services, and re-sorts keys.
3. Idempotency: the merge first strips every path operation and resource whose methods all carry `x-stackql-protocol: graphql`, so regeneration is safe and the fragments are the single source of truth. It throws on a path-key POST collision or a resource name that already exists as REST.

Pitfalls: an op **must** carry a `cursor` block even when single-page (any-sdk gates the response JSONPath on it - emit a dummy `cursor: {jsonPath: $.data.__no_cursor}` and let `cursor_after` treat the failed lookup as EOF); `page_info` without `terminateOnJsonPath` and `keyset` without `format` are fatal; the static analyzer skips GraphQL methods, so the integration mock must cover them; nested objects arrive as JSON columns (`json_extract(user, '$.login')`); note token-permission caveats in the description.
