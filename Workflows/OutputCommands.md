[Home](../Index.md) > [Workflow](Index.md)

# Output Commands

Output Commands are used to send a message back to your device.  When creating an output command you select a [Message 
Definition](../Messaging/Index.md) that contains the fields that make up your outgoing message.  You will then be required
to map fields that are either available from the incoming message or the device.

The message is then passed to the [Output Translator](../PipelineModules/OutputTranslator.md) that will convert it to the native format your device will understand prior to passing it to the 
[Transmitter](../PipelineModules/Transmitter.md) that will eventually ensure your device receives the message.

### Mappings from Output Commands
None - An Output Command can only have incoming connections.

### Mappings to Output Commands

[Input to Output Command](./Mappings/InputToOutputCommand.md)  
[State Machine to Output Command](./Mappings/StateMachineToOutputCommand.md)  
[Input Command to Output Cmmand](./Mappings/InputCommandToOutputCommand.md)  
