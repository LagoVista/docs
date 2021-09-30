---
title: Workflow
keywords: 

status: complete
created: 20210823
updated: 20210914
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Work on Definition and Example - are workflows the same thing as modules?  Or Workflow is a module?  Is Definition complete?  Sentence about Scripts???? - Ready for Review.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Workflow
## Definition
Workflows are [Pipeline Modules](./PipelineModule.md) that allow custom logic to be applied to a [PEM](./PEM.md).  They also may trigger data to be sent back to the [Device](./Device.md), to other systems, or to save values as [Attributes](./Attribute.md).

Workflows may include
- [Attributes](./Attribute.md) - Properties that are associated with a [Device](./Device.md)
- [Workflow Inputs](./WorkflowInput.md) - New values that arrive from incoming messages
- [Input Commands](./InputCommand.md) - Commands that can be triggered from external sources to manipulate your device
- [Output Commands](./OutputCommand.md) - Messages that are sent back to the device or other systems as a result of the workflow
- [Scripts](./Scripts.md) - Small computer programs that get triggered as the workflow is processed
- [State Machines](./StateMachine.md) - A mechanism for building complex logic that can be executed based on the current state of your device

<br>
<br>
<br>

## Example
The [Deployment Instance](./DeploymentInstance.md) has received a [Message](./Message.md) from *the Plymouth IoT Conveyor Belt (PicBelt0012)*.  The [Message](./Message.md) states that the bearings are producing a temperature of 425°.  This temperature, or data, is sent to the [Workflow](./Workflow) called `temperature`.  425° is identified as an integer and is processed to determine that this integer does not fall in the acceptable range.  This creates an [Output Command](./OutputCommand.md) to send a [Message](./Message.md) back to the belt to stop.  The value of 425 is also stored as an [Attribute](./Attribute.md) so it may be referred to at a later date.

<br>
<br>
<br>

# Related Terms
- [Attribute](./Attribute.md)
- [Business Rule](./BusinessRules.md)
- [Deployment Instance](./DeploymentInstance.md)
- [Device](./Device.md)
- [Input Command](./InputCommand.md)
- [Message](./Message.md)
- [Output Command](./OutputCommand.md)
- [PEM](./PEM.md)
- [Pipeline Module](./PipelineModule.md)
- [Script](./Script.md)
- [State Machine](./StateMachine.md)
- [Workflow](./WorkflowInput.md)
- [Workflow Input](./WorkflowInput.md)