---
title: Device Repository
keywords: 
status: new
created: 20210903
updated: 20210903
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: 
---
[Home](../Index.md) > [User Information](./Index.md)

# Device Repository

## Definition

A Device Repository is a collection of [Devices](./Glossary/Device)  that belong to a single [Deployment Instance](./).


stores the [Device ID](./Glossary/DeviceID.md) for each provisioned/deployed [Device](./Glossary/Device.md), as well as the [Device Type](./Glossary/DeviceType.md), and the [Device Configuration](./Glossary/DeviceConfiguration.md).  Current data and the [State Set](./Glossary/StateSet.md) of the [Device](./Glossary/Device) are also saved with the [Device ID](./Glossary/DeviceID.md).




Device Repositories
Ultimately IoT is all about the device and sensors that are in the field that will send and receive messages from your IoT applications.  The team knew they needed some mechanism to keep track of those devices.  After going through the tutorials within NuvIoT, the team learned that the devices that need to be created that represent each Smart Litter Box that is sold will need to be created in something called a Device Repository.  A Device Repository is a collection of the definition of devices that are defined as part of a single IoT application.  Each device within a Device Repository needs to have a unique identifier, this is called a Device ID.  As the device sends a message, that device needs to send the unique device id along with the message so the planner can attempt to find the device in the Device Repository for the application that received the message.  The device information that is stored within the Device Repository not only includes the Device ID, but it also includes the specific type of device, the Device Type, as well as the Device Configuration.  The Device Configuration includes a set of properties that can be configured on the device, an example of this is the delay between the cat using the litter box and when the cycle starts that will rotate the upper unit since this could be different based on how the litter box is used.  These configurable properties are also stored along with the device in the Device Repository.  Also, any current data or state associated with the device is store along with the device in the device repository.  You can think of the Device Repository as a database that keeps track of the devices that are in the field along with their state.  As with most of the things that can be configured within NuvIoT, the Smart Litter Box team liked the fact they there were a number of choices that can be made as to how the Device Repository stores the data to help optimize cost, performance and security.  
Creating the Device Repository
Device Repository Type
The first step in creating a Device Repository is to define the type of repository that will ultimately define the storage mechanism used to keep track of the devices.  The most common one is built in storage mechanism called NuvIoT, unless you have some specific needs you should use this one.  Since the Smart Litter Box team wanted to keep their application simple and easy to maintain they chose that built in mechanism.  It was good for them to know there are other options however to include Azure IoT hub, a local version that stores data on premise for the Edge version of the product, as well as dedicated version of the repository.  If the Smart Litter Box team ever needs to move their product to a clustered version of their applications, they know that they can migrate all their devices from NuvIoT to an in-cluster repository.
Subscription
Creating all the objects that make up our IoT application can be done for free, NuvIoT even offers a limited version of a Device Repository you can also create for free, the primary limit here is the number of devices that your solution can support.  Once your application moves out of the testing phase and into production, you’ll need to provide a credit card that can be billed depending on how many devices you plan to support and how much data those devices will accumulate.  When moving to production, you will need to create a subscription that can be used to organize and track expenses for your IoT applications.  The subscription will then be associated with your device repository and will be charged each month it is being used.
Service Board
Another reason why the Smart Litter Box team chose NuvIoT, was that it included a module that supported creating and managing support tickets used to maintain the Smart Litter Boxes.  This module is called Field Service Lite and allows service tickets to be organized into Service Boards.  The Service Board setting on the device repository is used to select which service board tickets generated from errors on devices within this device repository are organized. 
