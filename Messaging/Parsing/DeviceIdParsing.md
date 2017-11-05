---
title: Device Id Parsing
keywords: planner, parsers, messaging, devices, deviceid, routes, deviceconfigurations

status:  inprocess
created: 20170927
updated: 20171010
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Device ID Parsing

To allow for maximum flexibility, your listeners can support monitoring and connecting to many different devices.  
In addition, devices may send different types of messages.  What you do in response to an incoming message is dependent on the 
device sending the message and the Message ID.  Prior to the planner establishing a course of action, the **Device ID**
 must be extracted from the incoming message.

As with extracting values from a message, the **Device ID** can be extracted from the following locations:
* [Headers](ParsingFromHeader.md)
* [Path](ParsingFromPath.md)
* [Topics (Pub/Sub Model)](ParsingFromTopic.md)
* [Query String](ParsingFromQueryString.md)
* [Body or Payload](ParsingFromBody.md)


