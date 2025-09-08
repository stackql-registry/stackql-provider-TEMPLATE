--- 
title: dbs
hide_title: false
hide_table_of_contents: false
keywords:
  - dbs
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

Creates, updates, deletes, gets or lists a <code>dbs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dbs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.dbs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get"
    values={[
        { label: 'databases_get', value: 'databases_get' },
        { label: 'databases_list', value: 'databases_list' }
    ]}
>
<TabItem value="databases_get">

A JSON object with a key of `db`.

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
    <td>The name of the database. (example: alpha)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="databases_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the database. (example: alpha)</td>
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
    <td><a href="#databases_get"><CopyableCode code="databases_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-database_name"><code>database_name</code></a></td>
    <td></td>
    <td>To show information about an existing database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a `db` key. This will be set to an object<br />containing the standard database attributes.<br /></td>
</tr>
<tr>
    <td><a href="#databases_list"><CopyableCode code="databases_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list all of the databases in a clusters, send a GET request to<br />`/v2/databases/$DATABASE_ID/dbs`.<br /><br />The result will be a JSON object with a `dbs` key. This will be set to an array<br />of database objects, each of which will contain the standard database attributes.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br /></td>
</tr>
<tr>
    <td><a href="#databases_add"><CopyableCode code="databases_add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To add a new database to an existing cluster, send a POST request to<br />`/v2/databases/$DATABASE_ID/dbs`.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a key called `db`. The value of this will be<br />an object that contains the standard attributes associated with a database.<br /></td>
</tr>
<tr>
    <td><a href="#databases_delete"><CopyableCode code="databases_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-database_name"><code>database_name</code></a></td>
    <td></td>
    <td>To delete a specific database, send a DELETE request to<br />`/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br /></td>
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
<tr id="parameter-database_name">
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database. (example: alpha)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get"
    values={[
        { label: 'databases_get', value: 'databases_get' },
        { label: 'databases_list', value: 'databases_list' }
    ]}
>
<TabItem value="databases_get">

To show information about an existing database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a `db` key. This will be set to an object<br />containing the standard database attributes.<br />

```sql
SELECT
name
FROM digitalocean.databases.dbs
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND database_name = '{{ database_name }}' -- required;
```
</TabItem>
<TabItem value="databases_list">

To list all of the databases in a clusters, send a GET request to<br />`/v2/databases/$DATABASE_ID/dbs`.<br /><br />The result will be a JSON object with a `dbs` key. This will be set to an array<br />of database objects, each of which will contain the standard database attributes.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br />

```sql
SELECT
name
FROM digitalocean.databases.dbs
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="databases_add"
    values={[
        { label: 'databases_add', value: 'databases_add' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="databases_add">

To add a new database to an existing cluster, send a POST request to<br />`/v2/databases/$DATABASE_ID/dbs`.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a key called `db`. The value of this will be<br />an object that contains the standard attributes associated with a database.<br />

```sql
INSERT INTO digitalocean.databases.dbs (
data__name,
database_cluster_uuid
)
SELECT 
'{{ name }}' --required,
'{{ database_cluster_uuid }}'
RETURNING
db
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: dbs
  props:
    - name: database_cluster_uuid
      value: string (uuid)
      description: Required parameter for the dbs resource.
    - name: name
      value: string
      description: >
        The name of the database.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_delete"
    values={[
        { label: 'databases_delete', value: 'databases_delete' }
    ]}
>
<TabItem value="databases_delete">

To delete a specific database, send a DELETE request to<br />`/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /><br />Note: Database management is not supported for Caching or Valkey clusters.<br />

```sql
DELETE FROM digitalocean.databases.dbs
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND database_name = '{{ database_name }}' --required;
```
</TabItem>
</Tabs>
