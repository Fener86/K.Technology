# STATO DEL PROGETTO — Kaplet Technology Portfolio

_Ultimo aggiornamento: 07/08/2026 (sessione 24, scrittura diretta GitHub)_

## Sessione 24 — K-ARRAY COMPLETATO AL 100%

**Pulizia dati (anche qui il merge Excel di sessione 19 aveva introdotto molto rumore — peggio di Crestron):**
- Rimossi **14 prodotti duplicati/ridondanti**: Vyper, Kayman (triplicato), Kommander (triplicato), Python, Turtle, Rumble, Pinnacle, Thunder, Anakonda e K-framework3 erano tutti presenti sia come voce dettagliata sia come voce generica duplicata dal merge; rimosse anche 2 voci "ombrello" ridondanti ("K-array Systems", "K-array Speakers") che duplicavano prodotti gia' singolarmente censiti.
- Nessuna licenza risultava collegata ai duplicati rimossi (verificato prima della cancellazione).

**Tutti i 25 prodotti K-Array rimasti ora hanno model number reali** verificati su fonti ufficiali k-array.com, tra cui:
- Diffusori: Vyper (KV25/52/102), Lyzard (KZ1/KZ14), Domino (KF26/210/212), Kayman (KY52/102), Kobra (KK52/102), Python (KP52/102), Tornado (KT2/KT2C/KT2-HV), Anakonda (KAN200/+/+8)
- Subwoofer: Rumble (KU26/44/210/212)
- Monitor da palco: Turtle (KRM33/KRM33P), Mastiff (KM112/112P/312/312P)
- Sistemi portatili: Pinnacle (KR2/KR3/KR4)
- Amplificazione: Kommander (KA04 -> KA208)
- **4 novita' annunciate a InfoComm 2026** (giugno 2026): Keystone KST110 (subwoofer architettonico ultra-slim, motore Powersoft MM-Force), Dragon KX2 (point source ultra-compatto, driver Powersoft Spixel), Koral KO102 (colonna), Thunder KSCARDIO412P (subwoofer cardioide)
- Software/controllo (nessun SKU commerciale, tool gratuiti/inclusi): K-framework3, K-Connect, K-Control, OsKar/OsKar Plus, K-array Web App, plug-in Q-SYS/Crestron, K-Cloud

**Numeri finali sessione 24: 92 famiglie, 362 prodotti (K-Array: 25/25 con SKU/model number = 100%), 150 licenze, 470 fonti, 0 errori di integrita' referenziale, 0 duplicati.**

## Prossimo punto esatto da cui riprendere

K-Array e' ora completo al 100%. Alla prossima richiesta "CONTINUA", il cliente decide il prossimo vendor tra: Milestone Systems, Avigilon, Axis, MAXHUB, Q-SYS, Shure. NOTA METODOLOGICA consolidata su Cisco/Crestron/K-Array: il merge Excel di sessione 19 ha introdotto duplicati su piu' vendor — per ogni nuovo vendor, controllare SEMPRE prima i duplicati/voci ombrello e pulire, POI completare gli SKU mancanti.

_Cronologia sessioni precedenti sotto._

_Ultimo aggiornamento: 07/08/2026 (sessione 23, scrittura diretta GitHub)_

## Sessione 23 — CRESTRON COMPLETATO AL 100% + restyling grafico sito

