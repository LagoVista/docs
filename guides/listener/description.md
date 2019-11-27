**Listeners are part of the pipeline modules used to monitor a port, protocol or service for messages from your devices**

To allow for maximum reuse and scalability, build your application as a set of Pipeline Modules. Once the Listener receives a message that is handed off to the Planner to determine processing, a Route is created.

A route is a series of Pipeline Modules that are executed sequentially to perform processing on incoming messages.

The following are the default Pipeline Modules that make up a typical route:

Sentinel - Authenticates and potentially decrypts the message
Input Translator - Extracts values from the input message
Workflow - Performs any business logic and prepares output messages
Output Translator - Converts outputs from the workflow back into a format that the device can understand
Transmitter - Sends values back to the device, either directly or by queueing them
Most of the time, message business logic is done in the Workflow Module. The workflow allows for a significant amount of customization in the form of scripting and creating State Machines. If these don't meet your needs, you can always create Pipeline Modules with custom code and deploy them as containers to participate in the device workflow.