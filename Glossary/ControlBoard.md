---
title: ControlBoard
keywords: 

status:new
created: 20210924
updated: 20210927
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Do we need definitions for Sensors and Actuator? 9/29 do we need to add Libraries to Def?
---

[Home](../Index.md) > [Glossary](./Index.md)

# Control Board 
## Definition
A Control Board is a piece of hardware located at a [Device](./Device.md).  It is used to read signals from local [Sensors](./Sensor.md) and initiate [Actuators](./Actuator.md) that function at the [Device](./Device.md) level.  The Control Board runs a special version of software called [Firmware](./Firmware.md) that communicates with the [Sensors](./Sensor.md) and [Actuators](./Actuator.md), as well as sends [Messages](./Message.md) to the [Deployment Instance](./DeploymentInstance.md).

*NuvIoT* offers specialized hardware that makes it easy to add a Control Board to a [Device](./Device.md).
- a General Purpose Board that allows for rapid prototyping 
- a Production Ready Board that makes it easy to move into production 

Both of these boards contain libraries that make it easy to communicate with a wide variety of [Sensors](./Sensor.md) and send standardized [Messages](./Message.md) to a [Deployment Instance](./DeploymentInstance.md).

<br>
<br>
<br>

## Example
*Plymouth Manufacturing* owned a conveyor belt at their Tampa location that they wanted to connect to the Internet of Things.  They were able to do so by adding [Sensors](./Sensor.md), [Actuators](./Actuator.md) and a Control Board to the belt.   The belt was then able to communicate with *Plymouth Manufacturing's* Tampa [Deployment Instance](./DeploymentInstance.md).
<br>
<br>
<br>

# Related Terms
- [Actuator](./Actuator.md)
- [Device](./Device.md)
- [Deployment Instance](./DeploymentInstance.md)
- [Firmware](./Firmware.md)
- [Messages](./Message.md)
- [Sensor](./Sensor.md)