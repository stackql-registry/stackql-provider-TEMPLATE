--- 
title: firewall_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_tags
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

Creates, updates, deletes, gets or lists a <code>firewall_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>firewall_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.firewall_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#firewalls_add_tags"><CopyableCode code="firewalls_add_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a>, <a href="#parameter-data__tags"><code>data__tags</code></a></td>
    <td></td>
    <td>To assign a tag representing a group of Droplets to a firewall, send a POST<br />request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,<br />there should be a `tags` attribute containing a list of tag names.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
</tr>
<tr>
    <td><a href="#firewalls_delete_tags"><CopyableCode code="firewalls_delete_tags" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a></td>
    <td></td>
    <td>To remove a tag representing a group of Droplets from a firewall, send a<br />DELETE request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the<br />request, there should be a `tags` attribute containing a list of tag names.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="firewalls_add_tags"
    values={[
        { label: 'firewalls_add_tags', value: 'firewalls_add_tags' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="firewalls_add_tags">

To assign a tag representing a group of Droplets to a firewall, send a POST<br />request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,<br />there should be a `tags` attribute containing a list of tag names.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
INSERT INTO digitalocean.compute.firewall_tags (
data__tags,
firewall_id
)
SELECT 
'{{ tags }}' --required,
'{{ firewall_id }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: firewall_tags
  props:
    - name: firewall_id
      value: string (uuid)
      description: Required parameter for the firewall_tags resource.
    - name: tags
      value: array
      description: >
        A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="firewalls_delete_tags"
    values={[
        { label: 'firewalls_delete_tags', value: 'firewalls_delete_tags' }
    ]}
>
<TabItem value="firewalls_delete_tags">

To remove a tag representing a group of Droplets from a firewall, send a<br />DELETE request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the<br />request, there should be a `tags` attribute containing a list of tag names.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
DELETE FROM digitalocean.compute.firewall_tags
WHERE firewall_id = '{{ firewall_id }}' --required;
```
</TabItem>
</Tabs>
