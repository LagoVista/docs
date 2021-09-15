---
title: Content Types
keywords: messages, messaging, contenttype, listener, json, string, binary, xml, delimited

status: approved
created: 20170927
updated: 20210819
createdby: bytemaster-0xff
updatedby: JennyWrenWolf
---
[Home](../Index.md) > [Device Messaging](Index.md)

# Content Types

<br>

## Definition

NuvIoT is built to be flexible and work with your messages.  To do so, we accept different types 
of content for your messages.

The following Content Types are available in NuvIoT:

* No Content
* Binary
* Delimited
* Images/Media
* JSON
* Point Array
* Protocol Buffers
* Seven Segment Image
* String with Position
* String with RegEx
* XML
</br>
</br> 


**No Content**  
There is no information in the body or payload of the message.  The only information provided is the DeviceID, ServerID, and MessageID

**Binary**  
Binary is a two-digit (Base-2) numerical system which computers use. The reason computers use the binary system is because digital switches inside the computer can only be set to either on or off, which are represented by a 1 or 0.  

**Delimited**  
A set of characters/words separated by a symbol such as a comma, backslash, or forward slash. 

**Images/Media**  
Used to upload images or media from an external source.

**JSON**  
Text 

**Point Array**   
Collection of data points sent at once.

**Protocol Buffers**  
A method of serializing structured data. It is useful in developing programs to communicate with each other over a wire or for storing data.

**Seven Segment Image**  
A seven-segment display shows decimal numerals.   Seven-segment displays are widely used in digital clocks, electronic meters, basic calculators, and other electronic devices that display numerical information. 

**String with Reg Ex**  
Looks for specific type of information in a string of information

**String with Position**  
Looks for information in the nth position of a string of information

**XML**  
XML Messages can be processed using XPath and our XML Message Parser. Allows users to define their own customized markup languages, especially to display documents on the Internet.

