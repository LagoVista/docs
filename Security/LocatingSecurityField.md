---
title: Security Overview
keywords: messaging, devices, security, authorization, security fields

status: readyforapproval
created: 20171112
updated: 20171120
createdby: bytemaster-0xff
updatedby: klworkman
---
# Locating Security Fields

[Security Fields](SecurityFields.md) are pieces of data within a message that let you ensure that the 
[Located Device ID](../Messaging/Parsing/DeviceIdParsing.md) belongs to a device that you have provisioned.

A primary goal of NuvIoT is to work with your devices rather than requiring you to make changes to your device
firmware to work with NuvIoT.  So, we have made locating the security fields within your message configurable.

#### Setting up the Sentinel Module
The [Sentinel Pipeline Module](../PipelineModules/Sentinel.md) is used to ensure that your devices are 
authorized prior to processing messages from them.  Any message from an 
unauthorized device is placed in an Unauthorized Message folder.  You specify how the security field
is located and used within the sentinel module.  

#### Finding your Security Field within a Message
You can search for [Message Fields](../Messaging/MessageFields.md), [Message ID](../Messaging/Parsing/MessageIdParsing.md) and [Device IDs](../Messaging/Parsing/DeviceIdParsing.md) from within your message, so
you can configure parsers to look for IDs in different locations of your message as follows:

* [Header](../Messaging/Parsing/ParsingFromHeader.md)
* [Path](../Messaging/Parsing/ParsingFromPath.md)
* [Topic (Pub/Sub Model)](../Messaging/Parsing/ParsingFromTopic.md)
* [Query String](../Messaging/Parsing/ParsingFromQueryString.md)
* [Body or Payload](../Messaging/Parsing/ParsingFromBody.md)
 
