--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
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

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>volumes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="volumes_get"
    values={[
        { label: 'volumes_get', value: 'volumes_get' },
        { label: 'volumes_list', value: 'volumes_list' }
    ]}
>
<TabItem value="volumes_get">

The response will be a JSON object with a key called `volume`. The value will be an object containing the standard attributes associated with a volume.

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
    <td>The unique identifier for the block storage volume. (example: 506f78a4-e098-11e5-ad9f-000f53306ae1)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters. The name must begin with a letter. (example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the block storage volume was created. (example: 2020-03-02T17:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional free-form text field to describe a block storage volume. (example: Block store for examples)</td>
</tr>
<tr>
    <td><CopyableCode code="droplet_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem_label" /></td>
    <td><code>string</code></td>
    <td>The label currently applied to the filesystem. (example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem_type" /></td>
    <td><code>string</code></td>
    <td>The type of filesystem currently in-use on the volume. (example: ext4)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td>The region that the block storage volume is located in. When setting a region, the value should be the slug identifier for the region. When you query a block storage volume, the entire region object will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="size_gigabytes" /></td>
    <td><code>integer</code></td>
    <td>The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A flat array of tag names as strings applied to the resource. <br /><br />Requires `tag:read` scope.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="volumes_list">

The response will be a JSON object with a key called `volumes`. This will be set to an array of volume objects, each of which will contain the standard volume attributes.

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
    <td>The unique identifier for the block storage volume. (example: 506f78a4-e098-11e5-ad9f-000f53306ae1)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters. The name must begin with a letter. (example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the block storage volume was created. (example: 2020-03-02T17:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional free-form text field to describe a block storage volume. (example: Block store for examples)</td>
</tr>
<tr>
    <td><CopyableCode code="droplet_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem_label" /></td>
    <td><code>string</code></td>
    <td>The label currently applied to the filesystem. (example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem_type" /></td>
    <td><code>string</code></td>
    <td>The type of filesystem currently in-use on the volume. (example: ext4)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td>The region that the block storage volume is located in. When setting a region, the value should be the slug identifier for the region. When you query a block storage volume, the entire region object will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="size_gigabytes" /></td>
    <td><code>integer</code></td>
    <td>The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A flat array of tag names as strings applied to the resource. <br /><br />Requires `tag:read` scope.</td>
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
    <td><a href="#volumes_get"><CopyableCode code="volumes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a></td>
    <td></td>
    <td>To show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.<br /><br /></td>
</tr>
<tr>
    <td><a href="#volumes_list"><CopyableCode code="volumes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.<br />## Filtering Results<br />### By Region<br />The `region` may be provided as query parameter in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`<br />### By Name<br />It is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.<br />**Note:** You can only create one volume per region with the same name.<br />### By Name and Region<br />It is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.<br /><br /><br /></td>
</tr>
<tr>
    <td><a href="#volumes_create"><CopyableCode code="volumes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new volume, send a POST request to `/v2/volumes`. Optionally, a `filesystem_type` attribute may be provided in order to automatically format the volume's filesystem. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without support for auto-mounting is not recommended.</td>
</tr>
<tr>
    <td><a href="#volumes_delete"><CopyableCode code="volumes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a></td>
    <td></td>
    <td>To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.<br />No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.<br /><br /></td>
</tr>
<tr>
    <td><a href="#volumes_delete_by_name"><CopyableCode code="volumes_delete_by_name" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.<br />No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.<br /><br /></td>
</tr>
<tr>
    <td><a href="#volume_actions_post"><CopyableCode code="volume_actions_post" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To initiate an action on a block storage volume by Name, send a POST request to<br />`~/v2/volumes/actions`. The body should contain the appropriate<br />attributes for the respective action.<br /><br />## Attach a Block Storage Volume to a Droplet<br /><br />| Attribute   | Details                                                             |<br />| ----------- | ------------------------------------------------------------------- |<br />| type        | This must be `attach`                                               |<br />| volume_name | The name of the block storage volume                                |<br />| droplet_id  | Set to the Droplet's ID                                             |<br />| region      | Set to the slug representing the region where the volume is located |<br /><br />Each volume may only be attached to a single Droplet. However, up to fifteen<br />volumes may be attached to a Droplet at a time. Pre-formatted volumes will be<br />automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS<br />Droplets created on or after April 26, 2018 when attached. On older Droplets,<br />[additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)<br />is required.<br /><br />## Remove a Block Storage Volume from a Droplet<br /><br />| Attribute   | Details                                                             |<br />| ----------- | ------------------------------------------------------------------- |<br />| type        | This must be `detach`                                               |<br />| volume_name | The name of the block storage volume                                |<br />| droplet_id  | Set to the Droplet's ID                                             |<br />| region      | Set to the slug representing the region where the volume is located |<br /></td>
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
<tr id="parameter-volume_id">
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the block storage volume. (example: 7724db7c-e098-11e5-b522-000f53304e51)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The block storage volume's name. (example: example)</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the resource is available.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="volumes_get"
    values={[
        { label: 'volumes_get', value: 'volumes_get' },
        { label: 'volumes_list', value: 'volumes_list' }
    ]}
>
<TabItem value="volumes_get">

To show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.<br /><br />

```sql
SELECT
id,
name,
created_at,
description,
droplet_ids,
filesystem_label,
filesystem_type,
region,
size_gigabytes,
tags
FROM digitalocean.compute.volumes
WHERE volume_id = '{{ volume_id }}' -- required;
```
</TabItem>
<TabItem value="volumes_list">

To list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.<br />## Filtering Results<br />### By Region<br />The `region` may be provided as query parameter in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`<br />### By Name<br />It is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.<br />**Note:** You can only create one volume per region with the same name.<br />### By Name and Region<br />It is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.<br /><br /><br />

```sql
SELECT
id,
name,
created_at,
description,
droplet_ids,
filesystem_label,
filesystem_type,
region,
size_gigabytes,
tags
FROM digitalocean.compute.volumes
WHERE name = '{{ name }}'
AND region = '{{ region }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="volumes_create"
    values={[
        { label: 'volumes_create', value: 'volumes_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="volumes_create">

To create a new volume, send a POST request to `/v2/volumes`. Optionally, a `filesystem_type` attribute may be provided in order to automatically format the volume's filesystem. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without support for auto-mounting is not recommended.

```sql
INSERT INTO digitalocean.compute.volumes (

)
SELECT 

RETURNING
volume
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: volumes
  props:
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="volumes_delete"
    values={[
        { label: 'volumes_delete', value: 'volumes_delete' },
        { label: 'volumes_delete_by_name', value: 'volumes_delete_by_name' }
    ]}
>
<TabItem value="volumes_delete">

To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.<br />No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.<br /><br />

```sql
DELETE FROM digitalocean.compute.volumes
WHERE volume_id = '{{ volume_id }}' --required;
```
</TabItem>
<TabItem value="volumes_delete_by_name">

Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.<br />No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.<br /><br />

```sql
DELETE FROM digitalocean.compute.volumes
WHERE name = '{{ name }}'
AND region = '{{ region }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="volume_actions_post"
    values={[
        { label: 'volume_actions_post', value: 'volume_actions_post' }
    ]}
>
<TabItem value="volume_actions_post">

To initiate an action on a block storage volume by Name, send a POST request to<br />`~/v2/volumes/actions`. The body should contain the appropriate<br />attributes for the respective action.<br /><br />## Attach a Block Storage Volume to a Droplet<br /><br />| Attribute   | Details                                                             |<br />| ----------- | ------------------------------------------------------------------- |<br />| type        | This must be `attach`                                               |<br />| volume_name | The name of the block storage volume                                |<br />| droplet_id  | Set to the Droplet's ID                                             |<br />| region      | Set to the slug representing the region where the volume is located |<br /><br />Each volume may only be attached to a single Droplet. However, up to fifteen<br />volumes may be attached to a Droplet at a time. Pre-formatted volumes will be<br />automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS<br />Droplets created on or after April 26, 2018 when attached. On older Droplets,<br />[additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)<br />is required.<br /><br />## Remove a Block Storage Volume from a Droplet<br /><br />| Attribute   | Details                                                             |<br />| ----------- | ------------------------------------------------------------------- |<br />| type        | This must be `detach`                                               |<br />| volume_name | The name of the block storage volume                                |<br />| droplet_id  | Set to the Droplet's ID                                             |<br />| region      | Set to the slug representing the region where the volume is located |<br />

```sql
EXEC digitalocean.compute.volumes.volume_actions_post 
@per_page='{{ per_page }}', 
@page='{{ page }}';
```
</TabItem>
</Tabs>
