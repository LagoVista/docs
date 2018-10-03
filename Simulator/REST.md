---
title: REST/HTTP Simulator
keywords: simulator, windows, rest, http

status: approved
created: 20171003
updated: 20171017
createdby: bytemaster-0xff
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# REST/HTTP Simulator

### Simulator Settings

* **Name** (required)    
Name of the Simulator

* **Key** (required)    
[Unique Key](../Topics/Keys.md) to identify the message

* **Transport** (required)    
For a REST simulator, use `REST (http)` or `REST (https)` for SSL

* **Default Endpoint** (required)  
DNS name or IP address that will be used to make the call     
**Note**: this does **not** include the protocol, such as http:// or https://.

* **Default Port** (required)  
Port to send HTTP request. This is usually `80` for REST (http) and `443` for REST (https), but that is not required.

* **Device ID**  
Device ID that will be used to send along with each message.  The Device ID will be available for [Tag Replacement](StandardFields.md) in your message.

* **Anonymous**  
Set this option if you connect without a user name and password to MQTT broker.

* **Use Basic Auth**  
If you provide a User Name and Password and select this option, your User Name Password combination will be sent in the Authorization Header using the [Basic access authorization scheme](https://en.wikipedia.org/wiki/Basic_access_authentication)

* **User Name**  (required if not anonymous)  
User Name that will be available for you to use in [Tag Replacement](StandardFields.md) to provide authentication with your message.

* **Password**  (required if not anonymous)    
Password that will be available for you to use in [Tag Replacement](StandardFields.md) to provide authentication with your message.

*  **Access Key**  
Access Key if your device requires authentication, this could also be a password.  This will be available for [Tag Replacement](StandardFields.md).  You can also add authentication credentials to each message.

* **Description**    
Free-form text used to provide notes for your Simulator

### Message Settings

* **Name** (required)    
Name of the message

* **Key** (required)  
[Unique Key](../Topics/Keys.md) to identify the message

* **HTTP Verb** (required)  
`GET, POST, PUT` and `DELETE`

* **Content Type**     
Content Type, if applicable, such as `application/json`.  If left blank, it will send the Content Type `text/plain`.

*  **Text**        
Content that will be sent as the body of the message. This will be available for [Tag Replacement](DynamicFields.md).

* **Path and Query String**     
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

#### Simulating Geo Location Paths
Our simulator current support sending a stream of geo location data points to the server.  At this time support is very basic, please contact us for additional more robust options.

To use this feature, select the Geo Path content type, and add a path to the payload.

To Simulate the data your path will consist of a set of latitude and longitudes as in:
```
28.048950, -82.709276, 5
28.051980, -82.710048, 5
28.055010, -82.711250, 5
28.056525, -82.712022, 5
28.059630, -82.711936, 5
28.061372, -82.710992, 5
28.064553, -82.708503, 5
28.066109, -82.707077, 5
28.068305, -82.705360, 5
28.071373, -82.704588, 5
28.073304, -82.704330, 5
28.075955, -82.703815, 5
28.077053, -82.703417, 5
28.077545, -82.704575, 5
28.078189, -82.705048, 5
28.078264, -82.705992, 5
28.078643, -82.706893, 5
28.078908, -82.707150, 5
28.078605, -82.707751, 5
28.078189, -82.708524, 5
28.077772, -82.708996, 5
28.077204, -82.709382, 5
28.076409, -82.709983, 5
```

The first value is the latitude and the second is the longitude.  The third value is how long between sending of the data points.

