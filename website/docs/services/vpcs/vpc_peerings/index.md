--- 
title: vpc_peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_peerings
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

Creates, updates, deletes, gets or lists a <code>vpc_peerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_peerings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.vpcs.vpc_peerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vpc_peerings_get"
    values={[
        { label: 'vpc_peerings_get', value: 'vpc_peerings_get' },
        { label: 'vpc_peerings_list', value: 'vpc_peerings_list' }
    ]}
>
<TabItem value="vpc_peerings_get">

The response will be a JSON object with a key called `vpc_peering`. The value of this will be an object that contains the standard attributes associated with a VPC peering.

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
<TabItem value="vpc_peerings_list">

The response will be a JSON object with a key called `vpc_peerings`. This  will be set to an array of objects, each of which will contain the standard  attributes associated with a VPC peering.

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
    <td><a href="#vpc_peerings_get"><CopyableCode code="vpc_peerings_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpc_peering_id"><code>vpc_peering_id</code></a></td>
    <td></td>
    <td>To show information about an existing VPC Peering, send a GET request to `/v2/vpc_peerings/$VPC_PEERING_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#vpc_peerings_list"><CopyableCode code="vpc_peerings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>To list all of the VPC peerings on your account, send a GET request to `/v2/vpc_peerings`.</td>
</tr>
<tr>
    <td><a href="#vpc_peerings_create"><CopyableCode code="vpc_peerings_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__vpc_ids"><code>data__vpc_ids</code></a></td>
    <td></td>
    <td>To create a new VPC Peering, send a POST request to `/v2/vpc_peerings` <br />specifying a name and a list of two VPC IDs to peer. The response code, 202 <br />Accepted, does not indicate the success or failure of the operation, just <br />that the request has been accepted for processing.<br /></td>
</tr>
<tr>
    <td><a href="#vpc_peerings_patch"><CopyableCode code="vpc_peerings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vpc_peering_id"><code>vpc_peering_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To update the name of a VPC peering, send a PATCH request to `/v2/vpc_peerings/$VPC_PEERING_ID` with the new `name` in the request body.<br /></td>
</tr>
<tr>
    <td><a href="#vpc_peerings_delete"><CopyableCode code="vpc_peerings_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vpc_peering_id"><code>vpc_peering_id</code></a></td>
    <td></td>
    <td>To delete a VPC peering, send a DELETE request to `/v2/vpc_peerings/$VPC_PEERING_ID`.<br /></td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the resource is available.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="vpc_peerings_get"
    values={[
        { label: 'vpc_peerings_get', value: 'vpc_peerings_get' },
        { label: 'vpc_peerings_list', value: 'vpc_peerings_list' }
    ]}
>
<TabItem value="vpc_peerings_get">

To show information about an existing VPC Peering, send a GET request to `/v2/vpc_peerings/$VPC_PEERING_ID`.<br />

```sql
SELECT
id,
name,
created_at,
status,
vpc_ids
FROM digitalocean.vpcs.vpc_peerings
WHERE vpc_peering_id = '{{ vpc_peering_id }}' -- required;
```
</TabItem>
<TabItem value="vpc_peerings_list">

To list all of the VPC peerings on your account, send a GET request to `/v2/vpc_peerings`.

```sql
SELECT
id,
name,
created_at,
status,
vpc_ids
FROM digitalocean.vpcs.vpc_peerings
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND region = '{{ region }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="vpc_peerings_create"
    values={[
        { label: 'vpc_peerings_create', value: 'vpc_peerings_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="vpc_peerings_create">

To create a new VPC Peering, send a POST request to `/v2/vpc_peerings` <br />specifying a name and a list of two VPC IDs to peer. The response code, 202 <br />Accepted, does not indicate the success or failure of the operation, just <br />that the request has been accepted for processing.<br />

```sql
INSERT INTO digitalocean.vpcs.vpc_peerings (
data__name,
data__vpc_ids
)
SELECT 
'{{ name }}' --required,
'{{ vpc_ids }}' --required
RETURNING
vpc_peering
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: vpc_peerings
  props:
    - name: name
      value: string
      description: >
        The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes.
        
    - name: vpc_ids
      value: array
      description: >
        An array of the two peered VPCs IDs.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="vpc_peerings_patch"
    values={[
        { label: 'vpc_peerings_patch', value: 'vpc_peerings_patch' }
    ]}
>
<TabItem value="vpc_peerings_patch">

To update the name of a VPC peering, send a PATCH request to `/v2/vpc_peerings/$VPC_PEERING_ID` with the new `name` in the request body.<br />

```sql
UPDATE digitalocean.vpcs.vpc_peerings
SET 
data__name = '{{ name }}'
WHERE 
vpc_peering_id = '{{ vpc_peering_id }}' --required
AND data__name = '{{ name }}' --required
RETURNING
vpc_peering;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="vpc_peerings_delete"
    values={[
        { label: 'vpc_peerings_delete', value: 'vpc_peerings_delete' }
    ]}
>
<TabItem value="vpc_peerings_delete">

To delete a VPC peering, send a DELETE request to `/v2/vpc_peerings/$VPC_PEERING_ID`.<br />

```sql
DELETE FROM digitalocean.vpcs.vpc_peerings
WHERE vpc_peering_id = '{{ vpc_peering_id }}' --required;
```
</TabItem>
</Tabs>
