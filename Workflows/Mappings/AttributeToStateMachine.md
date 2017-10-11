---
title: Workflow Mapping - Attribute to State Machine
keywords: workflow, mapping, attribute, statemachine

status: readyforapproval
created: 20171009
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Attribute to State Machine

When Mapping an [Attribute](../Attributes.md) to a [State Machine](../StateMachines.md), you need to 
select which event should be invoked when the Attribute arrives.  

The State Machine [Transition Handler](../../Scripting/StateTransition.md) that handles the event will then receive the value of the Attribute as an input.
