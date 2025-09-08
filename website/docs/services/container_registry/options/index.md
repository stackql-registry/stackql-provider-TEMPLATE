--- 
title: options
hide_title: false
hide_table_of_contents: false
keywords:
  - options
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

Creates, updates, deletes, gets or lists an <code>options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>options</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_get_options"
    values={[
        { label: 'registries_get_options', value: 'registries_get_options' }
    ]}
>
<TabItem value="registries_get_options">

The response will be a JSON object with a key called `options` which contains a key called `subscription_tiers` listing the available tiers.

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
    <td><CopyableCode code="available_regions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subscription_tiers" /></td>
    <td><code>array</code></td>
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
    <td><a href="#registries_get_options"><CopyableCode code="registries_get_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>This endpoint serves to provide additional information as to which option values are available when creating a container registry.<br />There are multiple subscription tiers available for container registry. Each tier allows a different number of image repositories to be created in your registry, and has a different amount of storage and transfer included.<br />There are multiple regions available for container registry and controls where your data is stored.<br />To list the available options, send a GET request to `/v2/registries/options`. This is similar to GET `/v2/registry/options` and exists for backward compatibility.</td>
</tr>
<tr>
    <td><a href="#registry_get_options_legacy"><CopyableCode code="registry_get_options_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>This endpoint serves to provide additional information as to which option values are available when creating a container registry.<br />There are multiple subscription tiers available for container registry. Each tier allows a different number of image repositories to be created in your registry, and has a different amount of storage and transfer included.<br />There are multiple regions available for container registry and controls where your data is stored.<br />To list the available options, send a GET request to `/v2/registry/options`.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="registries_get_options"
    values={[
        { label: 'registries_get_options', value: 'registries_get_options' }
    ]}
>
<TabItem value="registries_get_options">

This endpoint serves to provide additional information as to which option values are available when creating a container registry.<br />There are multiple subscription tiers available for container registry. Each tier allows a different number of image repositories to be created in your registry, and has a different amount of storage and transfer included.<br />There are multiple regions available for container registry and controls where your data is stored.<br />To list the available options, send a GET request to `/v2/registries/options`. This is similar to GET `/v2/registry/options` and exists for backward compatibility.

```sql
SELECT
available_regions,
subscription_tiers
FROM digitalocean.container_registry.options;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="registry_get_options_legacy"
    values={[
        { label: 'registry_get_options_legacy', value: 'registry_get_options_legacy' }
    ]}
>
<TabItem value="registry_get_options_legacy">

This endpoint serves to provide additional information as to which option values are available when creating a container registry.<br />There are multiple subscription tiers available for container registry. Each tier allows a different number of image repositories to be created in your registry, and has a different amount of storage and transfer included.<br />There are multiple regions available for container registry and controls where your data is stored.<br />To list the available options, send a GET request to `/v2/registry/options`.

```sql
EXEC digitalocean.container_registry.options.registry_get_options_legacy 
;
```
</TabItem>
</Tabs>
