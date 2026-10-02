#!/usr/bin/env bash

# One-shot placeholder rewrite for a fresh clone of the template.
#
# Replaces the template placeholders across the files that carry them:
#   myprovider              -> <name>        (SQL identifier: lower snake_case)
#   My Provider             -> <title>       (human-readable, docs and site)
#   MYPROVIDER              -> <NAME>        (env var prefix, upper snake_case)
#   https://api.example.com -> <api-base>    (optional third argument)
#
# Everything else (auth type, scoping variable, service rules, mapping rules,
# spec URL) is a decision the build makes afterwards - see CLAUDE.md and the
# stackql-provider-development skill. Review `git diff` after running.
#
# Usage: bin/init-provider.sh <name> "<Title>" [https://api.vendor.com]
#   e.g. bin/init-provider.sh datadog "Datadog" https://api.datadoghq.com

set -euo pipefail

NAME="${1:-}"
TITLE="${2:-}"
API_BASE="${3:-}"
if [ -z "$NAME" ] || [ -z "$TITLE" ]; then
  sed -n '3,16p' "$0"
  exit 2
fi
if ! [[ "$NAME" =~ ^[a-z][a-z0-9_]*$ ]]; then
  echo "name must be a lower snake_case SQL identifier (got '$NAME')" >&2
  exit 2
fi
UPPER="$(echo "$NAME" | tr '[:lower:]' '[:upper:]')"
SLUG="${NAME//_/-}"

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
cd "$REPO_ROOT"

FILES=(
  Makefile package.json package-lock.json README.md CLAUDE.md NOTES.md SECURITY.md .env.example
  bin/fetch-spec.sh
  provider-dev/scripts/lib/spec_helpers.mjs
  provider-dev/scripts/record_spec_pin.mjs
  provider-dev/scripts/post_process.mjs
  provider-dev/config/servers.json
  provider-dev/config/provider_config.json
  provider-dev/config/service_names.json
  provider-dev/source-graphql/manifest.yaml
  provider-dev/docgen/provider-data/headerContent1.txt
  provider-dev/docgen/provider-data/headerContent2.txt
  tests/offline_validation.mjs
  tests/integration/mock_myprovider_server.mjs
  tests/integration/run_integration_tests.mjs
  tests/integration/probe.mjs
  tests/smoke_test.py
  website/provider.js
  website/static/CNAME
  website/static/site.webmanifest
  .github/workflows/build-and-test.yml
)

for f in "${FILES[@]}"; do
  [ -f "$f" ] || continue
  # order matters: the upper-case token first so it is not caught by the lower-case one
  sed -i \
    -e "s/MYPROVIDER/${UPPER}/g" \
    -e "s/myprovider-provider\.stackql\.io/${SLUG}-provider.stackql.io/g" \
    -e "s/myprovider/${NAME}/g" \
    -e "s/My Provider/${TITLE}/g" \
    "$f"
  if [ -n "$API_BASE" ]; then
    sed -i -e "s#https://api\.example\.com#${API_BASE}#g" "$f"
  fi
done

if [ -f tests/integration/mock_myprovider_server.mjs ]; then
  git mv tests/integration/mock_myprovider_server.mjs "tests/integration/mock_${NAME}_server.mjs" 2>/dev/null \
    || mv tests/integration/mock_myprovider_server.mjs "tests/integration/mock_${NAME}_server.mjs"
  sed -i -e "s/mock_myprovider_server/mock_${NAME}_server/g" tests/integration/run_integration_tests.mjs tests/integration/probe.mjs
fi

echo "Rewrote placeholders: myprovider -> ${NAME}, 'My Provider' -> '${TITLE}', MYPROVIDER -> ${UPPER}${API_BASE:+, api.example.com -> ${API_BASE}}"
echo "Remaining placeholders (expected: none in the file list above):"
grep -rn --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.claude -e 'myprovider' -e 'My Provider' -e 'MYPROVIDER' . || echo "  none"
echo "Next: edit provider-dev/scripts/lib/spec_helpers.mjs (SPEC_URL, SPEC_FILE, SCOPE_PREFIX) and provider-dev/config/*.json, then 'make fetch-spec'."
