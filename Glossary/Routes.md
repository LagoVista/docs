---
title: Route
keywords: applications, routes, messages, devices

status: inprocess
created: 20210823
updated: 20210914
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: work on mapping, check wording of example.  Is the planner part of the route?  Is there too much info in the Example?  Do we need to add Mapping in the example? - Ready for Review   9/8 rework example.  Ready for Review  9/9 Add hyperlinks to the example.  Done.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Route
## Definition
Routes identify how a [Message](./Glossary/Message.md) is processed when received in the [Cloud](./Glossary/Cloud.md).  They consist of a set of [Pipeline Modules](./Glossary/PipelineModule.md) which include 

- [Business Logic](./Glossary/BusinessLogic.md)
- [Parsers](./Glossary/Parsers.md)
- [Sentinels](./Glossary/Sentinel.md)
- [Workflows](./Glossary/Workflow.md) 

Routes can also send [Messages](./Glossary/Message.md) back to the [Device](./Glossary/Device.md), to other systems, and/or write data to a [Data Stream](./Glossary/DataStream.md).

Within Routes, it is sometime necessary to provide [Mapping](./Glossary/Mapping.md) of the data between [Pipeline Modules](./Glossary/PipelineModule.md).  [Mapping](./Glossary/Mapping.md) identifies how the output produced from one module is passed on as [Input](./Glossary/Input) to other modules.  

<br>
<br>
<br>

## Example

The *Plymouth IoT Conveyor Belt* sent a [Message](./Glossary/Message.md) to the [Cloud](./Glossary/Cloud.md) that the bearings reached a temperature of 375°.  
1. The [Listener](./Glossary/Listener.md) receives the [Message](./Glossary/Message.md) and hands it to the [Planner](./Glossary/Planner.md).
2. The [Planner](./Glossary/Planner.md) uses the [Device ID](./Glossary/DeviceID.md) and [Message ID](./Glossary/MessageID.md) to identify the route that will be used to process the [Message](./Glossary/Message.md) and constructs a [PEM](./Glossary/PEM.md).  

An example of a Route that is identified by the [Planner](./Glossary/Planner.md) might be:  

3. The [PEM](./Glossary/PEM.md) is sent to the appropriate Route which uses the [Sentinel Module](./Glossary/Sentinel.md) to ensure the [Message](./Glossary/Message.md) came from *Plymouth IoT Conveyor Belt*.  When this is confirmed, the [PEM](./Glossary/PEM.md) is sent to a [Parser Module](./Glossary/Parsers.md).
4. The [Parser Module](./Glossary/Parsers.md) extracts the temperature and sends the temperature to the [Workflow Module](./Glossary/Workflow.md).
3. The [Workflow](./Glossary/Workflow.md) determines that a [Message](./Glossary/Message.md) should be sent to the belt to make it stop. 
4. The Route also sends a [Message](./Glossary/Message.md) to the owner of *Plymouth Manufacturing* warning of the issue. 
5. Finally, the Route sends this information to be recorded in a [Data Stream](./Glossary/DataStream).

<br>
<br>
<br>

# Related Terms
- [Business Logic](./Glossary/BusinessLogic.md)
- [Cloud](./Glossary/Cloud.md)
- [Data Stream](./Glossary/DataStream.md)
- [Device](./Glossary/Device.md)
- [Device ID](./Glossary/DeviceID.md)
- [Input](./Glossary/Input)
- [Listener](./Glossary/Listener.md)
- [Mapping](./Glossary/Mapping.md)
- [Message](./Glossary/Message.md)
- [Message ID](./Glossary/MessageID.md)
- [Parsers](./Glossary/Parsers.md)
- [PEM](./Glossary/PEM.md)
- [Pipeline Modules](./Glossary/PipelineModule.md)
- [Planner](./Glossary/Planner.md)
- [Sentinels](./Glossary/Sentinel.md)
- [Workflows](./Glossary/Workflow.md) 