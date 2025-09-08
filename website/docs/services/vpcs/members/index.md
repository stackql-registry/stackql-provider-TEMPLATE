--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.vpcs.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vpcs_list_members"
    values={[
        { label: 'vpcs_list_members', value: 'vpcs_list_members' }
    ]}
>
<TabItem value="vpcs_list_members">

The response will be a JSON object with a key called members. This will be set<br />to an array of objects, each of which will contain the standard attributes<br />associated with a VPC member.<br /><br />Only resources that you are authorized to see will be returned (e.g. to see Droplets,<br />you must have `droplet:read`).<br />

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource. (example: nyc1-load-balancer-01)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the resource was created. (example: 2020-03-13T19:30:48Z)</td>
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
    <td><a href="#vpcs_list_members"><CopyableCode code="vpcs_list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpc_id"><code>vpc_id</code></a></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the resources that are members of a VPC, send a GET request to<br />`/v2/vpcs/$VPC_ID/members`.<br /><br />To only list resources of a specific type that are members of the VPC,<br />included a `resource_type` query parameter. For example, to only list Droplets<br />in the VPC, send a GET request to `/v2/vpcs/$VPC_ID/members?resource_type=droplet`.<br /><br />Only resources that you are authorized to see will be returned (e.g. to see Droplets,<br />you must have `droplet:read`).<br /></td>
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
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Used to filter VPC members by a resource type. (example: droplet)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="vpcs_list_members"
    values={[
        { label: 'vpcs_list_members', value: 'vpcs_list_members' }
    ]}
>
<TabItem value="vpcs_list_members">

To list all of the resources that are members of a VPC, send a GET request to<br />`/v2/vpcs/$VPC_ID/members`.<br /><br />To only list resources of a specific type that are members of the VPC,<br />included a `resource_type` query parameter. For example, to only list Droplets<br />in the VPC, send a GET request to `/v2/vpcs/$VPC_ID/members?resource_type=droplet`.<br /><br />Only resources that you are authorized to see will be returned (e.g. to see Droplets,<br />you must have `droplet:read`).<br />

```sql
SELECT
name,
created_at,
urn
FROM digitalocean.vpcs.members
WHERE vpc_id = '{{ vpc_id }}' -- required
AND resource_type = '{{ resource_type }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
