---
title: Mapping
keywords: 

status: Complete
created: 20210910
updated: 20211004
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Input has a link, does output need one too?  How is this different than what the planner does?
---
[Home](../Index.md) > [Glossary](./Index.md)

# Mapping
## Definition
Mapping data is sometimes required between [Pipeline Modules](./PipelineModule.md) within [Routes](./Route.md).  Mapping identifies how the output produced from one module is passed on as input to other modules.

<br>
<br>
<br>

## Example
When *Plymouth Manufacturing* built the [Route](./Route.md) for their conveyor belt, the [Input Translator](./InputTranslator.md) extracted the temperature field from the incoming [Message](./Message.md). The temperature, which is the output of the [Input Translator](./InputTranslator.md), is Mapped as input to the overheating [Workflow](./Workflow.md) module.

<br>
<br>
<br>

# Related Terms
- [Input Translator](./InputTranslator.md)
- [Message](./Message.md)
- [Pipeline Module](./PipelineModule.md)
- [Route](./Route.md)
- [Workflow](./Workflow.md)