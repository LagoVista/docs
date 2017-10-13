---
title: Scripting - Building Output Commands
keywords: workflow, scripting, workflow, outputs, messages, sending, transmitter

status: readyforapproval
created: 20171010
updated: 20171013
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Scripting - Building Output Commands


To build an Output Command, implement an `onExecute` Function. it will take as a parameter the command you are building as well as any additional parameters.
You can add a script by editing the OutputCommand node in the Workflow Canvas.

```
//  The minimum function is
function onExecute() {
    ...
}

//  Additional parameters can be passed in by the method that initiates sending the command
function onExecute(arg1, arg2) {
    ...
}
```

To build the actual command, you will need to assign properties to the command. You can only set values that 
you have defined as part of your [Output Command](../Workflows/OutputCommandFields.md).

In the example below, the Output Command has the following four fields assigned:
1. messageid
2. arg1
3. arg2
4. temperature

These fields will be made available to the [Output Translator](../PipelineModules/OutputTranslator.md) to convert them to a native format that can be sent back to the device or external source.


```
function onExecute(arg1, arg2) {
    let command = OutputCommands.sensoroutput.create() 
    command.messageid = 'msg001';
    command.arg1 = arg1;
    command.arg2 = arg2;
    command.temperature = Attributes.temperature.value;
    command.enqueue();
}
```

The items to be assigned to the Output Command can come from different sources. In this case, they are as follows:  
* `command.messageid = 'msg001';` is a simple string  
* `command.arg1 = arg1;` is passed in as a parameter to the `onExecute` method    
* `command.arg2 = arg2;` is also passed in as a parameter to the `onExecute` method  
* `command.temperature = Attributes.temperature.value;` is an [Attribute](../Workflows/Attributes.md) from the device
