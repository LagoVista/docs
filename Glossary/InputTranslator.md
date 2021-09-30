---
title: Input Translator
keywords: 

status: new
created: 20210928
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note:  
---
[Home](../Index.md) > [Glossary](./Index.md)

# Input
## Definition
When a [Message](./Message.md) is received from a [Device](./Device.md), the Input Translator is responsible for extracting data from the [Payload](./Payload.md) and making it available within the [Workflow](./Workflow.md).  



<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) to its [Deployment Instance](./DeploymentInstance.md) with a [Payload](./Payload) of 425°.  The Input Translator extracted 425 as an integer and made it available in the `temperature` [Workflow](./Workflow.md) as well as sending it to the [Data Stream Writer](./DataStreamWriter.md) to be saved as an [Attribute.md](./Attribute.md). 

<br>
<br>
<br>

# Related Terms
- [Attribute.md](./Attribute.md)
- [Data Stream Writer](./DataStreamWriter.md)
- [Deployment Instance](./DeploymentInstance.md)
- [Device](./Glosssary/Device.md)
- [Message](./Device/Message.md)
- [Payload](./Payload.md)
- [Workflow](./Workflow.md)