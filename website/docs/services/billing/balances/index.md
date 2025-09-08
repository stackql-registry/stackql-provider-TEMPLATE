--- 
title: balances
hide_title: false
hide_table_of_contents: false
keywords:
  - balances
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

Creates, updates, deletes, gets or lists a <code>balances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>balances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.billing.balances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="balance_get"
    values={[
        { label: 'balance_get', value: 'balance_get' }
    ]}
>
<TabItem value="balance_get">

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
    <td><CopyableCode code="account_balance" /></td>
    <td><code>string</code></td>
    <td>Current balance of the customer's most recent billing activity.  Does not reflect `month_to_date_usage`. (example: 12.23)</td>
</tr>
<tr>
    <td><CopyableCode code="generated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which balances were most recently generated. (example: 2019-07-09T15:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="month_to_date_balance" /></td>
    <td><code>string</code></td>
    <td>Balance as of the `generated_at` time.  This value includes the `account_balance` and `month_to_date_usage`. (example: 23.44)</td>
</tr>
<tr>
    <td><CopyableCode code="month_to_date_usage" /></td>
    <td><code>string</code></td>
    <td>Amount used in the current billing period as of the `generated_at` time. (example: 11.21)</td>
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
    <td><a href="#balance_get"><CopyableCode code="balance_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To retrieve the balances on a customer's account, send a GET request to `/v2/customers/my/balance`.</td>
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
    defaultValue="balance_get"
    values={[
        { label: 'balance_get', value: 'balance_get' }
    ]}
>
<TabItem value="balance_get">

To retrieve the balances on a customer's account, send a GET request to `/v2/customers/my/balance`.

```sql
SELECT
account_balance,
generated_at,
month_to_date_balance,
month_to_date_usage
FROM digitalocean.billing.balances;
```
</TabItem>
</Tabs>
