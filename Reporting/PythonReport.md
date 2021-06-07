---
title: Python Reports
keywords: reporting pythono 'new report'

status: new
created: 20210601
updated: 20210601
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md)/[Reporting Home](./Index.md)

# Python 
The following are the basic steps to create a report in Python:
1.  Create a new Python File
2.  Define a method called `startJob(output_dir, args)` where
    1.  `output_dir` is the path where you will save your report
    2.  `args` list of custom report parameters
3.  Create a connection context that can be used to access NuvIoT data
4.  Pull data from NuvIoT via a NuvIoT Python Library
5.  Use NuvIoT Python Library to pull data
6.  Assemble a PDF from another NuvIoT Python Library
7.  Save the PDF file to output directory
8.  Return information about your report to include
    1.  `file_name` - File name for the PDF that was saved to the output directory
    2.  `report_title` - Title to be displayed on the report list
    3.  `report_date` - Most reports 