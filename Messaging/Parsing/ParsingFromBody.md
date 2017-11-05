---
title: Parsing from Body or Payload
keywords: messages, messaging, devices, parsing, payload, body, post, form, text, http, rest

status: approved
created: 20170927
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Parsing from Body or Payload

In most cases, you will be pulling the content of the message from the body or payload.  For REST type messages, this will be available for message sent with POST or PUT methods.
For other protocols, you may only receive the payload.  Once you have the body or payload, you need to determine the format of the content.

#### Parsing Options
When parsing from the body or payload of the message you have two options:

* The content of the message could also be [binary](ParsingBinaryMessages.md) where the message is a stream of bytes.
* The format of your message can be [text](ParsingTextMessages.md) where the content is a set of ASCII or UTF8 characters.  


Each message type is parsed differently and [text](ParsingTextMessages.md) have the following strategies for extracting values:

* [String](ParsingStringMessage.md)
* [Delimited](ParsingDelimitedMessage.md)
* [JSON](ParsingJsonMessage.md)
* [XML](ParsingXmlMessage.md)
