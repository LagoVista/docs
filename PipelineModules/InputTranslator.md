---
title: Input Translator
keywords: listeners, inputtranslator, pipelinemodule

status: inprocess
created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Pipeline Modules](Index.md)

# Input Translator

The Input Translators job is to take the incoming message in it's raw format and extract the values into a normalized array of 
key value pairs so that further processing can be done on the message.  As part of defining your [device messages](../Devices/DeviceMessages.md) 
you defined the [fields](../Messaging/MessageFields.md) that make up the message, as part of this you also defined how those fields
should be extracted or [parsed](../Messaging/Parsing/Index.md) from the message. 

Since we have the message and we have the template as to how the fields should parsed, our efficent parser algorithm will 