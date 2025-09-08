--- 
title: log_sinks
hide_title: false
hide_table_of_contents: false
keywords:
  - log_sinks
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

Creates, updates, deletes, gets or lists a <code>log_sinks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>log_sinks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.log_sinks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_logsink"
    values={[
        { label: 'databases_get_logsink', value: 'databases_get_logsink' },
        { label: 'databases_list_logsink', value: 'databases_list_logsink' }
    ]}
>
<TabItem value="databases_get_logsink">

A JSON object with a key of `sink`.

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
    <td><CopyableCode code="sink" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="databases_list_logsink">

A JSON object with a key of `sinks`.

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
    <td><CopyableCode code="sink_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for Logsink (example: dfcc9f57d86bf58e321c2c6c31c7a971be244ac7)</td>
</tr>
<tr>
    <td><CopyableCode code="sink_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Logsink (example: prod-logsink)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sink_type" /></td>
    <td><code>string</code></td>
    <td> (example: rsyslog)</td>
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
    <td><a href="#databases_get_logsink"><CopyableCode code="databases_get_logsink" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-logsink_id"><code>logsink_id</code></a></td>
    <td></td>
    <td>To get a logsink for a database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/logsink/$LOGSINK_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#databases_list_logsink"><CopyableCode code="databases_list_logsink" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list logsinks for a database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/logsink`.<br /></td>
</tr>
<tr>
    <td><a href="#databases_create_logsink"><CopyableCode code="databases_create_logsink" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__sink_name"><code>data__sink_name</code></a>, <a href="#parameter-data__sink_type"><code>data__sink_type</code></a>, <a href="#parameter-data__config"><code>data__config</code></a></td>
    <td></td>
    <td>To create logsink for a database cluster, send a POST request to<br />`/v2/databases/$DATABASE_ID/logsink`.<br /></td>
</tr>
<tr>
    <td><a href="#databases_update_logsink"><CopyableCode code="databases_update_logsink" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-logsink_id"><code>logsink_id</code></a>, <a href="#parameter-data__config"><code>data__config</code></a></td>
    <td></td>
    <td>To update a logsink for a database cluster, send a PUT request to<br />`/v2/databases/$DATABASE_ID/logsink/$LOGSINK_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#databases_delete_logsink"><CopyableCode code="databases_delete_logsink" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-logsink_id"><code>logsink_id</code></a></td>
    <td></td>
    <td>To delete a logsink for a database cluster, send a DELETE request to<br />`/v2/databases/$DATABASE_ID/logsink/$LOGSINK_ID`.<br /></td>
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
<tr id="parameter-logsink_id">
    <td><CopyableCode code="logsink_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a logsink of a database cluster (example: 50484ec3-19d6-4cd3-b56f-3b0381c289a6)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_logsink"
    values={[
        { label: 'databases_get_logsink', value: 'databases_get_logsink' },
        { label: 'databases_list_logsink', value: 'databases_list_logsink' }
    ]}
>
<TabItem value="databases_get_logsink">

To get a logsink for a database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/logsink/$LOGSINK_ID`.<br />

```sql
SELECT
sink
FROM digitalocean.databases.log_sinks
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND logsink_id = '{{ logsink_id }}' -- required;
```
</TabItem>
<TabItem value="databases_list_logsink">

To list logsinks for a database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/logsink`.<br />

```sql
SELECT
sink_id,
sink_name,
config,
sink_type
FROM digitalocean.databases.log_sinks
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="databases_create_logsink"
    values={[
        { label: 'databases_create_logsink', value: 'databases_create_logsink' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="databases_create_logsink">

To create logsink for a database cluster, send a POST request to<br />`/v2/databases/$DATABASE_ID/logsink`.<br />

```sql
INSERT INTO digitalocean.databases.log_sinks (
data__sink_name,
data__sink_type,
data__config,
database_cluster_uuid
)
SELECT 
'{{ sink_name }}' --required,
'{{ sink_type }}' --required,
'{{ config }}' --required,
'{{ database_cluster_uuid }}'
RETURNING
sink
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: log_sinks
  props:
    - name: database_cluster_uuid
      value: string (uuid)
      description: Required parameter for the log_sinks resource.
    - name: sink_name
      value: string
      description: >
        The name of the Logsink
        
    - name: sink_type
      value: string
      description: >
        Type of logsink integration.

- Use `datadog` for Datadog integration **only with MongoDB clusters**.
- For non-MongoDB clusters, use `rsyslog` for general syslog forwarding.
- Other supported types include `elasticsearch` and `opensearch`.

More details about the configuration can be found in the `config` property.

      valid_values: ['rsyslog', 'elasticsearch', 'opensearch', 'datadog']
    - name: config
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_logsink"
    values={[
        { label: 'databases_update_logsink', value: 'databases_update_logsink' }
    ]}
>
<TabItem value="databases_update_logsink">

To update a logsink for a database cluster, send a PUT request to<br />`/v2/databases/$DATABASE_ID/logsink/$LOGSINK_ID`.<br />

```sql
REPLACE digitalocean.databases.log_sinks
SET 
data__config = '{{ config }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND logsink_id = '{{ logsink_id }}' --required
AND data__config = '{{ config }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_delete_logsink"
    values={[
        { label: 'databases_delete_logsink', value: 'databases_delete_logsink' }
    ]}
>
<TabItem value="databases_delete_logsink">

To delete a logsink for a database cluster, send a DELETE request to<br />`/v2/databases/$DATABASE_ID/logsink/$LOGSINK_ID`.<br />

```sql
DELETE FROM digitalocean.databases.log_sinks
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND logsink_id = '{{ logsink_id }}' --required;
```
</TabItem>
</Tabs>
