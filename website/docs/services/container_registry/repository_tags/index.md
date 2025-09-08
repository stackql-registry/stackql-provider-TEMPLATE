--- 
title: repository_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_tags
  - container_registry
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

Creates, updates, deletes, gets or lists a <code>repository_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>repository_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.repository_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_list_repository_tags"
    values={[
        { label: 'registries_list_repository_tags', value: 'registries_list_repository_tags' }
    ]}
>
<TabItem value="registries_list_repository_tags">

The response body will be a JSON object with a key of `tags`. This will be set to an array containing objects each representing a tag.

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
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the container registry. (example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="compressed_size_bytes" /></td>
    <td><code>integer</code></td>
    <td>The compressed size of the tag in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_digest" /></td>
    <td><code>string</code></td>
    <td>The digest of the manifest associated with the tag. (example: sha256:cb8a924afdf0229ef7515d9e5b3024e23b3eb03ddbba287f4a19c6ac90b8d221)</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository. (example: repo-1)</td>
</tr>
<tr>
    <td><CopyableCode code="size_bytes" /></td>
    <td><code>integer</code></td>
    <td>The uncompressed size of the tag in bytes (this size is calculated asynchronously so it may not be immediately available).</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>The name of the tag. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the tag was last updated. (example: 2020-04-09T23:54:25Z)</td>
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
    <td><a href="#registries_list_repository_tags"><CopyableCode code="registries_list_repository_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-repository_name"><code>repository_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all tags in one of your container registry's repository, send a GET<br />request to `/v2/registries/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to list tags for<br />`registry.digitalocean.com/example/my/repo`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags`. <br /><br />It is similar to GET `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags` and exists for backward compatibility.<br /></td>
</tr>
<tr>
    <td><a href="#registries_delete_repository_tag"><CopyableCode code="registries_delete_repository_tag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-repository_name"><code>repository_name</code></a>, <a href="#parameter-repository_tag"><code>repository_tag</code></a></td>
    <td></td>
    <td>To delete a container repository tag in on of our container registries, send a DELETE request to<br />`/v2/registries/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to delete<br />`registry.digitalocean.com/example/my/repo:mytag`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags/mytag`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully. It is similar to DELETE `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG` and exists for backward compatibility.<br /></td>
</tr>
<tr>
    <td><a href="#registry_list_repository_tags_legacy"><CopyableCode code="registry_list_repository_tags_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-repository_name"><code>repository_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all tags in your container registry repository, send a GET<br />request to `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to list tags for<br />`registry.digitalocean.com/example/my/repo`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags`.<br /></td>
</tr>
<tr>
    <td><a href="#registry_delete_repository_tag_legacy"><CopyableCode code="registry_delete_repository_tag_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-repository_name"><code>repository_name</code></a>, <a href="#parameter-repository_tag"><code>repository_tag</code></a></td>
    <td></td>
    <td>To delete a container repository tag, send a DELETE request to<br />`/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to delete<br />`registry.digitalocean.com/example/my/repo:mytag`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags/mytag`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
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
<tr id="parameter-registry_name">
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of a container registry. (example: example)</td>
</tr>
<tr id="parameter-repository_name">
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. (example: repo-1)</td>
</tr>
<tr id="parameter-repository_tag">
    <td><CopyableCode code="repository_tag" /></td>
    <td><code>string</code></td>
    <td>The name of a container registry repository tag. (example: 06a447a)</td>
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
    defaultValue="registries_list_repository_tags"
    values={[
        { label: 'registries_list_repository_tags', value: 'registries_list_repository_tags' }
    ]}
>
<TabItem value="registries_list_repository_tags">

To list all tags in one of your container registry's repository, send a GET<br />request to `/v2/registries/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to list tags for<br />`registry.digitalocean.com/example/my/repo`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags`. <br /><br />It is similar to GET `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags` and exists for backward compatibility.<br />

```sql
SELECT
registry_name,
compressed_size_bytes,
manifest_digest,
repository,
size_bytes,
tag,
updated_at
FROM digitalocean.container_registry.repository_tags
WHERE registry_name = '{{ registry_name }}' -- required
AND repository_name = '{{ repository_name }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="registries_delete_repository_tag"
    values={[
        { label: 'registries_delete_repository_tag', value: 'registries_delete_repository_tag' }
    ]}
>
<TabItem value="registries_delete_repository_tag">

To delete a container repository tag in on of our container registries, send a DELETE request to<br />`/v2/registries/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to delete<br />`registry.digitalocean.com/example/my/repo:mytag`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags/mytag`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully. It is similar to DELETE `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG` and exists for backward compatibility.<br />

```sql
DELETE FROM digitalocean.container_registry.repository_tags
WHERE registry_name = '{{ registry_name }}' --required
AND repository_name = '{{ repository_name }}' --required
AND repository_tag = '{{ repository_tag }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="registry_list_repository_tags_legacy"
    values={[
        { label: 'registry_list_repository_tags_legacy', value: 'registry_list_repository_tags_legacy' },
        { label: 'registry_delete_repository_tag_legacy', value: 'registry_delete_repository_tag_legacy' }
    ]}
>
<TabItem value="registry_list_repository_tags_legacy">

To list all tags in your container registry repository, send a GET<br />request to `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to list tags for<br />`registry.digitalocean.com/example/my/repo`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags`.<br />

```sql
EXEC digitalocean.container_registry.repository_tags.registry_list_repository_tags_legacy 
@registry_name='{{ registry_name }}' --required, 
@repository_name='{{ repository_name }}' --required, 
@per_page='{{ per_page }}', 
@page='{{ page }}';
```
</TabItem>
<TabItem value="registry_delete_repository_tag_legacy">

To delete a container repository tag, send a DELETE request to<br />`/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG`.<br /><br />Note that if your repository name contains `/` characters, it must be<br />URL-encoded in the request URL. For example, to delete<br />`registry.digitalocean.com/example/my/repo:mytag`, the path would be<br />`/v2/registry/example/repositories/my%2Frepo/tags/mytag`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
EXEC digitalocean.container_registry.repository_tags.registry_delete_repository_tag_legacy 
@registry_name='{{ registry_name }}' --required, 
@repository_name='{{ repository_name }}' --required, 
@repository_tag='{{ repository_tag }}' --required;
```
</TabItem>
</Tabs>
