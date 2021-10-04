Title: GPIO Inputs with and without Probes
Keywords: 

Status: WIP
Created: 20211004
Updated: 20211004
Createdby: RMD
Updatedby: RMD

Notes: This firmware example will compile locally.   But it is necessary to open the .ini file and change the nuviot library location.   In my case, I changed one line in the .ini file to 'lib_extra_dirs = C:\DEV\nuviot'.
---

# GPIO'S with and without Probes

## Overview
>GPIO's (General Purpose Inputs and Outputs) are a common and useful feature of any microcontroller.   
>They are capable as acting as any simple 2 state input which would check the status or logic condition of a switch.   It is either a '0' or a '1'.
>They can also act as an output controling another device or even activating an indicator such as an LED.

## Description
>In this Example, 
>

## Example
>
>> 


## Typical wiring with the NuvIoT sensor board.
> Below is an image of the possible ways to wire either a DHT11 or a DHT22 to the NuvIoT Sensor Board.   
![Console Output](https://github.com/LagoVista/docs/blob/09282021WIP/Firmware/PlatformIO_Documentation/FirmwareExamples/images/dht11-22.PNG)

## Link
> The below link is the source for the code.\
> [GPIO_Inputs](https://github.com/softwarelogistics/FirmwareExamples/tree/main/GPIO_Inputs)