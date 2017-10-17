---
title: UDP Simulator
keywords: simulator, windows, tcp

status: readyforapproval
created: 20171003
updated: 20171016
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# UDP Simulator

### Simulator Settings

1. Name (*Required*)    
Name of the Simulator

2. Key (*Required*)    
[Unique Key](../Topics/Keys.md) to identify the message   

3. Transport** (*Required*)    
`TCP`   

4. Default Endpoint (*Required*)  
Full URL of your IoT hub.  It should be something similar to: `myiothub.azure-devices.net`   

5. Port (*Required*)  
Port to communicate with the server

6. Default Payload Type  (*Required*)  
Default format of the payload you will send with each message.  It can be either a simple string or [Binary](BinaryContent.md).   

7. Description   
Free-form text used to provide notes for your simulator

### Message Settings

1. Name   
Name of the message

2. Key  
[Unique Key](../Topics/Keys.md) to identify the message

3. Payload Type (*Required*)  
Either send a Text message or a Binary message.  In most cases this will be text.

4. Append CR (0x0D) 
ASCII character 0x0D, if set, will be appended to the message

5. Append LF (0x0A) 
ASCII character 0x0D, if set, will be appended to the message   
6.  Text or Binary message       
Based on your Payload Type, you can add either a Text *or* a Binary message   
    * Text    
Add content that will be sent as the body of the message.  This option allows for [Tag Replacement](DynamicFields.md)      
    * Binary    
[Binary Content](BinaryContent.md) to be sent as a message

### Dynamic Attributes (*For Text Payloads Only*)     
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
