[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Input to Attribute

If an [Input](../Input.md) is mapped to an [Attribute](../Attributes.md), the value contained
in the input will be applied and stored to the attribute so that it can be accessed at a later time
or used within a report.  Inputs are temporary and will only exist while the message is being 
processsed.

When mapping an input to an attribute, the types must be the same.  In addition, if the type is a
[Value with Unit](../../Messaging/TypeSystem/ValueWithUnits.md)  or [State Set](../../Messaging/TypeSystem/StatesAndEnums.md),
the Values and State Sets must match between the source and destination.
