---
title: Basic Access Authorization
keywords: messaging, devices, security, authorization, basic authentication, security fields

status: readyforreview
created: 20171112
updated: 20171112
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Basic access authorization

A simple, yet less secure mechanism of authentication is to use [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

Using this mechanism the device id and either the primary or secondary access keys are concatenated and separated wih a colon (:).  The resulting
string is then [base 64](https://en.wikipedia.org/wiki/Base64) encoded and sent as the [security field](SecurityFields.md).

An exmple of this for the user id `Aladdin` and primary key of `OpenSesame` would be a combinded string of
```
Aladdin:OpenSesame
```

After the string has been base 64 encoded the resulting security field would be:
```
QWxhZGRpbjpPcGVuU2VzYW1l
```

**Note** When sending the encoded string you will **not** add `Basic` as in an HTTP Header.
```
/* This is used in HTTP(S) headers NOT with a security field */
Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l
```

### Using REST Listeners
If you are using a [REST Listener](../PipelineModules/Listeners/Rest.md) you can configure it to use basic authentication
but your user id and password will be the same for all connections.  If you wish to do per-device authentication using 
a REST listener and basic auth in the HTTP headers use the following mechanism:
1) Configure [sentintel](../PipelineModules/Sentinel.md) to use Basic access authorization.
2) Configure the [security field locator](LocatingSecurityField.md) to [search in the headers](../Messaging/Parsing/ParsingFromHeader.md).
3) Search for an `Authorization` header and use the **RegEx Value Selector** to extract your base 64 encoded basic access authorization value. 



 