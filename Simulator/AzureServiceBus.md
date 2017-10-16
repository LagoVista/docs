---
title: Azure Service Bus Simulator
keywords: simulator, messaging, windows, servicebus

status: readyforreview
created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)
# Azure Service Bus Simulator

### Simulator Settings


1. Name (*Required*)     
Name of Simulator   

2. Key (*Required*)     
[Unique Key](../Topics/Keys.md) to identify the message   

3. Transport (*Required*)       
`Azure Service Bus`   

4. Default End Point (*Required*)  
Name of your Event Hub resource as created in Azure, such as `myservicebus`.  
**Note:** This should not be the full Event Hub URL, such as: ~~`myservicebus.servicebus.windows.net`~~

5. Hub Name (*Required*)  
Name of the actual Event Hub where you will be publishing your messages

6. Device ID  
Device ID that will be used to send along with each message

7. Access Key Name (*Required*)  
Name of the Access Key for the provided SAS Policy that has `Send` privileges

8. Access Key (*Required*)  
Key that has `Send` privileges for the supplied Access Key Name

9. Default Payload Type (*Required*)  
Default format of the payload you will send with each message.  It can be either a simple string or [Binary](BinaryContent.md).

10. Description  
Free-form text used to provide notes for your simulator

### Message Settings

1. Name (*Required*)  
Name of the Message

2. Key (*Required*)  
[Unique Key](../Topics/Keys.md) to identify the message

3. Payload Type (*Required*)  
Text or Binary message.  In most cases, this will be text.

4. Append CR (0x0D)  
ASCII character 0x0D will be appended to the message

5. Append LF (0x0A)  
ASCII character 0x0D will be appended to the message

6. Text or Binary Message
Based on your Payload Type, you can add either a text or binary message.
    * Text  
      Add content to be sent as the body of the message.  This allows for [Tag Replacement](DynamicFields.md)

      *or*

    * Binary    
[Binary Content](BinaryContent.md) to be sent as a message

7. Dynamic Attributes (*For Text Payloads Only*)  
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
