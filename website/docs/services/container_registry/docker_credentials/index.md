--- 
title: docker_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - docker_credentials
  - container_registry
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

Creates, updates, deletes, gets or lists a <code>docker_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>docker_credentials</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.docker_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_get_docker_credentials"
    values={[
        { label: 'registries_get_docker_credentials', value: 'registries_get_docker_credentials' }
    ]}
>
<TabItem value="registries_get_docker_credentials">

A Docker `config.json` file for the container registry.

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
    <td><CopyableCode code="registry.digitalocean.com" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#registries_get_docker_credentials"><CopyableCode code="registries_get_docker_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a></td>
    <td></td>
    <td>In order to access your container registry with the Docker client or from a<br />Kubernetes cluster, you will need to configure authentication. The necessary<br />JSON configuration can be retrieved by sending a GET request to<br />`/v2/registries/&#123;registry_name&#125;/docker-credentials`.<br /><br />The response will be in the format of a Docker `config.json` file. To use the<br />config in your Kubernetes cluster, create a Secret with:<br /><br />    kubectl create secret generic docr \<br />      --from-file=.dockerconfigjson=config.json \<br />      --type=kubernetes.io/dockerconfigjson<br /><br />By default, the returned credentials have read-only access to your registry<br />and cannot be used to push images. This is appropriate for most Kubernetes<br />clusters. To retrieve read/write credentials, suitable for use with the Docker<br />client or in a CI system, read_write may be provided as query parameter. For<br />example: `/v2/registries/&#123;registry_name&#125;/docker-credentials?read_write=true`<br /><br />By default, the returned credentials will not expire. To retrieve credentials<br />with an expiry set, expiry_seconds may be provided as a query parameter. For<br />example: `/v2/registries/&#123;registry_name&#125;/docker-credentials?expiry_seconds=3600` will return<br />credentials that expire after one hour.<br /></td>
</tr>
<tr>
    <td><a href="#registry_get_docker_credentials_legacy"><CopyableCode code="registry_get_docker_credentials_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-expiry_seconds"><code>expiry_seconds</code></a>, <a href="#parameter-read_write"><code>read_write</code></a></td>
    <td>In order to access your container registry with the Docker client or from a<br />Kubernetes cluster, you will need to configure authentication. The necessary<br />JSON configuration can be retrieved by sending a GET request to<br />`/v2/registry/docker-credentials`.<br /><br />The response will be in the format of a Docker `config.json` file. To use the<br />config in your Kubernetes cluster, create a Secret with:<br /><br />    kubectl create secret generic docr \<br />      --from-file=.dockerconfigjson=config.json \<br />      --type=kubernetes.io/dockerconfigjson<br /><br />By default, the returned credentials have read-only access to your registry<br />and cannot be used to push images. This is appropriate for most Kubernetes<br />clusters. To retrieve read/write credentials, suitable for use with the Docker<br />client or in a CI system, read_write may be provided as query parameter. For<br />example: `/v2/registry/docker-credentials?read_write=true`<br /><br />By default, the returned credentials will not expire. To retrieve credentials<br />with an expiry set, expiry_seconds may be provided as a query parameter. For<br />example: `/v2/registry/docker-credentials?expiry_seconds=3600` will return<br />credentials that expire after one hour.<br /></td>
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
<tr id="parameter-registry_name">
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of a container registry. (example: example)</td>
</tr>
<tr id="parameter-expiry_seconds">
    <td><CopyableCode code="expiry_seconds" /></td>
    <td><code>integer</code></td>
    <td>The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire. (example: 3600)</td>
</tr>
<tr id="parameter-read_write">
    <td><CopyableCode code="read_write" /></td>
    <td><code>boolean</code></td>
    <td>By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials. (example: true)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="registries_get_docker_credentials"
    values={[
        { label: 'registries_get_docker_credentials', value: 'registries_get_docker_credentials' }
    ]}
>
<TabItem value="registries_get_docker_credentials">

In order to access your container registry with the Docker client or from a<br />Kubernetes cluster, you will need to configure authentication. The necessary<br />JSON configuration can be retrieved by sending a GET request to<br />`/v2/registries/&#123;registry_name&#125;/docker-credentials`.<br /><br />The response will be in the format of a Docker `config.json` file. To use the<br />config in your Kubernetes cluster, create a Secret with:<br /><br />    kubectl create secret generic docr \<br />      --from-file=.dockerconfigjson=config.json \<br />      --type=kubernetes.io/dockerconfigjson<br /><br />By default, the returned credentials have read-only access to your registry<br />and cannot be used to push images. This is appropriate for most Kubernetes<br />clusters. To retrieve read/write credentials, suitable for use with the Docker<br />client or in a CI system, read_write may be provided as query parameter. For<br />example: `/v2/registries/&#123;registry_name&#125;/docker-credentials?read_write=true`<br /><br />By default, the returned credentials will not expire. To retrieve credentials<br />with an expiry set, expiry_seconds may be provided as a query parameter. For<br />example: `/v2/registries/&#123;registry_name&#125;/docker-credentials?expiry_seconds=3600` will return<br />credentials that expire after one hour.<br />

```sql
SELECT
registry.digitalocean.com
FROM digitalocean.container_registry.docker_credentials
WHERE registry_name = '{{ registry_name }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="registry_get_docker_credentials_legacy"
    values={[
        { label: 'registry_get_docker_credentials_legacy', value: 'registry_get_docker_credentials_legacy' }
    ]}
>
<TabItem value="registry_get_docker_credentials_legacy">

In order to access your container registry with the Docker client or from a<br />Kubernetes cluster, you will need to configure authentication. The necessary<br />JSON configuration can be retrieved by sending a GET request to<br />`/v2/registry/docker-credentials`.<br /><br />The response will be in the format of a Docker `config.json` file. To use the<br />config in your Kubernetes cluster, create a Secret with:<br /><br />    kubectl create secret generic docr \<br />      --from-file=.dockerconfigjson=config.json \<br />      --type=kubernetes.io/dockerconfigjson<br /><br />By default, the returned credentials have read-only access to your registry<br />and cannot be used to push images. This is appropriate for most Kubernetes<br />clusters. To retrieve read/write credentials, suitable for use with the Docker<br />client or in a CI system, read_write may be provided as query parameter. For<br />example: `/v2/registry/docker-credentials?read_write=true`<br /><br />By default, the returned credentials will not expire. To retrieve credentials<br />with an expiry set, expiry_seconds may be provided as a query parameter. For<br />example: `/v2/registry/docker-credentials?expiry_seconds=3600` will return<br />credentials that expire after one hour.<br />

```sql
EXEC digitalocean.container_registry.docker_credentials.registry_get_docker_credentials_legacy 
@expiry_seconds='{{ expiry_seconds }}', 
@read_write={{ read_write }};
```
</TabItem>
</Tabs>
