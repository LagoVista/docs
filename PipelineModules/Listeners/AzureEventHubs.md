---
title: Azure Event Hubs
keywords: listener, cloud, azure, eventhub, messagequeue

status: readyforapproval
created: 20170922
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# Azure Event Hubs

You can provide a link to your Azure Event Hub to consume messages.  This will allow you
to use your own front end to capture the events and use NuvIoT to process messages and perform workflows.

You must have an [Azure Account](https://portal.azure.com) and a configured [Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/).

If you need help getting started, [Contact Us](http://support.nuviot.com) and we will put you in touch with one 
of our implementation partners to help you get going.

The next steps assume that you have [Successfully Created an Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create) and have access to the necessary credentials.

First, create a [Listener](../Listener.md) and select the Listener Type of Event Hub.

### Required Fields

In addition to the standard fields that are required for any listener, the following fields are required:

* Listener Type 
`Azure Event Hub`

* Content Type    
Select the [Content Type](../../Messaging/ContentTypes.md) of the message that you are expecting.  All Content Types are acceptable.

* Host Name   
The Host Name of the Event Hub Resource you created in Azure.  For example in
```sb://myeventhub.servicebus.windows.net``` the Host Name would be ```myeventhub.servicebus.windows.net```

* Resource Name    
The name of the specific Event Hub you wish to listen on.

* Access Key    
The Primary or Secondary Key to allow access to your Event Hub.  No keys are stored in plain text.

### Optional Fields

* Access Key Name   
Enter a custom Policy/Access Key name where applicable.  If you leave this blank, the default will be: ```RootManageSharedAccessKey``` 

* Consumer Group   
If you wish to listen on a specific Consumer Group, enter it here.  If this is left blank, you will connect to the ```[$Default]``` Consumer Group.
