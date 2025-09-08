--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
  - monitoring
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

Creates, updates, deletes, gets or lists an <code>alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>alerts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="uptime_get_alert"
    values={[
        { label: 'uptime_get_alert', value: 'uptime_get_alert' },
        { label: 'uptime_list_alerts', value: 'uptime_list_alerts' }
    ]}
>
<TabItem value="uptime_get_alert">

The response will be a JSON object with a key called `alert`. The value of this will be an object that contains the standard attributes associated with an uptime alert.

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
    <td>A unique ID that can be used to identify and reference the alert. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-friendly display name. (example: Landing page degraded performance)</td>
</tr>
<tr>
    <td><CopyableCode code="comparison" /></td>
    <td><code>string</code></td>
    <td>The comparison operator used against the alert's threshold. (example: greater_than)</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>object</code></td>
    <td>The notification settings for a trigger alert.</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>Period of time the threshold must be exceeded to trigger the alert. (example: 2m)</td>
</tr>
<tr>
    <td><CopyableCode code="threshold" /></td>
    <td><code>integer</code></td>
    <td>The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of alert. (example: latency)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="uptime_list_alerts">

The response will be a JSON object with a key called `alerts`. This will be set to an array of objects, each of which will contain the standard attributes associated with an uptime alert.

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
    <td>A unique ID that can be used to identify and reference the alert. (example: 5a4981aa-9653-4bd1-bef5-d6bff52042e4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-friendly display name. (example: Landing page degraded performance)</td>
</tr>
<tr>
    <td><CopyableCode code="comparison" /></td>
    <td><code>string</code></td>
    <td>The comparison operator used against the alert's threshold. (example: greater_than)</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>object</code></td>
    <td>The notification settings for a trigger alert.</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>Period of time the threshold must be exceeded to trigger the alert. (example: 2m)</td>
</tr>
<tr>
    <td><CopyableCode code="threshold" /></td>
    <td><code>integer</code></td>
    <td>The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of alert. (example: latency)</td>
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
    <td><a href="#uptime_get_alert"><CopyableCode code="uptime_get_alert" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a>, <a href="#parameter-alert_id"><code>alert_id</code></a></td>
    <td></td>
    <td>To show information about an existing alert, send a GET request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`.</td>
</tr>
<tr>
    <td><a href="#uptime_list_alerts"><CopyableCode code="uptime_list_alerts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all of the alerts for an Uptime check, send a GET request to `/v2/uptime/checks/$CHECK_ID/alerts`.</td>
</tr>
<tr>
    <td><a href="#uptime_create_alert"><CopyableCode code="uptime_create_alert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__type"><code>data__type</code></a>, <a href="#parameter-data__notifications"><code>data__notifications</code></a>, <a href="#parameter-data__period"><code>data__period</code></a></td>
    <td></td>
    <td>To create an Uptime alert, send a POST request to `/v2/uptime/checks/$CHECK_ID/alerts` specifying the attributes<br />in the table below in the JSON body.<br /></td>
</tr>
<tr>
    <td><a href="#uptime_update_alert"><CopyableCode code="uptime_update_alert" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a>, <a href="#parameter-alert_id"><code>alert_id</code></a>, <a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__type"><code>data__type</code></a>, <a href="#parameter-data__notifications"><code>data__notifications</code></a>, <a href="#parameter-data__period"><code>data__period</code></a></td>
    <td></td>
    <td>To update the settings of an Uptime alert, send a PUT request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#uptime_delete_alert"><CopyableCode code="uptime_delete_alert" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-check_id"><code>check_id</code></a>, <a href="#parameter-alert_id"><code>alert_id</code></a></td>
    <td></td>
    <td>To delete an Uptime alert, send a DELETE request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`. A 204 status<br />code with no body will be returned in response to a successful request.<br /></td>
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
<tr id="parameter-alert_id">
    <td><CopyableCode code="alert_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for an alert. (example: 17f0f0ae-b7e5-4ef6-86e3-aa569db58284)</td>
</tr>
<tr id="parameter-check_id">
    <td><CopyableCode code="check_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a check. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
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
    defaultValue="uptime_get_alert"
    values={[
        { label: 'uptime_get_alert', value: 'uptime_get_alert' },
        { label: 'uptime_list_alerts', value: 'uptime_list_alerts' }
    ]}
>
<TabItem value="uptime_get_alert">

To show information about an existing alert, send a GET request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`.

```sql
SELECT
id,
name,
comparison,
notifications,
period,
threshold,
type
FROM digitalocean.monitoring.alerts
WHERE check_id = '{{ check_id }}' -- required
AND alert_id = '{{ alert_id }}' -- required;
```
</TabItem>
<TabItem value="uptime_list_alerts">

To list all of the alerts for an Uptime check, send a GET request to `/v2/uptime/checks/$CHECK_ID/alerts`.

```sql
SELECT
id,
name,
comparison,
notifications,
period,
threshold,
type
FROM digitalocean.monitoring.alerts
WHERE check_id = '{{ check_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="uptime_create_alert"
    values={[
        { label: 'uptime_create_alert', value: 'uptime_create_alert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="uptime_create_alert">

To create an Uptime alert, send a POST request to `/v2/uptime/checks/$CHECK_ID/alerts` specifying the attributes<br />in the table below in the JSON body.<br />

```sql
INSERT INTO digitalocean.monitoring.alerts (
data__name,
data__type,
data__threshold,
data__comparison,
data__notifications,
data__period,
check_id
)
SELECT 
'{{ name }}' --required,
'{{ type }}' --required,
{{ threshold }},
'{{ comparison }}',
'{{ notifications }}' --required,
'{{ period }}' --required,
'{{ check_id }}'
RETURNING
alert
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: alerts
  props:
    - name: check_id
      value: string (uuid)
      description: Required parameter for the alerts resource.
    - name: name
      value: string
      description: >
        A human-friendly display name.
        
    - name: type
      value: string
      description: >
        The type of alert.
        
      valid_values: ['latency', 'down', 'down_global', 'ssl_expiry']
    - name: threshold
      value: integer
      description: >
        The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.
        
    - name: comparison
      value: string
      description: >
        The comparison operator used against the alert's threshold.
        
      valid_values: ['greater_than', 'less_than']
    - name: notifications
      value: object
      description: >
        The notification settings for a trigger alert.
        
    - name: period
      value: string
      description: >
        Period of time the threshold must be exceeded to trigger the alert.
        
      valid_values: ['2m', '3m', '5m', '10m', '15m', '30m', '1h']
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="uptime_update_alert"
    values={[
        { label: 'uptime_update_alert', value: 'uptime_update_alert' }
    ]}
>
<TabItem value="uptime_update_alert">

To update the settings of an Uptime alert, send a PUT request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`.<br />

```sql
REPLACE digitalocean.monitoring.alerts
SET 
data__name = '{{ name }}',
data__type = '{{ type }}',
data__threshold = {{ threshold }},
data__comparison = '{{ comparison }}',
data__notifications = '{{ notifications }}',
data__period = '{{ period }}'
WHERE 
check_id = '{{ check_id }}' --required
AND alert_id = '{{ alert_id }}' --required
AND data__name = '{{ name }}' --required
AND data__type = '{{ type }}' --required
AND data__notifications = '{{ notifications }}' --required
AND data__period = '{{ period }}' --required
RETURNING
alert;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="uptime_delete_alert"
    values={[
        { label: 'uptime_delete_alert', value: 'uptime_delete_alert' }
    ]}
>
<TabItem value="uptime_delete_alert">

To delete an Uptime alert, send a DELETE request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`. A 204 status<br />code with no body will be returned in response to a successful request.<br />

```sql
DELETE FROM digitalocean.monitoring.alerts
WHERE check_id = '{{ check_id }}' --required
AND alert_id = '{{ alert_id }}' --required;
```
</TabItem>
</Tabs>
