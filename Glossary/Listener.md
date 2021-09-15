---
title: Listener
keywords: 

status: complete
created: 20210903
updated: 20210914
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Complete.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Listener
## Definition
A Listener is a [Pipeline Module](./Glossary/PipelineModule.md) whose primary function is to “listen” for and identify [Messages](./Glossary/Message.md) being sent from a [Device](./Glossary/Device.md) to the [Cloud](./Glossary/Cloud.md).  Once the [Message](./Glossary/Message.md) is received, the Listener will pass the [Message](./Glossary/Message.md) on to a [Planner](./Glossary/Planner.md) which will compile information into a [PEM](./Glossary/PEM.md) and send it to the appropriate [Route](./Glossary/Route.md). 

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* is programmed to send it's bearings' temperature to the [Cloud](./Glossary/Cloud.md) every five minutes.  Once it is sent, the Listener detects that there is a message that needs to be processed.  The Listener receives the [Message](./Glossary/Message.md) and passes it on to a [Planner](./Glossary/Planner.md).  

<br>
<br>
<br>

# Related Terms
- [Cloud](./Glossary/Cloud.md)
- [Device](./Glossary/Device.md)
- [Message](./Glossary/Message.md)
- [PEM](./Glossary/PEM.md)
- [Pipeline Module](./Glossary/PipelineModule.md)
- [Planner](./Glossary/Planner.md)
- [Route](./Glossary/Route.md)