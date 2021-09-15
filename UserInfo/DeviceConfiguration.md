---
title: Device Configurations
keywords: device, deviceconfiguration, devicetypes route, pipelinemodules

status: new
created: 20210903
updated: 20210909
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Hyperlinks?
---
[Home](../Index.md) > [User Information](./Index.md) 

# Device Configurations

## **Definition**
A Device Configuration is a set of modules that contain instructions on how [Messages](./Glossary/Message.md) from a [Device](./Glossary/Device.md) are to be handled and stored in the Cloud. A Device Configuration is available for reuse in more than one [Device Model](./Glossary/DeviceModel.md).

<br>
<br>
<br>

## **Example**
*Plymouth Manufacturing* wants to buy a new and more efficient IoT Conveyor Belt that has a different belt material. *NuvIoT* was able to use the same set of instructions, or device configuration, from the original *Plymouth IoT Conveyor Belt* without making changes to the system.


<br>
<br>
<br>

___
# Overview

The Device Configuration provides instructions for how messages from a device are handled and stored on the Cloud.  It indicates how a device should work independent of a specific make and model so that it may be reused by different Device Types.  The primary parts of a device configuration are Routes and Properties.  

<br>
<br>
<br>

___
# Parts of a Device Configuration

## **Labels**
By default, your device will have generic label that will be used throughout your application.  The device configuration will let you refer to the device as by another name within the dashboard that is presented to your user.
## **Custom Status Set**

## **Routes**
A route identiies how a [Message](./Glossary/Message.md) is processed when received in the Cloud.  It consists of a set of [Pipeline Modules](./Glossary/PipelineModule.md) which include 

- [Sentinels](./Glossary/Sentinel.md) 
- [Parsers](./Glossary/Parsers.md)
- [Workflows](./Glossary/Workflow.md) 
- [Business Logic](./Glossary/BusinessLogic.md)

## **Data Stream Writers**
Data Streams are used to capture and store data over time and can be created by creating Data Stream Writer objects.    Where and How?
## **Transmitters**
Transmitters are used to take Outgoing Messages and send them to a Device or user.


## **Custom Modules**
## **Properties**
The Routes associated with your IoT Device may contain workflows or business logic.  In some cases, the rules associated with these modules may need to be configured for specific implementations.  These properties can be added to the Device Configuration so that each installation can be different.  Parameters can be used on the server within workflows or sent to the device so that values can be used within the firmware.

Your IoT device may have some work flows or business logic associated with them.  In a number of cases, the rules associated with the work flows and business logic may have the need to be configured for specific implementations.  For example, the Smart Litter Box may want to have a configurable parameter that will put a delay from the time the cat steps on the litter box until the upper unit rotates, this is done so that the cat won’t be scared of motion.  For some cats it can be as quick as a few seconds, but for others they may prefer to be 60 seconds.  This configuration parameter can be added to the Device Configuration so each installation can be different.  Device Configuration parameters can be used on both the server within work flows or sent down to the device so those values can be used within firmware.
## **Error Codes**
Common failures that occur are assigned an error code and can be identified at the Device Configuration level.  These error codes can help diagnose and fix problems.  
## **Message Watch Dogs**
 A Watchdog is a piece of software that sends out a notification if it does not receive a message in a predefined period of time.  It insures that the device has not lost a connection with the cloud.

<br>
<br>
<br>
