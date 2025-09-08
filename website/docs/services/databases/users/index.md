--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - databases
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>users</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_user"
    values={[
        { label: 'databases_get_user', value: 'databases_get_user' },
        { label: 'databases_list_users', value: 'databases_list_users' }
    ]}
>
<TabItem value="databases_get_user">

A JSON object with a key of `user`.

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
    <td>The name of a database user. (example: app-01)</td>
</tr>
<tr>
    <td><CopyableCode code="access_cert" /></td>
    <td><code>string</code></td>
    <td>Access certificate for TLS client authentication. (Kafka only) (example: -----BEGIN CERTIFICATE-----<br />MIIFFjCCA/6gAwIBAgISA0AznUJmXhu08/89ZuSPC/kRMA0GCSqGSIb3DQEBCwUA<br />MEoxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MSMwIQYDVQQD<br />ExpMZXQncyBFbmNyeXB0IEF1dGhvcml0eSBYMzAeFw0xNjExMjQwMDIzMDBaFw0x<br />NzAyMjIwMDIzMDBaMCQxIjAgBgNVBAMTGWNsb3VkLmFuZHJld3NvbWV0aGluZy5j<br />b20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDBIZMz8pnK6V52SVf+<br />CYssOfCQHAx5f0Ou5rYbq3xNh8VWHIYJCQ1QxQIxKSP6+uODSYrb2KWyurP1DwGb<br />8OYm0J3syEDtCUQik1cpCzpeNlAZ2f8FzXyYQAqPopxdRpsFz8DtZnVvu86XwrE4<br />oFPl9MReICmZfBNWylpV5qgFPoXyJ70ZAsTm3cEe3n+LBXEnY4YrVDRWxA3wZ2mz<br />Z03HZ1hHrxK9CMnS829U+8sK+UneZpCO7yLRPuxwhmps0wpK/YuZZfRAKF1FZRna<br />k/SIQ28rnWufmdg16YqqHgl5JOgnb3aslKRvL4dI2Gwnkd2IHtpZnTR0gxFXfqqb<br />QwuRAgMBAAGjggIaMIICFjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYB<br />BQUHAwEGCCsGAQUFBwMCMAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFLsAFcxAhFX1<br />MbCnzr9hEO5rL4jqMB8GA1UdIwQYMBaAFKhKamMEfd265tE5t6ZFZe/zqOyhMHAG<br />CCsGAQUFBwEBBGQwYjAvBggrBgEFBQcwAYYjaHR0cDovL29jc3AuaW50LXgzLmxl<br />dHNlbmNyeXB0Lm9yZy8wLwYIKwYBBQUHMAKGI2h0dHA6Ly9jZXJ0LmludC14My5s<br />ZXRzZW5jcnlwdC5vcmcvMCQGA1UdEQQdMBuCGWNsb3VkLmFuZHJld3NvbWV0aGlu<br />Zy5jb20wgf4GA1UdIASB9jCB8zAIBgZngQwBAgWrgeYGCysGAQQBgt8TAQEBMIHW<br />MCYGCCsGAQUFBwIBFhpodHRwOi8vY3BzLmxldHNlbmNyeXB0Lm9yZzCBqwYIKwYB<br />BQUHAgIwgZ4MgZtUaGlzIENlcnRpZmljYXRlIG1heSBvbmx5IGJlIHJlbGllZCB1<br />cG9uIGJ5IFJlbHlpbmcgUGFydGllcyBhbmQgb25seSQ2ziBhY2NvcmRhbmNlIHdp<br />dGggdGhlIENlcnRpZmljYXRlIFBvbGljeSBmb3VuZCBhdCBodHRwczovL2xldHNl<br />bmNyeXB0Lm9yZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEAOZVQvrjM<br />PKXLARTjB5XsgfyDN3/qwLl7SmwGkPe+B+9FJpfScYG1JzVuCj/SoaPaK34G4x/e<br />iXwlwOXtMOtqjQYzNu2Pr2C+I+rVmaxIrCUXFmC205IMuUBEeWXG9Y/HvXQLPabD<br />D3Gdl5+Feink9SDRP7G0HaAwq13hI7ARxkL9p+UIY39X0dV3WOboW2Re8nrkFXJ7<br />q9Z6shK5QgpBfsLjtjNsQzaGV3ve1gOg25aTJGearBWOvEjJNA1wGMoKVXOtYwm/<br />WyWoVdCQ8HmconcbJB6xc0UZ1EjvzRr5ZIvSa5uHZD0L3m7/kpPWlAlFJ7hHASPu<br />UlF1zblDmg2Iaw==<br />-----END CERTIFICATE-----)</td>
