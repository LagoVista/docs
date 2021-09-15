---
title: Data Stream
keywords: 

status: new
created: 20210903
updated: 20210915
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: Data Stream Writer, need to address Attributes, Data stream contains the definition of the fields that describe the data that is collected???  Review Overview, 
---
[Home](../Index.md) > [User Information](./Index.md)

# Data Stream
- [Definition](#jumpA)
- [Example](#jumpB)
- [Overview](#jumpC)
- [API](#jumpD)
- [Dashboard](#jumpE)
  - [Device Chart](#jumpF)
  - [Device Data](#jumpG)
- [Data Stream Fields](#jumpH)
- [Data Stream Storage](#jumpI)
  - [Advanced Data Stream Storage](#jumpJ)
  - [Built-In Data Stream Storage](#jumpK)
- [Data Stream Types](#jumpL)
- [Data Stream Writer Object](#jumpM)
- [Time Series Data Stream](#jumpN)
- [Widgets](#jumpO)
- [How to Code](#jumpP)
  - [Add to Data Stream](#jumpQ)
  - [Update Data Stream](#jumpR)
  
<br>

___
# Definition <a name="jumpA"></a>
Data Streams are a powerful way to capture and organize data.  They produce information consisting of the [Device ID](./), [Message ID](./) and a time stamp for when the data was received.  The Data Streams may then be used within a [Deployment Instance](./Glossary/DeploymentInstance.md) for calculations and comparisons.  They may also be stored for later reference and use.
  
<br>

___
# Example <a name="jumpB"></a>
Temperatures of the *Plymouth IoT Conveyor Belt* were saved as Data Streams.  Every time a bearings' temperature was sent from the Device to the Cloud, it was saved as lines of data that allowed the engineer to look at what temperatures were produced over a period of time.

<br>

___
# Overview <a name="jumpC"></a> 
Data Streams are a powerful way to organize stored data for later review and use.  In a data stream, data received from a Device or compiled in a workflow is saved as a line that contains the device ID, time stamp, the definition of the field that describes the data, and the actual data itself.  These lines are stored and can supply information to the Dashboard for charting and reporting.  Data Streams can also provide one way communication to provide data to outside systems.

<br>

___
# API <a name="jumpD"></a> 
There is an API that can be used to extract data as created and stored by the data stream.

<br>

___
# Dashboard <a name="jumpE"></a>
Once a data stream has been setup, the data can be consumed by creating a dashboard (where??) that will display charts and tables with that data.  

  - <a name="jumpF"></a> ***Device Chart***   
    The Device Chart Widget will display a graphical representation of the data that that is sent from a device.  This data will be pulled from any sort of Data Stream that allows for reading data.  When selecting a Data Stream, you specify the data points on that data stream that will be charted.  The data displayed on the chart will have a start and end date.  These dates can be picked on the widget or they can be selected by placing a date range picker on the view.  If the date range picker is placed on the view, it will control the date ranges and any charts or data tables on that view.  The device used to supply can either be specific to this widget or selected from a Device Explorer or Device Groups widget on the same view.  As additional data points are added to the data stream, the chart will be updated with additional live data.

  - <a name="jumpG"></a> ***Device Data***  
    The Device Data widget will display raw data as added to a Data Stream.  Setting up the Device Data widget will require selecting a Data Stream as well as the fields on the Data Stream to be displayed. As with other Widget the device used to provide data can be specific to the gauge or selected as part of the view.  Data on a device data stream can be selected based on a date range, initially the data stream will bring down up to 50 records in the first collection of pages, but additional data points can be downloaded using the paging mechanism at the bottom of the Device Data widget.  As with other Widget the device used to provide data can be specific to the Device Data Widget or selected as part of the view.

<br>

___
# Data Stream Fields <a name="jumpH"></a>
(Read/Write) Fields that make up your data stream.

<br>

___
# Data Stream Storage <a name="jumpI"></a>
NuvIoT provides a number of different technologies that can be used to implement a Data Stream.

- <a name="jumpJ"></a> ***Advanced Data Stream Storage***  
  Advanced Data Stream Storage is designed to work as part of a larger system or applications.  It will need to be setup and configured separately and managed by an external IT department.  Once they are setup, the information on how to connect to those data stores can be added to NuvIoT.  

- <a name="jumpK"></a> ***Built-In Data Stream Storage***  
If the system needs to only store data that is used by NuvIoT, the Built-in Data Stream Storage is a very good option.  It will take care of everything necessary to implement the underlying storage mechanism. 

<br>

___
# Data Stream Types <a name="jumpL"></a>

The following connectors are provided for data streams.

- AWS Elastic Search - (Read/Write) Read and Write data to Amazons AWS Elastic Search
- AWS S3 - (Write Only) Write data to Amazon Web Services S3 Storage
- Azure Blob Storage - (Write Only) Write data to Azure Blob Storage
- Azure Event Hubs - (Write Only) Write data to Azure Event Hubs
- Azure Table Storage - (Read/Write) Read and Write data to Azure Table Storage
- Built In Data Stream Storage - (Read/Write) Read and Write data to our built in data storage
- Postgressql - (Read/Write) Read and Write data to a Postgresql server
- Redis - (Read/Write) Read and Write data to a Redis Server or Cluster
- SQL Server - (Read/Write) Read and Write data to a Microsoft SQL Server


<br>

___
# Data Stream Writer Objects <a name="jumpM"></a>
Data Streams are used to capture and store data over time and can be created by creating Data Stream Writer objects.    Where and How?
 
<br>

___
# Time Series Data Streams <a name="jumpN"></a> 
Time Series Data Streams provide a special way to organize data streams using average values over a pre-defined period of time.
1.  The first step is to select a period of time.  
2.  During that time period, all values received from the device are captured.
3.  The average of those values are produced and saved in the Time Series Data Stream.  


 An example of this type of operation is to capture an average of values over a predefined period of time.  These predefined periods can then be grouped into what can be thought of as buckets.  Then a collection of buckets consisting of an average can be returned.  

<br>

___
# Widgets <a name="jumpO"></a>

<br>

___
# How to Code <a name="jumpP"></a>

## Add to Data Stream <a name="jumpQ"></a>

## Update Data Stream <a name="jumpR"></a>



