--- 
title: replicas
hide_title: false
hide_table_of_contents: false
keywords:
  - replicas
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

Creates, updates, deletes, gets or lists a <code>replicas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>replicas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.replicas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_replica"
    values={[
        { label: 'databases_get_replica', value: 'databases_get_replica' },
        { label: 'databases_list_replicas', value: 'databases_list_replicas' }
    ]}
>
<TabItem value="databases_get_replica">

A JSON object with a key of `replica`.

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
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference a database replica. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name to give the read-only replicating (example: read-nyc3-01)</td>
</tr>
<tr>
    <td><CopyableCode code="connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the database cluster was created. (example: 2019-01-11T18:37:36Z)</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_network_uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region. <br /><br />Requires `vpc:read` scope. (example: 9423cbad-9211-442f-820b-ef6915e99b5f)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating. (example: db-s-2vcpu-4gb)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A string representing the current status of the database cluster. (example: creating)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_size_mib" /></td>
    <td><code>integer</code></td>
    <td>Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A flat array of tag names as strings applied to the read-only replica.<br /><br />Requires `tag:read` scope.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="databases_list_replicas">

A JSON object with a key of `replicas`.

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
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference a database replica. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name to give the read-only replicating (example: read-nyc3-01)</td>
</tr>
<tr>
    <td><CopyableCode code="connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the database cluster was created. (example: 2019-01-11T18:37:36Z)</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_network_uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region. <br /><br />Requires `vpc:read` scope. (example: 9423cbad-9211-442f-820b-ef6915e99b5f)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating. (example: db-s-2vcpu-4gb)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A string representing the current status of the database cluster. (example: creating)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_size_mib" /></td>
    <td><code>integer</code></td>
    <td>Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A flat array of tag names as strings applied to the read-only replica.<br /><br />Requires `tag:read` scope.</td>
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
    <td><a href="#databases_get_replica"><CopyableCode code="databases_get_replica" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-replica_name"><code>replica_name</code></a></td>
    <td></td>
    <td>To show information about an existing database replica, send a GET request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a `replica key`. This will be set to an object containing the standard database replica attributes.</td>
</tr>
<tr>
    <td><a href="#databases_list_replicas"><CopyableCode code="databases_list_replicas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list all of the read-only replicas associated with a database cluster, send a GET request to `/v2/databases/$DATABASE_ID/replicas`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />The result will be a JSON object with a `replicas` key. This will be set to an array of database replica objects, each of which will contain the standard database replica attributes.</td>
</tr>
<tr>
    <td><a href="#databases_create_replica"><CopyableCode code="databases_create_replica" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To create a read-only replica for a PostgreSQL or MySQL database cluster, send a POST request to `/v2/databases/$DATABASE_ID/replicas` specifying the name it should be given, the size of the node to be used, and the region where it will be located.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a key called `replica`. The value of this will be an object that contains the standard attributes associated with a database replica. The initial value of the read-only replica's `status` attribute will be `forking`. When the replica is ready to receive traffic, this will transition to `active`.</td>
</tr>
<tr>
    <td><a href="#databases_destroy_replica"><CopyableCode code="databases_destroy_replica" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-replica_name"><code>replica_name</code></a></td>
    <td></td>
    <td>To destroy a specific read-only replica, send a DELETE request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.</td>
</tr>
<tr>
    <td><a href="#databases_promote_replica"><CopyableCode code="databases_promote_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-replica_name"><code>replica_name</code></a></td>
    <td></td>
    <td>To promote a specific read-only replica, send a PUT request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME/promote`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.</td>
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
<tr id="parameter-replica_name">
    <td><CopyableCode code="replica_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database replica. (example: read-nyc3-01)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_replica"
    values={[
        { label: 'databases_get_replica', value: 'databases_get_replica' },
        { label: 'databases_list_replicas', value: 'databases_list_replicas' }
    ]}
>
<TabItem value="databases_get_replica">

To show information about an existing database replica, send a GET request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a `replica key`. This will be set to an object containing the standard database replica attributes.

```sql
SELECT
id,
name,
connection,
created_at,
private_connection,
private_network_uuid,
region,
size,
status,
storage_size_mib,
tags
FROM digitalocean.databases.replicas
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND replica_name = '{{ replica_name }}' -- required;
```
</TabItem>
<TabItem value="databases_list_replicas">

To list all of the read-only replicas associated with a database cluster, send a GET request to `/v2/databases/$DATABASE_ID/replicas`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />The result will be a JSON object with a `replicas` key. This will be set to an array of database replica objects, each of which will contain the standard database replica attributes.

```sql
SELECT
id,
name,
connection,
created_at,
private_connection,
private_network_uuid,
region,
size,
status,
storage_size_mib,
tags
FROM digitalocean.databases.replicas
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="databases_create_replica"
    values={[
        { label: 'databases_create_replica', value: 'databases_create_replica' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="databases_create_replica">

To create a read-only replica for a PostgreSQL or MySQL database cluster, send a POST request to `/v2/databases/$DATABASE_ID/replicas` specifying the name it should be given, the size of the node to be used, and the region where it will be located.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a key called `replica`. The value of this will be an object that contains the standard attributes associated with a database replica. The initial value of the read-only replica's `status` attribute will be `forking`. When the replica is ready to receive traffic, this will transition to `active`.

```sql
INSERT INTO digitalocean.databases.replicas (
data__name,
data__region,
data__size,
data__tags,
data__private_network_uuid,
data__storage_size_mib,
database_cluster_uuid
)
SELECT 
'{{ name }}' --required,
'{{ region }}',
'{{ size }}',
'{{ tags }}',
'{{ private_network_uuid }}',
{{ storage_size_mib }},
'{{ database_cluster_uuid }}'
RETURNING
replica
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: replicas
  props:
    - name: database_cluster_uuid
      value: string (uuid)
      description: Required parameter for the replicas resource.
    - name: name
      value: string
      description: >
        The name to give the read-only replicating
        
    - name: region
      value: string
      description: >
        A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster.
        
    - name: size
      value: string
      description: >
        A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating.
        
    - name: tags
      value: array
      description: >
        A flat array of tag names as strings to apply to the read-only replica after it is created. Tag names can either be existing or new tags. <br><br>Requires `tag:create` scope.
        
    - name: private_network_uuid
      value: string
      description: >
        A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope.
        
    - name: storage_size_mib
      value: integer
      description: >
        Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_destroy_replica"
    values={[
        { label: 'databases_destroy_replica', value: 'databases_destroy_replica' }
    ]}
>
<TabItem value="databases_destroy_replica">

To destroy a specific read-only replica, send a DELETE request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.

```sql
DELETE FROM digitalocean.databases.replicas
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND replica_name = '{{ replica_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="databases_promote_replica"
    values={[
        { label: 'databases_promote_replica', value: 'databases_promote_replica' }
    ]}
>
<TabItem value="databases_promote_replica">

To promote a specific read-only replica, send a PUT request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME/promote`.<br /><br />**Note**: Read-only replicas are not supported for Caching or Valkey clusters.<br /><br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.

```sql
EXEC digitalocean.databases.replicas.databases_promote_replica 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required, 
@replica_name='{{ replica_name }}' --required;
```
</TabItem>
</Tabs>
