---
title: Data Stream Fields
keywords: datastreams, fields

status: readyforreview
created: 20180401
updated: 20180401
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# Field Name
The Field Name will be the text that makes up the column or field within the output JSON, XML or Table ouptut.  The 
field name has the following formatting requirements, these may be more restrictive than your target system, but are 
in place to ensure maximum compatibility across different targets
* Between 3 and 64 characters.
* Contain only letters (upper/lower case), numbers
* Must start with a letter

### Data Stream Field Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream


* **Field Name** (required)
This is the name of the database column or JSON property that will contain the data from your data stream, it will be used for validation to ensure the data types are correct.

* **Data Type** (required)
The [data type](../Messaging/TypeSystem/Index.md) that will be stored in this record.

* **Is Required**
If you set this option and the value is not present in the data stream record, the insert will fail.

* **Min Value**  (optional and available for numeric data types)
Minnimum allowable value to be inserted.

* **Maximum Value** (optional and available for numeric data types)
Maximum allowable value to be inserted.

* **Number Decimal** (optional and available for real data types)
Number of decimal points that will be stored in the field (additional precision will be rounded.)

* **Description**     
Free-form text used to provide a description for your field.

* **Notes**     
Free-form text used to provide notes for your your field.




