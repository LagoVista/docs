---
title: Pipeline Modules
keywords:

status: complete
created: 20210823
updated: 20210914
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: What is an expected temperature for bearings?  Ready for review 9/8 - Wording in example - Ready for Review  Complete.
---
[Home](../Index.md) > [Glossary](./Index.md) 

# Pipeline Modules
## Definition
Pipeline Modules can be thought of as containers of very specific functions, or logic, that are performed on a [PEM](./PEM.md).  They are connected so that as one module completes its task, it hands the [PEM](./PEM.md) off to the next module or modules for execution.  

<br>
<br>
<br>

## Example
The *Plymouth IoT Conveyor Belt's* [Deployment Instance](./DeploymentInstance.md) receives a [Message](./Message.md) from the belt with a bearing temperature reading of 475°.  This [Message](./Message.md) is converted to a [PEM](./PEM.md) and passed through several Pipeline Modules.
  1.  One module determines the [Message](./Message.md) is from PICBelt0012.  
  2.  Another extracts the value of the temperature, 475°.  
  3.  A third module compares this temperature to what is an expected value. 
  4.  Finally, because the value is over the expected temperature, it sends a [Notification](./notification.md) to a shop floor manager.

<br>
<br>
<br>

# Related Terms
- [Deployment Instance](./DeploymentInstance.md)
- [Message](./Message.md)
- [Notification](./notification.md)
- [PEM](./PEM.md)