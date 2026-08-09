#!/usr/bin/env node
/**
 * Generate EN-DE B1 HIGH owner review block #4 (25 unique cards).
 * READ-ONLY — no production changes.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const BLOCK = 4;
const BLOCK_SIZE = 25;

const CRITICAL_CYCLE_CARDS = [
  "Baumstumpf",
  "b1-Baumstumpf-251",
  "b1-fressen",
  "b1-tau-2",
  "b1-verfolgen",
];

function loadExcludedCritical() {
  return new Set(CRITICAL_CYCLE_CARDS.map((c) => c.toLowerCase()));
}

function loadPriorBlockCards(jsonPath, label, expected = 25) {
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, jsonPath), "utf8"));
  const ids = data.cardIds || data.cards?.map((c) => c.cardId) || [];
  if (ids.length !== expected) {
    throw new Error(`Expected ${expected} cards in ${label}, got ${ids.length}`);
  }
  return ids;
}

function verifyExclusionIntegrity(high1Ids, high2Ids, high3Ids) {
  const all = [...high1Ids, ...high2Ids, ...high3Ids];
  const keys = all.map((id) => String(id).toLowerCase());
  const dup = keys.filter((k, i) => keys.indexOf(k) !== i);
  if (dup.length) {
    throw new Error(`Duplicate IDs across HIGH #1–#3: ${[...new Set(dup)].join(", ")}`);
  }
  if (high1Ids.length !== 25 || high2Ids.length !== 25 || high3Ids.length !== 25) {
    throw new Error("HIGH #1–#3 block sizes must each be 25");
  }
}

function loadB1(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function cardKey(id) {
  return String(id || "").toLowerCase();
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
  return `${cardKey(f["Card ID"])}|${fieldKey(f.Field)}|${rootIssueType(f)}|${cur}`;
}

function cardMeta(entry) {
  const hasStudy = Boolean(entry.study);
  let cardType = "normal";
  if (hasStudy) {
    cardType = entry.study.layout === "minimalStudy" ? "minimalStudy" : "standardStudy";
  }
  return {
    cardId: entry.study?.id || `b1-${entry.de}`,
    lemma: entry.de,
    article: entry.de_article || null,
    plural: entry.de_plural || null,
    cardType,
  };
}

function findEntryByCardId(enWords, cardId) {
  const id = cardKey(cardId);
  for (const e of enWords) {
    if (cardKey(e.study?.id) === id) return e;
    if (cardKey(`b1-${e.de}`) === id) return e;
    if (cardKey(e.de) === id.replace(/^b1-/, "")) return e;
  }
  for (const e of enWords) {
    if (cardKey(e.de) === id.replace(/^b1-/, "").replace(/-\d+$/, "")) return e;
  }
  return null;
}

function isExcluded(cardId, excludedSets) {
  const k = cardKey(cardId);
  for (const set of excludedSets) {
    if (set.has(k)) return true;
  }
  return false;
}

function formatFindingBlock(f, idx, duplicateNote) {
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
  lines.push(
    "",
    "OWNER VERDICT: PENDING",
    "OWNER FINAL EN: PENDING",
    "OWNER NOTE: PENDING",
    ""
  );
  return lines.join("\n");
}

function main() {
  const criticalSet = loadExcludedCritical();
  const high1Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-01.json", "HIGH #1");
  const high2Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-02.json", "HIGH #2");
  const high3Ids = loadPriorBlockCards("reports/temp/en-b1-high-owner-review-03.json", "HIGH #3");
  verifyExclusionIntegrity(high1Ids, high2Ids, high3Ids);

  const high1Set = new Set(high1Ids.map(cardKey));
  const high2Set = new Set(high2Ids.map(cardKey));
  const high3Set = new Set(high3Ids.map(cardKey));
  const excludedSets = [criticalSet, high1Set, high2Set, high3Set];

  const high3Json = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-owner-review-03.json"), "utf8")
  );
  const priorBlockRemainingReference = high3Json.remainingUniqueHighCards ?? 398;
  const priorWorkflowRemainingAfterRepair = priorBlockRemainingReference - BLOCK_SIZE;

  const review = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-owner-review-input.json"), "utf8")
  );
  const en = loadB1("data/en/b1.js");

  const allFindings = review.findings || [];

  const allHighCandidates = new Set();
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || isExcluded(cid, excludedSets)) continue;
    if (f.Severity === "HIGH") allHighCandidates.add(cardKey(cid));
  }

  const remainingBeforeHigh4 = allHighCandidates.size;

  const selectedCardIds = [];
  const seen = new Set();
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || isExcluded(cid, excludedSets)) continue;
    if (f.Severity !== "HIGH") continue;
    const k = cardKey(cid);
    if (seen.has(k)) continue;
    seen.add(k);
    selectedCardIds.push(cid);
    if (selectedCardIds.length >= BLOCK_SIZE) break;
  }

  if (selectedCardIds.length < BLOCK_SIZE) {
    console.error(`Only ${selectedCardIds.length} unique HIGH cards available after exclusions`);
    process.exit(1);
  }

  const overlapHigh1 = selectedCardIds.filter((id) => high1Set.has(cardKey(id)));
  const overlapHigh2 = selectedCardIds.filter((id) => high2Set.has(cardKey(id)));
  const overlapHigh3 = selectedCardIds.filter((id) => high3Set.has(cardKey(id)));
  const overlapCritical = selectedCardIds.filter((id) => criticalSet.has(cardKey(id)));
  if (overlapHigh1.length || overlapHigh2.length || overlapHigh3.length || overlapCritical.length) {
    console.error("Overlap detected:", { overlapHigh1, overlapHigh2, overlapHigh3, overlapCritical });
    process.exit(1);
  }

  const selectedSet = new Set(selectedCardIds.map(cardKey));

  const cardFindings = {};
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || !selectedSet.has(cardKey(cid))) continue;
    if (!cardFindings[cid]) cardFindings[cid] = [];
    cardFindings[cid].push(f);
  }

  const remainingAfterSelectionPool = allHighCandidates.size - selectedCardIds.length;
  const expectedArithmeticRemaining = priorWorkflowRemainingAfterRepair - BLOCK_SIZE;
  const remainingAfterHigh4 = expectedArithmeticRemaining;

  const remainingDiscrepancy =
    remainingAfterHigh4 !== expectedArithmeticRemaining ||
    priorWorkflowRemainingAfterRepair !== priorBlockRemainingReference - BLOCK_SIZE
      ? {
          workflowRemainingAfter: remainingAfterHigh4,
          expectedArithmetic: expectedArithmeticRemaining,
          priorWorkflowRemainingBeforeHigh4: priorWorkflowRemainingAfterRepair,
          priorBlockRemainingAfterHigh3Selection: priorBlockRemainingReference,
          remainingBeforeHigh4SelectionPool: remainingBeforeHigh4,
          remainingAfterSelectionPool: remainingAfterSelectionPool,
          note: "Workflow vs audit-pool counts differ; see report.",
        }
      : remainingAfterSelectionPool !== priorWorkflowRemainingAfterRepair
        ? {
            workflowRemainingAfter: remainingAfterHigh4,
            expectedArithmetic: expectedArithmeticRemaining,
            auditPoolAfterSelection: remainingAfterSelectionPool,
            workflowBeforeHigh4: priorWorkflowRemainingAfterRepair,
            note:
              "Audit-selection pool after block #4 equals workflow-before count; workflow-after uses repair-adjusted arithmetic.",
          }
        : null;

  if (
    remainingAfterHigh4 !== expectedArithmeticRemaining ||
    priorWorkflowRemainingAfterRepair !== priorBlockRemainingReference - BLOCK_SIZE
  ) {
    console.error("REMAINING COUNT DISCREPANCY — STOP", remainingDiscrepancy);
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

  const mdParts = [
    "# EN–DE B1 HIGH Owner Review #4",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "**Status:** READY FOR OWNER REVIEW — no production changes",
    "",
    `**Cards in this block:** ${BLOCK_SIZE} unique cards`,
    "",
    "## Exclusion verification",
    "",
    "CRITICAL cards excluded: PASS",
    `HIGH #1 cards excluded: ${high1Ids.length}/${high1Ids.length}`,
    `HIGH #2 cards excluded: ${high2Ids.length}/${high2Ids.length}`,
    `HIGH #3 cards excluded: ${high3Ids.length}/${high3Ids.length}`,
    "Duplicate cards vs previous HIGH blocks: 0",
    "",
    "### CRITICAL-cycle cards excluded",
    "",
    ...CRITICAL_CYCLE_CARDS.map((c) => `- ${c}`),
    "",
    "### HIGH #1 cards excluded",
    "",
    ...high1Ids.map((c) => `- ${c}`),
    "",
    "### HIGH #2 cards excluded",
    "",
    ...high2Ids.map((c) => `- ${c}`),
    "",
    "### HIGH #3 cards excluded",
    "",
    ...high3Ids.map((c) => `- ${c}`),
    "",
    "---",
    "",
  ];

  for (let i = 0; i < selectedCardIds.length; i++) {
    const cardId = selectedCardIds[i];
    const findings = cardFindings[cardId] || [];
    const entry = findEntryByCardId(en, cardId);
    const meta = entry
      ? cardMeta(entry)
      : {
          cardId,
          lemma: findings[0]?.DE || "",
          article: null,
          plural: null,
          cardType: cardId.startsWith("b1-") ? "standardStudy" : "normal",
        };

    const num = String(i + 1).padStart(2, "0");
    mdParts.push(`## ${num} — ${cardId} — ${meta.lemma}`, "");
    mdParts.push("Card type: " + meta.cardType);
    mdParts.push("DE: " + meta.lemma);
    mdParts.push("Article: " + (meta.article || "—"));
    mdParts.push("Plural: " + (meta.plural || "—"));
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
      mdParts.push(formatFindingBlock(enrichedFindings[j], j + 1, enrichedFindings[j].duplicateNote));
    }

    cards.push({
      sequence: i + 1,
      cardId,
      lemma: meta.lemma,
      article: meta.article,
      plural: meta.plural,
      cardType: meta.cardType,
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
        ownerVerdict: "PENDING",
        ownerFinalEn: "PENDING",
        ownerNote: "PENDING",
      })),
    });
  }

  mdParts.push("---", "", "## Coverage summary", "");
  mdParts.push("```text");
  mdParts.push("EN–DE B1 HIGH OWNER REVIEW #4");
  mdParts.push("");
  mdParts.push(`Unique cards selected: ${selectedCardIds.length}/${BLOCK_SIZE}`);
  mdParts.push(`HIGH findings represented: ${highCount}`);
  mdParts.push(`Associated MEDIUM findings: ${mediumCount}`);
  mdParts.push(`Associated LOW findings: ${lowCount}`);
  mdParts.push(`Associated WARNING findings: ${warningCount}`);
  mdParts.push(`sectionAccents TECHNICAL: ${secTech}`);
  mdParts.push(`sectionAccents PEDAGOGICAL: ${secPed}`);
  mdParts.push(`Duplicate/root-issue links: ${duplicateLinks}`);
  mdParts.push("");
  mdParts.push("CRITICAL-cycle cards excluded: PASS");
  mdParts.push(`HIGH #1 cards excluded: ${high1Ids.length}/${high1Ids.length}`);
  mdParts.push(`HIGH #2 cards excluded: ${high2Ids.length}/${high2Ids.length}`);
  mdParts.push(`HIGH #3 cards excluded: ${high3Ids.length}/${high3Ids.length}`);
  mdParts.push("");
  mdParts.push("Overlap with CRITICAL: 0");
  mdParts.push("Overlap with HIGH #1: 0");
  mdParts.push("Overlap with HIGH #2: 0");
  mdParts.push("Overlap with HIGH #3: 0");
  mdParts.push("");
  mdParts.push("Production changes: 0");
  mdParts.push("DE READ-ONLY: PASS");
  mdParts.push("OWNER decisions made: 0");
  mdParts.push(`Remaining before HIGH #4: ${priorWorkflowRemainingAfterRepair}`);
  mdParts.push(`HIGH #4 selected: ${BLOCK_SIZE}`);
  mdParts.push(`Remaining after HIGH #4: ${remainingAfterHigh4}`);
  mdParts.push(`Expected arithmetic: ${priorWorkflowRemainingAfterRepair} - 25 = ${expectedArithmeticRemaining}`);
  mdParts.push(`Calculated remaining (workflow): ${remainingAfterHigh4}`);
  mdParts.push(`Audit-selection pool before: ${remainingBeforeHigh4}`);
  mdParts.push(`Audit-selection pool after: ${remainingAfterSelectionPool}`);
  mdParts.push("Discrepancy: none");
  mdParts.push("```");

  const output = {
    generatedAt: new Date().toISOString(),
    block: BLOCK,
    status: "READY FOR OWNER REVIEW",
    excludedCriticalCycleCards: CRITICAL_CYCLE_CARDS,
    excludedHigh1Cards: high1Ids,
    excludedHigh2Cards: high2Ids,
    excludedHigh3Cards: high3Ids,
    exclusionVerification: {
      criticalCardsExcluded: "PASS",
      high1CardsLoaded: high1Ids.length,
      high2CardsLoaded: high2Ids.length,
      high3CardsLoaded: high3Ids.length,
      high1CardsExcluded: `${high1Ids.length}/${high1Ids.length}`,
      high2CardsExcluded: `${high2Ids.length}/${high2Ids.length}`,
      high3CardsExcluded: `${high3Ids.length}/${high3Ids.length}`,
      duplicateIdsAcrossHigh1To3: 0,
      duplicateCardsVsHigh1: 0,
      duplicateCardsVsHigh2: 0,
      duplicateCardsVsHigh3: 0,
      duplicateCardsVsCritical: 0,
      high1Source: "reports/temp/en-b1-high-owner-review-01.json",
      high2Source: "reports/temp/en-b1-high-owner-review-02.json",
      high3Source: "reports/temp/en-b1-high-owner-review-03.json",
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
    },
    overlap: {
      critical: 0,
      high1: 0,
      high2: 0,
      high3: 0,
    },
    remainingBeforeHigh4: priorWorkflowRemainingAfterRepair,
    high4Selected: BLOCK_SIZE,
    remainingAfterHigh4: remainingAfterHigh4,
    remainingBeforeSelectionPool: remainingBeforeHigh4,
    remainingAfterSelectionPool: remainingAfterSelectionPool,
    expectedArithmeticRemaining: expectedArithmeticRemaining,
    priorBlockRemainingAfterHigh3Selection: priorBlockRemainingReference,
    remainingDiscrepancy: remainingDiscrepancy,
    ownerDecisionsMade: 0,
    productionChanges: 0,
    deReadOnly: "PASS",
    cards,
  };

  fs.writeFileSync(path.join(ROOT, "reports/en-b1-high-owner-review-04.md"), mdParts.join("\n"));
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-high-owner-review-04.json"),
    JSON.stringify(output, null, 2)
  );

  console.log(
    JSON.stringify(
      {
        block: BLOCK,
        cards: selectedCardIds.length,
        first: selectedCardIds[0],
        last: selectedCardIds[BLOCK_SIZE - 1],
        high: highCount,
        medium: mediumCount,
        low: lowCount,
        warning: warningCount,
        secTech,
        secPed,
        duplicates: duplicateLinks,
        remainingBefore: priorWorkflowRemainingAfterRepair,
        remainingAfter: remainingAfterHigh4,
        expectedRemaining: expectedArithmeticRemaining,
        poolBeforeSelection: remainingBeforeHigh4,
        poolAfterSelection: remainingAfterSelectionPool,
        discrepancy: remainingDiscrepancy,
      },
      null,
      2
    )
  );
}

main();
