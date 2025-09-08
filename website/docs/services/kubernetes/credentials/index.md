--- 
title: credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - credentials
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

Creates, updates, deletes, gets or lists a <code>credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>credentials</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="kubernetes_get_credentials"
    values={[
        { label: 'kubernetes_get_credentials', value: 'kubernetes_get_credentials' }
    ]}
>
<TabItem value="kubernetes_get_credentials">

A JSON object containing credentials for a cluster.

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
    <td><CopyableCode code="certificate_authority_data" /></td>
    <td><code>string (byte)</code></td>
    <td>A base64 encoding of bytes representing the certificate authority data for accessing the cluster. (example: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURKekNDQWcrZ0F3SUJBZ0lDQm5Vd0RRWUpLb1pJaHZjTkFRRUxCUUF3TXpFVk1CTUdBMVVFQ2hNTVJHbG4KYVhSaGJFOWpaV0Z1TVJvd0dBWURWUVFERXhGck9ITmhZWE1nUTJ4MWMzUmxjaUJEUVRBZUZ3MHlNREE0TURNeApOVEkxTWpoYUZ3MDBNREE0TURNeE5USTFNamhhTURNeEZUQVRCZ05WQkFvVERFUnBaMmwwWVd4UFkyVmhiakVhCk1CZ0dBMVVFQXhNUmF6aHpZV0Z6SUVOc2RYTjBaWElnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUIKRHdBd2dnRUtBb0lCQVFDc21oa2JrSEpUcGhZQlN0R05VVE1ORVZTd2N3bmRtajArelQvcUZaNGsrOVNxUnYrSgpBd0lCaGpBU0JnTlZIUk1CQWY4RUNEQUdBUUgvQWdFQU1CMEdBMVVkRGdRV0JCUlRzazhhZ1hCUnFyZXdlTXJxClhwa3E1NXg5dVRBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXB6V2F6bXNqYWxXTEx3ZjVpbWdDblNINDlKcGkKYWkvbzFMdEJvVEpleGdqZzE1ZVppaG5BMUJMc0lWNE9BZGM3UEFsL040L0hlbENrTDVxandjamRnNVdaYnMzYwozcFVUQ0g5bVVwMFg1SVdhT1VKV292Q1hGUlM1R2VKYXlkSDVPUXhqTURzR2N2UlNvZGQrVnQ2MXE3aWdFZ2I1CjBOZ1l5RnRnc2p0MHpJN3hURzZFNnlsOVYvUmFoS3lIQks2eExlM1RnUGU4SXhWa2RwT3QzR0FhSDRaK0pLR3gKYisyMVZia1NnRE1QQTlyR0VKNVZwVXlBV0FEVXZDRVFHV0hmNGpQN2ZGZlc3T050S0JWY3h3YWFjcVBVdUhzWApwRG5DZVR3V1NuUVp6L05xNmQxWUtsMFdtbkwzTEowemJzRVFGbEQ4MkkwL09MY2dZSDVxMklOZHhBPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=)</td>
</tr>
<tr>
    <td><CopyableCode code="client_certificate_data" /></td>
    <td><code>string (byte)</code></td>
    <td>A base64 encoding of bytes representing the x509 client certificate data for access the cluster. This is only returned for clusters without support for token-based authentication.  Newly created Kubernetes clusters do not return credentials using certificate-based authentication. For additional information, [see here](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/#authenticate). </td>
</tr>
<tr>
    <td><CopyableCode code="client_key_data" /></td>
    <td><code>string (byte)</code></td>
    <td>A base64 encoding of bytes representing the x509 client key data for access the cluster. This is only returned for clusters without support for token-based authentication.  Newly created Kubernetes clusters do not return credentials using certificate-based authentication. For additional information, [see here](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/#authenticate). </td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the access token expires. (example: 2019-11-09T11:50:28.889080521Z)</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL used to access the cluster API server. (example: https://bd5f5959-5e1e-4205-a714-a914373942af.k8s.ondigitalocean.com)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>An access token used to authenticate with the cluster. This is only returned for clusters with support for token-based authentication. (example: $DIGITALOCEAN_TOKEN)</td>
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
    <td><a href="#kubernetes_get_credentials"><CopyableCode code="kubernetes_get_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td><a href="#parameter-expiry_seconds"><code>expiry_seconds</code></a></td>
    <td>This endpoint returns a JSON object . It can be used to programmatically<br />construct Kubernetes clients which cannot parse kubeconfig files.<br /><br />The resulting JSON object contains token-based authentication for clusters<br />supporting it, and certificate-based authentication otherwise. For a list of<br />supported versions and more information, see "[How to Connect to a DigitalOcean<br />Kubernetes Cluster](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/)".<br /><br />To retrieve credentials for accessing a Kubernetes cluster, send a GET<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials`.<br /><br />Clusters supporting token-based authentication may define an expiration by<br />passing a duration in seconds as a query parameter to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials?expiry_seconds=$DURATION_IN_SECONDS`.<br />If not set or 0, then the token will have a 7 day expiry. The query parameter<br />has no impact in certificate-based authentication.<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="kubernetes_get_credentials"
    values={[
        { label: 'kubernetes_get_credentials', value: 'kubernetes_get_credentials' }
    ]}
>
<TabItem value="kubernetes_get_credentials">

This endpoint returns a JSON object . It can be used to programmatically<br />construct Kubernetes clients which cannot parse kubeconfig files.<br /><br />The resulting JSON object contains token-based authentication for clusters<br />supporting it, and certificate-based authentication otherwise. For a list of<br />supported versions and more information, see "[How to Connect to a DigitalOcean<br />Kubernetes Cluster](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/)".<br /><br />To retrieve credentials for accessing a Kubernetes cluster, send a GET<br />request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials`.<br /><br />Clusters supporting token-based authentication may define an expiration by<br />passing a duration in seconds as a query parameter to<br />`/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials?expiry_seconds=$DURATION_IN_SECONDS`.<br />If not set or 0, then the token will have a 7 day expiry. The query parameter<br />has no impact in certificate-based authentication.<br />

```sql
SELECT
certificate_authority_data,
client_certificate_data,
client_key_data,
expires_at,
server,
token
FROM digitalocean.kubernetes.credentials
WHERE cluster_id = '{{ cluster_id }}' -- required
AND expiry_seconds = '{{ expiry_seconds }}';
```
</TabItem>
</Tabs>
