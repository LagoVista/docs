---
title: Simulator
keywords: simulator, windows, udp, tcp, mqtt, azureiothub, azureeventhub, rest

status: readyforapproval
created: 20171003
updated: 20171017
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md)

# Simulator

To help make your implementation go smoothly and get you up and running as quickly as possible, NuvIoT offers a free Simulator that you
can download from the Windows Store.

A Simulator is also a good option if your physical devices are still in development but you want to get a jump-start on your server applications.

Creating all Simulators has a common workflow, as follows:
1. Create a base Simulator that contains connection and protocol information.
2. Add messages. This includes the ability to add values to things like headers, topics, query strings, etc.
3. Add dynamic properties that can be modified at runtime.

Once you have created your Simulator, it will be stored for free on our servers.  Any connection strings or passwords that you define will be stored in our encrypted secure storage.

The Simulator is not specific to our NuvIoT platform.  However, you will need to create a NuvIoT account so that you can store and retrieve your Simulators and message templates.

#### Simulator Types
The following Simulators are available:

* [AMQP](AMQP.md) - Send and receive messages from a MQTT Broker
* [Azure Event Hub](AzureEventHub.md) - Send messages to an Azure Event Hub
* [Azure Service Bus](AzureServiceBus.md) - Send messages to an Azure Service Bus
* [Azure IoT Hub](AzureIoTHub.md) - Send and receive messages from an Azure IoT Event Hub
* [MQTT](MQTT.md) - Send and receive messages from a MQTT Broker
* [REST](REST.md) - Send and Receive HTTP(s) GET, POST, PUT and DELETE messages 
* [TCP](TCP.md) - Connect to and send messages to a simple TCP Server
* [UDP](UDP.md) - Connect to and send datagrams to a simple UDP Connection

#### Building Messages
To help make the most of your Simulator, you have some options to build reusable dynamic messages, including:

* [Dynamic Fields](DynamicFields.md) - When you create your message, you can use a simple mechanism to do replacement of fields
* [Standard Fields](StandardFields.md) - A number of standard fields are available to be used to create dynamic messages

#### Binary Content
Read more about providing [Binary Content](BinaryContent.md) to be sent with your message.

#### Open Source
The full source is available. Code has been released as [Open Source](Simulator/Opensource.md).

