---
title: Input Command - OnArrive
keywords: workflow, inputcommand, scripts, onarrive

status: new
created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Input Command - OnArrive

When an Input Command Arrives from an External Source you can add a script to process data.

Your [Input Command](../Workflows/InputCommands.md) has parameters assocaited with it that you can use as part of your script.

For our example lets say we configured an Input Command as Follows
```
Input Command: ProcessSensorData
Input Command Parameters:
    Sensor Value,  Key = sensorvalue, Type: integer
    Sensor Status, Key = status, Type: string
```

In our script for the Input Command **ProcessSensorData** we could write something as follows:

```
function onArrive() {
    let sensorValue = InputCommand.sensorvalue;
    lset sensorStatus = InputCommand.status

    //  ...do something interesting with the values...
}
```