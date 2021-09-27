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
- [Definition](#jumpA)
- [Example](#jumpB)
- [Overview](#jumpC)
- [Parts of a Device Configuration](#jumpD)
  - [Label](#jumpE)
  - [Custom Status Set](#jumpF)
- [Route](#jumpG)
- [Data Stream Writer](#jumpH)
- [Transmitter](#jumpI)
- [Properties](#jumpJ)
- [Error Codes](#jumpK)
- [Message Watchdog](#jumpL)

<br>
<br>
<br>

# Definition <a name="jumpA"></a> 
A Device Configuration is a set of modules that contain instructions on how [Messages](./Glossary/Message.md) from a [Device](./Glossary/Device.md) are to be handled and stored in the [Cloud](./Glossary/Cloud.md). A Device Configuration is available for reuse in more than one [Device Model](./Glossary/DeviceModel.md).

<br>

___
# Example <a name="jumpB"></a> 
*Plymouth Manufacturing* wants to buy a new and more efficient IoT Conveyor Belt that has a different belt material. *NuvIoT* was able to use the same set of instructions, or device configuration, from the original *Plymouth IoT Conveyor Belt* without making changes to the system.

<br>

___
# Overview <a name="jumpC"></a> 

The Device Configuration provides instructions for how messages from a [Device](./Glossary/Device.md) are handled and stored on the [Cloud](./Glossary/Cloud.md).  It indicates how a device should work independent of a specific make and model so that it may be reused by different [Device Models](./Glossary/DeviceModel.md).  The primary parts of a device configuration are [Routes](./Glossary/Route.md) and [Properties](./Glossary/DeviceSpecificSettings.md).  

<br>

___
# Parts of a Device Configuration <a name="jumpD"></a> 

- ### ***Label***
    By default, your [Device](./Glossary/Device.md) will have generic label that will be used throughout your application.  The device configuration will let you refer to the [Device](./Glossary/Device.md) by another name within the [Dashboard](./Glossary/Dashboard.md) that is presented to the end user.

<br>

- ### ***Custom Status Set*** <a name="jumpE"></a> 

<br>

___
# Routes <a name="jumpF"></a> 
After the [Cloud](./Glossary/Cloud.md) uses the [Device ID](./Glossary/DeviceID.md) to identify the [Device](./Glossary/Device.md) that sent the [Message](./Glossary/Message.md), the [Planner](./Glossary/Planner.md) will obtain the Device Configuration.  Based on the [Message ID](./Glossary/MessageID.md), it will attempt to lookup which Route should be used to process the [Message](./Glossary/Message.md). 

<br>

The Route will consist of a set of [Pipeline Modules](./Glossary/PipelineModule.md) which may include :

  - [Sentinels](./Glossary/Sentinel.md) - Checks the security of the message
  - [Parsers](./Glossary/Parsers.md) - Extracts values from the message Payload
  - [Workflows](./Glossary/Workflow.md) - 
  - [Business Logic](./Glossary/BusinessLogic.md)
  
-	Sending any output messages to other systems or back to the device
-	Writing the values extracted from the message to a data stream.

<br>

 Routes have a one-to-one mapping between a [Message](./Glossary/Message.md) and a Device Configuration.  

<br>

For more information on Routes, click [here](./UserInfo/Routes.md).


<br>

___
# Data Stream Writers <a name="jumpG"></a> 
Data Streams are used to capture and store data over time and can be created by creating Data Stream Writer objects.    Where and How?

<br>

For more information on Data Streams, click [here](./UserInfo/DataStream.md).

<br>

___
# Transmitters <a name="jumpH"></a> 
Transmitters are used to take Outgoing Messages and send them to a Device or user.

<br>

For more information on Transmitters, click [here](./UserInfo/Routes.md).

<br>

___
# Custom Modules <a name="jumpI"></a> 

<br>

___
# Properties (Device Specific Settings) <a name="jumpJ"></a> 
The Routes associated with your IoT Device may contain workflows or business logic.  In some cases, the rules associated with these modules may need to be configured for specific implementations.  These properties can be added to the Device Configuration so that each installation can be different.  Parameters can be used on the server within workflows or sent to the device so that values can be used within the firmware.

Your IoT device may have some work flows or business logic associated with them.  In a number of cases, the rules associated with the work flows and business logic may have the need to be configured for specific implementations.  For example, the Smart Litter Box may want to have a configurable parameter that will put a delay from the time the cat steps on the litter box until the upper unit rotates, this is done so that the cat won’t be scared of motion.  For some cats it can be as quick as a few seconds, but for others they may prefer to be 60 seconds.  This configuration parameter can be added to the Device Configuration so each installation can be different.  Device Configuration parameters can be used on both the server within work flows or sent down to the device so those values can be used within firmware.

<br>

___
# Error Codes <a name="jumpK"></a> 
Common failures that occur are assigned an error code and can be identified at the Device Configuration level.  These error codes can help diagnose and fix problems.  

 As anyone that does anything with technology knows, things don’t always go as planned with technology.  Parts wear out or break, things happen that are unexpected or other failures occur.  With this in mind the Smart Litter Box team wants to be proactive on handling these failures to ensure customer satisfaction.  Common failures that occur are assigned an error code and can be identified at the Device Configuration level.  These error codes can help diagnose and fix problems.  Error codes can either be generated by the Device Configuration receiving specific messages or can be created by rules added to business logic.  When an Error Code is created, it can send a notification to a distribution list, this can be sent as either an email or as an SMS text message.  Optionally NuvIoT has a very basic Field Service implementation called Field Service Lite.  Service Tickets can be generated when Error Codes are generated and managed by Field Service Lite.    

 <br>

 ___
# Message Watch Dogs <a name="jumpL"></a> 
 A Watchdog is a piece of software that sends out a notification if it does not receive a message in a predefined period of time.  It insures that the device has not lost a connection with the cloud.
 
 In almost all cases you want to ensure that your device remains connected to your cloud application.  If the device is not connected you will likely want to know so you can re-stablish the connection.  After all, a connected IoT device that is not connecting doesn’t provide as much value as it could.  A Watchdog is a piece of software that if not fed will send out notification that there is a problem.  Another way of saying that is if the device doesn’t call in or send a message within a predefined amount of time, let’s say every 15 minutes, we can assume that the Watchdog isn’t getting fed and thus the Watchdog will timeout.  When the watchdog times-out, it can be setup to send a notification to either a user or a distribution group.

 Just as we have watch dogs that ensure that a device calls in and remains online, we also have watch dogs that can be used to look for messages arriving from the device.  If a message does not get received from a device within a specified period of time and Error Code will be generated.  An example of this for our Smart Litter Box is that we expect to have the cat use the litter box at least twice a day.  That means that every 12 hours the cat should be using the litter box at least once.  Since we know that each time the cat uses the litter box it will send an Enter message from the device to the server, we should receive that message at least once every twelve hours.  If we don’t receive a message within that period, we can send out a notification to the cat’s owner that there may be an issue.

