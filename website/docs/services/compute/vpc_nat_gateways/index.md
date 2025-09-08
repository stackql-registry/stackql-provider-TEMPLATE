--- 
title: vpc_nat_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_nat_gateways
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

Creates, updates, deletes, gets or lists a <code>vpc_nat_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_nat_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.vpc_nat_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vpcnatgateways_get"
    values={[
        { label: 'vpcnatgateways_get', value: 'vpcnatgateways_get' },
        { label: 'vpcnatgateways_list', value: 'vpcnatgateways_list' }
    ]}
>
<TabItem value="vpcnatgateways_get">

The response will be a JSON object with a key called `vpc_nat_gateway`. This will be<br />set to a JSON object that contains the standard VPC NAT gateway attributes.<br />

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
    <td>The unique identifier for the VPC NAT gateway. This is automatically generated upon creation. (example: 70e1b58d-cdec-4e95-b3ee-2d4d95feff51)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the VPC NAT gateway. (example: my-vpc-nat-gateway)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the VPC NAT gateway was created. (title: The creation time of the VPC NAT gateway., example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="egresses" /></td>
    <td><code>object</code></td>
    <td>An object containing egress information for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="icmp_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The ICMP timeout in seconds for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region in which the VPC NAT gateway is created. (example: tor1)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPC NAT gateway. (example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tcp_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The TCP timeout in seconds for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the VPC NAT gateway. (example: PUBLIC)</td>
</tr>
<tr>
    <td><CopyableCode code="udp_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The UDP timeout in seconds for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the VPC NAT gateway was last updated. (title: The last update time of the VPC NAT gateway., example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="vpcs" /></td>
    <td><code>array</code></td>
    <td>An array of VPCs associated with the VPC NAT gateway.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="vpcnatgateways_list">

A JSON object with a key of `vpc_nat_gateways`.

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
    <td>The unique identifier for the VPC NAT gateway. This is automatically generated upon creation. (example: 70e1b58d-cdec-4e95-b3ee-2d4d95feff51)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the VPC NAT gateway. (example: my-vpc-nat-gateway)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the VPC NAT gateway was created. (title: The creation time of the VPC NAT gateway., example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="egresses" /></td>
    <td><code>object</code></td>
    <td>An object containing egress information for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="icmp_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The ICMP timeout in seconds for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region in which the VPC NAT gateway is created. (example: tor1)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPC NAT gateway. (example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tcp_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The TCP timeout in seconds for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the VPC NAT gateway. (example: PUBLIC)</td>
</tr>
<tr>
    <td><CopyableCode code="udp_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The UDP timeout in seconds for the VPC NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the VPC NAT gateway was last updated. (title: The last update time of the VPC NAT gateway., example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="vpcs" /></td>
    <td><code>array</code></td>
    <td>An array of VPCs associated with the VPC NAT gateway.</td>
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
    <td><a href="#vpcnatgateways_get"><CopyableCode code="vpcnatgateways_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To show information about an individual VPC NAT gateway, send a GET request to<br />`/v2/vpc_nat_gateways/$VPC_NAT_GATEWAY_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#vpcnatgateways_list"><CopyableCode code="vpcnatgateways_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>To list all VPC NAT gateways in your team, send a GET request to `/v2/vpc_nat_gateways`.<br />The response body will be a JSON object with a key of `vpc_nat_gateways` containing an array of VPC NAT gateway objects.<br />These each contain the standard VPC NAT gateway attributes.<br /></td>
</tr>
<tr>
    <td><a href="#vpcnatgateways_create"><CopyableCode code="vpcnatgateways_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__type"><code>data__type</code></a>, <a href="#parameter-data__region"><code>data__region</code></a>, <a href="#parameter-data__size"><code>data__size</code></a>, <a href="#parameter-data__vpcs"><code>data__vpcs</code></a></td>
    <td></td>
    <td>To create a new VPC NAT gateway, send a POST request to `/v2/vpc_nat_gateways` setting the required attributes.<br /><br />The response body will contain a JSON object with a key called `vpc_nat_gateway` containing the standard attributes for the new VPC NAT gateway.<br /></td>
</tr>
<tr>
    <td><a href="#vpcnatgateways_update"><CopyableCode code="vpcnatgateways_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__size"><code>data__size</code></a></td>
    <td></td>
    <td>To update the configuration of an existing VPC NAT Gateway, send a PUT request to<br />`/v2/vpc_nat_gateways/$VPC_NAT_GATEWAY_ID`. The request must contain a full representation<br />of the VPC NAT Gateway including existing attributes. <br /></td>
</tr>
<tr>
    <td><a href="#vpcnatgateways_delete"><CopyableCode code="vpcnatgateways_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To destroy a VPC NAT Gateway, send a DELETE request to the `/v2/vpc_nat_gateways/$VPC_NAT_GATEWAY_ID` endpoint.<br /><br />A successful response will include a 202 response code and no content. <br /></td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the VPC NAT gateway. (example: 70e1b58d-cdec-4e95-b3ee-2d4d95feff51)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC NAT gateway. (example: my-vpc-nat-gateway)</td>
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
    <td>The region where the VPC NAT gateway is located. (example: tor1)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPC NAT gateway. (example: active)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the VPC NAT gateway. (example: public)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="vpcnatgateways_get"
    values={[
        { label: 'vpcnatgateways_get', value: 'vpcnatgateways_get' },
        { label: 'vpcnatgateways_list', value: 'vpcnatgateways_list' }
    ]}
>
<TabItem value="vpcnatgateways_get">

To show information about an individual VPC NAT gateway, send a GET request to<br />`/v2/vpc_nat_gateways/$VPC_NAT_GATEWAY_ID`.<br />

```sql
SELECT
id,
name,
created_at,
egresses,
icmp_timeout_seconds,
region,
size,
state,
tcp_timeout_seconds,
type,
udp_timeout_seconds,
updated_at,
vpcs
FROM digitalocean.compute.vpc_nat_gateways
WHERE id = '{{ id }}' -- required;
```
</TabItem>
<TabItem value="vpcnatgateways_list">

To list all VPC NAT gateways in your team, send a GET request to `/v2/vpc_nat_gateways`.<br />The response body will be a JSON object with a key of `vpc_nat_gateways` containing an array of VPC NAT gateway objects.<br />These each contain the standard VPC NAT gateway attributes.<br />

```sql
SELECT
id,
name,
created_at,
egresses,
icmp_timeout_seconds,
region,
size,
state,
tcp_timeout_seconds,
type,
udp_timeout_seconds,
updated_at,
vpcs
FROM digitalocean.compute.vpc_nat_gateways
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND state = '{{ state }}'
AND region = '{{ region }}'
AND type = '{{ type }}'
AND name = '{{ name }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="vpcnatgateways_create"
    values={[
        { label: 'vpcnatgateways_create', value: 'vpcnatgateways_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="vpcnatgateways_create">

To create a new VPC NAT gateway, send a POST request to `/v2/vpc_nat_gateways` setting the required attributes.<br /><br />The response body will contain a JSON object with a key called `vpc_nat_gateway` containing the standard attributes for the new VPC NAT gateway.<br />

```sql
INSERT INTO digitalocean.compute.vpc_nat_gateways (
data__name,
data__type,
data__region,
data__size,
data__vpcs,
data__udp_timeout_seconds,
data__icmp_timeout_seconds,
data__tcp_timeout_seconds
)
SELECT 
'{{ name }}' --required,
'{{ type }}' --required,
'{{ region }}' --required,
{{ size }} --required,
'{{ vpcs }}' --required,
{{ udp_timeout_seconds }},
{{ icmp_timeout_seconds }},
{{ tcp_timeout_seconds }}
RETURNING
vpc_nat_gateway
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: vpc_nat_gateways
  props:
    - name: name
      value: string
      description: >
        The human-readable name of the VPC NAT gateway.
        
    - name: type
      value: string
      description: >
        The type of the VPC NAT gateway.
        
      valid_values: ['PUBLIC']
    - name: region
      value: string
      description: >
        The region in which the VPC NAT gateway is created.
        
      valid_values: ['nyc1', 'nyc2', 'nyc3', 'ams2', 'ams3', 'sfo1', 'sfo2', 'sfo3', 'sgp1', 'lon1', 'fra1', 'tor1', 'blr1', 'syd1', 'atl1']
    - name: size
      value: integer
      description: >
        The size of the VPC NAT gateway.
        
    - name: vpcs
      value: array
      description: >
        An array of VPCs associated with the VPC NAT gateway.
        
    - name: udp_timeout_seconds
      value: integer
      description: >
        The UDP timeout in seconds for the VPC NAT gateway.
        
    - name: icmp_timeout_seconds
      value: integer
      description: >
        The ICMP timeout in seconds for the VPC NAT gateway.
        
    - name: tcp_timeout_seconds
      value: integer
      description: >
        The TCP timeout in seconds for the VPC NAT gateway.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="vpcnatgateways_update"
    values={[
        { label: 'vpcnatgateways_update', value: 'vpcnatgateways_update' }
    ]}
>
<TabItem value="vpcnatgateways_update">

To update the configuration of an existing VPC NAT Gateway, send a PUT request to<br />`/v2/vpc_nat_gateways/$VPC_NAT_GATEWAY_ID`. The request must contain a full representation<br />of the VPC NAT Gateway including existing attributes. <br />

```sql
REPLACE digitalocean.compute.vpc_nat_gateways
SET 
data__name = '{{ name }}',
data__size = {{ size }},
data__udp_timeout_seconds = {{ udp_timeout_seconds }},
data__icmp_timeout_seconds = {{ icmp_timeout_seconds }},
data__tcp_timeout_seconds = {{ tcp_timeout_seconds }}
WHERE 
id = '{{ id }}' --required
AND data__name = '{{ name }}' --required
AND data__size = '{{ size }}' --required
RETURNING
vpc_nat_gateway;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="vpcnatgateways_delete"
    values={[
        { label: 'vpcnatgateways_delete', value: 'vpcnatgateways_delete' }
    ]}
>
<TabItem value="vpcnatgateways_delete">

To destroy a VPC NAT Gateway, send a DELETE request to the `/v2/vpc_nat_gateways/$VPC_NAT_GATEWAY_ID` endpoint.<br /><br />A successful response will include a 202 response code and no content. <br />

```sql
DELETE FROM digitalocean.compute.vpc_nat_gateways
WHERE id = '{{ id }}' --required;
```
</TabItem>
</Tabs>
