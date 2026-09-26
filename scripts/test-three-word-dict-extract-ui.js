#!/usr/bin/env node
"use strict";

const {
  extractFromDictCcPlainText,
  isDictionaryUiNoise,
  filterTranslationCandidates,
} = require("./lib/g2-a1-production-current/three-word-dict-extract");

function main() {
  const blockers = [];
  if (!isDictionaryUiNoise("Words: Others")) blockers.push({ code: "UI_WORDS_OTHERS" });
  if (!isDictionaryUiNoise("Words: Verbs")) blockers.push({ code: "UI_WORDS_VERBS" });
  if (isDictionaryUiNoise("visitor")) blockers.push({ code: "VISITOR_IS_VALID" });

  const text = [
    "Besucher",
    "{n}",
    "1",
    "visitor",
    "Words: Others",
    "misc",
    "2",
    "guest",
  ].join("\n");
  const out = extractFromDictCcPlainText(text, "Besucher", { partOfSpeech: "noun" });
  if (out.some((t) => /words:/i.test(t))) blockers.push({ code: "EXTRACTED_UI", out });
  if (!out.includes("visitor")) blockers.push({ code: "MISSING_VISITOR", out });

  const filtered = filterTranslationCandidates(["Words: Others", "bread"], "Brot", "en");
  if (filtered.some((t) => /words:/i.test(t))) blockers.push({ code: "FILTER_LEAK" });

  const pass = blockers.length === 0;
  console.log(JSON.stringify({ pass, blockers, out, filtered }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
