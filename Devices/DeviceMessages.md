[Home](../Index.md) > [Getting Started](../GettingStarted.md)

# Device Messages

IoT is all about devices and sensors communicating with the cloud.  These conversations are called messages.  Device Messages can
be either sent from the device to cloud or sent from the cloud back to the device.  If you are using an off the shelf type of 
device you will likely not have the ability to change the message format.

Since Messages play such a huge part of any IoT implementation, one of the first things you'll do is add in device messages. 
When you add your messages you don't associate them with any specific device type or configuration, you do this so that you can
reuse message definitions on many different configurations.

When we define our device messages, we don't simply just give it a name and [key](../Topics/Keys.md) and be done with it,
we describe the messages in such detail that the NuvIoT platform has enough information to extract or parse individual fields
from the message payload.  In addition, to identify the message, each message usually has some sort of message id.

Messages can contain useful data in such things such as headers, path, query string and body for HTTP type of messages or topics 
and payloads for message queue type messages.  They may even consist as a stream of data that may be either a string or array of 
bytes.

The data associated with things like headers, path, query strings and topics generally (but not always) contain meta data about the 
message such as device and message id while the main contents of the message is typically found in the payload.  Meta data is generally
always string values that can easily be parsed while payloads can contain either binary or string values.

NuvIoT supports parsing both string and binary payloads.

If your payload is binary you have many options for parsing the [message fields](../Messaging/Parsing/ParsingBinaryMessages.md).

If the payload of your messages is text, NuvIoT currently supports parsing these message formats

* [JSON](../Messaging/Parsing/ParsingJsonMessage.md)
* [XML](../Messaging/Parsing/ParsingXmlMessage.md)
* [Raw Strings](../Messaging/Parsing/ParsingStringMessage.md)
* [Delimited (comma, tab, etc...)](../Messaging/Parsing/ParsingDelimitedMessage.md)



  

