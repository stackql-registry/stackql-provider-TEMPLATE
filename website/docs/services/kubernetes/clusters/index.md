--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - kubernetes
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_get_cluster"
    values={[
        { label: 'kubernetes_get_cluster', value: 'kubernetes_get_cluster' },
        { label: 'kubernetes_list_clusters', value: 'kubernetes_list_clusters' }
    ]}
>
<TabItem value="kubernetes_get_cluster">

The response will be a JSON object with a key called `kubernetes_cluster`. The<br />value of this will be an object containing the standard attributes of a<br />Kubernetes cluster.<br />

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
    <td>A unique ID that can be used to identify and reference a Kubernetes cluster. (example: bd5f5959-5e1e-4205-a714-a914373942af)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for a Kubernetes cluster. (example: prod-cluster-01)</td>
</tr>
<tr>
    <td><CopyableCode code="amd_gpu_device_metrics_exporter_plugin" /></td>
    <td><code>object</code></td>
    <td>An object specifying whether the AMD Device Metrics Exporter should be enabled in the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="amd_gpu_device_plugin" /></td>
    <td><code>object</code></td>
    <td>An object specifying whether the AMD GPU Device Plugin should be enabled in the Kubernetes cluster. It's enabled by default for clusters with an AMD GPU node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_autoscaler_configuration" /></td>
    <td><code>object</code></td>
    <td>An object specifying custom cluster autoscaler configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_subnet" /></td>
    <td><code>string (cidr)</code></td>
    <td>The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation. (example: 192.168.0.0/20)</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane_firewall" /></td>
    <td><code>object</code></td>
    <td>An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created. (example: 2018-11-15T16:00:11Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The base URL of the API server on the Kubernetes master node. (example: https://bd5f5959-5e1e-4205-a714-a914373942af.k8s.ondigitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="ha" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4" /></td>
    <td><code>string</code></td>
    <td>The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+) (example: 68.183.121.157)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_policy" /></td>
    <td><code>object</code></td>
    <td>An object specifying the maintenance window policy for the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="node_pools" /></td>
    <td><code>array</code></td>
    <td>An object specifying the details of the worker nodes available to the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the Kubernetes cluster is located. (example: nyc1)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A read-only boolean value indicating if a container registry is integrated with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_agent" /></td>
    <td><code>object</code></td>
    <td>An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="service_subnet" /></td>
    <td><code>string (cidr)</code></td>
    <td>The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation. (example: 192.168.16.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="surge_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. <br /><br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated. (example: 2018-11-15T16:00:11Z)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions. (example: 1.18.6-do.0)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.<br /><br />Requires `vpc:read` scope. (example: c33931f2-a26a-4e61-b85c-4e95a2ec431b)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="kubernetes_list_clusters">

The response will be a JSON object with a key called `kubernetes_clusters`.<br />This will be set to an array of objects, each of which will contain the<br />standard Kubernetes cluster attributes.<br />

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
    <td>A unique ID that can be used to identify and reference a Kubernetes cluster. (example: bd5f5959-5e1e-4205-a714-a914373942af)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for a Kubernetes cluster. (example: prod-cluster-01)</td>
</tr>
<tr>
    <td><CopyableCode code="amd_gpu_device_metrics_exporter_plugin" /></td>
    <td><code>object</code></td>
    <td>An object specifying whether the AMD Device Metrics Exporter should be enabled in the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="amd_gpu_device_plugin" /></td>
    <td><code>object</code></td>
    <td>An object specifying whether the AMD GPU Device Plugin should be enabled in the Kubernetes cluster. It's enabled by default for clusters with an AMD GPU node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_autoscaler_configuration" /></td>
    <td><code>object</code></td>
    <td>An object specifying custom cluster autoscaler configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_subnet" /></td>
    <td><code>string (cidr)</code></td>
    <td>The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation. (example: 192.168.0.0/20)</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane_firewall" /></td>
    <td><code>object</code></td>
    <td>An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created. (example: 2018-11-15T16:00:11Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The base URL of the API server on the Kubernetes master node. (example: https://bd5f5959-5e1e-4205-a714-a914373942af.k8s.ondigitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="ha" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4" /></td>
    <td><code>string</code></td>
    <td>The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+) (example: 68.183.121.157)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_policy" /></td>
    <td><code>object</code></td>
    <td>An object specifying the maintenance window policy for the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="node_pools" /></td>
    <td><code>array</code></td>
    <td>An object specifying the details of the worker nodes available to the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the region where the Kubernetes cluster is located. (example: nyc1)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A read-only boolean value indicating if a container registry is integrated with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_agent" /></td>
    <td><code>object</code></td>
    <td>An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="service_subnet" /></td>
    <td><code>string (cidr)</code></td>
    <td>The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation. (example: 192.168.16.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="surge_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. <br /><br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated. (example: 2018-11-15T16:00:11Z)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions. (example: 1.18.6-do.0)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.<br /><br />Requires `vpc:read` scope. (example: c33931f2-a26a-4e61-b85c-4e95a2ec431b)</td>
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
    <td><a href="#kubernetes_get_cluster"><CopyableCode code="kubernetes_get_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To show information about an existing Kubernetes cluster, send a GET request<br />to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_list_clusters"><CopyableCode code="kubernetes_list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the Kubernetes clusters on your account, send a GET request<br />to `/v2/kubernetes/clusters`.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_create_cluster"><CopyableCode code="kubernetes_create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__region"><code>data__region</code></a>, <a href="#parameter-data__version"><code>data__version</code></a>, <a href="#parameter-data__node_pools"><code>data__node_pools</code></a></td>
    <td></td>
    <td>To create a new Kubernetes cluster, send a POST request to<br />`/v2/kubernetes/clusters`. The request must contain at least one node pool<br />with at least one worker.<br /><br />The request may contain a maintenance window policy describing a time period<br />when disruptive maintenance tasks may be carried out. Omitting the policy<br />implies that a window will be chosen automatically. See<br />[here](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/)<br />for details.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_update_cluster"><CopyableCode code="kubernetes_update_cluster" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To update a Kubernetes cluster, send a PUT request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID` and specify one or more of the<br />attributes below.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_delete_cluster"><CopyableCode code="kubernetes_delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To delete a Kubernetes cluster and all services deployed to it, send a DELETE<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.<br /><br />A 204 status code with no body will be returned in response to a successful<br />request.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_get_kubeconfig"><CopyableCode code="kubernetes_get_kubeconfig" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td><a href="#parameter-expiry_seconds"><code>expiry_seconds</code></a></td>
    <td>This endpoint returns a kubeconfig file in YAML format. It can be used to<br />connect to and administer the cluster using the Kubernetes command line tool,<br />`kubectl`, or other programs supporting kubeconfig files (e.g., client libraries).<br /><br />The resulting kubeconfig file uses token-based authentication for clusters<br />supporting it, and certificate-based authentication otherwise. For a list of<br />supported versions and more information, see "[How to Connect to a DigitalOcean<br />Kubernetes Cluster](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/)".<br /><br />To retrieve a kubeconfig file for use with a Kubernetes cluster, send a GET<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig`.<br /><br />Clusters supporting token-based authentication may define an expiration by<br />passing a duration in seconds as a query parameter to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig?expiry_seconds=$DURATION_IN_SECONDS`.<br />If not set or 0, then the token will have a 7 day expiry. The query parameter<br />has no impact in certificate-based authentication.<br /><br />Kubernetes Roles granted to a user with a token-based kubeconfig are derived from that user's<br />DigitalOcean role. Predefined roles (Owner, Member, Modifier etc.) have an automatic mapping<br />to Kubernetes roles. Custom roles are not automatically mapped to any Kubernetes roles,<br />and require [additional configuration](https://docs.digitalocean.com/products/kubernetes/how-to/set-up-custom-rolebindings/)<br />by a cluster administrator.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_upgrade_cluster"><CopyableCode code="kubernetes_upgrade_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>To immediately upgrade a Kubernetes cluster to a newer patch release of<br />Kubernetes, send a POST request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrade`.<br />The body of the request must specify a version attribute.<br /><br />Available upgrade versions for a cluster can be fetched from<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.<br /></td>
</tr>
<tr>
    <td><a href="#kubernetes_add_registry"><CopyableCode code="kubernetes_add_registry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To integrate the container registry with Kubernetes clusters, send a POST request to `/v2/kubernetes/registry`.</td>
</tr>
<tr>
    <td><a href="#kubernetes_remove_registry"><CopyableCode code="kubernetes_remove_registry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To remove the container registry from Kubernetes clusters, send a DELETE request to `/v2/kubernetes/registry`.</td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique ID that can be used to reference a Kubernetes cluster. (example: bd5f5959-5e1e-4205-a714-a914373942af)</td>
</tr>
<tr id="parameter-expiry_seconds">
    <td><CopyableCode code="expiry_seconds" /></td>
    <td><code>integer</code></td>
    <td>The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry. (example: 300)</td>
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
    defaultValue="kubernetes_get_cluster"
    values={[
        { label: 'kubernetes_get_cluster', value: 'kubernetes_get_cluster' },
        { label: 'kubernetes_list_clusters', value: 'kubernetes_list_clusters' }
    ]}
>
<TabItem value="kubernetes_get_cluster">

To show information about an existing Kubernetes cluster, send a GET request<br />to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.<br />

```sql
SELECT
id,
name,
amd_gpu_device_metrics_exporter_plugin,
amd_gpu_device_plugin,
auto_upgrade,
cluster_autoscaler_configuration,
cluster_subnet,
control_plane_firewall,
created_at,
endpoint,
ha,
ipv4,
maintenance_policy,
node_pools,
region,
registry_enabled,
routing_agent,
service_subnet,
status,
surge_upgrade,
tags,
updated_at,
version,
vpc_uuid
FROM digitalocean.kubernetes.clusters
WHERE cluster_id = '{{ cluster_id }}' -- required;
```
</TabItem>
<TabItem value="kubernetes_list_clusters">

To list all of the Kubernetes clusters on your account, send a GET request<br />to `/v2/kubernetes/clusters`.<br />

```sql
SELECT
id,
name,
amd_gpu_device_metrics_exporter_plugin,
amd_gpu_device_plugin,
auto_upgrade,
cluster_autoscaler_configuration,
cluster_subnet,
control_plane_firewall,
created_at,
endpoint,
ha,
ipv4,
maintenance_policy,
node_pools,
region,
registry_enabled,
routing_agent,
service_subnet,
status,
surge_upgrade,
tags,
updated_at,
version,
vpc_uuid
FROM digitalocean.kubernetes.clusters
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="kubernetes_create_cluster"
    values={[
        { label: 'kubernetes_create_cluster', value: 'kubernetes_create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="kubernetes_create_cluster">

To create a new Kubernetes cluster, send a POST request to<br />`/v2/kubernetes/clusters`. The request must contain at least one node pool<br />with at least one worker.<br /><br />The request may contain a maintenance window policy describing a time period<br />when disruptive maintenance tasks may be carried out. Omitting the policy<br />implies that a window will be chosen automatically. See<br />[here](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/)<br />for details.<br />

```sql
INSERT INTO digitalocean.kubernetes.clusters (
data__name,
data__region,
data__version,
data__cluster_subnet,
data__service_subnet,
data__vpc_uuid,
data__tags,
data__node_pools,
data__maintenance_policy,
data__auto_upgrade,
data__surge_upgrade,
data__ha,
data__control_plane_firewall,
data__cluster_autoscaler_configuration,
data__routing_agent,
data__amd_gpu_device_plugin,
data__amd_gpu_device_metrics_exporter_plugin
)
SELECT 
'{{ name }}' --required,
'{{ region }}' --required,
'{{ version }}' --required,
'{{ cluster_subnet }}',
'{{ service_subnet }}',
'{{ vpc_uuid }}',
'{{ tags }}',
'{{ node_pools }}' --required,
'{{ maintenance_policy }}',
{{ auto_upgrade }},
{{ surge_upgrade }},
{{ ha }},
'{{ control_plane_firewall }}',
'{{ cluster_autoscaler_configuration }}',
'{{ routing_agent }}',
'{{ amd_gpu_device_plugin }}',
'{{ amd_gpu_device_metrics_exporter_plugin }}'
RETURNING
kubernetes_cluster
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: clusters
  props:
    - name: name
      value: string
      description: >
        A human-readable name for a Kubernetes cluster.
        
    - name: region
      value: string
      description: >
        The slug identifier for the region where the Kubernetes cluster is located.
        
    - name: version
      value: string
      description: >
        The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions.
        
    - name: cluster_subnet
      value: string
      description: >
        The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation.
        
    - name: service_subnet
      value: string
      description: >
        The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation.
        
    - name: vpc_uuid
      value: string
      description: >
        A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.<br><br>Requires `vpc:read` scope.
        
    - name: tags
      value: array
      description: >
        An array of tags to apply to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` and `tag:create` scope, as well as `tag:delete` if existing tags are getting removed.
        
    - name: node_pools
      value: array
      description: >
        An object specifying the details of the worker nodes available to the Kubernetes cluster.
        
    - name: maintenance_policy
      value: object
      description: >
        An object specifying the maintenance window policy for the Kubernetes cluster.
        
    - name: auto_upgrade
      value: boolean
      description: >
        A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.
        
      default: false
    - name: surge_upgrade
      value: boolean
      description: >
        A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.
        
      default: false
    - name: ha
      value: boolean
      description: >
        A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.
        
      default: false
    - name: control_plane_firewall
      value: object
      description: >
        An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).
        
    - name: cluster_autoscaler_configuration
      value: object
      description: >
        An object specifying custom cluster autoscaler configuration.
        
    - name: routing_agent
      value: object
      description: >
        An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.
        
    - name: amd_gpu_device_plugin
      value: object
      description: >
        An object specifying whether the AMD GPU Device Plugin should be enabled in the Kubernetes cluster. It's enabled by default for clusters with an AMD GPU node pool.
        
    - name: amd_gpu_device_metrics_exporter_plugin
      value: object
      description: >
        An object specifying whether the AMD Device Metrics Exporter should be enabled in the Kubernetes cluster.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="kubernetes_update_cluster"
    values={[
        { label: 'kubernetes_update_cluster', value: 'kubernetes_update_cluster' }
    ]}
>
<TabItem value="kubernetes_update_cluster">

To update a Kubernetes cluster, send a PUT request to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID` and specify one or more of the<br />attributes below.<br />

```sql
REPLACE digitalocean.kubernetes.clusters
SET 
data__name = '{{ name }}',
data__tags = '{{ tags }}',
data__maintenance_policy = '{{ maintenance_policy }}',
data__auto_upgrade = {{ auto_upgrade }},
data__surge_upgrade = {{ surge_upgrade }},
data__ha = {{ ha }},
data__control_plane_firewall = '{{ control_plane_firewall }}',
data__cluster_autoscaler_configuration = '{{ cluster_autoscaler_configuration }}',
data__routing_agent = '{{ routing_agent }}',
data__amd_gpu_device_plugin = '{{ amd_gpu_device_plugin }}',
data__amd_gpu_device_metrics_exporter_plugin = '{{ amd_gpu_device_metrics_exporter_plugin }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND data__name = '{{ name }}' --required
RETURNING
kubernetes_cluster;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="kubernetes_delete_cluster"
    values={[
        { label: 'kubernetes_delete_cluster', value: 'kubernetes_delete_cluster' }
    ]}
>
<TabItem value="kubernetes_delete_cluster">

To delete a Kubernetes cluster and all services deployed to it, send a DELETE<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.<br /><br />A 204 status code with no body will be returned in response to a successful<br />request.<br />

```sql
DELETE FROM digitalocean.kubernetes.clusters
WHERE cluster_id = '{{ cluster_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="kubernetes_get_kubeconfig"
    values={[
        { label: 'kubernetes_get_kubeconfig', value: 'kubernetes_get_kubeconfig' },
        { label: 'kubernetes_upgrade_cluster', value: 'kubernetes_upgrade_cluster' },
        { label: 'kubernetes_add_registry', value: 'kubernetes_add_registry' },
        { label: 'kubernetes_remove_registry', value: 'kubernetes_remove_registry' }
    ]}
>
<TabItem value="kubernetes_get_kubeconfig">

This endpoint returns a kubeconfig file in YAML format. It can be used to<br />connect to and administer the cluster using the Kubernetes command line tool,<br />`kubectl`, or other programs supporting kubeconfig files (e.g., client libraries).<br /><br />The resulting kubeconfig file uses token-based authentication for clusters<br />supporting it, and certificate-based authentication otherwise. For a list of<br />supported versions and more information, see "[How to Connect to a DigitalOcean<br />Kubernetes Cluster](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/)".<br /><br />To retrieve a kubeconfig file for use with a Kubernetes cluster, send a GET<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig`.<br /><br />Clusters supporting token-based authentication may define an expiration by<br />passing a duration in seconds as a query parameter to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig?expiry_seconds=$DURATION_IN_SECONDS`.<br />If not set or 0, then the token will have a 7 day expiry. The query parameter<br />has no impact in certificate-based authentication.<br /><br />Kubernetes Roles granted to a user with a token-based kubeconfig are derived from that user's<br />DigitalOcean role. Predefined roles (Owner, Member, Modifier etc.) have an automatic mapping<br />to Kubernetes roles. Custom roles are not automatically mapped to any Kubernetes roles,<br />and require [additional configuration](https://docs.digitalocean.com/products/kubernetes/how-to/set-up-custom-rolebindings/)<br />by a cluster administrator.<br />

```sql
EXEC digitalocean.kubernetes.clusters.kubernetes_get_kubeconfig 
@cluster_id='{{ cluster_id }}' --required, 
@expiry_seconds='{{ expiry_seconds }}';
```
</TabItem>
<TabItem value="kubernetes_upgrade_cluster">

To immediately upgrade a Kubernetes cluster to a newer patch release of<br />Kubernetes, send a POST request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrade`.<br />The body of the request must specify a version attribute.<br /><br />Available upgrade versions for a cluster can be fetched from<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.<br />

```sql
EXEC digitalocean.kubernetes.clusters.kubernetes_upgrade_cluster 
@cluster_id='{{ cluster_id }}' --required 
@@json=
'{
"version": "{{ version }}"
}';
```
</TabItem>
<TabItem value="kubernetes_add_registry">

To integrate the container registry with Kubernetes clusters, send a POST request to `/v2/kubernetes/registry`.

```sql
EXEC digitalocean.kubernetes.clusters.kubernetes_add_registry 
@@json=
'{
"cluster_uuids": "{{ cluster_uuids }}"
}';
```
</TabItem>
<TabItem value="kubernetes_remove_registry">

To remove the container registry from Kubernetes clusters, send a DELETE request to `/v2/kubernetes/registry`.

```sql
EXEC digitalocean.kubernetes.clusters.kubernetes_remove_registry 
@@json=
'{
"cluster_uuids": "{{ cluster_uuids }}"
}';
```
</TabItem>
</Tabs>
