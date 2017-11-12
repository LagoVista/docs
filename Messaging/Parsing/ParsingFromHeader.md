---
title: Parsing from Headers
keywords: messages, messaging, parsing, payload, header, http, rest

status: approved
created: 20170927
updated: 20171010
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing from Headers

If your message was sent via REST (HTTP or HTTPS), the headers that were sent with your message will be made available to the parsing algorithm.

**Name** (required)  
Textual name to describe the the path locator.

**Key**  (required)  
The key is used as the place holder to extract the field from the path.

**Search Location**  (required)  
When parsing from an HTTP header, the value `Headers` should be selected

**Storage Type** (required for parsing from messages, not used for Message Id and Device Id Parsing)
You will also need to add a [Storage Type](../TypeSystem/Index.md) to identify how this field should be stored.

**Header Name** (required)  
Name of the HTTP header that contains the value.

**RegEx Value Selector**  
Can can provide a regular expression to extract values from the returned value.

**Additional Validation Fields**  
After the message has been parsed there are a number of [options](Validation.md) that can be used to validate the value, if validation fails, the message will be rejected.

