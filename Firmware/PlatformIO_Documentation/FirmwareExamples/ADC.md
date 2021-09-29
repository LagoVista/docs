---
Title: ADC
Keywords: 

Status: complete
Created: 20210928
Updated: 20210928
Createdby: RMD
Updatedby: RMD

Notes: This firmware example will compile locally.   But it is necessary to open the .ini file and change the nuviot library location.   In my case, I changed one line in the .ini file to 'lib_extra_dirs = C:\DEV\nuviot'.
---

# ADC

## Description
>This Example will display the values in each of the NuvIoT board's 8 ADC's.   



## Example
>You can set up each of the ADC's in a different way by using the following code snip inside setup()
>>  ioConfig.ADC1Config = ADC_CONFIG_ADC;
>>  ioConfig.ADC1Name = "adc1";
>>  ioConfig.ADC1Scaler = 1.0;
>Naturally, you'll want to repeat this code and change the nomenclature to match whichever ADC you happen to be using.
### Use:
>If you woudl like to use this example in a project, you'll need to copy over the functions:
>>  adc.setBankEnabled(1, true);
>>  adc.setBankEnabled(2, true);
>>  adc.setup(&ioConfig);

## Link
> The below link is the source for the code.\
> [ADC](https://github.com/softwarelogistics/FirmwareExamples/tree/main/ADC)