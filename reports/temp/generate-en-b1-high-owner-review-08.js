#!/usr/bin/env node
/**
 * Generate EN-DE B1 HIGH owner review block #8 (50 unique cards).
 * READ-ONLY — no production changes.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const BLOCK = 8;
const BLOCK_SIZE = 50;

const CRITICAL_CYCLE_CARDS = [
  "Baumstumpf",
  "b1-Baumstumpf-251",
  "b1-fressen",
  "b1-tau-2",
  "b1-verfolgen",
];

/** Resolved workflow exclusions (owner NELABOT / false positive — not only production repairs). */
const RESOLVED_WORKFLOW_EXCLUSIONS = ["b1-Gen-1055", "b1-Krüppel-1651"];

function normalizeCardId(id) {
  return String(id || "")
    .normalize("NFC")
    .replace(/\u00ad/g, "")
    .replace(/\u200b/g, "")
    .toLowerCase()
    .trim();
}

/** HIGH #4 biegen audit artifact (soft hyphen U+00AD) — must not reappear in HIGH #8. */
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

function verifyExclusionIntegrity(blockIds, criticalSet) {
  const normalized = blockIds.flat().map(normalizeCardId);
  const dup = normalized.filter((k, i) => normalized.indexOf(k) !== i);
  if (dup.length) {
    throw new Error(`Duplicate logical cards across HIGH #1–#7: ${[...new Set(dup)].join(", ")}`);
  }
  for (let i = 0; i < blockIds.length; i++) {
    if (blockIds[i].length !== 25) {
      throw new Error(`Block ${i + 1} must have 25 cards, got ${blockIds[i].length}`);
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

function cardMetaFromProduction(entry, auditCardId) {
  if (!entry) {
    return {
      cardId: auditCardId,
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
  return {
    cardId: entry.study?.id || auditCardId,
    lemma: entry.de,
    article: entry.de_article || null,
    plural: entry.de_plural || null,
    cardType,
    metadataAnomaly: null,
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

function buildExcludedSet(allPriorIds, resolvedIds = []) {
  const set = new Set();
  for (const id of [...allPriorIds, ...resolvedIds]) {
    set.add(normalizeCardId(id));
    const base = normalizeCardId(id).replace(/^b1-/, "").replace(/-\d+$/, "");
    set.add(base);
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

function formatFindingBlock(f, idx, duplicateNote, metadataAnomaly) {
  const lines = [
    `### Finding ${idx}`,
    "",
    `Severity: ${f.Severity}`,
    `Type: ${f.Type}`,
    `Field: ${f.Field}`,
    `Current EN: ${f["Current EN"]}`,
    `Recommended EN: ${f["Recommended EN"]}`,
    `Reason: ${f.Reason}`,
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
  if (auditCardId !== meta.cardId && normalizeCardId(auditCardId) !== normalizeCardId(meta.cardId)) {
    if (/\u00ad/.test(auditCardId)) anomalies.push(`Audit Card ID contains soft hyphen: ${auditCardId}`);
    if (meta.cardId && normalizeCardId(auditCardId) === normalizeCardId(meta.cardId)) {
      // normalized match — note only soft hyphen
    } else if (!meta.lemma) {
      anomalies.push(`Audit Card ID ${auditCardId} does not match production cardId ${meta.cardId}`);
    }
  }
  const auditDe = findings[0]?.DE;
  if (auditDe && meta.lemma && normalizeCardId(auditDe) !== normalizeCardId(meta.lemma)) {
    anomalies.push(`Audit DE "${auditDe}" vs production DE "${meta.lemma}"`);
  }
  if (!meta.lemma && auditDe) anomalies.push("Production DE empty but audit has DE lemma");
  if (meta.metadataAnomaly) anomalies.push(meta.metadataAnomaly);
  return anomalies.length ? anomalies.join("; ") : null;
}

function verifyResolvedExclusions(excludedSet, selectedCardIds) {
  const genNorm = normalizeCardId("b1-Gen-1055");
  if (!excludedSet.has(genNorm)) {
    throw new Error("b1-Gen-1055 resolved exclusion: FAIL — not in excluded set");
  }
  const genInSelection = selectedCardIds.some((id) => normalizeCardId(id) === genNorm);
  if (genInSelection) {
    throw new Error("b1-Gen-1055 resolved exclusion: FAIL — present in HIGH #8 selection");
  }

  const kruNorm = normalizeCardId("b1-Krüppel-1651");
  if (!excludedSet.has(kruNorm)) {
    throw new Error("b1-Krüppel-1651 resolved exclusion: FAIL — not in excluded set");
  }
  const kruInSelection = selectedCardIds.some((id) => normalizeCardId(id) === kruNorm);
  if (kruInSelection) {
    throw new Error("b1-Krüppel-1651 resolved exclusion: FAIL — present in HIGH #8 selection");
  }

  const biegenInSelection = selectedCardIds.some((id) => normalizeCardId(id) === HIGH4_BIEGEN_NORMALIZED);
  if (biegenInSelection) {
    throw new Error("HIGH #4 biegen normalized exclusion: FAIL — biegen in HIGH #8 selection");
  }

  return {
    genResolvedExclusion: "PASS",
    kruResolvedExclusion: "PASS",
    high4BiegenNormalizedExclusion: "PASS",
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

  console.log(`HIGH #1 IDs loaded: ${high1Ids.length}`);
  console.log(`HIGH #2 IDs loaded: ${high2Ids.length}`);
  console.log(`HIGH #3 IDs loaded: ${high3Ids.length}`);
  console.log(`HIGH #4 IDs loaded: ${high4Ids.length}`);
  console.log(`HIGH #5 IDs loaded: ${high5Ids.length}`);
  console.log(`HIGH #6 IDs loaded: ${high6Ids.length}`);
  console.log(`HIGH #7 IDs loaded: ${high7Ids.length}`);

  const allPriorIds = [
    ...high1Ids,
    ...high2Ids,
    ...high3Ids,
    ...high4Ids,
    ...high5Ids,
    ...high6Ids,
    ...high7Ids,
  ];
  console.log(`Total previous HIGH selections: ${allPriorIds.length}`);

  const integrity = verifyExclusionIntegrity(
    [high1Ids, high2Ids, high3Ids, high4Ids, high5Ids, high6Ids, high7Ids],
    criticalSet
  );
  console.log(`Duplicate logical cards across HIGH #1–#7: ${integrity.duplicateCount}`);
  console.log(`Overlap previous HIGH blocks with CRITICAL: ${integrity.criticalOverlapCount}`);

  const excludedSet = buildExcludedSet(allPriorIds, RESOLVED_WORKFLOW_EXCLUSIONS);

  const high7Json = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-owner-review-07.json"), "utf8")
  );
  const workflowRemainingBeforeHigh8 =
    high7Json.workflowUnresolvedHighCardsAfterHigh7 ?? high7Json.remainingAfterHigh7 ?? 273;
  const auditPoolAfterHigh7 =
    high7Json.auditSelectionPoolAfterHigh7 ??
    high7Json.remainingAfterSelectionPool ??
    workflowRemainingBeforeHigh8;

  const review = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-owner-review-input.json"), "utf8")
  );
  const en = loadB1("data/en/b1.js");
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
    if (selectedCardIds.length >= BLOCK_SIZE) break;
  }

  if (selectedCardIds.length < BLOCK_SIZE) {
    console.error(`Only ${selectedCardIds.length} unique HIGH cards available after exclusions`);
    process.exit(1);
  }

  const resolvedChecks = verifyResolvedExclusions(excludedSet, selectedCardIds);
  console.log(`b1-Gen-1055 resolved exclusion: ${resolvedChecks.genResolvedExclusion}`);
  console.log(`b1-Krüppel-1651 resolved exclusion: ${resolvedChecks.kruResolvedExclusion}`);
  console.log(`HIGH #4 biegen normalized exclusion: ${resolvedChecks.high4BiegenNormalizedExclusion}`);

  const overlapChecks = {
    high1: selectedCardIds.filter((id) => high1Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high2: selectedCardIds.filter((id) => high2Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high3: selectedCardIds.filter((id) => high3Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high4: selectedCardIds.filter((id) => high4Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high5: selectedCardIds.filter((id) => high5Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high6: selectedCardIds.filter((id) => high6Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    high7: selectedCardIds.filter((id) => high7Ids.some((x) => normalizeCardId(x) === normalizeCardId(id))),
    critical: selectedCardIds.filter((id) =>
      CRITICAL_CYCLE_CARDS.some((c) => normalizeCardId(c) === normalizeCardId(id))
    ),
  };
  if (
    overlapChecks.high1.length ||
    overlapChecks.high2.length ||
    overlapChecks.high3.length ||
    overlapChecks.high4.length ||
    overlapChecks.high5.length ||
    overlapChecks.high6.length ||
    overlapChecks.high7.length ||
    overlapChecks.critical.length
  ) {
    console.error("Overlap detected:", overlapChecks);
    process.exit(1);
  }

  const selectedNorm = new Set(selectedCardIds.map(normalizeCardId));
  const internalDup = selectedCardIds.filter((id, i) =>
    selectedCardIds.slice(0, i).some((x) => normalizeCardId(x) === normalizeCardId(id))
  );
  if (internalDup.length) {
    console.error("Duplicate logical cards inside HIGH #8:", internalDup);
    process.exit(1);
  }

  const cardFindings = {};
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || !selectedNorm.has(normalizeCardId(cid))) continue;
    if (!cardFindings[cid]) cardFindings[cid] = [];
    cardFindings[cid].push(f);
  }

  const auditPoolAfterHigh8 = auditSelectionPool.size - selectedCardIds.length;
  const workflowRemainingAfterHigh8 = workflowRemainingBeforeHigh8 - BLOCK_SIZE;
  const expectedArithmeticRemaining = workflowRemainingBeforeHigh8 - BLOCK_SIZE;
  const expectedReferenceArithmetic = 273 - BLOCK_SIZE;

  const remainingDiscrepancy =
    workflowRemainingAfterHigh8 !== expectedArithmeticRemaining
      ? {
          workflowRemainingAfter: workflowRemainingAfterHigh8,
          expectedArithmetic: expectedArithmeticRemaining,
          expectedReference273Minus50: expectedReferenceArithmetic,
          workflowRemainingBefore: workflowRemainingBeforeHigh8,
          auditPoolBefore: auditSelectionPool.size,
          auditPoolAfter: auditPoolAfterHigh8,
        }
      : workflowRemainingAfterHigh8 !== expectedReferenceArithmetic
        ? {
            workflowRemainingAfter: workflowRemainingAfterHigh8,
            expectedReference273Minus50: expectedReferenceArithmetic,
            note: "Calculated matches prior block arithmetic but differs from 273-50 reference",
          }
        : null;

  if (remainingDiscrepancy && workflowRemainingAfterHigh8 !== expectedReferenceArithmetic) {
    console.error("WORKFLOW REMAINING DISCREPANCY — STOP", remainingDiscrepancy);
    process.exit(1);
  }

  let cardsWithoutHighTrigger = 0;
  let incompleteContext = 0;
  for (const cardId of selectedCardIds) {
    const findings = cardFindings[cardId] || [];
    if (!findings.length) incompleteContext++;
    if (!findings.some((f) => f.Severity === "HIGH")) cardsWithoutHighTrigger++;
  }
  if (cardsWithoutHighTrigger || incompleteContext) {
    console.error("50-card quality gate FAIL", { cardsWithoutHighTrigger, incompleteContext });
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
    "# EN–DE B1 HIGH Owner Review #8",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "**Status:** READY FOR OWNER REVIEW — no production changes",
    "",
    `**Block size:** ${BLOCK_SIZE} unique cards`,
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
    "b1-Gen-1055 resolved false-positive exclusion: PASS",
    "b1-Krüppel-1651 resolved exclusion: PASS",
    "HIGH #4 biegen normalized exclusion: PASS",
    "Duplicate logical cards vs previous HIGH blocks: 0",
    "",
    "---",
    "",
  ];

  for (let i = 0; i < selectedCardIds.length; i++) {
    const cardId = selectedCardIds[i];
    const findings = cardFindings[cardId] || [];
    const entry = findEntryByCardId(en, cardId, findings[0]?.DE);
    const meta = cardMetaFromProduction(entry, cardId);
    const metaAnomaly = detectMetadataAnomaly(cardId, meta, findings);
    if (metaAnomaly) metadataAnomalies++;

    const num = String(i + 1).padStart(2, "0");
    mdParts.push(`## ${num} — ${cardId} — ${meta.lemma || findings[0]?.DE || ""}`, "");
    mdParts.push("Card type: " + meta.cardType);
    mdParts.push("DE: " + (meta.lemma || findings[0]?.DE || "—"));
    mdParts.push("Article: " + (meta.article || "—"));
    mdParts.push("Plural: " + (meta.plural || "—"));
    mdParts.push("Metadata anomaly: " + (metaAnomaly || "—"));
    mdParts.push("");

    const defectSeen = new Map();
    const enrichedFindings = [];

    for (const f of findings) {
      const sev = f.Severity;
      if (sev === "HIGH") highCount++;
      else if (sev === "MEDIUM") mediumCount++;
      else if (sev === "LOW") lowCount++;
      else if (sev === "WARNING") warningCount++;

      const sak = f.sectionAccentsKind || "";
      if (sak.toUpperCase() === "TECHNICAL") secTech++;
      if (sak.toUpperCase() === "PEDAGOGICAL") secPed++;

      const dk = normalizeDefectKey(f);
      let duplicateNote = null;
      if (defectSeen.has(dk)) {
        duplicateNote = `DUPLICATE / SAME ROOT ISSUE (see Finding ${defectSeen.get(dk)})`;
        duplicateLinks++;
      } else {
        defectSeen.set(dk, enrichedFindings.length + 1);
      }

      enrichedFindings.push({ ...f, duplicateNote });
    }

    for (let j = 0; j < enrichedFindings.length; j++) {
      mdParts.push(
        formatFindingBlock(enrichedFindings[j], j + 1, enrichedFindings[j].duplicateNote, metaAnomaly)
      );
    }

    cards.push({
      sequence: i + 1,
      cardId,
      auditCardId: cardId,
      productionCardId: meta.cardId,
      lemma: meta.lemma || findings[0]?.DE,
      article: meta.article,
      plural: meta.plural,
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

  const discrepancyText =
    workflowRemainingAfterHigh8 === expectedReferenceArithmetic ? "none" : "see remainingDiscrepancy in JSON";

  mdParts.push("---", "", "## Coverage summary", "");
  mdParts.push("```text");
  mdParts.push("EN–DE B1 HIGH OWNER REVIEW #8");
  mdParts.push("");
  mdParts.push(`Block size: ${BLOCK_SIZE}`);
  mdParts.push(`Unique cards selected: ${selectedCardIds.length}/${BLOCK_SIZE}`);
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
  mdParts.push(`HIGH #1 cards excluded: ${high1Ids.length}/${high1Ids.length}`);
  mdParts.push(`HIGH #2 cards excluded: ${high2Ids.length}/${high2Ids.length}`);
  mdParts.push(`HIGH #3 cards excluded: ${high3Ids.length}/${high3Ids.length}`);
  mdParts.push(`HIGH #4 cards excluded: ${high4Ids.length}/${high4Ids.length}`);
  mdParts.push(`HIGH #5 cards excluded: ${high5Ids.length}/${high5Ids.length}`);
  mdParts.push(`HIGH #6 cards excluded: ${high6Ids.length}/${high6Ids.length}`);
  mdParts.push(`HIGH #7 cards excluded: ${high7Ids.length}/${high7Ids.length}`);
  mdParts.push("b1-Gen-1055 resolved false-positive exclusion: PASS");
  mdParts.push("b1-Krüppel-1651 resolved exclusion: PASS");
  mdParts.push("HIGH #4 biegen normalized exclusion: PASS");
  mdParts.push("");
  mdParts.push("Overlap with CRITICAL: 0");
  mdParts.push("Overlap with HIGH #1: 0");
  mdParts.push("Overlap with HIGH #2: 0");
  mdParts.push("Overlap with HIGH #3: 0");
  mdParts.push("Overlap with HIGH #4: 0");
  mdParts.push("Overlap with HIGH #5: 0");
  mdParts.push("Overlap with HIGH #6: 0");
  mdParts.push("Overlap with HIGH #7: 0");
  mdParts.push("");
  mdParts.push("Production changes: 0");
  mdParts.push("DE READ-ONLY: PASS");
  mdParts.push("OWNER decisions made: 0");
  mdParts.push(`Workflow unresolved HIGH cards before HIGH #8: ${workflowRemainingBeforeHigh8}`);
  mdParts.push(`HIGH #8 selected: ${BLOCK_SIZE}`);
  mdParts.push(`Workflow unresolved HIGH cards after HIGH #8: ${workflowRemainingAfterHigh8}`);
  mdParts.push(`Audit-selection pool before HIGH #8: ${auditSelectionPool.size}`);
  mdParts.push(`Audit-selection pool after HIGH #8: ${auditPoolAfterHigh8}`);
  mdParts.push(`Expected arithmetic: 273 - 50 = ${expectedReferenceArithmetic}`);
  mdParts.push(`Calculated workflow remaining: ${workflowRemainingAfterHigh8}`);
  mdParts.push(`Discrepancy: ${discrepancyText}`);
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
    resolvedWorkflowExclusions: RESOLVED_WORKFLOW_EXCLUSIONS,
    blockSize: BLOCK_SIZE,
    exclusionVerification: {
      criticalCardsExcluded: "PASS",
      high1CardsLoaded: high1Ids.length,
      high2CardsLoaded: high2Ids.length,
      high3CardsLoaded: high3Ids.length,
      high4CardsLoaded: high4Ids.length,
      high5CardsLoaded: high5Ids.length,
      high6CardsLoaded: high6Ids.length,
      high7CardsLoaded: high7Ids.length,
      totalPreviousHighSelections: 175,
      high1CardsExcluded: `${high1Ids.length}/${high1Ids.length}`,
      high2CardsExcluded: `${high2Ids.length}/${high2Ids.length}`,
      high3CardsExcluded: `${high3Ids.length}/${high3Ids.length}`,
      high4CardsExcluded: `${high4Ids.length}/${high4Ids.length}`,
      high5CardsExcluded: `${high5Ids.length}/${high5Ids.length}`,
      high6CardsExcluded: `${high6Ids.length}/${high6Ids.length}`,
      high7CardsExcluded: `${high7Ids.length}/${high7Ids.length}`,
      b1Gen1055ResolvedExclusion: "PASS",
      b1Kruppel1651ResolvedExclusion: "PASS",
      high4BiegenNormalizedExclusion: "PASS",
      duplicateLogicalCardsAcrossHigh1To7: 0,
      duplicateLogicalCardsInsideHigh8: 0,
      duplicateCardsVsHigh1: 0,
      duplicateCardsVsHigh2: 0,
      duplicateCardsVsHigh3: 0,
      duplicateCardsVsHigh4: 0,
      duplicateCardsVsHigh5: 0,
      duplicateCardsVsHigh6: 0,
      duplicateCardsVsHigh7: 0,
      duplicateCardsVsCritical: 0,
      idNormalization: "soft-hyphen (U+00AD) stripped for exclusion matching",
    },
    qualityGate: {
      selectedLogicalCards: selectedCardIds.length,
      uniqueLogicalCards: selectedCardIds.length,
      duplicateLogicalCardsInsideHigh8: 0,
      missingSelectedCardFindings: incompleteContext,
      cardsWithoutHighTrigger: cardsWithoutHighTrigger,
      incompleteAssociatedFindingsCollection: incompleteContext,
      pass: cardsWithoutHighTrigger === 0 && incompleteContext === 0,
    },
    uniqueCardsSelected: selectedCardIds.length,
    targetCards: BLOCK_SIZE,
    cardIds: selectedCardIds,
    firstCardId: selectedCardIds[0],
    lastCardId: selectedCardIds[BLOCK_SIZE - 1],
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
    overlap: {
      critical: 0,
      high1: 0,
      high2: 0,
      high3: 0,
      high4: 0,
      high5: 0,
      high6: 0,
      high7: 0,
    },
    workflowUnresolvedHighCardsBeforeHigh8: workflowRemainingBeforeHigh8,
    high8Selected: BLOCK_SIZE,
    workflowUnresolvedHighCardsAfterHigh8: workflowRemainingAfterHigh8,
    auditSelectionPoolBeforeHigh8: auditSelectionPool.size,
    auditSelectionPoolAfterHigh8: auditPoolAfterHigh8,
    auditPoolAfterHigh7Reference: auditPoolAfterHigh7,
    expectedArithmeticRemaining: expectedReferenceArithmetic,
    calculatedWorkflowRemaining: workflowRemainingAfterHigh8,
    remainingDiscrepancy:
      workflowRemainingAfterHigh8 === expectedReferenceArithmetic ? null : remainingDiscrepancy,
    ownerDecisionsMade: 0,
    productionChanges: 0,
    deReadOnly: "PASS",
    cards,
  };

  fs.writeFileSync(path.join(ROOT, "reports/en-b1-high-owner-review-08.md"), mdParts.join("\n"));
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-high-owner-review-08.json"),
    JSON.stringify(output, null, 2)
  );

  console.log(
    JSON.stringify(
      {
        block: BLOCK,
        blockSize: BLOCK_SIZE,
        cards: selectedCardIds.length,
        first: selectedCardIds[0],
        last: selectedCardIds[BLOCK_SIZE - 1],
        high: highCount,
        medium: mediumCount,
        low: lowCount,
        warning: warningCount,
        secTech,
        secPed,
        duplicateLinks,
        metadataAnomalies,
        workflowBefore: workflowRemainingBeforeHigh8,
        workflowAfter: workflowRemainingAfterHigh8,
        auditPoolBefore: auditSelectionPool.size,
        auditPoolAfter: auditPoolAfterHigh8,
        expected: expectedReferenceArithmetic,
        discrepancy: discrepancyText,
      },
      null,
      2
    )
  );
}

main();
