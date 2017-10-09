---
title: Logging
keywords: workflow, logging, scripts

status: readyforreview
created: 20171009
updated: 20171009
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Logging

While developing your scripts you have some options to write data and messages to a log.


#### Device Log

Write a value to the device log, values that are written to the device log are saved between
sessions and will be available until the device log is cleared or the device is removed.

To see the values that are written, click on Device Log in the Device Explorer, the Device Log
is also available via API.

**Note:**  *The device log is not meant to write a significant amount of data to.*

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

The Console Log will write values that will be available in real time while you
are viewing the Device in the Device Explorer.  Values written to the Console Log
are not saved between sessions

##### Writing to the Console log
```
function onSet(value) {
    logConsole('message')
}
```