[Home](../Index.md) > [Pipeline Modules](Index.md)

# Planner

The planner is responsible for determine how the incoming messages should be processed. Although you can implement
your own custom planner, the default once will use the [parsers](../Messaging/Parsing/DeviceMessageIdParsing.md) as configured [device configuration](../Devices/DeviceCOnfigurations.md) 
to find a match, once a match is found, the [route](../Routes/Route.md) associated with that device configuration is determined 
and the steps to process the message are queued up for execution.

Unless you have some very specific needs you should be able to use the standard planner.
