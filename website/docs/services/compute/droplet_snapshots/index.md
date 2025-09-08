--- 
title: droplet_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_snapshots
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

Creates, updates, deletes, gets or lists a <code>droplet_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_snapshots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_list_snapshots"
    values={[
        { label: 'droplets_list_snapshots', value: 'droplets_list_snapshots' }
    ]}
>
<TabItem value="droplets_list_snapshots">

A JSON object with an `snapshots` key.

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
    <td><code>integer</code></td>
    <td>The unique identifier for the snapshot or backup.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the snapshot. (example: web-01-1595954862243)</td>
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
    <td><CopyableCode code="size_gigabytes" /></td>
    <td><code>number (float)</code></td>
    <td>The billable size of the snapshot in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Describes the kind of image. It may be one of `snapshot` or `backup`. This specifies whether an image is a user-generated Droplet snapshot or automatically created Droplet backup. (example: snapshot)</td>
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
    <td><a href="#droplets_list_snapshots"><CopyableCode code="droplets_list_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve the snapshots that have been created from a Droplet, send a GET<br />request to `/v2/droplets/$DROPLET_ID/snapshots`.<br /><br />You will get back a JSON object that has a `snapshots` key. This will be set<br />to an array of snapshot objects, each of which contain the standard Droplet<br />snapshot attributes.<br /></td>
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
<tr id="parameter-droplet_id">
    <td><CopyableCode code="droplet_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for a Droplet instance. (example: 3164444)</td>
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
    defaultValue="droplets_list_snapshots"
    values={[
        { label: 'droplets_list_snapshots', value: 'droplets_list_snapshots' }
    ]}
>
<TabItem value="droplets_list_snapshots">

To retrieve the snapshots that have been created from a Droplet, send a GET<br />request to `/v2/droplets/$DROPLET_ID/snapshots`.<br /><br />You will get back a JSON object that has a `snapshots` key. This will be set<br />to an array of snapshot objects, each of which contain the standard Droplet<br />snapshot attributes.<br />

```sql
SELECT
id,
name,
created_at,
min_disk_size,
regions,
size_gigabytes,
type
FROM digitalocean.compute.droplet_snapshots
WHERE droplet_id = '{{ droplet_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
