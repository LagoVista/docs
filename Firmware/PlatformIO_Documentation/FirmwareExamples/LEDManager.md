---
Title: LEDManager

Status: In Process
Created: 20210928
Updated: 20210928
Createdby: Sclurb
Updatedby: Sclurb

Notes: This firmware example will compile locally.   But it is necessary to open the .ini file and change the nuviot library location.   In my case, I changed one line in the .ini file to 'lib_extra_dirs = C:\DEV\nuviot'.
---

# LEDManager

## Overview
>Many times when you are building an embedded application, you need to provide feedback to a user as to how the program is running.\ 
>In most cases, the firmware does not have a user interface but may have a few LEDs.  
>This example will show you how to turn on and off the LEDS as we as flash them at different rates to signify different states of your application.  
>This example also shows how to use the onboard buzzer if your device has one. 

## Description
>This Example blinks LED's on via the ESP32's IO.
>You can use [LagoVista.SerialPortApp.exe](link to download app) to send commands back to the board to effect changes in the blink rate.
>A local method: void cmdCallback(String cmd) is used to send that data.   


## Example
> In this example, there are three separate variables controlling three separate flash rates.
> 1. **appBeatRate** will affect how often that K5 (relay-5) will turn off and on.   
> This can control a piezo electric beeper attached to this relay.
> 2. **appOnlineRate** controls how often the onboard blue LED will turn on and off.
> 3. **appErrorRate** controls how often the red LED blinks.   The red LED is the LED used to display an 'error' codition.

>1 is slowest and 10 is fastest

### Use:
>If you were to use this example in a new project, you will be able to stop/start the blinking of an LED by changing the value of any of the variables mentioned above.
>You can even effect change by sending commands back with the 'console.registerCallback(cmdCallback)' function shown in the example.

## Link
> The below link is the source for the code.\
> [LEDManager](https://github.com/softwarelogistics/FirmwareExamples/tree/main/LEDManager)


