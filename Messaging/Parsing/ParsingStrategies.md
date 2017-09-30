---
title: Parsing Strategies
keywords: messages, messaging, parsing, payload, header

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](Index.md) > [Device Messaging](../Index.md)

# Parsing Strategies

Values can be parsed to find a Message Id and Device ID or values from the message payload.

### Device Id and Message Id
One of the responsibilities of the [planner](../../PipelineModules/Planner.md) is to extact the device an message id.  You can will need to create parsers to extact these values.

### Payload
Your message will likey contain a number of attributes you want to extact to be used in workflow processing, these values defined as part of
the message and considered th emessage payload.

### Parsing Options
There are a number of different options for extracting values from your message

[Headers](ParsingFromHeader.md) - For HTTP/HTTPS message that includes a HTTP Header  
[Query String](ParsingFromQueryString.md) - Parse values from an HTTP(s) GET/POST/PUT or DELETE Query String   
[Path](ParsingFromPath.md) - Extract Values from the URL Path for an HTTP(s) request  
[Topic](ParsingTopics.md) - Extract Values from a message that uses a topic such as a publish scribe protocol  
[Binary Messages](ParsingBinaryMessages.md) - Extact values based on position and data types from a binary message  
[Delimited Messages](ParsingDelimitedMessage.md) - Use delimiters such as commas or tabs to extact values  
[JSON](ParsingJsonMessage.md) - Extract Message Values from a JSON document from any source  
[XML](ParsingXmlMessage.md) - Extract Message Values from an XML document from any source  
[String with Regular Expression](ParsingWithRegEx.md) - Build a Regular Expression to extract multiple values from a string based payload 
[String with Position](ParsingStringMessage.md) - Use start index and length to extact values from a string based message