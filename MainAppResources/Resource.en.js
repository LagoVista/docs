angular.module('nuviotApp').config(function ($translateProvider) {
    $translateProvider.translations('en', {
        TITLE: 'Hello',
        GREETING: 'Hello in Enlish.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german',
        StandardButtons: {
            Save: "Save",
            Help: "Help",
            Yes: "Yes",
            No: "No",
            Ok: "Ok",
            Cancel: "Cancel",
            Add: "Add",
            Edit: "Edit",
            Run: "Run",
            Delete: "Delete",
            Manage: "Manage",
            Close: "Close",
            Start: "Start",
            Pause: "Pause",
            Stop: "Stop",
            Restart: "Restart",
            Publish: "Publish",
            Unpublish: "Un-Publish",
            Refresh: "Refresh"
        },
        Messages: {
            LoseChanges: "You have unsaved changes.  Are you sure you want to cancel?",
            EnterValidInteger: "Please enter a valid integer number.",
            EnterValidDecimal: "Please enter a valid decimal number.",
            InvalidData: "Invalid or Incomplete Data",
            FixValidation: "Please Correct the Following Issues",
            SystemError: "System Error",
            KeyInUse: "Keys must be unique, this key is already in use by: ",
            KeyInUseForNodeType: "Keys must be unique.  You already have: ",
            ConfirmDeleteTitle: "Confirm Delete",
            AreYouSure: "Are you Sure?",
            PageNameMissing: "Page Name can not be Blank",
            ErrorCallingServer: "Error Making a Call to the Server, please try again later.",
            FatalError: "A fatal error has occurred.  This error has been logged.  It is recommended you refresh your browser page before you continue.",
            ConfirmDelete: "Are you sure you want to delete?  This can not be undone",
            ResourceNotFound: "Sorry, the resource requested from the server could not be found.  It is recommended you reload your page.",
            UnauthorizedAccess: "Sorry, you are not authorized to access this resource."
        },
        Charts: {
            Errors: "Errors",
            MessagesProcessed: "Messages Processed",
            DeadLetter: "Dead Letter"
        },
        Common: {
            PleaseWait: "Please Wait",
            Done: "Done",
            Cancel: "Cancel",
            SelectWaterMark:"-select-",
            Settings: "Settings",
            EditScript: "Edit Script",
            Status: "Status",
            Add: "Add",
            Key: "Key",
            Name: "Name",
            Next: "Next",
            Email: "Email",
            LastUpdated: "Last Updated",
            Unauthorized: "Unauthorized",
            NamePlaceHolder: "enter name",
            KeyPlaceHolder: "enter key",
            MissingRequiredData: "Missing Required Data",
            Test: "Test",
            Reset: "Reset",
            HelpLinks: "More Help Links",
        },
        ExpertSystem: {
            Title: "Expert Systems",
            Session: "Session",
            Welcome: "Welcome to our Expert Systems A.I. Assistent",
            Greeting: "After answering as many questions as you can, our AI assistant will create a customized project plan that includes tasks to implement your system as well as any tasks that need to be completed for finalize the requirements",
            GetStarted: "To get started, select an existing Expert Systems session or",
            CreateNew: "or create a new one.",
            CreateNewTitle: "Create a New A.I. Session",
            CompleteTitle: "Complete Session",
            DontKnow: "I Don't Know Right Now",
            MyAnswer: "My Answer",
            OtherOption: "My Answer Isn't Listed",
            Congratulations: "Congratulations",
            EndOfSurvey: "You have came to the end of the list of the questions for this expert system.  For best results we suggest that you review any questions that are not completed (showing up in bold in the left hand list) prior to having our AI analyze your results.",
            ConfirmCompleteTitle: "Are you sure you would like to finish this AI session and generate your project plan?  Any changes will require you to regenerate your project plan."
        },
        PipelineModules: {
            Modules: {
                Listeners: "Listeners",
                Listener: "Listener",
                InputTranslators: "Input Translators",
                InputTranslator: "Input Translator",
                OutputTranslators: "Output Translators",
                OutputTranslator: "Output Translator",
                Transmitters: "Transmitters",
                Transmitter: "Transmitter",
                Sentinels: "Sentinels",
                Sentinel: "Sentinel",
                CustomModules: "Custom Modules",
                CustomModule: "Custom Module",
                Planners: "Planners",
                Planner: "Planner"
            },
            Index: {
                Greeting: "Configure your Pipeline Execution Modules",
                Title: "Pipeline Modules"
            },
            Listeners: {
                Greeting: "Listeners are used to Monitor a Port, Protocol or Service for Messages from your Devices"
            },
            Planner: {
                Greeting: "After your message comes from the device it is handed off to Planner, the Planner is then responsible for using it's Device Id and Message Id Parsers for mapping the contents of a message for a particular device configuration to a Route to perform additional processing"
            },
            Listener: {
                Greeting: "Configure your Listener to List on a Port, Protocol or Service"
            },
            InputTranslator: {
                Greeting: "The Input Translator is used to Transform the Raw Message received from the device to a set of key value pairs that can be used within your device workflow"
            },
            OutputTranslator: {
                Greeting: "The Output Translator is used to Transform the Key Value Pairs that are created as part of the Workflow to the format the device is expecting so they can be sent down to the device."
            },
            Sentinel: {
                Greeting: ""
            },
            Transmitter: {

            },
            CustomModule: {

            },
            MessageFieldParserConfiguration: {
                Title: "Field Parser",
                Greeting: "A Planner relies on Device and Messaage Id Parsers to extract Device and Message Ids from the incoming messages.  You can extract values from different parts of the message and use different techniques to find the fields you are looking for, in addition you can build verifiers that will run tests against your parsers to ensure they work the way you expect.",
                NoVerifiers: "There currently no verifiers on this field parser, click Edit and Add to create one."
            }
        },
        Misc: {
            HeaderNameWaterMark: "header name",
            HeaderValueWaterMark: "header value",
            ExpectedValueWaterMark: "expected value"
        },
        Orgs: {
            Subscriptions: {
                Title: "Subscriptions",
                Greeting: ""
            },
            Subscription: {
                Title: "Subscription",
                Greeting: ""
            },
            Users: {
                Title: "Users",
                Greeting: "",
            },
            User: {
                Title: "User",
                Greeting: ""
            }
        },
        Registration: {
            Title: "Four Easy Steps to Registration",
            CreateAccount: "Create a Free Account (no Credit Card Necessary)",
            CreateOrg: "Create an Organization to Manage your work",
            VerifyEmailAddress: "Verify your Email Address",
            VerifyPhoneNumber: "Verify your Phone Number",
        },
        ManageAccount: {
            AcceptInvite: {
                InviteMessage: " has invited you to ", /* This is put between persons name and org name, might not translate, please discuss */
                OptionsMessage: "You can either Login in with an Existing Account or Create a New One",
                Register: "Register a New Account",
                Login: "Login to an Existing Account"
            },
            Login: {
                Title: "Login",
                EmailAddress: "Email",
                EmailAddressPlaceHolder: "enter your email address",
                EmailAddressRequired: "A Valid Email Address is Required to Login",
                Password: "Password",
                RememberMe: "Remember Me",
                PasswordPlaceHolder: "enter your password",
                PasswordRequired: "Please enter your password before logging in.",
                LoginButton: "Login"
            },
            Members: {
                InviteSomeone: "Invite Somone",
                Role: "Role",
                Resend: "Resend",
                OrgAdmin: "Admin",
                Contributor: "Contributor",
                OrgMembers: "Organization Members",
                Members: "Members",
                DateInviteSent: "Date Sent"
            },
            Invite: {
                InviteSomeone: "Invite Somone",
                InviteUserName: "Name",
                InviteUserEmail: "Email Address",
                InviteUserMessage: "Message",
                Invite: "Invite",
                InvalidEmail: "please enter a valid email address",
                NameRequired: "name is required",
                NamePlaceHolder: "name of person to invite",
                EmailAddressPlaceHolder: "email address",
                MessagePlaceHolder: "add a message to be sent with the invitation"
            },
            ChangePassword: {
                ChangePassword: "Change Password",
                NewPasswordConfirm: "Confirm New Password",
                NewPassword: "New Password",
                OldPassword: "Old Password",
                OldPasswordPlaceHolder: "old passsword",
                NewPasswordPlaceHolder: "new password",
                NewPasswordConfirmPlaceHolder: "confirm new password",
                OldPasswordIsRequired: "old password is required",
                InvalidNewPassword: "new password is required and must be at least 6 characters and include at least one lower case, one upper case and one number",
                ConfirmPasswordMatch: "confirm password is required and must match new password"
            },
            SwitchOrganization: {
                SwitchOrg: "Switch Organizations",
                Organization: "Organization",
                ReloadPleaseWait: "Please Wait while your Page is Reloaded!"
            },
            Profile: {
                UserProfile: "Profile",
                FirstName: "First Name",
                LastName: "Last Name",
                FirstNameIsRequired: "First Name is Required",
                LastNameIsRequired: "Last Name is Required",
                FirstNamePlaceHolder: "first name",
                LastNamePlaceHolder: "last name",
                SuccessMessage: "Profile Updated",
            },
            SendPasswordReset: {
                Title: "Send Password Reset Link",
                Greeting: "Please enter the email address you used to create your NuvIoT account and press Send Link, you will receive an email with a link that will let you reset your password.",
                Email: "Email Address",
                EmailPlaceHolder: "email address",
                EmailIsRequired: "A valid email address is required.",
                SuccessMessage: "If your email account is in the system you will be sent a message with a link you can use to reset your password.  If you do not receive this within 5 minutes, please check your junk or other folder.",
                SendLink: "Send Link"
            },
            Register: {
                Title: "Step 1 - Create your User Account",
                RegisterButton: "Register",
                FirstName: "First Name",
                FirstNamePlaceHolder: "enter your first name",
                FirstNameIsRequired: "First Name is Required",
                LastName: "Last Name",
                LastNamePlaceHolder: "enter your last name",
                LastNameIsRequired: "Last Name is required",
                Email: "Email",
                EmailPlaceHolder: "email address",
                EmailIsRequired: "A valid email address is required.",
                Password: "Password",
                PasswordPlaceHolder: "create a password",
                PasswordIsInvalid: "Password is required and must be at least 6 characters and include at least one lower case, one upper case and one number.",
                ConfirmPassword: "Confirm your Password",
                ConfirmPasswordPlaceHolder: "enter your password again",
                ConfirmPasswordMatch: "Confirm Password is Required and must match your Password.",
                ResendConfirmationEmailButton: "Resend",
                ResentConfirmationEmail: "Confirmation Email Resent",
                RegisterSuccess: "Congratulations!  Your account has successfully been created, please check your inbox for a link to confirm your account, if you do not receive an email, please check folders such as your clutter or junk folder.  To resend a confirmation email, press the Resend button."
            },
            ResetPassword: {
                Title: "Reset Password",
                Email: "Email Address",
                EmailPlaceHolder: "email address",
                EmailIsRequired: "A valid email address is required.",
                NewPassword: "New Password",
                NewPasswordPlaceHolder: "new password",
                InvalidNewPassword: "New password is required.  It must be at least 6 characters and include at least one lower case, one upper case and one number",
                ConfirmPassword: "Confirm your Password",
                ConfirmPasswordPlaceHolder: "enter your password again",
                ConfirmPasswordMatch: "confirm password is required and must match new password",
                ResetPasswordButton: "Reset Password",
                SuccessfulReset: "Congratulations! You have successfully changed your password, please login."
            },
            VerifyAccount: {
                Title: "Please Verify Your Account",
                Congratulations: "Your Email Address has been Validated.  Please enter a Telephone Number of a phone that is capabile of receiving SMS text messages.  This is required for Two Factor Authentication as well as allowing you to send you SMS notifications about events in yoru application.",
                PhoneNumber: "Telephone Number",
                PhoneNumberPlaceHolder: "enter an SMS enabled telephone number",
                PhoneNumberRequired: "A Valid Telephone Number is Required.",
                SendSMSCode: "Send SMS Code",
                ResendSMSCOde: "Resend SMS Code",
                VerifyCode: "Verify Code",
                SMSCodeSent: "A code has been sent to the phone number you provided.  Once it arrives, please enter it and press Next",
                ReceivedCode: "Received Code",
                ReceivedCodeIsRequired: "Received Code is Required and should be a 5 or 6 digit number",
                ReceivedCodePlaceHolder: "please enter the six digit code you received on your phone",
                EmailNotVerified: "Your Email Address has not been verified.  Please press Resend to send another email to verify your account.  If you do not receive an email, please check other folders such as your clutter or junk folder."
            }
        },
        ManageOrg: {
            Create: {
                Title: "Create an Organization",
                Greeting: "Organizations are used to organize your IoT Applications and bring other people on board.  There is no cost for creating an organization",
                OrgName: "Organization Name",
                OrgNamePlaceHolder: "enter your organizations name",
                OrgNameRequired: "Organization Name is Required",
                OrgNamespace: "Namespace",
                OrgNamespacePlaceHolder: "enter a namespace for your organization",
                OrgNamespaceHelp: "A Namespace is used to uniquely identify assets that you create, both in scripts and domain names.  Your namespace must be at least 6 characters long and may consist of lower case letters and numbers.",
                OrgNamespaceRequired: "Namespace is Required and must be at least 6 characters long and may consist of lower case letters and numbers.",
                WebSite: "Web Site",
                WebSitePlaceHolder: "enter your organizations web site (optional)",
                CreateOrgButton: "Create Organization",
                SuccessCreatingOrg: "Congratulations!  Your new organization is all setup, you are ready to create some great IoT Applications",
            }
        },
        Verifiers: {
            MessageFieldParserVerifiers: {
                Title: "Verifiers",
                Greeting: "Once you have created your parser, you will want to test it to make sure it behaves as expected.  You can create a verifier that will take a sample message and run it through the verifier to ensure you get the results you need.  All without using actual devices.  As long as your devices send the messages you expect, the parser will behave the same and you will have the same fields available to the workflow",
                Results: "Message Parser Verifier Results"
            },
            MessageFieldParserVerifier: {
                Title: "Verifier",
            }
        },
        Dashboard: {
            Menu: {
                Home: "Home",
                Devices: "Devices",
                DeviceStudio: "Device Studio",
                DeviceAdmin: "Device Admin",
                DeviceExplorer: "Device Explorer",
                Settings: "Settings"
            }
        },
        DeviceManagement: {
            Index: {
                Title: "Device Explorer",
                Greeting: "Manage your Devices"
            },
            AddDevice: {
                Title: "Provision Device",
                Greeting: "Provision a New Device"
            },
            ViewDevice: {
                Title: "Device Information",
                Greeting: "",
                DeviceMessages: "Show Messages from Device",
                HistoricalData: "Show Historical Device Data"
            },
            EditDevice: {
                Title: "Update Device",
                Greeting: "Update an Existing Device",
                DeviceMessages: "Show Messages from Device",
                HistoricalData: "Show Historical Device Data"
            },
            DevicePEMs: {
                Title: "Device Messages",
                Greeting: "Most Recent Messages from Device"
            },
            DeviceRepos: {
                Title: "Device Repositories",
                Greeting: "Manage your Device Repositories."
            },
            DeviceRepo: {
                Title: "Device Repository",
                Greeting: "You use the Device Repository to allocate storage for your Devices and Device Data."
            },
            DeviceArchives: {
                Title: "Device Historical Data",
                Greeting: "Shows Raw Values as Sent by your devices."
            }
        },
        DeviceAdmin: {
            Index: {
                Title: "Device Admin",
                Greeting: "Add Device Configurations, Shared Attributes, Shared Actions and State Machines",
                DeviceConfiguration: 'Device Configurations',
                SharedAttributes: 'Shared Attributes',
                SharedActions: 'Shared Actions',
                UnitSets: 'Unit Sets',
                StateMachines: 'State Machines'
            },
            DeviceTypes: {
                Title: "Device Types",
                Greeting: "A list of the Device Types used to Provision a New Device."
            },
            DeviceType: {
                Title: "Device Type",
                Greeting: "A Device Type is used to identify a specific model and manufacture for a device, when you Provision a New Device, you will select a Device Type."
            }
        },
        DeviceConfigs: {
            Index: {
                Title: "Device Configurations",
                Greeting: "Device Configurations are used to build the process for the Execution Pipeline to handle Messages To and From a Device."
            },
            Route: {
                Title: "Route",
                Greeting: "Use the Route Designer to select a message type, then for that message type select the Pipeline Modules that will be used to process the incoming messages.  You can click on Mapping to provide custom mappings between the modules (where applicable).",
                Mapping: "Mapping",
                AddTransmitter: "Add Transmitter",
                HandledMessages: "Supported Messages",
                MessageDefinition: "Message Definition",
                RouteNameRequired: "Route Name is Required",
                InputTranslatorRequired: "Input Translator is required to add a Transmitter",
                DeviceWorkflowRequired: "A Device Workflow is Required to modify a Transmitters mappings",
                NoMessagesDefined: "No messages have been mapped, please map a message between the Output Commands of your Workflow and Output Translator",
                CouldNotFindConnection: "Could not find connection, this is likely a system error.  You should remove your connections and nodes and recreate.",
                KeyRequired: "Key is required, and must be between 3 and 20 characters.  It may only contain lower case letters and numbers",
                KeyUnique: "Route Key must be unique within the device configuration.",
                MessagePlaceHolder: "-select message definition-"
            },
            DeviceConfig: {
                Title: "Device Configuration",
                Greeting: "Device Configurations are used to describe the process the Execution Pipeline for a specific set of Devices.",
                Planner: "Planner",
                Routes: "Routes",
                Properties: "Properties"
            },
            CustomProperty: {
                Title: "Properties",
                Greeting: "Properties are used to customize data that is available to the device.",
            },
            DeviceConfigCanvas: {
                Title: "Device Configuration Canvas",
                Greeting: "Visually Configure the Expection Pipeline for your Device Configuration."
            },
            InputMappings: {
                Title: "Message to Input Mapping",
                Greeting: "Select the Fields on the Message that will map to the Inputs on the Workflow",
                MessageField: "Message Field",
                WorkflowInput: "Workflow Input",
            },
            OutputCommandMappings: {
                Title: "Output Command to Message Mapping",
                Greeting:"Select the Output Commands from your Workfow and map them to Device Messages, then you can map the individual fields by pressing the edit button.",
                OutputCommand: "Output Command",
                DeviceMessages: "Device Messages",
                MessageIsRequired: "Please select a Device Message prior to mapping message fields.",
                OutputCommandRequired: "Please select an Output Command prior to mapping message fields."
            },
            OutputCommandFieldMappings: {
                Title: "Output Command Field Mappings",
                Greeting: "Once you have mapped an Output Command to a Device Message, you need to map the available fields in the output command to the fields in the message definition.",
                OutputCommand: "Output Command",
                DeviceMessages: "Device Messages",
                OutputCommandField: "Output Command Field",
                MessageField: "Message Field",
            },
            OuputTranslatorTransmitter: {
                Title: "Messages to Transmit",
                Greeting: "Select the Messages from the Output translator that will be sent to this transmitter.",
            }
        },

        DeviceMessageDefinitions: {
            Index: {
                Title: "Device Message Types",
                Greeting: "Devices send and receive data via messages.  You can define your messages here and resuse those across different applications."
            },
            DeviceMessageDefinition: {
                Title: "Device Message Type",
                Greeting: "You can use this powerful device message parser to extract values from your message for many different types of protocols and formats.  Once you have created your parser, the fields that you have extacted will be available to be used later in the workflow.",
                Fields: "Fields",
                SampleMessages: "Sample Messages",
                ContentTypeIsRequired: "Before you can Add or Edit Fields, you need to set the content type for your message.",
                ContentTypeChangedWarning: "You are attempting to change the content type after you have added fields to your message.  You will need to re-add your fields if you continue.  Continue and lose message fields?",
                ApplyChanges: "Attention - You must reload your solution for these changes to be applied"
            },
            DeviceMessageDefinitionField: {
                Title: "Message Field",
                Greeting: "A message is made up of individual fields, those fields contain data that is used in the rest of the device workflows.  You can use the tools and parsers provided here to extract values and make them available to your workflows.  Once the field is extracted it will be in a normalized format."
            },
            SampleMessages: {
                Title: "Sample Messages",
                Greeting: "A sample message contains the same content that will be sent along with the message.  It provides documentation and can be used to create message parsers, build verifiers as well as provide a starting point to create simulators."
            },
            SampleMessage: {
                Title: "Sample Message",
                Greeting: "A sample message contains the same content that will be sent along with the message.  It provides documentation and can be used to create message parsers, build verifiers as well as provide a starting point to create simulators."
            }
        },

        UnitSets: {
            Index: {
                Title: "Unit Sets",
                Greeting: "Unit Sets are Reusable components that you can use with your attributes to display and convert values based on business rules and user preferences."
            },
            UnitSet: {
                Title: "Unit Set",
                Greeting: "Create a Unit Set that has units that an be applied to a sensor or attribute."
            },
            UnitConversionScript: {
                Title: "Unit Conversion Script",
                Greeting: "If the conversion between this unit and the default unit is more complex you can provide a script that will be used to convert this unit to the default unit.",
                ConvertToScriptCaption: "Conversion to Default Unit Script",
                ConvertFromScriptCaption: "Conversion from Default Unit Script",
                TestValue: "Test Value"
            },
            Unit: {
                Title: "Unit",
                Greeting: "Create a Unit that is part of a Unit Set.  Only one unit is considered the default and is used to store the data, once your configuration is in use you can not change the default unit.",
                ChangeDefaultUnitPrompt: "You already have a default unit defined.  This this unit will reset the previous one.  If your device configuration is in use, you can not change the default unit.  Would you like to make this the default unit?",
                ChangedDefaultUnit: "You have changed the default unit for this unit set.  The original unit sets conversion type was set to be a factor of 1.0, you likely will want to change that.",
                ChangeToFormula: "Currently your conversion type is a simple factor.  Would you like to change it to enter a formula?"
            }
        },

        SharedAttributes: {
            Index: {
                Title: "Shared Attributes",
                Greeting: "Shared attributes are properties that you can create that describe certain aspects of your sensors that can be used on many device configurations"
            },
            SharedAttribute: {
                Title: "Shared Attribute",
                Greeting: "Shared attributes are properties that you can create that describe certain aspects of your sensors that can be used on many device configurations"
            }
        },
        SharedActions: {
            Index: {
                Title: "Shared Actions",
                Greeting: "Shared actions are functions that manipulate the state of your device configurations."
            },
            SharedAction: {
                Title: "Shared Action",
                Greeting: "Shared actions are functions that manipulate the state of your device configurations."
            }
        },
        StateSets: {
            StateSets: {
                Title: "State Sets",
                Greeting: "State Sets can be used to define a finite set of conditions or states.  These states can be thinks like On/Off or Running/Idle/Error, a state set can be in exactly one state at any given time.  Knowing the state can determine what actions or activities can be accomplished for that given state"
            },
            StateSet: {
                Title: "State Set",
                Greeting: "A State Set can be used to define a finite set of conditions or states.  These states can be thinks like On/Off or Running/Idle/Error, a state set can be in exactly one state at any given time.  Knowing the state can determine what actions or activities can be accomplished for that given state"
            },
            State: {
                DeleteInitialStatePrompt: "The state you are attempting to delete is the initial state.  You can delete this state however you will need to choose a different state as the initial state prior to saving your State machine",
                Title: "State",
                Greeting: "-"
            }
        },
        State: {
            Title: "State",
            Greeting: "A particular configuration or status"
        },
        StateMachines: {
            Index: {
                Title: "State Machines",
                Greeting: "State machines allow you use certain conditions of your devices to configure behaviors" 
            },
            EventSets: {
                Title: "Event Set",
                Greeting: "-"
            },
            EventSet: {
                Title: "Event Set",
                Greeting: "-"
            },
            StateMachine: {
                Title: "State Machine",
                Greeting: "-",
                CreateNew: "Create New",
                Menu: {
                    AddNewState: "Add New State",
                    AddNewPage: "Add New Page"
                },
                PageNumber: "Page ",
                AddPage: "New Page",
                AddPageHelp: "Add additional pages to help organize your work flow, elements you add on one page can be shared on other pages.  You can not however add duplicate transitions for events on different pages.",
                PageLabel: "Page",
                ExistingEvent: "-select an existing event-",
                NoExistingEventsAvailable: "-please create a new event-",

                ExistingState: "-select an existing state-",
                NoExistingStateAvailabel: "-please create a new state-",

                MissingExistingEvent: "Please Select an Existing Event to associate with your transition.",
                MissingExistingState: "Please Select an Existing State to add to the page.",
                EventKeyInUse: "The Key you specified for your New Event is already in use.  Please select a new one.",
                StateKeyInUse: "The Key you specified for your New State is already in use.  Please select a new one.",
                AddExistingState: "Add Existing State",
                AddExistingEvent: "Add Existing Event",
                AddNewState: "Add New State",
                AddNewEvent: "Add New Event"
            },
            Transition: {
                Title: "Transition",
                Greeting: "Manage the Transitions Between States",
                OnTransitionScript: "On Transition Behavior",
                EventName: "Event Name",
                EventNameWaterMark: "event name is required"
            },
            Event: {
                Title: "Event",
                Greeting: "-"
            },
            Menu:
            {
                AddNewState: "Add New State"
            }
        },
        Settings: {
            Menu: {
                UnitSet: "Unit Sets",
                StateSets: "State Sets",
                DeviceTypes: "Device Types",
                MessageDefinitions: "Message Definitions",
                Subscriptions: "Subscriptions",
                DeviceRepos: "Device Repositories",
                Products: "Products",
                Surveys: "Surveys",
                TaskTemplates: "Task Templates",
                Projects: "Projects"
            }
        },
        DeviceWorkflows: {
            DeviceWorkflows: {
                Title: "Device Workflows"
            },
            DeviceWorkflow: {
                Title: "Device Workflow",
                Greeting: "Configure your Device Workflow"
            }
        },

        WorkflowInputs: {
            WorkflowInput: {
                Title: "Input",
                Greeting: "Input are the points where data comes into your workflow from a message, inputs are mapped to message fields via a route."
            }
        },

        InputCommands: {
            InputCommand: {
                Title: "Input Command",
                Greeting: "An Input Command will Expose methods on your device as a REST Service.",
                EndPointTypeRequired:"Please select an endpoint type prior to adding or editing parameters"
            },
            InputCommandParameter: {
                Title: "Parameter",
                Greeting: "You can specify parameters that will get passed in as an input parameter for your command."
            }
        },

        OutputCommands: {
            OutputCommand: {
                Title: "Output Command",
                Greeting: "Output Commands are used to assemble a message that can be sent back to the device or to an external data source."
            }
        },

        Attributes: {
            Attribute: {
                Title: "Attribute",
                Greeting: "Attributes are used to store data associated with your devices and workflow.  Attributes are specific to a device."
            }
        },

        Deployment: {
            Index: {
                Title: "Deployments",
                Greeting: "Deploy Your Solution"
            },
            Solutions: {
                Title: "Solutions",
                Greeting: "Solutions are a Collection of Device Configurtions and how the server infrastructure should be hosted."
            },
            Solution: {
                Title: "Solution",
                Greeting: "",
                Listeners: "Listeners",
                DeviceConfiguration: "Device Configurations",
                Resources: "Resources"
            },
            DeploymentActivities: {
                Title: "Deployment Activities",
                Greeting: "Shows activities and their status that have taken place."
            },
            DeploymentInstances: {
                Title: "Instances",
                Greeting: ""
            },
            DeploymentInstance: {
                Title: "Instance",
                Greeting: "",
                ManageInstance: "Manage Instance",
                RunningWarning: "Attention!  Your instances is currently deployed. You must stop your instance prior to making any changes to your instance configuration. You may however make changes to the solution and update them on the Manage Instances page."
            },
            ManageInstance: {
                Title: "Manage Instance",
                Greeting: "",
                Deploy: "Deploy Host",
                DeployHelp: "Deploy your host, this will start the server as well as the attached instance.",
                Reset: "Reset Host",
                ResetHelp: "Reset your host, this is the same as rebooting your server.",
                Remove: "Remove Host",
                RemoveHelp: "Remove your host, this will deallocate compute resources and you will no longer be charged.",
                Start: "Start Instance",
                StartHelp: "Start your instance",
                Stop: "Stop Instance",
                StopHelp: "Stop your instance, you will continue to incur charges unless you remove your host.",
                Pause: "Pause Instance",
                PauseHelp: "Pause your instance, this effectively causes the listeners to stop listening, any messages that are being processed will finish processing",
                UpdateSolution: "Reload Solution",
                UpdateSolutionHelp: "Update the solution your instance is running to a new version, you should do this when you make changes to your solution",

                UpdateRuntime: "Update Runtime",
                UpdateRuntimeHelp: "Update your host to a new runtime, your instance can not be running to update.",

                HostTelemetry: "Host",
                InstanceTelemetry: "Instance",

                Completed: "Completed",
                Failed: "Failed",
                InProcess: "In Process",

                Monitor: "Monitor",
                Explorer: "Instance Explorer",

                Status: "Status",
                Activities: "Activities",
                Telemetry: "Telemetry",
                ActivityHistory: "Activity History",

                HostStatus: "Host Status:",
                InstanceStatus: "Instance Status:",

                ShowMonitorSite: "Show Monitoring Site",

                ShowInProcessActivities: "Show In Process Activities",
                ShowCompletedActivities: "Show Completed Activities",
                SHowFailedActivities: "Show Failed Activities",

                SentRemove: "Queued Server Remove Request",
                SentDeploy: "Queued Server Deploy Request",
                SentReset: "Queued Server Restart Request",
                SentStart: "Queued Instance Start Request",
                SentStop: "Queued Instance Stop Request",
                SentPause: "Queued Instance Pause Request",
                SentReloadSolution: "Queued Solution Reload Request",
                SentUpdateRuntime: "Queued Runtime Update Request"
            },
            ListenerView: {
                Title: "Listener Details",
                Greeting: "",
                Port: "Port",
                Type: "Type",
                Status: "Status"
            },
            InstanceExplorer: {
                Title: "Instance Explorer",
                Greeting: "",
                Sentinel: "Sentinel",
                InputTranslator: "Input Translator",
                Workflow: "Workflow",
                OutputTranslator: "Output Translator",
                Transmitter: "Transmitter"
            },
            DeviceMessageView: {
                Title: "Device Message Details",
                Greeting: "",
                MessageId: "Message Id",
                ContentType: "Content Type",
                Fields: "Fields",
                SampleMessages: "Sample Messages",
                PathAndQueryString: "Path/Query String",
                Topic: "Topic",
                Payload: "Payload",
                FieldName: "Name",
                JSONPath: "JSON Path",
                StorageType: "Storage Type"
            },
            PipelineModuleView: {
                Title: "Pipeline Module Details",
                Greeting: ""
            },
            PlannerView: {
                Title: "Planner Details",
                Greeting: ""
            },
            DeploymentHosts: {
                Title: "Hosts",
                Greeting: "",
                ManageHost: "Manage Host",
                SelectContainerRepository: "Please select a container repository prior to picking a tag."
            },
            ManageHost: {
                Title: "Manage Host",
                Greeting: "",
                SentDestroy: "Sent Undeploy Command",
                SentDeploy: "Sent Deploy Command",
                SentReset: "Sent Reset Command"
            },
            DeploymentHost: {
                Title: "Host",
                Greeting: ""
            },
            Telemetry: {
                Title: "Telemetry",
                Greeting: "View Latest Events",
                ShowCustomEvents: "Show Custom Events",
                ShowExceptions: "Show Exceptions"
            },
            TelemetryDetail: {
                Title: "Telemetry Detail",
                Greeting: "Details for Telemetry"
            },
            ContainerRepositories: {
                Title: "Container Repositories",
                Greeting: "Container Repositories are a collection of containers of a specific type that can be used to deploy to your cloud Compute Resources"
            },
            ContainerRepository: {
                Title: "Container Repository",
                Greeting: "A Container Repository is a collection of containers of a specific type that can be used to deploy to your cloud Compute Resources",
                Tags: "Tags",
                ImportTags: "Import Tags",
                TagExists: "The tag has already been assinged: "
            },
            TaggedContainerPicker: {
                Title: "Tags",
                Greeting: "Tags are Specific Versions of a Container that can be Installed on your cloud Compute Resources"
            },
            TaggedContainer: {
                Title: "Tag",
                Greeting: "A Tag is a Specific Version of a Container that can be Installed on your cloud Compute Resources"
            },
            ImportContainer: {
                Title: "Import Tag",
                Greeting: "You can select Tags that have been published at the host repository that you are able to deploy."
            }
        },
        DeploymentActivity: {
            Start: "Start",
            ActivityType: "Activity",
            Status: "Status",
            Duration: "Duration (ms)",
            Message: "Message"
        },
        Telemetry: {
            Timestamp: "Timestamp",
            Tag: "Tag",
            Event: "Event",
            OldState: "Old State",
            NewState: "New State"
        },
        Products: {
            Product: {
                Title: "Product",
                Greeting: ""
            },
            Products: {
                Title: "Products",
                Greeting: ""
            },
            ProductCategories: {
                Title: "Product Categories",
                Greeting: ""
            },
            ProductPicker: {
                Title: "Product Selector",
                Greeting: ""
            },
            ProductCategory: {
                Title: "Product Category",
                ShowProducts: "Show Products",
                Greeting: ""
            }
        },
        SurveyAdmin: {
            Surveys: {
                Title: "Surveys",
                Greeting: ""
            },
            Survey: {
                Title: "Survey",
                Greeting: ""
            },
            QuestionSet: {
                Title: "Question Set",
                Greeting: ""
            },
            Question: {
                Title: "Question",
                Greeting: ""
            },
            Answer: {
                Title: "Answer",
                Greeting: ""
            }
        },
        ProjectManagement: {
            Projects: {
                Title: "Projects",
                Greeting: ""
            },
            Project: {
                Title: "Project",
                Greeting: "",
                ShowProject: "Show Project",
                ShowTasks: "Show Tasks",
                ShowBacklog: "Show Backlog",
                ShowBoard: "Show Project Board",
                Sprints: "Sprint"
            },
            Sprints: {
                Title: "Sprints",
                Greeting: ""
            },
            Sprint: {
                Title: "Sprint",
                Greeting: ""
            },
            Tasks: {
                Title: "Tasks",
                Greeting: ""
            },
            Task: {
                Title: "Task",
                Greeting: ""
            },
            TaskTemplates: {
                Title: "Task Templates",
                Greeting: ""
            },
            TaskTemplate: {
                Title: "Task Template",
                Greeting: ""
            }
        },
        PEM: {
            Timestamp: "Timestamp",
            MessageId: "Message Id",
            Status: "Status",
            ProcessingMS: "Processing Time (ms)"
        },
        DeviceStudio: {
            Canvas: {
                Title: "Device Studio Canvas",
                Greeting: "Build and maintain device configurations",
                Menu: {
                    AddWorkflowInput: "Add Input",
                    AddAttribute: "Add New Attribute",
                    AddInputCommand: "Add New Input Command",
                    AddStateMachine: "Add New State Machine",
                    AddOutputCommand: "Add New Output Command",
                    Settings: "Add New Page",
                    AddNewPage: "Add New Page"
                },
                AddPage: "New Page",
                AddPageHelp: "Add additional pages to help organize your work flow, elements you add on one page can be shared on other pages.",
                PageLabel: "Page",
                PageNumber: "Page ",
                AddExisting: "Add Existing",
                CreateNewItemListPlaceHolder: "-create new item-",
                AddExistingHelp: "You can add an existing item if it's not on the current page you are working on.",
                MissingExistingNode: "Please select an existing item to add.",
                AddExitingNotAvailable: "-no existing items not already on this page-",                
                CreateNew: "Create New",
                EventIsRequired: "When mapping to a State Machine, event is required.",
                AddStateToAttribute: "Please add a State Set to your attribute",
                AddUnitSetToAttribute:" Please add a Unit Set to your attribute",
                AddStateToInput: "Please add a Set Set to your Input",
                AddUnitSetToInput:" PLease add a Unit Set to your Imput",
                InputCommandParameterIsRequired: "When mapping from an input command you will need to specify which input command parameter you should map to.",
                InputCommandAttributeMapping: "Input Command to Attribute Mapping",
                InputCommandAttributeMappingHelp: "When mapping an Input Command to An Attribute you must specify which of the values from the Input Command should be stored to the Attribute.",
                InputCommandAttributeMappingHelpField: "Select the field that will be mapped to and stored in the attribute.",
                StateMachineMapping:"State Machine Mapping",
                StateMachineMappingHelp: "When mapping to a State Machine you must select which event you want the state machine to handle.  If you are triggering this from an Input, Attribute the value associated with that field will be made available to the State Machines transition handler.  If you are triggering this from an input command, you need to select which field (if any) should be passed to the transition handler.",
                StateMachineEvent: "Event",
                StateMachineEventHelp:"Select the Event that will be triggers on the State Machine",
                InputCommandParameter: "Input Command Parameter",
                SelectInputCommandParameter: "Select the parameter from the input command that will passed to the transition handler.",

                DeleteConnection: "Delete Connection",
                DeleteConnectionNodes: "Delete Connection between Nodes"
            },
            ErrorMessages: {
                CannotEstablishConnection: "Can Not Add Connection"
            },
            ConnectionEditor: {
                Title: "Mapping Editor",
                Greeting: "With the mapping editor you can add a script and customize how data is passed between different objects.",
                MappingScript: "Mapping Script",
                ConfirmDeleteTitle: "Delete Connection",
                ConfirmDelete: "Are you sure you want to delete this connection? This cannot be undone."
            },
            Index: {
                Title: "Device Workflows",
                Gretting: "Create a new Device Workflow Edit an Existing One"
            },
            ScriptEditor: {
                Title: "Script Editor",
                Greeting: "You can edit scripts that are associated with your device workflow."
            }
        }
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
});
