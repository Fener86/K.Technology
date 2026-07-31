// Controllo giornaliero delle fonti ufficiali del catalogo Kaplet + aggiornamento
// automatico assistito da AI (Claude), eseguito da .github/workflows/daily-source-check.yml.
//
// Per ogni fonte in data/catalog.json:
//  1. verifica che l'URL sia raggiungibile (HTTP GET) e calcola un hash del contenuto
//  2. se il contenuto e' cambiato rispetto all'ultima esecuzione:
//     a. scarica il testo della pagina (solo HTML; i PDF non vengono letti dall'AI
//        in questa versione e restano segnalati per revisione manuale)
//     b. individua le voci del catalogo (famiglie/prodotti/licenze/integrazioni)
//        collegate a quella fonte
//     c. chiede a Claude di confrontare il testo nuovo con la voce attuale e
//        restituire un JSON con le eventuali modifiche e un livello di confidenza
//     d. SOLO se la confidenza e' "alta", applica la modifica direttamente al
//        catalogo e la registra nello storico modifiche con la citazione della fonte
//     e. se la confidenza e' "media"/"bassa" o incerta, NON scrive nulla: lascia
//        solo il flag "cambiataDaUltimoControllo" per revisione umana, come prima
//
// Nota di rischio (accettata esplicitamente da Kaplet): questo meccanismo scrive nel
// catalogo SENZA approvazione umana quando il modello si dichiara certo. E' un
// compromesso deliberato tra velocita' e sicurezza: in caso di dubbio sul risultato,
// consultare comunque la fonte originale citata in ogni voce.
//
// Richiede il secret ANTHROPIC_API_KEY configurato in GitHub (Settings > Secrets and
// variables > Actions). Se il secret non e' presente, lo script si comporta come la
// versione base: solo controllo di raggiungibilita'/variazione, nessuna scrittura AI.

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const CATALOG_PATH = new URL("../data/catalog.json", import.meta.url);
const STATUS_PATH = new URL("../data/source-status.json", import.meta.url);

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || "";
const AI_MODEL = "claude-sonnet-4-6";
const MAX_PAGE_CHARS = 8000;

const INTERVALLI_GIORNI = {
  licensing: 14,
  release: 7,
  eol: 14,
  datasheet: 45,
  descrizione: 90,
};

// Campi testuali aggiornabili automaticamente per ciascun tipo di entita'.
// Elenco volutamente limitato ai campi descrittivi/di licensing, MAI a id/relazioni.
const CAMPI_AGGIORNABILI = {
  famiglie: ["descrizione", "stato"],
  prodotti: ["descrizioneBreve", "modello", "deployment", "statoLifecycle"],
  licenze: ["metrica", "durata", "rinnovo", "gracePeriod", "conseguenzeScadenza", "tipologia"],
  integrazioni: ["descrizione", "note", "tipo"],
};

function hashOf(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function checkOne(source) {
  const result = {
    id: source.id,
    url: source.url,
    ultimoControllo: new Date().toISOString(),
    httpStatus: null,
    raggiungibile: false,
    hash: null,
    cambiataDaUltimoControllo: false,
    errore: null,
    aggiornamentoAutomatico: null,
  };
  try {
    const res = await fetch(source.url, {
      redirect: "follow",
      headers: { "User-Agent": "Kaplet-Technology-Portfolio-Bot/1.0 (+source monitoring)" },
    });
    result.httpStatus = res.status;
    result.raggiungibile = res.ok;
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      result.hash = hashOf(buf);
      const contentType = res.headers.get("content-type") || "";
      result._isHtml = contentType.includes("html");
      result._rawBuffer = buf;
    }
  } catch (e) {
    result.errore = String(e && e.message ? e.message : e);
  }
  return result;
}

function trovaEntitaCollegate(catalog, sourceId) {
  const collegate = [];
  for (const tipo of Object.keys(CAMPI_AGGIORNABILI)) {
    for (const item of catalog[tipo] || []) {
      if (item.fonteId === sourceId) collegate.push({ tipo, item });
    }
  }
  return collegate;
}

async function chiediModificaAI(entita, testoNuovo) {
  const campiValidi = CAMPI_AGGIORNABILI[entita.tipo] || [];
  const sistema =
    "Sei un motore di aggiornamento dati per un catalogo tecnico-commerciale. Ricevi (1) una voce esistente in formato JSON e (2) il nuovo testo scaricato dalla fonte ufficiale collegata a quella voce. " +
    "Confronta i due contenuti e determina se qualche campo tra questi e' cambiato realmente nel merito: " + campiValidi.join(", ") + ". " +
    "Rispondi ESCLUSIVAMENTE con un oggetto JSON valido, senza testo aggiuntivo, con questa struttura: " +
    '{"confidenza": "alta|media|bassa", "modifiche": [{"campo": "...", "valoreNuovo": "...", "citazione": "frase esatta della fonte che giustifica il cambiamento"}], "note": "breve motivazione"}. ' +
    "Usa \"alta\" SOLO se il testo della fonte afferma esplicitamente e senza ambiguita' il nuovo valore. Se il testo e' ambiguo, parziale, o riguarda una variante regionale/di versione non generalizzabile, usa \"media\" o \"bassa\" e lascia la lista modifiche vuota. Non inventare mai un valore non presente nel testo.";

  const utente =
    "Voce attuale del catalogo:\n" + JSON.stringify({ tipo: entita.tipo, ...entita.item }, null, 2) +
    "\n\nNuovo testo della fonte ufficiale (troncato):\n" + testoNuovo.slice(0, MAX_PAGE_CHARS);

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: AI_MODEL,
      max_tokens: 800,
      system: sistema,
      messages: [{ role: "user", content: utente }],
    }),
  });
  if (!res.ok) throw new Error("Anthropic API " + res.status);
  const data = await res.json();
  const testo = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
  const jsonMatch = testo.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return { confidenza: "bassa", modifiche: [], note: "risposta AI non interpretabile" };
  try {
    return JSON.parse(jsonMatch[0]);
  } catch {
    return { confidenza: "bassa", modifiche: [], note: "JSON AI non valido" };
  }
}

