---
title: Azure IoT Hub Simulator
keywords: simulator, windows, azureiothub

status: approved
created: 20171003
updated: 20171016
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)
# Azure IoT Hub Simulator

### Simulator Settings

* **Name** (required)  
Name of the Simulator

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the simulator

* **Transport** (required)  
`Azure IoT Hub`

* **Default End Point** (required)  
This is the full URL of your IoT hub. It should be something similar to `myiothub.azure-devices.net`

* **Device Id** (required)    
The `Device ID` for the device that has been provisioned on your Azure IoT Hub

* **Access Key** (required)  
The `Primary key` from the Device Details for the `Device ID` as specified for this simulator

* **Default Payload Type** (required)     
Default format of the payload you will send with each message.  This can be either a simple string or [Binary](BinaryContent.md).

* **Description**     
Free-form text used to provide notes for your simulator

### Message Setting

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
