--- 
title: image_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - image_actions
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

Creates, updates, deletes, gets or lists an <code>image_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>image_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.image_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="image_actions_get"
    values={[
        { label: 'image_actions_get', value: 'image_actions_get' },
        { label: 'image_actions_list', value: 'image_actions_list' }
    ]}
>
<TabItem value="image_actions_get">

The response will be an object with a key called `action`. The value of this will be an object that contains the standard image action attributes.

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
<TabItem value="image_actions_list">

The results will be returned as a JSON object with an `actions` key. This will be set to an array filled with action objects containing the standard action attributes.

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
    <td><a href="#image_actions_get"><CopyableCode code="image_actions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_id"><code>image_id</code></a>, <a href="#parameter-action_id"><code>action_id</code></a></td>
    <td></td>
    <td>To retrieve the status of an image action, send a GET request to `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.</td>
</tr>
<tr>
    <td><a href="#image_actions_list"><CopyableCode code="image_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_id"><code>image_id</code></a></td>
    <td></td>
    <td>To retrieve all actions that have been executed on an image, send a GET request to `/v2/images/$IMAGE_ID/actions`.</td>
</tr>
<tr>
    <td><a href="#image_actions_post"><CopyableCode code="image_actions_post" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-image_id"><code>image_id</code></a></td>
    <td></td>
    <td>The following actions are available on an Image.<br /><br />## Convert an Image to a Snapshot<br /><br />To convert an image, for example, a backup to a snapshot, send a POST request<br />to `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.<br /><br />## Transfer an Image<br /><br />To transfer an image to another region, send a POST request to<br />`/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set<br />`region` attribute to the slug identifier of the region you wish to transfer<br />to.<br /></td>
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
<tr id="parameter-image_id">
    <td><CopyableCode code="image_id" /></td>
    <td><code>integer</code></td>
    <td>A unique number that can be used to identify and reference a specific image. (example: 62137902)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="image_actions_get"
    values={[
        { label: 'image_actions_get', value: 'image_actions_get' },
        { label: 'image_actions_list', value: 'image_actions_list' }
    ]}
>
<TabItem value="image_actions_get">

To retrieve the status of an image action, send a GET request to `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.

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
FROM digitalocean.compute.image_actions
WHERE image_id = '{{ image_id }}' -- required
AND action_id = '{{ action_id }}' -- required;
```
</TabItem>
<TabItem value="image_actions_list">

To retrieve all actions that have been executed on an image, send a GET request to `/v2/images/$IMAGE_ID/actions`.

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
FROM digitalocean.compute.image_actions
WHERE image_id = '{{ image_id }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="image_actions_post"
    values={[
        { label: 'image_actions_post', value: 'image_actions_post' }
    ]}
>
<TabItem value="image_actions_post">

The following actions are available on an Image.<br /><br />## Convert an Image to a Snapshot<br /><br />To convert an image, for example, a backup to a snapshot, send a POST request<br />to `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.<br /><br />## Transfer an Image<br /><br />To transfer an image to another region, send a POST request to<br />`/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set<br />`region` attribute to the slug identifier of the region you wish to transfer<br />to.<br />

```sql
EXEC digitalocean.compute.image_actions.image_actions_post 
@image_id='{{ image_id }}' --required;
```
</TabItem>
</Tabs>
