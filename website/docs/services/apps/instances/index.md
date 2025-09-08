--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - apps
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_instances"
    values={[
        { label: 'apps_get_instances', value: 'apps_get_instances' }
    ]}
>
<TabItem value="apps_get_instances">

A JSON with key `instances`

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
    <td><CopyableCode code="component_name" /></td>
    <td><code>string</code></td>
    <td>Name of the component, from the app spec. (example: sample-golang)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>Name of the instance, which is a unique identifier for the instance. (example: sample-golang-76b84c7fb8-6p8kq)</td>
</tr>
<tr>
    <td><CopyableCode code="component_type" /></td>
    <td><code>string</code></td>
    <td>Supported compute component by DigitalOcean App Platform. (example: SERVICE)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_alias" /></td>
    <td><code>string</code></td>
    <td>Readable identifier, an alias of the instance name, reference for mapping insights to instance names. (example: sample-golang-0)</td>
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
    <td><a href="#apps_get_instances"><CopyableCode code="apps_get_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Retrieve the list of running instances for a given application, including instance names and component types. Please note that these instances are ephemeral and may change over time. It is recommended not to make persistent changes or develop scripts that rely on their persistence.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID (example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_instances"
    values={[
        { label: 'apps_get_instances', value: 'apps_get_instances' }
    ]}
>
<TabItem value="apps_get_instances">

Retrieve the list of running instances for a given application, including instance names and component types. Please note that these instances are ephemeral and may change over time. It is recommended not to make persistent changes or develop scripts that rely on their persistence.

```sql
SELECT
component_name,
instance_name,
component_type,
instance_alias
FROM digitalocean.apps.instances
WHERE app_id = '{{ app_id }}' -- required;
```
</TabItem>
</Tabs>
