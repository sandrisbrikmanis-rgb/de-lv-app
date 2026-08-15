#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions 001–050 into review markdown + partial apply map.
 * Usage: node scripts/apply-cs-kurs-pronunciation-owner-decisions-001-050.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const REVIEW_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-review-all-findings.md");
const SUMMARY_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-decisions-001-050.md");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-001-050.json");

const DECISIONS = {
  "001": { status: "LABOT", new: "Warm (varm) — teplý", note: "" },
  "002": { status: "LABOT", new: "Gut (gút) — dobrý", note: "" },
  "003": { status: "LABOT", new: "Gut (gút) — dobrý", note: "Duplicate target — apply once (same as #002)." },
  "004": { status: "LABOT", new: "Tat (tát) — čin / skutek", note: "" },
  "005": { status: "LABOT", new: "Tat (tát) — čin / skutek", note: "Duplicate target — apply once (same as #004)." },
  "006": { status: "LABOT", new: "Weg (vék) — cesta", note: "" },
  "007": { status: "LABOT", new: "Weg (vék) — cesta", note: "Duplicate target — apply once (same as #006)." },
  "008": { status: "LABOT", new: "Schlaf (šláf) — spánek", note: "" },
  "009": { status: "LABOT", new: "Bald (balt) — brzy", note: "" },
  "010": { status: "LABOT", new: "Scharf (šarf) — ostrý", note: "" },
  "011": { status: "LABOT", new: "Feld (felt) — pole", note: "" },
  "012": {
    status: "LABOT",
    new: "Strauch (štrauch; ch jako v německém Ach) — keř",
    note: "OWNER wording — čehu h/ch neaizstāj vācu Ach-Laut; skaidrojums, ne viltus transkripcija.",
  },
  "013": {
    status: "LABOT",
    new: "Sträucher (štroichr; ch jako německé Ich-Laut) — keře",
    note: "OWNER wording — Ich-Laut skaidrots eksplicīti.",
  },
  "014": { status: "LABOT", new: "Mäuse (moize) — myši", note: "" },
  "015": { status: "LABOT", new: "Mein (main) — můj", note: "" },
  "016": { status: "LABOT", new: "Sein (zain) — jeho / být", note: "" },
  "017": { status: "LABOT", new: "Dvojhláska ei", note: "" },
  "018": {
    status: "LABOT",
    new: "Poznámky k výslovnosti z lekce 2",
    note: "OWNER — lekce (ne Přednáška), saskaņā ar CS Kurss UI terminoloģiju.",
  },
  "019": { status: "LABOT", new: "Ve slově tun se samohláska „u“ vyslovuje dlouze.", note: "" },
  "020": { status: "LABOT", new: "„ie“ často označuje dlouhé i.", note: "" },
  "021": {
    status: "LABOT",
    new: "Dvojhlásky se vyslovují jako spojení dvou samohláskových zvuků v jedné slabice.",
    note: "",
  },
  "022": { status: "LABOT", new: "Tragen (trágen) — nést", note: "" },
  "023": { status: "LABOT", new: "Wieder (víder) — znovu", note: "" },
  "024": { status: "LABOT", new: "Segel (zégel) — plachta", note: "" },
  "025": { status: "LABOT", new: "Braten (bráten) — pečeně", note: "" },
  "026": {
    status: "LABOT",
    new: "Spiegel (špígel) — zrcadlo",
    note: "LABOT — špígel pareizi; Luna Reason par sch nav autoritatīvs (sākas ar sp).",
  },
  "027": { status: "LABOT", new: "Finger (finger) — prst", note: "" },
  "028": { status: "LABOT", new: "Halter (halter) — držák", note: "" },
  "029": { status: "LABOT", new: "Rahmen (rámen) — rám", note: "" },
  "030": { status: "LABOT", new: "Zahl (cál) — číslo", note: "" },
  "031": { status: "LABOT", new: "Zahl (cál) — číslo", note: "Duplicate target — apply once (same as #030)." },
  "032": { status: "LABOT", new: "Ihn (ín) — ho / jej", note: "OWNER — (ín) ne īn." },
  "033": {
    status: "FALSE_POSITIVE",
    new: "",
    note: "CURRENT jau ir Huhn (hūn) — Luna kļūdaini apgalvo, ka trūkst transkripcijas.",
  },
  "034": { status: "LABOT", new: "Schuh (šú) — bota", note: "" },
  "035": { status: "LABOT", new: "Písmeno h jako označení délky samohlásky", note: "" },
  "036": { status: "LABOT", new: "Lampe (lampe) — lampa", note: "" },
  "037": { status: "LABOT", new: "Hase (háze) — zajíc", note: "" },
  "038": { status: "LABOT", new: "Knabe (knábe) — chlapec", note: "" },
  "039": { status: "LABOT", new: "Rabe (rábe) — havran", note: "" },
  "040": { status: "LABOT", new: "Die (dí) — určitý člen „die“", note: "" },
  "041": {
    status: "LABOT",
    new: "Die (dí) — určitý člen „die“",
    note: "Duplicate target — apply once (same as #040).",
  },
  "042": {
    status: "LABOT",
    new: "Diese (díze) — tato / tito / tyto",
    note: "OWNER — bez „toto“ (Luna); diese ≠ dieses izolēti.",
  },
  "043": { status: "LABOT", new: "Fliege (flíge) — moucha", note: "" },
  "044": { status: "LABOT", new: "Stiel (štíl) — stonek / násada", note: "" },
  "045": {
    status: "LABOT",
    new: "Stiel (štíl) — stonek / násada",
    note: "Duplicate target — apply once (same as #044).",
  },
  "046": { status: "LABOT", new: "Dieb (díp) — zloděj", note: "" },
  "047": {
    status: "LABOT",
    new: "Dieb (díp) — zloděj",
    note: "Duplicate target — apply once (same as #046).",
  },
  "048": { status: "LABOT", new: "Dlouhé i = ie", note: "" },
  "049": {
    status: "NELABOT",
    new: "",
    note: "Pedagoģiski saprotams formulējums — stilistisks/terminoloģisks, ne reāla kļūda.",
  },
  "050": { status: "LABOT", new: "Saal (zál) — sál", note: "" },
};

