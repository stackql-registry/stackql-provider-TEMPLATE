---
title: digitalocean
hide_title: false
hide_table_of_contents: false
keywords:
  - digitalocean
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage DigitalOcean resources using SQL
custom_edit_url: null
image: /img/stackql-digitalocean-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

DigitalOcean for managing cloud servers, databases, networking, and storage in a simplified, developer-friendly environment.

:::info[Provider Summary] 

total services: __15__  
total resources: __207__  

:::

See also:   
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * * 

## Installation

To pull the latest version of the `digitalocean` provider, run the following command:  

```bash
REGISTRY PULL digitalocean;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).  

## Authentication

The following system environment variables are used for authentication by default:  

- <CopyableCode code="DIGITALOCEAN_ACCESS_TOKEN" /> - DigitalOcean API token (see <a href="https://docs.digitalocean.com/reference/api/create-personal-access-token/">How to Create a Personal Access Token</a>)
  
These variables are sourced at runtime (from the local machine or as CI variables/secrets).  

<details>

<summary>Using different environment variables</summary>

To use different environment variables (instead of the defaults), use the `--auth` flag of the `stackql` program.  For example:  

```bash

AUTH='{ "digitalocean": { "type": "bearer",  "credentialsenvvar": "YOUR_DIGITALOCEAN_TOKEN_VAR" }}'
stackql shell --auth="${AUTH}"

```
or using PowerShell:  

```powershell

$Auth = "{ 'digitalocean': { 'type': 'bearer',  'credentialsenvvar': 'YOUR_DIGITALOCEAN_TOKEN_VAR' }}"
stackql.exe shell --auth=$Auth

```
</details>

## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/account/">account</a><br />
<a href="/services/apps/">apps</a><br />
<a href="/services/billing/">billing</a><br />
<a href="/services/compute/">compute</a><br />
<a href="/services/container_registry/">container_registry</a><br />
<a href="/services/databases/">databases</a><br />
<a href="/services/genai/">genai</a><br />
<a href="/services/kubernetes/">kubernetes</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/monitoring/">monitoring</a><br />
<a href="/services/network/">network</a><br />
<a href="/services/oneclick/">oneclick</a><br />
<a href="/services/projects/">projects</a><br />
<a href="/services/serverless/">serverless</a><br />
<a href="/services/spaces/">spaces</a><br />
<a href="/services/vpcs/">vpcs</a><br />
</div>
</div>
