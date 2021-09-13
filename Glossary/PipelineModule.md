---
title: Pipeline Modules
keywords: pipelinemodules

status: complete
created: 20210823
updated: 20210908
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: What is an expected temperature for bearings?  Ready for review 9/8 - Wording in example - Ready for Review  Complete
---
[Home](../Index.md) 

# Pipeline Modules

## Definition
Pipeline Modules can be thought of as containers of very specific functions, or logic, that are performed on a [PEM](./Glossary/PEM.md).  They are connected so that as one module completes its task, it hands the [PEM](./Glossary/PEM.md) off to the next module or modules for execution.  

<br>
<br>
<br>

## Example

The [Cloud](./Glossary/Cloud.md) receives a [Message](./Glossary/Message.md) from the *Plymouth IoT Conveyor Belt* with a bearing temperature reading of 360°.  This [Message](./Glossary/Message.md) is converted to a [PEM](./Glossary/PEM.md) and passed through several Pipeline Modules.
  1.  One module determines the [Message](./Glossary/Message.md) is from PICBelt0012.  
  2.  Another extracts the value of the temperature, 360°.  
  3.  A third module compares this temperature to what is an expected value. 
  4.  Finally, because the value is over the expected temperature, it sends a notification to a shop floor manager.

<br>
<br>
<br>

## Related Terms
