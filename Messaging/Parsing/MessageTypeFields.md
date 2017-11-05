---
title: Message Field Type
keywords: parsers, typesystem, messagefieldtypes

status: inprocess
created: 20170927
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Message Field Type

When parsing your message or field you need to specify the data type as it exists within the incoming message.

The options are:
* String - A text value
* Whole Number 0 - An Integer value without any numbers behind the decimal point
* Floating Point Number 0.0 - A real number with values behind the decimal point
* Boolean Value - True or false, valid values for true are `True`, `true` and `1` any other values will be considered false.

The following demonstorates how **Message Field Types** are applied

```
{    
    "StringProperty":"The Quick Brown Fox Jumped over the Lazy Dog", /* String Text Value */
    "RealValue": 123.43, /* Floating Point Number */
    "WholeNumber": 123, /* Whole Number */
    "BooleanValue": true
}
```


