---
title: Script
keywords: 

status: Complete
created: 20210910
updated: 20211006
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: wording
---
[Home](../Index.md) > [Glossary](./Index.md)

# Script
## Definition
Scripts are small programs written into a [Workflow](./Workflow.md) in a language called JavaScript.  They are used to respond to defined events and provide more advanced functionality.

<br>
<br>
<br>

## Example
When the *Plymouth IoT Conveyor Belt* sent a [Message](./Message.md) that a bearing reached a temperature of 425°, the Script within the [Workflow](./Workflow.md) compared that temperature value to a predefined threshold as set in a [Device Specific Setting](./DeviceSpecificSettings.md) for the bearing overheating.  It determined that the bearing was overheating and a [Message](./Device/Message.md) should be sent to stop the belt before damage was done.

<br>
<br>
<br>

# Related Words
- [Message](./Message.md)
- [Workflow](./Workflow.md)