--- 
title: droplet_neighbor_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_neighbor_ids
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

Creates, updates, deletes, gets or lists a <code>droplet_neighbor_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_neighbor_ids</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_neighbor_ids" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_list_neighbors_ids"
    values={[
        { label: 'droplets_list_neighbors_ids', value: 'droplets_list_neighbors_ids' }
    ]}
>
<TabItem value="droplets_list_neighbors_ids">

A JSON object with an `neighbor_ids` key.

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
    <td><a href="#droplets_list_neighbors_ids"><CopyableCode code="droplets_list_neighbors_ids" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To retrieve a list of all Droplets that are co-located on the same physical<br />hardware, send a GET request to `/v2/reports/droplet_neighbors_ids`.<br /><br />The results will be returned as a JSON object with a key of `neighbor_ids`.<br />This will be set to an array of arrays. Each array will contain a set of<br />Droplet IDs for Droplets that share a physical server. An empty array<br />indicates that all Droplets associated with your account are located on<br />separate physical hardware.<br /></td>
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
    defaultValue="droplets_list_neighbors_ids"
    values={[
        { label: 'droplets_list_neighbors_ids', value: 'droplets_list_neighbors_ids' }
    ]}
>
<TabItem value="droplets_list_neighbors_ids">

To retrieve a list of all Droplets that are co-located on the same physical<br />hardware, send a GET request to `/v2/reports/droplet_neighbors_ids`.<br /><br />The results will be returned as a JSON object with a key of `neighbor_ids`.<br />This will be set to an array of arrays. Each array will contain a set of<br />Droplet IDs for Droplets that share a physical server. An empty array<br />indicates that all Droplets associated with your account are located on<br />separate physical hardware.<br />

```sql
SELECT
*
FROM digitalocean.compute.droplet_neighbor_ids;
```
</TabItem>
</Tabs>
