---
title: MQTT Simulator
keywords: simulator, windows, mqtt

status: approved
created: 20171003
updated: 20171017
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# MQTT Simulator

### Simulator Settings

**Note:** For the initial release, our MQTT Simulator does not support MQTT over TLS/SSL. This functionality is planned for Q1 2018.  If you need this sooner, please consider
submitting a [Pull Request](http://github.com/lagovista/simulator) or [Contact Us](http://support.nuviot.com/source=mqttsimulator).

* **Name** (required)  
Name of the Simulator

* **Key** (required)  
[Unique Key](../Topics/Keys.md) to identify the message

* **Transport** (required)  
`MQTT`

* **Default Endpoint** (required)  
Full URL of your MQTT Broker. It should be something similar to `mybroker.mydomain.com`.

* **Port** (required)  
Usually 1883 or 8883 when TLS/SSL is suppoed.

* **Device Id**    
You can add a Device ID to your simulator. This may be the same as the User Name, but this is not a requirement.

* **Anonymous**  
Set this option if you connect without a user name and password to MQTT broker.

* **User Name**  (required if not anonymous)  
User Name to log in to your MQTT server

* **Password**  (required if not anonymous)    
Password to log in to your MQTT server

* **Subscription**
You can subscribe to an MQTT Topic and receive messages in your Simulator.  To subscribe to a Topic based on device, use
the following format:   
```/messages/~deviceid~```, where `~deviceid~` is replaced by the Device ID you added for your Simulator

* **Default Payload Type** (required)   
Default format of the payload you will send with each message.  This can be either a simple string or [Binary](BinaryContent.md).

* **Description**    
Free-form text used to provide notes for your Simulator

### Message Settings

* **Name** (required)    
Name of the Message

* **Key** (required)       
[Unique Key](../Topics/Keys.md) to identify the message

* **Payload Type** (required)     
Text or Binary message.  In most cases, you will send a Text message.

* **Topic**      
Topic in which to publish your message

* **Append CR** `0x0D`    
ASCII character 0x0D, if set, will be appended to the message

* **Append LF** `0x0A`      
ASCII character 0x0A, if set, will be appended to the message

* **Text or Binary Message**   
This is based on your Payload Type, select either Text **or** Binary.
   * Text     
     Add any content that will be sent as the body of the message.  This option allows for [Tag Replacement](DynamicFields.md)

   * Binary     
     [Binary Content](BinaryContent.md) to be sent as a message

### Dynamic Attributes (*For Text Payloads Only*)     
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
