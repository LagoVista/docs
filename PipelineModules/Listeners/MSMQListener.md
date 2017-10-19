---
title: MQTT Listener
keywords: listener, cloud, mqtt, mqttbroker, messagequeue, topics

status: approved
created: 20170922
updated: 20171011
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# MQTT Listener

NuvIoT provides a free, light-weight, built-in MQTT Broker that will get you up and running quickly.  
This is a good choice for low-volume and development applications.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)     
`MQTT Listener`

* **Anonymous Connection** (required)       
Select this option if your MQTT Server does not require authentication (not recommended).

* **User Name**  (required if not anonymous)     
User Name with access priveleges to your MQTT Server.

* **Password** (required if not anonymous)      
Password with access priveleges to your MQTT Server.

* **Listen on Port**     
The port that you want to use to listen for MQTT connections.  This is usually 1883, but you can add additional listeners that run on different ports.  

**NOTE:**  Since this is a low-volume listener, primarily intendend for development and non-critical applications, SSL/TLS connections are not supported. 
