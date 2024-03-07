const messages = {
	en: {
	  translations: {
		languages: {
			undefined: "Language",
			ptBr: "Portuguese",
			es: "Spanish",
			en: "English",
			tr: "Turkish"
		},
		signup: {
			title: "Sign Up",
			toasts: {
			success: "User created successfully! Log in now!",
			fail: "Error creating user. Check the provided information.",
			},
			form: {
			name: "Name",
			email: "Email",
			password: "Password",
			},
			buttons: {
			submit: "Sign Up",
			login: "Already have an account? Log in!",
			returlogin: "Back to the main menu",
			send: "Send Email",
			},
		},
		todo: {
			newtask: "New Task",
			buttons: {
			add: "Add",
			},
		},
		login: {
			title: "Login",
			form: {
			email: "Email",
			password: "Password",
			},
			buttons: {
			submit: "Log In",
			register: "Don't have an account? Sign up!",
			returlogin: "Back to the main menu",
			send: "Send Email",
			},
		},
		resetpswd: {
			title2: "Reset Password",
			toasts: {
			  success: "Check your email inbox to proceed!",
			  resetsucess: "Password reset successfully. Return to the login screen to access the platform!",
			  fail: "Error resetting password. Check the provided token.",
			},
		  },
		  plans: {
			form: {
			  name: "Name",
			  users: "Users",
			  connections: "Connections",
			  queue: "Queues",
			  campaigns: "Campaigns",
			  schedules: "Schedules",
			  email: "Email",
			  chat: "Internal Chat",
			  api: "External API",
			  kanban: "Kanban",
			  integrations: "Integrations",
			  enabled: "Enabled",
			  disabled: "Disabled",
			  clear: "Clear",
			  delete: "Delete",
			  save: "Save",
			  yes: "Yes",
			  no: "No",
			  money: "R$",
			},
		  },
		  companies: {
			title: "Register Company",
			form: {
			  name: "Company Name",
			  plan: "Plan",
			  token: "Token",
			  submit: "Register",
			  success: "Company created successfully!",
			},
		  },
		  auth: {
			toasts: {
			  success: "Login successful!",
			},
			token: "Token",
		  },
		  dashboard: {
			charts: {
			  perDay: {
				title: "Today's Attendances: ",
			  },
			  filters: {
				startDate: "Start Date",
				endDate: "End Date",
				periodText: "Period",
				periodOptions: {
				  input: "Select the desired period",
				  zero: "No period selected",
				  three: "Last three days",
				  seven: "Last seven days",
				  fifteen: "Last fifteen days",
				  thirty: "Last thirty days",
				  sixty: "Last sixty days",
				  ninety: "Last ninety days",
				},
				duedate: "Due Date",
				filtertype: {
				  title: "Filter Type",
				  valueA: "Date Filter",
				  valueB: "Period Filter",
				  helperText: "Select the desired period",
				},
			  },
			},
			cards: {
			  attdPendants: "Pending Attendances",
			  attdHappening: "Ongoing Attendances",
			  attdPerformed: "Completed Attendances",
			  leads: "Leads",
			  mtofService: "Average Service Time",
			  mtofwaiting: "Average Waiting Time",
			},
			stadis: {
			  name: "Name",
			  calif: "Ratings",
			  timemedia: "Average Service Time",
			  statuschat: "Status (Current)",
			},
		  },
		  internalChat: {
			deletePrompt: "This action cannot be undone, confirm?",
		  },
		  connections: {
			title: "Connections",
			toasts: {
			  deleted: "WhatsApp connection deleted successfully!",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage: "Are you sure? This action cannot be undone.",
			  disconnectTitle: "Disconnect",
			  disconnectMessage: "Are you sure? You will need to read the QR Code again.",
			},
			buttons: {
			  add: "Add WhatsApp",
			  disconnect: "Disconnect",
			  tryAgain: "Try Again",
			  qrcode: "QR CODE",
			  newQr: "New QR CODE",
			  connecting: "Connecting",
			},
			toolTips: {
			  disconnected: {
				title: "Failed to start WhatsApp session",
				content: "Make sure your phone is connected to the internet and try again, or request a new QR Code",
			  },
			  qrcode: {
				title: "Waiting for QR Code scan",
				content: "Click the 'QR CODE' button and scan the QR Code with your phone to start the session",
			  },
			  connected: {
				title: "Connection established!",
			  },
			  timeout: {
				title: "Connection with the phone was lost",
				content: "Make sure your phone is connected to the internet and WhatsApp is open, or click the 'Disconnect' button to get a new QR Code",
			  },
			},
			table: {
			  name: "Name",
			  status: "Status",
			  lastUpdate: "Last Update",
			  default: "Default",
			  actions: "Actions",
			  session: "Session",
			},
		  },
		  whatsappModal: {
			title: {
			  add: "Add WhatsApp",
			  edit: "Edit WhatsApp",
			},
			form: {
			  name: "Name",
			  default: "Default",
			  sendIdQueue: "Queue",
			  timeSendQueue: "Redirect to queue in X minutes",
			  queueRedirection: "Queue Redirection",
			  queueRedirectionDesc: "Select a queue for contacts without a queue to be redirected",
			  prompt: "Prompt",
			  maxUseBotQueues: "Send bot X times",
			  timeUseBotQueues: "Interval in minutes between bot sends",
			  expiresTicket: "Close open chats after X minutes",
			  expiresInactiveMessage: "Inactive closure message",
			  geratoken: "Generate Token",
			},
			buttons: {
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			},
			success: "WhatsApp saved successfully.",
		  },
		  qrCode: {
			message: "Read the QR Code to start the session",
			title: "Use AutoAtende with your WhatsApp:",
			firstline: "Open WhatsApp on your phone",
			secondline: {
			  touch: "Touch More options on Android",
			  orsetting: "or Settings",
			  iphone: "on iPhone",
			},
			thirdline: "Touch Connected Devices and then Connect devices",
			fourthline: "Point your phone at this screen to capture the QR Code",
		  },
		  contacts: {
			title: "Contacts",
			toasts: {
			  deleted: "Contact deleted successfully!",
			  deletedAll: "All contacts deleted successfully!",
			},
			searchPlaceholder: "Search...",
			confirmationModal: {
			  deleteTitle: "Delete ",
			  deleteAllTitle: "Delete All",
			  importTitlte: "Import Contacts",
			  deleteMessage:
				"Are you sure you want to delete this contact? All related attendances will be lost.",
			  deleteAllMessage: "Are you sure you want to delete all contacts? All related tickets will be lost.",
			  importMessage: "Do you want to import all contacts from the phone?",
			},
			buttons: {
			  import: "Import Contacts",
			  add: "Add Contact",
			  delete: "Delete all contacts",
			  export: "Export contacts",
			},
			table: {
			  name: "Name",
			  whatsapp: "WhatsApp",
			  email: "Email",
			  actions: "Actions",
			},
		  },
		  queueIntegrationModal: {
			title: {
			  add: "Add Project",
			  edit: "Edit Project",
			},
			form: {
			  id: "ID",
			  type: "Type",
			  name: "Name",
			  projectName: "Project Name",
			  language: "Language",
			  jsonContent: "JsonContent",
			  urlN8N: "URL",
			  typebotSlug: "Typebot - Slug",
			  typebotExpires: "Time in minutes to expire a conversation",
			  typebotKeywordFinish: "Keyword to finish the ticket",
			  typebotKeywordRestart: "Keyword to restart the flow",
			  typebotRestartMessage: "Message when restarting the conversation",
			  typebotUnknownMessage: "Message for invalid option",
			  typebotDelayMessage: "Interval (ms) between messages",
			},
			buttons: {
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			  test: "Test Bot",
			},
			messages: {
			  testSuccess: "Integration tested successfully!",
			  addSuccess: "Integration added successfully.",
			  editSuccess: "Integration edited successfully.",
			},
		  },
		  promptModal: {
			form: {
			  name: "Name",
			  prompt: "Prompt",
			  voice: "Voice",
			  max_tokens: "Maximum Tokens in response",
			  temperature: "Temperature",
			  apikey: "API Key",
			  max_messages: "Maximum messages in History",
			  voiceKey: "Voice API Key",
			  voiceRegion: "Voice Region",
			},
			success: "Prompt saved successfully!",
			title: {
			  add: "Add Prompt",
			  edit: "Edit Prompt",
			},
			buttons: {
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			},
		  },
		  prompts: {
			title: "Prompts",
			table: {
			  name: "Name",
			  queue: "Department/Queue",
			  max_tokens: "Maximum Response Tokens",
			  actions: "Actions",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage: "Are you sure? This action cannot be undone!",
			},
			buttons: {
			  add: "Add Prompt",
			},
		  },
		  contactModal: {
			title: {
			  add: "Add Contact",
			  edit: "Edit Contact",
			},
			form: {
			  mainInfo: "Contact Information",
			  extraInfo: "Additional Information",
			  name: "Name",
			  number: "WhatsApp Number",
			  email: "Email",
			  extraName: "Field Name",
			  extraValue: "Value",
			  whatsapp: "Source Connection: ",
			  disableBot: "Disable chatbot for this contact",
			},
			buttons: {
			  addExtraInfo: "Add Information",
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			},
			success: "Contact saved successfully.",
		  },
		  queueModal: {
			title: {
			  add: "Add Queue",
			  edit: "Edit Queue",
			},
			form: {
			  name: "Name",
			  color: "Color",
			  greetingMessage: "Greeting Message",
			  complationMessage: "Completion Message",
			  outOfHoursMessage: "Out of Hours Message",
			  ratingMessage: "Rating Message",
			  token: "Token",
			  orderQueue: "Queue Order (Bot)",
			  integrationId: "Integration",
			},
			buttons: {
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			  attach: "Attach File",
			},
		  },
		  userModal: {
			title: {
			  add: "Add User",
			  edit: "Edit User",
			},
			form: {
			  name: "Name",
			  email: "Email",
			  password: "Password",
			  profile: "Profile",
			  whatsapp: "Default Connection",
			  startWork: "Start Time",
			  endWork: "End Time",
			  isTricked: "View Contacts",
			  spy: "Spy on Conversation",
			  enabled: "Enabled",
			  disabled: "Disabled",
			},
			buttons: {
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			},
			success: "User saved successfully.",
		  },
		  scheduleModal: {
			title: {
			  add: "New Schedule",
			  edit: "Edit Schedule",
			},
			form: {
			  body: "Message",
			  contact: "Contact",
			  sendAt: "Schedule Date",
			  sentAt: "Sent Date",
			},
			buttons: {
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			},
			success: "Schedule saved successfully.",
		  },
		  tagModal: {
			title: {
			  add: "New Tag",
			  edit: "Edit Tag",
			},
			form: {
			  name: "Name",
			  color: "Color",
			},
			buttons: {
			  okAdd: "Add",
			  okEdit: "Save",
			  cancel: "Cancel",
			},
			success: "Tag saved successfully.",
		  },
		  chat: {
			noTicketMessage: "Select a ticket to start a conversation.",
		  },
		  uploads: {
			titles: {
			  titleUploadMsgDragDrop: "DRAG AND DROP FILES INTO THE FIELD BELOW",
			  titleFileList: "File List"
			},
		  },
		  ticketsManager: {
			buttons: {
			  newTicket: "New",
			},
		  },
		  ticketsQueueSelect: {
			placeholder: "Queues",
		  },
		  tickets: {
			toasts: {
			  deleted: "The ticket you were on has been deleted.",
			},
			notification: {
			  message: "Message from",
			},
			tabs: {
			  open: { title: "Open" },
			  group: { title: "Groups" },
			  private: { title: "Private" },
			  closed: { title: "Closed" },
			  search: { title: "Search" },
			},
			search: {
			  placeholder: "Search for tickets and messages",
			},
			buttons: {
			  showAll: "All",
			},
		  },
		  transferTicketModal: {
			title: "Transfer Ticket",
			fieldLabel: "Type to search for users",
			fieldQueueLabel: "Transfer to queue",
			fieldQueuePlaceholder: "Select a queue",
			noOptions: "No user found with that name",
			fieldConnectionSelect: "Select a connection",
			buttons: {
			  ok: "Transfer",
			  cancel: "Cancel",
			},
		  },
		  ticketsList: {
			pendingHeader: "Pending",
			assignedHeader: "Being Attended",
			noTicketsTitle: "Nothing here!",
			noTicketsMessage:
			  "No ticket found with this status or searched term",
			buttons: {
			  accept: "Accept",
			  closed: "Close",
			  reopen: "Reopen"
			},
		  },
		  newTicketModal: {
			title: "Create Ticket",
			fieldLabel: "Type to search for the contact",
			add: "Add",
			buttons: {
			  ok: "Save",
			  cancel: "Cancel",
			},
			queue: "Select a queue",
			conn: "Select a connection",
		  },
		  ticketdetails: {
			iconspy: "Spy on Conversation",
			iconacept: "Accept Conversation",
			iconreturn: "Return to Queue",
			iconstatus: " NO QUEUE",
		  },
		  optionsPage: {
			calif: "Ratings",
			expedient: "Work Schedule Management",
			ignore: "Ignore Group Messages",
			aceptcall: "Accept Call",
			typechatbot: "Chatbot Type",
			sendanun: "Send greeting when accepting the ticket",
			sendagent: "Send queue/agent transfer message",
			createuser: "Enable user creation",
			integra: "INTEGRATIONS",
			buttons: {
			  off: "Disabled",
			  on: "Enabled",
			  offs: "Disabled",
			  ons: "Enabled",
			  quee: "Queue",
			  partner: "Company",
			  act: "Activated",
			  desact: "Deactivated",
			  callok: "Accept",
			  calldeny: "Do Not Accept",
			},
		  },
		  daysweek: {
			day1: "Monday",
			day2: "Tuesday",
			day3: "Wednesday",
			day4: "Thursday",
			day5: "Friday",
			day6: "Saturday",
			day7: "Sunday",
			save: "SAVE",
		  },
		  mainDrawer: {
			listTitle: {
			  service: "Service",
			  management: "Management",
			  administration: "Administration",
			},
			listItems: {
			  dashboard: "Dashboard",
			  connections: "Connections",
			  tickets: "Tickets",
			  tasks: "Tasks",
			  quickMessages: "Quick Messages",
			  contacts: "Contacts",
			  queues: "Queues & Chatbot",
			  tags: "Tags",
			  kanban: "Kanban",
			  email: "Email",
			  users: "Users",
			  settings: "Settings",
			  helps: "Help",
			  messagesAPI: "API",
			  schedules: "Schedules",
			  campaigns: {
				menu: "Campaigns",
				listing: "Listing",
				contactList: "Contact List",
				config: "Configurations",
			  },
			  annoucements: "Announcements",
			  chats: "Internal Chat",
			  financeiro: "Financial",
			  files: "File List",
			  prompts: "Open.Ai",
			  queueIntegration: "Integrations",          
			  companies: "Companies",
			  exit: "Exit",
			},
			appBar: {
			  greetings: {
				one: "Hello",
				two: "Welcome to",
				three: "Active until", 
			  },
			  user: {
				profile: "Profile",
				logout: "Logout",
			  },
			},
		  },
		  email: {
			subMenus: {
			  send: "Send Email",
			  sent: "Sent Emails",
			  schedule: "Schedule Send",
			  scheduled: "Scheduled Sends"
			}
		  },
		  todo: {
			newtask: "New Task",
			buttons: {
			  add: "Add",
			  edit: "Save",
			},
		  },
		  kanban: {
			defaultLane: "Default Tag",
			inopen: "Open",
			buttons: {
			  tags: {
				add: "New Tag"
			  },
			},
			subMenus: {
			  list: "Lanes",
			  tags: "Tags",
			},
			defaults: {
			  lane: "Default",
			},
		  },
		  tagsKanban: {
			title: {
			  main: "Tags",
			  editKanban: "Edit",
			},
			table: {
			  name: "Name",
			  tickets: "Tickets",
			  actions: "Actions",
			},
			confirmationModal: {
			  deleteTitle: "Delete Tag?",
			  deleteMessage: "The tag will be deleted from the system",
			},
		  },
		  tagModal: {
			buttons: {
			  cancel: "Cancel",
			  okEdit: "Edit",
			  okAdd: "Save",
			},
			form: {
			  name: "Name",
			  color: "Color",
			},
			title: {
			  addKanban: "Add Tag",
			  editKanban: "Edit Tag",
			  add: "Add Tag",
			  edit: "Edit Tag",
			},
		  },
		  queueIntegration: {
			title: "Integrations",
			table: {
			  id: "ID",
			  type: "Type",
			  name: "Name",
			  projectName: "Project Name",
			  language: "Language",
			  lastUpdate: "Last Update",
			  actions: "Actions",
			},
			buttons: {
			  add: "Add Project",
			},
			searchPlaceholder: "Search...",
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage:
				"Are you sure? This action cannot be undone! It will be removed from the queues and connections linked",
			},
		  },
		  files: {
			title: "File List",
			table: {
			  name: "Name",
			  contacts: "Contacts",
			  actions: "Action",
			},
			toasts: {
			  deleted: "List successfully deleted!",
			  deletedAll: "All lists deleted successfully!",
			},
			buttons: {
			  add: "Add",
			  deleteAll: "Delete All",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteAllTitle: "Delete All",
			  deleteMessage: "Are you sure you want to delete this list?",
			  deleteAllMessage: "Are you sure you want to delete all lists?",
			},
		  },
		  messagesAPI: {
			title: "API",
			doc: "Documentation for sending messages:",
			formMethod: "Send Method:",
			textMessage: {
			  number: "Number",
			  body: "Message",
			  token: "Registered Token",
			},
			mediaMessage: {
			  number: "Number",
			  body: "File Name",
			  media: "File",
			  token: "Registered Token",
			},
			buttons: {
			  submit: "Send",
			},
			helpTexts: {
			  textMsg: {
				title: "Text Message",
				info: "Below is the list of information needed to send text messages:",
				endpoint: "Endpoint: ",
				method: "Method: ",
				headers: "Headers: ",
				body: "Body: ",
			  },
			  test: "Send Test: ",
			  mediaMsg: {
				title: "Media Message",
				info: "Below is the list of information needed to send media messages:",
				endpoint: "Endpoint: ",
				method: "Method: ",
				headers: "Headers: ",
				body: "Body: ",
				formData: "FormData: ",
			  },
			  instructions: "Instructions",
			  notes: {
				title: "Important Notes",
				textA: "Before sending messages, it is necessary to register the token linked to the connection that will send the messages. <br/>To register, access the 'Connections' menu, click the edit button of the connection, and insert the token in the appropriate field.",
				textB: {
				  title: "The number for sending must not have a mask or special characters and must be composed of:",
				  partA: "Country Code",
				  partB: "Area Code",
				  partC: "Number",
				},
			  },
			},
		  },
		  notifications: {
			noTickets: "No notifications.",
		  },
		  quickMessages: {
			title: "Quick Messages",
			searchPlaceholder: "Search...",
			noAttachment: "No attachment",
			confirmationModal: {
			  deleteTitle: "Deletion",
			  deleteMessage: "This action is irreversible! Do you want to proceed?",
			},
			buttons: {
			  add: "Add",
			  attach: "Attach File",
			  cancel: "Cancel",
			  edit: "Edit",
			},
			toasts: {
			  success: "Shortcut added successfully!",
			  deleted: "Shortcut removed successfully!",
			},
			dialog: {
			  title: "Quick Message",
			  shortcode: "Shortcut",
			  message: "Response",
			  save: "Save",
			  cancel: "Cancel",
			  geral: "Allow editing",
			  add: "Add",
			  edit: "Edit",
			  visao: "Allow viewing",
			},
			table: {
			  shortcode: "Shortcut",
			  message: "Message",
			  actions: "Actions",
			  mediaName: "File Name",
			  status: "Status",
			},
		  },
		  messageVariablesPicker: {
			label: "Available Variables",
			vars: {
			  contactFirstName: "First Name",
			  contactName: "Name",
			  greeting: "Greeting",
			  protocolNumber: "Protocol",
			  date: "Date",
			  hour: "Hour",
			},
		  },
		  contactLists: {
			title: "Contact Lists",
			table: {
			  name: "Name",
			  contacts: "Contacts",
			  actions: "Actions",
			},
			buttons: {
			  add: "New List",
			},
			dialog: {
			  name: "Name",
			  company: "Company",
			  okEdit: "Edit",
			  okAdd: "Add",
			  add: "Add",
			  edit: "Edit",
			  cancel: "Cancel",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage: "This action cannot be undone.",
			},
			toasts: {
			  deleted: "Record deleted",
			},
		  },
		  contactListItems: {
			title: "Contacts",
			searchPlaceholder: "Search",
			buttons: {
			  add: "New",
			  lists: "Lists",
			  import: "Import",
			},
			dialog: {
			  name: "Name",
			  number: "Number",
			  whatsapp: "WhatsApp",
			  email: "Email",
			  okEdit: "Edit",
			  okAdd: "Add",
			  add: "Add",
			  edit: "Edit",
			  cancel: "Cancel",
			},
			table: {
			  name: "Name",
			  number: "Number",
			  whatsapp: "WhatsApp",
			  email: "Email",
			  actions: "Actions",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage: "This action cannot be undone.",
			  importMessage: "Do you want to import the contacts from this spreadsheet?",
			  importTitlte: "Import",
			},
			toasts: {
			  deleted: "Record deleted",
			},
		  },
		  campaigns: {
			title: "Campaigns",
			searchPlaceholder: "Search",
			buttons: {
			  add: "New Campaign",
			  contactLists: "Contact Lists",
			},
			table: {
			  name: "Name",
			  whatsapp: "Connection",
			  contactList: "Contact List",
			  status: "Status",
			  scheduledAt: "Scheduling",
			  completedAt: "Completed",
			  confirmation: "Confirmation",
			  actions: "Actions",
			},
			dialog: {
			  new: "New Campaign",
			  update: "Edit Campaign",
			  readonly: "View Only",
			  form: {
				name: "Name",
				message1: "Message 1",
				message2: "Message 2",
				message3: "Message 3",
				message4: "Message 4",
				message5: "Message 5",
				confirmationMessage1: "Confirmation Message 1",
				confirmationMessage2: "Confirmation Message 2",
				confirmationMessage3: "Confirmation Message 3",
				confirmationMessage4: "Confirmation Message 4",
				confirmationMessage5: "Confirmation Message 5",
				messagePlaceholder: "Message content",
				whatsapp: "Connection",
				status: "Status",
				scheduledAt: "Scheduling",
				confirmation: "Confirmation",
				contactList: "Contact List",
				tagList: "Tag List",
				fileList: "File List",
			  },
			  buttons: {
				add: "Add",
				edit: "Update",
				okadd: "Ok",
				cancel: "Cancel Campaigns",
				restart: "Restart Campaigns",
				close: "Close",
				attach: "Attach File",
			  },
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage: "This action cannot be undone.",
			},
			toasts: {
			  success: "Operation completed successfully",
			  cancel: "Campaign canceled",
			  restart: "Campaign restarted",
			  deleted: "Record deleted",
			},
		  },
		  announcements: {
			active: 'Active',
			inactive: 'Inactive',
			title: "Announcements",
			searchPlaceholder: "Search",
			buttons: {
			  add: "New Announcement",
			  contactLists: "Announcement Lists",
			},
			table: {
			  priority: "Priority",
			  title: "Title",
			  text: "Text",
			  mediaName: "File",
			  status: "Status",
			  actions: "Actions",
			},
			dialog: {
			  edit: "Announcement Editing",
			  add: "New Announcement",
			  update: "Update Announcement",
			  readonly: "View Only",
			  form: {
				priority: "Priority",
				title: "Title",
				text: "Text",
				mediaPath: "File",
				status: "Status",
			  },
			  buttons: {
				add: "Add",
				edit: "Update",
				okadd: "Ok",
				cancel: "Cancel",
				close: "Close",
				attach: "Attach File",
			  },
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage: "This action cannot be undone.",
			},
			toasts: {
			  success: "Operation completed successfully",
			  deleted: "Record deleted",
			},
		  },
		  campaignsConfig: {
			title: "Campaign Settings",
		  },
		  queues: {
			title: "Queues & Chatbot",
			table: {
			  name: "Name",
			  color: "Color",
			  greeting: "Greeting Message",
			  actions: "Actions",
			  orderQueue: "Queue Sorting (bot)",
			},
			buttons: {
			  add: "Add Queue",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage:
				"Are you sure? This action cannot be undone! The tickets from this queue will continue to exist but will no longer have any assigned queue.",
			},
		  },
		  queueSelect: {
			inputLabel: "Queues",
		  },
		  users: {
			title: "Users",
			table: {
			  name: "Name",
			  email: "Email",
			  profile: "Profile",
			  actions: "Actions",
			  startWork: "Start Time",
			  endWork: "End Time",
			},
			status: {
			  online: "Online Users",
			  offline: "Offline Users",
			},
			buttons: {
			  add: "Add User",
			},
			toasts: {
			  deleted: "User deleted successfully.",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage:
				"All user data will be lost. The open tickets from this user will be moved to the queue.",
			},
		  },
		  compaies: {
			title: "Companies",
			table: {
			  status: "Active",
			  name: "Name",
			  email: "Email",
			  numberAttendants: "Attendants",
			  numberConections: "Connections",
			  value: "Value",
			  namePlan: "Plan Name",
			  numberQueues: "Queues",
			  useCampaigns: "Campaigns",
			  useExternalApi: "Rest API",
			  useFacebook: "Facebook",
			  useInstagram: "Instagram",
			  useWhatsapp: "WhatsApp",
			  useInternalChat: "Internal Chat",
			  useSchedules: "Scheduling",
			  createdAt: "Created At",
			  dueDate: "Due Date",
			  lastLogin: "Last Login",
			  actions: "Actions",
			},
			buttons: {
			  add: "Add Company",
			},
			toasts: {
			  deleted: "Company deleted successfully.",
			},
			confirmationModal: {
			  deleteTitle: "Delete",
			  deleteMessage:
				"All company data will be lost. The open tickets from this user will be moved to the queue.",
			},
		  },
		  helps: {
			title: "Help Center",
		  },
		  schedules: {
			title: "Schedules",
			confirmationModal: {
			  deleteTitle: "Are you sure you want to delete this Schedule?",
			  deleteMessage: "This action cannot be undone.",
			},
			table: {
			  contact: "Contact",
			  body: "Message",
			  sendAt: "Scheduling Date",
			  sentAt: "Sending Date",
			  status: "Status",
			  actions: "Actions",
			},
			calendar: {
			  date: "Date",
			  time: "Time",
			  event: "Event",
			  allDay: "All Day",
			  week: "Week",
			  work_week: "Schedules",
			  day: "Day",
			  month: "Month",
			  previous: "Previous",
			  next: "Next",
			  yesterday: "Yesterday",
			  tomorrow: "Tomorrow",
			  today: "Today",
			  agenda: "Agenda",
			  noEventsInRange: "There are no schedules in this range.",
			},
			buttons: {
			  add: "New Schedule",
			},
			toasts: {
			  deleted: "Schedule deleted successfully.",
			},
		  },
		  tags: {
			title: "Tags",
			confirmationModal: {
			  deleteTitle: "Are you sure you want to delete this Tag?",
			  deleteMessage: "This action cannot be undone.",
			},
			table: {
			  name: "Name",
			  color: "Color",
			  tickets: "Tagged Records",
			  actions: "Actions",
			},
			buttons: {
			  add: "New Tag",
			},
			toasts: {
			  deleted: "Tag deleted successfully.",
			},
		  },
		  settings: {
			success: "Settings saved successfully.",
			title: "Settings",
			settings: {
			  userCreation: {
				name: "User Creation",
				options: {
				  enabled: "Enabled",
				  disabled: "Disabled",
				},
			  },
			  tabs: {
				options: "Options",
				schedules: "Schedules",
				companies: "Companies",
				plans: "Plans",
				helps: "Help",
			  },
			},
		  },
		  messagesList: {
			header: {
			  assignedTo: "Assigned to:",
			  buttons: {
				return: "Return",
				resolve: "Resolve",
				reopen: "Reopen",
				accept: "Accept",
			  },
			},
		  },
		  messagesInput: {
			placeholderOpen: "Type a message",
			placeholderClosed:
			  "Reopen or accept this ticket to send a message.",
			signMessage: "Sign",
		  },
		  message: {
			edited: "Edited",
			deleted: " Message deleted by Contact",
		  },
		  contactDrawer: {
			header: "Contact Information",
			buttons: {
			  edit: "Edit Contact",
			},
			extraInfo: "Other information",
		  },
		  fileModal: {
			title: {
			  add: "Add file list",
			  edit: "Edit file list",
			},
			buttons: {
			  okAdd: "Save",
			  okEdit: "Edit",
			  cancel: "Cancel",
			  fileOptions: "Add file",
			},
			form: {
			  name: "File list name",
			  message: "List details",
			  fileOptions: "File list",
			  extraName: "Message to send with file",
			  extraValue: "Option value",
			},
			success: "File list saved successfully!",
		  },
		  ticketOptionsMenu: {
			schedule: "Scheduling",
			delete: "Delete",
			transfer: "Transfer",
			registerAppointment: "Contact Notes",
			appointmentsModal: {
			  title: "Contact Notes",
			  textarea: "Note",
			  placeholder: "Enter the information you want to record here",
			},
			confirmationModal: {
			  title: "Delete the contact's ticket",
			  message:
				"Attention! All messages related to the ticket will be lost.",
			},
			buttons: {
			  delete: "Delete",
			  cancel: "Cancel",
			},
		  },
		  confirmationModal: {
			buttons: {
			  confirm: "Ok",
			  cancel: "Cancel",
			},
		  },
		  messageOptionsMenu: {
			delete: "Delete",
			reply: "Reply",
			edit: "Edit",
			confirmationModal: {
			  title: "Delete message?",
			  message: "This action cannot be undone.",
			},
			forward: "Select to forward", 
			forwardbutton: "FORWARD",
			forwardmsg1: "Forward message",
		  },
		  inputErrors: {
			tooShort: "Too short",
			tooLong: "Too long",
			required: "Required",
			email: "Invalid email address",
		  },
		  backendErrors: {
			ERR_NO_OTHER_WHATSAPP: "There must be at least one default WhatsApp.",
			ERR_NO_DEF_WAPP_FOUND:
			  "No default WhatsApp found. Check the connections page.",
			ERR_WAPP_NOT_INITIALIZED:
			  "This WhatsApp session has not been initialized. Check the connections page.",
			ERR_WAPP_CHECK_CONTACT:
			  "Could not check WhatsApp contact. Check the connections page.",
			ERR_WAPP_INVALID_CONTACT: "This is not a valid WhatsApp number.",
			ERR_WAPP_DOWNLOAD_MEDIA:
			  "Could not download media from WhatsApp. Check the connections page.",
			ERR_INVALID_CREDENTIALS:
			  "Authentication error. Please try again.",
			ERR_SENDING_WAPP_MSG:
			  "Error sending WhatsApp message. Check the connections page.",
			ERR_DELETE_WAPP_MSG: "Could not delete WhatsApp message.",
			ERR_OTHER_OPEN_TICKET: "There is already an open ticket for this contact.",
			ERR_SESSION_EXPIRED: "Session expired. Please log in.",
			ERR_USER_CREATION_DISABLED:
			  "User creation has been disabled by the administrator.",
			ERR_NO_PERMISSION: "You do not have permission to access this resource.",
			ERR_DUPLICATED_CONTACT: "A contact with this number already exists.",
			ERR_NO_SETTING_FOUND: "No setting found with this ID.",
			ERR_NO_CONTACT_FOUND: "No contact found with this ID.",
			ERR_NO_TICKET_FOUND: "No ticket found with this ID.",
			ERR_NO_USER_FOUND: "No user found with this ID.",
			ERR_NO_WAPP_FOUND: "No WhatsApp found with this ID.",
			ERR_CREATING_MESSAGE: "Error creating message in the database.",
			ERR_CREATING_TICKET: "Error creating ticket in the database.",
			ERR_FETCH_WAPP_MSG:
			  "Error fetching message from WhatsApp, it may be too old.",
			ERR_QUEUE_COLOR_ALREADY_EXISTS:
			  "This color is already in use, please choose another.",
			ERR_WAPP_GREETING_REQUIRED:
			  "Greeting message is required when there is more than one queue.",
			},
		},
	  },
	};
	
	export { messages };