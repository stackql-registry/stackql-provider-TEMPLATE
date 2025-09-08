--- 
title: agent_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_versions
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

Creates, updates, deletes, gets or lists an <code>agent_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agent_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.agent_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_agent_versions"
    values={[
        { label: 'genai_list_agent_versions', value: 'genai_list_agent_versions' }
    ]}
>
<TabItem value="genai_list_agent_versions">

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
    <td><CopyableCode code="agent_versions" /></td>
    <td><code>array</code></td>
    <td>Agents</td>
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
    <td><a href="#genai_list_agent_versions"><CopyableCode code="genai_list_agent_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all agent versions, send a GET request to `/v2/gen-ai/agents/&#123;uuid&#125;/versions`.</td>
</tr>
<tr>
    <td><a href="#genai_rollback_to_agent_version"><CopyableCode code="genai_rollback_to_agent_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To update to a specific agent version, send a PUT request to `/v2/gen-ai/agents/&#123;uuid&#125;/versions`.</td>
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
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Agent unique identifier (example: "123e4567-e89b-12d3-a456-426614174000")</td>
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
    defaultValue="genai_list_agent_versions"
    values={[
        { label: 'genai_list_agent_versions', value: 'genai_list_agent_versions' }
    ]}
>
<TabItem value="genai_list_agent_versions">

To list all agent versions, send a GET request to `/v2/gen-ai/agents/&#123;uuid&#125;/versions`.

```sql
SELECT
agent_versions,
links,
meta
FROM digitalocean.genai.agent_versions
WHERE uuid = '{{ uuid }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_rollback_to_agent_version"
    values={[
        { label: 'genai_rollback_to_agent_version', value: 'genai_rollback_to_agent_version' }
    ]}
>
<TabItem value="genai_rollback_to_agent_version">

To update to a specific agent version, send a PUT request to `/v2/gen-ai/agents/&#123;uuid&#125;/versions`.

```sql
EXEC digitalocean.genai.agent_versions.genai_rollback_to_agent_version 
@uuid='{{ uuid }}' --required 
@@json=
'{
"uuid": "{{ uuid }}", 
"version_hash": "{{ version_hash }}"
}';
```
</TabItem>
</Tabs>
