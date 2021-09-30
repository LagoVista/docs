---
title: Sentinel
keywords: 

status: complete
created: 20210910
updated: 20210927
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: 
---
[Home](../Index.md) > [Glossary](./Index.md)

# Sentinel
## Definition
The first [Pipeline Module](./PipelineModule.md) that will act upon a [Message](./Message.md) will be the Sentinel Module.  This module is responsible for ensuring that the [Message](./Message.md) is being sent from the [Device](./Device.md) that claims sent it.  The Sentinel Module can look for certain authorization keys or other parts of the [Message](./Message.md) that only the [Device](./Device.md) has access to, ensuring the [Message](./Message.md) is authentic.

<br>
<br>
<br>

## Example
When the Security System at *Plymouth Manufacturing* sent a [Message](./Message.md) that motion was detected, it included an authorization key that the Sentinel Module recognized and confirmed that the message was indeed authentic.

<br>
<br>
<br>

# Related Words
- [Device](./Device.md)
- [Message](./Message.md)
- [Pipeline Module](./PipelineModule.md)