---
title: Solution
keywords: deployment, solution, instance, iotapplication

status: new
created: 20210903
updated: 20210903
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: 
---
[Home](../Index.md) > [User Information](./Index.md) 

# Solution

## **Overview**

An IoT Solution is a seamlessly integrated bundle of technologies that companies can purchase to solve a problem and/or create new organizational value.

Solutions are reusable objects that provide instructions for how to identify and process [Messages](./Glossary/Message.md) once they are received by the Cloud from a [Device](./Glossary/Device.md).

A Solution is made up of:
- A [Planner](./PipelineModules/Planner.md)
- Custom Setting
- One or more [Listeners](./PipelineModules/Listener.md) 
- One or more  [Device Configurations](./Devices/DeviceConfigurations.md) 

When a Solution is published or deployed in the Cloud with a [Device Repository](./Glossary/DeviceRepository.md), it will become a working [Deployment Instance](./Deployment/Instance.md).  


<br>
<br>

___

# Making a Solution in NuvIoT Studio Module 

### **Name**

<br>

### **Key**

<br>

### **Planner**

<br>

### **Default Listener**

<br>

### **Description**

<br>

### **Listeners**

A Solution can support multiple listeners.  They can receive messages from both MQTT, a message queue-based protocol, and HTTP/REST, a protocol that is similar to how web pages are requested on a browser.  One Solution can receive messages from either source and act upon them using the same routes that are defined in the Device Configuration.

<br>

### **Device Configuration**

<br>

### **Settings**

Another feature of a solution is the ability to create settings, creating settings at the solution level lets you add customized values for each instance.  These customized settings can then be used within workflows and scripts.  Once you have defined your solution, you can use that solution to create multiple deployment instances, each of those instances can have different settings, an example of this might be the Smart Litter Box team has a vision of creating a compact model of their Smart Litter box, the compact model may need to be cleaned more often.  If a setting is added to the solution, and all the regular Smart Litter Boxes are supported by a different Instance then the compact ones, the value that is used as a default for how often the litter box needs to be cleaned can be customized so that the regular Smart Litter Box instance has a 2-week interval for cleaning where the compact version has this set to 1 week.   

<br>
<br>
<br>

### **Versioning**
Solutions can be versioned.  A snapshot of a solution at a specific point in time can be created so that versions may be published as a Deployment Instance.  When creating a Deployment Instance, it can be based on either how the current solution is created, or it can be based off a specific version.  This has two benefits; first if the solution is based off a specific version, the solution can continue to be updated, changes can be made while a working instance will continue to operate without risk of publishing bugs that might be introduced while the changes are made before they are fully tested.  The second benefit is that if an update to a solution is published and a bug is found within it, if versions of the solutions are saved as changes are made, it will be possible to rollback to a previous version of the solution that doesn’t have the problem.  


