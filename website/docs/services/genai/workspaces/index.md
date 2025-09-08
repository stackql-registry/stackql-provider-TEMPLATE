--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - genai
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

Creates, updates, deletes, gets or lists a <code>workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_workspace"
    values={[
        { label: 'genai_get_workspace', value: 'genai_get_workspace' },
        { label: 'genai_list_workspaces', value: 'genai_list_workspaces' }
    ]}
>
<TabItem value="genai_get_workspace">

A successful response.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the workspace (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="agents" /></td>
    <td><code>array</code></td>
    <td>Agents</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string (uint64)</code></td>
    <td>The id of user who created this workspace (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_email" /></td>
    <td><code>string</code></td>
    <td>The email of the user who created this workspace (example: example@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Deleted date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the workspace (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_test_cases" /></td>
    <td><code>array</code></td>
    <td>Evaluations</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Update date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_workspaces">

A successful response.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the workspace (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="agents" /></td>
    <td><code>array</code></td>
    <td>Agents</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string (uint64)</code></td>
    <td>The id of user who created this workspace (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_email" /></td>
    <td><code>string</code></td>
    <td>The email of the user who created this workspace (example: example@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Deleted date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the workspace (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_test_cases" /></td>
    <td><code>array</code></td>
    <td>Evaluations</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Update date (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
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
    <td><a href="#genai_get_workspace"><CopyableCode code="genai_get_workspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_uuid"><code>workspace_uuid</code></a></td>
    <td></td>
    <td>To retrieve details of a workspace, GET request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;`. The response body is a JSON object containing the workspace.</td>
</tr>
<tr>
    <td><a href="#genai_list_workspaces"><CopyableCode code="genai_list_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all workspaces, send a GET request to `/v2/gen-ai/workspaces`.</td>
</tr>
<tr>
    <td><a href="#genai_create_workspace"><CopyableCode code="genai_create_workspace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new workspace, send a POST request to `/v2/gen-ai/workspaces`. The response body contains a JSON object with the newly created workspace object.</td>
</tr>
<tr>
    <td><a href="#genai_update_workspace"><CopyableCode code="genai_update_workspace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-workspace_uuid"><code>workspace_uuid</code></a></td>
    <td></td>
    <td>To update a workspace, send a PUT request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;`. The response body is a JSON object containing the workspace.</td>
</tr>
<tr>
    <td><a href="#genai_delete_workspace"><CopyableCode code="genai_delete_workspace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_uuid"><code>workspace_uuid</code></a></td>
    <td></td>
    <td>To delete a workspace, send a DELETE request to `/v2/gen-ai/workspace/&#123;workspace_uuid&#125;`.</td>
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
<tr id="parameter-workspace_uuid">
    <td><CopyableCode code="workspace_uuid" /></td>
    <td><code>string</code></td>
    <td>Workspace UUID. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_workspace"
    values={[
        { label: 'genai_get_workspace', value: 'genai_get_workspace' },
        { label: 'genai_list_workspaces', value: 'genai_list_workspaces' }
    ]}
>
<TabItem value="genai_get_workspace">

To retrieve details of a workspace, GET request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;`. The response body is a JSON object containing the workspace.

```sql
SELECT
name,
agents,
created_at,
created_by,
created_by_email,
deleted_at,
description,
evaluation_test_cases,
updated_at,
uuid
FROM digitalocean.genai.workspaces
WHERE workspace_uuid = '{{ workspace_uuid }}' -- required;
```
</TabItem>
<TabItem value="genai_list_workspaces">

To list all workspaces, send a GET request to `/v2/gen-ai/workspaces`.

```sql
SELECT
name,
agents,
created_at,
created_by,
created_by_email,
deleted_at,
description,
evaluation_test_cases,
updated_at,
uuid
FROM digitalocean.genai.workspaces;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_workspace"
    values={[
        { label: 'genai_create_workspace', value: 'genai_create_workspace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_workspace">

To create a new workspace, send a POST request to `/v2/gen-ai/workspaces`. The response body contains a JSON object with the newly created workspace object.

```sql
INSERT INTO digitalocean.genai.workspaces (
data__agent_uuids,
data__description,
data__name
)
SELECT 
'{{ agent_uuids }}',
'{{ description }}',
'{{ name }}'
RETURNING
workspace
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: agent_uuids
      value: array
      description: >
        Ids of the agents(s) to attach to the workspace
        
    - name: description
      value: string
      description: >
        Description of the workspace
        
    - name: name
      value: string
      description: >
        Name of the workspace
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_update_workspace"
    values={[
        { label: 'genai_update_workspace', value: 'genai_update_workspace' }
    ]}
>
<TabItem value="genai_update_workspace">

To update a workspace, send a PUT request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;`. The response body is a JSON object containing the workspace.

```sql
REPLACE digitalocean.genai.workspaces
SET 
data__description = '{{ description }}',
data__name = '{{ name }}',
data__workspace_uuid = '{{ workspace_uuid }}'
WHERE 
workspace_uuid = '{{ workspace_uuid }}' --required
RETURNING
workspace;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_workspace"
    values={[
        { label: 'genai_delete_workspace', value: 'genai_delete_workspace' }
    ]}
>
<TabItem value="genai_delete_workspace">

To delete a workspace, send a DELETE request to `/v2/gen-ai/workspace/&#123;workspace_uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.workspaces
WHERE workspace_uuid = '{{ workspace_uuid }}' --required;
```
</TabItem>
</Tabs>
