--- 
title: rollbacks
hide_title: false
hide_table_of_contents: false
keywords:
  - rollbacks
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

Creates, updates, deletes, gets or lists a <code>rollbacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rollbacks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.rollbacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#apps_create_rollback"><CopyableCode code="apps_create_rollback" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Rollback an app to a previous deployment. A new deployment will be created to perform the rollback.<br />The app will be pinned to the rollback deployment preventing any new deployments from being created,<br />either manually or through Auto Deploy on Push webhooks. To resume deployments, the rollback must be<br />either committed or reverted.<br /><br />It is recommended to use the Validate App Rollback endpoint to double check if the rollback is<br />valid and if there are any warnings.<br /></td>
</tr>
<tr>
    <td><a href="#apps_validate_rollback"><CopyableCode code="apps_validate_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Check whether an app can be rolled back to a specific deployment. This endpoint can also be used<br />to check if there are any warnings or validation conditions that will cause the rollback to proceed<br />under unideal circumstances. For example, if a component must be rebuilt as part of the rollback<br />causing it to take longer than usual.<br /></td>
</tr>
<tr>
    <td><a href="#apps_commit_rollback"><CopyableCode code="apps_commit_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Commit an app rollback. This action permanently applies the rollback and unpins the app to resume new deployments.<br /></td>
</tr>
<tr>
    <td><a href="#apps_revert_rollback"><CopyableCode code="apps_revert_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Revert an app rollback. This action reverts the active rollback by creating a new deployment from the<br />latest app spec prior to the rollback and unpins the app to resume new deployments.<br /></td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="apps_create_rollback"
    values={[
        { label: 'apps_create_rollback', value: 'apps_create_rollback' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="apps_create_rollback">

Rollback an app to a previous deployment. A new deployment will be created to perform the rollback.<br />The app will be pinned to the rollback deployment preventing any new deployments from being created,<br />either manually or through Auto Deploy on Push webhooks. To resume deployments, the rollback must be<br />either committed or reverted.<br /><br />It is recommended to use the Validate App Rollback endpoint to double check if the rollback is<br />valid and if there are any warnings.<br />

```sql
INSERT INTO digitalocean.apps.rollbacks (
data__deployment_id,
data__skip_pin,
app_id
)
SELECT 
'{{ deployment_id }}',
{{ skip_pin }},
'{{ app_id }}'
RETURNING
deployment
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: rollbacks
  props:
    - name: app_id
      value: string
      description: Required parameter for the rollbacks resource.
    - name: deployment_id
      value: string
      description: >
        The ID of the deployment to rollback to.
        
    - name: skip_pin
      value: boolean
      description: >
        Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned.
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apps_validate_rollback"
    values={[
        { label: 'apps_validate_rollback', value: 'apps_validate_rollback' },
        { label: 'apps_commit_rollback', value: 'apps_commit_rollback' },
        { label: 'apps_revert_rollback', value: 'apps_revert_rollback' }
    ]}
>
<TabItem value="apps_validate_rollback">

Check whether an app can be rolled back to a specific deployment. This endpoint can also be used<br />to check if there are any warnings or validation conditions that will cause the rollback to proceed<br />under unideal circumstances. For example, if a component must be rebuilt as part of the rollback<br />causing it to take longer than usual.<br />

```sql
EXEC digitalocean.apps.rollbacks.apps_validate_rollback 
@app_id='{{ app_id }}' --required 
@@json=
'{
"deployment_id": "{{ deployment_id }}", 
"skip_pin": {{ skip_pin }}
}';
```
</TabItem>
<TabItem value="apps_commit_rollback">

Commit an app rollback. This action permanently applies the rollback and unpins the app to resume new deployments.<br />

```sql
EXEC digitalocean.apps.rollbacks.apps_commit_rollback 
@app_id='{{ app_id }}' --required;
```
</TabItem>
<TabItem value="apps_revert_rollback">

Revert an app rollback. This action reverts the active rollback by creating a new deployment from the<br />latest app spec prior to the rollback and unpins the app to resume new deployments.<br />

```sql
EXEC digitalocean.apps.rollbacks.apps_revert_rollback 
@app_id='{{ app_id }}' --required;
```
</TabItem>
</Tabs>
