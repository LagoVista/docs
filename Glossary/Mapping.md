---
title: Mapping
keywords: 

status: in process
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: reword Example
---
[Home](../Index.md) > [Glossary](./Index.md)

# Mapping
## Definition
Mapping of data is sometimes required within [Routes](./Route.md) between [Pipeline Modules](./PipelineModule.md).  Mapping identifies how the output produced from one module is passed on as [Input](./Input.md) to other modules.

<br>
<br>
<br>

## Example
When PL MY built the route for their CV BT, they input translator extracted the temperature field from the incoming message. The workflow module that is used to determine if the bearing is over heating expects the temperature of the bearing. WIthin the route the temperature output of the input translator is mapped to the input of the workflow

<br>
<br>
<br>

# Related Terms
- [Input](./Input.md)
- [Pipeline Modules](./PipelineModule.md)
- [Routes](./Route.md)