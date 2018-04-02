---
title: Azure Blob Storage Data Stream
keywords: azure, blobstorage, datastreams, export

status: readyforreview
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Azure Blob Storage Data Stream

You can export data to be stored in Azure Blob Storage for used in external processes such as analytics.  Data can only be exported to Azure Blob Storage, to used in an external process.  Data stored in S3 is not available for charting or reporting.

### Azure Table Storage Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Steam Type** (required)  
`Azure Blob Storage`

* **Time Stamp Field Name** (required)  
The Time Stamp Field Name is the name of the column in a database or the JSON property that is associated with the time stamp for the data stream record.

* **Device Id Field Name** (required)    
The Device Id Field Name is the name of the column in the datbase or the JSON property that is associated with the device that generated the values for the data stream.

* **Date Storage Format** (required)
When storing the date associated with the data stream record, you can store it as a long value of seconds since unix Epoch (1/1/1970) or the standard JSON ISO 8601 format () both are stored with respect to UTC

* **Azure Storage Account Name** (required)  
Enter the name of the storage account where you will be accessing Blob storage.

* **Azure Access Key** (required)
Enter the azure access key for accessing the storage account.  This will be encrypted on the server at rest and will not be visible when editing the storage details.  If you enter a new access key when editing the storage details, the old one will be replaced.

* **Blob Container Name** (required)
Enter the name of your blob storage container, if it does not exist it will be craeted.

* **Description**     
Free-form text used to provide a description for your data stream.

