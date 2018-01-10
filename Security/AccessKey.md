---
title: Access Key Authorization
keywords:  messaging, devices, security, authorization, access key authorization

status: readyforapproval
created: 20171112
updated: 20171120
createdby: bytemaster-0xff
updatedby: klworkman
---
# Access Key Authorization

Although not very secure without [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) (TLS),
a simple method to authorize your device is to look for either the primary or secondary Access Keys as 
[Security Fields](SecurityFields.md) within your message.

The keys must be sent in plain text. Use the [Security Field Locator](LocatingSecurityField.md) to find them.

To implement Access Key Authorization, use the generated Base64 keys as part of adding a device.  You can also add your own
custom access keys.

 
