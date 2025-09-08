--- 
title: droplet_bandwidth_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_bandwidth_metrics
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

Creates, updates, deletes, gets or lists a <code>droplet_bandwidth_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_bandwidth_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.droplet_bandwidth_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_droplet_bandwidth_metrics"
    values={[
        { label: 'monitoring_get_droplet_bandwidth_metrics', value: 'monitoring_get_droplet_bandwidth_metrics' }
    ]}
>
<TabItem value="monitoring_get_droplet_bandwidth_metrics">

The response will be a JSON object with a key called `data` and `status`.

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (example: success)</td>
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
    <td><a href="#monitoring_get_droplet_bandwidth_metrics"><CopyableCode code="monitoring_get_droplet_bandwidth_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-host_id"><code>host_id</code></a>, <a href="#parameter-interface"><code>interface</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a></td>
    <td></td>
    <td>To retrieve bandwidth metrics for a given Droplet, send a GET request to `/v2/monitoring/metrics/droplet/bandwidth`. Use the `interface` query parameter to specify if the results should be for the `private` or `public` interface. Use the `direction` query parameter to specify if the results should be for `inbound` or `outbound` traffic.<br />The metrics in the response body are in megabits per second (Mbps).</td>
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
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The traffic direction. (example: inbound)</td>
</tr>
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to end metric window. (example: 1620705417)</td>
</tr>
<tr id="parameter-host_id">
    <td><CopyableCode code="host_id" /></td>
    <td><code>string</code></td>
    <td>The droplet ID. (example: 17209102)</td>
</tr>
<tr id="parameter-interface">
    <td><CopyableCode code="interface" /></td>
    <td><code>string</code></td>
    <td>The network interface. (example: private)</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to start metric window. (example: 1620683817)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="monitoring_get_droplet_bandwidth_metrics"
    values={[
        { label: 'monitoring_get_droplet_bandwidth_metrics', value: 'monitoring_get_droplet_bandwidth_metrics' }
    ]}
>
<TabItem value="monitoring_get_droplet_bandwidth_metrics">

To retrieve bandwidth metrics for a given Droplet, send a GET request to `/v2/monitoring/metrics/droplet/bandwidth`. Use the `interface` query parameter to specify if the results should be for the `private` or `public` interface. Use the `direction` query parameter to specify if the results should be for `inbound` or `outbound` traffic.<br />The metrics in the response body are in megabits per second (Mbps).

```sql
SELECT
data,
status
FROM digitalocean.monitoring.droplet_bandwidth_metrics
WHERE host_id = '{{ host_id }}' -- required
AND interface = '{{ interface }}' -- required
AND direction = '{{ direction }}' -- required
AND start = '{{ start }}' -- required
AND end = '{{ end }}' -- required;
```
</TabItem>
</Tabs>
