--- 
title: firewall_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rules
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

Creates, updates, deletes, gets or lists a <code>firewall_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>firewall_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.firewall_rules" /></td></tr>
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
    <td><a href="#firewalls_add_rules"><CopyableCode code="firewalls_add_rules" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a></td>
    <td></td>
    <td>To add additional access rules to a firewall, send a POST request to<br />`/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an<br />inbound_rules and/or outbound_rules attribute containing an array of rules to<br />be added.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
</tr>
<tr>
    <td><a href="#firewalls_delete_rules"><CopyableCode code="firewalls_delete_rules" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewall_id"><code>firewall_id</code></a></td>
    <td></td>
    <td>To remove access rules from a firewall, send a DELETE request to<br />`/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an<br />`inbound_rules` and/or `outbound_rules` attribute containing an array of rules<br />to be removed.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
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
    defaultValue="firewalls_add_rules"
    values={[
        { label: 'firewalls_add_rules', value: 'firewalls_add_rules' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="firewalls_add_rules">

To add additional access rules to a firewall, send a POST request to<br />`/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an<br />inbound_rules and/or outbound_rules attribute containing an array of rules to<br />be added.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
INSERT INTO digitalocean.compute.firewall_rules (
data__inbound_rules,
data__outbound_rules,
firewall_id
)
SELECT 
'{{ inbound_rules }}',
'{{ outbound_rules }}',
'{{ firewall_id }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: firewall_rules
  props:
    - name: firewall_id
      value: string (uuid)
      description: Required parameter for the firewall_rules resource.
    - name: inbound_rules
      value: array
    - name: outbound_rules
      value: array
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="firewalls_delete_rules"
    values={[
        { label: 'firewalls_delete_rules', value: 'firewalls_delete_rules' }
    ]}
>
<TabItem value="firewalls_delete_rules">

To remove access rules from a firewall, send a DELETE request to<br />`/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an<br />`inbound_rules` and/or `outbound_rules` attribute containing an array of rules<br />to be removed.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
DELETE FROM digitalocean.compute.firewall_rules
WHERE firewall_id = '{{ firewall_id }}' --required;
```
</TabItem>
</Tabs>
