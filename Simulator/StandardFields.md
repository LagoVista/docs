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
* `~random.x.y~` - Use a randome number between x and y, an example of this is `~random.5.15~` would generate numbers from 5 to 15 inclusive of the end points