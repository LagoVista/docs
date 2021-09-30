---
title: Workflow
keywords: workflow, pipelinemodule, pipeline

status: new
created: 20210903
updated: 20210903
createdby: JennyWrenWolf
updatedby: JennyWrenWolf
---
[Home](../Index.md) > [User Information](./Index.md)

# Workflow

## Definition
Workflows are [Pipeline Modules](./PipelineModule.md) that allow custom logic to be applied to a [PEM](./PEM.md).  They also may trigger data to be sent back to the [Device](./Device.md), to other systems, or to save values as [Attributes](./Attribute.md).

Workflows may include
- [Attributes](./Attribute.md) - Properties that are associated with a [Device](./Device.md)
- [Inputs](./Input.md) - New values that arrive from incoming messages
- [Input Commands](./InputCommand.md) - Commands that can be triggered from external sources to manipulate your device
- [Output Commands](./OutputCommand.md) - Messages that are sent back to the device or other systems as a result of the workflow
- [Scripts](./Scripts.md) - Small computer programs that get triggered as the workflow is processed
- [State Machines](./StateMachine.md) - A mechanism for building complex logic that can be executed based on the current state of your device

The workflow module is responsible for taking the values extracted from the input translator and doing something with them.  A workflow can contain the following type of components and will be discussed in much further detail in a later section.

- Workflow Input
As with the rest of the objects within NuvIoT, the workflows you create can be reused across different devices and IoT configurations.  To do so, each workflow defines a set of inputs.  These inputs are values are visually declared within a workflow and they must be assigned a data type such as string, Boolean, integer or real number.  The inputs are then mapped to the output of the input translator and made available within the workflow to be either stored in attributes or used within scripts.

- Input Commands
One of the reasons the Smart Litter Box team chose NuvIoT was the ability to easily and extend and enhance the IoT applications built within the platform.  One of the technologies that made this possible is the concept of adding Input Commands to a workflow.  Input commands will let the team automatically build up custom APIs that can be used to initiate processes and actions within the workflow.  For example, if the upper unit of the Smart Litter Box gets jammed or doesn’t complete a full cycle, the system can detect that error, but it doesn’t automatically do anything to fix it.  Using an Input Command an API can be created that will let a remote user, either a support technician or the owner of the Smart Litter Box uses a custom phone application to initiate a process to clear the jam.  Input commands are just REST end points that are custom made as part of the workflow that can perform actions within that workflow.  You can watch this video to see an Input Command in action.

- State Machines
The Smart Litter Box team didn’t know too much about state machines, but Rebecca, Walt’s niece who is studying to become an electrical engineer said they are a very important concept when designing software and especially embedded systems such as the one that will be controlling the Smart Litter Box.  A State Machine, establishes the context of the current state or condition that the device can be in.  Based on the current state of the device, certain actions can be valid and other ones can be invalid.  An example of this for the Smart Litter Box is that if it is already rotating, and another message or command comes in to instruct it to “Start Rotating” that doesn’t really make a lot of sense.  The state machine knows it’s in a rotating state simply ignores the command “Start Rotate”.  Just as with the attributes the current state of the machine is stored along with a specific device and applications can be built on top of it that can display or use this information.

- Output Commands
•	Just as Input Command provide a way to provide a way to map values form incoming messages into a workflow, Output Commands are used to provide outputs or trigger events that can either be sent to back to the device or to other systems.  The Smart Litter Box team will use output commands to let the owners know that it’s time to empty the bag where the waste is stored.  As part of the workflow an attribute keeps track of how often the litter box is used, then after a predetermined number of uses, an Output Command is called, this output command is then mapped to an outgoing message that is set within the device configurations route.  A single workflow can have multiple outgoing commands, however each of these output commands will need to be mapped to a message so they can be sent. When an Output Command is created, a field can be added that will be able to send some data as collected from the incoming message or calculated as part of the workflow.  The output command doesn’t define how the message should be sent or formatted; it only defines fields that should be used to sent along with the message.  Output messages are defined as objects, but are created, populated and sent with scripts.  To see more on how Output messages are used, check out the following link https://support.nuviot.com/help.html#/scripting/invokeoutputcommand 

