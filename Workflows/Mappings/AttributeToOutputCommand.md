---
title: Workflow Mapping - Attribute to Output Command
keywords: workflow, mapping, attribute, outputcommand

status: inprocess
created: 20171009
updated: 20171009
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Attribute to Output Command

...more details coming soon...

In cases where an [Attribute](../Attributes.md) is mapped to an [Output Command](../OutputCommands.md), when the
attribute arrives it will send a message via the Output Command.  Within the mapping, you need to
select a [Message Definition](../../Messaging/Index.md) that will be queued.  Prior to the 
message being queued for delivery, the attribute will be set on the device.  When the
message is constructed, it will have access to all the properties associated with the incoming
message as well as the device.
