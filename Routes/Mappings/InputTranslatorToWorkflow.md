---
title: Input Translator
keywords: messages, messaging, inputtranslator, pipelinemodule

status: approved
created: 20170927
updated: 20171013
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Route](../Route.md) > [Mappings](Index.md)

# Input Translator to Workflow Inputs

Since your IoT Applications are built for maximum reuse, [Workflows](../../PipelineModules/Workflow.md) are designed to stand alone.
That means that you need to map the output from your message to the [Inputs](../../Workflows/Input.md) on the Workflow.  This is
a relatively straight-forward process. You simply select the [Message Field](../../Messaging/MessageFields.md) and
the [Workflow Input](../../Workflows/Input.md), then add the mapping.

When mapping the Message Field to the Input, make sure that you map to the same types. If a [Unit Set](../../Messaging/TypeSystem/ValueWithUnits.md)
or [State Set](../../Messaging/TypeSystem/StatesAndEnums.md) is specified, those must also match.

**Note:** It is not important that all message fields map to your workflow input and that each workflow input has a message field.  You
will only be able to create mappings for types that are compatible.  If you need to convert between types, you can
add an additional workflow input that will match that of the field and use the [OnSet script](../../Scripting/WorkflowInputOnSet.md) to execute any type conversions.**
