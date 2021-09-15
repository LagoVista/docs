---
title: Workflow
keywords: workflow, pipelinemodule, pipeline

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
Workflows are [Pipeline Modules](./Glossary/PipelineModule.md) that allow custom logic to be applied to a [PEM](./Glossary/PEM.md).  They also may trigger data to be sent back to the [Device](./Glossary/Device.md), to other systems, or to save values as [Attributes](./Glossary/Attribute.md).

Workflows may include
- [Attributes](./Glossary/Attribute.md) - Properties that are associated with a [Device](./Glossary/Device.md)
- [Inputs](./Glossary/Input.md) - New values that arrive from incoming messages
- [Input Commands](./Glossary/InputCommand.md) - Commands that can be triggered from external sources to manipulate your device
- [Output Commands](./Glossary/OutputCommand.md) - Messages that are sent back to the device or other systems as a result of the workflow
- [Scripts](./Glossary/Scripts.md) - Small computer programs that get triggered as the workflow is processed
- [State Machines](./Glossary/StateMachine.md) - A mechanism for building complex logic that can be executed based on the current state of your device

<br>
<br>
<br>

## Example
The [Cloud](./Glossary/Cloud.md) has received a [Message](./Glossary/Message.md) from *the Plymouth IoT Conveyor Belt (PicBelt0012)*.  The [Message](./Glossary/Message.md) states that the bearings are producing a temperature of 320°.  This temperature, or data, is sent to the [Device Workflow](./Glossary/Workflow) called Bearing Temp.  320° is identified as an integer and is processed to determine that this integer does not fall in the acceptable range.  This creates an [Output Command](./Glossary/OutputCommand.md) to send a [Message](./Glossary/Message.md) back to the belt to stop.  The value of 320 is also stored as an [Attribute](./Glossary/Attribute.md) so it may be referred to at a later date.

<br>
<br>
<br>

# Related Terms
- [Attribute](./Glossary/Attribute.md)
- [Business Rule](./Glossary/BusinessRules.md)
- [Cloud](./Glossary/Cloud.md)
- [Device](./Glossary/Device.md)
- [Input](./Glossary/Input.md)
- [Input Command](./Glossary/InputCommand.md)
- [Message](./Glossary/Message.md)
- [Output Command](./Glossary/OutputCommand.md)
- [PEM](./Glossary/PEM.md)
- [Pipeline Module](./Glossary/PipelineModule.md)
- [Script](./Glossary/Script.md)
- [State Machine](./Glossary/StateMachine.md)
- [Workflow](./Glossary/WorkflowInput.md)