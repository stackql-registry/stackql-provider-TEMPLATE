--- 
title: droplet_supported_backup_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_supported_backup_policies
  - compute
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

Creates, updates, deletes, gets or lists a <code>droplet_supported_backup_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_supported_backup_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_supported_backup_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_list_supported_backup_policies"
    values={[
        { label: 'droplets_list_supported_backup_policies', value: 'droplets_list_supported_backup_policies' }
    ]}
>
<TabItem value="droplets_list_supported_backup_policies">

A JSON object with an `supported_policies` key set to an array of objects describing each supported backup policy.

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
    <td>The name of the Droplet backup plan. (example: daily)</td>
</tr>
<tr>
    <td><CopyableCode code="possible_days" /></td>
    <td><code>array</code></td>
    <td>The day of the week the backup will occur.</td>
</tr>
<tr>
    <td><CopyableCode code="possible_window_starts" /></td>
    <td><code>array</code></td>
    <td>An array of integers representing the hours of the day that a backup can start. </td>
</tr>
<tr>
    <td><CopyableCode code="retention_period_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days that a backup will be kept.</td>
</tr>
<tr>
    <td><CopyableCode code="window_length_hours" /></td>
    <td><code>integer</code></td>
    <td>The number of hours that a backup window is open.</td>
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
    <td><a href="#droplets_list_supported_backup_policies"><CopyableCode code="droplets_list_supported_backup_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To retrieve a list of all supported Droplet backup policies, send a GET<br />request to `/v2/droplets/backups/supported_policies`.<br /></td>
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
    defaultValue="droplets_list_supported_backup_policies"
    values={[
        { label: 'droplets_list_supported_backup_policies', value: 'droplets_list_supported_backup_policies' }
    ]}
>
<TabItem value="droplets_list_supported_backup_policies">

To retrieve a list of all supported Droplet backup policies, send a GET<br />request to `/v2/droplets/backups/supported_policies`.<br />

```sql
SELECT
name,
possible_days,
possible_window_starts,
retention_period_days,
window_length_hours
FROM digitalocean.compute.droplet_supported_backup_policies;
```
</TabItem>
</Tabs>
