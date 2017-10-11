---
title: State Machine - Handle
keywords: workflow, scripting, handle, statemchine

status: readyforreview
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# State Machine - Handle

Within any of the scripts within your workflow, you can send an event to 
a State Machine.  For this example, we will have a [State Machine](../Workflows/StateMachines.md) with a [Key](../Topics/Keys.md) of 
`mystatemachine`.  That State Machine will have an event called `event1` defined.  To cause the 
State Machine to handle that event, you can use the following script:

```
// Handle an event without a parameter
function onXXXXX(value) {
    StateMachines.mystatemachine.handle('event1');
}

-or-

// Pass a parameter with the event handler.
function onXXXXX(value) {
    StateMachines.mystatemachine.handle('event1',value);
}
```
