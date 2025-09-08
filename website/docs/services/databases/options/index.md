--- 
title: options
hide_title: false
hide_table_of_contents: false
keywords:
  - options
  - databases
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

Creates, updates, deletes, gets or lists an <code>options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>options</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_list_options"
    values={[
        { label: 'databases_list_options', value: 'databases_list_options' }
    ]}
>
<TabItem value="databases_list_options">

A JSON string with a key of `options`.

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
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="version_availability" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#databases_list_options"><CopyableCode code="databases_list_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all of the options available for the offered database engines, send a GET request to `/v2/databases/options`.<br />The result will be a JSON object with an `options` key.</td>
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
    defaultValue="databases_list_options"
    values={[
        { label: 'databases_list_options', value: 'databases_list_options' }
    ]}
>
<TabItem value="databases_list_options">

To list all of the options available for the offered database engines, send a GET request to `/v2/databases/options`.<br />The result will be a JSON object with an `options` key.

```sql
SELECT
options,
version_availability
FROM digitalocean.databases.options;
```
</TabItem>
</Tabs>
