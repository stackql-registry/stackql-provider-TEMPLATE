# Security Policy

The StackQL team takes the security of the `myprovider` StackQL provider seriously. We appreciate everyone who reports vulnerabilities responsibly, and we will do our best to acknowledge and address valid reports promptly.

## Reporting a Vulnerability

Please do not open a public GitHub issue for security reports. A public issue discloses the problem before a fix is available and puts users at risk.

Instead, report privately using GitHub private vulnerability reporting:

1. Open the [new advisory form](https://github.com/stackql-registry/stackql-provider-myprovider/security/advisories/new) (Security tab -> Advisories -> "Report a vulnerability").
2. Provide as much detail as you can: the provider version (`SHOW PROVIDERS` in a `stackql shell`, or the version directory under `provider-dev/openapi/src/myprovider/`), the resource and method involved, reproduction steps (the SQL statement and the request it produced, with credentials redacted), impact, and any suggested remediation.
3. Submit. This opens a private advisory thread visible only to you and the maintainers.

If you cannot use GitHub private vulnerability reporting, email us at [info@stackql.io](mailto:info@stackql.io). Please put "SECURITY" in the subject line and treat the contents as confidential.

## Supported Versions

Security fixes are applied to the latest version of the provider published to the [StackQL provider registry](https://github.com/stackql/stackql-provider-registry); `REGISTRY PULL myprovider` installs it. Earlier published versions are supported on a best-effort basis only; we recommend pulling the latest version.

## Response Expectations

These are targets, not contractual guarantees:

- We aim to acknowledge a report within a few business days.
- We will keep you updated as we investigate and work on a fix.
- We will coordinate disclosure timing with you once a fix or mitigation is ready.

## Disclosure Policy

We follow coordinated (responsible) disclosure. Please give us a reasonable opportunity to release a fix before any public disclosure. We are happy to credit reporters in the advisory and release notes, unless you prefer to remain anonymous.

## Scope

This policy covers what this repository produces and runs: the generated provider definition under `provider-dev/openapi/`, the build scripts under `provider-dev/scripts/` and `bin/`, the test harnesses under `tests/` (including the mock API server), the documentation site under `website/`, and the CI workflows. Reports in scope include a credential or token leaking into a generated document, a log, a docs page or a test fixture; a server template or request transform that sends a credential to a host other than the My Provider API; and a test harness that reaches a live account when it should not.

Issues in the following belong elsewhere:

- The `stackql` engine (SQL parsing, authentication handling, the HTTP client): [stackql/stackql](https://github.com/stackql/stackql/security/policy).
- The request-execution library: [stackql/any-sdk](https://github.com/stackql/any-sdk).
- The provider build tooling: [stackql-registry/stackql-provider-utils](https://github.com/stackql-registry/stackql-provider-utils).
- The My Provider API itself: the vendor's own security program. This provider describes that API; it does not operate it.

## Credentials

The provider reads credentials from environment variables at query time and does not store them. The live smoke suite reads them from `.env`, which is excluded from version control; never commit a real credential. If a credential is committed or published by mistake, rotate it first, then report the exposure as above.
