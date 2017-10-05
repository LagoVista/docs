---
title: Parsing String Messages
keywords: messages, messaging, parsing, text, string, regularexpression, regex, position

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing a String Message

There are two options for parsing a pure string message.  One is with regular 
expressions, the second is by using positional attributes.

For your message, if you select the content type "String with Position", provide a 
start index and a length in order to extract the field from the string content.  If your message uses delimiters, 
there is a [parsing strategy](ParsingDelimitedMessage.md) that will work better for you.

When entering the start index, use 1 as the starting point. That is to say, if you want to 
capture the first character as part of your string, you will use 1 as the start index.
