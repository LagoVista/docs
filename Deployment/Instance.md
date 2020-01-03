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

#### Configuring your Instance
You have four options for creating your instances, we call these NuvIoT editions:
* **App** - Windows 10 UWP (coming soon to the Windows Store) this can either be ran in a stand alone mode on your PC or on Windows 10 IoT Core.
* **Container** - Your application will be ran as a container with docker.  This can be ran in our cloud, your cloud or even on premise as an IoT Edge Device.  If you run your instance in our cloud, unless you are using our trial instance you will be billed by how long your instance is running.  For running in your data center or as IoT edge device please contact us for more information.
* **Cluster** - For high-availability and high-peformace we recommend using our Cluster deployment option.  We are currently targetting Kubernetes and can help you customize your cluster based on your specific needs.

#### Common Configuration
* **Assigned Solution** - Select the solution that you will be deploying for your application
* **Solution Version** (optional) - You can optionally select a specific version of your solution to deploy.  If you do not specify a solution the most current solution will be used.
* **Subscription** - Select the subscription you will be using for this instance.

#### Instance Options 
Based on the edition of NuvIoT you are selecting you have different choices for how to configure your instance.
##### App
*Device Repository*
With this option you only need to select how the data for your devices are stored.  In most cases you will likely choose the Local version of the store to keep all your device data local in a SQLite database.

#### Container
* Deployment Type *
* Managed (Cloud) - Run this as a container in our data center, this is our most attractive option since deploying is as simple as one click.
* Cloud - Run this as a container in your data center or private cloud, please contact us for more information.
* On Premise - Run this container in your data center or factory floor as an IoT edge device.

* Working Storage *
Please indicate where the log data for your instance will be stored.  Note that when you specific a device repository you select where both your devices and the data they generate are stored.  The options for your instance log data are in the cloud or locally in a SQLite database.

* Image Size *
Select the size of the VM you will be using for your instance, the larger the instance the more processing power and thus more messages and complex business logic your application will be able to handle.

* Container Repository *
Select the container repository that contains the image of the run time you wish to deploy.  This can either be a one of our standard images, you have access to our standard images within the **Container Runtime** repository.  You can also select a custom one that you have built that contains code specific to your application.

* Container Tag *
Once you select your container repository it will populate the **Container Tag** with the default image that will be used.  You have the option to override with with a specific version or tag.

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
