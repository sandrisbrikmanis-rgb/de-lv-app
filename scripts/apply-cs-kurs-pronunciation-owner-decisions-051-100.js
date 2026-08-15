#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions 051–100 into review markdown + partial apply map.
 * Usage: node scripts/apply-cs-kurs-pronunciation-owner-decisions-051-100.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const REVIEW_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-review-all-findings.md");
const SUMMARY_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-decisions-051-100.md");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-051-100.json");

const DECISIONS = {
  "051": {
    status: "LABOT",
    new: "Saal (zál) — sál",
    note: "Duplicate target — apply once (same as #050).",
  },
  "052": { status: "LABOT", new: "Saat (zát) — setí", note: "" },
  "053": { status: "LABOT", new: "Staat (štát) — stát", note: "" },
  "054": {
    status: "NELABOT",
    new: "",
    note: "Sekcijas klasifikācija (Boot/Moor/Moos = garie monoftongi, ne divskaņi) — nav konkrēta lv lauka teksta LABOT.",
  },
  "055": { status: "NELABOT", new: "", note: "Same as #054 — sekcijas tēma, ne kartītes teksts." },
  "056": { status: "NELABOT", new: "", note: "Same as #054 — sekcijas tēma, ne kartītes teksts." },
  "057": {
    status: "LABOT",
    new: "Německé dvojhlásky se vyslovují jako spojení dvou samohláskových zvuků v jedné slabice.",
    note: "",
  },
  "058": { status: "LABOT", new: "Vater (fátr) — otec", note: "" },
  "059": { status: "LABOT", new: "Schrank (šrank) — skříň", note: "" },
  "060": { status: "LABOT", new: "Schränke (šrénke) — skříně", note: "" },
  "061": { status: "LABOT", new: "Tal (tál) — údolí", note: "" },
  "062": {
    status: "LABOT",
    new: "Ä je přehláska písmene a. Vyslovuje se podobně jako české e.",
    note: "",
  },
  "063": { status: "LABOT", new: "Röschen (röšen) — růžička", note: "" },
  "064": {
    status: "LABOT",
    new: "Röschen (röšen) — růžička",
    note: "Duplicate target — apply once (same as #063).",
  },
  "065": {
    status: "NELABOT",
    new: "",
    note: "Piemērs paliek; ö artikulāciju labo #068.",
  },
  "066": { status: "NELABOT", new: "", note: "Piemērs paliek; ö skaidrojums #068." },
  "067": { status: "NELABOT", new: "", note: "Piemērs paliek; ö skaidrojums #068." },
  "068": {
    status: "LABOT",
    new: "Ö je přehláska písmene o. Vyslovuje se podobně jako české e, ale se zaokrouhlenými rty.",
    note: "",
  },
  "069": { status: "LABOT", new: "Kürzer (kürcer) — kratší", note: "" },
  "070": {
    status: "NELABOT",
    new: "",
    note: "Künste paliek piemērs; ü skaidrojums #072.",
  },
  "071": { status: "LABOT", new: "Mütter (müter) — matky", note: "" },
  "072": {
    status: "LABOT",
    new: "Ü je německá přehláska u. Vyslovuje se s jazykem v poloze podobné českému i a se zaokrouhlenými rty.",
    note: "",
  },
  "073": { status: "LABOT", new: "Die Räder (réder) — kola", note: "" },
  "074": { status: "LABOT", new: "Bäder (béder) — koupele", note: "" },
  "075": {
    status: "LABOT",
    new: "Na konci slova se v němčině znělé souhlásky b, d a g obvykle vyslovují nezněle jako p, t a k.",
    note: "",
  },
  "076": { status: "LABOT", new: "Mich (mih) — mě / mne", note: "" },
  "077": { status: "LABOT", new: "Dich (dih) — tebe / tě", note: "" },
  "078": { status: "LABOT", new: "Noch (noch) — ještě", note: "" },
  "079": { status: "LABOT", new: "Nacht (nacht) — noc", note: "" },
  "080": {
    status: "LABOT",
    new: "Německé „ch“ má dvě hlavní výslovnosti: měkké [ç] a tvrdé [x]. Tvrdé [x] se podobá českému „ch“, zatímco měkké [ç] se vyslovuje více vpředu v ústech.",
    note: "OWNER — īsāks, dabiskāks nekā Luna „silně změkčené, přední ch“.",
  },
  "081": {
    status: "LABOT",
    new: "Schüler (šüler) — žák",
    note: "OWNER — žák, ne student (Luna fokussēja transkripciju).",
  },
  "082": { status: "LABOT", new: "Schraube (šraube) — šroub", note: "" },
  "083": { status: "LABOT", new: "„sch“ se v němčině vyslovuje jako české „š“.", note: "" },
  "084": {
    status: "FALSE_POSITIVE",
    new: "",
    note: "ī ir garuma zīme (špīlen), ne LV atlikums — deterministiskā detektora FP.",
  },
  "085": { status: "LABOT", new: "Sprung (šprung) — skok", note: "" },
  "086": {
    status: "LABOT",
    new: "Sprung (šprung) — skok",
    note: "Duplicate target — apply once (same as #085).",
  },
  "087": { status: "LABOT", new: "Stehen (štéen) — stát", note: "" },
  "088": { status: "LABOT", new: "Stall (štal) — stáj", note: "" },
  "089": {
    status: "LABOT",
    new: "Stall (štal) — stáj",
    note: "Duplicate target — apply once (same as #088).",
  },
  "090": { status: "LABOT", new: "Stand (štant) — pozice / místo", note: "" },
  "091": { status: "LABOT", new: "Quartier (kvartýr) — čtvrť / ubytování", note: "" },
  "092": { status: "LABOT", new: "Quer (kvér) — napříč", note: "" },
  "093": { status: "LABOT", new: "Sagen (zágen) — říci", note: "" },
  "094": { status: "LABOT", new: "Zahl (cál) — číslo", note: "" },
  "095": {
    status: "LABOT",
    new: "„S“ na začátku slova často zní jako „z“. Písmeno „z“ v němčině zní jako české „c“.",
    note: "",
  },
  "096": { status: "LABOT", new: "Vater (fátr) — otec", note: "" },
  "097": {
    status: "LABOT",
    new: "V němčině se „v“ často vyslovuje jako „f“. V cizích slovech často zní jako české „v“.",
    note: "",
  },
  "098": {
    status: "LABOT",
    new: "Felix (féliks) — Felix",
    note: "OWNER — féliks, ne Luna fēliks.",
  },
  "099": {
    status: "LABOT",
    new: "Mystik (müstik) — mystika",
    note: "Saglabāt ü kā pedagoģisku norādi (#072).",
  },
  "100": {
    status: "LABOT",
    new: "Mythe (müte) — mýtus",
    note: "Saglabāt ü vizuāli; konsekventi ar bloku.",
  },
};

