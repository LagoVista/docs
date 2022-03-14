---
title: Invoicing
keywords: billing, invoicing

status: inprocess
created: 20171117
updated: 20171117
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---

# Invoicing

At [UTC or Greenwich Mean Time (GMT)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) on the first day of a 
subscriptions billing cycle, a process is ran to close out any open [Billing Events](BillingEvents.md) from the previous
period and create new ones for the current period.

Once the Billing Events are closed out for the previous period, they are summarized and turned into Line Items that will
be added to an Invoice.  These Line Items are then summarized and an Invoice is created.  

When you upgrade your account from a trial account to put your application into production or add additional resources, 
you will register a credit card with [Stripe](https://www.stripe.com) (your [credit card information](CreditCardTransactions.md) 
is never stored in our system).

Once the invoice has been created, a transaction will be charged to your credit card for the amount of your invoice.  In addition
an email will be sent to the billing contact of organization for the subscription with details of what was charged.

Your invoice and details will always be available to be reviewed once it has been created.