---
title: Working with Media
keywords: messages, messaging, devices, images

status:  new
created: 20181003
updated: 20181003
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Device Messaging](Index.md)

# Working with Media

Currently NuvIoT supports uploading media to be associated with a Device.  We currently don't support multip-part uploads and only support uploading a binary stream that we will store as-is and return as requested.

To upload the file simply create a REST listener as you normally would.  Then add a message of message type media.  You need to specify a message id and use the Planner as you normally would.

In the headers your content type must be image/*** or vidoe/*** to be stored and the body must be a byte array.

Please contact us if you have additional specific needs.