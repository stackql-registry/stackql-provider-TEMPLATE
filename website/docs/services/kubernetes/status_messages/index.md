--- 
title: status_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - status_messages
  - kubernetes
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

Creates, updates, deletes, gets or lists a <code>status_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>status_messages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.status_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_get_status_messages"
    values={[
        { label: 'kubernetes_get_status_messages', value: 'kubernetes_get_status_messages' }
    ]}
>
<TabItem value="kubernetes_get_status_messages">

The response is a JSON object which contains status messages for a Kubernetes cluster. Each message object contains a timestamp and an indication of what issue the cluster is experiencing at a given time.<br />

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
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Status information about the cluster which impacts it's lifecycle. (example: Resource provisioning may be delayed while our team resolves an incident)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp in ISO8601 format that represents when the status message was emitted. (example: 2018-11-15T16:00:11Z)</td>
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
    <td><a href="#kubernetes_get_status_messages"><CopyableCode code="kubernetes_get_status_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td><a href="#parameter-since"><code>since</code></a></td>
    <td>To retrieve status messages for a Kubernetes cluster, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/status_messages`. Status messages inform users of any issues that come up during the cluster lifecycle.<br /></td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to reference a Kubernetes cluster. (example: bd5f5959-5e1e-4205-a714-a914373942af)</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp used to return status messages emitted since the specified time. The timestamp should be in ISO8601 format. (example: 2018-11-15T16:00:11Z)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="kubernetes_get_status_messages"
    values={[
        { label: 'kubernetes_get_status_messages', value: 'kubernetes_get_status_messages' }
    ]}
>
<TabItem value="kubernetes_get_status_messages">

To retrieve status messages for a Kubernetes cluster, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/status_messages`. Status messages inform users of any issues that come up during the cluster lifecycle.<br />

```sql
SELECT
message,
timestamp
FROM digitalocean.kubernetes.status_messages
WHERE cluster_id = '{{ cluster_id }}' -- required
AND since = '{{ since }}';
```
</TabItem>
</Tabs>
