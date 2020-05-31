---
title: Logging
keywords: workflow, logging, scripts

status: approved
created: 20171009
updated: 20171013
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Logging (EXPERIMENTEL)

While developing your scripts, there are some options for writing data and messages to a log.


#### Device Log

You can write a value to the Device Log.  Values that are written to the Device Log are saved between
sessions and are available until the log is cleared or the device is removed.

To see the values that are written, click on **Device Log** in the Device Explorer. The Device Log
is also available via API.

**Note:**  The Device Log is not meant to have a significant amount of data written to it.

##### Writing to the Device Log
```
function onSet(value) {
    logToDevice('log message');
}
```

##### Writing to the Device Log with a Title
```
function onSet(value) {
    logToDevice('log message', 'message title');
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
