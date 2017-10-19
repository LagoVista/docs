---
title: Input Translator
keywords: listeners, inputtranslator, pipelinemodule, workflow

status: readyforapproval
created: 20170927
updated: 20171012
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Pipeline Modules](Index.md)

# Listeners

Each solution must have a minimum of one Listener.  A Listener's primary responsibility is to monitor a message source for incoming messages,
and then hand them off to the [Planner](Planner.md) to determine how the message should be processed.

The following standard Listener Types are supported and can be configured to meet your needs:
* [AMQP Client](./Listeners/AMQPClient.md) - Connect to a 3rd Party AMQP Server for Messages
* [Azure Event Hub](./Listeners/AzureEventHubs.md) - Connect to an [Azure Event Hub](https://azure.microsoft.com/en-us/services/event-hubs/)
* [Azure IoT Event Hub](./Listeners/AzureIoTHub.md) - Connect to an [Azure IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/)
* [Azure Service Bus](./Listeners/AzureServiceBus.md) - Connect to an [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) 
* [MSMQ Client](./Listeners/MSMQClient.md) - Connect to a 3rd Party MQTT Broker and listen for messages
* [MSMQ Hosted Server](./Listeners/MSMQHostedServer.md) - Deploy a container-based MQTT broker with built-in NuvIoT integration
* [MSMQ Listener](./Listeners/MSMQListener.md) - Leverage our free, light-weight, built-in MQTT Listener (low volume)
* [RabbitMQ Client](./Listeners/RabbitMQClient.md) - Connect to your RabbitMQ server
* [RabbitMQ](./Listeners/RabbitMQ.md) - Deploy a container hosting RabbitMQ that is integrated with NuvIoT
* [REST](./Listeners/Rest.md) - Listen for HTTP and HTTPS [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) messages
* [TCP](./Listeners/TCP.md) - Listen on a TCP port for messages
* [UDP](./Listeners/UDP.md) - Listen on a UDP port for datagram-based messages

If you have something that is unique for your implementation, you can create a custom Listener that monitors your unique channel
and then hands these off to the planner to leverage existing processing.

It is important that a Listener listens for a full message.  If the message is sent over multiple TCP packets or datagrams,
the Listener must ensure that all the bytes that make up the message are received prior to handing it off to the planner.  All standard Listeners 
can be configured to do this by default.  However, if you create your own Listener, you must ensure that this is the case.

Listeners can be configured to either immediately acknowledge the message as soon as it arrives or keep the connection
open until the processing of the message has been completed.

With queue-based pipeline architecture, your Listener will almost always be a potential bottleneck and the most critical part of the system 
both in terms of high availability and performance.

Note:  At this time, high availability architecture for the Listeners has been designed but not implemented.  This includes
geo-redundant load balancers.  If you are in need of this, please [Contact Us](http://support.nuviot.com) and we will work with you to help understand this approach and ensure that it is in place prior to your system going live.
