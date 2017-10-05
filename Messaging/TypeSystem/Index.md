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

To ensure consistent and repeatable workflows and processing of your device messages, there is a core type system that has been defined.  

As messages are parsed and data is made available, a type is associated with those values to ensure that processing works as expected. 

#### Available Types

[String](Strings.md) - simple textual representation of data  
[Integers](Integers.md) - whole numbers (1,-1, 100, 0, etc..)  
[Decimals](Decimals.md) - numbers with a decimal (1.42, 523.4, -53.5, etc.)  
[Boolean](Booleans.md)  - true or false values     
[Date Time](DateTime.md) - contains date and time values  
[Geo Locations](GeoLocation.md) - represents a latitude and longitude value  
[States and Enumerations](StatesAndEnums.md) - represents a set of variables that can be used to constrain a value (On/Off, etc.)    
[Values with Units](ValueWithUnits.md) - [Decimal Value](Decimals.md) that has a unit attached.  The unit can have multiple conversion factors.
