---
title: Scripting Property Bag
keywords: workflow, scripting, propertybag, storage

status: approved
created: 20171007
updated: 20171013
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Property Bag

Your device contains the concept of a Property Bag.  This is a free, from key-value pair storage type where you can add values in your workflow that will
be persisted between workflow invocations.  This is similar to an [Attribute](../Workflows/Attributes.md), but these values are scoped as private to the device.
This means that they cannot be accessed other than through a workflow.

Proprety Bag values are different than [Session Values](SessionValues.md) in that they are stored with the device.  Session values are ones that are specific the current message that is
being processed and will not be available once the workflow has completed

**Note 1:** Values put in a Property Bag are scoped at the device level.  That is to say, if you put a property called `length` into the Property Bag in 
one [Workflow](../Workflows/Index.md), any other workflows have access to both get and set that value.

**Note 2:** Values put into a Property Bag maintain their types.  If you put in a `number`, when you get it at a later time, you will also receive a
value that has the JavaScript type of `number`.
  

#### Adding an Item
```
// Insert a string
function onSet(value) {
    addToPropertyBag('mystring','hithere');
}

// Insert a nummber
function onSet(value) {
    addToPropertyBag('mynumber',123);
}

// Insert an object
function onSet(value) {
    var person = {
        firstName: 'Fred',
        lastName: 'Flintstone'
    };

    addToPropertyBag('person',person);
}
```

#### Getting an Item
The following script assume the previous scripts in the **Adding an Item** section have been run.

**Note** that on getFromPropertyBag you can provide a default value if the value is not present.

```
// Get a string
function onSet(value) {
    var value = getFromPropertyBag('mystring');
    // value will be equal to the string hithere
}

// Get a nummber
function onSet(value) {
    var value = getFromPropertyBag('mynumber');
    // value will be equal to the number 123
}

// Get an object
function onSet(value) {
    var person = getFromPropertyBag('person');
    // person.firstName will be equal to Fred
    // person.lastName will be equal to Flintstone
}

// Get a number that was not inserted with a default.
function onSet(value) {
    var number = getFromPropertyBag('notinbag',23);
    // number will be 23
}
```


#### Determine if Property Bag Value exists
```
// Get a number that was not inserted with a default.
function onSet(value) {
    var number = hasPropertyBagValue('mystring');
    // number will be true
}

// Get a number that was not inserted with a default.
function onSet(value) {
    var number = hasPropertyBagValue('notinbag',23);
    // number will be false
}
```

#### Clearing a Value

**Note:** Clearing a value that does not exist in the Property Bag will **not** be considered an error.

```
function onSet(value) {
    clearPropertyBagValue('mynumber');
    var value = getDeviceProperty('mynumber');
    // mynumber will return null
}
```

#### Supported Data Types

The following types in JavaScript are supported: `date`,`number`, and`string`.  In addition, JSON object graphs are stored as `object`.
