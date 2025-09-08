--- 
title: cluster_metrics_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_metrics_credentials
  - databases
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

Creates, updates, deletes, gets or lists a <code>cluster_metrics_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cluster_metrics_credentials</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.cluster_metrics_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_cluster_metrics_credentials"
    values={[
        { label: 'databases_get_cluster_metrics_credentials', value: 'databases_get_cluster_metrics_credentials' }
    ]}
>
<TabItem value="databases_get_cluster_metrics_credentials">

A JSON object with a key of `credentials`.

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
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
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
    <td><a href="#databases_get_cluster_metrics_credentials"><CopyableCode code="databases_get_cluster_metrics_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To show the credentials for all database clusters' metrics endpoints, send a GET request to `/v2/databases/metrics/credentials`. The result will be a JSON object with a `credentials` key.</td>
</tr>
<tr>
    <td><a href="#databases_update_cluster_metrics_credentials"><CopyableCode code="databases_update_cluster_metrics_credentials" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>To update the credentials for all database clusters' metrics endpoints, send a PUT request to `/v2/databases/metrics/credentials`. A successful request will receive a 204 No Content status code  with no body in response.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_cluster_metrics_credentials"
    values={[
        { label: 'databases_get_cluster_metrics_credentials', value: 'databases_get_cluster_metrics_credentials' }
    ]}
>
<TabItem value="databases_get_cluster_metrics_credentials">

To show the credentials for all database clusters' metrics endpoints, send a GET request to `/v2/databases/metrics/credentials`. The result will be a JSON object with a `credentials` key.

```sql
SELECT
credentials
FROM digitalocean.databases.cluster_metrics_credentials;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_cluster_metrics_credentials"
    values={[
        { label: 'databases_update_cluster_metrics_credentials', value: 'databases_update_cluster_metrics_credentials' }
    ]}
>
<TabItem value="databases_update_cluster_metrics_credentials">

To update the credentials for all database clusters' metrics endpoints, send a PUT request to `/v2/databases/metrics/credentials`. A successful request will receive a 204 No Content status code  with no body in response.

```sql
REPLACE digitalocean.databases.cluster_metrics_credentials
SET 
data__credentials = '{{ credentials }}'
WHERE 
;
```
</TabItem>
</Tabs>
