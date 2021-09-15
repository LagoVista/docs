---
title: Pipeline Execution Message
keywords: 

status: complete
created: 20210907
updated: 20210914
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: what types of data are added by the PEM? - for the example.  Ready for review.  9/8 - Last sentence in Def.  Reword Example - Ready for Review Complete.

---
[Home](../Index.md) > [Glossary](./Index.md) 

# Pipeline Execution Message/PEM
## Definition
A Pipeline Execution Message, or PEM, is an object that contains the information that was sent from the [Device](./Glossary/Device.md) to the [Cloud](./Glossary/Cloud.md).  In addition, the [Planner](./Gossary/Planner.md) adds data to the PEM that is necessary to process it in the [Pipeline Modules](./Glossary/PipelineModule.md).  The PEM is handed off to a [Route](./Glossary/Route.md) which contains the appropriate [Pipeline Module](./Glossary/PipelineModule.md).

<br>
<br>
<br>

## Example
A [Message](./Glossary/Message.md) containing a bearing temperature of 350° is sent from the *Plymouth IoT Conveyor Belt* to the [Cloud](./Glossary/Cloud.md).  The [Planner](./Glossary/Planner.md) identifies the [Device ID](./Glossary/DeviceID.md) and [Message ID](./Glossary/MessageID.md), and with this information locates the [Route](./Glossary/Routes.md) that will process the data.  It also populates the PEM with the [Pipeline Modules](./Glossary/PipelineModule.md) that have the steps necessary to shut down the conveyor belt and notify the shop owner.

<br>
<br>
<br>

# Related Terms 
- [Cloud](./Glossary/Cloud.md)
- [Device](./Glossary/Device.md)
- [Device ID](./Glossary/DeviceID.md)
- [Message](./Glossary/Message.md)
- [Message ID](./Glossary/MessageID.md)
- [Pipeline Modules](./Glossary/PipelineModule.md)
- [Planner](./Gossary/Planner.md)
- [Route](./Glossary/Route.md)