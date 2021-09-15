---
title: Solution
keywords: deployment, solution, instance, iotapplication

status: inprocess
created: 20210823
updated: 20210914
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Solution

Notes: Wording in Example, remove versioning and custom settings.  - Last sentence of example? Ready for review  9/9 - definition - not nece insturctions but the whole package.  9/9 - reword example and definition
9/14 - I thinkRoute and Device Configuration should be left out of the example. Done.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Solution
## Definition
 Solutions provide instructions on how to identify and process [Messages](./Glossary/Message.md) once they are received by the [Cloud](./Glossary/Cloud.md) from [Devices](./Glossary/Device.md) and [Device Configurations](./Glossary/DeviceConfiguration.md).  
 
A Solution is made up of
- A [Planner](./Glossary/Planner.md)
- [Custom Settings](./Glossary/CustomSettings.md)
- One or more [Listeners](./Glossary/Listener.md) 
- One or more  [Device Configurations](./Glossary/DeviceConfigurations.md) 

When a Solution is published or deployed in the [Cloud](./Glossary/Cloud.md) with a [Device Repository](./Glossary/DeviceRepository.md), it becomes a working [Deployment Instance](./Glossary/DeploymentInstance.md).  

<br>
<br>
<br>

## Example
A Solution was created for the *Plymouth IoT Conveyor Belt*.  The Solution contains 
- a [Listener](./Glossary/Listener.md) to detect when the *Plymouth IoT Conveyor Belt* sent a [Message](./Glossary/Message.md)
- a [Planner](Glossary/Planner.md) that used the [Device ID](./Glossary/DeviceID.md) and [Message ID](./Glossary/MessageID.md) to construct a [PEM](./Glossary/PEM.md)
- a [Route](./Glossary/Route.md) as defined in the [Device Configuration](./Glossary/DeviceConfiguration.md) and
- [Custom Settings](./Glossary/CustomSettings.md) that indicated how warm the bearings could get before a shut down was initiated.

<br>
<br>
<br>

# Related Terms 
- [Cloud](./Glossary/Cloud.md)
- [Custom Settings](./Glossary/CustomSettings.md)
- [Deployment Instance](.Glossary/DeploymentInstance.md)
- [Device](./Glossary/Device.md)
- [Device Configuration](./Glossary/DeviceConfiguration.md)
- [Device Repository](./Glossary/DeviceRepository.md)
- [Listener](./Glossary/Listener.md) 
- [Message](./Glossary/Message.md)
- [PEM](./Glossary/PEM.md)
- [Planner](./Glossary/Planner.md)
- [Route](./Glossary/Route.md)
- [Versioning](./Glossary/Versioning.md)