- Business Rules
    - One of the primary purposes of an IoT device is to capture data and send it to the cloud.  Unless something is done with that data, it isn’t as useful as it could be.  Of course, the Smart Litter Box could just make that data available to their users through an application where those users would have to open the application when they wanted to see how many times the litter box was being used but this is less then optimal, this requires the user making a conscious effort to go into the application and check this.  A better option is to provide a notification.  There are a couple options to provide these notifications, one is to send these on a daily basis, how many times the litter box was used each day.  The other is to only send these when there is a problem or an exception to a rule.  If the rule was that the litter box is normally used 6 times a day, but the sensors detect it was only used 5 times, this would can considered an exception to the rule and the user should be notified.
    - Within a workflow you can add business rules, a business rule is a simple script that you can write that looks at values, either calculated or directly from a message, compare them to expected values if the result falls within the expected value, the script will return True, if it does not, it will return False.  In addition to returning False, it can also set a reason why it was False.  As part of the business rule, you also specify an Error Code.  You define an Error Code as part of the Device Configuration, if the script returns False, that Error Code will be used to generate an Error on the device and perform steps necessary to handle that error, which may include sending a notification.  

- Device Workflow Pages
It is possible that some of the Workflows that need to be created by the Smart Litter Box may get sophisticated or need to perform many actions, calculations or store many pieces of data.  Workflows are created visually to include the objects such as Workflow Inputs, Attributes, State Machines and so on.  When creating Workflows, it may make sense to organize different parts of the workflow on to different pages.  Workflows can have as many different pages as necessary and objects can be reused across different pages.

- Mapping Messages to a Workflow  
The output of the Input Translator is a set of fields that include the message field name and the value that was sent for that message.  The input for the Workflow is a set of Workflow Inputs the provide data that can be used to perform different actions such as calculations and making sure values fall within specific ranges.   The team knows that each of the objects they create in NuvIoT have been organized in such a way they are stand-alone and can be reused on multiple applications.  This means that when a message is brought in, and a workflow is brought in, they may not know how they need to work together.  Within the route you need to map fields as identified from Input Translator to the fields identified by the Workflow Inputs, this is done by setting up a mapping between the two objects.  To add the mapping simply click on mapping button, and match up the fields as identified by the message on the route to the inputs on the workflow.  It’s important to realize that NuvIoT has its own type system that is to say each field has a data type associated with it such as Integer, String or Boolean.  When creating your mapping you need to ensure that the source data type coming from the message matches that of the data type on the workflow input.  If mappings aren’t added, then the information provided from the incoming message will not be available to the workflow.  It’s also important to realize that you don’t need to map all the values between the two objects, in some cases your workflow will be used across different applications or to handle different messages and not all of those messages may have the same fields.

- Device Attributes
The Device Attributes Widget will display a list of attributes associated with the device.  The Device Attributes are created as part of a Device Workflow pipeline module.  As messages are received from an IoT device, those messages are processed by a Device Workflow, that Device Workflow has Attributes, values as received from the Device Workflow are stored with associated Attributes.  The Attributes on the device represent data from the most recent message as processed by the workflow.  As with other Widgets the device used to provide data can be specific to the Device Attributes Widget or selected as part of the view.

- Device Actions

- Input Commands can be added as part of a Device Workflow.  Input commands can initiate some sort of action or behavior on a device.  This can be setting a value, sending messages, generating output commands or sending events to a state machine.  Any of the Input Commands that are defined workflows that are on routes for the device configuration are available as Device Actions that can be invoked by the Device Actions widgets.  As with other Widgets the device used to provide data can be specific to the Device Actions Widget or selected as part of the view.

**This section may be called Glossary – Defines Main parts of Workflow Module**

**Attributes** 
- Properties that represent the current state of your device
- Attributes are properties of your device or system that are stored on the server. Once they are assigned, they will always be available for reporting or to use in any workflows associated with your device.
- Attributes have a Key assigned to them when they are created. This key can then be used in scripts or other formulas.
Since attributes are defined on a Workflow, they need to be fully qualified to be used external to the workflow.
- You can provide a Script that is executed when a value is being assigned to an Attribute.
- In addition, you can access and set Attributes through a Script as well.
- The routes that are created to handle messages sent from devices are only used to perform action on the messages, by default they don’t store any values (however the entire message itself is saved).  If the values of the messages need to be saved to reviewed later or used in calculations they can be saved as an attribute of the device which is the current value.  Another option that will be discussed will be storing these in data streams which will store historical data.  These attributes are created in a workflow and are shared across the different workflows you have for the device configuration.  These attributes can also be used to display data within our dashboard builder and can be used within scripts and formulas.
- **Mappings from Attributes**
    - To Output Command
        - In cases where an Attribute is mapped to an Output Command, when the attribute arrives it will send a message via the Output Command. Within the mapping, you need to select a Message Definition that will be queued. Prior to the message being queued for delivery, the attribute will be set on the device. When the message is constructed, it will have access to all the properties associated with the incoming message as well as the device.
    - To State Machine
        - When Mapping an Attribute to a State Machine, you need to select which event should be invoked when the Attribute arrives.
        The State Machine Transition Handler that handles the event will then receive the value of the Attribute as an input.	

