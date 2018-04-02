---
title: Amazon AWS Elastic Search
keywords: aws, elasticsearch, datastreams, export, chart, report

status: readyforreview
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# AWS Elastic Search Data Stream

You can store your data in an an Amazon Elastic Search instance that you own.  Data written here can also be used for reporting and charting within the IoT Dashboard.

### AWS Elastic Search Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Steam Type** (required)  
`AWS Elastic Search`

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

* **Elastic Search Domain Name** (required)
Enter the domain name of your [AWS elastic search](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html) instance.

* **Elastic Search Index Name** (required)
Enter the index name for this data stream on your [AWS elastic search](https://aws.amazon.com/elasticsearch-service/) instance.

* **Elastic Search Data Type** (required)
Enter the data type for this data stream on your [AWS elastic search](https://aws.amazon.com/elasticsearch-service/) instance.  The data type will be used to identify the type of record.

* **Description**     
Free-form text used to provide a description for your data stream.

