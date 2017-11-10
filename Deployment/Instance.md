---
title: Instance
keywords: deployment, instance, solution, host, iotapplication

status: inprocess
created: 20170922
updated: 20170922
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Deployment](Index.md)

# Instance

An Instance is a deployed version of a [solution](Solution.md).  Since NuvIoT was built for maximum reuse you configure a solution
independently form how it is deployed.  This allows for creating development and test environments as well as deploying the same
solution in georedundent data centers. When you create an instance you select a [configuration](Configuration.md) that will determine 
how your solution will scale.

Instances can also be either cloud based that runs on the [NuvIoT Infrastructure](NuvIoTInfrastructure.md) or one 
that runs on the [IoT Edge](EdgeTechnology.md). 

## Instance States


#### Startup Sequence
The startup sequence will begin executing as soon as the container is started

* **Offline** - The instance is currently not loaded.
* **Starting Runtime** - The application runtime within the container is just starting up.
* **Initializing** - The [solution](Solution.md) you defined is being loaded into the [runtime](Runtime.md).
* **Starting** - After the solution has been loaded into the runtime, the instance is started to start listening and processing messages.
* **Running** - After your application has succesfully started it will enter the **Running** state, this is where your instance will spend most of it's time.

#### Other States
* **Pausing** - The instance is going into a state where it will be paused.
* **Paused** - The instance will still be online and monitoring for [input commands](../Workflows/InputCommands.md) however it will not be listening for new messages.
* **Stopping** - The instance is in the process of shutting down.
* **Stopped** - The instnace is currently no longer online, it will not listen for input commands or new messages.


#### Error Conditions
To recover from an error condition you must restart your instance 

* **Failed to Initialize** - Something when wrong while the instance was being loaded.
* **Failed to Start** - The instance was loaded, however an unrecoverable error occurred while the instance was being started.
* **Fatal Error** - Something happened after the instance was started it could not recover from.
