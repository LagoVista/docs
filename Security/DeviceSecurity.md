---
title: Device Security
keywords: devices, messaging, authentication, devices ecurity, security

status: inprocess
created: 20171112
updated: 20171112
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
# Device Security

Device Security starts out with making sure that the devices that are sending messages to NuvIoT are actually
the devices they say they are.  Since you may have made a significant investment into the development of your devices
we want to make our system works with your devices without updating your firmware.  Out authentication mechanism is
flexible and configurable while ensuring IoT security [best practices](https://docs.microsoft.com/en-us/azure/iot-suite/iot-security-best-practices).

#### Validating Device Identity
Validating device identity is done in two parts:

1. Identify the [device id](../Messaging/Parsing/DeviceIdParsing.md) within the message and use that to lookup the device in the device repository
1. Confirming that the device that sent that device id is actually the device it claims it is, there are two mechanism to confirm their identity  
    * Trusting the source of the message, if your message comes from something like [Azure IoT Hub](../PipelineModules/Listeners/AzureIoTHub.md) or
some other server technology that authenticates the device prior to making the device message available to the listener, you 
could potentially assume that the device identity was confirmed
    * Locating the [security field](LocatingSecurityField.md) within the message or header and ensuring it matches the device, this is done in the
[sentinel](../PipelineModules/Sentinel.md) module.


       