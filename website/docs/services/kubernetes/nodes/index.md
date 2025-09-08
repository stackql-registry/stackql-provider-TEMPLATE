--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>nodes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#kubernetes_delete_node"><CopyableCode code="kubernetes_delete_node" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a></td>
    <td><a href="#parameter-skip_drain"><code>skip_drain</code></a>, <a href="#parameter-replace"><code>replace</code></a></td>
    <td>To delete a single node in a pool, send a DELETE request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`.<br /><br />Appending the `skip_drain=1` query parameter to the request causes node<br />draining to be skipped. Omitting the query parameter or setting its value to<br />`0` carries out draining prior to deletion.<br /><br />Appending the `replace=1` query parameter to the request causes the node to<br />be replaced by a new one after deletion. Omitting the query parameter or<br />setting its value to `0` deletes without replacement.<br /></td>
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
<tr id="parameter-node_id">
    <td><CopyableCode code="node_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to reference a node in a Kubernetes node pool. (example: 478247f8-b1bb-4f7a-8db9-2a5f8d4b8f8f)</td>
</tr>
<tr id="parameter-node_pool_id">
    <td><CopyableCode code="node_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to reference a Kubernetes node pool. (example: cdda885e-7663-40c8-bc74-3a036c66545d)</td>
</tr>
<tr id="parameter-replace">
    <td><CopyableCode code="replace" /></td>
    <td><code>integer</code></td>
    <td>Specifies whether or not to replace a node after it has been deleted. Setting it to `1` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to `0` deletes without replacement. (example: 1)</td>
</tr>
<tr id="parameter-skip_drain">
    <td><CopyableCode code="skip_drain" /></td>
    <td><code>integer</code></td>
    <td>Specifies whether or not to drain workloads from a node before it is deleted. Setting it to `1` causes node draining to be skipped. Omitting the query parameter or setting its value to `0` carries out draining prior to deletion. (example: 1)</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="kubernetes_delete_node"
    values={[
        { label: 'kubernetes_delete_node', value: 'kubernetes_delete_node' }
    ]}
>
<TabItem value="kubernetes_delete_node">

To delete a single node in a pool, send a DELETE request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`.<br /><br />Appending the `skip_drain=1` query parameter to the request causes node<br />draining to be skipped. Omitting the query parameter or setting its value to<br />`0` carries out draining prior to deletion.<br /><br />Appending the `replace=1` query parameter to the request causes the node to<br />be replaced by a new one after deletion. Omitting the query parameter or<br />setting its value to `0` deletes without replacement.<br />

```sql
DELETE FROM digitalocean.kubernetes.nodes
WHERE cluster_id = '{{ cluster_id }}' --required
AND node_pool_id = '{{ node_pool_id }}' --required
AND node_id = '{{ node_id }}' --required
AND skip_drain = '{{ skip_drain }}'
AND replace = '{{ replace }}';
```
</TabItem>
</Tabs>
