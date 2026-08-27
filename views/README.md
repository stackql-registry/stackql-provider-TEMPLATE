# Provider views

Views are virtual, SELECT-only resources spliced into the generated provider at generate time from `views/<service>/views.yaml` (provider-utils reads `./views` automatically when the directory exists). They are documented like any other resource and tested in the offline layer with `SELECT * FROM <provider>.<service>.<view>`.

Good candidates: json_extract-heavy posture queries, multi-resource UNIONs, the provider's "estate inventory". API-derived resources win on a name collision, so prefix views `vw_`.

A file is a top-level YAML mapping of view name -> resource body:

```yaml
vw_ssl_posture:
  name: vw_ssl_posture
  id: myprovider.config.vw_ssl_posture
  config:
    docs:
      fields:
      - {name: applied_successfully, type: boolean, description: Whether the current config was applied.}
      - {name: ssl_enforced, type: boolean, description: Whether SSL is enforced on database connections.}
      requiredParams:            # optional; templated as '{{ name }}' in the ddl
      - {name: ref, type: string, description: Project ref.}
    views:
      select:
        predicate: sqlDialect == "sqlite3"
        ddl: |-
          SELECT applied_successfully,
                 JSON_EXTRACT(current_config, '$.database') AS ssl_enforced
          FROM myprovider.config.ssl_enforcement_configs
          WHERE ref = '{{ ref }}'
        fallback:
          predicate: sqlDialect == "postgres"
          ddl: |-
            SELECT applied_successfully,
                   (current_config->>'database')::boolean AS ssl_enforced
            FROM myprovider.config.ssl_enforcement_configs
            WHERE ref = '{{ ref }}'
```

`docs.fields` is what the doc page renders; `views.select.ddl` is what the engine runs, with the `sqlite3` form first and a `postgres` `fallback` for server mode. Shipped examples: the confluent and awscc providers in the stackql-registry organization. Delete this directory if the provider ships no views.
