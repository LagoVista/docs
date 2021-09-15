---
title: Sentinel
keywords: 

status: new
created: 20210910
updated: 20210914
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: QuickDef.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Sentinel
## Definition
The first [Pipeline Module](./Glossary/PipelineModule.md) that will act upon a [Message](./Glossary/Message.md) will be the Sentinel Module.  This Module is responsible for ensuring that the [Message](./Glossary/Message.md)  is being sent from the [Device](./Glossary/Device.md) that claims sent it.  The Sentinel Module can look for certain authorization keys or other parts of the [Message](./Glossary/Message.md) that only the [Device](./Glossary/Device.md) has access to, ensuring the [Message](./Glossary/Message.md) is authentic.

<br>
<br>
<br>

## Example
When the Security System at *Plymouth Manufacturing* sent a [Message](./Glossary/Message.md) that motion was detected, it included an authorization key that the Sentinel Module recognized.

<br>
<br>
<br>

# Related Words
- [Device](./Glossary/Device.md)
- [Message](./Glossary/Message.md)
- [Pipeline Module](./Glossary/PipelineModule.md)