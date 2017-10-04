---
title: MQTT Simulator
keywords: simulator, windows, mqtt

created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)

# MQTT Simulator

### Simulator Settings

*NOTE:* *For the initial release our MQTT simulator does not support MQTT over TLS/SSL, this is planned for Q1 2018, if you need this sooner please consider
submitting a [pull request](http://github.com/lagovista/simulator) or [contacting us](http://support.nuviot.com.*

**Name**  
Name of the Simulator

**Key**  
A [unique key](../Topics/Keys.md) to identify the message

**Transport**  
For an MQTT Simulator this should be `MQTT`

**Default End Point** (*Required*)  
This is the full url of your IoT hub, it should be something similar to `myiothub.azure-devices.net`

**Port** (*Required*)  
Note this will usually be 1883 or 8883 when TLS/SSL is supported.

**User Name**  
UserName (optional) to log in to your MQTT server.

**Password**  
Password (optional) to log in to your MQTT server.

**Default Payload Type**  (*Required*)  
The default format of the payload you will send with each message, it can be either a simple string or [binary](BinaryContent.md)

**Description**  
Free form text use to provide notes for your simulator

### Message Setting

**Name**  
Name of the Message

**Key**  
A [unique key](../Topics/Keys.md) to identify the message

**Payload Type**  (*Required*)  
Either send a Text Message or a Binary message, in almost all cases this will be text.

**Topic**  
Topic in which to publish your message

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
