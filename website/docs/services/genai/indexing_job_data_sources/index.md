--- 
title: indexing_job_data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - indexing_job_data_sources
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

Creates, updates, deletes, gets or lists an <code>indexing_job_data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>indexing_job_data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.indexing_job_data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_indexing_job_data_sources"
    values={[
        { label: 'genai_list_indexing_job_data_sources', value: 'genai_list_indexing_job_data_sources' }
    ]}
>
<TabItem value="genai_list_indexing_job_data_sources">

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
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when data source completed indexing (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_uuid" /></td>
    <td><code>string</code></td>
    <td>Uuid of the indexed data source (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>string</code></td>
    <td>A detailed error description (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="error_msg" /></td>
    <td><code>string</code></td>
    <td>A string code provinding a hint which part of the system experienced an error (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="failed_item_count" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total count of files that have failed (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="indexed_file_count" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total count of files that have been indexed (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="indexed_item_count" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total count of files that have been indexed (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="removed_item_count" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total count of files that have been removed (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="skipped_item_count" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total count of files that have been skipped (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when data source started indexing (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (default: DATA_SOURCE_STATUS_UNKNOWN, example: DATA_SOURCE_STATUS_UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="total_bytes" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total size of files in data source in bytes (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="total_bytes_indexed" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total size of files in data source in bytes that have been indexed (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="total_file_count" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total file count in the data source (example: 12345)</td>
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
    <td><a href="#genai_list_indexing_job_data_sources"><CopyableCode code="genai_list_indexing_job_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-indexing_job_uuid"><code>indexing_job_uuid</code></a></td>
    <td></td>
    <td>To list all datasources for an indexing job, send a GET request to `/v2/gen-ai/indexing_jobs/&#123;indexing_job_uuid&#125;/data_sources`.</td>
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
<tr id="parameter-indexing_job_uuid">
    <td><CopyableCode code="indexing_job_uuid" /></td>
    <td><code>string</code></td>
    <td>Uuid of the indexing job (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_list_indexing_job_data_sources"
    values={[
        { label: 'genai_list_indexing_job_data_sources', value: 'genai_list_indexing_job_data_sources' }
    ]}
>
<TabItem value="genai_list_indexing_job_data_sources">

To list all datasources for an indexing job, send a GET request to `/v2/gen-ai/indexing_jobs/&#123;indexing_job_uuid&#125;/data_sources`.

```sql
SELECT
completed_at,
data_source_uuid,
error_details,
error_msg,
failed_item_count,
indexed_file_count,
indexed_item_count,
removed_item_count,
skipped_item_count,
started_at,
status,
total_bytes,
total_bytes_indexed,
total_file_count
FROM digitalocean.genai.indexing_job_data_sources
WHERE indexing_job_uuid = '{{ indexing_job_uuid }}' -- required;
```
</TabItem>
</Tabs>
