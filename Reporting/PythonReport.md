---
title: Python Reports
keywords: reporting python 'new report'

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
    4.  `report_summary` - Brief description added to the summary of the report.

### Example Report

```
from fpdf import FPDF
from datetime import datetime

import pandas as pd
import random

import nuvpy.nuviot_report_builder as nuviot_report_builder

def start_job(output_dir, args):
    # check to see if there is a parameter called reportdata that was passed in, if not just set the date.
    if("reportdate" in args):
        date = args["reportdate"]
    else:
        date = '2021/05/24'

    # build up a data frame with 10 rows of random data.
    data = []
    for x in range(1,10):
        data.append([datetime.now(), datetime.now(),random.random() * 5,random.random() * 6,random.random() * 7,random.random() * 8])

    # Build up a data frame from that set of data and a definition of columns
    df = pd.DataFrame(data,columns=['Time','Time2','Value1', 'Value2', 'Value3', 'Value4'])

    # Now define how the PDF should be generated, each row will describe a column
    # within the table.
    #  fld - Name of the field as defined in the data frame
    #  hdr - Header to be used at the top of the column
    #  w - Width of the column
    #  align - C = center, L = left, R = right
    #  rnd - Number of decimal points to display
    #  total: 
    #       sum = Add the total values and display at the bottom
    #       avg = Average of the values for the column.
    #  tlthdr: Header to be placed on the total row.
    #  fmt: Standard Python format string to be applied to numbers or values such as date/time
    table = [
        {'fld':'Time', 'hdr':'Time', 'w':20, 'fmt':"%H:%M:%S"},
        {'fld':'Value1', 'hdr':'1st Value', 'w':20},
        {'fld':'Value2', 'hdr':'2nd Value', 'w':80, 'align':'C'},
        {'fld':'Value3', 'hdr':'3rd Value', 'w':20, 'total':'sum', 'rnd':2},
        {'fld':'Value4', 'hdr':'4th Value', 'w':30, 'rnd':4, 'total':'avg','tlthdr':"Avg"}
    ]

    # Start our PDF
    pdf = FPDF()

    # Add the initial page to our PDF
    pdf.add_page()
    
    # Add a header to the page.
    nuviot_report_builder.add_page_header(pdf, "Hello World Report V3.5.0", "Widget ABC")

    # add a table to the report which is
    # PDF document, Title for the table, Y location to start the table on the page, table definition and finally
    # the data in the data frame.
    y = 50
    nuviot_report_builder.add_table(pdf,"Sensor One", y, table, df)

    # Create a file name to save the file.
    file_date = date
    file_name = "HelloWorld_%s.pdf" % file_date.replace("/","_").replace("\\","_")

    # Using the output file as passed in as a parameter, create a full output file path.
    output_file_name = output_dir + "/" + file_name

    # Write that PDF file to the full output file path.
    pdf.output(output_file_name, 'F')

    # Build a data structure that returns the values necessary to register this report.
    #  file_name - Actual file name of the saved report file, this will be used to download the file.
    #  report_title - Title to be displayed in the report listing
    #  report_date - Date the report was generated OR date that that the data in this report is for.
    #  report_summary - Summary information to be included in the report listing. 
    return {'file_name':file_name,'report_title':'Production Report','report_date':date, 'report_summary': ("Very simple report.")} 
```