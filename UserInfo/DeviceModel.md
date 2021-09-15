---
title: Device Model
keywords: device, devicetypes, deviceconfiguration

status: new
created: 20210903
updated: 20210903
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Notes: How should Firmware be referenced in here?  Link?  Or include on page?  Also Communications Protocols
---
[Home](../Index.md) > [User Information](./Index.md)

# Device Model

## Definition

The Device Model is a piece of hardware that contains a unique set of sensors, actuators, and control boards whose data is processed in a specific manner. A Device Model may contain a number of different [Devices](./Glosssary/Devices) that all function in fundamentally the same manner.

<br>

## Example

When *Plymouth Manufactoring* purchased their Conveyor belt, they had a choice between two Device Models.  The Standard Device Model had an AC motor driven belt that monitored the bearings' temperature through an IoT platform.  The Elite Device Model had a DC motor driven belt, was made of stronger materials, and monitored both the bearings' temperatures and weight load through an IoT platform.  Both of these Device Models use the same Device Configuration.

Device Models may also be thought of in terms of car models.  Each model of car is different in the way it is constructed.  Some are larger, some have leather seats, some are equipt with GPS and WiFi.  No matter how they are built, they perform in basically the same manner to get you from point A to point B.

<br>
<br>
<br>

<br>

___

# Parts of a Device Model 

- ### ***Name***
    Assign a name to your Deployment Instance

<br>


- ### ***Key***

    Assign a short word or phrase that will be used to refer to your Deployment Instance

<br>

- ### **Model Number**

    A unique series of letters and/or numbers assigned to each device

<br>

- ### **Default Device Configuration**

    A set of modules that contain instructions on how [Messages](./Glossary/Message.md) from a [Device](./Glossary/Device.md) are to be handled and stored in the Cloud. A Device Configuration is available for reuse in more than one [Device Model](./Glossary/DeviceModel.md).

<br>

- ### **Manufacturer**

    Information may be added about who built the device.

<br>

- ### **Description**
    A brief description of the Device Model.

<br>

- ### **Resources**
    Documents, web site links and others resources that are associated with the device.  Resources can be uploaded and  made available to reference when servicing or maintaining devices.  Resources added and selected from media libraries and can be shared across different device types. 

<br>

- ### **Bill of Material**

    A Bill of Material can be constructed to identify the parts that make up the device.  

<br>

- ### **Associated Equipment**
   Standard tools associated with the Device Type.

<br>
<br>
<br>

___
# Communications Protocols

now need to define how those messages will be sent or the communications protocol that will be used.  The communications protocol is a technology standard that is used to figure out how to pass the messages over the internet.  You can think of the communication protocol as the container in which your messages will get delivered, similar to sending a message with traditional physical mail or via email.  Each communications protocol has both pros and cons and features that make it better suited for different environments and requirements.     NuvIoT supports all of these protocols as well as many additional ones.    

### ***HTTP and HTTPS***
A common and easy to understand protocol is HTTP and its secure version HTTPS this is the protocol that is used with browsers to request web page, but can also be used to send data from the Smart Litter Box devices. HTTP is better suited for one-way communications where the device only needs to send messages to the server

### ***Message Queue***
The other type of common communications protocol is using a message queue.  The most common types of message queue protocols are MQTT a relatively simple message queue protocol as well that can easily run on any microcontroller and AMQP a more advanced message queue protocol.MQTT and AMQP supports two-way communications where messages can be sent in both directions.send messages from the device to the server and from the server back to the device.  keep costs down and use a relatively inexpensive microcontroller so they wanted to use a communications protocol that would be easy to implement in firmware that may not have a lot of processing capability or ROM to handle larger programs so they decided to go with MQTT
<br>
<br>
<br>




___
# Getting Started with Firmware




___
# Sending and Receiving Messages
Now that we have defined the messages that get sent back and forth, we now need to define how those messages will be sent and received.  First let us discuss on the messages will be sent from the device, this will be done in the firmware.  

<br>
<br>
<br>

