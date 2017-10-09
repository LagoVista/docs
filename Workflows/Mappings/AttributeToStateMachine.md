---
title: Workflow Mapping - Attribute to State Machine
keywords: workflow, mapping, attribute, statemachine

status: readyforreview
created: 20171009
updated: 20171009
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Workflow](../Index.md) > [Mappings](Index.md)

# Attribute to State Machine

When Mapping an [Attribute](../Attributes.md) to a [State Machine](../StateMachines.md), you will need to 
select which event should be invoked when the attribute arrives.  

The State Machine [transition handler](../../Scripting/StateTransition.md) that handle the event will then receive the value of the attribute as an input.
