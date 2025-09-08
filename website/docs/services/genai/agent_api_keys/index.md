--- 
title: agent_api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_api_keys
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

Creates, updates, deletes, gets or lists an <code>agent_api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agent_api_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.agent_api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_agent_api_keys"
    values={[
        { label: 'genai_list_agent_api_keys', value: 'genai_list_agent_api_keys' }
    ]}
>
<TabItem value="genai_list_agent_api_keys">

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
    <td><CopyableCode code="api_key_infos" /></td>
    <td><code>array</code></td>
    <td>Api key infos</td>
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
    <td><a href="#genai_list_agent_api_keys"><CopyableCode code="genai_list_agent_api_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all agent API keys, send a GET request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys`.</td>
</tr>
<tr>
    <td><a href="#genai_create_agent_api_key"><CopyableCode code="genai_create_agent_api_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a></td>
    <td></td>
    <td>To create an agent API key, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys`.</td>
</tr>
<tr>
    <td><a href="#genai_update_agent_api_key"><CopyableCode code="genai_update_agent_api_key" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a>, <a href="#parameter-api_key_uuid"><code>api_key_uuid</code></a></td>
    <td></td>
    <td>To update an agent API key, send a PUT request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys/&#123;api_key_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_agent_api_key"><CopyableCode code="genai_delete_agent_api_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a>, <a href="#parameter-api_key_uuid"><code>api_key_uuid</code></a></td>
    <td></td>
    <td>To delete an API key for an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys/&#123;api_key_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_regenerate_agent_api_key"><CopyableCode code="genai_regenerate_agent_api_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a>, <a href="#parameter-api_key_uuid"><code>api_key_uuid</code></a></td>
    <td></td>
    <td>To regenerate an agent API key, send a PUT request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys/&#123;api_key_uuid&#125;/regenerate`.</td>
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
<tr id="parameter-api_key_uuid">
    <td><CopyableCode code="api_key_uuid" /></td>
    <td><code>string</code></td>
    <td>API key ID (example: "123e4567-e89b-12d3-a456-426614174000")</td>
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
    defaultValue="genai_list_agent_api_keys"
    values={[
        { label: 'genai_list_agent_api_keys', value: 'genai_list_agent_api_keys' }
    ]}
>
<TabItem value="genai_list_agent_api_keys">

To list all agent API keys, send a GET request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys`.

```sql
SELECT
api_key_infos,
links,
meta
FROM digitalocean.genai.agent_api_keys
WHERE agent_uuid = '{{ agent_uuid }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_agent_api_key"
    values={[
        { label: 'genai_create_agent_api_key', value: 'genai_create_agent_api_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_agent_api_key">

To create an agent API key, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys`.

```sql
INSERT INTO digitalocean.genai.agent_api_keys (
data__agent_uuid,
data__name,
agent_uuid
)
SELECT 
'{{ agent_uuid }}',
'{{ name }}',
'{{ agent_uuid }}'
RETURNING
api_key_info
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: agent_api_keys
  props:
    - name: agent_uuid
      value: string
      description: Required parameter for the agent_api_keys resource.
    - name: agent_uuid
      value: string
      description: >
        Agent id
        
    - name: name
      value: string
      description: >
        A human friendly name to identify the key
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_update_agent_api_key"
    values={[
        { label: 'genai_update_agent_api_key', value: 'genai_update_agent_api_key' }
    ]}
>
<TabItem value="genai_update_agent_api_key">

To update an agent API key, send a PUT request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys/&#123;api_key_uuid&#125;`.

```sql
REPLACE digitalocean.genai.agent_api_keys
SET 
data__agent_uuid = '{{ agent_uuid }}',
data__api_key_uuid = '{{ api_key_uuid }}',
data__name = '{{ name }}'
WHERE 
agent_uuid = '{{ agent_uuid }}' --required
AND api_key_uuid = '{{ api_key_uuid }}' --required
RETURNING
api_key_info;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_agent_api_key"
    values={[
        { label: 'genai_delete_agent_api_key', value: 'genai_delete_agent_api_key' }
    ]}
>
<TabItem value="genai_delete_agent_api_key">

To delete an API key for an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys/&#123;api_key_uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.agent_api_keys
WHERE agent_uuid = '{{ agent_uuid }}' --required
AND api_key_uuid = '{{ api_key_uuid }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_regenerate_agent_api_key"
    values={[
        { label: 'genai_regenerate_agent_api_key', value: 'genai_regenerate_agent_api_key' }
    ]}
>
<TabItem value="genai_regenerate_agent_api_key">

To regenerate an agent API key, send a PUT request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/api_keys/&#123;api_key_uuid&#125;/regenerate`.

```sql
EXEC digitalocean.genai.agent_api_keys.genai_regenerate_agent_api_key 
@agent_uuid='{{ agent_uuid }}' --required, 
@api_key_uuid='{{ api_key_uuid }}' --required;
```
</TabItem>
</Tabs>
