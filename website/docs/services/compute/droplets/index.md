--- 
title: droplets
hide_title: false
hide_table_of_contents: false
keywords:
  - droplets
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

Creates, updates, deletes, gets or lists a <code>droplets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_get"
    values={[
        { label: 'droplets_get', value: 'droplets_get' },
        { label: 'droplets_list', value: 'droplets_list' }
    ]}
>
<TabItem value="droplets_get">

The response will be a JSON object with a key called `droplet`. This will be<br />set to a JSON object that contains the standard Droplet attributes.<br />

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
<TabItem value="droplets_list">

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
    <td><a href="#droplets_get"><CopyableCode code="droplets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To show information about an individual Droplet, send a GET request to<br />`/v2/droplets/$DROPLET_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_list"><CopyableCode code="droplets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-tag_name"><code>tag_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>To list all Droplets in your account, send a GET request to `/v2/droplets`.<br /><br />The response body will be a JSON object with a key of `droplets`. This will be<br />set to an array containing objects each representing a Droplet. These will<br />contain the standard Droplet attributes.<br /><br />### Filtering Results by Tag<br /><br />It's possible to request filtered results by including certain query parameters.<br />To only list Droplets assigned to a specific tag, include the `tag_name` query<br />parameter set to the name of the tag in your GET request. For example,<br />`/v2/droplets?tag_name=$TAG_NAME`.<br /><br />### GPU Droplets<br /><br />By default, only non-GPU Droplets are returned. To list only GPU Droplets, set<br />the `type` query parameter to `gpus`. For example, `/v2/droplets?type=gpus`.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_create"><CopyableCode code="droplets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new Droplet, send a POST request to `/v2/droplets` setting the<br />required attributes.<br /><br />A Droplet will be created using the provided information. The response body<br />will contain a JSON object with a key called `droplet`. The value will be an<br />object containing the standard attributes for your new Droplet. The response<br />code, 202 Accepted, does not indicate the success or failure of the operation,<br />just that the request has been accepted for processing. The `actions` returned<br />as part of the response's `links` object can be used to check the status<br />of the Droplet create event.<br /><br />### Create Multiple Droplets<br /><br />Creating multiple Droplets is very similar to creating a single Droplet.<br />Instead of sending `name` as a string, send `names` as an array of strings. A<br />Droplet will be created for each name you send using the associated<br />information. Up to ten Droplets may be created this way at a time.<br /><br />Rather than returning a single Droplet, the response body will contain a JSON<br />array with a key called `droplets`. This will be set to an array of JSON<br />objects, each of which will contain the standard Droplet attributes. The<br />response code, 202 Accepted, does not indicate the success or failure of any<br />operation, just that the request has been accepted for processing. The array<br />of `actions` returned as part of the response's `links` object can be used to<br />check the status of each individual Droplet create event.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_destroy"><CopyableCode code="droplets_destroy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_destroy_by_tag"><CopyableCode code="droplets_destroy_by_tag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td></td>
    <td>To delete **all** Droplets assigned to a specific tag, include the `tag_name`<br />query parameter set to the name of the tag in your DELETE request. For<br />example, `/v2/droplets?tag_name=$TAG_NAME`.<br /><br />This endpoint requires `tag:read` scope.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
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
<tr id="parameter-tag_name">
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>Specifies Droplets to be deleted by tag. (example: env:test)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`. (example: web-01)</td>
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
<tr id="parameter-tag_name">
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br />Requires `tag:read` scope. (example: env:prod)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`. (example: droplets)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="droplets_get"
    values={[
        { label: 'droplets_get', value: 'droplets_get' },
        { label: 'droplets_list', value: 'droplets_list' }
    ]}
>
<TabItem value="droplets_get">

To show information about an individual Droplet, send a GET request to<br />`/v2/droplets/$DROPLET_ID`.<br />

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
FROM digitalocean.compute.droplets
WHERE droplet_id = '{{ droplet_id }}' -- required;
```
</TabItem>
<TabItem value="droplets_list">

To list all Droplets in your account, send a GET request to `/v2/droplets`.<br /><br />The response body will be a JSON object with a key of `droplets`. This will be<br />set to an array containing objects each representing a Droplet. These will<br />contain the standard Droplet attributes.<br /><br />### Filtering Results by Tag<br /><br />It's possible to request filtered results by including certain query parameters.<br />To only list Droplets assigned to a specific tag, include the `tag_name` query<br />parameter set to the name of the tag in your GET request. For example,<br />`/v2/droplets?tag_name=$TAG_NAME`.<br /><br />### GPU Droplets<br /><br />By default, only non-GPU Droplets are returned. To list only GPU Droplets, set<br />the `type` query parameter to `gpus`. For example, `/v2/droplets?type=gpus`.<br />

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
FROM digitalocean.compute.droplets
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND tag_name = '{{ tag_name }}'
AND name = '{{ name }}'
AND type = '{{ type }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="droplets_create"
    values={[
        { label: 'droplets_create', value: 'droplets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="droplets_create">

To create a new Droplet, send a POST request to `/v2/droplets` setting the<br />required attributes.<br /><br />A Droplet will be created using the provided information. The response body<br />will contain a JSON object with a key called `droplet`. The value will be an<br />object containing the standard attributes for your new Droplet. The response<br />code, 202 Accepted, does not indicate the success or failure of the operation,<br />just that the request has been accepted for processing. The `actions` returned<br />as part of the response's `links` object can be used to check the status<br />of the Droplet create event.<br /><br />### Create Multiple Droplets<br /><br />Creating multiple Droplets is very similar to creating a single Droplet.<br />Instead of sending `name` as a string, send `names` as an array of strings. A<br />Droplet will be created for each name you send using the associated<br />information. Up to ten Droplets may be created this way at a time.<br /><br />Rather than returning a single Droplet, the response body will contain a JSON<br />array with a key called `droplets`. This will be set to an array of JSON<br />objects, each of which will contain the standard Droplet attributes. The<br />response code, 202 Accepted, does not indicate the success or failure of any<br />operation, just that the request has been accepted for processing. The array<br />of `actions` returned as part of the response's `links` object can be used to<br />check the status of each individual Droplet create event.<br />

```sql
INSERT INTO digitalocean.compute.droplets (

)
SELECT 

;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: droplets
  props:
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="droplets_destroy"
    values={[
        { label: 'droplets_destroy', value: 'droplets_destroy' },
        { label: 'droplets_destroy_by_tag', value: 'droplets_destroy_by_tag' }
    ]}
>
<TabItem value="droplets_destroy">

To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.compute.droplets
WHERE droplet_id = '{{ droplet_id }}' --required;
```
</TabItem>
<TabItem value="droplets_destroy_by_tag">

To delete **all** Droplets assigned to a specific tag, include the `tag_name`<br />query parameter set to the name of the tag in your DELETE request. For<br />example, `/v2/droplets?tag_name=$TAG_NAME`.<br /><br />This endpoint requires `tag:read` scope.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.compute.droplets
WHERE tag_name = '{{ tag_name }}' --required;
```
</TabItem>
</Tabs>
