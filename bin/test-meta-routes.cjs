#!/usr/bin/env node

// Meta-route walk: every service, resource and method of the provider is
// visited with SHOW / DESCRIBE against a local stackql server (pgwire).
// A service with no resources, a resource with no methods, two methods of
// one SQL verb with the same required-parameter signature, or a selectable
// resource whose DESCRIBE EXTENDED returns no columns fails the run - fix
// the mapping (skip-code, or inject a schema), never the test.
//
// Services are walked by a bounded pool of workers (--concurrency, default
// 8), so a large provider finishes in minutes. Each service's output is
// buffered and printed when the service finishes, so the log stays readable.
//
// Usage: node bin/test-meta-routes.cjs <provider> [--port 5444] [--host 127.0.0.1]
//                                      [--concurrency 8] [--verbose] [--timeout 60000]

const { runQuery } = require('@stackql/pgwire-lite');

const args = process.argv.slice(2);
let provider = null;
// IPv4 loopback, not 'localhost': stackql srv binds 0.0.0.0 and Node
// resolves 'localhost' to ::1 first, which refuses the connection
let host = '127.0.0.1';
let port = 5444;
let verbose = false;
let timeoutMs = 60000;
let concurrency = 8;

for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    switch (args[i]) {
      case '--port': port = parseInt(args[++i], 10); break;
      case '--host': host = args[++i]; break;
      case '--verbose': verbose = true; break;
      case '--timeout': timeoutMs = parseInt(args[++i], 10); break;
      case '--concurrency': concurrency = Math.max(1, parseInt(args[++i], 10)); break;
      case '--help':
        console.log('Usage: test-meta-routes.cjs <provider> [--port PORT] [--host HOST] [--concurrency N] [--verbose] [--timeout MILLISECONDS]');
        process.exit(0);
        break;
      default:
        console.error(`Error: Unknown option "${args[i]}"`);
        process.exit(1);
    }
  } else if (!provider) {
    provider = args[i];
  }
}
if (!provider) {
  console.error('Error: Provider name must be specified');
  console.error('Usage: test-meta-routes.cjs <provider> [OPTIONS]');
  process.exit(1);
}

const connectionOptions = { user: 'stackql', database: 'stackql', host, port, debug: false, statement_timeout: timeoutMs };
const startTime = new Date();

// resources whose select response is a scalar (text) body - a single
// anonymous column at query time, so DESCRIBE EXTENDED is legitimately
// empty. Keep it empty unless a resource genuinely returns a scalar; a
// response transform in post_process.mjs that yields real columns (a {value}
// row) is the better fix.
const SCALAR_RESPONSE_RESOURCES = new Set([]);

const results = {
  provider,
  totalServices: 0,
  totalResources: 0,
  totalMethods: 0,
  selectableMethods: 0,
  nonSelectableResourceCount: 0,
  nonSelectableResources: [],
  scalarResponseResources: [],
  failures: [],
  errors: [],
  summary: { errors: 0 }
};

// Runs a query; returns its rows ([] when the statement yields none, null
// when the resource is not selectable). Query errors are recorded.
async function executeQuery(query, description, out) {
  try {
    const result = await runQuery(connectionOptions, query);
    const rows = result.data || [];
    out.push(verbose ? `${description}: ${query} -> ${rows.length} rows` : `${description}... OK${rows.length ? ` (${rows.length} rows)` : ''}`);
    return rows;
  } catch (error) {
    out.push(`${description}... FAIL`);
    results.errors.push({ query, description, error: error.message });
    results.summary.errors++;
    if (error.message.includes('the last operation didn\'t produce a result')) return [];
    if (error.message.includes('SELECT not supported for this resource')) return null;
    out.push(`Error executing ${description}: ${error.message}`);
    return [];
  }
}

