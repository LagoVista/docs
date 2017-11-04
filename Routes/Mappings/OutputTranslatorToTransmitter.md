---
title: Output Translator to Transmitter
keywords: messages, messaging, outputtranslator, transmitter, pipelinemodule

status: inprocess
created: 20171022
updated: 20171022
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Route](../Route.md) > [Mappings](Index.md)

# Output Translator to Transmitter

The job of the [Output Translator](../../PipelineModules/OutputTranslator.md) is to take the normalized output from the [Ouput Command](../../Workflows/OutputCommands.md)
of the [Workflow](../../PipelineModules/Workflow.md) and turn it into the exact contents of the message that will be sent out with the [Transmitter](../../PipelineModules/Transmitter.md).

To map a message from the Outtranslator to the Transmitter, first use the [Workflow to Output Mapping](WorkflowToOutputTranslator.md) to map an Output 
Command to a message and then use this mapping to select which message(s) will be sent to the transmitter.