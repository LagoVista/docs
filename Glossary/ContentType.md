---
title: Content Type
keywords: 

status: Complete
created: 20210927
updated: 20211004
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Complete?  Are each of these terms going to need to be defined?  what is it converted to in example?
---
[Home](../Index.md) > [Glossary](./Index.md)

# Content Type
## Definition
[Devices](./Device.md) can send [Messages](./Message.md) to the [Deployment Instance](./DeploymentInstance.md) in a wide variety of formats. *NuvIoT* categorized these formats as the Content Type of the [Message](./Message.md).  A [Parser](./Parser.md) is then needed to extract values from the [Message](./Message.md) and convert them into a common format that will be used within NuvIoT.

**<u>Content Type formats</u>**
- No Content
- Binary
- Endianness
    - Big Endian
    - Litten Endian
- String Parsing Strategy
- Null Terminated
- Length Provided
- Binary Message Parsing Strategy
- Absolute
- Relative
- Script
- Delimited	
- JSON
- String with Reg Ex
- Protocol Buffers
- String with Position
- XML
- File Upload/Media
- Seven Segment Image
- Point Array

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) that contained a JSON payload (human read-able text) of 425°. A [Parser](./Parser.md) had been created in the belt's [Deployment Instance](./DeploymentInstance.md) to extract the temperature out of that JSON payload and convert it to a real number that could be used by the [Workflow](./workflow.md).

<br>
<br>
<br>

# Related Terms
- [Deployment Instance](./DeploymentInstance.md)
- [Devices](./Device.md)
- [Message](./Message.md)
- [Parser](./Parser.md)
- [Workflow](./workflow.md)