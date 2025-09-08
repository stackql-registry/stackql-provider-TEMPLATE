--- 
title: knowledge_bases
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_bases
  - genai
  - digitalocean
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage digitalocean resources using SQL
custom_edit_url: null
image: /img/stackql-digitalocean-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>knowledge_bases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>knowledge_bases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.knowledge_bases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_knowledge_base"
    values={[
        { label: 'genai_get_knowledge_base', value: 'genai_get_knowledge_base' },
        { label: 'genai_list_knowledge_bases', value: 'genai_list_knowledge_bases' }
    ]}
>
<TabItem value="genai_get_knowledge_base">

A successful response.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="database_status" /></td>
    <td><code>string</code></td>
    <td> (default: CREATING, example: CREATING)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base" /></td>
    <td><code>object</code></td>
    <td>Knowledgebase Description</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_knowledge_bases">

A successful response.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="knowledge_bases" /></td>
    <td><code>array</code></td>
    <td>The knowledge bases</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td>Links to other pages</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Meta information about the data set</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#genai_get_knowledge_base"><CopyableCode code="genai_get_knowledge_base" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To retrive information about an existing knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_list_knowledge_bases"><CopyableCode code="genai_list_knowledge_bases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all knowledge bases, send a GET request to `/v2/gen-ai/knowledge_bases`.</td>
</tr>
<tr>
    <td><a href="#genai_create_knowledge_base"><CopyableCode code="genai_create_knowledge_base" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases`.</td>
</tr>
<tr>
    <td><a href="#genai_update_knowledge_base"><CopyableCode code="genai_update_knowledge_base" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To update a knowledge base, send a PUT request to `/v2/gen-ai/knowledge_bases/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_knowledge_base"><CopyableCode code="genai_delete_knowledge_base" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To delete a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_attach_knowledge_bases"><CopyableCode code="genai_attach_knowledge_bases" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a></td>
    <td></td>
    <td>To attach knowledge bases to an agent, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/knowledge_bases`</td>
</tr>
<tr>
    <td><a href="#genai_attach_knowledge_base"><CopyableCode code="genai_attach_knowledge_base" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a>, <a href="#parameter-knowledge_base_uuid"><code>knowledge_base_uuid</code></a></td>
    <td></td>
    <td>To attach a knowledge base to an agent, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/knowledge_bases/&#123;knowledge_base_uuid&#125;`</td>
