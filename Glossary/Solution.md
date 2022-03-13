---
title: Solution
keywords: 

status: Complete
created: 20210823
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Wording in Example, remove versioning and custom settings.  - Last sentence of example? Ready for review  9/9 - definition - not nece insturctions but the whole package.  9/9 - reword example and definition 9/14 - I thinkRoute and Device Configuration should be left out of the example. Done.  Check Links
---
[Home](../Index.md) > [Glossary](./Index.md)

# Solution
## Definition
 Solutions provide a complete set instructions on how to identify and process [Messages](./Message.md) once they are received by the [Deployment Instance](./DeploymentInstance.md) from [Devices](./Device.md).
 
A Solution is made up of
- A [Planner](./Planner.md)
- [Custom Settings](./CustomSettings.md)
- One or more [Listeners](./Listener.md) 
- One or more  [Device Configurations](./DeviceConfigurations.md) 

When a Solution is deployed in the [Cloud](./Cloud.md) with a [Device Repository](./DeviceRepository.md), it becomes a working [Deployment Instance](./DeploymentInstance.md).  

<br>
<br>
<br>

## Example
A Solution was created for the *Plymouth IoT Conveyor Belt*.  The Solution contains 
- a [Listener](./Listener.md) to detect when the *Plymouth IoT Conveyor Belt* sends a [Message](./Message.md)
- a [Planner](./Planner.md) that uses the [Device ID](./DeviceID.md) and [Message ID](./MessageID.md) to construct a [PEM](./PEM.md)
- a [Route](./Route.md) as defined in the [Device Configuration](./DeviceConfiguration.md) and
- [Custom Settings](./CustomSettings.md) that indicate how warm the bearings could get before a shut down is initiated.

Once the solution was created, it was deployed in two independent [Deployment Instances](./DeploymentInstance.md).  One was located in Minneapolis, the other in Tampa.  

<br>
<br>
<br>

# Related Terms 
- [Cloud](./Cloud.md)
- [Custom Settings](./CustomSettings.md)
- [Deployment Instance](.Glossary/DeploymentInstance.md)
- [Device](./Device.md)
- [Device Configuration](./DeviceConfiguration.md)
- [Device ID](./DeviceID.md)
- [Device Repository](./DeviceRepository.md)
- [Listener](./Listener.md) 
- [Message](./Message.md)
- [Message ID](./MessageID.md)
- [PEM](./PEM.md)
- [Planner](./Planner.md)
- [Route](./Route.md)
- [Versioning](./Versioning.md)