const DEDUPE_APPLY_PRIMARY = {
  "kurssPronunciationLesson/section[0]/example[1]": "002",
  "kurssPronunciationLesson/section[0]/example[2]": "004",
  "kurssPronunciationLesson/section[0]/example[4]": "006",
  "kurssPronunciationLesson/section[3]/example[3]": "030",
  "kurssPronunciationLesson/section[5]/example[0]": "040",
  "kurssPronunciationLesson/section[5]/example[5]": "044",
  "kurssPronunciationLesson/section[5]/example[6]": "046",
};

function parseFindingBlocks(md) {
  const re = /^## Finding (\d{3})\n([\s\S]*?)(?=\n---\n\n## Finding |\n## End)/gm;
  const blocks = {};
  let m;
  while ((m = re.exec(md)) !== null) {
    blocks[m[1]] = m[0];
  }
  return blocks;
}

function extractMeta(block) {
  const id = block.match(/\*\*Finding ID:\*\* (.+)/)?.[1]?.trim() || "";
  const file = block.match(/\*\*File:\*\* (.+)/)?.[1]?.trim() || "";
  const objectId = block.match(/\*\*Object:\*\* (.+)/)?.[1]?.trim() || "";
  const field = block.match(/\*\*Field:\*\* (.+)/)?.[1]?.trim() || "";
  const current = block.match(/### CURRENT\n([\s\S]*?)### Luna PROPOSED/)?.[1]?.trim() || "";
  return { findingId: id, file, objectId, field, current };
}

function patchOwnerBlock(block, decision) {
  const newBlock = block.replace(
    /### OWNER\n\*\*Status:\*\*\n\*\*OWNER NEW:\*\*\n\*\*OWNER note:\*\*\n/,
    `### OWNER\n**Status:** ${decision.status}\n**OWNER NEW:** ${decision.new}\n**OWNER note:** ${decision.note}\n`,
  );
  return newBlock;
}

function main() {
  let md = fs.readFileSync(REVIEW_MD, "utf8");
  const blocks = parseFindingBlocks(md);

  for (const [num, decision] of Object.entries(DECISIONS)) {
    if (!blocks[num]) {
      console.error(`Missing finding block ${num}`);
      process.exit(1);
    }
    const patched = patchOwnerBlock(blocks[num], decision);
    md = md.replace(blocks[num], patched);
    blocks[num] = patched;
  }

  fs.writeFileSync(REVIEW_MD, md, "utf8");

  const applyEntries = [];
  for (const [num, decision] of Object.entries(DECISIONS)) {
    if (decision.status !== "LABOT") continue;
    const meta = extractMeta(blocks[num]);
    const isPrimary = DEDUPE_APPLY_PRIMARY[meta.findingId] === num;
    const isDupTarget = DEDUPE_APPLY_PRIMARY[meta.findingId] && !isPrimary;
    if (isDupTarget) continue;

    applyEntries.push({
      findingNum: num,
      findingId: meta.findingId,
      file: "data/cs/courseLessons.js",
      objectId: meta.objectId,
      field: meta.field,
      current: meta.current,
      ownerNew: decision.new,
      verdict: "LABOT",
    });
  }

  const summary = {
    labot: 0,
    nelabot: 0,
    falsePositive: 0,
  };
  for (const d of Object.values(DECISIONS)) {
    if (d.status === "LABOT") summary.labot += 1;
    if (d.status === "NELABOT") summary.nelabot += 1;
    if (d.status === "FALSE_POSITIVE") summary.falsePositive += 1;
  }

  const applyJson = {
    meta: {
      scope: "CS Kurss Výslovnost — OWNER batch 001–050",
      source: "reports/cs-kurs-pronunciation-owner-review-all-findings.md",
      reviewed: "001–050",
      labotFindingRows: summary.labot,
      nelabot: summary.nelabot,
      falsePositive: summary.falsePositive,
      deduplicatedApplyTargets: applyEntries.length,
      productionChanges: 0,
    },
    dedupeNote:
      "Multiple finding rows may share one production target; apply map lists one entry per unique findingId.",
    apply: applyEntries,
  };

  fs.writeFileSync(APPLY_JSON, JSON.stringify(applyJson, null, 2), "utf8");

  const summaryLines = [
    "# CS–DE Kurss Výslovnost — OWNER decisions 001–050",
    "",
    "READ-ONLY documentation. **Production changes: 0**",
    "",
    "## Summary",
    "",
    "| Verdict | Count |",
    "|---------|-------|",
    `| LABOT (finding rows) | ${summary.labot} |`,
    `| NELABOT | ${summary.nelabot} (#049) |`,
    `| FALSE_POSITIVE | ${summary.falsePositive} (#033) |`,
    `| Deduplicated LABOT apply targets | **${applyEntries.length}** |`,
    "",
    "## OWNER overrides vs Luna",
    "",
    "- **#012/#013:** OWNER wording for ch / Ach-Laut / Ich-Laut (not fake Czech transcription).",
    "- **#018:** `lekce 2` not `přednášky 2` (CS Kurss UI terminology).",
    "- **#021:** `samohláskových zvuků` (OWNER) vs Luna `prvků`.",
    "- **#026:** LABOT `špígel` — Luna reason about `sch` not authoritative.",
    "- **#032:** `Ihn (ín)` not Luna `īn`.",
    "- **#033:** FALSE_POSITIVE — `(hūn)` already present.",
    "- **#042:** `tato / tito / tyto` without Luna `toto`.",
    "- **#049:** NELABOT — acceptable beginner wording.",
    "",
    "## Duplicate targets (one apply per target)",
    "",
    "| Primary finding | Duplicate rows | Target |",
    "|-----------------|----------------|--------|",
    "| 002 | 003 | `section[0]/example[1]` |",
    "| 004 | 005 | `section[0]/example[2]` |",
    "| 006 | 007 | `section[0]/example[4]` |",
    "| 030 | 031 | `section[3]/example[3]` |",
    "| 040 | 041 | `section[5]/example[0]` |",
    "| 044 | 045 | `section[5]/example[5]` |",
    "| 046 | 047 | `section[5]/example[6]` |",
    "",
    "## Apply map",
    "",
    `Partial JSON: ` + "`reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-001-050.json`",
    "",
  ];

  fs.writeFileSync(SUMMARY_MD, summaryLines.join("\n"), "utf8");

  console.log(`Updated ${REVIEW_MD}`);
  console.log(`Written ${SUMMARY_MD}`);
  console.log(`Apply targets: ${applyEntries.length} (from ${summary.labot} LABOT rows)`);
}

main();
