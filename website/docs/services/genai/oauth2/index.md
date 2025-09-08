--- 
title: oauth2
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth2
  - genai
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

Creates, updates, deletes, gets or lists an <code>oauth2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oauth2</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.oauth2" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_oauth2_url"
    values={[
        { label: 'genai_get_oauth2_url', value: 'genai_get_oauth2_url' }
    ]}
>
<TabItem value="genai_get_oauth2_url">

A successful response.

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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The oauth2 url (example: example string)</td>
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
    <td><a href="#genai_get_oauth2_url"><CopyableCode code="genai_get_oauth2_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-redirect_url"><code>redirect_url</code></a></td>
    <td>To generate an Oauth2-URL for use with your localhost, send a GET request to `/v2/gen-ai/oauth2/url`. Pass 'http://localhost:3000 as redirect_url</td>
</tr>
<tr>
    <td><a href="#genai_create_oauth2_dropbox_tokens"><CopyableCode code="genai_create_oauth2_dropbox_tokens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To obtain the refresh token, needed for creation of data sources, send a GET request to `/v2/gen-ai/oauth2/dropbox/tokens`. Pass the code you obtrained from the oauth flow in the field 'code'</td>
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
<tr id="parameter-redirect_url">
    <td><CopyableCode code="redirect_url" /></td>
    <td><code>string</code></td>
    <td>The redirect url. (example: "example string")</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type "google" / "dropbox". (example: "example string")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_oauth2_url"
    values={[
        { label: 'genai_get_oauth2_url', value: 'genai_get_oauth2_url' }
    ]}
>
<TabItem value="genai_get_oauth2_url">

To generate an Oauth2-URL for use with your localhost, send a GET request to `/v2/gen-ai/oauth2/url`. Pass 'http://localhost:3000 as redirect_url

```sql
SELECT
url
FROM digitalocean.genai.oauth2
WHERE type = '{{ type }}'
AND redirect_url = '{{ redirect_url }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_create_oauth2_dropbox_tokens"
    values={[
        { label: 'genai_create_oauth2_dropbox_tokens', value: 'genai_create_oauth2_dropbox_tokens' }
    ]}
>
<TabItem value="genai_create_oauth2_dropbox_tokens">

To obtain the refresh token, needed for creation of data sources, send a GET request to `/v2/gen-ai/oauth2/dropbox/tokens`. Pass the code you obtrained from the oauth flow in the field 'code'

```sql
EXEC digitalocean.genai.oauth2.genai_create_oauth2_dropbox_tokens 
@@json=
'{
"code": "{{ code }}", 
"redirect_url": "{{ redirect_url }}"
}';
```
</TabItem>
</Tabs>
