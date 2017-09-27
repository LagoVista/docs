---
title: Type System
keywords: messages, messaging, types, string, decimal, integer, boolean, datetime, geolocation, latitude, longitude, state, unit

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md)

# Type System

To ensure a consistent and repeatable workflows and and processing of your device messages there is a core type system that has been define.  

As messages are parsed and data is made available a type is associated with those values to ensure processing works as expected. 

#### Available Types

[String](Strings.md) - Simple Textual Representation of Data  
[Integers](Integers.md) - Whole Numbers or Numbers such as 1,-1, 100, 0, etc...  
[Decimals](Decimals.md) - Numbers with a Decimal or 1.42, 523.4, -53.5, etc...  
[Boolean](Booleans.md)  - True or False Values     
[Date Time](DateTime.md) - Contains a data time to identiy specify date time values  
[Geo Locations](GeoLocation.md) - Represents a Latitude and Longitude value  
[States and Enumerations](StatesAndEnums.md) - Represents a set of values that can be used to constrain a value, a simple example of this is On/Off  
[Values with Units](ValueWithUnits.md) - This is a [Decimal Value](Decimals.md) that has a unit attached.  The unit can have multiple conversion factors
