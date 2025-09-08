--- 
title: floating_ip_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - floating_ip_actions
  - network
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

Creates, updates, deletes, gets or lists a <code>floating_ip_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>floating_ip_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.network.floating_ip_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="floating_ips_action_get"
    values={[
        { label: 'floating_ips_action_get', value: 'floating_ips_action_get' },
        { label: 'floating_ips_action_list', value: 'floating_ips_action_list' }
    ]}
>
<TabItem value="floating_ips_action_get">

The response will be an object with a key called `action`. The value of this will be an object that contains the standard floating IP action attributes.

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
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="floating_ips_action_list">

The results will be returned as a JSON object with an `actions` key. This will be set to an array filled with action objects containing the standard floating IP action attributes.

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
    <td><a href="#floating_ips_action_get"><CopyableCode code="floating_ips_action_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-floating_ip"><code>floating_ip</code></a>, <a href="#parameter-action_id"><code>action_id</code></a></td>
    <td></td>
    <td>To retrieve the status of a floating IP action, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions/$ACTION_ID`.</td>
</tr>
<tr>
    <td><a href="#floating_ips_action_list"><CopyableCode code="floating_ips_action_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-floating_ip"><code>floating_ip</code></a></td>
    <td></td>
    <td>To retrieve all actions that have been executed on a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions`.</td>
</tr>
<tr>
    <td><a href="#floating_ips_action_post"><CopyableCode code="floating_ips_action_post" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-floating_ip"><code>floating_ip</code></a></td>
    <td></td>
    <td>To initiate an action on a floating IP send a POST request to<br />`/v2/floating_ips/$FLOATING_IP/actions`. In the JSON body to the request,<br />set the `type` attribute to on of the supported action types:<br /><br />| Action     | Details<br />|------------|--------<br />| `assign`   | Assigns a floating IP to a Droplet<br />| `unassign` | Unassign a floating IP from a Droplet<br /></td>
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
<tr id="parameter-floating_ip">
    <td><CopyableCode code="floating_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>A floating IP address. (example: 45.55.96.47)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="floating_ips_action_get"
    values={[
        { label: 'floating_ips_action_get', value: 'floating_ips_action_get' },
        { label: 'floating_ips_action_list', value: 'floating_ips_action_list' }
    ]}
>
<TabItem value="floating_ips_action_get">

To retrieve the status of a floating IP action, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions/$ACTION_ID`.

```sql
SELECT
action
FROM digitalocean.network.floating_ip_actions
WHERE floating_ip = '{{ floating_ip }}' -- required
AND action_id = '{{ action_id }}' -- required;
```
</TabItem>
<TabItem value="floating_ips_action_list">

To retrieve all actions that have been executed on a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions`.

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
FROM digitalocean.network.floating_ip_actions
WHERE floating_ip = '{{ floating_ip }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="floating_ips_action_post"
    values={[
        { label: 'floating_ips_action_post', value: 'floating_ips_action_post' }
    ]}
>
<TabItem value="floating_ips_action_post">

To initiate an action on a floating IP send a POST request to<br />`/v2/floating_ips/$FLOATING_IP/actions`. In the JSON body to the request,<br />set the `type` attribute to on of the supported action types:<br /><br />| Action     | Details<br />|------------|--------<br />| `assign`   | Assigns a floating IP to a Droplet<br />| `unassign` | Unassign a floating IP from a Droplet<br />

```sql
EXEC digitalocean.network.floating_ip_actions.floating_ips_action_post 
@floating_ip='{{ floating_ip }}' --required;
```
</TabItem>
</Tabs>
