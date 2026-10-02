# Recording decisions and handing over

## What to record where

- **CLAUDE.md** - the settled decisions (archetype, scoping variable, auth, the flagship mapping, skip codes, casing policy), the toolchain rules, where the findings live, the non-negotiables. Short; it is read every session.
- **NOTES.md** - numbered findings with evidence (what was measured, against what, what was decided and why), a Blockers list of what only a live run can establish, and the testing requirements. It is the memory of the build; a future refresh reads it before touching a rule.
- **README.md** - the numbered build guide (steps 0-8: pin, inventory, split, mappings, normalize, generate, test, publish, docs) with counts that match the committed artifacts, the Makefile targets, credentials, and the CI description.
- **.env.example** - every live-test variable with a one-line comment; never a real value.
- **SECURITY.md** and **LICENSE** - carried from the template, placeholders rewritten by `bin/init-provider.sh`: the repository's private advisory form, the scope split between the provider and the engine, MIT. Not a build artifact; update only when the policy changes.

## Hand-over

Publishing to the registry is a separate, human-in-the-loop skill. Hand over: a clean `make all`, the live-run open questions listed in NOTES.md "Blockers" (what the first smoke run establishes), `.env.example`, and a short note on how to run `make smoke` / `make smoke-live` and raise a PR for fixes (rules in scripts, `make build && make test`).
