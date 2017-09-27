---
title: Regular Expression Value Selectors
keywords: messages, messaging, parsers, fields, regex, regularexpressions

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Regular Expression Value Selectors

To allow for maximum flexibility in extracting values from your message, we have provided a mechanism to extract a value from a string and be used as value.

Consider the following scenario where your inintial selector will find the following string
```
Temperature = 32.0 F
```

The value that you want to extact as the temperature is simply ```32.0```

If you use a regular expression similar to

```
^Temperature\s?=\s?([\d\.]{1,5})\s?F$
```

The value that will be used will be 32.0

An excellent tool to test your Regular Expressions is [RegEx101](http://regex101.com).  Also  make sure you take advantage of our 
[verifiers](Verifiers.md) to ensure the parsing process works as you expect 
