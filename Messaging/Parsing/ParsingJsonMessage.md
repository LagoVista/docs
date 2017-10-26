---
title: Parsing from a JSON Message
keywords: messages, messaging, parsing, json, rest, post, http

status: approved
created: 20170927
updated: 20171010
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)



# Parsing a JSON Message

To work with JSON in your message, be sure that the Content Type of your message is set to **JSON**.

When you have a JSON message and select Search Location of 
**Body**, you can specify a locator to identify the field within your JSON content.


The desired values can then be extracted by using a period (.) to denote the path to the object within the JSON document.

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

Values can be extracted with the following JSON path:

1.  **JSON Path**  
`field` = value1
2.  **JSON Path**  
`subset1.field3` = value2
3.  **JSON Path**  
`subset1.field4` = another value

Note: Arrays are not currently supported in JSON format, please [Contact Us](http://support.nuviot.com/contactus?source=parsejsonarrays) if your implementation requires this feature.

You can use [RegEx Value Selector](RegExValueSelector.md) and [Validation](Validation.md) to fine-tune your selection and validate its contents.

##### Storage Type
You will also need to add a [Storage Type](../TypeSystem/Index.md) to identify how this field should be stored.
