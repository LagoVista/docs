---
title: Messages
keywords: messages, messaging, devices

status: complete
created: 20210823
updated: 20210924
createdby: JennyWrensWolf
updatedby: JennyWrenWolf

NOtes: Complete.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Message
## Definition
IoT is all about [Devices](./Device.md) and the [Cloud](./Cloud.md) communicating.  These conversations are made up of Messages that share data and initiate actions. They generally consist of three parts:

- [Device ID](./DeviceID.md) - which specific [Device](./Device.md) sent the message
- [Message ID](./MessageID.md) - what type of message is being sent
- [Payload](./Payload.md) - the data or value being sent

Message formats are defined in the [Studio](./Studio.md) as reusable objects.  This means that a single Message format may be used in a variety of [Solutions](./Solution.md).  

<br>
<br>
<br>

## Example
The bearings' in the *Plymouth Iot Conveyor Belt* began to overheat so it sent a message to the [Cloud](./Cloud.md).  The Message contained the [Device ID](./DeviceID.md) (PICBelt0012), the [Message ID](./MessageID.md) (overheat), and a [Payload](./Payload.md) (435°).

<br>
<br>
<br>

# Related Terms
- [Cloud](./Cloud.md)
- [Device](./Device.md)
- [Device ID](./DeviceID.md)
- [Message ID](./MessageID.md)
- [Payload](./Payload.md)
- [Solutions](./Solution.md)
- [Studio](./Studio.md)