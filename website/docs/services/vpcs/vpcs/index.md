--- 
title: vpcs
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcs
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

Creates, updates, deletes, gets or lists a <code>vpcs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpcs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.vpcs.vpcs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vpcs_get"
    values={[
        { label: 'vpcs_get', value: 'vpcs_get' },
        { label: 'vpcs_list', value: 'vpcs_list' }
    ]}
>
<TabItem value="vpcs_get">

The response will be a JSON object with a key called `vpc`. The value of this will be an object that contains the standard attributes associated with a VPC.

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
    <td>A unique ID that can be used to identify and reference the VPC. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. (pattern: ^[a-zA-Z0-9\-\.]+$, example: env.prod-vpc)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format. (example: 2020-03-13T19:20:47.442049222Z)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. (example: VPC for production environment)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_range" /></td>
    <td><code>string</code></td>
    <td>The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account. (example: 10.10.10.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the VPC will be created. (example: nyc1)</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>The uniform resource name (URN) for the resource in the format do:resource_type:resource_id. (pattern: ^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*, example: do:droplet:13457723)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="vpcs_list">

The response will be a JSON object with a key called `vpcs`. This will be set to an array of objects, each of which will contain the standard attributes associated with a VPC.

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
    <td>A unique ID that can be used to identify and reference the VPC. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. (pattern: ^[a-zA-Z0-9\-\.]+$, example: env.prod-vpc)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format. (example: 2020-03-13T19:20:47.442049222Z)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. (example: VPC for production environment)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_range" /></td>
    <td><code>string</code></td>
    <td>The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account. (example: 10.10.10.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the VPC will be created. (example: nyc1)</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>The uniform resource name (URN) for the resource in the format do:resource_type:resource_id. (pattern: ^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*, example: do:droplet:13457723)</td>
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
    <td><a href="#vpcs_get"><CopyableCode code="vpcs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a></td>
    <td></td>
    <td>To show information about an existing VPC, send a GET request to `/v2/vpcs/$VPC_ID`.</td>
</tr>
<tr>
    <td><a href="#vpcs_list"><CopyableCode code="vpcs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the VPCs on your account, send a GET request to `/v2/vpcs`.</td>
</tr>
<tr>
    <td><a href="#vpcs_create"><CopyableCode code="vpcs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__region"><code>data__region</code></a></td>
    <td></td>
    <td>To create a VPC, send a POST request to `/v2/vpcs` specifying the attributes<br />in the table below in the JSON body.<br /><br />**Note:** If you do not currently have a VPC network in a specific datacenter<br />region, the first one that you create will be set as the default for that<br />region. The default VPC for a region cannot be changed or deleted.<br /></td>
</tr>
<tr>
    <td><a href="#vpcs_patch"><CopyableCode code="vpcs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a></td>
    <td></td>
    <td>To update a subset of information about a VPC, send a PATCH request to<br />`/v2/vpcs/$VPC_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#vpcs_update"><CopyableCode code="vpcs_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To update information about a VPC, send a PUT request to `/v2/vpcs/$VPC_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#vpcs_delete"><CopyableCode code="vpcs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a></td>
    <td></td>
    <td>To delete a VPC, send a DELETE request to `/v2/vpcs/$VPC_ID`. A 204 status<br />code with no body will be returned in response to a successful request.<br /><br />The default VPC for a region can not be deleted. Additionally, a VPC can only<br />be deleted if it does not contain any member resources. Attempting to delete<br />a region's default VPC or a VPC that still has members will result in a<br />403 Forbidden error response.<br /></td>
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
    defaultValue="vpcs_get"
    values={[
        { label: 'vpcs_get', value: 'vpcs_get' },
        { label: 'vpcs_list', value: 'vpcs_list' }
    ]}
>
<TabItem value="vpcs_get">

To show information about an existing VPC, send a GET request to `/v2/vpcs/$VPC_ID`.

```sql
SELECT
id,
name,
created_at,
default,
description,
ip_range,
region,
urn
FROM digitalocean.vpcs.vpcs
WHERE vpc_id = '{{ vpc_id }}' -- required;
```
</TabItem>
<TabItem value="vpcs_list">

To list all of the VPCs on your account, send a GET request to `/v2/vpcs`.

```sql
SELECT
id,
name,
created_at,
default,
description,
ip_range,
region,
urn
FROM digitalocean.vpcs.vpcs
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="vpcs_create"
    values={[
        { label: 'vpcs_create', value: 'vpcs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="vpcs_create">

To create a VPC, send a POST request to `/v2/vpcs` specifying the attributes<br />in the table below in the JSON body.<br /><br />**Note:** If you do not currently have a VPC network in a specific datacenter<br />region, the first one that you create will be set as the default for that<br />region. The default VPC for a region cannot be changed or deleted.<br />

```sql
INSERT INTO digitalocean.vpcs.vpcs (
data__name,
data__description,
data__region,
data__ip_range
)
SELECT 
'{{ name }}' --required,
'{{ description }}',
'{{ region }}' --required,
'{{ ip_range }}'
RETURNING
vpc
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: vpcs
  props:
    - name: name
      value: string
      description: >
        The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
        
    - name: description
      value: string
      description: >
        A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
        
    - name: region
      value: string
      description: >
        The slug identifier for the region where the VPC will be created.
        
    - name: ip_range
      value: string
      description: >
        The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="vpcs_patch"
    values={[
        { label: 'vpcs_patch', value: 'vpcs_patch' }
    ]}
>
<TabItem value="vpcs_patch">

To update a subset of information about a VPC, send a PATCH request to<br />`/v2/vpcs/$VPC_ID`.<br />

```sql
UPDATE digitalocean.vpcs.vpcs
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__default = {{ default }}
WHERE 
vpc_id = '{{ vpc_id }}' --required
RETURNING
vpc;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="vpcs_update"
    values={[
        { label: 'vpcs_update', value: 'vpcs_update' }
    ]}
>
<TabItem value="vpcs_update">

To update information about a VPC, send a PUT request to `/v2/vpcs/$VPC_ID`.<br />

```sql
REPLACE digitalocean.vpcs.vpcs
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__default = {{ default }}
WHERE 
vpc_id = '{{ vpc_id }}' --required
AND data__name = '{{ name }}' --required
RETURNING
vpc;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="vpcs_delete"
    values={[
        { label: 'vpcs_delete', value: 'vpcs_delete' }
    ]}
>
<TabItem value="vpcs_delete">

To delete a VPC, send a DELETE request to `/v2/vpcs/$VPC_ID`. A 204 status<br />code with no body will be returned in response to a successful request.<br /><br />The default VPC for a region can not be deleted. Additionally, a VPC can only<br />be deleted if it does not contain any member resources. Attempting to delete<br />a region's default VPC or a VPC that still has members will result in a<br />403 Forbidden error response.<br />

```sql
DELETE FROM digitalocean.vpcs.vpcs
WHERE vpc_id = '{{ vpc_id }}' --required;
```
</TabItem>
</Tabs>
