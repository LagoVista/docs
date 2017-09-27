[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Input to Attribute

If an [Input](../Input.md) is mapped to an [Attribute](../Attributes.md) the value contained
in the input will be applied and stored to the attribute so it can be accessed at a later time
or used within a report.  Inputs are temporary and will only exist while the message is being 
processsed.

When mapping an input to an attribute the types must be the same.  In addition if the type is a
[value with unit](../../Messaging/TypeSystem/ValueWithUnits.md)  or [state set](../../Messaging/TypeSystem/StatesAndEnums.md),
the values and state sets must match between the source and destination.