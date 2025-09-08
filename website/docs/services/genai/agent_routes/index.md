--- 
title: agent_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_routes
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

Creates, updates, deletes, gets or lists an <code>agent_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agent_routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.agent_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_agent_children"
    values={[
        { label: 'genai_get_agent_children', value: 'genai_get_agent_children' }
    ]}
>
<TabItem value="genai_get_agent_children">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Agent name (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Id of user that created the agent (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="route_name" /></td>
    <td><code>string</code></td>
    <td>Route name (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="anthropic_api_key" /></td>
    <td><code>object</code></td>
    <td>Anthropic API Key Info</td>
</tr>
<tr>
    <td><CopyableCode code="api_key_infos" /></td>
    <td><code>array</code></td>
    <td>Api key infos</td>
</tr>
<tr>
    <td><CopyableCode code="api_keys" /></td>
    <td><code>array</code></td>
    <td>Api keys</td>
</tr>
<tr>
    <td><CopyableCode code="chatbot" /></td>
    <td><code>object</code></td>
    <td>A Chatbot</td>
</tr>
<tr>
    <td><CopyableCode code="chatbot_identifiers" /></td>
    <td><code>array</code></td>
    <td>Chatbot identifiers</td>
</tr>
<tr>
    <td><CopyableCode code="child_agents" /></td>
    <td><code>array</code></td>
    <td>Child agents</td>
</tr>
<tr>
    <td><CopyableCode code="conversation_logs_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether conversation logs are enabled for the agent</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date / time (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Description of deployment</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of agent (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="functions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="guardrails" /></td>
    <td><code>array</code></td>
    <td>The guardrails the agent is attached to</td>
</tr>
<tr>
    <td><CopyableCode code="if_case" /></td>
    <td><code>string</code></td>
    <td> (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>string</code></td>
    <td>Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="k" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_bases" /></td>
    <td><code>array</code></td>
    <td>Knowledge bases</td>
</tr>
<tr>
    <td><CopyableCode code="logging_config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="max_tokens" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>object</code></td>
    <td>Description of a Model</td>
</tr>
<tr>
    <td><CopyableCode code="openai_api_key" /></td>
    <td><code>object</code></td>
    <td>OpenAI API Key Info</td>
</tr>
<tr>
    <td><CopyableCode code="parent_agents" /></td>
    <td><code>array</code></td>
    <td>Parent agents</td>
</tr>
<tr>
    <td><CopyableCode code="provide_citations" /></td>
    <td><code>boolean</code></td>
    <td>Whether the agent should provide in-response citations</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region code (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_method" /></td>
    <td><code>string</code></td>
    <td>- RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown  - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite  - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back  - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries  - RETRIEVAL_METHOD_NONE: The retrieval method is none (default: RETRIEVAL_METHOD_UNKNOWN, example: RETRIEVAL_METHOD_UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="route_created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation of route date / time (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="route_created_by" /></td>
    <td><code>string (uint64)</code></td>
    <td> (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="route_uuid" /></td>
    <td><code>string</code></td>
    <td> (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Agent tag to organize related resources</td>
</tr>
<tr>
    <td><CopyableCode code="temperature" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Represents an AgentTemplate entity</td>
</tr>
<tr>
    <td><CopyableCode code="top_p" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Access your agent under this url (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique agent id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="version_hash" /></td>
    <td><code>string</code></td>
    <td>The latest version of the agent (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace" /></td>
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
    <td><a href="#genai_get_agent_children"><CopyableCode code="genai_get_agent_children" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To view agent routes for an agent, send a GET requtest to `/v2/gen-ai/agents/&#123;uuid&#125;/child_agents`.</td>
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
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Agent id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_agent_children"
    values={[
        { label: 'genai_get_agent_children', value: 'genai_get_agent_children' }
    ]}
>
<TabItem value="genai_get_agent_children">

To view agent routes for an agent, send a GET requtest to `/v2/gen-ai/agents/&#123;uuid&#125;/child_agents`.

```sql
SELECT
name,
project_id,
user_id,
route_name,
anthropic_api_key,
api_key_infos,
api_keys,
chatbot,
chatbot_identifiers,
child_agents,
conversation_logs_enabled,
created_at,
deployment,
description,
functions,
guardrails,
if_case,
instruction,
k,
knowledge_bases,
logging_config,
max_tokens,
model,
openai_api_key,
parent_agents,
provide_citations,
region,
retrieval_method,
route_created_at,
route_created_by,
route_uuid,
tags,
temperature,
template,
top_p,
updated_at,
url,
uuid,
version_hash,
workspace
FROM digitalocean.genai.agent_routes
WHERE uuid = '{{ uuid }}' -- required;
```
</TabItem>
</Tabs>
