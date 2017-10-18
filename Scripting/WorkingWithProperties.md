---
title: Working with Properties
keywords: workflow, scripting, properties

status: new
created: 20171002
updated: 20171002
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Working with Properties



##### Setting A Property



##### Getting an Attribute
The script template that will get a value will look as follows:

```
function onXXXX(value) {
    var currentValue = Attributes.temperature.value;
};
```

##### Clearing an Attribute
The script that clears an attribute will look as follows:

```
function onXXXX(value) {
    Attributes.temperature.value = null;
}
```
