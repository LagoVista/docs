
| Field | Data Used | Reason |
|:--|:--|:--|
| Name | "DMT Temperature Message" | Easy to understand what devices of this type do |
| Key | "dmttempmess" | Unique key available in scripting later |
| Is Public | Not selected | It is not an entity we need to share with other solutions |  
| Message Id | "TempSensMess" | Matches the model # from the manufacturer |
| Message Direction | "Incoming" | This messsage is coming into the solution and we are not passing it on |
| Content Type | "JSON" | Simple standard format to use within our Example |
| Sample Messsages| Blank | Is optional, and can be added later for documentation purposes |
| Fields | "Temp"  | This fields gets "extracted from the JSON in the messsage |  
| Fields |    | You can add as many fields available in the JSON if you need them in the solution |  
  
  