--- 
title: droplet_autoscale_pool_members
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_autoscale_pool_members
  - compute
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

Creates, updates, deletes, gets or lists a <code>droplet_autoscale_pool_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_autoscale_pool_members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_autoscale_pool_members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="autoscalepools_list_members"
    values={[
        { label: 'autoscalepools_list_members', value: 'autoscalepools_list_members' }
    ]}
>
<TabItem value="autoscalepools_list_members">

A JSON object with a key of `droplets`.

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
    <td><CopyableCode code="droplet_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the Droplet in ISO8601 combined date and time format. (example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="current_utilization" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="health_status" /></td>
    <td><code>string</code></td>
    <td>The health status of the Droplet. (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The power status of the Droplet. (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last updated time of the Droplet in ISO8601 combined date and time format. (example: 2020-07-28T18:00:00Z)</td>
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
    <td><a href="#autoscalepools_list_members"><CopyableCode code="autoscalepools_list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-autoscale_pool_id"><code>autoscale_pool_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list the Droplets in an autoscale pool, send a GET request to `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/members`.<br /><br />The response body will be a JSON object with a key of `droplets`. This will be<br />set to an array containing information about each of the Droplets in the autoscale pool.<br /></td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Which 'page' of paginated results to return. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of items returned per page (example: 2)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="autoscalepools_list_members"
    values={[
        { label: 'autoscalepools_list_members', value: 'autoscalepools_list_members' }
    ]}
>
<TabItem value="autoscalepools_list_members">

To list the Droplets in an autoscale pool, send a GET request to `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/members`.<br /><br />The response body will be a JSON object with a key of `droplets`. This will be<br />set to an array containing information about each of the Droplets in the autoscale pool.<br />

```sql
SELECT
droplet_id,
created_at,
current_utilization,
health_status,
status,
updated_at
FROM digitalocean.compute.droplet_autoscale_pool_members
WHERE autoscale_pool_id = '{{ autoscale_pool_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
