---
title: Device Messaging
keywords: messages, messaging, devices

status:  readyforapproval
created: 20170927
updated: 20171120
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Device Messaging](Index.md)

# Message Fields

NuvIoT was designed to process messages from your devices.  These messages contain the data
that you want to work with in your workflows.

Each field within your message contains data that you want to extract.  As part of defining the 
messages that make up your application, you will define the fields that make up your message.
The following items are important to determine when designing your strategy for parsing the data
from the fields within your message:
* [Content Type](ContentTypes.md) - Format of how fields are stored within your message
* [Parsing Strategy](./Parsing/ParsingStrategies.md) - Where and how to look within your message
* [Field Type](./TypeSystem/Index.md) - Type of data in each individual field
