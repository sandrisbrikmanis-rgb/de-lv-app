#!/usr/bin/env node
/**
 * Safe repair gate classifier for EN-DE B2 (957 candidates).
 */
const fs = require("fs");
const path = require("path");
const { loadProductionContext, getProductionEn } = require("./en-b2-owner-review-lib");
const { hasForeignRemnant, normalize, wordOverlap } = require("./en-b2-owner-review-heuristic");

const ROOT = path.join(__dirname, "..", "..");
const REPAIR_MANIFEST = path.join(ROOT, "reports", "temp", "en-b2-approved-repair-candidates.json");
const GATE_OUT = path.join(ROOT, "reports", "temp", "en-b2-safe-repair-gate.json");
const SAFE_OUT = path.join(ROOT, "reports", "temp", "en-b2-safe-repairs.json");
const OWNER_OUT = path.join(ROOT, "reports", "temp", "en-b2-owner-review-after-safe-gate.json");

const FORCE_OWNER = new Set([
  "lun-0094", // Einigkeit duplicate Unity
  "lun-0975", // sensibel tactful
  "lun-0978", // einschleichen formsLabel
]);

const FORCE_OWNER_CARD_FIELD = [
  { cardId: "b2-Einigkeit-561", fieldPath: "lv" },
  { cardId: "b2-sensibel-1639", fieldPath: "lv" },
  { cardId: "b2-Scheidewand-1570", fieldPath: "lv" },
  { cardId: "b2-sich-einschleichen", fieldPath: "study.formsLabel" },
];

function splitBullets(s) {
  return String(s || "")
    .split("•")
    .map((x) => x.trim())
    .filter(Boolean);
}

function hasDuplicateBullets(s) {
  const parts = splitBullets(s).map(normalize);
  return parts.length > 1 && parts.length !== new Set(parts).size;
}

function bulletChangeStats(current, replacement) {
  const c = splitBullets(current);
  const r = splitBullets(replacement);
  if (!c.length && !r.length) return { changed: 0, total: 0, singleItem: false };
  if (c.length !== r.length) return { changed: Math.max(c.length, r.length), total: Math.max(c.length, r.length), singleItem: false };
  let changed = 0;
  for (let i = 0; i < c.length; i++) {
    if (normalize(c[i]) !== normalize(r[i])) changed++;
  }
  return { changed, total: c.length, singleItem: changed === 1 && c.length > 1 };
}

function mapFieldPath(fieldPath) {
  if (fieldPath === "en") return "lv";
  return fieldPath;
}

function isForcedOwner(candidate) {
  if (FORCE_OWNER.has(candidate.findingId)) return true;
  return FORCE_OWNER_CARD_FIELD.some(
    (x) => x.cardId === candidate.cardId && x.fieldPath === candidate.fieldPath,
  );
}

