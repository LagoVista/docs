---
title: Azure Service Bus
keywords: listener, cloud, azure, servicebus, messagequeue, topics

created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# Azure Service Bus

Selecting Azure Service Bus is a good choice to listen for incoming messages that will allow incredible scale.
For this option your devices will communicate directly with  [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/)
and NuvIoT will subscribe to that bus to receive messages.  Once the message is received it can participate in
the standard NuvIoT [Procssing Pipeline](../Index.md) including the device id and message parsers.

To configure Serivce Bus you will need to provide:

1.  Name of Service Bus
1.  Shared Access Key