function applicaModifiche(catalog, entita, modifiche, citazioniAccumulate) {
  const campiValidi = new Set(CAMPI_AGGIORNABILI[entita.tipo] || []);
  const lista = catalog[entita.tipo];
  const idx = lista.findIndex((x) => x.id === entita.item.id);
  if (idx === -1) return false;
  let applicata = false;
  for (const m of modifiche) {
    if (!campiValidi.has(m.campo)) continue;
    if (m.valoreNuovo == null || m.valoreNuovo === lista[idx][m.campo]) continue;
    lista[idx][m.campo] = m.valoreNuovo;
    citazioniAccumulate.push(`${entita.tipo}/${entita.item.id}.${m.campo}: "${m.citazione || ""}"`);
    applicata = true;
  }
  if (applicata) lista[idx].dataUltimaVerificaAutomatica = new Date().toISOString().slice(0, 10);
  return applicata;
}

async function main() {
  const catalog = JSON.parse(await readFile(CATALOG_PATH, "utf-8"));
  let status = { ultimaEsecuzione: null, risultati: {} };
  try {
    status = JSON.parse(await readFile(STATUS_PATH, "utf-8"));
  } catch (e) {
    // primo avvio, nessun file precedente
  }

  const nuoviRisultati = { ...status.risultati };
  let catalogoModificato = false;
  catalog.changelog = catalog.changelog || [];

  for (const source of catalog.fonti || []) {
    const prev = status.risultati[source.id];
    const esito = await checkOne(source);
    const cambiata = !!(prev && prev.hash && esito.hash && prev.hash !== esito.hash);
    esito.cambiataDaUltimoControllo = cambiata;

    if (cambiata && esito._isHtml && ANTHROPIC_API_KEY) {
      const entitaCollegate = trovaEntitaCollegate(catalog, source.id);
      if (entitaCollegate.length) {
        const testoNuovo = stripHtml(esito._rawBuffer.toString("utf-8"));
        const citazioni = [];
        let almenoUnaApplicata = false;
        for (const entita of entitaCollegate) {
          try {
            const risposta = await chiediModificaAI(entita, testoNuovo);
            if (risposta.confidenza === "alta" && (risposta.modifiche || []).length) {
              const applicata = applicaModifiche(catalog, entita, risposta.modifiche, citazioni);
              if (applicata) almenoUnaApplicata = true;
            }
          } catch (e) {
            console.log("Errore chiamata AI per", entita.tipo, entita.item.id, ":", e.message);
          }
        }
        if (almenoUnaApplicata) {
          catalogoModificato = true;
          source.dataConsultazione = new Date().toISOString().slice(0, 10);
          catalog.changelog.push({
            id: "chg_ai_" + Date.now() + "_" + source.id,
            entita: "AggiornamentoAutomatico",
            azione: "modifica applicata da AI senza revisione umana",
            nome: source.titolo,
            citazioni,
            timestamp: new Date().toISOString(),
          });
          esito.aggiornamentoAutomatico = { esito: "applicato", citazioni };
          esito.cambiataDaUltimoControllo = false;
        } else {
          esito.aggiornamentoAutomatico = { esito: "confidenza insufficiente, richiede revisione manuale" };
        }
      }
    } else if (cambiata && !esito._isHtml) {
      esito.aggiornamentoAutomatico = { esito: "fonte non HTML (es. PDF): richiede sempre revisione manuale" };
    } else if (cambiata && !ANTHROPIC_API_KEY) {
      esito.aggiornamentoAutomatico = { esito: "ANTHROPIC_API_KEY non configurata: solo segnalazione" };
    }

    delete esito._isHtml;
    delete esito._rawBuffer;

    const categoria = source.categoriaControllo || "descrizione";
    esito.categoriaControllo = categoria;
    esito.intervalloGiorniConsigliato = INTERVALLI_GIORNI[categoria] || 60;
    nuoviRisultati[source.id] = esito;
    await new Promise((r) => setTimeout(r, 800));
  }

  const output = {
    ultimaEsecuzione: new Date().toISOString(),
    risultati: nuoviRisultati,
  };

  await writeFile(STATUS_PATH, JSON.stringify(output, null, 2) + "\n", "utf-8");
  if (catalogoModificato) {
    await writeFile(CATALOG_PATH, JSON.stringify(catalog, null, 2) + "\n", "utf-8");
  }

  const cambiate = Object.values(nuoviRisultati).filter((r) => r.cambiataDaUltimoControllo);
  const irraggiungibili = Object.values(nuoviRisultati).filter((r) => !r.raggiungibile);
  const applicate = Object.values(nuoviRisultati).filter((r) => r.aggiornamentoAutomatico && r.aggiornamentoAutomatico.esito === "applicato");
  console.log(`Controllate ${catalog.fonti.length} fonti.`);
  console.log(`Cambiate dall'ultimo controllo: ${cambiate.length}`);
  console.log(`Aggiornate automaticamente da AI: ${applicate.length}`);
  console.log(`Non raggiungibili: ${irraggiungibili.length}`);
  if (cambiate.length) console.log("Fonti ancora da rivedere manualmente:", cambiate.map((c) => c.url).join(", "));
  if (irraggiungibili.length) console.log("Fonti non raggiungibili:", irraggiungibili.map((c) => c.url).join(", "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
