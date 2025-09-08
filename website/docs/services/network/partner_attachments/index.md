--- 
title: partner_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_attachments
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

Creates, updates, deletes, gets or lists a <code>partner_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>partner_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.network.partner_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="partner_attachments_get"
    values={[
        { label: 'partner_attachments_get', value: 'partner_attachments_get' },
        { label: 'partner_attachments_list', value: 'partner_attachments_list' }
    ]}
>
<TabItem value="partner_attachments_get">

The response will be a JSON object with details about the partner attachment<br />including attached VPC network IDs and BGP configuration information

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
    <td><code>string (string)</code></td>
    <td>A unique ID that can be used to identify and reference the partner attachment. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods. (pattern: ^[a-zA-Z0-9\-\.]+$, example: env.prod-partner-network-connect)</td>
</tr>
<tr>
    <td><CopyableCode code="bgp" /></td>
    <td><code>object</code></td>
    <td>The BGP configuration for the partner attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="children" /></td>
    <td><code>array</code></td>
    <td>An array of associated partner attachment UUIDs.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_bandwidth_in_mbps" /></td>
    <td><code>integer</code></td>
    <td>The bandwidth (in Mbps) of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format. (example: 2020-03-13T19:20:47.442049222Z)</td>
</tr>
<tr>
    <td><CopyableCode code="naas_provider" /></td>
    <td><code>string</code></td>
    <td>The Network as a Service (NaaS) provider for the partner attachment. (example: megaport)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_uuid" /></td>
    <td><code>string</code></td>
    <td>Associated partner attachment UUID (example: 34259a41-0ca6-4a6b-97dd-a22bcab900dd)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the partner attachment is located. (example: nyc)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current operational state of the attachment. (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ids" /></td>
    <td><code>array</code></td>
    <td>An array of VPC network IDs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="partner_attachments_list">

The response will be a JSON object with a `partner_attachments` key<br />that contains an array of all partner attachments

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
    <td><code>string (string)</code></td>
    <td>A unique ID that can be used to identify and reference the partner attachment. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods. (pattern: ^[a-zA-Z0-9\-\.]+$, example: env.prod-partner-network-connect)</td>
</tr>
<tr>
    <td><CopyableCode code="bgp" /></td>
    <td><code>object</code></td>
    <td>The BGP configuration for the partner attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="children" /></td>
    <td><code>array</code></td>
    <td>An array of associated partner attachment UUIDs.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_bandwidth_in_mbps" /></td>
    <td><code>integer</code></td>
    <td>The bandwidth (in Mbps) of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format. (example: 2020-03-13T19:20:47.442049222Z)</td>
</tr>
<tr>
    <td><CopyableCode code="naas_provider" /></td>
    <td><code>string</code></td>
    <td>The Network as a Service (NaaS) provider for the partner attachment. (example: megaport)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_uuid" /></td>
    <td><code>string</code></td>
    <td>Associated partner attachment UUID (example: 34259a41-0ca6-4a6b-97dd-a22bcab900dd)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the partner attachment is located. (example: nyc)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current operational state of the attachment. (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ids" /></td>
    <td><code>array</code></td>
    <td>An array of VPC network IDs.</td>
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
    <td><a href="#partner_attachments_get"><CopyableCode code="partner_attachments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pa_id"><code>pa_id</code></a></td>
    <td></td>
    <td>To get the details of a partner attachment, send a `GET` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;`.<br /></td>
</tr>
<tr>
    <td><a href="#partner_attachments_list"><CopyableCode code="partner_attachments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the Partner Attachments on your account, send a `GET` request to `/v2/partner_network_connect/attachments`.</td>
</tr>
<tr>
    <td><a href="#partner_attachments_create"><CopyableCode code="partner_attachments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__connection_bandwidth_in_mbps"><code>data__connection_bandwidth_in_mbps</code></a>, <a href="#parameter-data__region"><code>data__region</code></a>, <a href="#parameter-data__naas_provider"><code>data__naas_provider</code></a>, <a href="#parameter-data__vpc_ids"><code>data__vpc_ids</code></a></td>
    <td></td>
    <td>To create a new partner attachment, send a `POST` request to<br />`/v2/partner_network_connect/attachments` with a JSON object containing the<br />required configuration details.<br /></td>
</tr>
<tr>
    <td><a href="#partner_attachments_patch"><CopyableCode code="partner_attachments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-pa_id"><code>pa_id</code></a></td>
    <td></td>
    <td>To update an existing partner attachment, send a `PATCH` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;` with a JSON object containing the<br />fields to be updated.<br /></td>
</tr>
<tr>
    <td><a href="#partner_attachments_delete"><CopyableCode code="partner_attachments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pa_id"><code>pa_id</code></a></td>
    <td></td>
    <td>To delete an existing partner attachment, send a `DELETE` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;`.<br /></td>
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
<tr id="parameter-pa_id">
    <td><CopyableCode code="pa_id" /></td>
    <td><code>string (string)</code></td>
    <td>A unique identifier for a partner attachment. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
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
    defaultValue="partner_attachments_get"
    values={[
        { label: 'partner_attachments_get', value: 'partner_attachments_get' },
        { label: 'partner_attachments_list', value: 'partner_attachments_list' }
    ]}
>
<TabItem value="partner_attachments_get">

To get the details of a partner attachment, send a `GET` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;`.<br />

```sql
SELECT
id,
name,
bgp,
children,
connection_bandwidth_in_mbps,
created_at,
naas_provider,
parent_uuid,
region,
state,
vpc_ids
FROM digitalocean.network.partner_attachments
WHERE pa_id = '{{ pa_id }}' -- required;
```
</TabItem>
<TabItem value="partner_attachments_list">

To list all of the Partner Attachments on your account, send a `GET` request to `/v2/partner_network_connect/attachments`.

```sql
SELECT
id,
name,
bgp,
children,
connection_bandwidth_in_mbps,
created_at,
naas_provider,
parent_uuid,
region,
state,
vpc_ids
FROM digitalocean.network.partner_attachments
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="partner_attachments_create"
    values={[
        { label: 'partner_attachments_create', value: 'partner_attachments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="partner_attachments_create">

To create a new partner attachment, send a `POST` request to<br />`/v2/partner_network_connect/attachments` with a JSON object containing the<br />required configuration details.<br />

```sql
INSERT INTO digitalocean.network.partner_attachments (
data__name,
data__connection_bandwidth_in_mbps,
data__region,
data__naas_provider,
data__vpc_ids,
data__parent_uuid,
data__bgp,
data__redundancy_zone
)
SELECT 
'{{ name }}' --required,
{{ connection_bandwidth_in_mbps }} --required,
'{{ region }}' --required,
'{{ naas_provider }}' --required,
'{{ vpc_ids }}' --required,
'{{ parent_uuid }}',
'{{ bgp }}',
'{{ redundancy_zone }}'
RETURNING
partner_attachment
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: partner_attachments
  props:
    - name: name
      value: string
      description: >
        The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods.
        
    - name: connection_bandwidth_in_mbps
      value: integer
      description: >
        Bandwidth (in Mbps) of the connection.
        
      valid_values: ['1000', '2000', '5000', '10000']
    - name: region
      value: string
      description: >
        The region to create the partner attachment.
        
      valid_values: ['nyc', 'sfo', 'fra', 'ams', 'sgp']
    - name: naas_provider
      value: string
    - name: vpc_ids
      value: array
      description: >
        An array of VPCs IDs.
        
    - name: parent_uuid
      value: string
      description: >
        Optional associated partner attachment UUID
        
    - name: bgp
      value: object
      description: >
        Optional BGP configurations
        
    - name: redundancy_zone
      value: string
      description: >
        Optional redundancy zone for the partner attachment.
        
      valid_values: ['MEGAPORT_BLUE', 'MEGAPORT_RED']
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="partner_attachments_patch"
    values={[
        { label: 'partner_attachments_patch', value: 'partner_attachments_patch' }
    ]}
>
<TabItem value="partner_attachments_patch">

To update an existing partner attachment, send a `PATCH` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;` with a JSON object containing the<br />fields to be updated.<br />

```sql
UPDATE digitalocean.network.partner_attachments
SET 
-- No updatable properties
WHERE 
pa_id = '{{ pa_id }}' --required
RETURNING
partner_attachment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="partner_attachments_delete"
    values={[
        { label: 'partner_attachments_delete', value: 'partner_attachments_delete' }
    ]}
>
<TabItem value="partner_attachments_delete">

To delete an existing partner attachment, send a `DELETE` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;`.<br />

```sql
DELETE FROM digitalocean.network.partner_attachments
WHERE pa_id = '{{ pa_id }}' --required;
```
</TabItem>
</Tabs>
