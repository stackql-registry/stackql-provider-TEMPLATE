--- 
title: cdn_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - cdn_endpoints
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

Creates, updates, deletes, gets or lists a <code>cdn_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cdn_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.cdn_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="cdn_get_endpoint"
    values={[
        { label: 'cdn_get_endpoint', value: 'cdn_get_endpoint' },
        { label: 'cdn_list_endpoints', value: 'cdn_list_endpoints' }
    ]}
>
<TabItem value="cdn_get_endpoint">

The response will be a JSON object with an `endpoint` key. This will be set to an object containing the standard CDN endpoint attributes.

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
    <td>A unique ID that can be used to identify and reference a CDN endpoint. (example: 892071a0-bb95-49bc-8021-3afd67a210bf)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. (example: 892071a0-bb95-49bc-8021-3afd67a210bf)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created. (example: 2018-03-21T16:02:37Z)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain" /></td>
    <td><code>string (hostname)</code></td>
    <td>The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. (example: static.example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string (hostname)</code></td>
    <td>The fully qualified domain name (FQDN) from which the CDN-backed content is served. (example: static-images.nyc3.cdn.digitaloceanspaces.com)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string (hostname)</code></td>
    <td>The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space. (example: static-images.nyc3.digitaloceanspaces.com)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="cdn_list_endpoints">

The result will be a JSON object with an `endpoints` key. This will be set to an array of endpoint objects, each of which will contain the standard CDN endpoint attributes.

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
    <td>A unique ID that can be used to identify and reference a CDN endpoint. (example: 892071a0-bb95-49bc-8021-3afd67a210bf)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. (example: 892071a0-bb95-49bc-8021-3afd67a210bf)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created. (example: 2018-03-21T16:02:37Z)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain" /></td>
    <td><code>string (hostname)</code></td>
    <td>The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. (example: static.example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string (hostname)</code></td>
    <td>The fully qualified domain name (FQDN) from which the CDN-backed content is served. (example: static-images.nyc3.cdn.digitaloceanspaces.com)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string (hostname)</code></td>
    <td>The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space. (example: static-images.nyc3.digitaloceanspaces.com)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.</td>
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
    <td><a href="#cdn_get_endpoint"><CopyableCode code="cdn_get_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cdn_id"><code>cdn_id</code></a></td>
    <td></td>
    <td>To show information about an existing CDN endpoint, send a GET request to `/v2/cdn/endpoints/$ENDPOINT_ID`.</td>
</tr>
<tr>
    <td><a href="#cdn_list_endpoints"><CopyableCode code="cdn_list_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the CDN endpoints available on your account, send a GET request to `/v2/cdn/endpoints`.</td>
</tr>
<tr>
    <td><a href="#cdn_create_endpoint"><CopyableCode code="cdn_create_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__origin"><code>data__origin</code></a></td>
    <td></td>
    <td>To create a new CDN endpoint, send a POST request to `/v2/cdn/endpoints`. The<br />origin attribute must be set to the fully qualified domain name (FQDN) of a<br />DigitalOcean Space. Optionally, the TTL may be configured by setting the `ttl`<br />attribute.<br /><br />A custom subdomain may be configured by specifying the `custom_domain` and<br />`certificate_id` attributes.<br /></td>
</tr>
<tr>
    <td><a href="#cdn_update_endpoints"><CopyableCode code="cdn_update_endpoints" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cdn_id"><code>cdn_id</code></a></td>
    <td></td>
    <td>To update the TTL, certificate ID, or the FQDN of the custom subdomain for<br />an existing CDN endpoint, send a PUT request to<br />`/v2/cdn/endpoints/$ENDPOINT_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#cdn_delete_endpoint"><CopyableCode code="cdn_delete_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cdn_id"><code>cdn_id</code></a></td>
    <td></td>
    <td>To delete a specific CDN endpoint, send a DELETE request to<br />`/v2/cdn/endpoints/$ENDPOINT_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /></td>
</tr>
<tr>
    <td><a href="#cdn_purge_cache"><CopyableCode code="cdn_purge_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cdn_id"><code>cdn_id</code></a>, <a href="#parameter-files"><code>files</code></a></td>
    <td></td>
    <td>To purge cached content from a CDN endpoint, send a DELETE request to<br />`/v2/cdn/endpoints/$ENDPOINT_ID/cache`. The body of the request should include<br />a `files` attribute containing a list of cached file paths to be purged. A<br />path may be for a single file or may contain a wildcard (`*`) to recursively<br />purge all files under a directory. When only a wildcard is provided, all cached <br />files will be purged. There is a rate limit of 50 files per 20 seconds that can <br />be purged. CDN endpoints have a rate limit of 5 requests per 10 seconds. <br />Purging files using a wildcard path counts as a single request against the API's <br />rate limit. Two identical purge requests cannot be sent at the same time.<br /></td>
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
<tr id="parameter-cdn_id">
    <td><CopyableCode code="cdn_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a CDN endpoint. (example: 19f06b6a-3ace-4315-b086-499a0e521b76)</td>
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
    defaultValue="cdn_get_endpoint"
    values={[
        { label: 'cdn_get_endpoint', value: 'cdn_get_endpoint' },
        { label: 'cdn_list_endpoints', value: 'cdn_list_endpoints' }
    ]}
>
<TabItem value="cdn_get_endpoint">

To show information about an existing CDN endpoint, send a GET request to `/v2/cdn/endpoints/$ENDPOINT_ID`.

```sql
SELECT
id,
certificate_id,
created_at,
custom_domain,
endpoint,
origin,
ttl
FROM digitalocean.compute.cdn_endpoints
WHERE cdn_id = '{{ cdn_id }}' -- required;
```
</TabItem>
<TabItem value="cdn_list_endpoints">

To list all of the CDN endpoints available on your account, send a GET request to `/v2/cdn/endpoints`.

```sql
SELECT
id,
certificate_id,
created_at,
custom_domain,
endpoint,
origin,
ttl
FROM digitalocean.compute.cdn_endpoints
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="cdn_create_endpoint"
    values={[
        { label: 'cdn_create_endpoint', value: 'cdn_create_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="cdn_create_endpoint">

To create a new CDN endpoint, send a POST request to `/v2/cdn/endpoints`. The<br />origin attribute must be set to the fully qualified domain name (FQDN) of a<br />DigitalOcean Space. Optionally, the TTL may be configured by setting the `ttl`<br />attribute.<br /><br />A custom subdomain may be configured by specifying the `custom_domain` and<br />`certificate_id` attributes.<br />

```sql
INSERT INTO digitalocean.compute.cdn_endpoints (
data__origin,
data__ttl,
data__certificate_id,
data__custom_domain
)
SELECT 
'{{ origin }}' --required,
{{ ttl }},
'{{ certificate_id }}',
'{{ custom_domain }}'
RETURNING
endpoint
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: cdn_endpoints
  props:
    - name: origin
      value: string
      description: >
        The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space.
        
    - name: ttl
      value: integer
      description: >
        The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.
        
      valid_values: ['60', '600', '3600', '86400', '604800']
      default: 3600
    - name: certificate_id
      value: string
      description: >
        The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.
        
    - name: custom_domain
      value: string
      description: >
        The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="cdn_update_endpoints"
    values={[
        { label: 'cdn_update_endpoints', value: 'cdn_update_endpoints' }
    ]}
>
<TabItem value="cdn_update_endpoints">

To update the TTL, certificate ID, or the FQDN of the custom subdomain for<br />an existing CDN endpoint, send a PUT request to<br />`/v2/cdn/endpoints/$ENDPOINT_ID`.<br />

```sql
REPLACE digitalocean.compute.cdn_endpoints
SET 
data__ttl = {{ ttl }},
data__certificate_id = '{{ certificate_id }}',
data__custom_domain = '{{ custom_domain }}'
WHERE 
cdn_id = '{{ cdn_id }}' --required
RETURNING
endpoint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="cdn_delete_endpoint"
    values={[
        { label: 'cdn_delete_endpoint', value: 'cdn_delete_endpoint' }
    ]}
>
<TabItem value="cdn_delete_endpoint">

To delete a specific CDN endpoint, send a DELETE request to<br />`/v2/cdn/endpoints/$ENDPOINT_ID`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br />

```sql
DELETE FROM digitalocean.compute.cdn_endpoints
WHERE cdn_id = '{{ cdn_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cdn_purge_cache"
    values={[
        { label: 'cdn_purge_cache', value: 'cdn_purge_cache' }
    ]}
>
<TabItem value="cdn_purge_cache">

To purge cached content from a CDN endpoint, send a DELETE request to<br />`/v2/cdn/endpoints/$ENDPOINT_ID/cache`. The body of the request should include<br />a `files` attribute containing a list of cached file paths to be purged. A<br />path may be for a single file or may contain a wildcard (`*`) to recursively<br />purge all files under a directory. When only a wildcard is provided, all cached <br />files will be purged. There is a rate limit of 50 files per 20 seconds that can <br />be purged. CDN endpoints have a rate limit of 5 requests per 10 seconds. <br />Purging files using a wildcard path counts as a single request against the API's <br />rate limit. Two identical purge requests cannot be sent at the same time.<br />

```sql
EXEC digitalocean.compute.cdn_endpoints.cdn_purge_cache 
@cdn_id='{{ cdn_id }}' --required 
@@json=
'{
"files": "{{ files }}"
}';
```
</TabItem>
</Tabs>
