---
title: MQTT Simulator
keywords: simulator, windows, mqtt

status: readyforapproval
created: 20171003
updated: 20171017
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# MQTT Simulator

### Simulator Settings

**Note:** For the initial release, our MQTT Simulator does not support MQTT over TLS/SSL. This functionality is planned for Q1 2018.  If you need this sooner, please consider
submitting a [Pull Request](http://github.com/lagovista/simulator) or [Contact Us](http://support.nuviot.com.).

1. Name (*Required*)   
Name of the Simulator

2. Key (*Required*)   
[Unique Key](../Topics/Keys.md) to identify the message

3. Transport (*Required*)   
`MQTT`

4. Default Endpoint (*Required*)  
Full URL of your IoT hub. It should be something similar to `myiothub.azure-devices.net`.

5. Port (*Required*)  
Usually 1883 or 8883 when TLS/SSL is supported.

6. DeviceID  
You can add a Device ID to your simulator. This may be the same as the User Name, but this is not a requirement.

7. User Name  
User Name to log in to your MQTT server

8. Password  
Password to log in to your MQTT server

9. Subscription (*Optional*)  
You can subscribe to an MQTT Topic and receive messages in your Simulator.  To subscribe to a Topic based on device, use
the following format:   
```/messages/~deviceid~```, where `~deviceid~` is replaced by the Device ID you added for your Simulator

10. Default Payload Type (*Required*)  
Default format of the payload you will send with each message.  This can be either a simple string or [Binary](BinaryContent.md).

11. Description  
Free-form text used to provide notes for your Simulator

### Message Settings

1. Name (*Required*)    
Name of the message

2. Key (*Required*)    
A [Unique Key](../Topics/Keys.md) to identify the message

3. Payload Type (*Required*)  
Send either a Text message or a Binary message. In most cases, this will be text.

4. Topic  
Topic in which to publish your message

5. Append CR (0x0D)  
ASCII character 0x0D, if set, will be appended to the message

6. Append LF (0x0A)  
ASCII character 0x0D, if set, will be appended to the message

7.  Text or Binary Message   
Add Text or Binary message based on your Payload Type
     * Text   
Add content that will be sent as the body of the message. This option allows for [Tag Replacement](DynamicFields.md).
     * Binary   
[Binary Content](BinaryContent.md) to be sent as a message

8. Dynamic Attributes (*For Text Payloads Only*)  
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
