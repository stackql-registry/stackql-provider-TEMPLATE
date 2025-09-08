--- 
title: droplet_autoscale_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_autoscale_pools
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

Creates, updates, deletes, gets or lists a <code>droplet_autoscale_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_autoscale_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_autoscale_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="autoscalepools_get"
    values={[
        { label: 'autoscalepools_get', value: 'autoscalepools_get' },
        { label: 'autoscalepools_list', value: 'autoscalepools_list' }
    ]}
>
<TabItem value="autoscalepools_get">

The response will be a JSON object with a key called `autoscale_pool`. This will be<br />set to a JSON object that contains the standard autoscale pool attributes.<br />

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for each autoscale pool instance. This is automatically generated upon autoscale pool creation. (example: 0d3db13e-a604-4944-9827-7ec2642d32ac)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name set for the autoscale pool. (example: my-autoscale-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="active_resources_count" /></td>
    <td><code>integer</code></td>
    <td>The number of active Droplets in the autoscale pool.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the autoscale pool was created. (title: The creation time of the autoscale pool, example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="current_utilization" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="droplet_template" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the autoscale pool. (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the autoscale pool was last updated. (title: When the autoscale pool was last updated, example: 2020-07-28T18:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="autoscalepools_list">

A JSON object with a key of `autoscale_pools`.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for each autoscale pool instance. This is automatically generated upon autoscale pool creation. (example: 0d3db13e-a604-4944-9827-7ec2642d32ac)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name set for the autoscale pool. (example: my-autoscale-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="active_resources_count" /></td>
    <td><code>integer</code></td>
    <td>The number of active Droplets in the autoscale pool.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the autoscale pool was created. (title: The creation time of the autoscale pool, example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="current_utilization" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="droplet_template" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the autoscale pool. (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the autoscale pool was last updated. (title: When the autoscale pool was last updated, example: 2020-07-28T18:00:00Z)</td>
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
    <td><a href="#autoscalepools_get"><CopyableCode code="autoscalepools_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-autoscale_pool_id"><code>autoscale_pool_id</code></a></td>
    <td></td>
    <td>To show information about an individual autoscale pool, send a GET request to<br />`/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#autoscalepools_list"><CopyableCode code="autoscalepools_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>To list all autoscale pools in your team, send a GET request to `/v2/droplets/autoscale`.<br />The response body will be a JSON object with a key of `autoscale_pools` containing an array of autoscale pool objects.<br />These each contain the standard autoscale pool attributes.<br /></td>
</tr>
<tr>
    <td><a href="#autoscalepools_create"><CopyableCode code="autoscalepools_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__config"><code>data__config</code></a>, <a href="#parameter-data__droplet_template"><code>data__droplet_template</code></a></td>
    <td></td>
    <td>To create a new autoscale pool, send a POST request to `/v2/droplets/autoscale` setting the required attributes.<br /><br />The response body will contain a JSON object with a key called `autoscale_pool` containing the standard attributes for the new autoscale pool.<br /></td>
</tr>
<tr>
    <td><a href="#autoscalepools_update"><CopyableCode code="autoscalepools_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-autoscale_pool_id"><code>autoscale_pool_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__config"><code>data__config</code></a>, <a href="#parameter-data__droplet_template"><code>data__droplet_template</code></a></td>
    <td></td>
    <td>To update the configuration of an existing autoscale pool, send a PUT request to<br />`/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`. The request must contain a full representation<br />of the autoscale pool including existing attributes. <br /></td>
</tr>
<tr>
    <td><a href="#autoscalepools_delete"><CopyableCode code="autoscalepools_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-autoscale_pool_id"><code>autoscale_pool_id</code></a></td>
    <td></td>
    <td>To destroy an autoscale pool, send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID` endpoint.<br /><br />A successful response will include a 202 response code and no content. <br /></td>
</tr>
<tr>
    <td><a href="#autoscalepools_delete_dangerous"><CopyableCode code="autoscalepools_delete_dangerous" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autoscale_pool_id"><code>autoscale_pool_id</code></a>, <a href="#parameter-X-Dangerous"><code>X-Dangerous</code></a></td>
    <td></td>
    <td>To destroy an autoscale pool and its associated resources (Droplets),<br />send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/dangerous` endpoint.<br /></td>
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
<tr id="parameter-X-Dangerous">
    <td><CopyableCode code="X-Dangerous" /></td>
    <td><code>boolean</code></td>
    <td>Acknowledge this action will destroy the autoscale pool and its associated resources and _can not_ be reversed. (example: true)</td>
</tr>
<tr id="parameter-autoscale_pool_id">
    <td><CopyableCode code="autoscale_pool_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for an autoscale pool. (example: 0d3db13e-a604-4944-9827-7ec2642d32ac)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the autoscale pool (example: my-autoscale-pool)</td>
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
    defaultValue="autoscalepools_get"
    values={[
        { label: 'autoscalepools_get', value: 'autoscalepools_get' },
        { label: 'autoscalepools_list', value: 'autoscalepools_list' }
    ]}
>
<TabItem value="autoscalepools_get">

To show information about an individual autoscale pool, send a GET request to<br />`/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`.<br />

```sql
SELECT
id,
name,
active_resources_count,
config,
created_at,
current_utilization,
droplet_template,
status,
updated_at
FROM digitalocean.compute.droplet_autoscale_pools
WHERE autoscale_pool_id = '{{ autoscale_pool_id }}' -- required;
```
</TabItem>
<TabItem value="autoscalepools_list">

To list all autoscale pools in your team, send a GET request to `/v2/droplets/autoscale`.<br />The response body will be a JSON object with a key of `autoscale_pools` containing an array of autoscale pool objects.<br />These each contain the standard autoscale pool attributes.<br />

```sql
SELECT
id,
name,
active_resources_count,
config,
created_at,
current_utilization,
droplet_template,
status,
updated_at
FROM digitalocean.compute.droplet_autoscale_pools
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND name = '{{ name }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="autoscalepools_create"
    values={[
        { label: 'autoscalepools_create', value: 'autoscalepools_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="autoscalepools_create">

To create a new autoscale pool, send a POST request to `/v2/droplets/autoscale` setting the required attributes.<br /><br />The response body will contain a JSON object with a key called `autoscale_pool` containing the standard attributes for the new autoscale pool.<br />

```sql
INSERT INTO digitalocean.compute.droplet_autoscale_pools (
data__name,
data__config,
data__droplet_template
)
SELECT 
'{{ name }}' --required,
'{{ config }}' --required,
'{{ droplet_template }}' --required
RETURNING
autoscale_pool
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: droplet_autoscale_pools
  props:
    - name: name
      value: string
      description: >
        The human-readable name of the autoscale pool. This field cannot be updated
        
    - name: config
      value: object
      description: >
        The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration).
        
    - name: droplet_template
      value: object
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="autoscalepools_update"
    values={[
        { label: 'autoscalepools_update', value: 'autoscalepools_update' }
    ]}
>
<TabItem value="autoscalepools_update">

To update the configuration of an existing autoscale pool, send a PUT request to<br />`/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`. The request must contain a full representation<br />of the autoscale pool including existing attributes. <br />

```sql
REPLACE digitalocean.compute.droplet_autoscale_pools
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__droplet_template = '{{ droplet_template }}'
WHERE 
autoscale_pool_id = '{{ autoscale_pool_id }}' --required
AND data__name = '{{ name }}' --required
AND data__config = '{{ config }}' --required
AND data__droplet_template = '{{ droplet_template }}' --required
RETURNING
autoscale_pool;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="autoscalepools_delete"
    values={[
        { label: 'autoscalepools_delete', value: 'autoscalepools_delete' }
    ]}
>
<TabItem value="autoscalepools_delete">

To destroy an autoscale pool, send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID` endpoint.<br /><br />A successful response will include a 202 response code and no content. <br />

```sql
DELETE FROM digitalocean.compute.droplet_autoscale_pools
WHERE autoscale_pool_id = '{{ autoscale_pool_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="autoscalepools_delete_dangerous"
    values={[
        { label: 'autoscalepools_delete_dangerous', value: 'autoscalepools_delete_dangerous' }
    ]}
>
<TabItem value="autoscalepools_delete_dangerous">

To destroy an autoscale pool and its associated resources (Droplets),<br />send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/dangerous` endpoint.<br />

```sql
EXEC digitalocean.compute.droplet_autoscale_pools.autoscalepools_delete_dangerous 
@autoscale_pool_id='{{ autoscale_pool_id }}' --required, 
@X-Dangerous='{{ X-Dangerous }}' --required;
```
</TabItem>
</Tabs>
