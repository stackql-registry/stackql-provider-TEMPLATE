--- 
title: autoscale_config
hide_title: false
hide_table_of_contents: false
keywords:
  - autoscale_config
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

Creates, updates, deletes, gets or lists an <code>autoscale_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>autoscale_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.autoscale_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_autoscale"
    values={[
        { label: 'databases_get_autoscale', value: 'databases_get_autoscale' }
    ]}
>
<TabItem value="databases_get_autoscale">

A JSON object with autoscale configuration details.

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
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Configuration for database cluster storage autoscaling</td>
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
    <td><a href="#databases_get_autoscale"><CopyableCode code="databases_get_autoscale" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To retrieve the autoscale configuration for an existing database cluster, send a GET request to `/v2/databases/$DATABASE_ID/autoscale`.<br />The response will be a JSON object with autoscaling configuration details.</td>
</tr>
<tr>
    <td><a href="#databases_update_autoscale"><CopyableCode code="databases_update_autoscale" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To configure autoscale settings for an existing database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/autoscale`, specifying the autoscale configuration.<br />A successful request will receive a 204 No Content status code with no body in response.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_autoscale"
    values={[
        { label: 'databases_get_autoscale', value: 'databases_get_autoscale' }
    ]}
>
<TabItem value="databases_get_autoscale">

To retrieve the autoscale configuration for an existing database cluster, send a GET request to `/v2/databases/$DATABASE_ID/autoscale`.<br />The response will be a JSON object with autoscaling configuration details.

```sql
SELECT
storage
FROM digitalocean.databases.autoscale_config
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_autoscale"
    values={[
        { label: 'databases_update_autoscale', value: 'databases_update_autoscale' }
    ]}
>
<TabItem value="databases_update_autoscale">

To configure autoscale settings for an existing database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/autoscale`, specifying the autoscale configuration.<br />A successful request will receive a 204 No Content status code with no body in response.

```sql
REPLACE digitalocean.databases.autoscale_config
SET 
data__storage = '{{ storage }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required;
```
</TabItem>
</Tabs>
