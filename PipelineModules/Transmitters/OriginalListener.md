---
title: Original Listener
keywords: transmitter, cloud, topics

status: approved
created: 20171019
updated: 20171019
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Transmitters](../Transmitter.md)

# Original Listener

If you need to send a message back to listener that originally received the message that initially generated this flow, you should choose the Origianl Listener Transmitter.
This will take the message you generated and pass it back to the origianl listener.  

**Beta Alert! - [Contact us](http://support.nuviot.com/contactus?source=originallistener) if you need the following functionality:** If the device is no longer connected, the message will be queued for delivery the next time
the device connects.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any transmitter, the following fields are required:

* **Transmitter Type** (required)  
`Origianl Listener`