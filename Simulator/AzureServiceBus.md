---
title: Azure Service Bus Simulator
keywords: simulator, messaging, windows, servicebus

status: approved
created: 20171003
updated: 20171016
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)
# Azure Service Bus Simulator

### Simulator Settings


* **Name** (required)  
Name of Simulator   

* **Key** (required)  
[Unique Key](../Topics/Keys.md) to identify the message   

* **Transport** (required)  
`Azure Service Bus`   

* **Default End Point** (required)  
Name of your Event Hub resource as created in Azure, such as `myservicebus`.  
**Note:** This should not be the full Event Hub URL, such as: ~~`myservicebus.servicebus.windows.net`~~

* **Queue Name** (*Required*)  
Name of the actual Event Hub where you will be publishing your messages.  This queue name will be copied can be copied as a default to the Message Template where it can be edited, that way you can use one simulator to send to many queues.

* **Device ID** (*Required*)    
Device ID that will be sent along with each message, although this field is not necessarily required, you should probably add a device id to be used in your messages.

* **Access Key Name** (required)  
Name of the Access Key for the provided SAS Policy that has `Send` privileges

* **Access Key** (required)  
Key that has `Send` privileges for the supplied Access Key Name

* **Default Payload Type** (required)  
Default format of the payload you will send with each message.  It can be either a simple string or [Binary](BinaryContent.md).

* **Description**    
Free-form text used to provide notes for your simulator

### Message Settings

* **Name** (required)  
Name of the Message

* **Key** (required)  
[Unique Key](../Topics/Keys.md) to identify the message

* **Queue Name** (required)  
Name of the Queue where this message should be sent.

* **Payload Type** (required)  
Text or Binary message.  In most cases, this will be text.

* **Append CR** `0x0D`  
ASCII character 0x0D will be appended to the message

* **Append LF** `0x0A`
ASCII character 0x0D will be appended to the message

* **Text or Binary Message**  
Based on your Payload Type, you can add either a text **or** binary message.
    * **Text**    
      Add content to be sent as the body of the message.  This allows for [Tag Replacement](DynamicFields.md)

    * **Binary**      
[Binary Content](BinaryContent.md) to be sent as a message

### Dynamic Attributes (*For Text Payloads Only*)  
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