___
# NuvIoT Firmware Libraries
## Connecting to the Internet

The first step in sending and receiving messages is to get the firmware to communicate with the internet.  To do this you will need to decide on how your hardware will connect, both the general purpose and production versions of NuvIoT hardware support using both Cellular and WIFI to connect to the internet,  

The NuvIoT firmware library makes it easy to connect to either WIFI or cellular using the NuvIoT companion Device Manager application that can be downloaded for iOS, Android or Windows.  In addition, the core features that are available to the mobile applications are available in a software development kit (SDK) so you can create your own customized mobile apps.  You can check out this example and video of how the Smart Litter Box implemented both Cellular and WIFI communications using NuvIoT hardware and firmware libraries.  

### ***Cellular***
Cellular connectivity is simpler to deploy, basically plug it in and it connects, you won’t need to find a local WIFI hotspot and configure it with its network name (usually SSID) and password.  Also, a benefit to using Cellular is if the connection information changes, or the local WIFI goes down, your connection will still be established.  The downside to Cellular is there is additional cost for the hardware and a minimal cost each month to keep the connection online.  Additionally, you pay for each byte that the devices will send, so if the devices need to send a lot of data this can get expensive. 
### ***WiFi***

<br>
<br>
<br>

### ***Sending Messages from Firmware***
Messages are sent from our IoT device, this means that software that sends these messages will need to be created in the firmware, NuvIoT provides a set of libraries that can be added to your custom firmware to make tasks like these much easier.  These libraries can be included in PlatformIO or as a standard Arduino library and are written in C.  The firmware needs to include the standard NuvIoT header file NuvIoT.h if it does you will have access to a method mqttPublish that takes as arguments a string that represents the topic as well as an optional payload.  The topic is a simple string separated by forward slashes / that contain information to let the server know how to process the message.
The topics that will be creates for Smart Litter Box messages will need to include the message id as defined for the Smart Litter Box project as well as a unique device id to let the server know which device has sent the message.  There is a server-side object that you created called a Planner that we will discuss in more detail a little later that will know how to extract the device and message id from your messages.  To work with the Planner we will be using, the format of our topic should be similar to msg/{deviceid}/{messageid}.  If our unique device id that is assigned to one of the first prototype units is slb001 and it sends the message enter to represent the cat entering the litter box, our topic would be msg/slb001/enter.
The line of code that will be used to ultimately send the message to the server will be:
messagePublish(“msg/slb001/enter”);
In this case we are hard-coding the device id, which is slb001, as the application running on our microcontroller gets a little more advanced, we will need to let the device id be configured, but this will work to get things started.

