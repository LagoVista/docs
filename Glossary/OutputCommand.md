---
title: OutputCommand
keywords: 

status: in process
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: wording
---
[Home](../Index.md) > [Glossary](./Index.md)

# Output Command
## Definition
Just as [Input Commands](./InputCommand.md) provide a way to map values from incoming [Messages](./Message.md) into a [Workflow](./Workflow.md), Output Commands are used to provide outputs or trigger events that can either be sent to back to the [Device](./Device.md) or to other systems.  A single [Workflow](./Workflow.md) can have multiple Output Commands.  Each of these Output Commands will need to be [Mapped](./Mapping.md) to a [Message](./Message.md).

<br>
<br>
<br>

## Example
When the workflow at PLY MFG detected an overheated bearing NuvIoT it generated an output command that was ultimately associated with a transmitter to send a message back to the CV BL to shut down before any damage occurred

<br>
<br>
<br>

# Related Terms
- [Device](./Device.md)
- [Input Commands](./InputCommand.md)
- [Mapped](./Mapping.md)
- [Message](./Message.md)
- [Workflow](./Workflow.md)