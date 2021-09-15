---
title: Workflow
keywords: workflow, pipelinemodule, pipeline

status: inprocess
created: 20170922
updated: 20210819
createdby: bytemaster-0xff
updatedby: JennyWrenWolf
---
[Home](../Index.md) > [Pipeline Modules](Index.md)

# Device Workflow

## Definition
A Device Workflow consists of a series of instructions that identify, define, and process ***values (need definition)*** from a device message.  It also can trigger events to be sent back to the device or to other systems.  

A Device Workflow is typically made up of the following five parts:
* Workflow Input
* Input Commands
* State Machines
* Output Commands
* Business Rules

<br>
<br>

## Example
The Cloud has received a message from the boat, Everglades.  The message stated that the temperature in the livewell is 1100°.  This temperature, or value, is sent to a Device Workflow called Livewell Temp.  1100° is identified as an integer and is processed to determine that this integer does not fall in the acceptable range.  This creates a command to send a message to turn on the livewell cooling device.

<br>

## Related Terms


