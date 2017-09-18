[Home](../../Index.md) > [Route](../Route.md) > [Mappings](Index.md)

# Input Translator to Workflow Inputs

Since our IoT Application is built for maximum re-use your [Workflows](../../PipelineModules/Workflow.md) are meant to stand alone,
that means you need to map the output from your message to the [Inputs](../../Workflows/Input.md) on our Workflow.  This is
a relatively straight forward process where you simply select the [Message Field](../../Messaging/MessageFields.md) and the [Workflow Input](../../Workflows/Input.md) and add 
the mapping.

Note: It is not important that all message fields map to your workflow input and that you each workflow input has a message field.  You
will also only be able to create mappings for types that are compatible.  If you need to convert between types, you can
add an additional workflow input that will match that of the field and use the [OnSet script](../../Scripting/WorkflowInputOnSet.md) to do any type conversions 