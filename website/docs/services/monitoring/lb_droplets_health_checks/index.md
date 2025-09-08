--- 
title: lb_droplets_health_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - lb_droplets_health_checks
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

Creates, updates, deletes, gets or lists a <code>lb_droplets_health_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lb_droplets_health_checks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.lb_droplets_health_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_lb_droplets_health_checks"
    values={[
        { label: 'monitoring_get_lb_droplets_health_checks', value: 'monitoring_get_lb_droplets_health_checks' }
    ]}
>
<TabItem value="monitoring_get_lb_droplets_health_checks">

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
    <td><a href="#monitoring_get_lb_droplets_health_checks"><CopyableCode code="monitoring_get_lb_droplets_health_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a></td>
    <td></td>
    <td>To retrieve Droplets health check status for a given load balancer, send a GET request to `/v2/monitoring/metrics/load_balancer/droplets_health_checks`.</td>
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
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to end metric window. (example: 1620705417)</td>
</tr>
<tr id="parameter-lb_id">
    <td><CopyableCode code="lb_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a load balancer. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
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
    defaultValue="monitoring_get_lb_droplets_health_checks"
    values={[
        { label: 'monitoring_get_lb_droplets_health_checks', value: 'monitoring_get_lb_droplets_health_checks' }
    ]}
>
<TabItem value="monitoring_get_lb_droplets_health_checks">

To retrieve Droplets health check status for a given load balancer, send a GET request to `/v2/monitoring/metrics/load_balancer/droplets_health_checks`.

```sql
SELECT
data,
status
FROM digitalocean.monitoring.lb_droplets_health_checks
WHERE lb_id = '{{ lb_id }}' -- required
AND start = '{{ start }}' -- required
AND end = '{{ end }}' -- required;
```
</TabItem>
</Tabs>