### ***Configuring Communications***
To be able to communicate with the server the firmware needs to know how to connect to the internet as well as connect with servers.  As with sending messages over MQTT, there are also libraries that can be used to help configure communications.  These libraries are located at https://github.com/softwarelogistics/nuviot and can be added to your Arduino project with the instructions on that GitHub repository.  The communications library within NuvIoT can be configured to use either WIFI or Cellular, this configuration can be done over BlueTooth or a Serial Console by sending a JSON file that contains information about how the device should connect.  To send the configuration you need to send the header SYSCONFIG-RECV-START\n followed by the newline character or hex 0x0A, this will put the device into a mode that will expect a JSON string that will contain the complete set of parameters that will be used to configure communications.  To send the JSON you need to send it in chunks to ensure we don’t overflow the buffers on the devices.  This can be done by breaking the JSON that contains the parameters into a set of strings that are each 100 characters long, it will then send the header SYSCONFIG-RECV:[BLOCKIDX],[CALC-CRC],[JSON]\n which is also terminated with a newline character.  The [BLOCKIDX] and [CALC-CRC] are both two-digit ASCII representation of the hex numbers for those values.  The final block will likely not be 100 characters.  The CRC is calculated as an 8-bit unsigned integer where the ASCII representation of each character in the message is added.  After the last JSON block is sent you need to send SYSCONFIG-RECV-END\n to signify that all of the JSON representing the configuration has been sent and the values should be written to EEPROM.  The following source code shows how the algorithm can be implemented in C# 
        async Task WriteProfileAsync()
        {
            BusyMessage = "Writing Configuration.";
            IsBusy = true;

            await SendAsync("SYSCONFIG-RECV-START\n");
            var chunkSize = 100;
            var json = JsonConvert.SerializeObject(Config);
            var remaining = json.Length;
            _sendIndex = 0;

            var retryCount = 0;

            while (remaining > 0)
            {
                var start = _sendIndex * 100;
                var end = Math.Min((start + chunkSize), json.Length);
                var len = Math.Min(chunkSize, json.Length - start);
                remaining = json.Length - end;
                var jsonChunk = json.Substring(_sendIndex * 100, len);
                byte crc = 0x00;
                foreach (var ch in jsonChunk.ToCharArray())
                {
                    crc += (byte)ch;
                }

                _recvSemephor = new System.Threading.SemaphoreSlim(0);
                await SendAsync($"SYSCONFIG-RECV:{_sendIndex:x2},{crc:x2},{jsonChunk}\n");
                if (await _recvSemephor.WaitAsync(3000))
                {
                    Debug.WriteLine("CONFIRMED: " + _sendIndex);
                    _sendIndex++;
                }
                else
                {
                    Debug.WriteLine("TIMEOUT: " + _sendIndex);

                    retryCount++;
                }
            }

            await SendAsync("SYSCONFIG-RECV-END\n");

            IsBusy = false;
        }	
The following represents the JSON that can be sent.
Field Name	Field Type	JSON Name	Description
Device Id	string	deviceId	The unique device id that should be sent to the server with each communication.
WIFI Enabled	bool	wifiEnabled	Device should communicate via WiFi
Cellular Enabled	bool	cellEnabled	Device should communicate via Cellular connection
GPS Enabled	bool	gpsEnabled	GPS Should be Enabled
Baud	Long	baud	Baud rate to communicate with cellular modem or communications device
WIFI SSID	string	wifissid	Name of the SSID or Access Point that should be used to connect WiFi
WIFI Password	string	wifipwd	Password that can be used to connect to the WiFi access point
Server Host Name	string 	srvrHostName	DNS Host Name of the server that the device will establish a connection to send data
Commissioned	bool	commissioned	Can be set to true once all the configuration settings have been completed and the device is ready to connect to the server.
Anonymous Connection	bool	anonymous	When connecting to the server, should the device authenticate or can it connect anonymously 
TLS	bool	tls	Should TLS or Transport Enabled Security be enabled for the server connection
Connection Type	string	connectionType	Connection Type is a free form field that can be used to select a particular type of transport such as MQTT or HTTP.
Server User Id	string	srvrUid	If the connection isn’t anonymous, the user id that should be used to authenticate
Server Password	string	srvrPwd	If the connection isn’t anonymous, the password that should be used to authenticate
Ping Rate	long	pingRate	Number of seconds between the device pinging the server to let the server know that it is still connected.
Message Send Rate	long	sendUpdateRate	Number of seconds between the device sending message updates to the server (must be implemented in your custom firmware but provides a parameter that can be used)
GPS Update Rate	long	gpsUpdateRate	Number of seconds between sending GPS updates to the server

