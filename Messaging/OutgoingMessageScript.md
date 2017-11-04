---
title: Outgoing Message Script
keywords: messaging, messages, receive, outgoing, script

status: inprocess
created: 20171104
updated: 20171104
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
[Home](Index.md) > [Device Messaging](../Index.md) > [Outgoing Messages](OutgoingMessages.md)

# Outgoing Message Scripts

When creating a JSON output message you will create a script that builds up the JSON document that contains the fields you will send.

Here is an example of the output script assuming that the outgoing message has fields with keys `msgfld1` and `msgfld4`.  You do not need
to add quotes around the field, the process that builds the document will add these if necessary.

```
function getOutputMessage(){
    return {
        'out1':Fields.msgfld1,
        'out2':Fields.msgfld4
    };
}
```