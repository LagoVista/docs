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
are using a CNAME or ANAME DNS record to connect to this server, please [Contact Us](http://support.nuviot.com/contactus?source=restsslcert) to install your certificate.  


### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any listener, the following fields are required:

* **Listener Type** (required)     
`REST`

* **Content Type** (required)    
Select the [Content Type](../../Messaging/ContentTypes.md) of the message you are expecting. Any Content Type is acceptable.

* **Listen on Port** (required)     
This is the port you wish to listen to for incoming messages.  This is normally port 80 or port 443 for SSL connections, but any port is supported in both configurations.

* **Allowable Connection Type** (required)   
Your REST server can listen on HTTP/HTTPS or HTTPS.  If you choose an HTTPS option, you must manually upload your the SSL certificate.  
Work is underway to automate the generation of the SSL certificates and is expected to be complete by the end of 2018.
Please [Contact Us](http://support.nuviot.com/contactus?source=restsslcert) manually add this certificate to your installation based on the automatically-generated host names.
if you use your own host name, we will need to work with you to upload your customer-provided certificate.

* **Anonymous Connection**
Allow Anonymous connections to this REST server, if you use an anonymous connection, you will likely use the [Sentinel](../../PipelineModules/Sentinel.md) module to authenticate your devices.
If you uncheck this option, you will need to enter a User Name and Password and send that data in an Authrorization header using [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).  If you need
additional Authentication schemes with your REST server, please [contact us](http://support.nuviot.com/contactus?source=restauthscheme).

* **User Name**  (required if not anonymous)     
User Name that your devices will use to access this REST resource  [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

* **Password** (required if not anonymous)      
User Name that your devices will use to access this REST resource  [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).
