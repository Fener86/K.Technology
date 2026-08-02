# STATO DEL PROGETTO — Kaplet Technology Portfolio

_Ultimo aggiornamento: 02/08/2026 (sessione 9 — prima sessione con scrittura diretta su GitHub via token fornito dal cliente)_

## 1. Attivita' completate (cumulativo)

- Architettura, interfaccia, persistenza GitHub, monitoraggio automatico + AI, assistente: tutti funzionanti.
- **58 famiglie**, 85 prodotti, 65 licenze, **180 righe di matrice**, **107 fonti ufficiali**, 0 errori di integrita'.
- **NOVITA' IMPORTANTE**: da questa sessione Claude scrive DIRETTAMENTE su GitHub (repo Fener86/K.Technology) tramite un Personal Access Token fine-grained fornito dal cliente (permessi Contents + Workflows: Read and write). Non serve piu' copiare/incollare manualmente i file.
- Creato un secondo workflow GitHub Actions: **"Scoperta settimanale novita' vendor"** (.github/workflows/weekly-discovery.yml + scripts/discover-updates.mjs), attivo, gira ogni lunedi' alle 05:00 UTC. Fa una ricerca web libera (Claude + web_search) per ciascun vendor; scrive automaticamente in catalog.json SOLO se l'URL della fonte appartiene a un dominio ufficiale noto del vendor, altrimenti salva la proposta in data/proposals.json per revisione umana senza toccare il catalogo.
- Sessione 9: aggiunte novita' Cisco ISE 3.5 (cambio logica licensing pxGrid/Profiling), Milestone BriefCam (nuova famiglia) + XProtect Evidence Manager + funzioni AI generativa XProtect, Avigilon H6A PTZ + Alta Visitor.

## Nota tecnica sul token GitHub

- Il tentativo di lanciare manualmente il nuovo workflow via API (`workflow_dispatch`) ha dato errore 403: il token fine-grained del cliente NON ha il permesso "Actions: Read and write" (ha solo Contents e Workflows). Per lanciare i workflow da qui in futuro, il cliente dovrebbe aggiungere anche quel permesso al token. In alternativa, i workflow partono comunque da soli secondo la schedulazione cron, oppure il cliente puo' lanciarli manualmente dalla UI di GitHub (Actions -> Run workflow).

## 2. Vendor elaborati (famiglie inserite)

- **Fortinet** (9 famiglie): FortiGate/FortiGuard/FortiCare, FortiSwitch, FortiAP, FortiManager, FortiClient/EMS, FortiSASE, FortiWeb, FortiNAC-F, FortiAuthenticator/FortiToken, FortiSandbox.
- **Cisco** (14 famiglie): Catalyst 9000 (+ licensing), Secure Firewall, ISE, Duo, Umbrella/Secure Access-DNS Defense, ThousandEyes, Webex Room Devices, Nexus/ACI, Catalyst SD-WAN, Cisco Spaces.
- **Cisco Meraki**: MX (+ matrice), MS (+ matrice), MR, modelli di licensing trasversali.
- **Milestone Systems** (3 famiglie): XProtect (+ matrice), Milestone Care (+ matrice), Husky.
- **Avigilon** (3 famiglie): Alta Video, Alta Access (+ matrice), Unity Video (+ matrice).
- **Axis Communications** (3 famiglie): Camera Station/Pro, License Plate Verifier, AXIS Optimizer per Milestone.
- **Barco** (3 famiglie): ClickShare Conference, ClickShare Present, Control Rooms.
- **Crestron** (3 famiglie): XiO Cloud, Flex, DM NVX.
- **Q-SYS** (3 famiglie): Feature Licensing, Core/NV Series, Reflect/VisionSuite (+ matrice).
- **Shure** (3 famiglie): IntelliMix Room, Microflex Advance, ULX-D/Axient Digital.
- **K-Array** (2 famiglie): diffusori, Kommander/K-framework.
- **MAXHUB** (2 famiglie): soluzioni Microsoft Teams Rooms, serie V6.

## 3. Documenti analizzati

- Prompt originale "Kaplet Technology Portfolio" (macroaree, tassonomia, vendor, regole sulle fonti).
- ~76 fonti ufficiali vendor (datasheet, ordering guide, documentazione tecnica) consultate e citate nel catalogo con data di verifica.

## 4. Dati segnati "DA VERIFICARE CON IL VENDOR" (elenco aperto)

- Durate/rinnovi/grace period esatti per: licenze Meraki MS/MR, Cisco DCN, Cisco DNA SD-WAN, Cisco Secure Firewall Essentials/TMC, Cisco ISE (tutti i livelli), Umbrella DNS Security, ThousandEyes, Q-SYS Reflect Plus/VisionSuite update license, Milestone Care Premium, Avigilon Alta Access, Avigilon Unity (piano upgrade), Crestron XiO Cloud Premium, FortiNAC PRO, Cisco Spaces (entrambi i livelli).
- K-Scape: rimosso su richiesta esplicita del cliente (non piu' nel catalogo).
- Famiglie ancora rappresentate da una-due voci (non l'intero portafoglio prodotti reale del vendor): K-Array (mancano Python, Anakonda, Lyzard, Koral), MAXHUB (mancano speakerphone/camere/room booking dedicati).
- Macroarea "Controllo Accessi": rappresentata solo da Avigilon Alta Access e dal modulo accessi di AXIS Camera Station Pro — non ancora una famiglia dedicata trasversale "Controllo accessi" con confronto tra vendor.
- Matrici funzionalita' non ancora costruite per: Cisco Secure Firewall (solo 2 righe), Cisco ISE (parziale), Umbrella, ThousandEyes, Cisco Nexus/ACI DCN, Cisco SD-WAN, FortiSandbox, FortiNAC-F, FortiAuthenticator, Q-SYS Core/NV.

## 5. Problemi riscontrati

- Nessun errore di integrita' referenziale nel catalogo (verificato ad ogni salvataggio).
- Fonti Fortinet prevalentemente in PDF: il meccanismo di aggiornamento AI automatico legge solo pagine HTML, quindi queste fonti restano sempre in modalita' "segnalazione, revisione manuale" anche con la chiave AI configurata.

## 6. Prossimo punto esatto da cui riprendere

Alla prossima richiesta "CONTINUA", riprendere da:
1. K-Array: aggiungere le linee mancanti (Python, Anakonda, Lyzard, Koral, Rumble/subwoofer) con ricerca dedicata.
2. MAXHUB: aggiungere accessori UC dedicati (speakerphone, camere, capture system, room booking) come famiglie separate.
3. Costruire matrici funzionalita' per Cisco Secure Firewall (Essentials vs TMC dettagliato), Cisco ISE (dettaglio feature per feature oltre le 4 righe attuali), Cisco Nexus/ACI DCN (Essentials/Advantage/Premier).
4. Valutare se costruire una famiglia trasversale dedicata "Controllo Accessi" (confronto Avigilon Alta Access vs Axis Camera Station Pro modulo accessi) o mantenere la rappresentazione attuale per famiglia vendor.
5. Verificare periodicamente (ogni 2-3 sessioni) l'integrita' referenziale completa del catalogo con lo script di validazione python gia' utilizzato nelle sessioni precedenti.

