---
title: State Machine - onTransition 
keywords: workflow, scripting, ontransition, statemachine

status: readyforreview
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# State Machine - onTransition

When a state machine performs a transiton between states, a method will be called that you can customize.

```
function onTransition(value) {
    ...
}

- or -

function onTransition(latitude, longitude) {
    ...
}
```

The method will be called with an optional parameter.  The value that will be passed in will be determined by the type
of action that initiates the transition.  If the value is a geolocation both the latitude and longitude will be provided.

You will also have access to the [device properties, attributes](DeviceScriptingModel.md) and state machines and can invoke [output commands]() 