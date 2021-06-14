---
title: How do I?
keywords: help, topics, guides

status: inprocess
creationdate: 20170920
lastupdated: 20171105
description: Gives a set of questions and answers how to do specific tasks
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# How do I...

#### How do I get started?
A great place to get started is our [getting started](GettingStarted.md) guide.

#### How can I get support?
We have a number of support options including [documentation](https://support.nuviot.com/help), 
an [online forum](http://forum.nuviot.com) as well as a [ticketing](http://tickets.nuviot.com) system.
If none of those options work for you please [contact us](http://support.nuviot.com/contactus).

#### How can I get help building my application?
Please [contact us](http://nuviot.com/contactus?source=implementationpartner) to be put in 
touch with an implementation partner.

#### How do I host my application?
Applications built with NuvIoT are managed and hosted on a number of trusted cloud providers, 
deploying and hosting your application is automated as part of the system. If you need to host
your application, please [contact us](https://support.nuviot.com/contactus?source=edgehosting) to 
discuss options to install our NuvIoT runtime on your servers.

#### How do I get data into the system?
The entry point for data into the system is a [Listener](./PipelineModules/Listener.md). You define
how your listener works and the listener monitors a port, protocol or external source for [incoming 
messages](Messaging/IncomingMessages).

#### How do I listen for messages?
You will create a [listener](./PipelineModules/Listener.md) that will listen on a port,
protocol or connect to an external messaging queing source that will accept [incoming 
messages](Messaging/IncomingMessages).

#### How do I identify my devices?
You will need to pass an unique identifer as part of your message. As part of building
your application, you will create a [device id parser](./Messaging/Parsing/DeviceIdParsing.md) 
that will identify what part and how the device id should be extracted from your incoming messaage.

#### How do I identify my message?
In some case you will only have one type of message that you are listening for, if you have
multiple message types you will need to establish a message id and send that within your messagae. 
Once you have your message id you will need to add a [messag id parser](./Messaging/Parsing/MessageIdParsing.md)
that will identify what part and how the message id should be extracted from your incoming messaage.

#### How do I store data from my messages?
Once you create your [message definition](./Messaging/Index.md) you will have added a number
of fields that you expect in your message. Those fields are automatically stored from each message.
In addition you can create [attributes](./Workflows/Attributes.md) of your device that store
the most current value that was received in a message.

#### How do I handle different messages using different workflows?
After the [planner](./PipelineModules/Planner.md) identifies the 
[message id](./Messaging/Parsing/MessageIdParsing.md) it will use the
[device configuration](./Devices/DeviceConfigurations.md) to select a 
[route](./Routes/Route.md) which will specify the [pipeline modules](./PipelineModules/Index.md) that will
be used to process your message.

#### How do I specify what is contained in my incoming messages?
You build up a message definition. The [message definition](./Messaging/MessageFields.md) 
contains all the [fields](./Messaging/MessageFields.md) that make up your message. Once a
message has been identified by the [message id](./Messaging/Parsing/MessageIdParsing.md) the 
values of your message will be extracted and can be used in your workflow.

#### How do I build an IoT Application?
Check out our [overview](./Topics/Implementation.md) to get an idea of what's involved with building your application.

#### How do I test my application?
After you [deploy](./Deployment/Index.md) your application, we povide a [simulator](./Simulator/Index.md) 
to create messages you can send to your application.

#### How do I add my devices? 
Devices are stored in [device repositories](./Devices/DeviceRepositories.md), after you create
your repository you can add them through our IoT App Studio in the Device Repositories section
or you can add them with our [mobile app](./Information/MobileApps.md). If you have a large number
of devices you need to add, please [contact us](https://support.nuviot.com/contactus?source=importdevices)
to help you import your devices.

#### How do I secure my devices?
[Security](./Information/Security.md) is very critical part of any IoT platform. We have a 
[sentinel module](./PipelineModules/Sentinel.md) that every message must pass through before
we use any data that is passed in to our system.

#### How do I build my workflows? 
We provide a sophisticated [workflow engine](./PipelineModules/Workflow.md) where you can visualy configure how your messaages
are processed, we also provide a [state machine engine](./Workflows/StateMachines.md) to build state dependent 
behavior. In addition we provide a [javascript editor](./Scripting/Index.md) to build scripts. 

#### How do I integrate with other systems?
There are three primary strategies with integrating with other systems, the first is 
to listen for incoming messages on a port, protocol or external messaging system with
a [listener](./PipelineModules/Listener.md). The second is to send messages to an end
point or service from an [output command](./Workflows/OutputCommands.md) in your 
[workflow](./PipelineModules/Workflow.md) with a [transmitter](./PipelineModules/Transmitter.md).
The final way is to expose an [input command](./Workflows/InputCommands.md) as a REST service
from within your workflow.