</tr>
<tr>
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>Access key for TLS client authentication. (Kafka only) (example: -----BEGIN PRIVATE KEY-----<br />MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBIZMz8pnK6V52<br />SVf+CYssOfCQHAx5f0Ou5rYbq3xNh8VHAIYJCQ1QxQIxKSP6+uODSYrb2KWyurP1<br />DwGb8OYm0J3syEDtCUQik1cpCzpeNlAZ2f8FzXyYQAqPopxdRpsFz8DtZnVvu86X<br />wrE4oFPl9MReICmZfBNWylpV5qgFPoXyJ70ZAsTm3cEe3n+LBXEnY4YrVDRWxA3w<br />Z2mzZ03HZ1hHrxK9CMnS829U+8sK+UneZpCO7yLRPuxwhmps0wpK/YuZZfRAKF1F<br />ZRnak/SIQ28rnWufmdg16YqqHgl5JOgnb3aslKRvL4dI2Gwnkd2IHtpZnTR0gxFX<br />fqqbQwuRAgMBAAECggEBAILLmkW0JzOkmLTDNzR0giyRkLoIROqDpfLtjKdwm95l<br />9NUBJcU4vCvXQITKt/NhtnNTexcowg8pInb0ksJpg3UGE+4oMNBXVi2UW5MQZ5cm<br />cVkQqgXkBF2YAY8FMaB6EML+0En2+dGR/3gIAr221xsFiXe1kHbB8Nb2c/d5HpFt<br />eRpLVJnK+TxSr78PcZA8DDGlSgwvgimdAaFUNO2OqB9/0E9UPyKk2ycdff/Z6ldF<br />0hkCLtdYTTl8Kf/OwjcuTgmA2O3Y8/CoQX/L+oP9Rvt9pWCEfuebiOmHJVPO6Y6x<br />gtQVEXwmF1pDHH4Qtz/e6UZTdYeMl9G4aNO2CawwcaYECgYEA57imgSOG4XsJLRh<br />GGncV9R/xhy4AbDWLtAMzQRX4ktvKCaHWyQV2XK2we/cu29NLv2Y89WmerTNPOU+<br />P8+pB31uty2ELySVn15QhKpQClVEAlxCnnNjXYrii5LOM80+lVmxvQwxVd8Yz8nj<br />IntyioXNBEnYS7V2RxxFGgFun1cCgYEA1V3W+Uyamhq8JS5EY0FhyGcXdHd70K49<br />W1ou7McIpncf9tM9acLS1hkI98rd2T69Zo8mKoV1V2hjFaKUYfNys6tTkYWeZCcJ<br />3rW44j9DTD+FmmjcX6b8DzfybGLehfNbCw6n67/r45DXIV/fk6XZfkx6IEGO4ODt<br />Nfnvx4TuI1cCgYBACDiKqwSUvmkUuweOo4IuCxyb5Ee8v98P5JIE/VRDxlCbKbpx<br />pxEam6aBBQVcDi+n8o0H3WjjlKc6UqbW/01YMoMrvzotxNBLz8Y0QtQHZvR6KoCG<br />RKCKstxTcWflzKuknbqN4RapAhNbKBDJ8PMSWfyDWNyaXzSmBdvaidbF1QKBgDI0<br />o4oD0Xkjg1QIYAUu9FBQmb9JAjRnW36saNBEQS/SZg4RRKknM683MtoDvVIKJk0E<br />sAlfX+4SXQZRPDMUMtA+Jyrd0xhj6zmhbwClvDMr20crF3fWdgcqtft1BEFmsuyW<br />JUMe5OWmRkjPI2+9ncDPRAllA7a8lnSV/Crph5N/AoGBAIK249temKrGe9pmsmAo<br />QbNuYSmwpnMoAqdHTrl70HEmK7ob6SIVmsR8QFAkH7xkYZc4Bxbx4h1bdpozGB+/<br />AangbiaYJcAOD1QyfiFbflvI1RFeHgrk7VIafeSeQv6qu0LLMi2zUbpgVzxt78Wg<br />eTuK2xNR0PIM8OI7pRpgyj1I<br />-----END PRIVATE KEY-----)</td>
</tr>
<tr>
    <td><CopyableCode code="mysql_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>A randomly generated password for the database user.<br />Requires `database:view_credentials` scope. (example: jge5lfxtzhx42iff)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>A string representing the database user's role. The value will be either "primary" or "normal".  (example: normal)</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="databases_list_users">

