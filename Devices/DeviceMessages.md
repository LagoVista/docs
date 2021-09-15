---
title: Device Messages
keywords: device, devicerepo, azureiothub

status: inprocess
created: 20170922
updated: 20210823
createdby: bytemaster-0xff
updatedby: JennyWrenWolf
---
[Home](../Index.md) > [Devices](Index.md)

# Messages

## Definition

IoT is all about [Devices](./Devices/Index.md) and the Cloud communicating.  These conversations are made up of Messages that share data and initiate actions. They generally consist four parts

- [Device ID](./) which identifies what specific Device is sending the Message
- Message Destinition - Address - Where the Message is going
- [Message ID](./) identifing what type of Message is being sent
- [Payload](./) which is specific values.


Messages are created in the NuvIoT Studio as independent objects and are assigned a Message ID.  That means that a single Message ID may be used in a variety of situations.  If using an off the shelf Device Type (which is a pre-constructed unit with sensors and control boards), you will probably not have the ability to change the message format.

<br>

- ### **Message ID**
  The Message ID is a vital part of the Message as it identifies how the Message is to be processed.  There is a one-to-one mapping between a Message ID and a [Route](./), 

  Most of the messages are simple in that just the Message ID will identify everything we need to know about the message. 
   this will be used to uniquely identify the type of message so we can define how it should be processed on the server.  Identifies Route.  .  Routes have a one-to-one mapping between a message and a device configuration

  <br>

## Example

<br>

## Related Terms
- Device Message
- Pipeline Execution Message (PEM)
- Sample Message
- Planner
- Verifier





  