- **Mappings to Attributes**
    - From Input
       - If an Input is mapped to an Attribute, the value contained in the Input will be applied and stored to the Attribute so that it can be accessed at a later time or used within a report. Inputs are temporary and will only exist while the message is being processsed.
        When mapping an Input to an Attribute, the types must be the same. In addition, if the type is a Value with Unit or State Set, the Values and State Sets must match between the source and destination.
        When the Attribute is set on the workflow, a Script can be provided to run custom logic.
    - From Input Command
        - If an Input Command is mapped to an Attribute the value or values that are passed in from the Input Command are set on the Attribute. These are set via mappings. As the attribute is set, the Attribute OnSet script is executed.

**Inputs**
- New values that arrive from incoming messages
- An Input is a value that comes from a Device Message that has a specific Type.
- When building your workflow, you can update your device data from data arriving from incoming messages. After the Input Translator converts the raw message format into standard message format, the fields on the standard message format are mapped to inputs within a Route.
- In addition, you can provide a Script that will get executed when the input is set.
- Finally within your scripts, you can access the raw input values.
- **Mapping from Inputs**
    - **To Attribute**
        - If an Input is mapped to an Attribute, the value contained in the Input will be applied and stored to the Attribute so that it can be accessed at a later time or used within a report. Inputs are temporary and will only exist while the message is being processsed.
        - When mapping an Input to an Attribute, the types must be the same. In addition, if the type is a Value with Unit or State Set, the Values and State Sets must match between the source and destination.
        - When the Attribute is set on the workflow, a Script can be provided to run custom logic.
    - **To Output Command**
        - An Input is a value that will come from a device message. You define your Inputs on a Workflow and then can map fields from your messages to the Input.
    - **To State Machine**
        - An Input is a value that comes from a Device Message. You define your inputs on a workflow.
        - You can map an input to a State Machine. When an input is mapped to a State Machine, you will need to specifiy an event that will be handled by the State Machine.
        - The Transition Handler for the State Machine will receive the value of the input.

- **Mapping from Inputs**
    - None - an Input can only be a source for mappings

**Input Commands**
- Commands that can be triggered from external sources to manipulate your device
- Input Commands are a very powerful mechanism where you can define your own REST endpoints that will be made available for external applications to set properties and invoke methods within the workflow.
- Input Commands are device specific that is to say as part of the REST URI, you will include your device id so the workflows will be run in individual devices.
- Input Commands support the following HTTP Methods:
    - GET
    - POST
    - PUT
    - DELETE
- **Input Command Parameters**
    - You can pass parameters along with your Input Commands to add a parameter click on Add and specify the following parameters
	Name (required)
A simple name to identify your parameter, this is only for reference
	Key (required)
A unique key to identify the paremter this will also be used to establish how the parameter should be sent.
	Parameter Location (required)
The location where the paramter should be sent, this can be in the query string or the body (for POST/PUT methods)
	Parameter Type
