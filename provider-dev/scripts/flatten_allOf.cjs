#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const SwaggerParser = require('@apidevtools/swagger-parser');
const deno_openapi_dereferencer = require('@stackql/deno-openapi-dereferencer');

// List of files to process
const filesToProcess = [
  'compute.yaml',
  'container_registry.yaml',
  'databases.yaml',
  'kubernetes.yaml',
  'monitoring.yaml',
  'vpcs.yaml'
];

async function processFile(filename) {
  try {
    // Define the file path
    const yamlFilePath = path.resolve(
      __dirname, 
      '../openapi/src/digitalocean/v00.00.00000/services', 
      filename
    );
    
    // Read and parse the original file
    const originalContent = fs.readFileSync(yamlFilePath, 'utf8');
    const api = yaml.load(originalContent);
    
    // Create a copy of the original API object
    const apiCopy = JSON.parse(JSON.stringify(api));
    
    // Dereference the API
    const dereferencedAPI = await SwaggerParser.dereference(api);
    
    // Only flatten allOf in components/schemas
    if (dereferencedAPI.components && dereferencedAPI.components.schemas) {
      // Extract the schemas section
      const schemasSection = dereferencedAPI.components.schemas;
      
      // Flatten allOf in the schemas section
      const flattenedSchemas = await deno_openapi_dereferencer.flattenAllOf({
        components: { schemas: schemasSection }
      });
      
      // Replace only the components/schemas section in the original API
      apiCopy.components.schemas = flattenedSchemas.components.schemas;
    }
    
    // Convert back to YAML and save to the original file
    const newYaml = yaml.dump(apiCopy, { 
      lineWidth: -1,  // Preserve line breaks
      noRefs: true    // Don't use YAML references
    });
    
    fs.writeFileSync(yamlFilePath, newYaml, 'utf8');
    console.log(`Successfully flattened allOf constructs in components/schemas for ${yamlFilePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
    return false;
  }
}

async function processAllFiles() {
  console.log(`Processing ${filesToProcess.length} files...`);
  
  let successCount = 0;
  let failureCount = 0;
  
  for (const filename of filesToProcess) {
    console.log(`Processing ${filename}...`);
    const success = await processFile(filename);
    
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }
  }
  
  console.log(`\nProcessing complete.`);
  console.log(`Successfully processed: ${successCount} files`);
  if (failureCount > 0) {
    console.log(`Failed to process: ${failureCount} files`);
    process.exit(1);
  }
}

// Run the function
processAllFiles();