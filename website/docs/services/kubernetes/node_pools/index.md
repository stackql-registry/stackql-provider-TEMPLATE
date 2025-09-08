--- 
title: node_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - node_pools
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

Creates, updates, deletes, gets or lists a <code>node_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>node_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.node_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_get_node_pool"
    values={[
        { label: 'kubernetes_get_node_pool', value: 'kubernetes_get_node_pool' },
        { label: 'kubernetes_list_node_pools', value: 'kubernetes_list_node_pools' }
    ]}
>
<TabItem value="kubernetes_get_node_pool">

The response will be a JSON object with a key called `node_pool`. The value<br />of this will be an object containing the standard attributes of a node pool.<br />

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
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference a specific node pool. (example: cdda885e-7663-40c8-bc74-3a036c66545d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the node pool. (example: frontend-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_scale" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether auto-scaling is enabled for this node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The number of Droplet instances in the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="max_nodes" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="min_nodes" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>An object specifying the details of a specific worker node in a node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the type of Droplet used as workers in the node pool. (example: s-1vcpu-2gb)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`. <br /><br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="taints" /></td>
    <td><code>array</code></td>
    <td>An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="kubernetes_list_node_pools">

The response will be a JSON object with a key called `node_pools`. This will<br />be set to an array of objects, each of which will contain the standard node<br />pool attributes.<br />

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
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference a specific node pool. (example: cdda885e-7663-40c8-bc74-3a036c66545d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the node pool. (example: frontend-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_scale" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether auto-scaling is enabled for this node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The number of Droplet instances in the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="max_nodes" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="min_nodes" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>An object specifying the details of a specific worker node in a node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the type of Droplet used as workers in the node pool. (example: s-1vcpu-2gb)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`. <br /><br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="taints" /></td>
    <td><code>array</code></td>
    <td>An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool.</td>
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
    <td><a href="#kubernetes_get_node_pool"><CopyableCode code="kubernetes_get_node_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a></td>
    <td></td>
    <td>To show information about a specific node pool in a Kubernetes cluster, send<br />a GET request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_list_node_pools"><CopyableCode code="kubernetes_list_node_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To list all of the node pools in a Kubernetes clusters, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools`.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_add_node_pool"><CopyableCode code="kubernetes_add_node_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__size"><code>data__size</code></a>, <a href="#parameter-data__count"><code>data__count</code></a></td>
    <td></td>
    <td>To add an additional node pool to a Kubernetes clusters, send a POST request<br />to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools` with the following<br />attributes.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_update_node_pool"><CopyableCode code="kubernetes_update_node_pool" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__count"><code>data__count</code></a></td>
    <td></td>
    <td>To update the name of a node pool, edit the tags applied to it, or adjust its<br />number of nodes, send a PUT request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID` with the<br />following attributes.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_delete_node_pool"><CopyableCode code="kubernetes_delete_node_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a></td>
    <td></td>
    <td>To delete a node pool, send a DELETE request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.<br /><br />A 204 status code with no body will be returned in response to a successful<br />request. Nodes in the pool will subsequently be drained and deleted.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_recycle_node_pool"><CopyableCode code="kubernetes_recycle_node_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a></td>
    <td></td>
    <td>The endpoint has been deprecated. Please use the DELETE<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`<br />method instead.<br /></td>
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
<tr id="parameter-node_pool_id">
    <td><CopyableCode code="node_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to reference a Kubernetes node pool. (example: cdda885e-7663-40c8-bc74-3a036c66545d)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="kubernetes_get_node_pool"
    values={[
        { label: 'kubernetes_get_node_pool', value: 'kubernetes_get_node_pool' },
        { label: 'kubernetes_list_node_pools', value: 'kubernetes_list_node_pools' }
    ]}
>
<TabItem value="kubernetes_get_node_pool">

To show information about a specific node pool in a Kubernetes cluster, send<br />a GET request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.<br />

```sql
SELECT
id,
name,
auto_scale,
count,
labels,
max_nodes,
min_nodes,
nodes,
size,
tags,
taints
FROM digitalocean.kubernetes.node_pools
WHERE cluster_id = '{{ cluster_id }}' -- required
AND node_pool_id = '{{ node_pool_id }}' -- required;
```
</TabItem>
<TabItem value="kubernetes_list_node_pools">

To list all of the node pools in a Kubernetes clusters, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools`.<br />

```sql
SELECT
id,
name,
auto_scale,
count,
labels,
max_nodes,
min_nodes,
nodes,
size,
tags,
taints
FROM digitalocean.kubernetes.node_pools
WHERE cluster_id = '{{ cluster_id }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="kubernetes_add_node_pool"
    values={[
        { label: 'kubernetes_add_node_pool', value: 'kubernetes_add_node_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="kubernetes_add_node_pool">

To add an additional node pool to a Kubernetes clusters, send a POST request<br />to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools` with the following<br />attributes.<br />

```sql
INSERT INTO digitalocean.kubernetes.node_pools (
data__size,
data__name,
data__count,
data__tags,
data__labels,
data__taints,
data__auto_scale,
data__min_nodes,
data__max_nodes,
cluster_id
)
SELECT 
'{{ size }}' --required,
'{{ name }}' --required,
{{ count }} --required,
'{{ tags }}',
'{{ labels }}',
'{{ taints }}',
{{ auto_scale }},
{{ min_nodes }},
{{ max_nodes }},
'{{ cluster_id }}'
RETURNING
node_pool
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: node_pools
  props:
    - name: cluster_id
      value: string (uuid)
      description: Required parameter for the node_pools resource.
    - name: size
      value: string
      description: >
        The slug identifier for the type of Droplet used as workers in the node pool.
        
    - name: name
      value: string
      description: >
        A human-readable name for the node pool.
        
    - name: count
      value: integer
      description: >
        The number of Droplet instances in the node pool.
        
    - name: tags
      value: array
      description: >
        An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` scope.
        
    - name: labels
      value: object
      description: >
        An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool.
        
    - name: taints
      value: array
      description: >
        An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool.
        
    - name: auto_scale
      value: boolean
      description: >
        A boolean value indicating whether auto-scaling is enabled for this node pool.
        
    - name: min_nodes
      value: integer
      description: >
        The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
        
    - name: max_nodes
      value: integer
      description: >
        The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="kubernetes_update_node_pool"
    values={[
        { label: 'kubernetes_update_node_pool', value: 'kubernetes_update_node_pool' }
    ]}
>
<TabItem value="kubernetes_update_node_pool">

To update the name of a node pool, edit the tags applied to it, or adjust its<br />number of nodes, send a PUT request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID` with the<br />following attributes.<br />

```sql
REPLACE digitalocean.kubernetes.node_pools
SET 
data__name = '{{ name }}',
data__count = {{ count }},
data__tags = '{{ tags }}',
data__labels = '{{ labels }}',
data__taints = '{{ taints }}',
data__auto_scale = {{ auto_scale }},
data__min_nodes = {{ min_nodes }},
data__max_nodes = {{ max_nodes }}
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND node_pool_id = '{{ node_pool_id }}' --required
AND data__name = '{{ name }}' --required
AND data__count = '{{ count }}' --required
RETURNING
node_pool;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="kubernetes_delete_node_pool"
    values={[
        { label: 'kubernetes_delete_node_pool', value: 'kubernetes_delete_node_pool' }
    ]}
>
<TabItem value="kubernetes_delete_node_pool">

To delete a node pool, send a DELETE request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.<br /><br />A 204 status code with no body will be returned in response to a successful<br />request. Nodes in the pool will subsequently be drained and deleted.<br />

```sql
DELETE FROM digitalocean.kubernetes.node_pools
WHERE cluster_id = '{{ cluster_id }}' --required
AND node_pool_id = '{{ node_pool_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="kubernetes_recycle_node_pool"
    values={[
        { label: 'kubernetes_recycle_node_pool', value: 'kubernetes_recycle_node_pool' }
    ]}
>
<TabItem value="kubernetes_recycle_node_pool">

The endpoint has been deprecated. Please use the DELETE<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`<br />method instead.<br />

```sql
EXEC digitalocean.kubernetes.node_pools.kubernetes_recycle_node_pool 
@cluster_id='{{ cluster_id }}' --required, 
@node_pool_id='{{ node_pool_id }}' --required 
@@json=
'{
"nodes": "{{ nodes }}"
}';
```
</TabItem>
</Tabs>
