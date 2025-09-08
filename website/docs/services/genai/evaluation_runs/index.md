--- 
title: evaluation_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_runs
  - genai
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

Creates, updates, deletes, gets or lists an <code>evaluation_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_runs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_evaluation_run"
    values={[
        { label: 'genai_get_evaluation_run', value: 'genai_get_evaluation_run' }
    ]}
>
<TabItem value="genai_get_evaluation_run">

A successful response.

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
    <td><CopyableCode code="created_by_user_id" /></td>
    <td><code>string (uint64)</code></td>
    <td> (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_name" /></td>
    <td><code>string</code></td>
    <td>Agent name (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="run_name" /></td>
    <td><code>string</code></td>
    <td>Run name. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="test_case_name" /></td>
    <td><code>string</code></td>
    <td>Test case name. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether agent is deleted</td>
</tr>
<tr>
    <td><CopyableCode code="agent_uuid" /></td>
    <td><code>string</code></td>
    <td>Agent UUID. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_version_hash" /></td>
    <td><code>string</code></td>
    <td>Version hash (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_workspace_uuid" /></td>
    <td><code>string</code></td>
    <td>Agent workspace uuid (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_user_email" /></td>
    <td><code>string</code></td>
    <td> (example: example@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="error_description" /></td>
    <td><code>string</code></td>
    <td>The error description (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_run_uuid" /></td>
    <td><code>string</code></td>
    <td>Evaluation run UUID. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_test_case_workspace_uuid" /></td>
    <td><code>string</code></td>
    <td>Evaluation test case workspace uuid (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Run end time. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="pass_status" /></td>
    <td><code>boolean</code></td>
    <td>The pass status of the evaluation run based on the star metric.</td>
</tr>
<tr>
    <td><CopyableCode code="queued_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Run queued time. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="run_level_metric_results" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="star_metric_result" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Run start time. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Evaluation Run Statuses (default: EVALUATION_RUN_STATUS_UNSPECIFIED, example: EVALUATION_RUN_STATUS_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="test_case_description" /></td>
    <td><code>string</code></td>
    <td>Test case description. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="test_case_uuid" /></td>
    <td><code>string</code></td>
    <td>Test-case UUID. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="test_case_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Test-case-version.</td>
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
    <td><a href="#genai_get_evaluation_run"><CopyableCode code="genai_get_evaluation_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-evaluation_run_uuid"><code>evaluation_run_uuid</code></a></td>
    <td></td>
    <td>To retrive information about an existing evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/&#123;evaluation_run_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_run_evaluation_test_case"><CopyableCode code="genai_run_evaluation_test_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To run an evaluation test case, send a POST request to `/v2/gen-ai/evaluation_runs`.</td>
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
<tr id="parameter-evaluation_run_uuid">
    <td><CopyableCode code="evaluation_run_uuid" /></td>
    <td><code>string</code></td>
    <td>Evaluation run UUID. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_evaluation_run"
    values={[
        { label: 'genai_get_evaluation_run', value: 'genai_get_evaluation_run' }
    ]}
>
<TabItem value="genai_get_evaluation_run">

To retrive information about an existing evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/&#123;evaluation_run_uuid&#125;`.

```sql
SELECT
created_by_user_id,
agent_name,
run_name,
test_case_name,
agent_deleted,
agent_uuid,
agent_version_hash,
agent_workspace_uuid,
created_by_user_email,
error_description,
evaluation_run_uuid,
evaluation_test_case_workspace_uuid,
finished_at,
pass_status,
queued_at,
run_level_metric_results,
star_metric_result,
started_at,
status,
test_case_description,
test_case_uuid,
test_case_version
FROM digitalocean.genai.evaluation_runs
WHERE evaluation_run_uuid = '{{ evaluation_run_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_run_evaluation_test_case"
    values={[
        { label: 'genai_run_evaluation_test_case', value: 'genai_run_evaluation_test_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_run_evaluation_test_case">

To run an evaluation test case, send a POST request to `/v2/gen-ai/evaluation_runs`.

```sql
INSERT INTO digitalocean.genai.evaluation_runs (
data__agent_uuids,
data__run_name,
data__test_case_uuid
)
SELECT 
'{{ agent_uuids }}',
'{{ run_name }}',
'{{ test_case_uuid }}'
RETURNING
evaluation_run_uuids
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: evaluation_runs
  props:
    - name: agent_uuids
      value: array
      description: >
        Agent UUIDs to run the test case against.
        
    - name: run_name
      value: string
      description: >
        The name of the run.
        
    - name: test_case_uuid
      value: string
      description: >
        Test-case UUID to run
        
```
</TabItem>
</Tabs>
