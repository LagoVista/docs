---
title: Working with Geolocation Values
keywords: messages, messaging, parsing, fields, geo, geolocation, latitude, longitude, location

status: readyforapproval
created: 20170927
updated: 20171016
createdby: Kevin D. Wolf
updatedby: klworkman
---
[Home](../../Index.md) > [Device Messaging](../Index.md) > [Type System](Index.md)

# Working with Geolocation Values

In addition to the basic types, NuvIoT supports a native format for working with Geolocation Values.

## Storage Format
To maintain consistency, we normalize geolocation values to two decimal numbers with six digits to the right of the decimal point, stored as strings.

We then convert those two decimal numbers to string values and concatenate them with a comma.  Latitude will be the first number and longitude will be the second number.

This is only how they are stored internally so they will fit into one column.  Utilities are provided to convert and work with
these values in a native format for performance.


The Internal storage format is in the string format:
```
(-)DD.DDDDDDD,(-)DDD.DDDDDD 
    28.425123,-118.424511
    0.425120,20.415230
    -34.523000,12.424000
```

In degrees, (-) on latitude indicates South. If no sign is present, a positive, or North, is assumed.  Likewise (-) on longitude is West and no sign on longitude is assumed to be positive, or East.

In addition, there will always be six digits to the right of the decimal point and zeroes will be padded if the source does not provide that resolution.
The values will have a minimum of one digit.  That digit will be 0, if applicable, and values will not be padded.  Longitude may have up to three digits and latitude will have up to two digits.


## Parsing Values
Currently, the parsing algorithm is smart enough to convert between common geolocation formats to the internal format.

The parsing algorithm will attempt to parse the following formats until one succeeds:
```
DDD° MM.MMM' (EWNS) - DM Text Format
    Latitude:   32° 18.851' N  
    Longitude: 128° 51.351' W

DDD° MM' SS.S" (EWNS) - DMS Text Format
    Latitude:   32° 18' 42.1" N  
    Longitude: 128° 51' 22.1"

DDD.DDDDD° (EWNS) - Text Format
    Latitude:   32.30442° N
    Longitude: 128.82451° W

(+/-)DDD.DDDDD - Text or Decimal Format
    Latitude: 32.30442
    Longitude: -128.82451

EWNS are the upper case characters E, W, N and S for East, West North and South.
```

If a decimal value is provided for the geolocation, the format is assumed to be (+/-)DDD.DDDDD.

At this time, parsing [NEMA GGA](http://www.gpsinformation.org/dale/nmea.htm#GGA) messages is unsupported.  If you need this or any other format, please [Contact Us](http://support.nuviot.com/) and we will work with you to ensure that your format is supported.

If you are unsure whether or not your GPS format will work, please use our [Verifier Technology](../Parsing/Verifiers.md) and supply some sample messages with the formats you intend to use.

As a reference, the following regular expressions are used to parse DM and DMS geolocation values.  A good place to test the expressions and your values is [RegEx 101](https://regex101.com/).

```
Latitude DM
    ^(?'hh'\d{1,3})°?\s?(?'mm'[0-9\.]{1,8})'?\s??\s?(?'ns'[NS])$

Longitude DM
    ^(?'hh'\d{1,3})°?\s?(?'mm'[0-9\.]{1,8})'?\s??\s?(?'ew'[EW])$

Latitude DMS 
    ^(?'hh'\d{1,3})°?\s?(?'mm'\d{1,2})'?\s?(?'sss'\d{1,2}\.?\d{0,5}?)"?\s?(?'ew'[NS])$

Longitude DMS
    ^(?'hh'\d{1,3})°?\s?(?'mm'\d{1,2})'?\s?(?'sss'\d{1,2}\.?\d{0,5}?)"?\s?(?'ew'[EW])$

Latitude as String DDD.DDDDDD (NS)
    ^(?'ddd'\d{1,3}\.\d{1,10})°?\s?(?'ns'[NS])$

Longitude as String DDD.DDDDDD (EW)
    ^(?'ddd'\d{1,3}\.\d{1,10})°?\s?(?'ew'[EW])$
```
