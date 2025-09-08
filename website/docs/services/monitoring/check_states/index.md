--- 
title: check_states
hide_title: false
hide_table_of_contents: false
keywords:
  - check_states
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>check_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>check_states</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.check_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="uptime_get_check_state"
    values={[
        { label: 'uptime_get_check_state', value: 'uptime_get_check_state' }
    ]}
>
<TabItem value="uptime_get_check_state">

The response will be a JSON object with a key called `state`. The value of this will be an object that contains the standard attributes associated with an uptime check's state.

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
    <td><CopyableCode code="previous_outage" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>object</code></td>
    <td>A map of region to regional state</td>
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
    <td><a href="#uptime_get_check_state"><CopyableCode code="uptime_get_check_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a></td>
    <td></td>
    <td>To show information about an existing check's state, send a GET request to `/v2/uptime/checks/$CHECK_ID/state`.</td>
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
<tr id="parameter-check_id">
    <td><CopyableCode code="check_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a check. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="uptime_get_check_state"
    values={[
        { label: 'uptime_get_check_state', value: 'uptime_get_check_state' }
    ]}
>
<TabItem value="uptime_get_check_state">

To show information about an existing check's state, send a GET request to `/v2/uptime/checks/$CHECK_ID/state`.

```sql
SELECT
previous_outage,
regions
FROM digitalocean.monitoring.check_states
WHERE check_id = '{{ check_id }}' -- required;
```
</TabItem>
</Tabs>
