---
title: Getting Started
keywords: help, overview, tutorial

created: 20171002
updated: 20171002
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
# Getting Started

Building an IoT application is a non-trivial task.  As with any non-trivial task, it is best to tackle it in small, easy, and verifiable steps.  Our built-in Project Management feature with task templates will be very helpful in getting you off to a great start!

In addition, we have created an Expert System that you can use to help capture your requirements and device your solution.  After answering a number of questions, our Expert System will create a project plan, including a set of pre-populated tasks that you can complete to build out your application. 

Before you begin, it is important to understand your goals. There are a lot of cool things that you can do, so it is a good idea to make a list and prioritize. Assuming that you have completed your list, let's get started.

This Getting Started guide assumes that you have a basic idea of what you want to do and that you have identified your sensors.  If you need help with this, please feel free to [Contact Us](http://support.nuviot.com) and we would be happy to discuss options.


#### General Approach

When designing any sort of complex architecture, it is a good idea to decouple the components of your system as much as possible, both for testing and for reuse.  Our system lets you create small, reusable, data-driven configurations for much of what you need to do for any typical IoT system.  Once you have configured your components, you can then assemble them into a fully functional and testable solution.  After a short amount of time, you will assemble a collection of reusable, data-driven components that let you bring on whole new solutions in a small fraction of the time it would take to start from scratch.  

### Without Devices and Sensors, You Cannot Have IoT

Let's start with your devices, sensors and equipment.  The goal of this step is to configure all the specific device types that you want to integrate as well as any messages that they will send and/or receive.

The following assumes that you have decided on some sensors that communicate in a way over which you have no control.  If you are creating your own sensors and communication protocols, you can use the following steps to help capture requirements:


1. Define your [Device Types](./Devices/DeviceTypes.md)
2. Define your [Device Messages](./Devices/DeviceMessages.md)
 
### Define Your Device Workflow
Now that you have figured out how your devices communicate, let's configure your solution to do something with those messages and data.  In this step, you will:
1. Configure the [Inputs](./Workflows/Input.md) by mapping the fields from your messages.  
2. Describe [Attributes](./Workflows/Attributes.md) or data called state that will be 
saved between device calls.  
3. Add [Input Commands](./Workflows/InputCommands.md) where you can expose REST-based services to interact with your 
workflow and ultimately with your devices from third party applications or services.  
4. Add [State Machines](./Workflows/StateMachines.md) to define how your devices should react to
incoming data and messages.   Don't worry, this isn't as hard as it sounds!
5. Define your [Output Commands](./Workflows/OutputCommands.md) that will be used to send data or commands back to the device.


You can do all of this via a WYSWIG designer, where you can add custom scripts and even calls to your custom code with our container frameworks.

Remember, you are creating a reusable component, so it does not have to map 1:1 with your devices.  In this step, you just configure what you want to do and then map it to the devices at a later time.

### Create your Pipeline

To allow for maximum flexibiity and performance, we have chosen a pipeline architecture to process messages.  This allows you to use default modules (where necessary), configure standard modules as needed, and even build a custom module where your needs dictate.  The following is a typical 
chain of pipeline modules:

1. [Listener](./PipelineModules/Listener.md) - A mechanism that listens to a port and protocol or subscribes to events or topics from an external server
1. [Planner](./PipelineModules/Planner.md) - Examines each message for a Message ID and a Device ID, then plans out the rest of the route
1. [Sentinel](./PipelineModules/Sentinel.md) - Authenticates and potentially decrypts the message
1. [Input Translator](./PipelineModules/InputTranslator.md) - Extracts values from the input message
1. [Workflow](./PipelineModules/Workflow.md) - Performs any business logic and prepares output messages
1. [Output Translator](./PipelineModules/OutputTranslator.md) - Converts outputs from the workflow back into a format that the device can understand
1. [Transmitter](./PipelineModules/Transmitter.md) - Sends values back to the device, either directly or by queueing them

### Device Configuration

Once you have created and configured the things that make up a complete solution, you will assemble them in a [Device Configuration](./Devices/DeviceConfigurations.md). 
A Device Configuration consists of a [Route](./Routes/Route.md) that includes all the messages from the [Sentinel](./PipelineModules/Sentinel.md) to the [Transmitter](./PipelineModules/Transmitter.md) 
and definitions of the message types that, when found, should trigger this [Route](./Routes/Route.md).  A device configuration can have many routes.


### Assemble a Solution

A [Solution](./Solutions/Index.md) is a collection of [Device Confiugrations](./devices/DeviceConfigurations.md) 
that implements a specific set of services to manage a device.  A solution can consist of many device configurations.  In addition,
your solution needs to specify the [Listeners](./PipelineModules/Listener.md) that will listen for messages from your devices.  Finally, a solution must include exactly one [Planner](./PipelineModules/Planner.md) module to map the incoming messages to [Routes](./Routes/Route.md).

A solution is a complete specification that will listen for and process messages from a device.

### Instance

A solution describes how your application should work.  To make it do something, you need to deploy it as an instance.  To deploy it, you need to select a [Deployment Configuration](./Deployment/DeploymentConfiguration.md) that will determine the physical compute
resources that will be allocated.  You also need to specify a key that will be used to the domain name where you can access your listeners.
