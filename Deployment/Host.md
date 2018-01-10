---
title: Host
keywords: deployment, host, solution

status: inprocess
created: 20170922
updated: 20170922
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Deployment](Index.md)

# Host

A **Host** is a single or collection of compute resources that have been created to manage our IoT application.  A **Host**
is the runtime that runs your [instance](Instance.md)

## Host States

#### Startup Sequence
* **Offline** - Host is not allocated, you are not being billed for any compute resources being associated with this host.
* **Deploying** - Compute resources are being allocated for this host, as there is confirmation that the host is online, you will start to be billed for this compute resource.
* **Configuring DNS** - A process is being executed to create an A DNS Record for the assigned IP address of your host.
* **Deploying Container** - Now your host is ready and at this point any containers associated with your host are being downloaded and installed.
* **Starting Container** - At this point, your host is completely configured and the instance associated with the container is being started.
* **Running** - Your [instance](Instance.md) is running in the container and the status of the instance will refelect the current status of your runtime.

#### Server Activities
* **Restarting Host** - The compute resouce/operating systems is being restarted.
* **Restarting Container** - The container containing the instance is being stopped and started.

#### Error Conditions
* **Failed Deployment** - The compute resource did not get created properly.  You will not be charged while the resource is in this state, to restart your host you will need to use the **Remove Host** feature 
in the Instance Manager.
* **Failed Health Check** - Your server is checked once a minute to ensure it is online and responding, if your server doesn't response it's status will be set to **Failed Health Check**. 
**Note:** Although this likely means that the instance is also offline, this check is purely against the host, not your instance.