--- 
title: volume_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_snapshots
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

Creates, updates, deletes, gets or lists a <code>volume_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>volume_snapshots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.volume_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="volume_snapshots_get_by_id"
    values={[
        { label: 'volume_snapshots_get_by_id', value: 'volume_snapshots_get_by_id' },
        { label: 'volume_snapshots_list', value: 'volume_snapshots_list' }
    ]}
>
<TabItem value="volume_snapshots_get_by_id">

You will get back a JSON object that has a `snapshot` key. This will contain the standard snapshot attributes

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
<TabItem value="volume_snapshots_list">

You will get back a JSON object that has a `snapshots` key. This will be set to an array of snapshot objects, each of which contain the standard snapshot attributes

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
    <td><a href="#volume_snapshots_get_by_id"><CopyableCode code="volume_snapshots_get_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>To retrieve the details of a snapshot that has been created from a volume, send a GET request to `/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.<br /><br /></td>
</tr>
<tr>
    <td><a href="#volume_snapshots_list"><CopyableCode code="volume_snapshots_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve the snapshots that have been created from a volume, send a GET request to `/v2/volumes/$VOLUME_ID/snapshots`.<br /><br /></td>
</tr>
<tr>
    <td><a href="#volume_snapshots_create"><CopyableCode code="volume_snapshots_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.</td>
</tr>
<tr>
    <td><a href="#volume_snapshots_delete_by_id"><CopyableCode code="volume_snapshots_delete_by_id" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>To delete a volume snapshot, send a DELETE request to<br />`/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /></td>
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
    <td><code>string</code></td>
    <td>The unique identifier for the snapshot. (example: fbe805e8-866b-11e6-96bf-000f53315a41)</td>
</tr>
<tr id="parameter-volume_id">
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the block storage volume. (example: 7724db7c-e098-11e5-b522-000f53304e51)</td>
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
    defaultValue="volume_snapshots_get_by_id"
    values={[
        { label: 'volume_snapshots_get_by_id', value: 'volume_snapshots_get_by_id' },
        { label: 'volume_snapshots_list', value: 'volume_snapshots_list' }
    ]}
>
<TabItem value="volume_snapshots_get_by_id">

To retrieve the details of a snapshot that has been created from a volume, send a GET request to `/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.<br /><br />

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
FROM digitalocean.compute.volume_snapshots
WHERE snapshot_id = '{{ snapshot_id }}' -- required;
```
</TabItem>
<TabItem value="volume_snapshots_list">

To retrieve the snapshots that have been created from a volume, send a GET request to `/v2/volumes/$VOLUME_ID/snapshots`.<br /><br />

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
FROM digitalocean.compute.volume_snapshots
WHERE volume_id = '{{ volume_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="volume_snapshots_create"
    values={[
        { label: 'volume_snapshots_create', value: 'volume_snapshots_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="volume_snapshots_create">

To create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.

```sql
INSERT INTO digitalocean.compute.volume_snapshots (
data__name,
data__tags,
volume_id
)
SELECT 
'{{ name }}' --required,
'{{ tags }}',
'{{ volume_id }}'
RETURNING
snapshot
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: volume_snapshots
  props:
    - name: volume_id
      value: string (uuid)
      description: Required parameter for the volume_snapshots resource.
    - name: name
      value: string
      description: >
        A human-readable name for the volume snapshot.
        
    - name: tags
      value: array
      description: >
        A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags. <br><br>Requires `tag:create` scope.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="volume_snapshots_delete_by_id"
    values={[
        { label: 'volume_snapshots_delete_by_id', value: 'volume_snapshots_delete_by_id' }
    ]}
>
<TabItem value="volume_snapshots_delete_by_id">

To delete a volume snapshot, send a DELETE request to<br />`/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br />

```sql
DELETE FROM digitalocean.compute.volume_snapshots
WHERE snapshot_id = '{{ snapshot_id }}' --required;
```
</TabItem>
</Tabs>
