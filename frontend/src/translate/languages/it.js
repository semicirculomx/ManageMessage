const messages = {
  it: {
      translations: {
        languages: {
          undefined: "Idioma",
          ptBr: "Português",
          es: "Español",
          en: "English",
          tr: "Türkçe"
        },
          signup: {
              title: "Registrazione",
              toasts: {
                  success: "Utente creato con successo! Effettua il login!!!.",
                  fail: "Errore durante la creazione dell'utente. Verifica i dati inseriti.",
              },
              form: {
                  name: "Nome",
                  email: "Email",
                  password: "Password",
              },
              buttons: {
                  submit: "Registrati",
                  login: "Hai già un account? Accedi!",
                  returlogin: "Torna al menu principale",
                  send :  "E-mail",
              },
          },
          resetpswd:{
            title2: "Reimpostare la password",
            toasts: {
              success: "Controlla la tua casella di posta elettronica per iniziare!",
              resetsucess: "Reimpostazione della password riuscita, torna alla schermata di login per accedere alla piattaforma!",
              fail: "Errore durante la creazione della reimpostazione della password. Verificare il token fornito.",
            },
          },
          login: {
              title: "Accesso",
              form: {
                  email: "Email",
                  password: "Password",
              },
              buttons: {
                  submit: "Accedi",
                  register: "Non hai un account? Registrati!",
              },
          },
          plans: {
              form: {
                  name: "Nome",
                  users: "Utenti",
                  connections: "Connessioni",
                  campaigns: "Campagne",
                  schedules: "Pianificazioni",
                  enabled: "Abilitate",
                  disabled: "Disabilitate",
                  clear: "Annulla",
                  delete: "Elimina",
                  save: "Salva",
                  yes: "Sì",
                  no: "No",
                  money: "€",
              },
          },
          companies: {
              title: "Registra Azienda",
              form: {
                  name: "Nome dell'Azienda",
                  plan: "Piano",
                  token: "Token",
                  submit: "Registra",
                  success: "Azienda creata con successo!",
              },
          },
          auth: {
              toasts: {
                  success: "Accesso effettuato con successo!",
              },
              token: "Token",
          },
          dashboard: {
              charts: {
                  perDay: {
                      title: "Assistenza oggi: ",
                  },
                  filters: {
                      startDate: "Data Iniziale",
                      endDate: "Data Finale",
                      periodText: "Periodo",
                      periodOptions: {
                          input: "Seleziona il periodo desiderato",
                          zero: "Nessun periodo selezionato",
                          three: "Ultimi tre giorni",
                          seven: "Ultimi sette giorni",
                          fifteen: "Ultimi quindici giorni",
                          thirty: "Ultimi trenta giorni",
                          sixty: "Ultimi sessanta giorni",
                          ninety: "Ultimi novanta giorni"
                      },
                      duedate: "Scadenza",
                      filtertype: {
                          title: "Tipo di Filtro",
                          valueA: "Filtro per Data",
                          valueB: "Filtro per Periodo",
                          helperText: "Seleziona il periodo desiderato",
                      },
                  },
              },
              cards: {
                  attdPendants: "Assistenza in sospeso",
                  attdHappening: "Assistenza in corso",
                  attdPerformed: "Assistenza effettuata",
                  leads: "Lead",
                  mtofService: "T.M. di Assistenza",
                  mtofwaiting: "T.M. di Attesa",
              },
          },
          kanban: {
              inopen: "Aperto",
          },
          todo: {
              newtask: "Nuovo compito",
              buttons: {
                  add: "Aggiungi",
                  edit: "Salva",
              },
          },
          internalChat: {
              deletePrompt: "Questa azione non può essere annullata, confermare?",
          },
          connections: {
              title: "Connessioni",
              toasts: {
                  deleted: "Connessione a WhatsApp eliminata con successo!",
              },
              confirmationModal: {
                  deleteTitle: "Elimina",
                  deleteMessage: "Sei sicuro? Quest'azione non può essere annullata.",
                  disconnectTitle: "Disconnetti",
                  disconnectMessage: "Sei sicuro? Dovrai leggere nuovamente il QR Code.",
              },
              buttons: {
                  add: "Aggiungi WhatsApp",
                  disconnect: "Disconnetti",
                  tryAgain: "Riprova",
                  qrcode: "QR CODE",
                  newQr: "Nuovo QR CODE",
                  connecting: "Connettendo",
              },
              toolTips: {
                  disconnected: {
                      title: "Errore durante l'inizio della sessione WhatsApp",
                      content: "Assicurati che il tuo cellulare sia connesso a Internet e riprova, o richiedi un nuovo QR Code",
                  },
                  qrcode: {
                      title: "In attesa della lettura del QR Code",
                      content: "Clicca sul pulsante 'QR CODE' e leggi il QR Code con il tuo cellulare per iniziare la sessione",
                  },
                  connected: {
                      title: "Connessione stabilita!",
                  },
                  timeout: {
                      title: "La connessione con il cellulare è stata persa",
                      content: "Assicurati che il tuo cellulare sia connesso a Internet e WhatsApp sia aperto, o clicca su 'Disconnetti' per ottenere un nuovo QR Code",
                  },
              },
              table: {
                  name: "Nome",
                  status: "Stato",
                  lastUpdate: "Ultimo aggiornamento",
                  default: "Predefinito",
                  actions: "Azioni",
                  session: "Sessione",
              },
          },
          whatsappModal: {
              title: {
                  add: "Aggiungi WhatsApp",
                  edit: "Modifica WhatsApp",
              },
              form: {
                  name: "Nome",
                  default: "Predefinito",
                  sendIdQueue: "Coda",
                  timeSendQueue: "Ridireziona alla coda tra X minuti",
                  queueRedirection: "Ridirezionamento della Coda",
                  queueRedirectionDesc: "Seleziona una coda per redirigere i contatti che non hanno una coda",
                  prompt: "Prompt",
                  maxUseBotQueues: "Invia bot X volte",
                  timeUseBotQueues: "Intervallo in minuti tra l'invio del bot",
                  expiresTicket: "Chiudi chat aperte dopo X minuti",
                  expiresInactiveMessage: "Messaggio di chiusura per inattività",
                  geratoken: "Genera token",
              },
              buttons: {
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
              },
              success: "WhatsApp salvato con successo.",
          },
          qrCode: {
              message: "Leggi il QrCode per avviare la sessione",
              title: "Utilize o AutoAtende com seu WhatsApp:",
                    firstline: "Apri WhatsApp sul tuo telefono",
                    secondline: {
                      touch: "Tocca Altre opzioni su Android",
                      orsetting: "o Impostazioni",
                      iphone: "su iPhone",
                    },
                    thirdline: "Tocca Dispositivi connessi, quindi tocca Connetti dispositivi",
                    fourthline: "Punta il telefono su questa schermata per acquisire il codice QR",
          },
          contacts: {
              title: "Contatti",
              toasts: {
                  deleted: "Contatto eliminato con successo!",
              },
              searchPlaceholder: "Ricerca...",
              confirmationModal: {
                  deleteTitle: "Elimina ",
                  deleteAllTitle: "Elimina tutti",
                  importTitlte: "Importa contatti",
                  deleteMessage: "Sei sicuro di voler eliminare questo contatto? Tutte le assistenze correlate saranno perse.",
                  deleteAllMessage: "Sei sicuro di voler eliminare tutti i contatti? Tutte le assistenze correlate saranno perse.",
                  importMessage: "Vuoi importare tutti i contatti dal telefono?",
              },
          },
          buttons: {
              import: "Importa Contatti",
              add: "Aggiungi Contatto",
              delete: "Elimina tutti i contatti",
              export: "Esporta contatti",
          },
          table: {
              name: "Nome",
              whatsapp: "WhatsApp",
              email: "Email",
              actions: "Azioni",
          },
          },
          queueIntegrationModal: {
              title: {
                  add: "Aggiungi progetto",
                  edit: "Modifica progetto",
              },
              form: {
                  id: "ID",
                  type: "Tipo",
                  name: "Nome",
                  projectName: "Nome del Progetto",
                  language: "Lingua",
                  jsonContent: "Contenuto Json",
                  urlN8N: "URL",
                  typebotSlug: "Typebot - Slug",
                  typebotExpires: "Tempo in minuti per scadere una conversazione",
                  typebotKeywordFinish: "Parola per concludere il ticket",
                  typebotKeywordRestart: "Parola per riavviare il flusso",
                  typebotRestartMessage: "Messaggio al riavvio della conversazione",
                  typebotUnknownMessage: "Messaggio opzione non valida",
                  typebotDelayMessage: "Intervallo (ms) tra i messaggi",   
              },
              buttons: {
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
                  test: "Testa Bot",
              },
              messages: {
                  testSuccess: "Integrazione testata con successo!",
                  addSuccess: "Integrazione aggiunta con successo.",
                  editSuccess: "Integrazione modificata con successo.",
              },
          },
          promptModal: {
              form: {
                  name: "Nome",
                  prompt: "Prompt",
                  voice: "Voce",
                  max_tokens: "Massimo di Token nella risposta",
                  temperature: "Temperatura",
                  apikey: "Chiave API",
                  max_messages: "Massimo di messaggi nella Cronologia",
                  voiceKey: "Chiave Voce API",
                  voiceRegion: "Regione Voce",
              },
              success: "Prompt salvato con successo!",
              title: {
                  add: "Aggiungi Prompt",
                  edit: "Modifica Prompt",
              },
              buttons: {
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
              },
          },
          prompts: {
              title: "Prompts",
              table: {
                  name: "Nome",
                  queue: "Settore/Fila",
                  max_tokens: "Massimo Token Risposta",
                  actions: "Azioni",
              },
              confirmationModal: {
                  deleteTitle: "Elimina",
                  deleteMessage: "Sei sicuro? Quest'azione non può essere annullata!",
              },
              buttons: {
                  add: "Aggiungi Prompt",
              },
          },
          contactModal: {
              title: {
                  add: "Aggiungi contatto",
                  edit: "Modifica contatto",
              },
              form: {
                  mainInfo: "Dati del contatto",
                  extraInfo: "Informazioni aggiuntive",
                  name: "Nome",
                  number: "Numero WhatsApp",
                  email: "Email",
                  extraName: "Nome del campo",
                  extraValue: "Valore",
                  whatsapp: "Connessione Origine: ",
                  disableBot: "Disabilita chatbot per questo contatto",
              },
              buttons: {
                  addExtraInfo: "Aggiungi informazione",
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
              },
              success: "Contatto salvato con successo.",
          },
          queueModal: {
              title: {
                  add: "Aggiungi coda",
                  edit: "Modifica coda",
              },
              form: {
                  name: "Nome",
                  color: "Colore",
                  greetingMessage: "Messaggio di benvenuto",
                  complationMessage: "Messaggio di conclusione",
                  outOfHoursMessage: "Messaggio fuori orario",
                  ratingMessage: "Messaggio di valutazione",
                  token: "Token",
                  orderQueue: "Ordine della coda (Bot)",
                  integrationId: "Integrazione",
              },
              buttons: {
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
                  attach: "Allega File",
              },
          },
          userModal: {
              title: {
                  add: "Aggiungi utente",
                  edit: "Modifica utente",
              },
              form: {
                  name: "Nome",
                  email: "Email",
                  password: "Password",
                  profile: "Profilo",
                  whatsapp: "Connessione Predefinita",
                  startWork: "Ora inizio",
                  endWork: "Ora fine",
                  spy: "Spiare la conversazione",
                  enabled: "Abilitato",
                  disabled: "Disabilitato",
              },
              buttons: {
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
              },
              success: "Utente salvato con successo.",
          },
          scheduleModal: {
              title: {
                  add: "Nuovo Pianificazione",
                  edit: "Modifica Pianificazione",
              },
              form: {
                  body: "Messaggio",
                  contact: "Contatto",
                  sendAt: "Data Pianificazione",
                  sentAt: "Data Invio",
              },
              buttons: {
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
              },
              success: "Pianificazione salvata con successo.",
          },
          tagModal: {
              title: {
                  add: "Nuova Tag",
                  edit: "Modifica Tag",
              },
              form: {
                  name: "Nome",
                  color: "Colore",
              },
              buttons: {
                  okAdd: "Aggiungi",
                  okEdit: "Salva",
                  cancel: "Annulla",
              },
              success: "Tag salvata con successo.",
          },
          chat: {
              noTicketMessage: "Seleziona un ticket per iniziare a conversare.",
          },
          uploads: {
              titles: {
                  titleUploadMsgDragDrop: "TRASCINA E LASCIARE I FILE NEL CAMPO SOTTOSTANTE",
                  titleFileList: "Lista dei file"
              },
          },
          uploads: {
              titles: {
                  titleUploadMsgDragDrop: "TRASCINA E LASCIARE I FILE NEL CAMPO SOTTOSTANTE",
                  titleFileList: "Lista dei file"
              },
          },
          ticketsManager: {
              buttons: {
                  newTicket: "Nuovo",
              },
          },
          ticketsQueueSelect: {
              placeholder: "Code di coda",
          },
          tickets: {
              toasts: {
                  deleted: "L'assistenza a cui stavi partecipando è stata eliminata.",
              },
              notification: {
                  message: "Messaggio di",
              },
              tabs: {
                  open: { title: "Aperti" },
                  group: { title: "Gruppi" },
                  private: { title: "Privati" },
                  closed: { title: "Risolti" },
                  search: { title: "Ricerca" },
              },
              search: {
                  placeholder: "Cerca assistenza e messaggi",
              },
              buttons: {
                  showAll: "Tutti",
              },
          },
          transferTicketModal: {
              title: "Trasferisci Ticket",
              fieldLabel: "Digita per cercare utenti",
              fieldQueueLabel: "Trasferisci alla coda",
              fieldQueuePlaceholder: "Seleziona una coda",
              noOptions: "Nessun utente trovato con questo nome",
              fieldConnectionSelect: "Seleziona una connessione",
              buttons: {
                  ok: "Trasferisci",
                  cancel: "Annulla",
              },
          },
          ticketsList: {
              pendingHeader: "In attesa",
              assignedHeader: "In corso",
              noTicketsTitle: "Niente qui!",
              noTicketsMessage:
                  "Nessun ticket trovato con questo stato o termine cercato",
              buttons: {
                  accept: "Accetta",
                  closed: "Chiudi",
                  reopen: "Riapri"
              },
          },
          newTicketModal: {
              title: "Crea Ticket",
              fieldLabel: "Digita per cercare il contatto",
              add: "Aggiungi",
              buttons: {
                  ok: "Salva",
                  cancel: "Annulla",
              },
              queue: "Seleziona una coda",
              conn: "Seleziona una connessione",
          },
          mainDrawer: {
            listTitle: {
              service: "Assistenza",
              management: "Gestione",
              administration: "Amministrazione",
            },
              listItems: {
                  dashboard: "Dashboard",
                  connections: "Connessioni",
                  tickets: "Assistenza",
                  tasks: "Compiti",
                  quickMessages: "Risposte Veloci",
                  contacts: "Contatti",
                  email: "Email",
                  queues: "Code & Chatbot",
                  tags: "Tag",
                  users: "Utenti",
                  settings: "Impostazioni",
                  helps: "Aiuto",
                  messagesAPI: "API",
                  schedules: "Pianificazioni",
                  campaigns: {
                      menu: "Campagne",
                      listing: "Elenco",
                      contactList: "Elenco Contatti",
                      config: "Configurazioni",
                  },
                  annoucements: "Comunicazioni",
                  chats: "Chat Interna",
                  financeiro: "Finanziario",
                  files: "Elenco file",
                  prompts: "Open.Ai",
                  queueIntegration: "Integrazioni",
                  exit: "Esci",
              },
              appBar: {
                  greetings: {
                      one: "Ciao",
                      two: "Benvenuto su",
                      three: "Attivo fino a", 
                  },
                  user: {
                      profile: "Profilo",
                      logout: "Esci",
                  },
              },
          },
          email: {
            subMenus:{
              send: "Invia e-mail",
              sent: "E-mail inviate",
              schedule: "Pianifica la spedizione",
              scheduled: "Invii programmati"
            }
          },
          queueIntegration: {
              title: "Integrazioni",
              table: {
                  id: "ID",
                  type: "Tipo",
                  name: "Nome",
                  projectName: "Nome del Progetto",
                  language: "Lingua",
                  lastUpdate: "Ultimo aggiornamento",
                  actions: "Azioni",
              },
              buttons: {
                  add: "Aggiungi Progetto",
              },
              searchPlaceholder: "Cerca...",
              confirmationModal: {
                  deleteTitle: "Elimina",
                  deleteMessage:
                      "Sei sicuro? Questa azione non può essere annullata! e sarà rimossa dalle code e connessioni collegate",
              },
          },
          files: {
              title: "Elenco dei file",
              table: {
                  name: "Nome",
                  contacts: "Contatti",
                  actions: "Azione",
              },
              toasts: {
                  deleted: "Elenco eliminato con successo!",
                  deletedAll: "Tutti gli elenchi sono stati eliminati con successo!",
              },
              buttons: {
                  add: "Aggiungi",
                  deleteAll: "Elimina Tutti",
              },
              confirmationModal: {
                  deleteTitle: "Elimina",
                  deleteAllTitle: "Elimina Tutti",
                  deleteMessage: "Sei sicuro di voler eliminare questo elenco?",
                  deleteAllMessage: "Sei sicuro di voler eliminare tutti gli elenchi?",
              },
          },
          messagesAPI: {
              title: "API",
              doc: "Documentazione per l'invio di messaggi:",
              formMethod: "Metodo di invio:",
              textMessage: {
                  number: "Numero",
                  body: "Messaggio",
                  token: "Token registrato",
              },
              mediaMessage: {
                  number: "Numero",
                  body: "Nome del file",
                  media: "File",
                  token: "Token registrato",
              },
              buttons: {
                  submit: "Invia",
              },
              helpTexts: {
                  textMsg: {
                      title: "Messaggio di Testo",
                      info: "Di seguito è riportato l'elenco delle informazioni necessarie per l'invio dei messaggi di testo:",
                      endpoint: "Endpoint: ",
                      method: "Metodo: ",
                      headers: "Intestazioni: ",
                      body: "Corpo: ",
                  },
                  test: "Test di invio: ",
                  mediaMsg: {
                      title: "Messaggio Multimediale",
                      info: "Di seguito è riportato l'elenco delle informazioni necessarie per l'invio dei messaggi multimediali:",
                      endpoint: "Endpoint: ",
                      method: "Metodo: ",
                      headers: "Intestazioni: ",
                      body: "Corpo: ",
                      formData: "FormData: ",
                  },
                  instructions: "Istruzioni",
                  notes: {
                      title: "Note importanti",
                      textA: "Prima di inviare messaggi, è necessario registrare il token associato alla connessione che invierà i messaggi. <br/>Per registrare il token, accedi al menu 'Connessioni', clicca sul pulsante modifica della connessione e inserisci il token nel campo apposito.",
                      textB: {
                          title: "Il numero da inviare non deve avere caratteri speciali o maschere e deve essere composto da:",
                          partA: "Prefisso Paese",
                          partB: "Prefisso Locale",
                          partC: "Numero",
                      },
                  },
              },
          },
          notifications: {
              noTickets: "Nessuna notifica.",
          },
          quickMessages: {
              title: "Risposte Veloci",
              searchPlaceholder: "Cerca...",
              noAttachment: "Nessun allegato",
              confirmationModal: {
                  deleteTitle: "Eliminazione",
                  deleteMessage: "Questa azione è irreversibile! Vuoi procedere?",
              },
              buttons: {
                  add: "Aggiungi",
                  attach: "Allega File",
                  cancel: "Annulla",
                  edit: "Modifica",
              },
              toasts: {
                  success: "Collegamento rapido aggiunto con successo!",
                  deleted: "Collegamento rapido rimosso con successo!",
              },
              dialog: {
                  title: "Messaggio Veloce",
                  shortcode: "Collegamento rapido",
                  message: "Risposta",
                  save: "Salva",
                  cancel: "Annulla",
                  geral: "Consenti modifica",
                  add: "Aggiungi",
                  edit: "Modifica",
                  visao: "Consenti visualizzazione",
              },
              table: {
                  shortcode: "Collegamento rapido",
                  message: "Messaggio",
                  actions: "Azioni",
                  mediaName: "Nome del File",
                  status: "Stato",
              },
          },
          messageVariablesPicker: {
              label: "Variabili disponibili",
              vars: {
                  contactFirstName: "Nome",
                  contactName: "Nome",
                  greeting: "Saluto",
                  protocolNumber: "Protocollo",
                  date: "Data",
                  hour: "Ora",
              },
          },
          contactLists: {
              title: "Elenchi Contatti",
              table: {
                  name: "Nome",
                  contacts: "Contatti",
                  actions: "Azioni",
              },
              buttons: {
                  add: "Nuovo Elenchi",
              },
              dialog: {
                  name: "Nome",
                  company: "Azienda",
                  okEdit: "Modifica",
                  okAdd: "Aggiungi",
                  add: "Aggiungi",
                  edit: "Modifica",
                  cancel: "Annulla",
              },
              confirmationModal: {
                  deleteTitle: "Elimina",
                  deleteMessage: "Questa azione non può essere annullata.",
              },
              toasts: {
                  deleted: "Record eliminato",
              },
          },
          contactListItems: {
              title: "Contatti",
              searchPlaceholder: "Ricerca",
              buttons: {
                  add: "Nuovo",
                  lists: "Elenchi",
                  import: "Importa",
              },
              dialog: {
                  name: "Nome",
                  number: "Numero",
                  whatsapp: "Whatsapp",
                  email: "E-mail",
                  okEdit: "Modifica",
                  okAdd: "Aggiungi",
                  add: "Aggiungi",
                  edit: "Modifica",
                  cancel: "Annulla",
              },
          },
          table: {
              name: "Nome",
              number: "Numero",
              whatsapp: "Whatsapp",
              email: "E-mail",
              actions: "Azioni",
            },
            confirmationModal: {
              deleteTitle: "Elimina",
              deleteMessage: "Questa azione non può essere annullata.",
              importMessage: "Vuoi importare i contatti da questo foglio? ",
              importTitlte: "Importare",
            },
            toasts: {
              deleted: "Record eliminato",
            },
            campaigns: {
              title: "Campagne",
              searchPlaceholder: "Ricerca",
              buttons: {
                add: "Nuova Campagna",
                contactLists: "Liste dei Contatti",
              },
              table: {
                name: "Nome",
                whatsapp: "Connessione",
                contactList: "Lista dei Contatti",
                status: "Stato",
                scheduledAt: "Pianificato",
                completedAt: "Completata",
                confirmation: "Conferma",
                actions: "Azioni",
              },
              dialog: {
                new: "Nuova Campagna",
                update: "Modifica Campagna",
                readonly: "Solo Visualizzazione",
                form: {
                  name: "Nome",
                  message1: "Messaggio 1",
                  message2: "Messaggio 2",
                  message3: "Messaggio 3",
                  message4: "Messaggio 4",
                  message5: "Messaggio 5",
                  confirmationMessage1: "Messaggio di Conferma 1",
                  confirmationMessage2: "Messaggio di Conferma 2",
                  confirmationMessage3: "Messaggio di Conferma 3",
                  confirmationMessage4: "Messaggio di Conferma 4",
                  confirmationMessage5: "Messaggio di Conferma 5",
                  messagePlaceholder: "Contenuto del messaggio",
                  whatsapp: "Connessione",
                  status: "Stato",
                  scheduledAt: "Pianificato",
                  confirmation: "Conferma",
                  contactList: "Lista dei Contatti",
                  tagList: "Lista di Tag",
                  fileList: "Lista dei File"
                },
                buttons: {
                  add: "Aggiungi",
                  edit: "Aggiorna",
                  okadd: "Ok",
                  cancel: "Annulla Dispari",
                  restart: "Riavvia Dispari",
                  close: "Chiudi",
                  attach: "Allega File",
                },
              },
              confirmationModal: {
                deleteTitle: "Elimina",
                deleteMessage: "Questa azione non può essere annullata.",
              },
              toasts: {
                success: "Operazione completata con successo",
                cancel: "Campagna annullata",
                restart: "Campagna riavviata",
                deleted: "Record eliminato",
              },
            },
            announcements: {
              active: 'Attivo',
              inactive: 'Inattivo',
              title: "Comunicati",
              searchPlaceholder: "Ricerca",
              buttons: {
                add: "Nuovo Comunicato",
                contactLists: "Liste di Comunicati",
              },
              table: {
                priority: "Priorità",
                title: "Titolo",
                text: "Testo",
                mediaName: "File",
                status: "Stato",
                actions: "Azioni",
              },
              dialog: {
                edit: "Modifica Comunicato",
                add: "Nuovo Comunicato",
                update: "Aggiorna Comunicato",
                readonly: "Solo Visualizzazione",
                form: {
                  priority: "Priorità",
                  title: "Titolo",
                  text: "Testo",
                  mediaPath: "File",
                  status: "Stato",
                },
                buttons: {
                  add: "Aggiungi",
                  edit: "Aggiorna",
                  okadd: "Ok",
                  cancel: "Annulla",
                  close: "Chiudi",
                  attach: "Allega File",
                },
              },
              confirmationModal: {
                deleteTitle: "Elimina",
                deleteMessage: "Questa azione non può essere annullata.",
              },
              toasts: {
                success: "Operazione completata con successo",
                deleted: "Record eliminato",
              },
            },
            campaignsConfig: {
              title: "Configurazioni delle Campagne",
            },
            queues: {
              title: "Code & Chatbot",
              table: {
                name: "Nome",
                color: "Colore",
                greeting: "Messaggio di benvenuto",
                actions: "Azioni",
                orderQueue: "Ordine della coda (bot)",
              },
              buttons: {
                add: "Aggiungi Coda",
              },
              confirmationModal: {
                deleteTitle: "Elimina",
                deleteMessage:
                  "Sei sicuro? Questa azione non può essere annullata! Le assistenze in questa coda continueranno a esistere, ma non avranno più una coda assegnata.",
              },
            },
            queueSelect: {
              inputLabel: "Code",
            },
            users: {
              title: "Utenti",
              table: {
                name: "Nome",
                email: "Email",
                profile: "Profilo",
                actions: "Azioni",
                startWork: "Orario di inizio",
                endWork: "Orario di fine",
              },
              buttons: {
                add: "Aggiungi Utente",
              },
              toasts: {
                deleted: "Utente eliminato con successo.",
              },
              confirmationModal: {
                deleteTitle: "Elimina",
                deleteMessage:
                  "Tutti i dati dell'utente saranno persi. Le assistenze aperte di questo utente saranno spostate nella coda.",
              },
            },
            helps: {
              title: "Centro Assistenza",
            },
            schedules: {
              title: "Pianificazioni",
              confirmationModal: {
                deleteTitle: "Sei sicuro di voler eliminare questa Pianificazione?",
                deleteMessage: "Questa azione non può essere annullata.",
              },
              table: {
                contact: "Contatto",
                body: "Messaggio",
                sendAt: "Data di Pianificazione",
                sentAt: "Data di Invio",
                status: "Stato",
                actions: "Azioni",
              },
              calendar: {
                date: "Data",
                time: "Ora",
                event: "Evento",
                allDay: "Tutto il giorno",
                week: "Settimana",
                work_week: "Pianificazioni",
                day: "Giorno",
                month: "Mese",
                previous: "Precedente",
                next: "Successivo",
                yesterday: "Ieri",
                tomorrow: "Domani",
                today: "Oggi",
                agenda: "Agenda",
                noEventsInRange: "Nessuna pianificazione nel periodo.",
              },
              buttons: {
                add: "Nuova Pianificazione",
              },
              toasts: {
                deleted: "Pianificazione eliminata con successo.",
              },
            },
            tags: {
              title: "Tag",
              confirmationModal: {
                deleteTitle: "Sei sicuro di voler eliminare questa Tag?",
                deleteMessage: "Questa azione non può essere annullata.",
              },
              table: {
                name: "Nome",
                color: "Colore",
                tickets: "Registri Etichettati",
                actions: "Azioni",
              },
              buttons: {
                add: "Nuova Tag",
              },
              toasts: {
                deleted: "Tag eliminata con successo.",
              },
            },
            settings: {
              success: "Impostazioni salvate con successo.",
              title: "Impostazioni",
              settings: {
                userCreation: {
                  name: "Creazione utente",
                  options: {
                    enabled: "Abilitato",
                    disabled: "Disabilitato",
                  },
                },
                tabs: {
                  options: "Opzioni",
                  schedules: "Orari",
                  companies: "Aziende",
                  plans: "Piani",
                  helps: "Aiuto",
                },
              },
            },
            messagesList: {
              header: {
                assignedTo: "Assegnato a:",
                buttons: {
                  return: "Torna",
                  resolve: "Risolvi",
                  reopen: "Riapri",
                  accept: "Accetta",
                },
              },
            },
            messagesInput: {
              placeholderOpen: "Inserisci un messaggio",
              placeholderClosed:
                "Riapri o accetta questo ticket per inviare un messaggio.",
              signMessage: "Firma",
            },
            contactDrawer: {
              header: "Dati del contatto",
              buttons: {
                edit: "Modifica contatto",
              },
              extraInfo: "Altre informazioni",
            },
            fileModal: {
              title: {
                add: "Aggiungi lista di file",
                edit: "Modifica lista di file",
              },
              buttons: {
                okAdd: "Salva",
                okEdit: "Modifica",
                cancel: "Annulla",
                fileOptions: "Aggiungi file",
              },
              form: {
                name: "Nome della lista di file",
                message: "Dettagli della lista",
                fileOptions: "Lista di file",
                extraName: "Messaggio da inviare con il file",
                extraValue: "Valore dell'opzione",
              },
              success: "Lista di file salvata con successo!",
            },
            ticketOptionsMenu: {
              schedule: "Pianificazione",
              delete: "Elimina",
              transfer: "Trasferisci",
              registerAppointment: "Osservazioni del Contatto",
              appointmentsModal: {
                title: "Osservazioni del Contatto",
                textarea: "Osservazione",
                placeholder: "Inserisci qui l'informazione che desideri registrare",
              },
              confirmationModal: {
                title: "Elimina il ticket del contatto",
                message:
                  "Attenzione! Tutti i messaggi relativi al ticket verranno persi.",
              },
              buttons: {
                delete: "Elimina",
                cancel: "Annulla",
              },
            },
            confirmationModal: {
              buttons: {
                confirm: "Ok",
                cancel: "Annulla",
              },
            },
            messageOptionsMenu: {
              delete: "Elimina",
              reply: "Rispondi",
              confirmationModal: {
                title: "Eliminare il messaggio?",
                message: "Questa azione non può essere annullata.",
              },
              forward: "Seleziona per inoltrare",
            },
            inputErrors: {
              tooShort: "Troppo corto",
              tooLong: "Troppo lungo",
              required: "Obbligatorio",
              email: "Indirizzo email non valido",
            },
            backendErrors: {
              ERR_NO_OTHER_WHATSAPP: "Deve esserci almeno un WhatsApp predefinito.",
              ERR_NO_DEF_WAPP_FOUND:
                "Nessun WhatsApp predefinito trovato. Verifica la pagina delle connessioni.",
              ERR_WAPP_NOT_INITIALIZED:
                "Questa sessione di WhatsApp non è stata inizializzata. Verifica la pagina delle connessioni.",
              ERR_WAPP_CHECK_CONTACT:
                "Impossibile verificare il contatto di WhatsApp. Verifica la pagina delle connessioni",
              ERR_WAPP_INVALID_CONTACT: "Questo non è un numero di Whatsapp valido.",
              ERR_WAPP_DOWNLOAD_MEDIA:
                "Impossibile scaricare i file multimediali da WhatsApp. Verifica la pagina delle connessioni.",
              ERR_INVALID_CREDENTIALS:
                "Errore di autenticazione. Per favore, riprova.",
              ERR_SENDING_WAPP_MSG:
                "Errore nell'invio del messaggio da WhatsApp. Verifica la pagina delle connessioni.",
              ERR_DELETE_WAPP_MSG: "Impossibile eliminare il messaggio da WhatsApp.",
              ERR_OTHER_OPEN_TICKET: "Esiste già un ticket aperto per questo contatto.",
              ERR_SESSION_EXPIRED: "Sessione scaduta. Perfavore effettua il login.",
              ERR_USER_CREATION_DISABLED:
                "La creazione dell'utente è disabilitata dall'amministratore.",
              ERR_NO_PERMISSION: "Non hai il permesso di accedere a questa risorsa.",
              ERR_DUPLICATED_CONTACT: "Esiste già un contatto con questo numero.",
              ERR_NO_SETTING_FOUND: "Nessuna impostazione trovata con questo ID.",
              ERR_NO_CONTACT_FOUND: "Nessun contatto trovato con questo ID.",
              ERR_NO_TICKET_FOUND: "Nessun ticket trovato con questo ID.",
              ERR_NO_USER_FOUND: "Nessun utente trovato con questo ID.",
              ERR_NO_WAPP_FOUND: "Nessun WhatsApp trovato con questo ID.",
              ERR_CREATING_MESSAGE: "Errore nella creazione del messaggio nel database.",
              ERR_CREATING_TICKET: "Errore nella creazione del ticket nel database.",
              ERR_FETCH_WAPP_MSG:
                "Errore nel recupero del messaggio da WhatsApp, potrebbe essere troppo vecchio.",
              ERR_QUEUE_COLOR_ALREADY_EXISTS:
                "Questo colore è già in uso, per favore scegline un altro.",
              ERR_WAPP_GREETING_REQUIRED:
                "Il messaggio di saluto è obbligatorio quando ci sono più di una coda.",
            },                                                                
  }
};
  
export { messages };