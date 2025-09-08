--- 
title: regions
hide_title: false
hide_table_of_contents: false
keywords:
  - regions
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

Creates, updates, deletes, gets or lists a <code>regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>regions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_list_regions"
    values={[
        { label: 'apps_list_regions', value: 'apps_list_regions' }
    ]}
>
<TabItem value="apps_list_regions">

A JSON object with key `regions`

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
    <td><CopyableCode code="continent" /></td>
    <td><code>string</code></td>
    <td> (title: The continent that this region is in, example: europe)</td>
</tr>
<tr>
    <td><CopyableCode code="data_centers" /></td>
    <td><code>array</code></td>
    <td> (title: Data centers that are in this region)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the region is presented as the default.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td> (title: Whether or not the region is open for new apps)</td>
</tr>
<tr>
    <td><CopyableCode code="flag" /></td>
    <td><code>string</code></td>
    <td> (title: The flag of this region, example: ams)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td> (title: A human-readable name of the region, example: ams)</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td> (title: Reason that this region is not available, example: to crowded)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td> (title: The slug form of the region name, example: basic)</td>
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
    <td><a href="#apps_list_regions"><CopyableCode code="apps_list_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all regions supported by App Platform.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_list_regions"
    values={[
        { label: 'apps_list_regions', value: 'apps_list_regions' }
    ]}
>
<TabItem value="apps_list_regions">

List all regions supported by App Platform.

```sql
SELECT
continent,
data_centers,
default,
disabled,
flag,
label,
reason,
slug
FROM digitalocean.apps.regions;
```
</TabItem>
</Tabs>
