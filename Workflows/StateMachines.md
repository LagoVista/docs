---
title: State Machines
keywords: workflow, statemachine, event, state, transition

status: readyforapproval
created: 20171009
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Workflow](Index.md)

# State Machines

State Machines are a powerful mechanism for building your application logic.  The idea is relatively simple, but
when leveraged properly, you can build sophisticated processes that are easy to manage.  When you 
create a State Machine, you take into account the different States your device can be in.  You then define the events that can be applied to your device.  Finally, you define which events 
should be handled in each State and what should happen when that event occurs.

When an event occurs, there are two basic things you can do:  
1. Execute a Behavior
2. Transition to a New State

Our Visual Designer allows you to construct a picture of your State Machine that will then
execute as events are generated from different parts of the workflow.

You can even send events to other State Machines within the workflow.

### Mappings From State Machines
[To Attribute](./Mappings/StateMachineToAttribute.md)  
[To Output Command](./Mappings/StateMachineToOutputCommand.md)  
[To Other State Machines](./Mappings/StateMachineToStateMachine.md)  

### Mappings to State Machines
[From Inputs](./Mappings/InputToStateMachine.md)  
[From Input Commands](./Mappings/InputCommandToStateMachine.md)  
[From Attributes](./Mappings/AttributeToStateMachine.md)  
[From Other State Machines](./Mappings/StateMachineToStateMachine.md)  

