--- 
title: alert_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_policies
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

Creates, updates, deletes, gets or lists an <code>alert_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>alert_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.alert_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_alert_policy"
    values={[
        { label: 'monitoring_get_alert_policy', value: 'monitoring_get_alert_policy' },
        { label: 'monitoring_list_alert_policy', value: 'monitoring_list_alert_policy' }
    ]}
>
<TabItem value="monitoring_get_alert_policy">

An alert policy.

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
    <td><CopyableCode code="alerts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="compare" /></td>
    <td><code>string</code></td>
    <td> (example: GreaterThan)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: CPU Alert)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: v1/insights/droplet/cpu)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td> (example: 78b3da62-27e5-49ba-ac70-5db0b5935c64)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="window" /></td>
    <td><code>string</code></td>
    <td> (example: 5m)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="monitoring_list_alert_policy">

A list of alert policies.

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
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Information about the response itself.</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#monitoring_get_alert_policy"><CopyableCode code="monitoring_get_alert_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-alert_uuid"><code>alert_uuid</code></a></td>
    <td></td>
    <td>To retrieve a given alert policy, send a GET request to `/v2/monitoring/alerts/&#123;alert_uuid&#125;`</td>
</tr>
<tr>
    <td><a href="#monitoring_list_alert_policy"><CopyableCode code="monitoring_list_alert_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Returns all alert policies that are configured for the given account. To List all alert policies, send a GET request to `/v2/monitoring/alerts`.</td>
</tr>
<tr>
    <td><a href="#monitoring_create_alert_policy"><CopyableCode code="monitoring_create_alert_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__type"><code>data__type</code></a>, <a href="#parameter-data__description"><code>data__description</code></a>, <a href="#parameter-data__compare"><code>data__compare</code></a>, <a href="#parameter-data__value"><code>data__value</code></a>, <a href="#parameter-data__window"><code>data__window</code></a>, <a href="#parameter-data__entities"><code>data__entities</code></a>, <a href="#parameter-data__tags"><code>data__tags</code></a>, <a href="#parameter-data__alerts"><code>data__alerts</code></a>, <a href="#parameter-data__enabled"><code>data__enabled</code></a></td>
    <td></td>
    <td>To create a new alert, send a POST request to `/v2/monitoring/alerts`.</td>
</tr>
<tr>
    <td><a href="#monitoring_update_alert_policy"><CopyableCode code="monitoring_update_alert_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-alert_uuid"><code>alert_uuid</code></a>, <a href="#parameter-data__type"><code>data__type</code></a>, <a href="#parameter-data__description"><code>data__description</code></a>, <a href="#parameter-data__compare"><code>data__compare</code></a>, <a href="#parameter-data__value"><code>data__value</code></a>, <a href="#parameter-data__window"><code>data__window</code></a>, <a href="#parameter-data__entities"><code>data__entities</code></a>, <a href="#parameter-data__tags"><code>data__tags</code></a>, <a href="#parameter-data__alerts"><code>data__alerts</code></a>, <a href="#parameter-data__enabled"><code>data__enabled</code></a></td>
    <td></td>
    <td>To update en existing policy, send a PUT request to `v2/monitoring/alerts/&#123;alert_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#monitoring_delete_alert_policy"><CopyableCode code="monitoring_delete_alert_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alert_uuid"><code>alert_uuid</code></a></td>
    <td></td>
    <td>To delete an alert policy, send a DELETE request to `/v2/monitoring/alerts/&#123;alert_uuid&#125;`</td>
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
<tr id="parameter-alert_uuid">
    <td><CopyableCode code="alert_uuid" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for an alert policy. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Which 'page' of paginated results to return. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of items returned per page (example: 2)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="monitoring_get_alert_policy"
    values={[
        { label: 'monitoring_get_alert_policy', value: 'monitoring_get_alert_policy' },
        { label: 'monitoring_list_alert_policy', value: 'monitoring_list_alert_policy' }
    ]}
>
<TabItem value="monitoring_get_alert_policy">

To retrieve a given alert policy, send a GET request to `/v2/monitoring/alerts/&#123;alert_uuid&#125;`

```sql
SELECT
alerts,
compare,
description,
enabled,
entities,
tags,
type,
uuid,
value,
window
FROM digitalocean.monitoring.alert_policies
WHERE alert_uuid = '{{ alert_uuid }}' -- required;
```
</TabItem>
<TabItem value="monitoring_list_alert_policy">

Returns all alert policies that are configured for the given account. To List all alert policies, send a GET request to `/v2/monitoring/alerts`.

