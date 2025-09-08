--- 
title: cluster_user
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_user
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

Creates, updates, deletes, gets or lists a <code>cluster_user</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cluster_user</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.cluster_user" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_get_cluster_user"
    values={[
        { label: 'kubernetes_get_cluster_user', value: 'kubernetes_get_cluster_user' }
    ]}
>
<TabItem value="kubernetes_get_cluster_user">

The response will be a JSON object with a key called `kubernetes_cluster_user`<br />containing the username and in-cluster groups that it belongs to.<br />

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
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>A list of in-cluster groups that the user belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string (email)</code></td>
    <td>The username for the cluster admin user. (example: sammy@digitalocean.com)</td>
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
    <td><a href="#kubernetes_get_cluster_user"><CopyableCode code="kubernetes_get_cluster_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To show information the user associated with a Kubernetes cluster, send a GET<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/user`.<br /></td>
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
    defaultValue="kubernetes_get_cluster_user"
    values={[
        { label: 'kubernetes_get_cluster_user', value: 'kubernetes_get_cluster_user' }
    ]}
>
<TabItem value="kubernetes_get_cluster_user">

To show information the user associated with a Kubernetes cluster, send a GET<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/user`.<br />

```sql
SELECT
groups,
username
FROM digitalocean.kubernetes.cluster_user
WHERE cluster_id = '{{ cluster_id }}' -- required;
```
</TabItem>
</Tabs>
