--- 
title: active_garbage_collection
hide_title: false
hide_table_of_contents: false
keywords:
  - active_garbage_collection
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

Creates, updates, deletes, gets or lists an <code>active_garbage_collection</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>active_garbage_collection</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.active_garbage_collection" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_get_garbage_collection"
    values={[
        { label: 'registries_get_garbage_collection', value: 'registries_get_garbage_collection' }
    ]}
>
<TabItem value="registries_get_garbage_collection">

The response will be a JSON object with a key of `garbage_collection`. This will be a json object with attributes representing the currently-active garbage collection.

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
    <td><a href="#registries_get_garbage_collection"><CopyableCode code="registries_get_garbage_collection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td></td>
    <td>To get information about the currently-active garbage collection for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collection`.</td>
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
    defaultValue="registries_get_garbage_collection"
    values={[
        { label: 'registries_get_garbage_collection', value: 'registries_get_garbage_collection' }
    ]}
>
<TabItem value="registries_get_garbage_collection">

To get information about the currently-active garbage collection for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collection`.

```sql
SELECT
registry_name,
blobs_deleted,
created_at,
freed_bytes,
status,
updated_at,
uuid
FROM digitalocean.container_registry.active_garbage_collection
WHERE registry_name = '{{ registry_name }}' -- required;
```
</TabItem>
</Tabs>