```sql
SELECT
links,
meta,
policies
FROM digitalocean.monitoring.alert_policies
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="monitoring_create_alert_policy"
    values={[
        { label: 'monitoring_create_alert_policy', value: 'monitoring_create_alert_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="monitoring_create_alert_policy">

To create a new alert, send a POST request to `/v2/monitoring/alerts`.

```sql
INSERT INTO digitalocean.monitoring.alert_policies (
data__alerts,
data__compare,
data__description,
data__enabled,
data__entities,
data__tags,
data__type,
data__value,
data__window
)
SELECT 
'{{ alerts }}' --required,
'{{ compare }}' --required,
'{{ description }}' --required,
{{ enabled }} --required,
'{{ entities }}' --required,
'{{ tags }}' --required,
'{{ type }}' --required,
{{ value }} --required,
'{{ window }}' --required
RETURNING
policy
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: alert_policies
  props:
    - name: alerts
      value: object
    - name: compare
      value: string
      valid_values: ['GreaterThan', 'LessThan']
    - name: description
      value: string
    - name: enabled
      value: boolean
    - name: entities
      value: array
    - name: tags
      value: array
    - name: type
      value: string
      valid_values: ['v1/insights/droplet/load_1', 'v1/insights/droplet/load_5', 'v1/insights/droplet/load_15', 'v1/insights/droplet/memory_utilization_percent', 'v1/insights/droplet/disk_utilization_percent', 'v1/insights/droplet/cpu', 'v1/insights/droplet/disk_read', 'v1/insights/droplet/disk_write', 'v1/insights/droplet/public_outbound_bandwidth', 'v1/insights/droplet/public_inbound_bandwidth', 'v1/insights/droplet/private_outbound_bandwidth', 'v1/insights/droplet/private_inbound_bandwidth', 'v1/insights/lbaas/avg_cpu_utilization_percent', 'v1/insights/lbaas/connection_utilization_percent', 'v1/insights/lbaas/droplet_health', 'v1/insights/lbaas/tls_connections_per_second_utilization_percent', 'v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx', 'v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx', 'v1/insights/lbaas/increase_in_http_error_rate_count_5xx', 'v1/insights/lbaas/increase_in_http_error_rate_count_4xx', 'v1/insights/lbaas/high_http_request_response_time', 'v1/insights/lbaas/high_http_request_response_time_50p', 'v1/insights/lbaas/high_http_request_response_time_95p', 'v1/insights/lbaas/high_http_request_response_time_99p', 'v1/dbaas/alerts/load_15_alerts', 'v1/dbaas/alerts/memory_utilization_alerts', 'v1/dbaas/alerts/disk_utilization_alerts', 'v1/dbaas/alerts/cpu_alerts', 'v1/droplet/autoscale_alerts/current_instances', 'v1/droplet/autoscale_alerts/target_instances', 'v1/droplet/autoscale_alerts/current_cpu_utilization', 'v1/droplet/autoscale_alerts/target_cpu_utilization', 'v1/droplet/autoscale_alerts/current_memory_utilization', 'v1/droplet/autoscale_alerts/target_memory_utilization', 'v1/droplet/autoscale_alerts/scale_up', 'v1/droplet/autoscale_alerts/scale_down']
    - name: value
      value: number
    - name: window
      value: string
      valid_values: ['5m', '10m', '30m', '1h']
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="monitoring_update_alert_policy"
    values={[
        { label: 'monitoring_update_alert_policy', value: 'monitoring_update_alert_policy' }
    ]}
>
<TabItem value="monitoring_update_alert_policy">

To update en existing policy, send a PUT request to `v2/monitoring/alerts/&#123;alert_uuid&#125;`.

```sql
REPLACE digitalocean.monitoring.alert_policies
SET 
data__alerts = '{{ alerts }}',
data__compare = '{{ compare }}',
data__description = '{{ description }}',
data__enabled = {{ enabled }},
data__entities = '{{ entities }}',
data__tags = '{{ tags }}',
data__type = '{{ type }}',
data__value = {{ value }},
data__window = '{{ window }}'
WHERE 
alert_uuid = '{{ alert_uuid }}' --required
AND data__type = '{{ type }}' --required
AND data__description = '{{ description }}' --required
AND data__compare = '{{ compare }}' --required
AND data__value = '{{ value }}' --required
AND data__window = '{{ window }}' --required
AND data__entities = '{{ entities }}' --required
AND data__tags = '{{ tags }}' --required
AND data__alerts = '{{ alerts }}' --required
AND data__enabled = {{ enabled }} --required
RETURNING
policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="monitoring_delete_alert_policy"
    values={[
        { label: 'monitoring_delete_alert_policy', value: 'monitoring_delete_alert_policy' }
    ]}
>
<TabItem value="monitoring_delete_alert_policy">

To delete an alert policy, send a DELETE request to `/v2/monitoring/alerts/&#123;alert_uuid&#125;`

```sql
DELETE FROM digitalocean.monitoring.alert_policies
WHERE alert_uuid = '{{ alert_uuid }}' --required;
```
</TabItem>
</Tabs>
