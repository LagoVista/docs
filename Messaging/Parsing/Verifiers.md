---
title: Verifiers
keywords: messages, messaging, verifiers, samplemessages

created: 20170927
updated: 20170927
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Verifiers

Once you have created your parser, you should test it to make sure it behaves as expected.  You can create a verifier that will take a sample message and run it through the verifier to ensure that you get the results you need, all without using actual devices.  As long as your devices send the messages you expect, the parser will behave the same and you will have the same fields available to the workflow.

### To Add a Verifier

1. Add a message parser
2. Click on **Verifiers** > **Edit**
3. Click on **Add**
4. Add the name and key
5. Select a Payload Type
6. Populate the fields that make up your sample message
7. Add expected values.  You can use the fields you created as part of the message to add an expected value.

**NOTE:** If you have a binary message, you can copy the hex bytes that make up your messages into the payload field such as:
```
0x03 0x43 0x04 0x23 0x52 0x41 0x05 0x06 
```

### To Use a Verifier

1. On the Device Message Definition, press **Run**.  Your results will be displayed.


