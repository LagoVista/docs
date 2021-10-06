---
title: UnitSet
keywords: 

status: Complete
created: 20210928
updated: 20211006
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes:  This was copied from values with units. 

---
[Home](../Index.md) > [Glossary](./Index.md)

# Unit Set
## Definition
when a [Message](./Message.md) is received from a [Device](./Device.md), data is sent as simply numbers or values.  In order for the data to be better understood, a Unit can be added.  Units are labels such as Fahrenheit, Kilograms, or Watts.  NuvIoT has the ability to manage multiple unit definitions within a unit set, such as Fahrenheit and Celsius, and is able to convert between those units.

<br>
<br>
<br>

## Example
The *Plymouth Iot Conveyor Belt* sent a [Message](./Message.md) with a payload of `{temperature:425}`.  The number 425 was saved in the [Device Repository](./DeviceRepository.md) as `425° Fahrenheit`.  The temperature could also be displayed as `218° Celsius`.

# Related Terms
- [Device](./Device.md)
- [Device Repository](./DeviceRepository.md)
- [Message](./Message.md)