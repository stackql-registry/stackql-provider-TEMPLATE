--- 
title: kafka_schema_subject_config
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_schema_subject_config
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

Creates, updates, deletes, gets or lists a <code>kafka_schema_subject_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>kafka_schema_subject_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.kafka_schema_subject_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_kafka_schema_subject_config"
    values={[
        { label: 'databases_get_kafka_schema_subject_config', value: 'databases_get_kafka_schema_subject_config' }
    ]}
>
<TabItem value="databases_get_kafka_schema_subject_config">

A JSON object with a key of `compatibility_level`.

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
    <td><CopyableCode code="subject_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema subject.</td>
</tr>
<tr>
    <td><CopyableCode code="compatibility_level" /></td>
    <td><code>string</code></td>
    <td>The compatibility level of the schema registry.</td>
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
    <td><a href="#databases_get_kafka_schema_subject_config"><CopyableCode code="databases_get_kafka_schema_subject_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-subject_name"><code>subject_name</code></a></td>
    <td></td>
    <td>To retrieve the Schema Registry configuration for a Subject of a Kafka cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`.<br />The response is a JSON object with a `compatibility_level` key, which is set to an object<br />containing any database configuration parameters.<br /></td>
</tr>
<tr>
    <td><a href="#databases_update_kafka_schema_subject_config"><CopyableCode code="databases_update_kafka_schema_subject_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-subject_name"><code>subject_name</code></a>, <a href="#parameter-data__compatibility_level"><code>data__compatibility_level</code></a></td>
    <td></td>
    <td>To update the Schema Registry configuration for a Subject of a Kafka cluster, send a PUT request to<br />`/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`.<br />The response is a JSON object with a `compatibility_level` key, which is set to an object<br />containing any database configuration parameters.<br /></td>
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
<tr id="parameter-subject_name">
    <td><CopyableCode code="subject_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Kafka schema subject. (example: customer-schema)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_kafka_schema_subject_config"
    values={[
        { label: 'databases_get_kafka_schema_subject_config', value: 'databases_get_kafka_schema_subject_config' }
    ]}
>
<TabItem value="databases_get_kafka_schema_subject_config">

To retrieve the Schema Registry configuration for a Subject of a Kafka cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`.<br />The response is a JSON object with a `compatibility_level` key, which is set to an object<br />containing any database configuration parameters.<br />

```sql
SELECT
subject_name,
compatibility_level
FROM digitalocean.databases.kafka_schema_subject_config
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND subject_name = '{{ subject_name }}' -- required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_kafka_schema_subject_config"
    values={[
        { label: 'databases_update_kafka_schema_subject_config', value: 'databases_update_kafka_schema_subject_config' }
    ]}
>
<TabItem value="databases_update_kafka_schema_subject_config">

To update the Schema Registry configuration for a Subject of a Kafka cluster, send a PUT request to<br />`/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`.<br />The response is a JSON object with a `compatibility_level` key, which is set to an object<br />containing any database configuration parameters.<br />

```sql
REPLACE digitalocean.databases.kafka_schema_subject_config
SET 
data__compatibility_level = '{{ compatibility_level }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND subject_name = '{{ subject_name }}' --required
AND data__compatibility_level = '{{ compatibility_level }}' --required
RETURNING
subject_name,
compatibility_level;
```
</TabItem>
</Tabs>
