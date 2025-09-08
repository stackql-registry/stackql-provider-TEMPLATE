--- 
title: evaluation_run_results
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_run_results
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

Creates, updates, deletes, gets or lists an <code>evaluation_run_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_run_results</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_run_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_evaluation_run_results"
    values={[
        { label: 'genai_get_evaluation_run_results', value: 'genai_get_evaluation_run_results' }
    ]}
>
<TabItem value="genai_get_evaluation_run_results">

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
    <td><CopyableCode code="evaluation_run" /></td>
    <td><code>object</code></td>
    <td></td>
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
<tr>
    <td><CopyableCode code="prompts" /></td>
    <td><code>array</code></td>
    <td>The prompt level results.</td>
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
    <td><a href="#genai_get_evaluation_run_results"><CopyableCode code="genai_get_evaluation_run_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-evaluation_run_uuid"><code>evaluation_run_uuid</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/&#123;evaluation_run_uuid&#125;/results`.</td>
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
<tr id="parameter-evaluation_run_uuid">
    <td><CopyableCode code="evaluation_run_uuid" /></td>
    <td><code>string</code></td>
    <td>Evaluation run UUID. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
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
    defaultValue="genai_get_evaluation_run_results"
    values={[
        { label: 'genai_get_evaluation_run_results', value: 'genai_get_evaluation_run_results' }
    ]}
>
<TabItem value="genai_get_evaluation_run_results">

To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/&#123;evaluation_run_uuid&#125;/results`.

```sql
SELECT
evaluation_run,
links,
meta,
prompts
FROM digitalocean.genai.evaluation_run_results
WHERE evaluation_run_uuid = '{{ evaluation_run_uuid }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>
