--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - compute
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="tags_get"
    values={[
        { label: 'tags_get', value: 'tags_get' },
        { label: 'tags_list', value: 'tags_list' }
    ]}
>
<TabItem value="tags_get">

The response will be a JSON object with a key called `tag`. <br />The value of this will be a tag object containing the standard tag attributes.<br /><br />Tagged resources will only include resources that you are authorized to see.<br />

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
    <td>The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.  **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.  When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).  Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".  (pattern: ^[a-zA-Z0-9_\-\:]+$, example: extra-awesome)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>Tagged Resource Statistics include metadata regarding the resource type that has been tagged.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="tags_list">

To list all of your tags, you can send a `GET` request to `/v2/tags`.

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
    <td>The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.  **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.  When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).  Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".  (pattern: ^[a-zA-Z0-9_\-\:]+$, example: extra-awesome)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>Tagged Resource Statistics include metadata regarding the resource type that has been tagged.</td>
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
    <td><a href="#tags_get"><CopyableCode code="tags_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tag_id"><code>tag_id</code></a></td>
    <td></td>
    <td>To retrieve an individual tag, you can send a `GET` request to<br />`/v2/tags/$TAG_NAME`.<br /><br />This endpoint will only return tagged resources that you are authorized to see.<br />For example, to see tagged Droplets, include the `droplet:read` scope.<br /></td>
</tr>
<tr>
    <td><a href="#tags_list"><CopyableCode code="tags_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of your tags, you can send a GET request to `/v2/tags`.<br /><br />This endpoint will only return tagged resources that you are authorized to see<br />(e.g. Droplets will only be returned if you have `droplet:read`).<br /></td>
</tr>
<tr>
    <td><a href="#tags_create"><CopyableCode code="tags_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a tag you can send a POST request to `/v2/tags` with a `name` attribute.</td>
</tr>
<tr>
    <td><a href="#tags_delete"><CopyableCode code="tags_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tag_id"><code>tag_id</code></a></td>
    <td></td>
    <td>A tag can be deleted by sending a `DELETE` request to `/v2/tags/$TAG_NAME`. Deleting a tag also untags all the resources that have previously been tagged by the Tag</td>
</tr>
<tr>
    <td><a href="#tags_assign_resources"><CopyableCode code="tags_assign_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tag_id"><code>tag_id</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Resources can be tagged by sending a POST request to<br />`/v2/tags/$TAG_NAME/resources` with an array of json objects containing<br />`resource_id` and `resource_type` attributes.<br /><br />Currently only tagging of Droplets, Databases, Images, Volumes, and Volume<br />Snapshots is supported. `resource_type` is expected to be the string `droplet`,<br />`database`, `image`, `volume` or `volume_snapshot`. `resource_id` is expected<br />to be the ID of the resource as a string.<br /><br />In order to tag a resource, you must have both `tag:create` and `<resource type>:update` scopes. For example, <br />to tag a Droplet, you must have `tag:create` and `droplet:update`.<br /></td>
</tr>
<tr>
    <td><a href="#tags_unassign_resources"><CopyableCode code="tags_unassign_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tag_id"><code>tag_id</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Resources can be untagged by sending a DELETE request to<br />`/v2/tags/$TAG_NAME/resources` with an array of json objects containing<br />`resource_id` and `resource_type` attributes.<br /><br />Currently only untagging of Droplets, Databases, Images, Volumes, and Volume<br />Snapshots is supported. `resource_type` is expected to be the string `droplet`,<br />`database`, `image`, `volume` or `volume_snapshot`. `resource_id` is expected<br />to be the ID of the resource as a string.<br /><br />In order to untag a resource, you must have both `tag:delete` and `<resource type>:update` scopes. For example, <br />to untag a Droplet, you must have `tag:delete` and `droplet:update`.<br /></td>
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
<tr id="parameter-tag_id">
    <td><CopyableCode code="tag_id" /></td>
    <td><code>string</code></td>
    <td>The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. (example: awesome)</td>
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
    defaultValue="tags_get"
    values={[
        { label: 'tags_get', value: 'tags_get' },
        { label: 'tags_list', value: 'tags_list' }
    ]}
