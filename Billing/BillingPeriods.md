---
title: Billing Periods
keywords: billing, invoicing, billing periods

status: inprocess
created: 20171117
updated: 20171117
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# Billing Periods

The billing periods are based around the date your subscription was created.  For example if your subscription was created on
November 17th, 2017 the start date of your billing period will be the 17th at 12:00.00 am or (00:00 for those of you on a 24 hour clock) 
of each month and the end date wil be 16th at 11:59.59PM (23:59.59) of the following month.  If you signed up for your subscription on the 
1st of any given month your subscription will be from the 1st of the month to last day of the month.

To keep a consistent approach for invoicing the time zone that will be used to establish midnight will be [UTC or Greenwich Mean Time (GMT)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).

Each day at UTC midnight, a process will be ran that will find subscriptions that start on current date.  Any billing records associated with that
subscription will be closed and a new billing record will be started to track usage for the new billing period.

Billing periods are not exactly 30 days, but will be based on the number of days in a month.