/** Primary finding per target; duplicates and cross-batch skips handled in buildApply */
const DEDUPE_APPLY_PRIMARY = {
  "kurssPronunciationLesson/section[6]/example[0]": "050",
  "kurssPronunciationLesson/section[8]/example[1]": "063",
  "kurssConsonantsLesson/section[3]/example[1]": "085",
  "kurssConsonantsLesson/section[3]/example[3]": "088",
};

const SKIP_APPLY_ALREADY_IN_001_050 = new Set(["050"]);

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
  return block.replace(
    /### OWNER\n\*\*Status:\*\*[^\n]*\n\*\*OWNER NEW:\*\*[^\n]*\n\*\*OWNER note:\*\*[^\n]*\n/,
    `### OWNER\n**Status:** ${decision.status}\n**OWNER NEW:** ${decision.new}\n**OWNER note:** ${decision.note}\n`,
  );
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
    const primary = DEDUPE_APPLY_PRIMARY[meta.findingId];
    if (primary && primary !== num) continue;
    if (SKIP_APPLY_ALREADY_IN_001_050.has(num)) continue;

    applyEntries.push({
      findingNum: num,
      findingId: meta.findingId,
      file: meta.file || "data/cs/courseLessons.js",
      objectId: meta.objectId,
      field: meta.field,
      current: meta.current,
      ownerNew: decision.new,
      verdict: "LABOT",
    });
  }

  const summary = { labot: 0, nelabot: 0, falsePositive: 0 };
  for (const d of Object.values(DECISIONS)) {
    if (d.status === "LABOT") summary.labot += 1;
    if (d.status === "NELABOT") summary.nelabot += 1;
    if (d.status === "FALSE_POSITIVE") summary.falsePositive += 1;
  }

  const applyJson = {
    meta: {
      scope: "CS Kurss Výslovnost — OWNER batch 051–100",
      source: "reports/cs-kurs-pronunciation-owner-review-all-findings.md",
      reviewed: "051–100",
      labotFindingRows: summary.labot,
      nelabot: summary.nelabot,
      falsePositive: summary.falsePositive,
      deduplicatedApplyTargets: applyEntries.length,
      productionChanges: 0,
      note: "#051 same target as #050 (apply in batch 001–050); not duplicated here.",
    },
    dedupeNote:
      "Multiple finding rows may share one production target; apply map lists one entry per unique findingId not already in batch 001–050.",
    apply: applyEntries,
  };

  fs.writeFileSync(APPLY_JSON, JSON.stringify(applyJson, null, 2), "utf8");

  const summaryLines = [
    "# CS–DE Kurss Výslovnost — OWNER decisions 051–100",
    "",
    "READ-ONLY documentation. **Production changes: 0**",
    "",
    "## Summary",
    "",
    "| Verdict | Count |",
    "|---------|-------|",
    `| LABOT (finding rows) | ${summary.labot} |`,
    `| NELABOT | ${summary.nelabot} (#054, #055, #056, #065, #066, #067, #070) |`,
    `| FALSE_POSITIVE | ${summary.falsePositive} (#084) |`,
    `| Deduplicated LABOT apply targets (this batch) | **${applyEntries.length}** |`,
    "",
    "## OWNER overrides vs Luna",
    "",
    "- **#054–056:** NELABOT — sekcijas tēma (monoftongi vs divskaņi), ne kartītes teksts.",
    "- **#065–067, #070:** NELABOT — piemēri paliek; ö/ü skaidrojums #068/#072.",
    "- **#080:** OWNER īsāks ch skaidrojums nekā Luna.",
    "- **#081:** žák, ne student.",
    "- **#084:** FALSE_POSITIVE — špīlen garuma zīme.",
    "- **#098:** Felix (féliks).",
    "- **#099–100:** müstik/müte — saglabāt ü vizuāli.",
    "",
    "## Duplicate targets (one apply per target)",
    "",
    "| Primary | Duplicate rows | Target |",
    "|---------|----------------|--------|",
    "| 050 | 051 | `kurssPronunciationLesson/section[6]/example[0]` (051 in batch 001–050 map) |",
    "| 063 | 064 | `section[8]/example[1]` |",
    "| 085 | 086 | `kurssConsonantsLesson/section[3]/example[1]` |",
    "| 088 | 089 | `kurssConsonantsLesson/section[3]/example[3]` |",
    "",
    "## Apply map",
    "",
    "Partial JSON: `reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-051-100.json`",
    "",
    "**DE = 0**, **LV MASTER = 0**.",
    "",
  ];

  fs.writeFileSync(SUMMARY_MD, summaryLines.join("\n"), "utf8");

  console.log(`Updated ${REVIEW_MD}`);
  console.log(`Written ${SUMMARY_MD}`);
  console.log(`Apply targets (051–100 batch): ${applyEntries.length} (from ${summary.labot} LABOT rows)`);
}

main();
