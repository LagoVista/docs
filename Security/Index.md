---
title: Security Overview
keywords: messaging, devices, security

status: inprocess
created: 20171112
updated: 20171112
createdby: bytemaster-0xff
updatedby: bytemaster-0xff
---
# Security Overview

#### Configuration Security
We offer two levels of access to building IoT applications
* **Administrator** - Can perform any action within our IoT App Studio.
* **Contributor** - Can build and make changes to applications, however can not unlock records or add any records that would result in billing events, they may not invite any users as well.

#### Locking Records
To maximize reuse, most of the components you will build as part of your [solution](../Deployment/Solution.md) are built and live independently of the solution where they are used. 
In some cases you may not want to allow changes to existing components since the next time you publish your solution it may break existing functionality.  We provide
a mechism for you to lock records so you must unlock them prior to editing or deleting them.  This can only be done by an administrator.

#### Device Level Security
Below are some of the topics about securing device access:

* [Access Keys](AccessKey.md)
* [Anonymous](Anonymous.md)
* [Basic Authentication](BasicAuth.md)
* [Device Security](DeviceSecurity.md)
* [LocatingSecurityField](DeviceSecurity.md)
* [Shared Access Signature](SecurityFields.md)
* [Security Fields](SecurityFields.md)


While we continue to extend our documentation, please [contact us](http://support.nuviot.com/contactus?source=security) with any questions or concerns.
