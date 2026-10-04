# Koda lasīšana

ui.js un www/ui.js Study masīvus iet ar .map un .length. Fiksēta examples[2] vai comparison[3] nolasīšana nav atrasta.
sectionAccentRules(section, index) ņem sectionAccents masīva indeksu. Ja akcentu masīvs ir īsāks, rezultāts ir undefined. formatStudyText un withComparisonFieldFallback tad lieto paša rindas tekstu. Papildu rinda netiek izmesta un neapstādina renderi. Akcents var iztrūkt.
COMPARISON_WORD_ACCENTS[index % garums] iet cikliski. Garāks masīvs neiziet ārpus akcentu saraksta.
languages/*.js šos masīvus pēc indeksa nelasa.

| file | line | text |
|---|---:|---|
| ui.js | 5924 | for (const item of study.words ¦¦ []) { |
| ui.js | 5935 | for (const example of study.examples ¦¦ []) { |
| ui.js | 5940 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| ui.js | 5960 | const wordItems = Array.isArray(study.words) ? study.words : []; |
| ui.js | 6045 | for (const item of study.words ¦¦ []) { |
| ui.js | 6052 | for (const example of study.examples ¦¦ []) { |
| ui.js | 6058 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| ui.js | 6110 | for (const item of study.words ¦¦ []) { |
| ui.js | 6114 | for (const example of study.examples ¦¦ []) { |
| ui.js | 6117 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| ui.js | 7876 | ¦¦ hasStudyFieldContent(study.examples); |
| ui.js | 7879 | return hasStudyFieldContent(study.words) |
| ui.js | 7880 | ¦¦ hasStudyFieldContent(study.items) |
| ui.js | 7881 | ¦¦ hasStudyFieldContent(study.terms) |
| ui.js | 7882 | ¦¦ hasStudyFieldContent(study.comparison) |
| ui.js | 7883 | ¦¦ hasStudyFieldContent(study.comparisonTable) |
| ui.js | 7892 | ¦¦ hasStudyFieldContent(study.examples) |
| ui.js | 7893 | ¦¦ hasStudyFieldContent(study.comparison) |
| ui.js | 7897 | ¦¦ hasStudyFieldContent(study.words) |
| ui.js | 7898 | ¦¦ hasStudyFieldContent(study.items) |
| ui.js | 7899 | ¦¦ hasStudyFieldContent(study.terms); |
| ui.js | 8012 | ¦¦ (Array.isArray(study.examples) && study.examples.length) |
| ui.js | 8034 | const examplesHtml = Array.isArray(study.examples) && study.examples.length |
| ui.js | 8035 | ? `<div class="minimal-study-examples">${study.examples.map((example) => { |
| ui.js | 8060 | const sectionAccentRules = (section, index) => { |
| ui.js | 8189 | const indexedRules = sectionAccentRules(section, index); |
| ui.js | 8194 | ? fieldAccentRules(sectionAccentRules(section, index), field) ¦¦ fieldAccentRules(study.sectionAccents?.[section], field) |
| ui.js | 8199 | const examples = (Array.isArray(study.examples) ? study.examples : []).map((example, index) => { |
| ui.js | 8200 | const accentRules = sectionAccentRules("examples", index); |
| ui.js | 8207 | const comparison = state.revealed && Array.isArray(study.comparison) && study.comparison.length ? ` |
| ui.js | 8214 | ${study.comparison.map((item, index) => { |
| ui.js | 8215 | const accentRules = sectionAccentRules("comparison", index); |
| ui.js | 8227 | ${study.info.map((line, index) => `<p>${STUDY_SECTION_ICONS.info} ${formatStudyText(line, sectionAccentRules("info", index))}</p>`).join("")} |
| ui.js | 8308 | const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : [])); |
| ui.js | 8351 | const accentRules = item.sectionAccents ¦¦ sectionAccentRules("comparisonCards", index); |
| ui.js | 8352 | const accent = item.accent ¦¦ COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length]; |
| ui.js | 8371 | const examplesBlock = Array.isArray(item.examples) && item.examples.length ? ` |
| ui.js | 8403 | const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : [])); |
| ui.js | 8408 | const accentRules = sectionAccentRules("comparisonCards", index); |
| ui.js | 8409 | const accent = item.accent ¦¦ COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length]; |
| ui.js | 8431 | const rows = Array.isArray(study.comparisonTable) ? study.comparisonTable : (Array.isArray(study.matrix) ? study.matrix : (Array.isArray(study.comparisonRows) ? study.comparisonRow |
| ui.js | 8444 | const accentRules = sectionAccentRules("comparisonTable", index) ¦¦ sectionAccentRules("matrix", index); |
| ui.js | 8466 | ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("importantComparison", index))}</p>`).join("")} |
| ui.js | 8477 | ${value.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("important", index))}</p>`).join("")} |
| ui.js | 8490 | const accentRules = sectionAccentRules("mistakes", index); |
| ui.js | 8511 | ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("remember", index))}</p>`).join("")} |
| ui.js | 8540 | ? (sectionAccentRules("important", 0)?.text ¦¦ sectionAccentRules("important", 0) ¦¦ study.accents?.important) |
| ui.js | 8541 | : (sectionAccentRules("important", 0)?.example ¦¦ sectionAccentRules("important", index) ¦¦ study.accents?.important); |
| www/ui.js | 5924 | for (const item of study.words ¦¦ []) { |
| www/ui.js | 5935 | for (const example of study.examples ¦¦ []) { |
| www/ui.js | 5940 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| www/ui.js | 5960 | const wordItems = Array.isArray(study.words) ? study.words : []; |
| www/ui.js | 6045 | for (const item of study.words ¦¦ []) { |
| www/ui.js | 6052 | for (const example of study.examples ¦¦ []) { |
| www/ui.js | 6058 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| www/ui.js | 6110 | for (const item of study.words ¦¦ []) { |
| www/ui.js | 6114 | for (const example of study.examples ¦¦ []) { |
| www/ui.js | 6117 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| www/ui.js | 7876 | ¦¦ hasStudyFieldContent(study.examples); |
| www/ui.js | 7879 | return hasStudyFieldContent(study.words) |
| www/ui.js | 7880 | ¦¦ hasStudyFieldContent(study.items) |
| www/ui.js | 7881 | ¦¦ hasStudyFieldContent(study.terms) |
| www/ui.js | 7882 | ¦¦ hasStudyFieldContent(study.comparison) |
| www/ui.js | 7883 | ¦¦ hasStudyFieldContent(study.comparisonTable) |
| www/ui.js | 7892 | ¦¦ hasStudyFieldContent(study.examples) |
| www/ui.js | 7893 | ¦¦ hasStudyFieldContent(study.comparison) |
| www/ui.js | 7897 | ¦¦ hasStudyFieldContent(study.words) |
| www/ui.js | 7898 | ¦¦ hasStudyFieldContent(study.items) |
| www/ui.js | 7899 | ¦¦ hasStudyFieldContent(study.terms); |
| www/ui.js | 8012 | ¦¦ (Array.isArray(study.examples) && study.examples.length) |
| www/ui.js | 8034 | const examplesHtml = Array.isArray(study.examples) && study.examples.length |
| www/ui.js | 8035 | ? `<div class="minimal-study-examples">${study.examples.map((example) => { |
| www/ui.js | 8060 | const sectionAccentRules = (section, index) => { |
| www/ui.js | 8189 | const indexedRules = sectionAccentRules(section, index); |
| www/ui.js | 8194 | ? fieldAccentRules(sectionAccentRules(section, index), field) ¦¦ fieldAccentRules(study.sectionAccents?.[section], field) |
| www/ui.js | 8199 | const examples = (Array.isArray(study.examples) ? study.examples : []).map((example, index) => { |
| www/ui.js | 8200 | const accentRules = sectionAccentRules("examples", index); |
| www/ui.js | 8207 | const comparison = state.revealed && Array.isArray(study.comparison) && study.comparison.length ? ` |
| www/ui.js | 8214 | ${study.comparison.map((item, index) => { |
| www/ui.js | 8215 | const accentRules = sectionAccentRules("comparison", index); |
| www/ui.js | 8227 | ${study.info.map((line, index) => `<p>${STUDY_SECTION_ICONS.info} ${formatStudyText(line, sectionAccentRules("info", index))}</p>`).join("")} |
| www/ui.js | 8308 | const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : [])); |
| www/ui.js | 8351 | const accentRules = item.sectionAccents ¦¦ sectionAccentRules("comparisonCards", index); |
| www/ui.js | 8352 | const accent = item.accent ¦¦ COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length]; |
| www/ui.js | 8371 | const examplesBlock = Array.isArray(item.examples) && item.examples.length ? ` |
| www/ui.js | 8403 | const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : [])); |
| www/ui.js | 8408 | const accentRules = sectionAccentRules("comparisonCards", index); |
| www/ui.js | 8409 | const accent = item.accent ¦¦ COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length]; |
| www/ui.js | 8431 | const rows = Array.isArray(study.comparisonTable) ? study.comparisonTable : (Array.isArray(study.matrix) ? study.matrix : (Array.isArray(study.comparisonRows) ? study.comparisonRow |
| www/ui.js | 8444 | const accentRules = sectionAccentRules("comparisonTable", index) ¦¦ sectionAccentRules("matrix", index); |
| www/ui.js | 8466 | ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("importantComparison", index))}</p>`).join("")} |
| www/ui.js | 8477 | ${value.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("important", index))}</p>`).join("")} |
| www/ui.js | 8490 | const accentRules = sectionAccentRules("mistakes", index); |
| www/ui.js | 8511 | ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("remember", index))}</p>`).join("")} |
| www/ui.js | 8540 | ? (sectionAccentRules("important", 0)?.text ¦¦ sectionAccentRules("important", 0) ¦¦ study.accents?.important) |
| www/ui.js | 8541 | : (sectionAccentRules("important", 0)?.example ¦¦ sectionAccentRules("important", index) ¦¦ study.accents?.important); |
| www/ui.js | 5924 | for (const item of study.words ¦¦ []) { |
| www/ui.js | 5935 | for (const example of study.examples ¦¦ []) { |
| www/ui.js | 5940 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| www/ui.js | 5960 | const wordItems = Array.isArray(study.words) ? study.words : []; |
| www/ui.js | 6045 | for (const item of study.words ¦¦ []) { |
| www/ui.js | 6052 | for (const example of study.examples ¦¦ []) { |
| www/ui.js | 6058 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| www/ui.js | 6110 | for (const item of study.words ¦¦ []) { |
| www/ui.js | 6114 | for (const example of study.examples ¦¦ []) { |
| www/ui.js | 6117 | for (const row of study.comparison ¦¦ study.comparisonTable ¦¦ []) { |
| www/ui.js | 7876 | ¦¦ hasStudyFieldContent(study.examples); |
| www/ui.js | 7879 | return hasStudyFieldContent(study.words) |
| www/ui.js | 7880 | ¦¦ hasStudyFieldContent(study.items) |
| www/ui.js | 7881 | ¦¦ hasStudyFieldContent(study.terms) |
| www/ui.js | 7882 | ¦¦ hasStudyFieldContent(study.comparison) |
| www/ui.js | 7883 | ¦¦ hasStudyFieldContent(study.comparisonTable) |
| www/ui.js | 7892 | ¦¦ hasStudyFieldContent(study.examples) |
| www/ui.js | 7893 | ¦¦ hasStudyFieldContent(study.comparison) |
| www/ui.js | 7897 | ¦¦ hasStudyFieldContent(study.words) |
| www/ui.js | 7898 | ¦¦ hasStudyFieldContent(study.items) |
| www/ui.js | 7899 | ¦¦ hasStudyFieldContent(study.terms); |
| www/ui.js | 8012 | ¦¦ (Array.isArray(study.examples) && study.examples.length) |
| www/ui.js | 8034 | const examplesHtml = Array.isArray(study.examples) && study.examples.length |
| www/ui.js | 8035 | ? `<div class="minimal-study-examples">${study.examples.map((example) => { |
| www/ui.js | 8060 | const sectionAccentRules = (section, index) => { |
| www/ui.js | 8189 | const indexedRules = sectionAccentRules(section, index); |
| www/ui.js | 8194 | ? fieldAccentRules(sectionAccentRules(section, index), field) ¦¦ fieldAccentRules(study.sectionAccents?.[section], field) |
| www/ui.js | 8199 | const examples = (Array.isArray(study.examples) ? study.examples : []).map((example, index) => { |
| www/ui.js | 8200 | const accentRules = sectionAccentRules("examples", index); |
| www/ui.js | 8207 | const comparison = state.revealed && Array.isArray(study.comparison) && study.comparison.length ? ` |
| www/ui.js | 8214 | ${study.comparison.map((item, index) => { |
| www/ui.js | 8215 | const accentRules = sectionAccentRules("comparison", index); |
| www/ui.js | 8227 | ${study.info.map((line, index) => `<p>${STUDY_SECTION_ICONS.info} ${formatStudyText(line, sectionAccentRules("info", index))}</p>`).join("")} |
| www/ui.js | 8308 | const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : [])); |
| www/ui.js | 8351 | const accentRules = item.sectionAccents ¦¦ sectionAccentRules("comparisonCards", index); |
| www/ui.js | 8352 | const accent = item.accent ¦¦ COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length]; |
| www/ui.js | 8371 | const examplesBlock = Array.isArray(item.examples) && item.examples.length ? ` |
| www/ui.js | 8403 | const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : [])); |
| www/ui.js | 8408 | const accentRules = sectionAccentRules("comparisonCards", index); |
| www/ui.js | 8409 | const accent = item.accent ¦¦ COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length]; |
| www/ui.js | 8431 | const rows = Array.isArray(study.comparisonTable) ? study.comparisonTable : (Array.isArray(study.matrix) ? study.matrix : (Array.isArray(study.comparisonRows) ? study.comparisonRow |
| www/ui.js | 8444 | const accentRules = sectionAccentRules("comparisonTable", index) ¦¦ sectionAccentRules("matrix", index); |
| www/ui.js | 8466 | ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("importantComparison", index))}</p>`).join("")} |
| www/ui.js | 8477 | ${value.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("important", index))}</p>`).join("")} |
| www/ui.js | 8490 | const accentRules = sectionAccentRules("mistakes", index); |
| www/ui.js | 8511 | ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("remember", index))}</p>`).join("")} |
| www/ui.js | 8540 | ? (sectionAccentRules("important", 0)?.text ¦¦ sectionAccentRules("important", 0) ¦¦ study.accents?.important) |
| www/ui.js | 8541 | : (sectionAccentRules("important", 0)?.example ¦¦ sectionAccentRules("important", index) ¦¦ study.accents?.important); |
