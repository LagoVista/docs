---
title: Security Overview
keywords: messaging, devices, security, authorization, security fields

status: readyforreview
created: 20171112
updated: 20171112
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Locating Security Fields

[Security fields](SecurityFields.md) are pieces of data within your message that let you ensure that the 
[located device id](../Messaging/Parsing/DeviceIdParsing.md) belongs to the device you provisioned.

Since a primary goal of NuvIoT is to work with your devices, not have to make changes to your device
firmware to work with NuvIoT, locating the security fields within your message is configurable.

#### Setting up the Sentinel Module
The [Sentinel pipeline module](../PipelineModules/Sentinel.md) is used to ensure that your devices are 
authorized prior to completing being processed.  If the message is not authorized the message from the 
unauthorized device is placed in unauthroized message folder.  You will specify how the security field
will be located and used within the sentinel module.  

#### Finding your security field within a message
As you can search for message [fields](../Messaging/MessageFields.md), [message id](../Messaging/Parsing/MessageIdParsing.md) and [device ids](../Messaging/Parsing/DeviceIdParsing.md) from within your message
you can configure parsers to look for ids in different locations of your message:

* [Headers](../Messaging/Parsing/ParsingFromHeader.md)
* [Path](../Messaging/Parsing/ParsingFromPath.md)
* [Topics (Pub/Sub Model)](../Messaging/Parsing/ParsingFromTopic.md)
* [Query String](../Messaging/Parsing/ParsingFromQueryString.md)
* [Body or Payload](../Messaging/Parsing/ParsingFromBody.md)
 
