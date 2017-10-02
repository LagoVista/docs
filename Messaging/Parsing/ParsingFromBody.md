---
title: Parsing from Body or Payload
keywords: messages, messaging, devices, parsing, payload, body, post, form, text, http, rest

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Parsing from Body or Payload

In most cases you'll be pulling the content of the message from the body or payload.  For REST type messages this will be available in POST or PUT methods
other protocols you may only receive the payload.  Once you have the body or payload you need to determine the format of the contents, is it [text](ParsingTextMessages.md) in one
format or another or is it [binary](ParsingBinaryMessages.md).  