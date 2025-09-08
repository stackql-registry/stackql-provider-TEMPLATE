--- 
title: sizes
hide_title: false
hide_table_of_contents: false
keywords:
  - sizes
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

Creates, updates, deletes, gets or lists a <code>sizes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sizes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.sizes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="sizes_list"
    values={[
        { label: 'sizes_list', value: 'sizes_list' }
    ]}
>
<TabItem value="sizes_list">

A JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.

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
    <td><CopyableCode code="available" /></td>
    <td><code>boolean</code></td>
    <td>This is a boolean value that represents whether new Droplets can be created with this size.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A string describing the class of Droplets created from this size. For example: Basic, General Purpose, CPU-Optimized, Memory-Optimized, or Storage-Optimized. (example: Basic)</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>The amount of disk space set aside for Droplets of this size. The value is represented in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_info" /></td>
    <td><code>array</code></td>
    <td>An array of objects containing information about the disks available to Droplets created with this size.</td>
</tr>
<tr>
    <td><CopyableCode code="gpu_info" /></td>
    <td><code>object</code></td>
    <td>An object containing information about the GPU capabilities of Droplets created with this size.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>The amount of RAM allocated to Droplets created of this size. The value is represented in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="price_hourly" /></td>
    <td><code>number (float)</code></td>
    <td>This describes the price of the Droplet size as measured hourly. The value is measured in US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="price_monthly" /></td>
    <td><code>number (float)</code></td>
    <td>This attribute describes the monthly cost of this Droplet size if the Droplet is kept for an entire month. The value is measured in US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>An array containing the region slugs where this size is available for Droplet creates.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>A human-readable string that is used to uniquely identify each size. (example: s-1vcpu-1gb)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of transfer bandwidth that is available for Droplets created in this size. This only counts traffic on the public interface. The value is given in terabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>The number of CPUs allocated to Droplets of this size.</td>
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
    <td><a href="#sizes_list"><CopyableCode code="sizes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of available Droplet sizes, send a GET request to `/v2/sizes`.<br />The response will be a JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.</td>
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
    defaultValue="sizes_list"
    values={[
        { label: 'sizes_list', value: 'sizes_list' }
    ]}
>
<TabItem value="sizes_list">

To list all of available Droplet sizes, send a GET request to `/v2/sizes`.<br />The response will be a JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.

```sql
SELECT
available,
description,
disk,
disk_info,
gpu_info,
memory,
price_hourly,
price_monthly,
regions,
slug,
transfer,
vcpus
FROM digitalocean.compute.sizes
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
