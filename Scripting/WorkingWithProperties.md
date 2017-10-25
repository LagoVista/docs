---
title: Working with Properties
keywords: workflow, scripting, properties

status: new
created: 20171002
updated: 20171002
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Scripting](Index.md)

# Working with Device Properties


Properties are values that are created as part of your [Device Configuration](../Devices/DeviceConfigurations.md) and are available to your scripts.  Device Properties are 
different from [Property Bag](PropertyBag.md) values in that they are accessible via an API and through the Device Manager app.

 * **Device Properties** - Can be thought of as configuration settings that external source can set on the device.
 * **Property Bag Values** - Are values that you can use within your script to store variables.

To access **Device Properties** from your script use a common `DeviceProperties` object within your script.  Unfortunately since 
work flows can be shared across many device configurations you are not guarenteed that the DeviceProperty will exists for a particular 
DeviceConfiguration.  If it does not exists, it  will be ignored.  Also at the DeviceWorkflow level we don't know about DeviceConfigurations
so we can offer Intellisense as to the properties on the workflow

Here is a sample script that asumes you have defined a Property `setpoint` on your [Device Configuration](../Devices/DeviceConfigurations.md)

```
function onSet(value) {
    if(DeviceProperties.setPoint) {
       /* ...do something interesting... */
    }
}
```



