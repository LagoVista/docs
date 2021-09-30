---
title: Workflow Input
keywords: 

status: new
created: 20210910
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note:  Quick Def.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Input
## Definition
When a [Message](./Message.md) is received from a [Device](./Device.md), the [Input Translator](./InputTranslator) is responsible for extracting data from the [Payload](./Payload.md) and making it available within the [Workflow](./Workflow.md).  The data that is produced from the [Input Translator](./InputTranslator) is considered the Workflow Input.



<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) to its [Deployment Instance](./DeploymentInstance.md) with a [Payload](./Payload) of 425°.  This was extracted as an integer and used as Workflow Input into the `temperature` [Workflow](./Workflow.md).

<br>
<br>
<br>

# Related Terms
- [Deployment Instance](./DeploymentInstance.md)
- [Device](./Glosssary/Device.md)
- [Input Translator](./InputTranslator)
- [Message](./Device/Message.md)
- [Payload](./Payload.md)
- [Pipeline Module](./PipelineModule.md)
- [Workflow](./Workflow.md)