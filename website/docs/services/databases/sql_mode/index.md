--- 
title: sql_mode
hide_title: false
hide_table_of_contents: false
keywords:
  - sql_mode
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

Creates, updates, deletes, gets or lists a <code>sql_mode</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sql_mode</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.sql_mode" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_sql_mode"
    values={[
        { label: 'databases_get_sql_mode', value: 'databases_get_sql_mode' }
    ]}
>
<TabItem value="databases_get_sql_mode">

A JSON string with a key of `sql_mode`.

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
    <td><CopyableCode code="sql_mode" /></td>
    <td><code>string</code></td>
    <td>A string specifying the configured SQL modes for the MySQL cluster. (example: ANSI,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,STRICT_ALL_TABLES)</td>
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
    <td><a href="#databases_get_sql_mode"><CopyableCode code="databases_get_sql_mode" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To retrieve the configured SQL modes for an existing MySQL cluster, send a GET request to `/v2/databases/$DATABASE_ID/sql_mode`.<br />The response will be a JSON object with a `sql_mode` key. This will be set to a string representing the configured SQL modes.</td>
</tr>
<tr>
    <td><a href="#databases_update_sql_mode"><CopyableCode code="databases_update_sql_mode" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__sql_mode"><code>data__sql_mode</code></a></td>
    <td></td>
    <td>To configure the SQL modes for an existing MySQL cluster, send a PUT request to `/v2/databases/$DATABASE_ID/sql_mode` specifying the desired modes. See the official MySQL 8 documentation for a [full list of supported SQL modes](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-full).<br />A successful request will receive a 204 No Content status code with no body in response.</td>
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
    defaultValue="databases_get_sql_mode"
    values={[
        { label: 'databases_get_sql_mode', value: 'databases_get_sql_mode' }
    ]}
>
<TabItem value="databases_get_sql_mode">

To retrieve the configured SQL modes for an existing MySQL cluster, send a GET request to `/v2/databases/$DATABASE_ID/sql_mode`.<br />The response will be a JSON object with a `sql_mode` key. This will be set to a string representing the configured SQL modes.

```sql
SELECT
sql_mode
FROM digitalocean.databases.sql_mode
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_sql_mode"
    values={[
        { label: 'databases_update_sql_mode', value: 'databases_update_sql_mode' }
    ]}
>
<TabItem value="databases_update_sql_mode">

To configure the SQL modes for an existing MySQL cluster, send a PUT request to `/v2/databases/$DATABASE_ID/sql_mode` specifying the desired modes. See the official MySQL 8 documentation for a [full list of supported SQL modes](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-full).<br />A successful request will receive a 204 No Content status code with no body in response.

```sql
REPLACE digitalocean.databases.sql_mode
SET 
data__sql_mode = '{{ sql_mode }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND data__sql_mode = '{{ sql_mode }}' --required;
```
</TabItem>
</Tabs>
