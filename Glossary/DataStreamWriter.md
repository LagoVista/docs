---
title: DataStreamWriter
keywords: 

status: complete
created: 20210910
updated: 20210924
createdby: JennyWrenWolf
updatedby: JennyWrenWolf

Note: Look at Definition and Example.  Message or PEM?.
---
[Home](../Index.md) > [Glossary](./Index.md)

# Data Stream Writer
## Definition
A Data Stream Writer is a [Pipeline Module](./PipelineModule.md) that writes data from a [Message](./Message.md) or a [Workflow](./Workflow.md) to a [Data Stream](./DataStream.md).

<br>
<br>
<br>

## Example
The engineer wanted to track the temperature of the *Plymouth IoT Conveyor Belt* over time.  When  she built the [Route](./Route.md) for the [Messages](./Message.md) received from the belt, she added a Data Stream Writer and [Mapped](./Mapping.md) the [Message](./Message.md) data to it. This made the captured data available to be used in the [Dashboard](./Dashboard.md).

<br>
<br>
<br>

# Related Terms
- [Dashboard](./Dashboard.md)
- [Data Stream](./DataStream.md)
- [Mapping](./Mapping.md)
- [Message](./Message.md)
- [Pipeline Module](./PipelineModule.md)
- [Route](./Route.md)
- [Time Series Data Stream](./TimeSeriesDataStream.md)
- [Workflow](./Workflow.md)