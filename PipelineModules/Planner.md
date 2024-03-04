---
title: Planner
keywords: listeners, pipelinemodule, route, devicemessage, message, deviceid

status: inprocess
created: 20170927
updated: 20240302
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../index.md) > [Pipeline Modules](Index.md)

# Planner

The Planner is responsible to determine how the incoming messages should be processed. Messages are processed by things called a [route](../Routes/Route.md).  Routes are associated with a [device configuration](../Devices/DeviceConfigurations.md) and are mapped to a specific [messages](../Messaging/Index.md) within that device configuration.  When you provision a device, you assign it a unique device id and when you create a message definition, you assign it a message id.

Ultimately the goal of an IoT system is to process messages that are sent from your devices.  When your device sends a message it **must** include two key components, it's Device Id (to identify which device sent the message) and a Message Id (to identify the content of the message being sent).  With the Device Id, we can identify the device configuration, the Message Id, we can identify the message within that device configuration and ultimately identify the route that should be used to process the message.

Now that we know that the Device Id and Message Id can be used to identify the Route that should be used to process the message we need to extract those two pieces of data from the message.  Extracting that information is done with built in parsers.  Although they work exactly the same, your 
planner will contain at a minimum two parsers, one for the [message id](../Messaging/Parsing/MessageIdParsing.md) and one for the [device id](../Messaging/Parsing/DeviceIdParsing.md).

Once the planner identifies the device id, it will attempt to find that device in your device repository, if it finds a match, the planner will identify the device configuration and then based on the identified message id, it will look for a matching message within that device configuration, if a match is found, the route associated with that message will be loaded and the steps identified with that route will be scheduled for execution.  If at any point the planner does not identify a match, either by not finding a message or device id in the message, not finding a matching device for the device id, or not finding a matching message within the device configuration, that incoming message will be dead-lettered, and stored so that it can be reviewed to determine the point of failure.

Planners for your organization can be viewed at https://www.nuviot.com/iotstudio/make/planners.