---
title: Parsing from Headers
keywords: messages, messaging, parsing, payload, header, http, rest

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing from Header

If your mesage was sent via REST or HTTP, the headers that were sent with your message will be made availale to the parsing algorithm.

To parse a value from a Haeder, add a field, and then select

**Search Location**  
Header

And Populate the field **Header Name** 

With the name of the header that contains theh field you wish to extract.

##### Storage Type
You will also need to add a [Storage Type](../TypeSystem/Index.md) to identify how this field should be stored.