---
title: Scripting - Building Output Commands
keywords: workflow, scripting, workflow, outputs, messages, sending, transmitter

status: readyforreview
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Scripting - Building Output Commands


To build an output command implement an `onExecute` function, it will take as a parameter the command you are building as well as any additional parameters.
You can add a script by editing the OutputCommand node in the Workflow Canvas.

```
//  The minimum function is
function onExecute(command) {
    ...
}

//  Additional parameters can be passed in by the method that initiates sending the command
function onExecute(command, arg1, arg2) {
    ...
}

```

To build the actual command you will need to assign properties to the command, you can only set values that 
you have [defined](../Workflows/OutputCommandFields.md) as part of your output command.

For our example below our Output Command has three fields assigned
1. messageid
2. arg1
3. arg2
4. temperature

These fields will be made available to the [output translator](../PipelineModules/OutputTranslator.md) to convert them to a native format that can be sent back to the device or external source.


```
function onExecute(command, arg1, arg2) {
    command.messageid = 'msg001';
    command.arg1 = arg1;
    command.arg2 = arg2;
    command.temperature = Attributes.temperature.value;
}
```

The sources to be assigned to the Output Command can come from different sources, in our case:  
* `command.messageid = 'msg001';` is a simple string.  
* `command.arg1 = arg1;` is passed in as a parameter to the `onExecute` method.    
* `command.arg2 = arg2;` is also passed in as a parameter to the `onExecute` method.  
* `command.temperature = Attributes.temperature.value;` is an [attribute](../Workflows/Attributes.md) from the device.