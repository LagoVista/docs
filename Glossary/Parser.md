---
title: Parser
keywords: 

status: in process
created: 20210910
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: wording,  9/28 Why did we include the link to JSON?  Are we only talking about Payloads?  Should PEM be included at the end of example?  Or PEM changed to Workflow in Definition? 9/30 Does first sentence matter?
---
[Home](../Index.md) > [Glossary](./Index.md)

# Parser
## Definition
[Devices](./Device.md) can send [Messages](./Message.md) in many different formats, or [Content Types](./ContentType.md). These formats can include JSON, XML, CSV or even Binary. A Parser is used to extract the values from the [Message](./Message.md) [Payload](./Payload.md) to be used within fields of a [PEM](./PEM.md).
<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) that contains a JSON [Payload](./Payload.md). A Parser was created that extracted the JSON temperature and made the values available to the [Workflow](./Workflow) module.


https://en.wikipedia.org/wiki/JSON

<br>
<br>
<br>

# Related Terms
- [Content Type](./ContentType.md)
- [Device](./Device.md)
- [Message](./Message.md)
- [Payload](./Payload.md)
- [PEM](./PEM.md)
- [Workflow](./Workflow)