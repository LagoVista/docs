  
  
### Overview
You can use this powerful Device Message Parser to extract values from your message for many different types of protocols and formats.  
Once you have created your parser, the fields that you have extracted will be available to be used later in the workflow.  

Devices communicate with servers by sending and receiving messages. You should define all messages that you want your application to send and receive. As part of this, you will define the format that your message will use. Examples of formats include: JSON, XML, Binary, Delimited, etc.

### Sample Messages
Create samples of the messages to be used in both verifiers and simulators.
Define the fields that make up your messages as well as how those fields should be extracted or parsed.
As an optional step, create verifiers to check your parsers without even having your device send messages.
After you have created your messages, you can use them as a basis for building simulators to test out your system flow prior to bringing real devices online.

Messages can either be received from a device from a Listener or sent to a server or service from a Transmitter.

  
### Overview
JSON is a vary common format for passing data with your messages.  
To work with JSON in your message, be sure that the Content Type of your message is set to JSON.

In addition to the standard fields that are required for any parser, the following fields are required:

Search Location (required)
By definition the XML will be present in the Message Body, so make sure you specify Message Body as the Search Location

Message Field Type (required) Specify the type of the field as it appears in the message, see Message Field Types for more information.

Storage Field Type (required)
Specify how this value should be stored and the type that is assigned to it, see Type System for more information

Is Required
Check this option if the value must be present on the message. If the value is set to be required, however the value is not present, the message will be rejected

JSON Path (required)
Provide a simple period (.) delimited expression to extract values from your message, see the example below.

RegEx Value Selector
In addition to providing the initial XPath selector to extract the value you can provide a regular expression to select the value out of the resulting string.

Additional Validation Fields
After the message has been parsed there are a number of options that can be used to validate the value, if validation fails, the message will be rejected.

Parsing data with JSON
The desired values can then be extracted by using a period (.) to denote the path to the object within the JSON document.

Assuming the following JSON:

{
	'field1':'value1',
	'subset1':{
		'field3':'value2',
		'field4':'another value'
	}
}
Values can be extracted with the following JSON path:

JSON Path
field = value1
JSON Path
subset1.field3 = value2
JSON Path
subset1.field4 = another value
Note: Arrays are not currently supported in JSON format, please Contact Us if your implementation requires this feature.

You can use RegEx Value Selector and Validation to fine-tune your selection and validate its contents.
