--- 
title: evaluation_run_prompt_results
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_run_prompt_results
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

Creates, updates, deletes, gets or lists an <code>evaluation_run_prompt_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_run_prompt_results</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_run_prompt_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_evaluation_run_prompt_results"
    values={[
        { label: 'genai_get_evaluation_run_prompt_results', value: 'genai_get_evaluation_run_prompt_results' }
    ]}
>
<TabItem value="genai_get_evaluation_run_prompt_results">

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
    <td><CopyableCode code="prompt_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Prompt ID</td>
</tr>
<tr>
    <td><CopyableCode code="ground_truth" /></td>
    <td><code>string</code></td>
    <td>The ground truth for the prompt. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="input" /></td>
    <td><code>string</code></td>
    <td> (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="input_tokens" /></td>
    <td><code>string (uint64)</code></td>
    <td>The number of input tokens used in the prompt. (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>string</code></td>
    <td> (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="output_tokens" /></td>
    <td><code>string (uint64)</code></td>
    <td>The number of output tokens used in the prompt. (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="prompt_chunks" /></td>
    <td><code>array</code></td>
    <td>The list of prompt chunks.</td>
</tr>
<tr>
    <td><CopyableCode code="prompt_level_metric_results" /></td>
    <td><code>array</code></td>
    <td>The metric results for the prompt.</td>
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
    <td><a href="#genai_get_evaluation_run_prompt_results"><CopyableCode code="genai_get_evaluation_run_prompt_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-evaluation_run_uuid"><code>evaluation_run_uuid</code></a>, <a href="#parameter-prompt_id"><code>prompt_id</code></a></td>
    <td></td>
    <td>To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/&#123;evaluation_run_uuid&#125;/results/&#123;prompt_id&#125;`.</td>
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
<tr id="parameter-prompt_id">
    <td><CopyableCode code="prompt_id" /></td>
    <td><code>integer</code></td>
    <td>Prompt ID to get results for. (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_evaluation_run_prompt_results"
    values={[
        { label: 'genai_get_evaluation_run_prompt_results', value: 'genai_get_evaluation_run_prompt_results' }
    ]}
>
<TabItem value="genai_get_evaluation_run_prompt_results">

To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/&#123;evaluation_run_uuid&#125;/results/&#123;prompt_id&#125;`.

```sql
SELECT
prompt_id,
ground_truth,
input,
input_tokens,
output,
output_tokens,
prompt_chunks,
prompt_level_metric_results
FROM digitalocean.genai.evaluation_run_prompt_results
WHERE evaluation_run_uuid = '{{ evaluation_run_uuid }}' -- required
AND prompt_id = '{{ prompt_id }}' -- required;
```
</TabItem>
</Tabs>
