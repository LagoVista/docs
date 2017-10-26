---
title: Instance
keywords: deployment, instance, solution, host, iotapplication

status: inprocess
created: 20170922
updated: 20170922
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Deployment](Index.md)

# Instance

An Instance is a deployed version of a [solution](Solution.md).  Since NuvIoT was built for maximum reuse you configure a solution
independently form how it is deployed.  This allows for creating development and test environments as well as deploying the same
solution in georedundent data centers. When you create an instance you select a [configuration](Configuration.md) that will determine 
how your solution will scale.

Instances can also be either cloud based that runs on the [NuvIoT Infrastructure](NuvIoTInfrastructure.md) or one 
that runs on the [IoT Edge](EdgeTechnology.md). 