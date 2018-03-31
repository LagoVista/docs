---
title: Workflow Handlers
keywords: workflow, scripting, storage

status: approved
created: 20180121
updated: 20180121
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Workflow Handlers

There are two scripts that can be ran while executing your workflow.
The first will be ran prior to any additional workflow scripts or mappings being ran, and the second will be ran after all your workflow scripts have been executed.

These handlers are optional.

Both of these handlers can be set while editing the properties of the device workflow.

### Pre-Workflow Handler

The Pre-Workflow Handler will be the first thing that will be executed before anything else in your workflow.  You will have access to the original
state of the device as well as any inputs that have been mapped for this workflow.

```
function preHandler(){
    var lat = WorkflowInputs.location.latitude;

    /* Write a message to the console output of the device */
    logConsole('I am running before the rest of the scripts');
}
```  

### Post-Workflow Handler

The Post-Workflow Handler will be the last thing that will be executed after the rest of the scripts within the workflow.  You will have access to the original
state of the device as well as any inputs that have been mapped for this workflow.

```
function postHandler(){
    var lat = WorkflowInputs.location.latitude;

    /* Write a message to the console output of the device */
    logConsole('I am running after the rest of the scripts');
}
```  