--- 
title: deployment_url
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_url
  - apps
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

Creates, updates, deletes, gets or lists a <code>deployment_url</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployment_url</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.deployment_url" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_exec"
    values={[
        { label: 'apps_get_exec', value: 'apps_get_exec' },
        { label: 'apps_get_exec_active_deployment', value: 'apps_get_exec_active_deployment' }
    ]}
>
<TabItem value="apps_get_exec">

A JSON object with a websocket URL that allows sending/receiving console input and output.

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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A websocket URL that allows sending/receiving console input and receiving console output. (example: wss://exec/?token=xxx)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_get_exec_active_deployment">

A JSON object with a websocket URL that allows sending/receiving console input and output.

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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A websocket URL that allows sending/receiving console input and receiving console output. (example: wss://exec/?token=xxx)</td>
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
    <td><a href="#apps_get_exec"><CopyableCode code="apps_get_exec" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-component_name"><code>component_name</code></a></td>
    <td><a href="#parameter-instance_name"><code>instance_name</code></a></td>
    <td>Returns a websocket URL that allows sending/receiving console input and output to a component of the specified deployment if one exists. Optionally, the instance_name parameter can be provided to retrieve the exec URL for a specific instance. Note that instances are ephemeral; therefore, we recommended to avoid making persistent changes or such scripting around them.</td>
</tr>
<tr>
    <td><a href="#apps_get_exec_active_deployment"><CopyableCode code="apps_get_exec_active_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-component_name"><code>component_name</code></a></td>
    <td><a href="#parameter-instance_name"><code>instance_name</code></a></td>
    <td>Returns a websocket URL that allows sending/receiving console input and output to a component of the active deployment if one exists.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID (example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr id="parameter-component_name">
    <td><CopyableCode code="component_name" /></td>
    <td><code>string</code></td>
    <td>An optional component name. If set, logs will be limited to this component only. (example: component)</td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID (example: 3aa4d20e-5527-4c00-b496-601fbd22520a)</td>
</tr>
<tr id="parameter-instance_name">
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>The name of the actively running ephemeral compute instance (example: go-app-d768568df-zz77d)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_exec"
    values={[
        { label: 'apps_get_exec', value: 'apps_get_exec' },
        { label: 'apps_get_exec_active_deployment', value: 'apps_get_exec_active_deployment' }
    ]}
>
<TabItem value="apps_get_exec">

Returns a websocket URL that allows sending/receiving console input and output to a component of the specified deployment if one exists. Optionally, the instance_name parameter can be provided to retrieve the exec URL for a specific instance. Note that instances are ephemeral; therefore, we recommended to avoid making persistent changes or such scripting around them.

```sql
SELECT
url
FROM digitalocean.apps.deployment_url
WHERE app_id = '{{ app_id }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND component_name = '{{ component_name }}' -- required
AND instance_name = '{{ instance_name }}';
```
</TabItem>
<TabItem value="apps_get_exec_active_deployment">

Returns a websocket URL that allows sending/receiving console input and output to a component of the active deployment if one exists.

```sql
SELECT
url
FROM digitalocean.apps.deployment_url
WHERE app_id = '{{ app_id }}' -- required
AND component_name = '{{ component_name }}' -- required
AND instance_name = '{{ instance_name }}';
```
</TabItem>
</Tabs>
