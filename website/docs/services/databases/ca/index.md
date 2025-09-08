--- 
title: ca
hide_title: false
hide_table_of_contents: false
keywords:
  - ca
  - databases
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

Creates, updates, deletes, gets or lists a <code>ca</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ca</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.ca" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_ca"
    values={[
        { label: 'databases_get_ca', value: 'databases_get_ca' }
    ]}
>
<TabItem value="databases_get_ca">

A JSON object with a key of `ca`.

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
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td>base64 encoding of the certificate used to secure database connections (example: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUVRVENDQXFtZ0F3SUJBZ0lVRUZZWTdBWFZQS0Raam9jb1lpMk00Y0dvcU0wd0RRWUpLb1pJaHZjTkFRRU0KQlFBd09qRTRNRFlHQTFVRUF3d3ZOek0zT1RaaE1XRXRaamhrTUMwME9HSmpMV0V4Wm1NdFpqbGhNVFZsWXprdwpORGhsSUZCeWIycGxZM1FnUTBFd0hoY05NakF3TnpFM01UVTFNREEyV2hjTk16QXdOekUxTVRVMU1EQTJXakE2Ck1UZ3dOZ1lEVlFRRERDODNNemM1Tm1FeFlTMW1PR1F3TFRRNFltTXRZVEZtWXkxbU9XRXhOV1ZqT1RBME9HVWcKVUhKdmFtVmpkQ0JEUVRDQ0FhSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnR1BBRENDQVlvQ2dnR0JBTVdScXhycwpMZnpNdHZyUmxKVEw4MldYMVBLZkhKbitvYjNYcmVBY3FZd1dBUUp2Q3IycmhxSXZieVZzMGlaU0NzOHI4c3RGClljQ0R1bkxJNmUwTy9laERZYTBIT2RrMkFFRzE1ckVOVmNha2NSczcyQWlHVHNrdkNXS2VkUjFTUWswVWt0WCsKQUg4S1ExS3F5bzNtZ2Y2cVV1WUpzc3JNTXFselk3YTN1RVpEb2ZqTjN5Q3MvM21pTVJKcVcyNm1JV0IrUUlEbAo5YzdLRVF5MTZvdCtjeHVnd0lLMm9oZHMzaFY1bjBKMFVBM0I3QWRBdXY5aUl5L3JHaHlTNm5CNTdaWm9JZnAyCnFybXdOY0UrVjlIdXhQSGtRVjFOQjUwOFFudWZ4Z0E5VCtqU2VrdGVUbWFORkxqNjFXL3BtcndrTytOaWFXUTIKaGgzVXBKOEozY1BoNkErbHRnUmpSV2NEb2lsYVNwRVVpU09WemNNYVFvalZKYVJlNk9NbnZYc29NaSs3ZzdneApWcittQ0lUcGcvck9DaXpBWWQ2UFAxLzdYTjk1ZXNmU2tBQnM5c3hJakpjTUFqbDBYTEFzRmtGZVdyeHNIajlVCmJnaDNWYXdtcnpUeXhZT0RQcXV1cS9JcGlwc0RRT3Fpb2ZsUStkWEJJL3NUT0NNbVp6K0pNcG5HYXdJREFRQUIKb3o4d1BUQWRCZ05WSFE0RUZnUVVSekdDRlE3WEtUdHRDN3JzNS8ydFlQcExTZGN3RHdZRFZSMFRCQWd3QmdFQgovd0lCQURBTEJnTlZIUThFQkFNQ0FRWXdEUVlKS29aSWh2Y05BUUVNQlFBRGdnR0JBSWFKQ0dSVVNxUExtcmcvCmk3MW10b0NHUDdzeG1BVXVCek1oOEdrU25uaVdaZnZGMTRwSUtqTlkwbzVkWmpHKzZqK1VjalZtK0RIdGE1RjYKOWJPeEk5S0NFeEI1blBjRXpMWjNZYitNOTcrellxbm9zUm85S21DVFJBb2JrNTZ0WU1FS1h1aVJja2tkMm1yUQo4cGw2N2xxdThjM1V4c0dHZEZVT01wMkk3ZTNpdUdWVm5UR0ZWM3JQZUdaQ0J3WGVyUUQyY0F4UjkzS3BnWVZ2ClhUUzk5dnpSbm1HOHhhUm9EVy9FbEdXZ2xWd0Q5a1JrbXhUUkdoYTdDWVZCcjFQVWY2dVVFVjhmVFIxc1hFZnIKLytMR1JoSVVsSUhWT3l2Yzk3YnZYQURPbWF1MWZDVE5lWGtRdTNyZnZFSlBmaFlLeVIwT0V3eWVvdlhRNzl0LwpTV2ZGTjBreU1Pc1UrNVNIdHJKSEh1eWNWcU0yQlVVK083VjM1UnNwOU9MZGRZMFFVbTZldFpEVEhhSUhYYzRRCnl1Rm1OL1NhSFZtNE0wL3BTVlJQdVd6TmpxMnZyRllvSDRtbGhIZk95TUNJMjc2elE2aWhGNkdDSHlkOUJqajcKUm1UWGEyNHM3NWhmSi9YTDV2bnJSdEtpVHJlVHF6V21EOVhnUmNMQ0gyS1hJaVRtSWc9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==)</td>
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
    <td><a href="#databases_get_ca"><CopyableCode code="databases_get_ca" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To retrieve the public certificate used to secure the connection to the database cluster send a GET request to<br />`/v2/databases/$DATABASE_ID/ca`.<br /><br />The response will be a JSON object with a `ca` key. This will be set to an object<br />containing the base64 encoding of the public key certificate.<br /></td>
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
<tr id="parameter-database_cluster_uuid">
    <td><CopyableCode code="database_cluster_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a database cluster. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_ca"
    values={[
        { label: 'databases_get_ca', value: 'databases_get_ca' }
    ]}
>
<TabItem value="databases_get_ca">

To retrieve the public certificate used to secure the connection to the database cluster send a GET request to<br />`/v2/databases/$DATABASE_ID/ca`.<br /><br />The response will be a JSON object with a `ca` key. This will be set to an object<br />containing the base64 encoding of the public key certificate.<br />

```sql
SELECT
certificate
FROM digitalocean.databases.ca
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>