A JSON object with a key of `users`.

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
    <td>The name of a database user. (example: app-01)</td>
</tr>
<tr>
    <td><CopyableCode code="access_cert" /></td>
    <td><code>string</code></td>
    <td>Access certificate for TLS client authentication. (Kafka only) (example: -----BEGIN CERTIFICATE-----<br />MIIFFjCCA/6gAwIBAgISA0AznUJmXhu08/89ZuSPC/kRMA0GCSqGSIb3DQEBCwUA<br />MEoxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MSMwIQYDVQQD<br />ExpMZXQncyBFbmNyeXB0IEF1dGhvcml0eSBYMzAeFw0xNjExMjQwMDIzMDBaFw0x<br />NzAyMjIwMDIzMDBaMCQxIjAgBgNVBAMTGWNsb3VkLmFuZHJld3NvbWV0aGluZy5j<br />b20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDBIZMz8pnK6V52SVf+<br />CYssOfCQHAx5f0Ou5rYbq3xNh8VWHIYJCQ1QxQIxKSP6+uODSYrb2KWyurP1DwGb<br />8OYm0J3syEDtCUQik1cpCzpeNlAZ2f8FzXyYQAqPopxdRpsFz8DtZnVvu86XwrE4<br />oFPl9MReICmZfBNWylpV5qgFPoXyJ70ZAsTm3cEe3n+LBXEnY4YrVDRWxA3wZ2mz<br />Z03HZ1hHrxK9CMnS829U+8sK+UneZpCO7yLRPuxwhmps0wpK/YuZZfRAKF1FZRna<br />k/SIQ28rnWufmdg16YqqHgl5JOgnb3aslKRvL4dI2Gwnkd2IHtpZnTR0gxFXfqqb<br />QwuRAgMBAAGjggIaMIICFjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYB<br />BQUHAwEGCCsGAQUFBwMCMAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFLsAFcxAhFX1<br />MbCnzr9hEO5rL4jqMB8GA1UdIwQYMBaAFKhKamMEfd265tE5t6ZFZe/zqOyhMHAG<br />CCsGAQUFBwEBBGQwYjAvBggrBgEFBQcwAYYjaHR0cDovL29jc3AuaW50LXgzLmxl<br />dHNlbmNyeXB0Lm9yZy8wLwYIKwYBBQUHMAKGI2h0dHA6Ly9jZXJ0LmludC14My5s<br />ZXRzZW5jcnlwdC5vcmcvMCQGA1UdEQQdMBuCGWNsb3VkLmFuZHJld3NvbWV0aGlu<br />Zy5jb20wgf4GA1UdIASB9jCB8zAIBgZngQwBAgWrgeYGCysGAQQBgt8TAQEBMIHW<br />MCYGCCsGAQUFBwIBFhpodHRwOi8vY3BzLmxldHNlbmNyeXB0Lm9yZzCBqwYIKwYB<br />BQUHAgIwgZ4MgZtUaGlzIENlcnRpZmljYXRlIG1heSBvbmx5IGJlIHJlbGllZCB1<br />cG9uIGJ5IFJlbHlpbmcgUGFydGllcyBhbmQgb25seSQ2ziBhY2NvcmRhbmNlIHdp<br />dGggdGhlIENlcnRpZmljYXRlIFBvbGljeSBmb3VuZCBhdCBodHRwczovL2xldHNl<br />bmNyeXB0Lm9yZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEAOZVQvrjM<br />PKXLARTjB5XsgfyDN3/qwLl7SmwGkPe+B+9FJpfScYG1JzVuCj/SoaPaK34G4x/e<br />iXwlwOXtMOtqjQYzNu2Pr2C+I+rVmaxIrCUXFmC205IMuUBEeWXG9Y/HvXQLPabD<br />D3Gdl5+Feink9SDRP7G0HaAwq13hI7ARxkL9p+UIY39X0dV3WOboW2Re8nrkFXJ7<br />q9Z6shK5QgpBfsLjtjNsQzaGV3ve1gOg25aTJGearBWOvEjJNA1wGMoKVXOtYwm/<br />WyWoVdCQ8HmconcbJB6xc0UZ1EjvzRr5ZIvSa5uHZD0L3m7/kpPWlAlFJ7hHASPu<br />UlF1zblDmg2Iaw==<br />-----END CERTIFICATE-----)</td>
