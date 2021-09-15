---
title: Routes
keywords: applications, routes, messages, devices

status: readyforapproval
created: 20171022
updated: 20171120
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md)

# Route

The device has sent a message to the Cloud, but how does the Cloud know what to do with this incoming message? These directions are found in Routes which contain a series of specific steps that must be performed on messages sent from a device.

* The first step is security.  The Route needs to ensure that the message is coming from the identified source.

* Next, the value (this needs to be defined) is extracted from the message and is used to perform workflows and business logic, both of which are instructions on what to do with the data.  

* Routes can then send messages back to the device, to other systems, and/or write values to a data stream.

<br>
<br>

### **Example**
The boat, Everglades, sent a message to the cloud with the information that the temperature in the livewell is 1100 degrees.  This message is directed to a Route named Livewell.  The Route begins by ensuring this message came from Everglade.  Next, the value of 1100 degrees is extracted and is processed through a set of instructions which identify this temperature is outside of expected parameters.  The Route sends a message back to the livewell enabling a cooling mechanism.  The Route also sends a message to the user warning of an unexpected temperature in the livewell.
