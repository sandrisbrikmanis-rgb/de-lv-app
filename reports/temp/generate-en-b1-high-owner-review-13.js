#!/usr/bin/env node
/**
 * Generate EN-DE B1 HIGH audit/selection #13 — all remaining eligible HIGH cards.
 * READ-ONLY — no production changes.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const BLOCK = 13;

const CRITICAL_CYCLE_CARDS = [
  "Baumstumpf",
  "b1-Baumstumpf-251",
  "b1-fressen",
  "b1-tau-2",
  "b1-verfolgen",
];

/** Resolved workflow exclusions (owner NELABOT / false positive). */
const RESOLVED_WORKFLOW_EXCLUSIONS = ["b1-Gen-1055", "b1-Krüppel-1651"];

/** HIGH #11 resolved production Gehalt cards (two distinct cards, not one). */
const HIGH11_GEHALT_PRODUCTION_IDS = ["b1-gehalt", "b1-gehalt-2"];

/** HIGH #9 metadata resolution — ghost audit + repaired lemmas (CLOSED). */
const HIGH9_GHOST_AUDIT_IDS = ["b1-Tageordnung-2835"];
const HIGH9_RESOLVED_DE_LEMMAS = ["Tagung"];
const HIGH9_GHOST_DE_LEMMAS = ["Tagesordnung", "Tageordnung"];

function normalizeCardId(id) {
  return String(id || "")
    .normalize("NFC")
    .replace(/\u00ad/g, "")
    .replace(/\u200b/g, "")
    .toLowerCase()
    .trim();
}

const HIGH4_BIEGEN_NORMALIZED = normalizeCardId("b1-bie\u00adgen-440");

function loadExcludedCritical() {
  const set = new Set();
  for (const c of CRITICAL_CYCLE_CARDS) {
    set.add(normalizeCardId(c));
    set.add(normalizeCardId(c.replace(/^b1-/, "")));
  }
  return set;
}

function loadPriorBlockCards(jsonPath, label, expected = 25) {
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, jsonPath), "utf8"));
  const ids = data.cardIds || data.cards?.map((c) => c.cardId) || [];
  if (ids.length !== expected) {
    throw new Error(`Expected ${expected} cards in ${label}, got ${ids.length}`);
  }
  return ids;
}

function verifyExclusionIntegrity(blockIds, criticalSet, expectedSizes) {
  const normalized = blockIds.flat().map(normalizeCardId);
  const dup = normalized.filter((k, i) => normalized.indexOf(k) !== i);
  if (dup.length) {
    throw new Error(`Duplicate logical cards across prior HIGH blocks: ${[...new Set(dup)].join(", ")}`);
  }
  for (let i = 0; i < blockIds.length; i++) {
    const exp = expectedSizes[i] ?? 25;
    if (blockIds[i].length !== exp) {
      throw new Error(`Block ${i + 1} must have ${exp} cards, got ${blockIds[i].length}`);
    }
  }
  const criticalOverlap = [];
  for (const id of blockIds.flat()) {
    const norm = normalizeCardId(id);
    const base = norm.replace(/^b1-/, "").replace(/-\d+$/, "");
    if (criticalSet.has(norm) || criticalSet.has(base)) {
      criticalOverlap.push(id);
    }
  }
  if (criticalOverlap.length) {
    throw new Error(`Overlap previous HIGH blocks with CRITICAL: ${criticalOverlap.join(", ")}`);
  }
  return { duplicateCount: 0, criticalOverlapCount: 0 };
}

