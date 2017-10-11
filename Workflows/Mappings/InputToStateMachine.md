---
title: Workflow Mapping - Input to State Machine
keywords: workflow, mapping, input, statemachine

status: readyforapproval
created: 20171009
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Input to State Machine

An [Input](../Input.md) is a value that comes from a [Device Message](../../Messaging/Index.md).  You define your inputs on a workflow.  

You can map an input to a State Machine.  When an input is mapped to a [State Machine](../StateMachines.md), you will need to specifiy an event that will be handled by the State Machine.  

The [Transition Handler](../../Scripting/StateTransition.md) for the State Machine will receive the value of the input.
