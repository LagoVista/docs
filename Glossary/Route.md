---
title: Route
keywords: 

status: Complete
created: 20210823
updated: 20211006
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: work on mapping, check wording of example.  Is the planner part of the route?  Is there too much info in the Example?  Do we need to add Mapping in the example? - Ready for Review   9/8 rework example.  Ready for Review  9/9 Add hyperlinks to the example.  Done.  9/24 Double check wording and mark complete  9/28 - should the list go under Pipeline Modules as well?  Are you sure you want all this information in here?  Done except for 2 questions.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Route
## Definition
Routes identify how a [Message](./Message.md) is processed when received by a [Deployment Instance](./DeploymentInstance.md) and consist of [Pipeline Modules](./PipelineModule.md).  Routes can also send [Messages](./Message.md) back to the [Device](./Device.md), to other systems, and/or write data to a [Data Stream](./DataStream.md).  Within Routes, it is sometime necessary to provide [Mapping](./Mapping.md) of the data between [Pipeline Modules](./PipelineModule.md).  [Mapping](./Mapping.md) identifies how the output produced from one module is passed on as input to other modules.  

<br>
<br>
<br>

## Example

The *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) to its [Deployment Instance](./DeploymentInstance.md) that the bearings reached a temperature of 425°. Following is an example of a Route that is identified by the [Planner](./Planner.md):  

3. The [PEM](./PEM.md) was sent to the appropriate Route which used the [Sentinel Module](./Sentinel.md) to ensure the [Message](./Message.md) came from *PICBelt001*.  When this was confirmed, the [PEM](./PEM.md) was [Queued](./Queue.md) to a [Parser Module](./Parser.md).
4. The [Parser Module](./Parsers.md) extracted the temperature of 425° and sent it to the `temperature` [Workflow](./Workflow.md).
3. The `temperature` [Workflow](./Workflow.md) determined that the belt was overheating and a [Message](./Message.md) should be sent to the belt to make it stop. 
4. The Route also sent a [Notification](./Notification.md) to the owner of *Plymouth Manufacturing* warning of the issue. 
5. Finally, the Route recorded all of this information in a [Data Stream](./DataStream.md).

<br>
<br>
<br>

# Related Terms
- [7 Segment Parser](./SevenSegmentParser.md)
- [Business Logic](./BusinessLogic.md)
- [Data Stream](./DataStream.md)
- [Data Stream Writer](./DataStreamWriter.md)
- [Deployment Instance](./DeploymentInstance.md)
- [Device](./Device.md)
- [Device ID](./DeviceID.md)
- [Input](./Input)
- [Listener](./Listener.md)
- [Machine Learning](./MachineLearning.md)
- [Mapping](./Mapping.md)
- [Message](./Message.md)
- [Message ID](./MessageID.md)
- [Notification](./Notification.md)
- [Parser Module](./Parsers.md)
- [PEM](./PEM.md)
- [Pipeline Module](./PipelineModule.md)
- [Planner](./Planner.md)
- [Queue](./Queue.md)
- [Sentinel Module](./Sentinel.md)
- [Workflow](./Workflow.md) 