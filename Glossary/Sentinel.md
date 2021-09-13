---
title: Sentinel
keywords: 

status: new
created: 20210910
updated: 20210912
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: QuickDef
---
[Home](../Index.md)

# Sentinel

## Definition

The first [Pipeline Module](./Glossary/PipelineModule.md) that will act upon a [Message](./Glossary/Message.md) will be the Sentinel Module.  This Module is responsible for ensuring that the [Message](./Glossary/Message.md)  is being sent from the [Device](./Glossary/Device.md) that claims sent it.  The Sentinel Module can look for certain authorization keys or other parts of the [Message](./Glossary/Message.md) that only the [Device](./Glossary/Device.md) has access to, ensuring the [Message](./Glossary/Message.md) is authentic.

## Example

When the Security System at *Plymouth Manufacturing* sent a [Message](./Glossary/Message.md) that motion was detected, it included an authorization key that the Sentinel Module recognized.