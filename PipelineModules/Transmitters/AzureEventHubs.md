---
title: Azure Event Hubs Transmitter
keywords: transmitter, cloud, azure, eventhub, messagequeue

status: readyforapproval
created: 20171019
updated: 20171019
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Transmitters](../Transmitter.md)

# Azure Event Hubs Transmitter

You can provide a link to your Azure Event Hub to send messages.  This will allow you
to use your own front end to capture the events and use NuvIoT to process messages and perform workflows.

You must have an [Azure Account](https://portal.azure.com) and a configured [Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/).

If you need help getting started, [Contact Us](http://support.nuviot.com) and we will put you in touch with one 
of our implementation partners to help you get going.

The next steps assume that you have been able to successfully [Create an Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create) and have access to the necessary credentials.

Create a [Transmitter](../Transmitter.md) and select the Listener Type of **Event Hub**, then populated the required fields as applicable.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any transmitter, the following fields are required:

* **Transmitter Type**  (required)  
`Azure Event Hub`

* **Host Name** (required)     
The Host Name of the Event Hub Resource you created in Azure.  For example in
```sb://myeventhub.servicebus.windows.net``` the Host Name would be ```myeventhub.servicebus.windows.net```

* **Resource Name** (required)  
The name of the specific Event Hub you wish to listen on.

* **Access Key** (required)  
The Primary or Secondary Key to allow access to your Event Hub.  No keys are stored in plain text.

### Optional Fields

* **Access Key Name**
Enter a custom Policy/Access Key name where applicable.  If you leave this blank, the default will be: ```RootManageSharedAccessKey``` 