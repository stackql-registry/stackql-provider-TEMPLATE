--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_cluster"
    values={[
        { label: 'databases_get_cluster', value: 'databases_get_cluster' },
        { label: 'databases_list_clusters', value: 'databases_list_clusters' }
    ]}
>
<TabItem value="databases_get_cluster">

A JSON object with a key of `database`.

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
    <td>A unique ID that can be used to identify and reference a database cluster. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A unique, human-readable name referring to a database cluster. (example: backend)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.<br /><br />Requires `project:read` scope. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
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
    <td><CopyableCode code="db_names" /></td>
    <td><code>array</code></td>
    <td>An array of strings containing the names of databases created in the database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Caching, "mongodb" for MongoDB, "kafka" for Kafka, "opensearch" for OpenSearch, and "valkey" for Valkey. (example: mysql)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metrics_endpoints" /></td>
    <td><code>array</code></td>
    <td>Public hostname and port of the cluster's metrics endpoint(s). Includes one record for the cluster's primary node and a second entry for the cluster's standby node(s).</td>
</tr>
<tr>
    <td><CopyableCode code="num_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_network_uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region. <br /><br />Requires `vpc:read` scope. (pattern: ^$|[0-9a-f]&#123;8&#125;\b-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-\b[0-9a-f]&#123;12&#125;, example: d455e75d-4858-4eec-8c95-da2f0a5f93a7)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the database cluster is located. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schema_registry_connection" /></td>
    <td><code>object</code></td>
    <td>The connection details for Schema Registry.</td>
</tr>
<tr>
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>A string representing the semantic version of the database engine in use for the cluster. (example: 8.0.28)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>The slug identifier representing the size of the nodes in the database cluster. (example: db-s-2vcpu-4gb)</td>
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
    <td>An array of tags that have been applied to the database cluster. <br /><br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="ui_connection" /></td>
    <td><code>object</code></td>
    <td>The connection details for OpenSearch dashboard. </td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A string representing the version of the database engine in use for the cluster. (example: 8)</td>
