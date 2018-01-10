---
title: Content Types
keywords: messages, messaging, contenttype, listener, json, string, binary, xml, delimited

status: approved
created: 20170927
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Device Messaging](Index.md)

# Content Types

NuvIoT is built to be flexible and work with your messages.  To do so, we accept different types 
of content for your messages.

The following Message Content Types are supported:

* **No Content** - There is not body or payload for your message, it only contains data in parts such as the path, query string.  An example of this is a REST GET message or message queue type of message where only a topic has been provided.
* **Binary** - A stream of bytes that represents the content of your message and can be parsed with our [Binary Parser](./Parsing/ParsingBinaryMessages.md).
* **Delimited** - A set of characters that are separated by some delimiter like a comma.  Delimited Messages can be parsed with our [Delimited Message Parser](./Parsing/ParsingDelimitedMessage.md).
* **JSON** - We support receving messages in [JSON](https://en.wikipedia.org/wiki/JSON).  JSON Messages can easily be parsed with our [JSON Message Parser](./Parsing/ParsingJsonMessage.md).
* **String** - String messages can be parsed by either a regular expression or position with a string using our [String Parser](./Parsing/ParsingStringMessage.md).
* **XML** - XML Messages can be processed using XPath and our [XML Message Parser](./Parsing/ParsingXmlMessage.md).
