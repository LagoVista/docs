[Home](../Index.md) > [Devices](Index.md)

# Device Configurations

A device configuration consists of two parts:

* A collection of [routes](../Routes/Route.md)
* A set of supported [messages defintions](../Devices/DeviceMessages.md) that will trigger those routes

When you create a [solution](../Deployment/Solutions.md) you specify a set of [listeners](../PipelineModules/Listener.md) and a
planner as well as any supported device configurations.  The listeners job is to listen for messages, once a message is received
it is passed to the listener that determine the message id and device id.  With those two pieces of information it will attempt
to find a match for a device configuration based on known devices and supported messages types.  If a match is found it will 
then use the steps as defined in the route to process the rest of the message.

![planner process](../Images/Planner.png) 