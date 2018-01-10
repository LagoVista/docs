---
title: Parsing from a Path
keywords: messages, messaging, parsing, rest, querystring, path, http

status: approved
created: 20170927
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing from a Path

To extract a value from a path, usually from a URL of a REST type message use search location of `Path`.  To extract values from
a query string of a REST type message use a search location of [Query String](ParsingFromQueryString.md).

**Name** (required)  
Textual name to describe the the path locator.

**Key**  (required)  
The key is used as the place holder to extract the field from the path.

**Search Location**  (required)  
When parsing from a path, the value `Path` should be selected

**Path Locator** (required)  
A string that uses the key as a place holder to extract the field.  The wild card * may be used.

**Storage Type** (required for parsing from messages, not used for Message Id and Device Id Parsing)
You will also need to add a [Storage Type](../TypeSystem/Index.md) to identify how this field should be stored.

**RegEx Value Selector**  
Can can provide a regular expression to extract values from the returned value.

**Additional Validation Fields**  
After the message has been parsed there are a number of [options](Validation.md) that can be used to validate the value, if validation fails, the message will be rejected.


## Consider the following example
**Key**  was defined as the text `deviceid`

**Path Locator** was defined as `/deviceadmin/{deviceid}`


_Input Path_ = `/deviceadmin/device1234`

The value ```device1234``` will be parsed and made available to the [message](Index.md), [message id](MessageIdParsing.md) or [device id](DeviceIdParsing.md)

## Example using wild cards

**Key**  was defined as the text `status`

**Path Locator** was defined as `/motion/*/{status}`


_Input Path_ = `/motion/device001/active`

The value ```active``` will be parsed and made available to the [message](Index.md), [message id](MessageIdParsing.md) or [device id](DeviceIdParsing.md)
