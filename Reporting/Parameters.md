---
title: Adding parameters for a report
keywords: reporting python 'new report' parameters

status: new
created: 20210713
updated: 20210713
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](../Index.md)/[Reporting Home](./Index.md)

# Adding parameters for your report

After you have added your report to NuvIoT, you can specify the parameters that can be passed to your report.

Once you the define the parameters, a user interface will be generated to prompt the user to provide values at run time to be passed to your report.  When scheduling your report, you can also specify the parameters that should be used when the report is generated on a schedule. 

When you configure your parameters you will need to specify the following fields

In the method that will generate your report that you need to provide the parameters will be passed in
```
def start_job(output_dir, args):
    if(args["parameter_key"])
        parameter_value = args["parameter_key"]
```

* **Name** (required)     
Name of the parameter, used to identify the parameter within NuvIoT

* **Label** (required)  
Label to be presented to the user that is generating the report

* **Parameter Type** (required)  
Specify the type of parameter that should be prompted from the user to generate the report
  * String - Simple String
  * Integer - A whole number such as 1, 2 or 3
  * Decimal - A real number such as 1.5, 3.1415
  * True/False - A flag to specify true or false.
  * Date - Select a date without a time such as 5/17/2021
  * Time - Select a time without a date such as 8:30 PM
  * Options - Let's you define a set of options that the user can select from
  * Date Range - A date range with a starting end ending date
  * Device - Let's you pick a specific device
  * Device Group - Let's you pick a specific device group
  * Sensor - Let's you pick a specific sensor on a device
  * Instance - Let's you pick a specific deployment instance
  * Geolocation - Let's you specify a latitude and longitude
  * State - Specify a state set that can be used to present options to a user to generate a report.  
     
* **Key** (required)    
A unique key that is used to identify the parameter, after this is set, it can not be changed.  The key will be used to get the value in the script or program that will be used to generate the report.

* **Is Required**  
Specify if this parameter is required to generate the report.  

* **Allow Multiple Values**  
If a list of options is supplied can the user specify more then one options.  If more then one option is selected the parameters will be delimited by commas.

* **Help**  
Provide optional help that will let the user running the report know what the parameter is for.
