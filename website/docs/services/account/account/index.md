--- 
title: account
hide_title: false
hide_table_of_contents: false
keywords:
  - account
  - account
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

Creates, updates, deletes, gets or lists an <code>account</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>account</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.account.account" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="account_get"
    values={[
        { label: 'account_get', value: 'account_get' }
    ]}
>
<TabItem value="account_get">

A JSON object keyed on account with an excerpt of the current user account data.

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
    <td>The display name for the current user. (example: Sammy the Shark)</td>
</tr>
<tr>
    <td><CopyableCode code="droplet_limit" /></td>
    <td><code>integer</code></td>
    <td>The total number of Droplets current user or team may have active at one time. <br /><br />Requires `droplet:read` scope. </td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address used by the current user to register for DigitalOcean. (example: sammy@digitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="email_verified" /></td>
    <td><code>boolean</code></td>
    <td>If true, the user has verified their account via email. False otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="floating_ip_limit" /></td>
    <td><code>integer</code></td>
    <td>The total number of Floating IPs the current user or team may have. <br /><br />Requires `reserved_ip:read` scope. </td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This value is one of "active", "warning" or "locked". (default: active, example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A human-readable message giving more details about the status of the account. (example:  )</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>When authorized in a team context, includes information about the current team.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The unique universal identifier for the current user. (example: b6fr89dbf6d9156cace5f3c78dc9851d957381ef)</td>
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
    <td><a href="#account_get"><CopyableCode code="account_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To show information about the current user account, send a GET request to `/v2/account`.</td>
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
    defaultValue="account_get"
    values={[
        { label: 'account_get', value: 'account_get' }
    ]}
>
<TabItem value="account_get">

To show information about the current user account, send a GET request to `/v2/account`.

```sql
SELECT
name,
droplet_limit,
email,
email_verified,
floating_ip_limit,
status,
status_message,
team,
uuid
FROM digitalocean.account.account;
```
</TabItem>
</Tabs>
