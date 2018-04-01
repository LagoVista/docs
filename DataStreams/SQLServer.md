---
title: Microsoft SQL Server Data Stream
keywords: sqlserver datastreams, export

status: inprocess
created: 20180331
updated: 20180331
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# SQL Server Data Stream

### SQL Server Settings

* **Name** (required)  
Name of the data stream

* **Key** (required)  
A [Unique Key](../Topics/Keys.md) to identify the data stream

* **Transport** (required)  
`Azure IoT Hub`

* **Default End Point** (required)  
This is the full URL of your IoT hub. It should be something similar to `myiothub.azure-devices.net`

* **Device Id** (required)    
The `Device ID` for the device that has been provisioned on your Azure IoT Hub

* **Access Key** (required)  
The `Primary key` from the Device Details for the `Device ID` as specified for this simulator


* **Description**     
Free-form text used to provide notes for your simulator

### Message Setting

* **Name** (required)    
Name of the Message

* **Key** (required)       
[Unique Key](../Topics/Keys.md) to identify the message

* **Payload Type** (required)     
Text or Binary message.  In most cases, you will send a Text message.

* **Append CR** `0x0D`    
ASCII character 0x0D, if set, will be appended to the message


### SQL Server Type Mappings
The following are how [data types](../Messaging/TypeSystem/Index.md) are mapped to SQL Server, if you do not have a valid mapping and validate the schema validation will fail,
if you do not have valid mappings and run without checking the schema, inserts will fail at run time.

**(Note)** currently the data stream import engine does not check data sizes or string lengths.  If the field is too long or doesn't fit in the column such that it would be truncated, the default handling for truncating values for SQL Server will be executed. 

* [Booleans](../Messaging/TypeSystem/Booleans.md) -
bit, tinyint, smallint, int, bigint (note zero maps to false, non zero maps to true)

* [Date Time](../Messaging/TypeSystem/DateTime.md) - datetime, datetime2, datetimeoffset

* [Decimal](../Messaging/TypeSystem/Decimals.md) - decimal, numeric, real, float

* [Geo Location](../Messaging/TypeSystem/GeoLocation.md) - geography

* [Integer](../Messaging/TypeSystem/Integers.md) - tinyint, smallint, int, bigint, decimal, numeric, float

* [States and Enums](../Messaging/TypeSystem/StatesAndEnums.md) - char, varchar, nchar, nvarchar

* [Strings](../Messaging/TypeSystem/Strings.md) - char, varchar, nchar, nvarchar

* [Value with Units](../Messaging/TypeSystem/Strings.md) - decimal, numeric, real, float