The data type of the parameter.
Output Commands - Messages that are sent back to your device as a result of the workflow
o	Output Commands are used to send a message back to your device. When creating an output command you select a Message Definition that contains the fields that make up your outgoing message. You will then be required to map fields that are either available from the incoming message or the device.
o	The message is then passed to the Output Translator that will convert it to the native format your device will understand prior to passing it to the Transmitter that will eventually ensure your device receives the message.
•	Output Translator
•	The output translator is responsible for taking OutputCommands as they are defined and created within the workflow and translating those into messages that can be sent to other systems, other devices or back to the original device that sent the message.  Just as you defined the details of how incoming messages should be received, NuvIoT also lets you define how messages should be sent.  Defining outgoing messages is similar to defining incoming messages where you define the fields that are to be sent on the message, however you will need to provide a small script that will specify how the messages are to be sent.  Just as you map your Input Translator to the Workflow based on the message that is being handled, you also need to map the output from the Workflow to the Output Translator.  One difference is that the Input Translator will always work with exactly one message, the one being handled by the route, whereas the mapping on the Output Translator needs to be done for each message that is being defined by the workflow.  The same rule applies that the fields that are mapped between the Output Commands in the workflow to the fields in the message need to have the same data types.
•	Transmitter
•	The Workflow generates the message to be sent in the form of an OutputCommand, the OutputCommand is turned into a formatted message that is ready to be sent, finally the Transmitter picks up that formatted message and will send that message to another system.  Transmitters are also defined as objects within NuvIoT and can be reused between different IoT applications.  Transmitters can use most standard protocols to communicate with other services, there is even a special version of a transmitter that can be used to send a message back to the device that sent the device that initiated the workflow being processed.  Transmitters are added to the route as they are needed, a route can have multiple transmitters if they need to send messages to different servers or devices, also a single transmitter can send multiple messages.  When a transmitter is added, you will need to map the messages as created by the Output Translator to a specific transmitter.
•	
o	
o	Scripting
o	To work with output commands you will use simple scripts. To create an output command, you will use the send command in any script. To build the content of the output command you will create a function called onExecute.
o	Mappings from Output Commands
o	None - An Output Command can only have incoming connections.
o	Mappings to Output Commands
o	Input to Output Command
	An Input is a value that will come from a device message. You define your Inputs on a Workflow and then can map fields from your messages to the Input.
o	Input Command to Output Cmmand
	If an Input Command is mapped to an Output Command values from the input command are made available to the output command.

State Machines - In NuvIoT, State Machines are a mechanism for building complex logic that can be executed based on the current state of your device
o	State Machines are a powerful mechanism for building your application logic. The idea is relatively simple. When leveraged properly, you can build sophisticated processes that are easy to manage. When you create a State Machine, you take into account the different States your device can be in. You then define the events that can be applied to your device. Finally, you define which events should be handled in each State and what should happen when that event occurs.
o	When an event occurs, there are two basic things you can do:
1.	Execute a Behavior
2.	Transition to a New State
•	Our Visual Designer allows you to construct a picture of your State Machine that will then execute as events are generated from different parts of the workflow.
•	You can even send events to other State Machines within the workflow.
•	Mappings to State Machines
o	From Inputs
	An Input is a value that comes from a Device Message. You define your inputs on a workflow.
	You can map an input to a State Machine. When an input is mapped to a State Machine, you will need to specifiy an event that will be handled by the State Machine.
	The Transition Handler for the State Machine will receive the value of the input.
o	From Input Commands
	If an Input Command is mapped to a State Machine, you need to select an event that is to be applied to the State Machine that may cause a State transition.
	In addition, you can select an incoming parameter from the Input Command to be passed to the onTransition handler for the event.
o	From Attributes
	When Mapping an Attribute to a State Machine, you need to select which event should be invoked when the Attribute arrives.
	The State Machine Transition Handler that handles the event will then receive the value of the Attribute as an input.
Mappings
A Visual Editor is provided to build your workflows. You can add nodes and Connect Them to Other Nodes. It should be noted that not all nodes can be connected to each other.


