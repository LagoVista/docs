---
title: Binary Content
keywords: simulator, binary, hex

status: readyforreview
created: 20171003
updated: 20171003
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
[Home](../Index.md) > [Simulator](Index.md)

# Binary Content

In addition to sending standard text payloads you can also build binary payloads to send with your message.

To add a binary message you have three options, all use the process of adding hex values as text to your message

#### Option 1  
Put two character values that represent the hex values that will be sent, the hex alpha caracters are case independent but
since they are hex identifiers they must be A-F

##### example
```
02 24 03 52 5A 5C 3F 21 04 05
```

#### Option 2
Use the standard 3 or 4 character notation such as x34 or 0x34

##### example
```
x02 x24 x03 x52 x5A x5C x3F x21 x04 x05
```
or
```
0x02 0x24 0x03 0x52 0x5A 0x5C 0x3F 0x21 0x04 0x05
```

#### Option 3

Use a continous stream of hex values, note this MUST always have an even length

##### example
```
022403525A5C3F210405
```