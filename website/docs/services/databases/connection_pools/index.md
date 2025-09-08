--- 
title: connection_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_pools
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

Creates, updates, deletes, gets or lists a <code>connection_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connection_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.connection_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_connection_pool"
    values={[
        { label: 'databases_get_connection_pool', value: 'databases_get_connection_pool' },
        { label: 'databases_list_connection_pools', value: 'databases_list_connection_pools' }
    ]}
>
<TabItem value="databases_get_connection_pool">

A JSON object with a key of `pool`.

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
    <td>A unique name for the connection pool. Must be between 3 and 60 characters. (example: backend-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="db" /></td>
    <td><code>string</code></td>
    <td>The database for use with the connection pool. (example: defaultdb)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement. (example: transaction)</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="standby_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="standby_private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user. (example: doadmin)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="databases_list_connection_pools">

A JSON object with a key of `pools`.

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
    <td>A unique name for the connection pool. Must be between 3 and 60 characters. (example: backend-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="db" /></td>
    <td><code>string</code></td>
    <td>The database for use with the connection pool. (example: defaultdb)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement. (example: transaction)</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="standby_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="standby_private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user. (example: doadmin)</td>
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
    <td><a href="#databases_get_connection_pool"><CopyableCode code="databases_get_connection_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-pool_name"><code>pool_name</code></a></td>
    <td></td>
    <td>To show information about an existing connection pool for a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.<br />The response will be a JSON object with a `pool` key.</td>
</tr>
<tr>
    <td><a href="#databases_list_connection_pools"><CopyableCode code="databases_list_connection_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list all of the connection pools available to a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools`.<br />The result will be a JSON object with a `pools` key. This will be set to an array of connection pool objects.</td>
</tr>
<tr>
    <td><a href="#databases_add_connection_pool"><CopyableCode code="databases_add_connection_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__mode"><code>data__mode</code></a>, <a href="#parameter-data__size"><code>data__size</code></a>, <a href="#parameter-data__db"><code>data__db</code></a></td>
    <td></td>
    <td>For PostgreSQL database clusters, connection pools can be used to allow a<br />database to share its idle connections. The popular PostgreSQL connection<br />pooling utility PgBouncer is used to provide this service. [See here for more information](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/)<br />about how and why to use PgBouncer connection pooling including<br />details about the available transaction modes.<br /><br />To add a new connection pool to a PostgreSQL database cluster, send a POST<br />request to `/v2/databases/$DATABASE_ID/pools` specifying a name for the pool,<br />the user to connect with, the database to connect to, as well as its desired<br />size and transaction mode.<br /></td>
</tr>
<tr>
    <td><a href="#databases_update_connection_pool"><CopyableCode code="databases_update_connection_pool" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-pool_name"><code>pool_name</code></a>, <a href="#parameter-data__mode"><code>data__mode</code></a>, <a href="#parameter-data__size"><code>data__size</code></a>, <a href="#parameter-data__db"><code>data__db</code></a></td>
    <td></td>
    <td>To update a connection pool for a PostgreSQL database cluster, send a PUT request to  `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.</td>
</tr>
<tr>
    <td><a href="#databases_delete_connection_pool"><CopyableCode code="databases_delete_connection_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-pool_name"><code>pool_name</code></a></td>
    <td></td>
    <td>To delete a specific connection pool for a PostgreSQL database cluster, send<br />a DELETE request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /></td>
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
<tr id="parameter-pool_name">
    <td><CopyableCode code="pool_name" /></td>
    <td><code>string</code></td>
    <td>The name used to identify the connection pool. (example: backend-pool)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_connection_pool"
    values={[
        { label: 'databases_get_connection_pool', value: 'databases_get_connection_pool' },
        { label: 'databases_list_connection_pools', value: 'databases_list_connection_pools' }
    ]}
>
<TabItem value="databases_get_connection_pool">

To show information about an existing connection pool for a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.<br />The response will be a JSON object with a `pool` key.

```sql
SELECT
name,
connection,
db,
mode,
private_connection,
size,
standby_connection,
standby_private_connection,
user
FROM digitalocean.databases.connection_pools
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND pool_name = '{{ pool_name }}' -- required;
```
</TabItem>
<TabItem value="databases_list_connection_pools">

To list all of the connection pools available to a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools`.<br />The result will be a JSON object with a `pools` key. This will be set to an array of connection pool objects.

```sql
SELECT
name,
connection,
db,
mode,
private_connection,
size,
standby_connection,
standby_private_connection,
user
FROM digitalocean.databases.connection_pools
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="databases_add_connection_pool"
    values={[
        { label: 'databases_add_connection_pool', value: 'databases_add_connection_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="databases_add_connection_pool">

For PostgreSQL database clusters, connection pools can be used to allow a<br />database to share its idle connections. The popular PostgreSQL connection<br />pooling utility PgBouncer is used to provide this service. [See here for more information](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/)<br />about how and why to use PgBouncer connection pooling including<br />details about the available transaction modes.<br /><br />To add a new connection pool to a PostgreSQL database cluster, send a POST<br />request to `/v2/databases/$DATABASE_ID/pools` specifying a name for the pool,<br />the user to connect with, the database to connect to, as well as its desired<br />size and transaction mode.<br />

```sql
INSERT INTO digitalocean.databases.connection_pools (
data__name,
data__mode,
data__size,
data__db,
data__user,
database_cluster_uuid
)
SELECT 
'{{ name }}' --required,
'{{ mode }}' --required,
{{ size }} --required,
'{{ db }}' --required,
'{{ user }}',
'{{ database_cluster_uuid }}'
RETURNING
pool
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: connection_pools
  props:
    - name: database_cluster_uuid
      value: string (uuid)
      description: Required parameter for the connection_pools resource.
    - name: name
      value: string
      description: >
        A unique name for the connection pool. Must be between 3 and 60 characters.
        
    - name: mode
      value: string
      description: >
        The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement.
        
    - name: size
      value: integer
      description: >
        The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster.
        
    - name: db
      value: string
      description: >
        The database for use with the connection pool.
        
    - name: user
      value: string
      description: >
        The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_connection_pool"
    values={[
        { label: 'databases_update_connection_pool', value: 'databases_update_connection_pool' }
    ]}
>
<TabItem value="databases_update_connection_pool">

To update a connection pool for a PostgreSQL database cluster, send a PUT request to  `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.

```sql
REPLACE digitalocean.databases.connection_pools
SET 
data__mode = '{{ mode }}',
data__size = {{ size }},
data__db = '{{ db }}',
data__user = '{{ user }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND pool_name = '{{ pool_name }}' --required
AND data__mode = '{{ mode }}' --required
AND data__size = '{{ size }}' --required
AND data__db = '{{ db }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_delete_connection_pool"
    values={[
        { label: 'databases_delete_connection_pool', value: 'databases_delete_connection_pool' }
    ]}
>
<TabItem value="databases_delete_connection_pool">

To delete a specific connection pool for a PostgreSQL database cluster, send<br />a DELETE request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br />

```sql
DELETE FROM digitalocean.databases.connection_pools
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND pool_name = '{{ pool_name }}' --required;
```
</TabItem>
</Tabs>
