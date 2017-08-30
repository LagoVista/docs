# Getting Started

Building an IoT application is a non-trivial task.  As with any non-trivial tasks, it's best to tackle in small easy verifiable steps.  In addition 
our built in project management with task templates are very helpful to get you off to a great start!

In addition, we have created an Expert System that you can use to help capture your requirements and device your solution.  After answering a number of questions
our Expert System will create a project plan including a set of pre-populated tasks that you can complete to build out your application. 

It's important before you begin to understand your goals, there are a lot of cool things you can do so it's a good idea to make a list and prioritize.  
Assuming you have your list let's get started.

This getting started guide assumes that you have a basic idea of what you want to do and have identified your sensors, if you need help
with this please feel free to [contact us](mailto:partners.iotappstudio.com) and we would be happy to discussion options.

#### General Approach

When designing any sort of complex architecture it's a good idea to decouple the the components of your system as much
as possible, both for testing and reuse.  Our system let's you create small reusable data driven configurations for much 
of which you need to do for any typical IoT system.  Once you have configured your compoments you can then assembled them
into a fully functional and testable solution.  After a short amount of time you'll assemble a collection of resuable
data driven components that let you bring on whole new solutions in a small fraction of the time it would take to 
start from scratch. 

### Without Devices and Sensors you Can't Have IoT

Let's start with your devices, sensors and equipement, the goal of this step is to configure all the specific device types
you will want to integrate as well as any messages they will send and/or receive.

The following assumes that you have decided on some sensors that you have no control over how they communicate.  If you are creating
your own sensors and communication protocols, you can use the following steps to help capture requirements.

[First we will define our Device Types](../Devices/DeviceTypes.md)

[Then we will define our Device Messages](../Devices/DeviceMessages.md)
 
### Define your Device Workflow

Now that you have figured out how your devics communicate, let's configure your solution to do something with those messages and data.  In this step
you will configure the [Inputs](../workflow/Input.md) by mapping the fields from your messages.  You'll also describe [Attributes](./workflow/Attributes.md) or data called state that will be 
saved between device calls.  You can even add [Input Commands](../workflow/InputCommands.md) where you can expose REST based services to interact with your 
workflow and ultimately with your devices from third party apps or services.  You'll also add [State Machines](./StateMachines.md) (don't worry this isn't as hard as it sounds) to define how your devices should react to
incoming data and messages.  Finally you'll define your [Output Commands](../workflow/OutputCommand.md) that will be used to send data or commands back to the device.

You can do all of this via a WYSWIG designer, where you can add custom scripts and even calls to your custom code with our container frameworks.

Remember you are creating a reusable component, so it doesn't have to map 1:1 with your devices, in this step you just configure what you want to do 
and then map it to the devices at a later time.