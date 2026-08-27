#!/usr/bin/env bash

# Find shipped examples of a StackQL/any-sdk extension key in a clone of
# https://github.com/stackql/stackql-provider-registry (or any directory of
# provider YAMLs). Prints, per provider, the first few matches with context
# so the exact YAML shape can be copied rather than guessed.
#
# Usage: find_extension_examples.sh <key> [registry-dir] [max-per-provider]
#   find_extension_examples.sh nativeCasing ../stackql-provider-registry
#   find_extension_examples.sh 'x-stackQL-graphQL' ../stackql-provider-registry 2
#   find_extension_examples.sh 'queryParamPushdown' . 5
#
# Keys worth searching: objectKey, nativeCasing, snake_case_aliases,
# x-stackQL-envVar, x-stackQL-graphQL, x-stackQL-config, pagination,
# requestToken, queryParamPushdown, 'transform:', schema_override,
# overrideMediaType, requestBodyTranslate, 'views:', 'auth:', retry.

set -euo pipefail

KEY="${1:-}"
DIR="${2:-.}"
MAX="${3:-3}"
if [ -z "$KEY" ]; then
  sed -n '3,20p' "$0"
  exit 2
fi
if [ ! -d "$DIR" ]; then
  echo "not a directory: $DIR" >&2
  exit 2
fi

# providers/src/<provider>/... in a registry clone; otherwise group by top-level dir
if [ -d "$DIR/providers/src" ]; then
  BASE="$DIR/providers/src"
else
  BASE="$DIR"
fi

found=0
for pdir in "$BASE"/*/; do
  provider="$(basename "$pdir")"
  matches="$(grep -rn --include='*.yaml' --include='*.yml' -F -- "$KEY" "$pdir" 2>/dev/null | head -n "$MAX" || true)"
  [ -z "$matches" ] && continue
  total="$(grep -rl --include='*.yaml' --include='*.yml' -F -- "$KEY" "$pdir" 2>/dev/null | wc -l | tr -d ' ')"
  echo "== $provider ($total file(s))"
  while IFS= read -r line; do
    file="${line%%:*}"
    rest="${line#*:}"
    lineno="${rest%%:*}"
    echo "-- ${file#"$BASE"/}:$lineno"
    sed -n "$((lineno > 3 ? lineno - 3 : 1)),$((lineno + 8))p" "$file" | sed 's/^/   /'
  done <<< "$matches"
  found=$((found + 1))
done
if [ "$found" -eq 0 ]; then
  echo "no matches for '$KEY' under $BASE"
  exit 1
fi
