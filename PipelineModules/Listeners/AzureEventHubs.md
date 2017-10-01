---
title: Azure Event Hubs
keywords: listener, cloud, azure, eventhub, messagequeue

created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# Azure Event Hubs

You can provide a link to your Azure Event Hub to consume messages.  This will allow you
to use your own front end to capture the events and use NuvIoT to process messages and perform workflows.

You must have an [Azure Account](https://portal.azure.com) and have a configured [Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/).

If you need help getting started, [contact us](http://support.nuviot.com) and we'll put you in touch with one 
of our implementation partners to help you get going.

The next steps assume that you have [successfully created an Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create) and have access to the necessary credentials.

First you will need to create a [Listener](../Listener.md), and select the listener type of Event Hub.

### Required Fields

In addition to the standard fields that are required for any listener the following fields are required:

**Listener Type**  
`Azure Event Hub`

**Content Type**  
Select the [content type](../../Messaging/ContentTypes.md) of the message you are expecting, any content types are acceptable.

**Host Name**  
Host Name of the Event Hub Resource you created in Azure.  For example in
```sb://myeventhub.servicebus.windows.net``` the Host Name would be ```myeventhub.servicebus.windows.net```

**Resource Name**  
Name of the specific Event Hub you wish to listen on.

**Access Key**  
Enter the Primary or Secondary Key to allow access to your event hub.  No keys are stored in plain text.

### Optional Fields
**Access Key Name**  
You can enter a custome policy/access key name but if you leave this blank, the default this will be ```RootManageSharedAccessKey``` 

**Consumer Group** 
If you want to listen on a specific Consumer Group, enter it here, if you leave this blank you will connect to the ```[$Default]``` Consumer Group
