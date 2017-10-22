---
title: Parsing Binary Messages
keywords: parsers, binary, data, messaging, messages

status: approved
created: 20170927
updated: 20171010
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing a Binary Message

## Intro 
Parsing a binary message is fairly complex, but there are many options for specifying how values should be extracted from the binary message payload.

## Endianness
The device may produce data in either [little endian](https://en.wikipedia.org/wiki/Endianness#Little) or [big endian](https://en.wikipedia.org/wiki/Endianness#Big).  Unless the firmware of your device is customizable, this will be dictated by the device.  This is set at the device level since the device will send all its values in one format or the other rather than a mixed format. 

## Data Types Available
The following are the available data types that can be extracted from a binary message:
* char - big or little endian
* byte - big or little endian
* Int16 - big or little endian
* UInt16 - big or little Endian
* Int32 - big or little endian
* UInt32 - big or little endian
* Int64 - big or little endian
* UInt64 - big or little endian
* Boolean - 0 = False, Not 0 = true
* String ([Configurable](ParsingStringMessage.md))
* Single-precision floating point as defined by [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985)
* Double-precision floating point as defined by [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985)

## Framing Bytes
[Framing Bytes](FramingBytes.md) can be used to confirm the validity of your message as well as provide checkpoints for relative parsing of the message.

## Binary Offset
Enter the absolute offset or relative offset within the message to extract the value.  The data type will determine how many bytes will be read.  If you attempt to read past the end of the message, the parser will fail.

Note: In this case, the index or binary offset is 0-based which is different than parsing delimited values where the index of the delimited value is: 
* Absolute - Use this if your message is always the same size and the expected values are always in the same position.
* Relative - Use this if your message size is different based on the type of message.  This is generally the case when there are strings included or when content depends on values parsed earlier in the message.

Note:  Currently only fixed length messages are supported.  This will likely be changed prior to launch.

## Parsing String Values 
At this time, only single-byte ASCII text is supported. Unicode characters are not supported.

There are two ways extracting strings are supported in binary messages:  
* If the string is null terminated, the parser will start looking for the string at the defined index and start reading characters until either the null (0x00) terminated is found or you reach the end of the message.
* If the string length is prefixed to the string, set the following options:
  * Number of bytes - specify how many bytes are used to define the string length.  Currently 1, 2 and 4 are supported.
  * Endianness - this will be inheritied from the message if applicable, but you need to specify whether you are searching for Message or Device Ids.
