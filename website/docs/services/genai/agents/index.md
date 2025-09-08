--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_agent"
    values={[
        { label: 'genai_get_agent', value: 'genai_get_agent' },
        { label: 'genai_list_agents_by_workspace', value: 'genai_list_agents_by_workspace' },
        { label: 'genai_list_agents', value: 'genai_list_agents' }
    ]}
>
<TabItem value="genai_get_agent">

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
<TabItem value="genai_list_agents_by_workspace">

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
    <td><CopyableCode code="agents" /></td>
    <td><code>array</code></td>
    <td></td>
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
<TabItem value="genai_list_agents">

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
    <td><CopyableCode code="agents" /></td>
    <td><code>array</code></td>
    <td>Agents</td>
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
    <td><a href="#genai_get_agent"><CopyableCode code="genai_get_agent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To retrieve details of an agent, GET request to `/v2/gen-ai/agents/&#123;uuid&#125;`. The response body is a JSON object containing the agent.</td>
</tr>
<tr>
    <td><a href="#genai_list_agents_by_workspace"><CopyableCode code="genai_list_agents_by_workspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_uuid"><code>workspace_uuid</code></a></td>
    <td><a href="#parameter-only_deployed"><code>only_deployed</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all agents by a Workspace, send a GET request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;/agents`.</td>
</tr>
<tr>
    <td><a href="#genai_list_agents"><CopyableCode code="genai_list_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-only_deployed"><code>only_deployed</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all agents, send a GET request to `/v2/gen-ai/agents`.</td>
</tr>
<tr>
    <td><a href="#genai_create_agent"><CopyableCode code="genai_create_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a new agent, send a POST request to `/v2/gen-ai/agents`. The response body contains a JSON object with the newly created agent object.</td>
</tr>
<tr>
    <td><a href="#genai_update_agent"><CopyableCode code="genai_update_agent" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To update an agent, send a PUT request to `/v2/gen-ai/agents/&#123;uuid&#125;`. The response body is a JSON object containing the agent.</td>
</tr>
<tr>
    <td><a href="#genai_update_agents_workspace"><CopyableCode code="genai_update_agents_workspace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-workspace_uuid"><code>workspace_uuid</code></a></td>
    <td></td>
    <td>To move all listed agents a given workspace, send a PUT request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;/agents`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_agent"><CopyableCode code="genai_delete_agent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To delete an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_attach_agent_function"><CopyableCode code="genai_attach_agent_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a></td>
    <td></td>
    <td>To create a function route for an agent, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/functions`.</td>
