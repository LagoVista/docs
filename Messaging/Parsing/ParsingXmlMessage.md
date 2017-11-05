---
title: Parsing an XML Message
keywords: messages, messaging, parsing, xml, xpath

status: inprocess
created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing an XML Message

[XML](https://en.wikipedia.org/wiki/XML) is a very common format to transmit data in your messages.  It supports [schema](https://en.wikipedia.org/wiki/XML_schema) and can be used with a number of languages and platforms.
To work with XML in your message, be sure that the Content Type of your message is set to **XML**.

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for any parser, the following fields are required:

**Search Location** (required)  
By definition the XML will be present in the **Message Body**, so make sure you specify **Message Body** as the Search Location

**Message Field Type** (required)
Specify the type of the field as it appears in the message, see [Message Field Types](MessageTypeFields.md) for more information.

**Storage Field Type** (required)  
Specify how this value should be stored and the type that is assigned to it, see [Type System](../TypeSystem/Index.md) for more information

**Is Required**  
Check this option if the value must be present on the message.  If the value is set to be required, however the value is not present, the message will be rejected

**XPath** (required)  
Parsing XML Messages is done with [XPath](https://en.wikipedia.org/wiki/XPath).

**RegEx Value Selector**  
In addition to providing the initial XPath selector to extract the value you can provide a [regular expression](https://regex101.com) to select the value out of the resulting string.

**Additional Validation Fields**  
After the message has been parsed there are a number of [options](Validation.md) that can be used to validate the value, if validation fails, the message will be rejected.

### Using XPath

The following is an example of how you would use an XPath query to select a value

With the following XML document

```
<?xml version='1.0'?> 
<root> 
    <x>green</x> 
    <y> 
        <x>blue</x> 
    </y> 
    <z> 
        <x>red</x> 
    </z>
</root>
```

The XPath Expression `//root/x` would select the value `green`.

[Here](https://www.w3schools.com/xml/xpath_intro.asp) is a good tutorial on using XPath.
