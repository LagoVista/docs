[Home](../Index.md) > [Pipeline Modules](Index.md)

# Listeners

Each Solution must have at a minimum one listener, a listeners primary responsibility is to monitor a message source for incoming messages
and hand them off to the [Planner](Planner.md) to determine how the message should be processed.

The following standard listener types are supported

* [AMQP Client](./Listeners/AMQPClient.md)
* [Azure Event Hubs](./Listeners/AzureEventHubs.md)
* [Azure IoT Event Hub](./Listeners/AzureIoThub.md)
* [Azure Service Bus](./Listeners/AzureServiceBus.md)
* [MSMQ Client](./Listeners/MSMQClient.md)
* [MSMQ Server](./Listeners/MSMQServer.md)
* [REST](./Listeners/Rest.md)
* [TCP](./Listeners/TCP.md)
* [UDP](./Listeners/UDP.md)

If you have something that is unique for your implementation you can create a customer listener that monitors your unique channel
and then hands these off to the planner to leverage existing processing.