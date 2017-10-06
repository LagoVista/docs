---
title: REST/HTTP Simulator
keywords: simulator, windows, rest, http

created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)

# REST/HTTP Simulator

### Simulator Settings

**Name** (*Required*)    
Name of the Simulator

**Key** (*Required*)    
A [unique key](../Topics/Keys.md) to identify the message

**Transport** (*Required*)    
For a REST simulator this should be `REST (http)` or `REST (https)` for SSL

**Default End Point** (*Required*)  
The dns name or IP address that will be used to make the call.  Note: this does **not include** the protocol such as http:// or https://

**Default Port** (*Required*)  
The port to send http request, this is usually `80` for REST (http) and `443` for REST (https) but is not required to be so.

**Device Id**  
The Device ID that will be used to send along with each message

**Access Key**  
If your device requires authentication, you can specify and access key, this could also be a password.  This will be available for
tag replacement.  You can also add any authentication credentials to the each message as well.

**Description**  
Free form text use to provide notes for your simulator

### Message Setting

**Name**  
Name of the Message

**Key**  
A [unique key](../Topics/Keys.md) to identify the message

**HTTP Verb**  
`GET, POST, PUT and DELETE`

**Text**  
Add any content that will be sent as the body of the message [allows for tag replacement](DynamicFields.md)

**Path and Query String**
Add the path and query string that will be sent to the server [allows for tag replacement](DynamicFields.md).  Note the Path should be in the format  
`/mypath/~deviceid~?field=value`

Note that it should have `/` as the first value.

#### Message Headers
Add key value pairs that will be sent with the message  
* **Name** (*Required*) - Name of the Field use to identify
* **Key** (*Required*) - Unique key for the header (can be same as header name)
* **Header Name** (*Required*) - Name of the Header Field to be sent to the server
* **Value** (*Required*) - Value to be sent to the server  [allows for tag replacement](DynamicFields.md)
* **Description** - Simple text to help document the purpose of the field

#### Dynamic Attributes
For more information, please see the [Dynamic Fields](DynamicFields.md) section.