You can easily configure these parameters of your device by using the NuvIoT IoT Device Manager application.  This application is also open source so you can use it as a starting point for building your own custom application.  To use the NuvIoT IoT Device Manager you need to establish a Bluetooth connection to your device, once you do that you need to find the device within the Device Repository and pair your IoT Device Hardware with NuvIoT device.  After you do that, you can simply click on Provision from the Device Details page and set the parameters required for your implementation.  You can watch this video to see this in action [INSERT VIDEO HERE].  
Once you have successfully provisioned your device all you need to do is call commonLoop() from your main loop and it will make sure your device remains connected. 
### ***Standard Device Connectivity***
[TO BE ADDED AFTER IT IS CREATED IN THE WEB PORTAL]
### ***Sending Decimal Arrays***
[TO BE ADDED]
### ***Standard NuvIoT Messages***
One of the primary design philosophies behind NuvIoT is that since it is generally easier to make changes on the server, then to the firmware running on your devices, you can customize NuvIoT to work with your devices via configuration rather then having to customize your firmware via programming to work with NuvIoT.   However, there are some special message types that by default NuvIoT knows how to handle that you can implement in your firmware to help make your IoT application completer and more reliable.  These messages are generally things that you may not need to know you should implement in your firmware but are generally considered good practice.  NuvIoT expects these messages to be in a specific format, however if you have a custom format, don’t worry you can always add a customized message handler and implement the same sort of things within your scripts.  The following are a list of specialized handlers for message that are provided by default to any IoT application instance.
### ***Standard Messages Topics/Paths***
For the server to detect that a message should be handled as a system level message the topic must start with the following text:
nuviot/srvr/dvcsrvc or /nuviot/srvr/dvcsrvc 
and a path must start with 
/nuviot/srvr/dvcsrvc
These are reserved to be handled by the system and any customized messages that you create must not start with these values or they will be ignored.
For these messages to be handled by NuvIoT, there must be a minimum of 5 segments in the topic or path where the 4th segment must be the device id, and the 5th segment must be the message type.  Therefore, a typical topic or path may look like
/nuviot/srvr/dvcsrvc/dev001/state
Where dev001 is the device id and state is the type of message that will be processed by NuvIoT.
### ***Message Body Format***
The format of the payload of the message that is extracted from the body of the message is generally a set of comma-delimited key value pairs unless otherwise defined.  The keys that are extracted from the message body are dependent on the type of message as defined by the topic or path.  An example of the Message Body Format is:
int-variable1=5150,readonly-firmwareVersion=1.54
The key on these messages consists of two parts, this first is the data type and the second is the actual name of the field. In some cases the fields data type will be read-only which represents data that can not be changed.
Standard NuvIoT message from the device
### ***State***
The state type messages send specific values that will be used to update properties on the device.  As mentioned previously, State type messages expect a payload that consists of a comma delimited array of key value pairs, the key of each item corresponds to a property on the device as defined in its device configuration.  The key that is defined on the property of the device configuration must match the key that is sent within the key value pairs.  There are two properties that are read-only these are firmwareSku and firmwareVersion.  The properties should be sent anytime the device-twins state is queried as they will be used to detect if firmware updates are available or should be performed.  Any additional properties will automatically update and overwrite the values on the device if they are different.  The state type messages are used to ensure the properties as indicated on the server match that on the device.  If the properties are the same their values will not be updated.
### ***Querying Device State***
The Device State for the standard NuvIoT message can either be sent from the server to the device or sent from the device to update the properties of the device on the server which is sometimes called a Device Twin.  If the Device subscribes to receive messages from the server, the server can send a message to the device that will instruct it to send those values to the server.  The device message that will be received that will initiate sending of the device state will be:
nuviot/dvcsrvc/[DEVICEID]/properties
The device should subscribe to the topic or look for messages with the following path:
nuviot/dvcsrvc/[DEVICEID]/#
If the device is using the standard NuvIoT firmware this is automatically handled.
### ***Error Messages***
When defining a Device Configuration, error codes can be created.  If a device detects a condition that can be considered an error a standard message can be sent to the server to generate an error and perform appropriate action.  Errors can be raised, as well as cleared.  When an error is raised from the device, the error will be generated, when an error is cleared from the device it removes the error from currently being active on the device.  The behavior of the error will be determined by path or topic, the format used to manage errors are:
### ***Raising an Error Condition***
/nuviot/srvr/dvcsrvc/[DEVICEID]/err/raise
### ***Clearing an Error Condition***
/nuviot/srvr/dvcsrvc/[DEVICEID]/err/clear
### ***Error Details***
Most of the information that describes what happened to generate the error is present within the error message itself, however there may be certain conditions or other details that provide specific information about the error, an example of this is an Error Code was setup to generate an error when a temperature goes above a certain threshold, that defines what the error is, when the error is generated it might be helpful to know the specific temperature, that information can be sent as part of the payload of the message.  Any content associated with the payload of the error message when it is being generated or cleared will be added to Additional Details of that error report.

