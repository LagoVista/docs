---
title: Access Key Authorization
keywords:  messaging, devices, security, authorization, access key authorization

status: readyforreview
created: 20171112
updated: 20171112
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Access Key Authorization

Although not very secure without [transport layer security](https://en.wikipedia.org/wiki/Transport_Layer_Security) (TLS)
a simple method to authorize your device is to look for either the primary or secondary access keys as 
[security fields](SecurityFields.md) within your message.

The keys must be sent in plain text and you can use the [security field locator](LocatingSecurityField.md) to find them.

To use access key authorization you can use the generated base 64 keys as part of adding a device, or your can add your own
custom access keys.

 