</tr>
<tr>
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>Access key for TLS client authentication. (Kafka only) (example: -----BEGIN PRIVATE KEY-----<br />MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBIZMz8pnK6V52<br />SVf+CYssOfCQHAx5f0Ou5rYbq3xNh8VHAIYJCQ1QxQIxKSP6+uODSYrb2KWyurP1<br />DwGb8OYm0J3syEDtCUQik1cpCzpeNlAZ2f8FzXyYQAqPopxdRpsFz8DtZnVvu86X<br />wrE4oFPl9MReICmZfBNWylpV5qgFPoXyJ70ZAsTm3cEe3n+LBXEnY4YrVDRWxA3w<br />Z2mzZ03HZ1hHrxK9CMnS829U+8sK+UneZpCO7yLRPuxwhmps0wpK/YuZZfRAKF1F<br />ZRnak/SIQ28rnWufmdg16YqqHgl5JOgnb3aslKRvL4dI2Gwnkd2IHtpZnTR0gxFX<br />fqqbQwuRAgMBAAECggEBAILLmkW0JzOkmLTDNzR0giyRkLoIROqDpfLtjKdwm95l<br />9NUBJcU4vCvXQITKt/NhtnNTexcowg8pInb0ksJpg3UGE+4oMNBXVi2UW5MQZ5cm<br />cVkQqgXkBF2YAY8FMaB6EML+0En2+dGR/3gIAr221xsFiXe1kHbB8Nb2c/d5HpFt<br />eRpLVJnK+TxSr78PcZA8DDGlSgwvgimdAaFUNO2OqB9/0E9UPyKk2ycdff/Z6ldF<br />0hkCLtdYTTl8Kf/OwjcuTgmA2O3Y8/CoQX/L+oP9Rvt9pWCEfuebiOmHJVPO6Y6x<br />gtQVEXwmF1pDHH4Qtz/e6UZTdYeMl9G4aNO2CawwcaYECgYEA57imgSOG4XsJLRh<br />GGncV9R/xhy4AbDWLtAMzQRX4ktvKCaHWyQV2XK2we/cu29NLv2Y89WmerTNPOU+<br />P8+pB31uty2ELySVn15QhKpQClVEAlxCnnNjXYrii5LOM80+lVmxvQwxVd8Yz8nj<br />IntyioXNBEnYS7V2RxxFGgFun1cCgYEA1V3W+Uyamhq8JS5EY0FhyGcXdHd70K49<br />W1ou7McIpncf9tM9acLS1hkI98rd2T69Zo8mKoV1V2hjFaKUYfNys6tTkYWeZCcJ<br />3rW44j9DTD+FmmjcX6b8DzfybGLehfNbCw6n67/r45DXIV/fk6XZfkx6IEGO4ODt<br />Nfnvx4TuI1cCgYBACDiKqwSUvmkUuweOo4IuCxyb5Ee8v98P5JIE/VRDxlCbKbpx<br />pxEam6aBBQVcDi+n8o0H3WjjlKc6UqbW/01YMoMrvzotxNBLz8Y0QtQHZvR6KoCG<br />RKCKstxTcWflzKuknbqN4RapAhNbKBDJ8PMSWfyDWNyaXzSmBdvaidbF1QKBgDI0<br />o4oD0Xkjg1QIYAUu9FBQmb9JAjRnW36saNBEQS/SZg4RRKknM683MtoDvVIKJk0E<br />sAlfX+4SXQZRPDMUMtA+Jyrd0xhj6zmhbwClvDMr20crF3fWdgcqtft1BEFmsuyW<br />JUMe5OWmRkjPI2+9ncDPRAllA7a8lnSV/Crph5N/AoGBAIK249temKrGe9pmsmAo<br />QbNuYSmwpnMoAqdHTrl70HEmK7ob6SIVmsR8QFAkH7xkYZc4Bxbx4h1bdpozGB+/<br />AangbiaYJcAOD1QyfiFbflvI1RFeHgrk7VIafeSeQv6qu0LLMi2zUbpgVzxt78Wg<br />eTuK2xNR0PIM8OI7pRpgyj1I<br />-----END PRIVATE KEY-----)</td>
</tr>
<tr>
    <td><CopyableCode code="mysql_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>A randomly generated password for the database user.<br />Requires `database:view_credentials` scope. (example: jge5lfxtzhx42iff)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>A string representing the database user's role. The value will be either "primary" or "normal".  (example: normal)</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
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
    <td><a href="#databases_get_user"><CopyableCode code="databases_get_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>To show information about an existing database user, send a GET request to<br />`/v2/databases/$DATABASE_ID/users/$USERNAME`.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a `user` key. This will be set to an object<br />containing the standard database user attributes. The user's password will not show<br />up unless the `database:view_credentials` scope is present.<br /><br />For MySQL clusters, additional options will be contained in the `mysql_settings`<br />object.<br /><br />For Kafka clusters, additional options will be contained in the `settings` object.<br /><br />For MongoDB clusters, additional information will be contained in the mongo_user_settings object<br /></td>
