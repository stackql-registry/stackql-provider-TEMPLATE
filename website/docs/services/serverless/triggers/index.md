--- 
title: triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - triggers
  - serverless
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

Creates, updates, deletes, gets or lists a <code>triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>triggers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.serverless.triggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="functions_get_trigger"
    values={[
        { label: 'functions_get_trigger', value: 'functions_get_trigger' },
        { label: 'functions_list_triggers', value: 'functions_list_triggers' }
    ]}
>
<TabItem value="functions_get_trigger">

A JSON response object with a key called `trigger`. The object contains the properties associated<br />with the trigger.

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
    <td>The trigger's unique name within the namespace. (example: my trigger)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>UTC time string. (example: 2022-11-11T04:16:45Z)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Name of function(action) that exists in the given namespace. (example: hello)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates weather the trigger is paused or unpaused.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>A unique string format of UUID with a prefix fn-. (example: fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_details" /></td>
    <td><code>object</code></td>
    <td>Trigger details for SCHEDULED type, where body is optional. </td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_runs" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>String which indicates the type of trigger source like SCHEDULED. (example: SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>UTC time string. (example: 2022-11-11T04:16:45Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="functions_list_triggers">

An array of JSON objects with a key called `namespaces`.  Each object represents a namespace and contains<br />the properties associated with it. 

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
    <td>The trigger's unique name within the namespace. (example: my trigger)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>UTC time string. (example: 2022-11-11T04:16:45Z)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Name of function(action) that exists in the given namespace. (example: hello)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates weather the trigger is paused or unpaused.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>A unique string format of UUID with a prefix fn-. (example: fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_details" /></td>
    <td><code>object</code></td>
    <td>Trigger details for SCHEDULED type, where body is optional. </td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_runs" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>String which indicates the type of trigger source like SCHEDULED. (example: SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>UTC time string. (example: 2022-11-11T04:16:45Z)</td>
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
    <td><a href="#functions_get_trigger"><CopyableCode code="functions_get_trigger" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a>, <a href="#parameter-trigger_name"><code>trigger_name</code></a></td>
    <td></td>
    <td>Gets the trigger details. To get the trigger details, send a GET request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME`.</td>
</tr>
<tr>
    <td><a href="#functions_list_triggers"><CopyableCode code="functions_list_triggers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a></td>
    <td></td>
    <td>Returns a list of triggers associated with the current user and namespace. To get all triggers, send a GET request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers`.</td>
</tr>
<tr>
    <td><a href="#functions_create_trigger"><CopyableCode code="functions_create_trigger" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__function"><code>data__function</code></a>, <a href="#parameter-data__type"><code>data__type</code></a>, <a href="#parameter-data__is_enabled"><code>data__is_enabled</code></a>, <a href="#parameter-data__scheduled_details"><code>data__scheduled_details</code></a></td>
    <td></td>
    <td>Creates a new trigger for a given function in a namespace. To create a trigger, send a POST request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers` with the `name`, `function`, `type`, `is_enabled` and `scheduled_details` properties.</td>
</tr>
<tr>
    <td><a href="#functions_update_trigger"><CopyableCode code="functions_update_trigger" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a>, <a href="#parameter-trigger_name"><code>trigger_name</code></a></td>
    <td></td>
    <td>Updates the details of the given trigger. To update a trigger, send a PUT request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME` with new values for the `is_enabled ` or `scheduled_details` properties.</td>
</tr>
<tr>
    <td><a href="#functions_delete_trigger"><CopyableCode code="functions_delete_trigger" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a>, <a href="#parameter-trigger_name"><code>trigger_name</code></a></td>
    <td></td>
    <td>Deletes the given trigger.<br />To delete trigger, send a DELETE request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME`.<br />A successful deletion returns a 204 response.</td>
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
<tr id="parameter-namespace_id">
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the namespace to be managed. (example: fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)</td>
</tr>
<tr id="parameter-trigger_name">
    <td><CopyableCode code="trigger_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trigger to be managed. (example: my trigger)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="functions_get_trigger"
    values={[
        { label: 'functions_get_trigger', value: 'functions_get_trigger' },
        { label: 'functions_list_triggers', value: 'functions_list_triggers' }
    ]}
>
<TabItem value="functions_get_trigger">

Gets the trigger details. To get the trigger details, send a GET request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME`.

```sql
SELECT
name,
created_at,
function,
is_enabled,
namespace,
scheduled_details,
scheduled_runs,
type,
updated_at
FROM digitalocean.serverless.triggers
WHERE namespace_id = '{{ namespace_id }}' -- required
AND trigger_name = '{{ trigger_name }}' -- required;
```
</TabItem>
<TabItem value="functions_list_triggers">

Returns a list of triggers associated with the current user and namespace. To get all triggers, send a GET request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers`.

```sql
SELECT
name,
created_at,
function,
is_enabled,
namespace,
scheduled_details,
scheduled_runs,
type,
updated_at
FROM digitalocean.serverless.triggers
WHERE namespace_id = '{{ namespace_id }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="functions_create_trigger"
    values={[
        { label: 'functions_create_trigger', value: 'functions_create_trigger' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="functions_create_trigger">

Creates a new trigger for a given function in a namespace. To create a trigger, send a POST request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers` with the `name`, `function`, `type`, `is_enabled` and `scheduled_details` properties.

```sql
INSERT INTO digitalocean.serverless.triggers (
data__name,
data__function,
data__type,
data__is_enabled,
data__scheduled_details,
namespace_id
)
SELECT 
'{{ name }}' --required,
'{{ function }}' --required,
'{{ type }}' --required,
{{ is_enabled }} --required,
'{{ scheduled_details }}' --required,
'{{ namespace_id }}'
RETURNING
trigger
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: triggers
  props:
    - name: namespace_id
      value: string
      description: Required parameter for the triggers resource.
    - name: name
      value: string
      description: >
        The trigger's unique name within the namespace.
        
    - name: function
      value: string
      description: >
        Name of function(action) that exists in the given namespace.
        
    - name: type
      value: string
      description: >
        One of different type of triggers. Currently only SCHEDULED is supported.
        
    - name: is_enabled
      value: boolean
      description: >
        Indicates weather the trigger is paused or unpaused.
        
    - name: scheduled_details
      value: object
      description: >
        Trigger details for SCHEDULED type, where body is optional.

```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="functions_update_trigger"
    values={[
        { label: 'functions_update_trigger', value: 'functions_update_trigger' }
    ]}
>
<TabItem value="functions_update_trigger">

Updates the details of the given trigger. To update a trigger, send a PUT request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME` with new values for the `is_enabled ` or `scheduled_details` properties.

```sql
REPLACE digitalocean.serverless.triggers
SET 
data__is_enabled = {{ is_enabled }},
data__scheduled_details = '{{ scheduled_details }}'
WHERE 
namespace_id = '{{ namespace_id }}' --required
AND trigger_name = '{{ trigger_name }}' --required
RETURNING
trigger;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="functions_delete_trigger"
    values={[
        { label: 'functions_delete_trigger', value: 'functions_delete_trigger' }
    ]}
>
<TabItem value="functions_delete_trigger">

Deletes the given trigger.<br />To delete trigger, send a DELETE request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME`.<br />A successful deletion returns a 204 response.

```sql
DELETE FROM digitalocean.serverless.triggers
WHERE namespace_id = '{{ namespace_id }}' --required
AND trigger_name = '{{ trigger_name }}' --required;
```
</TabItem>
</Tabs>
