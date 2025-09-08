--- 
title: checks
hide_title: false
hide_table_of_contents: false
keywords:
  - checks
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>checks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="uptime_get_check"
    values={[
        { label: 'uptime_get_check', value: 'uptime_get_check' },
        { label: 'uptime_list_checks', value: 'uptime_list_checks' }
    ]}
>
<TabItem value="uptime_get_check">

The response will be a JSON object with a key called `check`. The value of this will be an object that contains the standard attributes associated with an uptime check.

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
    <td>A unique ID that can be used to identify and reference the check. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-friendly display name. (example: Landing page check)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the check is enabled/disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>An array containing the selected regions to perform healthchecks from.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string (url)</code></td>
    <td>The endpoint to perform healthchecks on. (example: https://www.landingpage.com)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of health check to perform. (example: https)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="uptime_list_checks">

The response will be a JSON object with a key called `checks`. This will be set to an array of objects, each of which will contain the standard attributes associated with an uptime check

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
    <td>A unique ID that can be used to identify and reference the check. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-friendly display name. (example: Landing page check)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the check is enabled/disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>An array containing the selected regions to perform healthchecks from.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string (url)</code></td>
    <td>The endpoint to perform healthchecks on. (example: https://www.landingpage.com)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of health check to perform. (example: https)</td>
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
    <td><a href="#uptime_get_check"><CopyableCode code="uptime_get_check" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a></td>
    <td></td>
    <td>To show information about an existing check, send a GET request to `/v2/uptime/checks/$CHECK_ID`.</td>
</tr>
<tr>
    <td><a href="#uptime_list_checks"><CopyableCode code="uptime_list_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the Uptime checks on your account, send a GET request to `/v2/uptime/checks`.</td>
</tr>
<tr>
    <td><a href="#uptime_create_check"><CopyableCode code="uptime_create_check" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__method"><code>data__method</code></a>, <a href="#parameter-data__target"><code>data__target</code></a>, <a href="#parameter-data__regions"><code>data__regions</code></a>, <a href="#parameter-data__type"><code>data__type</code></a>, <a href="#parameter-data__enabled"><code>data__enabled</code></a></td>
    <td></td>
    <td>To create an Uptime check, send a POST request to `/v2/uptime/checks` specifying the attributes<br />in the table below in the JSON body.<br /></td>
</tr>
<tr>
    <td><a href="#uptime_update_check"><CopyableCode code="uptime_update_check" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a></td>
    <td></td>
    <td>To update the settings of an Uptime check, send a PUT request to `/v2/uptime/checks/$CHECK_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#uptime_delete_check"><CopyableCode code="uptime_delete_check" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a></td>
    <td></td>
    <td>To delete an Uptime check, send a DELETE request to `/v2/uptime/checks/$CHECK_ID`. A 204 status<br />code with no body will be returned in response to a successful request.<br /><br /><br />Deleting a check will also delete alerts associated with the check.<br /></td>
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
<tr id="parameter-check_id">
    <td><CopyableCode code="check_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a check. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
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
    defaultValue="uptime_get_check"
    values={[
        { label: 'uptime_get_check', value: 'uptime_get_check' },
        { label: 'uptime_list_checks', value: 'uptime_list_checks' }
    ]}
>
<TabItem value="uptime_get_check">

To show information about an existing check, send a GET request to `/v2/uptime/checks/$CHECK_ID`.

```sql
SELECT
id,
name,
enabled,
regions,
target,
type
FROM digitalocean.monitoring.checks
WHERE check_id = '{{ check_id }}' -- required;
```
</TabItem>
<TabItem value="uptime_list_checks">

To list all of the Uptime checks on your account, send a GET request to `/v2/uptime/checks`.

```sql
SELECT
id,
name,
enabled,
regions,
target,
type
FROM digitalocean.monitoring.checks
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="uptime_create_check"
    values={[
        { label: 'uptime_create_check', value: 'uptime_create_check' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="uptime_create_check">

To create an Uptime check, send a POST request to `/v2/uptime/checks` specifying the attributes<br />in the table below in the JSON body.<br />

```sql
INSERT INTO digitalocean.monitoring.checks (
data__name,
data__type,
data__target,
data__regions,
data__enabled
)
SELECT 
'{{ name }}' --required,
'{{ type }}' --required,
'{{ target }}' --required,
'{{ regions }}' --required,
{{ enabled }} --required
RETURNING
check
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: checks
  props:
    - name: name
      value: string
      description: >
        A human-friendly display name.
        
    - name: type
      value: string
      description: >
        The type of health check to perform.
        
      valid_values: ['ping', 'http', 'https']
    - name: target
      value: string
      description: >
        The endpoint to perform healthchecks on.
        
    - name: regions
      value: array
      description: >
        An array containing the selected regions to perform healthchecks from.
        
    - name: enabled
      value: boolean
      description: >
        A boolean value indicating whether the check is enabled/disabled.
        
      default: true
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="uptime_update_check"
    values={[
        { label: 'uptime_update_check', value: 'uptime_update_check' }
    ]}
>
<TabItem value="uptime_update_check">

To update the settings of an Uptime check, send a PUT request to `/v2/uptime/checks/$CHECK_ID`.<br />

```sql
REPLACE digitalocean.monitoring.checks
SET 
data__name = '{{ name }}',
data__type = '{{ type }}',
data__target = '{{ target }}',
data__regions = '{{ regions }}',
data__enabled = {{ enabled }}
WHERE 
check_id = '{{ check_id }}' --required
RETURNING
check;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="uptime_delete_check"
    values={[
        { label: 'uptime_delete_check', value: 'uptime_delete_check' }
    ]}
>
<TabItem value="uptime_delete_check">

To delete an Uptime check, send a DELETE request to `/v2/uptime/checks/$CHECK_ID`. A 204 status<br />code with no body will be returned in response to a successful request.<br /><br /><br />Deleting a check will also delete alerts associated with the check.<br />

```sql
DELETE FROM digitalocean.monitoring.checks
WHERE check_id = '{{ check_id }}' --required;
```
</TabItem>
</Tabs>
