---
title: RabbitMQ Client
keywords: listener, cloud, messagequeue, rabbitmqclient, rabbitmq, topics, queue

status: approved
created: 20170922
updated: 20170922
createdby: bytemaster-0xff
createdby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# RabbitMQ Client

If you have your own RabbitMQ client that you wish to connect to, you can add a RabbitMQ Client Listener and connect to and subscribe
to topics/queues.  Our RabbitMQ client is currently in development.  Please [contact us](http://support.nuviot.com/contactus) if you need this functionality and we'll work with you to ensure a successful implmentation.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)  
`RabbitMQ Client`

* **Content Type** (required)   
Select the [content type](../../Messaging/ContentTypes.md) of the message you are expecting, any content types are acceptable.

* **Host Name** (required)  
Host Name of your RabbitMQ Server

* **Anonymous Connection**     
Select this option if your RabbitMQ server does not require authentication.

* **User Name**  (required if not anonymous)     
User Id of the account that has access to the RabbitMQ server.

* **Password** (required if not anonymous)      
Password of the account that has access to the RabbitMQ server.

* **Subscriptions** (required)  
The [Subscriptions](https://www.rabbitmq.com/tutorials/tutorial-three-python.html) you provide will be used to select the messages that you will receive from your RabbitMQ server.

    You must provided at least one subscription to listen for messages.  
    Each Subscription must contain a a topic with wildcards as supported by your MQTT server such as `#` and `*` where:
  * `*` (star) can substitute for exactly one word
  * `#` (hash) can substitute for zero or more words  

