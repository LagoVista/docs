---
title: MSMQ Client
keywords: listener, cloud, msmq, msmqbroker, messagequeue, topics

created: 20170922
updated: 20170922
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# MSMQ Client

If you have your own dedicated MSMQ server, you can establish a connection to it and monitor it for incoming messages.

### Required Fields

In addition to the standard fields that are required for any listener the following fields are required:

**Listener Type**  
`MQTT Client`

**Host Name**  
URL or IP address where your MQTT server is hosted.

**Anonymous Connection**  
Select this option if your MQTT server does not require authentication (not recommended)

**User Name**  
User Name with access privelages to your MQTT Server if not an anonymous connection

**Password**  
Password with access privelages to your MQTT Server if not an anonymous connection

**Connect with SSL/TLS**  
Select this option if your server supports SSL/TLS

**Connect to Port**  
The port that will be used to connect to your server, usually 1883 or 8883 for SSL/TLS

**Topic**  
Topic to listen for messages, note you can use wildcards as supported by your MQTT server such as `#` and `+` where
  * `+` (plus) can substitute for exactly one word.
  * `#` (hash) can substitute for zero or more words.

