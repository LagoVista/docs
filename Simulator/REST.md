---
title: REST/HTTP Simulator
keywords: simulator, windows, rest, http

status: readyforapproval
created: 20171003
updated: 20171017
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# REST/HTTP Simulator

### Simulator Settings

1. Name (*Required*)    
Name of the Simulator

2. Key (*Required*)    
[Unique Key](../Topics/Keys.md) to identify the message

3. Transport (*Required*)    
For a REST simulator, use `REST (http)` or `REST (https)` for SSL

4. Default Endpoint (*Required*)  
DNS name or IP address that will be used to make the call     
**Note**: this does **not** include the protocol, such as http:// or https://.

5. Default Port (*Required*)  
Port to send HTTP request. This is usually `80` for REST (http) and `443` for REST (https), but that is not required.

6. Device ID  
Device ID that will be used to send along with each message.  The Device ID will be available for [Tag Replacement](StandardFields.md) in your message.

7. User Name  
User Name that will be available for you to use in [Tag Replacement](StandardFields.md) to provide authentication with your message.

8. Password  
Password that will be available for you to use in [Tag Replacement](StandardFields.md) to provide authentication with your message.

9. Access Key  
Access Key if your device requires authentication, this could also be a password.  This will be available for [Tag Replacement](StandardFields.md).  You can also add authentication credentials to each message.

10. Description    
Free-form text used to provide notes for your Simulator

### Message Settings

1. Name  
Name of the message

2. Key  
[Unique Key](../Topics/Keys.md) to identify the message

3. Content Type    
Content Type, if applicable, such as `application/json`.  If left blank, it will send the Content Type `text/plain`.

4. HTTP Verb    
`GET, POST, PUT` and `DELETE`

5. Text      
Content that will be sent as the body of the message. This will be available for [Tag Replacement](DynamicFields.md).

6. Path and Query String   
Path and Query String that will be sent to the server. This will be available for [Tag Replacement](DynamicFields.md).   

   **Note**: the Path should be in the following format, with `/` as the first value.   
   /mypath/~deviceid~?field=value 

#### Message Headers
Add Key Value pairs that will be sent with the message, including:   
* Name (*Required*) - Name of the field
* Key (*Required*) - Unique Key for the header.  This can be the same as Header Name.
* Header Name (*Required*) - Name of the Header Field to be sent to the server
* Value (*Required*) - Value to be sent to the server.  This will be available for [Tag Replacement](DynamicFields.md)
* Description - Simple text to help document the purpose of the field

#### Dynamic Attributes
For more information, please see the [Dynamic Fields](DynamicFields.md) section.
