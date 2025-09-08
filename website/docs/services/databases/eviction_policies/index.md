--- 
title: eviction_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - eviction_policies
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

Creates, updates, deletes, gets or lists an <code>eviction_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>eviction_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.eviction_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_eviction_policy"
    values={[
        { label: 'databases_get_eviction_policy', value: 'databases_get_eviction_policy' }
    ]}
>
<TabItem value="databases_get_eviction_policy">

A JSON string with a key of `eviction_policy`.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#databases_get_eviction_policy"><CopyableCode code="databases_get_eviction_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To retrieve the configured eviction policy for an existing Caching or Valkey cluster, send a GET request to `/v2/databases/$DATABASE_ID/eviction_policy`.<br />The response will be a JSON object with an `eviction_policy` key. This will be set to a string representing the eviction policy.</td>
</tr>
<tr>
    <td><a href="#databases_update_eviction_policy"><CopyableCode code="databases_update_eviction_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__eviction_policy"><code>data__eviction_policy</code></a></td>
    <td></td>
    <td>To configure an eviction policy for an existing Caching or Valkey cluster, send a PUT request to `/v2/databases/$DATABASE_ID/eviction_policy` specifying the desired policy.</td>
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
    defaultValue="databases_get_eviction_policy"
    values={[
        { label: 'databases_get_eviction_policy', value: 'databases_get_eviction_policy' }
    ]}
>
<TabItem value="databases_get_eviction_policy">

To retrieve the configured eviction policy for an existing Caching or Valkey cluster, send a GET request to `/v2/databases/$DATABASE_ID/eviction_policy`.<br />The response will be a JSON object with an `eviction_policy` key. This will be set to a string representing the eviction policy.

```sql
SELECT
*
FROM digitalocean.databases.eviction_policies
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_eviction_policy"
    values={[
        { label: 'databases_update_eviction_policy', value: 'databases_update_eviction_policy' }
    ]}
>
<TabItem value="databases_update_eviction_policy">

To configure an eviction policy for an existing Caching or Valkey cluster, send a PUT request to `/v2/databases/$DATABASE_ID/eviction_policy` specifying the desired policy.

```sql
REPLACE digitalocean.databases.eviction_policies
SET 
data__eviction_policy = '{{ eviction_policy }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND data__eviction_policy = '{{ eviction_policy }}' --required;
```
</TabItem>
</Tabs>
