---
title: Input Translator
keywords: listeners, inputtranslator, pipelinemodule

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Pipeline Modules](Index.md)

# Listeners

Each Solution must have at a minimum one listener, a listeners primary responsibility is to monitor a message source for incoming messages
and hand them off to the [Planner](Planner.md) to determine how the message should be processed.

The following standard listener types are supported and can be configured to meet your needs:
* [AMQP Client](./Listeners/AMQPClient.md) - Connect to a 3rd Party AMQP Server for Messages
* [Azure Event Hubs](./Listeners/AzureEventHubs.md) - Connect to an [Azure Event Hub](https://azure.microsoft.com/en-us/services/event-hubs/)
* [Azure IoT Event Hub](./Listeners/AzureIoThub.md) - Connect to an [Azure IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/)
* [Azure Service Bus](./Listeners/AzureServiceBus.md) - Connect to an [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) 
* [MSMQ Client](./Listeners/MSMQClient.md) - Connect to a 3rd Party MQTT Broker and listen for Messages
* [MSMQ Hosted Server](./Listeners/MSMQHostedServer.md) - Deploy a Container Based MQTT Broker with built in NuvIoT Integration
* [MSMQ Listener](./Listeners/MSMQListener.md) - Our free light-weight built in MQTT Listener (low volume)
* [RabbitMQ](./Listeners/RabbitMQ.md) - Deploy a Container hosting RabbitMQ that is integrated with NuvIoT
* [REST](./Listeners/Rest.md) - Listen for HTTP and HTTPS [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) messages
* [TCP](./Listeners/TCP.md) - Listen on a TCP port for messages
* [UDP](./Listeners/UDP.md) - Listen on a UDP port for datagram based messages

If you have something that is unique for your implementation you can create a customer listener that monitors your unique channel
and then hands these off to the planner to leverage existing processing.

It is important that a listener listens for a full message.  That is to say if the message is sent over multiple TCP packets or datagrams
the listener must ensure that all the bytes that make up the message are received prior to handing it off to planner.  All standard listeners 
can be configured to do this by default, however if you create your own listner you must ensure this is the case.

Listeners can be configured to either immediately acknowledge the message as soon as it arrives or configured to keep the connection
open until the processing of the message has been completed.

With the queue based pipeline architecture your listener will almost always be bottle neck and most critical part of the system 
both in terms of high availability and performance.

_As of the time of this writing the high availability architecture for the listeners has been designed but not implemented, this includes
geo redundent load balancers.  If you are in need of this place contact us and we will work with you to help understand this approach and
ensure it is in place prior to your system going live_