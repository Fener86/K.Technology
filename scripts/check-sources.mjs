// Controllo giornaliero delle fonti ufficiali del catalogo Kaplet.
// Eseguito da .github/workflows/daily-source-check.yml (GitHub Actions, cron).
//
// Per ogni fonte in data/catalog.json:
//  - verifica che l'URL sia raggiungibile (HTTP GET)
//  - calcola un hash del contenuto testuale e lo confronta con l'ultimo hash noto
//  - se il contenuto e' cambiato rispetto all'ultima esecuzione, lo segnala (daRevisionare = true)
//  - aggiorna data/source-status.json con l'esito
//
// Nota: questo e' un controllo di CAMBIAMENTO, non una riverifica semantica del
// dato tecnico/commerciale: quando "daRevisionare" e' true, un Product Manager
// deve rileggere la pagina e aggiornare manualmente il catalogo se necessario.

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const CATALOG_PATH = new URL("../data/catalog.json", import.meta.url);
const STATUS_PATH = new URL("../data/source-status.json", import.meta.url);

const INTERVALLI_GIORNI = {
  licensing: 14,
  release: 7,
  eol: 14,
  datasheet: 45,
  descrizione: 90,
};

function hashOf(text) {
  return createHash("sha256").update(text).digest("hex");
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
  };
  try {
    const res = await fetch(source.url, {
      redirect: "follow",
      headers: { "User-Agent": "Kaplet-Technology-Portfolio-Bot/1.0 (+source monitoring)" },
    });
    result.httpStatus = res.status;
    result.raggiungibile = res.ok;
    if (res.ok) {
      const buf = await res.arrayBuffer();
      // Per i PDF/binari usiamo l'hash dei byte grezzi; per l'HTML testuale va bene lo stesso.
      result.hash = hashOf(Buffer.from(buf));
    }
  } catch (e) {
    result.errore = String(e && e.message ? e.message : e);
  }
  return result;
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

  for (const source of catalog.fonti || []) {
    const prev = status.risultati[source.id];
    const esito = await checkOne(source);
    if (prev && prev.hash && esito.hash && prev.hash !== esito.hash) {
      esito.cambiataDaUltimoControllo = true;
    }
    const categoria = source.categoriaControllo || "descrizione";
    esito.categoriaControllo = categoria;
    esito.intervalloGiorniConsigliato = INTERVALLI_GIORNI[categoria] || 60;
    nuoviRisultati[source.id] = esito;
    // piccola pausa per non martellare i server vendor
    await new Promise((r) => setTimeout(r, 800));
  }

  const output = {
    ultimaEsecuzione: new Date().toISOString(),
    risultati: nuoviRisultati,
  };

  await writeFile(STATUS_PATH, JSON.stringify(output, null, 2) + "\n", "utf-8");

  const cambiate = Object.values(nuoviRisultati).filter((r) => r.cambiataDaUltimoControllo);
  const irraggiungibili = Object.values(nuoviRisultati).filter((r) => !r.raggiungibile);
  console.log(`Controllate ${catalog.fonti.length} fonti.`);
  console.log(`Cambiate dall'ultimo controllo: ${cambiate.length}`);
  console.log(`Non raggiungibili: ${irraggiungibili.length}`);
  if (cambiate.length) console.log("Fonti da rivedere:", cambiate.map((c) => c.url).join(", "));
  if (irraggiungibili.length) console.log("Fonti non raggiungibili:", irraggiungibili.map((c) => c.url).join(", "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
