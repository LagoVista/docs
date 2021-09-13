---
title: Route
keywords: applications, routes, messages, devices

status: inprocess
created: 20210823
updated: 20210908
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: work on mapping, check wording of example.  Is the planner part of the route?  Is there too much info in the Example?  Do we need to add Mapping in the example? - Ready for Review   9/8 rework example.  Ready for Review  9/9 Add hyperlinks to the example
---
[Home](../Index.md)

# Route
## Definition

Routes identify how a [Message](./Glossary/Message.md) is processed when received in the [Cloud](./Glossary/Cloud.md).  They consist of a set of [Pipeline Modules](./Glossary/PipelineModule.md) which include 

- [Sentinels](./Glossary/Sentinel.md) 
- [Parsers](./Glossary/Parsers.md)
- [Workflows](./Glossary/Workflow.md) 
- [Business Logic](./Glossary/BusinessLogic.md)

Routes can also send [Messages](./Glossary/Message.md) back to the [Device](./Glossary/Device.md), to other systems, and/or write data to a [Data Stream](./Glossary/DataStream.md).

Within Routes, it is sometime necessary to provide [Mapping](./Glossary/Mapping.md) of the data between [Pipeline Modules](./Glossary/PipelineModule.md).  [Mapping](./Glossary/Mapping.md) identifies how the output produced from one module is passed on as input to other modules.  

<br>
<br>
<br>

## Example

Change to conveyor belt with temperature
The motion detector at *Plymouth Manufacturing* sent a message to the Cloud that motion was detected in the office at 1:00 AM.  
1. The listener receives the message and hands it to the planner.
2. The planner uses the device id and message id to identify the route that will be used to process the message and constructs a Pipeline Execution Message (PEM).  

An example of a route that is identified by the planner might be:  

3. The PEM is sent to the appropriate route which uses the Sentinel Module to ensure the message came from *Plymouth Manufacturing Motion Detector PMM0467*.  When this is confirmed, the PEM is sent to a parser module.
4. The parser module extracts the temperature and sends the temperature to the workflow module.
3. The next module, the workflow, determines that a message should be sent to the security camera to begin filming the office. 
4. The route also sends a message to the owner of *Plymouth Manufacturing* warning that there was activity in the office.  
5. Finally, the route sends this information to be recorded in the Data Stream.

<br>
<br>
<br>

## Related Terms
