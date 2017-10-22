---
title: Parsing Index
keywords: parsers, messaging, messages

status: readyforreview
created: 20170927
updated: 20171018
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](Index.md) > [Device Messaging](../Index.md)

# Messaging Parsing

### Introduction

When building a system that process messages, you need to normalize the content of those messages into a format you can use in your application.

Normally this is done by writing code.  In NuvIoT we use a data driven approach to describe your messages and then have a powerful parsing 
engine that will extract the data from those messages and turn it into a format that can be used in your application.

This has two key benefits over parsing messages in code:
1. To update your parsing algorithm, you don't need to compile and re-build your application, you can simply make the changes and redeploy.
1. The protocols and message definitions are self-documenting as part of the solution, not burried somewhere in a code file.

From a performance perspective, the parsing algorithm was optimized and in fact uses many of the same constructs you would use if you 
developed a hard coded parsing algorithm, we just provide a data-driven mechanism for ultimate flexibility.

#### Overview
* [Parsing Overview](Overview.md)
* [Device ID Parsing](DeviceIdParsing.md)
* [Message ID Parsing](MessageIdParsing.md)


#### Parsing from Different Locations within a Message
* [Parsing from Header](ParsingFromHeader.md)
* [Parsing from Path](ParsingFromPath.md)
* [Parsing from Query String](ParsingFromQueryString.md)
* [Parsing from Topic](ParsingFromTopic.md)
* [Parsing from Message Body or Message Payload](ParsingFromBody.md)

#### Parsing content from within messages
* [Framing Bytes](FramingBytes.md)
* [Parsing a Binary Message](ParsingBinaryMessages.md)
* [Parsing a Delimited Message](ParsingDelimitedMessage.md)
* [Parsing Text with Position](ParsingStringMessage.md)
* [Parsing Text with Regular Expressions](ParsingWithRegEx.md)
* [Parsing a JSON Message](ParsingJsonMessage.md)
* [Parsing an XML Message](ParsingXmlMessage.md)
