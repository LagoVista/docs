---
title: Redis Data Stream
keywords: redis datastreams, export

status: readyforreview
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Redis Data Straem

If you have access to a Redis server or cluster you can configure your data stream to read and write records to your server.  This data can be used for other processes such as analytics and also be used for our IoT Dashboard

### Redis Data Stream Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Steam Type** (required)  
`Postgresql`

* **Time Stamp Field Name** (required)  
The Time Stamp Field Name is the name of the column in a database where the timestamp of the data stream record will be inserted.  This column must exist on the database table and be of type datetime, datetime2 or datetimeoffset

* **Device Id Field Name** (required)    
The Device Id Field Name is the name of the column in the datbase where the device id associated with this data stream record will be inserted.  This column must exist on the database table and be of type char, varchar, nchar or nvarchar

* **Date Storage Format** (required)
When storing the date associated with the data stream record, you can store it as a long value of seconds since unix Epoch (1/1/1970) or the standard JSON ISO 8601 format () both are stored with respect to UTC

* **Redis Server Urls** (required)  
Provide a minumum of one URL to access your redis server.  If you have a cluster, enter all the URLs.  If you provide a port in the URI such as myserver.myhost.net:6379 it will use that port.  If you just provide the host name, it will use the default port of 6379

* **Redis Password** (Optional)  
You can provide a password to access your redis server, in some cases on a private network your server or cluster may not have a password however it is highly recommended to have a [strong password](https://www.ostechnix.com/4-easy-ways-to-generate-a-strong-password-in-linux/) if your server is exposed to the public internet.

### Note:
1. A more traditional way of using Redis in your IoT application is in the form of an Applications Dictionary.
1. Currently our Redis Data Stream connector uses the  [Stack Exchange .NET NUGET Pacakge](https://stackexchange.github.io/StackExchange.Redis/)
1. In most cases, Redis will be used as a Key Value Pair dictionary where discrete items can be stored and retreived for a particular device within a stream, rather then be able to run time series queires.  Please contact us to discuss how you plan to user Redis, we are interested in understanding our customer requirements.
1. The methods GetItems will always return exactly zero records if the device does not have any data, or one record if it has data.  This type of data stream currently only supports one record per device.  Again, please contact us to discuss your uses as this will likely evolve in future versions.
1. When updating a redis item, please use the following syntax, remember for a Redis data stream we only have one value per key
```
updateDataStream([DATATREAMKEY], 
            { -JSONVALUETO BE STORED- } ,
            { 'deviceId':[YOURDEVICEID]} )'
```