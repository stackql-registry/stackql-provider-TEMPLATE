--- 
title: invoices
hide_title: false
hide_table_of_contents: false
keywords:
  - invoices
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

Creates, updates, deletes, gets or lists an <code>invoices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>invoices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.billing.invoices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="invoices_get_by_uuid"
    values={[
        { label: 'invoices_get_by_uuid', value: 'invoices_get_by_uuid' },
        { label: 'invoices_list', value: 'invoices_list' }
    ]}
>
<TabItem value="invoices_get_by_uuid">

The response will be a JSON object with a key called `invoice_items`. This will be set to an array of invoice item objects. All resources will be shown on invoices, regardless of permissions.

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
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>ID of the resource billing in the invoice item if available. (example: 2353624)</td>
</tr>
<tr>
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>Name of the DigitalOcean Project this resource belongs to. (example: web)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>string</code></td>
    <td>Billed amount of this invoice item. Billed in USD. (example: 12.34)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the invoice item. (example: a56e086a317d8410c8b4cfd1f4dc9f82)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string</code></td>
    <td>Duration of time this invoice item was used and subsequently billed. (example: 744)</td>
</tr>
<tr>
    <td><CopyableCode code="duration_unit" /></td>
    <td><code>string</code></td>
    <td>Unit of time for duration. (example: Hours)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>Time the invoice item stopped being billed for usage. (example: 2020-02-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="group_description" /></td>
    <td><code>string</code></td>
    <td>Description of the invoice item when it is a grouped set of usage, such  as DOKS or databases. (example: my-doks-cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Name of the product being billed in the invoice item. (example: Kubernetes Clusters)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the resource billing in the invoice item if available. (example: 711157cb-37c8-4817-b371-44fa3504a39c)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>Time the invoice item began to be billed for usage. (example: 2020-01-01T00:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="invoices_list">

The response will be a JSON object contains that contains a list of invoices under the `invoices` key, and the invoice preview under the `invoice_preview` key.<br />Each element contains the invoice summary attributes.

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
    <td><CopyableCode code="invoice_preview" /></td>
    <td><code>object</code></td>
    <td>The invoice preview.</td>
</tr>
<tr>
    <td><CopyableCode code="invoices" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Information about the response itself.</td>
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
    <td><a href="#invoices_get_by_uuid"><CopyableCode code="invoices_get_by_uuid" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-invoice_uuid"><code>invoice_uuid</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve the invoice items for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID`.</td>
</tr>
<tr>
    <td><a href="#invoices_list"><CopyableCode code="invoices_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve a list of all invoices, send a GET request to `/v2/customers/my/invoices`.</td>
</tr>
<tr>
    <td><a href="#invoices_get_csv_by_uuid"><CopyableCode code="invoices_get_csv_by_uuid" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-invoice_uuid"><code>invoice_uuid</code></a></td>
    <td></td>
    <td>To retrieve a CSV for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/csv`.</td>
</tr>
<tr>
    <td><a href="#invoices_get_pdf_by_uuid"><CopyableCode code="invoices_get_pdf_by_uuid" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-invoice_uuid"><code>invoice_uuid</code></a></td>
    <td></td>
    <td>To retrieve a PDF for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/pdf`.</td>
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
    defaultValue="invoices_get_by_uuid"
    values={[
        { label: 'invoices_get_by_uuid', value: 'invoices_get_by_uuid' },
        { label: 'invoices_list', value: 'invoices_list' }
    ]}
>
<TabItem value="invoices_get_by_uuid">

To retrieve the invoice items for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID`.

```sql
SELECT
resource_id,
project_name,
amount,
description,
duration,
duration_unit,
end_time,
group_description,
product,
resource_uuid,
start_time
FROM digitalocean.billing.invoices
WHERE invoice_uuid = '{{ invoice_uuid }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
<TabItem value="invoices_list">

To retrieve a list of all invoices, send a GET request to `/v2/customers/my/invoices`.

```sql
SELECT
invoice_preview,
invoices,
links,
meta
FROM digitalocean.billing.invoices
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invoices_get_csv_by_uuid"
    values={[
        { label: 'invoices_get_csv_by_uuid', value: 'invoices_get_csv_by_uuid' },
        { label: 'invoices_get_pdf_by_uuid', value: 'invoices_get_pdf_by_uuid' }
    ]}
>
<TabItem value="invoices_get_csv_by_uuid">

To retrieve a CSV for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/csv`.

```sql
EXEC digitalocean.billing.invoices.invoices_get_csv_by_uuid 
@invoice_uuid='{{ invoice_uuid }}' --required;
```
</TabItem>
<TabItem value="invoices_get_pdf_by_uuid">

To retrieve a PDF for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/pdf`.

```sql
EXEC digitalocean.billing.invoices.invoices_get_pdf_by_uuid 
@invoice_uuid='{{ invoice_uuid }}' --required;
```
</TabItem>
</Tabs>
