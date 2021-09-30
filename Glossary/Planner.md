---
title: Planner
keywords: 

status: in process
created: 20210910
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Wording 2/28 In example, why was information used to identify the Device?  Is the Message type located in the Device Configuration?  2/30  Draw me a picture of how each part relates to the other.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Planner
## Definition
A Planner is a [Pipeline Module](./PipelineModule.md) that determines how a [Message](./Message.md) should be processed.  The Planner uses the [Device ID](./DeviceID.md) and [Message ID](./MessageID.md) to locate the [Message Type](./MessageType.md) and [Device Configuration](./DeviceConfiguration.md).  It combines [Message](./Message.md) data into a [PEM](./PEM.md) and passes the information along to the [Device Configuration](./DeviceConfiguration.md). 

<br>
<br>
<br>

## Example
The *Plymouth Iot Conveyor Belt* sent a [Message](./Message.md) with a [Message ID](./MessageID.md) of `temperature` and [Device ID](./DeviceID.md) of `PICBelt001`. The Planner used this information to identify the [Device](./Device.md) that was associated with `PICBelt001` and found its [Device Configuration](./DeviceConfiguration.md). The Planner then searched for a [Message Type](./MessageType.md) with the [Message ID](./MessageID.md) of `temperature`. Once the [Device Configuration](./DeviceConfiguration) and [Message Type](./MessageType.md) were located, the [Route](./Route.md) was constructed and the [Message](./Message.md) processed.

<br>
<br>
<br>

# Related Terms 
- [Device Configuration](./DeviceConfiguration.md)
- [Device ID](./DeviceID.md)
- [Listener](./Listener.md)
- [Message](./Message.md)
- [Message ID](./MessageID.md)
- [Message Type](./MessageType.md)
- [PEM](./PEM.md)
- [Pipeline Module](./PipelineModule.md)
- [Route](./Route.md)