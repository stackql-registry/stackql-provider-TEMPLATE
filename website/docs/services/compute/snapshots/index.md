--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>snapshots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="snapshots_get"
    values={[
        { label: 'snapshots_get', value: 'snapshots_get' },
        { label: 'snapshots_list', value: 'snapshots_list' }
    ]}
>
<TabItem value="snapshots_get">

A JSON object with a key called `snapshot`.<br />

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
    <td>The unique identifier for the snapshot. (example: 6372321)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the snapshot. (example: web-01-1595954862243)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the resource that the snapshot originated from. (example: 200776916)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the snapshot was created. (example: 2020-07-28T16:47:44Z)</td>
</tr>
<tr>
    <td><CopyableCode code="min_disk_size" /></td>
    <td><code>integer</code></td>
    <td>The minimum size in GB required for a volume or Droplet to use this snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that the snapshot originated from. (example: droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gigabytes" /></td>
    <td><code>number (float)</code></td>
    <td>The billable size of the snapshot in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of Tags the snapshot has been tagged with.<br /><br />Requires `tag:read` scope.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="snapshots_list">

A JSON object with a key of `snapshots`.

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
    <td>The unique identifier for the snapshot. (example: 6372321)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the snapshot. (example: web-01-1595954862243)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the resource that the snapshot originated from. (example: 200776916)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the snapshot was created. (example: 2020-07-28T16:47:44Z)</td>
</tr>
<tr>
    <td><CopyableCode code="min_disk_size" /></td>
    <td><code>integer</code></td>
    <td>The minimum size in GB required for a volume or Droplet to use this snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that the snapshot originated from. (example: droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gigabytes" /></td>
    <td><code>number (float)</code></td>
    <td>The billable size of the snapshot in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of Tags the snapshot has been tagged with.<br /><br />Requires `tag:read` scope.</td>
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
    <td><a href="#snapshots_get"><CopyableCode code="snapshots_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>To retrieve information about a snapshot, send a GET request to<br />`/v2/snapshots/$SNAPSHOT_ID`.<br /><br />The response will be a JSON object with a key called `snapshot`. The value of<br />this will be an snapshot object containing the standard snapshot attributes.<br /></td>
</tr>
<tr>
    <td><a href="#snapshots_list"><CopyableCode code="snapshots_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a></td>
    <td>To list all of the snapshots available on your account, send a GET request to<br />`/v2/snapshots`.<br /><br />The response will be a JSON object with a key called `snapshots`. This will be<br />set to an array of `snapshot` objects, each of which will contain the standard<br />snapshot attributes.<br /><br />### Filtering Results by Resource Type<br /><br />It's possible to request filtered results by including certain query parameters.<br /><br />#### List Droplet Snapshots<br /><br />To retrieve only snapshots based on Droplets, include the `resource_type`<br />query parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.<br /><br />#### List Volume Snapshots<br /><br />To retrieve only snapshots based on volumes, include the `resource_type`<br />query parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.<br /></td>
</tr>
<tr>
    <td><a href="#snapshots_delete"><CopyableCode code="snapshots_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>Both Droplet and volume snapshots are managed through the `/v2/snapshots/`<br />endpoint. To delete a snapshot, send a DELETE request to<br />`/v2/snapshots/$SNAPSHOT_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /></td>
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
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code></code></td>
    <td>Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot. (example: 6372321)</td>
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
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Used to filter snapshots by a resource type. (example: droplet)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="snapshots_get"
    values={[
        { label: 'snapshots_get', value: 'snapshots_get' },
        { label: 'snapshots_list', value: 'snapshots_list' }
    ]}
>
<TabItem value="snapshots_get">

To retrieve information about a snapshot, send a GET request to<br />`/v2/snapshots/$SNAPSHOT_ID`.<br /><br />The response will be a JSON object with a key called `snapshot`. The value of<br />this will be an snapshot object containing the standard snapshot attributes.<br />

```sql
SELECT
id,
name,
resource_id,
created_at,
min_disk_size,
regions,
resource_type,
size_gigabytes,
tags
FROM digitalocean.compute.snapshots
WHERE snapshot_id = '{{ snapshot_id }}' -- required;
```
</TabItem>
<TabItem value="snapshots_list">

To list all of the snapshots available on your account, send a GET request to<br />`/v2/snapshots`.<br /><br />The response will be a JSON object with a key called `snapshots`. This will be<br />set to an array of `snapshot` objects, each of which will contain the standard<br />snapshot attributes.<br /><br />### Filtering Results by Resource Type<br /><br />It's possible to request filtered results by including certain query parameters.<br /><br />#### List Droplet Snapshots<br /><br />To retrieve only snapshots based on Droplets, include the `resource_type`<br />query parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.<br /><br />#### List Volume Snapshots<br /><br />To retrieve only snapshots based on volumes, include the `resource_type`<br />query parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.<br />

```sql
SELECT
id,
name,
resource_id,
created_at,
min_disk_size,
regions,
resource_type,
size_gigabytes,
tags
FROM digitalocean.compute.snapshots
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND resource_type = '{{ resource_type }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="snapshots_delete"
    values={[
        { label: 'snapshots_delete', value: 'snapshots_delete' }
    ]}
>
<TabItem value="snapshots_delete">

Both Droplet and volume snapshots are managed through the `/v2/snapshots/`<br />endpoint. To delete a snapshot, send a DELETE request to<br />`/v2/snapshots/$SNAPSHOT_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br />

```sql
DELETE FROM digitalocean.compute.snapshots
WHERE snapshot_id = '{{ snapshot_id }}' --required;
```
</TabItem>
</Tabs>
