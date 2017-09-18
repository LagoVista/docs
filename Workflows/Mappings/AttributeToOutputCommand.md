[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Attribute to Output Command

When an [Attribute](../Attributes.md) is mapped to an [OutputCommand](../OutputCommands.md) when the
attribute arrives it will send a message via the Output Command.  Within the mapping you will
need to select a [Message Definition](../../Messaging/Index.md) that will be qeued.  Prior to the 
message being queued for delivery, the attribute will be set on the device.  When the
message is constructed it will have access to all the properties associated with the incoming
message as well as the device.