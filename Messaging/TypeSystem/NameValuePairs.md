---
title: Strongly Typed Named Value Pairs
keywords: messages, typesystem, namedvaluepairs, kvps

status: inprocess
created: 20170927
updated: 20171010
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Type System](Index.md)

# Strongly Typed Named Value Pairs

Since we want to build a system that is not dependent on any underlying technology, protocol or message types, we normalize (provide a common/consistent format) any data that is received from a message or other source.

Some examples of data that is stored in **Strongly Typed Name Value Pairs**
* **Device Attributes**
* **Device Properties**
* **Message Values**

Each field of data is stored with four components:
* **Name** - The human readable name of the field, this can be changed in the defintiion of the field and will be applied to any new fields going forward, however it will not update past values.
* **Key** - A [Key](../../Topics/Keys.md) that will be used to identify this field internally and within scripts.  Once the key is defined for a field, it can not be modified.
* **Value** - The actual content of the values.
* **Type** - One of the types from our [Type System](Index.md)
