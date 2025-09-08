--- 
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
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

Creates, updates, deletes, gets or lists a <code>destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_destination"
    values={[
        { label: 'monitoring_get_destination', value: 'monitoring_get_destination' },
        { label: 'monitoring_list_destinations', value: 'monitoring_list_destinations' }
    ]}
>
<TabItem value="monitoring_get_destination">

The response is a JSON object with a `destination` key.

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
    <td><code>string</code></td>
    <td>A unique identifier for a destination. (example: 01f30bfa-319a-4769-ba95-9d43971fb514)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>destination name (example: managed_opensearch_cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>OpenSearch destination configuration with `credentials` omitted.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  (example: opensearch_dbaas)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="monitoring_list_destinations">

The response is a JSON object with a `destinations` key.

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
    <td><code>string</code></td>
    <td>A unique identifier for a destination. (example: 01f30bfa-319a-4769-ba95-9d43971fb514)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>destination name (example: managed_opensearch_cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>OpenSearch destination configuration with `credentials` omitted.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  (example: opensearch_dbaas)</td>
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
    <td><a href="#monitoring_get_destination"><CopyableCode code="monitoring_get_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-destination_uuid"><code>destination_uuid</code></a></td>
    <td></td>
    <td>To get the details of a destination, send a GET request to `/v2/monitoring/sinks/destinations/$&#123;destination_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#monitoring_list_destinations"><CopyableCode code="monitoring_list_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all logging destinations, send a GET request to `/v2/monitoring/sinks/destinations`.</td>
</tr>
<tr>
    <td><a href="#monitoring_update_destination"><CopyableCode code="monitoring_update_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-destination_uuid"><code>destination_uuid</code></a>, <a href="#parameter-data__config"><code>data__config</code></a>, <a href="#parameter-data__type"><code>data__type</code></a></td>
    <td></td>
    <td>To update the details of a destination, send a PATCH request to `/v2/monitoring/sinks/destinations/$&#123;destination_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#monitoring_create_destination"><CopyableCode code="monitoring_create_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__config"><code>data__config</code></a>, <a href="#parameter-data__type"><code>data__type</code></a></td>
    <td></td>
    <td>To create a new destination, send a POST request to `/v2/monitoring/sinks/destinations`.</td>
</tr>
<tr>
    <td><a href="#monitoring_delete_destination"><CopyableCode code="monitoring_delete_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-destination_uuid"><code>destination_uuid</code></a></td>
    <td></td>
    <td>To delete a destination and all associated sinks, send a DELETE request to `/v2/monitoring/sinks/destinations/$&#123;destination_uuid&#125;`.</td>
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
<tr id="parameter-destination_uuid">
    <td><CopyableCode code="destination_uuid" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a destination. (example: 1a64809f-1708-48ee-a742-dec8d481b8d1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="monitoring_get_destination"
    values={[
        { label: 'monitoring_get_destination', value: 'monitoring_get_destination' },
        { label: 'monitoring_list_destinations', value: 'monitoring_list_destinations' }
    ]}
>
<TabItem value="monitoring_get_destination">

To get the details of a destination, send a GET request to `/v2/monitoring/sinks/destinations/$&#123;destination_uuid&#125;`.

```sql
SELECT
id,
name,
config,
type
FROM digitalocean.monitoring.destinations
WHERE destination_uuid = '{{ destination_uuid }}' -- required;
```
</TabItem>
<TabItem value="monitoring_list_destinations">

To list all logging destinations, send a GET request to `/v2/monitoring/sinks/destinations`.

```sql
SELECT
id,
name,
config,
type
FROM digitalocean.monitoring.destinations;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="monitoring_update_destination"
    values={[
        { label: 'monitoring_update_destination', value: 'monitoring_update_destination' },
        { label: 'monitoring_create_destination', value: 'monitoring_create_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="monitoring_update_destination">

To update the details of a destination, send a PATCH request to `/v2/monitoring/sinks/destinations/$&#123;destination_uuid&#125;`.

```sql
INSERT INTO digitalocean.monitoring.destinations (
data__name,
data__type,
data__config,
destination_uuid
)
SELECT 
'{{ name }}',
'{{ type }}' --required,
'{{ config }}' --required,
'{{ destination_uuid }}'
;
```
</TabItem>
<TabItem value="monitoring_create_destination">

To create a new destination, send a POST request to `/v2/monitoring/sinks/destinations`.

```sql
INSERT INTO digitalocean.monitoring.destinations (
data__name,
data__type,
data__config
)
SELECT 
'{{ name }}',
'{{ type }}' --required,
'{{ config }}' --required
RETURNING
destination
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: destinations
  props:
    - name: destination_uuid
      value: string
      description: Required parameter for the destinations resource.
    - name: name
      value: string
      description: >
        destination name
        
    - name: type
      value: string
      description: >
        The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch
cluster or `opensearch_ext` for an externally managed one.

      valid_values: ['opensearch_dbaas', 'opensearch_ext']
    - name: config
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="monitoring_delete_destination"
    values={[
        { label: 'monitoring_delete_destination', value: 'monitoring_delete_destination' }
    ]}
>
<TabItem value="monitoring_delete_destination">

To delete a destination and all associated sinks, send a DELETE request to `/v2/monitoring/sinks/destinations/$&#123;destination_uuid&#125;`.

```sql
DELETE FROM digitalocean.monitoring.destinations
WHERE destination_uuid = '{{ destination_uuid }}' --required;
```
</TabItem>
</Tabs>
