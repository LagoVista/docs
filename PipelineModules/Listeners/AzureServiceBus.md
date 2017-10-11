---
title: Azure Service Bus
keywords: listener, cloud, azure, servicebus, messagequeue, topics

status: readyforapproval
created: 20170922
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# Azure Service Bus

Azure Service Bus is a good choice for listening for incoming messages, it will allow incredible scale.
For this option, your devices will communicate directly with  [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/)
and NuvIoT will subscribe to that bus to receive messages.  Once the message is received, it can participate in
the standard NuvIoT [Procssing Pipeline](../Index.md), including the Device ID and Message Parsers.

To configure Service Bus, you will need to provide:

* Name of Service Bus
* Shared Access Key

