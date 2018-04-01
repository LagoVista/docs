---
title: Data Stream Fields
keywords: datastreams, fields

status: inprocess
created: 20180401
updated: 20180401
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Data Streams
Data Streams allow you to export data to be consumed by analysis engines or used to display charts and reports in the IoT Portal

#### Data Stream Types
The following connectors are provided for data streams.

* [AWS Elastic Search](AWSElasticSearch.md) - Read and Write data to Amazons AWS Elastic Search
* [AWS S3](AWSS3.md) - Write data to Amazon Web Services S3 Storage
* [Azure Blob Storage](AzureBlob.md) - Write data to Azure Blob Storage
* [Azure Event Hubs](AzureEventHubs.md) - Write data to Azure Event Hubs
* [Azure Table Storage](AzureTable.md) - Read and Write data to Azure Table Storage
* [SQL Server](SQLServer.md) - Read and Write data to a Microsoft SQL Server


# Field Name
The Field Name will be the text that makes up the column or field within the output JSON, XML or Table ouptut.  The 
field name has the following formatting requirements, these may be more restrictive than your target system, but are 
in place to ensure maximum compatibility across different targets
* Between 3 and 32 characters.
* Contain only letters (upper/lower case), numbers and an underscore.
* Must start with a letter