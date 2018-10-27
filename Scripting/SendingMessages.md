---
title: Scripting - Sending Messages
keywords: workflow, scripts, messages, pems

status: approved
created: 20180121
updated: 20180121
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Sending Messages

At the heart of NuvIoT is a messaaging engine.  You interact with devices in your device repository by sending messages. 
These messages are sent internally and are very fast.  They are not sent directly down to the device but a device message handler
within NuvIoT.  From that device you can send a message back down to the device.  

You can send messages to a specific device by it's device id or you can send a message to all devices of a specific device configuration.


### Sending a Message to a Device

The following script will queue up a message with a message id of `msg001` to a device `dev001` that will be processed by the NuvIoT message processor.
Messages must be JSON.  To handle the message the device configuration for the device `dev001` must be able to handle a message `msg001` 

```
function forwardMessage() {
    let msgId = 'msg001';
    let deviceId = 'dev001';
    let message = {'contents':'helloWorld'};

    enqueuePEM(msgId, deviceId, message);
}
```

### Sending a Message to a Parent Device

The following script will queue up a message with a message id of `msg001` and send it to the device that is identified as it's parent so that the new device will be processed by the NuvIoT message processor.
Messages must be JSON.  To handle the message the device configuration for the parent device `dev001` must be able to handle a message `msg001` 

```
function forwardMessage() {
    let msgId = 'msg001';
    let message = {'contents':'helloWorld'};

    enqueuePEMToParent(msgId, deviceId, message);
}
```

### Sending a Message to all devices of a Device Configration

The following script will queue up messages with a message id of `msg001` for all devices in the current device repository with a 
device configuration of `audiosensor`.  These messages will be processed by the NuvIoT message processor.  Note that the *Device Configuration Key*
will be used to to identify the device configuration.

Messages must be JSON.  To handle the message the device configuration with the key `audiosensor` must be able to handle a message `msg001` 

```
function forwardMessage() {
    let msgId = 'msg001';
    let deviceConfiguration = 'audiosensor';
    let message = {'contents':'helloWorld'};

    enqueuePEMForDeviceConfig(msgId, deviceId, message);
}
```

### Sending a Message to all devices within a device group

The following script will queue up messages with a message id of `msg001` for all devices in the current device repository that belong  
to the device group as identified by the device group key `group001`.  These messages will be processed by the NuvIoT message processor.  Note that the *Device Group Key*
will be used to to identify the device group.

Messages must be JSON.  Any devices that can handle the message `msg001` within the device group will handle the message.

```
function forwardMessage() {
    let msgId = 'msg001';
    let deviceGroupKey = 'group001';
    let message = {'contents':'helloWorld'};

    enqueuePEMToDeviceGroup(msgId, group001, message);
}
```

