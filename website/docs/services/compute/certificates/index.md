--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
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

Creates, updates, deletes, gets or lists a <code>certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>certificates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="certificates_get"
    values={[
        { label: 'certificates_get', value: 'certificates_get' },
        { label: 'certificates_list', value: 'certificates_list' }
    ]}
>
<TabItem value="certificates_get">

The response will be a JSON object with a `certificate` key. This will be set to an object containing the standard certificate attributes.

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
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference a certificate. (example: 892071a0-bb95-49bc-8021-3afd67a210bf)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A unique human-readable name referring to a certificate. (example: web-cert-01)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the certificate was created. (example: 2017-02-08T16:02:37Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_names" /></td>
    <td><code>array</code></td>
    <td>An array of fully qualified domain names (FQDNs) for which the certificate was issued.</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents the certificate's expiration date. (example: 2017-02-22T00:23:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="sha1_fingerprint" /></td>
    <td><code>string</code></td>
    <td>A unique identifier generated from the SHA-1 fingerprint of the certificate. (example: dfcc9f57d86bf58e321c2c6c31c7a971be244ac7)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>A string representing the current state of the certificate. It may be `pending`, `verified`, or `error`. (example: verified)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt. (example: lets_encrypt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="certificates_list">

The result will be a JSON object with a `certificates` key. This will be set to an array of certificate objects, each of which will contain the standard certificate attributes.

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
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to identify and reference a certificate. (example: 892071a0-bb95-49bc-8021-3afd67a210bf)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A unique human-readable name referring to a certificate. (example: web-cert-01)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the certificate was created. (example: 2017-02-08T16:02:37Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_names" /></td>
    <td><code>array</code></td>
    <td>An array of fully qualified domain names (FQDNs) for which the certificate was issued.</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents the certificate's expiration date. (example: 2017-02-22T00:23:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="sha1_fingerprint" /></td>
    <td><code>string</code></td>
    <td>A unique identifier generated from the SHA-1 fingerprint of the certificate. (example: dfcc9f57d86bf58e321c2c6c31c7a971be244ac7)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>A string representing the current state of the certificate. It may be `pending`, `verified`, or `error`. (example: verified)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt. (example: lets_encrypt)</td>
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
    <td><a href="#certificates_get"><CopyableCode code="certificates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-certificate_id"><code>certificate_id</code></a></td>
    <td></td>
    <td>To show information about an existing certificate, send a GET request to `/v2/certificates/$CERTIFICATE_ID`.</td>
</tr>
<tr>
    <td><a href="#certificates_list"><CopyableCode code="certificates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>To list all of the certificates available on your account, send a GET request to `/v2/certificates`.</td>
</tr>
<tr>
    <td><a href="#certificates_create"><CopyableCode code="certificates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To upload new SSL certificate which you have previously generated, send a POST<br />request to `/v2/certificates`.<br /><br />When uploading a user-generated certificate, the `private_key`,<br />`leaf_certificate`, and optionally the `certificate_chain` attributes should<br />be provided. The type must be set to `custom`.<br /><br />When using Let's Encrypt to create a certificate, the `dns_names` attribute<br />must be provided, and the type must be set to `lets_encrypt`.<br /></td>
</tr>
<tr>
    <td><a href="#certificates_delete"><CopyableCode code="certificates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-certificate_id"><code>certificate_id</code></a></td>
    <td></td>
    <td>To delete a specific certificate, send a DELETE request to<br />`/v2/certificates/$CERTIFICATE_ID`.<br /></td>
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
<tr id="parameter-certificate_id">
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a certificate. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of expected certificate (example: certificate-name)</td>
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
    defaultValue="certificates_get"
    values={[
        { label: 'certificates_get', value: 'certificates_get' },
        { label: 'certificates_list', value: 'certificates_list' }
    ]}
>
<TabItem value="certificates_get">

To show information about an existing certificate, send a GET request to `/v2/certificates/$CERTIFICATE_ID`.

```sql
SELECT
id,
name,
created_at,
dns_names,
not_after,
sha1_fingerprint,
state,
type
FROM digitalocean.compute.certificates
WHERE certificate_id = '{{ certificate_id }}' -- required;
```
</TabItem>
<TabItem value="certificates_list">

To list all of the certificates available on your account, send a GET request to `/v2/certificates`.

```sql
SELECT
id,
name,
created_at,
dns_names,
not_after,
sha1_fingerprint,
state,
type
FROM digitalocean.compute.certificates
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND name = '{{ name }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="certificates_create"
    values={[
        { label: 'certificates_create', value: 'certificates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="certificates_create">

To upload new SSL certificate which you have previously generated, send a POST<br />request to `/v2/certificates`.<br /><br />When uploading a user-generated certificate, the `private_key`,<br />`leaf_certificate`, and optionally the `certificate_chain` attributes should<br />be provided. The type must be set to `custom`.<br /><br />When using Let's Encrypt to create a certificate, the `dns_names` attribute<br />must be provided, and the type must be set to `lets_encrypt`.<br />

```sql
INSERT INTO digitalocean.compute.certificates (

)
SELECT 

RETURNING
certificate
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: certificates
  props:
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="certificates_delete"
    values={[
        { label: 'certificates_delete', value: 'certificates_delete' }
    ]}
>
<TabItem value="certificates_delete">

To delete a specific certificate, send a DELETE request to<br />`/v2/certificates/$CERTIFICATE_ID`.<br />

```sql
DELETE FROM digitalocean.compute.certificates
WHERE certificate_id = '{{ certificate_id }}' --required;
```
</TabItem>
</Tabs>
