---
title: States and Enumerations
keywords: statemachine, workflow, states

status: readyforapproval
created: 20170922
updated: 20171010
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Type System](Index.md)

# States and Enumerations

In some cases, your attributes can contain any number or value.  You may want to limit the values that can be assigned to an attribute.  To allow values for only a limited set of entries, you can create an Enumeration or State Set.  A State Set can contain a finite number of states or enumeration values.

An example of this would be as follows:

```
On
Off
```

In this case we have two states, ```On``` and ```Off```, and these are the only allowable values.

## State Sets
In NuvIoT we will use the term State Set to define the collection of states or enumeration values and state to define the individual values.

When creating a State Set, you define the name of your state and a [Key](../../Topics/Keys.md).

The Key that you provide for each state will be used to store the value of the state associated with that data item.

### Integer Enumerations
When creating your State Set, you can specify if an integer enumeration value should be provided.  This is useful for mapping to integer values from messages.  If you specify that it should be provided, then each state **must** include an integer enumeration.  Integer enumeration
values are only provided to map to incoming and outgoing messages.  The value will be converted to the string Key value prior to being saved.

### States
When you define the states that make up a State Set, you need to define the following values:


| Field                  | Description |
| ---------------        | ----------  |
| Name                   | A textual representation of the state.  This can be changed. |
| Key                    | The unique [Key](../../Topics/Keys.md) that identifies this state. |
| Enumeration (optional) | If you want to map this Enum value to a numeric value in your message, you can supply an integer to perform this mapping. |
