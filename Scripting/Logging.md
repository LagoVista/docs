---
title: Logging
keywords: workflow, logging, scripts

status: readyforapproval
created: 20171009
updated: 20171013
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Logging

While developing your scripts, there are some options for writing data and messages to a log.


#### Device Log

You can write a value to the Device Log.  Values that are written to the Device Log are saved between
sessions and are available until the Device Log is cleared or the device is removed.

To see the values that are written, click on **Device Log** in the Device Explorer. The Device Log
is also available via API.

**Note:**  The Device Log is not meant to have a significant amount of data written to it.

##### Writing to the Device Log
```
function onSet(value) {
    logDevice('log message');
}
```
##### Clearing the Device Log
```
function onSet(value) {
    clearDeviceLog();
}
```

#### Console Log

The Console Log writes values that are made available in real time when you
view the device in the Device Explorer.  Values written to the Console Log
are not saved between sessions.

##### Writing to the Console log
```
function onSet(value) {
    logConsole('message')
}
```
