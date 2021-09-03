---
title: Deployment Instance
keywords: 

status:  new
created: 20210901
updated: 20210903
createdby: JennyWrenWolf
updatedby: JennyWrenwolf

Notes: Is first section and Configuring Instance redundant?
---
[Home](../../Index.md) > [Deployment Instance](../Index.md) > [Deployment Instance](Index.md)

# Deployment Instance

## **Overview**

Once a Solution and Device Repository have been created, you are ready to publish your first Deployment Instance as a proof of concept.  Once this is published, it will be up and running and waiting to receive messages.  

Solutions are created independently from how they are deployed so that they may be reused.  An independent solution allows for further developement and testing.  It may also be deployed in georedundant data centers.  When you create an instance, a configuration is selected that will determine how the solution will scale.

<br>
<br>

___

Information in the "Make" Studio Model
## **Name**

Assign a name to your Deployment Instance

<br>
<br>

## **Key**

Assign a key to your Deployment Instance

<br>
<br>

## **DNS Name**

Domain Name System - When a Device sends a message to the cloud, it needs to send it to a specific address that is waiting to receive it.  The DNS tells the message where to go.

<br>
<br>

## **NuvIoT Editions**
You have four options for publishing your Instances.  They are called NuvIoT Editions. 

- ### ***Application*** (Windows 10 UWP)   coming soon to the Windows Store

    Your IoT application can either be ran in a stand alone app on your PC or on Windows 10 IoT Core.

- ### ***Container***
    The easiest publication is called a Container.  The entire application is self-contained with a docker, and all aspects of the Deployment are managed by NuvIoT.  With a simple press of a button, server resources are allocated and your IoT application will be up and running.

- ### ***Cluster***
    For high-availability and high-performance, a Cluster deployment option is the best choice. NuvIoT is currently targeting Kubernetes and can help you customize your cluster based on your specific needs.

<br>
<br>

## **Deployment Type**
Once the edition is selected, you need to decide how their IoT application should be deployed.

- ### ***Cloud***

*Cloud* vs *managed cloud*

    Deploy to the cloud that NuvIoT manages
    
    Deploy in the cloud that you manage

- ### ***On Premise (Private Network)***
    Deploy locally which is sometimes called an IoT Edge Deployment

If you run your instance in the NuvIoT cloud, unless you are using our trial instance, you will be billed by how long your instance is running.  If running in your data center or as an IoT Edge Device, please contact NuvIoT for more information.

<br>
<br>

*Working Storage*

*Assigned Solution*

This indicates which solution is to be run.

<br>
<br>

## **Solution Version (optional)**
You can optionally select a specific version of your solution to deploy. If you do not specify a solution the most current solution will be used.

<br>
<br>

*Health Check Enabled*

*Is Deployed*

<br>
<br>

## **Subscription**	
After the options are selected for the Deployment Instance, you need to select a subscription.  Subscriptions are used to manage billing for objects created in NuvIoT that have costs related to them.

<br>
<br>

*Image Size*

*Container Repository*

*Container Tag*

*Device Repository* - what repository is going to be assoicated with this Instance

<br>
<br>
<br>

___
## **Configuring Instance**
Based on the Edition of NuvIoT selected, you have different choices for how to configure the instance.

- ### ***App***
    With this option you only need to select how the data for your devices is stored. In most cases, you will likely choose the local version of the store to keep all your device data local in a SQLite database.

    - ***Assigned Solution***

        Select the solution that you will be deploying for your application
    - ***Solution Version***

        You can optionally select a specific version of your solution to deploy.  If you do not specify a solution the most current solution will be used.
    - ***Subscription***

        Select the solution that you will be deploying for your application.
    - ***Device Repository***

        Select the container repository

- ### ***Container***
    - ***Deployment Type***
       - ***Managed (Cloud)***

         Run this as a container in our data center, this is our most attractive option since deploying is as simple as one click.
       - ***Cloud***

           Run this as a container in your data center or private cloud, please contact us for more information.
       - ***On Premise***

            Run this container in your data center or factory floor as an IoT edge device.

    - ***Solution Version***

    - ***Subscription***

    - ***Working Storage***

        Please indicate where the log data for your instance will be stored. Note that when you specific a device repository you select where both your devices and the data they generate are stored. The options for your instance log data are in the cloud or locally in a SQLite database.
	
    - ***Image Size***

        Select the size of the VM you will be using for your instance, the larger the instance the more processing power and thus more messages and complex business logic your application will be able to handle.

    - ***Container Repository***

        Select the container repository that contains the image of the run time you wish to deploy. This can either be a one of our standard images, you have access to our standard images within the Container Runtime repository. You can also select a custom one that you have built that contains code specific to your application.

    - ***Container Tag***

        Once you select your container repository it will populate the Container Tag with the default image that will be used. You have the option to override with a specific version or tag.
    
    - ***Device Repository***
		
- ### ***Cluster***
    Please contact us to help you select the best options for your cluster.
    - Deployment Type
    - Working Storage
    - Assigned Solution
    - Solution Version
    - Subscription
    - Device Repository

<br>
<br>

___
## **Deploying an Instance**
Now that the Deployment Instance, has been configured, a Subscription and Device Repository have been assigned, the Deployment Instance can be brought online.  This is done by pressing the Manage button on the Deployment Instance view.  This will be visible once your Instance has been saved and re-opened.
How was the Device repository assigned?  Where is the Deployment Instance view.  

<br>
<br>

