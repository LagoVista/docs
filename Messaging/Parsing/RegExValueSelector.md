---
title: Regular Expression Value Selectors
keywords: messages, messaging, parsers, fields, regex, regularexpressions

status: approved
created: 20170927
updated: 20171018
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Regular Expression Value Selectors

To allow for maximum flexibility in extracting values from your message, we have provided a mechanism that allows you to extract a value from a string.

Consider the following scenario, where your initial selector will find the following string:
```
Temperature = 32.0 F
```

The value that you want to extract as the temperature is simply ```32.0```

If you use a Regular Expression similar to:

```
^Temperature\s?=\s?([\d\.]{1,5})\s?F$
```

The value that will be used is 32.0

An excellent tool to test your Regular Expressions is [Regular Expressions 101](http://regex101.com).  Also, make sure you take advantage of our 
[Verifiers](Verifiers.md) to ensure that the parsing process works as you expect. 
