#!/usr/bin/env node
/**
 * DA-DE B1 full audit collector (READ-ONLY).
 * Compares data/da/b1.js vs DE etalon data/b1.js; mirrors www/data/da/b1.js.
 * Writes reports/temp/da-b1-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const { ROOT, loadArrayDataset } = require("./lib/audit-common");

const DE_FILE = path.join(ROOT, "data/b1.js");
const DA_FILE = path.join(ROOT, "data/da/b1.js");
const WWW_FILE = path.join(ROOT, "www/data/da/b1.js");
const OUT = path.join(ROOT, "reports/temp/da-b1-audit-data.json");

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS = /\b(latviešu|vācu|vārd|vārdā|vārdos|Galvenā doma|galvenā doma|Atceries|Izmanto|Nepareizi|Pareizi|Bieži|Norāda|tikai vienskait|tikai daudzskait|lietvār|darbības vār|sieviešu|vīriešu|viņa|viņš|viņiem|mēs|es eju|man nav|ko jūs|labprāt|brīvdien|atvaļinā|pulksten|skolot|runā|mācī|ēst|ēdiens|dārzeņ|augļi|televīz|apetīte|vilciens|dzimšanas|Berlīn|Spānij|kā tev|mums jā|tev jā|jums|jūs\b|jūsu\b|neesmu|skatī|redzēt|sauc par|tikpat|pārāk dārgi|iekšā|uz vietu|kam\?|mērķi|nenoteik|locījum|artikul|daudzskaitļ|vienskaitļ|retāk|Izvēl|konstrukciju|Vācu valodā|latviski|Brīvdienās|Bērniem|apmeklēj|apciemoj|tāpēc|peldēt|maksāt|vecvecāk|palīdzu|stāstu|man jā|rīsi|mācēt|prast|braukt|vest|aizvest|Autobuss|Vilciens|atslēgu|pieteikumu|aizbraucu|iesniedzu|grāmatu|mājās|tagad|tūlīt|atiet|prom|rīt|sākam)\b/i;
const EN_PATTERNS = /\b(Translation:|TODO|TBD|the sound that is pronounced|instead of|Change this|Ready\. Next|Look at the|a tailor|gardeners?|rubber|several, several|here, here|you are|meaning:)\b/i;
const CS_PATTERNS = /\b(přelož|použij|doplň|věta|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|użyj|uzupełnij|czasownik|rzeczownik)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Translation:|Tulkojums:)/;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MOJIBAKE = /â€|Ã.|Ô./;
const CORRUPTION = /\b(Pārskatīti|COPY-ONLY)\b|```/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

const LV_TO_DA = [
  ["Es", "Jeg"],
  ["Viņš", "Han"],
  ["Viņa", "Hun"],
  ["Mēs", "Vi"],
  ["Autobuss", "Bussen"],
  ["Vilciens", "Toget"],
  ["atslēgu", "nøgle"],
  ["grāmatu", "bogen"],
  ["mājās", "hjem"],
  ["tagad", "nu"],
  ["tūlīt", "straks"],
  ["atiet", "afgår"],
  ["prom", "væk"],
  ["rīt", "i morgen"],
  ["aizbraucu", "kører væk"],
  ["iesniedzu", "indsender"],
  ["pieteikumu", "ansøgningen"],
  ["sākam", "begynder"],
  ["braucu", "kører"],
  ["ar vilcienu", "med toget"],
  ["Man", "Jeg har"],
  ["ir", "er"],
  ["nav", "har ikke"],
  ["un", "og"],
  ["vai", "om"],
  ["kas", "som"],
  ["šis", "denne"],
  ["tas", "det"],
  ["šeit", "her"],
  ["tur", "der"],
];

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function walkStrings(value, visitor, ctx = { path: "", parentKey: "", inDe: false }) {
  if (value == null) return;
  if (typeof value === "string") {
    visitor(value, ctx);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkStrings(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const inDe = ctx.inDe || key === "de" || key === "de_article" || key === "de_plural";
      walkStrings(child, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
        inDe,
      });
    }
  }
}

function evalPath(obj, p) {
  if (!p) return obj?.lv;
  const parts = p.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = obj;
  for (const part of parts) {
    if (cur == null) return undefined;
    cur = cur[part];
  }
  return cur;
}

function stripZW(text) {
  return text.replace(/[\u200B-\u200D\uFEFF]|​​/g, "");
}

function hasLatvian(text) {
  if (!text) return false;
  return LV_DIAC.test(text) || LV_WORDS.test(text);
}

function classifyForeign(text) {
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV_WORD");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (CS_PATTERNS.test(text)) reasons.push("CS");
  if (PL_PATTERNS.test(text)) reasons.push("PL");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (MOJIBAKE.test(text)) reasons.push("MOJIBAKE");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  if (CORRUPTION.test(text)) reasons.push("CORRUPTION");
  return reasons;
}

function deKeywordOverlap(deA, deB) {
  const wordsA = (deA || "").toLowerCase().match(/\b[a-zäöüß]{4,}\b/g) || [];
  const wordsB = new Set((deB || "").toLowerCase().match(/\b[a-zäöüß]{4,}\b/g) || []);
  return wordsA.filter((w) => wordsB.has(w)).length;
}

function proposeFromStudyExamples(dePart, study) {
  if (!study?.examples) return null;
  const deTrim = dePart.trim();
  let best = null;
  let bestScore = 0;
  for (const ex of study.examples) {
    if (!ex.de || !ex.lv || hasLatvian(ex.lv)) continue;
    if (deTrim === ex.de.trim()) return ex.lv.trim();
    const score = deKeywordOverlap(deTrim, ex.de);
    if (score > bestScore) {
      bestScore = score;
      best = ex.lv.trim();
    }
  }
  return bestScore >= 2 ? best : null;
}

function lvToDaSimple(lvText) {
  let out = lvText;
  for (const [lv, da] of LV_TO_DA) {
    out = out.replace(new RegExp(`\\b${lv.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g"), da);
  }
  return out;
}

function proposeComparisonExample(text, study) {
  const sepMatch = text.match(/(\s=\s|\s–\s|\s-\s)/);
  if (!sepMatch) return stripZW(text);
  const sep = sepMatch[0];
  const idx = text.indexOf(sep);
  const dePart = text.slice(0, idx).trim();
  const lvPart = text.slice(idx + sep.length).trim();

  const fromExamples = proposeFromStudyExamples(dePart, study);
  if (fromExamples) return `${dePart}${sep}${fromExamples}`;

  const proposedLv = lvToDaSimple(lvPart);
  if (!hasLatvian(proposedLv) && proposedLv !== lvPart) return `${dePart}${sep}${proposedLv}`;

  return `${dePart}${sep}${proposedLv}`;
}

function proposeDanish(text, field, study) {
  if (ZERO_WIDTH.test(text)) return stripZW(text);
  if (field.includes("comparison") && field.endsWith(".example") && hasLatvian(text)) {
    return proposeComparisonExample(text, study);
  }
  if (study?.examples) {
    const fromEx = proposeFromStudyExamples(text, study);
    if (fromEx) return fromEx;
  }
  const simple = lvToDaSimple(text);
  if (!hasLatvian(simple)) return simple;
  return stripZW(text);
}

function collectAccentTerms(sectionAccents, out, inDe = false) {
  if (!sectionAccents) return;
  if (typeof sectionAccents === "string") {
    if (!inDe) out.push({ term: sectionAccents, path: "" });
    return;
  }
  if (Array.isArray(sectionAccents)) {
    sectionAccents.forEach((item, i) => {
      const sub = [];
      collectAccentTerms(item, sub, inDe);
      sub.forEach((s) => out.push({ ...s, path: s.path ? `${s.path}[${i}]` : `[${i}]${s.path}` }));
    });
    return;
  }
  if (typeof sectionAccents === "object") {
    for (const [key, val] of Object.entries(sectionAccents)) {
      const sub = [];
      collectAccentTerms(val, sub, inDe || key === "de");
      sub.forEach((s) => out.push({ term: s.term, path: s.path ? `${key}.${s.path}` : key }));
    }
  }
}

function accentTermMatches(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.toLowerCase().includes(String(term).toLowerCase());
  }
}

function tipBlockString(block) {
  if (!block?.text) return "";
  const t = block.text;
  if (typeof t === "string") return t;
  const keys = Object.keys(t)
    .filter((k) => /^\d+$/.test(k))
    .map(Number)
    .sort((a, b) => a - b);
  if (keys.length) return keys.map((k) => t[String(k)] || "").join("");
  return "";
}

function getTextForAccentSection(study, section, index) {
  if (section === "explanation" && study.explanation) {
    return Array.isArray(study.explanation) ? study.explanation.join(" ") : String(study.explanation);
  }
  if (section === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.map((t) => (typeof t === "string" ? t : t?.text || "")).join(" ");
    if (tip && typeof tip === "object") {
      const parts = [tip.text, tip.example].filter(Boolean);
      for (const side of ["leftBlocks", "rightBlocks"]) {
        for (const b of tip[side] || []) {
          const s = tipBlockString(b);
          if (s) parts.push(s);
        }
      }
      return parts.join(" ");
    }
    return String(tip || "");
  }
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.map((t) => (typeof t === "string" ? t : t?.text || "")).join(" ");
    if (imp && typeof imp === "object") return [imp.text, imp.example].filter(Boolean).join(" ");
    return String(imp || "");
  }
  if (section === "examples" && Array.isArray(study.examples)) {
    const ex = study.examples[index];
    if (!ex) return "";
    return [ex.de, ex.lv].filter(Boolean).join(" ");
  }
  if (section === "comparison" && Array.isArray(study.comparison)) {
    const c = study.comparison[index];
    if (!c) return "";
    return [c.word, c.meaning, c.example].filter(Boolean).join(" ");
  }
  return "";
}

function findReplacementInStudy(study, term) {
  const sections = ["explanation", "tip", "important", "examples", "comparison"];
  for (const sec of sections) {
    if (sec === "examples" && Array.isArray(study.examples)) {
      for (let idx = 0; idx < study.examples.length; idx++) {
        const t = getTextForAccentSection(study, sec, idx);
        if (accentTermMatches(t, term)) return term;
        const words = t.match(/[\p{L}][\p{L}\-']*/gu) || [];
        for (const w of words) {
          if (w.toLowerCase() === term.toLowerCase()) return w;
        }
      }
    } else if (sec === "comparison" && Array.isArray(study.comparison)) {
      for (let idx = 0; idx < study.comparison.length; idx++) {
        const t = getTextForAccentSection(study, sec, idx);
        if (accentTermMatches(t, term)) return term;
      }
    } else {
      const t = getTextForAccentSection(study, sec, 0);
      if (accentTermMatches(t, term)) return term;
      const words = t.match(/[\p{L}][\p{L}\-']*/gu) || [];
      for (const w of words) {
        if (w.toLowerCase() === term.toLowerCase()) return w;
      }
    }
  }
  return null;
}

