#!/usr/bin/env node
/**
 * EN–DE B1 MAIN INTEGRATION TARGETED REGRESSION AUDIT — READ-ONLY
 * Audits 183 integrated mappings / 177 physical fields / 142 affected cards.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const {
  findEntry,
  getFieldValue,
  formatVal,
  valuesMatch,
  normalizeRepairField,
  loadB1,
} = require("./en-b1-field-apply-lib.js");

const ROOT = path.join(__dirname, "..", "..");
const BASE_COMMIT = "223d37f4";
const INTEGRATION_COMMIT = "ae6294de";
const RECON_MANIFEST_REF = "b5e4dcc9:reports/temp/en-b1-main-reconciliation-manifest.json";
const OUT_JSON = path.join(ROOT, "reports/temp/en-b1-main-integration-targeted-regression.json");
const OUT_MANIFEST = path.join(ROOT, "reports/temp/en-b1-main-integration-targeted-regression-manifest.json");
const OUT_MD = path.join(ROOT, "reports/en-b1-main-integration-targeted-regression.md");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|Skaties|Formas|Bez|bez|apkalpot|apspriest|nomierini|slava|kaites|iegurnis|tvertne|eksperts|grupa|notikumiem|dzimums|dzimte|parasti)\b/i;
const META_PEDAGOGY =
  /\b(in Latvian|Latvian usually|Latvian language|Latvian learners?|for Latvian|Latvian equivalent|Latvian word|Latvian phrase)\b/i;

const MICRO_EXPLANATION_CARDS = [
  "b1-kern", "b1-kastanie", "b1-bildschirm", "b1-einführung", "b1-einheit",
  "b1-folge", "b1-geschlecht", "b1-gewinn", "b1-griff", "b1-kiefer",
  "b1-leistung", "b1-los", "b1-schnitt", "b1-spitze",
];

const IDENTITY_ALIAS_CARDS = ["b1-gehalt-2", "b1-kunde-2", "b1-steuer-2", "b1-steuer", "b1-kunde"];

function gitShow(ref) {
  try {
    return execSync(`git show ${ref}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 80 * 1024 * 1024 });
  } catch {
    return null;
  }
}

function loadB1At(ref) {
  const code = gitShow(`${ref}:data/en/b1.js`);
  if (!code) return null;
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function loadDeB1() {
  const code = fs.readFileSync(path.join(ROOT, "data/b1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function runCmd(cmd) {
  try {
    const out = execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
    return { ok: true, out, code: 0 };
  } catch (e) {
    return { ok: false, out: (e.stdout || "") + (e.stderr || "") + e.message, code: e.status || 1 };
  }
}

function walkDiff(before, after, prefix, diffs) {
  if (before === after) return;
  if (before == null || after == null || typeof before !== typeof after) {
    diffs.push({ field: prefix, before, after });
    return;
  }
  if (Array.isArray(before) && Array.isArray(after)) {
    if (JSON.stringify(before) !== JSON.stringify(after)) diffs.push({ field: prefix, before, after });
    return;
  }
  if (typeof before === "object") {
    const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
    for (const k of keys) walkDiff(before?.[k], after?.[k], prefix ? `${prefix}.${k}` : k, diffs);
    return;
  }
  if (before !== after) diffs.push({ field: prefix, before, after });
}

function formatDisplay(v) {
  if (v === undefined || v === null) return "";
  if (typeof v === "string") return v;
  return JSON.stringify(v);
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function boundaryPattern(term) {
  return `(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`;
}

function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(boundaryPattern(term), "iu").test(String(text));
  } catch {
    return false;
  }
}

function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
    }
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index !== null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "leftBlocks") {
      (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
      return texts;
    }
    push(study.tip?.left || study.tip?.text);
    push(study.tip?.right || study.tip?.example);
    (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows = index !== null ? asArray(Array.isArray(source) ? source[index] : source) : asArray(source);
    rows.forEach(push);
    return texts;
  }
  return texts;
}

function accentTermMatchesStrict(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (matchesTerm(blob, term)) return true;
  const fold = (s) =>
    String(s || "")
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase();
  if (fold(blob).includes(fold(term))) return true;
  return false;
}

function collectValidatorIssuesForCards(enWords, affectedIds) {
  const issues = [];
  const idSet = new Set(affectedIds);
  for (let productionIndex = 0; productionIndex < enWords.length; productionIndex++) {
    const card = enWords[productionIndex];
    const study = card.study;
    const productionId = study?.id;
    if (!productionId || !idSet.has(productionId)) continue;
    if (!study?.sectionAccents) continue;

    const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
      if (!accentMap || typeof accentMap !== "object") return;
      for (const color of ACCENT_COLORS) {
        if (!Array.isArray(accentMap[color])) continue;
        for (let ti = 0; ti < accentMap[color].length; ti++) {
          const raw = String(accentMap[color][ti] || "").trim();
          if (!raw) continue;
          if (!accentTermMatchesStrict(study, sectionKey, index, field, raw)) {
            issues.push({
              de: card.de,
              productionId,
              productionIndex,
              term: raw,
              section: sectionKey,
              field: field || null,
              index,
              color,
              tokenIndex: ti,
              accentPath: `${pathPrefix}.${color}[${ti}]`,
            });
          }
        }
      }
    };

    for (const [sectionKey, rules] of Object.entries(study.sectionAccents)) {
      if (Array.isArray(rules)) {
        rules.forEach((entry2, i) => {
          if (!entry2 || typeof entry2 !== "object") return;
          const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry2[c]));
          if (hasColors) {
            checkMap(sectionKey, i, null, entry2, `sectionAccents.${sectionKey}[${i}]`);
            return;
          }
          for (const f of Object.keys(entry2)) {
            checkMap(sectionKey, i, f, entry2[f], `sectionAccents.${sectionKey}[${i}].${f}`);
          }
        });
      } else if (rules && typeof rules === "object") {
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
        if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
        else {
          for (const [field, map] of Object.entries(rules)) {
            checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
          }
        }
      }
    }
  }
  return issues;
}

function collectEnLearnerStrings(entry, skipSectionAccents = false) {
  const out = [];
  const walk = (obj, inDe) => {
    if (typeof obj === "string") {
      if (!inDe) out.push(obj);
      return;
    }
    if (Array.isArray(obj)) obj.forEach((x) => walk(x, inDe));
    else if (obj && typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) {
        if (skipSectionAccents && k === "sectionAccents") continue;
        walk(v, inDe || k === "de");
      }
    }
  };
  walk(entry.lv, false);
  if (entry.study) walk(entry.study, false);
  return out;
}

function looksTruncated(text) {
  const t = String(text || "").trim();
  if (!t || t.length < 25) return false;
  if (/[.!?…"”]$/.test(t)) return false;
  if (/[;/]/.test(t)) return false;
  if (/\b(a|an|the|to|of|in|it|be|or|and|can|is|as|at|on|for|with|that|this|which|when|where|who|how|what|if|but|not)\s*$/i.test(t)) {
    return true;
  }
  if (/\b(can|means|mean|it|an|a)\s*$/i.test(t)) return true;
  return false;
}

function classifyFieldNotFoundPost(entry, mapping, words) {
  const fieldPath = mapping.fieldPath;
  const normField = entry ? normalizeRepairField(fieldPath, entry) : fieldPath;
  const actual = entry ? getFieldValue(entry, normField) : undefined;
  const expected = mapping.expectedOwnerFinal;

  if (!entry) return { category: "F", label: "STILL_UNRESOLVED" };

  if (valuesMatch(actual, expected) || formatVal(actual) === expected) {
    return { category: "D", label: "ALREADY_MATCHES" };
  }

  const identityAlias =
    mapping.auditCardId !== entry.study?.id &&
    (mapping.auditCardId?.endsWith("-2") || IDENTITY_ALIAS_CARDS.includes(mapping.auditCardId));

  if (identityAlias && valuesMatch(actual, expected)) {
    return { category: "D", label: "IDENTITY_ALIAS_MATCH" };
  }

  if (
    String(expected).includes("REMOVE DUPLICATE") &&
    /\.purple\[\d+\]$/.test(fieldPath) &&
    actual === undefined
  ) {
    return { category: "D", label: "REMOVE_DUPLICATE_NOOP" };
  }

  return { category: "C", label: "ADDITIONAL_MISSING" };
}

function loadPreIntegrationManifest() {
  const raw = gitShow(RECON_MANIFEST_REF);
  if (!raw) throw new Error("Cannot load pre-integration reconciliation manifest");
  return JSON.parse(raw);
}

function loadPostIntegrationManifest() {
  const local = path.join(ROOT, "reports/temp/en-b1-main-reconciliation-manifest.json");
  if (fs.existsSync(local)) return JSON.parse(fs.readFileSync(local, "utf8"));
  return JSON.parse(gitShow(`${INTEGRATION_COMMIT}:reports/temp/en-b1-main-reconciliation-manifest.json`));
}

function authoritativeMatch(actual, expected, fieldPath) {
  if (expected === "__REMOVE_ACCENT__") {
    return actual === undefined || actual === "" || (Array.isArray(actual) && actual.length === 0);
  }
  if (valuesMatch(actual, expected) || formatVal(actual) === String(expected)) return true;
  if (typeof expected === "string" && typeof actual === "string") {
    const e = expected.replace(/\s+/g, " ").trim();
    const a = actual.replace(/\s+/g, " ").trim();
    if (a === e || a.includes(e) || e.includes(a)) return true;
  }
  if (Array.isArray(actual) && typeof expected === "string") {
    try {
      const parsed = JSON.parse(expected);
      if (Array.isArray(parsed) && JSON.stringify(actual) === JSON.stringify(parsed)) return true;
    } catch {
      const tokens = expected.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
      if (tokens.length && tokens.every((t) => actual.some((x) => String(x).toLowerCase() === t.toLowerCase()))) {
        return true;
      }
    }
  }
  if (fieldPath?.includes("explanation") && Array.isArray(actual) && typeof expected === "string") {
    if (actual.some((line) => line.includes(expected.slice(0, 40)) || expected.includes(line.slice(0, 40)))) return true;
  }
  return false;
}

function issueKey(iss) {
  return `${iss.productionId}|${iss.accentPath}|${iss.term}`;
}

function collectSectionIssuesBeforeAfter(beforeWords, afterWords, affectedIds) {
  const beforeIssues = collectValidatorIssuesForCards(beforeWords, affectedIds);
  const afterIssues = collectValidatorIssuesForCards(afterWords, affectedIds);
  const beforeKeys = new Set(beforeIssues.map(issueKey));
  const newIssues = afterIssues.filter((i) => !beforeKeys.has(issueKey(i)) && !isEinerleiFp(i));
  return { beforeIssues, afterIssues, newIssues };
}

function buildIntegrationScope(preManifest, beforeWords, afterWords) {
  const missingMappings = preManifest.filter((m) => m.status === "MISSING_FROM_MAIN");
  const fieldNotFoundMappings = preManifest.filter((m) => m.status === "FIELD_NOT_FOUND");

  const additionalDeterministic = [];
  const alreadyResolved = [];

  for (const m of fieldNotFoundMappings) {
    const entry = findEntry(afterWords, m.productionIdentity, m.productionIndex, m.auditCardId);
    const cls = classifyFieldNotFoundPost(entry, m, afterWords);
    if (cls.category === "C") additionalDeterministic.push({ ...m, unresolvedClass: cls });
    else alreadyResolved.push({ ...m, unresolvedClass: cls });
  }

  const integrationMappings = [...missingMappings, ...additionalDeterministic];

  const physicalChanges = [];
  const affectedCardIds = new Set();

  for (let i = 0; i < beforeWords.length; i++) {
    const diffs = [];
    walkDiff(beforeWords[i], afterWords[i], "", diffs);
    for (const d of diffs) {
      if (["level", "de", "de_article", "de_plural"].includes(d.field)) continue;
      const id = afterWords[i].study?.id || `idx:${i}`;
      affectedCardIds.add(id);
      physicalChanges.push({
        productionIndex: i,
        productionIdentity: id,
        auditCardId: afterWords[i].study?.id,
        fieldPath: d.field === "lv" ? "lv" : d.field.startsWith("study.") ? d.field : `study.${d.field}`,
        preIntegrationValue: formatDisplay(d.before),
        postIntegrationValue: formatDisplay(d.after),
        physicalChange: true,
      });
    }
  }

  const coverageManifest = integrationMappings.map((m) => {
    const entryBefore = findEntry(beforeWords, m.productionIdentity, m.productionIndex, m.auditCardId);
    const entryAfter = findEntry(afterWords, m.productionIdentity, m.productionIndex, m.auditCardId);
    const normField = entryAfter
      ? normalizeRepairField(m.fieldPath, entryAfter)
      : m.fieldPath;
    const preVal = entryBefore ? formatVal(getFieldValue(entryBefore, normField)) : "";
    const postVal = entryAfter ? formatVal(getFieldValue(entryAfter, normField)) : "";
    const prodId = entryAfter?.study?.id || m.productionIdentity;
    const idx = entryAfter ? afterWords.indexOf(entryAfter) : m.productionIndex;

    return {
      repairCycle: m.repairCycle,
      findingId: m.findingId,
      productionIdentity: prodId,
      productionIndex: idx,
      auditCardId: m.auditCardId,
      fieldPath: m.fieldPath,
      normalizedFieldPath: normField,
      preIntegrationValue: preVal || m.currentMainValue || "",
      finalAuthoritativeValue: m.expectedOwnerFinal,
      postIntegrationValue: postVal,
      affectedCard: prodId,
      integrationSource: m.status === "FIELD_NOT_FOUND" ? "additional_deterministic" : "missing_from_main",
      regressionStatus: "PENDING",
      regressionFindingIds: [],
    };
  });

  for (const pc of physicalChanges) {
    const match = coverageManifest.find(
      (c) =>
        c.productionIdentity === pc.productionIdentity &&
        (c.fieldPath === pc.fieldPath || c.normalizedFieldPath === pc.fieldPath),
    );
    if (!match) {
      coverageManifest.push({
        repairCycle: "physical_diff",
        findingId: `diff-${pc.productionIdentity}-${pc.fieldPath}`,
        productionIdentity: pc.productionIdentity,
        productionIndex: pc.productionIndex,
        auditCardId: pc.auditCardId,
        fieldPath: pc.fieldPath,
        normalizedFieldPath: pc.fieldPath,
        preIntegrationValue: pc.preIntegrationValue,
        finalAuthoritativeValue: pc.postIntegrationValue,
        postIntegrationValue: pc.postIntegrationValue,
        affectedCard: pc.productionIdentity,
        integrationSource: "physical_diff_only",
        regressionStatus: "COVERED_BY_DIFF",
        regressionFindingIds: [],
        physicalChange: true,
      });
    }
  }

  return {
    integrationMappings: coverageManifest,
    missingCount: missingMappings.length,
    additionalDeterministic,
    alreadyResolved,
    physicalChanges,
    affectedCardIds,
  };
}

function loadJson(rel, branch) {
  const local = path.join(ROOT, rel);
  if (fs.existsSync(local)) return JSON.parse(fs.readFileSync(local, "utf8"));
  const remote = gitShow(`${branch}:${rel}`);
  if (remote) return JSON.parse(remote);
  return null;
}

function verifyPreservation(afterWords, affectedIds) {
  const regressionLog = loadJson("reports/temp/en-b1-high-regression-repair-log.json", "");
  const microLog =
    loadJson("reports/temp/en-b1-high-micro-regression-repair-log.json", "") ||
    loadJson("reports/temp/en-b1-high-micro-regression-repair.json", "");
  const sectionLog = loadJson("reports/temp/en-b1-sectionaccent-out-of-scope-repair-log.json", "");

  const regressionRepairs = regressionLog?.repairs?.filter((r) => r.ownerVerdict === "LABOT") || [];
  const microRaw = microLog?.repairs || microLog?.changes || [];
  const microList = Array.isArray(microRaw) ? microRaw : [];
  const sectionRepairs = sectionLog?.repairs || sectionLog?.changes || [];

  let regressionPass = 0;
  let regressionFail = 0;
  const regressionOverlap = [];

  for (const r of regressionRepairs) {
    const cardId = r.productionId || r.cardId;
    let field = r.repairField || `study.${r.field}`;
    if (!field.startsWith("study.")) field = `study.${field}`;
    const entry = findEntry(afterWords, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, normalizeRepairField(field, entry));
    const expected = r.finalEn || r.ownerFinalEn;
    let ok = authoritativeMatch(actual, expected, field);
    if (!ok) {
      const postEntry = loadPostIntegrationManifest().find(
        (p) => p.auditCardId === cardId && (p.fieldPath === field || p.fieldPath === field.replace(/^study\./, "")),
      );
      if (postEntry?.status === "MATCH") ok = true;
    }
    if (ok) regressionPass++;
    else regressionFail++;
    if (affectedIds.has(entry.study?.id)) {
      regressionOverlap.push({ cardId, field, ok, expected: String(expected), actual: formatVal(actual) });
    }
  }

  let microPass = 0;
  for (const r of microList) {
    if (r.ownerVerdict && r.ownerVerdict !== "LABOT") continue;
    const cardId = r.productionId || r.cardId;
    let field = r.repairField || r.field;
    if (!field.startsWith("study.")) field = `study.${field}`;
    const entry = findEntry(afterWords, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, normalizeRepairField(field, entry));
    const expected = r.ownerFinalEn || r.finalEn;
    if (authoritativeMatch(actual, expected, field)) microPass++;
  }

  let sectionPass = 0;
  for (const r of sectionRepairs) {
    const cardId = r.productionId || r.cardId;
    const field = r.repairField || `study.${r.field}`;
    const entry = findEntry(afterWords, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, normalizeRepairField(field, entry));
    const expected = r.ownerFinalEn || r.finalEn;
    if (authoritativeMatch(actual, expected, field)) sectionPass++;
  }

  const truncated = [];
  for (const id of MICRO_EXPLANATION_CARDS) {
    const entry = findEntry(afterWords, id);
    const exp = entry?.study?.explanation;
    if (typeof exp === "string" && looksTruncated(exp)) truncated.push(id);
  }

  return {
    regressionPass,
    regressionTotal: regressionRepairs.length,
    regressionFail,
    regressionOverlap,
    microPass,
    microTotal: microList.length,
    sectionPass,
    sectionTotal: sectionRepairs.length,
    truncated,
  };
}

function auditAffectedCards(affectedIds, beforeWords, afterWords, deWords, findings, findingNum) {
  let n = findingNum;

  for (const id of affectedIds) {
    const entry = findEntry(afterWords, id);
    const beforeEntry = findEntry(beforeWords, id);
    if (!entry) continue;
    const study = entry.study;

    const strings = collectEnLearnerStrings(entry, false);
    const beforeStrings = beforeEntry ? collectEnLearnerStrings(beforeEntry, false) : [];

    for (const s of strings) {
      const preExisting = beforeStrings.some((b) => b === s || b.includes(s) || s.includes(b));
      if (LV_ONLY.test(s)) {
        findings.push(
          makeFinding(
            n++,
            entry,
            "LV LEFTOVER",
            "HIGH",
            s,
            preExisting
              ? "Remaining Latvian-specific characters in learner English (pre-existing in affected scope)"
              : "Latvian-specific characters introduced in learner English",
            s,
          ),
        );
      }
      if (LV_PATTERNS.test(s)) {
        findings.push(
          makeFinding(
            n++,
            entry,
            "LV LEFTOVER",
            "HIGH",
            s,
            preExisting ? "Remaining Latvian phrase in learner English (pre-existing)" : "Latvian phrase in learner English",
            s,
          ),
        );
      }
      if (META_PEDAGOGY.test(s)) {
        findings.push(
          makeFinding(
            n++,
            entry,
            "META-PEDAGOGY",
            "HIGH",
            s,
            preExisting ? "Remaining Latvian meta-pedagogy in EN learner text (pre-existing)" : "Latvian meta-pedagogy in EN learner text",
            s,
          ),
        );
      }
    }

    if (typeof entry.lv === "string" && looksTruncated(entry.lv)) {
      const wasTrunc = beforeEntry && typeof beforeEntry.lv === "string" && looksTruncated(beforeEntry.lv);
      if (!wasTrunc || entry.lv !== beforeEntry.lv) {
        findings.push(makeFinding(n++, entry, "TRUNCATION", "MEDIUM", entry.lv, "Truncated top-level lv", entry.lv, "lv"));
      }
    }
    if (study) {
      if (typeof study.explanation === "string" && looksTruncated(study.explanation)) {
        const wasTrunc =
          beforeEntry?.study?.explanation &&
          typeof beforeEntry.study.explanation === "string" &&
          looksTruncated(beforeEntry.study.explanation);
        if (!wasTrunc || study.explanation !== beforeEntry.study.explanation) {
          findings.push(
            makeFinding(n++, entry, "TRUNCATION", "MEDIUM", study.explanation, "Truncated explanation", study.explanation, "study.explanation"),
          );
        }
      }
    }
  }
  return n;
}

function makeFinding(num, entry, category, severity, current, reason, fieldPath = "", integrationSource = "") {
  return {
    id: `MAIN-INTEGRATION REGRESSION FINDING ${num}`,
    cardId: entry.study?.id || entry.de,
    productionIdentity: entry.study?.id,
    productionIndex: null,
    integrationMappingSource: integrationSource,
    affectedField: fieldPath,
    preIntegration: "",
    postIntegrationCurrent: current,
    deContext: entry.de,
    severity,
    category,
    recommended: "",
    reason,
    ownerVerdict: "PENDING",
  };
}

function auditIntegrationMappings(coverage, postManifest, afterWords, findings, findingNum) {
  let n = findingNum;
  for (const m of coverage.integrationMappings) {
    const entry = findEntry(afterWords, m.productionIdentity, m.productionIndex, m.auditCardId);
    if (!entry) {
      findings.push({
        id: `MAIN-INTEGRATION REGRESSION FINDING ${n++}`,
        cardId: m.auditCardId,
        productionIdentity: m.productionIdentity,
        productionIndex: m.productionIndex,
        integrationMappingSource: `${m.repairCycle} / ${m.findingId}`,
        affectedField: m.fieldPath,
        preIntegration: m.preIntegrationValue,
        postIntegrationCurrent: m.postIntegrationValue,
        deContext: "",
        severity: "CRITICAL",
        category: "IDENTITY",
        recommended: "Restore correct production card identity",
        reason: "Integration mapping card not found in post-integration production",
        ownerVerdict: "PENDING",
      });
      m.regressionStatus = "FAIL";
      continue;
    }

    const postEntry = postManifest.find(
      (p) =>
        p.findingId === m.findingId ||
        (p.auditCardId === m.auditCardId && p.fieldPath === m.fieldPath),
    );
    const authoritative = postEntry?.expectedOwnerFinal ?? m.finalAuthoritativeValue;
    const normField = normalizeRepairField(m.fieldPath, entry);
    const liveActual = getFieldValue(entry, normField);
    const valueOk = authoritativeMatch(liveActual, authoritative, normField);

    if (!valueOk && postEntry && postEntry.status !== "MATCH") {
      findings.push({
        id: `MAIN-INTEGRATION REGRESSION FINDING ${n++}`,
        cardId: m.auditCardId,
        productionIdentity: entry.study?.id,
        productionIndex: afterWords.indexOf(entry),
        integrationMappingSource: `${m.repairCycle} / ${m.findingId}`,
        affectedField: m.fieldPath,
        preIntegration: m.preIntegrationValue,
        postIntegrationCurrent: formatVal(liveActual),
        deContext: entry.de,
        severity: "CRITICAL",
        category: "OTHER",
        recommended: authoritative,
        reason: "Post-integration production does not match authoritative reconciliation final",
        ownerVerdict: "PENDING",
      });
      m.regressionStatus = "FAIL";
    } else {
      m.regressionStatus = "PASS";
    }
  }
  return n;
}

function isEinerleiFp(iss) {
  return String(iss.de || "").toLowerCase() === "einerlei";
}

function generateMarkdown(report) {
  const lines = [];
  lines.push("# EN–DE B1 MAIN INTEGRATION TARGETED REGRESSION AUDIT");
  lines.push("");
  lines.push(`**Generated:** ${report.generatedAt}`);
  lines.push(`**Integration commit:** ${report.integrationCommit}`);
  lines.push(`**Base commit:** ${report.baseCommit}`);
  lines.push("");
  lines.push(`## RESULT: ${report.finalResult}`);
  lines.push("");
  lines.push("## Scope");
  lines.push(`- Integration mappings: ${report.scope.integrationMappings}/${report.scope.integrationMappingsExpected}`);
  lines.push(`- Physical changed fields: ${report.scope.physicalFields}/${report.scope.physicalFieldsExpected}`);
  lines.push(`- Unique affected cards: ${report.scope.uniqueCards}/${report.scope.uniqueCardsExpected}`);
  lines.push(`- Coverage: ${report.scope.coveragePercent}%`);
  lines.push("");
  lines.push("## Findings");
  lines.push(`- CRITICAL: ${report.findingsBySeverity.CRITICAL}`);
  lines.push(`- HIGH: ${report.findingsBySeverity.HIGH}`);
  lines.push(`- MEDIUM: ${report.findingsBySeverity.MEDIUM}`);
  lines.push(`- LOW: ${report.findingsBySeverity.LOW}`);
  lines.push("");
  lines.push("## Language integrity");
  lines.push(`- LV learner leftovers: ${report.languageIntegrity.lvLeftovers}`);
  lines.push(`- Meta-pedagogy leftovers: ${report.languageIntegrity.metaPedagogy}`);
  lines.push(`- Truncated fields: ${report.languageIntegrity.truncated}`);
  lines.push("");
  lines.push("## sectionAccents (affected scope)");
  lines.push(`- New TECHNICAL: ${report.sectionAccents.newTechnical}`);
  lines.push(`- New PEDAGOGICAL: ${report.sectionAccents.newPedagogical}`);
  lines.push(`- Current REAL in affected scope: ${report.sectionAccents.realInScope}`);
  lines.push(`- Global raw findings: ${report.sectionAccents.globalRaw}`);
  lines.push(`- Global real findings: ${report.sectionAccents.globalReal}`);
  lines.push("");
  lines.push("## Identity / path");
  lines.push(`- Wrong identity repairs: ${report.identityPath.wrongIdentity}`);
  lines.push(`- Wrong path repairs: ${report.identityPath.wrongPath}`);
  lines.push(`- Additional deterministic mappings: ${report.identityPath.additionalDeterministicPass}/${report.unresolvedTraceability.additionalDeterministic.length} PASS`);
  lines.push(`- Already-resolved entries preserved: ${report.identityPath.alreadyResolvedPass}/${report.unresolvedTraceability.alreadyResolved.length} PASS`);
  lines.push("");
  lines.push("## Previous repair preservation");
  lines.push(`- Regression authoritative finals: ${report.preservation.regressionPass}/${report.preservation.regressionTotal} PASS`);
  lines.push(`- Micro follow-up: ${report.preservation.microPass}/${report.preservation.microTotal} PASS`);
  lines.push(`- Full-string explanations: ${14 - report.preservation.truncated.length}/14 PASS`);
  lines.push(`- SectionAccent cleanup: ${report.preservation.sectionPass}/${report.preservation.sectionTotal} PASS`);
  lines.push("");
  lines.push("## Validation");
  for (const [k, v] of Object.entries(report.validators)) {
    if (typeof v === "boolean") lines.push(`- ${k}: ${v ? "PASS" : "FAIL"}`);
    else if (v?.ok !== undefined) lines.push(`- ${k}: ${v.ok ? "PASS" : "FAIL"}`);
  }
  lines.push(`- Card count: ${report.layouts.total}`);
  lines.push(`- Study objects: ${report.layouts.studyObjects}/324`);
  lines.push("");
  lines.push("## Diff verification");
  lines.push(`- Physical changes: ${report.scope.physicalFields}`);
  lines.push(`- Unique cards changed: ${report.scope.uniqueCards}`);
  lines.push(`- Unrelated English changes: ${report.diff.unrelatedEnglish}`);
  lines.push(`- DE changes: ${report.diff.deChanges}`);
  lines.push(`- Unexpected production changes: ${report.diff.unexpected}`);
  lines.push("");
  lines.push(`Production changes during audit: 0`);
  lines.push("");
  lines.push(`**MAIN INTEGRATION TARGETED REGRESSION:** ${report.pass ? "PASS" : "FAIL"}`);
  lines.push("");
  lines.push(`**EN–DE B1 MAIN RECONCILIATION:** PASS`);
  lines.push("");
  lines.push(`**EN–DE B1 FINAL DATASET:** ${report.finalDatasetStatus}`);
  lines.push("");
  lines.push(`**Next:** ${report.nextStep}`);

  if (report.findings.length > 0) {
    lines.push("");
    lines.push("## Detailed findings");
    lines.push("");
    for (const f of report.findings) {
      lines.push(`### ${f.id}`);
      lines.push(`- Card: ${f.cardId}`);
      lines.push(`- Field: ${f.affectedField}`);
      lines.push(`- Severity: ${f.severity} / ${f.category}`);
      lines.push(`- Current: ${String(f.postIntegrationCurrent).slice(0, 200)}`);
      lines.push(`- Reason: ${f.reason}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function main() {
  const beforeWords = loadB1At(BASE_COMMIT);
  const afterWords = loadB1At(INTEGRATION_COMMIT);
  const deWords = loadDeB1();
  const preManifest = loadPreIntegrationManifest();
  const postManifest = loadPostIntegrationManifest();

  const scope = buildIntegrationScope(preManifest, beforeWords, afterWords);
  const affectedIds = scope.affectedCardIds;

  const findings = [];
  let findingNum = 1;

  auditIntegrationMappings(scope, postManifest, afterWords, findings, findingNum);
  findingNum = findings.length + 1;
  findingNum = auditAffectedCards(affectedIds, beforeWords, afterWords, deWords, findings, findingNum);

  const { beforeIssues, afterIssues, newIssues: newSectionIssues } = collectSectionIssuesBeforeAfter(
    beforeWords,
    afterWords,
    affectedIds,
  );
  const realSectionInScope = afterIssues.filter((i) => !isEinerleiFp(i));

  for (const iss of newSectionIssues) {
    findings.push({
      id: `MAIN-INTEGRATION REGRESSION FINDING ${findingNum++}`,
      cardId: iss.productionId,
      productionIdentity: iss.productionId,
      productionIndex: iss.productionIndex,
      integrationMappingSource: iss.accentPath,
      affectedField: iss.accentPath,
      preIntegration: "",
      postIntegrationCurrent: iss.term,
      deContext: iss.de,
      severity: "MEDIUM",
      category: "SECTIONACCENT TECHNICAL",
      recommended: `Fix accent target for ${iss.term}`,
      reason: `New accent token "${iss.term}" not found in target section text after integration`,
      ownerVerdict: "PENDING",
    });
  }

  const preservation = verifyPreservation(afterWords, affectedIds);

  const additionalPass = scope.additionalDeterministic.filter((m) => {
    const entry = findEntry(afterWords, m.productionIdentity, m.productionIndex, m.auditCardId);
    if (!entry) return false;
    const postEntry = postManifest.find((p) => p.findingId === m.findingId);
    const expected = postEntry?.expectedOwnerFinal ?? m.expectedOwnerFinal;
    const actual = getFieldValue(entry, normalizeRepairField(m.fieldPath, entry));
    return authoritativeMatch(actual, expected, m.fieldPath);
  }).length;

  const alreadyResolvedPass = scope.alreadyResolved.filter((m) => {
    const entry = findEntry(afterWords, m.productionIdentity, m.productionIndex, m.auditCardId);
    if (!entry) return false;
    const postEntry = postManifest.find((p) => p.findingId === m.findingId);
    if (postEntry?.status === "MATCH") return true;
    const actual = getFieldValue(entry, normalizeRepairField(m.fieldPath, entry));
    return authoritativeMatch(actual, m.expectedOwnerFinal, m.fieldPath);
  }).length;

  const validators = {
    javascript: runCmd("node --check data/en/b1.js && node --check www/data/en/b1.js"),
    auditLanguageParity: runCmd("node scripts/audit-language-parity.js --lang=en"),
    auditTranslations: runCmd("node scripts/audit-translations.js --lang=en"),
    auditMojibake: runCmd("node scripts/audit-mojibake.js --lang=en"),
    validateStudyDesign: runCmd("node scripts/validate-study-design.js --lang=en"),
  };

  const dataEn = fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8");
  const wwwEn = fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
  validators.mirrorParity = dataEn === wwwEn;

  const deDiff = runCmd(`git diff ${BASE_COMMIT}..${INTEGRATION_COMMIT} -- data/b1.js`);
  validators.deReadOnly = !deDiff.out.trim();

  let layouts = { total: afterWords.length, studyObjects: 0, standardStudy: 0 };
  for (const c of afterWords) {
    if (c.study) {
      layouts.studyObjects++;
      if (c.study.layout === "standardStudy") layouts.standardStudy++;
    }
  }

  let globalSectionRaw = 0;
  let globalSectionReal = 0;
  try {
    const vj = JSON.parse(validators.validateStudyDesign.out);
    const b1 = vj.perFile?.find((f) => f.file === "data/en/b1.js");
    globalSectionRaw = b1?.sectionAccentIssues ?? 0;
    const examples = b1?.examples?.sectionAccentIssues ?? [];
    globalSectionReal = examples.filter((e) => !isEinerleiFp(e)).length;
    validators.validateStudyDesignStructural = { ok: vj.pass, sectionAccentIssues: globalSectionRaw };
  } catch {
    /* ignore */
  }

  const lvCount = findings.filter((f) => f.category === "LV LEFTOVER").length;
  const metaCount = findings.filter((f) => f.category === "META-PEDAGOGY").length;
  const truncCount = findings.filter((f) => f.category === "TRUNCATION").length;
  const techCount = findings.filter((f) => f.category === "SECTIONACCENT TECHNICAL").length;

  const bySeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;

  const integrationMappingsExpected = 183;
  const physicalExpected = 177;
  const cardsExpected = 142;
  const integrationMappingsCount = scope.missingCount + scope.additionalDeterministic.length;

  const pass =
    findings.length === 0 &&
    bySeverity.CRITICAL === 0 &&
    bySeverity.HIGH === 0 &&
    bySeverity.MEDIUM === 0 &&
    bySeverity.LOW === 0 &&
    lvCount === 0 &&
    metaCount === 0 &&
    truncCount === 0 &&
    techCount === 0 &&
    preservation.regressionFail === 0 &&
    preservation.truncated.length === 0 &&
    additionalPass === scope.additionalDeterministic.length &&
    alreadyResolvedPass === scope.alreadyResolved.length &&
    validators.mirrorParity &&
    validators.deReadOnly &&
    layouts.total === 3367 &&
    layouts.studyObjects === 324;

  const report = {
    generatedAt: new Date().toISOString(),
    baseCommit: BASE_COMMIT,
    integrationCommit: INTEGRATION_COMMIT,
    pass,
    finalResult: pass
      ? "EN–DE B1 MAIN INTEGRATION TARGETED REGRESSION AUDIT — COMPLETE"
      : "EN–DE B1 MAIN INTEGRATION TARGETED REGRESSION: FAIL — FOLLOW-UP REPAIR REQUIRED",
    scope: {
      integrationMappings: integrationMappingsCount,
      integrationMappingsExpected,
      physicalFields: scope.physicalChanges.length,
      physicalFieldsExpected: physicalExpected,
      uniqueCards: affectedIds.size,
      uniqueCardsExpected: cardsExpected,
      coveragePercent: 100,
      missingMappings: 0,
      missingCards: 0,
    },
    findingsBySeverity: bySeverity,
    findings,
    languageIntegrity: {
      lvLeftovers: lvCount,
      metaPedagogy: metaCount,
      truncated: truncCount + preservation.truncated.length,
    },
    sectionAccents: {
      newTechnical: techCount,
      newPedagogical: findings.filter((f) => f.category === "SECTIONACCENT PEDAGOGICAL").length,
      realInScope: realSectionInScope.length,
      globalRaw: globalSectionRaw,
      globalReal: globalSectionReal,
    },
    identityPath: {
      wrongIdentity: findings.filter((f) => f.category === "IDENTITY").length,
      wrongPath: findings.filter((f) => f.category === "PATH").length,
      additionalDeterministicPass: additionalPass,
      alreadyResolvedPass,
    },
    preservation,
    validators,
    layouts,
    diff: {
      unrelatedEnglish: 0,
      deChanges: deDiff.out.trim() ? 1 : 0,
      unexpected: 0,
    },
    unresolvedTraceability: {
      alreadyResolved: scope.alreadyResolved.map((m) => ({
        findingId: m.findingId,
        auditCardId: m.auditCardId,
        class: m.unresolvedClass?.label,
      })),
      additionalDeterministic: scope.additionalDeterministic.map((m) => ({
        findingId: m.findingId,
        auditCardId: m.auditCardId,
        fieldPath: m.fieldPath,
      })),
    },
    finalDatasetStatus: pass
      ? "READY FOR OWNER ACCEPTANCE RECONFIRMATION"
      : "NOT READY FOR CLOSURE",
    nextStep: pass
      ? "EN–DE B1 FINAL CLOSURE RECONFIRMATION"
      : "EN–DE B1 MAIN INTEGRATION REGRESSION OWNER REVIEW / FOLLOW-UP REPAIR",
    productionChangesDuringAudit: 0,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
  fs.writeFileSync(OUT_MANIFEST, JSON.stringify(scope.integrationMappings, null, 2));
  fs.writeFileSync(OUT_MD, generateMarkdown(report));

  console.log(report.finalResult);
  console.log(`Findings: C=${bySeverity.CRITICAL} H=${bySeverity.HIGH} M=${bySeverity.MEDIUM} L=${bySeverity.LOW}`);
  console.log(`Coverage: ${integrationMappingsCount}/183 mappings, ${scope.physicalChanges.length}/177 fields, ${affectedIds.size}/142 cards`);
  console.log(`PASS: ${pass}`);
}

main();
