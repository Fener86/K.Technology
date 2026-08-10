# 🚀 IMPLEMENTAZIONE LICENSING — Guida Tecnica per l'App

**Versione**: 1.0  
**Obiettivo**: Aggiungere la funzionalità "mostra licenze compatibili" direttamente nell'app web  
**Tempo stimato**: 1-2 ore

---

## 📋 Cosa Abbiamo Fatto Finora

✅ **Catalogo.json** aggiornato: Ogni prodotto ha campo `compatible_licenses`  
✅ **app-licensing-data.json**: Dati puliti per l'app (72 prodotti, 159 licenze)  
✅ **DEMO_LICENSING_APP.html**: Prototipo interattivo  
✅ **Modulo JavaScript**: `MODULO_LICENSING_APP.js` (logica pronta)

---

## 🎯 Cosa Farà l'App Dopo Implementazione

### Scenario Collega:

1. Apre app → va su "Fortinet"
2. Clicca su "FortiGate 70G"
3. **L'app mostra automaticamente:**
   ```
   📋 Licenze Compatibili
   - FortiGuard ATP (feature, annual, Verifica →)
   - FortiGuard UTP (feature, annual, Verifica →)
   - FortiCare (support, annual, Verifica →)
   - FortiClient Device (endpoint, annual, Verifica →)
   - FortiClient Cloud (endpoint, annual, Verifica →)
   ```
4. Collega legge le descrizioni
5. Clicca "Verifica" → apre sito ufficiale Fortinet
6. **Nessun documento esterno. Tutto dentro l'app. ✅**

---

## 🛠️ Implementazione — Step by Step

### Step 1: Carica il File di Dati

Nel file `index.html`, dove carichi il catalogo:

```javascript
// PRIMA (attuale):
let catalogData = null;
fetch('data/catalog.json')
  .then(r => r.json())
  .then(d => {
    catalogData = d;
    // ... resto init app
  });

// DOPO (aggiunto):
let catalogData = null;
let licensingData = null;

Promise.all([
  fetch('data/catalog.json').then(r => r.json()),
  fetch('data/app-licensing-data.json').then(r => r.json())
]).then(([catalog, licensing]) => {
  catalogData = catalog;
  licensingData = licensing;
  // ... resto init app
});
```

---

### Step 2: Crea la Classe LicensingModule

Aggiungi questa classe nel tuo `<script>` principale (o in file separato):

```javascript
class LicensingModule {
  constructor(catalogData, licensingData) {
    this.catalog = catalogData;
    this.productLicenses = licensingData.products_licenses;
    this.licenseDescriptions = licensingData.license_descriptions;
  }

  /**
   * Restituisce HTML con tutte le licenze compatibili per un prodotto
   */
  getCompatibleLicensesHTML(productId) {
    const productLic = this.productLicenses[productId];
    
    if (!productLic || !productLic.licenze.length) {
      return null; // Nessuna licenza
    }

    let html = `
      <div class="licensing-section">
        <h3>📋 Licenze Compatibili</h3>
        <p class="licensing-subtitle">
          Abbinabili a: <strong>${productLic.nome}</strong>
        </p>
        <div class="licenses-grid">
    `;

    productLic.licenze.forEach(licId => {
      const lic = this.licenseDescriptions[licId];
      if (lic) {
        const fonte = this.catalog.fonti.find(f => f.id === lic.fonte) || {};
        html += `
          <div class="license-card">
            <div class="license-header">
              <strong>${lic.nome}</strong>
              <span class="license-type">${lic.tipo}</span>
            </div>
            <p class="license-desc">${lic.descrizione}</p>
            <div class="license-details">
              ⏱️ ${lic.durata}
            </div>
            <a href="${fonte.url || '#'}" target="_blank" class="btn-verify">
              ✓ Verifica Ufficiale
            </a>
          </div>
        `;
      }
    });

    html += `
        </div>
        <div class="licensing-footer">
          💡 Clicca "Verifica Ufficiale" per controllare direttamente dal vendor.
        </div>
      </div>
    `;

    return html;
  }
}
```

---

### Step 3: Istanzia il Modulo

Nel caricamento dell'app:

```javascript
let licensingModule = null;

Promise.all([
  fetch('data/catalog.json').then(r => r.json()),
  fetch('data/app-licensing-data.json').then(r => r.json())
]).then(([catalog, licensing]) => {
  catalogData = catalog;
  licensingData = licensing;
  
  // NUOVO: crea istanza del modulo
  licensingModule = new LicensingModule(catalogData, licensingData);
  
  // ... resto init
});
```

---

### Step 4: Mostra Licenze Quando Selezioni un Prodotto

Nel codice che gestisce la selezione di un prodotto (dipende dalla tua struttura):

