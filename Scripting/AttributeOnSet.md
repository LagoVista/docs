---
title: Scripting Atribute - onSet
keywords: workflow, scripting, attribute, onset

status: approved
created: 20171002
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Attribute - onSet

When designing your workflow, you can add a script that will be executed when the value is being assigned.  If no script
has been assigned, the value will simply be set without executing any scripts.

If you have a script in place, you need to make the assignment in the script.  That also means that you can cancel the setting of the Attribute within the script.

If you do not need to execute any logic, you should not create a script.  Assigning the value directly will be much faster than through a script.


While editing your script, you will have access to the entire [Device](DeviceScriptingModel.md) and [Device Workflow](DeviceWorkflowScriptingModel.md) data.

##### Setting a Value
If you have a named Attribute, `temperature`, on your workflow, you can get and set it with any scripts associated 
with the workflow.

The script template that will set the value will look as follows:

```
function onSet(value) {
    Attributes.temperature = value;
};
```
It is important to realize that each [Attribute](../Workflows/Attributes.md) has a [Specific Data Type](../Messaging/TypeSystem/Index.md) assigned to it.  When
you assign a new value, the type should match.  If it does not match, an attempt will be made to convert
the assigned value to the correct type.  This will cause an error and the entire device transition will fail.
