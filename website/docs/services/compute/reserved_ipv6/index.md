--- 
title: reserved_ipv6
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_ipv6
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

Creates, updates, deletes, gets or lists a <code>reserved_ipv6</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>reserved_ipv6</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.reserved_ipv6" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="reserved_ipv6_get"
    values={[
        { label: 'reserved_ipv6_get', value: 'reserved_ipv6_get' },
        { label: 'reserved_ipv6_list', value: 'reserved_ipv6_list' }
    ]}
>
<TabItem value="reserved_ipv6_get">

The response will be a JSON object with key `reserved_ipv6`. The value of this will be an object that contains the standard attributes associated with a reserved IPv6.

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
    <td><CopyableCode code="droplet" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv6)</code></td>
    <td>The public IP address of the reserved IPv6. It also serves as its identifier. (example: 2409:40d0:f7:1017:74b4:3a96:105e:4c6e)</td>
</tr>
<tr>
    <td><CopyableCode code="region_slug" /></td>
    <td><code>string</code></td>
    <td>The region that the reserved IPv6 is reserved to. When you query a reserved IPv6,the region_slug will be returned. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the reserved IPv6 was reserved. (example: 2024-11-20T11:08:30Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="reserved_ipv6_list">

The response will be a JSON object with a key called `reserved_ipv6s`. This will be set to an array of reserved IP objects, each of which will contain the standard reserved IP attributes

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
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Information about the response itself.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_ipv6s" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#reserved_ipv6_get"><CopyableCode code="reserved_ipv6_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reserved_ipv6"><code>reserved_ipv6</code></a></td>
    <td></td>
    <td>To show information about a reserved IPv6, send a GET request to `/v2/reserved_ipv6/$RESERVED_IPV6`.</td>
</tr>
<tr>
    <td><a href="#reserved_ipv6_list"><CopyableCode code="reserved_ipv6_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the reserved IPv6s available on your account, send a GET request to `/v2/reserved_ipv6`.</td>
</tr>
<tr>
    <td><a href="#reserved_ipv6_create"><CopyableCode code="reserved_ipv6_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__region_slug"><code>data__region_slug</code></a></td>
    <td></td>
    <td>On creation, a reserved IPv6 must be reserved to a region.<br />* To create a new reserved IPv6 reserved to a region, send a POST request to<br />  `/v2/reserved_ipv6` with the `region_slug` attribute.</td>
</tr>
<tr>
    <td><a href="#reserved_ipv6_delete"><CopyableCode code="reserved_ipv6_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-reserved_ipv6"><code>reserved_ipv6</code></a></td>
    <td></td>
    <td>To delete a reserved IP and remove it from your account, send a DELETE request<br />to `/v2/reserved_ipv6/$RESERVED_IPV6`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
</tr>
<tr>
    <td><a href="#reserved_ipv6_actions_post"><CopyableCode code="reserved_ipv6_actions_post" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-reserved_ipv6"><code>reserved_ipv6</code></a></td>
    <td></td>
    <td>To initiate an action on a reserved IPv6 send a POST request to<br />`/v2/reserved_ipv6/$RESERVED_IPV6/actions`. In the JSON body to the request,<br />set the `type` attribute to on of the supported action types:<br /><br />| Action     | Details<br />|------------|--------<br />| `assign`   | Assigns a reserved IPv6 to a Droplet<br />| `unassign` | Unassign a reserved IPv6 from a Droplet<br /></td>
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
<tr id="parameter-reserved_ipv6">
    <td><CopyableCode code="reserved_ipv6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>A reserved IPv6 address. (example: 2409:40d0:f7:1017:74b4:3a96:105e:4c6e)</td>
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
    defaultValue="reserved_ipv6_get"
    values={[
        { label: 'reserved_ipv6_get', value: 'reserved_ipv6_get' },
        { label: 'reserved_ipv6_list', value: 'reserved_ipv6_list' }
    ]}
>
<TabItem value="reserved_ipv6_get">

To show information about a reserved IPv6, send a GET request to `/v2/reserved_ipv6/$RESERVED_IPV6`.

```sql
SELECT
droplet,
ip,
region_slug,
reserved_at
FROM digitalocean.compute.reserved_ipv6
WHERE reserved_ipv6 = '{{ reserved_ipv6 }}' -- required;
```
</TabItem>
<TabItem value="reserved_ipv6_list">

To list all of the reserved IPv6s available on your account, send a GET request to `/v2/reserved_ipv6`.

```sql
SELECT
links,
meta,
reserved_ipv6s
FROM digitalocean.compute.reserved_ipv6
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="reserved_ipv6_create"
    values={[
        { label: 'reserved_ipv6_create', value: 'reserved_ipv6_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="reserved_ipv6_create">

On creation, a reserved IPv6 must be reserved to a region.<br />* To create a new reserved IPv6 reserved to a region, send a POST request to<br />  `/v2/reserved_ipv6` with the `region_slug` attribute.

```sql
INSERT INTO digitalocean.compute.reserved_ipv6 (
data__region_slug
)
SELECT 
'{{ region_slug }}' --required
RETURNING
reserved_ipv6
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: reserved_ipv6
  props:
    - name: region_slug
      value: string
      description: >
        The slug identifier for the region the reserved IPv6 will be reserved to.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="reserved_ipv6_delete"
    values={[
        { label: 'reserved_ipv6_delete', value: 'reserved_ipv6_delete' }
    ]}
>
<TabItem value="reserved_ipv6_delete">

To delete a reserved IP and remove it from your account, send a DELETE request<br />to `/v2/reserved_ipv6/$RESERVED_IPV6`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.compute.reserved_ipv6
WHERE reserved_ipv6 = '{{ reserved_ipv6 }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reserved_ipv6_actions_post"
    values={[
        { label: 'reserved_ipv6_actions_post', value: 'reserved_ipv6_actions_post' }
    ]}
>
<TabItem value="reserved_ipv6_actions_post">

To initiate an action on a reserved IPv6 send a POST request to<br />`/v2/reserved_ipv6/$RESERVED_IPV6/actions`. In the JSON body to the request,<br />set the `type` attribute to on of the supported action types:<br /><br />| Action     | Details<br />|------------|--------<br />| `assign`   | Assigns a reserved IPv6 to a Droplet<br />| `unassign` | Unassign a reserved IPv6 from a Droplet<br />

```sql
EXEC digitalocean.compute.reserved_ipv6.reserved_ipv6_actions_post 
@reserved_ipv6='{{ reserved_ipv6 }}' --required;
```
</TabItem>
</Tabs>
