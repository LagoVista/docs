---
title: AMQP Client
keywords: listener, cloud, azure, eventhub, messagequeue

created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# AMQP Client

Currently NuvIoT doesn't implement it's own dedicated AMQP server, it does however offer the option to connect to a 3rd party AMQP server
of your choosing.    

You have two options for adding an AMQP server, you can use a could based provider such as [Azure](https://portal.azure.com) or 
[Amazon](https://aws.amazon.com/) or you can launch a dedicated AMQP server in a container that is preconfigured to specifically work with NuvIoT. 
If you use a 3rd party server you will be responsible for managing authentication of devices as they connect (_although if the third
party service allows you can call our [API](../../API/Index.md) to authenticate your devices_).  If you choose to launch a dedicated 
AMQP server, it will automatically authenticate your devices.  Please contact us for more details on dedicated AMQP server availability.