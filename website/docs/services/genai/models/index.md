--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_models"
    values={[
        { label: 'genai_list_models', value: 'genai_list_models' }
    ]}
>
<TabItem value="genai_list_models">

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
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td>Links to other pages</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Meta information about the data set</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>The models</td>
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
    <td><a href="#genai_list_models"><CopyableCode code="genai_list_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-usecases"><code>usecases</code></a>, <a href="#parameter-public_only"><code>public_only</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all models, send a GET request to `/v2/gen-ai/models`.</td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page number. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Items per page. (example: 1)</td>
</tr>
<tr id="parameter-public_only">
    <td><CopyableCode code="public_only" /></td>
    <td><code>boolean</code></td>
    <td>Only include models that are publicly available. (example: true)</td>
</tr>
<tr id="parameter-usecases">
    <td><CopyableCode code="usecases" /></td>
    <td><code>array</code></td>
    <td>Include only models defined for the listed usecases.   - MODEL_USECASE_UNKNOWN: The use case of the model is unknown  - MODEL_USECASE_AGENT: The model maybe used in an agent  - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning  - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)  - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails  - MODEL_USECASE_REASONING: The model usecase for reasoning  - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference (example: [MODEL_USECASE_UNKNOWN])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_list_models"
    values={[
        { label: 'genai_list_models', value: 'genai_list_models' }
    ]}
>
<TabItem value="genai_list_models">

To list all models, send a GET request to `/v2/gen-ai/models`.

```sql
SELECT
links,
meta,
models
FROM digitalocean.genai.models
WHERE usecases = '{{ usecases }}'
AND public_only = '{{ public_only }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>
