---
title: Standard Fields
keywords: simulator, message, standardfields, attributes

status: approved
created: 20171003
updated: 20171016
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# Standard Fields

If there are custom fields that you would like to define to make your messages dynamic, you can define some [Dynamic Fields](DynamicFields.md).

By default, the following fields are available to be added to your message:

* `~datetime~` - Date Time, using the current locale as specified by the operating system or runtime
* `~datetimeiso8601~` - Will use a string from the Current Date Time in GMT with the ISO8601 Format YYYY-MM-DDTHH:MM:SS.sssZ will have always three decimal points for milliseconds
* `~deviceid~` - Device ID as specified in the Simulator settings
* `~username~` - User Name as specified in the Simulator settings
* `~password~` - Password as specified in the Simulator settings
* `~accesskey~` - Access Key as specified in the Simulator settings
* `~random-float.x.y~` - Generate a random floating point number between x and y.  For example,  `~random-float,-5.5,30.0~` would generate floating point numbers from five to fifteen inclusive of the endpoints.  Values are rounded to two digits to the right of the decimal point.
* `~random-int.x.y~` - Generate a random integer number between x and y.  For example, `~random-int,53,80~` would generate integer numbers from 53 to 80 inclusive of the endpoints.
