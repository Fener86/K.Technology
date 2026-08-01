// Scoperta settimanale di novita' vendor, eseguita da .github/workflows/weekly-discovery.yml
//
// A differenza di check-sources.mjs (che controlla SOLO le fonti gia' presenti nel catalogo),
// questo script fa una RICERCA WEB LIBERA (tramite lo strumento web_search dell'API Anthropic)
// per scoprire prodotti/annunci recenti dei vendor che non sono ancora nel catalogo.
//
// Regola di sicurezza (stesso principio di check-sources.mjs, adattato a un contesto piu' rischioso
// perche' qui la ricerca e' libera, non un semplice confronto di hash):
//   - una proposta viene scritta AUTOMATICAMENTE in catalog.json SOLO SE l'URL della fonte citata
//     appartiene a un dominio ufficiale noto del vendor (elenco DOMINI_UFFICIALI qui sotto)
//   - se l'URL non appartiene a un dominio ufficiale noto, o manca, la proposta finisce in
//     data/proposals.json per revisione umana, e NON tocca il catalogo
//   - non vengono mai modificati o cancellati dati esistenti: solo nuove famiglie/prodotti aggiunti
//
// Richiede il secret ANTHROPIC_API_KEY (lo stesso usato da check-sources.mjs).

import { readFile, writeFile } from "node:fs/promises";

const CATALOG_PATH = new URL("../data/catalog.json", import.meta.url);
const PROPOSALS_PATH = new URL("../data/proposals.json", import.meta.url);
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || "";
const AI_MODEL = "claude-sonnet-4-6";

// Domini ufficiali noti per vendor (per id vendor come in catalog.json)
const DOMINI_UFFICIALI = {
  v_fortinet: ["fortinet.com"],
  v_cisco: ["cisco.com", "meraki.cisco.com", "newsroom.cisco.com", "duo.com", "spaces.cisco.com"],
  v_milestone: ["milestonesys.com", "prnewswire.com"], // prnewswire ammesso solo se il comunicato e' a nome Milestone
  v_avigilon: ["avigilon.com"],
  v_axis: ["axis.com", "newsroom.axis.com"],
  v_barco: ["barco.com"],
  v_crestron: ["crestron.com"],
  v_qsys: ["qsys.com"],
  v_shure: ["shure.com"],
  v_karray: ["k-array.com", "k-arrayusa.com"],
  v_maxhub: ["maxhub.com"],
};

function urlHasDominioUfficiale(url, vendorId) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    const domini = DOMINI_UFFICIALI[vendorId] || [];
    return domini.some((d) => host === d || host.endsWith("." + d));
  } catch {
    return false;
  }
}

async function chiediNovitaVendor(vendor) {
  const sistema =
    "Sei un ricercatore di prodotti per un catalogo tecnico-commerciale. Cerca sul web annunci UFFICIALI e RECENTI (ultimi 6 mesi) " +
    "di nuovi prodotti, funzionalita' o servizi del vendor indicato, pubblicati dal vendor stesso (comunicato stampa, pagina prodotto o newsroom ufficiale). " +
    "Ignora rivenditori, blog di terze parti, forum. Rispondi ESCLUSIVAMENTE con un array JSON (anche vuoto), senza testo aggiuntivo, con questa struttura per ogni elemento: " +
    '[{"nome": "nome del prodotto/funzionalita\'", "descrizione": "breve descrizione in italiano, max 300 caratteri", "fonteUrl": "URL esatto della pagina ufficiale", "fonteTitolo": "titolo della pagina", "data": "AAAA-MM-GG se nota altrimenti null"}]. ' +
    "Non includere elementi gia' ampiamente noti/vecchi. Massimo 3 elementi per vendor. Se non trovi nulla di recente e verificabile, rispondi con un array vuoto [].";

  const utente = `Vendor: ${vendor.nome}. Sito ufficiale: ${vendor.sito}. Cerca annunci recenti pertinenti a: Audio Video, Networking, Cybersecurity, Security Fisica, Controllo Accessi (a seconda dell'area di competenza del vendor).`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: AI_MODEL,
      max_tokens: 1500,
      system: sistema,
      messages: [{ role: "user", content: utente }],
      tools: [{ type: "web_search_20250305", name: "web_search" }],
    }),
  });
  if (!res.ok) throw new Error("Anthropic API " + res.status + " per vendor " + vendor.id);
  const data = await res.json();
  const testo = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
  const jsonMatch = testo.match(/\[[\s\S]*\]/);
  if (!jsonMatch) return [];
  try {
    return JSON.parse(jsonMatch[0]);
  } catch {
    return [];
  }
}

