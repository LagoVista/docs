---
title: Input
keywords: workflow, inputcommand

status: inprocess
created: 20171009
updated: 20171008
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Workflow](Index.md)

# Input Commands

Input Commands are a very powerful mechanism where you can define your own REST endpoints that will be made available for external applications to set properties and invoke methods within the workflow.

Input Commands are device specific that is to say as part of the REST URI, you will include your device id so the workflows will be run in individual devices.

Input Commands support the following HTTP Methods:
* **GET**
* **POST**
* **PUT**
* **DELETE** 

### Input Command Parameters

You can pass parameters along with your Input Commands to add a parameter click on Add and specify the following parameters

* **Name** (required)  
A simple name to identify your parameter, this is only for reference

* **Key** (required)  
A unique [key](../Topics/Keys.md)  to identify the paremter this will also be used to establish how the parameter should be sent.

* **Parameter Location** (required)  
The location where the paramter should be sent, this can be in the query string or the body (for POST/PUT methods)

* **Parameter Type**   
The [data type](../Messaging/TypeSystem/Index.md) of the parameter.