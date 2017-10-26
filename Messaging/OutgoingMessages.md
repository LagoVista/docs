---
title: Outgoing Messages
keywords: messaging, messages, receive, outgoing

status: inprocess
created: 20171018
updated: 20171018
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](Index.md) > [Device Messaging](../Index.md)

# Outgoing Messages

...more details coming soon...

Outgoing Messages are Messages that are generated from the [Output Translator](../PipelineModules/OutputTranslator.md) 
from [Output Commands](../Workflows/OutputCommands.md) within a [device workflow](../Workflows/Index.md) and sent from 
a [Transmitter](../PipelineModules/Transmitter.md).

When you create your **Outgoing Message Defintion** you will need to specify **Message Direction** of either `Outgoing Message` or `Incoming and Outgoing`.

#### Additional Outgoing Message Fields 

If you specify your mesasge as Outgoing you will have some additional options that will be ignored if 
  1. The message definition is used to parse an incoming message or 
  2. The transmitter that is used does not support that field.

An example of the [Transmitter](../PipelineModules/Transmitter.md) not supporting the fields would be sending a message to an [MQTT Transmitter](../PipelineModules/Transmitters/MQTTClient.md) 
and providing a Path or Query String.  In the case of an MQTT transmitter, a Topic will be supported, however a Path and Query String will not.  See details on each Transmitter
for which fields are suppoted.

**Path and Query String**  
You can provide a path and query string that will be used to build a complete URL to send your message.  This is is primarily applicable to a [REST Transmitter](../PipelineModules/Transmitters/Rest.md).
When providing a path you should only provide the path portion and not the domain name or host.  The domain name and host will be provided by the transmitter.

**Headers**  
You can provide a set of key value pairs that will be sent along with the header of your message.  This is is primarily applicable to a [REST Transmitter](../PipelineModules/Transmitters/Rest.md).

**Topic**  
A Topic can be provided to be sent along with your message.  This is more applicable to [Message Queue](https://en.wikipedia.org/wiki/Message_queue) based protocols.

**REST Method**  
For [REST Transmitter](../PipelineModules/Transmitters/Rest.md) you can provide the method that will be invoked.  If you use a REST Transmitter and do not provide a method, it will be assumed that the method is `GET`.

**Device Id** (required for Azure IoT Hub)  
When creating your outgoing message for Azure IoT Hub, you should set the Device ID in the outgoing message of the device where this message should be sent.