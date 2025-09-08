--- 
title: domain_records
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_records
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

Creates, updates, deletes, gets or lists a <code>domain_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>domain_records</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.domain_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="domains_get_record"
    values={[
        { label: 'domains_get_record', value: 'domains_get_record' },
        { label: 'domains_list_records', value: 'domains_list_records' }
    ]}
>
<TabItem value="domains_get_record">

The response will be a JSON object with a key called `domain_record`. The value of this will be a domain record object which contains the standard domain record attributes.

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
    <td>A unique identifier for each domain record.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The host name, alias, or service being defined by the record. (example: @)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string</code></td>
    <td>Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates. (example: ns1.digitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="flags" /></td>
    <td><code>integer</code></td>
    <td>An unsigned integer between 0-255 used for CAA records.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port for SRV records.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority for SRV and MX records.</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef"</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the DNS record. For example: A, CNAME, TXT, ... (example: NS)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>The weight for SRV records.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="domains_list_records">

The response will be a JSON object with a key called `domain_records`. The value of this will be an array of domain record objects, each of which contains the standard domain record attributes. For attributes that are not used by a specific record type, a value of `null` will be returned. For instance, all records other than SRV will have `null` for the `weight` and `port` attributes.

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
    <td>A unique identifier for each domain record.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The host name, alias, or service being defined by the record. (example: @)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string</code></td>
    <td>Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates. (example: ns1.digitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="flags" /></td>
    <td><code>integer</code></td>
    <td>An unsigned integer between 0-255 used for CAA records.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port for SRV records.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority for SRV and MX records.</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef"</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the DNS record. For example: A, CNAME, TXT, ... (example: NS)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>The weight for SRV records.</td>
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
    <td><a href="#domains_get_record"><CopyableCode code="domains_get_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-domain_record_id"><code>domain_record_id</code></a></td>
    <td></td>
    <td>To retrieve a specific domain record, send a GET request to `/v2/domains/$DOMAIN_NAME/records/$RECORD_ID`.</td>
</tr>
<tr>
    <td><a href="#domains_list_records"><CopyableCode code="domains_list_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To get a listing of all records configured for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records`.<br />The list of records returned can be filtered by using the `name` and `type` query parameters. For example, to only include A records for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records?type=A`. `name` must be a fully qualified record name. For example, to only include records matching `sub.example.com`, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. Both name and type may be used together.<br /><br /></td>
</tr>
<tr>
    <td><a href="#domains_create_record"><CopyableCode code="domains_create_record" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a></td>
    <td></td>
    <td>To create a new record to a domain, send a POST request to<br />`/v2/domains/$DOMAIN_NAME/records`.<br /><br />The request must include all of the required fields for the domain record type<br />being added.<br /><br />See the [attribute table]https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/ for details regarding record<br />types and their respective required attributes.<br /></td>
</tr>
<tr>
    <td><a href="#domains_patch_record"><CopyableCode code="domains_patch_record" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-domain_record_id"><code>domain_record_id</code></a>, <a href="#parameter-data__type"><code>data__type</code></a></td>
    <td></td>
    <td>To update an existing record, send a PATCH request to<br />`/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for<br />the record type can be set to a new value for the record.<br /><br />See the [attribute table]https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/ for details regarding record<br />types and their respective attributes.<br /></td>
</tr>
<tr>
    <td><a href="#domains_update_record"><CopyableCode code="domains_update_record" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-domain_record_id"><code>domain_record_id</code></a>, <a href="#parameter-data__type"><code>data__type</code></a></td>
    <td></td>
    <td>To update an existing record, send a PUT request to<br />`/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for<br />the record type can be set to a new value for the record.<br /><br />See the [attribute table]https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/ for details regarding record<br />types and their respective attributes.<br /></td>
</tr>
<tr>
    <td><a href="#domains_delete_record"><CopyableCode code="domains_delete_record" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-domain_record_id"><code>domain_record_id</code></a></td>
    <td></td>
    <td>To delete a record for a domain, send a DELETE request to<br />`/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`.<br /><br />The record will be deleted and the response status will be a 204. This<br />indicates a successful request with no body returned.<br /></td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain itself. (example: example.com)</td>
</tr>
<tr id="parameter-domain_record_id">
    <td><CopyableCode code="domain_record_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the domain record. (example: 3352896)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. (example: sub.example.com)</td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the DNS record. For example: A, CNAME, TXT, ... (example: A)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="domains_get_record"
    values={[
        { label: 'domains_get_record', value: 'domains_get_record' },
        { label: 'domains_list_records', value: 'domains_list_records' }
    ]}
>
<TabItem value="domains_get_record">

To retrieve a specific domain record, send a GET request to `/v2/domains/$DOMAIN_NAME/records/$RECORD_ID`.

```sql
SELECT
id,
name,
data,
flags,
port,
priority,
tag,
ttl,
type,
weight
FROM digitalocean.compute.domain_records
WHERE domain_name = '{{ domain_name }}' -- required
AND domain_record_id = '{{ domain_record_id }}' -- required;
```
</TabItem>
<TabItem value="domains_list_records">

To get a listing of all records configured for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records`.<br />The list of records returned can be filtered by using the `name` and `type` query parameters. For example, to only include A records for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records?type=A`. `name` must be a fully qualified record name. For example, to only include records matching `sub.example.com`, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. Both name and type may be used together.<br /><br />

```sql
SELECT
id,
name,
data,
flags,
port,
priority,
tag,
ttl,
type,
weight
FROM digitalocean.compute.domain_records
WHERE domain_name = '{{ domain_name }}' -- required
AND name = '{{ name }}'
AND type = '{{ type }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="domains_create_record"
    values={[
        { label: 'domains_create_record', value: 'domains_create_record' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="domains_create_record">

To create a new record to a domain, send a POST request to<br />`/v2/domains/$DOMAIN_NAME/records`.<br /><br />The request must include all of the required fields for the domain record type<br />being added.<br /><br />See the [attribute table]https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/ for details regarding record<br />types and their respective required attributes.<br />

```sql
INSERT INTO digitalocean.compute.domain_records (
domain_name
)
SELECT 
'{{ domain_name }}'
RETURNING
domain_record
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: domain_records
  props:
    - name: domain_name
      value: string
      description: Required parameter for the domain_records resource.
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="domains_patch_record"
    values={[
        { label: 'domains_patch_record', value: 'domains_patch_record' }
    ]}
>
<TabItem value="domains_patch_record">

To update an existing record, send a PATCH request to<br />`/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for<br />the record type can be set to a new value for the record.<br /><br />See the [attribute table]https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/ for details regarding record<br />types and their respective attributes.<br />

```sql
UPDATE digitalocean.compute.domain_records
SET 
data__type = '{{ type }}',
data__name = '{{ name }}',
data__data = '{{ data }}',
data__priority = {{ priority }},
data__port = {{ port }},
data__ttl = {{ ttl }},
data__weight = {{ weight }},
data__flags = {{ flags }},
data__tag = '{{ tag }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND domain_record_id = '{{ domain_record_id }}' --required
AND data__type = '{{ type }}' --required
RETURNING
domain_record;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="domains_update_record"
    values={[
        { label: 'domains_update_record', value: 'domains_update_record' }
    ]}
>
<TabItem value="domains_update_record">

To update an existing record, send a PUT request to<br />`/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for<br />the record type can be set to a new value for the record.<br /><br />See the [attribute table]https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/ for details regarding record<br />types and their respective attributes.<br />

```sql
REPLACE digitalocean.compute.domain_records
SET 
data__type = '{{ type }}',
data__name = '{{ name }}',
data__data = '{{ data }}',
data__priority = {{ priority }},
data__port = {{ port }},
data__ttl = {{ ttl }},
data__weight = {{ weight }},
data__flags = {{ flags }},
data__tag = '{{ tag }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND domain_record_id = '{{ domain_record_id }}' --required
AND data__type = '{{ type }}' --required
RETURNING
domain_record;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="domains_delete_record"
    values={[
        { label: 'domains_delete_record', value: 'domains_delete_record' }
    ]}
>
<TabItem value="domains_delete_record">

To delete a record for a domain, send a DELETE request to<br />`/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`.<br /><br />The record will be deleted and the response status will be a 204. This<br />indicates a successful request with no body returned.<br />

```sql
DELETE FROM digitalocean.compute.domain_records
WHERE domain_name = '{{ domain_name }}' --required
AND domain_record_id = '{{ domain_record_id }}' --required;
```
</TabItem>
</Tabs>
