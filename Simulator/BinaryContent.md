---
title: Binary Content
keywords: simulator, binary, hex

status: readyforapproval
created: 20171003
updated: 20171018
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../Index.md) > [Simulator](Index.md)

# Binary Content

In addition to sending standard Text payloads, you can also build Binary payloads to send with your message.

To add a Binary message, you have three options, and all use the process of adding hex values as text to your message.

**Option 1**    
Use two-character values that represent the hex values that will be sent.  The hex alpha characters are case-independent but
since they are hex identifiers, they must be A-F.

   Example:
   ```
   02 24 03 52 5A 5C 3F 21 04 05
   ```

**Option 2**   
Use the standard three or four-character notation such as x34 or 0x34.

   Example:
   ```
   x02 x24 x03 x52 x5A x5C x3F x21 x04 x05
   ```
   *or*
   ```
   0x02 0x24 0x03 0x52 0x5A 0x5C 0x3F 0x21 0x04 0x05
   ```

**Option 3**   
Use a continuous stream of hex values. Note that this **must** always have an even length.

   Example:
   ```
   022403525A5C3F210405
   ```
