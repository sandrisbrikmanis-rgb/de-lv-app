#!/usr/bin/env node
"use strict";
/**
 * Apply reviewed Spanish phonetic standard + reclassify false phonetic LABOT.
 * Usage: node scripts/fix-es-kurss-lessons-phonetic-standard.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  PHONETIC_LABOT_NEW,
  SEMANTIC_LABOT_NEW,
} = require("./lib/es-kurss-lessons-phonetic-standard");

const IN_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");

function main() {
  const data = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  let labotUpdated = 0;
  let reclassified = 0;

  for (const d of data.decisions) {
    // 27 phonetic rows: CURRENT already matches ES Kurss phonetic standard → NELABOT
    if (PHONETIC_LABOT_NEW[d.id] && d.status === "LABOT") {
      const standard = PHONETIC_LABOT_NEW[d.id];
      if (d.current === standard) {
        d.status = "NELABOT";
        d.new = d.current;
        d.ownerDecision =
          "NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.";
        d.reason =
          "Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.";
        d.changeTag = "RE_EVALUATED";
        reclassified++;
        continue;
      }
    }

    const reviewed = SEMANTIC_LABOT_NEW[d.id];
    if (!reviewed || d.status !== "LABOT") continue;
    if (d.new === reviewed) continue;

    d.new = reviewed;
    d.ownerDecision =
      "LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.";
    d.reason = "Semantic or pronunciation-section correction verified against DE/LV master.";
    d.changeTag = "RE_EVALUATED";
    labotUpdated++;
  }

  data.summary.labot = data.decisions.filter((d) => d.status === "LABOT").length;
  data.summary.nelabot = data.decisions.filter((d) => d.status === "NELABOT").length;
  data.summary.labotSameAsCurrent = data.decisions.filter(
    (x) => x.status === "LABOT" && String(x.new || "") === String(x.current || ""),
  ).length;

  fs.writeFileSync(IN_JSON, JSON.stringify(data, null, 2));
  console.log(
    JSON.stringify(
      {
        labotUpdated,
        reclassifiedToNelabot: reclassified,
        labotTotal: data.summary.labot,
        labotSameAsCurrent: data.summary.labotSameAsCurrent,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) main();
