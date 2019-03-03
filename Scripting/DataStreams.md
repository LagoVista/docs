---
title: Logging
keywords: workflow, networking, rest, http, https, scripts

status: inprocess
created: 20171009
updated: 20171009
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md) > [Scripting](Index.md)
# DataStreams

### addToDataStream
Add a record to a data stream, note that the ids as in the example below `column1` and `column2` must be present in the data string.

```
const streamKey = 'mydatastream'

var insertedValues = {
	column1:'value1',
	column2:'value1',
};

addToDataStream(streamKey, insertedValues)

```

### updateDataStream

Update a record in a data stream, note that the ids as in the example below `column1` and `id` must be present in the data string.

```
const streamKey = 'mydatastream'

var updateValues = {
	colum1:'newValue'
};

var filterValues = {
	id:IoTDevice.DeviceId
};

updateDataStream(streamKey, updateValues, filterValues);
```