function uid(prefix) {
  return prefix + "_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
}

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.log("ANTHROPIC_API_KEY non configurata: scoperta settimanale disattivata.");
    return;
  }

  const catalog = JSON.parse(await readFile(CATALOG_PATH, "utf-8"));
  let proposals = { ultimaEsecuzione: null, elementi: [] };
  try {
    proposals = JSON.parse(await readFile(PROPOSALS_PATH, "utf-8"));
  } catch {
    // primo avvio
  }

  const urlEsistenti = new Set((catalog.fonti || []).map((s) => s.url));
  catalog.changelog = catalog.changelog || [];
  let catalogoModificato = false;
  const nuoveProposte = [];

  for (const vendor of catalog.vendors || []) {
    if (!DOMINI_UFFICIALI[vendor.id]) continue; // vendor senza dominio noto: salta, non rischiamo falsi positivi
    let elementi = [];
    try {
      elementi = await chiediNovitaVendor(vendor);
    } catch (e) {
      console.log("Errore ricerca per", vendor.nome, ":", e.message);
      continue;
    }

    for (const el of elementi) {
      if (!el.fonteUrl || urlEsistenti.has(el.fonteUrl)) continue; // gia' presente o senza fonte, salta

      if (urlHasDominioUfficiale(el.fonteUrl, vendor.id)) {
        // fonte verificabilmente ufficiale: crea una nuova fonte + una nuova famiglia "scoperta automaticamente"
        const fonteId = uid("src_auto");
        catalog.fonti.push({
          id: fonteId,
          url: el.fonteUrl,
          titolo: el.fonteTitolo || el.nome,
          vendorId: vendor.id,
          tipo: "scoperta automatica (fonte ufficiale verificata)",
          dataConsultazione: new Date().toISOString().slice(0, 10),
          stato: "nuovo (da rivedere per classificazione manuale)",
          categoriaControllo: "release",
        });
        const famId = uid("fam_auto");
        catalog.famiglie.push({
          id: famId,
          vendorId: vendor.id,
          brandLineId: null,
          macroareaId: null, // richiede classificazione manuale nella macroarea corretta
          areaFunzionaleId: null,
          nome: el.nome + " (scoperto automaticamente — DA CLASSIFICARE)",
          descrizione: (el.descrizione || "") + " [Aggiunto automaticamente dalla scoperta settimanale; verificare macroarea, famiglia di appartenenza e correttezza del dato.]",
          stato: "da_verificare",
          fonteId,
        });
        catalog.changelog.push({
          id: uid("chg_discovery"),
          entita: "ScopertaAutomatica",
          azione: "nuova famiglia proposta e inserita automaticamente (fonte ufficiale verificata)",
          nome: el.nome,
          fonteUrl: el.fonteUrl,
          timestamp: new Date().toISOString(),
        });
        catalogoModificato = true;
        urlEsistenti.add(el.fonteUrl);
      } else {
        // fonte non verificabile come ufficiale: solo proposta, nessuna scrittura nel catalogo
        nuoveProposte.push({ vendorId: vendor.id, vendorNome: vendor.nome, ...el, motivoEsclusione: "dominio fonte non riconosciuto come ufficiale" });
      }
    }
    await new Promise((r) => setTimeout(r, 500));
  }

  if (nuoveProposte.length) {
    proposals.elementi = [...(proposals.elementi || []), ...nuoveProposte];
  }
  proposals.ultimaEsecuzione = new Date().toISOString();
  await writeFile(PROPOSALS_PATH, JSON.stringify(proposals, null, 2) + "\n", "utf-8");

  if (catalogoModificato) {
    await writeFile(CATALOG_PATH, JSON.stringify(catalog, null, 2) + "\n", "utf-8");
  }

  console.log(`Vendor controllati: ${Object.keys(DOMINI_UFFICIALI).length}`);
  console.log(`Famiglie aggiunte automaticamente (fonte ufficiale verificata): ${catalogoModificato ? "si', vedi changelog" : "0"}`);
  console.log(`Proposte in attesa di revisione umana (data/proposals.json): ${nuoveProposte.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
