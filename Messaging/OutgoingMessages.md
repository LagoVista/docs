---
title: Outgoing Messages
keywords: messaging, messages, receive, outgoing

status: ready
created: 20171018
updated: 20180509
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](Index.md) > [Device Messaging](../Index.md)

# Outgoing Messages


Outgoing Messages are Messages that are generated from the [Output Translator](../PipelineModules/OutputTranslator.md) 
from [Output Commands](../Workflows/OutputCommands.md) within a [device workflow](../Workflows/Index.md) and sent from 
a [Transmitter](../PipelineModules/Transmitter.md).

When you create your **Outgoing Message Defintion** you will need to specify **Message Direction** of either `Outgoing Message` or `Incoming and Outgoing`.

**Note:** _It is important to realize that when you configure your message, you don't specify how it will be sent out, you only define the parameters and values that should be set.  Therefore one message can be sent out to both a REST and MQTT transmitter._

#### Security
When you define your outgoing message you only define the content of the data that should be sent.  You will define any security as to how to connect to your remote servers in the transmitter.

Within the message you have the ability to add additional headers, you can also specify headers in transmitter.  If the same header appears in both places the one associated with the message will be used.

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

Within the path and query string you can send a device id.  To do so, simply use the token `~deviceid~` where you want the device id inserted.

For example a path and query string entered as:
```
/updatestate/~deviceid~/on
```

With a device id of dev001 will be transformed to:
```
/updatestate/dev001/on
```

prior to being sent out.

**Authorization Scheme**
If you provide 

**Authorization Parameter**


**Headers**  
You can provide a set of key value pairs that will be sent along with the header of your message.  This is is primarily applicable to a [REST Transmitter](../PipelineModules/Transmitters/Rest.md).

**Topic**  
A Topic can be provided to be sent along with your message.  This is more applicable to [Message Queue](https://en.wikipedia.org/wiki/Message_queue) based protocols.


Within the topic you can send the device id.  To do so, simply use the token `~deviceid~` where you want the device id inserted.

For example a topic entered as:
```
updatestate/~deviceid~/on
```

With a device id of dev001 will be transformed to:
```
updatestate/dev001/on
```

prior to being sent out.

**REST Method**  
For [REST Transmitter](../PipelineModules/Transmitters/Rest.md) you can provide the method that will be invoked.  If you use a REST Transmitter and do not provide a method, it will be assumed that the method is `GET`.

**Device Id** (required for Azure IoT Hub)  
When creating your outgoing message for Azure IoT Hub, you should set the Device ID in the outgoing message of the device where this message should be sent.

**Output Message Script** (required for JSON messages)  
Add a [script](OutgoingMessageScript.md) that will build up the JSON document that will be sent as the message.

Example:
```
/* 
 * Add a script that will build up an JSON
 * document that will be sent as the payload
 * of your output message.
 * 
 * The fields that you added to your output command
 * will be in a variable called [Fields] and you 
 * access them via their key.
 *
 * An example message may look like:
 *
 * function getOutputMessage() {
 *     return {
 *
 */
function getOutputMessage() {
    return {
        action:Fields.action,
        parameter:Fields.parameter
    };
}
```

In the above example, if the fields action and parameter had values of `forward` and 100 respectively the resulting JSON document that will be sent out looks as follows:
```
{action:'forward', parameter:100}
```
