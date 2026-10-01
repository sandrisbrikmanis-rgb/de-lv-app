#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Final 2-card micro-repair OWNER source extraction (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "reports/temp/cs-b1-final-2card-owner-source.json");

function loadWords(filePath, globalKey) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b1-${entry.de}-${index}`;
  return `b1-${index}`;
}

function main() {
  const cs = loadWords(path.join(ROOT, "data/cs/b1.js"), "B1_WORDS");
  const lv = loadWords(path.join(ROOT, "data/b1.js"), "B1_WORDS");

  const inhaltIdx = 1709;
  const sowieIdx = 2660;

  const inhaltCs = JSON.parse(JSON.stringify(cs[inhaltIdx]));
  const inhaltLv = JSON.parse(JSON.stringify(lv[inhaltIdx]));
  const sowieCs = JSON.parse(JSON.stringify(cs[sowieIdx]));
  const sowieLv = JSON.parse(JSON.stringify(lv[sowieIdx]));

  const data = {
    meta: {
      generatedAt: new Date().toISOString(),
      mode: "READ-ONLY",
      purpose: "OWNER final micro-repair source extraction",
      sourceFiles: {
        csProduction: "data/cs/b1.js",
        lvReference: "data/b1.js",
      },
      productionChanges: 0,
      deChanges: 0,
      otherLanguageChanges: 0,
    },
    cards: [
      {
        cardId: "b1-inhalt",
        productionIndex: inhaltIdx,
        currentCsObject: inhaltCs,
        lvReferenceObject: inhaltLv,
        closureAuditFinding: {
          field: "study.sectionAccents.explanation",
          severity: "MEDIUM",
          reason: 'Accent term "der Inhalt" not found in section text',
        },
      },
      {
        cardId: "b1-sowie-2660",
        productionIndex: sowieIdx,
        currentCsObject: sowieCs,
        lvReferenceCardId: "b1-sowie",
        lvReferenceObject: sowieLv,
        lvStudySectionAccents: sowieLv.study?.sectionAccents ?? null,
        mappingEvidence: [
          `productionIndex ${sowieIdx} is identical in data/cs/b1.js and data/b1.js`,
          `German headword de="sowie" matches at index ${sowieIdx}`,
          `LV study.id = "b1-sowie"; CS has no study.id (removed in Groups 07–32 repair)`,
          `CS cardId resolves as b1-sowie-2660 via entryId fallback when study.id is absent`,
          `Deterministic structure audit compares CS[${sowieIdx}] vs LV[${sowieIdx}] by fixed B1 card order`,
        ].join(" | "),
        closureAuditFindings: [
          {
            field: "structure",
            severity: "HIGH",
            reason: "Missing fields vs LV: study.id, study.layout, study.translation, study.explanation, study.examples, study.tip, study.important",
          },
          {
            field: "study.sectionAccents",
            severity: "HIGH",
            reason: "sectionAccents missing but LV etalon has them",
            ownerLockStatus: "OWNER_LOCK_REOPEN_REQUIRED",
          },
        ],
        csStudyType: typeof sowieCs.study,
        csStudyIsObject: sowieCs.study !== null && typeof sowieCs.study === "object" && !Array.isArray(sowieCs.study),
      },
    ],
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log(`Wrote ${OUT} (${fs.statSync(OUT).size} bytes)`);
}

if (require.main === module) main();
