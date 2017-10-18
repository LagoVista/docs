---
title: Parsing with Topics
keywords: messages, messaging, parsing, regex, regularexpression

status: approved
created: 20170927
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Parsing from Topics

To extract a value from the path, use the following syntax for your Topic Locator:

`/deviceadmin/{deviceid}`

With the above Topic Locator and a path of

`/deviceadmin/device1234`

The value device1234 will be made available to the message with the key as set for this field.

### Special Note for Outgoing Messages

When creating an outgoing message, you can use some tag replacement fields within your topic locator, the two fields that are available are:
* \~deviceid\~ Will insert the current device id into the topic
* \~messageid\~ Will insert the current message id into the topic.

An example of this would be for Device Id `DEV001` and a Topic Locator of:
```
/devices/~deviceid~
```

would send the following topic
```
/devices/DEV001
```
