# Implementation Overview

1. Device Types - It all starts with devices, without Devices you can't have IoT, so the first step is to define the devices 
that you will want to process messages from.  This is simply defining a model number and other basic information about the device

1. Define Message Types - Devices communicate with the servers by sending and receiving Messages.  You should define all messages
that you want your application to send and receive.  As part of this, you will define the format that your message will use, 
examples of this are things like JSON, XML, Binary, Delimited and so on.  Next you'll define the fields that make up your messages
as well as how those fields should be extracted or parsed.  You can even create Verifiers to check your parsers without even having
your device send messages.

1. Device Workflows - Getting and storing device data is an important part of what IoT App Studio lets you do, but the real
value is doing something with data.  You can use a Graphical user interface to map processes and check conditions using the 
data contained in messages from your device.  Workflows have things like Inputs, Attributes, Actions, State Machines and Output 
Commands to send data back to your device.  Workflows are reusable compoments that you can use in many different device
configurations.

1. Pipeline Modules - To support ultimate flexibility, you will chain together a set of pipeline modules that will act on
the device messages as they are received.  A typical chain would be

    1. Sentinel - Performs Security Checks
    1. Input Translator - Uses the Message Definitions you created to extract fields
    1. Workflow - Perform Device Workflows on your message
    1. Output Translator - Take the output from the workflow and convert it to a message to be sent to the device
    1. Transmitter - Communicate back to the device with output messages
    
1. Device Configuration - To pull all of the above compoments together you will create a Device Configuration. A Device Configuration 
consists of a collection of routes.  Routes are used to map an incoming message to how it will be processed.  As a messaage from a device
is identified, it will look up
    

