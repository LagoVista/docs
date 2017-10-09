---
title: Scripting Atribute - onSet
keywords: workflow, scripting, attribute, onset

status: readyforreview
created: 20171002
updated: 20171002
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Attribute - onSet

When designing your workflow you can add a script that will be executed when the value is being assigned.  If no script
has been assigned the value will simply be set without executing any scripts.

If you have a script in place you need to make the assignment in the script.  That also means you can cancel the setting of the attribute within the script

If you do not need to execute any logic you should not create a script, assigning the value directly will be much faster than through a script.


While editing your script you will have access to the entire [Device](DeviceScriptingModel.md) and [Device Workflow](DeviceWorkflowScriptingModel.md) data.

##### Setting a Value
If you have a named attribute `temperature` on your workflow you can get and set it with any scripts associated 
with the workflow.

The script template that will set the value will look as follows:

```
function onSet(value) {
    Attributes.temperature.value = value;
};
```
It's important to realize that each [Attribute](../Workflows/Attributes.md) has a [specific data type](../Messaging/TypeSystem/Index.md) assigned to it.  When
you assign a new value, the type should match.  If the type should match if it doesn't an attempt will be made to convert
the assigned value to the correct type.  This will cause an error and the entire device transition will fail
