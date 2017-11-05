---
title: Standard Fields
keywords: forms, data, user interface

status: readyforapproval
created: 20171019
updated: 20171031
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md)

# Standard Fields

IoT App Studio is a tool used to create configurations that make up applications that will run in NuvIoT.  This means that you will be entering a lot of data. 

Almost all forms that you create will require a minimum of two required fields and one optional field as follows:
  1. **Name** (required) - This is a textual description that can be used to help identify the item.   
  Names are user editable and can be changed at any time.  Currently, if you are referencing a component and change the name of the original component, the name in the reference may not be changed.  This will be addressed early in 2018.   
  
  2. **Key** (required) - This is an identifier that will be used internally by the NuvIoT runtime to identify components.  See [Keys](Keys.md) for more details.   
  Keys can only be edited by the user when first created.  After that, they cannot be edited.   
  
  3. **Description** - Description is a simple text field that can be used to add documentation to your object.

