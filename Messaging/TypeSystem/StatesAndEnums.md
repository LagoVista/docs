[Home](../../Index.md) > [Device Messaging](../Index.md) > [Type System](Index.md)

# States and Enumerations

In some cases your attributes can contain any number or value.  In some cases you may want to limit the values that can be assigned to an attribute.  To limit
the allow availables to a limited set of entries you can create an Enumeration or State Set.  A State Set can contain a finite number of states or enumeration values.

An trivial example of this would be as follows:

```
On
Off
```

In this case we have two states ```On``` and ```Off``` and these are the only allowable value.

### State Sets
In NuvIoT we will use the term **State Set** to define the collection of states or enumeration values and **State** to define the individual values.

When creating a State Set you define the name of your state and a [key](../../Topics/Keys.md).


### States
When you define the States that make up a State Set you need to define the following values:


| Field     | Description |
| --------- | ----------  |
| Name   | A textual representation of the state, this can be changed. |
| Key    | The unique [key](../../Topics/Keys.md) that identifies this state. |
| Enum (optional) | If you want to map this enum value to a numeric value in your message, you can supply an integer perform this mapping. |