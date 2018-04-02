---
title: DataStreams
keywords: datastreams, inputs, outputs, tcp, mqtt, azureiothub, azureeventhub, rest

status: readyforreview
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Data Streams
Data streams are powerful building blocks that allow you to get the system from your devices into other storage devices so it can be used for analtyics or reporting.  Some storage machisms are one way in that they can only write data to be processed by other systems.
Others can be used to supply data for our IoT Dashboard for charting and reporting

#### Data Stream Types
The following connectors are provided for data streams.

* [AWS Elastic Search](AWSElasticSearch.md) - (Read/Write) Read and Write data to Amazons AWS Elastic Search
* [AWS S3](AWSS3.md) - (Write Only) Write data to Amazon Web Services S3 Storage
* [Azure Blob Storage](AzureBlob.md) - (Write Only) Write data to Azure Blob Storage
* [Azure Event Hubs](AzureEventHubs.md) - (Write Only) Write data to Azure Event Hubs
* [Azure Table Storage](AzureTable.md) - (Read/Write) Read and Write data to Azure Table Storage
* [Built In Data Stream Storage](BuiltIn.md) - (Read/Write) Read and Write data to our built in data storage
* [SQL Server](SQLServer.md) - (Read/Write) Read and Write data to a Microsoft SQL Server

#### Data FIelds
* [Data Stream Fields](DataStreamFields.md) - (Read/Write) Fields that make up your data stream.
