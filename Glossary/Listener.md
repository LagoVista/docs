---
title: Listener
keywords: 

status: complete
created: 20210903
updated: 20210909
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Complete
---
[Home](../Index.md)

# Listener


## Definition

A Listener is a [Pipeline Module](./Glossary/PipelineModule.md) whose primary function is to “listen” for and identify [Messages](./Glossary/Message.md) being sent from a [Device](./Glossary/Device.md) to the [Cloud](./Glossary/Cloud.md).  Once the [Message](./Glossary/Message.md) is received, the Listener will pass the [Message](./Glossary/Message) on to a [Planner](./PipelineModules/Planner.md) which will determine what to do with it. 

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* is programmed to send it's bearings' temperature to the [Cloud](./Glossary/Cloud.md) every five minutes.  Once it is sent, the Listener detects that there is a message that needs to be processed.  The Listener receives the [Message](./Glossary/Message.md) and passes it on to a [Planner](./Glossary/Planner.md).  

<br>
<br>
<br>

## Related Terms