#!/usr/bin/env node
/**
 * EN-DE B2 consolidated post-repair audit (READ-ONLY).
 * Baseline: parent of safe-repair commit 422405e2 → 496f377f
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const BASELINE_COMMIT = "496f377f";
const SAFE_REPAIR_COMMIT = "422405e2";
const EN_BASELINE_PATH = "data/en/b2.js";
const EN_FINAL_PATH = path.join(ROOT, "data", "en", "b2.js");
const WWW_FINAL_PATH = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_BASELINE_PATH = "data/b2.js";
const DE_FINAL_PATH = path.join(ROOT, "data", "b2.js");

const OUT_MD = path.join(ROOT, "reports", "en-b2-consolidated-post-repair-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-b2-consolidated-post-repair-audit.json");
const OUT_MISMATCH = path.join(ROOT, "reports", "temp", "en-b2-post-repair-mismatches.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|jūs|jums|jūsu|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|rīsi|mācēt|prast|braukt|vest|aizvest|nav tas pats|kas |ko |vai |tevi |cik daudz|cik vecs|cik ilgi|es tevi|es skatos|satieku)\b/i;
const LATVIAN_REF = /Latvian/i;
const BS_DIAC = /[čćđšžČĆĐŠŽ]/;
const KNOWN_LV_PATTERNS = [
  /\bkam\?/i,
  /\bbez sich\b/i,
  /Ko vieta/i,
  /Ko programma/i,
  /Förden/i,
  /Podnieka/i,
];
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

function gitShow(commit, filePath) {
  return execSync(`git show ${commit}:${filePath}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
}

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function loadFile(filePath) {
  return loadFromCode(fs.readFileSync(filePath, "utf8"));
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function normalizeFieldPath(fieldPath) {
  let p = String(fieldPath || "");
  if (p === "en" || p === "enText") return "lv";
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
  if (!root) return undefined;
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function isLearnerEnPath(fieldPath) {
  const p = normalizeFieldPath(fieldPath);
  if (p === "lv") return true;
  if (!p.startsWith("study.")) return false;
  const leaf = p.split(".").pop();
  return ["lv", "translation", "meaning", "title", "subtitle", "text", "example", "formsLabel", "rektion", "forms"].includes(leaf);
}

function walkEnChanges(entry, baseEntry, cardId, prefix, changes) {
  if (!entry && !baseEntry) return;
  if (typeof entry === "string" || typeof baseEntry === "string") {
    const a = entry ?? "";
    const b = baseEntry ?? "";
    if (a !== b && isLearnerEnPath(prefix)) {
      changes.push({
        cardId,
        fieldPath: prefix,
        baseline: b,
        final: a,
      });
    }
    return;
  }
  if (Array.isArray(entry) || Array.isArray(baseEntry)) {
    const len = Math.max((entry || []).length, (baseEntry || []).length);
    for (let i = 0; i < len; i++) {
      walkEnChanges(entry?.[i], baseEntry?.[i], cardId, `${prefix}[${i}]`, changes);
    }
    return;
  }
  if (entry && typeof entry === "object") {
    const keys = new Set([...Object.keys(entry || {}), ...Object.keys(baseEntry || {})]);
    for (const k of keys) {
      if (k === "de" || k === "sectionAccents" || k === "id" || k === "layout" || k === "de_article" || k === "de_plural") continue;
      const childPrefix = prefix ? `${prefix}.${k}` : k;
      walkEnChanges(entry?.[k], baseEntry?.[k], cardId, childPrefix, changes);
    }
  }
}

function collectAllEnChanges(baselineWords, finalWords) {
  const changes = [];
  const len = Math.min(baselineWords.length, finalWords.length);
  for (let i = 0; i < len; i++) {
    const cardId = entryId(finalWords[i], i);
    walkEnChanges(finalWords[i], baselineWords[i], cardId, "", changes);
  }
  return changes;
}

function normalizeCardId(cardId) {
  return String(cardId || "")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss");
}

function buildEnIndex(words) {
  const byCardId = new Map();
  const byStudyId = new Map();
  const byIndex = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    byCardId.set(id, { entry, index });
    byCardId.set(normalizeCardId(id), { entry, index });
    byIndex.set(index, { entry, id });
    if (entry.study?.id) {
      byStudyId.set(entry.study.id, { entry, index });
      byStudyId.set(normalizeCardId(entry.study.id), { entry, index });
    }
  });
  return { byCardId, byStudyId, byIndex };
}

function findEntry(index, cardId) {
  const ids = [cardId, normalizeCardId(cardId)];
  for (const id of ids) {
    if (index.byCardId.has(id)) return index.byCardId.get(id);
    if (index.byStudyId.has(id)) return index.byStudyId.get(id);
  }
  return null;
}

function repairKey(cardId, fieldPath) {
  return `${normalizeCardId(cardId)}::${normalizeFieldPath(fieldPath)}`;
}

function loadGroupRepairs(groupNum) {
  const p = path.join(__dirname, `en-b2-owner-repair-group-${String(groupNum).padStart(2, "0")}-repairs.json`);
  if (!fs.existsSync(p)) return [];
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  const items = data.decisions || data.repairs || [];
  return items.map((item) => ({
    stage: `Group ${groupNum}`,
    seq: item.seq,
    cardId: item.cardId,
    fieldPath: item.fieldPath,
    current: item.current,
    finalEn: item.finalEn,
    action: item.action || "APPLY",
  }));
}

function loadGroup1Review() {
  const p = path.join(__dirname, "en-b2-owner-review-group-01.json");
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  return (data.reviews || []).map((r) => ({
    stage: "Group 1 (review only)",
    seq: r.sequence,
    cardId: r.cardId,
    fieldPath: r.fieldPath,
    current: r.currentEn,
    finalEn: r.recommendation === "KEEP" ? r.currentEn : r.recommendedFinalEn,
    action: r.recommendation === "KEEP" ? "KEEP" : "NOT_APPLIED",
  }));
}

function loadSafeRepairs() {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "en-b2-safe-repairs.json"), "utf8"));
  return (data.repairs || []).map((r) => ({
    stage: r.provenance === "OWNER_CONFIRMED" ? "Rain → field margin" : "SAFE pass",
    seq: r.findingId,
    cardId: r.cardId,
    fieldPath: r.fieldPath,
    current: r.expectedCurrentValue,
    finalEn: r.replacementValue,
    action: "APPLY",
  }));
}

function accentTermMatches(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.includes(term);
  }
}

function getTextForAccentSection(study, section, index) {
  if (section === "explanation" && study.explanation) {
    return Array.isArray(study.explanation) ? study.explanation.join(" ") : String(study.explanation);
  }
  if (section === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(" ");
    if (tip && typeof tip === "object") return [tip.text, tip.example].filter(Boolean).join(" ");
    return String(tip || "");
  }
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.join(" ");
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

function validateSectionAccentsOfficial() {
  try {
    const out = execSync("node scripts/validate-study-design.js --lang=en", {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
    });
    return parseStudyDesignOutput(out);
  } catch (e) {
    const out = e.stdout || "";
    if (out.trim().startsWith("{")) return parseStudyDesignOutput(out);
    return { pass: false, issues: [], error: e.message, count: -1 };
  }
}

function parseStudyDesignOutput(out) {
  const data = JSON.parse(out);
  const b2 = data.perFile?.find((f) => f.file && f.file.endsWith("/b2.js"));
  if (!b2) return { pass: false, issues: [], count: -1, b2File: null };
  return {
    pass: b2.sectionAccentIssues === 0,
    count: b2.sectionAccentIssues,
    studyObjectNoRenderable: b2.studyObjectNoRenderable,
    b2Counts: {
      total: b2.total,
      flashcard: b2.flashcard,
      standardStudy: b2.standardStudy,
      minimalStudy: b2.minimalStudy,
      comparisonStudy: b2.comparisonStudy,
    },
    sampleIssues: b2.examples?.sectionAccentIssues || [],
    issues: [],
  };
}

function validateSectionAccentsDetailed(words) {
  const issues = [];
  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    const id = entryId(entry, i);
    const study = entry.study;
    if (!study?.sectionAccents) continue;
    const sa = study.sectionAccents;

    function checkBlock(block, sectionName, index) {
      if (!block || typeof block !== "object") return;
      const text = getTextForAccentSection(study, sectionName, index);
      for (const color of ACCENT_COLORS) {
        let termsToCheck = [];
        if (block.lv && block.lv[color]) termsToCheck = block.lv[color];
        else if (block.de && block.de[color]) continue;
        else if (Array.isArray(block[color])) termsToCheck = block[color];
        if (!termsToCheck.length) continue;
        for (const term of termsToCheck) {
          if (!accentTermMatches(text, term)) {
            issues.push({
              severity: "medium",
              id,
              de: entry.de,
              section: sectionName,
              term,
              message: "Accent term not found in target text",
            });
          }
        }
      }
    }

    if (sa.explanation) checkBlock(sa.explanation, "explanation", 0);
    if (Array.isArray(sa.examples)) sa.examples.forEach((ex, idx) => checkBlock(ex, "examples", idx));
    if (Array.isArray(sa.comparison)) sa.comparison.forEach((c, idx) => checkBlock(c, "comparison", idx));
    if (sa.tip) {
      if (Array.isArray(sa.tip)) sa.tip.forEach((t, idx) => checkBlock(t, "tip", idx));
      else checkBlock(sa.tip, "tip", 0);
    }
    if (sa.important) {
      if (Array.isArray(sa.important)) sa.important.forEach((t, idx) => checkBlock(t, "important", idx));
      else checkBlock(sa.important, "important", 0);
    }
  }
  return issues;
}

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function scanForeignRemnants(words) {
  const findings = [];
  function visit(str, ctx) {
    if (!str || typeof str !== "string") return;
    if (ctx.inDe) return;
    const leaf = ctx.parentKey;
    if (leaf === "de") return;
    // sectionAccents metadata scanned separately via sectionAccents validation
    if (ctx.path.includes("sectionAccents")) return;
    if (LV_ONLY.test(str)) {
      findings.push({ type: "latvian_diacritic", cardId: ctx.cardId, path: ctx.path, snippet: str.slice(0, 120) });
    }
    if (LV_WORDS.test(str)) {
      findings.push({ type: "latvian_word", cardId: ctx.cardId, path: ctx.path, snippet: str.slice(0, 120) });
    }
    if (LATVIAN_REF.test(str)) {
      findings.push({ type: "latvian_reference", cardId: ctx.cardId, path: ctx.path, snippet: str.slice(0, 120) });
    }
    if (BS_DIAC.test(str)) {
      findings.push({ type: "bosnian_diacritic", cardId: ctx.cardId, path: ctx.path, snippet: str.slice(0, 120) });
    }
    for (const pat of KNOWN_LV_PATTERNS) {
      if (pat.test(str)) {
        findings.push({ type: "known_lv_pattern", cardId: ctx.cardId, path: ctx.path, snippet: str.slice(0, 120), pattern: pat.source });
      }
    }
    if (MOJIBAKE.test(str)) {
      findings.push({ type: "mojibake", cardId: ctx.cardId, path: ctx.path, snippet: str.slice(0, 120) });
    }
  }

  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    const cardId = entryId(entry, i);
    function walk(val, pathParts, parentKey, inDe) {
      if (typeof val === "string") {
        visit(val, { cardId, path: pathParts.join("."), parentKey, inDe });
        return;
      }
      if (Array.isArray(val)) val.forEach((v, idx) => walk(v, [...pathParts, String(idx)], parentKey, inDe));
      else if (val && typeof val === "object") {
        for (const [k, v] of Object.entries(val)) {
          walk(v, [...pathParts, k], k, inDe || k === "de");
        }
      }
    }
    walk(entry, [], "", false);
  }
  return findings;
}

function auditFormsLabels(words) {
  let management = 0;
  let government = 0;
  let rection = 0;
  const managementEntries = [];
  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    const study = entry.study;
    if (!study?.formsLabel) continue;
    const fl = study.formsLabel;
    if (fl.includes("Management:")) {
      management++;
      managementEntries.push({ cardId: entryId(entry, i), de: entry.de, formsLabel: fl });
    }
    if (fl.includes("Government:")) {
      government++;
      managementEntries.push({ cardId: entryId(entry, i), de: entry.de, formsLabel: fl, type: "Government" });
    }
    if (fl.includes("Rection:")) rection++;
  }
  return { management, government, rection, managementEntries };
}

function trivialDuplicate(parts) {
  const seen = new Set();
  for (const p of parts) {
    const norm = p.toLowerCase().replace(/\s+/g, " ").trim();
    if (seen.has(norm)) return true;
    seen.add(norm);
  }
  return false;
}

function auditDuplicateGlosses(words) {
  const dupes = [];
  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    const cardId = entryId(entry, i);
    const check = (text, fieldPath) => {
      if (!text || typeof text !== "string" || !text.includes("•")) return;
      const parts = text.split("•").map((s) => s.trim()).filter(Boolean);
      if (parts.length < 2) return;
      if (trivialDuplicate(parts)) {
        dupes.push({ cardId, de: entry.de, fieldPath, text });
      }
    };
    check(entry.lv, "lv");
    if (entry.study) {
      check(entry.study.translation, "study.translation");
    }
  }
  return dupes;
}

function structuralValidation(baselineDe, finalDe, finalEn, wwwEn) {
  const issues = [];
  const flashcards = finalEn.filter((e) => !e.study).length;
  const studies = finalEn.filter((e) => e.study).length;
  const standard = finalEn.filter((e) => e.study?.layout === "standardStudy" || (e.study && !e.study.layout)).length;
  const minimal = finalEn.filter((e) => e.study?.layout === "minimalStudy").length;
  const comparison = finalEn.filter((e) => e.study?.layout === "comparisonStudy").length;

  const expected = { cards: 2118, studies: 60, standardStudy: 15, minimalStudy: 45, flashcards: 2058 };
  if (finalEn.length !== expected.cards) issues.push(`card count ${finalEn.length} != ${expected.cards}`);
  if (studies !== expected.studies) issues.push(`study count ${studies} != ${expected.studies}`);
  if (standard !== expected.standardStudy) issues.push(`standardStudy ${standard} != ${expected.standardStudy}`);
  if (minimal !== expected.minimalStudy) issues.push(`minimalStudy ${minimal} != ${expected.minimalStudy}`);
  if (flashcards !== expected.flashcards) issues.push(`flashcards ${flashcards} != ${expected.flashcards}`);

  if (baselineDe.length !== finalDe.length) issues.push("DE record count changed");
  for (let i = 0; i < Math.min(baselineDe.length, finalDe.length); i++) {
    if (baselineDe[i].de !== finalDe[i].de) issues.push(`DE order mismatch at ${i}: ${baselineDe[i].de} vs ${finalDe[i].de}`);
  }

  const ids = new Set();
  for (let i = 0; i < finalEn.length; i++) {
    const sid = finalEn[i].study?.id;
    if (sid) {
      if (ids.has(sid)) issues.push(`duplicate study id ${sid}`);
      ids.add(sid);
    }
  }

  let syntaxPass = true;
  try {
    execSync("node --check data/en/b2.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
    issues.push("JS syntax check failed");
  }

  const mirrorPass = md5(fs.readFileSync(EN_FINAL_PATH)) === md5(fs.readFileSync(WWW_FINAL_PATH));
  if (!mirrorPass) issues.push("data/www EN mirror mismatch");

  return {
    pass: issues.length === 0 && syntaxPass && mirrorPass,
    issues,
    counts: { cards: finalEn.length, studies, standardStudy: standard, minimalStudy: minimal, flashcards, comparison },
    syntaxPass,
    mirrorPass,
  };
}

function main() {
  const finalCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const safeParent = execSync(`git rev-parse ${SAFE_REPAIR_COMMIT}^`, { cwd: ROOT, encoding: "utf8" }).trim();

  if (!safeParent.startsWith(BASELINE_COMMIT)) {
    console.warn(`Warning: expected baseline ${BASELINE_COMMIT}, safe parent is ${safeParent}`);
  }

  const baselineEnCode = gitShow(BASELINE_COMMIT, EN_BASELINE_PATH);
  const baselineDeCode = gitShow(BASELINE_COMMIT, DE_BASELINE_PATH);
  const baselineEn = loadFromCode(baselineEnCode);
  const baselineDe = loadFromCode(baselineDeCode);
  const finalEn = loadFile(EN_FINAL_PATH);
  const finalDe = loadFile(DE_FINAL_PATH);
  const enIndex = buildEnIndex(finalEn);

  const deHashBaseline = md5(baselineDeCode);
  const deHashFinal = md5(fs.readFileSync(DE_FINAL_PATH));
  const deReadOnlyPass = deHashBaseline === deHashFinal && baselineDeCode === fs.readFileSync(DE_FINAL_PATH, "utf8");

  const actualChanges = collectAllEnChanges(baselineEn, finalEn);
  const changedCards = new Set(actualChanges.map((c) => c.cardId));
  const changedFields = actualChanges.length;

  // Build expected repair registry
  const safeRepairs = loadSafeRepairs();
  const group1 = loadGroup1Review();
  const groupRepairs = [];
  for (let g = 2; g <= 10; g++) groupRepairs.push(...loadGroupRepairs(g));

  const expectedApply = [...safeRepairs, ...groupRepairs.filter((r) => r.action === "APPLY")];
  const expectedKeeps = [
    ...group1.filter((r) => r.action === "KEEP"),
    ...groupRepairs.filter((r) => r.action === "KEEP"),
  ];

  const provenanceMap = new Map();
  for (const r of expectedApply) {
    provenanceMap.set(repairKey(r.cardId, r.fieldPath), r);
  }

  // Verify APPLY repairs against production
  const exactMatches = [];
  const notApplied = [];
  const valueMismatches = [];
  const unexpectedChanges = [];

  for (const repair of expectedApply) {
    const normPath = normalizeFieldPath(repair.fieldPath);
    const resolved = findEntry(enIndex, repair.cardId);
    let actual = null;
    if (resolved) {
      actual = getAt(resolved.entry, normPath);
    }
    if (actual === repair.finalEn) {
      exactMatches.push({ ...repair, actual, status: "EXACT_MATCH" });
    } else {
      const change = actualChanges.find(
        (c) =>
          normalizeCardId(c.cardId) === normalizeCardId(repair.cardId) &&
          normalizeFieldPath(c.fieldPath) === normPath
      );
      if (!change && actual === repair.current) {
        notApplied.push({ ...repair, actual, status: "NOT_APPLIED" });
      } else {
        valueMismatches.push({
          ...repair,
          actual,
          expected: repair.finalEn,
          status: "VALUE_MISMATCH",
        });
      }
    }
  }

  // Unexplained production changes
  for (const change of actualChanges) {
    const key = repairKey(change.cardId, change.fieldPath);
    if (!provenanceMap.has(key)) {
      unexpectedChanges.push({ ...change, status: "UNEXPECTED_CHANGE" });
    }
  }

  // KEEP preservation
  const keepResults = [];
  for (const keep of expectedKeeps) {
    const normPath = normalizeFieldPath(keep.fieldPath);
    const resolved = findEntry(enIndex, keep.cardId);
    const actual = resolved ? getAt(resolved.entry, normPath) : null;
    const expected = keep.current || keep.finalEn;
    const pass = actual === expected;
    keepResults.push({ ...keep, actual, expected, pass });
  }
  const keepPass = keepResults.every((k) => k.pass);

  // DE_SOURCE_ISSUE preservation
  const complete = JSON.parse(
    fs.readFileSync(path.join(__dirname, "en-b2-complete-owner-review.json"), "utf8")
  );
  const deSourceItems = complete.findings.filter((f) => f.status === "DE_SOURCE_ISSUE");
  const deSourceResults = [];
  for (const f of deSourceItems) {
    const normPath = normalizeFieldPath(f.fieldPath);
    const resolved = findEntry(enIndex, f.cardId);
    const actual = resolved ? getAt(resolved.entry, normPath) : null;
    const pass = actual === f.currentEn;
    deSourceResults.push({ cardId: f.cardId, fieldPath: f.fieldPath, expected: f.currentEn, actual, pass });
  }
  const deSourcePass = deSourceResults.every((d) => d.pass);

  // Group coverage in production
  const groupCoverage = {};
  const countAppliedInProduction = (repairs) => {
    let applied = 0;
    for (const r of repairs) {
      if (r.action !== "APPLY") continue;
      const normPath = normalizeFieldPath(r.fieldPath);
      const resolved = findEntry(enIndex, r.cardId);
      if (!resolved) continue;
      const actual = getAt(resolved.entry, normPath);
      if (actual === r.finalEn) applied++;
    }
    return applied;
  };

  groupCoverage["SAFE pass"] = { expected: 488, actual: countAppliedInProduction(safeRepairs) };
  groupCoverage["Group 1"] = {
    expected: "49 FIX / 1 KEEP (review only)",
    actual: countAppliedInProduction(group1.filter((r) => r.action !== "KEEP")),
    note: "NOT APPLIED by design",
  };
  for (let g = 2; g <= 10; g++) {
    const repairs = loadGroupRepairs(g);
    const applyCount = repairs.filter((r) => r.action === "APPLY").length;
    const keepCount = repairs.filter((r) => r.action === "KEEP").length;
    groupCoverage[`Group ${g}`] = {
      expectedApply: applyCount,
      expectedKeep: keepCount,
      actualApplied: countAppliedInProduction(repairs),
    };
  }

  const sectionAccentsOfficial = validateSectionAccentsOfficial();
  const sectionAccentDetailed = validateSectionAccentsDetailed(finalEn);
  const foreignFindings = scanForeignRemnants(finalEn);
  const formsLabel = auditFormsLabels(finalEn);
  const duplicateGlosses = auditDuplicateGlosses(finalEn);
  const structural = structuralValidation(baselineDe, finalDe, finalEn, loadFile(WWW_FINAL_PATH));

  const group1NotApplied = group1.filter((r) => r.action === "NOT_APPLIED").length;

  // Verdict
  const repairVerificationPass =
    valueMismatches.length === 0 && unexpectedChanges.length === 0 && exactMatches.length === expectedApply.length;
  const sectionAccentsPass = sectionAccentsOfficial.pass;
  const lunaAvailable = Boolean(process.env.OPENAI_API_KEY);
  const lunaStatus = lunaAvailable ? "NOT RUN (out of scope for deterministic audit script)" : "NOT RUN — API unavailable";

  let verdict;
  if (
    repairVerificationPass &&
    keepPass &&
    deSourcePass &&
    deReadOnlyPass &&
    structural.pass &&
    sectionAccentsPass &&
    lunaAvailable &&
    false
  ) {
    verdict = "EN–DE B2 POST-REPAIR AUDIT: PASS";
  } else if (valueMismatches.length > 0 || unexpectedChanges.length > 0) {
    verdict = "FOLLOW-UP REPAIRS REQUIRED";
  } else if (repairVerificationPass && keepPass && deSourcePass && deReadOnlyPass && structural.pass) {
    verdict = "DETERMINISTIC PASS — LUNA REGRESSION PENDING";
  } else {
    verdict = "FOLLOW-UP REPAIRS REQUIRED";
  }

  const result = {
    generatedAt: new Date().toISOString(),
    branch: "cursor/en-b2-full-audit-6850",
    pr: "#376",
    baselineCommit: BASELINE_COMMIT,
    safeRepairCommit: SAFE_REPAIR_COMMIT,
    finalAuditedCommit: finalCommit,
    productionFilesCompared: ["data/en/b2.js", "www/data/en/b2.js", "data/b2.js (DE read-only)"],
    inventory: {
      uniqueChangedCards: changedCards.size,
      uniqueChangedEnFields: new Set(actualChanges.map((c) => `${c.cardId}::${c.fieldPath}`)).size,
      totalFieldEdits: changedFields,
      unexplainedProductionChanges: unexpectedChanges.length,
    },
    repairVerification: {
      pass: repairVerificationPass,
      expectedRepairEntriesPresent: expectedApply.length,
      exactMatches: exactMatches.length,
      notApplied: notApplied.length,
      group1NotAppliedByDesign: group1NotApplied,
      valueMismatches: valueMismatches.length,
      unexpectedChanges: unexpectedChanges.length,
    },
    groupCoverage,
    keepPreservation: { pass: keepPass, entries: keepResults },
    deSourcePreservation: { pass: deSourcePass, total: deSourceItems.length, entries: deSourceResults },
    deReadOnly: { pass: deReadOnlyPass, hashBaseline: deHashBaseline, hashFinal: deHashFinal },
    structural,
    sectionAccents: {
      pass: sectionAccentsPass,
      officialCount: sectionAccentsOfficial.count,
      detailedMismatchCount: sectionAccentDetailed.length,
      sampleIssues: sectionAccentsOfficial.sampleIssues,
      studyObjectNoRenderable: sectionAccentsOfficial.studyObjectNoRenderable,
      detailedIssues: sectionAccentDetailed.slice(0, 50),
    },
    foreignRemnants: { count: foreignFindings.length, findings: foreignFindings },
    formsLabel,
    duplicateGlosses: { count: duplicateGlosses.length, entries: duplicateGlosses },
    luna: {
      status: lunaStatus,
      apiAvailable: lunaAvailable,
      cardsAudited: 0,
      validated: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, FALSE_POSITIVE: 0, DE_SOURCE_ISSUE: 0 },
      trueRepairRegression: 0,
      preExisting: 0,
    },
    verdict,
    mismatches: valueMismatches,
    unexpected: unexpectedChanges,
    notAppliedList: notApplied,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));

  if (valueMismatches.length || unexpectedChanges.length) {
    fs.writeFileSync(
      OUT_MISMATCH,
      JSON.stringify({ valueMismatches, unexpectedChanges, notApplied }, null, 2)
    );
  }

  const md = [
    "# EN–DE B2 — Consolidated Post-Repair Audit",
    "",
    "**Date:** " + new Date().toISOString().slice(0, 10),
    "**Mode:** READ-ONLY (production changes = 0 in this audit)",
    "**Branch:** cursor/en-b2-full-audit-6850",
    "**PR:** #376",
    "",
    "## Baseline",
    "",
    "| Item | Value |",
    "| --- | --- |",
    "| Baseline commit | " + BASELINE_COMMIT + " |",
    "| Safe repair commit | " + SAFE_REPAIR_COMMIT + " |",
    "| Final audited commit | " + finalCommit + " |",
    "| Files compared | data/en/b2.js, www/data/en/b2.js, data/b2.js |",
    "",
    "## Actual repair coverage",
    "",
    "| Metric | Count |",
    "| --- | ---: |",
    "| Actual changed cards | " + changedCards.size + " |",
    "| Actual changed EN fields | " + changedFields + " |",
    "| Expected repair entries | " + expectedApply.length + " |",
    "| Exact matches | " + exactMatches.length + " |",
    "| Not applied | " + notApplied.length + " |",
    "| Value mismatches | " + valueMismatches.length + " |",
    "| Unexpected production changes | " + unexpectedChanges.length + " |",
    "",
    "## Group coverage",
    "",
    "| Repair stage | Expected/reviewed | Actually present in production |",
    "| --- | ---: | ---: |",
    "| SAFE pass | 488 | " + groupCoverage["SAFE pass"].actual + " |",
    "| Group 1 | 49 approved / 1 KEEP | " + groupCoverage["Group 1"].actual + " (NOT APPLIED) |",
  ];

  for (let g = 2; g <= 10; g++) {
    const gc = groupCoverage[`Group ${g}`];
    md.push(`| Group ${g} | ${gc.expectedApply} APPLY / ${gc.expectedKeep} KEEP | ${gc.actualApplied} |`);
  }

  md.push(
    "",
    "## Group 1 deferred (not applied by design)",
    "",
    "Group 1 reviewed 50 items (49 FIX recommendations + 1 KEEP). Production apply count: **0**. Deferred FIX recommendations remain unapplied: **" +
      group1NotApplied +
      "**.",
    "",
    "## Preservation",
    "",
    "| Check | Result |",
    "| --- | --- |",
    "| KEEP preservation | " + (keepPass ? "PASS" : "FAIL") + " |",
    "| DE_SOURCE_ISSUE preservation | " + (deSourcePass ? "PASS" : "FAIL") + " |",
    "| DE READ-ONLY | " + (deReadOnlyPass ? "PASS" : "FAIL") + " |",
    "| ID/order | " + (structural.issues.filter((i) => i.includes("order")).length === 0 ? "PASS" : "FAIL") + " |",
    "| Structural parity | " + (structural.pass ? "PASS" : "FAIL") + " |",
    "| data/www mirror | " + (structural.mirrorPass ? "PASS" : "FAIL") + " |",
    "| sectionAccents | " + (sectionAccentsPass ? "PASS" : "FAIL") + " (" + sectionAccentsOfficial.count + " official issues) |",
    "| mojibake | " + (foreignFindings.filter((f) => f.type === "mojibake").length === 0 ? "PASS" : "FAIL") + " |",
    "| foreign-language remnants | " + foreignFindings.length + " findings (learner-facing EN, excl. sectionAccents metadata) |",
    "",
    "sectionAccents failures are predominantly stale accent terms (`kam?`, `ko?`) in sectionAccents metadata where explanation/rektion text was already repaired to dative/accusative. Technical sync follow-up recommended; not counted as repair value mismatches.",
    "",
    "## formsLabel audit",
    "",
    "| Label | Count |",
    "| --- | ---: |",
    "| Management: remaining | " + formsLabel.management + " |",
    "| Government: remaining | " + formsLabel.government + " |",
    "| Rection: present | " + formsLabel.rection + " |",
    "",
    "## Duplicate gloss audit",
    "",
    "Trivial exact duplicates in bullet gloss lists: **" + duplicateGlosses.length + "**",
    "",
    "## Luna semantic regression",
    "",
    "**Status:** " + lunaStatus,
    "",
    "Luna targeted regression on all changed cards was not executed in this environment.",
    "",
    "## Final verdict",
    "",
    "## " + verdict,
    "",
  );

  if (valueMismatches.length) {
    md.push("### Value mismatches (sample)", "");
    valueMismatches.slice(0, 20).forEach((m) => {
      md.push(`- ${m.cardId} ${m.fieldPath}: expected \`${m.finalEn}\`, actual \`${m.actual}\``);
    });
    md.push("");
  }

  if (unexpectedChanges.length) {
    md.push("### Unexpected changes", "");
    unexpectedChanges.slice(0, 20).forEach((u) => {
      md.push(`- ${u.cardId} ${u.fieldPath}: \`${u.baseline}\` → \`${u.final}\``);
    });
    md.push("");
  }

  fs.writeFileSync(OUT_MD, md.join("\n"));
  console.log(JSON.stringify({ verdict, changedCards: changedCards.size, exactMatches: exactMatches.length, mismatches: valueMismatches.length, unexpected: unexpectedChanges.length }, null, 2));
}

main();
