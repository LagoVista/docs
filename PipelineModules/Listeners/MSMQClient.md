---
title: MQTT Client
keywords: listener, cloud, mqtt, mqttbroker, messagequeue, topics

status: approved
created: 20170922
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# MQTT Client

If you have your own dedicated MQTT Broker, you can establish a connection to it, and monitor it for incoming messages.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)     
`MQTT Client`

* **Content Type** (required)   
Select the [content type](../../Messaging/ContentTypes.md) of the message you are expecting, any content types are acceptable.

* **Host Name** (required)     
URL or IP address where your MQTT server is hosted.

* **Anonymous Connection**     
Select this option if your MQTT server does not require authentication.

* **User Name**  (required if not anonymous)     
User Name with access priveleges to your MQTT Broker.

* **Password** (required if not anonymous)      
Password with access priveleges to your MQTT Broker.

* **Connect with SSL/TLS**     
Select this option if your server supports SSL/TLS.

* **Connect to Port** (required)  
The port that will be used to connect to your server, usually 1883 or 8883 for SSL/TLS.

* **Subscriptions** (required)  
You must provided at least one subscription to listen for messages.  
Each Subscription must contain a a topic with wildcards as supported by your MQTT server such as `#` and `+` where:
  * `+` (plus) can substitute for exactly one word
  * `#` (hash) can substitute for zero or more words  
 
  In addition each subscription must have a [Quality of Service](https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels) specified.


