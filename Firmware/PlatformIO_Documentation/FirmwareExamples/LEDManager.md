---
title: LEDManager
keywords: 

status: complete
created: 20210928
updated: 20210928
createdby: RMD
updatedby: RMD

Notes: Yes This firmware example will compile locally.   It is necessary to open the .ini file and change the nuviot library location.
---
[Home](../Index.md) > [Glossary](./Index.md)

# LEDManager

## Definition
This Example blinks LED's on via the ESP32's IO.
<br>You can use LagoVista.SerialPortApp.exe to send commands back to the board to effect changes in the blink rate.
<br>A local method: void cmdCallback(String cmd) is used to send that data.   
<br>
<br>

## Example
*A Company* has one of these boards.   It will be posiible to send commands back through a simple serial app to change the blink rate of any of the onbaord LED's. 

## Link
<br>
[LEDManager](https://github.com/softwarelogistics/FirmwareExamples/tree/main/LEDManager)
<br>
<br>
<br>