</tr>
<tr>
    <td><a href="#genai_update_agent_function"><CopyableCode code="genai_update_agent_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a>, <a href="#parameter-function_uuid"><code>function_uuid</code></a></td>
    <td></td>
    <td>To update the function route, send a PUT request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/functions/&#123;function_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_detach_agent_function"><CopyableCode code="genai_detach_agent_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_uuid"><code>agent_uuid</code></a>, <a href="#parameter-function_uuid"><code>function_uuid</code></a></td>
    <td></td>
    <td>To delete a function route from an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/functions/&#123;function_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_attach_agent"><CopyableCode code="genai_attach_agent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-parent_agent_uuid"><code>parent_agent_uuid</code></a>, <a href="#parameter-child_agent_uuid"><code>child_agent_uuid</code></a></td>
    <td></td>
    <td>To add an agent route to an agent, send a POST request to `/v2/gen-ai/agents/&#123;parent_agent_uuid&#125;/child_agents/&#123;child_agent_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_update_attached_agent"><CopyableCode code="genai_update_attached_agent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-parent_agent_uuid"><code>parent_agent_uuid</code></a>, <a href="#parameter-child_agent_uuid"><code>child_agent_uuid</code></a></td>
    <td></td>
    <td>To update an agent route for an agent, send a PUT request to `/v2/gen-ai/agents/&#123;parent_agent_uuid&#125;/child_agents/&#123;child_agent_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_detach_agent"><CopyableCode code="genai_detach_agent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-parent_agent_uuid"><code>parent_agent_uuid</code></a>, <a href="#parameter-child_agent_uuid"><code>child_agent_uuid</code></a></td>
    <td></td>
    <td>To delete an agent route from a parent agent, send a DELETE request to `/v2/gen-ai/agents/&#123;parent_agent_uuid&#125;/child_agents/&#123;child_agent_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_update_agent_deployment_visibility"><CopyableCode code="genai_update_agent_deployment_visibility" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>Check whether an agent is public or private. To update the agent status, send a PUT request to `/v2/gen-ai/agents/&#123;uuid&#125;/deployment_visibility`.</td>
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
<tr id="parameter-agent_uuid">
    <td><CopyableCode code="agent_uuid" /></td>
    <td><code>string</code></td>
    <td>The id of the agent the function route belongs to. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-child_agent_uuid">
    <td><CopyableCode code="child_agent_uuid" /></td>
    <td><code>string</code></td>
    <td>Routed agent id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-function_uuid">
    <td><CopyableCode code="function_uuid" /></td>
    <td><code>string</code></td>
    <td>The function route to be destroyed. This does not destroy the function itself. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-parent_agent_uuid">
    <td><CopyableCode code="parent_agent_uuid" /></td>
    <td><code>string</code></td>
    <td>Pagent agent id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-workspace_uuid">
    <td><CopyableCode code="workspace_uuid" /></td>
    <td><code>string</code></td>
    <td>Workspace uuid to move agents to (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-only_deployed">
    <td><CopyableCode code="only_deployed" /></td>
    <td><code>boolean</code></td>
    <td>Only list agents that are deployed. (example: true)</td>
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
    defaultValue="genai_get_agent"
    values={[
        { label: 'genai_get_agent', value: 'genai_get_agent' },
        { label: 'genai_list_agents_by_workspace', value: 'genai_list_agents_by_workspace' },
        { label: 'genai_list_agents', value: 'genai_list_agents' }
    ]}
>
<TabItem value="genai_get_agent">

To retrieve details of an agent, GET request to `/v2/gen-ai/agents/&#123;uuid&#125;`. The response body is a JSON object containing the agent.

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
FROM digitalocean.genai.agents
WHERE uuid = '{{ uuid }}' -- required;
```
</TabItem>
<TabItem value="genai_list_agents_by_workspace">

To list all agents by a Workspace, send a GET request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;/agents`.

```sql
SELECT
agents,
links,
meta
FROM digitalocean.genai.agents
WHERE workspace_uuid = '{{ workspace_uuid }}' -- required
AND only_deployed = '{{ only_deployed }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
<TabItem value="genai_list_agents">

To list all agents, send a GET request to `/v2/gen-ai/agents`.

```sql
SELECT
agents,
links,
meta
FROM digitalocean.genai.agents
WHERE only_deployed = '{{ only_deployed }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_agent"
    values={[
        { label: 'genai_create_agent', value: 'genai_create_agent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_agent">

To create a new agent, send a POST request to `/v2/gen-ai/agents`. The response body contains a JSON object with the newly created agent object.

```sql
INSERT INTO digitalocean.genai.agents (
data__anthropic_key_uuid,
data__description,
data__instruction,
data__knowledge_base_uuid,
data__model_uuid,
data__name,
data__open_ai_key_uuid,
data__project_id,
data__region,
data__tags
)
SELECT 
'{{ anthropic_key_uuid }}',
'{{ description }}',
'{{ instruction }}',
'{{ knowledge_base_uuid }}',
'{{ model_uuid }}',
'{{ name }}',
'{{ open_ai_key_uuid }}',
'{{ project_id }}',
'{{ region }}',
'{{ tags }}'
RETURNING
agent
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: agents
  props:
    - name: anthropic_key_uuid
      value: string
      description: >
        Optional Anthropic API key ID to use with Anthropic models
        
    - name: description
      value: string
      description: >
        A text description of the agent, not used in inference
        
    - name: instruction
      value: string
      description: >
        Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.
        
    - name: knowledge_base_uuid
      value: array
      description: >
        Ids of the knowledge base(s) to attach to the agent
        
    - name: model_uuid
      value: string
      description: >
        Identifier for the foundation model.
        
    - name: name
      value: string
      description: >
        Agent name
        
    - name: open_ai_key_uuid
      value: string
      description: >
        Optional OpenAI API key ID to use with OpenAI models
        
    - name: project_id
      value: string
      description: >
        The id of the DigitalOcean project this agent will belong to
        
    - name: region
      value: string
      description: >
        The DigitalOcean region to deploy your agent in
        
    - name: tags
      value: array
      description: >
        Agent tag to organize related resources
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_update_agent"
    values={[
        { label: 'genai_update_agent', value: 'genai_update_agent' },
        { label: 'genai_update_agents_workspace', value: 'genai_update_agents_workspace' }
    ]}
>
<TabItem value="genai_update_agent">

To update an agent, send a PUT request to `/v2/gen-ai/agents/&#123;uuid&#125;`. The response body is a JSON object containing the agent.

```sql
REPLACE digitalocean.genai.agents
SET 
data__agent_log_insights_enabled = {{ agent_log_insights_enabled }},
data__anthropic_key_uuid = '{{ anthropic_key_uuid }}',
data__conversation_logs_enabled = {{ conversation_logs_enabled }},
data__description = '{{ description }}',
data__instruction = '{{ instruction }}',
data__k = {{ k }},
data__max_tokens = {{ max_tokens }},
data__model_uuid = '{{ model_uuid }}',
data__name = '{{ name }}',
data__open_ai_key_uuid = '{{ open_ai_key_uuid }}',
data__project_id = '{{ project_id }}',
data__provide_citations = {{ provide_citations }},
data__retrieval_method = '{{ retrieval_method }}',
data__tags = '{{ tags }}',
data__temperature = {{ temperature }},
data__top_p = {{ top_p }},
data__uuid = '{{ uuid }}'
WHERE 
uuid = '{{ uuid }}' --required
RETURNING
agent;
```
</TabItem>
<TabItem value="genai_update_agents_workspace">

To move all listed agents a given workspace, send a PUT request to `/v2/gen-ai/workspaces/&#123;workspace_uuid&#125;/agents`.

```sql
REPLACE digitalocean.genai.agents
SET 
data__agent_uuids = '{{ agent_uuids }}',
data__workspace_uuid = '{{ workspace_uuid }}'
WHERE 
workspace_uuid = '{{ workspace_uuid }}' --required
RETURNING
workspace;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_agent"
    values={[
        { label: 'genai_delete_agent', value: 'genai_delete_agent' }
    ]}
>
<TabItem value="genai_delete_agent">

To delete an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.agents
WHERE uuid = '{{ uuid }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_attach_agent_function"
    values={[
        { label: 'genai_attach_agent_function', value: 'genai_attach_agent_function' },
        { label: 'genai_update_agent_function', value: 'genai_update_agent_function' },
        { label: 'genai_detach_agent_function', value: 'genai_detach_agent_function' },
        { label: 'genai_attach_agent', value: 'genai_attach_agent' },
        { label: 'genai_update_attached_agent', value: 'genai_update_attached_agent' },
        { label: 'genai_detach_agent', value: 'genai_detach_agent' },
        { label: 'genai_update_agent_deployment_visibility', value: 'genai_update_agent_deployment_visibility' }
    ]}
>
<TabItem value="genai_attach_agent_function">

To create a function route for an agent, send a POST request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/functions`.

```sql
EXEC digitalocean.genai.agents.genai_attach_agent_function 
@agent_uuid='{{ agent_uuid }}' --required 
@@json=
'{
"agent_uuid": "{{ agent_uuid }}", 
"description": "{{ description }}", 
"faas_name": "{{ faas_name }}", 
"faas_namespace": "{{ faas_namespace }}", 
"function_name": "{{ function_name }}", 
"input_schema": "{{ input_schema }}", 
"output_schema": "{{ output_schema }}"
}';
```
</TabItem>
<TabItem value="genai_update_agent_function">

To update the function route, send a PUT request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/functions/&#123;function_uuid&#125;`.

```sql
EXEC digitalocean.genai.agents.genai_update_agent_function 
@agent_uuid='{{ agent_uuid }}' --required, 
@function_uuid='{{ function_uuid }}' --required 
@@json=
'{
"agent_uuid": "{{ agent_uuid }}", 
"description": "{{ description }}", 
"faas_name": "{{ faas_name }}", 
"faas_namespace": "{{ faas_namespace }}", 
"function_name": "{{ function_name }}", 
"function_uuid": "{{ function_uuid }}", 
"input_schema": "{{ input_schema }}", 
"output_schema": "{{ output_schema }}"
}';
```
</TabItem>
<TabItem value="genai_detach_agent_function">

To delete a function route from an agent, send a DELETE request to `/v2/gen-ai/agents/&#123;agent_uuid&#125;/functions/&#123;function_uuid&#125;`.

```sql
EXEC digitalocean.genai.agents.genai_detach_agent_function 
@agent_uuid='{{ agent_uuid }}' --required, 
@function_uuid='{{ function_uuid }}' --required;
```
</TabItem>
<TabItem value="genai_attach_agent">

To add an agent route to an agent, send a POST request to `/v2/gen-ai/agents/&#123;parent_agent_uuid&#125;/child_agents/&#123;child_agent_uuid&#125;`.

```sql
EXEC digitalocean.genai.agents.genai_attach_agent 
@parent_agent_uuid='{{ parent_agent_uuid }}' --required, 
@child_agent_uuid='{{ child_agent_uuid }}' --required 
@@json=
'{
"child_agent_uuid": "{{ child_agent_uuid }}", 
"if_case": "{{ if_case }}", 
"parent_agent_uuid": "{{ parent_agent_uuid }}", 
"route_name": "{{ route_name }}"
}';
```
</TabItem>
<TabItem value="genai_update_attached_agent">

To update an agent route for an agent, send a PUT request to `/v2/gen-ai/agents/&#123;parent_agent_uuid&#125;/child_agents/&#123;child_agent_uuid&#125;`.

```sql
EXEC digitalocean.genai.agents.genai_update_attached_agent 
@parent_agent_uuid='{{ parent_agent_uuid }}' --required, 
@child_agent_uuid='{{ child_agent_uuid }}' --required 
@@json=
'{
"child_agent_uuid": "{{ child_agent_uuid }}", 
"if_case": "{{ if_case }}", 
"parent_agent_uuid": "{{ parent_agent_uuid }}", 
"route_name": "{{ route_name }}", 
"uuid": "{{ uuid }}"
}';
```
</TabItem>
<TabItem value="genai_detach_agent">

To delete an agent route from a parent agent, send a DELETE request to `/v2/gen-ai/agents/&#123;parent_agent_uuid&#125;/child_agents/&#123;child_agent_uuid&#125;`.

```sql
EXEC digitalocean.genai.agents.genai_detach_agent 
@parent_agent_uuid='{{ parent_agent_uuid }}' --required, 
@child_agent_uuid='{{ child_agent_uuid }}' --required;
```
</TabItem>
<TabItem value="genai_update_agent_deployment_visibility">

Check whether an agent is public or private. To update the agent status, send a PUT request to `/v2/gen-ai/agents/&#123;uuid&#125;/deployment_visibility`.

```sql
EXEC digitalocean.genai.agents.genai_update_agent_deployment_visibility 
@uuid='{{ uuid }}' --required 
@@json=
'{
"uuid": "{{ uuid }}", 
"visibility": "{{ visibility }}"
}';
```
</TabItem>
</Tabs>
