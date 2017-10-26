---
title: Parsing with Regular Expression
keywords: messages, messaging, parsing, regex, regularexpression

status: approved
created: 20170927
updated: 20171010
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing a String With Regular Expressions

You can treat your message as a single string and then use a regular expession to extract the values from the string.  This is useful if your format changes and has optional values.

There are two steps to extract values from your message as a string:

1. Define a Regular Expression including name groups to extract the values.
2. Create fields that map to each value you wish to extract.  Each group will contain the Regular Expression Group Name to extract the value from the regular expression result.

For Example, at the message level you declare the Regular Expression:
`<val1:(?'V1'[0-9]*)>`,

Then add a field to the message with the Group Name `V1`.

If the message parser receives a message similar to:

`<val1:32>`,

The field will be assigned to the field `32`.

A great tool to test your Regular Expressions is [Regular Expressions 101](https://regex101.com/).
