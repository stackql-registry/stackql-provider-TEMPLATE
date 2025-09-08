--- 
title: firewall_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rules
  - databases
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
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.firewall_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_list_firewall_rules"
    values={[
        { label: 'databases_list_firewall_rules', value: 'databases_list_firewall_rules' }
    ]}
>
<TabItem value="databases_list_firewall_rules">

A JSON object with a key of `rules`.

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
    <td><CopyableCode code="cluster_uuid" /></td>
    <td><code>string</code></td>
    <td>A unique ID for the database cluster to which the rule is applied. (pattern: ^$|[0-9a-f]&#123;8&#125;\b-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-\b[0-9a-f]&#123;12&#125;, example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the firewall rule was created. (example: 2019-01-11T18:37:36Z)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that the firewall rule allows to access the database cluster. (example: droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>A unique ID for the firewall rule itself. (pattern: ^$|[0-9a-f]&#123;8&#125;\b-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-\b[0-9a-f]&#123;12&#125;, example: 79f26d28-ea8a-41f2-8ad8-8cfcdd020095)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The ID of the specific resource, the name of a tag applied to a group of resources, or the IP address that the firewall rule allows to access the database cluster. (example: ff2a6c52-5a44-4b63-b99c-0e98e7a63d61)</td>
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
    <td><a href="#databases_list_firewall_rules"><CopyableCode code="databases_list_firewall_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list all of a database cluster's firewall rules (known as "trusted sources" in the control panel), send a GET request to `/v2/databases/$DATABASE_ID/firewall`.<br />The result will be a JSON object with a `rules` key.</td>
</tr>
<tr>
    <td><a href="#databases_update_firewall_rules"><CopyableCode code="databases_update_firewall_rules" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To update a database cluster's firewall rules (known as "trusted sources" in the control panel), send a PUT request to `/v2/databases/$DATABASE_ID/firewall` specifying which resources should be able to open connections to the database. You may limit connections to specific Droplets, Kubernetes clusters, or IP addresses. When a tag is provided, any Droplet or Kubernetes node with that tag applied to it will have access. The firewall is limited to 100 rules (or trusted sources). When possible, we recommend [placing your databases into a VPC network](https://docs.digitalocean.com/products/networking/vpc/) to limit access to them instead of using a firewall.<br />A successful</td>
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
<tr id="parameter-database_cluster_uuid">
    <td><CopyableCode code="database_cluster_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a database cluster. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_list_firewall_rules"
    values={[
        { label: 'databases_list_firewall_rules', value: 'databases_list_firewall_rules' }
    ]}
>
<TabItem value="databases_list_firewall_rules">

To list all of a database cluster's firewall rules (known as "trusted sources" in the control panel), send a GET request to `/v2/databases/$DATABASE_ID/firewall`.<br />The result will be a JSON object with a `rules` key.

```sql
SELECT
cluster_uuid,
created_at,
type,
uuid,
value
FROM digitalocean.databases.firewall_rules
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_firewall_rules"
    values={[
        { label: 'databases_update_firewall_rules', value: 'databases_update_firewall_rules' }
    ]}
>
<TabItem value="databases_update_firewall_rules">

To update a database cluster's firewall rules (known as "trusted sources" in the control panel), send a PUT request to `/v2/databases/$DATABASE_ID/firewall` specifying which resources should be able to open connections to the database. You may limit connections to specific Droplets, Kubernetes clusters, or IP addresses. When a tag is provided, any Droplet or Kubernetes node with that tag applied to it will have access. The firewall is limited to 100 rules (or trusted sources). When possible, we recommend [placing your databases into a VPC network](https://docs.digitalocean.com/products/networking/vpc/) to limit access to them instead of using a firewall.<br />A successful

```sql
REPLACE digitalocean.databases.firewall_rules
SET 
data__rules = '{{ rules }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required;
```
</TabItem>
</Tabs>
