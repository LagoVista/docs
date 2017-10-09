---
title: Working with Attributes
keywords: workflow, scripting, attribute

status: readyforreview
created: 20171002
updated: 20171002
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Working with Attributes

When working with scripts that have access to your device, you have access to read, write and clear [attributes](../Workflows/Attributes.md).

While editing your script you will have access to the entire [Device](DeviceScriptingModel.md) and [Device Workflow](DeviceWorkflowScriptingModel.md) data.

##### Setting an Attribute
If you have a named attribute `temperature` on your workflow you can get and set it with any scripts associated 
with the workflow.

The script template that will set the value will look as follows:

```
function onXXXX(value) {
    Attributes.temperature.value = value;
};
```
It's important to realize that each [Attribute](../Workflows/Attributes.md) has a [specific data type](../Messaging/TypeSystem/Index.md) assigned to it.  When
you assign a new value, the type should match.  If the type should match if it doesn't an attempt will be made to convert
the assigned value to the correct type.  This will cause an error and the entire device transition will fail


##### Getting an Attribute
The script template that will get a value will look as follows:

```
function onXXXX(value) {
    var currentValue = Attributes.temperature.value;
};
```

##### Clearing an Attribute
The script that clears an attribute will look as follows:

```
function onXXXX(value) {
    Attributes.temperature.value = null;
}
```