```javascript
// Quando il collega clicca su un prodotto
function onProductSelected(productId) {
  // ... mostra dettagli prodotto
  
  // NUOVO: mostra licenze compatibili
  if (licensingModule) {
    const licensesHTML = licensingModule.getCompatibleLicensesHTML(productId);
    if (licensesHTML) {
      // Inserisci nel DOM (dove mostra i dettagli del prodotto)
      const detailsContainer = document.querySelector('.product-details');
      detailsContainer.insertAdjacentHTML('beforeend', licensesHTML);
    }
  }
}
```

---

### Step 5: Aggiungi CSS

```css
.licensing-section {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e5e5e7;
}

.licensing-section h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.licensing-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.licenses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.license-card {
  background: #f9f9fb;
  border: 1px solid #e5e5e7;
  border-radius: 12px;
  padding: 16px;
  transition: all 0.2s;
}

.license-card:hover {
  border-color: #34c759;
  background: #f5fff6;
  transform: translateY(-2px);
}

.license-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 10px;
  gap: 8px;
}

.license-header strong {
  font-size: 14px;
  font-weight: 600;
}

.license-type {
  background: #e5e5e7;
  color: #333;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
}

.license-desc {
  font-size: 13px;
  color: #555;
  margin-bottom: 12px;
  line-height: 1.5;
}

.license-details {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
}

.btn-verify {
  display: inline-block;
  background: #34c759;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-verify:hover {
  background: #31ba54;
}

.licensing-footer {
  background: #f5fff6;
  border: 1px solid #34c759;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 13px;
  color: #333;
}
```

---

## 🧪 Testing

### Prova il Modulo Manualmente

Apri browser console e testa:

```javascript
// Crea istanza di prova
const licensingModule = new LicensingModule(catalogData, licensingData);

// Prova con un prodotto noto (es: FortiGate 70G)
const html = licensingModule.getCompatibleLicensesHTML('prod_fg70g');
console.log(html); // Dovresti vedere HTML con 5 licenze

// Inserisci nel DOM per vedere come appare
document.body.insertAdjacentHTML('beforeend', html);
```

---

## 📊 Checklist Implementazione

- [ ] Aggiungi caricamento `app-licensing-data.json`
- [ ] Implementa classe `LicensingModule`
- [ ] Istanzia modulo nel caricamento app
- [ ] Integra `getCompatibleLicensesHTML()` nella logica di selezione prodotto
- [ ] Aggiungi CSS styling
- [ ] Testa su almeno 3 prodotti (Fortinet, Milestone, Q-SYS)
- [ ] Verifica che i link ufficiali funzionino
- [ ] Testa su mobile (responsive)

---

## 🔗 File Correlati

```
GitHub: Fener86/K.Technology

📄 data/catalog.json
   ↓ (contiene compatible_licenses per ogni prodotto)

📄 data/app-licensing-data.json
   ↓ (dati puliti per app)

📄 docs/MODULO_LICENSING_APP.js
   ↓ (codice classe LicensingModule)

📄 docs/DEMO_LICENSING_APP.html
   ↓ (prototipo per vedere come appare)

📄 index.html (LA TUA APP)
   ↓ (dove integrare tutto)
```

---

## 💡 Pro Tips

1. **Lazy loading**: Carica `app-licensing-data.json` solo quando serve (al click su prodotto) se la app è lenta
2. **Caching**: Salva i dati in `localStorage` dopo primo caricamento
3. **Fallback**: Se il file JSON non carica, semplicemente non mostra la sezione licenze
4. **Mobile**: CSS è già responsive, funziona bene su mobile

---

## 🆘 Se Hai Problemi

1. **Licenze non appaiono?**
   - Controlla che `compatible_licenses` esista nel prodotto
   - Verifica che il file `app-licensing-data.json` carichi (Network tab browser)

2. **Link non funzionano?**
   - Verifica che `fonti.id` e `fonti.url` siano corretti nel catalogo

3. **CSS non è bello?**
   - Adatta i colori/spacing al design della tua app
   - Il CSS sopra è generico, personalizza secondo il tuo stile

---

## 📝 Prossimi Step Dopo Implementazione

1. Monitora se i colleghi usano/capiscono bene
2. Raccogli feedback
3. Aggiungi filtri avanzati:
   - "Mostra solo licenze annual"
   - "Mostra solo feature licenses"
4. Integra con BoM (mostra prezzi licenze)
5. Aggiungi "preset bundle" (combinazioni comuni pre-selezionate)

---

## 🎯 Risultato Finale

Quando è tutto implementato, il collega:

1. Apre app
2. Clicca su "FortiGate 70G"
3. Vede istantaneamente tutte le 5 licenze compatibili
4. Legge cosa significano (descriptions inline)
5. Vede durata (annual, perpetua, etc)
6. Clicca link ufficiale per verificare
7. **Zero confusione. Tutto dentro l'app. ✅**

---

**Fine implementazione. Domande? Controlla DEMO_LICENSING_APP.html per vedere come dovrebbe apparire visualmente.**
