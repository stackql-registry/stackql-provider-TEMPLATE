--- 
title: partner_attachment_service_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_attachment_service_keys
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

Creates, updates, deletes, gets or lists a <code>partner_attachment_service_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>partner_attachment_service_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.network.partner_attachment_service_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="partner_attachments_get_service_key"
    values={[
        { label: 'partner_attachments_get_service_key', value: 'partner_attachments_get_service_key' }
    ]}
>
<TabItem value="partner_attachments_get_service_key">

The response will be a JSON object with a `service_key` object containing <br />the service key value and creation information

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in the ISO 8601 combined date and time format. (example: 2020-03-13T19:20:47.442049222Z)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (example: CREATED)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td> (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
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
    <td><a href="#partner_attachments_get_service_key"><CopyableCode code="partner_attachments_get_service_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pa_id"><code>pa_id</code></a></td>
    <td></td>
    <td>To get the current service key for a partner attachment, send a `GET` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;/service_key`.<br /></td>
</tr>
<tr>
    <td><a href="#partner_attachments_create_service_key"><CopyableCode code="partner_attachments_create_service_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-pa_id"><code>pa_id</code></a></td>
    <td></td>
    <td>This operation generates a new service key for the specified partner attachment. The operation is asynchronous, and the response is an empty JSON object returned with a 202 status code. To poll for the new service key, send a `GET` request to `/v2/partner_network_connect/attachments/&#123;pa_id&#125;/service_key`.<br /></td>
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
<tr id="parameter-pa_id">
    <td><CopyableCode code="pa_id" /></td>
    <td><code>string (string)</code></td>
    <td>A unique identifier for a partner attachment. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="partner_attachments_get_service_key"
    values={[
        { label: 'partner_attachments_get_service_key', value: 'partner_attachments_get_service_key' }
    ]}
>
<TabItem value="partner_attachments_get_service_key">

To get the current service key for a partner attachment, send a `GET` request to<br />`/v2/partner_network_connect/attachments/&#123;pa_id&#125;/service_key`.<br />

```sql
SELECT
created_at,
state,
value
FROM digitalocean.network.partner_attachment_service_keys
WHERE pa_id = '{{ pa_id }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="partner_attachments_create_service_key"
    values={[
        { label: 'partner_attachments_create_service_key', value: 'partner_attachments_create_service_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="partner_attachments_create_service_key">

This operation generates a new service key for the specified partner attachment. The operation is asynchronous, and the response is an empty JSON object returned with a 202 status code. To poll for the new service key, send a `GET` request to `/v2/partner_network_connect/attachments/&#123;pa_id&#125;/service_key`.<br />

```sql
INSERT INTO digitalocean.network.partner_attachment_service_keys (
pa_id
)
SELECT 
'{{ pa_id }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: partner_attachment_service_keys
  props:
    - name: pa_id
      value: string (string)
      description: Required parameter for the partner_attachment_service_keys resource.
```
</TabItem>
</Tabs>
