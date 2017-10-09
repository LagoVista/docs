---
title: Input
keywords: workflow, input

status: readyforreview
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Workflow](Index.md)

# Input

An Input is a value that will come from a [Device Message](../Messaging/Index.md) that has a specfic [Type](../Messaging/TypeSystem/Index.md).      

When building your workflow you can update your device data from data arriving from incoming messages.  After the
[Input Translator](../PipelineModules/InputTranslator.md) converts the raw message format into standard message format,
the fields on the standard message format are mapped to inputs within a [route](../Routes/Route.md). 

In addition you can provide a [script](../Scripting/WorkflowInputOnSet.md) that will get executed when the input is set.



### Mapping from Inputs

[To Attribute](./Mappings/InputToAttribute.md)  
[To Output Command](./Mappings/InputToOutputCommand.md)  
[To State Machine](./Mappings/InputToStateMachine.md)  

### Mapping from Inputs

None - an Input can only be a source for mappings
