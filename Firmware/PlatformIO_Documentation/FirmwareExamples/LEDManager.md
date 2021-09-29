---
Title: LEDManager
Keywords: 

Status: complete
Created: 20210928
Updated: 20210928
Createdby: RMD
Updatedby: RMD

Notes: This firmware example will compile locally.   But it is necessary to open the .ini file and change the nuviot library location.   In my case, I changed one line in the .ini file to 'lib_extra_dirs = C:\DEV\nuviot'.
---

# LEDManager

## Description
>This Example blinks LED's on via the ESP32's IO.
>You can use LagoVista.SerialPortApp.exe to send commands back to the board to effect changes in the blink rate.
>A local method: void cmdCallback(String cmd) is used to send that data.   


## Example
> In this example, there are three separate variables controlling three separate flash rates.
> 1. **appBeatRate** will affect how often that K5 (relay-5) will turn off and on.   
> This can control a piezo electric beeper attached to this relay.
> 2. **appOnlineRate** controls how often the onboard blue LED will turn on and off.
> 3. **appErrorRate** controls how often the red LED blinks.   The red LED is the LED used to display an 'error' codition.
> 

## Link
> The below link is the source for the code.\
> [LEDManager](https://github.com/softwarelogistics/FirmwareExamples/tree/main/LEDManager)