</tr>
<tr>
    <td><a href="#databases_list_users"><CopyableCode code="databases_list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To list all of the users for your database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/users`.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br /><br />The result will be a JSON object with a `users` key. This will be set to an array<br />of database user objects, each of which will contain the standard database user attributes.<br />User passwords will not show without the `database:view_credentials` scope.<br /><br />For MySQL clusters, additional options will be contained in the mysql_settings object.<br /><br />For MongoDB clusters, additional information will be contained in the mongo_user_settings object<br /></td>
</tr>
<tr>
    <td><a href="#databases_add_user"><CopyableCode code="databases_add_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-data__name"><code>data__name</code></a></td>
    <td></td>
    <td>To add a new database user, send a POST request to `/v2/databases/$DATABASE_ID/users`<br />with the desired username.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br /><br />When adding a user to a MySQL cluster, additional options can be configured in the<br />`mysql_settings` object.<br /><br />When adding a user to a Kafka cluster, additional options can be configured in<br />the `settings` object.<br /><br /> When adding a user to a MongoDB cluster, additional options can be configured in<br />the `settings.mongo_user_settings` object.<br /><br />The response will be a JSON object with a key called `user`. The value of this will be an<br />object that contains the standard attributes associated with a database user including<br />its randomly generated password.<br /></td>
</tr>
<tr>
    <td><a href="#databases_update_user"><CopyableCode code="databases_update_user" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-data__settings"><code>data__settings</code></a></td>
    <td></td>
    <td>To update an existing database user, send a PUT request to `/v2/databases/$DATABASE_ID/users/$USERNAME`<br />with the desired settings.<br /><br />**Note**: only `settings` can be updated via this type of request. If you wish to change the name of a user,<br />you must recreate a new user.<br /><br />The response will be a JSON object with a key called `user`. The value of this will be an<br />object that contains the name of the update database user, along with the `settings` object that<br />has been updated.<br /></td>
</tr>
<tr>
    <td><a href="#databases_delete_user"><CopyableCode code="databases_delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>To remove a specific database user, send a DELETE request to<br />`/v2/databases/$DATABASE_ID/users/$USERNAME`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br /></td>
</tr>
<tr>
    <td><a href="#databases_reset_auth"><CopyableCode code="databases_reset_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>To reset the password for a database user, send a POST request to<br />`/v2/databases/$DATABASE_ID/users/$USERNAME/reset_auth`.<br /><br />For `mysql` databases, the authentication method can be specifying by<br />including a key in the JSON body called `mysql_settings` with the `auth_plugin`<br />value specified.<br /><br />The response will be a JSON object with a `user` key. This will be set to an<br />object containing the standard database user attributes.<br /></td>
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
<tr id="parameter-database_cluster_uuid">
    <td><CopyableCode code="database_cluster_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a database cluster. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The name of the database user. (example: app-01)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_user"
    values={[
        { label: 'databases_get_user', value: 'databases_get_user' },
        { label: 'databases_list_users', value: 'databases_list_users' }
    ]}
>
<TabItem value="databases_get_user">

To show information about an existing database user, send a GET request to<br />`/v2/databases/$DATABASE_ID/users/$USERNAME`.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br /><br />The response will be a JSON object with a `user` key. This will be set to an object<br />containing the standard database user attributes. The user's password will not show<br />up unless the `database:view_credentials` scope is present.<br /><br />For MySQL clusters, additional options will be contained in the `mysql_settings`<br />object.<br /><br />For Kafka clusters, additional options will be contained in the `settings` object.<br /><br />For MongoDB clusters, additional information will be contained in the mongo_user_settings object<br />

```sql
SELECT
name,
access_cert,
access_key,
mysql_settings,
password,
role,
settings
FROM digitalocean.databases.users
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
AND username = '{{ username }}' -- required;
```
</TabItem>
<TabItem value="databases_list_users">

