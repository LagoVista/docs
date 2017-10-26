---
title: Value with Units
keywords: messages, messaging, typesystem, values, unit, unitset, types, datatypes

status: approved
created: 20170922
updated: 20171010
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Type System](Index.md)

# Value with Units

Although numeric values exist by themselves, in some cases they may have units associated with them.  The classic example for many systems is that of temperature.  When you define
your units, you define a default value and conversion factors.

When defining a Unit Set, you can (but do not have to) define multiple units.  Of those multiple units, you specify exactly one unit as the default unit. Then for the other units
you have the option to provide a simple scaling factor that can be applied to convert that unit to and from the default Unit Set or you can provide some simple JSON scripts that 
will do the conversion.

You can also provide the number of decimal digits of precision for each unit.
