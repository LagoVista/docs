---
title: Built In Data Stream Storage
keywords: azure, datastreams, export, reports, charts

status: readyforreview
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Built In Data Stream Storage

You can use our built in data stream storage to store data that can be used to ready and write from yoru data stream.  You can access the data in this stream remotely via API and it can be used in the IoT Dashboard for charting and reporting.

### Built In Data Stream Storage Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Steam Type** (required)  
`Build In Data Stream Storage`

* **Time Stamp Field Name** (required)  
The Time Stamp Field Name is the name of the column in a database or the JSON property that is associated with the time stamp for the data stream record.

* **Device Id Field Name** (required)    
The Device Id Field Name is the name of the column in the datbase or the JSON property that is associated with the device that generated the values for the data stream.

* **Date Storage Format** (required)
When storing the date associated with the data stream record, you can store it as a long value of seconds since unix Epoch (1/1/1970) or the standard JSON ISO 8601 format () both are stored with respect to UTC

* **Description**     
Free-form text used to provide a description for your data stream
