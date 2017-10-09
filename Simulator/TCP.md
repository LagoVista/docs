---
title: TCP Simulator
keywords: simulator, windows, tcp

status: readyforreview
created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)

# TCP Simulator

### Simulator Settings

**Name** (*Required*)    
Name of the Simulator

**Key** (*Required*)    
A [unique key](../Topics/Keys.md) to identify the message

**Transport** (*Required*)    
For a TCP Simulator this should be `TCP`

**Default End Point** (*Required*)  
This is the full url of your IoT hub, it should be something similar to `myiothub.azure-devices.net`

**Port** (*Required*)  
Port to communicate with the server

**Default Payload Type**  (*Required*)  
The default format of the payload you will send with each message, it can be either a simple string or [binary](BinaryContent.md)

**Description**  
Free form text use to provide notes for your simulator

### Message Setting

**Name** (*Required*)    
Name of the Message

**Key** (*Required*)    
A [unique key](../Topics/Keys.md) to identify the message

**Payload Type**  (*Required*)  
Either send a Text Message or a Binary message, in almost all cases this will be text.

**Append CR (0x0D)**  
If set the ascii character 0x0D will be appended to the message

**Append LF (0x0A)**  
If set the ascii character 0x0D will be appended to the message

NOTE: *Based on your Payload Type you can add either a text or binary messsage*

**Text**  
Add any content that will be sent as the body of the message [allows for tag replacement](DynamicFields.md)

-or-

**Binary**  
[Binary Content](BinaryContent.md) to be sent as a message

**Dynamic Attributes** (*For Text Paylaods Only*)  
For more information, please see the [Dynamic Fields](DynamicFields.md) section.

