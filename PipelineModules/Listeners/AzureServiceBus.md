---
title: Azure Service Bus
keywords: listener, cloud, azure, servicebus, messagequeue, topics

status: approved
created: 20170922
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# Azure Service Bus

Azure Service Bus is a good choice for listening for incoming messages, it will allow incredible scale.
For this option, your devices will communicate directly with  [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/)
and NuvIoT will subscribe to that bus to receive messages.  Once the message is received, it can participate in
the standard NuvIoT [Procssing Pipeline](../Index.md), including the Device ID and Message Parsers.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)  
`Azure Service Bus`

* **Content Type** (required)  
Select the [Content Type](../../Messaging/ContentTypes.md) of the message that you are expecting.  All Content Types are acceptable.


* **Host Name** (required)  
The Host Name of the Service Resource you created in Azure.  For example in
```sb://myeventhub.servicebus.windows.net``` the Host Name would be ```myeventhub.servicebus.windows.net```

* **Queue** (required)     
The name of the [Service Bus Queue](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions) to listen on.

* **Access Key Name** (required)   
Enter the name of the Access Key (similar to iothubowner, services).  It is important that your key has `service connect` permissions.

* **Access Key**  (required)    
Enter the assigned Access Key for your IoT Hub that was specified in the **Access Key Name** section.


