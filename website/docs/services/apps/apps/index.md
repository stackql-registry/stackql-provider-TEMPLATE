--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get"
    values={[
        { label: 'apps_get', value: 'apps_get' },
        { label: 'apps_list', value: 'apps_list' }
    ]}
>
<TabItem value="apps_get">

A JSON with key `app`

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
    <td> (title: The ID of the application, example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Requires `project:read` scope. (example: 88b72d1a-b78a-4d9f-9090-b53c4399073f, title: The ID of the project the app is assigned to. This will be empty if there is a lookup failure.)</td>
</tr>
<tr>
    <td><CopyableCode code="active_deployment" /></td>
    <td><code>object</code></td>
    <td> (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The creation time of the app, example: 2020-11-19T20:27:18Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_ips" /></td>
    <td><code>array</code></td>
    <td> (title: The dedicated egress IP addresses associated with the app.)</td>
</tr>
<tr>
    <td><CopyableCode code="default_ingress" /></td>
    <td><code>string</code></td>
    <td> (title: The default hostname on which the app is accessible, example: digitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td> (title: Contains all domains for the app)</td>
</tr>
<tr>
    <td><CopyableCode code="in_progress_deployment" /></td>
    <td><code>object</code></td>
    <td> (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The creation time of the last deployment, example: 2020-11-19T20:27:18Z)</td>
</tr>
<tr>
    <td><CopyableCode code="live_domain" /></td>
    <td><code>string</code></td>
    <td> (title: The live domain of the app, example: live_domain)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url" /></td>
    <td><code>string</code></td>
    <td> (title: The live URL of the app, example: google.com)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url_base" /></td>
    <td><code>string</code></td>
    <td> (title: The live URL base of the app, the URL excluding the path, example: digitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_uuid" /></td>
    <td><code>string</code></td>
    <td> (title: The ID of the account to which the application belongs, example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_deployment" /></td>
    <td><code>object</code></td>
    <td>The most recent pending deployment. For CreateApp and UpdateApp transactions this is guaranteed to reflect the associated deployment. (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="pinned_deployment" /></td>
    <td><code>object</code></td>
    <td>The deployment that the app is pinned to. (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td> (title: Geographical information about an app origin)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired configuration of an application. (title: AppSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_slug" /></td>
    <td><code>string</code></td>
    <td> (title: The current pricing tier slug of the app, example: basic)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: Time of the app's last configuration update, example: 2020-12-01T00:42:16Z)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_list">

A JSON object with a `apps` key. This is list of object `apps`.

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
    <td> (title: The ID of the application, example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Requires `project:read` scope. (example: 88b72d1a-b78a-4d9f-9090-b53c4399073f, title: The ID of the project the app is assigned to. This will be empty if there is a lookup failure.)</td>
</tr>
<tr>
    <td><CopyableCode code="active_deployment" /></td>
    <td><code>object</code></td>
    <td> (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The creation time of the app, example: 2020-11-19T20:27:18Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_ips" /></td>
    <td><code>array</code></td>
    <td> (title: The dedicated egress IP addresses associated with the app.)</td>
</tr>
<tr>
    <td><CopyableCode code="default_ingress" /></td>
    <td><code>string</code></td>
    <td> (title: The default hostname on which the app is accessible, example: digitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td> (title: Contains all domains for the app)</td>
</tr>
<tr>
    <td><CopyableCode code="in_progress_deployment" /></td>
    <td><code>object</code></td>
    <td> (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The creation time of the last deployment, example: 2020-11-19T20:27:18Z)</td>
</tr>
<tr>
    <td><CopyableCode code="live_domain" /></td>
    <td><code>string</code></td>
    <td> (title: The live domain of the app, example: live_domain)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url" /></td>
    <td><code>string</code></td>
    <td> (title: The live URL of the app, example: google.com)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url_base" /></td>
    <td><code>string</code></td>
    <td> (title: The live URL base of the app, the URL excluding the path, example: digitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_uuid" /></td>
    <td><code>string</code></td>
    <td> (title: The ID of the account to which the application belongs, example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_deployment" /></td>
    <td><code>object</code></td>
    <td>The most recent pending deployment. For CreateApp and UpdateApp transactions this is guaranteed to reflect the associated deployment. (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="pinned_deployment" /></td>
    <td><code>object</code></td>
    <td>The deployment that the app is pinned to. (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td> (title: Geographical information about an app origin)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired configuration of an application. (title: AppSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_slug" /></td>
    <td><code>string</code></td>
    <td> (title: The current pricing tier slug of the app, example: basic)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: Time of the app's last configuration update, example: 2020-12-01T00:42:16Z)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc" /></td>
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
    <td><a href="#apps_get"><CopyableCode code="apps_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Retrieve details about an existing app by either its ID or name. To retrieve an app by its name, do not include an ID in the request path. Information about the current active deployment as well as any in progress ones will also be included in the response.</td>
</tr>
<tr>
    <td><a href="#apps_list"><CopyableCode code="apps_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-with_projects"><code>with_projects</code></a></td>
    <td>List all apps on your account. Information about the current active deployment as well as any in progress ones will also be included for each app.</td>
</tr>
<tr>
    <td><a href="#apps_create"><CopyableCode code="apps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__spec"><code>data__spec</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new app by submitting an app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).</td>
</tr>
<tr>
    <td><a href="#apps_update"><CopyableCode code="apps_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__spec"><code>data__spec</code></a></td>
    <td></td>
    <td>Update an existing app by submitting a new app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).</td>
</tr>
<tr>
    <td><a href="#apps_delete"><CopyableCode code="apps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an existing app. Once deleted, all active deployments will be permanently shut down and the app deleted. If needed, be sure to back up your app specification so that you may re-create it at a later time.</td>
</tr>
<tr>
    <td><a href="#apps_restart"><CopyableCode code="apps_restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Perform a rolling restart of all or specific components in an app.</td>
</tr>
<tr>
    <td><a href="#apps_validate_app_spec"><CopyableCode code="apps_validate_app_spec" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>To propose and validate a spec for a new or existing app, send a POST request to the `/v2/apps/propose` endpoint. The request returns some information about the proposed app, including app cost and upgrade cost. If an existing app ID is specified, the app spec is treated as a proposed update to the existing app.</td>
</tr>
<tr>
    <td><a href="#apps_assign_alert_destinations"><CopyableCode code="apps_assign_alert_destinations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-alert_id"><code>alert_id</code></a></td>
    <td></td>
    <td>Updates the emails and slack webhook destinations for app alerts. Emails must be associated to a user with access to the app.</td>
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
<tr id="parameter-alert_id">
    <td><CopyableCode code="alert_id" /></td>
    <td><code>string</code></td>
    <td>The alert ID (example: 5a624ab5-dd58-4b39-b7dd-8b7c36e8a91d)</td>
</tr>
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID (example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app (example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The content-type that should be used by the response. By default, the response will be `application/json`. `application/yaml` is also supported. (example: application/json)</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The content-type used for the request. By default, the requests are assumed to use `application/json`. `application/yaml` is also supported. (example: application/json)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the app to retrieve. (example: myApp)</td>
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
<tr id="parameter-with_projects">
    <td><CopyableCode code="with_projects" /></td>
    <td><code>boolean</code></td>
    <td>Whether the project_id of listed apps should be fetched and included. (example: true)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get"
    values={[
        { label: 'apps_get', value: 'apps_get' },
        { label: 'apps_list', value: 'apps_list' }
    ]}
>
<TabItem value="apps_get">

Retrieve details about an existing app by either its ID or name. To retrieve an app by its name, do not include an ID in the request path. Information about the current active deployment as well as any in progress ones will also be included in the response.

```sql
SELECT
id,
project_id,
active_deployment,
created_at,
dedicated_ips,
default_ingress,
domains,
in_progress_deployment,
last_deployment_created_at,
live_domain,
live_url,
live_url_base,
owner_uuid,
pending_deployment,
pinned_deployment,
region,
spec,
tier_slug,
updated_at,
vpc
FROM digitalocean.apps.apps
WHERE id = '{{ id }}' -- required
AND name = '{{ name }}';
```
</TabItem>
<TabItem value="apps_list">

List all apps on your account. Information about the current active deployment as well as any in progress ones will also be included for each app.

```sql
SELECT
id,
project_id,
active_deployment,
created_at,
dedicated_ips,
default_ingress,
domains,
in_progress_deployment,
last_deployment_created_at,
live_domain,
live_url,
live_url_base,
owner_uuid,
pending_deployment,
pinned_deployment,
region,
spec,
tier_slug,
updated_at,
vpc
FROM digitalocean.apps.apps
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND with_projects = '{{ with_projects }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="apps_create"
    values={[
        { label: 'apps_create', value: 'apps_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="apps_create">

Create a new app by submitting an app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).

```sql
INSERT INTO digitalocean.apps.apps (
data__spec,
data__project_id,
Accept,
Content-Type
)
SELECT 
'{{ spec }}' --required,
'{{ project_id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
app
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apps
  props:
    - name: spec
      value: object
      description: >
        The desired configuration of an application.
        
    - name: project_id
      value: string
      description: >
        The ID of the project the app should be assigned to. If omitted, it will be assigned to your default project.
<br><br>Requires `project:update` scope.

    - name: Accept
      value: string
      description: The content-type that should be used by the response. By default, the response will be `application/json`. `application/yaml` is also supported. (example: application/json)
    - name: Content-Type
      value: string
      description: The content-type used for the request. By default, the requests are assumed to use `application/json`. `application/yaml` is also supported. (example: application/json)
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="apps_update"
    values={[
        { label: 'apps_update', value: 'apps_update' }
    ]}
>
<TabItem value="apps_update">

Update an existing app by submitting a new app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).

```sql
REPLACE digitalocean.apps.apps
SET 
data__spec = '{{ spec }}',
data__update_all_source_versions = {{ update_all_source_versions }}
WHERE 
id = '{{ id }}' --required
AND data__spec = '{{ spec }}' --required
RETURNING
app;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="apps_delete"
    values={[
        { label: 'apps_delete', value: 'apps_delete' }
    ]}
>
<TabItem value="apps_delete">

Delete an existing app. Once deleted, all active deployments will be permanently shut down and the app deleted. If needed, be sure to back up your app specification so that you may re-create it at a later time.

```sql
DELETE FROM digitalocean.apps.apps
WHERE id = '{{ id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apps_restart"
    values={[
        { label: 'apps_restart', value: 'apps_restart' },
        { label: 'apps_validate_app_spec', value: 'apps_validate_app_spec' },
        { label: 'apps_assign_alert_destinations', value: 'apps_assign_alert_destinations' }
    ]}
>
<TabItem value="apps_restart">

Perform a rolling restart of all or specific components in an app.

```sql
EXEC digitalocean.apps.apps.apps_restart 
@app_id='{{ app_id }}' --required 
@@json=
'{
"components": "{{ components }}"
}';
```
</TabItem>
<TabItem value="apps_validate_app_spec">

To propose and validate a spec for a new or existing app, send a POST request to the `/v2/apps/propose` endpoint. The request returns some information about the proposed app, including app cost and upgrade cost. If an existing app ID is specified, the app spec is treated as a proposed update to the existing app.

```sql
EXEC digitalocean.apps.apps.apps_validate_app_spec 
@@json=
'{
"spec": "{{ spec }}", 
"app_id": "{{ app_id }}"
}';
```
</TabItem>
<TabItem value="apps_assign_alert_destinations">

Updates the emails and slack webhook destinations for app alerts. Emails must be associated to a user with access to the app.

```sql
EXEC digitalocean.apps.apps.apps_assign_alert_destinations 
@app_id='{{ app_id }}' --required, 
@alert_id='{{ alert_id }}' --required 
@@json=
'{
"emails": "{{ emails }}", 
"slack_webhooks": "{{ slack_webhooks }}"
}';
```
</TabItem>
</Tabs>
