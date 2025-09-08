--- 
title: droplets_associated_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - droplets_associated_resources
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

Creates, updates, deletes, gets or lists a <code>droplets_associated_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>droplets_associated_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplets_associated_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_list_associated_resources"
    values={[
        { label: 'droplets_list_associated_resources', value: 'droplets_list_associated_resources' }
    ]}
>
<TabItem value="droplets_list_associated_resources">

A JSON object containing `snapshots`, `volumes`, and `volume_snapshots` keys.

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
    <td><CopyableCode code="floating_ips" /></td>
    <td><code>array</code></td>
    <td>Floating IPs that are associated with this Droplet.<br />Requires `reserved_ip:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_ips" /></td>
    <td><code>array</code></td>
    <td>Reserved IPs that are associated with this Droplet.<br />Requires `reserved_ip:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshots" /></td>
    <td><code>array</code></td>
    <td>Snapshots that are associated with this Droplet.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_snapshots" /></td>
    <td><code>array</code></td>
    <td>Volume Snapshots that are associated with this Droplet.<br />Requires `block_storage_snapshot:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>Volumes that are associated with this Droplet.<br />Requires `block_storage:read` scope.</td>
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
    <td><a href="#droplets_list_associated_resources"><CopyableCode code="droplets_list_associated_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To list the associated billable resources that can be destroyed along with a<br />Droplet, send a GET request to the<br />`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.<br /><br />This endpoint will only return resources that you are authorized to see. For<br />example, to see associated Reserved IPs, include the `reserved_ip:read` scope.<br /><br />The response will be a JSON object containing `snapshots`, `volumes`, and<br />`volume_snapshots` keys. Each will be set to an array of objects containing<br />information about the associated resources.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_destroy_with_associated_resources_selective"><CopyableCode code="droplets_destroy_with_associated_resources_selective" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To destroy a Droplet along with a sub-set of its associated resources, send a<br />DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`<br />endpoint. The JSON body of the request should include `reserved_ips`, `snapshots`, `volumes`,<br />or `volume_snapshots` keys each set to an array of IDs for the associated<br />resources to be destroyed. The IDs can be found by querying the Droplet's<br />associated resources. Any associated resource not included in the request<br />will remain and continue to accrue changes on your account.<br /><br />A successful response will include a 202 response code and no content. Use<br />the status endpoint to check on the success or failure of the destruction of<br />the individual resources.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_destroy_with_associated_resources_dangerous"><CopyableCode code="droplets_destroy_with_associated_resources_dangerous" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a>, <a href="#parameter-X-Dangerous"><code>X-Dangerous</code></a></td>
    <td></td>
    <td>To destroy a Droplet along with all of its associated resources, send a DELETE<br />request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`<br />endpoint. The headers of this request must include an `X-Dangerous` key set to<br />`true`. To preview which resources will be destroyed, first query the<br />Droplet's associated resources. This operation _can not_ be reverse and should<br />be used with caution.<br /><br />A successful response will include a 202 response code and no content. Use the<br />status endpoint to check on the success or failure of the destruction of the<br />individual resources.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_get_destroy_associated_resources_status"><CopyableCode code="droplets_get_destroy_associated_resources_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To check on the status of a request to destroy a Droplet with its associated<br />resources, send a GET request to the<br />`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_destroy_retry_with_associated_resources"><CopyableCode code="droplets_destroy_retry_with_associated_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>If the status of a request to destroy a Droplet with its associated resources<br />reported any errors, it can be retried by sending a POST request to the<br />`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.<br /><br />Only one destroy can be active at a time per Droplet. If a retry is issued<br />while another destroy is in progress for the Droplet a 409 status code will<br />be returned. A successful response will include a 202 response code and no<br />content.<br /></td>
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
<tr id="parameter-X-Dangerous">
    <td><CopyableCode code="X-Dangerous" /></td>
    <td><code>boolean</code></td>
    <td>Acknowledge this action will destroy the Droplet and all associated resources and _can not_ be reversed. (example: true)</td>
</tr>
<tr id="parameter-droplet_id">
    <td><CopyableCode code="droplet_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for a Droplet instance. (example: 3164444)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="droplets_list_associated_resources"
    values={[
        { label: 'droplets_list_associated_resources', value: 'droplets_list_associated_resources' }
    ]}
>
<TabItem value="droplets_list_associated_resources">

To list the associated billable resources that can be destroyed along with a<br />Droplet, send a GET request to the<br />`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.<br /><br />This endpoint will only return resources that you are authorized to see. For<br />example, to see associated Reserved IPs, include the `reserved_ip:read` scope.<br /><br />The response will be a JSON object containing `snapshots`, `volumes`, and<br />`volume_snapshots` keys. Each will be set to an array of objects containing<br />information about the associated resources.<br />

