---
title: Scripting 
keywords: workflow, scripting

status: new
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md)

# Scripting

To provide an easy level of customization, NuvIoT includes a robust online editor and script engine you can
use to create scripts in JavaScript.

#### Scripts
[Attribute - onSet](AttributeOnSet.md) - When an [Attribute](../Workflows/Attributes.md) is set from any source you can add a custom script  
[Input - onSet](WorkflowInputOnSet.md) - When an [Input](../Workflows/Input.md) is set from a Device Message you can add a custom script  
[Input Command - onArrive](InputCommandArrive.md) - When an [Input Command](../Workflows/InputCommands.md) arrives from from an external source you can add a custom script  
[State Machine - handle](StateMachineSendEvent.md) - You can invoke the `handle` method on your state machines to cause a [state machine](../Workflows/StateMachines.md) to handle an event  
[State Machine - onTransition](StateTransition.md) - As a state transition is executed on your  [state machine](../Workflows/StateMachines.md)  you can add a custom script  

#### Data Models
[Device Model](DeviceScriptingModel.md) - Properties and Methods that are available to access Device data in your script.  
[Device Workflow Model](DeviceWorkflowScriptingModel.md) - Properties and Methods that are availabe to access Device Workflow methods  
[Property Bag](PropertyBag.md) - While executing your scripts you have access to a general purpose property bag where you can store random variables and data.
[Working with Attributes](WorkingWithAttributes.md) - You can set, get and clear attributes of your device.

#### Networking
[Networking](Networking.md) - Basic Methods to make Network calls

#### Other
[Utilities](Utilities.md) - General purpose methods available to your scripts
[Logging](Logging.md) - Methods available to log messages from your scripts  


