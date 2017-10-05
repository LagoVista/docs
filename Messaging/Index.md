---
title: Device Messaging
keywords: messages, messaging, devices

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md)

# Device Messaging

Devices communicate with the servers by sending and receiving messages.  You should define all messages
that you want your application to send and receive.  As part of this, you will define the format that your message will use.
Examples of formats include: JSON, XML, Binary, Delimited, etc.  

To help get you started, complete the following steps:
1. Create samples of the messages to be used in both verifiers and simulators.
2. Define the fields that make up your messages as well as how those fields should be extracted or parsed.
3. As an optional step, create verifiers to check your parsers without even having your device send messages.

After you have created your messaages, you can use them as a basis to build simulators to test out your system
flow prior to bringing real devices online.


## Topics

[Parsing Index](Parsing/Index.md)

[Overview](Parsing/Overview.md)

[Content Types](ContentTypes.md)

[Message Fields](MessageFields.md)

[Parsing Strategies](Parsing/ParsingStrategies.md)

[State Sets](./TypeSystem/StatesAndEnums.md)

[Type System](./TypeSystem/Index.md)

[Unit Sets](./TypeSystem/ValueWithUnits.md)

[Verifiers](./Parsing/Verifiers.md)

