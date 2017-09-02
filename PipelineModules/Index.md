[Home](../Index.md) 

# Pipeline Modules

To allow for maximum reuse and scalability you build your application as a set of pipeline modules.  Once the [listener](Listener.md) 
receives a message that is handed off to the [planner](Planner.md) to determine processing a [route](../Routes/Route.md) is created.

A route is series of pipeline modules that are executed sequentially to perform processing on the incoming messages.

The following are the default pipeline modules that make up a typical route.

* [Sentinel](Sentinel.md) - Authenticates and potentially descrypts the message
* [Input Translator](InputTranslator.md) - Extract values from input message
* [Workflow](Workflow.md) - Performs any business logic and prepares output messages
* [Output Translator](OutputTranslator.md) - Converts outputs from the workflow back into a format the device can understand
* [Transmitter](Transmitter.md) - Send values back to the device, either directly or queueing thenm

Most of the time message business logic is done in the [workflow module](Workflow.md).  The worflow allows for a significant amount
of customization in the form of scripting and creating [state machines](../Workflows/StateMachines.md) however if these don't meet
your needs you can always create pipeline modules with custom code and deploy them as containers to participate in the device workflow.