---
title: Mapping
keywords: 

status: in process
created: 20210910
updated: 20210928
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Input has a link, does output need one too?
---
[Home](../Index.md) > [Glossary](./Index.md)

# Mapping
## Definition
Mapping of data is sometimes required within [Routes](./Route.md) between [Pipeline Modules](./PipelineModule.md).  Mapping identifies how the output produced from one module is passed on as input to other modules.

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