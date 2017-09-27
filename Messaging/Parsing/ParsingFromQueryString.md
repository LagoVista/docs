---
title: Parsing from a Path
keywords: messages, messaging, parsing, rest, querystring, http

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing Strategies](ParsingStrategies.md)

# Parsing from Query String

A [Query String](https://en.wikipedia.org/wiki/Query_string) is used on [REST Messages](https://en.wikipedia.org/wiki/Representational_state_transfer) and can be used to extract message values.

For the following URL
```
https://myapp.iothost.net/power?state=on
```

The query string would be the portion after theh ? or
```
state=on
```

To extract the value state and use that within your workflow you select

**Search Location**  
Query String

Then for  
**Query String Field**  
```state```

The value that will be store for the above query string in the state field will be ```on```

**Hint:** *This would be an excellent use of the [State and Enums](../TypeSystem/StatesAndEnums.md)* data type to ensure the values are either ```on``` or ```off``` 

##### Storage Type
You will also need to add a [Storage Type](../TypeSystem/Index.md) to identify how this field should be stored.