---
title: Pipeline Modules
keywords: pipelinemodules

status: approved
created: 20170922
updated: 20171012
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) 

# Pipeline Modules

To allow for maximum reuse and scalability, build your application as a set of Pipeline Modules.  Once the [Listener](Listener.md) 
receives a message that is handed off to the [Planner](Planner.md) to determine processing, a [Route](../Routes/Route.md) is created.

A route is a series of Pipeline Modules that are executed sequentially to perform processing on incoming messages.

The following are the default Pipeline Modules that make up a typical route:

* [Sentinel](Sentinel.md) - Authenticates and potentially decrypts the message
* [Input Translator](InputTranslator.md) - Extracts values from the input message
* [Workflow](Workflow.md) - Performs any business logic and prepares output messages
* [Output Translator](OutputTranslator.md) - Converts outputs from the workflow back into a format that the device can understand
* [Transmitter](Transmitter.md) - Sends values back to the device, either directly or by queueing them

Most of the time, message business logic is done in the [Workflow Module](Workflow.md).  The workflow allows for a significant amount
of customization in the form of scripting and creating [State Machines](../Workflows/StateMachines.md).  If these don't meet
your needs, you can always create Pipeline Modules with custom code and deploy them as containers to participate in the device workflow.
