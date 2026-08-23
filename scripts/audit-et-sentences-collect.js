#!/usr/bin/env node
"use strict";
/**
 * ET-DE Sätze/Teikumi full audit collector (READ-ONLY).
 * Structural + deterministic sweep + batch export for Luna linguistic audit.
 * Usage: node scripts/audit-et-sentences-collect.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const DE_FILE = path.join(ROOT, "data/sentences.js");
const ET_FILE = path.join(ROOT, "data/et/sentences.js");
const WWW_FILE = path.join(ROOT, "www/data/et/sentences.js");
const OUT = path.join(ROOT, "reports/temp/et-sentences-audit-data.json");
const BATCH_DIR = path.join(ROOT, "reports/temp/et-sentences-audit-batches");
const EXPECTED = 796;
const BATCH_SIZE = 50;

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(Viņš|Viņa|Viņam|Reizēm|gadījuma|svētku|vēlētāj|līst|latviešu|vācu|Galvenā doma|Atceries|Izmanto|Nepareizi|Pareizi|mēs|jūs|jums|jūsu|neesmu|skatī|redzēt|Berlīn|Spānij|kā tev|mums jā|tev jā|Brīvdienās|Bērniem|apmeklēj|apciemoj|tāpēc|peldēt|maksāt|vecvecāk|palīdzu|stāstu|man jā|rīsi|mācēt|prast|braukt|vest|aizvest|Autobuss|Vilciens|atslēgu|pieteikumu|aizbraucu|iesniedzu|grāmatu|mājās|tagad|tūlīt|atiet|prom|rīt|sākam|Plūdi|plūdi|izpostīja|mājas|uzsver|termiņu|Ko tad|Vai tad|No turienes|Divtik|Jo vairāk|liecina par lietu)\b/i;
const EN_PATTERNS =
  /\b(Translation:|TODO|TBD|instead of|Change this|Ready\. Next|Look at the|you are|meaning:|please note)\b/i;
const CS_PATTERNS = /\b(přelož|použij|doplň|věta|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|użyj|uzupełnij|czasownik|rzeczownik)\b/i;
const BS_PATTERNS = /\b(prijevod|koristite|dopunite|prevedi|glagol|imenica)\b/i;
const ET_LT_PATTERNS = /\b(tõlgi|kasuta|sõna|tegusõna|daiktavard|dažnai|žodis|daiktavardis)\b/i;
const RU_UA_PATTERNS = /\b(перевед|использ|слово|глагол|часто|переклад|використ)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MOJIBAKE = /â€|Ã.|Ô./;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Translation:|Tulkojums:|Pārskatīti:|COPY-ONLY apply)/;

function loadSentences(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function sentenceId(index) {
  return `sentence-${index}`;
}

function batchLabel(start, end) {
  return `batch-${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
}

function normalizeText(text) {
  return String(text ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (CS_PATTERNS.test(text)) reasons.push("CS");
  if (PL_PATTERNS.test(text)) reasons.push("PL");
  if (BS_PATTERNS.test(text)) reasons.push("BS");
  if (ET_LT_PATTERNS.test(text)) reasons.push("ET_LT");
  if (RU_UA_PATTERNS.test(text)) reasons.push("RU_UA");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (MOJIBAKE.test(text)) reasons.push("MOJIBAKE");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  return reasons;
}

function addFinding(data, f) {
  const key = `${f.cardId}|${f.field}|${normalizeText(f.currentEt)}|${f.problem}`;
  if (data._seen.has(key)) return;
  data._seen.add(key);
  data.findings.push(f);
  data.rawCandidates += 1;
}

function addFalsePositive(data, fp) {
  data.falsePositives.push(fp);
}

function negationTokens(text, lang) {
  const t = String(text || "").toLowerCase();
  if (lang === "de") {
    return (t.match(/\b(nicht|kein|keine|keiner|keines|nie|niemand|nichts|weder|ohne|noch nicht|kaum)\b/g) || []).length;
  }
  return (t.match(/\b(ikke|ingen|intet|aldrig|hverken|uden|endnu ikke|knapt)\b/g) || []).length;
}

function main() {
  const deRef = loadSentences(DE_FILE);
  const etEntries = loadSentences(ET_FILE);
  const www = loadSentences(WWW_FILE);

  const data = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      auditor: "GPT-5.6 Luna",
      mode: "READ-ONLY",
      section: "Teikumi / Sätze",
      deFile: "data/sentences.js",
      etFile: "data/et/sentences.js",
      wwwFile: "www/data/et/sentences.js",
      sentencesTotal: EXPECTED,
      sentencesAudited: 0,
      batchSize: BATCH_SIZE,
      batchCount: Math.ceil(EXPECTED / BATCH_SIZE),
      productionChanges: 0,
      deChanges: 0,
    },
    structural: {
      syntaxPass: false,
      mirrorPass: false,
      countPass: false,
      deIntegrityPass: false,
      idOrderPass: false,
      issues: [],
    },
    batches: [],
    findings: [],
    falsePositives: [],
    rawCandidates: 0,
    sentences: [],
    _seen: new Set(),
  };

  let syntaxPass = false;
  try {
    execSync("node --check data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
    syntaxPass = true;
  } catch {
    data.structural.issues.push({ severity: "CRITICAL", problem: "JS syntax check failed" });
  }
  data.structural.syntaxPass = syntaxPass;

  const mirrorPass = fs.readFileSync(ET_FILE).equals(fs.readFileSync(WWW_FILE));
  data.structural.mirrorPass = mirrorPass;
  if (!mirrorPass) {
    data.structural.issues.push({ severity: "CRITICAL", problem: "data/et/sentences.js ≠ www/data/et/sentences.js" });
  }

  const countPass = deRef.length === etEntries.length && etEntries.length === EXPECTED;
  data.structural.countPass = countPass;
  if (!countPass) {
    data.structural.issues.push({
      severity: "CRITICAL",
      problem: `Count mismatch: DE=${deRef.length}, ET=${etEntries.length}, expected=${EXPECTED}`,
    });
  }

  let deIntegrityPass = true;
  let idOrderPass = true;
  const etByDe = new Map();

  for (let i = 0; i < etEntries.length; i++) {
    const de = deRef[i]?.de;
    const entry = etEntries[i];
    const cardId = sentenceId(i);
    const batchStart = Math.floor(i / BATCH_SIZE) * BATCH_SIZE + 1;
    const batchEnd = Math.min(batchStart + BATCH_SIZE - 1, etEntries.length);
    const batch = batchLabel(batchStart, batchEnd);

    if (de !== entry.de) {
      deIntegrityPass = false;
      idOrderPass = false;
      addFinding(data, {
        id: `ET-SENT-${String(data.findings.length + 1).padStart(4, "0")}`,
        cardId,
        index: i,
        batch,
        field: "de",
        deContext: de,
        currentEt: entry.de,
        proposedEt: de,
        problem: "DE field mismatch vs reference (order/integrity)",
        rationale: "DE = STRICT READ-ONLY; DA file must preserve DE exactly",
        severity: "CRITICAL",
        status: "LABOT",
      });
    }

    const etText = entry.lv || "";
    data.sentences.push({
      cardId,
      index: i,
      batch,
      de: entry.de,
      daCurrent: etText,
      level: entry.level || "Sätze",
    });

    if (!etText.trim()) {
      addFinding(data, {
        id: "",
        cardId,
        index: i,
        batch,
        field: "lv",
        deContext: entry.de,
        currentEt: etText,
        proposedEt: "(Estonian translation needed)",
        problem: "Empty Estonian translation",
        rationale: "Every sentence must have DA text in lv field",
        severity: "CRITICAL",
        status: "LABOT",
      });
    }

    const foreign = classifyForeign(etText);
    if (foreign.length) {
      const sev = foreign.some((r) => ["LV", "LV_DIAC", "EN", "CS", "PL", "BS", "ET_LT", "RU_UA"].includes(r))
        ? "HIGH"
        : foreign.includes("ZERO_WIDTH")
          ? "MEDIUM"
          : "HIGH";
      addFinding(data, {
        id: "",
        cardId,
        index: i,
        batch,
        field: "lv",
        deContext: entry.de,
        currentEt: etText,
        proposedEt: "(Natural Estonian sentence)",
        problem: `Foreign remnant or artifact: ${foreign.join(", ")}`,
        rationale: "DA sentence must be natural Estonian without foreign fragments",
        severity: sev,
        status: "LABOT",
      });
    }

    const deNeg = negationTokens(entry.de, "de");
    const daNeg = negationTokens(etText, "da");
    if (deNeg > 0 && daNeg === 0 && entry.de.length > 12) {
      addFinding(data, {
        id: "",
        cardId,
        index: i,
        batch,
        field: "lv",
        deContext: entry.de,
        currentEt: etText,
        proposedEt: "(Estonian with matching negation)",
        problem: "Possible negation mismatch: DE contains negation, DA lacks equivalent",
        rationale: "Semantic parity requires negation alignment",
        severity: "HIGH",
        status: "LABOT",
        candidate: true,
      });
    }

    const normDa = normalizeText(etText.split("•")[0]);
    if (etByDe.has(normDa)) {
      const other = etByDe.get(normDa);
      if (other.de !== entry.de) {
        addFinding(data, {
          id: "",
          cardId,
          index: i,
          batch,
          field: "lv",
          deContext: entry.de,
          currentEt: etText,
          proposedEt: "(Context-specific Estonian for this DE sentence)",
          problem: `Duplicate DA translation shared with sentence-${other.index} (DE: "${other.de}")`,
          rationale: "Different DE sentences should not share identical DA unless intentional didactic pair",
          severity: "MEDIUM",
          status: "LABOT",
          candidate: true,
        });
      } else {
        addFalsePositive(data, {
          cardId,
          note: "Identical DE–DA pair repeated intentionally or duplicate entry",
          da: etText,
        });
      }
    } else {
      etByDe.set(normDa, { index: i, de: entry.de });
    }

    if (entry.level && entry.level !== "Sätze") {
      addFinding(data, {
        id: "",
        cardId,
        index: i,
        batch,
        field: "level",
        deContext: entry.de,
        currentEt: entry.level,
        proposedEt: "Sätze",
        problem: `Unexpected level value: ${entry.level}`,
        rationale: "Sentences dataset level should be Sätze",
        severity: "LOW",
        status: "LABOT",
      });
    }
  }

  data.structural.deIntegrityPass = deIntegrityPass;
  data.structural.idOrderPass = idOrderPass && deIntegrityPass;

  for (let i = 0; i < etEntries.length; i++) {
    if (JSON.stringify(etEntries[i]) !== JSON.stringify(www[i])) {
      data.structural.issues.push({ severity: "CRITICAL", problem: "www mirror entry mismatch", index: i });
      data.structural.mirrorPass = false;
      break;
    }
  }

  data.meta.sentencesAudited = data.sentences.length;

  data.findings.forEach((f, idx) => {
    if (!f.id) f.id = `ET-SENT-${String(idx + 1).padStart(4, "0")}`;
  });

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.mkdirSync(BATCH_DIR, { recursive: true });

  for (let b = 0; b < data.meta.batchCount; b++) {
    const start = b * BATCH_SIZE;
    const end = Math.min(start + BATCH_SIZE, etEntries.length);
    const batchSentences = data.sentences.slice(start, end);
    const label = batchLabel(start + 1, end);
    const batchFile = path.join(BATCH_DIR, `${label}.json`);
    fs.writeFileSync(
      batchFile,
      JSON.stringify(
        {
          batch: label,
          startIndex: start,
          endIndex: end - 1,
          count: batchSentences.length,
          sentences: batchSentences,
        },
        null,
        2
      )
    );
    data.batches.push({ batch: label, file: batchFile, count: batchSentences.length, start, end: end - 1 });
  }

  delete data._seen;
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2));

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  data.findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  console.log(
    JSON.stringify(
      {
        sentencesTotal: data.meta.sentencesTotal,
        sentencesAudited: data.meta.sentencesAudited,
        batchCount: data.meta.batchCount,
        rawCandidates: data.rawCandidates,
        findings: data.findings.length,
        falsePositives: data.falsePositives.length,
        bySev,
        structural: data.structural,
        out: OUT,
        batchDir: BATCH_DIR,
      },
      null,
      2
    )
  );
}

main();
