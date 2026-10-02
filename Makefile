# StackQL myprovider provider - build, test and docs pipeline.
#
# Every step is deterministic and re-runnable; manual mapping decisions live
# in provider-dev/scripts (rules, skip codes, fix classes), never in
# hand-edited artifacts. `make all` runs the full chain:
#   fetch/pin the spec -> inventory -> split service specs -> mappings ->
#   pre-normalize -> normalize -> generate (+ post-process, views, GraphQL
#   merge) -> offline + integration + meta-route tests -> docs -> website.
# `make all` never needs credentials and never bills; the live smoke targets
# (`make smoke*`) are separate and source .env when present.
#
# Requirements: Node >= 22.19, GNU make + bash, a stackql binary ($STACKQL,
# ./stackql or on PATH - bin/start-server.sh downloads one if none is found),
# Python 3 (a venv with pystackql is created on demand for the smoke suite),
# yarn for the website. Runs on Linux, macOS or WSL.
#
# TODO(template): set PROVIDER (or run bin/init-provider.sh), then review
# every target marked TODO as the provider comes together. Rename
# smoke-gated-lifecycle to the expensive lifecycle the provider gates
# (smoke-service, smoke-project-lifecycle, ...), or delete it.

SHELL := bash
.DEFAULT_GOAL := help

PROVIDER := myprovider
VERSION := v00.00.00000
OPENAPI_DIR := provider-dev/openapi
SERVICES_DIR := $(OPENAPI_DIR)/src/$(PROVIDER)
PROVIDER_DIR := $(SERVICES_DIR)/$(VERSION)
SOURCE_DIR := provider-dev/source
CONFIG_DIR := provider-dev/config
GRAPHQL_DIR := provider-dev/source-graphql
PORT ?= 5444
VENV := .venv
PY := $(VENV)/bin/python
ENV_FILE := .env

.PHONY: help deps fetch-spec refresh-spec inventory split mappings mappings-report pre-normalize normalize generate post-process graphql-merge build \
        test-offline test-integration test-meta test venv smoke smoke-live smoke-read-only smoke-gated-lifecycle smoke-cleanup \
        docs website website-start start-server stop-server server-status clean all

help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-24s %s\n", $$1, $$2}'

deps: ## install node dependencies (latest @stackql/provider-utils per package.json range)
	npm install

# ---------------------------------------------------------------- pipeline

fetch-spec: ## download the upstream spec and verify it against the pin (fails on drift)
	npm run fetch-spec

refresh-spec: ## download the spec and ACCEPT the upstream change (rewrites the pin - review the diff)
	npm run fetch-spec -- --update

inventory: ## build provider-dev/config/endpoint_inventory.csv from the pinned spec
	npm run build-inventory

split: ## split the pinned spec into per-service specs (ordered path rules in service_names.json)
	npm run split -- --provider-name $(PROVIDER) --overwrite

mappings: ## regenerate all_services.csv from scratch and apply the deterministic mapping rules
	rm -f $(CONFIG_DIR)/all_services.csv
	npm run generate-mappings -- --provider-name $(PROVIDER) --input-dir $(SOURCE_DIR) --output-dir $(CONFIG_DIR)
	npm run map-operations

mappings-report: ## print every derived mapping without writing (design RESOURCE_RULES / METHOD_RULES)
	npm run map-operations -- --report

pre-normalize: ## provider-specific spec surgery on provider-dev/source before the generic normalize pass
	npm run pre-normalize

normalize: ## generic provider-utils normalize pass (allOf flatten, oneOf/anyOf lowering, bare-array wrap)
	npm run normalize -- --api-dir $(SOURCE_DIR)

