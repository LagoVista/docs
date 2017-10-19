angular.module('nuviotApp').config(function ($translateProvider) {
    $translateProvider.translations('en', {
        TITLE: 'Hello',
        GREETING: 'Hello in English.',
        BUTTON_LANG_EN: 'English',
        BUTTON_LANG_DE: 'German',
        StandardButtons: {
            Save: "Save",
            Help: "Help",
            Yes: "Yes",
            No: "No",
            Ok: "OK",
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
            Unpublish: "Unpublish",
            Refresh: "Refresh"
        },
        Messages: {
            LoseChanges: "You have unsaved changes.  Are you sure you wish to cancel?",
            EnterValidInteger: "Please enter a Valid Integer number.",
            EnterValidDecimal: "Please enter a Valid Decimal number.",
            InvalidData: "You have entered invalid or incomplete data.",
            FixValidation: "Please correct the following issues",
            SystemError: "System Error",
            KeyInUse: "Keys must be unique, this key is already in use by: ",
            KeyInUseForNodeType: "Keys must be unique.  You already have: ",
            ConfirmDeleteTitle: "Confirm Delete",
            AreYouSure: "Are you sure?",
            PageNameMissing: "Page Name cannot be blank",
            ErrorCallingServer: "Error making a call to the server, please try again later.",
            FatalError: "A fatal error has occurred and the error has been logged.  It is recommended that you refresh your browser page before you continue.",
            ConfirmDelete: "Are you sure that you want to delete?  This cannot be undone.",
            ResourceNotFound: "Sorry, the resource requested from the server could not be found.  It is recommended that you reload your page.",
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
            SelectWaterMark:"-Select-",
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
            NamePlaceHolder: "Enter Name",
            KeyPlaceHolder: "Enter Key",
            MissingRequiredData: "Missing Required Data",
            Test: "Test",
            Reset: "Reset",
            HelpLinks: "More Help Links",
        },
        ExpertSystem: {
            Title: "Expert Systems",
            Session: "Session",
            Welcome: "Welcome to our Expert Systems A.I. Assistant",
            Greeting: "After answering as many questions as you can, our AI Assistant will create a customized project plan that includes tasks required to implement your system as well as any tasks that need to be completed in order to finalize the requirements.",
            GetStarted: "To get started, select an existing Expert Systems session or",
            CreateNew: "or Create a new one.",
            CreateNewTitle: "Create a New A.I. Session",
            CompleteTitle: "Complete Session",
            DontKnow: "I do not know right now",
            MyAnswer: "My Answer",
            OtherOption: "My Answer is not listed",
            Congratulations: "Congratulations",
            EndOfSurvey: "You have come to the end of the list of questions for this expert system.  For best results, we suggest that you review any questions that are not completed (in bold on the list to the left) prior to having our AI Assistant analyze your results.",
            ConfirmCompleteTitle: "Are you sure that you would like to finish this AI session and generate your project plan?  Please note that if you make further changes, you will be required to regenerate your project plan."
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
                Greeting: "Listeners are used to monitor a port, protocol or service for messages from your devices."
            },
            Planner: {
                Greeting: "After your message comes from the device, it is handed off to the Planner. The Planner is then responsible for using its Device ID and Message ID parsers for mapping the contents of a message for a particular device configuration to a route in order to perform additional processing."
            },
            Listener: {
                Greeting: "Configure your Listener to listen in on a port, protocol or service."
            },
            InputTranslator: {
                Greeting: "The Input Translator is used to transform the raw message received from the device to a set of key value pairs that can be used within your device workflow."
            },
            OutputTranslator: {
                Greeting: "The Output Translator is used to transform the key value pairs that are created as part of the workflow to the format the device is expecting so that they can be sent down to the device."
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
                Greeting: "A Planner relies on Device and Message ID parsers to extract Device and Message IDs from incoming messages.  You can extract values from different parts of the message and use different techniques to find the fields that you are looking for. In addition, you can build verifiers that will run tests against your parsers to ensure that they work as expected.",
                NoVerifiers: "There are currently no Verifiers on this field parser.  Click Edit and Add to create a Verifier."
            }
        },
        Misc: {
            HeaderNameWaterMark: "Header Name",
            HeaderValueWaterMark: "Header Value",
            ExpectedValueWaterMark: "Expected Value"
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
            Title: "Four Easy Steps to Register",
            CreateAccount: "Create a free Account, no credit card necessary",
            CreateOrg: "Create an Organization to manage your work",
            VerifyEmailAddress: "Verify your Email Address",
            VerifyPhoneNumber: "Verify your Phone Number",
        },
        ManageAccount: {
            AcceptInvite: {
                InviteMessage: " has invited you to ", /* This is put between persons name and org name, might not translate, please discuss */
                OptionsMessage: "You can either log in with an existing account or create a new one.",
                Register: "Register a New Account",
                Login: "Log in to an Existing Account"
            },
            Login: {
                Title: "Login",
                EmailAddress: "Email",
                EmailAddressPlaceHolder: "Enter your Email Address",
                EmailAddressRequired: "A Valid email address is required to log in.",
                Password: "Password",
                RememberMe: "Remember Me",
                PasswordPlaceHolder: "Enter your Password",
                PasswordRequired: "Please enter your Password before logging in.",
                LoginButton: "Login"
            },
            Members: {
                InviteSomeone: "Invite Someone",
                Role: "Role",
                Resend: "Resend",
                OrgAdmin: "Admin",
                Contributor: "Contributor",
                OrgMembers: "Organization Members",
                Members: "Members",
                DateInviteSent: "Date Sent"
            },
            Invite: {
                InviteSomeone: "Invite Someone",
                InviteUserName: "Name",
                InviteUserEmail: "Email Address",
                InviteUserMessage: "Message",
                Invite: "Invite",
                InvalidEmail: "Please enter a valid email address.",
                NameRequired: "Name is required",
                NamePlaceHolder: "Name of person to invite",
                EmailAddressPlaceHolder: "Email Address",
                MessagePlaceHolder: "Add a message to be sent with the invitation."
            },
            ChangePassword: {
                ChangePassword: "Change Password",
                NewPasswordConfirm: "Confirm New Password",
                NewPassword: "New Password",
                OldPassword: "Old Password",
                OldPasswordPlaceHolder: "Old Password",
                NewPasswordPlaceHolder: "New Password",
                NewPasswordConfirmPlaceHolder: "Confirm New Password",
                OldPasswordIsRequired: "Old Password is Required",
                InvalidNewPassword: "New password is required. It must be at least 6 characters and include at least one lowercase letter, one uppercase letter, and one number.",
                ConfirmPasswordMatch: "Confirm Password is required and must match New Password."
            },
            SwitchOrganization: {
                SwitchOrg: "Switch Organizations",
                Organization: "Organization",
                ReloadPleaseWait: "Please wait while your page is reloaded!"
            },
            Profile: {
                UserProfile: "Profile",
                FirstName: "First Name",
                LastName: "Last Name",
                FirstNameIsRequired: "First Name is required",
                LastNameIsRequired: "Last Name is required",
                FirstNamePlaceHolder: "First Name",
                LastNamePlaceHolder: "Last Name",
                SuccessMessage: "Profile Updated",
            },
            SendPasswordReset: {
                Title: "Send Password Reset Link",
                Greeting: "Please enter the email address you used to create your NuvIoT account and press Send Link. You will receive an email with a link that will allow you to reset your password.",
                Email: "Email Address",
                EmailPlaceHolder: "Email Address",
                EmailIsRequired: "A valid email address is required.",
                SuccessMessage: "If your email account is in the system, you will be sent a message with a link you can use to reset your password.  If you do not receive a Password Reset Email within 5 minutes, please check your junk or other folder.",
                SendLink: "Send Link"
            },
            Register: {
                Title: "Step 1 - Create your User Account",
                RegisterButton: "Register",
                FirstName: "First Name",
                FirstNamePlaceHolder: "Enter your First Name.",
                FirstNameIsRequired: "First Name is required.",
                LastName: "Last Name",
                LastNamePlaceHolder: "Enter your Last Name.",
                LastNameIsRequired: "Last Name is required.",
                Email: "Email",
                EmailPlaceHolder: "email address",
                EmailIsRequired: "A valid email address is required.",
                Password: "Password",
                PasswordPlaceHolder: "Create a password.",
                PasswordIsInvalid: "Password is required. It must be at least 6 characters and include at least one lowercase letter, one uppercase letter, and one number.",
                ConfirmPassword: "Confirm your Password",
                ConfirmPasswordPlaceHolder: "Reenter your Password.",
                ConfirmPasswordMatch: "Confirm Password is required and must match your password.",
                ResendConfirmationEmailButton: "Resend",
                ResentConfirmationEmail: "Confirmation email re-sent.",
                RegisterSuccess: "Congratulations!  Your account has been successfully created. Please check your inbox for a link you may follow to confirm your account.  If you do not receive an email, please check folders such as your clutter or junk folder.  To request that the confirmation email be re-sent, press the Re-send button."
            },
            ResetPassword: {
                Title: "Reset Password",
                Email: "Email Address",
                EmailPlaceHolder: "Email address",
                EmailIsRequired: "A valid Email Address is required.",
                NewPassword: "New Password",
                NewPasswordPlaceHolder: "New Password",
                InvalidNewPassword: "New Password is required.  It must be at least 6 characters and include at least one lowercase letter, one uppercase letter, and one number.",
                ConfirmPassword: "Confirm your password.",
                ConfirmPasswordPlaceHolder: "Re-enter your password.",
                ConfirmPasswordMatch: "Confirm Password is required and must match new password",
                ResetPasswordButton: "Reset Password",
                SuccessfulReset: "Congratulations! You have successfully changed your password. Please log in."
            },
            VerifyAccount: {
                Title: "Please Verify Your Account",
                Congratulations: "Your email address has been validated.  Please enter the Telephone Number of a phone that is capable of receiving SMS text messages.  This is required for two-factor authentication and will also allow you to send SMS notifications about events in your application.",
                PhoneNumber: "Telephone Number",
                PhoneNumberPlaceHolder: "Enter an SMS-enabled Telephone Number",
                PhoneNumberRequired: "A valid Telephone Number is required.",
                SendSMSCode: "Send SMS Code",
                ResendSMSCOde: "Resend SMS Code",
                VerifyCode: "Verify Code",
                SMSCodeSent: "A code has been sent to the phone number you provided.  Once it arrives, please enter the code and press Next.",
                ReceivedCode: "Received Code",
                ReceivedCodeIsRequired: "Received Code is required and should be a five or six-digit number.",
                ReceivedCodePlaceHolder: "Please enter the six-digit code that was sent to your phone.",
                EmailNotVerified: "Your email address has not been verified.  Please press Re-send to request another account verification email.  If you do not receive an email, please check other folders such as your clutter or junk folder."
            }
        },
        ManageOrg: {
            Create: {
                Title: "Create an Organization",
                Greeting: "Organizations are used to organize your IoT Applications and bring other people on board.  There is no cost for creating an Organization.",
                OrgName: "Organization Name",
                OrgNamePlaceHolder: "Enter your Organization's Name",
                OrgNameRequired: "Organization Name is required",
                OrgNamespace: "Namespace",
                OrgNamespacePlaceHolder: "Enter a Namespace for your Organization",
                OrgNamespaceHelp: "A Namespace is used to uniquely identify assets that you create, both in scripts and domain names.  Your Namespace must be at least 6 characters long and may consist of lowercase letters and numbers.",
                OrgNamespaceRequired: "Namespace is required and must be at least 6 characters long and may consist of lowercase letters and numbers.",
                WebSite: "Website",
                WebSitePlaceHolder: "Enter your Organization's Website URL (optional)",
                CreateOrgButton: "Create Organization",
                SuccessCreatingOrg: "Congratulations!  Your new Organization is all set up. You are ready to create some great IoT Applications.",
            }
        },
        Verifiers: {
            MessageFieldParserVerifiers: {
                Title: "Verifiers",
                Greeting: "Once you have created your parser, you should test it to make sure that it behaves as expected.  You can create a verifier that will take a sample message and run it through the verifier to ensure that you get the results you need, all without using actual devices.  As long as your devices send the messages you expect, the parser will behave the same and you will have the same fields available to the workflow.",
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
                Greeting: "Manage your Device Repositories"
            },
            DeviceRepo: {
                Title: "Device Repository",
                Greeting: "You use the Device Repository to allocate storage for your devices and device data."
            },
            DeviceArchives: {
                Title: "Device Historical Data",
                Greeting: "This shows raw values as sent by your devices."
            }
        },
        DeviceAdmin: {
            Index: {
                Title: "Device Admin",
                Greeting: "Add Device Configurations, Shared Attributes, Shared Actions, and State Machines.",
                DeviceConfiguration: 'Device Configurations',
                SharedAttributes: 'Shared Attributes',
                SharedActions: 'Shared Actions',
                UnitSets: 'Unit Sets',
                StateMachines: 'State Machines'
            },
            DeviceTypes: {
                Title: "Device Types",
                Greeting: "This is a list of the Device Types used to provision a new device."
            },
            DeviceType: {
                Title: "Device Type",
                Greeting: "A Device Type is used to identify a specific model and manufacturer for a device. When you provision a new device, you will select a Device Type."
            }
        },
        DeviceConfigs: {
            Index: {
                Title: "Device Configurations",
                Greeting: "Device Configurations are used to build the process for the execution pipeline to handle messages to and from a device."
            },
            Route: {
                Title: "Route",
                Greeting: "Use the Route Designer to select a message type. Then, for that message type, select the pipeline modules that will be used to process incoming messages.  You can click on Mapping to provide custom mappings between the modules, where applicable.",
                Mapping: "Mapping",
                AddTransmitter: "Add Transmitter",
                HandledMessages: "Supported Messages",
                MessageDefinition: "Message Definition",
                RouteNameRequired: "Route Name is required.",
                InputTranslatorRequired: "Input Translator is required to add a transmitter.",
                DeviceWorkflowRequired: "A Device Workflow is required to modify a transmitter's mappings.",
                NoMessagesDefined: "No messages have been mapped. Please map a message between the Output Commands of your workflow and the Output Translator.",
                CouldNotFindConnection: "Could not find a connection, this is likely a system error.  You should remove your connections and nodes and recreate.",
                KeyRequired: "Key is required, and must be between three and twenty characters.  It may only contain lowercase letters and numbers.",
                KeyUnique: "Route Key must be unique within the device configuration.",
                MessagePlaceHolder: "-select message definition-"
            },
            DeviceConfig: {
                Title: "Device Configuration",
                Greeting: "Device Configurations are used to describe the process of the execution pipeline for a specific set of devices.",
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
                Greeting: "Visually configure the execution pipeline for your Device Configuration."
            },
            InputMappings: {
                Title: "Message to Input Mapping",
                Greeting: "Select the fields on the Message that will map to the Inputs on the workflow.",
                MessageField: "Message Field",
                WorkflowInput: "Workflow Input",
            },
            OutputCommandMappings: {
                Title: "Output Command to Message Mapping",
                Greeting:"Select the Output Commands from your workflow and map them to the device Message. Then, map individual fields by pressing the Edit button.",
                OutputCommand: "Output Command",
                DeviceMessages: "Device Messages",
                MessageIsRequired: "Please select a Device Message prior to mapping message fields.",
                OutputCommandRequired: "Please select an output command prior to mapping message fields."
            },
            OutputCommandFieldMappings: {
                Title: "Output Command Field Mappings",
                Greeting: "Once you have mapped an Output Command to a Device Message, you need to map the available fields in the Output Command to the fields in the message definition.",
                OutputCommand: "Output Command",
                DeviceMessages: "Device Messages",
                OutputCommandField: "Output Command Field",
                MessageField: "Message Field",
            },
            OuputTranslatorTransmitter: {
                Title: "Messages to Transmit",
                Greeting: "Select the Messages from the Output Translator to send to this transmitter.",
            }
        },

        DeviceMessageDefinitions: {
            Index: {
                Title: "Device Message Types",
                Greeting: "Devices send and receive data via Messages.  You can define your messages here and reuse them across different applications."
            },
            DeviceMessageDefinition: {
                Title: "Device Message Type",
                Greeting: "You can use this powerful Device Message Parser to extract values from your message for many different types of protocols and formats.  Once you have created your parser, the fields that you have extracted will be available to be used later in the workflow.",
                Fields: "Fields",
                SampleMessages: "Sample Messages",
                ContentTypeIsRequired: "Before you can add or edit Fields, you must set the Content Type for your message.",
                ContentTypeChangedWarning: "You are attempting to change the Content Type after you have added fields to your message. If you continue, you will need to re-add your fields.  Do you wish to continue and lose message fields?",
                ApplyChanges: "Attention - You must reload your solution in order for these changes to be applied."
            },
            DeviceMessageDefinitionField: {
                Title: "Message Field",
                Greeting: "A Message is made up of individual fields. Those fields contain data that is used in the rest of the device workflows.  You can use the tools and parsers provided here to extract values and make them available to your workflows.  Once the field is extracted, it will be in a normalized format."
            },
            SampleMessages: {
                Title: "Sample Messages",
                Greeting: "A Sample Message contains the same content that will be sent along with the message.  It provides documentation and can be used to create message parsers, build verifiers, and provide a starting point for creating simulators."
            },
            SampleMessage: {
                Title: "Sample Message",
                Greeting: "A Sample Message contains the same content that will be sent along with the message.  It provides documentation and can be used to create message parsers, build verifiers, and provide a starting point for creating simulators."
            }
        },

        UnitSets: {
            Index: {
                Title: "Unit Sets",
                Greeting: "Unit Sets are reusable components that you can use with your attributes to display and convert values based on business rules and user preferences."
            },
            UnitSet: {
                Title: "Unit Set",
                Greeting: "Create a Unit Set that has units that can be applied to a sensor or attribute."
            },
            UnitConversionScript: {
                Title: "Unit Conversion Script",
                Greeting: "If the conversion between this unit and the default unit is more complex, you can provide a script that will be used to convert this unit to the Default Unit.",
                ConvertToScriptCaption: "Conversion to Default Unit Script",
                ConvertFromScriptCaption: "Conversion from Default Unit Script",
                TestValue: "Test Value"
            },
            Unit: {
                Title: "Unit",
                Greeting: "Create a Unit that is part of a Unit Set.  Only one unit is considered the default and is used to store the data. Once your configuration is in use, you cannot change the Default Unit.",
                ChangeDefaultUnitPrompt: "You already have a Default Unit defined.  This unit will reset the previous one.  If your device configuration is in use, you cannot change the Default Unit.  Would you like to make this the default unit?",
                ChangedDefaultUnit: "You have changed the Default Unit for this unit set.  The original unit set's conversion type was set to be a factor of 1.0, you likely will want to change that.",
                ChangeToFormula: "Currently, your Conversion Type is a simple factor.  Would you like to change it to enter a formula?"
            }
        },

        SharedAttributes: {
            Index: {
                Title: "Shared Attributes",
                Greeting: "Shared Attributes are properties that you can create that describe certain aspects of your sensors that can be used on many device configurations."
            },
            SharedAttribute: {
                Title: "Shared Attribute",
                Greeting: "Shared Attributes are properties that you can create that describe certain aspects of your sensors that can be used on many device configurations."
            }
        },
        SharedActions: {
            Index: {
                Title: "Shared Actions",
                Greeting: "Shared Actions are functions that manipulate the state of your device configurations."
            },
            SharedAction: {
                Title: "Shared Action",
                Greeting: "Shared Actions are functions that manipulate the state of your device configurations."
            }
        },
        StateSets: {
            StateSets: {
                Title: "State Sets",
                Greeting: "State Sets can be used to define a finite set of conditions or states.  These states can be things like On/Off or Running/Idle/Error.  A State Set can be in exactly one state at any given time.  Knowing the state can determine what actions or activities can be accomplished for that given state."
            },
            StateSet: {
                Title: "State Set",
                Greeting: "A State Set can be used to define a finite set of conditions or states.  These states can be things like On/Off or Running/Idle/Error. A State Set can be in exactly one state at any given time.  Knowing the state can determine what actions or activities can be accomplished for that given state."
            },
            State: {
                DeleteInitialStatePrompt: "The state you are attempting to delete is the Initial State.  You can delete this state, but you will need to choose a different state as the Initial State prior to saving your State Machine.",
                Title: "State",
                Greeting: "-"
            }
        },
        State: {
            Title: "State",
            Greeting: "A State is a particular configuration or status."
        },
        StateMachines: {
            Index: {
                Title: "State Machines",
                Greeting: "State Machines allow you use certain conditions of your devices to configure behaviors." 
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
                AddPageHelp: "Add additional pages to help organize your workflow. Elements you add on one page can be shared on other pages.  You cannot, however, add duplicate transitions for events on different pages.",
                PageLabel: "Page",
                ExistingEvent: "-Select an Existing Event-",
                NoExistingEventsAvailable: "-Please create a New Event-",

                ExistingState: "-Select an Existing State-",
                NoExistingStateAvailabel: "-Please Create a New State-",

                MissingExistingEvent: "Please select an Existing Event to associate with your transition.",
                MissingExistingState: "Please select an Existing State to add to the page.",
                EventKeyInUse: "The Key you specified for your New Event is already in use.  Please select a new one.",
                StateKeyInUse: "The Key you specified for your New State is already in use.  Please select a new one.",
                AddExistingState: "Add Existing State",
                AddExistingEvent: "Add Existing Event",
                AddNewState: "Add New State",
                AddNewEvent: "Add New Event"
            },
            Transition: {
                Title: "Transition",
                Greeting: "Manage the Transitions between States",
                OnTransitionScript: "On Transition Behavior",
                EventName: "Event Name",
                EventNameWaterMark: "Event Name is required."
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
                Greeting: "Inputs are the points where data comes into your workflow from a message. Inputs are mapped to message fields via a route."
            }
        },

        InputCommands: {
            InputCommand: {
                Title: "Input Command",
                Greeting: "An Input Command will expose methods on your device as a REST Service.",
                EndPointTypeRequired:"Please select an Endpoint Type prior to adding or editing parameters."
            },
            InputCommandParameter: {
                Title: "Parameter",
                Greeting: "You can specify Parameters that will get passed in as an input parameter for your command."
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
                Greeting: "Solutions are a collection of device configurations and how the server infrastructure should be hosted."
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
                Greeting: "This displays activities and their status."
            },
            DeploymentInstances: {
                Title: "Instances",
                Greeting: ""
            },
            DeploymentInstance: {
                Title: "Instance",
                Greeting: "",
                ManageInstance: "Manage Instance",
                RunningWarning: "Attention!  Your Instance is currently deployed. You must stop your Instance prior to making any changes to your Instance Configuration. You may, however, make changes to the solution and update them on the Manage Instances page."
            },
            ManageInstance: {
                Title: "Manage Instance",
                Greeting: "",
                Deploy: "Deploy Host",
                DeployHelp: "Deploy your Host. This will start the server as well as the attached Instance.",
                Reset: "Reset Host",
                ResetHelp: "Reset your Host. This is the same as rebooting your server.",
                Remove: "Remove Host",
                RemoveHelp: "Remove your Host. This will deallocate compute resources and you will no longer be charged.",
                Start: "Start Instance",
                StartHelp: "Start your Instance.",
                Stop: "Stop Instance",
                StopHelp: "Stop your Instance. You will continue to incur charges unless you remove your host.",
                Pause: "Pause Instance",
                PauseHelp: "Pause your Instance. This effectively causes the listeners to stop listening. Any messages that are being processed will finish processing.",
                UpdateSolution: "Reload Solution",
                UpdateSolutionHelp: "Update the Solution your instance is running to a new version. You should do this when you make changes to your Solution.",

                UpdateRuntime: "Update Runtime",
                UpdateRuntimeHelp: "Update your host to a new Runtime. In order to update, your instance cannot be running.",

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

                ShowInProcessActivities: "Show In-process Activities",
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
                MessageId: "Message ID",
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
                Greeting: "Container Repositories are a collection of containers of a specific type that can be used to deploy to your cloud compute resources."
            },
            ContainerRepository: {
                Title: "Container Repository",
                Greeting: "A Container Repository is a collection of containers of a specific type that can be used to deploy to your cloud compute resources.",
                Tags: "Tags",
                ImportTags: "Import Tags",
                TagExists: "This Tag has already been assigned: "
            },
            TaggedContainerPicker: {
                Title: "Tags",
                Greeting: "Tags are specific versions of a container that can be installed on your cloud compute resources."
            },
            TaggedContainer: {
                Title: "Tag",
                Greeting: "A Tag is a specific version of a container that can be installed on your cloud compute resources."
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
            MessageId: "Message ID",
            Status: "Status",
            ProcessingMS: "Processing Time (ms)"
        },
        DeviceStudio: {
            Canvas: {
                Title: "Device Studio Canvas",
                Greeting: "Build and Maintain Device Configurations",
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
                AddPageHelp: "Add pages to help organize your workflow. Elements that you add on one page can be shared on other pages.",
                PageLabel: "Page",
                PageNumber: "Page ",
                AddExisting: "Add Existing",
                CreateNewItemListPlaceHolder: "-Create New Item-",
                AddExistingHelp: "You can add an existing item if it is not on the page you are currently working on.",
                MissingExistingNode: "Please select an existing item to add.",
                AddExitingNotAvailable: "-there are no existing items that are not already on this page-",                
                CreateNew: "Create New",
                EventIsRequired: "When mapping to a State Machine, Event is required.",
                AddStateToAttribute: "Please add a State Set to your Attribute.",
                AddUnitSetToAttribute:" Please add a Unit Set to your Attribute.",
                AddStateToInput: "Please add a Set to your Input.",
                AddUnitSetToInput:" Please add a Unit Set to your Input.",
                InputCommandParameterIsRequired: "When mapping from an Input Command, you will need to specify which Input Command parameter you should map to.",
                InputCommandAttributeMapping: "Input Command to Attribute Mapping",
                InputCommandAttributeMappingHelp: "When mapping an Input Command to an Attribute, you must specify which of the values from the Input Command should be stored to the Attribute.",
                InputCommandAttributeMappingHelpField: "Select the field that will be mapped to and stored in the Attribute.",
                StateMachineMapping:"State Machine Mapping",
                StateMachineMappingHelp: "When mapping to a State Machine, you must select which event you want the State Machine to handle.  If you are triggering this from an Input Attribute, the value associated with that field will be made available to the State Machine's transition handler.  If you are triggering this from an Input Command, you need to select which field, if any, should be passed to the transition handler.",
                StateMachineEvent: "Event",
                StateMachineEventHelp:"Select the Event that will be triggered on the State Machine.",
                InputCommandParameter: "Input Command Parameter",
                SelectInputCommandParameter: "Select the Parameter from the Input Command that will passed to the transition handler.",

                DeleteConnection: "Delete Connection",
                DeleteConnectionNodes: "Delete Connection between Nodes"
            },
            ErrorMessages: {
                CannotEstablishConnection: "Cannot Add Connection"
            },
            ConnectionEditor: {
                Title: "Mapping Editor",
                Greeting: "With the Mapping Editor, you can add a script and customize how data is passed between different objects.",
                MappingScript: "Mapping Script",
                ConfirmDeleteTitle: "Delete Connection",
                ConfirmDelete: "Are you sure you want to delete this connection? Please note that this action cannot be undone."
            },
            Index: {
                Title: "Device Workflows",
                Gretting: "Create a new Device Workflow or Edit an Existing One"
            },
            ScriptEditor: {
                Title: "Script Editor",
                Greeting: "You can edit Scripts that are associated with your device workflow."
            }
        }
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
});
