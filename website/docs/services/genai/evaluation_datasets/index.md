--- 
title: evaluation_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_datasets
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

Creates, updates, deletes, gets or lists an <code>evaluation_datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#genai_create_evaluation_dataset"><CopyableCode code="genai_create_evaluation_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create an evaluation dataset, send a POST request to `/v2/gen-ai/evaluation_datasets`.</td>
</tr>
<tr>
    <td><a href="#genai_create_evaluation_dataset_file_upload_presigned_urls"><CopyableCode code="genai_create_evaluation_dataset_file_upload_presigned_urls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To create presigned URLs for evaluation dataset file upload, send a POST request to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="genai_create_evaluation_dataset"
    values={[
        { label: 'genai_create_evaluation_dataset', value: 'genai_create_evaluation_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_evaluation_dataset">

To create an evaluation dataset, send a POST request to `/v2/gen-ai/evaluation_datasets`.

```sql
INSERT INTO digitalocean.genai.evaluation_datasets (
data__file_upload_dataset,
data__name
)
SELECT 
'{{ file_upload_dataset }}',
'{{ name }}'
RETURNING
evaluation_dataset_uuid
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: evaluation_datasets
  props:
    - name: file_upload_dataset
      value: object
      description: >
        File to upload as data source for knowledge base.
        
    - name: name
      value: string
      description: >
        The name of the agent evaluation dataset.
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_create_evaluation_dataset_file_upload_presigned_urls"
    values={[
        { label: 'genai_create_evaluation_dataset_file_upload_presigned_urls', value: 'genai_create_evaluation_dataset_file_upload_presigned_urls' }
    ]}
>
<TabItem value="genai_create_evaluation_dataset_file_upload_presigned_urls">

To create presigned URLs for evaluation dataset file upload, send a POST request to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.

```sql
EXEC digitalocean.genai.evaluation_datasets.genai_create_evaluation_dataset_file_upload_presigned_urls 
@@json=
'{
"files": "{{ files }}"
}';
```
</TabItem>
</Tabs>
