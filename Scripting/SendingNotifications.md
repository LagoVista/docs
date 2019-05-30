---
title: Scripting - Sending Notifications
keywords: workflow, scripts, notifications, email, sms, text-message

status: approved
created: 20180121
updated: 20180121
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Sending Notifications

Notifications are WebSocket messages that clients can subscribe to, to be  notified as data is updated on the server.  For now we 
only publically support WebSocket notifications.  If you need SMS, Email or Native notifications, please contact us and will work with 
you to send notifications to other services.

You can send a notification that is associated with one of the following entities
1. **Instance** - the current IoT Application that is running the script.
2. **Device Configuration** - Send the notification to any clients that are susbscribed to the device configuration of the current device
3. **Device** - Send a notification to to any clients subscribe to the current device.

Each method takes two parameters:
1. **payloadType** - A string that will identify the type of data that is being sent
2. **payload** - JSON that represents the data that will be sent.


### Examples
```
/* Send a notification to the current Instance/IoT Application */
function sendIt1(){
    let payloadType = 'sensorUpdated';
    let payload = {'newValue':32};
    sendInstanceNotification(payloadType, payload);
}

/* Send a notification to any client subscribed to the current devices configuration */
function sendDeviceConfigurationNotification(){
    let payloadType = 'sensorUpdated';
    let payload = {'newValue':32};
    sendInstanceNotification(payloadType, payload);
}

/* Send a notifijcation to the current device */
function sendDeviceNotification(){
    let payloadType = 'sensorUpdated';
    let payload = {'newValue':32};
    sendInstanceNotification(payloadType, payload);
}

/* Send an email to a user */
function onSet() {
    sendEmail('myemail@mydomain.com','Email subject', 'Email Body');
}

/* Send an email to a user */
function onSet() {
    sendSMS('6125551212','Message to be sent via SMS');
}

```