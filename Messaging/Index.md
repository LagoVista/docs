---
title: Device Messaging
keywords: messages, messaging, devices

status: approved
created: 20170927
updated: 20210824
createdby: bytemaster-0xff
updatedby: JennyWrenWolf
---
[Home](../Index.md)

# Message


## Definition
IoT is all about Devices and the Cloud communicating.  These conversations are made up of Messages that share data and initiate actions. They generally consist of four parts:

- [Device ID](./Glossary/DeviceID.md) - which specific [Device](./Glossary/Device.md) sent the message
- Where the message is being sent to      device configuration????????
- [Message ID](./Glossary/MessageID.md) - what type of message is being sent
- [Payload](./Glossary/Payload.md) - the data or value being sent

Messages are formatted in the NuvIoT Studio as independent objects which means that a single [Message ID] may be used in a variety of situations.  If using an off the shelf Device Type (which is a pre-constructed unit with sensors and control boards), you will probably not have the ability to change the message format.

<br>
<br>
<br>

## Example

The *Heat Sensing Conveyor Belt* owned by *Plymouth Manufacturing* began to overheat.  It sent a message to the Cloud stating that HSBelt0012, it's ID number, was sending a message to the Cloud with a temperature reading of 120 degrees.
<br>

## Related Terms
- Device Message
- Pipeline Execution Model




