--- 
title: garbage_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - garbage_collections
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

Creates, updates, deletes, gets or lists a <code>garbage_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>garbage_collections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.garbage_collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_list_garbage_collections"
    values={[
        { label: 'registries_list_garbage_collections', value: 'registries_list_garbage_collections' }
    ]}
>
<TabItem value="registries_list_garbage_collections">

The response will be a JSON object with a key of `garbage_collections`. This will be set to an array containing objects representing each past garbage collection. Each will contain the standard Garbage Collection attributes.

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
    <td><CopyableCode code="blobs_deleted" /></td>
    <td><code>integer</code></td>
    <td>The number of blobs deleted as a result of this garbage collection.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the garbage collection was created. (example: 2020-10-30T21:03:24Z)</td>
</tr>
<tr>
    <td><CopyableCode code="freed_bytes" /></td>
    <td><code>integer</code></td>
    <td>The number of bytes freed as a result of this garbage collection.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this garbage collection. (example: requested)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the garbage collection was last updated. (example: 2020-10-30T21:03:44Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the garbage collection. (example: eff0feee-49c7-4e8f-ba5c-a320c109c8a8)</td>
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
    <td><a href="#registries_list_garbage_collections"><CopyableCode code="registries_list_garbage_collections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To get information about past garbage collections for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collections`.</td>
</tr>
<tr>
    <td><a href="#registries_update_garbage_collection"><CopyableCode code="registries_update_garbage_collection" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-garbage_collection_uuid"><code>garbage_collection_uuid</code></a></td>
    <td></td>
    <td>To cancel the currently-active garbage collection for a registry, send a PUT request to `/v2/registries/$REGISTRY_NAME/garbage-collection/$GC_UUID` and specify one or more of the attributes below. It is similar to PUT `/v2/registries/$REGISTRY_NAME/garbage-collection/$GC_UUID` and exists for backward compatibility.</td>
</tr>
<tr>
    <td><a href="#registries_run_garbage_collection"><CopyableCode code="registries_run_garbage_collection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td></td>
    <td>Garbage collection enables users to clear out unreferenced blobs (layer &<br />manifest data) after deleting one or more manifests from a repository. If<br />there are no unreferenced blobs resulting from the deletion of one or more<br />manifests, garbage collection is effectively a noop.<br />[See here for more information](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/)<br />about how and why you should clean up your container registry periodically.<br /><br />To request a garbage collection run on your registry, send a POST request to<br />`/v2/registries/$REGISTRY_NAME/garbage-collection`. This will initiate the<br />following sequence of events on your registry.<br /><br />* Set the registry to read-only mode, meaning no further write-scoped<br />  JWTs will be issued to registry clients. Existing write-scoped JWTs will<br />  continue to work until they expire which can take up to 15 minutes.<br />* Wait until all existing write-scoped JWTs have expired.<br />* Scan all registry manifests to determine which blobs are unreferenced.<br />* Delete all unreferenced blobs from the registry.<br />* Record the number of blobs deleted and bytes freed, mark the garbage<br />  collection status as `success`.<br />* Remove the read-only mode restriction from the registry, meaning write-scoped<br />  JWTs will once again be issued to registry clients.<br /></td>
</tr>
<tr>
    <td><a href="#registry_run_garbage_collection_legacy"><CopyableCode code="registry_run_garbage_collection_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td></td>
    <td>Garbage collection enables users to clear out unreferenced blobs (layer &<br />manifest data) after deleting one or more manifests from a repository. If<br />there are no unreferenced blobs resulting from the deletion of one or more<br />manifests, garbage collection is effectively a noop.<br />[See here for more information](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/)<br />about how and why you should clean up your container registry periodically.<br /><br />To request a garbage collection run on your registry, send a POST request to<br />`/v2/registry/$REGISTRY_NAME/garbage-collection`. This will initiate the<br />following sequence of events on your registry.<br /><br />* Set the registry to read-only mode, meaning no further write-scoped<br />  JWTs will be issued to registry clients. Existing write-scoped JWTs will<br />  continue to work until they expire which can take up to 15 minutes.<br />* Wait until all existing write-scoped JWTs have expired.<br />* Scan all registry manifests to determine which blobs are unreferenced.<br />* Delete all unreferenced blobs from the registry.<br />* Record the number of blobs deleted and bytes freed, mark the garbage<br />  collection status as `success`.<br />* Remove the read-only mode restriction from the registry, meaning write-scoped<br />  JWTs will once again be issued to registry clients.<br /></td>
</tr>
<tr>
    <td><a href="#registry_get_garbage_collection_legacy"><CopyableCode code="registry_get_garbage_collection_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td></td>
    <td>To get information about the currently-active garbage collection for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collection`.</td>
</tr>
<tr>
    <td><a href="#registry_list_garbage_collections_legacy"><CopyableCode code="registry_list_garbage_collections_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To get information about past garbage collections for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collections`.</td>
</tr>
<tr>
    <td><a href="#registry_update_garbage_collection_legacy"><CopyableCode code="registry_update_garbage_collection_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-garbage_collection_uuid"><code>garbage_collection_uuid</code></a></td>
    <td></td>
    <td>To cancel the currently-active garbage collection for a registry, send a PUT request to `/v2/registry/$REGISTRY_NAME/garbage-collection/$GC_UUID` and specify one or more of the attributes below.</td>
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
<tr id="parameter-garbage_collection_uuid">
    <td><CopyableCode code="garbage_collection_uuid" /></td>
    <td><code>string</code></td>
    <td>The UUID of a garbage collection run. (example: eff0feee-49c7-4e8f-ba5c-a320c109c8a8)</td>
</tr>
<tr id="parameter-registry_name">
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of a container registry. (example: example)</td>
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
    defaultValue="registries_list_garbage_collections"
    values={[
        { label: 'registries_list_garbage_collections', value: 'registries_list_garbage_collections' }
    ]}
>
<TabItem value="registries_list_garbage_collections">

To get information about past garbage collections for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collections`.

```sql
SELECT
registry_name,
blobs_deleted,
created_at,
freed_bytes,
status,
updated_at,
uuid
FROM digitalocean.container_registry.garbage_collections
WHERE registry_name = '{{ registry_name }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="registries_update_garbage_collection"
    values={[
        { label: 'registries_update_garbage_collection', value: 'registries_update_garbage_collection' }
    ]}
>
<TabItem value="registries_update_garbage_collection">

To cancel the currently-active garbage collection for a registry, send a PUT request to `/v2/registries/$REGISTRY_NAME/garbage-collection/$GC_UUID` and specify one or more of the attributes below. It is similar to PUT `/v2/registries/$REGISTRY_NAME/garbage-collection/$GC_UUID` and exists for backward compatibility.

```sql
REPLACE digitalocean.container_registry.garbage_collections
SET 
data__cancel = {{ cancel }}
WHERE 
registry_name = '{{ registry_name }}' --required
AND garbage_collection_uuid = '{{ garbage_collection_uuid }}' --required
RETURNING
garbage_collection;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="registries_run_garbage_collection"
    values={[
        { label: 'registries_run_garbage_collection', value: 'registries_run_garbage_collection' },
        { label: 'registry_run_garbage_collection_legacy', value: 'registry_run_garbage_collection_legacy' },
        { label: 'registry_get_garbage_collection_legacy', value: 'registry_get_garbage_collection_legacy' },
        { label: 'registry_list_garbage_collections_legacy', value: 'registry_list_garbage_collections_legacy' },
        { label: 'registry_update_garbage_collection_legacy', value: 'registry_update_garbage_collection_legacy' }
    ]}
>
<TabItem value="registries_run_garbage_collection">

Garbage collection enables users to clear out unreferenced blobs (layer &<br />manifest data) after deleting one or more manifests from a repository. If<br />there are no unreferenced blobs resulting from the deletion of one or more<br />manifests, garbage collection is effectively a noop.<br />[See here for more information](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/)<br />about how and why you should clean up your container registry periodically.<br /><br />To request a garbage collection run on your registry, send a POST request to<br />`/v2/registries/$REGISTRY_NAME/garbage-collection`. This will initiate the<br />following sequence of events on your registry.<br /><br />* Set the registry to read-only mode, meaning no further write-scoped<br />  JWTs will be issued to registry clients. Existing write-scoped JWTs will<br />  continue to work until they expire which can take up to 15 minutes.<br />* Wait until all existing write-scoped JWTs have expired.<br />* Scan all registry manifests to determine which blobs are unreferenced.<br />* Delete all unreferenced blobs from the registry.<br />* Record the number of blobs deleted and bytes freed, mark the garbage<br />  collection status as `success`.<br />* Remove the read-only mode restriction from the registry, meaning write-scoped<br />  JWTs will once again be issued to registry clients.<br />

```sql
EXEC digitalocean.container_registry.garbage_collections.registries_run_garbage_collection 
@registry_name='{{ registry_name }}' --required;
```
</TabItem>
<TabItem value="registry_run_garbage_collection_legacy">

Garbage collection enables users to clear out unreferenced blobs (layer &<br />manifest data) after deleting one or more manifests from a repository. If<br />there are no unreferenced blobs resulting from the deletion of one or more<br />manifests, garbage collection is effectively a noop.<br />[See here for more information](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/)<br />about how and why you should clean up your container registry periodically.<br /><br />To request a garbage collection run on your registry, send a POST request to<br />`/v2/registry/$REGISTRY_NAME/garbage-collection`. This will initiate the<br />following sequence of events on your registry.<br /><br />* Set the registry to read-only mode, meaning no further write-scoped<br />  JWTs will be issued to registry clients. Existing write-scoped JWTs will<br />  continue to work until they expire which can take up to 15 minutes.<br />* Wait until all existing write-scoped JWTs have expired.<br />* Scan all registry manifests to determine which blobs are unreferenced.<br />* Delete all unreferenced blobs from the registry.<br />* Record the number of blobs deleted and bytes freed, mark the garbage<br />  collection status as `success`.<br />* Remove the read-only mode restriction from the registry, meaning write-scoped<br />  JWTs will once again be issued to registry clients.<br />

```sql
EXEC digitalocean.container_registry.garbage_collections.registry_run_garbage_collection_legacy 
@registry_name='{{ registry_name }}' --required 
@@json=
'{
"type": "{{ type }}"
}';
```
</TabItem>
<TabItem value="registry_get_garbage_collection_legacy">

To get information about the currently-active garbage collection for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collection`.

```sql
EXEC digitalocean.container_registry.garbage_collections.registry_get_garbage_collection_legacy 
@registry_name='{{ registry_name }}' --required;
```
</TabItem>
<TabItem value="registry_list_garbage_collections_legacy">

To get information about past garbage collections for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collections`.

```sql
EXEC digitalocean.container_registry.garbage_collections.registry_list_garbage_collections_legacy 
@registry_name='{{ registry_name }}' --required, 
@per_page='{{ per_page }}', 
@page='{{ page }}';
```
</TabItem>
<TabItem value="registry_update_garbage_collection_legacy">

To cancel the currently-active garbage collection for a registry, send a PUT request to `/v2/registry/$REGISTRY_NAME/garbage-collection/$GC_UUID` and specify one or more of the attributes below.

```sql
EXEC digitalocean.container_registry.garbage_collections.registry_update_garbage_collection_legacy 
@registry_name='{{ registry_name }}' --required, 
@garbage_collection_uuid='{{ garbage_collection_uuid }}' --required 
@@json=
'{
"cancel": {{ cancel }}
}';
```
</TabItem>
</Tabs>
