---
title: REST Transmitter
keywords: transmitter, rest, networking, pipelinemodule

status: readyforapproval
created: 20171019
updated: 20171019
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Transmitters](../Transmitter.md)

# REST Transmitter

A simple yet powerful option to send messages to other systems is to use the REST Transmitter, this will take [Outgoing Message Definition](../../Messaging/OutgoingMessages.md)
as procesed by the [Output Translator](../OutputTranslator.md) and send them to a REST endpoint.

As part of your [Outgoing Message Definition](../../Messaging/OutgoingMessages.md) you have the option to provide a REST Method, if you do not provide one, the transmitter will
assume it's a `GET` method.

### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any transmitter, the following fields are required:

* **Transmitter Type** (required)  
`REST`

* **Host Name**  (required)  
Provide the protocol and domain name of that server that you wish to send the message to.  
Although you can enter a path, that path should come from the [Outgoing Message Definition](../../Messaging/OutgoingMessages.md).  An exception to this is a partial path that will be used to 
send all the messages to on the server.    
The REST Transmittter supports sending [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) and [HTTPS](https://en.wikipedia.org/wiki/HTTPS) messages as specified in the Host Name.

    Examples:
    ```
    https://myserver.com
    http://myserver.com
    http://myserver.com:9353
    ```

    If you wish to add a parital path your Host Name mgith look as follows
    ```
    https://myserver.com/api
    ```

    Your host name should not end in a forward slash `/`, if it is, the transmitter may strip that out if your path from the message starts with a `/`

* **Anonymous Connection**  
Select this option if your MQTT server does not require authentication (not recommended).

* **User Name/Password**  
The user name and password are optional, but if provided will be used to send an authorization header as a [Basic Access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).  We understand
this may not meet your needs so please [contacts us](http://support.nuviot.com/contactus?source=resttxauth) to discuss your specific needs.  You have access to add your own custom headers and you may be able to add a custom authentication header that will be sent along with the request

* **Headers**  
In addition to the headers that will come from the message you can add additional headers that will be sent along with the request.