**Pulizia dati (il merge Excel di sessione 19 aveva introdotto parecchio rumore su Crestron):**
- Rimossi 8 prodotti duplicati/non vendibili: "Crestron XiO Cloud" (dup. di XiO Cloud servizio), "Crestron DM NVX" generico (dup. degli endpoint gia' censiti), "Crestron Flex" generico (dup. del kit tabletop), "Crestron AirMedia" generico (dup. di AM-100/AM-101), "Crestron DigitalMedia (DM)" generico (dup. di DM-TX-201-C/HD-MD4X1-4K-E/HD-WP-4K-401-C), "XiO Cloud — licenze a soggetto" (concetto gia' coperto dalla licenza esistente), "Crestron Connected / XiO Cloud Connected devices" (programma di certificazione partner, non un prodotto vendibile), "DM NVX Director" generico (dup. di DM-NVX-DIR2).
- Riclassificati 4 prodotti finiti nella famiglia sbagliata durante il merge: DM-NVX-360 e Videobar 70 spostati nelle famiglie corrette; creata la famiglia "Crestron DM NAX (Audio over IP)" per il prodotto omonimo; creata la famiglia "Crestron Control Systems (3-Series/4-Series)" per i processori di controllo.
- Rimossa la famiglia orfana residua dal merge Excel.

**Tutti i 20 prodotti Crestron ora hanno SKU reali verificati su fonti ufficiali**, tra cui:
- DM NVX: gamma encoder/decoder 350/351/352/360/363, DM-NVX-DIR2/DIR-ENT, DM-NVX-384/385
- Flex: Collab Compute (CCC-110/120), touch screen serie 80 (TS/TSW-1080), Videobar 70 (UC-SB2-CAM)
- DM NAX: DM-NAX-8ZSA, -16AIN, -AUD-IO, -XSP, -2XLRI-1G
- Control Systems: CP4, CP4-R, MC4
- XiO Cloud: chiariti i tier Free/Premium con SKU reali (SW-XIOC-PREMIUM-*, SW-XIOC-P-1/P-3)
- Fusion: confermati SW-FUSION-P-L (on-prem) e SW-FUSION-C-3 (cloud)

**SEGNALAZIONI EoS/EoM IMPORTANTI:**
- Kit Crestron Flex UC-C100/UC-CX100 in End-of-Sale (bollettino gennaio 2026): sostituiti dall'approccio modulare Collab Compute + touch screen serie 80.
- AM-100/AM-101 (AirMedia) in End of Maintenance dal 6/1/2020: nessun aggiornamento firmware/sicurezza; sostituzione raccomandata AM-3100/AM-3200/AM-TX3-100.
- Un prodotto ("Crestron Sightline") non ha trovato conferma su fonti ufficiali Crestron: marcato "DA VERIFICARE CON IL VENDOR", possibile errore di trascrizione nel dataset originale del cliente.

**Numeri finali sessione 23: 92 famiglie, 376 prodotti (Crestron: 20/20 con SKU = 100%), 150 licenze, 462 fonti, 0 errori di integrita' referenziale, 0 duplicati.**

## Restyling grafico del sito (stessa sessione)

Su richiesta del cliente:
1. Rimosso il pannello di famiglie a destra nella pagina macroarea (provato e scartato).
2. Redesign completo in stile Apple: font di sistema (SF Pro/Segoe UI), palette neutra bianco/nero/grigio con verde come accento, card arrotondate (18px) con effetto sollevamento, barra di navigazione con blur, pulsanti a pillola.
3. Le categorie di prodotto nella pagina vendor sono ora un accordion chiuso di default (prima erano tutte espanse): il cliente seleziona la categoria, poi la famiglia, poi il prodotto.

## Prossimo punto esatto da cui riprendere

Crestron e' ora completo al 100%. Alla prossima richiesta "CONTINUA", il cliente decide il prossimo vendor tra: Milestone Systems, Avigilon, Axis, K-Array, MAXHUB, Q-SYS, Shure (verifica/completamento SKU mancanti e controllo duplicati per ciascuno, seguendo lo stesso metodo usato per Cisco e Crestron: pulizia duplicati PRIMA di completare gli SKU).

_Cronologia sessioni precedenti sotto._

_Ultimo aggiornamento: 07/08/2026 (sessione 22, scrittura diretta GitHub)_

## Sessione 22 — CISCO COMPLETATO AL 100%

