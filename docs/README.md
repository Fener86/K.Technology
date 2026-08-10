# 📚 Documentazione Interna — Kaplet Technology Portfolio

## Guide per i Colleghi

### 1. **GUIDA_COLLEGHI_LICENSING_COMPLETA.md** (LEGGERE PRIMA)
Guida definitiva su come abbinare prodotti a licenze.

**Contenuti:**
- Fortinet: FortiGate + quale licenza
- Milestone: XProtect Edition + quale licenza  
- Q-SYS: Core Processor + quale feature license
- Shure: Microfoni/Wireless + quale licenza
- Axis: Telecamere + quali opzioni
- FAQ con risposte comuni
- Link ufficiali verificati

**Quando usarla:** Quando un cliente chiede "Quale licenza per questo prodotto?"

---

### 2. **LICENSING_COMPATIBILITY_MATRIX.json**
File JSON strutturato con matrice di compatibilità programmatica.

**Uso:** Integrazione futura con UI/API per compatibilità automatica.

---

### 3. **Vendor-Specific Guides**
- FORTINET_LICENSING_GUIDE.md
- MILESTONE_LICENSING_GUIDE.md
- QSYS_LICENSING_GUIDE.md

**Quando usarli:** Approfondimento singolo vendor.

---

## Come Usare il Catalogo

### Scenario Tipico
```
Colleghi aprono il catalogo:
1. Cercano il prodotto (es: "FortiGate 70G")
2. Vedono il campo "compatible_licenses"
3. Consultano la GUIDA_COLLEGHI per dettagli
4. Verificano sul link ufficiale se necessario
```

### Esempio Pratico
```json
{
  "id": "prod_fg70g",
  "nomeCommerciale": "FortiGate 70G",
  "compatible_licenses": [
    "lic_forti_atp",
    "lic_forti_utp",
    "lic_forticlient_device"
  ]
}
```

→ Colleghi vedono: "Posso abbinare ATP, UTP, FortiClient"
→ Consultano GUIDA: "Sì, questi sono supportati. Consulta il link ufficiale per confirmare"

---

## Link Diretti nel Catalogo

Ogni fonte nel catalogo ha un URL verificato.

**Esempio:**
```json
{
  "id": "src_fortinet_fortigate",
  "url": "https://www.fortinet.com/products/fortigate",
  "titolo": "Fortinet FortiGate - Official Product Page"
}
```

→ Quando il cliente chiede: "Dove lo vedo?", il link è già nel catalogo!

---

## Aggiornamenti Futuri

Se scopri nuove compatibilità:
1. Aggiorna `compatible_licenses` nel catalogo
2. Documenta nella GUIDA (FAQ o scenarios)
3. Sincronizza su GitHub
4. Notifica i colleghi

