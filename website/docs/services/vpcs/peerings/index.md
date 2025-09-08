--- 
title: peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - peerings
  - vpcs
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

Creates, updates, deletes, gets or lists a <code>peerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>peerings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.vpcs.peerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vpcs_list_peerings"
    values={[
        { label: 'vpcs_list_peerings', value: 'vpcs_list_peerings' }
    ]}
>
<TabItem value="vpcs_list_peerings">

The response will be a JSON object with a key called `peerings`. This  will be set to an array of objects, each of which will contain the standard  attributes associated with a VPC peering.

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
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference the VPC peering. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. (pattern: ^[a-zA-Z0-9\-]+$, example: nyc1-blr1-peering)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format. (example: 2020-03-13T19:20:47.442049222Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the VPC peering. (example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ids" /></td>
    <td><code>array</code></td>
    <td>An array of the two peered VPCs IDs.</td>
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
    <td><a href="#vpcs_list_peerings"><CopyableCode code="vpcs_list_peerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of a VPC's peerings, send a GET request to<br />`/v2/vpcs/$VPC_ID/peerings`.<br /></td>
</tr>
<tr>
    <td><a href="#vpcs_create_peerings"><CopyableCode code="vpcs_create_peerings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__vpc_id"><code>data__vpc_id</code></a></td>
    <td></td>
    <td>To create a new VPC peering for a given VPC, send a POST request to<br />`/v2/vpcs/$VPC_ID/peerings`.<br /></td>
</tr>
<tr>
    <td><a href="#vpcs_patch_peerings"><CopyableCode code="vpcs_patch_peerings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a>, <a href="#parameter-vpc_peering_id"><code>vpc_peering_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To update the name of a VPC peering in a particular VPC, send a PATCH request <br />to `/v2/vpcs/$VPC_ID/peerings/$VPC_PEERING_ID` with the new `name` in the <br />request body.<br /></td>
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
<tr id="parameter-vpc_id">
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a VPC. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
<tr id="parameter-vpc_peering_id">
    <td><CopyableCode code="vpc_peering_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a VPC peering. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
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
    defaultValue="vpcs_list_peerings"
    values={[
        { label: 'vpcs_list_peerings', value: 'vpcs_list_peerings' }
    ]}
>
<TabItem value="vpcs_list_peerings">

To list all of a VPC's peerings, send a GET request to<br />`/v2/vpcs/$VPC_ID/peerings`.<br />

```sql
SELECT
id,
name,
created_at,
status,
vpc_ids
FROM digitalocean.vpcs.peerings
WHERE vpc_id = '{{ vpc_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="vpcs_create_peerings"
    values={[
        { label: 'vpcs_create_peerings', value: 'vpcs_create_peerings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="vpcs_create_peerings">

To create a new VPC peering for a given VPC, send a POST request to<br />`/v2/vpcs/$VPC_ID/peerings`.<br />

```sql
INSERT INTO digitalocean.vpcs.peerings (
data__name,
data__vpc_id,
vpc_id
)
SELECT 
'{{ name }}' --required,
'{{ vpc_id }}' --required,
'{{ vpc_id }}'
RETURNING
peering
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: peerings
  props:
    - name: vpc_id
      value: string (uuid)
      description: Required parameter for the peerings resource.
    - name: name
      value: string
      description: >
        The name of the VPC peering. Must be unique and may only contain alphanumeric characters, dashes, and periods.
        
    - name: vpc_id
      value: string
      description: >
        The ID of the VPC to peer with.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="vpcs_patch_peerings"
    values={[
        { label: 'vpcs_patch_peerings', value: 'vpcs_patch_peerings' }
    ]}
>
<TabItem value="vpcs_patch_peerings">

To update the name of a VPC peering in a particular VPC, send a PATCH request <br />to `/v2/vpcs/$VPC_ID/peerings/$VPC_PEERING_ID` with the new `name` in the <br />request body.<br />

```sql
UPDATE digitalocean.vpcs.peerings
SET 
data__name = '{{ name }}'
WHERE 
vpc_id = '{{ vpc_id }}' --required
AND vpc_peering_id = '{{ vpc_peering_id }}' --required
AND data__name = '{{ name }}' --required
RETURNING
peering;
```
</TabItem>
</Tabs>