To list all of the users for your database cluster, send a GET request to<br />`/v2/databases/$DATABASE_ID/users`.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br /><br />The result will be a JSON object with a `users` key. This will be set to an array<br />of database user objects, each of which will contain the standard database user attributes.<br />User passwords will not show without the `database:view_credentials` scope.<br /><br />For MySQL clusters, additional options will be contained in the mysql_settings object.<br /><br />For MongoDB clusters, additional information will be contained in the mongo_user_settings object<br />

```sql
SELECT
name,
access_cert,
access_key,
mysql_settings,
password,
role,
settings
FROM digitalocean.databases.users
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="databases_add_user"
    values={[
        { label: 'databases_add_user', value: 'databases_add_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="databases_add_user">

To add a new database user, send a POST request to `/v2/databases/$DATABASE_ID/users`<br />with the desired username.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br /><br />When adding a user to a MySQL cluster, additional options can be configured in the<br />`mysql_settings` object.<br /><br />When adding a user to a Kafka cluster, additional options can be configured in<br />the `settings` object.<br /><br /> When adding a user to a MongoDB cluster, additional options can be configured in<br />the `settings.mongo_user_settings` object.<br /><br />The response will be a JSON object with a key called `user`. The value of this will be an<br />object that contains the standard attributes associated with a database user including<br />its randomly generated password.<br />

```sql
INSERT INTO digitalocean.databases.users (
data__name,
data__mysql_settings,
data__settings,
data__readonly,
database_cluster_uuid
)
SELECT 
'{{ name }}' --required,
'{{ mysql_settings }}',
'{{ settings }}',
{{ readonly }},
'{{ database_cluster_uuid }}'
RETURNING
user
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: users
  props:
    - name: database_cluster_uuid
      value: string (uuid)
      description: Required parameter for the users resource.
    - name: name
      value: string
      description: >
        The name of a database user.
        
    - name: mysql_settings
      value: object
    - name: settings
      value: object
    - name: readonly
      value: boolean
      description: >
        (To be deprecated: use settings.mongo_user_settings.role instead for access controls to MongoDB databases). 
For MongoDB clusters, set to `true` to create a read-only user.
This option is not currently supported for other database engines.
           

```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_user"
    values={[
        { label: 'databases_update_user', value: 'databases_update_user' }
    ]}
>
<TabItem value="databases_update_user">

To update an existing database user, send a PUT request to `/v2/databases/$DATABASE_ID/users/$USERNAME`<br />with the desired settings.<br /><br />**Note**: only `settings` can be updated via this type of request. If you wish to change the name of a user,<br />you must recreate a new user.<br /><br />The response will be a JSON object with a key called `user`. The value of this will be an<br />object that contains the name of the update database user, along with the `settings` object that<br />has been updated.<br />

```sql
REPLACE digitalocean.databases.users
SET 
data__settings = '{{ settings }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND username = '{{ username }}' --required
AND data__settings = '{{ settings }}' --required
RETURNING
user;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="databases_delete_user"
    values={[
        { label: 'databases_delete_user', value: 'databases_delete_user' }
    ]}
>
<TabItem value="databases_delete_user">

To remove a specific database user, send a DELETE request to<br />`/v2/databases/$DATABASE_ID/users/$USERNAME`.<br /><br />A status of 204 will be given. This indicates that the request was processed<br />successfully, but that no response body is needed.<br /><br />Note: User management is not supported for Caching or Valkey clusters.<br />

```sql
DELETE FROM digitalocean.databases.users
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND username = '{{ username }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="databases_reset_auth"
    values={[
        { label: 'databases_reset_auth', value: 'databases_reset_auth' }
    ]}
>
<TabItem value="databases_reset_auth">

To reset the password for a database user, send a POST request to<br />`/v2/databases/$DATABASE_ID/users/$USERNAME/reset_auth`.<br /><br />For `mysql` databases, the authentication method can be specifying by<br />including a key in the JSON body called `mysql_settings` with the `auth_plugin`<br />value specified.<br /><br />The response will be a JSON object with a `user` key. This will be set to an<br />object containing the standard database user attributes.<br />

```sql
EXEC digitalocean.databases.users.databases_reset_auth 
@database_cluster_uuid='{{ database_cluster_uuid }}' --required, 
@username='{{ username }}' --required 
@@json=
'{
"mysql_settings": "{{ mysql_settings }}"
}';
```
</TabItem>
</Tabs>
