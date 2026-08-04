# STATO DEL PROGETTO — Kaplet Technology Portfolio

_Ultimo aggiornamento: 03/08/2026 (sessione 21, scrittura diretta GitHub)_

## Sessione 21 — chiusura giro vendor per vendor

- Shure: aggiunta famiglia software (Designer gratuito + ShureCloud), mancava del tutto
- Crestron: aggiunta famiglia Fusion (monitoraggio/scheduling enterprise) con le 2 licenze reali (SW-FUSION-P-L on-premises perpetua, SW-FUSION-C-3 cloud 3 anni)
- Axis: aggiunta famiglia intercom di rete (I7010-VE, I7020) con lettore RFID integrabile, a rafforzare la macroarea Controllo Accessi
- Verifica indipendente del repository live via raw.githubusercontent.com: dati confermati sincronizzati correttamente

**Numeri finali: 84 famiglie, 425 prodotti, 148 licenze, 353 righe di matrice, 403 fonti, 0 errori di integrita', 0 duplicati.**

**Stato di salute del catalogo**: nessuna famiglia vuota, nessun placeholder "DA VERIFICARE" residuo sui campi modello/deployment, tutte le licenze collegate a un prodotto specifico tranne 23 (correttamente, perche' descrivono modelli di licensing Meraki trasversali a piu' prodotti).

_Cronologia sessioni precedenti sotto._

_Ultimo aggiornamento: 03/08/2026 (sessione 19 — merge massivo da file Excel del cliente)_

## MERGE MASSIVO DA FILE ESTERNO (Kaplet_Technology_Portfolio_DEMO_v28.xlsx)

Il cliente ha fornito un proprio dataset di ricerca (41 fogli: 12 vendor + 26 drill-down/licensing + README/TEMPLATE),
costruito con lo stesso principio delle fonti ufficiali. E' stato elaborato ed integrato in un'unica sessione:
- 163 nuovi prodotti dai 12 fogli vendor principali (portfolio Fortinet/Cisco esteso su sicurezza/cloud/SOC)
- 159 nuovi prodotti dai fogli drill-down modelli (FortiGate/Meraki MX/Axis camere/Cisco Secure Firewall-Nexus-Catalyst/Shure ULX-D/K-Array/MAXHUB/Barco EventMaster/Avigilon Alta/Crestron/Q-SYS Core)
- 148 nuove licenze dai fogli licensing dettagliato (Milestone/Meraki/Cisco DNA Catalyst/Axis/Avigilon Unity/Q-SYS/Cisco Duo)
- 173 righe di matrice aggiuntive (FortiGuard bundles 16 feature x 3, Milestone XProtect 25 feature x 4)
- Segnalazioni EoS urgenti dal README del cliente: Meraki Systems Manager dismesso dal 3/6/2026; Meraki MR36/44/46 in EoS dal 25/6/2026 (da incrociare con la famiglia Meraki MR gia' presente)

**Numeri finali: 81 famiglie, 438 prodotti, 148 licenze, 353 righe di matrice, 391 fonti, 0 errori di integrita', 0 duplicati.**

**Limiti onesti di questo merge veloce (da rifinire quando c'e' tempo)**:
- I prodotti importati hanno spesso "modello" e "deployment" = "DA VERIFICARE CON IL VENDOR" (non presenti nel file sorgente)
- 7 famiglie create durante il primo merge hanno categoria "Altro / da classificare" (da riclassificare)
- Le fonti del file del cliente non sono state ri-verificate una per una in questa sessione (il file dichiara di averle gia' verificate con lo stesso metodo)
- Da incrociare manualmente: le date EoS Meraki MR36/44/46 segnalate nel file cliente vs lo stato attuale della famiglia fam_meraki_mr nel catalogo (ancora "attivo")

## Chiarimento navigazione categoria

Confermato al cliente: cliccare l'intestazione di una categoria (es. "Switch") dentro una pagina vendor porta alla vista
trasversale a TUTTI i vendor di quella categoria (comportamento voluto, per confronto). Non e' un bug.

## Sessioni precedenti (riepilogo)

_Ultimo aggiornamento: 02/08/2026 (sessione 18, scrittura diretta GitHub)_

Sessione 18: aggiunte Q-SYS NC Series (camere videoconferenza), Q-SYS CX-Q/NL Series (amplificatori/diffusori di rete). Modificata l'interfaccia su richiesta del cliente: la pagina vendor ora mostra un elenco compatto di categorie (non piu' le card espanse inline); cliccando su una categoria si entra nella pagina dedicata (cross-vendor) che mostra il contenuto. **Numeri attuali: 73 famiglie, 113 prodotti, 70 licenze, 180 righe di matrice, 141 fonti, 0 errori.**

Sessione 17: aggiunte Meraki MG (cellular gateway), Barco Encore3/Event Master (elaborazione immagini eventi live), Crestron Room Scheduling. **Numeri attuali: 71 famiglie, 108 prodotti, 70 licenze, 180 righe di matrice, 137 fonti, 0 errori.**

Sessione 16: aggiunte novita' Shure MXA320, Barco ClickShare Bar Core/Pro, K-Array Python/Tornado/Turtle, nota tecnica AXIS OS 13. **Numeri attuali: 68 famiglie, 104 prodotti, 69 licenze, 180 righe di matrice, 132 fonti, 0 errori.** Su richiesta del cliente, la classificazione per categoria e' stata spostata DENTRO la pagina vendor (famiglie raggruppate per tipo prodotto con sottotitoli), rimossa la sezione sidebar separata.

## NOVITA' STRUTTURALE — classificazione per categoria (tipo di prodotto)

Su richiesta del cliente, tutte le 68 famiglie sono ora classificate anche per **categoria trasversale ai vendor** (es. Switch, Firewall/NGFW, VMS, Controllo Accessi, Licensing, Microfoni, ecc. — 38 categorie totali). Navigabile dalla sidebar del sito (sezione "Categoria"), con pagina dedicata #/categoria/:nome che mostra tutte le famiglie di quel tipo indipendentemente dal vendor. Aggiunto anche il tag categoria cliccabile nella pagina di ogni famiglia.

_Sessioni precedenti:_

## 1. Attivita' completate (cumulativo)

- Architettura, interfaccia, persistenza GitHub, monitoraggio automatico + AI, assistente, scoperta settimanale: tutti funzionanti.
- **66 famiglie**, 97 prodotti, 69 licenze, **180 righe di matrice**, **121 fonti ufficiali**, 0 errori di integrita'.
- Sessione 14: **CONTROLLO QUALITA' ESEGUITO** — verificati duplicati, campi vuoti/troppo lunghi, date future, URL malformati, macroaree mancanti, stati lifecycle non validi, fonti duplicate. Trovati e corretti: 1 descrizione oltre 300 caratteri (FortiGate G Series), 2 fonti duplicate (stesso URL, id diverso) unificate. Aggiunte anche novita' Crestron DM-NVX-DIR2 e DM-NVX-384/385 con Multiview.

## Metodologia controllo qualita' (riutilizzabile nelle prossime sessioni)

Script di controllo eseguito su ogni salvataggio: integrita' referenziale (fam/prod/lic/fonti/licenseFeatures), duplicati per nome, campi vuoti o fuori limite di lunghezza, date di consultazione fonte nel futuro, URL malformati, famiglie senza macroarea, stati lifecycle/tipologia/feature non standard, URL fonte duplicati. Va rieseguito periodicamente (ogni 3-4 sessioni di popolamento) per mantenere la qualita'.

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

