--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - projects
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.projects.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_list_resources"
    values={[
        { label: 'projects_list_resources', value: 'projects_list_resources' }
    ]}
>
<TabItem value="projects_list_resources">

The response will be a JSON object with a key called `resources`.<br />The value of this will be an object with the standard resource attributes.<br /><br />Only resources that you are authorized to see will be returned.<br />

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
    <td><CopyableCode code="assigned_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the project was created. (example: 2018-09-28T19:26:37Z)</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td>The links object contains the `self` object, which contains the resource relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of assigning and fetching the resources. (example: ok)</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>The uniform resource name (URN) for the resource in the format do:resource_type:resource_id. (pattern: ^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*, example: do:droplet:13457723)</td>
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
    <td><a href="#projects_list_resources"><CopyableCode code="projects_list_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all your resources in a project, send a GET request to `/v2/projects/$PROJECT_ID/resources`.<br /><br />This endpoint will only return resources that you are authorized to see. For example, to see Droplets in a project, include the `droplet:read` scope.<br /></td>
</tr>
<tr>
    <td><a href="#projects_assign_resources"><CopyableCode code="projects_assign_resources" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>To assign resources to a project, send a POST request to `/v2/projects/$PROJECT_ID/resources`.<br /><br />You must have both `project:update` and `<resource>:read` scopes to assign new resources. For example, to assign a Droplet to a project, include both the `project:update` and `droplet:read` scopes.<br /></td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a project. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
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
    defaultValue="projects_list_resources"
    values={[
        { label: 'projects_list_resources', value: 'projects_list_resources' }
    ]}
>
<TabItem value="projects_list_resources">

To list all your resources in a project, send a GET request to `/v2/projects/$PROJECT_ID/resources`.<br /><br />This endpoint will only return resources that you are authorized to see. For example, to see Droplets in a project, include the `droplet:read` scope.<br />

```sql
SELECT
assigned_at,
links,
status,
urn
FROM digitalocean.projects.resources
WHERE project_id = '{{ project_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_assign_resources"
    values={[
        { label: 'projects_assign_resources', value: 'projects_assign_resources' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_assign_resources">

To assign resources to a project, send a POST request to `/v2/projects/$PROJECT_ID/resources`.<br /><br />You must have both `project:update` and `<resource>:read` scopes to assign new resources. For example, to assign a Droplet to a project, include both the `project:update` and `droplet:read` scopes.<br />

```sql
INSERT INTO digitalocean.projects.resources (
data__resources,
project_id
)
SELECT 
'{{ resources }}',
'{{ project_id }}'
RETURNING
resources
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: resources
  props:
    - name: project_id
      value: string (uuid)
      description: Required parameter for the resources resource.
    - name: resources
      value: array
      description: >
        A list of uniform resource names (URNs) to be added to a project. Only resources that you are authorized to see will be returned.
        
```
</TabItem>
</Tabs>
