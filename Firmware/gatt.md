---
title: GATT Profile Specification
keywords: ble, bluetooth, configuration, firmware

status: inprocess
created: 20210707
updated: 20210707
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# GATT Specification

The standard NuvIoT firmware is configured as a BLE Peripheral with one service and 8 Characteristics that can be used to get information, configure or monitor the device.

## Service
The service UUID is `d804b639-6ce7-4e80-9f8a-ce0f699085eb`.

## Characteristics 
To simplify the implementation and reduce memory consumption within the standard firmware, each characteristic contains many properties.
The properties are delimited by a comma (,) this means that commas are not supported within the body of a configuration string.

When sending characteristics to the device,  some are optional that is to say if the field is empty it will be ignored.  Most devices that read only are not optional.

## State Characteristic
The UUID of the state characteristic is `d804b639-6ce7-5e81-9f8a-ce0f699085eb`.  This characteristic is read, write and notify.  The device will send notifications when connectivity or OTA state changes.

|Index |Name |Direction |Optional |Description |
--- | --- | --- | --- | --- 
|0 | Firmware SKU | Read-Only | False | SKU to identify the firmware |
|1 | Firmware Version | Read-Only | False | Version of the Firmware |
|2 | Hardware SKU | Read-Only | False | SKU to identify the board/hardware |
|3 | Hardware Revision | Read-Only | False | Revision of the Hardware |
|4 | Reboot | Write-Only | True | Central device sets this field to 1 to reboot the device |
|5 | Commissioned | Read/Write | True | 1 = Device commissioned and should connect and send data, 0 = Device not commissioned |
|6 | Internet Connectivity| Read-Only | False | 1 = Device connected to internet or private WAN, 0 = Device not connected|
|7 | Cloud/Server Connectivity| Read-Only | False | 1 = Device connected to remote cloud/server, 0 = Device not connected|
|8 | OTA State | Read/Write | True | Used to control flow of Over The Air (OTA) firmware updates |
|9 | OTA Parameter | Read/Write | True | Used to pass a parameter for the OTA firmware update state | 

## System Configuration
The UUID of the system configuration characteristics is `d804b639-6ce7-5e82-9f8a-ce0f699085eb`

|Index |Name |Direction |Optional |Description |
   --- | --- | --- | --- | --- 
|0 |Device Id |Read/Write |True |Used to uniquely identify the device within NuvIoT |
|1 |Device Auth Token |Write Only| True| Base64 Encoded authorization token that can be used to authorize the device to NuvIoT|
|2 |Enable Cellular Connection| Read/Write| True| 1=Enabled, 0=Disabled|
|3 |Enable WiFi Connection| Read/Write| True| 1=Enabled, 0=Disabled|
|4 |Perform Station Scan| Write-Only| True| Write 1 to this field to perform a station scan, the results will be returned via the console characteristics|
|5 |WiFi SSID | Read/Write| True| WiFi Station Identifier|
|6 |WiFi Password | Write Only| True | WiFi Password|
|7 |Server Host Name|Read/Write|True|The host name of the server that will listen for messages from this device|
|8 |Anonymous Server Connection|Read/Write|True|If this is set to 1, no credentials will be used to connect to the server, 0 will send credentials|
|9 |Server User Id|Read/Write|True|The user id to connect to the server if authorization is required|
|10 |Server Password|Write Only|True|The password to be used to connect to the server if authorization is required|
|11 |Ping Update Rate| Read/Write| True| Number of seconds between a ping message being sent from the device to NuvIoT (allows decimal numbers)|
|12 |Message Send Rate| Read/Write| True| Number of seconds between sending data from the device to NuvIoT (allows decimal numbers)|
|13 |GPS Enable| Read/Write| True| 1=Enabled, 0=Disabled|
|14 |GPS Send Rate| Read/Write| True| Number of seconds between sending data from the GPS to NuvIoT|
|15 |Sleep Enabled| Read/Write| True| Should the device go into a deep sleep mode to conserve battery power|
|16 |Sleep Interval| Read/Write| True| Number of seconds the device should sleep before waking up and sending data|

