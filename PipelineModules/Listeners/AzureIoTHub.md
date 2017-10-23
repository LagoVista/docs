---
title: Azure IoT Hub
keywords: listener, cloud, azure, iothub, messagequeue

status: approved
created: 20170922
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# Azure IoT Hubs

NuvIoT supports connecting directly to your IoT Hub.  

**Important Note 1:** In order to connect to Azure IoT Hub,
you will need to find the URL from the Event Hub-compatible connection string and the Event Hub-compatible name. Refer to this [Blog Post](https://blogs.msdn.microsoft.com/iotdev/2017/05/09/understand-different-connection-strings-in-azure-iot-hub/) for more information on IoT Hub Connection Strings.  

**Important Note 2:** If you use Azure IoT Hub as a listener, those devices must be registered in the [Azure IoT Hub Device Repository](../../Devices/AzureIoTHubDeviceRepo.md).

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)  
`Azure IoT Hub`

* **Content Type**  (required)  
Select the [Content Type](../../Messaging/ContentTypes.md) of the message you are expecting.  Any Content Type is acceptable.

* **Host Name** (required)  
Identify the Host Name of the Event Hub-compatible endpoint.  This is not the the primary host name associated with the Azure IoT Hub. 
Once you find the Event Hub-compatible endpoint, locate the host.  Leaving out the protocol `sb://`.  
Your Host Name will be something like `ihsuprodblres987dednamespace.servicebus.windows.net`.

* **Resource Name** (required)    
Enter the Event Hub-compatible name from the Azure site.  This is located just above the Event Hub-compatible endpoint. 
You can also create your own custom endpoint via the Azure Portal if you need to listen to a different route.

* **Access Key Name** (required)   
Enter the name of the Access Key (similar to iothubowner, services).  It is important that your key has `service connect` permissions.

* **Access Key**  (required)    
Enter the assigned Access Key for your IoT Hub that was specified in the **Access Key Name** section.  Your Access Key will not be saved in plain text and will not be displayed when editing.

### Optional Fields
* **Consumer Group**      
If you do not add a Consumer Group, the `$Default` Consumer Group will be used.
