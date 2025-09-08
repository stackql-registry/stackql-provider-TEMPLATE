--- 
title: cluster_config
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_config
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

Creates, updates, deletes, gets or lists a <code>cluster_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cluster_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.cluster_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_config"
    values={[
        { label: 'databases_get_config', value: 'databases_get_config' }
    ]}
>
<TabItem value="databases_get_config">

A JSON object with a key of `config`.

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
    <td><CopyableCode code="config" /></td>
    <td><code></code></td>
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
    <td><a href="#databases_get_config"><CopyableCode code="databases_get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>Shows configuration parameters for an existing database cluster by sending a GET request to<br />`/v2/databases/$DATABASE_ID/config`.<br />The response is a JSON object with a `config` key, which is set to an object<br />containing any database configuration parameters.<br /></td>
</tr>
<tr>
    <td><a href="#databases_patch_config"><CopyableCode code="databases_patch_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To update the configuration for an existing database cluster, send a PATCH request to<br />`/v2/databases/$DATABASE_ID/config`.<br /></td>
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
    defaultValue="databases_get_config"
    values={[
        { label: 'databases_get_config', value: 'databases_get_config' }
    ]}
>
<TabItem value="databases_get_config">

Shows configuration parameters for an existing database cluster by sending a GET request to<br />`/v2/databases/$DATABASE_ID/config`.<br />The response is a JSON object with a `config` key, which is set to an object<br />containing any database configuration parameters.<br />

```sql
SELECT
config
FROM digitalocean.databases.cluster_config
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="databases_patch_config"
    values={[
        { label: 'databases_patch_config', value: 'databases_patch_config' }
    ]}
>
<TabItem value="databases_patch_config">

To update the configuration for an existing database cluster, send a PATCH request to<br />`/v2/databases/$DATABASE_ID/config`.<br />

```sql
UPDATE digitalocean.databases.cluster_config
SET 
data__config = '{{ config }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required;
```
</TabItem>
</Tabs>
