---
title: MQTT Transmitter
keywords: transmitter, cloud, mqtt, mqttbroker, messagequeue, topics

status: readyforapproval
created: 20171019
updated: 20171019
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Transmitters](../Transmitter.md)

# MQTT Client

If you have your own dedicated MQTT server, you can establish a connection to it and monitor it for incoming messages.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any transmitter, the following fields are required:

* Listener Type     
`MQTT Client`

* Host Name     
URL or IP address where your MQTT server is hosted.

* Anonymous Connection     
Select this option if your MQTT server does not require authentication (not recommended).

* User Name    
User Name with access priveleges to your MQTT Server (if not an anonymous connection).

* Password    
Password with access priveleges to your MQTT Server (if not an anonymous connection).

* Connect with SSL/TLS     
Select this option if your server supports SSL/TLS.

* Connect to Port    
The port that will be used to connect to your server, usually 1883 or 8883 for SSL/TLS.

* Topic    
Topic to listen for messages.  Note that you can use wildcards as supported by your MQTT server such as `#` and `+` where
  * `+` (plus) can substitute for exactly one word
  * `#` (hash) can substitute for zero or more words

