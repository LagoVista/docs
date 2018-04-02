---
title: Microsoft SQL Server Data Stream
keywords: sqlserver datastreams, export

status: readyforreview
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# SQL Server Data Stream

If you have access to a SQL Server you can configure yoru data stream to read and write records to your server.  This data can be used for other processes such as analytics and also be used for our IoT Dashboard

### SQL Server Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Steam Type** (required)  
`SQL Server`

* **Time Stamp Field Name** (required)  
The Time Stamp Field Name is the name of the column in a database where the timestamp of the data stream record will be inserted.  This column must exist on the database table and be of type datetime, datetime2 or datetimeoffset

* **Device Id Field Name** (required)    
The Device Id Field Name is the name of the column in the datbase where the device id associated with this data stream record will be inserted.  This column must exist on the database table and be of type char, varchar, nchar or nvarchar

* **Date Storage Format** (required)
When storing the date associated with the data stream record, you can store it as a long value of seconds since unix Epoch (1/1/1970) or the standard JSON ISO 8601 format () both are stored with respect to UTC

* **Azure Storage Account Name** (required)  
Enter the name of the storage account where you will be accessing Blob storage.

* **Database Url** (required)
Enter the URL or IP address of the database server.  If you enter the URL, simply enter the URL without http:// or https:// if this is on Azure you may need to setup a firewall rule for the IP address of the instances that will be using this data stream.  Please contact us for more details.

* **Database Name** (required)
Enter the name of the database on the database server.

* **Database User Name** (required)
Enter the user name of a user that has read/write privelages to the table where this data stream will access.  If you plan to validate the schema, please ensure that the user has appropriate rights to access the system tables such as sysobjects and syscolumns.

* **Database Password** (required)
Enter the password for accessing the SQL Server.  This will be encrypted on the server at rest and will not be visible when editing the storage details.  If you enter a new password when editing the database details, the old one will be replaced.

* **Database Table Name** (required)
Enter the name of the table on the SQL server where data will be inserted.  This table must exist and match the fields, time stamp field name and device id field name you configured on the data stream.  Please use the validate function to make sure your table is compatible.

* **Validate Schema**
If you select this option, when your instance starts up it will ensure the database schema on your server is compatible with this data stream.  If you select this option, please ensure that the user has appropriate rights to access the system tables such as sysobjects and syscolumns.

* **Description**     
Free-form text used to provide a description for your data stream.


