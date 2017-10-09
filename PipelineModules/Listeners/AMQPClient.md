---
title: AMQP Client
keywords: listener, cloud, azure, eventhub, messagequeue

status: inprocess
created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# AMQP Client

**Note:**  *Please [contact us](http://support.nuviot.com) if you plan to use your AMQP Server or Broker and are running into issues with integration, we'll be
happy to work with you to ensure a successful integration*

Currently NuvIoT doesn't implement it's own dedicated AMQP server, it does however offer the option to connect to a 3rd party AMQP server
of your choosing.    

You have any number of options for adding an AMQP server, you can use a could based provider such as [Azure](https://portal.azure.com) or 
[Amazon](https://aws.amazon.com/) or you can launch a dedicated AMQP server in a container that is preconfigured to specifically work with NuvIoT. 
If you use a 3rd party server you will be responsible for managing authentication of devices as they connect (_although if the third
party service allows you can call our [API](../../API/Index.md) to authenticate your devices_).  If you choose to launch a dedicated 
AMQP server, it will automatically authenticate your devices.  Please contact us for more details on dedicated AMQP server availability.

### Required Fields

In addition to the standard fields that are required for any listener the following fields are required:

**Listener Type**  
`AMQP Client`

**Content Type**  
Select the [content type](../../Messaging/ContentTypes.md) of the message you are expecting, any content types are acceptable.

**Host Name**  
Host Name of your AMQP Server

**User Id**  
User Id of the account that has access to the AMQP queues

**Password**  
Password of the account that has access to the AMQP queues

**Topic**  
The Topic or Queue to listen for messages, note you can use wildcards such as `#` and `*` where
  * `*` (star) can substitute for exactly one word.
  * `#` (hash) can substitute for zero or more words.