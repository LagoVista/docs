---
title: WorkflowToOutputTranslator
keywords: messages, messaging, workflow, outputtranslator, pipelinemodule

status: inprocess
created: 20171022
updated: 20171022
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Route](../Route.md) > [Mappings](Index.md)

# Workflow to Output Translator

The output from the [Ouput Command](../../Workflows/OutputCommands.md) is a [normalized set of strongly typed name value pairs](../../Messaging/TypeSystem/NameValuePairs.md).  
The job of the [Output Translator](../../PipelineModules/OutputTranslator.md) is to take that normalized set of data convert it to [Outgoing Messages](../../Messaging/OutgoingMessages.md) 
that the [Transmitter](../../PipelineModules/Transmitter.md) will send back to the device.

To enable this creation of outgoing messages you will need to map an Output Command to a message, then you will need to map the individual fields from the Output Command the Fields on the Message.