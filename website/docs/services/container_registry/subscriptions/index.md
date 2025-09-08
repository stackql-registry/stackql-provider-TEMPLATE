--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.container_registry.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="registries_get_subscription"
    values={[
        { label: 'registries_get_subscription', value: 'registries_get_subscription' }
    ]}
>
<TabItem value="registries_get_subscription">

The response will be a JSON object with a key called `subscription` containing information about your subscription.

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the subscription was created. (example: 2020-01-23T21:19:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the subscription was last updated. (example: 2020-11-05T15:53:24Z)</td>
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
    <td><a href="#registries_get_subscription"><CopyableCode code="registries_get_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>A subscription is automatically created when you configure your container registry. To get information about your subscription, send a GET request to `/v2/registries/subscription`. It is similar to GET `/v2/registry/subscription` and exists for backward compatibility.</td>
</tr>
<tr>
    <td><a href="#registries_update_subscription"><CopyableCode code="registries_update_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>After creating your registry, you can switch to a different subscription tier to better suit your needs. To do this, send a POST request to `/v2/registries/subscription`. It is similar to POST `/v2/registry/subscription` and exists for backward compatibility.</td>
</tr>
<tr>
    <td><a href="#registry_get_subscription_legacy"><CopyableCode code="registry_get_subscription_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>A subscription is automatically created when you configure your container registry. To get information about your subscription, send a GET request to `/v2/registry/subscription`.</td>
</tr>
<tr>
    <td><a href="#registry_update_subscription_legacy"><CopyableCode code="registry_update_subscription_legacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>After creating your registry, you can switch to a different subscription tier to better suit your needs. To do this, send a POST request to `/v2/registry/subscription`.</td>
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
    defaultValue="registries_get_subscription"
    values={[
        { label: 'registries_get_subscription', value: 'registries_get_subscription' }
    ]}
>
<TabItem value="registries_get_subscription">

A subscription is automatically created when you configure your container registry. To get information about your subscription, send a GET request to `/v2/registries/subscription`. It is similar to GET `/v2/registry/subscription` and exists for backward compatibility.

```sql
SELECT
created_at,
tier,
updated_at
FROM digitalocean.container_registry.subscriptions;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="registries_update_subscription"
    values={[
        { label: 'registries_update_subscription', value: 'registries_update_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="registries_update_subscription">

After creating your registry, you can switch to a different subscription tier to better suit your needs. To do this, send a POST request to `/v2/registries/subscription`. It is similar to POST `/v2/registry/subscription` and exists for backward compatibility.

```sql
INSERT INTO digitalocean.container_registry.subscriptions (
data__tier_slug
)
SELECT 
'{{ tier_slug }}'
RETURNING
subscription
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: tier_slug
      value: string
      description: >
        The slug of the subscription tier to sign up for.
        
      valid_values: ['starter', 'basic', 'professional']
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="registry_get_subscription_legacy"
    values={[
        { label: 'registry_get_subscription_legacy', value: 'registry_get_subscription_legacy' },
        { label: 'registry_update_subscription_legacy', value: 'registry_update_subscription_legacy' }
    ]}
>
<TabItem value="registry_get_subscription_legacy">

A subscription is automatically created when you configure your container registry. To get information about your subscription, send a GET request to `/v2/registry/subscription`.

```sql
EXEC digitalocean.container_registry.subscriptions.registry_get_subscription_legacy 
;
```
</TabItem>
<TabItem value="registry_update_subscription_legacy">

After creating your registry, you can switch to a different subscription tier to better suit your needs. To do this, send a POST request to `/v2/registry/subscription`.

```sql
EXEC digitalocean.container_registry.subscriptions.registry_update_subscription_legacy 
@@json=
'{
"tier_slug": "{{ tier_slug }}"
}';
```
</TabItem>
</Tabs>
