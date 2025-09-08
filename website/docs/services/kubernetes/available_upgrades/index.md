--- 
title: available_upgrades
hide_title: false
hide_table_of_contents: false
keywords:
  - available_upgrades
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

Creates, updates, deletes, gets or lists an <code>available_upgrades</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>available_upgrades</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.available_upgrades" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_get_available_upgrades"
    values={[
        { label: 'kubernetes_get_available_upgrades', value: 'kubernetes_get_available_upgrades' }
    ]}
>
<TabItem value="kubernetes_get_available_upgrades">

The response will be a JSON object with a key called<br />`available_upgrade_versions`. The value of this will be an array of objects,<br />representing the upgrade versions currently available for this cluster.<br /><br />If the cluster is up-to-date (i.e. there are no upgrades currently available)<br />`available_upgrade_versions` will be `null`.<br />

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
    <td><CopyableCode code="kubernetes_version" /></td>
    <td><code>string</code></td>
    <td>The upstream version string for the version of Kubernetes provided by a given slug. (example: 1.16.13)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for an available version of Kubernetes for use when creating or updating a cluster. The string contains both the upstream version of Kubernetes as well as the DigitalOcean revision. (example: 1.16.13-do.0)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_features" /></td>
    <td><code>array</code></td>
    <td>The features available with the version of Kubernetes provided by a given slug.</td>
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
    <td><a href="#kubernetes_get_available_upgrades"><CopyableCode code="kubernetes_get_available_upgrades" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To determine whether a cluster can be upgraded, and the versions to which it<br />can be upgraded, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.<br /></td>
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
    defaultValue="kubernetes_get_available_upgrades"
    values={[
        { label: 'kubernetes_get_available_upgrades', value: 'kubernetes_get_available_upgrades' }
    ]}
>
<TabItem value="kubernetes_get_available_upgrades">

To determine whether a cluster can be upgraded, and the versions to which it<br />can be upgraded, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.<br />

```sql
SELECT
kubernetes_version,
slug,
supported_features
FROM digitalocean.kubernetes.available_upgrades
WHERE cluster_id = '{{ cluster_id }}' -- required;
```
</TabItem>
</Tabs>
