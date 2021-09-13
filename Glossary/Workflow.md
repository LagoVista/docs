---
title: Workflow
keywords: workflow, pipelinemodule, pipeline

status: complete
created: 20210823
updated: 20210908
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Work on Definition and Example - are workflows the same thing as modules?  Or Workflow is a module?  Is Definition complete?  Sentence about Scripts???? - Ready for Review
---
[Home](../Index.md) > [Pipeline Modules](Index.md)



# Workflow

## Definition


Workflows are [Pipeline Modules](./Glossary/PipelineModule.md) that allow custom logic to be applied to a [PEM](./Glossary/PEM.md).  They also may trigger data to be sent back to the [Device](./Glossary/Device.md), to other systems, or to save values as [Attribute](./Glossary/Attribute.md).

Workflows may include

- [Attributes](./Glossary/Attribute.md) - Properties that represent the current state of your device
- [Inputs](./Glossary/Input.md) - New values that arrive from incoming messages
- [Input Commands](./Glossary/InputCommand.md) - Commands that can be triggered from external sources to manipulate your device
- [Output Commands](./Glossary/OutputCommand.md) - Messages that are sent back to the device or other systems as a result of the workflow
- [Scripts](./Glossary/Scripts.md) - Small computer programs that get triggered as the workflow is processed
- [State Machines](./Glossary/StateMachine.md) - A mechanism for building complex logic that can be executed based on the current state of your device

<br>
<br>
<br>

## Example
The Cloud has received a message from *the Plymouth IoT Conveyor Belt (PicBelt0012)*.  The message states that the bearings are producing a temperature of 320°.  This temperature, or data, is sent to a Device Workflow called Bearing Temp.  320° is identified as an integer and is processed to determine that this integer does not fall in the acceptable range.  This creates an output command to send a message back to the belt to stop.  The value of 320 is also stored as an attribute so it may be referred to at a later date.

<br>
<br>
<br>

## Related Terms
- [Attributes](./Glossary/Attribute.md)
- [Business Rules](./Glossary/BusinessRules.md)
- [Input Commands](./Glossary/InputCommands.md) 
- [Output Commands](./Glossary/OutputCommands.md)
- [Scripts](./Glossary/Script.md)
- [State Machines](./Glossary/StateMachines.md)
- [Workflow Input](./Glossary/WorkflowInput.md)