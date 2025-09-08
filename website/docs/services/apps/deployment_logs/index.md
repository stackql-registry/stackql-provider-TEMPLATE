--- 
title: deployment_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_logs
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

Creates, updates, deletes, gets or lists a <code>deployment_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployment_logs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.deployment_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_logs"
    values={[
        { label: 'apps_get_logs', value: 'apps_get_logs' },
        { label: 'apps_get_logs_active_deployment', value: 'apps_get_logs_active_deployment' },
        { label: 'apps_get_logs_aggregate', value: 'apps_get_logs_aggregate' },
        { label: 'apps_get_logs_active_deployment_aggregate', value: 'apps_get_logs_active_deployment_aggregate' }
    ]}
>
<TabItem value="apps_get_logs">

A JSON object with urls that point to archived logs

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
    <td><CopyableCode code="historic_urls" /></td>
    <td><code>array</code></td>
    <td> (title: A list of URLs to archived log files)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url" /></td>
    <td><code>string</code></td>
    <td>A URL of the real-time live logs. This URL may use either the `https://` or `wss://` protocols and will keep pushing live logs as they become available. (example: ws://logs/build)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_get_logs_active_deployment">

A JSON object with urls that point to archived logs

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
    <td><CopyableCode code="historic_urls" /></td>
    <td><code>array</code></td>
    <td> (title: A list of URLs to archived log files)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url" /></td>
    <td><code>string</code></td>
    <td>A URL of the real-time live logs. This URL may use either the `https://` or `wss://` protocols and will keep pushing live logs as they become available. (example: ws://logs/build)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_get_logs_aggregate">

A JSON object with urls that point to archived logs

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
    <td><CopyableCode code="historic_urls" /></td>
    <td><code>array</code></td>
    <td> (title: A list of URLs to archived log files)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url" /></td>
    <td><code>string</code></td>
    <td>A URL of the real-time live logs. This URL may use either the `https://` or `wss://` protocols and will keep pushing live logs as they become available. (example: ws://logs/build)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_get_logs_active_deployment_aggregate">

A JSON object with urls that point to archived logs

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
    <td><CopyableCode code="historic_urls" /></td>
    <td><code>array</code></td>
    <td> (title: A list of URLs to archived log files)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url" /></td>
    <td><code>string</code></td>
    <td>A URL of the real-time live logs. This URL may use either the `https://` or `wss://` protocols and will keep pushing live logs as they become available. (example: ws://logs/build)</td>
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
    <td><a href="#apps_get_logs"><CopyableCode code="apps_get_logs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-component_name"><code>component_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-follow"><code>follow</code></a>, <a href="#parameter-pod_connection_timeout"><code>pod_connection_timeout</code></a></td>
    <td>Retrieve the logs of a past, in-progress, or active deployment. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.</td>
</tr>
<tr>
    <td><a href="#apps_get_logs_active_deployment"><CopyableCode code="apps_get_logs_active_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-component_name"><code>component_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-follow"><code>follow</code></a>, <a href="#parameter-pod_connection_timeout"><code>pod_connection_timeout</code></a></td>
    <td>Retrieve the logs of the active deployment if one exists. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment. Note log_type=BUILD logs will return logs associated with the current active deployment (being served). To view build logs associated with in-progress build, the query must explicitly reference the deployment id.</td>
</tr>
<tr>
    <td><a href="#apps_get_logs_aggregate"><CopyableCode code="apps_get_logs_aggregate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-follow"><code>follow</code></a>, <a href="#parameter-pod_connection_timeout"><code>pod_connection_timeout</code></a></td>
    <td>Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.</td>
</tr>
<tr>
    <td><a href="#apps_get_logs_active_deployment_aggregate"><CopyableCode code="apps_get_logs_active_deployment_aggregate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-follow"><code>follow</code></a>, <a href="#parameter-pod_connection_timeout"><code>pod_connection_timeout</code></a></td>
    <td>Retrieve the logs of the active deployment if one exists. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment. Note log_type=BUILD logs will return logs associated with the current active deployment (being served). To view build logs associated with in-progress build, the query must explicitly reference the deployment id.</td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime (example: BUILD)</td>
</tr>
<tr id="parameter-follow">
    <td><CopyableCode code="follow" /></td>
    <td><code>boolean</code></td>
    <td>Whether the logs should follow live updates. (example: true)</td>
</tr>
<tr id="parameter-pod_connection_timeout">
    <td><CopyableCode code="pod_connection_timeout" /></td>
    <td><code>string</code></td>
    <td>An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. (example: 3m)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_logs"
    values={[
        { label: 'apps_get_logs', value: 'apps_get_logs' },
        { label: 'apps_get_logs_active_deployment', value: 'apps_get_logs_active_deployment' },
        { label: 'apps_get_logs_aggregate', value: 'apps_get_logs_aggregate' },
        { label: 'apps_get_logs_active_deployment_aggregate', value: 'apps_get_logs_active_deployment_aggregate' }
    ]}
>
<TabItem value="apps_get_logs">

Retrieve the logs of a past, in-progress, or active deployment. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.

```sql
SELECT
historic_urls,
live_url
FROM digitalocean.apps.deployment_logs
WHERE app_id = '{{ app_id }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND component_name = '{{ component_name }}' -- required
AND type = '{{ type }}' -- required
AND follow = '{{ follow }}'
AND pod_connection_timeout = '{{ pod_connection_timeout }}';
```
</TabItem>
<TabItem value="apps_get_logs_active_deployment">

Retrieve the logs of the active deployment if one exists. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment. Note log_type=BUILD logs will return logs associated with the current active deployment (being served). To view build logs associated with in-progress build, the query must explicitly reference the deployment id.

```sql
SELECT
historic_urls,
live_url
FROM digitalocean.apps.deployment_logs
WHERE app_id = '{{ app_id }}' -- required
AND component_name = '{{ component_name }}' -- required
AND type = '{{ type }}' -- required
AND follow = '{{ follow }}'
AND pod_connection_timeout = '{{ pod_connection_timeout }}';
```
</TabItem>
<TabItem value="apps_get_logs_aggregate">

Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.

```sql
SELECT
historic_urls,
live_url
FROM digitalocean.apps.deployment_logs
WHERE app_id = '{{ app_id }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND type = '{{ type }}' -- required
AND follow = '{{ follow }}'
AND pod_connection_timeout = '{{ pod_connection_timeout }}';
```
</TabItem>
<TabItem value="apps_get_logs_active_deployment_aggregate">

Retrieve the logs of the active deployment if one exists. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment. Note log_type=BUILD logs will return logs associated with the current active deployment (being served). To view build logs associated with in-progress build, the query must explicitly reference the deployment id.

```sql
SELECT
historic_urls,
live_url
FROM digitalocean.apps.deployment_logs
WHERE app_id = '{{ app_id }}' -- required
AND type = '{{ type }}' -- required
AND follow = '{{ follow }}'
AND pod_connection_timeout = '{{ pod_connection_timeout }}';
```
</TabItem>
</Tabs>
