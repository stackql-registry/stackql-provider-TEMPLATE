--- 
title: lint_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - lint_checks
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

Creates, updates, deletes, gets or lists a <code>lint_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lint_checks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.lint_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_get_cluster_lint_results"
    values={[
        { label: 'kubernetes_get_cluster_lint_results', value: 'kubernetes_get_cluster_lint_results' }
    ]}
>
<TabItem value="kubernetes_get_cluster_lint_results">

The response is a JSON object which contains the diagnostics on Kubernetes<br />objects in the cluster. Each diagnostic will contain some metadata information<br />about the object and feedback for users to act upon.<br />

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
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>Id of the clusterlint run that can be used later to fetch the diagnostics. (example: 50c2f44c-011d-493e-aee5-361a4a0d1844)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the schedule clusterlint run request was completed. (example: 2019-10-30T05:34:11Z)</td>
</tr>
<tr>
    <td><CopyableCode code="diagnostics" /></td>
    <td><code>array</code></td>
    <td>An array of diagnostics reporting potential problems for the given cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the schedule clusterlint run request was made. (example: 2019-10-30T05:34:07Z)</td>
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
    <td><a href="#kubernetes_get_cluster_lint_results"><CopyableCode code="kubernetes_get_cluster_lint_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td><a href="#parameter-run_id"><code>run_id</code></a></td>
    <td>To request clusterlint diagnostics for your cluster, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. If the `run_id` query<br />parameter is provided, then the diagnostics for the specific run is fetched.<br />By default, the latest results are shown.<br /><br />To find out how to address clusterlint feedback, please refer to<br />[the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_run_cluster_lint"><CopyableCode code="kubernetes_run_cluster_lint" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>Clusterlint helps operators conform to Kubernetes best practices around<br />resources, security and reliability to avoid common problems while operating<br />or upgrading the clusters.<br /><br />To request a clusterlint run on your cluster, send a POST request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. This will run all<br />checks present in the `doks` group by default, if a request body is not<br />specified. Optionally specify the below attributes.<br /><br />For information about the available checks, please refer to<br />[the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).<br /></td>
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
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Specifies the clusterlint run whose results will be retrieved. (example: 50c2f44c-011d-493e-aee5-361a4a0d1844)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="kubernetes_get_cluster_lint_results"
    values={[
        { label: 'kubernetes_get_cluster_lint_results', value: 'kubernetes_get_cluster_lint_results' }
    ]}
>
<TabItem value="kubernetes_get_cluster_lint_results">

To request clusterlint diagnostics for your cluster, send a GET request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. If the `run_id` query<br />parameter is provided, then the diagnostics for the specific run is fetched.<br />By default, the latest results are shown.<br /><br />To find out how to address clusterlint feedback, please refer to<br />[the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).<br />

```sql
SELECT
run_id,
completed_at,
diagnostics,
requested_at
FROM digitalocean.kubernetes.lint_checks
WHERE cluster_id = '{{ cluster_id }}' -- required
AND run_id = '{{ run_id }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="kubernetes_run_cluster_lint"
    values={[
        { label: 'kubernetes_run_cluster_lint', value: 'kubernetes_run_cluster_lint' }
    ]}
>
<TabItem value="kubernetes_run_cluster_lint">

Clusterlint helps operators conform to Kubernetes best practices around<br />resources, security and reliability to avoid common problems while operating<br />or upgrading the clusters.<br /><br />To request a clusterlint run on your cluster, send a POST request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. This will run all<br />checks present in the `doks` group by default, if a request body is not<br />specified. Optionally specify the below attributes.<br /><br />For information about the available checks, please refer to<br />[the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).<br />

```sql
EXEC digitalocean.kubernetes.lint_checks.kubernetes_run_cluster_lint 
@cluster_id='{{ cluster_id }}' --required 
@@json=
'{
"include_groups": "{{ include_groups }}", 
"include_checks": "{{ include_checks }}", 
"exclude_groups": "{{ exclude_groups }}", 
"exclude_checks": "{{ exclude_checks }}"
}';
```
</TabItem>
</Tabs>
