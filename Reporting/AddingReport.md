---
title: Adding a report to NuvIoT
keywords: reporting python 'new report'

status: new
created: 20210601
updated: 20210601
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md)/[Reporting Home](./Index.md)

# Adding a new report to NuvIoT

After you have created and tested your report locally it can be added to NuvIoT via Studio.

To configure a report you must add the following information


### Required Fields

In addition to the [standard fields](../../Topics/StandardFields.md) that are required for most object within NuvIoT, the following fields should be specified:

* **Report Type** (required)  
Type of report, this will determine the reporting engine that will be used to render the report.

* **Default Revision**
A report can have multiple revisions uploaded.  This field lets you specify the revision that should be selected to generate the report.  If this is not specified the most recent report revision will be used.

## Report Revisions
As your reports change or you want to develop/test new features you can upload additional report revisions.  When you upload a new revision, you must enter a report revision with is a three digit number such as 1.0.0 as well as a status for the revision. 