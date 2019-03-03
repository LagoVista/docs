---
title: Scripting 
keywords: workflow, scripting

status: approved
created: 20181003
updated: 20181003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Working with Locations

When working with scripts on a work flow you can access the device information with the following methods

### SetDeviceLocation
```

function onSet(value /* Geolocation */) {
    Attributes.position = value; 
    SetDeviceLocation(value.latitude, value.longitude);
};

```

### GetDeviceLocation
```

let latitude = IoTDevice.Location.Latitude;
let longitude = IoTDevice.location.longitude;

/* do something */

```

