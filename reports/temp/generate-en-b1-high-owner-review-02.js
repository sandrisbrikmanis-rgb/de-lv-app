#!/usr/bin/env node
/**
 * Generate EN-DE B1 HIGH owner review block #2 (25 unique cards).
 * READ-ONLY — no production changes.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const BLOCK = 2;
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

function loadHigh1Cards() {
  const p = path.join(ROOT, "reports/temp/en-b1-high-owner-review-01.json");
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  const ids = data.cardIds || data.cards?.map((c) => c.cardId) || [];
  if (ids.length !== 25) {
    throw new Error(`Expected 25 HIGH #1 cards in JSON, got ${ids.length}`);
  }
  return ids;
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

function isExcluded(cardId, criticalSet, high1Set) {
  const k = cardKey(cardId);
  return criticalSet.has(k) || criticalSet.has(cardId) || high1Set.has(k);
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
  const high1Ids = loadHigh1Cards();
  const high1Set = new Set(high1Ids.map(cardKey));

  const review = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-owner-review-input.json"), "utf8")
  );
  const en = loadB1("data/en/b1.js");

  const allFindings = review.findings || [];

  const selectedCardIds = [];
  const seen = new Set();
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || isExcluded(cid, criticalSet, high1Set)) continue;
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
  const overlapCritical = selectedCardIds.filter((id) => criticalSet.has(cardKey(id)));
  if (overlapHigh1.length || overlapCritical.length) {
    console.error("Overlap detected:", { overlapHigh1, overlapCritical });
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

  const allHighCandidates = new Set();
  for (const f of allFindings) {
    const cid = f["Card ID"];
    if (!cid || isExcluded(cid, criticalSet, high1Set)) continue;
    if (f.Severity === "HIGH") allHighCandidates.add(cardKey(cid));
  }
  const remainingHighCards = allHighCandidates.size - selectedCardIds.length;

  const cards = [];
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;
  let warningCount = 0;
  let secTech = 0;
  let secPed = 0;
  let duplicateLinks = 0;

  const mdParts = [
    "# EN–DE B1 HIGH Owner Review #2",
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
    "HIGH #1 cards excluded: PASS",
    "Duplicate cards vs HIGH #1: 0",
    "",
    "### CRITICAL-cycle cards excluded",
    "",
    ...CRITICAL_CYCLE_CARDS.map((c) => `- ${c}`),
    "",
    "### HIGH #1 cards excluded (from `reports/temp/en-b1-high-owner-review-01.json`)",
    "",
    ...high1Ids.map((c) => `- ${c}`),
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
  mdParts.push("HIGH OWNER REVIEW #2");
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
  mdParts.push(`Previous HIGH #1 cards excluded: ${high1Ids.length}/${high1Ids.length}`);
  mdParts.push("CRITICAL-cycle cards excluded: PASS");
  mdParts.push("Duplicate cards vs previous blocks: 0");
  mdParts.push("");
  mdParts.push("Production changes: 0");
  mdParts.push("DE READ-ONLY: PASS");
  mdParts.push("OWNER decisions made: 0");
  mdParts.push(`Remaining unique cards with unresolved HIGH findings: ${remainingHighCards}`);
  mdParts.push("```");

  const output = {
    generatedAt: new Date().toISOString(),
    block: BLOCK,
    status: "READY FOR OWNER REVIEW",
    excludedCriticalCycleCards: CRITICAL_CYCLE_CARDS,
    excludedHigh1Cards: high1Ids,
    exclusionVerification: {
      criticalCardsExcluded: "PASS",
      high1CardsExcluded: "PASS",
      duplicateCardsVsHigh1: 0,
      duplicateCardsVsCritical: 0,
      high1Source: "reports/temp/en-b1-high-owner-review-01.json",
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
    previousHigh1CardsExcluded: high1Ids.length,
    criticalCycleCardsExcluded: "PASS",
    duplicateCardsVsPreviousBlocks: 0,
    remainingUniqueHighCards: remainingHighCards,
    ownerDecisionsMade: 0,
    productionChanges: 0,
    deReadOnly: "PASS",
    cards,
  };

  fs.writeFileSync(path.join(ROOT, "reports/en-b1-high-owner-review-02.md"), mdParts.join("\n"));
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-high-owner-review-02.json"),
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
        remaining: remainingHighCards,
        overlapHigh1: 0,
        overlapCritical: 0,
      },
      null,
      2
    )
  );
}

main();
