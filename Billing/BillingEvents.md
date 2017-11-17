---
title: Billing Events
keywords: billing, invoicing, billing events

status: inprocess
created: 20171117
updated: 20171117
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# Billing Events

One of the goals of NuvIoT is to present clear and easy to understand billing information.

Our billing process is simple and is based on Billing Events, when you allocated resources for a part of your
IoT application, we create a new Billing Event with the exact date and time your resouce came online.  When you 
dispose of your resource, the associated Billing Event will be closed.  We also have a process that runs at exactly 
midnight 

Each resource is billed by either the number of transactions or cost per hour (billed down to the second).  When you
allocate your resource you will select the product that is best in line with your needs, each product will have a 
unit cost associated with it, again, either in terms of transaction count or cost per hour.

Over the lifetime of uisng your resource, the number of hours or transactions are tracked, at the end of the billing 
period our system will summarize this data in a simple formulat `(units used) * (unit cost)` this will be your 
cost; prior to any applicable discounts; that will be rolled up into your invoice.   

Billing Events also correspond to [Billing Periods](BillingPeriods.md).  At the end of a Billing Period, any open
Billing Events will be closed and added to an invoice and a new Billing Event will be created for the current period.
