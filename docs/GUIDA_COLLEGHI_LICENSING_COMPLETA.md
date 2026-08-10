# 🎯 GUIDA INTERNA LICENZE — Per i Colleghi

**Versione**: 1.0  
**Data**: 10/08/2026  
**Scopo**: Aiutare i colleghi a capire quale licenza abbinare a quale prodotto

---

## 📋 INDICE

1. [Come funziona questo documento](#come-funziona)
2. [Fortinet: FortiGate + Licenze](#fortinet)
3. [Milestone: XProtect + Licenze](#milestone)
4. [Q-SYS: Core Processor + Feature Licenses](#qsys)
5. [Shure: Microfoni e Wireless + Licenze](#shure)
6. [Axis: Telecamere + Opzioni](#axis)
7. [Domande Frequenti](#faq)
8. [Link Importanti](#link)

---

## <a name="come-funziona"></a> Come Funziona Questo Documento

### Il Concetto Base
Quando scegli un **prodotto**, puoi abbinare una o più **licenze** a seconda di cosa ti serve.

**Esempio concreto**:
```
Cliente sceglie: FortiGate 70G
↓
Posso aggiungere quali licenze?
→ FortiGuard ATP
→ FortiGuard UTP  
→ FortiCare (supporto)
→ Endpoint Protection
```

### Come Usare Questo Documento
1. Conosci il **prodotto** che il cliente vuole
2. Vai alla sezione del vendor
3. Leggi quale licenza puoi aggiungere
4. Consulta il **link ufficiale** per confermare

---

## <a name="fortinet"></a> ⚔️ FORTINET: FortiGate + Licensing

### Scenario 1: Cliente vuole FortiGate 70G. Quali licenze?

**Risposta Rapida:**
```
FortiGate 70G supporta:
✅ FortiGuard           (threat protection standard)
✅ FortiGuard ATP       (advanced threat protection)
✅ FortiGuard UTP       (unified threat protection completo)
✅ FortiCare            (support contract)
✅ FortiClient          (endpoint protection)
```

**Come verificare esattamente:**
1. Vai su: https://www.fortinet.com/products/fortigate
2. Cerca **"FortiGate 70G datasheet"**
3. Sezione **"Security Fabric Subscriptions"**
4. Scopri se ci sono restrizioni edge-case (quasi mai per enterprise)

**Durata/Pricing:**
- Tutte le licenze sono **annual subscriptions**
- Opzioni: 1-year, 3-year, 5-year (sconto sulla durata lunga)

**Nel nostro catalogo:**
```
Prodotto: FortiGate 70G
compatible_licenses: 
  - lic_forti_atp
  - lic_forti_utp
  - lic_forticlient_device
  - lic_forticlient_cloud
```

### Scenario 2: Quale modello FortiGate per quale budget?

| Modello | Throughput | Use Case | Licenze |
|---------|-----------|----------|---------|
| **40F-3G** | 5-12 Gbps | SMB on-premise | Tutti |
| **70G** | 35-50 Gbps | Enterprise | Tutti |
| **100F-3G** | 50-100 Gbps | Enterprise datacenter | Tutti |
| **700G** | 600-700 Gbps | Telecom-grade | Tutti |

**Pro Tip:** Quasi tutti i FortiGate supportano **tutte** le licenze. Il "casi speciali" sono rari.

**Fonte verificata:** https://www.fortinet.com/products/fortigate

---

## <a name="milestone"></a> 📹 MILESTONE SYSTEMS: XProtect + Licensing

### Scenario 1: Cliente ha selezionato XProtect Express+. Quali licenze posso aggiungere?

**Risposta Rapida:**
```
XProtect Express+ supporta:
✅ Care Basic         (support 1 anno)
✅ LPR Module         (license plate recognition)
✅ Access Control     (integrazione controllo accessi)
✅ Evidence Manager   (digital evidence logging)
❌ VisionSuite AI     (SOLO Professional+/Expert/Corporate)
```

**Cosa significa:**
- **Care Basic**: supporto Milestone + patch per 1 anno
- **LPR**: aggiunge riconoscimento targhe auto
- **Access Control**: integra lettori RFID/badge
- **Evidence Manager**: log digitale per forensics
- **VisionSuite AI**: non disponibile per Express+ (upgrade necessario)

### Scenario 2: Upgrade Path — Cosa cambia tra le edizioni?

| Edizione | Max Camere | Add-on Supportati | Prezzo Relativo |
|----------|-----------|------------------|-----------------|
| **Express+** | 48 | Care, LPR, Access, Evidence | Base |
| **Professional+** | Unlimited | ↑ + VisionSuite | 3x |
| **Expert** | Unlimited | ↑ + Failover, Multi-site | 5x |
| **Corporate** | Unlimited | Tutti | 7x |

**Se il cliente cresce:**
```
Express+ (48 cam)
    ↓ Client vuole unlimited multi-site?
    ↓ Upgrade a Professional+
    ↓ Aggiungi VisionSuite AI
```

### Scenario 3: Come controllare sul sito ufficiale?

1. https://www.milestonesys.com/products/software/xprotect/
2. Sezione **"Editions"** → tabella feature comparison
3. Vedi quale add-on per quale edizione
4. Care/LPR/Evidence sono **moduli separati a pagamento**

**Nel nostro catalogo:**
```
Prodotto: XProtect Express+
compatible_licenses:
  - lic_milestone_care_basic
  - lic_milestone_lpr
  - lic_milestone_access
  - lic_milestone_evidence

Prodotto: XProtect Professional+
compatible_licenses: ↑ +
  - lic_milestone_care_plus
  - lic_milestone_visionai
```

**Fonte verificata:** https://www.milestonesys.com/products/software/xprotect/

---

## <a name="qsys"></a> 🔊 Q-SYS: Core Processor + Feature Licensing

### Scenario 1: Cliente ha Q-SYS Core 610. Quali licenze feature?

**Concetto importante:**
```
Il processore Core 610 BASE NON INCLUDE nessuna feature license.
Le feature sono TUTTI add-on separati.
```

**Risposta Rapida:**
```
Core 610 supporta:
✅ Dante License 8x8→16x16    (streaming audio Dante)
✅ VisionSuite AI VSA-100     (ACPR, Presenter Tracking, Speaker Spotlight)
✅ Teams Rooms Integration    (MTR nativo in Core)
✅ Core Scaling 256           (espandi da 128 a 256 canali)
✅ Core Scaling 384           (espandi fino a 384 max)
```

**Modello Pricing:**
```
Core 610 (base 128x128 canali)
    = $XXXX (prezzo base)

+ Dante License (perpetua)
    = +$YYY (one-time)

+ VisionSuite AI VSA-100 (perpetua + annual update opzionale)
    = +$ZZZ (one-time)

+ Teams Rooms License (annual)
    = +$WWW (per anno)

+ Core Scaling 256 (perpetua, una tantum per increment)
    = +$VVV (one-time)
```

### Scenario 2: Quale Core per quale progetto?

| Processor | Canali Base | Feature Consigliata | Use Case |
|-----------|------------|-------------------|----------|
| **Core Nano** | 32x32 | Dante, Teams Rooms | Entry-level |
| **Core 8 Flex** | 64x64 | Dante, Teams Rooms | Small meeting room |
| **Core 110f** | 128x128 | Dante, VisionSuite (no AI), Teams | Medium |
| **Core 610** | 128x128 | Dante, VisionSuite AI, Teams, Scaling | Enterprise |
| **Core 6000 CXR** | Unlimited | Tutte | Mission-critical |

### Scenario 3: Come controllare sul sito ufficiale?

1. https://www.qsys.com/products-solutions/software/licensing/
2. Sezione **"Feature Licensing"** → lista feature e compatibilità
3. **"Core Processor Compatibility"** → quale processor supporta quale feature
4. **Attenzione**: VisionSuite AI richiede **VSA-100 hardware accelerator** separato

**Nel nostro catalogo:**
```
Prodotto: Q-SYS Core 610
compatible_licenses:
  - lic_qsys_dante_8x8
  - lic_qsys_visionai_vsa100
  - lic_qsys_teams_rooms_pro
  - lic_qsys_core_scaling_256
  - lic_qsys_core_scaling_384
```

**Fonte verificata:** https://www.qsys.com/products-solutions/software/licensing/

---

## <a name="shure"></a> 🎤 SHURE: Microfoni + Wireless + Licensing

### Scenario 1: Cliente vuole Shure MXA920. Quali licenze?

**Concetto importante:**
```
Shure MXA920 HARDWARE include IntelliMix DSP (incluso gratis).
Software aggiuntivi e wireless sono subscription separate.
```

**Risposta Rapida:**
```
MXA920 supporta:
✅ IntelliMix DSP     (INCLUSO nel hardware, gratis)
✅ IntelliMix Room   (software remote management, annual subscription)
✅ Frequency License (se abbinato a ULX-D wireless)
```

### Scenario 2: Cliente vuole ULX-D wireless. Quali licenze?

**Risposta Rapida:**
```
ULX-D supporta:
✅ Frequency License  (perpetua, PER BANDA REGIONALE)
✅ Wireless Workbench (software configurazione)
✅ ShureCloud         (cloud management)
```

**Attenzione:**
```
ULX-D Frequency License è PER BANDA:
- L band (470-494 MHz)
- M band (514-558 MHz)
- H band (606-630 MHz)
- J band (655-679 MHz)

Ogni banda = licenza separata (una tantum, perpetua).
```

### Scenario 3: Cliente vuole Axient Digital. Quali licenze?

**Risposta Rapida:**
```
Axient Digital supporta:
✅ Axient Subscription (annual, OBBLIGATORIA)
✅ Wireless Workbench
✅ ShureCloud
```

**Nota:**
```
Axient Digital è PREMIUM wireless.
Subscription ANNUALE è obbligatoria per operare.
Non è opzionale come altri sistemi.
```

**Nel nostro catalogo:**
```
Prodotto: Shure MXA920
compatible_licenses:
  - lic_shure_mxa_intellimix

Prodotto: Shure ULX-D
compatible_licenses:
  - lic_shure_ulxd_frequency

Prodotto: Shure Axient Digital
compatible_licenses:
  - lic_shure_axient_subscription
```

**Fonte verificata:** https://www.shure.com/products

---

## <a name="axis"></a> 📷 AXIS COMMUNICATIONS: Telecamere + Opzioni

### Scenario 1: Cliente vuole AXIS P3267-LVE. Quali opzioni?

**Risposta Rapida:**
```
AXIS P3267-LVE (5MP fixed dome) supporta:
✅ Axis Object Analytics    (AI detection)
✅ Axis License Plate Verifier (LPR)
✅ Axis Perimeter Defender  (boundary detection)
✅ Axis Access Control      (integrazione lettori)

Tutte opzioni AGGIUNTIVE (non incluse).
```

**Nel nostro catalogo:**
```
Prodotto: AXIS P3267-LVE
compatible_licenses:
  - lic_axis_object_analytics
  - lic_axis_lpr
  - lic_axis_perimeter_defender
  - lic_axis_access_control
```

**Fonte verificata:** https://www.axis.com/products

---

## <a name="faq"></a> ❓ FAQ — Domande Frequenti

### D: Come faccio a sapere se una licenza è compatibile?
**R:** Vedi il catalogo nel campo `compatible_licenses` per il prodotto. Se vuoi verificare, vai al link ufficiale del vendor e consulta la sezione licensing/datasheet.

### D: Fortinet FortiGate 70G con quale FortiGuard bundle?
**R:** La maggior parte supporta TUTTI: FortiGuard, ATP, UTP. Consulta il datasheet ufficiale per esclusioni edge-case (rari).

### D: Milestone XProtect Express+ può avere VisionSuite?
**R:** NO. VisionSuite è solo Professional+/Expert/Corporate. Se il cliente vuole AI video analytics, deve upgrade.

### D: Q-SYS Core 610 viene con Dante incluso?
**R:** NO. Il processore base NON include Dante. È un add-on separato (licenza perpetua).

### D: Shure MXA920 include IntelliMix?
**R:** SÌ. IntelliMix DSP è incluso nel hardware. Solo il software Room aggiuntivo è subscription annuale.

### D: Quale documento consultare per i link ufficiali?
**R:** Vedi sezione [Link Importanti](#link) sotto.

---

## <a name="link"></a> 🔗 Link Importanti (Verificati)

### Fortinet
- **FortiGate Prodotti**: https://www.fortinet.com/products/fortigate
- **Licensing/Datasheet**: https://www.fortinet.com/products/fortigate → Technical Specs

### Milestone Systems
- **XProtect**: https://www.milestonesys.com/products/software/xprotect/
- **Licensing/Edizioni**: https://www.milestonesys.com/products/software/xprotect/ → Editions

### Q-SYS
- **Core Processors**: https://www.qsys.com/products-solutions/q-sys/
- **Feature Licensing**: https://www.qsys.com/products-solutions/software/licensing/

### Shure
- **Prodotti**: https://www.shure.com/products
- **MXA920**: https://www.shure.com/products/microphones
- **ULX-D / Wireless**: https://www.shure.com/products/wireless

### Axis Communications
- **Telecamere**: https://www.axis.com/products/cameras
- **Analytics/Licensing**: https://www.axis.com/products → Software

---

## 📝 Come Usare Questo con i Clienti

### Esempio Completo 1: Fortinet

**Cliente dice**: "Ho bisogno di un firewall per 50 Mbps, quali licenze mi consigli?"

**Tuo processo**:
1. Apri catalogo Fortinet
2. Cerchi FortiGate con 50 Mbps throughput → FortiGate 60F/80F
3. Vedi `compatible_licenses`: [lic_forti_atp, lic_forti_utp, ...]
4. Dici: "Consiglio FortiGate 80F + FortiGuard ATP per protezione avanzata + FortiCare per supporto"
5. Allega datasheet ufficiale dal link

### Esempio Completo 2: Milestone

**Cliente dice**: "Voglio monitorare 200 telecamere con AI video analytics. Cosa mi consigli?"

**Tuo processo**:
1. XProtect Express+ supporta solo 48 cam → NON IDONEO
2. XProtect Professional+ = unlimited cam + VisionSuite AI ✅
3. Vedi `compatible_licenses`: [lic_milestone_care_plus, lic_milestone_visionai, ...]
4. Dici: "Professional+ + VisionSuite AI + Care Plus per supporto completo"
5. Allega comparison table dal sito Milestone

---

## 📞 Se Hai Dubbi

1. **Controlla il catalogo**: campo `compatible_licenses`
2. **Consulta il link ufficiale** per l'edizione/modello specifico
3. **Chiedi conferma** al vendor se è caso edge-case raro
4. **Documenta sempre** quando risolvi un dubbio (per aggiornare questa guida)

---

**Fine della guida. Domande? Contatta il team.**

