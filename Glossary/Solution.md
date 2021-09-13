---
title: Solution
keywords: deployment, solution, instance, iotapplication

status: inprocess
created: 20210823
updated: 20210908
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Solution

Notes: Wording in Example, remove versioning and custom settings.  - Last sentence of example? Ready for review  9/9 - definition - not nece insturctions but the whole package.  9/9 - reword example and definition
---
[Home](../Index.md)

# Solution

## **Definition**
Solutions solutions are where everything that is necessary to process messages from all the different devices and device configurations are packaged up so they can be deployed.are made up of provide instructions on how to identify and process [Messages](./Glossary/Message.md) once they are received by the Cloud from a [Device](./Glossary/Device.md).

A Solution is made up of
- A [Planner](./PipelineModules/Planner.md)
- Custom Settings
- One or more [Listeners](./Glossary/Listener.md) 
- One or more  [Device Configurations](./Glossary/DeviceConfigurations.md) 

When a Solution is published or deployed in the Cloud with a [Device Repository](./Glossary/DeviceRepository.md), it becomes a working [Deployment Instance](./Deployment/Instance.md).  

<br>
<br>
<br>

## **Example**
A Solution was created for the *Plymouth IoT Conveyor Belt*.  The Solution contains a listener to detect when the *Pymouth IoT Conveyor Belt* sent a message, a planner that used the device id and message id to construct a set of instructions on how that message should be processed by using the route as defined in the device configuration. It also contained custom settings that indicated how warm the bearings could get before a shut down was initiated.



<br>
<br>
<br>

## Related Terms 
- Versioning
- Custom Settings

