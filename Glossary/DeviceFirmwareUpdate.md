---
title: Device Firmware Update
keywords: 

status: complete
created: 20210930
updated: 20211004
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note:
---
[Home](../Index.md) > [Glossary](./Index.md)

# Device Firmware Update (DFU)
## Definition
NuvIoT provides the ability to remotely update the [Firmware](./Firmware.md) Over the Air (OTA).  When a new version of [Firmware](./Firmware.md) becomes available, an OTA update can be done by sending a standard [Message](./Message.md) from the [Deployment Instance](./DeploymentInstance.md) to the [Device](./Device.md).  [Device Firmware Update (DFU)](./DeviceFirmwareUpdate.md) provides a safe, convenient and cost-effective way to update [Firmware](./Firmware.md). 

<br>
<br>
<br>

## Example
*Plymouth Manufacturing* wanted to optimize performance of the [Firmware](./Firmware.md) on all their conveyor belts.  Rather than configuring each belt at their Minneapolis and Tampa plant separately, they were able to use a Device Firmware Update to make the change to all of their [Devices](./Devices.md) remotely.  This update was sent by [Message](./Message.md) to all of the belts and the Device Firmware Update was initiated.  Each belt sent a return [Message](./Message.md) indicating that the upgrade was successful. 

<br>
<br>
<br>

# Related Terms
- [Device](./Device.md)
- [Device Configuration](./DeviceConfiguration.md)
- [Device Firmware Update (DFU)](./DeviceFirmwareUpdate.md)
- [Firmware](./Firmware.md)
- [Message](./Message.md)