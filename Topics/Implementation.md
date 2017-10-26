---
title: Implementation Overview
keywords: implemenation, guides, overview

status: approved
created: 20171009
updated: 20171012
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md)

# Implementation Overview

1. [Device Types](../Devices/DeviceTypes.md) - It all starts with devices. Without devices, you cannot have IoT. The first step is to define the devices from which you will want to process messages.  This involves simply defining a model number and other basic information about each device.

1. [Message Types](../Devices/DeviceMessages.md) - Devices communicate with the servers by sending and receiving messages.
IoT App Studio lets you define messages and fields that will be sent by your devices.

1. [Device Workflows](../Workflows/Index.md) - Getting and storing device data is an important part of what IoT App Studio lets you do, but the real
value comes in doing something with the data.  You can use a graphical user interface to map processes and check conditions using the 
data contained in messages from your device.  

1. [Pipeline Modules](../PipelineModules/Index.md) - To support ultimate flexibility, chain together a set of Pipeline 
Modules that will act on the device messages as they are received.  A typical chain includes:

    1. [Sentinel](../PipelineModules/Sentinel.md) - Performs security checks
    1. [Input Translator](../PipelineModules/InputTranslator.md) - Uses the message definitions you created to extract fields
    1. [Workflow](../PipelineModules/Workflow.md) - Performs device workflows on your message
    1. [Output Translator](../PipelineModules/OutputTranslator.md) - Takes the output from the workflow and converts it to a message to be 
    sent to the device
    1. [Transmitter](../PipelineModules/Transmitter.md) - Communicates back to the device with output messages
    
1. [Listener](../PipelineModules/Listener.md) - The Listener is how the messages get into the system.  You have complete control over how 
your Listeners are configured and can choose from options such as listening on a UDP/TCP socket, a REST endpoint, MQTT, and many others.   

1. [Planner](../PipelineModules/Planner.md) - Next, the Planner takes the message from the listener and decides how it should be processed.  It uses parsers you configure to extract the Device ID and optionally a Message ID. This information is then used to determine how the device messages should be processed. 

1. [Device Configuration](../Devices/DeviceConfigurations.md) - To pull all of the above components together, create a Device Configuration. A Device Configuration 
consists of a collection of routes.  Routes are used to map an incoming message to how it will be processed.

1. [Device Repository](../Devices/DeviceRepositories.md) - To help organize your devices, define and allocate storage in the form of a Device Repository.

1. [Solution](../Deployment/Solution.md) - All of the above items make up reusable components that you can assemble into a Solution.

1. [Instance](../Deployment/Instance.md) - After you have created your solution, choose the compute resources and hardware configuration and deploy your 
Solution to an Instance. 
    

