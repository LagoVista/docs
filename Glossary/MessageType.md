---
title: MessageType
keywords: 

status: new
created: 20210928
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note:   How is this different than MessageID?
---
[Home](../Index.md) > [Glossary](./Index.md)

# Message ID
## Definition
A Message Type is used to define the [Message](./Message.md) that is sent from a [Device](./Device.md) to a [Deployment Instance](./DeploymentInstance.md).  It identifies relevant data that can be used in processing the [Message](./Message.md).  A Message Type consists of a [Message ID](./MessageID.md) and additional fields that the messages sends.

<br>
<br>
<br>

## Example
There are three Message Types that are defined for the *Plymouth IoT Conveyor Belt*.
1.  Message Type: `START` 

    Contains a [Message ID](./MessageID.md) of `beltstart` that indicates that the conveyor belt is starting.  It contains no additional data.

2.  Message Type: `STOP`  

    Contains a [Message ID](./MessageID.md) of `beltstop` that indicates that the conveyor belt has stopped. It contains no additional data.
3.  Message Type: `TEMPERATURE` 
    
    Contains a [Message ID](./MessageID.md) of `belttemperature`. It includes a field in the [Payload](./Payload.md) called `temperature` that indicates the current temperature of the bearings.

<br>
<br>
<br>

# Related Terms
- [Deployment Instance](./DeploymentInstance.md)
- [Device](./Device.md)
- [Message](./Message.md)
- [Message ID](./MessageID.md)