Completati i 15 prodotti Cisco rimanenti con SKU/informazioni di licensing reali verificate su fonti ufficiali Cisco (ordering guide, data sheet, pagine di supporto):

- **Cisco Secure Firewall Threat Defense**: immagine software su appliance 1200/3100/4200/6100/9300, licenziata a Smart Licensing.
- **Cisco Hybrid Mesh Firewall**: architettura di gestione unificata; SKU FWM-SEC-SUB (Security Cloud Control) + MPE-SEC-SUB (Mesh Policy Engine per firewall terze parti).
- **Cisco Secure Firewall 200 Series**: primo modello Secure Firewall 220, edge/filiali con SD-WAN integrato.
- **Cisco Umbrella / Secure Access - DNS Defense**: SKU legacy SA-SIA-ESS-K9 in EoS dal 18/02/2026, sostituito da nuove SKU a 4 pacchetti.
- **Cisco Secure Access** (suite SSE completa): 4 SKU pacchetti Essentials/Advantage SIA+SPA.
- **Cisco Secure Email Threat Defense**: SKU ETD-SEC-SUB / CSEMAIL-SEC-SUB, livelli Essentials/Advantage.
- **Cisco Secure Network Analytics**: hardware SMC-2210/2300-K9, Flow Collector 4200/4210, licenze Threat Feed L-LC-TI-FCxK.
- **Cisco WAAP**: SaaS OEM Radware, 3 piani di servizio a throughput.
- **Cisco Identity Intelligence**: incluso in Duo Advantage/Premier, nessuno SKU separato.
- **Cisco Secure Workload**: SKU bundle firewall C1-TAAS-XX-SW-K9, Smart Licensing.
- **Cisco Catalyst Software Subscription for Switching**: alternativa a DNA, tier Essentials/Advantage, sostituito su C9350 da "Cisco Networking Subscription" unificata.
- **Cisco DNA Software SD-WAN**: tier Essentials/Advantage/Premier per throughput.
- **Cisco Catalyst 8000V Edge Software**: SKU L-DNA-C8000V, licenza HSEC automatica sopra 250 Mbps.
- **Cisco Success Tracks / Solution Support**: 5 modalita' di ordinazione, servizio non hardware.

**SEGNALAZIONE URGENTE EoS**: Cisco Vulnerability Management (ex Kenna Security, incluso Vulnerability Intelligence e Application Security Module) - ultimo giorno ordinabile **10/03/2026**, ultimo rinnovo **11/06/2026**, fine supporto TAC **30/06/2028**. Cisco ha dichiarato che NON esiste un prodotto sostitutivo interno; il mercato (Tenable One, Nucleus) offre percorsi di migrazione. Impatto diretto su eventuali proposte commerciali Kaplet che includano questo prodotto.

**Pulizia dati**: rimossi 4 prodotti duplicati orfani con ID generati automaticamente (ShureCloud, Shure Designer, 2x K-Monitor) che duplicavano voci gia' correttamente censite.

**Numeri finali sessione 22: 91 famiglie, 384 prodotti (Cisco: 76/76 con SKU/nota = 100%), 150 licenze, 445 fonti, 0 errori di integrita' referenziale, 0 duplicati.**

## Prossimo punto esatto da cui riprendere

Cisco e' ora completo al 100%. Alla prossima richiesta "CONTINUA", riprendere con il vendor successivo secondo la sequenza pianificata:
1. **Milestone Systems**: verificare/completare portfolio (XProtect, Milestone Care, Husky) con controllo SKU e lifecycle.
2. Poi in sequenza: Avigilon, Axis, Crestron, K-Array, MAXHUB, Q-SYS, Shure (verifica/completamento SKU mancanti per ciascuno).
3. Eseguire controllo qualita' periodico completo (duplicati, campi vuoti, URL malformati, fonti duplicate) ogni 3-4 sessioni.

_Cronologia sessioni precedenti sotto._

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

