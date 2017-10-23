---
title: TCP Simulator
keywords: simulator, windows, tcp

status: approved
created: 20171003
updated: 20171016
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# TCP Simulator

### Simulator Settings

* **Name** (required)  
Name of the Simulator

* **Key** (required)  
[Unique Key](../Topics/Keys.md) to identify the message

* **Transport** (required)  
`TCP`

* **Default Endpoint** (required)  
Url or IP Address of the Endpoint to connect to with the TCP Simulator.

* **Port** (required)  
Port to communicate with the server

* **Default Payload Type** (required)  
The default format of the payload you will send with each message. It can be either a simple string or [Binary](BinaryContent.md).

* **Description**     
Free-form text used to provide notes for your simulator

### Message Settings

* **Name** (required)  
Name of the Message

* **Key** (required)  
[Unique Key](../Topics/Keys.md) to identify the message

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
