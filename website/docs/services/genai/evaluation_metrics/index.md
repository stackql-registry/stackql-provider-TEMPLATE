--- 
title: evaluation_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_metrics
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

Creates, updates, deletes, gets or lists an <code>evaluation_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_evaluation_metrics"
    values={[
        { label: 'genai_list_evaluation_metrics', value: 'genai_list_evaluation_metrics' }
    ]}
>
<TabItem value="genai_list_evaluation_metrics">

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
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="inverted" /></td>
    <td><code>boolean</code></td>
    <td>If true, the metric is inverted, meaning that a lower value is better.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_type" /></td>
    <td><code>string</code></td>
    <td> (default: METRIC_TYPE_UNSPECIFIED, example: METRIC_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_uuid" /></td>
    <td><code>string</code></td>
    <td> (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_value_type" /></td>
    <td><code>string</code></td>
    <td> (default: METRIC_VALUE_TYPE_UNSPECIFIED, example: METRIC_VALUE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="range_max" /></td>
    <td><code>number (float)</code></td>
    <td>The maximum value for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="range_min" /></td>
    <td><code>number (float)</code></td>
    <td>The minimum value for the metric.</td>
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
    <td><a href="#genai_list_evaluation_metrics"><CopyableCode code="genai_list_evaluation_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all evaluation metrics, send a GET request to `/v2/gen-ai/evaluation_metrics`.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_list_evaluation_metrics"
    values={[
        { label: 'genai_list_evaluation_metrics', value: 'genai_list_evaluation_metrics' }
    ]}
>
<TabItem value="genai_list_evaluation_metrics">

To list all evaluation metrics, send a GET request to `/v2/gen-ai/evaluation_metrics`.

```sql
SELECT
metric_name,
description,
inverted,
metric_type,
metric_uuid,
metric_value_type,
range_max,
range_min
FROM digitalocean.genai.evaluation_metrics;
```
</TabItem>
</Tabs>
