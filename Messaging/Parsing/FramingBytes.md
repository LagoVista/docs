---
title: Framing Bytes
keywords: parsers, messaging, binary, hex

status: readyforapproval
created: 20170927
updated: 20171010
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Parsing](Index.md) > [Parsing Binary Messages](ParsingBinaryMessages.md)

# Framing Bytes

When parsing a binary message, you can use framing bytes to ensure that your message is in the exact format you expect.  You can also set checkpoints for relative locations in your message.  

Note: this has not been implemented as of 5/18/2017.

Framing bytes consist of two parameters:

* Byte - Two-character representation of the byte.  For example, 0D would be 13 or CR.
* Index - The index within the message where this character should be located.

Note: In this case, the index or binary offset is 0-based, which is different than parsing delimited values where the index of the delimited value is 1.

### Example
For example, in the following binary message:

`01 32 02 43 52 08 03 04`

You could specify the following framing bytes:

| Position | Byte | Description |
|-----|-----|-----|
|  0  | 01 | Look for SOH in the first position |
|  2  | 02 | Look for STX in the second position |
|  6  | 03 | Look for ETX in the sixth position |
|  7  | 04 | Look for EOT in the sevent position |

With the above message, the parsing would succeed.

If you use the same framing bytes with the message:

`01 32 43 02 43 52 08 03 04`

The parsing of the message would fail since the character `02 (STX)` is located at position 3, not position 2.
