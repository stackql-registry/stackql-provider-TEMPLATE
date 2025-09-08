--- 
title: droplet_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_actions
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

Creates, updates, deletes, gets or lists a <code>droplet_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplet_actions_get"
    values={[
        { label: 'droplet_actions_get', value: 'droplet_actions_get' },
        { label: 'droplet_actions_list', value: 'droplet_actions_list' }
    ]}
>
<TabItem value="droplet_actions_get">

The result will be a JSON object with an action key.  This will be set to an action object containing the standard action attributes.

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
<TabItem value="droplet_actions_list">

A JSON object with an `actions` key.

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
    <td><a href="#droplet_actions_get"><CopyableCode code="droplet_actions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a>, <a href="#parameter-action_id"><code>action_id</code></a></td>
    <td></td>
    <td>To retrieve a Droplet action, send a GET request to<br />`/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.<br /><br />The response will be a JSON object with a key called `action`. The value will<br />be a Droplet action object.<br /></td>
</tr>
<tr>
    <td><a href="#droplet_actions_list"><CopyableCode code="droplet_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve a list of all actions that have been executed for a Droplet, send<br />a GET request to `/v2/droplets/$DROPLET_ID/actions`.<br /><br />The results will be returned as a JSON object with an `actions` key. This will<br />be set to an array filled with `action` objects containing the standard<br />`action` attributes.<br /></td>
</tr>
<tr>
    <td><a href="#droplet_actions_post"><CopyableCode code="droplet_actions_post" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To initiate an action on a Droplet send a POST request to<br />`/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,<br />set the `type` attribute to on of the supported action types:<br /><br />| Action                                   | Details | Additionally Required Permission |<br />| ---------------------------------------- | ----------- | ----------- |<br />| &lt;nobr&gt;`enable_backups`&lt;/nobr&gt;            | Enables backups for a Droplet | |<br />| &lt;nobr&gt;`disable_backups`&lt;/nobr&gt;           | Disables backups for a Droplet | |<br />| &lt;nobr&gt;`change_backup_policy`&lt;/nobr&gt;      | Update the backup policy for a Droplet | |<br />| &lt;nobr&gt;`reboot`&lt;/nobr&gt;                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. | |<br />| &lt;nobr&gt;`power_cycle`&lt;/nobr&gt;               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. | |<br />| &lt;nobr&gt;`shutdown`&lt;/nobr&gt;                  | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. | |<br />| &lt;nobr&gt;`power_off`&lt;/nobr&gt;                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. | |<br />| &lt;nobr&gt;`power_on`&lt;/nobr&gt;                  | Powers on a Droplet. | |<br />| &lt;nobr&gt;`restore`&lt;/nobr&gt;                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. | droplet:admin |<br />| &lt;nobr&gt;`password_reset`&lt;/nobr&gt;            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. | droplet:admin |<br />| &lt;nobr&gt;`resize`&lt;/nobr&gt;                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. | droplet:create |<br />| &lt;nobr&gt;`rebuild`&lt;/nobr&gt;                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. | droplet:admin |<br />| &lt;nobr&gt;`rename`&lt;/nobr&gt;                    | Renames a Droplet. | |<br />| &lt;nobr&gt;`change_kernel`&lt;/nobr&gt;             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. | |<br />| &lt;nobr&gt;`enable_ipv6`&lt;/nobr&gt;               | Enables IPv6 for a Droplet. Once enabled for a Droplet, IPv6 can not be disabled. When enabling IPv6 on an existing Droplet, [additional OS-level configuration](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/#on-existing-droplets) is required. | |<br />| &lt;nobr&gt;`snapshot`&lt;/nobr&gt;                  | Takes a snapshot of a Droplet. | image:create |<br /></td>
</tr>
<tr>
    <td><a href="#droplet_actions_post_by_tag"><CopyableCode code="droplet_actions_post_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Some actions can be performed in bulk on tagged Droplets. The actions can be<br />initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with<br />the action arguments.<br /><br />Only a sub-set of action types are supported:<br /><br />- `power_cycle`<br />- `power_on`<br />- `power_off`<br />- `shutdown`<br />- `enable_ipv6`<br />- `enable_backups`<br />- `disable_backups`<br />- `snapshot` (also requires `image:create` permission)<br /></td>
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
<tr id="parameter-tag_name">
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br />Requires `tag:read` scope. (example: env:prod)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="droplet_actions_get"
    values={[
        { label: 'droplet_actions_get', value: 'droplet_actions_get' },
        { label: 'droplet_actions_list', value: 'droplet_actions_list' }
    ]}
>
<TabItem value="droplet_actions_get">

To retrieve a Droplet action, send a GET request to<br />`/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.<br /><br />The response will be a JSON object with a key called `action`. The value will<br />be a Droplet action object.<br />

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
FROM digitalocean.compute.droplet_actions
WHERE droplet_id = '{{ droplet_id }}' -- required
AND action_id = '{{ action_id }}' -- required;
```
</TabItem>
<TabItem value="droplet_actions_list">

To retrieve a list of all actions that have been executed for a Droplet, send<br />a GET request to `/v2/droplets/$DROPLET_ID/actions`.<br /><br />The results will be returned as a JSON object with an `actions` key. This will<br />be set to an array filled with `action` objects containing the standard<br />`action` attributes.<br />

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
FROM digitalocean.compute.droplet_actions
WHERE droplet_id = '{{ droplet_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="droplet_actions_post"
    values={[
        { label: 'droplet_actions_post', value: 'droplet_actions_post' },
        { label: 'droplet_actions_post_by_tag', value: 'droplet_actions_post_by_tag' }
    ]}
>
<TabItem value="droplet_actions_post">

To initiate an action on a Droplet send a POST request to<br />`/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,<br />set the `type` attribute to on of the supported action types:<br /><br />| Action                                   | Details | Additionally Required Permission |<br />| ---------------------------------------- | ----------- | ----------- |<br />| &lt;nobr&gt;`enable_backups`&lt;/nobr&gt;            | Enables backups for a Droplet | |<br />| &lt;nobr&gt;`disable_backups`&lt;/nobr&gt;           | Disables backups for a Droplet | |<br />| &lt;nobr&gt;`change_backup_policy`&lt;/nobr&gt;      | Update the backup policy for a Droplet | |<br />| &lt;nobr&gt;`reboot`&lt;/nobr&gt;                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. | |<br />| &lt;nobr&gt;`power_cycle`&lt;/nobr&gt;               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. | |<br />| &lt;nobr&gt;`shutdown`&lt;/nobr&gt;                  | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. | |<br />| &lt;nobr&gt;`power_off`&lt;/nobr&gt;                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. | |<br />| &lt;nobr&gt;`power_on`&lt;/nobr&gt;                  | Powers on a Droplet. | |<br />| &lt;nobr&gt;`restore`&lt;/nobr&gt;                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. | droplet:admin |<br />| &lt;nobr&gt;`password_reset`&lt;/nobr&gt;            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. | droplet:admin |<br />| &lt;nobr&gt;`resize`&lt;/nobr&gt;                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. | droplet:create |<br />| &lt;nobr&gt;`rebuild`&lt;/nobr&gt;                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. | droplet:admin |<br />| &lt;nobr&gt;`rename`&lt;/nobr&gt;                    | Renames a Droplet. | |<br />| &lt;nobr&gt;`change_kernel`&lt;/nobr&gt;             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. | |<br />| &lt;nobr&gt;`enable_ipv6`&lt;/nobr&gt;               | Enables IPv6 for a Droplet. Once enabled for a Droplet, IPv6 can not be disabled. When enabling IPv6 on an existing Droplet, [additional OS-level configuration](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/#on-existing-droplets) is required. | |<br />| &lt;nobr&gt;`snapshot`&lt;/nobr&gt;                  | Takes a snapshot of a Droplet. | image:create |<br />

```sql
EXEC digitalocean.compute.droplet_actions.droplet_actions_post 
@droplet_id='{{ droplet_id }}' --required;
```
</TabItem>
<TabItem value="droplet_actions_post_by_tag">

Some actions can be performed in bulk on tagged Droplets. The actions can be<br />initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with<br />the action arguments.<br /><br />Only a sub-set of action types are supported:<br /><br />- `power_cycle`<br />- `power_on`<br />- `power_off`<br />- `shutdown`<br />- `enable_ipv6`<br />- `enable_backups`<br />- `disable_backups`<br />- `snapshot` (also requires `image:create` permission)<br />

```sql
EXEC digitalocean.compute.droplet_actions.droplet_actions_post_by_tag 
@tag_name='{{ tag_name }}';
```
</TabItem>
</Tabs>