function classify(candidate, productionCurrent) {
  const {
    findingId,
    cardId,
    fieldPath,
    currentValue,
    replacementValue,
    validatedSeverity,
    reason,
    deLemma,
  } = candidate;
  const reasonL = String(reason || "").toLowerCase();
  const sev = String(validatedSeverity || "").toUpperCase();
  const fp = mapFieldPath(fieldPath);

  if (!replacementValue || !String(replacementValue).trim()) {
    return {
      classification: "OWNER_REVIEW",
      confidence: "high",
      reason: "Empty replacement candidate.",
    };
  }

  if (normalize(currentValue) === normalize(replacementValue)) {
    return {
      classification: "OWNER_REVIEW",
      confidence: "high",
      reason: "Replacement identical to current (normalised).",
    };
  }

  if (productionCurrent != null && String(productionCurrent) !== String(currentValue)) {
    return {
      classification: "OWNER_REVIEW",
      confidence: "high",
      reason: `Production mismatch: expected "${String(currentValue).slice(0, 60)}" got "${String(productionCurrent).slice(0, 60)}".`,
      mismatch: true,
    };
  }

  if (isForcedOwner(candidate)) {
    return {
      classification: "OWNER_REVIEW",
      confidence: "high",
      reason: "Explicit OWNER_REVIEW per safe-repair policy (known ambiguous/discussed case).",
    };
  }

  if (fieldPath.includes("formsLabel")) {
    return {
      classification: "OWNER_REVIEW",
      confidence: "high",
      reason: "study.formsLabel terminology (Management vs Government) requires OWNER decision.",
    };
  }

  if (hasDuplicateBullets(replacementValue)) {
    return {
      classification: "OWNER_REVIEW",
      confidence: "high",
      reason: "Replacement introduces duplicate bullet gloss.",
    };
  }

  if (hasForeignRemnant(currentValue)) {
    return {
      classification: "SAFE_TO_APPLY",
      confidence: "high",
      reason: "Foreign-language remnant in EN learner field.",
    };
  }

  if (findingId === "det-b2-bieten-important-1" || /latvian|remnant|ko vieta|bez sich|ko\?/i.test(currentValue)) {
    return {
      classification: "SAFE_TO_APPLY",
      confidence: "high",
      reason: "Confirmed foreign remnant or deterministic Latvian finding.",
    };
  }

  if (sev === "CRITICAL" && (fp === "lv" || fieldPath === "en")) {
    return {
      classification: "SAFE_TO_APPLY",
      confidence: "high",
      reason: "CRITICAL flashcard wrong-lexeme repair with unanimous owner review.",
    };
  }

  const bulletStats = bulletChangeStats(currentValue, replacementValue);
  if (bulletStats.singleItem && sev !== "CRITICAL") {
    return {
      classification: "OWNER_REVIEW",
      confidence: "high",
      reason: "Multi-sense gloss list: only one bullet changes; OWNER should confirm list edit.",
    };
  }

  if (fieldPath === "study.explanation" || fieldPath === "study.translation") {
    if (hasForeignRemnant(currentValue) || /latvian|foreign remnant|bez sich/i.test(reasonL)) {
      return {
        classification: "SAFE_TO_APPLY",
        confidence: "high",
        reason: "Study field foreign remnant or clear untranslated fragment.",
      };
    }
    return {
      classification: "OWNER_REVIEW",
      confidence: "medium",
      reason: "Study prose change requires OWNER review for pedagogical fit.",
    };
  }

  if (fieldPath.startsWith("study.") && !fieldPath.match(/rektion|forms/)) {
    if (sev === "LOW") {
      return {
        classification: "OWNER_REVIEW",
        confidence: "medium",
        reason: "LOW study-field stylistic/naturalness change.",
      };
    }
    return {
      classification: "OWNER_REVIEW",
      confidence: "medium",
      reason: "Study subfield edit outside unambiguous typo/remnant scope.",
    };
  }

  if (fieldPath === "study.rektion" || fieldPath === "study.forms") {
    if (/ko\?|latvian/i.test(currentValue) || /latvian|ko\?/i.test(reasonL)) {
      return {
        classification: "SAFE_TO_APPLY",
        confidence: "high",
        reason: "Latvian fragment in rektion/forms field.",
      };
    }
    return {
      classification: "OWNER_REVIEW",
      confidence: "medium",
      reason: "Grammar/rektion wording change needs OWNER confirmation.",
    };
  }

  if (fp === "lv" || fieldPath === "en") {
    if (sev === "LOW") {
      if (/capital|question mark|punctuation|spelling|typo/i.test(reasonL)) {
        return {
          classification: "SAFE_TO_APPLY",
          confidence: "high",
          reason: "Clear orthography/punctuation fix on flashcard.",
        };
      }
      return {
        classification: "OWNER_REVIEW",
        confidence: "medium",
        reason: "LOW flashcard naturalness/style preference.",
      };
    }

    const overlap = wordOverlap(currentValue, replacementValue);
    if (sev === "HIGH" && overlap < 0.5) {
      return {
        classification: "SAFE_TO_APPLY",
        confidence: "high",
        reason: "HIGH flashcard clear semantic mismatch (distinct lexeme).",
      };
    }
    if (sev === "MEDIUM" && overlap < 0.35) {
      return {
        classification: "SAFE_TO_APPLY",
        confidence: "medium",
        reason: "MEDIUM flashcard with low semantic overlap — likely wrong sense.",
      };
    }
    if (/orthograph|capital|question mark|punctuation|spelling|grammar/i.test(reasonL)) {
      return {
        classification: "SAFE_TO_APPLY",
        confidence: "high",
        reason: "Clear grammar/orthography fix on flashcard.",
      };
    }
    return {
      classification: "OWNER_REVIEW",
      confidence: "medium",
      reason: "Flashcard gloss debatable or synonym-level preference.",
    };
  }

  return {
    classification: "OWNER_REVIEW",
    confidence: "low",
    reason: "Default conservative: insufficient confidence for SAFE apply.",
  };
}

