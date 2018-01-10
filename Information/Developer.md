---
title: Developer
keywords: development

status: readyforapproval
created: 20171018
updated: 20171120
createdby: bytemaster-0xff
updatedby: klworkman
---

# Developer Home Page

 #### *Configure More - Code Less* 

NuvIoT was architected on the basis of over 25 years of experience building custom software.  
Over those 25 years, we have seen many claims of "Build XYZ without a single line of code!" Most of those solutions are not around today.

Our vision is based on *Configure More - Code Less*, not on false claims that you will never have to write any custom code.  
A great deal of effort was expended in designing a system that allows you to use our 
data-driven architecture for as much as possible while providing a considerable number of integration points. These include the ability to add
custom scripts via our IoT App Studio and the ability to build either custom containers to do processing or
endpoints that you provide to perform your custom logic.

Our IoT application architecture is based on a series of [Pipeline Modules](../PipelineModules/Index.md) that process messages via Pipeline Execution Messages.

#### Resources Available as Custom Integration Points

* **Scripting** - A first and very powerful mechanism to accommodate your custom logic is the ability to add custom scripts to process your IoT data.  These scripts give you context-sensitive help as to your specific configurations and built-in services via IntelliSense.
* **REST API** - A REST API with well over 100 endpoints has been provided to allow you to configure and control all aspects of your IoT implementation.  In fact, anything you can do through IoT App Studio, you can do through the API.
* **White Label Mobile Apps** - We provide a Xamarin SDK that will give you a great head start in building your custom mobile apps that leverage data produced from NuvIoT.
* **Custom Public/Private Endpoints** - With this approach, you can host an endpoint on your infrastructure, either via public IP or VPN, and pass it to a pipeline execution message for processing.  You will have the best of both worlds; a robust, fault- redundant high performance IoT data capture, a storage and conditioning engine, and very custom and potentially proprietary services that do not make sense to host in NuvIoT.
* **Containers** - You can build a custom Docker container that handles pipeline execution messages, host it on our servers, and register it to participate in the Pipeline Execution engine.
