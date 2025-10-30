# 🗺️ Login Maps – Progetto Tecnico per un'Azienda

Questo progetto faceva parte di un **test tecnico richiesto per una possibile assunzione presso Colibryx**.  
Consiste in una semplice **pagina di login** che, dopo l’autenticazione, invia una **richiesta POST** a un’API esterna e mostra una **mappa di Google** centrata sulle coordinate restituite dal server.

---

## Funzionalità

- **Form di login** con credenziali predefinite  
- **Validazione lato client** di username e password  
- **Richiesta POST** all’API di test (`https://cadena.services.colibryx.com/fastify/api/testApi`)  
- **Integrazione con Google Maps** per mostrare le coordinate ricevute  
- **Gestione errori** per credenziali errate, problemi di risposta o errori di rete  

---

## 🔐 Credenziali di Accesso

Usa le seguenti credenziali per accedere alla mappa:

- **Username:** `colibryx`  
- **Password:** `passwordTestColibryx`

---

## Come Utilizzarlo

1. Apri il file `index.html` nel browser (è necessaria una connessione Internet per caricare Google Maps).  
2. Inserisci le credenziali fornite sopra.  
3. Se il login ha successo:
   - viene inviata una richiesta all’API esterna,  
   - vengono ricevute le coordinate,  
   - e la **posizione Colibryx** viene mostrata sulla mappa.  

---

## Tecnologie Utilizzate

- **HTML5**  
- **JavaScript (ES6)**  
- **Google Maps API**  
- **Fetch API** per le richieste HTTP  

---

## Note

- Questo è un **prototipo dimostrativo**, non un sistema di autenticazione reale.  
- Le credenziali e l’endpoint dell’API sono solo a **scopo di test**.  
- Tutta la logica è gestita **lato client** per semplicità.  
