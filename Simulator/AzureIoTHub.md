---
title: Azure IoT Hub Simulator
keywords: simulator, windows, azureiothub

status: readyforapproval
created: 20171003
updated: 20171016
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)
# Azure IoT Hub Simulator

### Simulator Settings

1. Name (*Required*)  
Name of the Simulator

2. Key (*Required*)  
A [Unique Key](../Topics/Keys.md) to identify the message

3. Transport (*Required*)  
`Azure IoT Hub`

4. Default End Point (*Required*)  
This is the full URL of your IoT hub. It should be something similar to `myiothub.azure-devices.net`

5. Access Key (*Required*)  
The primary key for the Device ID as specified for this simulator

6. Device Id (*Required*)    
Device ID that has been allocated on your Azure IoT Hub

7. Default Payload Type (*Required*)     
Default format of the payload you will send with each message.  This can be either a simple string or [Binary](BinaryContent.md).

8. Description     
Free-form text used to provide notes for your simulator

### Message Setting

1. Name     
Name of the Message

2. Key     
[Unique Key](../Topics/Keys.md) to identify the message

3. Payload Type (*Required*)     
Text or Binary message.  In most cases, you will send a Text message.

4. Topic      
Topic in which to publish your message

5. Append CR (0x0D)    
ASCII character 0x0D, if set, will be appended to the message

6. Append LF (0x0A)      
ASCII character 0x0A, if set, will be appended to the message

7. Text or Binary Message   
This is based on your Payload Type, select either Text **or** Binary.
   * Text     
     Add any content that will be sent as the body of the message.  This option allows for [Tag Replacement](DynamicFields.md)

   * Binary     
     [Binary Content](BinaryContent.md) to be sent as a message

### Dynamic Attributes (*For Text Payloads Only*)     
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
