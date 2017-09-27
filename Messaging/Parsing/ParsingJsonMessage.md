---
title: Parsing from a JSON message
keywords: messages, messaging, parsing, json, rest, post, http

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)



# Parsing a Json Message

To work with JSON in your message ensure the content type of your message is set to JSON

When you have a JSON message, and select the Search Location of Body

**Search Location**      
Body

You can specify a locator to identify the field within your JSON content.


The values can be extract by using a period (.) to denote the path to the object within the JSON document.

Assuming the following JSON:
~~~~
{
	'field1':'value1',
	'subset1':{
		'field3':'value2',
		'field4':'another value'
	}
}
~~~~

Values can be extracted with the following **JSON Path**.

**JSON Path**  
`field` = value1

**JSON Path**  
`subset1.field3` = value2

**JSON Path**  
`subset1.field4` = another value

**Note:** *Currently arrays are not supported in JSON format, Please [contact us](http://support.nuviot.com) if your implementation requires this feature*

IN addition you can use [RegEx Value Selector](RegExValueSelector.md) and [Validation](Validation.md) to fine tune your selection and validate it's contents

##### Storage Type
You will also need to add a [Storage Type](../TypeSystem/Index.md) to identify how this field should be stored.