--- 
title: sinks
hide_title: false
hide_table_of_contents: false
keywords:
  - sinks
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>sinks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sinks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.sinks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_sink"
    values={[
        { label: 'monitoring_get_sink', value: 'monitoring_get_sink' },
        { label: 'monitoring_list_sinks', value: 'monitoring_list_sinks' }
    ]}
>
<TabItem value="monitoring_get_sink">

The response is a JSON object with a `sink` key.

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
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>List of resources identified by their URNs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="monitoring_list_sinks">

The response is a JSON object with a `sinks` key.

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
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>List of resources identified by their URNs.</td>
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
    <td><a href="#monitoring_get_sink"><CopyableCode code="monitoring_get_sink" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sink_uuid"><code>sink_uuid</code></a></td>
    <td></td>
    <td>To get the details of a sink (resources and destination), send a GET request to `/v2/monitoring/sinks/$&#123;sink_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#monitoring_list_sinks"><CopyableCode code="monitoring_list_sinks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td>To list all sinks, send a GET request to `/v2/monitoring/sinks`.</td>
</tr>
<tr>
    <td><a href="#monitoring_create_sink"><CopyableCode code="monitoring_create_sink" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new sink, send a POST request to `/v2/monitoring/sinks`. Forwards logs from the <br />resources identified in `resources` to the specified pre-existing destination.<br /></td>
</tr>
<tr>
    <td><a href="#monitoring_delete_sink"><CopyableCode code="monitoring_delete_sink" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sink_uuid"><code>sink_uuid</code></a></td>
    <td></td>
    <td>To delete a sink, send a DELETE request to `/v2/monitoring/sinks/$&#123;sink_uuid&#125;`.</td>
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
<tr id="parameter-sink_uuid">
    <td><CopyableCode code="sink_uuid" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a sink. (example: 78b172b6-52c3-4a4b-96d5-78d3f1a0b18c)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>A unique URN for a resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="monitoring_get_sink"
    values={[
        { label: 'monitoring_get_sink', value: 'monitoring_get_sink' },
        { label: 'monitoring_list_sinks', value: 'monitoring_list_sinks' }
    ]}
>
<TabItem value="monitoring_get_sink">

To get the details of a sink (resources and destination), send a GET request to `/v2/monitoring/sinks/$&#123;sink_uuid&#125;`.

```sql
SELECT
destination,
resources
FROM digitalocean.monitoring.sinks
WHERE sink_uuid = '{{ sink_uuid }}' -- required;
```
</TabItem>
<TabItem value="monitoring_list_sinks">

To list all sinks, send a GET request to `/v2/monitoring/sinks`.

```sql
SELECT
destination,
resources
FROM digitalocean.monitoring.sinks
WHERE resource_id = '{{ resource_id }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="monitoring_create_sink"
    values={[
        { label: 'monitoring_create_sink', value: 'monitoring_create_sink' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="monitoring_create_sink">

To create a new sink, send a POST request to `/v2/monitoring/sinks`. Forwards logs from the <br />resources identified in `resources` to the specified pre-existing destination.<br />

```sql
INSERT INTO digitalocean.monitoring.sinks (
data__destination_uuid,
data__resources
)
SELECT 
'{{ destination_uuid }}',
'{{ resources }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sinks
  props:
    - name: destination_uuid
      value: string
      description: >
        A unique identifier for an already-existing destination.
        
    - name: resources
      value: array
      description: >
        List of resources identified by their URNs.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="monitoring_delete_sink"
    values={[
        { label: 'monitoring_delete_sink', value: 'monitoring_delete_sink' }
    ]}
>
<TabItem value="monitoring_delete_sink">

To delete a sink, send a DELETE request to `/v2/monitoring/sinks/$&#123;sink_uuid&#125;`.

```sql
DELETE FROM digitalocean.monitoring.sinks
WHERE sink_uuid = '{{ sink_uuid }}' --required;
```
</TabItem>
</Tabs>
