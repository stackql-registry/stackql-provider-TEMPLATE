--- 
title: kafka_topics
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_topics
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

Creates, updates, deletes, gets or lists a <code>kafka_topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>kafka_topics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.kafka_topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_kafka_topic"
    values={[
        { label: 'databases_get_kafka_topic', value: 'databases_get_kafka_topic' },
        { label: 'databases_list_kafka_topics', value: 'databases_list_kafka_topics' }
    ]}
>
<TabItem value="databases_get_kafka_topic">

A JSON object with a key of `topic`.

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
    <td>The name of the Kafka topic. (example: events)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="replication_factor" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes to replicate data across the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Kafka topic. (example: active)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="databases_list_kafka_topics">

A JSON object with a key of `topics`.

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
    <td>The name of the Kafka topic. (example: events)</td>
</tr>
<tr>
    <td><CopyableCode code="partition_count" /></td>
    <td><code>integer</code></td>
    <td>The number of partitions available for the topic. On update, this value can only be increased.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_factor" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes to replicate data across the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Kafka topic. (example: active)</td>
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
    <td><a href="#databases_get_kafka_topic"><CopyableCode code="databases_get_kafka_topic" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a></td>
    <td></td>
    <td>To retrieve a given topic by name from the set of a Kafka cluster's topics,<br />send a GET request to `/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.<br /><br />The result will be a JSON object with a `topic` key.<br /></td>
</tr>
<tr>
    <td><a href="#databases_list_kafka_topics"><CopyableCode code="databases_list_kafka_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list all of a Kafka cluster's topics, send a GET request to<br />`/v2/databases/$DATABASE_ID/topics`.<br /><br />The result will be a JSON object with a `topics` key.<br /></td>
</tr>
<tr>
    <td><a href="#databases_create_kafka_topic"><CopyableCode code="databases_create_kafka_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To create a topic attached to a Kafka cluster, send a POST request to<br />`/v2/databases/$DATABASE_ID/topics`.<br /><br />The result will be a JSON object with a `topic` key.<br /></td>
</tr>
<tr>
    <td><a href="#databases_update_kafka_topic"><CopyableCode code="databases_update_kafka_topic" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a></td>
    <td></td>
    <td>To update a topic attached to a Kafka cluster, send a PUT request to<br />`/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.<br /><br />The result will be a JSON object with a `topic` key.<br /></td>
</tr>
<tr>
    <td><a href="#databases_delete_kafka_topic"><CopyableCode code="databases_delete_kafka_topic" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a></td>
    <td></td>
    <td>To delete a single topic within a Kafka cluster, send a DELETE request<br />to `/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was<br />processed successfully, but that no response body is needed.<br /></td>
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
<tr id="parameter-topic_name">
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td>The name used to identify the Kafka topic. (example: customer-events)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_kafka_topic"
    values={[
        { label: 'databases_get_kafka_topic', value: 'databases_get_kafka_topic' },
        { label: 'databases_list_kafka_topics', value: 'databases_list_kafka_topics' }
    ]}
>
<TabItem value="databases_get_kafka_topic">

To retrieve a given topic by name from the set of a Kafka cluster's topics,<br />send a GET request to `/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.<br /><br />The result will be a JSON object with a `topic` key.<br />

```sql
SELECT
name,
config,
partitions,
replication_factor,
state
FROM digitalocean.databases.kafka_topics
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND topic_name = '{{ topic_name }}' -- required;
```
</TabItem>
<TabItem value="databases_list_kafka_topics">

To list all of a Kafka cluster's topics, send a GET request to<br />`/v2/databases/$DATABASE_ID/topics`.<br /><br />The result will be a JSON object with a `topics` key.<br />

```sql
SELECT
name,
partition_count,
replication_factor,
state
FROM digitalocean.databases.kafka_topics
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="databases_create_kafka_topic"
    values={[
        { label: 'databases_create_kafka_topic', value: 'databases_create_kafka_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="databases_create_kafka_topic">

To create a topic attached to a Kafka cluster, send a POST request to<br />`/v2/databases/$DATABASE_ID/topics`.<br /><br />The result will be a JSON object with a `topic` key.<br />

```sql
INSERT INTO digitalocean.databases.kafka_topics (
data__name,
data__replication_factor,
data__partition_count,
data__config,
database_cluster_uuid
)
SELECT 
'{{ name }}' --required,
{{ replication_factor }},
{{ partition_count }},
'{{ config }}',
'{{ database_cluster_uuid }}'
RETURNING
topic
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: kafka_topics
  props:
    - name: database_cluster_uuid
      value: string (uuid)
      description: Required parameter for the kafka_topics resource.
    - name: name
      value: string
      description: >
        The name of the Kafka topic.
        
    - name: replication_factor
      value: integer
      description: >
        The number of nodes to replicate data across the cluster.
        
    - name: partition_count
      value: integer
      description: >
        The number of partitions available for the topic. On update, this value can only be increased.
        
    - name: config
      value: object
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_kafka_topic"
    values={[
        { label: 'databases_update_kafka_topic', value: 'databases_update_kafka_topic' }
    ]}
>
<TabItem value="databases_update_kafka_topic">

To update a topic attached to a Kafka cluster, send a PUT request to<br />`/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.<br /><br />The result will be a JSON object with a `topic` key.<br />

```sql
REPLACE digitalocean.databases.kafka_topics
SET 
data__replication_factor = {{ replication_factor }},
data__partition_count = {{ partition_count }},
data__config = '{{ config }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND topic_name = '{{ topic_name }}' --required
RETURNING
topic;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_delete_kafka_topic"
    values={[
        { label: 'databases_delete_kafka_topic', value: 'databases_delete_kafka_topic' }
    ]}
>
<TabItem value="databases_delete_kafka_topic">

To delete a single topic within a Kafka cluster, send a DELETE request<br />to `/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.<br /><br />A status of 204 will be given. This indicates that the request was<br />processed successfully, but that no response body is needed.<br />

```sql
DELETE FROM digitalocean.databases.kafka_topics
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND topic_name = '{{ topic_name }}' --required;
```
</TabItem>
</Tabs>
