---
title: Verifiers
keywords: messages, messaging, verifiers, samplemessages

status:  inprocess
created: 20170927
updated: 20171016
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md)

# Verifiers

Once a Parser has been created, it should be tested to make sure that it behaves as expected. A Verifier is used to confirm that values received from incoming messages are values that are expected.  Using a Verifier to ensure that messages are defined correctly is generally much easier and faster than trying to do this from an actual device or simulator.  It gives an idea of how long it may take to extract the value from your message. 


