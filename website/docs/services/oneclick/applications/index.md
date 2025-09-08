--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - oneclick
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.oneclick.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="one_clicks_list"
    values={[
        { label: 'one_clicks_list', value: 'one_clicks_list' }
    ]}
>
<TabItem value="one_clicks_list">

A JSON object with a key of `1_clicks`.

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
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the 1-Click application. (title: slug, example: monitoring)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the 1-Click application. (title: type, example: kubernetes)</td>
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
    <td><a href="#one_clicks_list"><CopyableCode code="one_clicks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td>To list all available 1-Click applications, send a GET request to `/v2/1-clicks`. The `type` may<br />be provided as query paramater in order to restrict results to a certain type of 1-Click, for<br />example: `/v2/1-clicks?type=droplet`. Current supported types are `kubernetes` and `droplet`.<br /><br />The response will be a JSON object with a key called `1_clicks`. This will be set to an array of<br />1-Click application data, each of which will contain the the slug and type for the 1-Click.<br /></td>
</tr>
<tr>
    <td><a href="#one_clicks_install_kubernetes"><CopyableCode code="one_clicks_install_kubernetes" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__addon_slugs"><code>data__addon_slugs</code></a>, <a href="#parameter-data__cluster_uuid"><code>data__cluster_uuid</code></a></td>
    <td></td>
    <td>To install a Kubernetes 1-Click application on a cluster, send a POST request to<br />`/v2/1-clicks/kubernetes`. The `addon_slugs` and `cluster_uuid` must be provided as body<br />parameter in order to specify which 1-Click application(s) to install. To list all available<br />1-Click Kubernetes applications, send a request to `/v2/1-clicks?type=kubernetes`.<br /></td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Restrict results to a certain type of 1-Click. (example: kubernetes)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="one_clicks_list"
    values={[
        { label: 'one_clicks_list', value: 'one_clicks_list' }
    ]}
>
<TabItem value="one_clicks_list">

To list all available 1-Click applications, send a GET request to `/v2/1-clicks`. The `type` may<br />be provided as query paramater in order to restrict results to a certain type of 1-Click, for<br />example: `/v2/1-clicks?type=droplet`. Current supported types are `kubernetes` and `droplet`.<br /><br />The response will be a JSON object with a key called `1_clicks`. This will be set to an array of<br />1-Click application data, each of which will contain the the slug and type for the 1-Click.<br />

```sql
SELECT
slug,
type
FROM digitalocean.oneclick.applications
WHERE type = '{{ type }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="one_clicks_install_kubernetes"
    values={[
        { label: 'one_clicks_install_kubernetes', value: 'one_clicks_install_kubernetes' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="one_clicks_install_kubernetes">

To install a Kubernetes 1-Click application on a cluster, send a POST request to<br />`/v2/1-clicks/kubernetes`. The `addon_slugs` and `cluster_uuid` must be provided as body<br />parameter in order to specify which 1-Click application(s) to install. To list all available<br />1-Click Kubernetes applications, send a request to `/v2/1-clicks?type=kubernetes`.<br />

```sql
INSERT INTO digitalocean.oneclick.applications (
data__addon_slugs,
data__cluster_uuid
)
SELECT 
'{{ addon_slugs }}' --required,
'{{ cluster_uuid }}' --required
RETURNING
message
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: applications
  props:
    - name: addon_slugs
      value: array
      description: >
        An array of 1-Click Application slugs to be installed to the Kubernetes cluster.
        
      default: 
    - name: cluster_uuid
      value: string
      description: >
        A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed.
        
```
</TabItem>
</Tabs>
