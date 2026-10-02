# Repository layout and Makefile

```
Makefile                       # make help / build / test / smoke* / docs / website / all
bin/                           # fetch-spec.sh, split.mjs, start-server.sh, stop-server.sh, server-status.sh, test-meta-routes.cjs
provider-dev/
  downloaded/                  # pinned spec snapshot (or the SDK-derived spec)
  config/                      # spec_pin.json, service_names.json, servers.json, provider_config.json,
                               # endpoint_inventory.csv, all_services.csv
  scripts/                     # record_spec_pin, build_inventory, map_operations, pre_normalize, post_process, lib/spec_helpers
  source/                      # split + normalized service specs (committed)
  openapi/src/<provider>/      # generated provider (committed)
  docgen/provider-data/        # headerContent1.txt, headerContent2.txt
views/<service>/views.yaml     # optional provider views
tests/
  offline_validation.mjs
  integration/                 # mock_<provider>_server.mjs, run_integration_tests.mjs, probe.mjs
  smoke_test.py
website/                       # Docusaurus microsite
.github/workflows/             # build-and-test.yml, prod-web-deploy.yml, test-web-deploy.yml
CLAUDE.md  NOTES.md  README.md  SECURITY.md  LICENSE  .env.example
```

Makefile targets (bash shell, `.DEFAULT_GOAL := help`, `##` help comments): `deps`, `fetch-spec` (verify pin), `refresh-spec` (`--update`), `inventory`, `split`, `mappings` (rm CSV + analyze + map), `pre-normalize`, `normalize`, `generate` (rm output + generate + post-process), `post-process`, `build` (the chain), `test-offline`, `test-integration`, `test-meta` (start server; run; stop; preserve exit status), `test`, `venv`, `smoke`, `smoke-live`, `smoke-read-only`, `smoke-<gated-lifecycle>`, `smoke-cleanup`, `docs`, `website`, `website-start`, `clean`, `all` = `deps build test docs website`. `make all` never needs credentials and never bills. The smoke targets source `.env` when present (`set -a; source <(tr -d '\r' < .env); set +a`).

package.json scripts wrap the two CLI entry points through `node ./node_modules/@stackql/provider-utils/bin/provider-dev-utils.mjs <cmd>` and `docgen-utils.mjs generate-docs` (never `.bin` shims); pass flags after `--`.

CLAUDE.md records the settled decisions and where the findings live; NOTES.md records the findings with evidence; README.md is the numbered build guide (steps 0-8) with counts that match the artifacts.
