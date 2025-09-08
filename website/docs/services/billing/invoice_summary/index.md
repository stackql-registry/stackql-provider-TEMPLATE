--- 
title: invoice_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - invoice_summary
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

Creates, updates, deletes, gets or lists an <code>invoice_summary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>invoice_summary</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.billing.invoice_summary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="invoices_get_summary_by_uuid"
    values={[
        { label: 'invoices_get_summary_by_uuid', value: 'invoices_get_summary_by_uuid' }
    ]}
>
<TabItem value="invoices_get_summary_by_uuid">

To retrieve a summary for an invoice, send a GET request to  `/v2/customers/my/invoices/$INVOICE_UUID/summary`.

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
    <td>ID of the invoice (example: 123456789)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the DigitalOcean customer being invoiced. (example: Sammy Shark)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>string</code></td>
    <td>Total amount of the invoice, in USD.  This will reflect month-to-date usage in the invoice preview. (example: 27.13)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_period" /></td>
    <td><code>string</code></td>
    <td>Billing period of usage for which the invoice is issued, in `YYYY-MM`  format. (example: 2020-01)</td>
</tr>
<tr>
    <td><CopyableCode code="credits_and_adjustments" /></td>
    <td><code>object</code></td>
    <td>A summary of the credits and adjustments contributing to the invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the invoice (example: 22737513-0ea7-4206-8ceb-98a575af7681)</td>
</tr>
<tr>
    <td><CopyableCode code="overages" /></td>
    <td><code>object</code></td>
    <td>A summary of the overages contributing to the invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="product_charges" /></td>
    <td><code>object</code></td>
    <td>A summary of the product usage charges contributing to the invoice.  This will include an amount, and grouped aggregates by resource type  under the `items` key.</td>
</tr>
<tr>
    <td><CopyableCode code="taxes" /></td>
    <td><code>object</code></td>
    <td>A summary of the taxes contributing to the invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="user_billing_address" /></td>
    <td><code>object</code></td>
    <td>The billing address of the customer being invoiced.</td>
</tr>
<tr>
    <td><CopyableCode code="user_company" /></td>
    <td><code>string</code></td>
    <td>Company of the DigitalOcean customer being invoiced, if set. (example: DigitalOcean)</td>
</tr>
<tr>
    <td><CopyableCode code="user_email" /></td>
    <td><code>string</code></td>
    <td>Email of the DigitalOcean customer being invoiced. (example: sammy@digitalocean.com)</td>
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
    <td><a href="#invoices_get_summary_by_uuid"><CopyableCode code="invoices_get_summary_by_uuid" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-invoice_uuid"><code>invoice_uuid</code></a></td>
    <td></td>
    <td>To retrieve a summary for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/summary`.</td>
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
<tr id="parameter-invoice_uuid">
    <td><CopyableCode code="invoice_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the invoice (example: 22737513-0ea7-4206-8ceb-98a575af7681)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="invoices_get_summary_by_uuid"
    values={[
        { label: 'invoices_get_summary_by_uuid', value: 'invoices_get_summary_by_uuid' }
    ]}
>
<TabItem value="invoices_get_summary_by_uuid">

To retrieve a summary for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/summary`.

```sql
SELECT
invoice_id,
user_name,
amount,
billing_period,
credits_and_adjustments,
invoice_uuid,
overages,
product_charges,
taxes,
user_billing_address,
user_company,
user_email
FROM digitalocean.billing.invoice_summary
WHERE invoice_uuid = '{{ invoice_uuid }}' -- required;
```
</TabItem>
</Tabs>
