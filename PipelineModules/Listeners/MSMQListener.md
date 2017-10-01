---
title: MSMQ Listener
keywords: listener, cloud, msmq, msmqbroker, messagequeue, topics

created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# MSMQ Listener

NuvIoT provies a free light-weight MQTT Broker that is built in to get you up and running quickly.  
This is a good choice for low volume, or development applications.

### Required Fields

In addition to the standard fields that are required for any listener the following fields are required:

**Listener Type**  
`MQTT Listener`

**Anonymous Connection**  
Select this option if your MQTT server does not require authentication (not recommended)

**User Name**  
User Name with access privelages to your MQTT Server if not an anonymous connection

**Password**  
Password with access privelages to your MQTT Server if not an anonymous connection

**Listen on Port**  
The port that you want to listen for MQTT connections, this is usually 1883, but you can add additional listeners that run on different ports.  
As this is a low volume listener, primarily intendend for development or non-critical applications, SSL/TLS connections are not supported. 