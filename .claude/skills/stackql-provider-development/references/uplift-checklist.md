# Uplifting an existing provider

1. Bump `@stackql/provider-utils` / `@stackql/pgwire-lite` / `@apidevtools/swagger-parser` / Docusaurus to latest (`js-yaml` stays on 4.x - see the SKILL.md ground rules); Node >= 22.19 in `engines`, the Makefile header, the README prerequisites and every `setup-node` step; `npm install`. Add `SECURITY.md` and `LICENSE` from the template when absent.
2. `make fetch-spec`; if drift, review the diff, extend fix classes, `make refresh-spec`, record in NOTES.md.
3. Re-run the pipeline; diff `all_services.csv` - every moved method or renamed resource is a decision to make explicitly (keep the old name via a rule unless the rename is worth the break).
4. Add what is missing against this list: env-var scoping, naive bodies, snake surface, pagination, pushdown, transforms, objectKeys, lifecycle EXECs attached to their resources, views, GraphQL merge, skip codes for what is not mappable.
5. Convert ad-hoc scripts into Makefile targets; add `make all`.
6. Write or extend the three test layers until they cover every archetype present; add the smoke suite with `--live`.
7. Refresh CLAUDE.md, NOTES.md, README.md, `.env.example`, the docs headers; `make docs && make website`.
8. `make all` green from a clean checkout before handing over.
