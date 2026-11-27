// The only site-local identity the microsite needs. Everything else comes
// from the shared stackql/docusaurus-config, vendored to .shared-config/ at
// build time (see package.json vendor-config).
export const providerName = 'myprovider';
export const providerTitle = 'My Provider';

// The header of llms.txt (@stackql/docusaurus-plugin-aeo): one sentence that
// says what the provider maps, for answer engines and AI assistants.
// TODO(template): name the API and the services in plain words (jira: "The
// StackQL jira provider: SQL access to the Jira Cloud platform REST API v3
// and the Jira Software REST API - issues and JQL search, projects, ...").
export const llmsTxtHeader = 'The StackQL myprovider provider: SQL access to the My Provider API.';

// Optional: the scoping server variable and its environment variable
// (x-stackQL-envVar). scripts/sanitize-docs.mjs annotates the generated
// examples "required unless <env var> is set" when both are set; leave null
// for a fixed-host API.
export const scopeVariable = null;   // e.g. 'organization_id'
export const scopeEnvVar = null;     // e.g. 'MYPROVIDER_ORG_ID'
