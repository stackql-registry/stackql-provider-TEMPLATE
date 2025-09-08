--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
  - spaces
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.spaces.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="spaces_key_get"
    values={[
        { label: 'spaces_key_get', value: 'spaces_key_get' },
        { label: 'spaces_key_list', value: 'spaces_key_list' }
    ]}
>
<TabItem value="spaces_key_get">

A JSON response containing details about the key.

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
    <td>The access key's name. (example: my-access-key)</td>
</tr>
<tr>
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>The Access Key ID used to access a bucket. (example: DOACCESSKEYEXAMPLE)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the key was created. (example: 2018-07-19T15:04:16Z)</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>The list of permissions for the access key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="spaces_key_list">

A JSON response containing a list of keys.

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
    <td>The access key's name. (example: my-access-key)</td>
</tr>
<tr>
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>The Access Key ID used to access a bucket. (example: DOACCESSKEYEXAMPLE)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the key was created. (example: 2018-07-19T15:04:16Z)</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>The list of permissions for the access key.</td>
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
    <td><a href="#spaces_key_get"><CopyableCode code="spaces_key_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_key"><code>access_key</code></a></td>
    <td></td>
    <td>To get a Spaces Access Key, send a GET request to `/v2/spaces/keys/$ACCESS_KEY`.<br /><br />A successful request will return the Access Key.<br /></td>
</tr>
<tr>
    <td><a href="#spaces_key_list"><CopyableCode code="spaces_key_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-sort_direction"><code>sort_direction</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-permission"><code>permission</code></a></td>
    <td>To list Spaces Access Key, send a GET request to `/v2/spaces/keys`. Sort parameter must be used with Sort Direction.<br /></td>
</tr>
<tr>
    <td><a href="#spaces_key_create"><CopyableCode code="spaces_key_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new Spaces Access Key, send a POST request to `/v2/spaces/keys`.<br />At the moment, you cannot mix a fullaccess permission with scoped permissions.<br />A fullaccess permission will be prioritized if fullaccess and scoped permissions are both added.<br /></td>
</tr>
<tr>
    <td><a href="#spaces_key_patch"><CopyableCode code="spaces_key_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-access_key"><code>access_key</code></a></td>
    <td></td>
    <td>To update Spaces Access Key, send a PUT or PATCH request to `/v2/spaces/keys/$ACCESS_KEY`. At the moment, you cannot convert a<br />fullaccess key to a scoped key or vice versa. You can only update the name of the key.<br /></td>
</tr>
<tr>
    <td><a href="#spaces_key_update"><CopyableCode code="spaces_key_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-access_key"><code>access_key</code></a></td>
    <td></td>
    <td>To update Spaces Access Key, send a PUT or PATCH request to `/v2/spaces/keys/$ACCESS_KEY`. At the moment, you cannot convert a<br />fullaccess key to a scoped key or vice versa. You can only update the name of the key.<br /></td>
</tr>
<tr>
    <td><a href="#spaces_key_delete"><CopyableCode code="spaces_key_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_key"><code>access_key</code></a></td>
    <td></td>
    <td>To delete a Spaces Access Key, send a DELETE request to `/v2/spaces/keys/$ACCESS_KEY`.<br /><br />A successful request will return a `204 No Content` status code.<br /></td>
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
<tr id="parameter-access_key">
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>The access key's ID. (example: DOACCESSKEYEXAMPLE)</td>
</tr>
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The bucket's name. (example: my-bucket)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The access key's name. (example: my-access-key)</td>
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
<tr id="parameter-permission">
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The permission of the access key. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string. (example: read)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. (example: created_at)</td>
</tr>
<tr id="parameter-sort_direction">
    <td><CopyableCode code="sort_direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort by. Possible values are `asc` or `desc`. (example: desc)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="spaces_key_get"
    values={[
        { label: 'spaces_key_get', value: 'spaces_key_get' },
        { label: 'spaces_key_list', value: 'spaces_key_list' }
    ]}
>
<TabItem value="spaces_key_get">

To get a Spaces Access Key, send a GET request to `/v2/spaces/keys/$ACCESS_KEY`.<br /><br />A successful request will return the Access Key.<br />

```sql
SELECT
name,
access_key,
created_at,
grants
FROM digitalocean.spaces.keys
WHERE access_key = '{{ access_key }}' -- required;
```
</TabItem>
<TabItem value="spaces_key_list">

To list Spaces Access Key, send a GET request to `/v2/spaces/keys`. Sort parameter must be used with Sort Direction.<br />

```sql
SELECT
name,
access_key,
created_at,
grants
FROM digitalocean.spaces.keys
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND sort = '{{ sort }}'
AND sort_direction = '{{ sort_direction }}'
AND name = '{{ name }}'
AND bucket = '{{ bucket }}'
AND permission = '{{ permission }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="spaces_key_create"
    values={[
        { label: 'spaces_key_create', value: 'spaces_key_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="spaces_key_create">

To create a new Spaces Access Key, send a POST request to `/v2/spaces/keys`.<br />At the moment, you cannot mix a fullaccess permission with scoped permissions.<br />A fullaccess permission will be prioritized if fullaccess and scoped permissions are both added.<br />

```sql
INSERT INTO digitalocean.spaces.keys (
data__name,
data__grants
)
SELECT 
'{{ name }}',
'{{ grants }}'
RETURNING
key
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: keys
  props:
    - name: name
      value: string
      description: >
        The access key's name.
        
    - name: grants
      value: array
      description: >
        The list of permissions for the access key.
        
      default: 
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="spaces_key_patch"
    values={[
        { label: 'spaces_key_patch', value: 'spaces_key_patch' }
    ]}
>
<TabItem value="spaces_key_patch">

To update Spaces Access Key, send a PUT or PATCH request to `/v2/spaces/keys/$ACCESS_KEY`. At the moment, you cannot convert a<br />fullaccess key to a scoped key or vice versa. You can only update the name of the key.<br />

```sql
UPDATE digitalocean.spaces.keys
SET 
data__name = '{{ name }}',
data__grants = '{{ grants }}'
WHERE 
access_key = '{{ access_key }}' --required
RETURNING
key;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="spaces_key_update"
    values={[
        { label: 'spaces_key_update', value: 'spaces_key_update' }
    ]}
>
<TabItem value="spaces_key_update">

To update Spaces Access Key, send a PUT or PATCH request to `/v2/spaces/keys/$ACCESS_KEY`. At the moment, you cannot convert a<br />fullaccess key to a scoped key or vice versa. You can only update the name of the key.<br />

```sql
REPLACE digitalocean.spaces.keys
SET 
data__name = '{{ name }}',
data__grants = '{{ grants }}'
WHERE 
access_key = '{{ access_key }}' --required
RETURNING
key;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="spaces_key_delete"
    values={[
        { label: 'spaces_key_delete', value: 'spaces_key_delete' }
    ]}
>
<TabItem value="spaces_key_delete">

To delete a Spaces Access Key, send a DELETE request to `/v2/spaces/keys/$ACCESS_KEY`.<br /><br />A successful request will return a `204 No Content` status code.<br />

```sql
DELETE FROM digitalocean.spaces.keys
WHERE access_key = '{{ access_key }}' --required;
```
</TabItem>
</Tabs>
