--- 
title: droplet_backup_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_backup_policies
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

Creates, updates, deletes, gets or lists a <code>droplet_backup_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_backup_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_backup_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_get_backup_policy"
    values={[
        { label: 'droplets_get_backup_policy', value: 'droplets_get_backup_policy' },
        { label: 'droplets_list_backup_policies', value: 'droplets_list_backup_policies' }
    ]}
>
<TabItem value="droplets_get_backup_policy">

The response will be a JSON object with a key called `policy`. This will be<br />set to a JSON object that contains the standard Droplet backup policy attributes.<br />

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
    <td><CopyableCode code="droplet_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier for the Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether backups are enabled for the Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_policy" /></td>
    <td><code>object</code></td>
    <td>An object specifying the backup policy for the Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="next_backup_window" /></td>
    <td><code>object</code></td>
    <td>An object containing keys with the start and end times of the window during which the backup will occur.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="droplets_list_backup_policies">

A JSON object with a `policies` key set to a map. The keys are Droplet IDs and the values are objects containing the backup policy information for each Droplet.

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
    <td><a href="#droplets_get_backup_policy"><CopyableCode code="droplets_get_backup_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To show information about an individual Droplet's backup policy, send a GET<br />request to `/v2/droplets/$DROPLET_ID/backups/policy`.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_list_backup_policies"><CopyableCode code="droplets_list_backup_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list information about the backup policies for all Droplets in the account,<br />send a GET request to `/v2/droplets/backups/policies`.<br /></td>
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
<tr id="parameter-droplet_id">
    <td><CopyableCode code="droplet_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for a Droplet instance. (example: 3164444)</td>
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
    defaultValue="droplets_get_backup_policy"
    values={[
        { label: 'droplets_get_backup_policy', value: 'droplets_get_backup_policy' },
        { label: 'droplets_list_backup_policies', value: 'droplets_list_backup_policies' }
    ]}
>
<TabItem value="droplets_get_backup_policy">

To show information about an individual Droplet's backup policy, send a GET<br />request to `/v2/droplets/$DROPLET_ID/backups/policy`.<br />

```sql
SELECT
droplet_id,
backup_enabled,
backup_policy,
next_backup_window
FROM digitalocean.compute.droplet_backup_policies
WHERE droplet_id = '{{ droplet_id }}' -- required;
```
</TabItem>
<TabItem value="droplets_list_backup_policies">

To list information about the backup policies for all Droplets in the account,<br />send a GET request to `/v2/droplets/backups/policies`.<br />

```sql
SELECT
*
FROM digitalocean.compute.droplet_backup_policies
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
