---
title: Planner
keywords: 

status: in process
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Wording
---
[Home](../Index.md) > [Glossary](./Index.md)

# Planner
## Definition
A Planner is a [Pipeline Module](./PipelineModule.md) that receives the [Message](./Message.md) from a [Listener](./Listener.md) and determines how it should be processed.  The Planner uses  the [Device ID](./DeviceID.md) and [Message ID](./MessageID.md), and additional relevant data.  It combines this information into a [PEM](./PEM.md), locates the [Device Configuration](./DeviceConfiguration.md) that will process the [Message](./Message.md), and passes along the [PEM](./PEM.md). 

The planner uses the Device Id and Message Id that were extracted from the message to locate the [Message Type] and [Device Configuration].
<br>
<br>
<br>

## Example
A message was received from the the PL CV BT. The message Id was was **temperature** and the Device Id was **belt001**. The planner took this inforrmation and identified the device that was associated **belt001** and found it's device configuration. The planner then searched for a message with the id of **temperature** within that device cnofiguration and found the temperature message type. With these two peices of information the route could be constructed and the message could be processed.

<br>
<br>
<br>

# Related Terms 
- [Device Configuration](./DeviceConfiguration.md)
- [Device ID](./DeviceID.md)
- [Listener](./Listener.md)
- [Message](./Message.md)
- [Message ID](./MessageID.md)
- [PEM](./PEM.md)
- [Pipeline Module](./PipelineModule.md)