```sql
SELECT
floating_ips,
reserved_ips,
snapshots,
volume_snapshots,
volumes
FROM digitalocean.compute.droplets_associated_resources
WHERE droplet_id = '{{ droplet_id }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="droplets_destroy_with_associated_resources_selective"
    values={[
        { label: 'droplets_destroy_with_associated_resources_selective', value: 'droplets_destroy_with_associated_resources_selective' },
        { label: 'droplets_destroy_with_associated_resources_dangerous', value: 'droplets_destroy_with_associated_resources_dangerous' },
        { label: 'droplets_get_destroy_associated_resources_status', value: 'droplets_get_destroy_associated_resources_status' },
        { label: 'droplets_destroy_retry_with_associated_resources', value: 'droplets_destroy_retry_with_associated_resources' }
    ]}
>
<TabItem value="droplets_destroy_with_associated_resources_selective">

To destroy a Droplet along with a sub-set of its associated resources, send a<br />DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`<br />endpoint. The JSON body of the request should include `reserved_ips`, `snapshots`, `volumes`,<br />or `volume_snapshots` keys each set to an array of IDs for the associated<br />resources to be destroyed. The IDs can be found by querying the Droplet's<br />associated resources. Any associated resource not included in the request<br />will remain and continue to accrue changes on your account.<br /><br />A successful response will include a 202 response code and no content. Use<br />the status endpoint to check on the success or failure of the destruction of<br />the individual resources.<br />

```sql
EXEC digitalocean.compute.droplets_associated_resources.droplets_destroy_with_associated_resources_selective 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"floating_ips": "{{ floating_ips }}", 
"reserved_ips": "{{ reserved_ips }}", 
"snapshots": "{{ snapshots }}", 
"volumes": "{{ volumes }}", 
"volume_snapshots": "{{ volume_snapshots }}"
}';
```
</TabItem>
<TabItem value="droplets_destroy_with_associated_resources_dangerous">

To destroy a Droplet along with all of its associated resources, send a DELETE<br />request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`<br />endpoint. The headers of this request must include an `X-Dangerous` key set to<br />`true`. To preview which resources will be destroyed, first query the<br />Droplet's associated resources. This operation _can not_ be reverse and should<br />be used with caution.<br /><br />A successful response will include a 202 response code and no content. Use the<br />status endpoint to check on the success or failure of the destruction of the<br />individual resources.<br />

```sql
EXEC digitalocean.compute.droplets_associated_resources.droplets_destroy_with_associated_resources_dangerous 
@droplet_id='{{ droplet_id }}' --required, 
@X-Dangerous='{{ X-Dangerous }}' --required;
```
</TabItem>
<TabItem value="droplets_get_destroy_associated_resources_status">

To check on the status of a request to destroy a Droplet with its associated<br />resources, send a GET request to the<br />`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.<br />

```sql
EXEC digitalocean.compute.droplets_associated_resources.droplets_get_destroy_associated_resources_status 
@droplet_id='{{ droplet_id }}' --required;
```
</TabItem>
<TabItem value="droplets_destroy_retry_with_associated_resources">

If the status of a request to destroy a Droplet with its associated resources<br />reported any errors, it can be retried by sending a POST request to the<br />`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.<br /><br />Only one destroy can be active at a time per Droplet. If a retry is issued<br />while another destroy is in progress for the Droplet a 409 status code will<br />be returned. A successful response will include a 202 response code and no<br />content.<br />

```sql
EXEC digitalocean.compute.droplets_associated_resources.droplets_destroy_retry_with_associated_resources 
@droplet_id='{{ droplet_id }}' --required;
```
</TabItem>
</Tabs>
