---
title: MessageID
keywords: 

status: complete
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Quick Def.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Message ID
## Definition
A Message ID is a unique set of letters and/or numbers that is used to identify the type of [Message](./Message.md).  It allows the program to define how the [Message](./Message.md) should be processed within the [Deployment Instance](./DeploymentInstance.md).

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* sends a [Message](./Message.md) to the [Deployment Instance](./DeploymentInstance.md) with a Message ID of **Temperature**.  The [Planner](./Planner.md) uses the Message ID to identify that the [Message](./Message.md) contains a temperature. This information is used along with the [Device ID](./DeviceID.md) to identify the correct [Device Configuration](./DeviceConfiguration.md) to process the data.

<br>
<br>
<br>

# Related Terms
- [Deployment Instance](./DeploymentInstance.md)
- [Device Configuration](./DeviceConfiguration.md)
- [Device ID](./DeviceID.md)
- [Message](./Message.md)
- [Planner](./Planner.md)