---
title: Standard Fields
keywords: forms, data, user interface

status: readyforreview
created: 20171019
updated: 20171019
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md)

# Standard Fields

IoT App Studio is a tool to create configurations that make up applications that will run in NuvIoT.  This means you will be entering a lot of data. 

Almost all forms that you create will require a minimum of two required fields and one optional field.  
  1. **Name** (required) - This is a textual description that can be used to help you identify the item you are work working with.
  2. **Key** (required) - This is an identifier that will be used internally the NuvIoT run time to identify components.  See [Keys](Keys.md) for more details.
  3. **Description** - Description is a simple text field that can be used to add documentation to your object.

**Name**'s are user editable and can be changed at any time.  Currently if you are referencing a component and change the name of the original component the name in the reference may not be changed.  This will be address early in 2018

**Keys**'s are only user editable when first created, but can not be edited.
