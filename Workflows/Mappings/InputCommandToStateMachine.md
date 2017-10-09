---
title: Workflow Mapping - Input Command to State Machine
keywords: workflow, mapping, inputcommand, statemachine

status: readyforreview
created: 20171009
updated: 20171009
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Input Command to State Machine

If an [Input Command](../InputCommands.md) is mapped to a [State Machine](../StateMachines.md) you will need to 
select an event that is to be applied to the state machine that may cause a state transition.  

In addition, you can select an incoming parameter from the Input Command to be passed to the [onTransition](../../Scripting/StateTransition.md) handler for the event.