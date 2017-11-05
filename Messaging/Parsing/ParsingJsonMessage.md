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

[JSON](https://en.wikipedia.org/wiki/JSON) is a vary common format for passing data with your messages.  To work with JSON in your message, be sure that the Content Type of your message is set to **JSON**.

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any parser, the following fields are required:

**Search Location** (required)  
By definition the XML will be present in the **Message Body**, so make sure you specify **Message Body** as the Search Location

**Message Field Type** (required)
Specify the type of the field as it appears in the message, see [Message Field Types](MessageTypeFields.md) for more information.

**Storage Field Type** (required)  
Specify how this value should be stored and the type that is assigned to it, see [Type System](../TypeSystem/Index.md) for more information

**Is Required**  
Check this option if the value must be present on the message.  If the value is set to be required, however the value is not present, the message will be rejected

**JSON Path** (required)  
Provide a simple period (.) delimited expression to extract values from your message, see the example below.

**RegEx Value Selector**  
In addition to providing the initial XPath selector to extract the value you can provide a [regular expression](https://regex101.com) to select the value out of the resulting string.

**Additional Validation Fields**  
After the message has been parsed there are a number of [options](Validation.md) that can be used to validate the value, if validation fails, the message will be rejected.

### Parsing data with JSON

The desired values can then be extracted by using a period (.) to denote the path to the object within the JSON document.

Assuming the following JSON:
```
{
	'field1':'value1',
	'subset1':{
		'field3':'value2',
		'field4':'another value'
	}
}
```

Values can be extracted with the following JSON path:

1.  **JSON Path**  
`field` = value1
2.  **JSON Path**  
`subset1.field3` = value2
3.  **JSON Path**  
`subset1.field4` = another value

**Note:** Arrays are not currently supported in JSON format, please [Contact Us](http://support.nuviot.com/contactus?source=parsejsonarrays) if your implementation requires this feature.

You can use [RegEx Value Selector](RegExValueSelector.md) and [Validation](Validation.md) to fine-tune your selection and validate its contents.