<br>
<br>
<br>

### ***I/O Config***
As described in a previous section the Input/Output configuration or I/O Config will provide settings that can be used by the firmware to more easily configure the sensors that are attached to the device.  It is possible to send to an I/O Config from the server down to the device but it may also be helpful view the current configuration as it exists in the permanent storage on the device.  There are a total of 32 I/O configuration values that are sent between the device and the server.  Eight of these are for the ADC Configuration and Eight of these are for the GPIO Configuration, for each one of those types of configuration, two values are sent, the first is an enumeration that specifies how the port should be configured and the second is a scaler value that should be applied on the device.  The format of the payload for an I/O configuration packet is just a set of 32 comma delimited numbers alternating between how the port should be used and the calibration factor.  Here is a basic example of this
1,1.0,2,0.53,0,1.0….0,1.0,0.1.0
In this abbreviated example 1,1.0 in the first two number represent the first ADC port should be configured with 1 which represents a simple ADC conversion, the 1.0 represents scaling that value by 1.0.  The next two numbers 2 and 0.53 represent that the second ADC port should be connected to a Current Transformer and use a scaler value of 0.53.  The third two numbers 0, 1.0 state that nothing is connected to the third port.  This pattern continues for the rest of the ADC and GPIO ports.  Messages containing I/O configurations must always have exactly 32 values.  All this is handled for you automatically if you use the standard NuvIoT firmware libraries. 

<br>
<br>
<br>

### ***Online***
It is important to know that if a device should be online 24/7 we can make sure that device is constantly connected.  A message can be sent to the server when the device establishes a connection either for the first time or if it reconnects.
The format of the topic or path that should be sent to notify that the device has connected is:
nuviot/srvr/dvcsrvc/[DEVICEID]/online
Within the body or payload of the message, it is usually advisable to send the firmwareSku and firmwareVersion along with the signal strength as rssi if available and if the device is connecting because it is restarting or if the connection was dropped in a reconnect property. 
An example payload with all these parameters might look like:
firmwareSku=sensorapp,firmwareVersion=1.32.3,rssi=12,reconnect=false
If additional properties for the device that were setup in the device configuration were sent to the device, they can also be updated on the device.

<br>
<br>
<br>

### ***Standard NuvIoT messages to the device***
Just as some message types are sent from the device that NuvIoT automatically knows how to process, some messages are sent to the device that make it easier to work with firmware in the application. The following are a list of messages that are handled by the standard NuvIoT firmware or you can handle in your own firmware to make things easier to manage in the remote devices.
### ***Synchronizing Device Twin***
The concept of a Device Twin allows for a representation of the properties and state of the device on the server.
The Device Twin on the server can be updated from values sent from the device.  This makes it easy to see how the device is configured.  If the configuration values are updated on the server, they can be synchronized to the device.  This is extremely powerful in that the device behavior can be changed remotely without having to physically be at the same location where the device is installed.
### ***Synchronizing/Requesting Properties***
In most cases the software both on the device and on the server will remain synchronized by ensuring that properties that are updated on one end are automatically sent to the other end.  It is probably best to establish either the device or the server as “Truth” that is to say that if there is ever a conflict and the configuration no longer match one side will be considered accurate.  In most cases since device is actually using these values it makes sense to establish the Device side of the configuration as that “Truth”.  If you are using the standard NuvIoT libraries or have implemented the handler in your custom firmware, sending the topic that contains the word properties will request that the device send its complete list of properties to the server.  The format of the message that will automatically be sent from the server to the device when the server requests to send the properties is:
nuviot/dvcsrvc/[DEVICEID]/properties
### ***Sending a Property***
It is possible to update the device configuration settings from changes made on the server.
### ***Restarting the Device***
If the device is not functioning properly and the device is using the standard firmware or handlers have been added to custom firmware, it can be restarted remotely.  To restart the device remotely the topic that will be sent will look like:
nuviot/dvcsrvc/[DEVICEID]/restart
### ***Updating the Firmware***
NuvIoT provides the capability and services to be able to update the firmware running on the device remotely.  For the device to be updated, it must implement a handler that will download the firmware and apply it to the device.  See the section on updating firmware in this document, however the topic that will be sent to initiate this process will look as follows
nuviot/dvcsrvc/[DEVICEID]/update/[DFUID]
The value as provided in [DFUID] will identify the file that contains the new firmware image that the device will need to download from:
https://api.nuviot.com/api/firmware/download/[DFUID]
As the firmware is downloaded it should send messages to the server to denote progress.  See the Device Firmware Update section for more details.

