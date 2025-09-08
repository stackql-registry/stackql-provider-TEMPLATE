--- 
title: kafka_schema_version
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_schema_version
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

Creates, updates, deletes, gets or lists a <code>kafka_schema_version</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>kafka_schema_version</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.kafka_schema_version" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_kafka_schema_version"
    values={[
        { label: 'databases_get_kafka_schema_version', value: 'databases_get_kafka_schema_version' }
    ]}
>
<TabItem value="databases_get_kafka_schema_version">

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
    <td><CopyableCode code="schema_id" /></td>
    <td><code>integer</code></td>
    <td>The id for schema.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema subject. (example: customer-schema)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The schema definition in the specified format. (example: &#123;<br />  "type": "record",<br />  "name": "Customer",<br />  "fields": [  <br />    &#123;"name": "id", "type": "int"&#125;,<br />    &#123;"name": "name", "type": "string"&#125;<br />  ]<br />&#125; )</td>
</tr>
<tr>
    <td><CopyableCode code="schema_type" /></td>
    <td><code>string</code></td>
    <td>The type of the schema. (example: AVRO)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the schema. (example: 1)</td>
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
    <td><a href="#databases_get_kafka_schema_version"><CopyableCode code="databases_get_kafka_schema_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-subject_name"><code>subject_name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>To get a specific schema by subject name for a Kafka cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/schema-registry/$SUBJECT_NAME/versions/$VERSION`.<br /></td>
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
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the Kafka schema subject. (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_kafka_schema_version"
    values={[
        { label: 'databases_get_kafka_schema_version', value: 'databases_get_kafka_schema_version' }
    ]}
>
<TabItem value="databases_get_kafka_schema_version">

To get a specific schema by subject name for a Kafka cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/schema-registry/$SUBJECT_NAME/versions/$VERSION`.<br />

```sql
SELECT
schema_id,
subject_name,
schema,
schema_type,
version
FROM digitalocean.databases.kafka_schema_version
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND subject_name = '{{ subject_name }}' -- required
AND version = '{{ version }}' -- required;
```
</TabItem>
</Tabs>
