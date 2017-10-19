---
title: Azure Service Bus
keywords: transmitter, cloud, azure, servicebus, messagequeue, topics

status: readyforapproval
created: 20171019
updated: 20171019
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Transmitters](../Transmitter.md)

# Azure Service Bus Transmitter

Azure Service Bus is a good choice for listening for incoming messages, it will allow incredible scale.
For this option, your devices will communicate directly with  [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/)
and NuvIoT will subscribe to that bus to receive messages.  Once the message is received, it can participate in
the standard NuvIoT [Procssing Pipeline](../Index.md), including the Device ID and Message Parsers.

To configure Service Bus, you will need to provide:

* Name of Service Bus
* Shared Access Key

