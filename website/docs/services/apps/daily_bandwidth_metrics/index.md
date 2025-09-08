--- 
title: daily_bandwidth_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - daily_bandwidth_metrics
  - apps
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

Creates, updates, deletes, gets or lists a <code>daily_bandwidth_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>daily_bandwidth_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.daily_bandwidth_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_metrics_bandwidth_daily"
    values={[
        { label: 'apps_get_metrics_bandwidth_daily', value: 'apps_get_metrics_bandwidth_daily' }
    ]}
>
<TabItem value="apps_get_metrics_bandwidth_daily">

A JSON object with a `app_bandwidth_usage` key

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
    <td><CopyableCode code="app_bandwidth_usage" /></td>
    <td><code>array</code></td>
    <td>A list of bandwidth usage details by app.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date for the metrics data. (example: 2023-01-17T00:00:00Z)</td>
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
    <td><a href="#apps_get_metrics_bandwidth_daily"><CopyableCode code="apps_get_metrics_bandwidth_daily" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td><a href="#parameter-date"><code>date</code></a></td>
    <td>Retrieve daily bandwidth usage metrics for a single app.</td>
</tr>
<tr>
    <td><a href="#apps_list_metrics_bandwidth_daily"><CopyableCode code="apps_list_metrics_bandwidth_daily" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__app_ids"><code>data__app_ids</code></a></td>
    <td></td>
    <td>Retrieve daily bandwidth usage metrics for multiple apps.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID (example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr id="parameter-date">
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday. (example: 2023-01-17T00:00:00Z)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_metrics_bandwidth_daily"
    values={[
        { label: 'apps_get_metrics_bandwidth_daily', value: 'apps_get_metrics_bandwidth_daily' }
    ]}
>
<TabItem value="apps_get_metrics_bandwidth_daily">

Retrieve daily bandwidth usage metrics for a single app.

```sql
SELECT
app_bandwidth_usage,
date
FROM digitalocean.apps.daily_bandwidth_metrics
WHERE app_id = '{{ app_id }}' -- required
AND date = '{{ date }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="apps_list_metrics_bandwidth_daily"
    values={[
        { label: 'apps_list_metrics_bandwidth_daily', value: 'apps_list_metrics_bandwidth_daily' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="apps_list_metrics_bandwidth_daily">

Retrieve daily bandwidth usage metrics for multiple apps.

```sql
INSERT INTO digitalocean.apps.daily_bandwidth_metrics (
data__app_ids,
data__date
)
SELECT 
'{{ app_ids }}' --required,
'{{ date }}'
RETURNING
app_bandwidth_usage,
date
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: daily_bandwidth_metrics
  props:
    - name: app_ids
      value: array
      description: >
        A list of app IDs to query bandwidth metrics for.
        
    - name: date
      value: string
      description: >
        Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.
        
```
</TabItem>
</Tabs>
