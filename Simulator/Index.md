---
title: Simulator
keywords: simulator, windows, udp, tcp, mqtt, azureiothub, azureeventhub, rest

status: readyforreview
created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md)

# Simulator

To help make your implmentation go smoothly and get you up and running as quickly as possible, NuvIoT offer a free simulator that you
can download from the Windows Store.

A Simulator is also a good option if your physical devices are still in development but want to get a jump start on your server applications.

Creating all simulators has a commmon workflow
1. Create a base simulator that contains the connection and protocol information
2. Add messages, this including the ability to add values to things like headers, topics, query strings, etc...
3. Add dynamic properties that can be modified at run time.

Once you have created your simulator, it will be stored for free on our servers.  Any connection strings or passwords that you define will be stored in our encrypted secure storage.

The simulator isn't specific to our NuvIoT platform, however you will need to create a NuvIoT account so you can store and retreive your simulators and message templates.

#### Simulator Types
The following simulators are available:

* [AMQP](AMQP.md) - Send and Receive Messages from a MQTT Broker
* [Azure Event Hub](AzureEventHub.md) - Send messages to an Azure Event Hub.
* [Azure Service Bus](AzureServiceBus.md) - Send messages to an Azure Service Bus.
* [Azure IoT Hub](AzureIoTHub.md) - Send and Receive Messages from an Azure IoT Event Hub
* [MQTT](MQTT.md) - Send and Receive Messages from a MQTT Broker
* [REST](REST.md) - Send and Receive HTTP(s) GET, POST, PUT and DELETE messages 
* [TCP](TCP.md) - Connect to, and send messages to a simple TCP Server
* [UDP](UDP.md) - Connect to, and send datagrams to a simple UDP Connection

#### Building Messages
To help make the most of your simulator you have some options to build reusable dynamic messages

* [Dynamic Fields](DynamicFields.md) - When you create your message you can use a simple mechanism to do replacement of fields.
* [Standard Fields](StandardFields.md) - A number of standard fields are available to be used to create dynamic messages.

#### Binary Content
Read more about providing [binary content](BinaryContent.md) to be sent with your message.

#### Open Source
The full source is available code has been released as [open source](Opensource.md)