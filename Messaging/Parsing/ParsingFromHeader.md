---
title: Parsing from Headers
keywords: messages, messaging, parsing, payload, header, http, rest

status: readyforapproval
created: 20170927
updated: 20171010
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing from Headers

If your message was sent via REST or HTTP, the headers that were sent with your message will be made available to the parsing algorithm.

To parse a value from a header:
1.  Add a field
2.  Select **Search Location** header
3.  Populate the field **Header Name** with the name of the header that contains the field you wish to extract
4.  Add a [Storage Type](../TypeSystem/Index.md) to identify how this field should be stored