</tr>
<tr>
    <td><CopyableCode code="version_end_of_availability" /></td>
    <td><code>string</code></td>
    <td>A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline. (example: 2023-05-09T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="version_end_of_life" /></td>
    <td><code>string</code></td>
    <td>A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline. (example: 2023-11-09T00:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="databases_list_clusters">

A JSON object with a key of `databases`.

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
    <td>A unique ID that can be used to identify and reference a database cluster. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A unique, human-readable name referring to a database cluster. (example: backend)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.<br /><br />Requires `project:read` scope. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
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
    <td><CopyableCode code="db_names" /></td>
    <td><code>array</code></td>
    <td>An array of strings containing the names of databases created in the database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Caching, "mongodb" for MongoDB, "kafka" for Kafka, "opensearch" for OpenSearch, and "valkey" for Valkey. (example: mysql)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metrics_endpoints" /></td>
    <td><code>array</code></td>
    <td>Public hostname and port of the cluster's metrics endpoint(s). Includes one record for the cluster's primary node and a second entry for the cluster's standby node(s).</td>
</tr>
<tr>
    <td><CopyableCode code="num_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_network_uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region. <br /><br />Requires `vpc:read` scope. (pattern: ^$|[0-9a-f]&#123;8&#125;\b-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-[0-9a-f]&#123;4&#125;-\b[0-9a-f]&#123;12&#125;, example: d455e75d-4858-4eec-8c95-da2f0a5f93a7)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the database cluster is located. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schema_registry_connection" /></td>
    <td><code>object</code></td>
    <td>The connection details for Schema Registry.</td>
</tr>
<tr>
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>A string representing the semantic version of the database engine in use for the cluster. (example: 8.0.28)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>The slug identifier representing the size of the nodes in the database cluster. (example: db-s-2vcpu-4gb)</td>
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
    <td>An array of tags that have been applied to the database cluster. <br /><br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="ui_connection" /></td>
    <td><code>object</code></td>
    <td>The connection details for OpenSearch dashboard. </td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A string representing the version of the database engine in use for the cluster. (example: 8)</td>
</tr>
<tr>
    <td><CopyableCode code="version_end_of_availability" /></td>
    <td><code>string</code></td>
    <td>A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline. (example: 2023-05-09T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="version_end_of_life" /></td>
    <td><code>string</code></td>
    <td>A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline. (example: 2023-11-09T00:00:00Z)</td>
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
    <td><a href="#databases_get_cluster"><CopyableCode code="databases_get_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To show information about an existing database cluster, send a GET request to `/v2/databases/$DATABASE_ID`.<br /><br />The response will be a JSON object with a database key. This will be set to an object containing the standard database cluster attributes.<br /><br />The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster. For multi-node clusters, the `standby_connection` and `standby_private_connection` objects contain the information needed to connect to the cluster's standby node(s).<br /><br />The embedded maintenance_window object will contain information about any scheduled maintenance for the database cluster.</td>
</tr>
<tr>
    <td><a href="#databases_list_clusters"><CopyableCode code="databases_list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>To list all of the database clusters available on your account, send a GET request to `/v2/databases`. To limit the results to database clusters with a specific tag, include the `tag_name` query parameter set to the name of the tag. For example, `/v2/databases?tag_name=$TAG_NAME`.<br /><br />The result will be a JSON object with a `databases` key. This will be set to an array of database objects, each of which will contain the standard database attributes.<br /><br />The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster. For multi-node clusters, the `standby_connection` and `standby_private_connection` objects will contain the information needed to connect to the cluster's standby node(s).<br /><br />The embedded `maintenance_window` object will contain information about any scheduled maintenance for the database cluster.</td>
</tr>
<tr>
    <td><a href="#databases_create_cluster"><CopyableCode code="databases_create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__engine"><code>data__engine</code></a>, <a href="#parameter-data__num_nodes"><code>data__num_nodes</code></a>, <a href="#parameter-data__size"><code>data__size</code></a>, <a href="#parameter-data__region"><code>data__region</code></a></td>
    <td></td>
    <td>To create a database cluster, send a POST request to `/v2/databases`. To see a list  of options for each engine, such as available regions, size slugs, and versions, send a GET request to the `/v2/databases/options` endpoint. The available sizes for  the `storage_size_mib` field depends on the cluster's size. To see a list of available sizes, see [Managed Database Pricing](https://www.digitalocean.com/pricing/managed-databases).<br /><br />The create response returns a JSON object with a key called `database`. The value of this is an object that contains the standard attributes associated with a database cluster. The initial value of the database cluster's `status` attribute is `creating`. When the cluster is ready to receive traffic, this changes to `online`.<br /><br />The embedded `connection` and `private_connection` objects contains the information needed to access the database cluster. For multi-node clusters, the `standby_connection` and `standby_private_connection` objects contain the information needed to connect to the cluster's standby node(s).<br /><br />DigitalOcean managed PostgreSQL and MySQL database clusters take automated daily backups. To create a new database cluster based on a backup of an existing cluster, send a POST request to `/v2/databases`. In addition to the standard database cluster attributes, the JSON body must include a key named `backup_restore` with the name of the original database cluster and the timestamp of the backup to be restored. Creating a database from a backup is the same as forking a database in the control panel.<br />Note: Caching cluster creates are no longer supported as of 2025-04-30T00:00:00Z. Backups are also not supported for Caching or Valkey clusters.</td>
</tr>
<tr>
    <td><a href="#databases_destroy_cluster"><CopyableCode code="databases_destroy_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To destroy a specific database, send a DELETE request to `/v2/databases/$DATABASE_ID`.<br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.</td>
</tr>
<tr>
    <td><a href="#databases_update_region"><CopyableCode code="databases_update_region" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>To migrate a database cluster to a new region, send a `PUT` request to<br />`/v2/databases/$DATABASE_ID/migrate`. The body of the request must specify a<br />`region` attribute.<br /><br />A successful request will receive a 202 Accepted status code with no body in<br />response. Querying the database cluster will show that its `status` attribute<br />will now be set to `migrating`. This will transition back to `online` when the<br />migration has completed.<br /></td>
</tr>
<tr>
    <td><a href="#databases_update_cluster_size"><CopyableCode code="databases_update_cluster_size" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-num_nodes"><code>num_nodes</code></a></td>
    <td></td>
    <td>To resize a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/resize`. The body of the request must specify both the size and num_nodes attributes.<br />A successful request will receive a 202 Accepted status code with no body in response. Querying the database cluster will show that its status attribute will now be set to resizing. This will transition back to online when the resize operation has completed.</td>
</tr>
<tr>
    <td><a href="#databases_update_maintenance_window"><CopyableCode code="databases_update_maintenance_window" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-day"><code>day</code></a>, <a href="#parameter-hour"><code>hour</code></a></td>
    <td></td>
    <td>To configure the window when automatic maintenance should be performed for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/maintenance`.<br />A successful request will receive a 204 No Content status code with no body in response.</td>
</tr>
<tr>
    <td><a href="#databases_install_update"><CopyableCode code="databases_install_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To start the installation of updates for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/install_update`.<br />A successful request will receive a 204 No Content status code with no body in response.</td>
</tr>
<tr>
    <td><a href="#databases_update_major_version"><CopyableCode code="databases_update_major_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To upgrade the major version of a database, send a PUT request to `/v2/databases/$DATABASE_ID/upgrade`, specifying the target version.<br />A successful request will receive a 204 No Content status code with no body in response.</td>
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
<tr id="parameter-tag_name">
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>Limits the results to database clusters with a specific tag.<br /><br />Requires `tag:read` scope. (example: production)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_cluster"
    values={[
        { label: 'databases_get_cluster', value: 'databases_get_cluster' },
        { label: 'databases_list_clusters', value: 'databases_list_clusters' }
    ]}
>
<TabItem value="databases_get_cluster">

To show information about an existing database cluster, send a GET request to `/v2/databases/$DATABASE_ID`.<br /><br />The response will be a JSON object with a database key. This will be set to an object containing the standard database cluster attributes.<br /><br />The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster. For multi-node clusters, the `standby_connection` and `standby_private_connection` objects contain the information needed to connect to the cluster's standby node(s).<br /><br />The embedded maintenance_window object will contain information about any scheduled maintenance for the database cluster.

```sql
SELECT
id,
name,
project_id,
connection,
created_at,
db_names,
engine,
maintenance_window,
metrics_endpoints,
num_nodes,
private_connection,
private_network_uuid,
region,
rules,
schema_registry_connection,
semantic_version,
size,
standby_connection,
standby_private_connection,
status,
storage_size_mib,
tags,
ui_connection,
users,
version,
version_end_of_availability,
version_end_of_life
FROM digitalocean.databases.clusters
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
<TabItem value="databases_list_clusters">

To list all of the database clusters available on your account, send a GET request to `/v2/databases`. To limit the results to database clusters with a specific tag, include the `tag_name` query parameter set to the name of the tag. For example, `/v2/databases?tag_name=$TAG_NAME`.<br /><br />The result will be a JSON object with a `databases` key. This will be set to an array of database objects, each of which will contain the standard database attributes.<br /><br />The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster. For multi-node clusters, the `standby_connection` and `standby_private_connection` objects will contain the information needed to connect to the cluster's standby node(s).<br /><br />The embedded `maintenance_window` object will contain information about any scheduled maintenance for the database cluster.

```sql
SELECT
id,
name,
project_id,
connection,
created_at,
db_names,
engine,
maintenance_window,
metrics_endpoints,
num_nodes,
private_connection,
private_network_uuid,
region,
rules,
schema_registry_connection,
semantic_version,
size,
standby_connection,
standby_private_connection,
status,
storage_size_mib,
tags,
ui_connection,
users,
version,
version_end_of_availability,
version_end_of_life
FROM digitalocean.databases.clusters
WHERE tag_name = '{{ tag_name }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="databases_create_cluster"
    values={[
        { label: 'databases_create_cluster', value: 'databases_create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="databases_create_cluster">

To create a database cluster, send a POST request to `/v2/databases`. To see a list  of options for each engine, such as available regions, size slugs, and versions, send a GET request to the `/v2/databases/options` endpoint. The available sizes for  the `storage_size_mib` field depends on the cluster's size. To see a list of available sizes, see [Managed Database Pricing](https://www.digitalocean.com/pricing/managed-databases).<br /><br />The create response returns a JSON object with a key called `database`. The value of this is an object that contains the standard attributes associated with a database cluster. The initial value of the database cluster's `status` attribute is `creating`. When the cluster is ready to receive traffic, this changes to `online`.<br /><br />The embedded `connection` and `private_connection` objects contains the information needed to access the database cluster. For multi-node clusters, the `standby_connection` and `standby_private_connection` objects contain the information needed to connect to the cluster's standby node(s).<br /><br />DigitalOcean managed PostgreSQL and MySQL database clusters take automated daily backups. To create a new database cluster based on a backup of an existing cluster, send a POST request to `/v2/databases`. In addition to the standard database cluster attributes, the JSON body must include a key named `backup_restore` with the name of the original database cluster and the timestamp of the backup to be restored. Creating a database from a backup is the same as forking a database in the control panel.<br />Note: Caching cluster creates are no longer supported as of 2025-04-30T00:00:00Z. Backups are also not supported for Caching or Valkey clusters.

```sql
INSERT INTO digitalocean.databases.clusters (
data__name,
data__engine,
data__version,
data__num_nodes,
data__size,
data__region,
data__private_network_uuid,
data__tags,
data__project_id,
data__rules,
data__storage_size_mib,
data__autoscale,
data__backup_restore
)
SELECT 
'{{ name }}' --required,
'{{ engine }}' --required,
'{{ version }}',
{{ num_nodes }} --required,
'{{ size }}' --required,
'{{ region }}' --required,
'{{ private_network_uuid }}',
'{{ tags }}',
'{{ project_id }}',
'{{ rules }}',
{{ storage_size_mib }},
'{{ autoscale }}',
'{{ backup_restore }}'
RETURNING
database
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: clusters
  props:
    - name: name
      value: string
      description: >
        A unique, human-readable name referring to a database cluster.
        
    - name: engine
      value: string
      description: >
        A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Caching, "mongodb" for MongoDB, "kafka" for Kafka, "opensearch" for OpenSearch, and "valkey" for Valkey.
        
      valid_values: ['pg', 'mysql', 'redis', 'valkey', 'mongodb', 'kafka', 'opensearch']
    - name: version
      value: string
      description: >
        A string representing the version of the database engine in use for the cluster.
        
    - name: num_nodes
      value: integer
      description: >
        The number of nodes in the database cluster.
        
    - name: size
      value: string
      description: >
        The slug identifier representing the size of the nodes in the database cluster.
        
    - name: region
      value: string
      description: >
        The slug identifier for the region where the database cluster is located.
        
    - name: private_network_uuid
      value: string
      description: >
        A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope.
        
    - name: tags
      value: array
      description: >
        An array of tags (as strings) to apply to the database cluster. <br><br>Requires `tag:create` scope.
        
    - name: project_id
      value: string
      description: >
        The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.<br><br>Requires `project:update` scope.
        
    - name: rules
      value: array
    - name: storage_size_mib
      value: integer
      description: >
        Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.
        
    - name: autoscale
      value: object
      description: >
        Contains all autoscaling configuration for a database cluster
        
    - name: backup_restore
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_destroy_cluster"
    values={[
        { label: 'databases_destroy_cluster', value: 'databases_destroy_cluster' }
    ]}
>
<TabItem value="databases_destroy_cluster">

To destroy a specific database, send a DELETE request to `/v2/databases/$DATABASE_ID`.<br />A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.

```sql
DELETE FROM digitalocean.databases.clusters
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="databases_update_region"
    values={[
        { label: 'databases_update_region', value: 'databases_update_region' },
        { label: 'databases_update_cluster_size', value: 'databases_update_cluster_size' },
        { label: 'databases_update_maintenance_window', value: 'databases_update_maintenance_window' },
        { label: 'databases_install_update', value: 'databases_install_update' },
        { label: 'databases_update_major_version', value: 'databases_update_major_version' }
    ]}
>
<TabItem value="databases_update_region">

To migrate a database cluster to a new region, send a `PUT` request to<br />`/v2/databases/$DATABASE_ID/migrate`. The body of the request must specify a<br />`region` attribute.<br /><br />A successful request will receive a 202 Accepted status code with no body in<br />response. Querying the database cluster will show that its `status` attribute<br />will now be set to `migrating`. This will transition back to `online` when the<br />migration has completed.<br />

```sql
EXEC digitalocean.databases.clusters.databases_update_region 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required 
@@json=
'{
"region": "{{ region }}"
}';
```
</TabItem>
<TabItem value="databases_update_cluster_size">

To resize a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/resize`. The body of the request must specify both the size and num_nodes attributes.<br />A successful request will receive a 202 Accepted status code with no body in response. Querying the database cluster will show that its status attribute will now be set to resizing. This will transition back to online when the resize operation has completed.

```sql
EXEC digitalocean.databases.clusters.databases_update_cluster_size 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required 
@@json=
'{
"size": "{{ size }}", 
"num_nodes": {{ num_nodes }}, 
"storage_size_mib": {{ storage_size_mib }}
}';
```
</TabItem>
<TabItem value="databases_update_maintenance_window">

To configure the window when automatic maintenance should be performed for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/maintenance`.<br />A successful request will receive a 204 No Content status code with no body in response.

```sql
EXEC digitalocean.databases.clusters.databases_update_maintenance_window 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required 
@@json=
'{
"day": "{{ day }}", 
"hour": "{{ hour }}"
}';
```
</TabItem>
<TabItem value="databases_install_update">

To start the installation of updates for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/install_update`.<br />A successful request will receive a 204 No Content status code with no body in response.

```sql
EXEC digitalocean.databases.clusters.databases_install_update 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required;
```
</TabItem>
<TabItem value="databases_update_major_version">

To upgrade the major version of a database, send a PUT request to `/v2/databases/$DATABASE_ID/upgrade`, specifying the target version.<br />A successful request will receive a 204 No Content status code with no body in response.

```sql
EXEC digitalocean.databases.clusters.databases_update_major_version 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required 
@@json=
'{
"version": "{{ version }}"
}';
```
</TabItem>
</Tabs>
