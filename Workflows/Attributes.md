---
title: Attributes
keywords: workflow, attributes

status: readyforapproval
created: 20171009
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Workflow](Index.md)

# Attribute

Attributes are properties of your device or system that are stored on the server. Once they are assigned, they will always
be available for reporting or to use in any workflows associated with your device.

Attributes have a [Key](Keys.md) assigned to them when they are created.  This key can then be used in scripts or other formulas.  
Since attributes are defined on a [Workflow](Index.md), they need to be fully qualified to be used external to the workflow.

You can provide a [Script](../Scripting/AttributeOnSet.md) that is executed when a value is being assigned to an Attribute.

In addition, you can access and set Attributes through a [Script](../Scripting/WorkingWithAttributes.md) as well.

### Mappings from Attributes

[To Output Command](./Mappings/AttributeToOutputCommand.md)  
[To State Machine](./Mappings/AttributeToStateMachine.md)  

### Mappings to Attributes

[From Input](./Mappings/InputToAttribute.md)  
[From Input Command](./Mappings/InputCommandToAttribute.md)  
[From State Machine](./Mappings/StateMachineToAttribute.md)  

