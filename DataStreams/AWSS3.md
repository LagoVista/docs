---
title: Amazon AWS S3 Storage Data Stream
keywords: aws, s3, datastreams, export

status: readyforreview
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Amazon AWS S3 Storage Data Stream

You can insert data stream records into an Amzon Web Service S3 storage account that you own and setup.  Data can only be exported to S3, to used in an external process.  Data stored in S3 is not available for charting or reporting.

### AWS S3 Storage Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Steam Type** (required)  
`AWS S3`

* **Time Stamp Field Name** (required)  
The Time Stamp Field Name is the name of the column in a database or the JSON property that is associated with the time stamp for the data stream record.

* **Device Id Field Name** (required)    
The Device Id Field Name is the name of the column in the datbase or the JSON property that is associated with the device that generated the values for the data stream.

* **Date Storage Format** (required)
When storing the date associated with the data stream record, you can store it as a long value of seconds since unix Epoch (1/1/1970) or the standard JSON ISO 8601 format () both are stored with respect to UTC

* **AWS Access Key** (required)  
Enter the name of the storage account where you will be accessing Blob storage.

* **AWS Secret Key** (required)
Enter the AWS secret key for accessing the storage account.  This will be encrypted on the server at rest and will not be visible when editing the storage details.  If you enter a new access key when editing the storage details, the old one will be replaced.

* **S3 Bucket Name** (required)
The name of the bucket where this data stream will be stored on [S3 Storage](https://aws.amazon.com/s3/).  If the bucket does not exist it will be updated.

* **Description**     
Free-form text used to provide a description for your data stream.
