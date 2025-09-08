--- 
title: billing_history
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_history
  - billing
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

Creates, updates, deletes, gets or lists a <code>billing_history</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>billing_history</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.billing.billing_history" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="billing_history_list"
    values={[
        { label: 'billing_history_list', value: 'billing_history_list' }
    ]}
>
<TabItem value="billing_history_list">

The response will be a JSON object that contains the following attributes

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
    <td><CopyableCode code="invoice_id" /></td>
    <td><code>string</code></td>
    <td>ID of the invoice associated with the billing history entry, if  applicable. (example: 123)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>string</code></td>
    <td>Amount of the billing history entry. (example: 12.34)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the billing history entry occurred. (example: 2018-06-01T08:44:38Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the billing history entry. (example: Invoice for May 2018)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the invoice associated with the billing history entry, if  applicable. (example: example-uuid)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of billing history entry. (example: Invoice)</td>
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
    <td><a href="#billing_history_list"><CopyableCode code="billing_history_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To retrieve a list of all billing history entries, send a GET request to `/v2/customers/my/billing_history`.</td>
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
    defaultValue="billing_history_list"
    values={[
        { label: 'billing_history_list', value: 'billing_history_list' }
    ]}
>
<TabItem value="billing_history_list">

To retrieve a list of all billing history entries, send a GET request to `/v2/customers/my/billing_history`.

```sql
SELECT
invoice_id,
amount,
date,
description,
invoice_uuid,
type
FROM digitalocean.billing.billing_history;
```
</TabItem>
</Tabs>