>
<TabItem value="tags_get">

To retrieve an individual tag, you can send a `GET` request to<br />`/v2/tags/$TAG_NAME`.<br /><br />This endpoint will only return tagged resources that you are authorized to see.<br />For example, to see tagged Droplets, include the `droplet:read` scope.<br />

```sql
SELECT
name,
resources
FROM digitalocean.compute.tags
WHERE tag_id = '{{ tag_id }}' -- required;
```
</TabItem>
<TabItem value="tags_list">

To list all of your tags, you can send a GET request to `/v2/tags`.<br /><br />This endpoint will only return tagged resources that you are authorized to see<br />(e.g. Droplets will only be returned if you have `droplet:read`).<br />

```sql
SELECT
name,
resources
FROM digitalocean.compute.tags
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="tags_create"
    values={[
        { label: 'tags_create', value: 'tags_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="tags_create">

To create a tag you can send a POST request to `/v2/tags` with a `name` attribute.

```sql
INSERT INTO digitalocean.compute.tags (
data__name
)
SELECT 
'{{ name }}'
RETURNING
tag
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tags
  props:
    - name: name
      value: string
      description: >
        The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores.
There is a limit of 255 characters per tag.

**Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.

When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).

Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".

```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="tags_delete"
    values={[
        { label: 'tags_delete', value: 'tags_delete' }
    ]}
>
<TabItem value="tags_delete">

A tag can be deleted by sending a `DELETE` request to `/v2/tags/$TAG_NAME`. Deleting a tag also untags all the resources that have previously been tagged by the Tag

```sql
DELETE FROM digitalocean.compute.tags
WHERE tag_id = '{{ tag_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="tags_assign_resources"
    values={[
        { label: 'tags_assign_resources', value: 'tags_assign_resources' },
        { label: 'tags_unassign_resources', value: 'tags_unassign_resources' }
    ]}
>
<TabItem value="tags_assign_resources">

Resources can be tagged by sending a POST request to<br />`/v2/tags/$TAG_NAME/resources` with an array of json objects containing<br />`resource_id` and `resource_type` attributes.<br /><br />Currently only tagging of Droplets, Databases, Images, Volumes, and Volume<br />Snapshots is supported. `resource_type` is expected to be the string `droplet`,<br />`database`, `image`, `volume` or `volume_snapshot`. `resource_id` is expected<br />to be the ID of the resource as a string.<br /><br />In order to tag a resource, you must have both `tag:create` and `<resource type>:update` scopes. For example, <br />to tag a Droplet, you must have `tag:create` and `droplet:update`.<br />

```sql
EXEC digitalocean.compute.tags.tags_assign_resources 
@tag_id='{{ tag_id }}' --required 
@@json=
'{
"resources": "{{ resources }}"
}';
```
</TabItem>
<TabItem value="tags_unassign_resources">

Resources can be untagged by sending a DELETE request to<br />`/v2/tags/$TAG_NAME/resources` with an array of json objects containing<br />`resource_id` and `resource_type` attributes.<br /><br />Currently only untagging of Droplets, Databases, Images, Volumes, and Volume<br />Snapshots is supported. `resource_type` is expected to be the string `droplet`,<br />`database`, `image`, `volume` or `volume_snapshot`. `resource_id` is expected<br />to be the ID of the resource as a string.<br /><br />In order to untag a resource, you must have both `tag:delete` and `<resource type>:update` scopes. For example, <br />to untag a Droplet, you must have `tag:delete` and `droplet:update`.<br />

```sql
EXEC digitalocean.compute.tags.tags_unassign_resources 
@tag_id='{{ tag_id }}' --required 
@@json=
'{
"resources": "{{ resources }}"
}';
```
</TabItem>
</Tabs>
