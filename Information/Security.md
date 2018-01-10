---
title: Security
keywords: security

status: inprocess
created: 20171018
updated: 20171018
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# Security

### Configuration Security
Security was an important consideration when building NuvIoT.  Our configuration portal uses many state of the art techniques
to ensure that your application configuration data remains safe and is potected.  User Authorization and Authentication is built on 
top of [ASP.NET Core Security](https://docs.microsoft.com/en-us/aspnet/core/security/).  

In addition, all actions that are performed on
any of your configurations go through our dedicated security module to ensure the user performing the action has access to that data 
and is authorized to make the change.  Our dedicated security module also logs every access and every change to all your configuration
data.   

With our applications requirements of integrating with other systems, sensitive data such as passwords and access keys needs to be 
collected and stored.  This data is stored in our Secure Key Storage server and encrypted at REST, as part of editing your configurations
your keys will not be loaded or visible, they will only be loaded from our Secure Server and decrypted at the time of use.

### Device Security

Although we have recommendations and built in capabilities, we understand that your devices will have different security needs.  We 
look forward to working with you to understand those needs and ensure that our system can provide a robust mechanism to authenticate and
authorize your devices.  We offer may ways to get your data into our system to include everything from MQTT and REST using simple user name/password
combinations to using [Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-security) as a proxy to ensure a completely 
secure solution. 

Read more about [security](../Security/Index.md).