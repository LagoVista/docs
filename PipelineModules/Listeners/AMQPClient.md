---
title: AMQP Client
keywords: listener, cloud, azure, eventhub, messagequeue

status: approved
created: 20170922
updated: 20170922
createdby: bytemaster-0xff
createdby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# AMQP Client

**Note:**  *Please [contact us](http://support.nuviot.com/contactus) if you plan to use your AMQP Server or Broker and are running into issues with integration, we'll be
happy to work with you to ensure a successful integration*

Currently NuvIoT doesn't implement it's own dedicated AMQP server, it does however offer the option to connect to a 3rd party AMQP server
of your choosing.    

You have any number of options for adding an AMQP server, you can use a could based provider such as [Azure](https://portal.azure.com) or 
[Amazon](https://aws.amazon.com/) or you can launch a dedicated AMQP server in a container that is preconfigured to specifically work with NuvIoT. 
If you use a 3rd party server you will be responsible for managing authentication of devices as they connect (_although if the third
party service allows you can call our [API](../../API/Index.md) to authenticate your devices_).  If you choose to launch a dedicated 
AMQP server, it will automatically authenticate your devices.  Please contact us for more details on dedicated AMQP server availability.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)  
`AMQP Client`

* **Content Type** (required)   
Select the [content type](../../Messaging/ContentTypes.md) of the message you are expecting, any content types are acceptable.

* **Host Name** (required)  
Host Name of your AMQP Server

* **Anonymous Connection**     
Select this option if your AMQP server does not require authentication.

* **User Name**  (required if not anonymous)     
User Id of the account that has access to the AMQP server.

* **Password** (required if not anonymous)      
Password of the account that has access to the AMQP server.

* **Subscriptions** (required)  
The Subscriptions you provide will be used to select the messages that you will receive from your AMQP server.

    You must provided at least one subscription to listen for messages.  
    Each Subscription must contain a a topic with wildcards as supported by your MQTT server such as `#` and `*` where:
  * `*` (star) can substitute for exactly one word
  * `#` (hash) can substitute for zero or more words  
 