## General Purpose I/O Configuration (GPIO)
### _Not currently implemented, I/O configuration is done after the device is online via internet connectivity._

The UUID of the GPIO configuration is `d804b639-6ce7-5e83-9f8a-ce0f699085eb`, this characteristic has Read/Write properties.

This characteristic allows for remote configuration for up to 8 General Purpose I/O digital pins that may exist on the standard NuvIoT hardware.

Each of the ports has four values associated with it
1. Configuration
   * 0 = Not Used
   * 1 = Input
   * 2 = Output
   * 3 = Pulse Counter
   * 4 = DBS18 Temperature Sensor
   * 5 = DHT11 Temperature Sensor
   * 6 = DHT22 Temperature Sensor  
2. Zero - Used to subtract off a raw value from the reading prior to applying a scaler
3. Scaler - Scaler used to adjust the output value
4. Perform Zero (input Only) - Input Only, Write a zero to this field to capture zero

Since there are 8 individual ports, each characteristic will send 32 values peripheral.  Any characteristics sent from the peripheral to the central will always contain all the fields. when sending a configuration value from the central to the peripheral the first value will be 0-7 to identify the index of the port and the next 4 values will be as specified above.

It's not required to send across all 24 values, however it is required to send over configuration values in blocks of 4 to include each value

Examples of characteristics:
```
# Default configuration for I/O nothing enabled, 0 for the zero amount, 1 for the scaler and do not perform a zero
0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1

# Configure the second I/O port (zero index) as an output, 0 for zero, 1 for scaler to not set zero
1,2,0,1,0

# Configure the fourth (zero indexed) I/O port as an pulse counter, 300 for zero, 1.75 for scaler to not set zero
3,3,300,1.75,0

# Configure the fifth port (zero index) I/O port as a DBS18 temperature sensor 32.0 for the zero and 1 for the scaler
4,4,32.0,1,0
```

## Analog to Digital I/O Configuration (ADC)
### _Not currently implemented, I/O configuration is done after the device is online via internet connectivity._

The UUID of the ADC Configuration is `d804b639-6ce7-5e84-9f8a-ce0f699085eb`, this characteristic has Read/Write properties.

This characteristic allows for remote configuration for up to 8 analog to digital pins that may exist on the standard NuvIoT hardware.

Each of the ports has four values associated with it
1. Configuration
   * 0 = Not Used
   * 1 = Simple ADC
   * 2 = CT (Current Transformer)    
2. Zero - Used to subtract off a raw value from the reading prior to applying a scaler
3. Scaler - Scaler used to adjust the output value
4. Perform Zero (input Only) - Input Only, Write a zero to this field to capture zero

## GPIO Values
The UUID of the characteristic that will be used to send current GPIO values from the peripheral to the device is `d804b639-6ce7-5e85-9f8a-ce0f699085eb`.  This characteristic is notify only and will be sent as soon as the central connects to the device.

All 8 values from each of the channels will be sent even if they are not configured.  

## ADC Values
The UUID of the characteristic that will be used to send current ADC Scaled and Zeroed values from the peripheral to the device is `d804b639-6ce7-5e86-9f8a-ce0f699085eb`.  This characteristic is notify only and will be sent as soon as the central connects to the device.

All 8 values from each of the channels will be sent even if they are not configured.  

## Relay Control/Status
### _Not currently implemented, relay, control and status is done after the device is online via internet connectivity._
The UUID of the characteristics that will be used to check the status and control the current state of the relays (if equipped) is `d804b639-6ce7-5e87-9f87-ce0f699085eb`.  The data sent from the peripheral to the device is 8 values where 1 indicates the relay is on, 0 indicates the relay is off and -1 indicates the relay is not available.  To turn the relay on write a 1 to the corresponding index and 0 to turn it off.  If the value is left empty that relay will not be changed.

## Console
The UUID of the characteristics that will act as an input/output console to communicate with the peripheral is `d804b639-6ce7-5e88-9f88-ce0f699085eb`.  The properties on this characteristics are write/notify.  
