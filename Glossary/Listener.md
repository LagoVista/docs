---
title: Listener
keywords: 

status: complete
created: 20210903
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Complete.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Listener
## Definition
A Listener is a [Pipeline Module](./PipelineModule.md) whose primary function is to “listen” for and identify [Messages](./Message.md) being sent from a [Device](./Device.md) to the [Cloud](./Cloud.md).  Once the [Message](./Message.md) is received, the Listener will pass the [Message](./Message.md) on to a [Planner](./Planner.md) which will compile information into a [PEM](./PEM.md) and send it to the appropriate [Route](./Route.md). 

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* is programmed to send it's bearings' temperature to the [Cloud](./Cloud.md) every five minutes.  Once it is sent, the Listener detects that there is a message that needs to be processed.  The Listener receives the [Message](./Message.md) and passes it on to a [Planner](./Planner.md).  

<br>
<br>
<br>

# Related Terms
- [Cloud](./Cloud.md)
- [Device](./Device.md)
- [Message](./Message.md)
- [PEM](./PEM.md)
- [Pipeline Module](./PipelineModule.md)
- [Planner](./Planner.md)
- [Route](./Route.md)