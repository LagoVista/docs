---
title: Basic Access Authorization
keywords: messaging, devices, security, authorization, basic authentication, security fields

status: readyforapproval
created: 20171112
updated: 20171120
createdby: bytemaster-0xff
updatedby: klworkman
---
# Basic Access Authorization

A simple yet less secure mechanism of authentication is to use [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

Using this mechanism, the Device ID and either the primary or secondary Access Keys are concatenated and separated wih a colon (:).  The resulting
string is then [Base64](https://en.wikipedia.org/wiki/Base64)-encoded and sent as the [Security Field](SecurityFields.md).

An exmple of this, for User ID `Aladdin` and a Primary Key of `OpenSesame` would be a combinded string of:
```
Aladdin:OpenSesame
```

After the string has been Base64 encoded, the resulting security field would be:
```
QWxhZGRpbjpPcGVuU2VzYW1l
```

**Note:** When sending the encoded string, you will **not** add `Basic` as in an HTTP Header.
```
/* This is used in HTTP(S) headers NOT with a security field */
Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l
```

### Using REST Listeners
If you are using a [REST Listener](../PipelineModules/Listeners/Rest.md), you can configure it to use Basic Authentication
but your User ID and Password will be the same for all connections.  If you wish to do per-device authentication using 
a REST listener and b
Basic Authorization in the HTTP headers, use the following mechanism:
1) Configure [Sentintel](../PipelineModules/Sentinel.md) to use Basic Access
Authorization.
2) Configure the [Security Field Locator](LocatingSecurityField.md) to [Search in the Headers](../Messaging/Parsing/ParsingFromHeader.md).
3) Search for an `Authorization` header and use the **RegEx Value Selector** to extract your Base64-encoded Basic Access Authorization value. 



 
