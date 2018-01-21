---
title: Session Values
keywords: workflow, scripting, sessionvalues, storage

status: approved
created: 20180121
updated: 20180121
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Scripting](Index.md)

# Session Values

While execucting your workflow you can have access to a temporary variable store.  You can think of these as local variables that are destroyed after your workflow
has completed.

Session values are different than [Property Bag Values](PropertyBag.md) in that they are **not stored** with the device.  Property Bag values are stored with the
device and ara available after the workflow has been completed and can be accessed by anything that has access to the device.

**Note:** Values put into a Property Bag maintain their types.  If you put in a `number`, when you get it at a later time, you will also receive a
value that has the JavaScript type of `number`.
  

#### Adding an Item
```
// Insert a string
function onSet(value) {
    setSessionValue('mystring','hithere');
}

// Insert a nummber
function onSet(value) {
    setSessionValue('mynumber',123);
}

// Insert an object
function onSet(value) {
    var person = {
        firstName: 'Fred',
        lastName: 'Flintstone'
    };

    setSessionValue('person',person);
}
```

#### Getting an Item
The following script assume the previous scripts in the **Adding an Item** section have been run.

**Note** that with getSessionValue you can provide a default value if the value is not present.

```
// Get a string
function onSet(value) {
    var value = getSessionValue('mystring');
    // value will be equal to the string hithere
}

// Get a nummber
function onSet(value) {
    var value = getSessionValue('mynumber');
    // value will be equal to the number 123
}

// Get an object
function onSet(value) {
    var person = getSessionValue('person');
    // person.firstName will be equal to Fred
    // person.lastName will be equal to Flintstone
}

// Get a number that was not inserted with a default.
function onSet(value) {
    var number = getSessionValue('notinbag',23);
    // number will be 23
}
```

#### Determine if session value exists
```
// Get a number that was not inserted with a default.
function onSet(value) {
    var number = hasSessionValue('mystring');
    // number will be true
}

// Get a number that was not inserted with a default.
function onSet(value) {
    var number = hasSessionValue('notinbag',23);
    // number will be false
}
```

#### Clearing a Value

**Note:** Clearing a value that does not exist in the Property Bag will **not** be considered an error.

```
function onSet(value) {
    clearSessionValue('mynumber');
    var value = hasSessionValue('mynumber');
    // value will be false
}
```

#### Supported Data Types

The following types in JavaScript are supported: `date`,`number`, and`string`.  In addition, JSON object graphs are stored as `object`.
