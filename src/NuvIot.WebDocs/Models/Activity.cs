﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuvIot.WebDocs.wwwroot.Models
{
    public partial class Activity
    {
        /// <summary>
        /// Initializes a new instance of the Activity class.
        /// </summary>
        public Activity()
        {

        }

        /// <summary>
        /// Initializes a new instance of the Activity class.
        /// </summary>
        public Activity(string type = default(string), string id = default(string), DateTime? timestamp = default(DateTime?), DateTime? localTimestamp = default(DateTime?), string serviceUrl = default(string), string channelId = default(string), string textFormat = default(string), string attachmentLayout = default(string), string topicName = default(string), bool? historyDisclosed = default(bool?), string locale = default(string), string text = default(string), string speak = default(string), string inputHint = default(string), string summary = default(string),  object channelData = default(object), string action = default(string), string replyToId = default(string), object value = default(object), string name = default(string),  string code = default(string))
        {
            Type = type;
            Id = id;
            Timestamp = timestamp;
            LocalTimestamp = localTimestamp;
            ServiceUrl = serviceUrl;
            ChannelId = channelId;
            TextFormat = textFormat;
            AttachmentLayout = attachmentLayout;
            TopicName = topicName;
            HistoryDisclosed = historyDisclosed;
            Locale = locale;
            Text = text;
            Speak = speak;
            InputHint = inputHint;
            Summary = summary;
            ChannelData = channelData;
            Action = action;
            ReplyToId = replyToId;
            Value = value;
            Name = name;
            Code = code;
        }

        /// <summary>
        /// The type of the activity
        /// [message|contactRelationUpdate|converationUpdate|typing|endOfConversation|event|invoke]
        /// </summary>
        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }

        /// <summary>
        /// ID of this activity
        /// </summary>
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        /// <summary>
        /// UTC Time when message was sent (set by service)
        /// </summary>
        [JsonProperty(PropertyName = "timestamp")]
        public DateTime? Timestamp { get; set; }

        /// <summary>
        /// Local time when message was sent (set by client, Ex:
        /// 2016-09-23T13:07:49.4714686-07:00)
        /// </summary>
        [JsonProperty(PropertyName = "localTimestamp")]
        public DateTimeOffset? LocalTimestamp { get; set; }

        /// <summary>
        /// Service endpoint where operations concerning the activity may be
        /// performed
        /// </summary>
        [JsonProperty(PropertyName = "serviceUrl")]
        public string ServiceUrl { get; set; }

        /// <summary>
        /// ID of the channel where the activity was sent
        /// </summary>
        [JsonProperty(PropertyName = "channelId")]
        public string ChannelId { get; set; }


        /// <summary>
        /// Format of text fields [plain|markdown] Default:markdown
        /// </summary>
        [JsonProperty(PropertyName = "textFormat")]
        public string TextFormat { get; set; }

        /// <summary>
        /// Hint for how to deal with multiple attachments: [list|carousel]
        /// Default:list
        /// </summary>
        [JsonProperty(PropertyName = "attachmentLayout")]
        public string AttachmentLayout { get; set; }


        /// <summary>
        /// The conversation's updated topic name
        /// </summary>
        [JsonProperty(PropertyName = "topicName")]
        public string TopicName { get; set; }

        /// <summary>
        /// True if prior history of the channel is disclosed
        /// </summary>
        [JsonProperty(PropertyName = "historyDisclosed")]
        public bool? HistoryDisclosed { get; set; }

        /// <summary>
        /// The language code of the Text field
        /// </summary>
        [JsonProperty(PropertyName = "locale")]
        public string Locale { get; set; }

        /// <summary>
        /// Content for the message
        /// </summary>
        [JsonProperty(PropertyName = "text")]
        public string Text { get; set; }

        /// <summary>
        /// SSML Speak for TTS audio response
        /// </summary>
        [JsonProperty(PropertyName = "speak")]
        public string Speak { get; set; }

        /// <summary>
        /// Indicates whether the bot is accepting, expecting, or ignoring
        /// input
        /// </summary>
        [JsonProperty(PropertyName = "inputHint")]
        public string InputHint { get; set; }

        /// <summary>
        /// Text to display if the channel cannot render cards
        /// </summary>
        [JsonProperty(PropertyName = "summary")]
        public string Summary { get; set; }


        /// <summary>
        /// Channel-specific payload
        /// </summary>
        [JsonProperty(PropertyName = "channelData")]
        public object ChannelData { get; set; }

        /// <summary>
        /// ContactAdded/Removed action
        /// </summary>
        [JsonProperty(PropertyName = "action")]
        public string Action { get; set; }

        /// <summary>
        /// The original ID this message is a response to
        /// </summary>
        [JsonProperty(PropertyName = "replyToId")]
        public string ReplyToId { get; set; }

        /// <summary>
        /// Open-ended value
        /// </summary>
        [JsonProperty(PropertyName = "value")]
        public object Value { get; set; }

        /// <summary>
        /// Name of the operation to invoke or the name of the event
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        

        /// <summary>
        /// Code indicating why the conversation has ended
        /// </summary>
        [JsonProperty(PropertyName = "code")]
        public string Code { get; set; }

    }
}
