---
title: Azure IoT Hub
keywords: listener, cloud, azure, iothub, messagequeue

created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# Azure IoT Hubs

NuvIoT supports connecting directly to your IoT Hub.  It's important to realize that to connect to Azure IoT Hub
you will need to find the URL from the Event Hub Compatible connection string and the Event Hub Compatible Name you
can see [this blog post](https://blogs.msdn.microsoft.com/iotdev/2017/05/09/understand-different-connection-strings-in-azure-iot-hub/)
on IoT Hub Connection Strings  

**Important Note:** *If you use Azure IoT Hub as a listener those devices must be registered in the [Azure IoT Hub device repository](../../Devices/AzureIoTHubDeviceRepo.md)*

### Required Fields

In addition to the standard fields that are required for any listener the following fields are required:

**Listener Type**  
`Azure IoT Hub`

**Content Type**  
Select the [content type](../../Messaging/ContentTypes.md) of the message you are expecting, any content types are acceptable.

**Host Name**  
Host Name of the event hub compatible end point, this is not the the primary host name associated with the Azure IoT Hub, 
once you find the Event Hub-compatible endpoint, locate the host and leaving out the protocol `sb://`.  
Your host name will be something like `ihsuprodblres987dednamespace.servicebus.windows.net`

**Resource Name**  
Enter the Event Hub-compatible name from the Azure site.  This is located just above the Event Hub-compatible end point. 
You can also create your own custom end point via the Azure Portal if you need to listen to a different route.

**Access Key Name**  
Name of Acess Key (similar to iothubowner, services), it is important that your key has `service connect` permissions.

**Access Key**  
Assigned Access Key for your IoT Hub that was specified in the **Access Key Name** section.

### Optional Fields
**Consumer Group**  
If not present will use the `$Default` Consumer Group