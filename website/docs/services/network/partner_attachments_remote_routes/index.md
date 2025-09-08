--- 
title: partner_attachments_remote_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_attachments_remote_routes
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

Creates, updates, deletes, gets or lists a <code>partner_attachments_remote_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>partner_attachments_remote_routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.network.partner_attachments_remote_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="partner_attachments_list_remote_routes"
    values={[
        { label: 'partner_attachments_list_remote_routes', value: 'partner_attachments_list_remote_routes' }
    ]}
>
<TabItem value="partner_attachments_list_remote_routes">

The response will be a JSON object with a `remote_routes` array containing <br />information on all the remote routes associated with the partner attachment

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
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>A CIDR block representing a remote route. (example: 10.10.10.0/24)</td>
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
    <td><a href="#partner_attachments_list_remote_routes"><CopyableCode code="partner_attachments_list_remote_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pa_id"><code>pa_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all remote routes associated with a partner attachment, send a `GET` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;/remote_routes`.<br /></td>
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
    defaultValue="partner_attachments_list_remote_routes"
    values={[
        { label: 'partner_attachments_list_remote_routes', value: 'partner_attachments_list_remote_routes' }
    ]}
>
<TabItem value="partner_attachments_list_remote_routes">

To list all remote routes associated with a partner attachment, send a `GET` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;/remote_routes`.<br />

```sql
SELECT
cidr
FROM digitalocean.network.partner_attachments_remote_routes
WHERE pa_id = '{{ pa_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
