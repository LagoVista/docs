---
title: Azure IoT Hub Device Repository
keywords: device, devicerepo, azureiothub

status: readyforreview
created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Devices](Index.md)

# Azure IoT Hub Device Repository

If you are using Azure IoT Hub to connect your devices you will need to use the Azure IoT Hub device repository.

To maintain consistent data, NuvIoT currently reequires you to use the NuvIoT built in device repository editor to provision and update your devices.  
If you need some feature not available in our built in management console, please [contact us](http://support.nuviot.com) so we can work with you to meet your needs.

When you connect your NuvIoT repository to the Azure IoT Hub, you need to use a shared access key that has Registry Read/Write permissions.

### Required Fields

**Resource Name**  
The name of your Azure IoT Hub

**Access Key Name**  
Name of the policy/key that has "Registry write" permissions

**Access Key**  
Shared Access Key for the policy/key that has "Registry Write" permissions as specified in the Access Key Name field.  This is a Base 64 encosed value.