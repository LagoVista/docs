---
title: BusinessLogic
keywords: 

status: new
created: 20210910
updated: 20210912
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Quick Def
---
[Home](../Index.md)

# Business Logic 
## Definition
Business Logic is [Script](./Glossary/Script.md) in a [Workflow](./Glossary/Workflow.md) that compares incoming values to expected values.  If the incoming value is expected, the [Script](./Glossary/Script.md) will indicate True.  However, if the value is not expected, False is produced.  Business Logic can also indicate why a False response was created and may be programmed to specify an [Error Code](./Glossary/ErrorCode.md).  

<br>
<br>
<br>

## Example
The *Heat Sensing Conveyor Belt* sent a [Message](./Glossary/Message.md) to the [Cloud](./Glossary/Cloud.md) containing a value of 135°.  This value is expected so a True response is indicated in the [Workflow](./Glossary/Workflow.md).  A reading of 1000° would not have been valid and would have produced an [Error Code](./Glossary/ErrorCode.md).


