---
title: Output Commands
keywords: workflow, outputcommand

status: new
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Workflow](Index.md)

# Output Commands

Output Commands are used to send a message back to your device.  When creating an output command you select a [Message 
Definition](../Messaging/Index.md) that contains the fields that make up your outgoing message.  You will then be required
to map fields that are either available from the incoming message or the device.

The message is then passed to the [Output Translator](../PipelineModules/OutputTranslator.md) that will convert it to the native format your device will understand prior to passing it to the 
[Transmitter](../PipelineModules/Transmitter.md) that will eventually ensure your device receives the message.

### Scripting
To work with output commands you will use simple scripts.  To create an output command, you will use the [send command](../Scripting/InvokeOutputCommand.md) in any script.  To build the content of the output command 
you will create a function called [onExecute](../Scripting/OutputCommandCreate.md).

### Mappings from Output Commands
None - An Output Command can only have incoming connections.

### Mappings to Output Commands

[Input to Output Command](./Mappings/InputToOutputCommand.md)  
[State Machine to Output Command](./Mappings/StateMachineToOutputCommand.md)  
[Input Command to Output Cmmand](./Mappings/InputCommandToOutputCommand.md)  
