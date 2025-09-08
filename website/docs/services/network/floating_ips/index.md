--- 
title: floating_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - floating_ips
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

Creates, updates, deletes, gets or lists a <code>floating_ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>floating_ips</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.network.floating_ips" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="floating_ips_get"
    values={[
        { label: 'floating_ips_get', value: 'floating_ips_get' },
        { label: 'floating_ips_list', value: 'floating_ips_list' }
    ]}
>
<TabItem value="floating_ips_get">

The response will be a JSON object with a key called `floating_ip`. The value of this will be an object that contains the standard attributes associated with a floating IP.

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
    <td><CopyableCode code="project_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the project to which the reserved IP currently belongs.<br /><br />Requires `project:read` scope. (example: 746c6152-2fa2-11ed-92d3-27aaa54e4988)</td>
</tr>
<tr>
    <td><CopyableCode code="droplet" /></td>
    <td><code></code></td>
    <td>The Droplet that the floating IP has been assigned to. When you query a floating IP, if it is assigned to a Droplet, the entire Droplet object will be returned. If it is not assigned, the value will be null. <br /><br />Requires `droplet:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The public IP address of the floating IP. It also serves as its identifier. (example: 45.55.96.47)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether or not the floating IP has pending actions preventing new ones from being submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td>The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="floating_ips_list">

The response will be a JSON object with a key called `floating_ips`. This will be set to an array of floating IP objects, each of which will contain the standard floating IP attributes

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
    <td><CopyableCode code="project_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the project to which the reserved IP currently belongs.<br /><br />Requires `project:read` scope. (example: 746c6152-2fa2-11ed-92d3-27aaa54e4988)</td>
</tr>
<tr>
    <td><CopyableCode code="droplet" /></td>
    <td><code></code></td>
    <td>The Droplet that the floating IP has been assigned to. When you query a floating IP, if it is assigned to a Droplet, the entire Droplet object will be returned. If it is not assigned, the value will be null. <br /><br />Requires `droplet:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The public IP address of the floating IP. It also serves as its identifier. (example: 45.55.96.47)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether or not the floating IP has pending actions preventing new ones from being submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td>The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.</td>
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
    <td><a href="#floating_ips_get"><CopyableCode code="floating_ips_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-floating_ip"><code>floating_ip</code></a></td>
    <td></td>
    <td>To show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.</td>
</tr>
<tr>
    <td><a href="#floating_ips_list"><CopyableCode code="floating_ips_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the floating IPs available on your account, send a GET request to `/v2/floating_ips`.</td>
</tr>
<tr>
    <td><a href="#floating_ips_create"><CopyableCode code="floating_ips_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>On creation, a floating IP must be either assigned to a Droplet or reserved to a region.<br />* To create a new floating IP assigned to a Droplet, send a POST<br />  request to `/v2/floating_ips` with the `droplet_id` attribute.<br /><br />* To create a new floating IP reserved to a region, send a POST request to<br />  `/v2/floating_ips` with the `region` attribute.<br /><br />**Note**:  In addition to the standard rate limiting, only 12 floating IPs may be created per 60 seconds.</td>
</tr>
<tr>
    <td><a href="#floating_ips_delete"><CopyableCode code="floating_ips_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-floating_ip"><code>floating_ip</code></a></td>
    <td></td>
    <td>To delete a floating IP and remove it from your account, send a DELETE request<br />to `/v2/floating_ips/$FLOATING_IP_ADDR`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
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
<tr id="parameter-floating_ip">
    <td><CopyableCode code="floating_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>A floating IP address. (example: 45.55.96.47)</td>
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
    defaultValue="floating_ips_get"
    values={[
        { label: 'floating_ips_get', value: 'floating_ips_get' },
        { label: 'floating_ips_list', value: 'floating_ips_list' }
    ]}
>
<TabItem value="floating_ips_get">

To show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.

```sql
SELECT
project_id,
droplet,
ip,
locked,
region
FROM digitalocean.network.floating_ips
WHERE floating_ip = '{{ floating_ip }}' -- required;
```
</TabItem>
<TabItem value="floating_ips_list">

To list all of the floating IPs available on your account, send a GET request to `/v2/floating_ips`.

```sql
SELECT
project_id,
droplet,
ip,
locked,
region
FROM digitalocean.network.floating_ips
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="floating_ips_create"
    values={[
        { label: 'floating_ips_create', value: 'floating_ips_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="floating_ips_create">

On creation, a floating IP must be either assigned to a Droplet or reserved to a region.<br />* To create a new floating IP assigned to a Droplet, send a POST<br />  request to `/v2/floating_ips` with the `droplet_id` attribute.<br /><br />* To create a new floating IP reserved to a region, send a POST request to<br />  `/v2/floating_ips` with the `region` attribute.<br /><br />**Note**:  In addition to the standard rate limiting, only 12 floating IPs may be created per 60 seconds.

```sql
INSERT INTO digitalocean.network.floating_ips (

)
SELECT 

RETURNING
floating_ip,
links
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: floating_ips
  props:
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="floating_ips_delete"
    values={[
        { label: 'floating_ips_delete', value: 'floating_ips_delete' }
    ]}
>
<TabItem value="floating_ips_delete">

To delete a floating IP and remove it from your account, send a DELETE request<br />to `/v2/floating_ips/$FLOATING_IP_ADDR`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.network.floating_ips
WHERE floating_ip = '{{ floating_ip }}' --required;
```
</TabItem>
</Tabs>
