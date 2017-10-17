---
title: Azure Event Hub Simulator
keywords: simulator, windows, azureeventhub

status: readyforapproval
created: 20171003
updated: 20171016
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)
# Azure Event Hub Simulator

### Simulator Settings


1. Name     
Name of the Simulator

2. Key  
[Unique Key](../Topics/Keys.md) to identify the message

3. Transport    
`Azure Event Hub`

4. Default End Point (*Required*)  
Name of your Event Hub resource as created in Azure. Use the Name, not the full Event Hub URL.  For example, use `myeventhub`, not ~~`myeventhub.servicebus.windows.net`~~.

5. Hub Name (*Required*)  
Name of the actual Event Hub where you will be publishing your messages

6. Device ID  
Device ID that will be sent along with each message

7. Access Key Name  
Name of the Access Key for the provided SAS Policy that has `Send` privileges

8. Access Key  
Key that has `Send` privileges for the supplied Access Key Name

9. Default Payload Type (*Required*)  
Default format of the payload that will be sent with each message.  This can be either a simple string or [Binary](BinaryContent.md).

10. Description    
Free-form text to provide notes for your simulator

### Message Settings

1. Name       
Name of the Message

2. Key    
[Unique Key](../Topics/Keys.md) to identify the message

3. Payload Type (*Required*)  
Text or Binary message.  In most cases, this will be Text.

4. Append CR (0x0D)  
ASCII character 0x0D, if set, will be appended to the message

5. Append LF (0x0A)  
ASCII character 0x0D, if set, will be appended to the message

6. Text or Binary Message   
Based on your Payload Type, select either Text **or** Binary
   * Text    
     Content to be sent as the body of the message.  This selection allows for [Tag Replacement](DynamicFields.md).   
   * Binary    
     [Binary Content](BinaryContent.md) to be sent as a message   

### Dynamic Attributes (*For Text Payloads Only*)    
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
