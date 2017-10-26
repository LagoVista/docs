---
title: Azure Service Bus
keywords: transmitter, cloud, azure, servicebus, messagequeue, topics

status: approved
created: 20171019
updated: 20171019
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Transmitters](../Transmitter.md)

# Azure Service Bus Transmitter

You can easily send messages to an [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) server for external process.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any transmitter, the following fields are required:

* **Transmitter Type** (required)  
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
