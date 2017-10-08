---
title: Scripting Property Bag
keywords: workflow, scripting, properties, storage

status: readyforreview
created: 20171007
updated: 20171007
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Scripting](Index.md)

# Property Bag

Your device contains the concept of a property bag.  This is a free from key-value-pair storage type where you can add values in your workflow that will
be persisted between workflow invocations.  This is similar to an [Attribute](../Workflows/Attributes.md) but these values are scoped private to  the device
that is to say that they can not be accessed other than through a workflow.

**Note 1:** Values put in a property bag are scoped at the device level, that is to say if you put a property called `length` into the property bag in 
one [workflow](../Workflows/Index.md), any other [workflows](../Workflows/Index.md) have access to both get and set that value.

**Note 2:** Values put into a property bag maintain their types.  If you put in a `number`, when you get it at a later time, you will also receive a
value that has the JavaScript type of `number`
  

#### Adding an Item
```
// Insert a string
function onSet(value) {
    setDeviceProperty('mystring','hithere');
}

// Insert a nummber
function onSet(value) {
    setDeviceProperty('mynumber',123);
}

// Insert an object
function onSet(value) {
    var person = {
        firstName: 'Fred',
        lastName: 'Flintstone'
    };

    setDeviceProperty('person',person);
}
```

#### Getting an Item
```
// Insert a string
function onSet(value) {
    var value = getDeviceProperty('mystring');
    // value will be equal to the string hithere
}

// Insert a nummber
function onSet(value) {
    var value = getDeviceProperty('mynumber');
    // value will be equal to the number 123
}

// Insert an object
function onSet(value) {
    var person = getDeviceProperty('person',person);
    // person.firstName will be equal to Fred
    // person.lastName will be equal to Flintstone
}
```

#### Clearing a Value

**Note:** Clearing a value that does not exist in the property bag will **not** be considered an error.

```
function onSet(value) {
    clearDeviceProperty('mynumber');
    var value = getDeviceProperty('mynumber');
    // mynumber will return null
}
```

#### Supported Data Types

The following types in JavaScript are supported `date`,`number`,`string` and JSON object graphs are stored as `object`