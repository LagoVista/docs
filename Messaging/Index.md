---
title: Device Messaging
keywords: messages, messaging, devices

status: approved
created: 20170927
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md)

# Device Messaging

Devices communicate with servers by sending and receiving messages.  You should define all messages
that you want your application to send and receive.  As part of this, you will define the format that your message will use.
Examples of formats include: JSON, XML, Binary, Delimited, etc.  

To help get you started, complete the following steps:
1. Create samples of the messages to be used in both verifiers and simulators.
2. Define the fields that make up your messages as well as how those fields should be extracted or parsed.
3. As an optional step, create verifiers to check your parsers without even having your device send messages.

After you have created your messages, you can use them as a basis for building simulators to test out your system
flow prior to bringing real devices online.

Messages can either be [received from a device](IncomingMessages.md) from a [Listener](../PipelineModules/Listener.md) or [sent to a server or service](OutgoingMessages.md) from a [Transmitter](../PipelineModules/Transmitter.md).


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