generate: ## generate the provider (servers, auth, naive request bodies, views), then post-process and GraphQL merge
	rm -rf $(OPENAPI_DIR)/*
	npm run generate-provider -- \
	  --provider-name $(PROVIDER) \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(SERVICES_DIR) \
	  --config-path $(CONFIG_DIR)/all_services.csv \
	  --servers $(CONFIG_DIR)/servers.json \
	  --provider-config $(CONFIG_DIR)/provider_config.json \
	  --naive-req-body-translate \
	  --overwrite
	$(MAKE) post-process
	$(MAKE) graphql-merge

# Add `--service-config $(CONFIG_DIR)/service_config.json` to generate when
# a document-level x-stackQL-config (pagination, variations,
# queryParamPushdown) applies to every service; `--skip-files '["x.yaml"]'`
# for a split service that must not ship; `--update-path-param-names` when
# the vendor's path parameters are camelCase. Views under ./views/<service>/
# views.yaml are spliced automatically.

post-process: ## re-apply everything the generator cannot express (numbered rules in post_process.mjs)
	npm run post-process

graphql-merge: ## merge GraphQL-backed resources from provider-dev/source-graphql (no-op when the manifest lists no ops)
	npm run graphql-merge -- --provider-dir $(PROVIDER_DIR) --source-dir $(GRAPHQL_DIR)

build: fetch-spec inventory split mappings pre-normalize normalize generate ## full spec -> provider pipeline

# ------------------------------------------------------------------- tests

test-offline: ## offline validation against the local file registry (SHOW / DESCRIBE, no network)
	npm run test-offline

test-integration: ## row-level and wire-level assertions against the mock API
	npm run test-integration

# The server is always torn down and the meta-route walk's exit status is
# preserved so a failure stops `make all`.
test-meta: ## meta-route walk (every service, resource, method) against a local stackql server
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)
	node bin/test-meta-routes.cjs $(PROVIDER) --port $(PORT); status=$$?; bash bin/stop-server.sh --port $(PORT); exit $$status

test: test-offline test-integration test-meta ## all credential-free test layers

start-server: ## start a local stackql server on PORT (default 5444) over provider-dev/openapi
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)

stop-server: ## stop the local stackql server
	bash bin/stop-server.sh --port $(PORT)

server-status: ## status of the local stackql server
	bash bin/server-status.sh --port $(PORT)

# ------------------------------------------------------------------- smoke

$(VENV)/bin/activate:
	python3 -m venv $(VENV)
	$(VENV)/bin/pip install --quiet --upgrade pip pystackql

venv: $(VENV)/bin/activate ## create the python venv with pystackql for the smoke suite

# The smoke targets source .env when present so a developer checkout works
# without exporting anything; CI sets the variables from secrets.
with_env = set -a; [ -f $(ENV_FILE) ] && source <(tr -d '\r' < $(ENV_FILE)); set +a;

smoke: venv ## live smoke suite with the locally generated provider - reads + cheap self-cleaning write lifecycles (needs .env)
	@$(with_env) $(PY) tests/smoke_test.py

smoke-live: venv ## live smoke suite against the PUBLISHED provider in the stackql registry (post-publish verification)
	@$(with_env) $(PY) tests/smoke_test.py --live

smoke-read-only: venv ## live read smokes only, no writes
	@$(with_env) $(PY) tests/smoke_test.py --read-only

smoke-gated-lifecycle: venv ## live suite INCLUDING the gated expensive create/delete lifecycle (TODO: rename per provider)
	@$(with_env) $(PY) tests/smoke_test.py --with-gated-lifecycle

smoke-cleanup: venv ## sweep stackql-smoke-* breadcrumbs and exit
	@$(with_env) $(PY) tests/smoke_test.py --cleanup-only

# -------------------------------------------------------------------- docs

docs: ## generate the website docs (snake_case surface), then sanitize for MDX
	npm run generate-docs -- \
	  --provider-name $(PROVIDER) \
	  --provider-dir ./$(PROVIDER_DIR) \
	  --output-dir ./website \
	  --provider-data-dir ./provider-dev/docgen/provider-data \
	  --snake-case-aliases
	npm run sanitize-docs

website: ## build the docusaurus microsite (vendors the shared stackql config first)
	cd website && yarn install && yarn build

website-start: ## run the docusaurus dev server
	cd website && yarn install && yarn start

# ------------------------------------------------------------------- misc

clean: ## remove generated artifacts (provider output, docs, website build, test registry copy)
	rm -rf $(OPENAPI_DIR)/* website/build website/.docusaurus website/docs/services tests/integration/.registry-tmp stackql-server.log

all: deps build test docs website ## everything non-live: deps, pipeline, tests, docs, site build
