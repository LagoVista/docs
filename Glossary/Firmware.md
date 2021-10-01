---
title: Firmware
keywords: 

status: new
created: 20210924
updated: 20210929
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: 9/29 Device Firmware Update..  wording of example  add Device Firmware Update
---
[Home](../Index.md) > [Glossary](./Index.md)

# Firmware 
## Definition
Firmware is a type of software located on the [Control Board](./ControlBoard.md) of a [Device](./Device.md) that provides low-level control of a [Device's](./Device.md) functions.  Firmware can be thought of as a very simple computer that needs to be configured to identify and process [Messages](./Message.md), control and monitor [Device](./Device.md) activity and provide connectivity to the [Deployment Instance](./DeploymentInstance.md).  

<br>

[**Device Firmware Update (DFU)**](./DeviceFirmwareUpdate.md)

NuvIoT provides the ability to update Firmware remotely Over the Air (OTA).  When a new version of Firmware becomes available, an OTA update can be done by sending a standard [Message](./Message.md) from the [Device Configuration](./DeviceConfiguration.md) to the [Device](./Device.md).  [Device Firmware Update](./DeviceFirmwareUpdate.md) provides a safe, convenient and cost-effective way to update Firmware.

<br>
<br>
<br>

## Example
The Firmware on the *Plymouth IoT Conveyor Belts* is programmed to receive the bearings' temperature and build a [Messages](./Message.md) containing that data.  The Firmware then sends the [Message](./Message.md) to the [Deployment Instance](./DeploymentInstance.md). 

<br>
<br>
<br>

# Related Terms
- [Control Board](./ControlBoard.md)
- [Deployment Instance](./DeploymentInstance.md)
- [Device](./Device.md)
- [Device Configuration](./DeviceConfiguration.md)
- [Device Firmware Update](./DeviceFirmwareUpdate.md)
- [Message](./Message.md)