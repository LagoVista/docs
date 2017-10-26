---
title: UDP Server
keywords: listeners, udp, networking, pipelinemodule

status: approved
created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# UDP Listener

Setup a simple UDP Listener that will listent for UDP datagrams.

Currently our UDP Listener is very basic and applicable for development or hobby applications and does not 
support any sort of [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) mechanism.  If your implementation needs an UDP Listener you should 
[contact us](https://support.nuviot.com/contactus?source=udplistener) so we can discuss your needs.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)     
`UDP`

* **Content Type** (required)    
Select the [Content Type](../../Messaging/ContentTypes.md) of the message you are expecting. Any Content Type is acceptable.

* **Listen on Port** (required)  
The port your UDP listener should listen on.

