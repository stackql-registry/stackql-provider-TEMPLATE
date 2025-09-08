--- 
title: volume_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_actions
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

Creates, updates, deletes, gets or lists a <code>volume_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>volume_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.volume_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="volume_actions_get"
    values={[
        { label: 'volume_actions_get', value: 'volume_actions_get' },
        { label: 'volume_actions_list', value: 'volume_actions_list' }
    ]}
>
<TabItem value="volume_actions_get">

The response will be an object with a key called `action`. The value of this will be an object that contains the standard volume action attributes

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
    <td>A unique numeric ID that can be used to identify and reference an action.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for the resource that the action is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was completed. (example: 2020-11-14T16:30:06Z)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region_slug" /></td>
    <td><code>string</code></td>
    <td>A human-readable string that is used as a unique identifier for each region. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that the action is associated with. (example: droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was initiated. (example: 2020-11-14T16:29:21Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the action. This can be "in-progress", "completed", or "errored". (example: completed, default: in-progress)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>This is the type of action that the object represents. For example, this could be "transfer" to represent the state of an image transfer action. (example: create)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="volume_actions_list">

The response will be an object with a key called `action`. The value of this will be an object that contains the standard volume action attributes.

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
    <td>A unique numeric ID that can be used to identify and reference an action.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for the resource that the action is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was completed. (example: 2020-11-14T16:30:06Z)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region_slug" /></td>
    <td><code>string</code></td>
    <td>A human-readable string that is used as a unique identifier for each region. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that the action is associated with. (example: droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was initiated. (example: 2020-11-14T16:29:21Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the action. This can be "in-progress", "completed", or "errored". (example: completed, default: in-progress)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>This is the type of action that the object represents. For example, this could be "transfer" to represent the state of an image transfer action. (example: create)</td>
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
    <td><a href="#volume_actions_get"><CopyableCode code="volume_actions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-action_id"><code>action_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve the status of a volume action, send a GET request to `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.<br /><br /></td>
</tr>
<tr>
    <td><a href="#volume_actions_list"><CopyableCode code="volume_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve all actions that have been executed on a volume, send a GET request to `/v2/volumes/$VOLUME_ID/actions`.<br /><br /></td>
</tr>
<tr>
    <td><a href="#volume_actions_post_by_id"><CopyableCode code="volume_actions_post_by_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To initiate an action on a block storage volume by Id, send a POST request to<br />`~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate<br />attributes for the respective action.<br /><br />## Attach a Block Storage Volume to a Droplet<br /><br />| Attribute  | Details                                                             |<br />| ---------- | ------------------------------------------------------------------- |<br />| type       | This must be `attach`                                               |<br />| droplet_id | Set to the Droplet's ID                                             |<br />| region     | Set to the slug representing the region where the volume is located |<br /><br />Each volume may only be attached to a single Droplet. However, up to fifteen<br />volumes may be attached to a Droplet at a time. Pre-formatted volumes will be<br />automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS<br />Droplets created on or after April 26, 2018 when attached. On older Droplets,<br />[additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)<br />is required.<br /><br />## Remove a Block Storage Volume from a Droplet<br /><br />| Attribute  | Details                                                             |<br />| ---------- | ------------------------------------------------------------------- |<br />| type       | This must be `detach`                                               |<br />| droplet_id | Set to the Droplet's ID                                             |<br />| region     | Set to the slug representing the region where the volume is located |<br /><br />## Resize a Volume<br /><br />| Attribute      | Details                                                             |<br />| -------------- | ------------------------------------------------------------------- |<br />| type           | This must be `resize`                                               |<br />| size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |<br />| region         | Set to the slug representing the region where the volume is located |<br /><br />Volumes may only be resized upwards. The maximum size for a volume is 16TiB.<br /></td>
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
<tr id="parameter-action_id">
    <td><CopyableCode code="action_id" /></td>
    <td><code>integer</code></td>
    <td>A unique numeric ID that can be used to identify and reference an action. (example: 36804636)</td>
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
    defaultValue="volume_actions_get"
    values={[
        { label: 'volume_actions_get', value: 'volume_actions_get' },
        { label: 'volume_actions_list', value: 'volume_actions_list' }
    ]}
>
<TabItem value="volume_actions_get">

To retrieve the status of a volume action, send a GET request to `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.<br /><br />

```sql
SELECT
id,
resource_id,
completed_at,
region,
region_slug,
resource_type,
started_at,
status,
type
FROM digitalocean.compute.volume_actions
WHERE volume_id = '{{ volume_id }}' -- required
AND action_id = '{{ action_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
<TabItem value="volume_actions_list">

To retrieve all actions that have been executed on a volume, send a GET request to `/v2/volumes/$VOLUME_ID/actions`.<br /><br />

```sql
SELECT
id,
resource_id,
completed_at,
region,
region_slug,
resource_type,
started_at,
status,
type
FROM digitalocean.compute.volume_actions
WHERE volume_id = '{{ volume_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="volume_actions_post_by_id"
    values={[
        { label: 'volume_actions_post_by_id', value: 'volume_actions_post_by_id' }
    ]}
>
<TabItem value="volume_actions_post_by_id">

To initiate an action on a block storage volume by Id, send a POST request to<br />`~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate<br />attributes for the respective action.<br /><br />## Attach a Block Storage Volume to a Droplet<br /><br />| Attribute  | Details                                                             |<br />| ---------- | ------------------------------------------------------------------- |<br />| type       | This must be `attach`                                               |<br />| droplet_id | Set to the Droplet's ID                                             |<br />| region     | Set to the slug representing the region where the volume is located |<br /><br />Each volume may only be attached to a single Droplet. However, up to fifteen<br />volumes may be attached to a Droplet at a time. Pre-formatted volumes will be<br />automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS<br />Droplets created on or after April 26, 2018 when attached. On older Droplets,<br />[additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)<br />is required.<br /><br />## Remove a Block Storage Volume from a Droplet<br /><br />| Attribute  | Details                                                             |<br />| ---------- | ------------------------------------------------------------------- |<br />| type       | This must be `detach`                                               |<br />| droplet_id | Set to the Droplet's ID                                             |<br />| region     | Set to the slug representing the region where the volume is located |<br /><br />## Resize a Volume<br /><br />| Attribute      | Details                                                             |<br />| -------------- | ------------------------------------------------------------------- |<br />| type           | This must be `resize`                                               |<br />| size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |<br />| region         | Set to the slug representing the region where the volume is located |<br /><br />Volumes may only be resized upwards. The maximum size for a volume is 16TiB.<br />

```sql
EXEC digitalocean.compute.volume_actions.volume_actions_post_by_id 
@volume_id='{{ volume_id }}' --required, 
@per_page='{{ per_page }}', 
@page='{{ page }}';
```
</TabItem>
</Tabs>
