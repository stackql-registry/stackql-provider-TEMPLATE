--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
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

Creates, updates, deletes, gets or lists a <code>repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>repositories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_list_repositories_v2"
    values={[
        { label: 'registries_list_repositories_v2', value: 'registries_list_repositories_v2' }
    ]}
>
<TabItem value="registries_list_repositories_v2">

The response body will be a JSON object with a key of `repositories`. This will be set to an array containing objects each representing a repository.

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
    <td>The name of the repository. (example: repo-1)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the container registry. (example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_manifest" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="manifest_count" /></td>
    <td><code>integer</code></td>
    <td>The number of manifests in the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_count" /></td>
    <td><code>integer</code></td>
    <td>The number of tags in the repository.</td>
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
    <td><a href="#registries_list_repositories_v2"><CopyableCode code="registries_list_repositories_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>To list all repositories in your container registry, send a GET request to `/v2/registries/$REGISTRY_NAME/repositoriesV2`. It is similar to GET `/v2/registry/$REGISTRY_NAME/repositoriesV2` and exists for backward compatibility.</td>
</tr>
<tr>
    <td><a href="#registries_delete_repository"><CopyableCode code="registries_delete_repository" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-repository_name"><code>repository_name</code></a></td>
    <td></td>
    <td>To delete a container repository including all of its tags, send a DELETE request to<br />`/v2/registries/$REGISTRY_NAME/repositories/$REPOSITORY_NAME`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
</tr>
<tr>
    <td><a href="#registry_list_repositories_legacy"><CopyableCode code="registry_list_repositories_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>This endpoint has been deprecated in favor of the _List All Container Registry Repositories [V2]_ endpoint.<br /><br />To list all repositories in your container registry, send a GET<br />request to `/v2/registry/$REGISTRY_NAME/repositories`.<br /></td>
</tr>
<tr>
    <td><a href="#registry_list_repositories_v2_legacy"><CopyableCode code="registry_list_repositories_v2_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>To list all repositories in your container registry, send a GET request to `/v2/registry/$REGISTRY_NAME/repositoriesV2`.</td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Which 'page' of paginated results to return. Ignored when 'page_token' is provided. (example: 1)</td>
</tr>
<tr id="parameter-page_token">
    <td><CopyableCode code="page_token" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve of the next or previous set of results more quickly than using 'page'. (example: eyJUb2tlbiI6IkNnZGpiMjlz)</td>
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
    defaultValue="registries_list_repositories_v2"
    values={[
        { label: 'registries_list_repositories_v2', value: 'registries_list_repositories_v2' }
    ]}
>
<TabItem value="registries_list_repositories_v2">

To list all repositories in your container registry, send a GET request to `/v2/registries/$REGISTRY_NAME/repositoriesV2`. It is similar to GET `/v2/registry/$REGISTRY_NAME/repositoriesV2` and exists for backward compatibility.

```sql
SELECT
name,
registry_name,
latest_manifest,
manifest_count,
tag_count
FROM digitalocean.container_registry.repositories
WHERE registry_name = '{{ registry_name }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND page_token = '{{ page_token }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="registries_delete_repository"
    values={[
        { label: 'registries_delete_repository', value: 'registries_delete_repository' }
    ]}
>
<TabItem value="registries_delete_repository">

To delete a container repository including all of its tags, send a DELETE request to<br />`/v2/registries/$REGISTRY_NAME/repositories/$REPOSITORY_NAME`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.container_registry.repositories
WHERE registry_name = '{{ registry_name }}' --required
AND repository_name = '{{ repository_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="registry_list_repositories_legacy"
    values={[
        { label: 'registry_list_repositories_legacy', value: 'registry_list_repositories_legacy' },
        { label: 'registry_list_repositories_v2_legacy', value: 'registry_list_repositories_v2_legacy' }
    ]}
>
<TabItem value="registry_list_repositories_legacy">

This endpoint has been deprecated in favor of the _List All Container Registry Repositories [V2]_ endpoint.<br /><br />To list all repositories in your container registry, send a GET<br />request to `/v2/registry/$REGISTRY_NAME/repositories`.<br />

```sql
EXEC digitalocean.container_registry.repositories.registry_list_repositories_legacy 
@registry_name='{{ registry_name }}' --required, 
@per_page='{{ per_page }}', 
@page='{{ page }}';
```
</TabItem>
<TabItem value="registry_list_repositories_v2_legacy">

To list all repositories in your container registry, send a GET request to `/v2/registry/$REGISTRY_NAME/repositoriesV2`.

```sql
EXEC digitalocean.container_registry.repositories.registry_list_repositories_v2_legacy 
@registry_name='{{ registry_name }}' --required, 
@per_page='{{ per_page }}', 
@page='{{ page }}', 
@page_token='{{ page_token }}';
```
</TabItem>
</Tabs>
