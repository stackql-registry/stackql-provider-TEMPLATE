--- 
title: droplet_kernels
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_kernels
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

Creates, updates, deletes, gets or lists a <code>droplet_kernels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplet_kernels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_kernels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_list_kernels"
    values={[
        { label: 'droplets_list_kernels', value: 'droplets_list_kernels' }
    ]}
>
<TabItem value="droplets_list_kernels">

A JSON object that has a key called `kernels`.

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
    <td><code>integer</code></td>
    <td>A unique number used to identify and reference a specific kernel.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the kernel. This is shown in the web UI and is generally a descriptive title for the kernel in question. (example: DigitalOcean GrubLoader v0.2 (20160714))</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A standard kernel version string representing the version, patch, and release information. (example: 2016.07.13-DigitalOcean_loader_Ubuntu)</td>
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
    <td><a href="#droplets_list_kernels"><CopyableCode code="droplets_list_kernels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve a list of all kernels available to a Droplet, send a GET request<br />to `/v2/droplets/$DROPLET_ID/kernels`<br /><br />The response will be a JSON object that has a key called `kernels`. This will<br />be set to an array of `kernel` objects, each of which contain the standard<br />`kernel` attributes.<br /></td>
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
    defaultValue="droplets_list_kernels"
    values={[
        { label: 'droplets_list_kernels', value: 'droplets_list_kernels' }
    ]}
>
<TabItem value="droplets_list_kernels">

To retrieve a list of all kernels available to a Droplet, send a GET request<br />to `/v2/droplets/$DROPLET_ID/kernels`<br /><br />The response will be a JSON object that has a key called `kernels`. This will<br />be set to an array of `kernel` objects, each of which contain the standard<br />`kernel` attributes.<br />

```sql
SELECT
id,
name,
version
FROM digitalocean.compute.droplet_kernels
WHERE droplet_id = '{{ droplet_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
