---
title: Input Translator
keywords: messages, messaging, inputtranslator, pipelinemodule

status: readyforreview
created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Route](../Route.md) > [Mappings](Index.md)

# Input Translator to Workflow Inputs

Since your IoT Applications are built for maximum re-use, your [Workflows](../../PipelineModules/Workflow.md) are designed to stand alone.
That means you need to map the output from your message to the [Inputs](../../Workflows/Input.md) on the Workflow.  This is
a relatively straight forward process where you simply select the [Message Field](../../Messaging/MessageFields.md) and 
the [Workflow Input](../../Workflows/Input.md) and add the mapping.

When mapping the the Message Field to the Input, you need to make sure you map the same types and if a [Unit Set](../../Messaging/TypeSystem/ValueWithUnits.md)
or [State Set](../../Messaging/TypeSystem/StatesAndEnums.md) is specified those must also match.

**Note:** *It is not important that all message fields map to your workflow input and that you each workflow input has a message field.  You
will also only be able to create mappings for types that are compatible.  If you need to convert between types, you can
add an additional workflow input that will match that of the field and use the [OnSet script](../../Scripting/WorkflowInputOnSet.md) to do any type conversions**