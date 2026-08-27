#!/usr/bin/env node
"use strict";
/**
 * Fix LABOT decisions where NEW === CURRENT (phonetic diacritics / wrong glosses).
 * Usage: node scripts/fix-es-kurss-lessons-labot-same-new.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const IN_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");

/** Normalize LV diacritics inside phonetic parentheses to ASCII transcription. */
function normalizePhoneticNotation(text) {
  return String(text || "").replace(/\(([^)]+)\)/g, (match, inner) => {
    if (!/[āēīūšģķļņōĀĒĪŪŠĢĶĻŅŌ]/.test(inner)) return match;
    const normalized = inner
      .replace(/ā/g, "a")
      .replace(/ē/g, "e")
      .replace(/ī/g, "i")
      .replace(/ū/g, "u")
      .replace(/ō/g, "o")
      .replace(/š/g, "sh")
      .replace(/ģ/g, "g")
      .replace(/ķ/g, "k")
      .replace(/ļ/g, "l")
      .replace(/ņ/g, "n")
      .replace(/Ā/g, "A")
      .replace(/Ē/g, "E")
      .replace(/Ī/g, "I")
      .replace(/Ū/g, "U")
      .replace(/Ō/g, "O")
      .replace(/Š/g, "Sh");
    return `(${normalized})`;
  });
}

/** Individual OWNER-reviewed corrections for scrambled glosses / corrupted rows. */
const SEMANTIC_NEW = {
  "ES-KURSS-LESSONS-DET-0051": "die Feder (di feder) — puntiaguda",
  "ES-KURSS-LESSONS-DET-0109": "das Lied (das lit) — canción",
  "ES-KURSS-LESSONS-DET-0110": "der Spiegel (shpigel) — espejo",
  "ES-KURSS-LESSONS-DET-0111": "die Schüssel (di shusel) — cuenco",
};

function deriveNew(decision) {
  if (SEMANTIC_NEW[decision.id]) return SEMANTIC_NEW[decision.id];
  const normalized = normalizePhoneticNotation(decision.current);
  if (normalized !== decision.current) return normalized;
  return null;
}

function main() {
  const data = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  let fixed = 0;
  let unchanged = 0;

  for (const d of data.decisions) {
    if (d.status !== "LABOT") continue;
    if (String(d.new || "") !== String(d.current || "")) continue;

    const newVal = deriveNew(d);
    if (!newVal || newVal === d.current) {
      unchanged++;
      continue;
    }

    d.new = newVal;
    d.ownerDecision =
      SEMANTIC_NEW[d.id]
        ? "LABOT: correct scrambled ES gloss per DE source and lesson vocabulary."
        : "LABOT: normalize LV phonetic diacritics in parentheses to ASCII transcription.";
    d.reason = SEMANTIC_NEW[d.id]
      ? "DE headword checked; prior gloss was semantically wrong or corrupted."
      : "LV diacritic phonetic notation replaced; Spanish gloss and DE examples preserved.";
    d.changeTag = "RE_EVALUATED";
    fixed++;
  }

  data.summary.labotMissingNew = data.decisions.filter(
    (x) => x.status === "LABOT" && (x.new === null || x.new === ""),
  ).length;
  data.summary.labotSameAsCurrent = data.decisions.filter(
    (x) => x.status === "LABOT" && String(x.new || "") === String(x.current || ""),
  ).length;

  fs.writeFileSync(IN_JSON, JSON.stringify(data, null, 2));
  console.log(JSON.stringify({ fixed, unchanged, labotSameAsCurrent: data.summary.labotSameAsCurrent }, null, 2));

  if (data.summary.labotSameAsCurrent > 0) {
    console.error(`\nBLOCKED: ${data.summary.labotSameAsCurrent} LABOT still have NEW === CURRENT\n`);
    process.exit(1);
  }
}

if (require.main === module) main();

module.exports = { normalizePhoneticNotation, deriveNew, SEMANTIC_NEW };
