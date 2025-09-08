--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="domains_get"
    values={[
        { label: 'domains_get', value: 'domains_get' },
        { label: 'domains_list', value: 'domains_list' }
    ]}
>
<TabItem value="domains_get">

The response will be a JSON object with a key called `domain`. The value of this will be an object that contains the standard attributes defined for a domain.

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
    <td>The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name. (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain. (example: 192.0.2.1)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.</td>
</tr>
<tr>
    <td><CopyableCode code="zone_file" /></td>
    <td><code>string</code></td>
    <td>This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource. (example: $ORIGIN example.com.<br />$TTL 1800<br />example.com. IN SOA ns1.digitalocean.com. hostmaster.example.com. 1415982609 10800 3600 604800 1800<br />example.com. 1800 IN NS ns1.digitalocean.com.<br />example.com. 1800 IN NS ns2.digitalocean.com.<br />example.com. 1800 IN NS ns3.digitalocean.com.<br />example.com. 1800 IN A 1.2.3.4<br />)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="domains_list">

The response will be a JSON object with a key called `domains`. The value of this will be an array of Domain objects, each of which contain the standard domain attributes.

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
    <td>The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name. (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain. (example: 192.0.2.1)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.</td>
</tr>
<tr>
    <td><CopyableCode code="zone_file" /></td>
    <td><code>string</code></td>
    <td>This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource. (example: $ORIGIN example.com.<br />$TTL 1800<br />example.com. IN SOA ns1.digitalocean.com. hostmaster.example.com. 1415982609 10800 3600 604800 1800<br />example.com. 1800 IN NS ns1.digitalocean.com.<br />example.com. 1800 IN NS ns2.digitalocean.com.<br />example.com. 1800 IN NS ns3.digitalocean.com.<br />example.com. 1800 IN A 1.2.3.4<br />)</td>
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
    <td><a href="#domains_get"><CopyableCode code="domains_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a></td>
    <td></td>
    <td>To get details about a specific domain, send a GET request to `/v2/domains/$DOMAIN_NAME`.</td>
</tr>
<tr>
    <td><a href="#domains_list"><CopyableCode code="domains_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve a list of all of the domains in your account, send a GET request to `/v2/domains`.</td>
</tr>
<tr>
    <td><a href="#domains_create"><CopyableCode code="domains_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new domain, send a POST request to `/v2/domains`. Set the "name"<br />attribute to the domain name you are adding. Optionally, you may set the<br />"ip_address" attribute, and an A record will be automatically created pointing<br />to the apex domain.<br /></td>
</tr>
<tr>
    <td><a href="#domains_delete"><CopyableCode code="domains_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a></td>
    <td></td>
    <td>To delete a domain, send a DELETE request to `/v2/domains/$DOMAIN_NAME`.<br /></td>
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
    defaultValue="domains_get"
    values={[
        { label: 'domains_get', value: 'domains_get' },
        { label: 'domains_list', value: 'domains_list' }
    ]}
>
<TabItem value="domains_get">

To get details about a specific domain, send a GET request to `/v2/domains/$DOMAIN_NAME`.

```sql
SELECT
name,
ip_address,
ttl,
zone_file
FROM digitalocean.compute.domains
WHERE domain_name = '{{ domain_name }}' -- required;
```
</TabItem>
<TabItem value="domains_list">

To retrieve a list of all of the domains in your account, send a GET request to `/v2/domains`.

```sql
SELECT
name,
ip_address,
ttl,
zone_file
FROM digitalocean.compute.domains
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="domains_create"
    values={[
        { label: 'domains_create', value: 'domains_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="domains_create">

To create a new domain, send a POST request to `/v2/domains`. Set the "name"<br />attribute to the domain name you are adding. Optionally, you may set the<br />"ip_address" attribute, and an A record will be automatically created pointing<br />to the apex domain.<br />

```sql
INSERT INTO digitalocean.compute.domains (
data__name,
data__ip_address
)
SELECT 
'{{ name }}',
'{{ ip_address }}'
RETURNING
domain
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: domains
  props:
    - name: name
      value: string
      description: >
        The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name.
        
    - name: ip_address
      value: string
      description: >
        This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="domains_delete"
    values={[
        { label: 'domains_delete', value: 'domains_delete' }
    ]}
>
<TabItem value="domains_delete">

To delete a domain, send a DELETE request to `/v2/domains/$DOMAIN_NAME`.<br />

```sql
DELETE FROM digitalocean.compute.domains
WHERE domain_name = '{{ domain_name }}' --required;
```
</TabItem>
</Tabs>