<br>
<br>
<br>

### ***Sensors and Actuators***
### ***I/O Configurations***
Up until now, we have defined how to get our hardware to connect and communicate with the server.  The Sensors and Actuators connected to the hardware will give the Smart Litter Box things that it can talk about.  The next section will go over all the standard Sensors and Actuators that can easily be incorporated into the hardware with minimal custom programming using the concept of configuring Inputs and Outputs using something called the NuvIoT I/O Configuration.  The I/O configuration contains two sections, one for configuring simple Inputs and Outputs, and the other are used to configure ADC or measure incoming voltages.  Each of these sections has a number of ports that correspond with ports or connectors on the hardware where the actual sensors can be connected.  With each section you have the ability to configure what type of signal or sensor is connected to each port which will be discussed in the following section.  
### ***Labels***
The I/O configuration also allows you to specify a label that can be associated with the port as well as a name that can be used to identify the data as it is sent with a message.  The label associated with the port can be used to display a formatted output of the value through an application or web site.
### ***Names***
An example of the using the name might be if a temperature sensor was connected on port one of the hardware, the name might be temperature.  The NuvIoT firmware could then automatically create a message, in our sample using JSON that would look like {‘temperature’:98.6}.  The final setting available to the I/O configuration is a value that can be used to scale or calibrate the offset and establish a zero value.  
### ***Calibration Values***
In most cases the output of the sensor will not be value that can be used directly.  The value provided by the sensor will need to be calibrated and potentially have a zero-value applied.  
An example of this might be a sensor that measures weight, the Smart Litter Box team want’s to eventually weight the cat as it goes into the litter box, but now we really are getting ahead of ourselves.  Even though this is a feature that will be added into a future version, Walk discusses with Rebecca how this would be implemented to get an idea of how hard this would be implement in NuvIoT.   The raw output from the sensor might be a count that represents how much voltage the weight-sensor or load cell is measuring.  For our example, we’ll say if there is no load on the litter box, the count returned from the sensor would be around 10423, this would be established as our zero value.  After doing a little test, and looking at the raw values, Walt learned that for each point that was applied to the load cell, the count increased by 175.  So that means that if an 8.5-pound cat were to enter the litter box, the count returned would be 11910.  Displaying that the cat weighs 11910 counts is probably less then helpful.  To turn the 11910 counts into 8.5, first the offset of when the empty litter box needs to be subtracted from the counts, we knew that the counts as sent from the litter box was 10423, that means that 11910 – 10423 = 1487, which represents the impact that the cat had on the load cell which is based on how much the cat weighed.  Since each pound was represented by 175 counts, the calibration factor would be 8.5 / 175 or 0.04857, that means we can multiple the difference between the total counts minus the offset by the calibration factor and get 8.5.  The I/O configuration allows us to store both the zero offset and calibration factor to both reduce the amount of custom programming that is necessary and make it easy to convert raw sensor output to meaning values.
### ***Hardware Ports***
The Smart Litter Box team chose to use NuvIoT’s standard hardware platform, initially the GPIO Board for rapid prototyping and then the production version for the final product.  These boards are based on the ESP32 microcontroller and have the capability to have 8 general purpose ports that can be used for basic input and output, these can either be used to detect if a button or switch has been pressed or toggled, they can also be used to set an output to turn things on or off.  If you are using your own custom hardware or microcontroller, you can still leverage all the libraries and services surrounding the I/O configurations by supplying a custom version of PINS.h, this maps the pins and how the inputs and outputs work on specific hardware.
For each of the general-purpose inputs and puts and ADC’s they can be configured to support different types of sensors, the following section will discuss how each of these ports can be configured.
### ***ADC Configurations***
The standard NuvIoT hardware uses and ADS1115 Sigma Delta analog to digital converter, this is connected to the ESP32 with the I2C bus.  The ESP32 also has a built in ADC converter that can also be used with custom software.
### ***None***
Nothing is connected to the ADC converter; the data points won’t be collected and nothing will be sent to the cloud.
### ***Voltages***
Raw voltage will be observed from the ADC converter, an offset can be removed and the value can be scaled via a linear function with calibration factor
### ***Current Transformer***
There are many uses to connecting a CT or Current Transformer to the ADC port.  A/C Current can be monitored which can be used to determine if equipment is on/off or how hard the equipment is working.  If this option is selected there is an algorithm that is ran on the device that collects samples over one cycle and determines the current that is being consumed.  The calibration factor can either be used to turn that into amps or even watts, or can be used to scale that value into another output value that is specific to the installation based on a calibration.
### ***General Purpose Inputs/Outputs***
 The ESP32 has a number of pins that can be used for general purpose input and outputs these can be configured to perform a number of functions.
