---
title: Standard Fields
keywords: simulator, message, standardfields, attributes

created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)

# Standard Fields

If you have custom fields that you would like to define to make your messages dynamic, you can define some [dynamic fields](DynamicFields.md).

By default the following fields will be available to be added to your message

* `~datetime~` - Date Time using the current Locale as specified by the operating system or runtime
* `~datetimeiso8601~` - Current Date Time in GMT in the ISO8601 Format YYYY-MM-DDTHH:MM:SS.sssZ will have three decimal points behind second
* `~deviceid~` - Device Id as specified in the simulator settings
* `~username~` - User Name as specified in the simulator settings
* `~password~` - Password as specified in the simulator settings
* `~accesskey~` - Access Key as specified in the simulator settings
* `~random-float.x.y~` - Generate a random floating point number between x and y, an example of this is `~random-float,-5.5,30.0~` would generate floating point numbers from 5 to 15 inclusive of the end points.  Values will be rounded to two decimal points
* `~random-int.x.y~` - Generate a random integer number between x and y, an example of this is `~random-int,53,80~` would generate an integer numbers from 53 to 80 inclusive of the end points