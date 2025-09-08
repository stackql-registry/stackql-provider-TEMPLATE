--- 
title: online_migrations
hide_title: false
hide_table_of_contents: false
keywords:
  - online_migrations
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

Creates, updates, deletes, gets or lists an <code>online_migrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>online_migrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.online_migrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_migration_status"
    values={[
        { label: 'databases_get_migration_status', value: 'databases_get_migration_status' }
    ]}
>
<TabItem value="databases_get_migration_status">

A JSON object.

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
    <td>The ID of the most recent migration. (example: 77b28fc8-19ff-11eb-8c9c-c68e24557488)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The time the migration was initiated, in ISO 8601 format. (example: 2020-10-29T15:57:38Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the migration. (example: running)</td>
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
    <td><a href="#databases_get_migration_status"><CopyableCode code="databases_get_migration_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To retrieve the status of the most recent online migration, send a GET request to `/v2/databases/$DATABASE_ID/online-migration`. </td>
</tr>
<tr>
    <td><a href="#databases_update_online_migration"><CopyableCode code="databases_update_online_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>To start an online migration, send a PUT request to `/v2/databases/$DATABASE_ID/online-migration` endpoint. Migrating a cluster establishes a connection with an existing cluster and replicates its contents to the target cluster. Online migration is only available for MySQL, PostgreSQL, Caching, and Valkey clusters.<br />If the existing database is continuously being written to,  the migration process will continue for up to two weeks unless it is manually stopped. Online migration is only available for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#:~:text=To%20migrate%20a%20MySQL%20database,then%20select%20Set%20Up%20Migration),  [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/),  [Caching](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/), and [Valkey](https://docs.digitalocean.com/products/databases/valkey/how-to/migrate/) clusters. </td>
</tr>
<tr>
    <td><a href="#databases_delete_online_migration"><CopyableCode code="databases_delete_online_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-migration_id"><code>migration_id</code></a></td>
    <td></td>
    <td>To stop an online migration, send a DELETE request to `/v2/databases/$DATABASE_ID/online-migration/$MIGRATION_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.<br /></td>
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
<tr id="parameter-migration_id">
    <td><CopyableCode code="migration_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier assigned to the online migration. (example: 77b28fc8-19ff-11eb-8c9c-c68e24557488)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_migration_status"
    values={[
        { label: 'databases_get_migration_status', value: 'databases_get_migration_status' }
    ]}
>
<TabItem value="databases_get_migration_status">

To retrieve the status of the most recent online migration, send a GET request to `/v2/databases/$DATABASE_ID/online-migration`. 

```sql
SELECT
id,
created_at,
status
FROM digitalocean.databases.online_migrations
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="databases_update_online_migration"
    values={[
        { label: 'databases_update_online_migration', value: 'databases_update_online_migration' },
        { label: 'databases_delete_online_migration', value: 'databases_delete_online_migration' }
    ]}
>
<TabItem value="databases_update_online_migration">

To start an online migration, send a PUT request to `/v2/databases/$DATABASE_ID/online-migration` endpoint. Migrating a cluster establishes a connection with an existing cluster and replicates its contents to the target cluster. Online migration is only available for MySQL, PostgreSQL, Caching, and Valkey clusters.<br />If the existing database is continuously being written to,  the migration process will continue for up to two weeks unless it is manually stopped. Online migration is only available for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#:~:text=To%20migrate%20a%20MySQL%20database,then%20select%20Set%20Up%20Migration),  [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/),  [Caching](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/), and [Valkey](https://docs.digitalocean.com/products/databases/valkey/how-to/migrate/) clusters. 

```sql
EXEC digitalocean.databases.online_migrations.databases_update_online_migration 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required 
@@json=
'{
"source": "{{ source }}", 
"disable_ssl": {{ disable_ssl }}, 
"ignore_dbs": "{{ ignore_dbs }}"
}';
```
</TabItem>
<TabItem value="databases_delete_online_migration">

To stop an online migration, send a DELETE request to `/v2/databases/$DATABASE_ID/online-migration/$MIGRATION_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.<br />

```sql
EXEC digitalocean.databases.online_migrations.databases_delete_online_migration 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required, 
@migration_id='{{ migration_id }}' --required;
```
</TabItem>
</Tabs>