### ***Input***
A GPIO pin can be configured to monitor the input level of an input on a pin to determine if it is on or off.   This state can then be monitored with custom software or can be setup so that when it toggles from on to off, or from off to on it will send a message to the NuvIoT server.	
### ***Output*** 
The pin can also be configured as an output this is useful when wanting to control an actuator or some other hardware device that can be triggered by software.  The output pin will be configured by the I/O configuration, however currently toggling the pin state can only be done within custom software.
### ***Pulse Counter***
In a number of cases as input levels change from low to high and then back again that represents a pulse.  That pulse might be generated by a sensor that will have its output configured to send pulses, so counting those pulses would determine sensor output.  One of the options for I/O config is to set the option to measure pulses, when doing so, the I/O will make the number of pulses per second available as an output, the scaling factor can then be used to turn that into useful information.
### ***Temperature Probes***
The NuvIoT libraries have native support for 3 of the most common digital temperature probes (you can use the ADC for analog probes).  The type of probes that are supported are the DHT11, DHT22 which will output both temperature and humidity and the DBS18 which only senses temperature.
### ***Customizing Board Suppot***
The NuvIoT libraries provide access to a number of functions that make it easier to connect up sensors and configure how those sensors should be used to send data to NuvIoT.  To make these libraries work with different versions of hardware and board layouts, the file ConfigPins.h is used to map specific functions to different hardware configurations and the pins on the CPU that will supply those functions.  Essentially this file can be used to adapt custom boards to common functionality within the provided libraries.  This includes things such as mapping the GPIO or General Purpose I/O pins 1-8, the ADC or Analog to Digital Converter channels.  It also lets you configure if your board has a display on it, or supports relays and if so which I2C port should support the display which pins will be used to drive the relays.  Finally, the ConfigPins.h file identifies which serial ports should be used to communicate with the I/O console and which ones should be used for the modem (if present).
If you plan to provide support for custom hardware, it will probably make the most sense to fork the repository and provide your own custom implementation since there are likely other changes you will need to make to make the libraries work with your custom hardware.
### ***Using I/O configuration***
There are two ways that the I/O configurations can be used, the first is to manually configure and monitor those in custom firmware running on the ESP32 and the second is through the Device Manager application to configure the I/O to automatically look at values on the ports and send those values to the server.
### ***Manual Configuration***
If you are just getting started with firmware development, it might be easier to just manually configure how your software will access sensors.  This can be done by using Arduino library provided
### ***Device Manager Configuration***
  [SECTION TO BE ADDED AFTER SOFTWARE/FIRMWARE IS ADDED]



