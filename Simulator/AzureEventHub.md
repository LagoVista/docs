---
title: Azure Event Hub Simulator
keywords: simulator, windows, azureeventhub

status: approved
created: 20171003
updated: 20171016
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)
# Azure Event Hub Simulator

### Simulator Settings


* **Name** (required)       
Name of the Simulator

* **Key** (required)    
[Unique Key](../Topics/Keys.md) to identify the message

* **Transport** (required)      
`Azure Event Hub`

* **Default End Point** (required)  
Name of your Event Hub resource as created in Azure. Use the Name, not the full Event Hub URL.  For example, use `myeventhub`, not ~~`myeventhub.servicebus.windows.net`~~.

* **Device ID**  
Device ID that will be sent along with each message, although this field is not necessarily required, you should probably add a device id to be used in your messages.

* **Access Key Name** (required)    
Name of the Access Key for the provided SAS Policy that has `Send` privileges

* **Access Key** (required)  
Key that has `Send` privileges for the supplied Access Key Name

* **Hub Name** (required)  
Name of the actual Event Hub where you will be publishing your messages


* **Default Payload Type** (required)  
Default format of the payload that will be sent with each message.  This can be either a simple string or [Binary](BinaryContent.md).

* **Description**    
Free-form text to provide notes for your simulator

### Message Settings

* **Name** (required)    
Name of the Message

* **Key** (required)       
[Unique Key](../Topics/Keys.md) to identify the message

* **Payload Type** (required)     
Text or Binary message.  In most cases, you will send a Text message.

* **Append CR** `0x0D`    
ASCII character 0x0D, if set, will be appended to the message

* **Append LF** `0x0A`      
ASCII character 0x0A, if set, will be appended to the message

* **Text or Binary Message**   
This is based on your Payload Type, select either Text **or** Binary.
   * Text     
     Add any content that will be sent as the body of the message.  This option allows for [Tag Replacement](DynamicFields.md)

   * Binary     
     [Binary Content](BinaryContent.md) to be sent as a message

### Dynamic Attributes (*For Text Payloads Only*)     
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
