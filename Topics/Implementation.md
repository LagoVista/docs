---
title: Implementation Overview
keywords: implemenation, guides, overview

status: readyforreview
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md)

# Implementation Overview

1. [Device Types](../Devices/DeviceTypes.md) - It all starts with devices, without Devices you can't have IoT, so the first step is to define the devices 
that you will want to process messages from.  This is simply defining a model number and other basic information about the device

1. [Define Message Types](../Devices/DeviceMessages.md) - Devices communicate with the servers by sending and receiving Messages.
IoT App Studio lets you define messages and fields that will be sent by your devices.

1. [Device Workflows](../Workflows/Index.md) - Getting and storing device data is an important part of what IoT App Studio lets you do, but the real
value is doing something with data.  You can use a Graphical user interface to map processes and check conditions using the 
data contained in messages from your device.  

1. [Pipeline Modules](../PipelineModules/Index.md) - To support ultimate flexibility, you will chain together a set of pipeline 
modules that will act on the device messages as they are received.  A typical chain would be:

    1. [Sentinel](../PipelineModules/Sentinel.md) - Performs Security Checks
    1. [Input Translator](../PipelineModules/InputTranslator.md) - Uses the Message Definitions you created to extract fields
    1. [Workflow](../PipelineModules/Workflow.md) - Perform Device Workflows on your message
    1. [Output Translator](../PipelineModules/OutputTranslator.md) - Take the output from the workflow and convert it to a message to be 
    sent to the device
    1. [Transmitter](../PipelineModules/Transmitter.md) - Communicate back to the device with output messages
    
1. [Listener](../PipelineModules/Listener.md) - The Listener is how the messaages get into the system.  You have complete control on how 
your listeners are configured and can choose from things like listening on a UDP/TCP socket, a REST endpoint, MQTT as well as many other options.   

1. [Planner](../PipelineModules/Planner.md) - Next the planner takes the message from the listener and decides how it should be processed, it uses parsers you configure to extract the device id and optionally a message id.  
This information is then used to determine how the device messages should be processed. 

1. [Device Configuration](../Devices/DeviceConfigurations.md) - To pull all of the above compoments together you will create a Device Configuration. A Device Configuration 
consists of a collection of routes.  Routes are used to map an incoming message to how it will be processed.

1. [Device Repository](../Devices/DeviceRepositories.md) - To help organize your devices you define and allocate storage in the form a device repository.

1. [Solution](../Deployment/Solution.md) - All of the above items make up reusable components that you can assemble into a solution.

1. [Instance](../Deployment/Instance.md) - After you have created your solution, you will choose the compute resources and hardware configuration and deploy your 
solution to an instance. 
    

