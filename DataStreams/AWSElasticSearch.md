---
title: Amazon AWS Elastic Search
keywords: aws, elasticsearch, datastreams, export, chart, report

status: inprocess
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# AWS Elastic Search Data Stream

### AWS Elastic Search Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Transport** (required)  
`Azure IoT Hub`

* **Default End Point** (required)  
This is the full URL of your IoT hub. It should be something similar to `myiothub.azure-devices.net`

* **Device Id** (required)    
The `Device ID` for the device that has been provisioned on your Azure IoT Hub

* **Access Key** (required)  
The `Primary key` from the Device Details for the `Device ID` as specified for this simulator

 
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

