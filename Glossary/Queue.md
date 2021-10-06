---
title: Queue
keywords: 

status: Complete
created: 20210928
updated: 20211006
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: 
---
[Home](../Index.md) > [Glossary](./Index.md)

# Queue
## Definition
When a [Message](./Message.md) is sent to a [Deployment Instance](./DeploymentInstance), it is processed by a [Planner](./Planner.md), turned into a [PEM](./PEM.md), and placed into a Queue.  A Queue is a list of all the [PEMS](./PEM.md) in the order they were received that need to be processed by [Pipeline Modules](./PipelineModule).

<br>
<br>
<br>

## Example
As messages from the *Plymouth Conveyor Belt* are received in the Conveyor Belt [Deployment Instance](./DeploymentInstance,) they are processed by the Conveyor Belt [Planner](./Planner), turned into a [PEM](./PEM.md) and placed into a Queue for processing.

<br>
<br>
<br>

# Related Terms 
