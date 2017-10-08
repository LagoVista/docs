---
title: Scripting Atribute - OnSet
keywords: workflow, scripting, attribute, onset

created: 20171002
updated: 20171002
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Attribute - OnSet

When designing your workflow you can add a script that will be executed when the value is being assigned.

The script template will look as follows:

```
/* Provide a script to customize setting the    */
/* attribute.                                   */
/*                                              */
function setAttribute(workflow: DeviceWorkflow, value:string) {
    let workflow = Repository.getWorkflow('this');
    workflow.attributes.temperature.setValue(value);
};
```

While editing your script you will have access to the entire Device and Device Workflow data.