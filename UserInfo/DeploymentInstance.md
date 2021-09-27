---
title: Deployment Instance
keywords: 

status:  new - review
created: 20210901
updated: 20210903
createdby: JennyWrenWolf
updatedby: JennyWrenwolf

Notes: Questions in body (Software-Logistics?  Software-Logistics is mentioned in various documents.  Maybe the relationship between NuvIoT and SL should be explained)  Would you want to refer to this simply as DI? Do you want hyperlinks?  Is IoT Edge Deployment going to be explained more somewhere?
---
[Home](../Index.md) > [User Information](./Index.md)

# Deployment Instance
- [Definition](#jumpA)
- [Example](#jumpB)
- [Overview](#jumpC)
- [Parts of a Deployment Instance](#jumpD)
  - [Name](#jumpE)
  - [Key](#jumpF)
  - [DNS Name](#jumpG)
- [NuvIoT Editions](#jumpH)
  - [Application](#jumpI)
  - [Container](#jumpJ)
  - [Cluster](#jumpK)
- [Configuring Deployment Instance](#jumpL)
  - [App](#jumpM)
    - [Assigned Solution](#jumpN)
    - [Solution Version](#jumpO)
    - [Subscription](#jumpP)
    - [Device Repository](#jumpQ)
  - [Container](#jumpR)
    - [Deployment Type](#jumpS)
      - [Cloud](#jumpT)
      - [Cloud (Managed)](#jumpU)
      - [On Premise (Private Network)](#jumpV)
    - [Working Storage](#jumpW)
    - [Assigned Solution](#jumpX)
    - [Solution Version](#jumpY)
    - [Subscription](#jumpZ)
    - [Image Size](#jumpAA)
    - [Container Repository](#jumpBB) 
    - [Container Tag](#jumpCC)
    - [Device Repository](#jumpDD) 
  - [Cluster](#jumpEE)
    - [Deployment Type](#jumpFF)
      - [Cloud](#jumpGG)
      - [Cloud (Managed)](#jumpHH)
      - [On Premise (Private Network)](#jumpII)
    - [Working Storage](#jumpJJ)
    - [Assigned Solution](#jumpKK)
    - [Solution Version](#jumpLL)
    - [Subscription](#jumpMM)
    - [Device Repository](#jumpNN) 
- [Deploying an Deployment Instance ](#jumpOO)
- [Managing a Deployment Instance](#jumpPP)
- [Updating a Deployment Instance](#jumpQQ)
  - [Solution](#jumpRR)
  - [Runtime](#jumpSS)
- [Monitoring a Deployment Instance](#jumpTT)
  - [Telemetry](#jumpUU)
  - [Instance Explorer](#jumpVV)
  - [Activity History](#jumpWW)
- [Startup Sequence](#jumpXX)
  - [Other States](#jumpYY)
  - [Error Condition](#jumpZZ)
- [Deployment Instance Setting](#jumpAAA)
    - [Advanced Settings](#jumpBBB)

<br>

___
# Definition <a name="jumpA"></a>   
A Deployment Instance is a deployed, or published, version of a [Solution](./Glossary/Solution.md).   When the Instance begins functioning, the IoT [Device](./Glossary/Device.md) and the Cloud begin to communicate.

<br>

___
# Example <a name="jumpB"></a> 

The employees at *Plymouth Manufacturing* cheered when *NuvIoT* published the Deployment Instance for their all of their *Plymouth IoT Conveyor Belts* and their security system.  Now the belts are connected by IoT which will monitor the bearings' temperatures and address overheating problems on their own.

<br>

___
# Overview <a name="jumpC"></a> 
I think the 2nd paragraph belongs with Solutions, not Deployment Instance.

Once a Solution and Device Repository have been created, you are ready to publish your first Deployment Instance as a proof of concept.  Once this is published, it will be up and running and waiting to receive messages.  

Solutions are created independently from how they are deployed so that they may be reused.  An independent solution allows for further developement and testing.  It may also be deployed in georedundant data centers.  When you create an Instance, a configuration is selected that will determine how the solution will scale.

<br>

___

# Parts of a Deployment Instance <a name="jumpD"></a> 
All Deployment Instances must be assigned the following: 
- ### ***Name*** <a name="jumpE"></a> 
    Assign a name to your Deployment Instance

<br>


- ### ***Key*** <a name="jumpF"></a> 

    Assign a short word or phrase that will be used to refer to your Deployment Instance

<br>

- ### ***DNS Name*** <a name="jumpG"></a> 

    Domain Name System - When a Device sends a message to the cloud, it needs to send it to a specific address that is waiting to receive it.  The DNS tells the message where to go.

<br>

___

# NuvIoT Editions <a name="jumpH"></a> 
After assigning a Name, Key and DNS Name, there are four options for publishing your Instances.  They are called NuvIoT Editions. 

- ### ***Application*** (Windows 10 UWP)   coming soon to the Windows Store <a name="jumpI"></a> 

    Your Deployment Instance can run in a stand alone app on your PC or on Windows 10 IoT Core.

- ### ***Container*** <a name="jumpJ"></a> 
    The easiest Deployment Instance is called a Container.  The entire DI is self-contained with a docker (what is a docker?), and all aspects are managed by NuvIoT.  With a simple press of a button, server resources are allocated and your Deployment Instance will be up and running.

- ### ***Cluster*** <a name="jumpK"></a> 
    For high-availability and high-performance, a Cluster Deployment Instance option is the best choice. NuvIoT is currently targeting Kubernetes (will they know what this is?) and can help you customize your Cluster based on your specific needs.

<br>

____
# Configuring Deployment Instance  also called Deployment Type <a name="jumpL"></a> 
Based on the Edition selected, you have different choices for how to configure the Deployment Instance.

 ## **App** <a name="jumpM"></a> 
  With this option, you only need to select your Solution, Subscription and how the data for your devices is stored.  You will likely choose the local version of the store to keep all your device data local in a SQLite database. (How do they chose the local version of the store? Device Repository?)

- **Assigned Solution** <a name="jumpN"></a> 

    Select the pre-constructed Solution that you will be deploying for your DI.
    Auto-populated??? (Name, Key, Planner, Default Listener, Description, Listeners, Device Configuration, Settings)

- **Solution Version** <a name="jumpO"></a> 

    You can optionally select a specific version of your Solution to deploy.  If you do not specify a Solution, the most current Solution will be used.

- **Subscription** <a name="jumpP"></a> 

    After the options are selected for the Deployment Instance, you need to select a subscription.  Subscriptions are used to manage billing for objects created in NuvIoT that have costs related to them.
    Auto-populated? (Name, Key, Description, Invoices, Resources, Credit Card)
        
- **Device Repository** <a name="jumpQ"></a> 

   Select the pre-constructed Device Repository that is going to be assoicated with this DI.
   Auto-poplulated:(Name, Key, Repository Type, Subscription, Device Capacity, Storage Capacity, Service Board, Assigned User, Auto Generate Device Ids, User Owned Devices, Secure User Owned Devices, Device Watchdog Notification Contact, Description)

<br>

## **Container** <a name="jumpR"></a> 

- **Deployment Type** <a name="jumpS"></a> 

    If you run your Deployment Instance in the NuvIoT Cloud, unless you are using our trial instance, you will be billed by how long your Deploymet Instance is running.  If running in your data center or as an IoT Edge Device, please contact NuvIoT for more information.

        *Cloud* vs *Cloud (managed)*???

    - ### ***Deploy to the cloud that NuvIoT manages*** <a name="jumpT"></a> 
    
    - ### ***Deploy in the cloud that you manage*** <a name="jumpU"></a> 

    - ### ***On Premise (Private Network)*** <a name="jumpV"></a> 
         Deploy locally which is sometimes called an IoT Edge Deployment

<br>

- **Working Storage** (define log data) <a name="jumpWW"></a> 

    Indicate where the log data for your DI will be stored. Note: When you specify a pre-constructed Device Repository, you select where both your devices and the data they generate are stored. The options for your DI log data are in the **Cloud** or **Local** in a SQLite database.

- **Assigned Solution** <a name="jumpX"></a> 

  Select the Solution that you will be deploying for your DI.
  Auto-populated??? (Name, Key, Planner, Default Listener, Description, Listeners, Device Configuration, Settings)

- **Solution Version** <a name="jumpY"></a> 

    You can optionally select a specific version of your Solution to deploy.  If you do not specify a Solution, the most current Solution will be used.

- **Subscription** <a name="jumpZ"></a> 

    After the options are selected for the Deployment Instance, you need to select a Subscription.  Subscriptions are used to manage billing for objects created in NuvIoT that have costs related to them.
    Auto-populated? (Name, Key, Description, Invoices, Resources, Credit Card)

- **Image Size** <a name="jumpAA"></a> 

    What is VM?
    Select the size of the VM you will be using for your DI.  The larger the Deployment Instance, the more processing power and thus more messages and complex business logic your DI will be able to handle.
    (Do these need to be described?)
    - Free Trial
    - 1 CPU 512MB 20GB
    - 1 CPU 1GB 25GB
    - 1 CPU 1GB 30GB
    - 2 CPU 2GB 40GB

    <br>

-  **Container Repository** <a name="jumpBB"></a> 

    This needs a little more explanation.  Image of Run Time? Standard Image or Custom One?
    Select the Container Cepository (How??) that contains the image of the RunTime you wish to deploy. This can be one of our standard images.  You have access to our standard images within the Container Runtime Repository. You can also select a custom one that you have built that contains code specific to your application.
    Auto-Populated? (Name, Key, Registry, Namespace, Repository Name, Preferred Tag, User Name, Password, Import Tags, Tags)

- **Container Tag** <a name="jumpCC"></a> 

    (What is this all about?)
    Once you select your Container Repository, it will populate the Container Tag with the default image that will be used. You have the option to override with a specific version or tag.
    
- **Device Repository** <a name="jumpDD"></a> 
   Select the pre-constructed Device Repository that is going to be assoicated with this DI.
   Auto-populated? (Name, Key, Repository Type, Subscription, Device Capacity, Storage Capacity, Service Board, Assigned User, Auto Generate Device Ids, User Owned Devices, Secure User Owned Devices, Device Watchdog Notification Contact, Description)

## **Cluster** <a name="jumpEE"></a> 
Please contact NuvIoT to help you select the best options for your Cluster.

- **Deployment Type** <a name="jumpFF"></a> 
    
    If you run your Deployment Instance in the NuvIoT Cloud, unless you are using our trial instance, you will be billed by how long your Deploymet Instance is running.  If running in your data center or as an IoT Edge Device, please contact NuvIoT for more information.

        *Cloud* vs *Cloud (managed)*???

    - ### ***Deploy to the cloud that NuvIoT manages*** <a name="jumpGG"></a> 
    
    - ### ***Deploy in the cloud that you manage*** <a name="jumpHH"></a> 

    - ### ***On Premise (Private Network)*** <a name="jumpII"></a> 

         Deploy locally which is sometimes called an IoT Edge Deployment.  

- **Working Storage** <a name="jumpJJ"></a> 

    Indicate where the log data for your instance will be stored. Note that when you specific a device repository you select where both your devices and the data they generate are stored. The options for your instance log data are in the **Cloud** or **Local** in a SQLite database.

- **Assigned Solution** <a name="jumpKK"></a> 

  Select the Solution that you will be deploying for your DI.
  Auto-populated??? (Name, Key, Planner, Default Listener, Description, Listeners, Device Configuration, Settings)

- **Solution Version** <a name="jumpLL"></a> 

    You can optionally select a specific version of your Solution to deploy.  If you do not specify a Solution, the most current Solution will be used.

- **Subscription** <a name="jumpMM"></a> 

    After the options are selected for the Deployment Instance, you need to select a Subscription.  Subscriptions are used to manage billing for objects created in NuvIoT that have costs related to them.
    Auto-populated? (Name, Key, Description, Invoices, Resources, Credit Card)

- **Device Repository** <a name="jumpNN"></a> 
   Select the pre-constructed Device Repository that is going to be assoicated with this DI.
   Auto-populated? (Name, Key, Repository Type, Subscription, Device Capacity, Storage Capacity, Service Board, Assigned User, Auto Generate Device Ids, User Owned Devices, Secure User Owned Devices, Device Watchdog Notification Contact, Description)

<br>
<br>
<br>
<br>

___
# Deploying an Instance <a name="jumpOO"></a> 
(How was the Device repository assigned?  Where is the Deployment Instance view. Is this true for App, Container and Cluster?)
Now that the Deployment Instance has been configured, a Subscription and Device Repository have been assigned, the Deployment Instance can be brought online.  This is done by pressing the Manage button on the Deployment Instance view.  This will be visible once your Instance has been saved and re-opened.
 
<br>

___
# Managing a Deployment Instance <a name="jumpPP"></a> 
The following menu represent options for managing a Deployment Instance.
(Is this the same as Instance Monitoring below?  Should this be on a page for managing a NuvIoT product?)
 
 An image goes here but I don't have the link

<br>

___
# Updating an Instance <a name="jumpQQ"></a> 
(How is the Container Image differenct from the Device Repository?  We need to define "Runtime" and is it always managed by Software Logistics/NuvIoT?  Is this only for a Container Edition?)
There are two primary components that make up the Deployment Dinstance.  The first is the Solution.  The second is the Container Image which is called the Runtime and is managed by Software Logistics.  If you decide to use your own software developers, they can use the base Container Image as provided by Software Logistics and build in extra functionality.  

- ### ***Solution*** <a name="jumpRR"></a> 
    Occassionally, you may need to make changes to your Solution: add new business rules, add data points that are to be tracked or other configuration changes.  Because the Solution only gets loaded into the RunTime when it is initially deployed, it will need to be redeployed for the changes to take effect. This can be done by pressing the Reload button on the DI.  
    
    It should be noted that anytime the DI is restarted, it will load the most recent changes to your Solution.  Because some of those features may still be in the process of being developed, it is enouraged to use versioning.  

-  ### ***Runtime*** <a name="jumpSS"></a> 
This needs to be clarified a little.

    Solutions need to be interpreted and executed to process messages coming from devices that are in the field.  For cloud managed container images, this execution takes place in something called a Runtime.  Runtime is located in a Container and that container is primarily managed by Software Logistics.  From time to time, Software Logistics will release new versions of images that these containers run.  These updates may include new features and bug fixes.  Container minor versions will always be updated to support backwards compatibility.  To update the runtime, you will need to stop the host, select a new Container Repository or Container Version, then click on Update Runtime link from the Manage Instance menu.


In computer science, runtime, run time, or execution time is the final phase of a computer program's life cycle, in which the code is being executed on the computer's central processing unit as machine code. In other words, "runtime" is the running phase of a program.

<br>

___
# Instance Monitoring <a name="jumpTT"></a> 

Does this belong on this page or would it be better on a page about monitoring devices?

- ### ***Telemetry*** <a name="jumpUU"></a> 
    There are a number of views that you can use to monitor how your DI is performing.  One of the key metrics are the charts and log updates on the NuvIoT Studio's Manage Deployment Instance module.  There you can view data that is updated in real time.  These show you the number of messages successfully processed per minute, the number of messages that could not be processed per minute as well as updates from the console(???).
  

An image goes here but I don't have the link

    (hu???) Additional telemetry lets you view any error or status messages for the DI which is the RunTime that is executing your Solution as well as the host which is the hardware that is hosting the RunTime.

    There are a couple other options on the telemetry menu.  The first will let you see the Devices that have connected to the Deployment Instance and sent a message along with the time and date of that message (since the deployment instance was restarted???).  The second are Message Watch Dogs. (Might not need this here if using hyperlinks Message Watch Dogs are setup to expect messages from the Device to be sent by a certain time, an example of this is that the Smart Litter Box team can setup a watch dog to expect the litter box to be used at a minimum once every twelve hours, if a message does not arrive from the Smart Litter Box every 12 hours an error will be generated and a notification will be sent.)

- ### ***Instance Explorer*** <a name="jumpVV"></a> 
 
    Another view that is available is the Deployment Instance Explorer.  This view will give an overview of all the components of the Deployment Instance and provide links to view each components performance.  You will also be able to view all the messages that the Deployment Instance knows how to process.

An image goes here but I don't have the link

- ### ***Activity History*** <a name="jumpWW"></a> 
    The Activity History set of menus on the NuvIoT Studio's Manage Deployment Instance module is used to view actions that were performed on the Deployment Instance including updates to the RunTime.  This is helpful to troubleshoot Deployment Instance problems.

<br>

___
# Startup Sequence <a name="jumpXX"></a> 
The startup sequence will begin executing as soon as the (container???) is started.
- Offline - The DI is currently not loaded.
- Starting Runtime - The application RunTime within the Container is just starting up.
- Initializing - The Solution you defined is being loaded into the RunTime.
- Starting - After the solution has been loaded into the RunTime, the DI is started to start listening and processing messages.
- Running - After your DI has succesfully started, it will enter the Running state.  This is where your DI will spend most of it's time.
### ***Other States*** <a name="jumpYY"></a> 
- Pausing - The DI is going into a state where it will be paused.
- Paused - The DI will still be online and monitoring for input commands however it will not be listening for new messages.
- Stopping - The DI is in the process of shutting down.
- Stopped - The DI is currently no longer online.  It will not listen for input commands or new messages.
### ***Error Conditions*** <a name="jumpZZ"></a> 
To recover from an error condition, you must restart your DI.
- Failed to Initialize - Something went wrong while the DI was being loaded.
- Failed to Start - The DI was loaded, however, an unrecoverable error occurred while the DI was being started.
- Fatal Error - Something happened after the DI was started and it could not recover.

<br>

___
# Instance Settings <a name="jumpAAA"></a> 

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

Advanced Settings <a name="jumpBBB"></a> 
   
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
