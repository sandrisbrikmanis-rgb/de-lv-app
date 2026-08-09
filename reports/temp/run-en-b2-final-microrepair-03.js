#!/usr/bin/env node
/**
 * EN-DE B2 microrepair #3: 11 EN fields on 5 cards. DE read-only.
 * Usage: node reports/temp/run-en-b2-final-microrepair-03.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(__dirname, "en-b2-final-microrepair-03-repairs.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const APPLY_LOG = path.join(__dirname, "en-b2-final-microrepair-03-apply-log.json");
const OUT_JSON = path.join(__dirname, "en-b2-final-microrepair-03.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-final-microrepair-03.md");
const DRY_RUN = process.argv.includes("--dry-run");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeB2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B2_WORDS = ${json};\n\nwindow.B2_WORDS = B2_WORDS;\n`, "utf8");
}

function normalizeFieldPath(fieldPath) {
  let p = String(fieldPath || "");
  if (p === "en" || p === "enMain" || p === "enText") return "lv";
  if (p.startsWith("study.")) {
    p = p.replace(/\.examples\[(\d+)\]\.en\b/g, ".examples[$1].lv");
    p = p.replace(/\.examples\.(\d+)\.en\b/g, ".examples.$1.lv");
  }
  return p;
}

function parsePath(fieldPath) {
  return String(fieldPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = /^\d+$/.test(parts[i]) ? parseInt(parts[i], 10) : parts[i];
    if (cur[key] == null) return false;
    cur = cur[key];
  }
  const lastKey = /^\d+$/.test(parts[parts.length - 1])
    ? parseInt(parts[parts.length - 1], 10)
    : parts[parts.length - 1];
  cur[lastKey] = value;
  return true;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function normalizeCardId(cardId) {
  return String(cardId || "")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss");
}

function buildIndex(words) {
  const byId = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    byId.set(id, entry);
    byId.set(normalizeCardId(id), entry);
    if (entry.study?.id) {
      byId.set(entry.study.id, entry);
      byId.set(normalizeCardId(entry.study.id), entry);
    }
  });
  return byId;
}

function findEntry(index, cardId) {
  for (const id of [cardId, normalizeCardId(cardId)]) {
    if (index.has(id)) return index.get(id);
  }
  return null;
}

function resolveTarget(entry, fieldPath) {
  const norm = normalizeFieldPath(fieldPath);
  if (norm === "lv") return { root: entry, path: "lv" };
  if (norm.startsWith("study.") && entry.study) {
    return { root: entry.study, path: norm.slice("study.".length) };
  }
  return null;
}

function readValue(entry, fieldPath) {
  const target = resolveTarget(entry, fieldPath);
  if (!target) return { ok: false, reason: "unresolved_field" };
  const val = getAt(target.root, target.path);
  if (val === undefined || val === null) return { ok: false, reason: "field_missing" };
  if (typeof val !== "string") return { ok: false, reason: "not_string_field" };
  return { ok: true, value: val, target };
}

function syncSectionAccents(study, syncRules, log) {
  if (!study?.sectionAccents) return 0;
  let fixes = 0;
  for (const rule of syncRules) {
    if (study.id !== rule.cardId) continue;
    const [section, color] = rule.path.split(".");
    const block = study.sectionAccents[section];
    if (!block || !block[color]) continue;
    const before = JSON.stringify(block[color]);
    if (!DRY_RUN) block[color] = [...rule.after];
    if (before !== JSON.stringify(rule.after)) {
      log.push({ cardId: rule.cardId, path: rule.path, before: rule.before, after: rule.after });
      fixes++;
    }
  }
  return fixes;
}

function countFormsLabel(words) {
  let management = 0, government = 0, rection = 0;
  for (const e of words) {
    const fl = e.study?.formsLabel;
    if (!fl) continue;
    if (fl.includes("Management:")) management++;
    if (fl.includes("Government:")) government++;
    if (fl.includes("Rection:")) rection++;
  }
  return { management, government, rection };
}

function structuralCounts(words) {
  const studies = words.filter((e) => e.study);
  return {
    cards: words.length,
    studies: studies.length,
    standardStudy: studies.filter((e) => e.study.layout === "standardStudy" || !e.study.layout).length,
    minimalStudy: studies.filter((e) => e.study.layout === "minimalStudy").length,
    flashcards: words.filter((e) => !e.study).length,
  };
}

function verifyOwnerNelabot(words, index) {
  const checks = [
    { cardId: "b2-ehrenvoll-512", fieldPath: "lv", expected: "Honorable" },
    { cardId: "b2-Eifer-521", fieldPath: "lv", expected: "Zeal • Diligence • Passion • Ardor • Eagerness" },
    { cardId: "b2-haube", fieldPath: "study.translation", expected: "Cap • Hood" },
    { cardId: "b2-haube", fieldPath: "enMain", expected: "Cap • Hood" },
    { cardId: "b2-haube", fieldPath: "study.examples[2].en", expected: "He opens the hood of the car." },
    { cardId: "b2-aendern", fieldPath: "study.examples[4].en", expected: "Change the part • Wechseln" },
    { cardId: "b2-fordern", fieldPath: "study.examples[4].en", expected: "To demand • To promote" },
    { cardId: "b2-sich-herausbilden", fieldPath: "study.translation", expected: "Develop • Emerge" },
  ];
  const results = [];
  for (const c of checks) {
    const entry = findEntry(index, c.cardId);
    const read = entry ? readValue(entry, c.fieldPath) : { ok: false };
    const pass = read.ok && read.value === c.expected;
    results.push({ ...c, actual: read.value, pass });
  }
  return results;
}

function main() {
  const hashDeBefore = md5(DE_FILE);
  const { decisions, sectionAccentSync = [] } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const words = loadWords(EN_FILE);
  const index = buildIndex(words);
  const log = [];
  const accentLog = [];
  const counts = { APPLIED: 0, CURRENT_VALUE_MISMATCH: 0, NOT_FOUND: 0, SKIP: 0 };

  for (const decision of decisions) {
    const entry = findEntry(index, decision.cardId);
    if (!entry) {
      counts.NOT_FOUND++;
      log.push({ ...decision, applyStatus: "NOT_FOUND" });
      continue;
    }
    const read = readValue(entry, decision.fieldPath);
    if (!read.ok) {
      counts.NOT_FOUND++;
      log.push({ ...decision, applyStatus: "NOT_FOUND", note: read.reason });
      continue;
    }
    if (read.value !== decision.current) {
      counts.CURRENT_VALUE_MISMATCH++;
      log.push({ ...decision, applyStatus: "CURRENT_VALUE_MISMATCH", actual: read.value });
      continue;
    }
    if (!DRY_RUN) setAt(read.target.root, read.target.path, decision.finalEn);
    counts.APPLIED++;
    log.push({ ...decision, applyStatus: "APPLIED" });
  }

  for (const entry of words) {
    if (entry.study) syncSectionAccents(entry.study, sectionAccentSync, accentLog);
  }

  let verified = 0;
  for (const decision of decisions) {
    const entry = findEntry(index, decision.cardId);
    const le = log.find((l) => l.seq === decision.seq);
    if (!entry || le?.applyStatus !== "APPLIED") continue;
    const read = readValue(entry, decision.fieldPath);
    if (read.ok && read.value === decision.finalEn) verified++;
  }

  if (!DRY_RUN && counts.APPLIED > 0) {
    writeB2(EN_FILE, words);
    writeB2(WWW_FILE, words);
  }

  const hashDeAfter = md5(DE_FILE);
  const nelabotChecks = verifyOwnerNelabot(words, index);
  const nelabotPass = nelabotChecks.filter((c) => c.pass).length;

  let sectionAccentIssues = -1;
  let syntaxPass = true;
  let parityPass = true;
  try {
    execSync("node --check data/en/b2.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }
  try {
    parityPass = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { cwd: ROOT, encoding: "utf8" })).pass;
  } catch {
    parityPass = false;
  }
  try {
    const sd = JSON.parse(execSync("node scripts/validate-study-design.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
    sectionAccentIssues = sd.perFile?.find((f) => f.file?.endsWith("/b2.js"))?.sectionAccentIssues ?? -1;
  } catch (e) {
    try {
      sectionAccentIssues = JSON.parse(e.stdout).perFile?.find((f) => f.file?.endsWith("/b2.js"))?.sectionAccentIssues;
    } catch {
      sectionAccentIssues = -1;
    }
  }

  const structure = structuralCounts(words);
  const formsLabel = countFormsLabel(words);
  const mirrorPass =
    md5(EN_FILE) === md5(WWW_FILE);

  const out = {
    generatedAt: new Date().toISOString(),
    microrepair: 3,
    dryRun: DRY_RUN,
    planned: decisions.length,
    applied: counts.APPLIED,
    verified,
    currentValueMismatch: counts.CURRENT_VALUE_MISMATCH,
    notFound: counts.NOT_FOUND,
    sectionAccentSync: accentLog.length,
    hashDeBefore,
    hashDeAfter,
    deReadOnly: hashDeBefore === hashDeAfter,
    deChanges: hashDeBefore === hashDeAfter ? 0 : 1,
    nelabotChecks,
    nelabotPass,
    nelabotPlanned: nelabotChecks.length,
    syntaxPass,
    parityPass,
    mirrorPass,
    sectionAccentIssues,
    structure,
    formsLabel,
    entries: log,
    accentLog,
  };

  fs.writeFileSync(APPLY_LOG, JSON.stringify(out, null, 2));
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2));

  const md = [
    "# EN–DE B2 — Gala mikrolabojums #3",
    "",
    "**Datums:** " + out.generatedAt.slice(0, 10),
    "",
    "## Piemērošana",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| Kartītes | 5 |",
    "| Lauki | 11 |",
    "| Piemēroti | " + out.applied + "/11 |",
    "| Verificēti | " + out.verified + "/11 |",
    "| Neatbilstības | " + out.currentValueMismatch + " |",
    "",
    "## DE aizsardzība",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    "| DE tikai lasāms | " + (out.deReadOnly ? "PASS" : "FAIL") + " |",
    "| DE izmaiņas | " + out.deChanges + " |",
    "",
    "## NELABOT saglabāšana",
    "",
    "| Rezultāts | " + out.nelabotPass + "/" + out.nelabotPlanned + " |",
    "",
    "## Tehnika",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    "| Sintakse | " + (out.syntaxPass ? "PASS" : "FAIL") + " |",
    "| Paritāte | " + (out.parityPass ? "PASS" : "FAIL") + " |",
    "| Mirror | " + (out.mirrorPass ? "PASS" : "FAIL") + " |",
    "| sectionAccents | " + out.sectionAccentIssues + " |",
    "| Rection: | " + out.formsLabel.rection + " |",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_MD, md);
  console.log(JSON.stringify(out, null, 2));

  if (!DRY_RUN) {
    if (verified !== decisions.length) throw new Error(`Verify failed: ${verified}/${decisions.length}`);
    if (!out.deReadOnly) throw new Error("DE modified");
    if (nelabotPass !== nelabotChecks.length) throw new Error("NELABOT preservation failed");
  }
}

main();
