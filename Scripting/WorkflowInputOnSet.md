---
title: Scripting Input - onSet
keywords: workflow, scripting, input, onset

status: approved
created: 20170927
updated: 20170927
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Scripting](Index.md)

# Workflow Input - OnSet Script

You can add a script that will be executed when the [Input Translator](../PipelineModules/InputTranslator.md) set the [Input](../Workflows/Input.md) on your workflow.

An example of such a script would be as follows

```
function onSet(value /* Integer */) {

}
```

You will also have access to the [Device Properties](WorkingWithAttributes.md), [Device Properties](WorkingWithProperties.md), [Property Bag](PropertyBag.md) and state machines and can invoke [Output Commands](https://github.com/LagoVista/docs/blob/master/Scripting/OutputCommandCreate.md). 
