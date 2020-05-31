---
title: Create Time Series Data Stream
keywords: postgres, datastream, timeseries,

status: inprocess
created: 20200531
updated: 20200531
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# Create a Time Series Data Stream

1. Install PostgreSQL database [Link](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
1. Configure TimescaleDB extensions [Link](https://computingforgeeks.com/how-to-install-timescaledb-on-ubuntu-18-04-lts/)
1. Configure Remote Connections [Link](https://blog.bigbinary.com/2016/01/23/configure-postgresql-to-allow-remote-connection.html)
1. Some helpful commands for working with PostgreSQL [Link](https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/)
1. Configuring for NuvIoT
1.1. Create database `CREATE DATABSE MYDBNAME;` [Link](https://www.guru99.com/postgresql-create-database.html)
1.1. Confirm database was created `\l`
1.1. Connect to database `\c MYDBNAME`
1.1. Enable timescale db on existing database [Link](https://severalnines.com/database-blog/how-enable-timescaledb-existing-postgresql-database)
```
create extension if not exists timescaledb cascade;
# use migrate_data => true if the table already has data.
select create_hypertable('batterymonitor','timestamp',migrate_data => true);
```
1.1. Create a user to access the database [Link](https://www.cyberciti.biz/faq/howto-add-postgresql-user-account/)
1.1. Schema should be public
1.1. Create your data stream, our data stream collects the current temperature, raw_voltage and battery voltage, the fields id, deviceId and timeStamp are populated automatically when records are inserted.
```
CREATE TABLE if not exists public.batterymonitor (
    id SERIAL,
    deviceId text not null,
    timeStamp timestamp not null,
    temperature float4 not null,
    raw_voltage float4 not null,
    battery_voltage float4 not null,
);
```

Once you create your data stream, press "Test Connection" this will confirm that NuvIoT will connect to the server and create the table, you must already have a user and database in place.

1.1. Add the data stream to your instance

## Add data with script
1. Add the following code to the Post Script Handler in your workflow
```
function postHandler() {
    addToDataStream('batterymonitor',
       {'temperature': Attributes.temperature,
        'raw_voltage': Attributes.rawvoltage,
        'battery_voltage': Attributes.batteryvoltage});
}
```