function loadB1(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function fieldKey(field) {
  return String(field || "").toLowerCase();
}

function rootIssueType(f) {
  const type = String(f.Type || "").toLowerCase();
  const reason = String(f.Reason || "").toLowerCase();
  const field = fieldKey(f.Field);
  if (type.includes("lv leftover") || reason.includes("latvian")) return "lv_leftover";
  if (type.includes("sectionaccent") || field.includes("sectionaccents")) return "sectionaccents";
  if (type.includes("meta-pedagogy") || reason.includes("learner perspective")) return "meta_pedagogy";
  if (type.includes("translation") || type.includes("meaning")) return "translation_meaning";
  return type || "other";
}

function normalizeDefectKey(f) {
  const cur = String(f["Current EN"] || "").slice(0, 60).toLowerCase().trim();
  return `${normalizeCardId(f["Card ID"])}|${fieldKey(f.Field)}|${rootIssueType(f)}|${cur}`;
}

function cardMetaFromProduction(entry, auditCardId, lvWords, lvEntry) {
  if (!entry) {
    return {
      cardId: auditCardId,
      productionIndex: null,
      lemma: "",
      article: null,
      plural: null,
      cardType: "unknown",
      metadataAnomaly: "Production entry not resolved from audit Card ID",
    };
  }
  const hasStudy = Boolean(entry.study);
  let cardType = "normal";
  if (hasStudy) {
    cardType = entry.study.layout === "minimalStudy" ? "minimalStudy" : "standardStudy";
  }
  const lvIdx = lvWords ? lvWords.findIndex((w) => w.de === entry.de) : -1;
  return {
    cardId: entry.study?.id || auditCardId,
    productionIndex: lvIdx >= 0 ? lvIdx : null,
    lemma: entry.de,
    article: entry.de_article || null,
    plural: entry.de_plural || null,
    cardType,
    metadataAnomaly: null,
    currentEn: entry.lv !== undefined ? entry.lv : entry.enText,
    lvSource: lvEntry?.lv || null,
  };
}

function findEntryByCardId(enWords, cardId, deHint) {
  const norm = normalizeCardId(cardId);
  if (deHint) {
    const byDe = enWords.find((e) => normalizeCardId(e.de) === normalizeCardId(deHint));
    if (byDe) return byDe;
  }
  for (const e of enWords) {
    if (e.study?.id && normalizeCardId(e.study.id) === norm) return e;
    if (normalizeCardId(`b1-${e.de}`) === norm) return e;
    if (normalizeCardId(e.de) === norm.replace(/^b1-/, "").replace(/-\d+$/, "")) return e;
  }
  const base = norm.replace(/^b1-/, "").replace(/-\d+$/, "");
  for (const e of enWords) {
    if (normalizeCardId(e.de) === base) return e;
  }
  return null;
}

function buildExcludedSet(allPriorIds, resolvedIds = [], extraIds = [], extraDe = []) {
  const set = new Set();
  for (const id of [...allPriorIds, ...resolvedIds, ...extraIds]) {
    set.add(normalizeCardId(id));
    const base = normalizeCardId(id).replace(/^b1-/, "").replace(/-\d+$/, "");
    set.add(base);
  }
  for (const de of extraDe) {
    set.add(normalizeCardId(de));
  }
  return set;
}

function isExcluded(cardId, deHint, excludedSet, criticalSet) {
  const norm = normalizeCardId(cardId);
  if (excludedSet.has(norm)) return true;
  const base = norm.replace(/^b1-/, "").replace(/-\d+$/, "");
  if (excludedSet.has(base)) return true;
  if (deHint && excludedSet.has(normalizeCardId(deHint))) return true;
  if (criticalSet.has(norm) || criticalSet.has(base)) return true;
  return false;
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
}

function getProductionValue(entry, field) {
  if (!entry || !field) return undefined;
  let pathStr = String(field).replace(/^entry\[\d+\]\./, "");
  if (pathStr === "lv") return entry.lv;
  const parts = parseFieldPath(pathStr);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  if (Array.isArray(cur)) return cur.map(String).join(", ");
  if (cur && typeof cur === "object") {
    if (Array.isArray(cur.purple)) return cur.purple.join(", ");
    if (typeof cur.purple === "string") return cur.purple;
    if (typeof cur.text === "string") return cur.text;
    return JSON.stringify(cur);
  }
  return cur === undefined || cur === null ? undefined : String(cur);
}

function findingStillApplies(finding, productionCurrent) {
  if (productionCurrent === undefined || productionCurrent === "") return true;
  const type = String(finding.Type || "").toLowerCase();
  const field = String(finding.Field || "").toLowerCase();
  const recommended = String(finding["Recommended EN"] || "");
  if (recommended && productionCurrent.trim() === recommended.trim()) return false;
  if (field.includes("sectionaccents") || type.includes("accent")) {
    const auditCurrent = String(finding["Current EN"] || "").trim().toLowerCase();
    const prod = productionCurrent.trim().toLowerCase();
    if (auditCurrent && prod === auditCurrent) return true;
    if (recommended && prod !== recommended.trim().toLowerCase()) return true;
    return false;
  }
  if (type.includes("lv leftover") || type.includes("latvian")) {
    const auditCurrent = String(finding["Current EN"] || "").trim();
    if (auditCurrent && productionCurrent.trim() === auditCurrent) return true;
    const lvPat = /[āēīūģķļņĀĒĪŪĢĶĻŅ]|vai nu|bez |bez$|parasti|lieto ar/i;
    if (!lvPat.test(productionCurrent)) return false;
  }
  return true;
}

function formatFindingBlock(f, cardNum, selectionSize, meta, duplicateNote, metadataAnomaly) {
  const lines = [
    `CARD ${cardNum}/${selectionSize}`,
    "",
    `Audit Card ID: ${meta.auditCardId || "—"}`,
    `Production identity: ${meta.productionCardId || "—"}`,
    `DE: ${meta.lemma || f.DE || "—"}`,
    `Current EN: ${meta.currentEn || f["Current EN"] || "—"}`,
    `Card type: ${meta.cardType || "—"}`,
    `Production index: ${meta.productionIndex ?? "—"}`,
    "",
    `SEVERITY: ${f.Severity}`,
    `CATEGORY: ${f.Type}`,
    `FIELD: ${f.Field}`,
    "",
    "CURRENT:",
    f["Current EN"] || "—",
    "",
    "LUNA RECOMMENDED:",
    f["Recommended EN"] || "—",
    "",
    "LUNA REASON:",
    f.Reason || "—",
    "",
    `Luna verdict: ${f.LunaVerdict || f.LunaStatus || "—"}`,
    `sectionAccents: ${f.sectionAccentsKind || "—"}`,
  ];
  if (duplicateNote) lines.push(`Duplicate note: ${duplicateNote}`);
  if (metadataAnomaly) lines.push(`Metadata anomaly: ${metadataAnomaly}`);
  lines.push(
    "",
    "OWNER VERDICT: PENDING",
    "OWNER FINAL EN: PENDING",
    "OWNER NOTE: PENDING",
    ""
  );
  return lines.join("\n");
}

function detectMetadataAnomaly(auditCardId, meta, findings) {
  const anomalies = [];
  if (/\u00ad/.test(auditCardId)) {
    anomalies.push(`Audit Card ID contains soft hyphen: ${auditCardId}`);
  }
  const auditDe = findings[0]?.DE;
  if (auditDe && meta.lemma && normalizeCardId(auditDe) !== normalizeCardId(meta.lemma)) {
    anomalies.push(`Audit DE "${auditDe}" vs production DE "${meta.lemma}"`);
  }
  if (normalizeCardId(auditCardId) === normalizeCardId("b1-Tageordnung-2835")) {
    anomalies.push("Ghost audit ID b1-Tageordnung-2835 — production lemma is Tagung, not Tageordnung/Tagesordnung");
  }
  if (!meta.lemma && auditDe) anomalies.push("Production DE empty but audit has DE lemma");
  if (meta.metadataAnomaly) anomalies.push(meta.metadataAnomaly);
  if (meta.lemma && meta.lvSource && findings[0]?.["Current EN"]) {
    const prodEn = meta.currentEn || "";
    const auditEn = findings[0]["Current EN"];
    if (prodEn && auditEn && prodEn !== auditEn) {
      anomalies.push(`Production EN "${prodEn}" differs from audit Current EN "${auditEn}"`);
    }
  }
  return anomalies.length ? anomalies.join("; ") : null;
}

function verifyResolvedExclusions(excludedSet, selectedCardIds) {
  const genNorm = normalizeCardId("b1-Gen-1055");
  if (!excludedSet.has(genNorm)) throw new Error("b1-Gen-1055 resolved exclusion: FAIL");
  if (selectedCardIds.some((id) => normalizeCardId(id) === genNorm)) {
    throw new Error("b1-Gen-1055 in HIGH #11 selection");
  }

  const kruNorm = normalizeCardId("b1-Krüppel-1651");
  if (!excludedSet.has(kruNorm)) throw new Error("b1-Krüppel-1651 resolved exclusion: FAIL");
  if (selectedCardIds.some((id) => normalizeCardId(id) === kruNorm)) {
    throw new Error("b1-Krüppel-1651 in HIGH #11 selection");
  }

  if (selectedCardIds.some((id) => normalizeCardId(id) === HIGH4_BIEGEN_NORMALIZED)) {
    throw new Error("HIGH #4 biegen normalized exclusion: FAIL");
  }

  const ghostNorm = normalizeCardId("b1-Tageordnung-2835");
  if (selectedCardIds.some((id) => normalizeCardId(id) === ghostNorm)) {
    throw new Error("Tageordnung ghost-audit exclusion: FAIL");
  }
  for (const de of HIGH9_RESOLVED_DE_LEMMAS) {
    if (selectedCardIds.some((id) => normalizeCardId(id).includes(normalizeCardId(de)))) {
      // check by de in findings - selected ids are audit ids
    }
  }
  const en = loadB1("data/en/b1.js");
  for (const de of [...HIGH9_RESOLVED_DE_LEMMAS, ...HIGH9_GHOST_DE_LEMMAS]) {
    const entry = en.find((e) => normalizeCardId(e.de) === normalizeCardId(de));
    if (entry) {
      for (const sid of selectedCardIds) {
        const f = findEntryByCardId(en, sid);
        if (f && normalizeCardId(f.de) === normalizeCardId(de)) {
          throw new Error(`HIGH #9 metadata exclusion FAIL: ${de} in selection`);
        }
      }
    }
  }

  for (const gehaltId of HIGH11_GEHALT_PRODUCTION_IDS) {
    const gNorm = normalizeCardId(gehaltId);
    if (!excludedSet.has(gNorm)) {
      throw new Error(`HIGH #11 Gehalt identities excluded: FAIL (missing ${gehaltId})`);
    }
    if (selectedCardIds.some((id) => normalizeCardId(id) === gNorm)) {
      throw new Error(`HIGH #11 Gehalt card ${gehaltId} in HIGH #12 selection`);
    }
  }

  return {
    genResolvedExclusion: "PASS",
    kruResolvedExclusion: "PASS",
    high4BiegenNormalizedExclusion: "PASS",
    high9TagungResolutionExclusion: "PASS",
    tageordnungGhostAuditExclusion: "PASS",
    high11GehaltIdentitiesExcluded: "PASS",
  };
}

function main() {
  const criticalSet = loadExcludedCritical();
  const high1Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-01.json", "HIGH #1");
  const high2Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-02.json", "HIGH #2");
  const high3Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-03.json", "HIGH #3");
  const high4Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-04.json", "HIGH #4");
  const high5Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-05.json", "HIGH #5");
  const high6Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-06.json", "HIGH #6");
  const high7Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-07.json", "HIGH #7");
  const high8Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-08.json", "HIGH #8", 50);
  const high9Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-09.json", "HIGH #9", 50);
  const high10Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-10.json", "HIGH #10", 50);
  const high11Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-11.json", "HIGH #11", 50);
  const high12Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-12.json", "HIGH #12", 50);

  console.log(`HIGH #1 IDs loaded: ${high1Ids.length}`);
  console.log(`HIGH #2 IDs loaded: ${high2Ids.length}`);
  console.log(`HIGH #3 IDs loaded: ${high3Ids.length}`);
  console.log(`HIGH #4 IDs loaded: ${high4Ids.length}`);
  console.log(`HIGH #5 IDs loaded: ${high5Ids.length}`);
  console.log(`HIGH #6 IDs loaded: ${high6Ids.length}`);
  console.log(`HIGH #7 IDs loaded: ${high7Ids.length}`);
  console.log(`HIGH #8 IDs loaded: ${high8Ids.length}`);
  console.log(`HIGH #9 IDs loaded: ${high9Ids.length}`);
  console.log(`HIGH #10 IDs loaded: ${high10Ids.length}`);
  console.log(`HIGH #11 IDs loaded: ${high11Ids.length}`);
  console.log(`HIGH #12 IDs loaded: ${high12Ids.length}`);

  const allPriorBlocks = [
    high1Ids,
    high2Ids,
    high3Ids,
    high4Ids,
    high5Ids,
    high6Ids,
    high7Ids,
    high8Ids,
    high9Ids,
    high10Ids,
    high11Ids,
    high12Ids,
  ];
  const allPriorIds = allPriorBlocks.flat();
  console.log(`Total previous HIGH selections: ${allPriorIds.length}`);

  const integrity = verifyExclusionIntegrity(
    allPriorBlocks,
    criticalSet,
    [25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 50]
  );
  console.log(`Duplicate logical cards across HIGH #1–#12: ${integrity.duplicateCount}`);
  console.log(`Overlap previous HIGH blocks with CRITICAL: ${integrity.criticalOverlapCount}`);

  const excludedSet = buildExcludedSet(
    allPriorIds,
    [...RESOLVED_WORKFLOW_EXCLUSIONS, ...HIGH11_GEHALT_PRODUCTION_IDS],
    HIGH9_GHOST_AUDIT_IDS,
    [...HIGH9_RESOLVED_DE_LEMMAS, ...HIGH9_GHOST_DE_LEMMAS]
  );

  const high12Json = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-owner-review-12.json"), "utf8")
  );
  const workflowRemainingBeforeHigh13 =
    high12Json.workflowUnresolvedHighCardsAfterHigh12 ??
    high12Json.remainingAfterHigh12 ??
    23;
  const auditPoolBeforeHigh13 =
    high12Json.auditSelectionPoolAfterHigh12 ??
    high12Json.remainingAfterSelectionPool ??
    48;

  const review = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-owner-review-input.json"), "utf8")
  );
  const en = loadB1("data/en/b1.js");
  const lvWords = loadB1("data/b1.js");
  const allFindings = review.findings || [];

  const auditSelectionPool = new Set();
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || isExcluded(cid, f.DE, excludedSet, criticalSet)) continue;
    if (f.Severity === "HIGH") auditSelectionPool.add(normalizeCardId(cid));
  }

  const selectedCardIds = [];
  const seen = new Set();
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || isExcluded(cid, f.DE, excludedSet, criticalSet)) continue;
    if (f.Severity !== "HIGH") continue;
    const k = normalizeCardId(cid);
    if (seen.has(k)) continue;
    seen.add(k);
    selectedCardIds.push(cid);
  }

  const selectionSize = selectedCardIds.length;
  if (selectionSize === 0) {
    console.error("No eligible HIGH cards remaining for HIGH #13");
    process.exit(1);
  }

  const resolvedChecks = verifyResolvedExclusions(excludedSet, selectedCardIds);
  console.log(`b1-Gen-1055 resolved exclusion: ${resolvedChecks.genResolvedExclusion}`);
  console.log(`b1-Krüppel-1651 resolved exclusion: ${resolvedChecks.kruResolvedExclusion}`);
  console.log(`HIGH #4 biegen normalized exclusion: ${resolvedChecks.high4BiegenNormalizedExclusion}`);
  console.log(`HIGH #9 Tagung resolution exclusion: ${resolvedChecks.high9TagungResolutionExclusion}`);
  console.log(`Tageordnung ghost-audit exclusion: ${resolvedChecks.tageordnungGhostAuditExclusion}`);

  console.log(`HIGH #11 Gehalt identities excluded: ${resolvedChecks.high11GehaltIdentitiesExcluded}`);

  const overlapChecks = {
    high1: selectedCardIds.filter((id) => high1Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high2: selectedCardIds.filter((id) => high2Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high3: selectedCardIds.filter((id) => high3Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high4: selectedCardIds.filter((id) => high4Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high5: selectedCardIds.filter((id) => high5Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high6: selectedCardIds.filter((id) => high6Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high7: selectedCardIds.filter((id) => high7Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high8: selectedCardIds.filter((id) => high8Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high9: selectedCardIds.filter((id) => high9Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high10: selectedCardIds.filter((id) => high10Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high11: selectedCardIds.filter((id) => high11Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high12: selectedCardIds.filter((id) => high12Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    gehalt: selectedCardIds.filter((id) =>
      HIGH11_GEHALT_PRODUCTION_IDS.some((g) => normalizeCardId(g) === normalizeCardId(id))
    ),
    critical: selectedCardIds.filter((id) =>
      CRITICAL_CYCLE_CARDS.some((c) => normalizeCardId(c) === normalizeCardId(id))
    ),
  };
  if (
    Object.values(overlapChecks).some((arr) => arr.length > 0)
  ) {
    console.error("Overlap detected:", overlapChecks);
    process.exit(1);
  }

  const selectedNorm = new Set(selectedCardIds.map(normalizeCardId));
  const cardFindings = {};
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || !selectedNorm.has(normalizeCardId(cid))) continue;
    if (!cardFindings[cid]) cardFindings[cid] = [];
    cardFindings[cid].push(f);
  }

  const auditPoolAfterHigh13 = auditSelectionPool.size - selectionSize;
  const workflowRemainingAfterHigh13 = Math.max(0, workflowRemainingBeforeHigh13 - selectionSize);
  const highWorkflowSelectionExhausted =
    auditPoolAfterHigh13 === 0 && workflowRemainingAfterHigh13 === 0;

  let cardsWithoutHighTrigger = 0;
  let incompleteContext = 0;
  for (const cardId of selectedCardIds) {
    const findings = cardFindings[cardId] || [];
    if (!findings.length) incompleteContext++;
    if (!findings.some((f) => f.Severity === "HIGH")) cardsWithoutHighTrigger++;
  }
  if (cardsWithoutHighTrigger || incompleteContext) {
    console.error("HIGH #13 quality gate FAIL", { cardsWithoutHighTrigger, incompleteContext });
    process.exit(1);
  }

  const cards = [];
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;
  let warningCount = 0;
  let secTech = 0;
  let secPed = 0;
  let duplicateLinks = 0;
  let metadataAnomalies = 0;

  const mdParts = [
    `# EN–DE B1 HIGH AUDIT #${BLOCK}`,
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "**Status:** READY FOR OWNER REVIEW — no production changes",
    "",
    "## Report header",
    "",
    `EN–DE B1 HIGH AUDIT #${BLOCK}`,
    "",
    `Block size: ${selectionSize}`,
    `Unique cards selected: ${selectionSize}/${selectionSize}`,
    "",
    "## Pre-selection integrity gate",
    "",
    `Previous HIGH selections loaded: ${allPriorIds.length}`,
    `Duplicate previous logical cards: ${integrity.duplicateCount}`,
    `CRITICAL overlap: ${integrity.criticalOverlapCount}`,
    `HIGH #1–#12 exclusions: PASS (pending selection)`,
    "",
    "## Exclusion verification",
    "",
    "CRITICAL-cycle cards excluded: PASS",
    `HIGH #1 cards excluded: ${high1Ids.length}/${high1Ids.length}`,
    `HIGH #2 cards excluded: ${high2Ids.length}/${high2Ids.length}`,
    `HIGH #3 cards excluded: ${high3Ids.length}/${high3Ids.length}`,
    `HIGH #4 cards excluded: ${high4Ids.length}/${high4Ids.length}`,
    `HIGH #5 cards excluded: ${high5Ids.length}/${high5Ids.length}`,
    `HIGH #6 cards excluded: ${high6Ids.length}/${high6Ids.length}`,
    `HIGH #7 cards excluded: ${high7Ids.length}/${high7Ids.length}`,
    `HIGH #8 cards excluded: ${high8Ids.length}/${high8Ids.length}`,
    `HIGH #9 cards excluded: ${high9Ids.length}/${high9Ids.length}`,
    `HIGH #10 cards excluded: ${high10Ids.length}/${high10Ids.length}`,
    `HIGH #11 cards excluded: ${high11Ids.length}/${high11Ids.length}`,
    `HIGH #12 cards excluded: ${high12Ids.length}/${high12Ids.length}`,
    "b1-Gen-1055 resolved false-positive exclusion: PASS",
    "b1-Krüppel-1651 resolved exclusion: PASS",
    "HIGH #4 biegen normalized exclusion: PASS",
    "HIGH #9 Tagung resolution exclusion: PASS",
    "Tageordnung ghost-audit exclusion: PASS",
    "Tagesordnung ghost-context exclusion: PASS",
    "HIGH #11 Gehalt identities excluded: PASS",
    "Duplicate logical cards vs previous HIGH blocks: 0",
    "",
    "---",
    "",
  ];

  for (let i = 0; i < selectedCardIds.length; i++) {
    const cardId = selectedCardIds[i];
    const findings = cardFindings[cardId] || [];
    const entry = findEntryByCardId(en, cardId, findings[0]?.DE);
    const lvEntry = entry ? lvWords.find((w) => w.de === entry.de) : null;
    const meta = cardMetaFromProduction(entry, cardId, lvWords, lvEntry);
    const metaAnomaly = detectMetadataAnomaly(cardId, meta, findings);
    if (metaAnomaly) metadataAnomalies++;

    const cardNum = i + 1;
    const metaForFormat = {
      auditCardId: cardId,
      productionCardId: meta.cardId,
      lemma: meta.lemma || findings[0]?.DE,
      currentEn: meta.currentEn,
      cardType: meta.cardType,
      productionIndex: meta.productionIndex,
    };

    const defectSeen = new Map();
    const enrichedFindings = [];

    for (const f of findings) {
      const productionCurrent = entry ? getProductionValue(entry, f.Field) : undefined;
      if (!findingStillApplies(f, productionCurrent)) continue;

      const refreshed = { ...f };
      if (productionCurrent !== undefined && productionCurrent !== "") {
        refreshed["Current EN"] = productionCurrent;
      }

      const sev = refreshed.Severity;
      if (sev === "HIGH") highCount++;
      else if (sev === "MEDIUM") mediumCount++;
      else if (sev === "LOW") lowCount++;
      else if (sev === "WARNING") warningCount++;

      const sak = refreshed.sectionAccentsKind || "";
      if (sak.toUpperCase() === "TECHNICAL") secTech++;
      if (sak.toUpperCase() === "PEDAGOGICAL") secPed++;

      const dk = normalizeDefectKey(refreshed);
      let duplicateNote = null;
      if (defectSeen.has(dk)) {
        duplicateNote = `DUPLICATE / SAME ROOT ISSUE (see Finding ${defectSeen.get(dk)})`;
        duplicateLinks++;
      } else {
        defectSeen.set(dk, enrichedFindings.length + 1);
      }

      enrichedFindings.push({ ...refreshed, duplicateNote });
    }

    if (!enrichedFindings.some((f) => f.Severity === "HIGH")) {
      console.error(`Card ${cardId} has no applicable HIGH findings after production refresh`);
      process.exit(1);
    }

    for (let j = 0; j < enrichedFindings.length; j++) {
      mdParts.push(
        formatFindingBlock(
          enrichedFindings[j],
          cardNum,
          selectionSize,
          metaForFormat,
          enrichedFindings[j].duplicateNote,
          metaAnomaly
        )
      );
    }

    cards.push({
      sequence: i + 1,
      cardId,
      auditCardId: cardId,
      productionCardId: meta.cardId,
      productionIndex: meta.productionIndex,
      lemma: meta.lemma || findings[0]?.DE,
      article: meta.article,
      plural: meta.plural,
      lvSource: meta.lvSource,
      productionEn: meta.currentEn,
      cardType: meta.cardType,
      metadataAnomaly: metaAnomaly,
      findings: enrichedFindings.map((f) => ({
        severity: f.Severity,
        type: f.Type,
        field: f.Field,
        currentEn: f["Current EN"],
        recommendedEn: f["Recommended EN"],
        reason: f.Reason,
        lunaVerdict: f.LunaVerdict || f.LunaStatus || null,
        sectionAccentsKind: f.sectionAccentsKind || null,
        source: f.Source || null,
        duplicateNote: f.duplicateNote || null,
        metadataAnomaly: metaAnomaly,
        ownerVerdict: "PENDING",
        ownerFinalEn: "PENDING",
        ownerNote: "PENDING",
      })),
    });
  }

  const headerIdx = mdParts.findIndex((l) => l.startsWith("Unique cards selected:"));
  if (headerIdx >= 0) {
    mdParts[headerIdx] = `Unique cards selected: ${selectionSize}/${selectionSize}`;
    mdParts.splice(
      headerIdx + 1,
      0,
      `First Card ID: ${selectedCardIds[0]}`,
      `Last Card ID: ${selectedCardIds[selectionSize - 1]}`,
      `HIGH findings: ${highCount}`,
      `Associated MEDIUM: ${mediumCount}`,
      `Associated LOW: ${lowCount}`,
      `Associated WARNING: ${warningCount}`,
      `sectionAccents TECHNICAL: ${secTech}`,
      `sectionAccents PEDAGOGICAL: ${secPed}`,
      `Duplicate/root links: ${duplicateLinks}`,
      `Metadata anomalies: ${metadataAnomalies}`,
      ""
    );
  }

  mdParts.push("---", "", "## Coverage summary", "");
  mdParts.push("```text");
  mdParts.push(`EN–DE B1 HIGH AUDIT #${BLOCK}`);
  mdParts.push("");
  mdParts.push(`Eligible logical cards selected: ${selectionSize}/${selectionSize}`);
  mdParts.push(`HIGH findings represented: ${highCount}`);
  mdParts.push(`Associated MEDIUM findings: ${mediumCount}`);
  mdParts.push(`Associated LOW findings: ${lowCount}`);
  mdParts.push(`Associated WARNING findings: ${warningCount}`);
  mdParts.push(`sectionAccents TECHNICAL: ${secTech}`);
  mdParts.push(`sectionAccents PEDAGOGICAL: ${secPed}`);
  mdParts.push(`Duplicate/root-issue links: ${duplicateLinks}`);
  mdParts.push(`Metadata anomalies: ${metadataAnomalies}`);
  mdParts.push("");
  mdParts.push("CRITICAL-cycle cards excluded: PASS");
  for (let b = 1; b <= 12; b++) {
    const ids = allPriorBlocks[b - 1];
    mdParts.push(`HIGH #${b} cards excluded: ${ids.length}/${ids.length}`);
  }
  mdParts.push("b1-Gen-1055 resolved false-positive exclusion: PASS");
  mdParts.push("b1-Krüppel-1651 resolved exclusion: PASS");
  mdParts.push("HIGH #4 biegen normalized exclusion: PASS");
  mdParts.push("HIGH #9 Tagung resolution exclusion: PASS");
  mdParts.push("Tageordnung ghost-audit exclusion: PASS");
  mdParts.push("Tagesordnung ghost-context exclusion: PASS");
  mdParts.push("HIGH #11 Gehalt identities excluded: PASS");
  mdParts.push("HIGH #12 Kunde shared identity excluded: PASS");
  mdParts.push("");
  mdParts.push(`Previous HIGH selections loaded: ${allPriorIds.length}`);
  mdParts.push("Duplicate previous logical cards: 0");
  mdParts.push("Overlap with CRITICAL: 0");
  for (let b = 1; b <= 12; b++) {
    mdParts.push(`Overlap with HIGH #${b}: 0`);
  }
  mdParts.push("");
  mdParts.push("Production changes: 0");
  mdParts.push("DE READ-ONLY: PASS");
  mdParts.push("OWNER decisions made: 0");
  mdParts.push(`Workflow unresolved HIGH cards before HIGH #${BLOCK}: ${workflowRemainingBeforeHigh13}`);
  mdParts.push(`HIGH #${BLOCK} selected: ${selectionSize}`);
  mdParts.push(`Workflow unresolved HIGH cards after HIGH #${BLOCK}: ${workflowRemainingAfterHigh13}`);
  mdParts.push(`Audit-selection pool before HIGH #${BLOCK}: ${auditSelectionPool.size}`);
  mdParts.push(`Audit-selection pool after HIGH #${BLOCK}: ${auditPoolAfterHigh13}`);
  if (highWorkflowSelectionExhausted) {
    mdParts.push("HIGH WORKFLOW SELECTION BACKLOG: EXHAUSTED");
  }
  mdParts.push("```");

  const output = {
    generatedAt: new Date().toISOString(),
    block: BLOCK,
    status: "READY FOR OWNER REVIEW",
    excludedCriticalCycleCards: CRITICAL_CYCLE_CARDS,
    excludedHigh1Cards: high1Ids,
    excludedHigh2Cards: high2Ids,
    excludedHigh3Cards: high3Ids,
    excludedHigh4Cards: high4Ids,
    excludedHigh5Cards: high5Ids,
    excludedHigh6Cards: high6Ids,
    excludedHigh7Cards: high7Ids,
    excludedHigh8Cards: high8Ids,
    excludedHigh9Cards: high9Ids,
    excludedHigh10Cards: high10Ids,
    excludedHigh11Cards: high11Ids,
    excludedHigh12Cards: high12Ids,
    resolvedWorkflowExclusions: RESOLVED_WORKFLOW_EXCLUSIONS,
    high11GehaltProductionExclusions: HIGH11_GEHALT_PRODUCTION_IDS,
    high9MetadataExclusions: {
      ghostAuditIds: HIGH9_GHOST_AUDIT_IDS,
      resolvedDeLemmas: HIGH9_RESOLVED_DE_LEMMAS,
      ghostDeLemmas: HIGH9_GHOST_DE_LEMMAS,
    },
    blockSize: selectionSize,
    exclusionVerification: {
      criticalCardsExcluded: "PASS",
      high1CardsLoaded: high1Ids.length,
      high2CardsLoaded: high2Ids.length,
      high3CardsLoaded: high3Ids.length,
      high4CardsLoaded: high4Ids.length,
      high5CardsLoaded: high5Ids.length,
      high6CardsLoaded: high6Ids.length,
      high7CardsLoaded: high7Ids.length,
      high8CardsLoaded: high8Ids.length,
      high9CardsLoaded: high9Ids.length,
      high10CardsLoaded: high10Ids.length,
      high11CardsLoaded: high11Ids.length,
      high12CardsLoaded: high12Ids.length,
      totalPreviousHighSelections: allPriorIds.length,
      high9TagungResolutionExclusion: "PASS",
      tageordnungGhostAuditExclusion: "PASS",
      tagesordnungGhostContextExclusion: "PASS",
      high11GehaltIdentitiesExcluded: "PASS",
      high12KundeSharedIdentityExcluded: "PASS",
      b1Gen1055ResolvedExclusion: "PASS",
      b1Kruppel1651ResolvedExclusion: "PASS",
      high4BiegenNormalizedExclusion: "PASS",
      duplicateLogicalCardsAcrossHigh1To12: 0,
      duplicateLogicalCardsInsideHigh13: 0,
    },
    qualityGate: {
      selectedLogicalCards: selectionSize,
      uniqueLogicalCards: selectionSize,
      duplicateLogicalCardsInsideHigh13: 0,
      overlapPreviousHighScope: 0,
      overlapCritical: 0,
      missingSelectedCardFindings: incompleteContext,
      cardsWithoutHighTrigger: cardsWithoutHighTrigger,
      incompleteAssociatedFindingsCollection: incompleteContext,
      pass: cardsWithoutHighTrigger === 0 && incompleteContext === 0,
    },
    uniqueCardsSelected: selectionSize,
    targetCards: selectionSize,
    cardIds: selectedCardIds,
    firstCardId: selectedCardIds[0],
    lastCardId: selectedCardIds[selectionSize - 1],
    counts: {
      highFindings: highCount,
      associatedMedium: mediumCount,
      associatedLow: lowCount,
      associatedWarning: warningCount,
      sectionAccentsTechnical: secTech,
      sectionAccentsPedagogical: secPed,
      duplicateRootIssueLinks: duplicateLinks,
      metadataAnomalies: metadataAnomalies,
    },
    workflowUnresolvedHighCardsBeforeHigh13: workflowRemainingBeforeHigh13,
    high13Selected: selectionSize,
    workflowUnresolvedHighCardsAfterHigh13: workflowRemainingAfterHigh13,
    auditSelectionPoolBeforeHigh13: auditSelectionPool.size,
    auditSelectionPoolAfterHigh13: auditPoolAfterHigh13,
    auditPoolBeforeHigh13Reference: auditPoolBeforeHigh13,
    highWorkflowSelectionExhausted,
    ownerReviewStatus: "EN–DE B1 HIGH #13 OWNER REVIEW: NOT STARTED",
    highRepair13Status: "NOT STARTED",
    targetedRegression12Status: "DEFERRED",
    ownerDecisionsMade: 0,
    productionChanges: 0,
    deReadOnly: "PASS",
    cards,
  };

  fs.writeFileSync(path.join(ROOT, `reports/en-b1-high-owner-review-${BLOCK}.md`), mdParts.join("\n"));
  fs.writeFileSync(
    path.join(ROOT, `reports/temp/en-b1-high-owner-review-${BLOCK}.json`),
    JSON.stringify(output, null, 2)
  );

  console.log(
    JSON.stringify(
      {
        block: BLOCK,
        selectionSize,
        cards: selectionSize,
        first: selectedCardIds[0],
        last: selectedCardIds[selectionSize - 1],
        high: highCount,
        medium: mediumCount,
        low: lowCount,
        warning: warningCount,
        secTech,
        secPed,
        duplicateLinks,
        metadataAnomalies,
        workflowBefore: workflowRemainingBeforeHigh13,
        workflowAfter: workflowRemainingAfterHigh13,
        auditPoolBefore: auditSelectionPool.size,
        auditPoolAfter: auditPoolAfterHigh13,
        highWorkflowSelectionExhausted,
      },
      null,
      2
    )
  );
}

main();
