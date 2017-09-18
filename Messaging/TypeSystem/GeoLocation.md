[Home](../../Index.md) > [Device Messaging](../Index.md) > [Type System](Index.md)

# Working with Geo Location Values

In addition to the basic types, NuvIoT Support a Native format for working with Geolocation Values

## Storage Format
To maintain consistency we normalize any geo location values to two decimal numbers with 6 points behind the decimal that are stored as strings

We then convert those two decimal numbers to string values and concate them with a ,.  Latitude will be the first number and Longitude 
will be the second number.

This is only how they are stored internally so they will fit in one column.  Utilies are provided to convert and work with
these values in a native format for performance.


The Internal storage format will be in the string format:
```
(-)DD.DDDDDDD,(-)DDD.DDDDDD 
    28.425123,-118.424511
    0.425120,20.415230
    -34.523000,12.424000
```

In degress where (-) on Latitude indicates South, if no sign is present we assume it positive and thus north.  Likewise (-) on Longitude is West and no sign on
Longitude is assumed postiive or east.

In addition there will always be 6 (six) spaces after the decimal point and 0's will be padded if the source does not source does not provide that resolution.
The values will have at a minimum of one digit, that digit will be 0 if applicable, values will not be padded.  Longitude may have up to three digits and
latitudes will have up to 2 digits.


## Parsing Values
Currently the parsing algorithm is smart enough to convert between common Geolocation formats to the internal format.

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

EWNS are the upper case characters E, W, N and S for East, West North and South
```

If a decimal value is provided for the geo location we assume the format is (+/-)DDD.DDDDD.

At this time parsing [NEMA GGA](http://www.gpsinformation.org/dale/nmea.htm#GGA) messages is unsupported, if you need this or any 
other formats, please [contact support](http://support.nuviot.com/) and well work with you to ensure your format is supported.

If you are unsure if your GPS format will work, please use our [verifier technology](../Parsing/Verifiers.md) and supply some sample messages with the formats 
you intend to use.

As a reference, the following regular expression are used to parse DM and DMS Geolocation values, a good place to test the expressions and your values 
are [RegEx 101](https://regex101.com/).

```
Latitude DM
    ^(?'hh'\d{1,2})°?\s?(?'mm'[0-9\.]{1,8})'?\s??\s?(?'ns'[NS])$

Longitude DM
    ^(?'hh'\d{1,3})°?\s?(?'mm'[0-9\.]{1,8})'?\s??\s?(?'ew'[EW])$

Latitude DMS 
    ^(?'hh'\d{1,2})°?\s?(?'mm'\d{1,2})'?\s?(?'sss'\d{1,2}\.?\d{0,5}?)"?\s?(?'ew'[NS])$

Longitude DMS
    ^(?'hh'\d{1,3})°?\s?(?'mm'\d{1,2})'?\s?(?'sss'\d{1,2}\.?\d{0,5}?)"?\s?(?'ew'[EW])$

Latitude as String DDD.DDDDDD (NS)
    ^(?'ddd'\d{1,2}\.\d{1,10})°?\s(?'ns'[NS])$

Longitude as String DDD.DDDDDD (EW)
    ^(?'ddd'\d{1,3}\.\d{1,10})°?\s(?'ew'[EW])$
```