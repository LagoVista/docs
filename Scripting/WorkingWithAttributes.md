---
title: Working with Attributes
keywords: workflow, scripting, attribute

status: approved
created: 20171002
updated: 20171013
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Working with Attributes

When working with scripts that have access to your device, you are able to read, write and clear [Attributes](../Workflows/Attributes.md).

While editing your script, you have access to the entire [Device](DeviceScriptingModel.md) and [Device Workflow](DeviceWorkflowScriptingModel.md) data.

##### Setting an Attribute
If you have a named Attribute, `temperature`, on your workflow, you can get and set it with any scripts associated 
with the workflow.

The script template that will set the value will look as follows:

```
function onXXXX(value) {
    Attributes.temperature = value;
};
```
It is important to realize that each [Attribute](../Workflows/Attributes.md) has a specific [Data Type](../Messaging/TypeSystem/Index.md) assigned to it.  When
you assign a new value, the type should match.  If the type does not match, an attempt will be made to convert
the assigned value to the correct type.  This will cause an error and the entire device transition will fail.


##### Getting an Attribute
The script template that will get a value will look as follows:

```
function onXXXX(value) {
    var currentValue = Attributes.temperature;
};

function onXXXX2(value) {
    /* For geo-lcoations*
    var lat = WorkflowInputs.location.longitude;
    var lon = WorkflowInputs.location.latitude;
};

function onXXXX3(value) {
    /* For date time data types*
    var year = WorkflowInputs.dateStamp.getFullYear();
}; 
```

##### Clearing an Attribute
The script that clears an Attribute will look as follows:

```
function onXXXX(value) {
    Attributes.temperature = null;
}
```