</tr>
<tr>
    <td><a href="#genai_detach_knowledge_base"><CopyableCode code="genai_detach_knowledge_base" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a>, <a href="#parameter-knowledge_base_uuid"><code>knowledge_base_uuid</code></a></td>
    <td></td>
    <td>To detach a knowledge base from an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/knowledge_bases/&#123;knowledge_base_uuid&#125;`.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-agent_uuid">
    <td><CopyableCode code="agent_uuid" /></td>
    <td><code>string</code></td>
    <td>Agent id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-knowledge_base_uuid">
    <td><CopyableCode code="knowledge_base_uuid" /></td>
    <td><code>string</code></td>
    <td>Knowledge base id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Knowledge base id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page number. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Items per page. (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_knowledge_base"
    values={[
        { label: 'genai_get_knowledge_base', value: 'genai_get_knowledge_base' },
        { label: 'genai_list_knowledge_bases', value: 'genai_list_knowledge_bases' }
    ]}
>
<TabItem value="genai_get_knowledge_base">

To retrive information about an existing knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/&#123;uuid&#125;`.

```sql
SELECT
database_status,
knowledge_base
FROM digitalocean.genai.knowledge_bases
WHERE uuid = '{{ uuid }}' -- required;
```
</TabItem>
<TabItem value="genai_list_knowledge_bases">

To list all knowledge bases, send a GET request to `/v2/gen-ai/knowledge_bases`.

```sql
SELECT
knowledge_bases,
links,
meta
FROM digitalocean.genai.knowledge_bases
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_knowledge_base"
    values={[
        { label: 'genai_create_knowledge_base', value: 'genai_create_knowledge_base' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_knowledge_base">

To create a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases`.

```sql
INSERT INTO digitalocean.genai.knowledge_bases (
data__database_id,
data__datasources,
data__embedding_model_uuid,
data__name,
data__project_id,
data__region,
data__tags,
data__vpc_uuid
)
SELECT 
'{{ database_id }}',
'{{ datasources }}',
'{{ embedding_model_uuid }}',
'{{ name }}',
'{{ project_id }}',
'{{ region }}',
'{{ tags }}',
'{{ vpc_uuid }}'
RETURNING
knowledge_base
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: knowledge_bases
  props:
    - name: database_id
      value: string
      description: >
        Identifier of the DigitalOcean OpenSearch database this knowledge base will use, optional.
If not provided, we create a new database for the knowledge base in
the same region as the knowledge base.
        
    - name: datasources
      value: array
      description: >
        The data sources to use for this knowledge base. See [Organize Data Sources](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#spaces-buckets) for more information on data sources best practices.
        
    - name: embedding_model_uuid
      value: string
      description: >
        Identifier for the [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models).
        
    - name: name
      value: string
      description: >
        Name of the knowledge base.
        
    - name: project_id
      value: string
      description: >
        Identifier of the DigitalOcean project this knowledge base will belong to.
        
    - name: region
      value: string
      description: >
        The datacenter region to deploy the knowledge base in.
        
    - name: tags
      value: array
      description: >
        Tags to organize your knowledge base.
        
    - name: vpc_uuid
      value: string
      description: >
        The VPC to deploy the knowledge base database in
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_update_knowledge_base"
    values={[
        { label: 'genai_update_knowledge_base', value: 'genai_update_knowledge_base' }
    ]}
>
<TabItem value="genai_update_knowledge_base">

To update a knowledge base, send a PUT request to `/v2/gen-ai/knowledge_bases/&#123;uuid&#125;`.

```sql
REPLACE digitalocean.genai.knowledge_bases
SET 
data__database_id = '{{ database_id }}',
data__embedding_model_uuid = '{{ embedding_model_uuid }}',
data__name = '{{ name }}',
data__project_id = '{{ project_id }}',
data__tags = '{{ tags }}',
data__uuid = '{{ uuid }}'
WHERE 
uuid = '{{ uuid }}' --required
RETURNING
knowledge_base;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_knowledge_base"
    values={[
        { label: 'genai_delete_knowledge_base', value: 'genai_delete_knowledge_base' }
    ]}
>
<TabItem value="genai_delete_knowledge_base">

To delete a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/&#123;uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.knowledge_bases
WHERE uuid = '{{ uuid }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_attach_knowledge_bases"
    values={[
        { label: 'genai_attach_knowledge_bases', value: 'genai_attach_knowledge_bases' },
        { label: 'genai_attach_knowledge_base', value: 'genai_attach_knowledge_base' },
        { label: 'genai_detach_knowledge_base', value: 'genai_detach_knowledge_base' }
    ]}
>
<TabItem value="genai_attach_knowledge_bases">

To attach knowledge bases to an agent, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/knowledge_bases`

```sql
EXEC digitalocean.genai.knowledge_bases.genai_attach_knowledge_bases 
@agent_uuid='{{ agent_uuid }}' --required;
```
</TabItem>
<TabItem value="genai_attach_knowledge_base">

To attach a knowledge base to an agent, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/knowledge_bases/&#123;knowledge_base_uuid&#125;`

```sql
EXEC digitalocean.genai.knowledge_bases.genai_attach_knowledge_base 
@agent_uuid='{{ agent_uuid }}' --required, 
@knowledge_base_uuid='{{ knowledge_base_uuid }}' --required;
```
</TabItem>
<TabItem value="genai_detach_knowledge_base">

To detach a knowledge base from an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/knowledge_bases/&#123;knowledge_base_uuid&#125;`.

```sql
EXEC digitalocean.genai.knowledge_bases.genai_detach_knowledge_base 
@agent_uuid='{{ agent_uuid }}' --required, 
@knowledge_base_uuid='{{ knowledge_base_uuid }}' --required;
```
</TabItem>
</Tabs>
