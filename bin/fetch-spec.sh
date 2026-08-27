#!/usr/bin/env bash

# Downloads the upstream OpenAPI spec into a temp dir, then hands it to
# provider-dev/scripts/record_spec_pin.mjs which applies the deterministic
# fix classes, validates with @apidevtools/swagger-parser, redacts
# credential-shaped example values, verifies the result against
# provider-dev/config/spec_pin.json and only then writes the snapshot into
# provider-dev/downloaded/.
#
# If the download does not match the recorded pin the script fails without
# writing anything; pass --update to accept the upstream change and rewrite
# the pin (treat the resulting spec diff as a reviewed refresh - run
# .claude/skills/stackql-provider-development/scripts/spec_diff.mjs on the
# old and new snapshots and record the summary in NOTES.md).
#
# SPEC_URL and SPEC_FILE come from provider-dev/scripts/lib/spec_helpers.mjs
# (the single source of provider constants). A vendor with several
# documents: call record_spec_pin.mjs once per document (each pins under
# specs.<name>).
#
# Usage: bin/fetch-spec.sh [--update]

set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
DOWNLOAD_DIR="$REPO_ROOT/provider-dev/downloaded"
PIN_FILE="$REPO_ROOT/provider-dev/config/spec_pin.json"

# Read the constants from the shared helper so they are defined once (the
# import is relative to the repo root, so no shell path reaches node).
eval "$(cd "$REPO_ROOT" && node --input-type=module -e "
const h = await import('./provider-dev/scripts/lib/spec_helpers.mjs');
console.log('SPEC_URL=' + JSON.stringify(h.SPEC_URL));
console.log('SPEC_FILE=' + JSON.stringify(h.SPEC_FILE));
")"

if [ -z "${SPEC_URL:-}" ] || [[ "$SPEC_URL" == *example.com* ]]; then
  echo "fetch-spec: SPEC_URL is not configured - set it in provider-dev/scripts/lib/spec_helpers.mjs" >&2
  exit 1
fi

UPDATE=false
if [ "${1:-}" = "--update" ]; then
  UPDATE=true
fi

mkdir -p "$DOWNLOAD_DIR"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "Fetching spec from $SPEC_URL"
# TODO(template): add auth headers here if the vendor gates its spec
# (curl -H "Authorization: Bearer $X" ...); never commit the value.
curl -fsSL "$SPEC_URL" -o "$TMP_DIR/$SPEC_FILE"

UPDATE="$UPDATE" TMP_DIR="$TMP_DIR" DOWNLOAD_DIR="$DOWNLOAD_DIR" PIN_FILE="$PIN_FILE" \
SPEC_URL="$SPEC_URL" SPEC_FILE="$SPEC_FILE" \
node "$REPO_ROOT/provider-dev/scripts/record_spec_pin.mjs"

echo "Spec snapshot at $DOWNLOAD_DIR/$SPEC_FILE, pin recorded in $PIN_FILE"
