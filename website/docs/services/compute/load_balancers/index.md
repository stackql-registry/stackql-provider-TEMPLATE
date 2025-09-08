--- 
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
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

Creates, updates, deletes, gets or lists a <code>load_balancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>load_balancers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.load_balancers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="load_balancers_get"
    values={[
        { label: 'load_balancers_get', value: 'load_balancers_get' },
        { label: 'load_balancers_list', value: 'load_balancers_list' }
    ]}
>
<TabItem value="load_balancers_get">

The response will be a JSON object with a key called `load_balancer`. The<br />value of this will be an object that contains the standard attributes<br />associated with a load balancer<br />

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
    <td>A unique ID that can be used to identify and reference a load balancer. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for a load balancer instance. (example: example-lb-01)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>This field has been deprecated. You can no longer specify an algorithm for load balancers. (example: round_robin, default: round_robin)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the load balancer was created. (example: 2017-02-01T22:22:58Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disable_lets_encrypt_dns_records" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>An array of objects specifying the domain configurations for a Global load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="droplet_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the IDs of the Droplets assigned to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_backend_keepalive" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_proxy_protocol" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether PROXY Protocol is in use.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall" /></td>
    <td><code>object</code></td>
    <td>An object specifying allow and deny rules to control traffic to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="forwarding_rules" /></td>
    <td><code>array</code></td>
    <td>An array of objects specifying the forwarding rules for a load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="glb_settings" /></td>
    <td><code>object</code></td>
    <td>An object specifying forwarding configurations for a Global load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check" /></td>
    <td><code>object</code></td>
    <td>An object specifying health check settings for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="http_idle_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>An integer value which configures the idle timeout for HTTP requests to the target droplets.</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string</code></td>
    <td>An attribute containing the public-facing IP address of the load balancer. (pattern: ^$|^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.)&#123;3&#125;(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$, example: 104.131.186.241)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6" /></td>
    <td><code>string</code></td>
    <td>An attribute containing the public-facing IPv6 address of the load balancer. (example: 2604:a880:800:14::85f5:c000)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>A string indicating whether the load balancer should be external or internal. Internal load balancers have no public IPs and are only accessible to resources on the same VPC network. This property cannot be updated after creating the load balancer. (example: EXTERNAL, default: EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="network_stack" /></td>
    <td><code>string</code></td>
    <td>A string indicating whether the load balancer will support IPv4 or both IPv4 and IPv6 networking. This property cannot be updated after creating the load balancer. (example: IPV4, default: IPV4)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_http_to_https" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td>The region where the load balancer instance is located. When setting a region, the value should be the slug identifier for the region. When you query a load balancer, an entire region object will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes. * `lb-small` = 1 node * `lb-medium` = 3 nodes * `lb-large` = 6 nodes  You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation. (default: lb-small, example: lb-small)</td>
</tr>
<tr>
    <td><CopyableCode code="size_unit" /></td>
    <td><code>integer</code></td>
    <td>How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`. (example: new)</td>
</tr>
<tr>
    <td><CopyableCode code="sticky_sessions" /></td>
    <td><code>object</code></td>
    <td>An object specifying sticky sessions settings for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>The name of a Droplet tag corresponding to Droplets assigned to the load balancer. (example: prod:web)</td>
</tr>
<tr>
    <td><CopyableCode code="target_load_balancer_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the UUIDs of the Regional load balancers to be used as target backends for a Global load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_cipher_policy" /></td>
    <td><code>string</code></td>
    <td>A string indicating the policy for the TLS cipher suites used by the load balancer. The possible values are `DEFAULT` or `STRONG`. The default value is `DEFAULT`. (example: STRONG, default: DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string indicating whether the load balancer should be a standard regional HTTP load balancer, a regional network load balancer that routes traffic at the TCP/UDP transport layer, or a global load balancer. (example: REGIONAL, default: REGIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A string specifying the UUID of the VPC to which the load balancer is assigned. (example: c33931f2-a26a-4e61-b85c-4e95a2ec431b)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="load_balancers_list">

A JSON object with a key of `load_balancers`. This will be set to an array of objects, each of which will contain the standard load balancer attributes.

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
    <td>A unique ID that can be used to identify and reference a load balancer. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for a load balancer instance. (example: example-lb-01)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>This field has been deprecated. You can no longer specify an algorithm for load balancers. (example: round_robin, default: round_robin)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the load balancer was created. (example: 2017-02-01T22:22:58Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disable_lets_encrypt_dns_records" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>An array of objects specifying the domain configurations for a Global load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="droplet_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the IDs of the Droplets assigned to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_backend_keepalive" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_proxy_protocol" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether PROXY Protocol is in use.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall" /></td>
    <td><code>object</code></td>
    <td>An object specifying allow and deny rules to control traffic to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="forwarding_rules" /></td>
    <td><code>array</code></td>
    <td>An array of objects specifying the forwarding rules for a load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="glb_settings" /></td>
    <td><code>object</code></td>
    <td>An object specifying forwarding configurations for a Global load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check" /></td>
    <td><code>object</code></td>
    <td>An object specifying health check settings for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="http_idle_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>An integer value which configures the idle timeout for HTTP requests to the target droplets.</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string</code></td>
    <td>An attribute containing the public-facing IP address of the load balancer. (pattern: ^$|^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.)&#123;3&#125;(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$, example: 104.131.186.241)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6" /></td>
    <td><code>string</code></td>
    <td>An attribute containing the public-facing IPv6 address of the load balancer. (example: 2604:a880:800:14::85f5:c000)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>A string indicating whether the load balancer should be external or internal. Internal load balancers have no public IPs and are only accessible to resources on the same VPC network. This property cannot be updated after creating the load balancer. (example: EXTERNAL, default: EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="network_stack" /></td>
    <td><code>string</code></td>
    <td>A string indicating whether the load balancer will support IPv4 or both IPv4 and IPv6 networking. This property cannot be updated after creating the load balancer. (example: IPV4, default: IPV4)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_http_to_https" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td>The region where the load balancer instance is located. When setting a region, the value should be the slug identifier for the region. When you query a load balancer, an entire region object will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes. * `lb-small` = 1 node * `lb-medium` = 3 nodes * `lb-large` = 6 nodes  You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation. (default: lb-small, example: lb-small)</td>
</tr>
<tr>
    <td><CopyableCode code="size_unit" /></td>
    <td><code>integer</code></td>
    <td>How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`. (example: new)</td>
</tr>
<tr>
    <td><CopyableCode code="sticky_sessions" /></td>
    <td><code>object</code></td>
    <td>An object specifying sticky sessions settings for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>The name of a Droplet tag corresponding to Droplets assigned to the load balancer. (example: prod:web)</td>
</tr>
<tr>
    <td><CopyableCode code="target_load_balancer_ids" /></td>
    <td><code>array</code></td>
    <td>An array containing the UUIDs of the Regional load balancers to be used as target backends for a Global load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_cipher_policy" /></td>
    <td><code>string</code></td>
    <td>A string indicating the policy for the TLS cipher suites used by the load balancer. The possible values are `DEFAULT` or `STRONG`. The default value is `DEFAULT`. (example: STRONG, default: DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string indicating whether the load balancer should be a standard regional HTTP load balancer, a regional network load balancer that routes traffic at the TCP/UDP transport layer, or a global load balancer. (example: REGIONAL, default: REGIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A string specifying the UUID of the VPC to which the load balancer is assigned. (example: c33931f2-a26a-4e61-b85c-4e95a2ec431b)</td>
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
    <td><a href="#load_balancers_get"><CopyableCode code="load_balancers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a></td>
    <td></td>
    <td>To show information about a load balancer instance, send a GET request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_list"><CopyableCode code="load_balancers_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the load balancer instances on your account, send a GET request<br />to `/v2/load_balancers`.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_create"><CopyableCode code="load_balancers_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new load balancer instance, send a POST request to<br />`/v2/load_balancers`.<br /><br />You can specify the Droplets that will sit behind the load balancer using one<br />of two methods:<br /><br />* Set `droplet_ids` to a list of specific Droplet IDs.<br />* Set `tag` to the name of a tag. All Droplets with this tag applied will be<br />  assigned to the load balancer. Additional Droplets will be automatically<br />  assigned as they are tagged.<br /><br />These methods are mutually exclusive.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_update"><CopyableCode code="load_balancers_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a></td>
    <td></td>
    <td>To update a load balancer's settings, send a PUT request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full<br />representation of the load balancer including existing attributes. It may<br />contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually<br />exclusive. **Note that any attribute that is not provided will be reset to its<br />default value.**<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_delete"><CopyableCode code="load_balancers_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a></td>
    <td></td>
    <td>To delete a load balancer instance, disassociating any Droplets assigned to it<br />and removing it from your account, send a DELETE request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_delete_cache"><CopyableCode code="load_balancers_delete_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a></td>
    <td></td>
    <td>To delete a Global load balancer CDN cache, send a DELETE request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID/cache`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_add_droplets"><CopyableCode code="load_balancers_add_droplets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a>, <a href="#parameter-droplet_ids"><code>droplet_ids</code></a></td>
    <td></td>
    <td>To assign a Droplet to a load balancer instance, send a POST request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,<br />there should be a `droplet_ids` attribute containing a list of Droplet IDs.<br />Individual Droplets can not be added to a load balancer configured with a<br />Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"<br />response from the API.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_remove_droplets"><CopyableCode code="load_balancers_remove_droplets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a>, <a href="#parameter-droplet_ids"><code>droplet_ids</code></a></td>
    <td></td>
    <td>To remove a Droplet from a load balancer instance, send a DELETE request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,<br />there should be a `droplet_ids` attribute containing a list of Droplet IDs.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_add_forwarding_rules"><CopyableCode code="load_balancers_add_forwarding_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a>, <a href="#parameter-forwarding_rules"><code>forwarding_rules</code></a></td>
    <td></td>
    <td>To add an additional forwarding rule to a load balancer instance, send a POST<br />request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body<br />of the request, there should be a `forwarding_rules` attribute containing an<br />array of rules to be added.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
</tr>
<tr>
    <td><a href="#load_balancers_remove_forwarding_rules"><CopyableCode code="load_balancers_remove_forwarding_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lb_id"><code>lb_id</code></a>, <a href="#parameter-forwarding_rules"><code>forwarding_rules</code></a></td>
    <td></td>
    <td>To remove forwarding rules from a load balancer instance, send a DELETE<br />request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the<br />body of the request, there should be a `forwarding_rules` attribute containing<br />an array of rules to be removed.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br /></td>
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
<tr id="parameter-lb_id">
    <td><CopyableCode code="lb_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a load balancer. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
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
    defaultValue="load_balancers_get"
    values={[
        { label: 'load_balancers_get', value: 'load_balancers_get' },
        { label: 'load_balancers_list', value: 'load_balancers_list' }
    ]}
>
<TabItem value="load_balancers_get">

To show information about a load balancer instance, send a GET request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID`.<br />

```sql
SELECT
id,
name,
project_id,
algorithm,
created_at,
disable_lets_encrypt_dns_records,
domains,
droplet_ids,
enable_backend_keepalive,
enable_proxy_protocol,
firewall,
forwarding_rules,
glb_settings,
health_check,
http_idle_timeout_seconds,
ip,
ipv6,
network,
network_stack,
redirect_http_to_https,
region,
size,
size_unit,
status,
sticky_sessions,
tag,
target_load_balancer_ids,
tls_cipher_policy,
type,
vpc_uuid
FROM digitalocean.compute.load_balancers
WHERE lb_id = '{{ lb_id }}' -- required;
```
</TabItem>
<TabItem value="load_balancers_list">

To list all of the load balancer instances on your account, send a GET request<br />to `/v2/load_balancers`.<br />

```sql
SELECT
id,
name,
project_id,
algorithm,
created_at,
disable_lets_encrypt_dns_records,
domains,
droplet_ids,
enable_backend_keepalive,
enable_proxy_protocol,
firewall,
forwarding_rules,
glb_settings,
health_check,
http_idle_timeout_seconds,
ip,
ipv6,
network,
network_stack,
redirect_http_to_https,
region,
size,
size_unit,
status,
sticky_sessions,
tag,
target_load_balancer_ids,
tls_cipher_policy,
type,
vpc_uuid
FROM digitalocean.compute.load_balancers
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="load_balancers_create"
    values={[
        { label: 'load_balancers_create', value: 'load_balancers_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="load_balancers_create">

To create a new load balancer instance, send a POST request to<br />`/v2/load_balancers`.<br /><br />You can specify the Droplets that will sit behind the load balancer using one<br />of two methods:<br /><br />* Set `droplet_ids` to a list of specific Droplet IDs.<br />* Set `tag` to the name of a tag. All Droplets with this tag applied will be<br />  assigned to the load balancer. Additional Droplets will be automatically<br />  assigned as they are tagged.<br /><br />These methods are mutually exclusive.<br />

```sql
INSERT INTO digitalocean.compute.load_balancers (

)
SELECT 

RETURNING
load_balancer
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: load_balancers
  props:
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="load_balancers_update"
    values={[
        { label: 'load_balancers_update', value: 'load_balancers_update' }
    ]}
>
<TabItem value="load_balancers_update">

To update a load balancer's settings, send a PUT request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full<br />representation of the load balancer including existing attributes. It may<br />contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually<br />exclusive. **Note that any attribute that is not provided will be reset to its<br />default value.**<br />

```sql
REPLACE digitalocean.compute.load_balancers
SET 
-- No updatable properties
WHERE 
lb_id = '{{ lb_id }}' --required
RETURNING
load_balancer;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="load_balancers_delete"
    values={[
        { label: 'load_balancers_delete', value: 'load_balancers_delete' }
    ]}
>
<TabItem value="load_balancers_delete">

To delete a load balancer instance, disassociating any Droplets assigned to it<br />and removing it from your account, send a DELETE request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.compute.load_balancers
WHERE lb_id = '{{ lb_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="load_balancers_delete_cache"
    values={[
        { label: 'load_balancers_delete_cache', value: 'load_balancers_delete_cache' },
        { label: 'load_balancers_add_droplets', value: 'load_balancers_add_droplets' },
        { label: 'load_balancers_remove_droplets', value: 'load_balancers_remove_droplets' },
        { label: 'load_balancers_add_forwarding_rules', value: 'load_balancers_add_forwarding_rules' },
        { label: 'load_balancers_remove_forwarding_rules', value: 'load_balancers_remove_forwarding_rules' }
    ]}
>
<TabItem value="load_balancers_delete_cache">

To delete a Global load balancer CDN cache, send a DELETE request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID/cache`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
EXEC digitalocean.compute.load_balancers.load_balancers_delete_cache 
@lb_id='{{ lb_id }}' --required;
```
</TabItem>
<TabItem value="load_balancers_add_droplets">

To assign a Droplet to a load balancer instance, send a POST request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,<br />there should be a `droplet_ids` attribute containing a list of Droplet IDs.<br />Individual Droplets can not be added to a load balancer configured with a<br />Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"<br />response from the API.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
EXEC digitalocean.compute.load_balancers.load_balancers_add_droplets 
@lb_id='{{ lb_id }}' --required 
@@json=
'{
"droplet_ids": "{{ droplet_ids }}"
}';
```
</TabItem>
<TabItem value="load_balancers_remove_droplets">

To remove a Droplet from a load balancer instance, send a DELETE request to<br />`/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,<br />there should be a `droplet_ids` attribute containing a list of Droplet IDs.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
EXEC digitalocean.compute.load_balancers.load_balancers_remove_droplets 
@lb_id='{{ lb_id }}' --required 
@@json=
'{
"droplet_ids": "{{ droplet_ids }}"
}';
```
</TabItem>
<TabItem value="load_balancers_add_forwarding_rules">

To add an additional forwarding rule to a load balancer instance, send a POST<br />request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body<br />of the request, there should be a `forwarding_rules` attribute containing an<br />array of rules to be added.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
EXEC digitalocean.compute.load_balancers.load_balancers_add_forwarding_rules 
@lb_id='{{ lb_id }}' --required 
@@json=
'{
"forwarding_rules": "{{ forwarding_rules }}"
}';
```
</TabItem>
<TabItem value="load_balancers_remove_forwarding_rules">

To remove forwarding rules from a load balancer instance, send a DELETE<br />request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the<br />body of the request, there should be a `forwarding_rules` attribute containing<br />an array of rules to be removed.<br /><br />No response body will be sent back, but the response code will indicate<br />success. Specifically, the response code will be a 204, which means that the<br />action was successful with no returned body data.<br />

```sql
EXEC digitalocean.compute.load_balancers.load_balancers_remove_forwarding_rules 
@lb_id='{{ lb_id }}' --required 
@@json=
'{
"forwarding_rules": "{{ forwarding_rules }}"
}';
```
</TabItem>
</Tabs>
