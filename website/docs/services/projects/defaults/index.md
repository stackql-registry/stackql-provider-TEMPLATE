--- 
title: defaults
hide_title: false
hide_table_of_contents: false
keywords:
  - defaults
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

Creates, updates, deletes, gets or lists a <code>defaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>defaults</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.projects.defaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_get_default"
    values={[
        { label: 'projects_get_default', value: 'projects_get_default' }
    ]}
>
<TabItem value="projects_get_default">

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
    <td><a href="#projects_get_default"><CopyableCode code="projects_get_default" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To get your default project, send a GET request to `/v2/projects/default`.</td>
</tr>
<tr>
    <td><a href="#projects_patch_default"><CopyableCode code="projects_patch_default" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>To update only specific attributes of your default project, send a PATCH request to `/v2/projects/default`. At least one of the following attributes needs to be sent.</td>
</tr>
<tr>
    <td><a href="#projects_update_default"><CopyableCode code="projects_update_default" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__description"><code>data__description</code></a>, <a href="#parameter-data__purpose"><code>data__purpose</code></a>, <a href="#parameter-data__environment"><code>data__environment</code></a>, <a href="#parameter-data__is_default"><code>data__is_default</code></a></td>
    <td></td>
    <td>To update you default project, send a PUT request to `/v2/projects/default`. All of the following attributes must be sent.</td>
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
    defaultValue="projects_get_default"
    values={[
        { label: 'projects_get_default', value: 'projects_get_default' }
    ]}
>
<TabItem value="projects_get_default">

To get your default project, send a GET request to `/v2/projects/default`.

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
FROM digitalocean.projects.defaults;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_patch_default"
    values={[
        { label: 'projects_patch_default', value: 'projects_patch_default' }
    ]}
>
<TabItem value="projects_patch_default">

To update only specific attributes of your default project, send a PATCH request to `/v2/projects/default`. At least one of the following attributes needs to be sent.

```sql
UPDATE digitalocean.projects.defaults
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__purpose = '{{ purpose }}',
data__environment = '{{ environment }}',
data__is_default = {{ is_default }}
WHERE 

RETURNING
project;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_update_default"
    values={[
        { label: 'projects_update_default', value: 'projects_update_default' }
    ]}
>
<TabItem value="projects_update_default">

To update you default project, send a PUT request to `/v2/projects/default`. All of the following attributes must be sent.

```sql
REPLACE digitalocean.projects.defaults
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__purpose = '{{ purpose }}',
data__environment = '{{ environment }}',
data__is_default = {{ is_default }}
WHERE 
data__name = '{{ name }}' --required
AND data__description = '{{ description }}' --required
AND data__purpose = '{{ purpose }}' --required
AND data__environment = '{{ environment }}' --required
AND data__is_default = {{ is_default }} --required
RETURNING
project;
```
</TabItem>
</Tabs>
