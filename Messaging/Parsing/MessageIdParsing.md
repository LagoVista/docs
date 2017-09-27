---
title: Message Id Parsing
keywords: planner, parsers, messaging, messageid, routes, deviceconfigurations

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Message Id Parsing

To allow for maximum flexibility your listeners can support monitoring and connecting to many different devices.  In addition 
devices may send different types of messages.  What you do in response to an incoming message is dependent on the
device sending the message and the message id.  Prior to the Planner establishing a course of action the Message Id
and Device Id must be extracted from the incoming message.

As with extracting values from a message the message and device id's can be extracted from the following locations
* Headers
* Path
* Topics (Pub/Sub Model)
* Query String 
* Body or Payload

