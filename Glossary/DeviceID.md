---
title: DeviceID
keywords: 

status: Complete
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Quick Def.
---
[Home](../Index.md) > [Glossary](./Index.md) 

# Device ID
## Definition
Each [Device](./Device.md) that is provisioned within a [Device Repository](./DeviceRepository.md) will have a unique Device ID.  This is a set of letters and/or numbers that will be used to identify each individual [Device](./Device.md). Although it’s not necessary, it may be helpful to include something that identifies the [Device Model](./DeviceModel.md) in the Device ID along with a sequential number.  

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* sends a [Message](./Message.md) to the [Cloud](./Cloud.md) with its Device ID PICBelt0012.  The [Cloud](./Cloud.md) uses the Device ID to identify that the [Message](./Message.md) came from *Plymouth Manufacturing's* belt and sends the [Message](./Message.md) to the appropriate [Device Configuration](./DeviceConfiguration.md). 

<br>
<br>
<br>

# Related Terms
- [Cloud](./Cloud.md)
- [Device](./Device.md)
- [Device Configuration](./DeviceConfiguration.md)
- [Device Model](./DeviceModel.md)
- [Device Repository](./DeviceRepository.md)
- [Message](./Message.md)