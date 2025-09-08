--- 
title: droplet_autoscale_target_memory_utilization
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_autoscale_target_memory_utilization
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>droplet_autoscale_target_memory_utilization</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_autoscale_target_memory_utilization</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.droplet_autoscale_target_memory_utilization" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_droplet_autoscale_target_memory_utilization"
    values={[
        { label: 'monitoring_get_droplet_autoscale_target_memory_utilization', value: 'monitoring_get_droplet_autoscale_target_memory_utilization' }
    ]}
>
<TabItem value="monitoring_get_droplet_autoscale_target_memory_utilization">

The response will be a JSON object with a key called `data` and `status`.

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (example: success)</td>
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
    <td><a href="#monitoring_get_droplet_autoscale_target_memory_utilization"><CopyableCode code="monitoring_get_droplet_autoscale_target_memory_utilization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-autoscale_pool_id"><code>autoscale_pool_id</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a></td>
    <td></td>
    <td>To retrieve the target average memory utilization for a given Droplet Autoscale Pool, send a GET request to `/v2/monitoring/metrics/droplet_autoscale/target_memory_utilization`.</td>
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
<tr id="parameter-autoscale_pool_id">
    <td><CopyableCode code="autoscale_pool_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for an autoscale pool. (example: 0d3db13e-a604-4944-9827-7ec2642d32ac)</td>
</tr>
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to end metric window. (example: 1620705417)</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to start metric window. (example: 1620683817)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="monitoring_get_droplet_autoscale_target_memory_utilization"
    values={[
        { label: 'monitoring_get_droplet_autoscale_target_memory_utilization', value: 'monitoring_get_droplet_autoscale_target_memory_utilization' }
    ]}
>
<TabItem value="monitoring_get_droplet_autoscale_target_memory_utilization">

To retrieve the target average memory utilization for a given Droplet Autoscale Pool, send a GET request to `/v2/monitoring/metrics/droplet_autoscale/target_memory_utilization`.

```sql
SELECT
data,
status
FROM digitalocean.monitoring.droplet_autoscale_target_memory_utilization
WHERE autoscale_pool_id = '{{ autoscale_pool_id }}' -- required
AND start = '{{ start }}' -- required
AND end = '{{ end }}' -- required;
```
</TabItem>
</Tabs>
