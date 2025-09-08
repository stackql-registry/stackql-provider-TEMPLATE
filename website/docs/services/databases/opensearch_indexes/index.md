--- 
title: opensearch_indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - opensearch_indexes
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

Creates, updates, deletes, gets or lists an <code>opensearch_indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>opensearch_indexes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.opensearch_indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_list_opensearch_indexes"
    values={[
        { label: 'databases_list_opensearch_indexes', value: 'databases_list_opensearch_indexes' }
    ]}
>
<TabItem value="databases_list_opensearch_indexes">

A JSON object with a key of `indexes`.

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
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The name of the opensearch index. (example: events)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the index was created. (example: 2021-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>The health of the OpenSearch index. (example: green)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_replicas" /></td>
    <td><code>integer</code></td>
    <td>The number of replicas for the index.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_shards" /></td>
    <td><code>integer</code></td>
    <td>The number of shards for the index.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the index.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the OpenSearch index. (example: open)</td>
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
    <td><a href="#databases_list_opensearch_indexes"><CopyableCode code="databases_list_opensearch_indexes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list all of a OpenSearch cluster's indexes, send a GET request to<br />`/v2/databases/$DATABASE_ID/indexes`.<br /><br />The result will be a JSON object with a `indexes` key.<br /></td>
</tr>
<tr>
    <td><a href="#databases_delete_opensearch_index"><CopyableCode code="databases_delete_opensearch_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-index_name"><code>index_name</code></a></td>
    <td></td>
    <td>To delete a single index within OpenSearch cluster, send a DELETE request<br />to `/v2/databases/$DATABASE_ID/indexes/$INDEX_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was<br />processed successfully, but that no response body is needed.<br /></td>
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
<tr id="parameter-index_name">
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OpenSearch index. (example: logs-*)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_list_opensearch_indexes"
    values={[
        { label: 'databases_list_opensearch_indexes', value: 'databases_list_opensearch_indexes' }
    ]}
>
<TabItem value="databases_list_opensearch_indexes">

To list all of a OpenSearch cluster's indexes, send a GET request to<br />`/v2/databases/$DATABASE_ID/indexes`.<br /><br />The result will be a JSON object with a `indexes` key.<br />

```sql
SELECT
index_name,
created_time,
health,
number_of_replicas,
number_of_shards,
size,
status
FROM digitalocean.databases.opensearch_indexes
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_delete_opensearch_index"
    values={[
        { label: 'databases_delete_opensearch_index', value: 'databases_delete_opensearch_index' }
    ]}
>
<TabItem value="databases_delete_opensearch_index">

To delete a single index within OpenSearch cluster, send a DELETE request<br />to `/v2/databases/$DATABASE_ID/indexes/$INDEX_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was<br />processed successfully, but that no response body is needed.<br />

```sql
DELETE FROM digitalocean.databases.opensearch_indexes
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND index_name = '{{ index_name }}' --required;
```
</TabItem>
</Tabs>
