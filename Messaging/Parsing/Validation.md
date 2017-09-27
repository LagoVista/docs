---
title: Validation
keywords: messages, messaging, parsing, fields, regex, validation

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Validation

It is important to enssure that the messages contain the fields you expect prior to those messages being processed.  There are some mechanisms you 
can use to validate the contents of the fields that you parse.  Those mechanisms are dependent on the type of data you are extracting.

### Automatic Validation
In some cases the validation occurs automatically.  For example if you specify a number (either decimal or integer) the parser
will ensure that no textual characters are present in the field prior to assigning the field to a storage value and making it 
available to the reset of the workflow.

The following are fields that are automatically validated

| Storage Type | Validation |
| ------------ | --- |
| [Boolean](../TypeSystem/Booleans.md) | A value that represents to or false, text values are not case sensitve, "True", true, False "false" or 0, 1 |
| [Decimal](../TypeSystem/Decimals.md) | A real number such as 1.25, 5, -12.30, 0 |
| [Integer](../TypeSystem/Integers.md) | A whole number such has 1, 5, -5, 1,000,333 or 0 |
| [Geo Locations](../TypeSystem/GeoLocation.md) | A valid latitude and a longitude, for a full description of what is valid please see [Working with Geo Codes](../TypeSystem/GeoLocation.md) for more information |
| [State Sets](../TypeSystem/StatesAndEnums.md) | State sets are an important data type in that they ensure that only the values you specified can be assigned.  For example if your state set only includes ```on``` and ```off``` and the value you receive is True, it will be considered invalid.|
| [Strings](../TypeSystem/Strings.md) | Most any value can be stored to a String Location.  Currently only ASCII values are supported if your message sends Unicode strings, please [contact us](http://support.nuviot.com) for assistance. |
| [Values with Units](../TypeSystem/Integers.md) | Values with Units or Unit Sets are units that can be applied to a value.  Validation on incoming values is the same as for a decimal value, however you can specify the number of decimal point (precision) for storage |

### Additional Validation

#### For All Storage Type Values  
**Is Required** You can mark the field if it is required to be present.  If it is not present in the message, the message will be considered invalid and
processing will not continue.

#### For String Storage Type Values
**RegEx Validation** If the value you are extrating is a string, you can add a regular expression that will be used to validate the contents of that string value.

#### For Integer and Decimal Storage Type Values
**Minimum Value** and **Maximum Value** You can provide values that will limit the range eitehr to a minimum value, maximum value or both that will be 
acceptable for the incoming value.  These values are inclusive of the range values, that is to say that if a minimum value of ```8``` was specified a
value of ```8``` would be valid however `7.99999` would not.  Also if minimum or maximum value is not present no validation will take place.  It is possible
to have a minumum value without a maximum value and vice-versa. 



