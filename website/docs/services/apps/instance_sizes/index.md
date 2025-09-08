--- 
title: instance_sizes
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_sizes
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

Creates, updates, deletes, gets or lists an <code>instance_sizes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instance_sizes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.instance_sizes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_instance_size"
    values={[
        { label: 'apps_get_instance_size', value: 'apps_get_instance_size' },
        { label: 'apps_list_instance_sizes', value: 'apps_list_instance_sizes' }
    ]}
>
<TabItem value="apps_get_instance_size">

A JSON with key `instance_size`

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
    <td> (title: A human-readable name of the instance size, example: name)</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth_allowance_gib" /></td>
    <td><code>string (int64)</code></td>
    <td> (title: The bandwidth allowance in GiB for the instance size, example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_type" /></td>
    <td><code>string</code></td>
    <td> (default: UNSPECIFIED, title: - SHARED: Shared vCPU cores<br /> - DEDICATED: Dedicated vCPU cores, example: SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="cpus" /></td>
    <td><code>string (int64)</code></td>
    <td> (title: The number of allotted vCPU cores, example: 3)</td>
</tr>
<tr>
    <td><CopyableCode code="deprecation_intent" /></td>
    <td><code>boolean</code></td>
    <td> (title: Indicates if the instance size is intended for deprecation)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_bytes" /></td>
    <td><code>string (int64)</code></td>
    <td> (title: The allotted memory in bytes, example: 1048)</td>
</tr>
<tr>
    <td><CopyableCode code="scalable" /></td>
    <td><code>boolean</code></td>
    <td> (title: Indicates if the instance size can enable autoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="single_instance_only" /></td>
    <td><code>boolean</code></td>
    <td> (title: Indicates if the instance size allows more than one instance)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td> (title: The slug of the instance size, example: apps-s-1vcpu-1gb)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_downgrade_to" /></td>
    <td><code>string</code></td>
    <td> (title: The slug of the corresponding downgradable instance size on the lower tier, example: basic)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_slug" /></td>
    <td><code>string</code></td>
    <td> (title: The slug of the tier to which this instance size belongs, example: basic)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_upgrade_to" /></td>
    <td><code>string</code></td>
    <td> (title: The slug of the corresponding upgradable instance size on the higher tier, example: basic)</td>
</tr>
<tr>
    <td><CopyableCode code="usd_per_month" /></td>
    <td><code>string</code></td>
    <td> (title: The cost of this instance size in USD per month, example: 23)</td>
</tr>
<tr>
    <td><CopyableCode code="usd_per_second" /></td>
    <td><code>string</code></td>
    <td> (title: The cost of this instance size in USD per second, example: 0.00000001232)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_list_instance_sizes">

A JSON with key `instance_sizes`

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
    <td><CopyableCode code="discount_percent" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="instance_sizes" /></td>
    <td><code>array</code></td>
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
    <td><a href="#apps_get_instance_size"><CopyableCode code="apps_get_instance_size" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td></td>
    <td>Retrieve information about a specific instance size for `service`, `worker`, and `job` components.</td>
</tr>
<tr>
    <td><a href="#apps_list_instance_sizes"><CopyableCode code="apps_list_instance_sizes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all instance sizes for `service`, `worker`, and `job` components.</td>
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
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The slug of the instance size (example: apps-s-1vcpu-0.5gb)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_instance_size"
    values={[
        { label: 'apps_get_instance_size', value: 'apps_get_instance_size' },
        { label: 'apps_list_instance_sizes', value: 'apps_list_instance_sizes' }
    ]}
>
<TabItem value="apps_get_instance_size">

Retrieve information about a specific instance size for `service`, `worker`, and `job` components.

```sql
SELECT
name,
bandwidth_allowance_gib,
cpu_type,
cpus,
deprecation_intent,
memory_bytes,
scalable,
single_instance_only,
slug,
tier_downgrade_to,
tier_slug,
tier_upgrade_to,
usd_per_month,
usd_per_second
FROM digitalocean.apps.instance_sizes
WHERE slug = '{{ slug }}' -- required;
```
</TabItem>
<TabItem value="apps_list_instance_sizes">

List all instance sizes for `service`, `worker`, and `job` components.

```sql
SELECT
discount_percent,
instance_sizes
FROM digitalocean.apps.instance_sizes;
```
</TabItem>
</Tabs>
