---
title: Parser
keywords: 

status: in process
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: wording
---
[Home](../Index.md) > [Glossary](./Index.md)

# Parser
## Definition
Devices can send messages to the deployment instance in many different formats. this content within the payload can be in many differenct formatsw.  (Content Type) These formats can be anythign from JSON, XML, CSV or even binary. A parser can be configured to extract values from a message into a set of fields within a PEM that can be used within other parts of NuvIoT
<br>
<br>
<br>

## Example
The PL CV belt sents a messasge that contains a JSON payload. A parser was created that extracted the temperature and rpm out of that JSON payload and made the values available to the workflow module withinj NuvIoT
https://en.wikipedia.org/wiki/JSON

<br>
<br>
<br>

# Related Terms
- [Message](./Message.md)