---
title: Device Repositories
keywords: device, devicerepo, azureiothub

status: inprocess
created: 20170922
updated: 20170922
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Devices](Index.md)

# Device Repositories

Device Repositores are used to store your device information and have a 1:1 relationship with an [Instance](../Deployment/Instance.md).

There are four models for storing your Device information and Data generated from your devices.

* **NuvIoT** Our storage pool where your device data is securely stored in our cloud
* **Azure IoT Hub** Your devices are stored in both Azure IoT Hub and our **NuvIoT** cloud storage.
* **Local** Your devices and device data are stored locally in the in the instance that is hosting your application
* **Dedicated** If you need to store your device and device data in a dedicated storage source, please [contact us](https://support.nuviot.com/contactus?source=dedicatedstorage)

You can specify different storage mechanisms for your your devices and device data.  NuvIoT is our shared storage pool where your devices and device data are securely stored in the cloud.  Local will store your data locally along with your instance.  Azure IoT Hub will store your devices in both Azure IoT Hub and our NuvIoT storage pool.  Finally if you needed dedicated storage for your devices and data please contact us.