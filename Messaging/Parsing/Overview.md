---
title: Parsing Overview
keywords: parsers, messaging, messages

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](Index.md) > [Device Messaging](../Index.md)

# Parsing Overview

Since in many cases you cannot dictate what messages your devices will send, you can create contracts that define how data should be extracted from your messages.  Extracting this data is independent of the message source.  

In addition, the same parsing system is used to extract Message IDs and Device IDs from the message.

### Message Components (Search Location)

Depending on the source of your message, you will have different areas from which to extract fields from your message.  In addition, you may have metadata about the message (if applicable based on the Listener you are using).

#### Headers
For HTTP sources such as REST or SOAP, these are the [HTTP Headers](ParsingFromHeader.md) that come along with the message.  For other transport types, additional data may be available.  See documentation about the particular Listener you are using.

#### Query String
This is primarily used for REST-based protocols but can be used to extract values from a [query string](ParsingFromQueryString.md) using key value pairs.

#### Topics
For pub/sub protocols, messages can be identified by [topics](ParsingFromTopic.md).

#### Path
In addition to the server and port number being available in your message, if your message also specifies a resource address such as https://mydomain.coom/device/run/2342, the /device/run/2342 can be used to populate the message content.

#### Body or Payload

If you have a REST message, this will be the POST or PUT content, most transports have some mechanism for passing data along with your message.  They body can be either [Binary](ParsingBinaryMessages.md) or Text.  A Text message can be one of the following:
* [String](ParsingStringMessage.md)
* [Delimited](ParsingDelimitedMessage.md)
* [JSON](ParsingJsonMessage.md)
* [XML](ParsingXMLMessage.md)

### Message ID and Device ID Parsers
An important part of processing the incoming data is to identify the [message id](MessageIdParsing.md) and [device id](DeviceIdParsing.md).
This can be extracted using the same mechanisms available for extracting values for a message.
The difference is, since we do not define the type of message, we need to include things such as delimiter, 
endianness, and other values that are normally specified at the message level to extract the field.  

You can also use reg ex validation to ensure the field is in the correct format.

Your Message and Device IDs are always saved as strings.

### Message Value Parsers
There are two parts of defining how values are parsed out of a message.  The first is defining common parameters such as the delimiter, quoted text, and endianness at the message level.  Next, define field particulars such as the field index or parameter name.  More details are available based on the type of message.

There are three important parts of defining how your messages are parsed and used, including: 
* [Key](../../Topics/Keys.md) - The key will be used to identify this value as it is used to further process the message
* [Search Location](#Search-Location) - The Listener will populate different components that can be used to search for message values
* [Storage Type](#Storage-Types) - The data type that is used to identify the data


#### Search Locations
The following are four different areas that can be searched.  These values are populated from the Listener and more details are available in that section.  Note that not all Listeners support all the different locations.
* Headers
* Query String
* Path
* Body or Payload

#### Storage Types
These make up the type system that is used throughout the rest of the system:
* String - Text, currently single byte ASCII text is supported
* Integer - 64 Bit Signed Integer
* Decimal - Double Precision Floating Point Number
* True False - Boolean
* GeoLocation - Stored as Latitude and Longitude in Decimal Degrees with 6 decimal points
* Date Time - Date Time Stored in [ISO 8601 Format](https://en.wikipedia.org/wiki/ISO_8601)

*Note* - Arrays are not currently supported.  Please [contact us]('https://www.IoTAppStudio.com/Support/Request') if they are required for implementation.

### Fine Tuning Selections
For any textual values, use a [regular expression](RegExValueSelector.md) to extract a value. 

### Validating Message Values
Once a value is extracted, you can use three mechanisms to [validate](Validation.md) the value prior to using it in your workflow.





