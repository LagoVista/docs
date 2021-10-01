---
title: OutputCommand
keywords: 

status: in process
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: In example, does the output command tell the transmitter to "Send", does it build the message? Where does the message come from?
---
[Home](../Index.md) > [Glossary](./Index.md)

# Output Command
## Definition
Just as [Input Commands](./InputCommand.md) provide a way to map values from an incoming [Message](./Message.md) into a [Workflow](./Workflow.md), Output Commands provide outputs or trigger events that can either be sent back to the [Device](./Device.md) or to other systems.  A single [Workflow](./Workflow.md) can have multiple Output Commands.  Each of these Output Commands need to be [Mapped](./Mapping.md) to a [Message](./Message.md).

<br>
<br>
<br>

## Example
The `overheating` [Workflow](./Workflow.md) on *Plymouth Manufacturing's* [Deployment Instance](./DeploymentInstance.md) detected an overheated bearing.  This caused an Output Command to be generated instructing a [Transmitter](./Transmitter.md) to send a [Message](./Message.md) back to the conveyor belt to shut down before any damage could occur.

<br>
<br>
<br>

# Related Terms
- [Deployment Instance](./DeploymentInstance.md)
- [Device](./Device.md)
- [Input Commands](./InputCommand.md)
- [Mapping](./Mapping.md)
- [Message](./Message.md)
- [Transmitter](./Transmitter.md)
- [Workflow](./Workflow.md)