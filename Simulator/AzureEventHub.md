---
title: Azure Event Hub Simulator
keywords: simulator, windows, azureeventhub

status: readyforreview
created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)
# Azure Event Hub Simulator

### Simulator Settings


**Name**  
Name of the Simulator

**Key**  
A [unique key](../Topics/Keys.md) to identify the message

**Transport**  
For an Azure Event Hub simulator this should be `Azure Event Hub`

**Default End Point** (*Required*)  
The name of your event hub resource as created in Azure, this should only be the name not the full event hub url such as `myeventhub` not ~~`myeventhub.servicebus.windows.net`~~

**Hub Name** (*Required*)  
Name of the actual event hub where you will be publishing your messages.

**Device Id**  
The Device ID that will be used to send along with each message

**Access Key Name**  
Name of the Access Key for the provided SAS Policy that has `Send` privileges

**Access Key**  
Key that has `Send` privileges for the supplied **Access Key Name**

**Default Payload Type**  (*Required*)  
The default format of the payload you will send with each message, it can be either a simple string or [binary](BinaryContent.md)

**Description**  
Free form text use to provide notes for your simulator

### Message Setting

**Name**  
Name of the Message

**Key**  
A [unique key](../Topics/Keys.md) to identify the message

**Payload Type**  (*Required*)  
Either send a Text Message or a Binary message, in almost all cases this will be text.

**Append CR (0x0D)**  
If set the ascii character 0x0D will be appended to the message

**Append LF (0x0A)**  
If set the ascii character 0x0D will be appended to the message

**Note:** *Based on your Payload Type you can add either a text or binary messsage*

**Text**  
Add any content that will be sent as the body of the message [allows for tag replacement](DynamicFields.md)

-or-

**Binary**  
[Binary Content](BinaryContent.md) to be sent as a message

**Dynamic Attributes** (*For Text Paylaods Only*)  
For more information, please see the [Dynamic Fields](DynamicFields.md) section.