---
title: Design Philosophy
keywords: development, about, info, architecture

status: readyforapproval
created: 20170922
updated: 20171013
createdby: bytemaster-0xff
updatedby: klworkman
---
# Design Philosophy

Our Design Philosophy is based on a pragmatic approach to building software that focuses on quickly implementing requirements in a 
system that will stand the test of time, both in terms of scalability and flexibility.

Here are a number of axioms that we adopted when designing NuvIot:

1. Currently, building **real IoT applications** is hard, requiring very **specialized talents.**
1. **Security** needs to start with the **infrastructure**, it cannot be added on at a later time.
1. **Scalability** can be achieved by **breaking the problem** into separate, **independent processing steps.**
1. **High Availability** should be as simple as **selecting a configuration.**
1. There are a number of **similar building blocks** in every IoT application. 
1. Each IoT application is a collection of **building blocks**, or **microservices.**
1. With the right level of **abstraction**, **similar building blocks** can be tailored via configuration rather than _coding_.
1. The majority of an IoT application can be **assembled** by connecting **configured building blocks, or microservices.**
1. It is **impossible** to 100% configure **every requirement** in a non-trivial system.
1. **Integration Points** should be provided to seamlessly add both **scripts** and **custom code.**
1. Adding **custom code** should allow developers to focus **only** on their specific needs, **not infrastructure.**
1. Just because something **is not hard** does not mean it is not **industrial grade.**

