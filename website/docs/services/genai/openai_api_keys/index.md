--- 
title: openai_api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - openai_api_keys
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

Creates, updates, deletes, gets or lists an <code>openai_api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>openai_api_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.openai_api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_openai_api_key"
    values={[
        { label: 'genai_get_openai_api_key', value: 'genai_get_openai_api_key' },
        { label: 'genai_list_openai_api_keys', value: 'genai_list_openai_api_keys' }
    ]}
>
<TabItem value="genai_get_openai_api_key">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Key creation date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string (uint64)</code></td>
    <td>Created by user id from DO (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Key deleted date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>Models supported by the openAI api key</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Key last updated date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Uuid (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_openai_api_keys">

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
    <td><a href="#genai_get_openai_api_key"><CopyableCode code="genai_get_openai_api_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_key_uuid"><code>api_key_uuid</code></a></td>
    <td></td>
    <td>To retrieve details of an OpenAI API key, send a GET request to `/v2/gen-ai/openai/keys/&#123;api_key_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_list_openai_api_keys"><CopyableCode code="genai_list_openai_api_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all OpenAI API keys, send a GET request to `/v2/gen-ai/openai/keys`.</td>
</tr>
<tr>
    <td><a href="#genai_create_openai_api_key"><CopyableCode code="genai_create_openai_api_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create an OpenAI API key, send a POST request to `/v2/gen-ai/openai/keys`.</td>
</tr>
<tr>
    <td><a href="#genai_update_openai_api_key"><CopyableCode code="genai_update_openai_api_key" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-api_key_uuid"><code>api_key_uuid</code></a></td>
    <td></td>
    <td>To update an OpenAI API key, send a PUT request to `/v2/gen-ai/openai/keys/&#123;api_key_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_openai_api_key"><CopyableCode code="genai_delete_openai_api_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_key_uuid"><code>api_key_uuid</code></a></td>
    <td></td>
    <td>To delete an OpenAI API key, send a DELETE request to `/v2/gen-ai/openai/keys/&#123;api_key_uuid&#125;`.</td>
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
    defaultValue="genai_get_openai_api_key"
    values={[
        { label: 'genai_get_openai_api_key', value: 'genai_get_openai_api_key' },
        { label: 'genai_list_openai_api_keys', value: 'genai_list_openai_api_keys' }
    ]}
>
<TabItem value="genai_get_openai_api_key">

To retrieve details of an OpenAI API key, send a GET request to `/v2/gen-ai/openai/keys/&#123;api_key_uuid&#125;`.

```sql
SELECT
name,
created_at,
created_by,
deleted_at,
models,
updated_at,
uuid
FROM digitalocean.genai.openai_api_keys
WHERE api_key_uuid = '{{ api_key_uuid }}' -- required;
```
</TabItem>
<TabItem value="genai_list_openai_api_keys">

To list all OpenAI API keys, send a GET request to `/v2/gen-ai/openai/keys`.

```sql
SELECT
api_key_infos,
links,
meta
FROM digitalocean.genai.openai_api_keys
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_openai_api_key"
    values={[
        { label: 'genai_create_openai_api_key', value: 'genai_create_openai_api_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_openai_api_key">

To create an OpenAI API key, send a POST request to `/v2/gen-ai/openai/keys`.

```sql
INSERT INTO digitalocean.genai.openai_api_keys (
data__api_key,
data__name
)
SELECT 
'{{ api_key }}',
'{{ name }}'
RETURNING
api_key_info
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: openai_api_keys
  props:
    - name: api_key
      value: string
      description: >
        OpenAI API key
        
    - name: name
      value: string
      description: >
        Name of the key
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_update_openai_api_key"
    values={[
        { label: 'genai_update_openai_api_key', value: 'genai_update_openai_api_key' }
    ]}
>
<TabItem value="genai_update_openai_api_key">

To update an OpenAI API key, send a PUT request to `/v2/gen-ai/openai/keys/&#123;api_key_uuid&#125;`.

```sql
REPLACE digitalocean.genai.openai_api_keys
SET 
data__api_key = '{{ api_key }}',
data__api_key_uuid = '{{ api_key_uuid }}',
data__name = '{{ name }}'
WHERE 
api_key_uuid = '{{ api_key_uuid }}' --required
RETURNING
api_key_info;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_openai_api_key"
    values={[
        { label: 'genai_delete_openai_api_key', value: 'genai_delete_openai_api_key' }
    ]}
>
<TabItem value="genai_delete_openai_api_key">

To delete an OpenAI API key, send a DELETE request to `/v2/gen-ai/openai/keys/&#123;api_key_uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.openai_api_keys
WHERE api_key_uuid = '{{ api_key_uuid }}' --required;
```
</TabItem>
</Tabs>
