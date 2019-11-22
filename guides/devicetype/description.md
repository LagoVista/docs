# Device Types

Without devices and sensors, you cannot have IoT.  At the heart of any IoT system, you will find devices and sensors.
Ideally, you will be able to find off-the-shelf hardware, but you may need to create custom hardware.  Either way, these 
devices and sensors will have attributes such as names, model numbers, etc.

You can add Device Types to help describe devices in your application.  When you create your Device Type, you
will need to give it a name, key, and model number.  You can also add a manufacturer and other metadata about the Device Type.

Finally, you will need to add a default [Device Configuration](../Devices/DeviceConfigurations.md).  Since Device Types are used
to provision new devices, the default Device Configuration will be selected but can be overridden. 
