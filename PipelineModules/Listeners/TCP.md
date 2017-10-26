---
title: TCP Server
keywords: listeners, tcp, networking, pipelinemodule

status: approved
created: 20170927
updated: 20170927
createdby: bytemaster-0xff
createdby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# TCP Listener

Setup a simple TCP Listener that will monitor a port for incoming messages.  Our TCP Listener supports both long running and transient connections.

Currently our TCP Listener is very basic and applicable for development or hobby applications and does not support any sort of [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) mechanism.  If your implementation needs an TCP Listener you should 
[contact us](https://support.nuviot.com/contactus?source=tcplistener) so we can discuss your needs.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)     
`TCP`

* **Content Type** (required)    
Select the [Content Type](../../Messaging/ContentTypes.md) of the message you are expecting. Any Content Type is acceptable.

* **Listen on Port** (required)  
The port your TCP listener should listen on.

