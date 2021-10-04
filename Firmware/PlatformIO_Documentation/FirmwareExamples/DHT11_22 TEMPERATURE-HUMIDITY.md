Title: DHT11 DHT22 TEMPERATURE SENSORS
Keywords: 

Status: WIP
Created: 20210928
Updated: 20210928
Createdby: RMD
Updatedby: RMD

Notes: This firmware example will compile locally.   But it is necessary to open the .ini file and change the nuviot library location.   In my case, I changed one line in the .ini file to 'lib_extra_dirs = C:\DEV\nuviot'.
---

# GPIO'S AND TEMPERATURE SENSORS

## Overview
>There are commonly used temperature and himidity sensors available on the market.   The two models, DHT11 and the DHT22 are inexpensive and they work well woith the NuvIoT Sensor Board.
>Each of these modules will provide a temperature and matching humidity reading via the digital output pin on each module.
>

## Description
>This Example will display the values in each of the NuvIoT board's 8 ADC's.   
>The DHT11 and DHT22 both come with 3 or 4 pins.   The wiring diagram shows how to wire either to J15 and J16 or with the remaining GPIO pins (GPIO_3-8).
>

## Example
>You will need to configure the GPIO Pins (1 through 8) in the setup() function of the code.   The code blow uses GPIO-1 as an example.
>>ioConfig.GPIO1Config = GPIO_CONFIG_DHT11;
>>ioConfig.GPIO1Name = "dht11";
>And also call probes.setup(&ioConfig); in the setup() function.

>You'll also have to call a couple of methods in the main loop in order to see this data:
>>probes.loop();  // Gets the reading form the configured probe.
>>probes.debugPrint();  // Prints out the results via console.
>> 


## Typical wiring witht he NuvIoT sensor board.
> Below is an image of the possible ways to wire either a DHT11 or a DHT22 to the NuvIoT Sensor Board.   
![Console Output](https://github.com/LagoVista/docs/blob/09282021WIP/Firmware/PlatformIO_Documentation/FirmwareExamples/images/dht11-22.PNG)

## Link
> The below link is the source for the code.\
> [ADC](https://github.com/softwarelogistics/FirmwareExamples/tree/main/ADC)
