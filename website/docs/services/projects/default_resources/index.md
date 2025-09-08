--- 
title: default_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - default_resources
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

Creates, updates, deletes, gets or lists a <code>default_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>default_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.projects.default_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_list_resources_default"
    values={[
        { label: 'projects_list_resources_default', value: 'projects_list_resources_default' }
    ]}
>
<TabItem value="projects_list_resources_default">

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
    <td><a href="#projects_list_resources_default"><CopyableCode code="projects_list_resources_default" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all your resources in your default project, send a GET request to `/v2/projects/default/resources`.<br /><br />Only resources that you are authorized to see will be returned. For example, to see Droplets in a project, include the `droplet:read` scope.<br /></td>
</tr>
<tr>
    <td><a href="#projects_assign_resources_default"><CopyableCode code="projects_assign_resources_default" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To assign resources to your default project, send a POST request to `/v2/projects/default/resources`.<br /><br />You must have both project:update and &lt;resource&gt;:read scopes to assign new resources. For example, to assign a Droplet to the default project, include both the `project:update` and `droplet:read` scopes.<br /></td>
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
    defaultValue="projects_list_resources_default"
    values={[
        { label: 'projects_list_resources_default', value: 'projects_list_resources_default' }
    ]}
>
<TabItem value="projects_list_resources_default">

To list all your resources in your default project, send a GET request to `/v2/projects/default/resources`.<br /><br />Only resources that you are authorized to see will be returned. For example, to see Droplets in a project, include the `droplet:read` scope.<br />

```sql
SELECT
assigned_at,
links,
status,
urn
FROM digitalocean.projects.default_resources;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_assign_resources_default"
    values={[
        { label: 'projects_assign_resources_default', value: 'projects_assign_resources_default' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_assign_resources_default">

To assign resources to your default project, send a POST request to `/v2/projects/default/resources`.<br /><br />You must have both project:update and &lt;resource&gt;:read scopes to assign new resources. For example, to assign a Droplet to the default project, include both the `project:update` and `droplet:read` scopes.<br />

```sql
INSERT INTO digitalocean.projects.default_resources (
data__resources
)
SELECT 
'{{ resources }}'
RETURNING
resources
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: default_resources
  props:
    - name: resources
      value: array
      description: >
        A list of uniform resource names (URNs) to be added to a project. Only resources that you are authorized to see will be returned.
        
```
</TabItem>
</Tabs>
