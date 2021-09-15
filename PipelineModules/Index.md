---
title: Pipeline Modules
keywords: pipelinemodules

status: approved
created: 20170922
updated: 20210819
createdby: bytemaster-0xff
updatedby: JennyWrenWolf
---
[Home](../Index.md) 

# Pipeline Modules



Pipeline Modules can be thought of as very specific tasks that are performed on a message.  They are connected so that as one module completes its task, it hands the message off to the next module for execution.  One Pipeline Module may check that the message is authentic while another may perform a calculation.    Custom Pipeline Modules can be created to supply even more sophisticated actions.


Each pipeline module is reusable and acts independently.  As the message is passed from one module to another, it doesn’t really care about what Pipeline Modules came before or after it.  They can run on different machines and have multiple copies.  This means that if the Workflow Module takes considerable time to perform its action, but the rest of the modules are executed very quickly. A clustered version of NuvIoT can have multiple workflow modules that can each process the message whereas the rest of the modules may only have one instance.  

Routes are made up of Pipeline Modules

<br>
<br>


The following are Pipeline Modules used by NuvIoT
- Listeners
- Planners
- Input Translators
- Sentinels
- Device Workflows
- Output Translators
- Transmitters
- Custom Modules
- Data Stream Writers
- Application Caches
