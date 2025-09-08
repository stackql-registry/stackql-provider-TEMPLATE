--- 
title: droplets_neighbors
hide_title: false
hide_table_of_contents: false
keywords:
  - droplets_neighbors
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

Creates, updates, deletes, gets or lists a <code>droplets_neighbors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplets_neighbors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplets_neighbors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_list_neighbors"
    values={[
        { label: 'droplets_list_neighbors', value: 'droplets_list_neighbors' }
    ]}
>
<TabItem value="droplets_list_neighbors">

A JSON object with an `droplets` key.

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
    <td>A unique identifier for each Droplet instance. This is automatically generated upon Droplet creation.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name set for the Droplet instance. (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_ids" /></td>
    <td><code>array</code></td>
    <td>An array of backup IDs of any backups that have been taken of the Droplet instance.  Droplet backups are enabled at the time of the instance creation.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the Droplet was created. (example: 2020-07-21T18:37:44Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>The size of the Droplet's disk in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_info" /></td>
    <td><code>array</code></td>
    <td>An array of objects containing information about the disks available to the Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>An array of features enabled on this Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="gpu_info" /></td>
    <td><code>object</code></td>
    <td>An object containing information about the GPU capabilities of Droplets created with this size.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>The Droplet's image.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel" /></td>
    <td><code>object</code></td>
    <td>**Note**: All Droplets created after March 2017 use internal kernels by default. These Droplets will have this attribute set to `null`.  The current [kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/) for Droplets with externally managed kernels. This will initially be set to the kernel of the base image when the Droplet is created. </td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the Droplet has been locked, preventing actions by users.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>Memory of the Droplet in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>object</code></td>
    <td>The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.</td>
</tr>
<tr>
    <td><CopyableCode code="next_backup_window" /></td>
    <td><code>object</code></td>
    <td>The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size_slug" /></td>
    <td><code>string</code></td>
    <td>The unique slug identifier for the size of this Droplet. (example: s-1vcpu-1gb)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_ids" /></td>
    <td><code>array</code></td>
    <td>An array of snapshot IDs of any snapshots created from the Droplet instance.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status string indicating the state of the Droplet instance. This may be "new", "active", "off", or "archive". (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of Tags the Droplet has been tagged with.<br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>The number of virtual CPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_ids" /></td>
    <td><code>array</code></td>
    <td>A flat array including the unique identifier for each Block Storage volume attached to the Droplet.<br />Requires `block_storage:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the VPC to which the Droplet is assigned.<br />Requires `vpc:read` scope. (example: 760e09ef-dc84-11e8-981e-3cfdfeaae000)</td>
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
    <td><a href="#droplets_list_neighbors"><CopyableCode code="droplets_list_neighbors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on<br />the same physical hardware) for a specific Droplet, send a GET request to<br />`/v2/droplets/$DROPLET_ID/neighbors`.<br /><br />The results will be returned as a JSON object with a key of `droplets`. This<br />will be set to an array containing objects representing any other Droplets<br />that share the same physical hardware. An empty array indicates that the<br />Droplet is not co-located any other Droplets associated with your account.<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="droplets_list_neighbors"
    values={[
        { label: 'droplets_list_neighbors', value: 'droplets_list_neighbors' }
    ]}
>
<TabItem value="droplets_list_neighbors">

To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on<br />the same physical hardware) for a specific Droplet, send a GET request to<br />`/v2/droplets/$DROPLET_ID/neighbors`.<br /><br />The results will be returned as a JSON object with a key of `droplets`. This<br />will be set to an array containing objects representing any other Droplets<br />that share the same physical hardware. An empty array indicates that the<br />Droplet is not co-located any other Droplets associated with your account.<br />

```sql
SELECT
id,
name,
backup_ids,
created_at,
disk,
disk_info,
features,
gpu_info,
image,
kernel,
locked,
memory,
networks,
next_backup_window,
region,
size,
size_slug,
snapshot_ids,
status,
tags,
vcpus,
volume_ids,
vpc_uuid
FROM digitalocean.compute.droplets_neighbors
WHERE droplet_id = '{{ droplet_id }}' -- required;
```
</TabItem>
</Tabs>
