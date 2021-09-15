---
title: Solution
keywords: deployment, solution, instance, iotapplication

status: inprocess
created: 20170922
updated: 20210819
createdby: Kevin D. Wolf
updatedby: JennyWrenWolf
---
[Home](../Index.md) > [Deployment](Index.md)

# Solution




## **Definition**
A Solution is constructed when a [Planner](./PipelineModules/Planner.md), custom settings, and one or more [Listener](./PipelineModules/Listener.md) and [Device Configurations](./Devices/DeviceConfigurations.md) are combined.  It provides instructions on what messages to read and how to process them.  When a Solution is published or deployed in the Cloud, it will become a working [Deployment Instance](./Deployment/Instance.md).  

<br>

- ### **Custom Settings**
  Custom settings can be created and used after the Solution has been deployed as a [Deployment Instance](./Deployment/Instance.md) based on how the [Device](./Devices/Index.md) is used.  For example, a group of conveyor belts moving rocks may need to move at a slower speed than another group moving cotton.  Or perhaps a smaller version of a pool heater is being created that will need to run more often. These changes may be made using Custom Settings.

<br>

- ### **Versioning**
  Changes may be made to a Solution and saved as Versions.  Each separate version may be published as an independent [Deployment Instance](./Deployment/Instance.md).  This is helpful if an update to a solution is published and a bug is found within it.  A previous version may be released in its place.

<br>

## **Example**
A Solution was created for the Heat Sensing Conveyor Belt owned by Plymouth Manufacturing.  The Solution contained a [Listener](./PipelineModules/Listener.md) for the Plymouth Conveyor Belt, a [Planner](./PipelineModules/Planner.md) that extracted the belt's temperature, and a [Device Configuration](./Devices/DeviceConfigurations.md) that processed the belt's temperature and instructed the belt to stop if overheated.  
