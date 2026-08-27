# Engineering Notes

The memory of the build: numbered findings with evidence (what was measured, against what, what was decided and why), the blockers only a live run can resolve, and the testing requirements. A future refresh reads this before touching a rule. Cross-build findings from the sibling providers (see the skill's reference-repos.md) are reused, not re-derived - cite them by repo and finding number rather than restating them.

Sources: the pinned spec snapshot (`provider-dev/downloaded/`, sha256 and date from `provider-dev/config/spec_pin.json`), live probes against the API, the sibling builds' NOTES.md.

## Findings

TODO(template): one numbered section per finding, in the order they were established. The shape:

### 1. <Finding title>

**Question.** What had to be established.

**Evidence.** What was measured (the spec path / schema, the live response, the any-sdk source line, the mock run) - enough that a reader can re-check it.

**Decision.** What was decided and where it lives (the rule, the config key, the doc section).

Findings every direct build ends up recording: the spec source and its defects (fix classes and counts); the envelope style per operation family; whether and how each list endpoint pages; the scoping variable and its root-path exceptions; the auth construct and the env var names (Terraform parity); which PUTs are really full replacements; bare-array bodies and their transforms; the engine typing facts observed (UPDATE strings, EXEC booleans); the rate limit and the pacing constant; the vendor's labelling; the flagship binding; the docs examples verified against the generated surface.

## Spec refreshes

TODO(template): one entry per `make refresh-spec`, newest first - date, pinned sha256 before and after, the `spec_diff.mjs` summary (operations added / removed / renamed, schemas changed), the `all_services.csv` diff decision (kept the old name via a rule, or accepted the break and why), new fix classes.

## Blockers - what only the first live run can establish

TODO(template): the open questions the smoke suite answers, e.g. whether a PUT is a full replacement, whether the API accepts the naive body shape for X, the real rate-limit window, the eventual-consistency delay after a create.

## Testing requirements

- `make test` green after every regeneration (offline, integration, meta-route).
- `make smoke` against the dedicated dev account before a publish; `make smoke-live` after.
- Budget: TODO(template) - the per-run cost estimate and what the gated lifecycle adds.
