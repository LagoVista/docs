---
title: Dynamic Fields
keywords: simulator, message, dynamicfields, attributes

status: readyforreview
created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)

# Dynamic Fields

For text fields that are sent with your message, you can setup a set of a set of dynamic fields that will be used to change the content
of the messages before they are sent to the server.

On the view that you can use to send messages, you can open an options dialog where you can replace the default vlue.

To send a dynamic field you can create a dynamic field with the following data.

An example of this is if you want to send different temperature values, you can specify 

### Dynamic Attributes Form
**Name** (*Required*)  
Name to identify the field.

**Key** (*Required*)    
This will be a [unique key](../Topics/Keys.md) and will also be the value you will use to replace content in your message

**Parameter Type** (*Required*)  
Type of parameter that will be populated based on the standard [parameter types](../Messaging/TypeSystem/Index.md).

**Default Value** (*Required*)    
This will be the default value that will be sent if it isn't customized.

**Description**  
A free form text field that you can use to add a description to your dynamic fields.


### Usage
To use the dyanmic value in your message simply use the format `~key~` so if you specified `temperature` as the key of
your dynamic field and want to use it in the query string of your message you might use the following syntax  
`/submit/temp?temperature=~temperature~`

Then if your default value as specified was `98.6` the message would be sent as:  
`/submit/temp?temperature=98.6`

Prior to sending your message you can change the default value, if you changed it to `64.8`, the message would be sent as:  
`/submit/temp?temperature=64.8`

### Standard Fields
In addition to these dynamically declared fields, there are a number of system defined, or [standrd fields](StandardFields.md) that will be used to replace tags
in your message.

