---
title: Device Id Parsing
keywords: planner, parsers, messaging, devices, deviceid, routes, deviceconfigurations

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Device ID Parsing

To allow for maximum flexibility, your listeners can support monitoring and connecting to many different devices.  In addition, devices 
may send different types of messages.  What you do in response to an incoming message is dependent on the 
device sending the message and the Message ID.  Prior to the Planner establishing a course of action, the Message ID and 
Device ID must be extracted from the incoming message.

As with extracting values from a message, the Message and Device IDs can be extracted from the following locations:
* Headers
* Path
* Query String 
* Body or Payload

