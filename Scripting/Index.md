---
title: Scripting 
keywords: workflow, scripting

status: approved
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
[State Machine - handle](StateMachineSendEvent.md) - You can invoke the `handle` method on your state machines to cause a [state machine](../Workflows/StateMachines.md) to handle an event.  
[State Machine - onTransition](StateTransition.md) - As a state transition is executed on your  [state machine](../Workflows/StateMachines.md)  you can add a custom script.  
[OutputCommand - send](InvokeOutputCommand.md) - You can invoke the send method to generate an output command, this will execute the [onExecute](OutputCommandCreate.md) method.  
[OutputCommand - onExecute](OutputCommandCreate.md) - This method can be used to build up an output command to be forwarded to the [Output Translator](../PipelineModules/OutputTranslator.md).  
[OutputCommand - onExecute](OutputCommandCreate.md) - This method can be used to build up an output command to be forwarded to the [Output Translator](../PipelineModules/OutputTranslator.md).  
[Workflow - preHandler](WorkflowHandlers.md) - This method is called prior to any of the workflow methods being called, WorkflowInputs will be available.  
[Workflow - postHandler](WorkflowHandlers.md) - This method is called after all the worfklow methods have been called.  

#### Data Models
[Device Model](DeviceScriptingModel.md) - Properties and Methods that are available to access Device data in your script.  
[Device Workflow Model](DeviceWorkflowScriptingModel.md) - Properties and Methods that are availabe to access Device Workflow methods  
[Property Bag](PropertyBag.md) - While executing your scripts you have access to a general purpose property bag where you can store random variables and data.  
[Session Values](SessionValues.md) - While executing your scripts you have access to a temporary variable storage mechanism that will be destroyed after the workflow has completed.  
[Working with Attributes](WorkingWithAttributes.md) - Attributes are data generated from the device or workflow.  
[Working with Properties](WorkingWithProperties.md) - Properties are used to modify user settings and defaults.
[Working with Workflow Inputs](WorkingWithWorkflowInputs.md) - Properties are used to modify user settings and defaults.

#### Messaging
[Sending Messages](SendingMessages.md) - Send messages to other devices or device configurations
[Sending Notifications](SendingNotifications.md) - Send web socket based notifications to subscribed clients 

#### Networking
[Networking](Networking.md) - Basic Methods to make Network calls

#### Other
[Utilities](Utilities.md) - General purpose methods available to your scripts  
[Working with Locations](WorkingWithLocations.md) - There are some utilities you can use to work with locations of your device
[Logging](Logging.md) - Methods available to log messages from your scripts  


