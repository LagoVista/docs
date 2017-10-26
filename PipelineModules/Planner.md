---
title: Planner
keywords: listeners, pipelinemodule, route, devicemessage, message, deviceid

status: inprocess
created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Pipeline Modules](Index.md)

# Planner

...more details coming soon...

The planner is responsible for determine how the incoming messages should be processed. Although you can implement
your own custom planner, which you will use your custom [message](../Messaging/Parsing/MessageIdParsing.md) and [device](../Messaging/Parsing/DeviceIdParsing.md) as configured [device configuration](../Devices/DeviceCOnfigurations.md) 
to find a match, once a match is found, the [route](../Routes/Route.md) associated with that device configuration is determined 
and the steps to process the message are queued up for execution.

Unless you have some very specific needs you should be able to use the standard planner.