async function walkService(serviceName) {
  const out = [`\nProcessing service: ${serviceName}`];
  const resources = await executeQuery(`SHOW RESOURCES IN ${provider}.${serviceName}`, `Getting resources for ${serviceName}`, out);
  if (!resources || resources.length === 0) {
    results.failures.push(`${serviceName}: no resources found`);
    return out;
  }
  results.totalResources += resources.length;

  for (const resource of resources) {
    const resourceName = resource.name;
    const resourceFQRN = `${provider}.${serviceName}.${resourceName}`;
    const sqlVerbs = {};
    let selectable = false;

    const methods = await executeQuery(`SHOW EXTENDED METHODS IN ${resourceFQRN}`, `  ${resourceName}: methods`, out);
    if (!methods || methods.length === 0) {
      results.failures.push(`${serviceName}.${resourceName}: no methods`);
      continue;
    }
    results.totalMethods += methods.length;

    for (const method of methods) {
      const sqlVerb = method.SQLVerb || 'exec';
      if (sqlVerb.toLowerCase() === 'select') {
        results.selectableMethods++;
        selectable = true;
      }
      if (!sqlVerbs[sqlVerb]) sqlVerbs[sqlVerb] = [];
      const requiredParams = (method.RequiredParams || '').split(',').map((p) => p.trim()).filter((p) => p.length > 0);
      sqlVerbs[sqlVerb].push({ methodName: method.MethodName, requiredParams });
    }

    // non-exec methods must have unique required-parameter signatures within
    // a resource (order is not important) or a statement cannot be routed
    for (const [verb, verbMethods] of Object.entries(sqlVerbs)) {
      if (verb.toLowerCase() === 'exec') continue;
      const seen = new Map();
      for (const method of verbMethods) {
        const signature = JSON.stringify([...method.requiredParams].sort());
        if (seen.has(signature)) results.failures.push(`${serviceName}.${resourceName}: ${verb} methods ${seen.get(signature)} and ${method.methodName} share the signature ${signature}`);
        seen.set(signature, method.methodName);
      }
    }

    if (!selectable) {
      results.nonSelectableResourceCount++;
      results.nonSelectableResources.push(`${serviceName}.${resourceName}`);
      continue;
    }
    const columns = await executeQuery(`DESCRIBE EXTENDED ${resourceFQRN}`, `  ${resourceName}: describe extended`, out);
    if (columns !== null && columns.length > 0) continue;
    if (SCALAR_RESPONSE_RESOURCES.has(resourceName)) {
      out.push(`WARN: no columns for ${resourceName} (known scalar response)`);
      results.scalarResponseResources.push(`${serviceName}.${resourceName}`);
    } else {
      out.push(`ERROR: No columns found for ${resourceName}`);
      results.failures.push(`${serviceName}.${resourceName}: DESCRIBE EXTENDED returned no columns`);
    }
  }
  return out;
}

async function testMetaRoutes() {
  console.log(`\nTesting meta routes for provider: ${provider} (concurrency ${concurrency})\n`);
  const head = [];
  const providers = await executeQuery('SHOW PROVIDERS', 'Checking registry providers', head);
  if (!providers || !providers.some((p) => p.name === provider)) {
    console.error(`Error: Provider '${provider}' not found in registry`);
    for (const p of providers || []) console.log(`  - ${p.name}`);
    process.exit(1);
  }
  const services = await executeQuery(`SHOW SERVICES IN ${provider}`, 'Getting services', head);
  for (const line of head) console.log(line);
  if (!services || services.length === 0) {
    console.error(`Error: No services found for provider '${provider}'`);
    process.exit(1);
  }
  console.log(`\nFound ${services.length} services in ${provider}`);
  results.totalServices = services.length;

  const queue = services.map((s) => s.name);
  let done = 0;
  async function worker() {
    while (queue.length > 0) {
      const serviceName = queue.shift();
      const out = await walkService(serviceName);
      done++;
      if (verbose) for (const line of out) console.log(line);
      else console.log(`[${done}/${services.length}] ${serviceName}: ${out.filter((l) => l.includes(': methods')).length} resources walked${out.some((l) => l.startsWith('ERROR') || l.startsWith('Error')) ? ' - see failures' : ''}`);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, services.length) }, worker));

  results.nonSelectableResources.sort();
  results.failures.sort();
  results.executionTime = (new Date() - startTime) / 1000;

  console.log('\nTest Summary:');
  console.info(results);

  if (results.failures.length > 0) {
    console.error(`\nFAIL ${results.failures.length} failure(s):`);
    for (const f of results.failures) console.error(`  - ${f}`);
    process.exit(1);
  }
  console.log('\nOK All meta route tests passed');
}

testMetaRoutes().catch((error) => {
  console.error('Error in meta routes test:', error);
  process.exit(1);
});
