---
title: Routes
keywords: applications, routes, messages, devices

status: readyforreview
created: 20171022
updated: 20171022
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md)

# Route

Routes are used to create a path through [Pipeline Execution Modules](../PipelineModules/Index.md) that will be used to process
[Incoming Messages](../Messaging/IncomingMessages.md) from your devices.  

A [Device Configuration](../Devices/DeviceConfigurations.md) can have many routes and each route is associated 
with a [Message Id](../Messaging/Parsing/MessageIdParsing.md).

Here is the basic flow.
1. The [Planner](../PipelineModules/Planner.md) will determine the device configuration from the [Device Id](../Messaging/Parsing/DeviceIdParsing.md) and the message from the [Message Id](../Messaging/Parsing/MessageIdParsing.md) from the incoming message. 
1. Based the type of message and device configuration, the planner will look up the corresponding route.
1. The Planner will then create a set of instructions that reference pipeline modules that will executed to process the message. 



### Creating a Route
1. Ensure you have created and configured the [Pipleine Modules](../PipelineModules/Index.md) you will use in the route. 
1. Open a [Device Configuration](../Devices/DeviceConfigurations.md)
1. Click Add Route - A default route will be created where you can select pipeline modules.
1. Select a [Message Definition](../Messaging/Index.md), doing so will associate this route with a message as it arrives from the device.
1. Click on a node in our route and select a Pipeline Module.
1. To add a [Transmitter](../PipelineModules/Transmitter.md), click the Add Transmitter button above route canvas.
1. Configure [Mappings](./Mappings/Index.md) between applicable nodes.

Below is an example of a typical route

![Route Exampmle](../Images/Route.png)

1. For this route [Device Security](../Devices/Security.md) is handled by the [Listener](../PipelineModules/Listener.md), so we can use an Anonymous [Sentinal module](../PipelineModules/Sentinel.md).
2. The [Incoming Mesage](../Messaging/IncomingMessages.md) contains enough information to [Parse the Fields](../Messaging/Parsing/Index.md) from the message so we use a default message [Input Translator](../PipelineModules/InputTranslator.md).
3. We Execute a [workflow](../Workflows/Index.md) called Simple Workflow that you have created
4. The [Output Translator](../PipelineModules/OutputTranslator.md) takes the [Output Commands](../Workflows/OutputCommands.md) from the workflow and convert it to an [outgoing messages](../Messaging/OutgoingMessages.md) that can be either sent back to the device or a 3rd party endpoint with a [Transmitter](../PipelineModules/Transmitter.md).
5. The [Transmitter modules](../PipelineModules/Transmitter.md) take those [Outogoing Messages](../Messaging/OutgoingMessages.md) and either send them back to the device via the original listener, or forward to a 3rd party endpoint.



### Mappings
To allow for maximum reusability, some pipeline modules require [mappings](./Mappings/Index.md).
* **Input Translator to Workflow Inputs** [Map](./Mappings/OutputTranslatorToTransmitter.md) the [fields](../Messaging/MessageFields.md) from [messages](../Messaging/IncomingMessages.md) that were [parsed](../Messaging/Parsing/Index.md) with the [Input Translator](../PipelineModules/InputTranslator.md) to [Inputs](../Workflows/Input.md) on the [Workflow Module](../PipelineModules/Workflow.md) that will process the message.
* **Workflow Output Commands to Output Translator** [Map](./Mappings/OutputTranslatorToTransmitter.md) the [outputs](../Workflows/OutputCommands.md) created by the [Device Workflow](../Workflows/index.md) to [messages](../Messaging/OutgoingMessages.md) that will be created by the [Output Translator](../PipelineModules/OutputTranslator.md).
* **Output Translator to Transmitter** [Map](./Mappings/OutputTranslatorToTransmitter.md) the messages you created with the [Output Translator](../PipelineModules/OutputTranslator.md) to the [Transmitter](../PipelineModules/Transmitter.md) that will send them.