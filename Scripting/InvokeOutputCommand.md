---
title: Scripting - Invoking Output Commands
keywords: workflow, scripting, workflow, outputs, messages, sending, transmitter

status: approved
created: 20171009
updated: 20171013
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Scripting - Sending Output Commands

[Output Commands](../Workflows/OutputCommands.md) are used to build up the content that will be either sent out to devices or exported.

Ouptut Commands are invoked in script. In our example, we have an Output Command with a key of `sensoroutput`.  It can
be invoked with the following script:

```
function onXXXX(value){
    OutputCommands.[KEYNAME].send('on',32);
}

- or -

function onXXXX(value){
    OutputCommands.sensoroutput.send('on',32);
}
```


When you call the `send` method, the [onExecute](OutputCommandCreate.md) on the Output Command will be executed to build up the content 
that will be available to send or export messages.  When sending a message, you can pass parameters that will be available to the `onExecute`
method.


