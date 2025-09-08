--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_deployment"
    values={[
        { label: 'apps_get_deployment', value: 'apps_get_deployment' },
        { label: 'apps_list_deployments', value: 'apps_list_deployments' }
    ]}
>
<TabItem value="apps_get_deployment">

A JSON of the requested deployment

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
    <td><code>string</code></td>
    <td> (title: The ID of the deployment, example: b6bdf840-2854-4f87-a36c-5f231c617c84)</td>
</tr>
<tr>
    <td><CopyableCode code="cause" /></td>
    <td><code>string</code></td>
    <td> (title: What caused this deployment to be created, example: commit 9a4df0b pushed to github/digitalocean/sample-golang)</td>
</tr>
<tr>
    <td><CopyableCode code="cloned_from" /></td>
    <td><code>string</code></td>
    <td> (title: The ID of a previous deployment that this deployment was cloned from, example: 3aa4d20e-5527-4c00-b496-601fbd22520a)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The creation time of the deployment, example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="functions" /></td>
    <td><code>array</code></td>
    <td> (title: Functions components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td> (title: Job components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td> (default: UNKNOWN, example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="phase_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: When the deployment phase was last updated, example: 0001-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td> (title: Service components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired configuration of an application. (title: AppSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="static_sites" /></td>
    <td><code>array</code></td>
    <td> (title: Static Site components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_slug" /></td>
    <td><code>string</code></td>
    <td> (title: The current pricing tier slug of the deployment, example: basic)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: When the deployment was last updated, example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="workers" /></td>
    <td><code>array</code></td>
    <td> (title: Worker components that are part of this deployment)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_list_deployments">

A JSON object with a `deployments` key. This will be a list of all app deployments

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
    <td><code>string</code></td>
    <td> (title: The ID of the deployment, example: b6bdf840-2854-4f87-a36c-5f231c617c84)</td>
</tr>
<tr>
    <td><CopyableCode code="cause" /></td>
    <td><code>string</code></td>
    <td> (title: What caused this deployment to be created, example: commit 9a4df0b pushed to github/digitalocean/sample-golang)</td>
</tr>
<tr>
    <td><CopyableCode code="cloned_from" /></td>
    <td><code>string</code></td>
    <td> (title: The ID of a previous deployment that this deployment was cloned from, example: 3aa4d20e-5527-4c00-b496-601fbd22520a)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The creation time of the deployment, example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="functions" /></td>
    <td><code>array</code></td>
    <td> (title: Functions components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td> (title: Job components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td> (default: UNKNOWN, example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="phase_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: When the deployment phase was last updated, example: 0001-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td> (title: Service components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired configuration of an application. (title: AppSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="static_sites" /></td>
    <td><code>array</code></td>
    <td> (title: Static Site components that are part of this deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_slug" /></td>
    <td><code>string</code></td>
    <td> (title: The current pricing tier slug of the deployment, example: basic)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: When the deployment was last updated, example: 2020-07-28T18:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="workers" /></td>
    <td><code>array</code></td>
    <td> (title: Worker components that are part of this deployment)</td>
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
    <td><a href="#apps_get_deployment"><CopyableCode code="apps_get_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>Retrieve information about an app deployment.</td>
</tr>
<tr>
    <td><a href="#apps_list_deployments"><CopyableCode code="apps_list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-deployment_types"><code>deployment_types</code></a></td>
    <td>List all deployments of an app.</td>
</tr>
<tr>
    <td><a href="#apps_create_deployment"><CopyableCode code="apps_create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Creating an app deployment will pull the latest changes from your repository and schedule a new deployment for your app.</td>
</tr>
<tr>
    <td><a href="#apps_cancel_deployment"><CopyableCode code="apps_cancel_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>Immediately cancel an in-progress deployment.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID (example: 3aa4d20e-5527-4c00-b496-601fbd22520a)</td>
</tr>
<tr id="parameter-deployment_types">
    <td><CopyableCode code="deployment_types" /></td>
    <td><code>array</code></td>
    <td>Optional. Filter deployments by deployment_type   - MANUAL: manual deployment   - DEPLOY_ON_PUSH: deployment triggered by a push to the app's repository   - MAINTENANCE: deployment for maintenance purposes   - MANUAL_ROLLBACK: manual revert to a previous deployment   - AUTO_ROLLBACK: automatic revert to a previous deployment   - UPDATE_DATABASE_TRUSTED_SOURCES: update database trusted sources   - AUTOSCALED: deployment that has been autoscaled (example: [MANUAL, AUTOSCALED])</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Which 'page' of paginated results to return. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of items returned per page (example: 2)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_deployment"
    values={[
        { label: 'apps_get_deployment', value: 'apps_get_deployment' },
        { label: 'apps_list_deployments', value: 'apps_list_deployments' }
    ]}
>
<TabItem value="apps_get_deployment">

Retrieve information about an app deployment.

```sql
SELECT
id,
cause,
cloned_from,
created_at,
functions,
jobs,
phase,
phase_last_updated_at,
progress,
services,
spec,
static_sites,
tier_slug,
updated_at,
workers
FROM digitalocean.apps.deployments
WHERE app_id = '{{ app_id }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required;
```
</TabItem>
<TabItem value="apps_list_deployments">

List all deployments of an app.

```sql
SELECT
id,
cause,
cloned_from,
created_at,
functions,
jobs,
phase,
phase_last_updated_at,
progress,
services,
spec,
static_sites,
tier_slug,
updated_at,
workers
FROM digitalocean.apps.deployments
WHERE app_id = '{{ app_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND deployment_types = '{{ deployment_types }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="apps_create_deployment"
    values={[
        { label: 'apps_create_deployment', value: 'apps_create_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="apps_create_deployment">

Creating an app deployment will pull the latest changes from your repository and schedule a new deployment for your app.

```sql
INSERT INTO digitalocean.apps.deployments (
data__force_build,
app_id
)
SELECT 
{{ force_build }},
'{{ app_id }}'
RETURNING
deployment
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: deployments
  props:
    - name: app_id
      value: string
      description: Required parameter for the deployments resource.
    - name: force_build
      value: boolean
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apps_cancel_deployment"
    values={[
        { label: 'apps_cancel_deployment', value: 'apps_cancel_deployment' }
    ]}
>
<TabItem value="apps_cancel_deployment">

Immediately cancel an in-progress deployment.

```sql
EXEC digitalocean.apps.deployments.apps_cancel_deployment 
@app_id='{{ app_id }}' --required, 
@deployment_id='{{ deployment_id }}' --required;
```
</TabItem>
</Tabs>
