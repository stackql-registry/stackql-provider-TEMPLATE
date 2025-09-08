--- 
title: byoip_prefix_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - byoip_prefix_resources
  - network
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

Creates, updates, deletes, gets or lists a <code>byoip_prefix_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>byoip_prefix_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.network.byoip_prefix_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="byoip_prefixes_list_resources"
    values={[
        { label: 'byoip_prefixes_list_resources', value: 'byoip_prefixes_list_resources' }
    ]}
>
<TabItem value="byoip_prefixes_list_resources">

List of IP addresses assigned to resources (such as Droplets) in a BYOIP prefix

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
    <td><code>integer (int64)</code></td>
    <td>Unique identifier for the allocation</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when the allocation was assigned (example: 2025-06-25T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="byoip" /></td>
    <td><code>string</code></td>
    <td>The BYOIP prefix UUID (example: f47ac10b-58cc-4372-a567-0e02b2c3d479)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the allocation is made (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The resource associated with the allocation (example: do:droplet:fa3c10b-58cc-4372-a567-0e02b2c3d479)</td>
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
    <td><a href="#byoip_prefixes_list_resources"><CopyableCode code="byoip_prefixes_list_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-byoip_prefix_uuid"><code>byoip_prefix_uuid</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list resources associated with BYOIP prefixes, send a GET request to `/v2/byoip_prefixes/&#123;byoip_prefix_uuid&#125;/ips`.<br /><br />A successful response will return a list of resources associated with the specified BYOIP prefix.<br /></td>
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
<tr id="parameter-byoip_prefix_uuid">
    <td><CopyableCode code="byoip_prefix_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the BYOIP Prefix. (example: f47ac10b-58cc-4372-a567-0e02b2c3d479)</td>
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
    defaultValue="byoip_prefixes_list_resources"
    values={[
        { label: 'byoip_prefixes_list_resources', value: 'byoip_prefixes_list_resources' }
    ]}
>
<TabItem value="byoip_prefixes_list_resources">

To list resources associated with BYOIP prefixes, send a GET request to `/v2/byoip_prefixes/&#123;byoip_prefix_uuid&#125;/ips`.<br /><br />A successful response will return a list of resources associated with the specified BYOIP prefix.<br />

```sql
SELECT
id,
assigned_at,
byoip,
region,
resource
FROM digitalocean.network.byoip_prefix_resources
WHERE byoip_prefix_uuid = '{{ byoip_prefix_uuid }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>
