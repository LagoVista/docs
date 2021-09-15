---
title: Device Configurations
keywords: device, deviceconfiguration, devicetypes route, pipelinemodules

status: inprocess
created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Devices](Index.md)

# Device Configurations

## **Definition**
A Device Configuration is a set of instructions called [Routes](./Routes/Route.md) which provide instructions on how [Messages](./) from a [Device](./Devices/Index.md) are handled and stored in the Cloud.  It is built independently of any [Device](./Devices/Index.md) so it can be reused.  A Device Configuration also contains [Properies](./), [Custom State Sets](./), [Error Codes](./) and [Watch Dogs](./).

<br>

## Example

<br>



<br>
<br>
<br>
<br>





Move to Routes page

When you create a [solution](../Deployment/Solution.md) you specify a set of [listeners](../PipelineModules/Listener.md) and a
planner as well as any supported device configurations.  The listeners job is to listen for messages, once a message is received
it is passed to the listener that determine the message id and device id.  With those two pieces of information it will attempt
to find a match for a device configuration based on known devices and supported messages types.  If a match is found it will 
then use the steps as defined in the route to process the rest of the message.

Device Properties can be used as [part of your scripts](../Scripting/WorkingWithProperties.md).

![planner process](../Images/Planner.png) 