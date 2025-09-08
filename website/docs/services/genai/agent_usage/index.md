--- 
title: agent_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_usage
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

Creates, updates, deletes, gets or lists an <code>agent_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agent_usage</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.agent_usage" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_agent_usage"
    values={[
        { label: 'genai_get_agent_usage', value: 'genai_get_agent_usage' }
    ]}
>
<TabItem value="genai_get_agent_usage">

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
    <td><CopyableCode code="log_insights_usage" /></td>
    <td><code>object</code></td>
    <td>Resource Usage Description</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>object</code></td>
    <td>Resource Usage Description</td>
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
    <td><a href="#genai_get_agent_usage"><CopyableCode code="genai_get_agent_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td><a href="#parameter-start"><code>start</code></a>, <a href="#parameter-stop"><code>stop</code></a></td>
    <td>To get agent usage, send a GET request to `/v2/gen-ai/agents/&#123;uuid&#125;/usage`. Returns usage metrics for the specified agent within the provided time range.</td>
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
    <td>Agent id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>Return all usage data from this date. (example: "example string")</td>
</tr>
<tr id="parameter-stop">
    <td><CopyableCode code="stop" /></td>
    <td><code>string</code></td>
    <td>Return all usage data up to this date, if omitted, will return up to the current date. (example: "example string")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_agent_usage"
    values={[
        { label: 'genai_get_agent_usage', value: 'genai_get_agent_usage' }
    ]}
>
<TabItem value="genai_get_agent_usage">

To get agent usage, send a GET request to `/v2/gen-ai/agents/&#123;uuid&#125;/usage`. Returns usage metrics for the specified agent within the provided time range.

```sql
SELECT
log_insights_usage,
usage
FROM digitalocean.genai.agent_usage
WHERE uuid = '{{ uuid }}' -- required
AND start = '{{ start }}'
AND stop = '{{ stop }}';
```
</TabItem>
</Tabs>
