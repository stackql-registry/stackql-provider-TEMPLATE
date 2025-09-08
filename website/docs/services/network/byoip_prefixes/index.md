--- 
title: byoip_prefixes
hide_title: false
hide_table_of_contents: false
keywords:
  - byoip_prefixes
  - network
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

Creates, updates, deletes, gets or lists a <code>byoip_prefixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>byoip_prefixes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.network.byoip_prefixes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="byoip_prefixes_get"
    values={[
        { label: 'byoip_prefixes_get', value: 'byoip_prefixes_get' },
        { label: 'byoip_prefixes_list', value: 'byoip_prefixes_list' }
    ]}
>
<TabItem value="byoip_prefixes_get">

Details of the requested BYOIP prefix

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
    <td>Name of the BYOIP prefix (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project associated with the BYOIP prefix (example: 12345678-1234-1234-1234-123456789012)</td>
</tr>
<tr>
    <td><CopyableCode code="advertised" /></td>
    <td><code>boolean</code></td>
    <td>Whether the BYOIP prefix is being advertised</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Reason for failure, if applicable (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the BYOIP prefix is locked</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The IP prefix in CIDR notation (example: 203.0.113.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the BYOIP prefix is located (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the BYOIP prefix (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the BYOIP prefix (example: f47ac10b-58cc-4372-a567-0e02b2c3d479)</td>
</tr>
<tr>
    <td><CopyableCode code="validations" /></td>
    <td><code>array</code></td>
    <td>List of validation statuses for the BYOIP prefix</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="byoip_prefixes_list">

List of BYOIP prefixes as an array of BYOIP prefix JSON objects

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
    <td>Name of the BYOIP prefix (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project associated with the BYOIP prefix (example: 12345678-1234-1234-1234-123456789012)</td>
</tr>
<tr>
    <td><CopyableCode code="advertised" /></td>
    <td><code>boolean</code></td>
    <td>Whether the BYOIP prefix is being advertised</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Reason for failure, if applicable (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the BYOIP prefix is locked</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The IP prefix in CIDR notation (example: 203.0.113.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the BYOIP prefix is located (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the BYOIP prefix (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the BYOIP prefix (example: f47ac10b-58cc-4372-a567-0e02b2c3d479)</td>
</tr>
<tr>
    <td><CopyableCode code="validations" /></td>
    <td><code>array</code></td>
    <td>List of validation statuses for the BYOIP prefix</td>
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
    <td><a href="#byoip_prefixes_get"><CopyableCode code="byoip_prefixes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-byoip_prefix_uuid"><code>byoip_prefix_uuid</code></a></td>
    <td></td>
    <td>To get a BYOIP prefix, send a GET request to `/v2/byoip_prefixes/$byoip_prefix_uuid`. <br /><br />A successful response will return the details of the specified BYOIP prefix.<br /></td>
</tr>
<tr>
    <td><a href="#byoip_prefixes_list"><CopyableCode code="byoip_prefixes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all BYOIP prefixes, send a GET request to `/v2/byoip_prefixes`.<br />A successful response will return a list of all BYOIP prefixes associated with the account.<br /></td>
</tr>
<tr>
    <td><a href="#byoip_prefixes_create"><CopyableCode code="byoip_prefixes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__prefix"><code>data__prefix</code></a>, <a href="#parameter-data__region"><code>data__region</code></a>, <a href="#parameter-data__signature"><code>data__signature</code></a></td>
    <td></td>
    <td>To create a BYOIP prefix, send a POST request to `/v2/byoip_prefixes`.<br /><br />A successful request will initiate the process of bringing your BYOIP Prefix into your account.<br />The response will include the details of the created prefix, including its UUID and status.<br /></td>
</tr>
<tr>
    <td><a href="#byoip_prefixes_patch"><CopyableCode code="byoip_prefixes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-byoip_prefix_uuid"><code>byoip_prefix_uuid</code></a></td>
    <td></td>
    <td>To update a BYOIP prefix, send a PATCH request to `/v2/byoip_prefixes/$byoip_prefix_uuid`.<br /><br />Currently, you can update the advertisement status of the prefix.<br />The response will include the updated details of the prefix.<br /></td>
</tr>
<tr>
    <td><a href="#byoip_prefixes_delete"><CopyableCode code="byoip_prefixes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-byoip_prefix_uuid"><code>byoip_prefix_uuid</code></a></td>
    <td></td>
    <td>To delete a BYOIP prefix and remove it from your account, send a DELETE request<br />to `/v2/byoip_prefixes/$byoip_prefix_uuid`.<br /><br />A successful request will receive a 202 status code with no body in response.<br />This indicates that the request was accepted and the prefix is being deleted.<br /></td>
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
<tr id="parameter-byoip_prefix_uuid">
    <td><CopyableCode code="byoip_prefix_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the BYOIP Prefix. (example: f47ac10b-58cc-4372-a567-0e02b2c3d479)</td>
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
    defaultValue="byoip_prefixes_get"
    values={[
        { label: 'byoip_prefixes_get', value: 'byoip_prefixes_get' },
        { label: 'byoip_prefixes_list', value: 'byoip_prefixes_list' }
    ]}
>
<TabItem value="byoip_prefixes_get">

To get a BYOIP prefix, send a GET request to `/v2/byoip_prefixes/$byoip_prefix_uuid`. <br /><br />A successful response will return the details of the specified BYOIP prefix.<br />

```sql
SELECT
name,
project_id,
advertised,
failure_reason,
locked,
prefix,
region,
status,
uuid,
validations
FROM digitalocean.network.byoip_prefixes
WHERE byoip_prefix_uuid = '{{ byoip_prefix_uuid }}' -- required;
```
</TabItem>
<TabItem value="byoip_prefixes_list">

To list all BYOIP prefixes, send a GET request to `/v2/byoip_prefixes`.<br />A successful response will return a list of all BYOIP prefixes associated with the account.<br />

```sql
SELECT
name,
project_id,
advertised,
failure_reason,
locked,
prefix,
region,
status,
uuid,
validations
FROM digitalocean.network.byoip_prefixes
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="byoip_prefixes_create"
    values={[
        { label: 'byoip_prefixes_create', value: 'byoip_prefixes_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="byoip_prefixes_create">

To create a BYOIP prefix, send a POST request to `/v2/byoip_prefixes`.<br /><br />A successful request will initiate the process of bringing your BYOIP Prefix into your account.<br />The response will include the details of the created prefix, including its UUID and status.<br />

```sql
INSERT INTO digitalocean.network.byoip_prefixes (
data__prefix,
data__region,
data__signature
)
SELECT 
'{{ prefix }}' --required,
'{{ region }}' --required,
'{{ signature }}' --required
RETURNING
region,
status,
uuid
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: byoip_prefixes
  props:
    - name: prefix
      value: string
      description: >
        The IP prefix in CIDR notation to bring
        
    - name: region
      value: string
      description: >
        The region where the prefix will be created
        
    - name: signature
      value: string
      description: >
        The signature hash for the prefix creation request
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="byoip_prefixes_patch"
    values={[
        { label: 'byoip_prefixes_patch', value: 'byoip_prefixes_patch' }
    ]}
>
<TabItem value="byoip_prefixes_patch">

To update a BYOIP prefix, send a PATCH request to `/v2/byoip_prefixes/$byoip_prefix_uuid`.<br /><br />Currently, you can update the advertisement status of the prefix.<br />The response will include the updated details of the prefix.<br />

```sql
UPDATE digitalocean.network.byoip_prefixes
SET 
data__advertise = {{ advertise }}
WHERE 
byoip_prefix_uuid = '{{ byoip_prefix_uuid }}' --required
RETURNING
byoip_prefix;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="byoip_prefixes_delete"
    values={[
        { label: 'byoip_prefixes_delete', value: 'byoip_prefixes_delete' }
    ]}
>
<TabItem value="byoip_prefixes_delete">

To delete a BYOIP prefix and remove it from your account, send a DELETE request<br />to `/v2/byoip_prefixes/$byoip_prefix_uuid`.<br /><br />A successful request will receive a 202 status code with no body in response.<br />This indicates that the request was accepted and the prefix is being deleted.<br />

```sql
DELETE FROM digitalocean.network.byoip_prefixes
WHERE byoip_prefix_uuid = '{{ byoip_prefix_uuid }}' --required;
```
</TabItem>
</Tabs>
