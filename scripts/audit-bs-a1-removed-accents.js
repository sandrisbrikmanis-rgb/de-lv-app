#!/usr/bin/env node
/**
 * Pedagogical audit of 70 removed sectionAccents (read-only).
 * Writes reports/temp/bs-a1-removed-section-accents-analysis.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LOG = path.join(ROOT, "reports/temp/bs-a1-section-accents-fix-log.json");
const OUT = path.join(ROOT, "reports/temp/bs-a1-removed-section-accents-analysis.json");
const LV_FILE = path.join(ROOT, "data/a1.js");
const BS_FILE = path.join(ROOT, "data/bs/a1.js");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LV_DIACRITICS = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function findEntry(words, id) {
  return words.find((e) => e.study?.id === id);
}

function getColorFromPath(p) {
  for (const c of ACCENT_COLORS) {
    const m = p.match(new RegExp(`\\.${c}\\[`));
    if (m) return c;
  }
  return null;
}

function countAccents(sa) {
  let n = 0;
  function walk(o, inDe = false) {
    if (typeof o === "string") { if (!inDe) n++; return; }
    if (Array.isArray(o)) o.forEach((v) => walk(v, inDe));
    else if (o && typeof o === "object") {
      for (const [k, v] of Object.entries(o)) walk(v, inDe || k === "de");
    }
  }
  if (sa) walk(sa);
  return n;
}

function getSectionAccentsAt(sa, sectionKey, index, field) {
  if (!sa) return null;
  let node = sa[sectionKey];
  if (node === undefined) return null;
  if (Array.isArray(node)) {
    if (index === null || index === undefined) return node;
    node = node[index];
  }
  if (!node) return null;
  if (field && node[field]) return node[field];
  return node;
}

function listAccentTerms(block, inDe = false) {
  const terms = [];
  function walk(o, de = inDe) {
    if (typeof o === "string") { if (!de) terms.push(o); return; }
    if (Array.isArray(o)) o.forEach((v) => walk(v, de));
    else if (o && typeof o === "object") {
      for (const [k, v] of Object.entries(o)) walk(v, de || k === "de");
    }
  }
  if (block) walk(block);
  return terms;
}

function isLvRemnant(term) {
  return LV_DIACRITICS.test(term) || /^(mazs|teikt|iet|lietus|laiks|reiz|pie|uz|maz|aiznest|atnest|nogādāt|apciemot|pasaukt|liels|augsts|kaut kas|kaut ko|nedaudz|nekas|man ir|doties prom|neiet prom|uz virsmu|uz virsmas|uz kino|kurp\?|kur\?|daudzuma|bet gan)$/i.test(term);
}

function termInText(term, text) {
  if (!term || !text) return false;
  try {
    const esc = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?<![\\p{L}\\p{N}_])${esc}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.toLowerCase().includes(term.toLowerCase());
  }
}

function classify(item, bsEntry, lvEntry, color) {
  const { term, lvTerm, bsText, sectionKey, index, field, path: accentPath } = item;
  const bsSa = bsEntry?.study?.sectionAccents;
  const lvSa = lvEntry?.study?.sectionAccents;
  const bsBlock = getSectionAccentsAt(bsSa, sectionKey, index, field);
  const lvBlock = getSectionAccentsAt(lvSa, sectionKey, index, field);
  const currentTerms = listAccentTerms(bsBlock, field === "de");
  const lvTerms = listAccentTerms(lvBlock, field === "de");

  const inBs = termInText(term, bsText);
  const isOrphan = !bsText || bsText.trim() === "";
  const isDeWrongExample = field === "de" && !inBs;
  const isOrphanComparison = (sectionKey === "comparison" && index !== null && index >= (bsEntry.study.comparison?.length || 0));
  const isLv = isLvRemnant(term) || LV_DIACRITICS.test(term);

  let status = "CORRECTLY REMOVED";
  let justification = "";
  let recommended = null;
  let recommendedColor = color;
  let needsFix = "NĒ";

  if (isOrphan || isOrphanComparison) {
    justification = "Orphan akcenta rinda — pārsniedz faktisko Study masīva garumu vai nav renderējamā BS teksta.";
    return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (isDeWrongExample) {
    justification = `DE akcents „${term}” neeksistē attiecīgajā vācu piemērā („${bsText}”). Bija nepareizs/orphan DE ieraksts.`;
    return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (isLv && !inBs) {
    justification = `LV atlikums „${term}” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.`;
    return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  // bringen comparison orphans - word nehmen/holen when comparison row only has bringen
  if (sectionKey === "comparison" && field === "word" && !termInText(term, bsText)) {
    justification = `Salīdzinājuma vārds „${term}” neeksistē šajā BS comparison rindā (tika saīsināts salīdzinājumu saraksts). Orphan DE/semantiska neatbilstība.`;
    return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (sectionKey === "comparison" && field === "meaning" && isLv) {
    justification = `LV atlikums salīdzinājuma nozīmē; BS teksts ir „${bsText}”. Akcents nevarēja atbilst tekstam.`;
    return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  // Specific pedagogical cases
  if (item.id === "a1-aber" && term === "bet gan") {
    const alt = "nego";
    if (termInText(alt, bsText) && !currentTerms.some((t) => termInText(alt, t) || t === alt)) {
      status = "SHOULD BE RESTORED";
      justification = "BS tekstā ir „nego” frāzē „ne..., nego...”, kas atbilst LV „bet gan”. Pēc izņemšanas otrā kontrasta leksēma nav izcelta.";
      recommended = "nego";
      recommendedColor = "purple";
      needsFix = "JĀ";
      return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-aufs" && term === "određeni") {
    justification = "„određeni” neeksistē BS tekstā „Na konkretnu stvar”. Pareizais akcents jau ir „konkretnu” (purple[0] saglabāts vai citā krāsā).";
    if (currentTerms.some((t) => /konkretn/i.test(t))) {
      return { status: "CORRECTLY REMOVED", justification: justification + " Semantika joprojām pārklāta.", recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-besuchen" && term === "apciemot") {
    const alt = "obilazi";
    if (termInText(alt, bsText)) {
      status = currentTerms.some((t) => /obilaz/i.test(t)) ? "CORRECTLY REMOVED" : "SHOULD BE RESTORED";
      justification = status === "CORRECTLY REMOVED"
        ? "„obilazi” jau izcelts pašreizējā tip akcentā."
        : "Tip tekstā „obilazi” ir pedagoģiski centrālais BS ekvivalents LV „apciemot”, bet nav izcelts.";
      if (status === "SHOULD BE RESTORED") { recommended = "obilazi"; recommendedColor = "purple"; needsFix = "JĀ"; }
      return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-bitte-study" && term === "Molim te") {
    justification = "„Molim te” neeksistē tip tekstā. BS izmanto „bitte”/„Bitte” — jau izcelts citā blue akcentā.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-bitte-study" && term === "die Bitten") {
    justification = "„die Bitten” neeksistē important[0] tekstā („Član: die Bitte.”). Orphan DE forma no LV struktūras.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-bitte-study" && term === "Veliko početno slovo") {
    justification = "Frāze neeksistē BS tekstā. Množina important[1] izceļ „die Bitten” — pietiekami.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-bleiben" && term === "neiet prom") {
    justification = "LV fraze „neiet prom” nav BS tekstā; BS izmanto „ostati”/„ne nestane” — jau pārklāts explanation purple akcentos.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-etwas") {
    const bsVariants = { "kaut ko": "nešto", "kaut kas": "nešto", "nedaudz": "malo", "nekas": "nešto", "daudzuma": "pomalo" };
    const alt = bsVariants[term.toLowerCase()] || bsVariants[term];
    if (alt && termInText(alt, bsText)) {
      const covered = currentTerms.some((t) => termInText(alt, t) || fold(t) === fold(alt));
      justification = covered
        ? `LV atlikums „${term}”; BS ekvivalents „${alt}” jau izcelts šajā sadaļā.`
        : `LV atlikums; BS „${alt}” eksistē tekstā bet nav akcentēts — iespējams pedagoģisks trūkums.`;
      if (!covered && sectionKey === "explanation") {
        status = "WARNING — MANUAL REVIEW";
        recommended = alt;
        recommendedColor = color || "purple";
        needsFix = "NĒ";
        justification += " Nepieciešama vizuāla pārbaude vai nākamais labojums.";
        return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
      }
      return { status: covered ? "CORRECTLY REMOVED" : "WARNING — MANUAL REVIEW", justification, recommended: covered ? null : alt, recommendedColor, needsFix: covered ? "NĒ" : "NĒ", currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-es") {
    justification = `Orphan examples[${index}] akcents — BS kartei ir mazāk piemēru nekā LV sectionAccents rindas. DE vārds „${term}” neattiecas uz šo BS piemēra tekstu.`;
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-finden" && term === "gefunden") {
    justification = "„gefunden” neeksistē examples[1] DE tekstā („Ich finde das gut.”). Orphan DE forma.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-gross-study" || item.id === "a1-hoch-study") {
    const alt = item.id === "a1-gross-study" ? "veliko" : "visoko";
    if (termInText(alt, bsText) && currentTerms.some((t) => fold(t) === fold(alt))) {
      justification = `LV atlikums „${term}”; BS „${alt}” jau izcelts tip akcentā.`;
      return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (/^Glavna$/i.test(term)) {
    justification = "„Glavna” ir LV etalona struktūras atlikums (no „Galvenā ideja”), ne BS mācību vārds. Nav tekstā kā atsevišķs akcentējams elements.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if ((term === "kur?" || term === "kurp?") && bsText) {
    const hasGdje = /gdje/i.test(bsText);
    const covered = currentTerms.some((t) => /gdje/i.test(t));
    if (hasGdje && !covered) {
      status = "WARNING — MANUAL REVIEW";
      justification = `Jautājuma vārds BS tekstā ir „gdje?”, bet akcents bija LV „${term}”. Vai „gdje” jāizceļ — atkarīgs no vizuālā blīvuma.`;
      recommended = "gdje";
      recommendedColor = color || "purple";
      needsFix = "NĒ";
      return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
    if (hasGdje && covered) {
      justification = "„gdje” jau akcentēts pašreizējā BS sectionAccents.";
      return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-in" && term === "uz kino") {
    if (termInText("kino", bsText) && currentTerms.some((t) => /kino/i.test(t))) {
      justification = "„uz kino” LV atlikums; BS „kino” jau izcelts important akcentos.";
      return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-ein" && (term === "die" || term === "das")) {
    justification = `DE forma „${term}” neeksistē important[1] tekstā („Ein — srednji rod.”). Orphan no LV struktūras.`;
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-ein" && term === "Nekoga") {
    if (termInText("neodređeni", bsText) || termInText("jedan", bsText)) {
      status = "WARNING — MANUAL REVIEW";
      justification = "Tip par neodređeni član; „Nekoga” neeksistē tekstā. Iespējams akcentēt „neodređeni” vai „jedan”, bet nav obligāti.";
      recommended = "neodređeni";
      recommendedColor = "purple";
      needsFix = "NĒ";
      return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-haben" && term === "man ir") {
    if (termInText("Imam", bsText) && currentTerms.some((t) => /imam/i.test(t))) {
      justification = "LV „man ir” aizstāts ar BS „Imam” — jau akcentēts.";
      return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-heißen" && term === "pasaukt") {
    justification = "LV „pasaukt” nav BS tekstā; BS „Poziv”/„poziv” — pārklājums caur citiem akcentiem vai nav nepieciešams.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (item.id === "a1-die" && term === "Svim rodovima") {
    if (termInText("rodove", bsText) || termInText("rodovima", bsText)) {
      const covered = currentTerms.some((t) => /rodov/i.test(t));
      status = covered ? "CORRECTLY REMOVED" : "WARNING — MANUAL REVIEW";
      justification = covered ? "„rodovima/rodove” jau akcentēts." : "BS teksts min rodove; iespējams vēlams akcents „rodove”.";
      if (!covered) { recommended = "rodove"; recommendedColor = "purple"; }
      needsFix = "NĒ";
      return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
  }

  if (item.id === "a1-erst" && term === "Najprije") {
    justification = "„Najprije” neeksistē important tekstā („Erst često znači: samo.”). Semantiski atšķirīgs no LV „secību”.";
    return { status: "CORRECTLY REMOVED", justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  if (!inBs) {
    justification = `Termins „${term}” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: ${currentTerms.length} BS akcenti.`;
    if (currentTerms.length >= lvTerms.length - 1) {
      return { status: "CORRECTLY REMOVED", justification: justification + " Pārklājums saglabāts.", recommended, recommendedColor, needsFix, currentTerms, lvTerms };
    }
    status = "WARNING — MANUAL REVIEW";
    needsFix = "NĒ";
    return { status, justification, recommended, recommendedColor, needsFix, currentTerms, lvTerms };
  }

  status = "WARNING — MANUAL REVIEW";
  justification = `Termins eksistē tekstā, bet tika izņemts automātiski. Nepieciešama manuāla pārbaude.`;
  needsFix = "NĒ";
  return { status, justification, recommended: term, recommendedColor: color, needsFix, currentTerms, lvTerms };
}

function main() {
  const log = JSON.parse(fs.readFileSync(LOG, "utf8"));
  const removed = log.stats.unresolved;
  const lv = load(LV_FILE);
  const bs = load(BS_FILE);

  const results = removed.map((item) => {
    const bsEntry = findEntry(bs, item.id);
    const lvEntry = findEntry(lv, item.id);
    const color = getColorFromPath(item.path);
    const c = classify(item, bsEntry, lvEntry, color);
    return {
      id: item.id,
      path: item.path,
      previousValue: item.term,
      color,
      bsText: item.bsText,
      lvContext: item.lvTerm,
      sectionKey: item.sectionKey,
      index: item.index,
      field: item.field,
      status: c.status,
      justification: c.justification,
      recommendedAccent: c.recommended,
      recommendedColor: c.recommendedColor,
      needsFix: c.needsFix,
      currentAccentTerms: c.currentTerms,
      lvAccentTerms: c.lvTerms,
      bsAccentCount: countAccents(bsEntry?.study?.sectionAccents),
      lvAccentCount: countAccents(lvEntry?.study?.sectionAccents),
    };
  });

  const summary = {
    total: results.length,
    correctlyRemoved: results.filter((r) => r.status === "CORRECTLY REMOVED").length,
    shouldRestore: results.filter((r) => r.status === "SHOULD BE RESTORED").length,
    warning: results.filter((r) => r.status === "WARNING — MANUAL REVIEW").length,
    cards: [...new Set(results.map((r) => r.id))].length,
    restoreList: results.filter((r) => r.status === "SHOULD BE RESTORED"),
    warningList: results.filter((r) => r.status === "WARNING — MANUAL REVIEW"),
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), summary, results }, null, 2));
  console.log(JSON.stringify(summary, null, 2));
}

main();
