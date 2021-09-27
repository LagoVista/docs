---
title: TimeSeriesDataStream
keywords: 

status: new
created: 20210914
updated: 20210920
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes:  

---
[Home](../Index.md) > [Glossary](./Index.md)

# Time Series Data Stream
## Definition
Time-Series Data Streams are an optimized storage technology that is very powerful for understanding the behavior of IoT devices over time.



A NuvIoT supports a special type of Data Stream that allows for performing operations on data streams with respect to time.  These Data Streams are called Time Series Data Streams and  There is no difference in the way that data points are inserted into a Time Series Data Stream.  An example of these types of operations is to capture an average of values over a predefined period of time.  These predefined periods can then be grouped into what can be thought of as buckets.  Then a collection of buckets consisting of an average can be returned.  If you are familiar with writing SQL queries, you can think of this as averaging over a group-by in a SQL statement but the underlying technology makes this easier to implement as well as more efficient.  The Smart Litter Box team wanted to know how often the litter box was used each day, they could simply create an Analytics Query where the group by period or window is defined as “Days”, the window size would be defined as 1, or 1 Day, and the fields to be returned would be “Average Cycle”.  This analytics query would then be executed against the database to capture the average number of cycles that our Smart Litter Box has performed per 1 day period.


<br>
<br>
<br>

## Example

<br>
<br>
<br>

# Related Terms
