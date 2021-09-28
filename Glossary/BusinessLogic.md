---
title: BusinessLogic
keywords: 

status: Complete
created: 20210910
updated: 20210912
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Quick Def.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Business Logic 
## Definition
Business Logic is [Script](./Script.md) in a [Workflow](./Workflow.md) that can perform calculations and comparisons, send emails and [Messages](./Message.md), as well as multiple other functions that are typical of programs. 

<br>
<br>
<br>

## Examples

- *Example 1*

    The *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) to the [Cloud](./Cloud.md) containing a value of 135°.  This value is in the expected range so a True response is indicated in the [Workflow](./Workflow.md).  A reading of 480° would not have been in the expected range and would have produced an [Error Code](./ErrorCode.md).

<br>

- *Example 2*

    The *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) to the [Cloud](./Cloud.md) that it was shutting down at 3:30PM.  The belt is supposed to run until 4:00PM so an [Error Code](./ErrorCode.md) was produced and the manager received a [Message](./Message.md) of the conflict.
<br>
<br>
<br>

# Related Terms
- [Cloud](./Cloud.md)
- [Error Code](./ErrorCode.md)
- [Message](./Message.md)
- [Script](./Script.md)
- [Workflow](./Workflow.md)
