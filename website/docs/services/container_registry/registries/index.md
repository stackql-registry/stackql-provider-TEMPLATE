--- 
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
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

Creates, updates, deletes, gets or lists a <code>registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>registries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.registries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_get"
    values={[
        { label: 'registries_get', value: 'registries_get' },
        { label: 'registries_list', value: 'registries_list' }
    ]}
>
<TabItem value="registries_get">

The response will be a JSON object with the key `registry` containing information about your registry.

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
    <td>A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. (pattern: ^[a-z0-9-]&#123;1,63&#125;$, example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the registry was created. (example: 2020-03-21T16:02:37Z)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Slug of the region where registry data is stored (example: fra1)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_usage_bytes" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage used in the registry in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_usage_bytes_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the storage usage was updated. Storage usage is calculated asynchronously, and may not immediately reflect pushes to the registry. (example: 2020-11-04T21:39:49.530562231Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="registries_list">

The response will be a JSON object with the key `registry` containing information about your registry.

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
    <td><a href="#registries_get"><CopyableCode code="registries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td></td>
    <td>To get information about any container registry in your account, send a GET request to `/v2/registries/&#123;registry_name&#125;`.</td>
</tr>
<tr>
    <td><a href="#registries_list"><CopyableCode code="registries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To get information about any container registry in your account, send a GET request to `/v2/registries/`.</td>
</tr>
<tr>
    <td><a href="#registries_create"><CopyableCode code="registries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To create your container registry, send a POST request to `/v2/registries`.<br /><br />The `name` becomes part of the URL for images stored in the registry. For<br />example, if your registry is called `example`, an image in it will have the<br />URL `registry.digitalocean.com/example/image:tag`.<br /></td>
</tr>
<tr>
    <td><a href="#registries_delete"><CopyableCode code="registries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td></td>
    <td>To delete your container registry, destroying all container image data stored in it, send a DELETE request to `/v2/registries/&#123;registry_name&#125;`.</td>
</tr>
<tr>
    <td><a href="#registries_validate_name"><CopyableCode code="registries_validate_name" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>To validate that a container registry name is available for use, send a POST<br />request to `/v2/registries/validate-name`.<br /><br />If the name is both formatted correctly and available, the response code will<br />be 204 and contain no body. If the name is already in use, the response will<br />be a 409 Conflict. <br /><br />It is similar to `/v2/registry/validate-name` and exists for backward compatibility.<br /></td>
</tr>
<tr>
    <td><a href="#registry_get_legacy"><CopyableCode code="registry_get_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To get information about your container registry, send a GET request to `/v2/registry`.<br />This operation is not compatible with multiple registries in a DO account. You should use `/v2/registries/&#123;registry_name&#125;` instead.</td>
</tr>
<tr>
    <td><a href="#registry_create_legacy"><CopyableCode code="registry_create_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subscription_tier_slug"><code>subscription_tier_slug</code></a></td>
    <td></td>
    <td>To create your container registry, send a POST request to `/v2/registry`.<br /><br />The `name` becomes part of the URL for images stored in the registry. For<br />example, if your registry is called `example`, an image in it will have the<br />URL `registry.digitalocean.com/example/image:tag`.<br /></td>
</tr>
<tr>
    <td><a href="#registry_delete_legacy"><CopyableCode code="registry_delete_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To delete your container registry, destroying all container image data stored in it, send a DELETE request to `/v2/registry`.<br />This operation is not compatible with multiple registries in a DO account. You should use `/v2/registries/&#123;registry_name&#125;` instead.</td>
</tr>
<tr>
    <td><a href="#registry_validate_name_legacy"><CopyableCode code="registry_validate_name_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>To validate that a container registry name is available for use, send a POST<br />request to `/v2/registry/validate-name`.<br /><br />If the name is both formatted correctly and available, the response code will<br />be 204 and contain no body. If the name is already in use, the response will<br />be a 409 Conflict.<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="registries_get"
    values={[
        { label: 'registries_get', value: 'registries_get' },
        { label: 'registries_list', value: 'registries_list' }
    ]}
>
<TabItem value="registries_get">

To get information about any container registry in your account, send a GET request to `/v2/registries/&#123;registry_name&#125;`.

```sql
SELECT
name,
created_at,
region,
storage_usage_bytes,
storage_usage_bytes_updated_at
FROM digitalocean.container_registry.registries
WHERE registry_name = '{{ registry_name }}' -- required;
```
</TabItem>
<TabItem value="registries_list">

To get information about any container registry in your account, send a GET request to `/v2/registries/`.

```sql
SELECT
*
FROM digitalocean.container_registry.registries;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="registries_create"
    values={[
        { label: 'registries_create', value: 'registries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="registries_create">

To create your container registry, send a POST request to `/v2/registries`.<br /><br />The `name` becomes part of the URL for images stored in the registry. For<br />example, if your registry is called `example`, an image in it will have the<br />URL `registry.digitalocean.com/example/image:tag`.<br />

```sql
INSERT INTO digitalocean.container_registry.registries (
data__name,
data__subscription_tier_slug,
data__region
)
SELECT 
'{{ name }}' --required,
'{{ subscription_tier_slug }}',
'{{ region }}'
RETURNING
registry
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: registries
  props:
    - name: name
      value: string
      description: >
        A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters.
        
    - name: subscription_tier_slug
      value: string
      description: >
        The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint.
        
      valid_values: ['starter', 'basic', 'professional']
    - name: region
      value: string
      description: >
        Slug of the region where registry data is stored. When not provided, a region will be selected.
        
      valid_values: ['nyc3', 'sfo3', 'sfo2', 'ams3', 'sgp1', 'fra1', 'blr1', 'syd1']
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="registries_delete"
    values={[
        { label: 'registries_delete', value: 'registries_delete' }
    ]}
>
<TabItem value="registries_delete">

To delete your container registry, destroying all container image data stored in it, send a DELETE request to `/v2/registries/&#123;registry_name&#125;`.

```sql
DELETE FROM digitalocean.container_registry.registries
WHERE registry_name = '{{ registry_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="registries_validate_name"
    values={[
        { label: 'registries_validate_name', value: 'registries_validate_name' },
        { label: 'registry_get_legacy', value: 'registry_get_legacy' },
        { label: 'registry_create_legacy', value: 'registry_create_legacy' },
        { label: 'registry_delete_legacy', value: 'registry_delete_legacy' },
        { label: 'registry_validate_name_legacy', value: 'registry_validate_name_legacy' }
    ]}
>
<TabItem value="registries_validate_name">

To validate that a container registry name is available for use, send a POST<br />request to `/v2/registries/validate-name`.<br /><br />If the name is both formatted correctly and available, the response code will<br />be 204 and contain no body. If the name is already in use, the response will<br />be a 409 Conflict. <br /><br />It is similar to `/v2/registry/validate-name` and exists for backward compatibility.<br />

```sql
EXEC digitalocean.container_registry.registries.registries_validate_name 
@@json=
'{
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="registry_get_legacy">

To get information about your container registry, send a GET request to `/v2/registry`.<br />This operation is not compatible with multiple registries in a DO account. You should use `/v2/registries/&#123;registry_name&#125;` instead.

```sql
EXEC digitalocean.container_registry.registries.registry_get_legacy 
;
```
</TabItem>
<TabItem value="registry_create_legacy">

To create your container registry, send a POST request to `/v2/registry`.<br /><br />The `name` becomes part of the URL for images stored in the registry. For<br />example, if your registry is called `example`, an image in it will have the<br />URL `registry.digitalocean.com/example/image:tag`.<br />

```sql
EXEC digitalocean.container_registry.registries.registry_create_legacy 
@@json=
'{
"name": "{{ name }}", 
"subscription_tier_slug": "{{ subscription_tier_slug }}", 
"region": "{{ region }}"
}';
```
</TabItem>
<TabItem value="registry_delete_legacy">

To delete your container registry, destroying all container image data stored in it, send a DELETE request to `/v2/registry`.<br />This operation is not compatible with multiple registries in a DO account. You should use `/v2/registries/&#123;registry_name&#125;` instead.

```sql
EXEC digitalocean.container_registry.registries.registry_delete_legacy 
;
```
</TabItem>
<TabItem value="registry_validate_name_legacy">

To validate that a container registry name is available for use, send a POST<br />request to `/v2/registry/validate-name`.<br /><br />If the name is both formatted correctly and available, the response code will<br />be 204 and contain no body. If the name is already in use, the response will<br />be a 409 Conflict.<br />

```sql
EXEC digitalocean.container_registry.registries.registry_validate_name_legacy 
@@json=
'{
"name": "{{ name }}"
}';
```
</TabItem>
</Tabs>
