# Kaplet Technology Portfolio

Catalogo tecnico-commerciale interattivo di Kaplet: vendor, famiglie, prodotti, licenze,
subscription e supporti, con assistente conversazionale e controllo automatico giornaliero
delle fonti ufficiali dei vendor.

## Cosa contiene questo repository

```
index.html                          -> la pagina web (unico file, nessuna build necessaria)
data/catalog.json                   -> il catalogo (dati verificati con fonte ufficiale)
data/source-status.json             -> esito dell'ultimo controllo automatico delle fonti
scripts/check-sources.mjs           -> script Node eseguito ogni giorno da GitHub Actions
.github/workflows/daily-source-check.yml  -> pianificazione del controllo giornaliero
```

## 1. Pubblicare il repository su GitHub

```
cd kaplet-repo
git init
git add .
git commit -m "Kaplet Technology Portfolio - versione iniziale"
git branch -M main
git remote add origin https://github.com/<tuo-account-o-org>/<nome-repo>.git
git push -u origin main
```

Puoi usare un repository **privato** (consigliato per un catalogo commerciale interno):
GitHub Actions e GitHub Pages funzionano anche sui repository privati dei piani a pagamento
Kaplet/organizzazione; se usi un account personale gratuito, verifica i limiti del tuo piano.

## 2. Attivare la pagina web (GitHub Pages)

Impostazioni del repository -> **Pages** -> Source: `Deploy from a branch` -> Branch `main` / `root`.
Dopo un minuto la pagina sara' raggiungibile su `https://<tuo-account>.github.io/<nome-repo>/`.

Aprire `index.html` in questo modo (tramite un vero server http) e' importante: se apri il file
direttamente da disco (`file://...`), il browser blocca il caricamento di `data/catalog.json`
per motivi di sicurezza (CORS). La pagina ha comunque un fallback che ti avvisa in questo caso.

## 3. Attivare il controllo automatico giornaliero e l'aggiornamento AI senza revisione

Il workflow `.github/workflows/daily-source-check.yml` e' gia' incluso e si attiva da solo
ogni giorno alle 06:00 UTC, oltre a poter essere lanciato manualmente da **Actions ->
Controllo giornaliero fonti vendor -> Run workflow**.

Lo script `scripts/check-sources.mjs` fa due cose:

1. **Controllo di variazione** (sempre attivo, nessuna configurazione richiesta): verifica
   che ogni URL registrato in `data/catalog.json` sia raggiungibile e se il contenuto e'
   cambiato rispetto al giorno prima.
2. **Aggiornamento automatico assistito da AI** (per scelta esplicita di Kaplet, **senza
   revisione umana**): quando una fonte HTML risulta cambiata, lo script scarica il nuovo
   testo, lo confronta con la voce di catalogo collegata tramite Claude, e **scrive
   direttamente la modifica** se e solo se il modello si dichiara "confidenza alta" (il
   testo della fonte afferma il nuovo valore in modo esplicito e non ambiguo). Se la
   confidenza e' media o bassa, la fonte resta solo segnalata per revisione manuale, come
   prima — il bot non scrive mai un dato di cui non e' sicuro.

Per attivare la parte 2, aggiungi un secret in **Settings -> Secrets and variables ->
Actions -> New repository secret**: nome `ANTHROPIC_API_KEY`, valore la tua chiave API
Anthropic. Senza questo secret, il workflow continua a funzionare ma si limita al solo
controllo di variazione (nessuna scrittura automatica).

**Nota di rischio, letta e accettata**: le modifiche applicate in questo modo NON passano
da un'approvazione umana prima di entrare nel catalogo. Ogni modifica scritta in automatico
viene pero' registrata nello storico (`changelog` dentro `catalog.json`) con la citazione
esatta della fonte usata come motivazione, cosi' resta sempre verificabile a posteriori. Le
fonti in formato PDF non vengono lette dall'AI in questa versione (solo pagine HTML) e
restano sempre segnalate per revisione manuale.

## 4. Collegare il pannello Admin al repository (per condividere le modifiche)

Apri la pagina pubblicata -> **Impostazioni** -> inserisci:
- **Proprietario/organizzazione** e **Repository** (gli stessi usati su GitHub)
- **Branch** (di solito `main`)
- Un **Personal Access Token** con permesso `Contents: Read and write` limitato a questo
  repository (GitHub -> Settings -> Developer settings -> Fine-grained tokens)

Da quel momento ogni modifica fatta da Admin (nuovo vendor, famiglia, prodotto, licenza,
fonte...) viene committata direttamente su `data/catalog.json` nel repository ed e' visibile
a chiunque apra la pagina. Senza token configurato, le modifiche restano solo nel browser di
chi le fa (localStorage), utile per prove locali.

Il token resta solo nel browser di chi lo inserisce e viene usato esclusivamente per
chiamare `api.github.com`. Non condividere la pagina pubblicata con il token gia' inserito
(ogni persona che vuole modificare il catalogo inserisce il proprio token).

## 5. Assistente conversazionale

Funziona sempre, anche senza configurazione: fa una ricerca strutturata sui dati del
catalogo e restituisce una risposta nel formato richiesto (Tecnologia applicabile, Vendor,
Famiglie/prodotti, Licenze, Fonti, Data di verifica), oppure segnala esplicitamente quando
le informazioni non sono sufficienti.

Se in **Impostazioni** viene incollata una API key Anthropic personale, le risposte vengono
generate in linguaggio naturale da Claude, sempre vincolate ai soli dati presenti nel
catalogo (nessun accesso libero a internet, nessuna invenzione di prodotti/prezzi/SKU).
La chiave viene inviata direttamente dal browser ad Anthropic e resta salvata solo in
locale: se pubblichi il sito su un dominio pubblico e condiviso, ogni persona dovrebbe usare
una propria chiave, oppure e' preferibile tenere questa funzione disattivata su un sito
pubblicamente accessibile.

## 6. Popolare il resto del catalogo

Il dataset incluso e' volutamente limitato a cio' che e' stato verificato con fonte
ufficiale finora (FortiGate/FortiCare/FortiGuard, integrazione Cisco Catalyst <-> Meraki).
Il resto dei vendor (Cisco, Cisco Meraki, Avigilon, Axis, Milestone, Barco, Crestron,
K-Array, K-Scape, MAXHUB, Q-SYS, Shure) va popolato progressivamente dal pannello Admin,
con ricerca dedicata sulle fonti ufficiali di ciascun vendor, per non violare il principio
"nessun dato senza fonte verificata".

## Limiti onesti di questa soluzione

- Il controllo giornaliero rileva *che qualcosa e' cambiato*, non *cosa* e' cambiato nel
  merito: la rilettura umana resta necessaria.
- Alcuni siti vendor bloccano richieste automatiche (rate limiting, protezioni anti-bot):
  in quel caso lo script segnalera' "non raggiungibile" anche se il sito e' online per un
  utente umano — va monitorato e, se necessario, lo script va adattato per quel vendor
  specifico (header aggiuntivi, throttling piu' lento, ecc.).
- Il pannello Admin scrive su GitHub tramite l'API standard "Contents": per un volume molto
  alto di modifiche contemporanee da piu' persone converrebbe in futuro passare a un vero
  backend con database (vedi il documento architetturale consegnato in precedenza), ma per
  l'uso corrente (poche modifiche al giorno, singolo repository) questo approccio e' solido
  e gratuito.
