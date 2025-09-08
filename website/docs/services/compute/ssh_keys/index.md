--- 
title: ssh_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - ssh_keys
  - compute
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

Creates, updates, deletes, gets or lists a <code>ssh_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssh_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.ssh_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="ssh_keys_get"
    values={[
        { label: 'ssh_keys_get', value: 'ssh_keys_get' },
        { label: 'ssh_keys_list', value: 'ssh_keys_list' }
    ]}
>
<TabItem value="ssh_keys_get">

A JSON object with the key set to `ssh_key`. The value is an `ssh_key` object containing the standard `ssh_key` attributes.

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
    <td><code>integer</code></td>
    <td>A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable display name for this key, used to easily identify the SSH keys when they are displayed. (example: My SSH Public Key)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account. (example: 3b:16:bf:e4:8b:00:8b:b8:59:8c:a9:d3:f0:19:45:fa)</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation. (example: ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="ssh_keys_list">

A JSON object with the key set to `ssh_keys`. The value is an array of `ssh_key` objects, each of which contains the standard `ssh_key` attributes.

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
    <td><code>integer</code></td>
    <td>A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable display name for this key, used to easily identify the SSH keys when they are displayed. (example: My SSH Public Key)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account. (example: 3b:16:bf:e4:8b:00:8b:b8:59:8c:a9:d3:f0:19:45:fa)</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation. (example: ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example)</td>
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
    <td><a href="#ssh_keys_get"><CopyableCode code="ssh_keys_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ssh_key_identifier"><code>ssh_key_identifier</code></a></td>
    <td></td>
    <td>To get information about a key, send a GET request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.<br />The response will be a JSON object with the key `ssh_key` and value an ssh_key object which contains the standard ssh_key attributes.</td>
</tr>
<tr>
    <td><a href="#ssh_keys_list"><CopyableCode code="ssh_keys_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the keys in your account, send a GET request to `/v2/account/keys`. The response will be a JSON object with a key set to `ssh_keys`. The value of this will be an array of ssh_key objects, each of which contains the standard ssh_key attributes.</td>
</tr>
<tr>
    <td><a href="#ssh_keys_create"><CopyableCode code="ssh_keys_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__public_key"><code>data__public_key</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To add a new SSH public key to your DigitalOcean account, send a POST request to `/v2/account/keys`. Set the `name` attribute to the name you wish to use and the `public_key` attribute to the full public key you are adding.</td>
</tr>
<tr>
    <td><a href="#ssh_keys_update"><CopyableCode code="ssh_keys_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ssh_key_identifier"><code>ssh_key_identifier</code></a></td>
    <td></td>
    <td>To update the name of an SSH key, send a PUT request to either `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set the `name` attribute to the new name you want to use.</td>
</tr>
<tr>
    <td><a href="#ssh_keys_delete"><CopyableCode code="ssh_keys_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ssh_key_identifier"><code>ssh_key_identifier</code></a></td>
    <td></td>
    <td>To destroy a public SSH key that you have in your account, send a DELETE request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.<br />A 204 status will be returned, indicating that the action was successful and that the response body is empty.</td>
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
<tr id="parameter-ssh_key_identifier">
    <td><CopyableCode code="ssh_key_identifier" /></td>
    <td><code></code></td>
    <td>Either the ID or the fingerprint of an existing SSH key. (example: 512189)</td>
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
    defaultValue="ssh_keys_get"
    values={[
        { label: 'ssh_keys_get', value: 'ssh_keys_get' },
        { label: 'ssh_keys_list', value: 'ssh_keys_list' }
    ]}
>
<TabItem value="ssh_keys_get">

To get information about a key, send a GET request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.<br />The response will be a JSON object with the key `ssh_key` and value an ssh_key object which contains the standard ssh_key attributes.

```sql
SELECT
id,
name,
fingerprint,
public_key
FROM digitalocean.compute.ssh_keys
WHERE ssh_key_identifier = '{{ ssh_key_identifier }}' -- required;
```
</TabItem>
<TabItem value="ssh_keys_list">

To list all of the keys in your account, send a GET request to `/v2/account/keys`. The response will be a JSON object with a key set to `ssh_keys`. The value of this will be an array of ssh_key objects, each of which contains the standard ssh_key attributes.

```sql
SELECT
id,
name,
fingerprint,
public_key
FROM digitalocean.compute.ssh_keys
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="ssh_keys_create"
    values={[
        { label: 'ssh_keys_create', value: 'ssh_keys_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="ssh_keys_create">

To add a new SSH public key to your DigitalOcean account, send a POST request to `/v2/account/keys`. Set the `name` attribute to the name you wish to use and the `public_key` attribute to the full public key you are adding.

```sql
INSERT INTO digitalocean.compute.ssh_keys (
data__public_key,
data__name
)
SELECT 
'{{ public_key }}' --required,
'{{ name }}' --required
RETURNING
ssh_key
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: ssh_keys
  props:
    - name: public_key
      value: string
      description: >
        The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation.
        
    - name: name
      value: string
      description: >
        A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="ssh_keys_update"
    values={[
        { label: 'ssh_keys_update', value: 'ssh_keys_update' }
    ]}
>
<TabItem value="ssh_keys_update">

To update the name of an SSH key, send a PUT request to either `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set the `name` attribute to the new name you want to use.

```sql
REPLACE digitalocean.compute.ssh_keys
SET 
data__name = '{{ name }}'
WHERE 
ssh_key_identifier = '{{ ssh_key_identifier }}' --required
RETURNING
ssh_key;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="ssh_keys_delete"
    values={[
        { label: 'ssh_keys_delete', value: 'ssh_keys_delete' }
    ]}
>
<TabItem value="ssh_keys_delete">

To destroy a public SSH key that you have in your account, send a DELETE request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.<br />A 204 status will be returned, indicating that the action was successful and that the response body is empty.

```sql
DELETE FROM digitalocean.compute.ssh_keys
WHERE ssh_key_identifier = '{{ ssh_key_identifier }}' --required;
```
</TabItem>
</Tabs>