o	The routes that are created to handle messages sent from devices are only used to perform action on the messages, by default they don’t store any values (however the entire message itself is saved).  If the values of the messages need to be saved to reviewed later or used in calculations they can be saved as an attribute of the device which is the current value.  Another option that will be discussed will be storing these in data streams which will store historical data.  These attributes are created in a workflow and are shared across the different workflows you have for the device configuration.  These attributes can also be used to display data within our dashboard builder and can be used within scripts and formulas.
•	Data Streams
•	As data is collected from the Smart Litter Box, the workflow will store the relevant values to Attributes within the workflow.  These Attributes represent the current state of the Smart Litter Box.  Sometimes it is important to look at values that have received in prior messages, for example the team decided that one important thing that needs to be tracked would be how many times and how often litter box was used, this can only be done by looking at past data.  Data Streams are used to capture and store data over time and can be created by creating Data Stream Writer objects.  These can then be used within a route or within a workflow to take data values provided by a message or calculated as part of a workflow and store them to be reviewed at a later time.  Each row of data within a Data Stream has both the device id that sent the data as well as a time stamp of when that data was received.   In addition to those fields each Data Stream contains the definition of the fields that describe the data that is collected.  
•	NuvIoT provides a number of different technologies that can be used to implement a Data Stream, the easiest to implement is Built-in Data Stream Storage, this will take care of everything necessary implement the underlying storage mechanism.  If the system that team builds need to only store data that is used by NuvIoT, the Built-in Data Stream Storage is a very good option.  There are more advanced types of data stream storage that are better suited to work as part of a larger system or application, these need to be setup and configured separately then.  Once they are setup, then the information on how to connect to those data stores can be added to NuvIoT.  These data stores are managed by external IT departments.  
•	Once a data stream has been setup, the data can be consumed by creating a dashboard that will display charts and tables with that data.  There is also an API that can be used to extract data as created and stored by the data stream.
•	Time Series Data Streams
•	All data points that get stored into a data stream will have the device id that sent the data as well as the time stamp of when the data was captured.  NuvIoT supports a special type of Data Stream that allows for performing operations on data streams with respect to time.  These Data Streams are called Time Series Data Streams and have an optimized storage technology that make these operations efficient.  There is no difference in the way that data points are inserted into a Time Series Data Stream.  An example of these types of operations is to capture an average of values over a predefined period of time.  These predefined periods can then be grouped into what can be thought of as buckets.  Then a collection of buckets consisting of an average can be returned.  If you are familiar with writing SQL queries, you can think of this as averaging over a group-by in a SQL statement but the underlying technology makes this easier to implement as well as more efficient.  The Smart Litter Box team wanted to know how often the litter box was used each day, they could simply create an Analytics Query where the group by period or window is defined as “Days”, the window size would be defined as 1, or 1 Day, and the fields to be returned would be “Average Cycle”.  This analytics query would then be executed against the database to capture the average number of cycles that our Smart Litter Box has performed per 1 day period.
•	Building time-series queries are very powerful for understanding the behavior of IoT devices over time.
•	Device Workflow Pages
•	It is possible that some of the Workflows that need to be created by the Smart Litter Box may get sophisticated or need to perform many actions, calculations or store many pieces of data.  Workflows are created visually to include the objects such as Workflow Inputs, Attributes, State Machines and so on.  When creating Workflows, it may make sense to organize different parts of the workflow on to different pages.  Workflows can have as many different pages as necessary and objects can be reused across different pages. 
•	Workflow Input
•	As with the rest of the objects within NuvIoT, the workflows you create an be reused across different devices and IoT configurations, to do so, each workflow defines and a set of inputs.  These inputs are values are visually declared within a workflow and they must be assigned a data type such as string, Boolean, integer or real number.  The inputs are then mapped to the output of the input translator and made available within the workflow to be either stored in attributes or used within scripts.
Workflows allow you to provide custom logic that can be applied to your incoming messages.
•	Attributes - Properties that represent the current state of your device
•	Inputs - New values that arrive from incoming messages
•	Input Commands - Commands that can be triggered from external sources to manipulate your device
•	Output Commands - Messages that are sent back to your device as a result of the workflow
•	State Machines - In NuvIoT, State Machines are a mechanism for building complex logic that can be executed based on the current state of your device
Mappings
A Visual Editor is provided to build your workflows. You can add nodes and Connect Them to Other Nodes. It should be noted that not all nodes can be connected to each other.



•	DEVICE WORKFLOWS  
	In tutorial, directions are to click into Studio, then Pipeline Module, then Device Workflow
	In Dashboard, you just go to option
	Add a new Workflow
	would this be for each sensor – like temperature, cat in, cat out, rotate – or for the whole device
	Name 
	Key
	Description
	Within each Workflow
	Input 
	Name
	Input Type
	String
	Integer
	Decimal
	True/False
	Geolocation
	Date/Time
	States
	Value with Units
	Image
	Decimal Array
	Key
	Description
	Attribute 
	Name
	Attribute Type  
	Does this need to be the same type as the input?
	String
	Integer
	Decimal
	True/False
	Geolocation
	Date/Time
	States
	Value with Units
	Image
	Decimal Array
	Key
	Description
	Input Commend Handler 
	Handler is in tutorial but none of your notes
	Name
	Key
	End Point Type
	REST – Get
	REST – Post
	REST – Put
	REST – Delete
	Description
	Parameters
	Create State Machines
	Output
	Settings

