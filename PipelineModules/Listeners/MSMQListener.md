---
title: MSMQ Listener
keywords: listener, cloud, msmq, msmqbroker, messagequeue, topics

status: readyforapproval
created: 20170922
updated: 20171011
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# MSMQ Listener

NuvIoT provides a free, light-weight, built-in MQTT Broker that will get you up and running quickly.  
This is a good choice for low-volume and development applications.

### Required Fields

In addition to the standard fields that are required for any listener, the following fields are required:

* Listener Type     
`MQTT Listener`

* Anonymous Connection     
Select this option if your MQTT Server does not require authentication (not recommended).

* User Name     
User Name with access priveleges to your MQTT Server (if not an anonymous connection).

* Password     
Password with access priveleges to your MQTT Server (if not an anonymous connection).

* Listen on Port     
The port that you want to use to listen for MQTT connections.  This is usually 1883, but you can add additional listeners that run on different ports.  

**NOTE:**  Since this is a low-volume listener, primarily intendend for development and non-critical applications, SSL/TLS connections are not supported. 
