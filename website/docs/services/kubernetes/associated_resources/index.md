--- 
title: associated_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_resources
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

Creates, updates, deletes, gets or lists an <code>associated_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>associated_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.associated_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_list_associated_resources"
    values={[
        { label: 'kubernetes_list_associated_resources', value: 'kubernetes_list_associated_resources' }
    ]}
>
<TabItem value="kubernetes_list_associated_resources">

The response will be a JSON object containing `load_balancers`, `volumes`, and `volume_snapshots` keys. Each will be set to an array of objects containing the standard attributes for associated resources.

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
    <td><CopyableCode code="load_balancers" /></td>
    <td><code>array</code></td>
    <td>A list of names and IDs for associated load balancers that can be destroyed along with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_snapshots" /></td>
    <td><code>array</code></td>
    <td>A list of names and IDs for associated volume snapshots that can be destroyed along with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>A list of names and IDs for associated volumes that can be destroyed along with the cluster.</td>
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
    <td><a href="#kubernetes_list_associated_resources"><CopyableCode code="kubernetes_list_associated_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To list the associated billable resources that can be destroyed along with a cluster, send a GET request to the `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources` endpoint.</td>
</tr>
<tr>
    <td><a href="#kubernetes_destroy_associated_resources_selective"><CopyableCode code="kubernetes_destroy_associated_resources_selective" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To delete a Kubernetes cluster along with a subset of its associated resources,<br />send a DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/selective`.<br /><br />The JSON body of the request should include `load_balancers`, `volumes`, or<br />`volume_snapshots` keys each set to an array of IDs for the associated<br />resources to be destroyed.<br /><br />The IDs can be found by querying the cluster's associated resources endpoint.<br />Any associated resource not included in the request will remain and continue<br />to accrue changes on your account.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_destroy_associated_resources_dangerous"><CopyableCode code="kubernetes_destroy_associated_resources_dangerous" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To delete a Kubernetes cluster with all of its associated resources, send a<br />DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/dangerous`.<br />A 204 status code with no body will be returned in response to a successful request.<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="kubernetes_list_associated_resources"
    values={[
        { label: 'kubernetes_list_associated_resources', value: 'kubernetes_list_associated_resources' }
    ]}
>
<TabItem value="kubernetes_list_associated_resources">

To list the associated billable resources that can be destroyed along with a cluster, send a GET request to the `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources` endpoint.

```sql
SELECT
load_balancers,
volume_snapshots,
volumes
FROM digitalocean.kubernetes.associated_resources
WHERE cluster_id = '{{ cluster_id }}' -- required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="kubernetes_destroy_associated_resources_selective"
    values={[
        { label: 'kubernetes_destroy_associated_resources_selective', value: 'kubernetes_destroy_associated_resources_selective' }
    ]}
>
<TabItem value="kubernetes_destroy_associated_resources_selective">

To delete a Kubernetes cluster along with a subset of its associated resources,<br />send a DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/selective`.<br /><br />The JSON body of the request should include `load_balancers`, `volumes`, or<br />`volume_snapshots` keys each set to an array of IDs for the associated<br />resources to be destroyed.<br /><br />The IDs can be found by querying the cluster's associated resources endpoint.<br />Any associated resource not included in the request will remain and continue<br />to accrue changes on your account.<br />

```sql
DELETE FROM digitalocean.kubernetes.associated_resources
WHERE cluster_id = '{{ cluster_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="kubernetes_destroy_associated_resources_dangerous"
    values={[
        { label: 'kubernetes_destroy_associated_resources_dangerous', value: 'kubernetes_destroy_associated_resources_dangerous' }
    ]}
>
<TabItem value="kubernetes_destroy_associated_resources_dangerous">

To delete a Kubernetes cluster with all of its associated resources, send a<br />DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/dangerous`.<br />A 204 status code with no body will be returned in response to a successful request.<br />

```sql
EXEC digitalocean.kubernetes.associated_resources.kubernetes_destroy_associated_resources_dangerous 
@cluster_id='{{ cluster_id }}' --required;
```
</TabItem>
</Tabs>
