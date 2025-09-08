--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.projects.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_get"
    values={[
        { label: 'projects_get', value: 'projects_get' },
        { label: 'projects_list', value: 'projects_list' }
    ]}
>
<TabItem value="projects_get">

The response will be a JSON object with a key called `project`. The value of this will be an object with the standard project attributes

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
    <td><code>string (uuid)</code></td>
    <td>The unique universal identifier of this project. (example: 4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name for the project. The maximum length is 175 characters and the name must be unique. (example: my-web-api)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>integer</code></td>
    <td>The integer id of the project owner.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the project was created. (example: 2018-09-27T20:10:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the project. The maximum length is 255 characters. (example: My website API)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment of the project's resources. (example: Production)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>If true, all resources will be added to this project if no project is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_uuid" /></td>
    <td><code>string</code></td>
    <td>The unique universal identifier of the project owner. (example: 99525febec065ca37b2ffe4f852fd2b2581895e7)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td>The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  (example: Service or API)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the project was updated. (example: 2018-09-27T20:10:35Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_list">

The response will be a JSON object with a key called `projects`. The value of this will be an object with the standard project attributes

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
    <td><code>string (uuid)</code></td>
    <td>The unique universal identifier of this project. (example: 4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name for the project. The maximum length is 175 characters and the name must be unique. (example: my-web-api)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>integer</code></td>
    <td>The integer id of the project owner.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the project was created. (example: 2018-09-27T20:10:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the project. The maximum length is 255 characters. (example: My website API)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment of the project's resources. (example: Production)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>If true, all resources will be added to this project if no project is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_uuid" /></td>
    <td><code>string</code></td>
    <td>The unique universal identifier of the project owner. (example: 99525febec065ca37b2ffe4f852fd2b2581895e7)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td>The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  (example: Service or API)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the project was updated. (example: 2018-09-27T20:10:35Z)</td>
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
    <td><a href="#projects_get"><CopyableCode code="projects_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>To get a project, send a GET request to `/v2/projects/$PROJECT_ID`.</td>
</tr>
<tr>
    <td><a href="#projects_list"><CopyableCode code="projects_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all your projects, send a GET request to `/v2/projects`.</td>
</tr>
<tr>
    <td><a href="#projects_create"><CopyableCode code="projects_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__purpose"><code>data__purpose</code></a></td>
    <td></td>
    <td>To create a project, send a POST request to `/v2/projects`.</td>
</tr>
<tr>
    <td><a href="#projects_patch"><CopyableCode code="projects_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>To update only specific attributes of a project, send a PATCH request to `/v2/projects/$PROJECT_ID`. At least one of the following attributes needs to be sent.</td>
</tr>
<tr>
    <td><a href="#projects_update"><CopyableCode code="projects_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__description"><code>data__description</code></a>, <a href="#parameter-data__purpose"><code>data__purpose</code></a>, <a href="#parameter-data__environment"><code>data__environment</code></a>, <a href="#parameter-data__is_default"><code>data__is_default</code></a></td>
    <td></td>
    <td>To update a project, send a PUT request to `/v2/projects/$PROJECT_ID`. All of the following attributes must be sent.</td>
</tr>
<tr>
    <td><a href="#projects_delete"><CopyableCode code="projects_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>To delete a project, send a DELETE request to `/v2/projects/$PROJECT_ID`. To<br />be deleted, a project must not have any resources assigned to it. Any existing<br />resources must first be reassigned or destroyed, or you will receive a 412 error.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
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
    defaultValue="projects_get"
    values={[
        { label: 'projects_get', value: 'projects_get' },
        { label: 'projects_list', value: 'projects_list' }
    ]}
>
<TabItem value="projects_get">

To get a project, send a GET request to `/v2/projects/$PROJECT_ID`.

```sql
SELECT
id,
name,
owner_id,
created_at,
description,
environment,
is_default,
owner_uuid,
purpose,
updated_at
FROM digitalocean.projects.projects
WHERE project_id = '{{ project_id }}' -- required;
```
</TabItem>
<TabItem value="projects_list">

To list all your projects, send a GET request to `/v2/projects`.

```sql
SELECT
id,
name,
owner_id,
created_at,
description,
environment,
is_default,
owner_uuid,
purpose,
updated_at
FROM digitalocean.projects.projects
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_create"
    values={[
        { label: 'projects_create', value: 'projects_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_create">

To create a project, send a POST request to `/v2/projects`.

```sql
INSERT INTO digitalocean.projects.projects (
data__name,
data__description,
data__purpose,
data__environment
)
SELECT 
'{{ name }}' --required,
'{{ description }}',
'{{ purpose }}' --required,
'{{ environment }}'
RETURNING
project
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: projects
  props:
    - name: name
      value: string
      description: >
        The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
        
    - name: description
      value: string
      description: >
        The description of the project. The maximum length is 255 characters.
        
    - name: purpose
      value: string
      description: >
        The purpose of the project. The maximum length is 255 characters. It can
have one of the following values:

- Just trying out DigitalOcean
- Class project / Educational purposes
- Website or blog
- Web Application
- Service or API
- Mobile Application
- Machine learning / AI / Data processing
- IoT
- Operational / Developer tooling

If another value for purpose is specified, for example, "your custom purpose",
your purpose will be stored as `Other: your custom purpose`.

    - name: environment
      value: string
      description: >
        The environment of the project's resources.
        
      valid_values: ['Development', 'Staging', 'Production']
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_patch"
    values={[
        { label: 'projects_patch', value: 'projects_patch' }
    ]}
>
<TabItem value="projects_patch">

To update only specific attributes of a project, send a PATCH request to `/v2/projects/$PROJECT_ID`. At least one of the following attributes needs to be sent.

```sql
UPDATE digitalocean.projects.projects
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__purpose = '{{ purpose }}',
data__environment = '{{ environment }}',
data__is_default = {{ is_default }}
WHERE 
project_id = '{{ project_id }}' --required
RETURNING
project;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_update"
    values={[
        { label: 'projects_update', value: 'projects_update' }
    ]}
>
<TabItem value="projects_update">

To update a project, send a PUT request to `/v2/projects/$PROJECT_ID`. All of the following attributes must be sent.

```sql
REPLACE digitalocean.projects.projects
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__purpose = '{{ purpose }}',
data__environment = '{{ environment }}',
data__is_default = {{ is_default }}
WHERE 
project_id = '{{ project_id }}' --required
AND data__name = '{{ name }}' --required
AND data__description = '{{ description }}' --required
AND data__purpose = '{{ purpose }}' --required
AND data__environment = '{{ environment }}' --required
AND data__is_default = {{ is_default }} --required
RETURNING
project;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_delete"
    values={[
        { label: 'projects_delete', value: 'projects_delete' }
    ]}
>
<TabItem value="projects_delete">

To delete a project, send a DELETE request to `/v2/projects/$PROJECT_ID`. To<br />be deleted, a project must not have any resources assigned to it. Any existing<br />resources must first be reassigned or destroyed, or you will receive a 412 error.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.projects.projects
WHERE project_id = '{{ project_id }}' --required;
```
</TabItem>
</Tabs>
