# Provider views

Views are virtual resources injected at generate time from `views/<service>/views.yaml` (`--views-dir`, defaulting to `./views`), documented like any resource. A file is a top-level YAML mapping of view name -> resource body; API-derived resources win on a name collision, so prefix views `vw_`:

```yaml
vw_ssl_posture:
  name: vw_ssl_posture
  id: <provider>.config.vw_ssl_posture
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
          FROM <provider>.config.ssl_enforcement_configs
          WHERE ref = '{{ ref }}'
        fallback:
          predicate: sqlDialect == "postgres"
          ddl: |-
            SELECT applied_successfully,
                   (current_config->>'database')::boolean AS ssl_enforced
            FROM <provider>.config.ssl_enforcement_configs
            WHERE ref = '{{ ref }}'
```

`docs.fields` is what the doc page renders; `views.select.ddl` is what the engine runs, with the `sqlite3` form first and a `postgres` `fallback` for server mode (the predicate is matched against stackql's SQL system name - `sqlite3` or `postgres`; an empty predicate matches every dialect). provider-utils splices the fragment verbatim, so the engine learns a view's required parameters **only** from a `requiredParams == ["ref"]` clause in the predicate (any-sdk `view.go`, passed to `CreateView` by stackql); `docs.requiredParams` is docs-only. When the DDL templates `'{{ ref }}'`, write `predicate: sqlDialect == "sqlite3" && requiredParams == ["ref"]` (and the same on the fallback) and confirm in the offline layer that `SHOW METHODS` lists the parameter. Good candidates: json_extract-heavy posture queries, multi-resource UNIONs, the "estate inventory" of a provider. Test each with `SELECT * FROM <provider>.<service>.<view>` in the offline layer.
