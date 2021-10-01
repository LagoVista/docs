---
title: UnitSet
keywords: 

status: new
created: 20210928
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes:  This was copied from values with units. 

---
[Home](../Index.md) > [Glossary](./Index.md)

# Unit Set
## Definition
The primitive data types are simply numbers and values that stand alone, by themselves they don’t convey any context of what they are or how they can be used.  A primitive number would just be 98.6.  NuvIoT has the concept of creating units, a commonly used example of units is temperature.  Temperature that can be either Celsius for Fahrenheit.  Units can be created as part of your organization and reused anywhere data types can be defined.  When creating your unit, you will need to specify how the value will be stored, that is to say how it comes in from the source.  This will be considered the default unit to be associated with your units definition.  You can provide alternative units as well.  For the case of temperature, you may decide that the default way you want the values stored is Celsius and the alternative unit is Fahrenheit.  For each alternative unit you will need to provide either a calibration factor in the form of a number that will convert between units, or a JavaScript that will provide the conversion.

<br>
<br>
<br>

## Example


<br>
<br>
<br>

# Related Terms
