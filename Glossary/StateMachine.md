---
title: StateMachine
keywords: 

status: in process
created: 20210910
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: wording
---
[Home](../Index.md) > [Glossary](./Index.md)

# State Machine
## Definition
A State Machine establishes the current state or condition of a [Device](./Device.md).  Based on the current state of the [Device](./Device.md), certain actions can be valid or invalid.  For more information on State Machines visit this [link](https://en.wikipedia.org/wiki/Finite-state_machine)

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt* received a [Message](./Message.md) to `start`.  However, the belt was currently running.  Since the current state of the belt was `running`, the [Message](./Message.md) containing `start` was determined to be invalid and was ignored.  

<br>
<br>
<br>

# Related Terms
- [Device](./Device.md)
- [Message](./Message.md)