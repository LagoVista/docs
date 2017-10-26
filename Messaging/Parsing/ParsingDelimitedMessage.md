---
title: Parsing a Delimited Message
keywords: parsers, delimited, csv, text, string, data, messaging, messages

status: approved
created: 20170927
updated: 20171010
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing a Delimited Message

If your message content is Text, the values can be separated by a delimiter.  This is generally a comma but is configurable. At this point, only one-character delimiters are supported.

The delimiter breaks your message into a 1-indexed array of values you can extract with a delimiter index.

### Quoted Text

Depending on how your device sends a message, it may use quotes (") or ticks (') to denote strings.  Always select the Quoted Text option.  If you do not select this option, the message does not support having embedded ticks or quotes.  If you select this option, you can use traditional escape characters such as \n \r \t, etc...


### Examples
Here is an example of a message that does not use quoted text:

`msg004,dev0001,324,52,45,off,overrange`

Here are the extracted values with their corresponding delimiter index:

| Delimiter Index | Value      |
| --------------- | ---------- |
|               1 |  msg004    |
|               2 |  dev0001   |
|               3 |  324       |
|               4 |  52        |
|               5 |  45        |
|               6 |  off       |
|               7 |  overrange |


Here is an example of the same message using quoted text.  Since the Quoted Text option was selected, the tick marks are retained.

`'msg004','dev0001',324,52,45,off,'overrange'`

| Delimiter Index | Value      |
| --------------- | ---------- |
|               1 |  msg004    |
|               2 |  dev0001   |
|               3 |  324       |
|               4 |  52        |
|               5 |  45        |
|               6 |  off       |
|               7 |  overrange |


