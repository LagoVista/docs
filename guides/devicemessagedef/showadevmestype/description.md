In this Guide step, we are going to walk through some of the basic fields

**Field Explanation Table**  

| Field | Data Used | Reason |
|:--|:--|:--|
| | | |  
| Name | "Temperature Message ACME Mod X" | Easy to understand what devices of this type do |
| Key | "tempmessmodx" | Unique key available in scripting later |
| Is Public | " " | Makes this Device Message Type available for all organizations and all client in NuvIoT |
| Message Id | "tempacmemodx" | The identifier used to identify and process messages of this type |
| Message Direction | "Incoming Message | Options are: In, Out or Both |
| Content Type | "JSON" | See <a href="https://support.nuviot.com/help.html#/messaging/contenttypes" target="_blank">Content Types</a>  |  
  
  
Here is the main documentation for <a href="https://support.nuviot.com/help.html#/topics/standardfields" target="_blank">the Standard Fields</a>  
Which can also be found in the Help Resources
  
**Sample Messages**

Sample Messages are there to _document_ what messages look like and allow testing of the message parsing later in the process.  
  
_There will be a separate tutorial about Sample Messages and the testing available in the future_
  
Here is the main documentation for <a href="https://support.nuviot.com/help.html#/messaging/parsing/index" target="_blank">Message Parsing</a>  
Which can also be found in the Help Resources
  
**Fields**

Fields used to identify which/what data/information is going to be used from within the message.  

**Message Field Explanation Table**  

| Field | Data Used | Reason |
|:--|:--|:--|
| | | |  
| Name | "Temp" | Easy to understand what devices of this type do |
| Key | "temp" | Unique key available in scripting later |
| Search Location | "Message Body" | Options are: Hearders, Message Body, Path, Topic, Query String |
| Message Field Type | " " | Makes this Device Message Type available for all organizations and all client in NuvIoT |
| Storage Field Type | "Decimal" | The format that the extract info is going to be stored as.  |
| Is Required | "x" | Input data has to exist |  
| JSON Path | "JSON" | See <a href="https://support.nuviot.com/help.html#/messaging/parsing/parsingjsonmessage" target="_blank">Parsing a JSON</a>  |  
    
The JSON Path is context sensitive as are the rest of the Message Field options bason on which **Content Type** was selected in the Device Message Type definition.  
Read more about parsing data from different content types <a href="https://support.nuviot.com/help.html#/messaging/parsing/index" target="_blank">Parsing from .........</a>
  
