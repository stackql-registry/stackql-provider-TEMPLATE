--- 
title: knowledge_base_data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_base_data_sources
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

Creates, updates, deletes, gets or lists a <code>knowledge_base_data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>knowledge_base_data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.knowledge_base_data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_knowledge_base_data_sources"
    values={[
        { label: 'genai_list_knowledge_base_data_sources', value: 'genai_list_knowledge_base_data_sources' }
    ]}
>
<TabItem value="genai_list_knowledge_base_data_sources">

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
    <td><CopyableCode code="knowledge_base_data_sources" /></td>
    <td><code>array</code></td>
    <td>The data sources</td>
</tr>
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
    <td><a href="#genai_list_knowledge_base_data_sources"><CopyableCode code="genai_list_knowledge_base_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_uuid"><code>knowledge_base_uuid</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all data sources for a knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/data_sources`.</td>
</tr>
<tr>
    <td><a href="#genai_create_knowledge_base_data_source"><CopyableCode code="genai_create_knowledge_base_data_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-knowledge_base_uuid"><code>knowledge_base_uuid</code></a></td>
    <td></td>
    <td>To add a data source to a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/data_sources`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_knowledge_base_data_source"><CopyableCode code="genai_delete_knowledge_base_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_uuid"><code>knowledge_base_uuid</code></a>, <a href="#parameter-data_source_uuid"><code>data_source_uuid</code></a></td>
    <td></td>
    <td>To delete a data source from a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/data_sources/&#123;data_source_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_create_data_source_file_upload_presigned_urls"><CopyableCode code="genai_create_data_source_file_upload_presigned_urls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To create presigned URLs for knowledge base data source file upload, send a POST request to `/v2/gen-ai/knowledge_bases/data_sources/file_upload_presigned_urls`.</td>
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
<tr id="parameter-data_source_uuid">
    <td><CopyableCode code="data_source_uuid" /></td>
    <td><code>string</code></td>
    <td>Data source id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-knowledge_base_uuid">
    <td><CopyableCode code="knowledge_base_uuid" /></td>
    <td><code>string</code></td>
    <td>Knowledge base id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_list_knowledge_base_data_sources"
    values={[
        { label: 'genai_list_knowledge_base_data_sources', value: 'genai_list_knowledge_base_data_sources' }
    ]}
>
<TabItem value="genai_list_knowledge_base_data_sources">

To list all data sources for a knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/data_sources`.

```sql
SELECT
knowledge_base_data_sources,
links,
meta
FROM digitalocean.genai.knowledge_base_data_sources
WHERE knowledge_base_uuid = '{{ knowledge_base_uuid }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_knowledge_base_data_source"
    values={[
        { label: 'genai_create_knowledge_base_data_source', value: 'genai_create_knowledge_base_data_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_knowledge_base_data_source">

To add a data source to a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/data_sources`.

```sql
INSERT INTO digitalocean.genai.knowledge_base_data_sources (
data__aws_data_source,
data__knowledge_base_uuid,
data__spaces_data_source,
data__web_crawler_data_source,
knowledge_base_uuid
)
SELECT 
'{{ aws_data_source }}',
'{{ knowledge_base_uuid }}',
'{{ spaces_data_source }}',
'{{ web_crawler_data_source }}',
'{{ knowledge_base_uuid }}'
RETURNING
knowledge_base_data_source
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: knowledge_base_data_sources
  props:
    - name: knowledge_base_uuid
      value: string
      description: Required parameter for the knowledge_base_data_sources resource.
    - name: aws_data_source
      value: object
      description: >
        AWS S3 Data Source
        
    - name: knowledge_base_uuid
      value: string
      description: >
        Knowledge base id
        
    - name: spaces_data_source
      value: object
      description: >
        Spaces Bucket Data Source
        
    - name: web_crawler_data_source
      value: object
      description: >
        WebCrawlerDataSource
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_knowledge_base_data_source"
    values={[
        { label: 'genai_delete_knowledge_base_data_source', value: 'genai_delete_knowledge_base_data_source' }
    ]}
>
<TabItem value="genai_delete_knowledge_base_data_source">

To delete a data source from a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/data_sources/&#123;data_source_uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.knowledge_base_data_sources
WHERE knowledge_base_uuid = '{{ knowledge_base_uuid }}' --required
AND data_source_uuid = '{{ data_source_uuid }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_create_data_source_file_upload_presigned_urls"
    values={[
        { label: 'genai_create_data_source_file_upload_presigned_urls', value: 'genai_create_data_source_file_upload_presigned_urls' }
    ]}
>
<TabItem value="genai_create_data_source_file_upload_presigned_urls">

To create presigned URLs for knowledge base data source file upload, send a POST request to `/v2/gen-ai/knowledge_bases/data_sources/file_upload_presigned_urls`.

```sql
EXEC digitalocean.genai.knowledge_base_data_sources.genai_create_data_source_file_upload_presigned_urls 
@@json=
'{
"files": "{{ files }}"
}';
```
</TabItem>
</Tabs>
