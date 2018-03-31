---
title: Working with Workflow Inputs
keywords: workflow, scripting, workflowinputs

status: approved
created: 20180121
updated: 20180121
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Scripting](Index.md)

# Working with Workflow Inputs

When working with scripts that have access to the raw [Workflow Inputs](../Workflows/Input.md) to your workflow, the values are read only.

While editing your script, you have access to the entire [Device](DeviceScriptingModel.md) and [Device Workflow](DeviceWorkflowScriptingModel.md) data.

##### Getting a value from a Workflow Input
The script template that will get a value will look as follows:

```
function onXXXX(value) {
    var currentValue = WorkflowInputs.temperature;
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

