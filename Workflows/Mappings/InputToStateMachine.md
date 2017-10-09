---
title: Workflow Mapping - Input to State Machine
keywords: workflow, mapping, input, statemachine

status: readyforreview
created: 20171009
updated: 20171009
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Input to State Machine

An [Input](../Input.md) is a value that comes from a [device message](../../Messaging/Index.md).  You define your Inputs on a workflow.  

You can map an input to a state machine, when
an input is mapped to a [state machine](../StateMachines.md), you will need to specifiy an event that will be handled by the state machine.  

The [transition handler](../../Scripting/StateTransition.md) for the state machine will receive the value of the input.