function collectDeStrings(study, out, keyPath = "") {
  if (!study || typeof study !== "object") return;
  if (Array.isArray(study)) {
    study.forEach((v, i) => collectDeStrings(v, out, `${keyPath}[${i}]`));
    return;
  }
  for (const [k, v] of Object.entries(study)) {
    if (k === "de" && typeof v === "string") out.push({ path: keyPath, value: v });
    else collectDeStrings(v, out, keyPath ? `${keyPath}.${k}` : k);
  }
}

function severityFor(reasons, field, isEmpty) {
  if (isEmpty) return "CRITICAL";
  if (reasons.includes("CORRUPTION") || reasons.includes("MOJIBAKE")) return "CRITICAL";
  if (reasons.includes("LV_DIAC") || reasons.includes("LV_WORD")) return "HIGH";
  if (reasons.includes("EN") || reasons.includes("CS") || reasons.includes("PL")) return "HIGH";
  if (reasons.includes("PLACEHOLDER")) return "HIGH";
  if (reasons.includes("ZERO_WIDTH")) return "MEDIUM";
  if (field === "lv" && reasons.length === 0) return "MEDIUM";
  return "MEDIUM";
}

function main() {
  const de = loadArrayDataset("data/b1.js");
  const da = loadArrayDataset("data/da/b1.js");
  const EXPECTED_CARDS = de.length;
  const EXPECTED_STUDIES = de.filter((e) => e.study).length;
  const findings = [];
  const dedupe = new Set();
  let findingId = 0;

  function add(raw) {
    const key = raw.dedupeKey || `${raw.cardId}|${raw.field}`;
    if (dedupe.has(key)) return;
    dedupe.add(key);
    findingId++;
    findings.push({
      id: `DA-B1-${String(findingId).padStart(4, "0")}`,
      cardId: raw.cardId,
      field: raw.field,
      deContext: raw.deContext ?? "",
      currentDa: raw.currentDa,
      proposedDa: raw.proposedDa,
      problem: raw.problem,
      rationale: raw.rationale,
      severity: raw.severity,
      status: raw.status || "LABOT",
    });
  }

  let syntaxOk = true;
  try {
    const { execSync } = require("child_process");
    execSync("node --check data/da/b1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/da/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxOk = false;
  }

  const meta = {
    date: new Date().toISOString().slice(0, 10),
    daFile: "data/da/b1.js",
    note: "Dāņu tulkojumi glabājas laukā lv (projekta konvencija).",
    deReference: "data/b1.js (DE parity only, READ-ONLY)",
    wwwFile: "www/data/da/b1.js",
    productionCards: da.length,
    expectedCards: EXPECTED_CARDS,
    studyCount: da.filter((e) => e.study).length,
    deStudyCount: de.filter((e) => e.study).length,
    expectedStudies: EXPECTED_STUDIES,
    regularCards: da.filter((e) => !e.study).length,
    mirrorIdentical: fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE)),
    syntaxOk,
    deChanges: 0,
    productionChanges: 0,
  };

  const structural = {
    cardCountPass: da.length === EXPECTED_CARDS,
    studyCountPass: meta.studyCount === EXPECTED_STUDIES,
    mirrorPass: meta.mirrorIdentical,
    deIntegrityPass: true,
    studyParityPass: true,
    studyIdsUnique: true,
  };

  if (da.length !== EXPECTED_CARDS) {
    add({
      cardId: "STRUCT",
      field: "count",
      deContext: "",
      currentDa: String(da.length),
      proposedDa: String(EXPECTED_CARDS),
      problem: "Kartīšu skaits neatbilst sagaidāmajam B1 apjomam",
      rationale: `App UI sagaida ${EXPECTED_CARDS} B1 kartītes`,
      severity: "CRITICAL",
    });
    structural.cardCountPass = false;
  }

  if (meta.studyCount !== EXPECTED_STUDIES) {
    add({
      cardId: "STRUCT",
      field: "study.count",
      deContext: "",
      currentDa: `${meta.studyCount} (DE etalons: ${meta.deStudyCount})`,
      proposedDa: String(EXPECTED_STUDIES),
      problem: "Study objektu skaits neatbilst etalonam",
      rationale: `DA B1 Study kartīšu skaitam jābūt ${EXPECTED_STUDIES}`,
      severity: "CRITICAL",
    });
    structural.studyCountPass = false;
  }

  if (!meta.mirrorIdentical) {
    add({
      cardId: "STRUCT",
      field: "mirror",
      deContext: "",
      currentDa: "data/da/b1.js ≠ www/data/da/b1.js",
      proposedDa: "identiski",
      problem: "Mirror kopijas nav sinhronizētas",
      rationale: "Runtime un primārā datu kopa jābūt identiskām",
      severity: "CRITICAL",
    });
    structural.mirrorPass = false;
  }

  const deStudyIds = new Map();
  de.forEach((e, i) => {
    if (e.study?.id) deStudyIds.set(e.study.id, { de: e.de, index: i });
  });
  const daStudyIds = new Map();
  da.forEach((e, i) => {
    if (e.study?.id) daStudyIds.set(e.study.id, { de: e.de, index: i });
  });

  for (const [id, info] of deStudyIds) {
    if (!daStudyIds.has(id)) {
      add({
        cardId: id,
        field: "study",
        deContext: info.de,
        currentDa: "(nav Study objekta)",
        proposedDa: `Pievienot pilnu Study objektu (id: ${id})`,
        problem: "Trūkst Study objekta salīdzinājumā ar DE etalonu",
        rationale: "Study paritāte ar DE etalonu obligāta",
        severity: "HIGH",
      });
      structural.studyParityPass = false;
    }
  }
  for (const [id, info] of daStudyIds) {
    if (!deStudyIds.has(id)) {
      add({
        cardId: id,
        field: "study",
        deContext: info.de,
        currentDa: "(lieks Study objekts)",
        proposedDa: "Noņemt lieko Study objektu",
        problem: "Papildu Study objekts, kas nav DE etalonā",
        rationale: "Study struktūrai jāatbilst etalonam",
        severity: "HIGH",
      });
      structural.studyParityPass = false;
    }
  }

  const seenStudyIds = new Set();
  for (let i = 0; i < da.length; i++) {
    const entry = da[i];
    const deEntry = de[i];
    const id = entryId(entry, i);
    const deCtx = entry.de;

    if (deEntry && entry.de !== deEntry.de) {
      add({
        cardId: id,
        field: "de.order",
        deContext: deCtx,
        currentDa: entry.de,
        proposedDa: deEntry.de,
        problem: "Kartīšu secība/atslēga neatbilst DE etalonam",
        rationale: "DE lauku secība un identitāte jāsaglabā (READ-ONLY)",
        severity: "CRITICAL",
        status: "DE_SOURCE_ISSUE",
      });
      structural.deIntegrityPass = false;
    }

    if (entry.study?.id) {
      if (seenStudyIds.has(entry.study.id)) {
        add({
          cardId: id,
          field: "study.id",
          deContext: deCtx,
          currentDa: entry.study.id,
          proposedDa: "(unikāls id)",
          problem: "Dublēts Study ID",
          rationale: "Study ID jābūt unikāliem",
          severity: "HIGH",
        });
        structural.studyIdsUnique = false;
      }
      seenStudyIds.add(entry.study.id);
    }

    if (deEntry?.study && !entry.study) {
      add({
        cardId: id,
        field: "study",
        deContext: deCtx,
        currentDa: "(nav)",
        proposedDa: `(Study objekts no DE etalona, layout: ${deEntry.study.layout})`,
        problem: "Trūkst Study objekta",
        rationale: `DE etalonā ir study (${deEntry.study.layout})`,
        severity: "HIGH",
      });
    }

    if (deEntry) {
      for (const k of ["de", "de_article", "de_plural", "level"]) {
        if (JSON.stringify(entry[k]) !== JSON.stringify(deEntry[k])) {
          add({
            cardId: id,
            field: k,
            deContext: deCtx,
            currentDa: String(entry[k]),
            proposedDa: String(deEntry[k]),
            problem: "DE lauks mainīts salīdzinājumā ar etalonu",
            rationale: "DE saturs ir READ-ONLY",
            severity: "CRITICAL",
            status: "DE_SOURCE_ISSUE",
          });
          structural.deIntegrityPass = false;
        }
      }

      if (deEntry.study && entry.study) {
        const deDe = [];
        const daDe = [];
        collectDeStrings(deEntry.study, deDe);
        collectDeStrings(entry.study, daDe);
        if (JSON.stringify(deDe) !== JSON.stringify(daDe)) {
          add({
            cardId: id,
            field: "study.de",
            deContext: deCtx,
            currentDa: JSON.stringify(daDe).slice(0, 200),
            proposedDa: JSON.stringify(deDe).slice(0, 200),
            problem: "Study vācu saturs atšķiras no DE etalona",
            rationale: "DE Study saturs ir READ-ONLY",
            severity: "CRITICAL",
            status: "DE_SOURCE_ISSUE",
          });
          structural.deIntegrityPass = false;
        }
      }
    }

    if (!entry.lv || !String(entry.lv).trim()) {
      add({
        cardId: id,
        field: "lv",
        deContext: deCtx,
        currentDa: "(tukšs)",
        proposedDa: "(dāņu tulkojums)",
        problem: "Trūkst galvenā DA tulkojuma priekšpusē",
        rationale: "Obligāts lietotājam redzams lauks",
        severity: "CRITICAL",
        dedupeKey: `${id}|lv|empty`,
      });
    } else {
      const segments = entry.lv.split("•").map((s) => s.trim()).filter(Boolean);
      if (segments.length >= 3) {
        add({
          cardId: id,
          field: "lv",
          deContext: deCtx,
          currentDa: entry.lv,
          proposedDa: segments.slice(0, 2).join(" • "),
          problem: "Garā sinonīmu ķēde priekšpusē (3+ • segmenti)",
          rationale: "B1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi",
          severity: "MEDIUM",
          dedupeKey: `${id}|lv|synonym-chain`,
        });
      }
    }

    walkStrings(entry, (text, ctx) => {
      if (ctx.inDe || ctx.parentKey === "de") return;
      const field = ctx.path.replace(/^lv\.?/, "lv") || ctx.parentKey || "lv";
      if (!text.trim()) {
        if (["lv", "translation", "title", "lead"].includes(ctx.parentKey) && field !== "lv") {
          add({
            cardId: id,
            field,
            deContext: deCtx,
            currentDa: "(tukšs)",
            proposedDa: "(dāņu tulkojums)",
            problem: "Tukšs obligāts lietotājam redzams lauks",
            rationale: "Study saturs jāaizpilda dāņu valodā",
            severity: "HIGH",
          });
        }
        return;
      }

      const reasons = classifyForeign(text);
      if (!reasons.length) return;

      const proposed = proposeDanish(text, field, entry.study);
      const isComparisonLv = field.includes("comparison") && field.endsWith(".example") && hasLatvian(text);

      add({
        cardId: id,
        field,
        deContext: deCtx,
        currentDa: text.length > 300 ? `${text.slice(0, 300)}…` : text,
        proposedDa: proposed.length > 300 ? `${proposed.slice(0, 300)}…` : proposed,
        problem: isComparisonLv
          ? `Comparison piemērā latviešu daļa: ${reasons.join(", ")}`
          : `Svešvalodu/artefaktu pazīmes: ${reasons.join(", ")}`,
        rationale: isComparisonLv
          ? "Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu"
          : "DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti",
        severity: severityFor(reasons, field, false),
      });
    });

    if (entry.study?.sectionAccents) {
      const terms = [];
      collectAccentTerms(entry.study.sectionAccents, terms);
      for (const { term, path: accentPath } of terms) {
        if (!term || typeof term !== "string") continue;
        const field = accentPath ? `study.sectionAccents.${accentPath}` : "study.sectionAccents";

        const foreign = classifyForeign(term);
        if (foreign.length) {
          const replacement = findReplacementInStudy(entry.study, term);
          add({
            cardId: id,
            field,
            deContext: deCtx,
            currentDa: term,
            proposedDa: replacement || `FJERN «${term}»`,
            problem: `sectionAccents svešvalodu termins: ${foreign.join(", ")}`,
            rationale: "Akcentu terminiem jāatbilst dāņu Study saturam",
            severity: foreign.includes("LV_DIAC") || foreign.includes("LV_WORD") ? "HIGH" : "MEDIUM",
            dedupeKey: `${id}|${field}|${term}`,
          });
          continue;
        }

        let found = false;
        const sections = ["explanation", "tip", "important", "examples", "comparison"];
        for (const sec of sections) {
          if (sec === "examples" && Array.isArray(entry.study.examples)) {
            entry.study.examples.forEach((_, idx) => {
              if (accentTermMatches(getTextForAccentSection(entry.study, sec, idx), term)) found = true;
            });
          } else if (sec === "comparison" && Array.isArray(entry.study.comparison)) {
            entry.study.comparison.forEach((_, idx) => {
              if (accentTermMatches(getTextForAccentSection(entry.study, sec, idx), term)) found = true;
            });
          } else if (accentTermMatches(getTextForAccentSection(entry.study, sec, 0), term)) {
            found = true;
          }
        }
        if (!found && accentTermMatches(entry.lv, term)) found = true;

        if (!found && term.length > 1) {
          const replacement = findReplacementInStudy(entry.study, term);
          add({
            cardId: id,
            field,
            deContext: deCtx,
            currentDa: term,
            proposedDa: replacement ? replacement : `FJERN «${term}»`,
            problem: "sectionAccents stale — termins nav Study saturā",
            rationale: "Akcentu sistēma jāsasaista ar faktisko dāņu tekstu",
            severity: "MEDIUM",
            dedupeKey: `${id}|${field}|stale|${term}`,
          });
        }
      }
    }
  }

  const bySeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const byStatus = { LABOT: 0, NELABOT: 0, DE_SOURCE_ISSUE: 0, FALSE_POSITIVE: 0 };
  for (const f of findings) {
    bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;
    byStatus[f.status] = (byStatus[f.status] || 0) + 1;
  }

  const verdict =
    bySeverity.CRITICAL > 0 || bySeverity.HIGH > 0 ? "NEEDS REPAIR" : "PASS";

  const out = {
    meta,
    structural,
    summary: { total: findings.length, bySeverity, byStatus, verdict },
    findings,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify({ meta, structural, summary: out.summary }, null, 2));
}

main();
