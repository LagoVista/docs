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

# MQTT Client Transmitter

If you have your own dedicated MQTT server, you can establish a connection to it and monitor it for incoming messages.  The key that you specify for your MQTT client
will be the Client Id that will be sent to MQTT broker.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any transmitter, the following fields are required:

* **Transmitter Type** (required)     
`MQTT Client`

* **Host Name** (required)     
URL or IP address where your MQTT server is hosted.

* **Anonymous Connection**     
Select this option if your MQTT server does not require authentication (not recommended).

* **User Name** (required if not anonymous)    
User Name with access priveleges to your MQTT Server (if not an anonymous connection).

* **Password**  (required if not anonymous)  
Password with access priveleges to your MQTT Server (if not an anonymous connection).

* **Connect with SSL/TLS**     
Select this option if your broker supports SSL/TLS.

* **Connect to Port** (required)    
The port that will be used to connect to your server, usually 1883 or 8883 for SSL/TLS.