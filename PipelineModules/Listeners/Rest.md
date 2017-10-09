---
title: REST Server
keywords: listeners, rest, networking, pipelinemodule

status: readyforreview
created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# REST Server (HTTP/HTTPS)

NuvIoT has a dedicated REST server that you can configure to easily receive messages from your devices.  As HTTP requests are made, the following 
data is made available to be processed by the message:
* Headaers 
* Path
* Query String
* Body

Setting up the REST server is simple, you only need to provide the port which you wish to listen on.

**Note:** *Security is handled as part of the Sentinal Module, not as part of the REST Listener module, after a message is received the Sentinal module
will ensure it is valid prior to processing.*

### HTTPS

**Note:** *Automated Process are being developed to simplify the process of brining an HTTPS server oneline*

Currently SSL connections are supported, but we will need to manually add the certificate for your automatically generated host name such as `https://[yourapp][yourns].iothost.net`.  If you 
are using C-Name or A-Name DNS record to connect to this server, please contact us to install your certificate.  



### Required Fields

In addition to the standard fields that are required for any listener the following fields are required:

**Listener Type**  
`REST`

**Content Type**  
Select the [content type](../../Messaging/ContentTypes.md) of the message you are expecting, any content types are acceptable.

**Secure Connection**  
If you select this option your devices/request must support HTTPS connections, work is underway to automate the generation of the SSL certificates, however
please [contact us](http://support.nuviot.com) if you need us to manually add a certifiate to your installation based on the automatically generated host names
if you use your own host name, we will need to work with you to uplooad your customer provided certificate.

**Listen on Port**  
The port you wish to listen for incoming messages, this is normally port 80 or port 443 for SSL connections, but any port is supported in both configurations.