___
## **Managing Instance**
The following menu represent options for managing an Instance
 
 An image goes here but I don't have the link
<br>
<br>

___
## **Updating an Instance** 
There are two primary components that make up the deployment instance.  The first is the Solution.  The second is the Container Image which is called the Runtime and is managed by Software Logistics.  If you decide to use your own software developers, they can use the base Container Image as provided by Software Logistics and build in extra functionality.  

- ### ***Solution***
    As you make changes to your solution, add new business rules, data points that are to be tracked or other configuration changes you will need to deploy your solution for those to take effect, this is because those configuration changes are stored along with the solution, but the solution only gets loaded into the run-time when the runtime first starts.  This means that changes to the IoT application will only take effect when the solution is reloaded, this can be done by pressing the Reload button on the instance.  It should also be noted that unless you are using versioning for your instance, anytime the instance is restarted it will load the most recent changes to your solution which may include features that are still being developed, that is why it is encouraged to use versioning.

-  ### ***Runtime***

    The Solutions that are created for your IoT applications need to be interpreted and executed to process messages coming from devices that are in the field.  For cloud managed container images, this execution takes place in something called a Runtime, that runtime is ran in something called a Container and that container is primarily managed by Software Logistics, from time to time, Software Logistics will release new versions of that images that these containers run, these updates include new features and bug fixes.  Container minor versions will always be updated to support backwards compatibility.  To update the runtime, you will need to stop the host, select a new Container Repository or Container Version, then click on Update Runtime link from the Manage Instance menu.

<br>
<br>

## **Instance Monitoring**
- ### ***Telemetry***
    There are a number of views that you can use to monitor how your IoT application is performing, one of the key metrics are the charts and log updates on the Manage Instance view that are updated in real time.  These show you the number of messages successfully processed per minute, the number of messages that could not be processed per minute as well as updates from the console.
  

An image goes here but I don't have the link

    Additional telemetry lets you view any error or status messages for the instance which is the run time that is executing your solution as well as the host which is the hardware that is hosting the runtime.

    There are a couple other options on the telemetry menu, the first will let you see the devices that have connected to the deployment instance and sent a message along with the time and date of that message since the deployment instance was restarted.  The second is message watch dogs, message watch dogs are setup to expect messages from the device to be sent by a certain time, an example of this is that the Smart Litter Box team can setup a watch dog to expect the litter box to be used at a minimum once every twelve hours, if a message does not arrive from the Smart Litter Box every 12 hours an error will be generated and a notification will be sent.

- ### ***Instance Explorer***
 
    Another view that the Smart Litter Box team appreciated was the Instance Explorer, this view will give an overview of all the components of the Deployment Instance and provide links to view each components performance.  This is also a good view to see all the messages that the Deployment Instance will know how to handle.

An image goes here but I don't have the link

- ### ***Activity History***
    The Activity History set of menus on the Manage Instance screen is used to view actions that were performed on the deployment instance such as updating the runtime.  This is helpful to troubleshoot deployment problems.

<br>
<br>

___
## **Startup Sequence**
The startup sequence will begin executing as soon as the container is started
- Offline - The instance is currently not loaded.
- Starting Runtime - The application runtime within the container is just starting up.
- Initializing - The solution you defined is being loaded into the runtime.
- Starting - After the solution has been loaded into the runtime, the instance is started to start listening and processing messages.
- Running - After your application has succesfully started it will enter the Running state, this is where your instance will spend most of it's time.
### ***Other States***
- Pausing - The instance is going into a state where it will be paused.
- Paused - The instance will still be online and monitoring for input commands however it will not be listening for new messages.
- Stopping - The instance is in the process of shutting down.
- Stopped - The instnace is currently no longer online, it will not listen for input commands or new messages.
### ***Error Conditions***
To recover from an error condition you must restart your instance
- Failed to Initialize - Something when wrong while the instance was being loaded.
- Failed to Start - The instance was loaded, however an unrecoverable error occurred while the instance was being started.
- Fatal Error - Something happened after the instance was started it could not recover from

Those three things, the Device Configuration, the Listener and planner are all bundled into the concept of a solution that can be created within NuvIoT.  A solution is a reusable object that can be published along with a Device Repository to create a running IoT application that is called a Deployment Instance, or just Instance.  

<br>
<br>
<br>


Instance Settings

    Name
    Key
    Organization ID
    Instance ID
    Host ID
    Deployment Configuration
    Deployment Type
    Queue Type
    Access Key 1
    Access Key 2
    Docker Command Line

Advanced Settings
   
    Name
    Deployment Configuration - Docker Swarm, Kubernetes, Self-Contained, UWP App
    Time Zone
    Deployment Type - Cloud, Managed (Cloud), On Premise (Private Network)
    Log Storage - Local, Cloud
    PEM Queue Technology - In Memory, Kafka, Azure Service Bus, Rabbit MQ
    Cloud Provider
    Primary Cache Type - Local – In Memory, Redis, NuvIoT Native
      SSL for Input Commands
    Input Command Port 
    Data Streams -
    	Name
	    Key
	    Stream Type - 
            AWS Elastic Search	
            AWS S3
            Azure Blob Storage
            Azure Event Hub
            Azure Table Storage
            Built In Data Stream Storage
            Postgresq!
            Point Array Storage
            Redis
            SQL Server
    	Shared Data Stream Connection
	        Additional Terms are here
	    Contains Summary Level Data
        Description
        Fields -
            Name
            Key
            Field Name
            Data Type
            Is Required
            Is Generated in Storage
            Description
    Application Caches
