---
title: Web Socket
keywords: listener, cloud, websocket, signalr

status: approved
created: 20171104
updated: 20171104
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# WebSocket Listener

[WebSockets](https://en.wikipedia.org/wiki/WebSocket) are a full duplex channel that can be used to send and receive messages.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)  
`Web Scoket`

* **Content Type** (required)  
Select the [Content Type](../../Messaging/ContentTypes.md) of the message that you are expecting.  All Content Types are acceptable.


* **Host Name** (required)  
The Host Name of the Service Resource that is hosting your WebSocket server without the protocol, an 
example of this is `myserver.myhost.net`


* **Secure Connection**  
Create a secure connection (wss) with your web socket server.

* **Anonymous Connection**
Allow Anonymous connections to this WebSocket server, if you use an anonymous connection, you will likely use the [Sentinel](../../PipelineModules/Sentinel.md) module to authenticate your devices.
If you uncheck this option, you will need to enter a User Name and Password and send that data in an Authrorization header using [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).  If you need
additional Authentication schemes with your WebSocket server, please [contact us](http://support.nuviot.com/contactus?source=restauthscheme).

* **User Name**  (required if not anonymous)     
User Name that your devices will use to access this WebSocket Server  [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

* **Password** (required if not anonymous)      
User Name that your devices will use to access this WebSocket Server  [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

* **Path**  
Enter this value if you need to connect to a specific endpoint on your WebSocket Server.  This should be prefaced
by a forward slash such as `/path/on/my/resource`.

* **Sub-protocol**  
Provide a sub-protocol for your WebSocket Server if required.

* **Origin**  
Provide an origin that should be added to the request headers if necessary.