function main() {
  const manifest = JSON.parse(fs.readFileSync(REPAIR_MANIFEST, "utf8"));
  const candidates = manifest.candidates || [];
  if (candidates.length !== 957) throw new Error(`Expected 957 candidates, got ${candidates.length}`);

  const ctx = loadProductionContext();
  const gateEntries = [];
  const safe = [];
  const owner = [];

  for (const c of candidates) {
    const fp = mapFieldPath(c.fieldPath);
    const productionCurrent = getProductionEn(ctx.enIdx, c.cardId, fp, c.deLemma);
    const result = classify(c, productionCurrent);
    const entry = {
      findingId: c.findingId,
      cardId: c.cardId,
      deLemma: c.deLemma,
      fieldPath: c.fieldPath,
      applyFieldPath: fp,
      currentValue: c.currentValue,
      productionCurrent: productionCurrent ?? null,
      candidateReplacement: c.replacementValue,
      classification: result.classification,
      reason: result.reason,
      confidence: result.confidence,
      validatedSeverity: c.validatedSeverity,
      provenance: c.provenance,
      mismatch: result.mismatch || false,
    };
    gateEntries.push(entry);

    if (result.classification === "SAFE_TO_APPLY") {
      safe.push({
        findingId: c.findingId,
        cardId: c.cardId,
        deLemma: c.deLemma,
        fieldPath: fp,
        expectedCurrentValue: c.currentValue,
        replacementValue: c.replacementValue,
        reason: result.reason,
        provenance: c.provenance,
        validatedSeverity: c.validatedSeverity,
      });
    } else {
      owner.push({
        findingId: c.findingId,
        cardId: c.cardId,
        deLemma: c.deLemma,
        fieldPath: c.fieldPath,
        currentEn: c.currentValue,
        proposedReplacement: c.replacementValue,
        problem: result.reason,
        reasonWhyNotSafe: result.reason,
        recommendation: c.replacementValue,
        validatedSeverity: c.validatedSeverity,
        mismatch: result.mismatch || false,
      });
    }
  }

  const safeFromManifest = safe.length;
  const ownerCount = owner.length;
  if (safeFromManifest + ownerCount !== candidates.length) {
    throw new Error(
      `Gate sum mismatch: SAFE ${safeFromManifest} + OWNER ${ownerCount} != ${candidates.length}`,
    );
  }

  // OWNER-confirmed Rain addition (not in original 957 manifest)
  const rainProduction = getProductionEn(ctx.enIdx, "b2-Rain-1491", "lv", "Rain");
  if (rainProduction === "Hedgehog") {
    safe.push({
      findingId: "owner-confirmed-rain",
      cardId: "b2-Rain-1491",
      deLemma: "Rain",
      fieldPath: "lv",
      expectedCurrentValue: "Hedgehog",
      replacementValue: "field margin",
      reason: "OWNER_CONFIRMED_ADDITION: Rain agricultural sense (not hedgehog).",
      provenance: "OWNER_CONFIRMED",
      validatedSeverity: "CRITICAL",
      ownerConfirmed: true,
    });
    gateEntries.push({
      findingId: "owner-confirmed-rain",
      cardId: "b2-Rain-1491",
      deLemma: "Rain",
      fieldPath: "lv",
      applyFieldPath: "lv",
      currentValue: "Hedgehog",
      productionCurrent: rainProduction,
      candidateReplacement: "field margin",
      classification: "SAFE_TO_APPLY",
      reason: "OWNER_CONFIRMED_ADDITION",
      confidence: "high",
      validatedSeverity: "CRITICAL",
      provenance: "OWNER_CONFIRMED",
    });
  }

  const gate = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      candidatesReviewed: candidates.length,
      safeToApplyFromManifest: safeFromManifest,
      ownerReview: ownerCount,
      safeToApplyTotal: safe.length,
      ownerConfirmedAddition: safe.some((s) => s.findingId === "owner-confirmed-rain") ? 1 : 0,
    },
    entries: gateEntries,
  };

  fs.writeFileSync(GATE_OUT, JSON.stringify(gate, null, 2));
  fs.writeFileSync(SAFE_OUT, JSON.stringify({ count: safe.length, repairs: safe }, null, 2));
  fs.writeFileSync(OWNER_OUT, JSON.stringify({ count: owner.length, entries: owner }, null, 2));

  console.log(JSON.stringify(gate.meta, null, 2));
}

main();
