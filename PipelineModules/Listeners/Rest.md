---
title: REST Server
keywords: listeners, rest, networking, pipelinemodule

status: approved
created: 20170927
updated: 20171012
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../../Index.md) > [Pipeline Modules](../Index.md) > [Listeners](../Listener.md)

# REST Server (HTTP/HTTPS)

NuvIoT has a dedicated REST Server that you can configure to easily receive messages from your devices.  As HTTP requests are made, the following 
data is available to be processed by the message:
* Headers 
* Path
* Query String
* Body

Setting up the REST Server is simple, you only need to provide the port you wish to listen to for incoming messages. 

**Note:** Security is handled as part of the Sentinel Module, not as part of the REST Listener Module.  After a message is received, the Sentinel Module
ensures that it is valid prior to processing.

### HTTPS

**Note:** Automated processes are being developed to simplify the effort required to bring an HTTPS server online.

Currently, SSL connections are supported, but we will need to manually add the certificate for your automatically-generated host name, such as `https://[yourapp][yourns].iothost.net`.  If you 
are using a CNAME or ANAME DNS record to connect to this server, please [Contact Us](http://support.nuviot.com) to install your certificate.  


### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)     
`REST`

* **Content Type** (required)    
Select the [Content Type](../../Messaging/ContentTypes.md) of the message you are expecting. Any Content Type is acceptable.

* **Secure Connection** (required)   
If you select this option, your devices/request must support HTTPS connections. Work is underway to automate the generation of the SSL certificates.  Please [Contact Us](http://support.nuviot.com) if you need us to manually add a certificate to your installation based on the automatically-generated host names.
if you use your own host name, we will need to work with you to upload your customer-provided certificate.

* **Listen on Port** (required)     
This is the port you wish to listen to for incoming messages.  This is normally port 80 or port 443 for SSL connections, but any port is supported in both configurations.
