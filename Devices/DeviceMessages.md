---
title: Device Messages
keywords: device, devicerepo, azureiothub

status: approved
created: 20170922
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Devices](Index.md)

# Device Messages

IoT is all about devices and sensors communicating with the cloud.  These conversations are called Messages.  Device Messages can
be sent either from the device to the cloud or from the cloud back to the device.  If you are using an off-the-shelf type of 
device, you will probably not have the ability to change the message format.

Since messages play such a huge part of any IoT implementation, one of the first things you will do is add device messages. 
When you add your messages, you do not associate them with any specific device type or configuration. You do this so that you can
reuse message definitions on many different configurations.

When you define your Device Messages, you don't simply give them a name and [Key](../Topics/Keys.md), you describe the messages at a level of detail that ensures that the NuvIoT platform has enough information to extract or parse individual fields
from the message payload.  In addition, to identify the message, each message usually has some sort of Message ID.

Messages can contain useful data, including headers, path, query string, and body for HTTP type of messages or topics 
and payloads for message queue type messages.  They may even exist as a stream of data that may be either a string or array of 
bytes.

The data associated with things like headers, path, query strings and topics generally, but not always, contains metadata about the 
message, such as Device and Message ID. The main content of the message is typically found in the payload.  Metadata is generally
made up of string values that can easily be parsed. Payloads can contain either binary or string values.

NuvIoT supports parsing both string and binary payloads.

If your payload is binary, you have many options for parsing the [Message Fields](../Messaging/Parsing/ParsingBinaryMessages.md).

If the payload of your messages is text, NuvIoT currently supports parsing these message formats:

* [JSON](../Messaging/Parsing/ParsingJsonMessage.md)
* [XML](../Messaging/Parsing/ParsingXmlMessage.md)
* [Raw Strings](../Messaging/Parsing/ParsingStringMessage.md)
* [Delimited (comma, tab, etc.)](../Messaging/Parsing/ParsingDelimitedMessage.md)



  

