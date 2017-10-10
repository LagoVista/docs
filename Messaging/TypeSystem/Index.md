---
title: Type System
keywords: messages, messaging, types, string, decimal, integer, boolean, datetime, geolocation, latitude, longitude, state, unit

status: readyforapproval
created: 20170927
updated: 20171010
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md)

# Type System

To ensure consistent and repeatable workflows and processing of your device messages, there is a core type system that has been defined.  

As messages are parsed and data is made available, a type is associated with those values to ensure that processing works as expected. 

#### Available Types

[String](Strings.md) - Simple textual representation of data  
[Integers](Integers.md) - Whole numbers (1,-1, 100, 0, etc.)  
[Decimals](Decimals.md) - Numbers with a decimal (1.42, 523.4, -53.5, etc.)  
[Boolean](Booleans.md)  - True or false values     
[Date Time](DateTime.md) - Contains date and time values  
[Geolocations](Geolocation.md) - Represents a latitude and longitude value  
[States and Enumerations](StatesAndEnums.md) - Represents a set of variables that can be used to constrain a value (On/Off, etc.)    
[Values with Units](ValueWithUnits.md) - Represents a [Decimal Value](Decimals.md) that has a unit attached.  The unit can have multiple conversion factors.
