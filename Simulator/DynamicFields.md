---
title: Dynamic Fields
keywords: simulator, message, dynamicfields, attributes

status: readyforapproval
created: 20171003
updated: 20171016
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# Dynamic Fields

For text fields that are sent with your message, you can create a set of Dynamic Fields that can be used to change the content
of the messages before they are sent to the server.

On the view that you use to send messages, open an Options dialog where you can replace the default value.

To send a Dynamic Field, create the field with data as shown in the following example, where you want to send different temperature values:


### Dynamic Attributes Form
1. Name (*Required*)  
Name to identify the field.

2. Key (*Required*)    
[Unique Key](../Topics/Keys.md), also the value you will use to replace content in your message

3. Parameter Type (*Required*)  
Type of parameter that will be populated based on the standard [Parameter Types](../Messaging/TypeSystem/Index.md)

4. Default Value (*Required*)    
Default Value that will be sent if it is not customized

5. Description  
Free form text field that you can use to add a description to your Dynamic Fields


### Usage
To use the Dynamic Value in your message, simply use the format: 
`~key~`

Referring to the example, if you specified `temperature` as the key of
your Dynamic Field and want to use it in the query string of your message, you might use the following syntax:  
`/submit/temp?temperature=~temperature~`.

Then, if your Default Value as specified was `98.6`, the message would be sent as:  
`/submit/temp?temperature=98.6`

Prior to sending the message, you can change the Default Value. If you changed it to `64.8`, the message would be sent as:  
`/submit/temp?temperature=64.8`

### Standard Fields
In addition to these dynamically declared fields, there are a number of system-defined, or [Standard Fields](StandardFields.md) that will be used to replace tags
in your message.

