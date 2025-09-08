--- 
title: firewalls
hide_title: false
hide_table_of_contents: false
keywords:
  - firewalls
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

Creates, updates, deletes, gets or lists a <code>firewalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>firewalls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.firewalls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="firewalls_get"
    values={[
        { label: 'firewalls_get', value: 'firewalls_get' },
        { label: 'firewalls_list', value: 'firewalls_list' }
    ]}
>
<TabItem value="firewalls_get">

The response will be a JSON object with a firewall key. This will be set to an object containing the standard firewall attributes.<br /><br />Firewalls responses will include only the resources that you are granted to see. Ensure that your API token includes all necessary `<resource>:read` permissions for requested firewall.

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
    <td>A unique ID that can be used to identify and reference a firewall. (example: bb4b2611-3d72-467b-8602-280330ecd65c)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for a firewall. The name must begin with an alphanumeric character. Subsequent characters must either be alphanumeric characters, a period (.), or a dash (-). (pattern: ^[a-zA-Z0-9][a-zA-Z0-9\.-]+$, example: firewall)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the firewall was created. (example: 2020-05-23T21:24:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="droplet_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the IDs of the Droplets assigned to the firewall. <br /><br />Requires `droplet:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="inbound_rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="outbound_rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pending_changes" /></td>
    <td><code>array</code></td>
    <td>An array of objects each containing the fields "droplet_id", "removing", and "status". It is provided to detail exactly which Droplets are having their security policies updated. When empty, all changes have been successfully applied.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status string indicating the current state of the firewall. This can be "waiting", "succeeded", or "failed". (example: waiting)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br /><br />Requires `tag:create` and `tag:read` scopes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="firewalls_list">

To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.<br /><br />Firewalls responses will include only the resources that you are granted to see. Ensure that your API token includes all necessary `<resource>:read` permissions for requested firewall.

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
    <td>A unique ID that can be used to identify and reference a firewall. (example: bb4b2611-3d72-467b-8602-280330ecd65c)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for a firewall. The name must begin with an alphanumeric character. Subsequent characters must either be alphanumeric characters, a period (.), or a dash (-). (pattern: ^[a-zA-Z0-9][a-zA-Z0-9\.-]+$, example: firewall)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the firewall was created. (example: 2020-05-23T21:24:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="droplet_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the IDs of the Droplets assigned to the firewall. <br /><br />Requires `droplet:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="inbound_rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="outbound_rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pending_changes" /></td>
    <td><code>array</code></td>
    <td>An array of objects each containing the fields "droplet_id", "removing", and "status". It is provided to detail exactly which Droplets are having their security policies updated. When empty, all changes have been successfully applied.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status string indicating the current state of the firewall. This can be "waiting", "succeeded", or "failed". (example: waiting)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br /><br />Requires `tag:create` and `tag:read` scopes.</td>
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
    <td><a href="#firewalls_get"><CopyableCode code="firewalls_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a></td>
    <td></td>
    <td>To show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.</td>
</tr>
<tr>
    <td><a href="#firewalls_list"><CopyableCode code="firewalls_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.</td>
</tr>
<tr>
    <td><a href="#firewalls_create"><CopyableCode code="firewalls_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To create a new firewall, send a POST request to `/v2/firewalls`. The request<br />must contain at least one inbound or outbound access rule.<br /></td>
</tr>
<tr>
    <td><a href="#firewalls_update"><CopyableCode code="firewalls_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To update the configuration of an existing firewall, send a PUT request to<br />`/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation<br />of the firewall including existing attributes. **Note that any attributes that<br />are not provided will be reset to their default values.**<br /><br /><br />You must have read access (e.g. `droplet:read`) to all resources attached<br />to the firewall to successfully update the firewall.<br /></td>
</tr>
<tr>
    <td><a href="#firewalls_delete"><CopyableCode code="firewalls_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a></td>
    <td></td>
    <td>To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
</tr>
<tr>
    <td><a href="#firewalls_assign_droplets"><CopyableCode code="firewalls_assign_droplets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a>, <a href="#parameter-droplet_ids"><code>droplet_ids</code></a></td>
    <td></td>
    <td>To assign a Droplet to a firewall, send a POST request to<br />`/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there<br />should be a `droplet_ids` attribute containing a list of Droplet IDs.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
</tr>
<tr>
    <td><a href="#firewalls_delete_droplets"><CopyableCode code="firewalls_delete_droplets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a>, <a href="#parameter-droplet_ids"><code>droplet_ids</code></a></td>
    <td></td>
    <td>To remove a Droplet from a firewall, send a DELETE request to<br />`/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should<br />be a `droplet_ids` attribute containing a list of Droplet IDs.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
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
<tr id="parameter-firewall_id">
    <td><CopyableCode code="firewall_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference a firewall. (example: bb4b2611-3d72-467b-8602-280330ecd65c)</td>
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
    defaultValue="firewalls_get"
    values={[
        { label: 'firewalls_get', value: 'firewalls_get' },
        { label: 'firewalls_list', value: 'firewalls_list' }
    ]}
>
<TabItem value="firewalls_get">

To show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.

```sql
SELECT
id,
name,
created_at,
droplet_ids,
inbound_rules,
outbound_rules,
pending_changes,
status,
tags
FROM digitalocean.compute.firewalls
WHERE firewall_id = '{{ firewall_id }}' -- required;
```
</TabItem>
<TabItem value="firewalls_list">

To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.

```sql
SELECT
id,
name,
created_at,
droplet_ids,
inbound_rules,
outbound_rules,
pending_changes,
status,
tags
FROM digitalocean.compute.firewalls
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="firewalls_create"
    values={[
        { label: 'firewalls_create', value: 'firewalls_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="firewalls_create">

To create a new firewall, send a POST request to `/v2/firewalls`. The request<br />must contain at least one inbound or outbound access rule.<br />

```sql
INSERT INTO digitalocean.compute.firewalls (
data__name,
data__droplet_ids,
data__tags,
data__inbound_rules,
data__outbound_rules
)
SELECT 
'{{ name }}' --required,
'{{ droplet_ids }}',
'{{ tags }}',
'{{ inbound_rules }}',
'{{ outbound_rules }}'
RETURNING
firewall
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: firewalls
  props:
    - name: name
      value: string
      description: >
        A human-readable name for a firewall. The name must begin with an alphanumeric character. Subsequent characters must either be alphanumeric characters, a period (.), or a dash (-).
        
    - name: droplet_ids
      value: array
      description: >
        An array containing the IDs of the Droplets assigned to the firewall. <br><br>Requires `droplet:read` scope.
        
    - name: tags
      value: array
      description: >
        A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes.
        
    - name: inbound_rules
      value: array
    - name: outbound_rules
      value: array
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="firewalls_update"
    values={[
        { label: 'firewalls_update', value: 'firewalls_update' }
    ]}
>
<TabItem value="firewalls_update">

To update the configuration of an existing firewall, send a PUT request to<br />`/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation<br />of the firewall including existing attributes. **Note that any attributes that<br />are not provided will be reset to their default values.**<br /><br /><br />You must have read access (e.g. `droplet:read`) to all resources attached<br />to the firewall to successfully update the firewall.<br />

```sql
REPLACE digitalocean.compute.firewalls
SET 
data__name = '{{ name }}',
data__droplet_ids = '{{ droplet_ids }}',
data__tags = '{{ tags }}',
data__inbound_rules = '{{ inbound_rules }}',
data__outbound_rules = '{{ outbound_rules }}'
WHERE 
firewall_id = '{{ firewall_id }}' --required
AND data__name = '{{ name }}' --required
RETURNING
firewall;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="firewalls_delete"
    values={[
        { label: 'firewalls_delete', value: 'firewalls_delete' }
    ]}
>
<TabItem value="firewalls_delete">

To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
DELETE FROM digitalocean.compute.firewalls
WHERE firewall_id = '{{ firewall_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="firewalls_assign_droplets"
    values={[
        { label: 'firewalls_assign_droplets', value: 'firewalls_assign_droplets' },
        { label: 'firewalls_delete_droplets', value: 'firewalls_delete_droplets' }
    ]}
>
<TabItem value="firewalls_assign_droplets">

To assign a Droplet to a firewall, send a POST request to<br />`/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there<br />should be a `droplet_ids` attribute containing a list of Droplet IDs.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
EXEC digitalocean.compute.firewalls.firewalls_assign_droplets 
@firewall_id='{{ firewall_id }}' --required 
@@json=
'{
"droplet_ids": "{{ droplet_ids }}"
}';
```
</TabItem>
<TabItem value="firewalls_delete_droplets">

To remove a Droplet from a firewall, send a DELETE request to<br />`/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should<br />be a `droplet_ids` attribute containing a list of Droplet IDs.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
EXEC digitalocean.compute.firewalls.firewalls_delete_droplets 
@firewall_id='{{ firewall_id }}' --required 
@@json=
'{
"droplet_ids": "{{ droplet_ids }}"
}';
```
</TabItem>
</Tabs>
