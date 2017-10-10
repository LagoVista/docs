---
title: Parsing String Messages
keywords: messages, messaging, parsing, text, string, regularexpression, regex, position

status: readyforapproval
created: 20170927
updated: 20171010
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing a String Message

There are two options for parsing a pure String Message.  One is with regular 
expressions, the second is by using positional attributes.

For your message, select the Content Type **String with Position** and provide a 
start index and a length in order to extract the field from the string content.  If your message uses delimiters, 
there is a [Parsing Strategy](ParsingDelimitedMessage.md) that will work better for you.

When entering the Start Index, use 1 as the starting point. That is to say, if you want to 
capture the first character as part of your string, you will use 1 as the Start Index.
