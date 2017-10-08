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
[Attribute - OnSet](AttributeOnSet.md) - When an [Attribute](../Workflows/Attributes.md) is set from any source you can add a custom script  
[Input - OnSet](WorkflowInputOnSet.md) - When an [Input](../Workflows/Input.md) is set from a Device Message you can add a custom script  
[Input Command - OnArrive](InputCommandArrive.md) - When an [Input Command](../Workflows/InputCommands.md) arrives from from an external source you can add a custom script  
[State Machine - OnTransition](StateTransition.md) - As a state transition is executed you can add a custom script

#### Data Models
[Device Model](DeviceScriptingModel.md) - Properties and Methods that are available to access Device data in your script.  
[Device Workflow Model](DeviceWorkflowScriptingModel.md) - Properties and Methods that are availabe to access Device Workflow methods  
[Property Bag](PropertyBag.md) - While executing your scripts you have access to a general purpose property bag where you can store random variables and data.