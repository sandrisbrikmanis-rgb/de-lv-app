#!/usr/bin/env node
/**
 * Generate per-lesson CS native translation source files (lessons 1–21).
 * DE fields are locked (LV-DE master). Fill APPROVED_CS columns via ChatGPT/owner.
 *
 * Usage: node scripts/prepare-cs-kurss-lesson-native-sources.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadWindowGlobals, readFile } = require("./lib/audit-common");

const OUT_DIR = path.join(ROOT, "reports", "cs-kurss-lesson-sources");
const DASH_RE = /\s*[–—\-]\s*/;

function findDash(text) {
  const s = String(text || "");
  const m = s.match(DASH_RE);
  if (!m) return null;
  const idx = s.search(DASH_RE);
  return {
    sep: m[0],
    de: s.slice(0, idx).trim(),
    native: s.slice(idx + m[0].length).trim()
  };
}

function lvNativeFromDash(lvText) {
  const d = findDash(lvText);
  return d ? d.native : "";
}

function mdEscape(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function loadLvTrainingCards() {
  const code = readFile("ui.js");
  const cards = {};
  for (let i = 1; i <= 6; i++) {
    const re = new RegExp(`const lesson${i}TrainingCards = (\\[[\\s\\S]*?\\]);`);
    const m = code.match(re);
    if (m) cards[`lesson${i}`] = vm.runInNewContext(m[1]);
  }
  const m7 = code.match(/const lesson7ExerciseCards = (\[[\s\S]*?\]);/);
  if (m7) cards.lesson7 = vm.runInNewContext(m7[1]);
  return cards;
}

function parseAccordions(html) {
  const blocks = [];
  const re = /<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const block = m[1];
    const summary = block.match(/<summary>([\s\S]*?)<\/summary>/i);
    const title = summary
      ? summary[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
      : "";
    blocks.push({ title, html: block });
  }
  return blocks;
}

function extractLegacyUnits(lvHtml, csHtml, lessonNum) {
  const units = [];
  const lvAcc = parseAccordions(lvHtml);
  const csAcc = parseAccordions(csHtml);

  if (csHtml.match(/class="kurss-lesson-intro"/)) {
    const lvIntro = (lvHtml.match(/class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i) || [])[1];
    const csIntro = (csHtml.match(/class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i) || [])[1];
    if (csIntro) {
      units.push({
        id: `legacy/intro`,
        kind: "intro",
        lv: stripTags(lvIntro),
        currentCs: stripTags(csIntro),
        de: "",
        note: "Lesson intro paragraph"
      });
    }
  }

  for (let ai = 0; ai < Math.max(lvAcc.length, csAcc.length); ai++) {
    const lvA = lvAcc[ai] || { title: "", html: "" };
    const csA = csAcc[ai] || { title: "", html: "" };
    const secLabel = `accordion[${ai}]`;

    units.push({
      id: `${secLabel}/summary`,
      kind: "sectionTitle",
      lv: stripTags(lvA.title),
      currentCs: stripTags(csA.title),
      de: "",
      note: `Accordion section title`
    });

    const lvConj = [...lvA.html.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)];
    const csConj = [...csA.html.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)];
    for (let ci = 0; ci < Math.max(lvConj.length, csConj.length); ci++) {
      const lvSpans = [...(lvConj[ci]?.[1] || "").matchAll(/<span>([\s\S]*?)<\/span>/g)].map((x) => x[1]);
      const csSpans = [...(csConj[ci]?.[1] || "").matchAll(/<span>([\s\S]*?)<\/span>/g)].map((x) => x[1]);
      for (let si = 0; si < Math.max(lvSpans.length, csSpans.length); si++) {
        if (si % 2 === 1) {
          units.push({
            id: `${secLabel}/conjugation[${ci}]/translation[${Math.floor(si / 2)}]`,
            kind: "conjugationTranslation",
            lv: lvSpans[si] || "",
            currentCs: csSpans[si] || "",
            de: lvSpans[si - 1] !== undefined ? `(pronoun context in DE block ${ci})` : "",
            note: "Czech translation span in conjugation table (DE strong tags are locked)"
          });
        }
      }
    }

    const lvVerbH4 = [...lvA.html.matchAll(/<h4><span class="lesson1-verb-icon">[\s\S]*?<\/span>([\s\S]*?)<\/h4>/g)].map((x) => x[1]);
    const csVerbH4 = [...csA.html.matchAll(/<h4><span class="lesson1-verb-icon">[\s\S]*?<\/span>([\s\S]*?)<\/h4>/g)].map((x) => x[1]);
    for (let hi = 0; hi < Math.max(lvVerbH4.length, csVerbH4.length); hi++) {
      const lvD = findDash(lvVerbH4[hi] || "");
      const csD = findDash(csVerbH4[hi] || "");
      if (lvD || csD) {
        units.push({
          id: `${secLabel}/verbH4[${hi}]/native`,
          kind: "verbHeadingNative",
          lv: lvD?.native || "",
          currentCs: csD?.native || csVerbH4[hi] || "",
          de: lvD?.de || csD?.de || "",
          note: "Czech meaning after em-dash in verb card h4 (DE infinitive is locked)"
        });
      }
    }

    const lvExamples = [...lvA.html.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((x) => x[1]);
    const csExamples = [...csA.html.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((x) => x[1]);
    for (let ei = 0; ei < Math.max(lvExamples.length, csExamples.length); ei++) {
      const lvEx = lvExamples[ei] || "";
      const csEx = csExamples[ei] || "";
      const lvDash = findDash(stripTags(lvEx));
      const csDash = findDash(stripTags(csEx));

      if (lvDash || csDash) {
        units.push({
          id: `${secLabel}/example[${ei}]/native`,
          kind: "exampleNativeSuffix",
          lv: lvDash?.native || stripTags(lvEx),
          currentCs: csDash?.native || stripTags(csEx),
          de: lvDash?.de || csDash?.de || "",
          note: "Czech suffix after em-dash (DE prefix locked). HTML <br> preserved in apply step."
        });
      } else if (!isGermanOnly(lvEx)) {
        units.push({
          id: `${secLabel}/example[${ei}]`,
          kind: "exampleNativeFull",
          lv: stripTags(lvEx),
          currentCs: stripTags(csEx),
          de: "",
          note: "Full Czech/native explanation card (no German DE line)"
        });
      }
    }

    const lvNotes = [...lvA.html.matchAll(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/g)].map((x) => x[1]);
    const csNotes = [...csA.html.matchAll(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/g)].map((x) => x[1]);
    for (let ni = 0; ni < Math.max(lvNotes.length, csNotes.length); ni++) {
      units.push({
        id: `${secLabel}/grammarNote[${ni}]`,
        kind: "grammarNote",
        lv: stripTags(lvNotes[ni]),
        currentCs: stripTags(csNotes[ni]),
        de: "",
        note: "Grammar explanation paragraph"
      });
    }

    const lvInfos = [...lvA.html.matchAll(/class="lesson1-info[^"]*"[^>]*>([\s\S]*?)<\/div>/g)].map((x) => x[1]);
    const csInfos = [...csA.html.matchAll(/class="lesson1-info[^"]*"[^>]*>([\s\S]*?)<\/div>/g)].map((x) => x[1]);
    for (let ii = 0; ii < Math.max(lvInfos.length, csInfos.length); ii++) {
      units.push({
        id: `${secLabel}/info[${ii}]`,
        kind: "infoBox",
        lv: stripTags(lvInfos[ii]),
        currentCs: stripTags(csInfos[ii]),
        de: "",
        note: "Info box text"
      });
    }

    const lvHints = [...lvA.html.matchAll(/class="lesson1-training-hint">([\s\S]*?)<\/p>/g)].map((x) => x[1]);
    const csHints = [...csA.html.matchAll(/class="lesson1-training-hint">([\s\S]*?)<\/p>/g)].map((x) => x[1]);
    for (let hi = 0; hi < Math.max(lvHints.length, csHints.length); hi++) {
      units.push({
        id: `${secLabel}/trainingHint[${hi}]`,
        kind: "trainingHint",
        lv: stripTags(lvHints[hi]),
        currentCs: stripTags(csHints[hi]),
        de: "",
        note: "Flashcard UI hint"
      });
    }
  }

  return units;
}

function stripTags(html) {
  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/[⌃⌄]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isGermanOnly(text) {
  const plain = stripTags(text);
  if (!plain) return true;
  if (findDash(plain)) return false;
  return /^[A-Za-zÄÖÜßäöüß0-9\s,.!?"'„“():;?\-]+$/.test(plain)
    && /\b(ich|du|er|sie|wir|ihr|der|die|das|und|nicht|ist|sind|ein|eine)\b/i.test(plain);
}

function extractSectionUnits(lvLesson, csLesson, lessonKey) {
  const units = [];
  const lvSections = lvLesson?.sections || [];
  const csSections = csLesson?.sections || [];

  for (let si = 0; si < Math.max(lvSections.length, csSections.length); si++) {
    const lvS = lvSections[si] || {};
    const csS = csSections[si] || {};
    const secId = `section[${si}]`;

    if (csS.title) {
      units.push({
        id: `${secId}/title`,
        kind: "sectionTitle",
        lv: lvS.title || "",
        currentCs: csS.title || "",
        de: "",
        note: "Section title"
      });
    }

    if (Array.isArray(csS.items)) {
      csS.items.forEach((item, ii) => {
        const lvItem = lvS.items?.[ii] ?? "";
        if (typeof item !== "string") {
          if (item && typeof item === "object") {
            if (item.heading) {
              units.push({
                id: `${secId}/item[${ii}]/heading`,
                kind: "grammarHeading",
                lv: lvS.items?.[ii]?.heading || "",
                currentCs: item.heading,
                de: item.heading,
                note: "Grammar block heading (often German term — verify; usually keep as-is)"
              });
            }
            if (item.text) {
              units.push({
                id: `${secId}/item[${ii}]/text`,
                kind: "grammarText",
                lv: lvS.items?.[ii]?.text || "",
                currentCs: item.text,
                de: "",
                note: "Grammar explanation text (Czech)"
              });
            }
          }
          return;
        }
        const lvDash = findDash(lvItem);
        const csDash = findDash(item);
        if (lvDash || csDash) {
          units.push({
            id: `${secId}/item[${ii}]/native`,
            kind: "vocabNativeSuffix",
            lv: lvNativeFromDash(lvItem),
            currentCs: csDash?.native || lvNativeFromDash(item),
            de: lvDash?.de || csDash?.de || "",
            note: "Vocabulary: Czech after em-dash (DE prefix locked)"
          });
        } else if (String(item) !== String(lvItem)) {
          units.push({
            id: `${secId}/item[${ii}]`,
            kind: "sectionItemNative",
            lv: String(lvItem),
            currentCs: String(item),
            de: String(lvItem),
            note: "Non-dialog item (verify if Czech needed)"
          });
        }
      });
    }

    if (Array.isArray(csS.cards)) {
      csS.cards.forEach((card, ci) => {
        const lvCard = lvS.cards?.[ci] || {};
        if (card.prompt && card.answer && card.task) {
          units.push({
            id: `${secId}/card[${ci}]/prompt`,
            kind: "exercisePrompt",
            lv: lvCard.prompt || "",
            currentCs: card.prompt,
            de: card.answer,
            note: "Exercise prompt (DE answer locked)"
          });
          units.push({
            id: `${secId}/card[${ci}]/task`,
            kind: "exerciseTask",
            lv: lvCard.task || "",
            currentCs: card.task,
            de: card.answer,
            note: "Exercise task instruction"
          });
          return;
        }
        if (card.base && Array.isArray(card.forms)) {
          card.forms.forEach((form, fi) => {
            const lvForm = lvCard.forms?.[fi] || {};
            if (form.task) {
              units.push({
                id: `${secId}/card[${ci}]/forms[${fi}]/task`,
                kind: "multiStepTask",
                lv: lvForm.task || "",
                currentCs: form.task,
                de: form.text || lvForm.text || "",
                note: "Multi-step exercise task"
              });
            }
          });
          return;
        }
        const front = card.lv || card.front || card.cs || "";
        const back = card.de || card.back || card.answer || "";
        const lvFront = lvCard.lv || lvCard.front || "";
        if (front) {
          units.push({
            id: `${secId}/card[${ci}]/front`,
            kind: "translateFront",
            lv: lvFront,
            currentCs: front,
            de: back,
            note: "Translate card front (Czech prompt; DE back locked)"
          });
        }
      });
    }
  }

  return units;
}

function extractTrainingUnits(lessonNum, lvTraining, csTraining) {
  const units = [];
  if (lessonNum >= 1 && lessonNum <= 6) {
    const lvDeck = lvTraining[`lesson${lessonNum}`] || [];
    const csDeck = csTraining[`lesson${lessonNum}TrainingCardsCs`] || [];
    for (let i = 0; i < Math.max(lvDeck.length, csDeck.length); i++) {
      units.push({
        id: `training/card[${i}]/front`,
        kind: "trainingFront",
        lv: lvDeck[i]?.front || "",
        currentCs: csDeck[i]?.front || "",
        de: csDeck[i]?.back || lvDeck[i]?.back || "",
        note: "Training flashcard front (Czech); DE back locked"
      });
    }
  }
  if (lessonNum === 7) {
    const lvEx = lvTraining.lesson7 || [];
    const csEx = csTraining.lesson7ExerciseCardsCs || [];
    for (let i = 0; i < Math.max(lvEx.length, csEx.length); i++) {
      const csC = csEx[i] || {};
      const lvC = lvEx[i] || {};
      if (csC.infinitive) {
        if (csC.lv) {
          units.push({
            id: `training/exercise[${i}]/lv`,
            kind: "imperativeLabel",
            lv: lvC.lv || "",
            currentCs: csC.lv,
            de: csC.infinitive,
            note: "Imperative exercise Czech label"
          });
        }
        for (const k of ["du", "ihr", "sie"]) {
          if (csC[k]) {
            units.push({
              id: `training/exercise[${i}]/${k}`,
              kind: "imperativeForm",
              lv: lvC[k] || "",
              currentCs: csC[k],
              de: csC.infinitive,
              note: `Imperative form hint (${k})`
            });
          }
        }
      } else if (csC.front || csC.cs) {
        units.push({
          id: `training/exercise[${i}]/front`,
          kind: "trainingFront",
          lv: lvC.front || "",
          currentCs: csC.front || csC.cs || "",
          de: csC.back || lvC.back || "",
          note: "Lesson 7 exercise card front"
        });
      }
    }
  }
  return units;
}

function renderLessonFile(lessonNum, lvLesson, csLesson, lvHtml, csHtml, units) {
  const key = `kurssLesson${lessonNum}`;
  const lines = [
    `# ${key} — CS native translation source`,
    ``,
    `> **Workflow:** Translate LV reference → Czech. Fill **APPROVED_CS** only.`,
    `> **DE LOCKED:** Do not change DE column / German fragments.`,
    `> **Apply:** \`node scripts/apply-cs-kurss-native-lesson.js --lesson=${lessonNum}\` (after approval)`,
    ``,
    `## Metadata`,
    ``,
    `| Field | LV reference | CURRENT_CS | APPROVED_CS |`,
    `|-------|--------------|------------|-------------|`,
    `| title | ${mdEscape(lvLesson?.title)} | ${mdEscape(csLesson?.title)} | |`,
    `| subtitle | ${mdEscape(lvLesson?.subtitle)} | ${mdEscape(csLesson?.subtitle)} | |`,
  ];
  if (csLesson?.intro) {
    lines.push(`| intro | ${mdEscape(lvLesson?.intro)} | ${mdEscape(csLesson?.intro)} | |`);
  }
  lines.push(``);

  const byKind = {};
  for (const u of units) {
    if (!byKind[u.kind]) byKind[u.kind] = [];
    byKind[u.kind].push(u);
  }

  const kindOrder = [
    ["sectionTitle", "Section titles"],
    ["intro", "Intro"],
    ["infoBox", "Info boxes"],
    ["verbHeadingNative", "Verb headings (Czech suffix)"],
    ["conjugationTranslation", "Conjugation translations"],
    ["exampleNativeSuffix", "Examples — Czech suffix (DE locked)"],
    ["exampleNativeFull", "Examples — full Czech text"],
    ["grammarNote", "Grammar notes"],
    ["vocabNativeSuffix", "Vocabulary — Czech suffix (DE locked)"],
    ["grammarHeading", "Grammar headings"],
    ["grammarText", "Grammar text"],
    ["sectionItemNative", "Other section items"],
    ["translateFront", "Translate cards — front"],
    ["exercisePrompt", "Exercise — prompt"],
    ["exerciseTask", "Exercise — task"],
    ["multiStepTask", "Multi-step — task"],
    ["trainingFront", "Training cards — front"],
    ["imperativeLabel", "Imperative — label"],
    ["imperativeForm", "Imperative — form hint"],
    ["trainingHint", "Training UI hints"]
  ];

  for (const [kind, heading] of kindOrder) {
    const rows = byKind[kind];
    if (!rows?.length) continue;
    lines.push(`## ${heading}`);
    lines.push(``);
    if (kind.includes("Suffix") || kind === "verbHeadingNative" || kind === "vocabNativeSuffix") {
      lines.push(`| ID | DE (locked) | LV reference (suffix) | CURRENT_CS (suffix) | APPROVED_CS (suffix) |`);
      lines.push(`|----|-------------|------------------------|---------------------|----------------------|`);
      for (const u of rows) {
        lines.push(`| \`${u.id}\` | ${mdEscape(u.de)} | ${mdEscape(u.lv)} | ${mdEscape(u.currentCs)} | |`);
      }
    } else if (kind === "translateFront" || kind === "trainingFront") {
      lines.push(`| ID | DE back (locked) | LV reference (front) | CURRENT_CS (front) | APPROVED_CS (front) |`);
      lines.push(`|----|------------------|----------------------|--------------------|---------------------|`);
      for (const u of rows) {
        lines.push(`| \`${u.id}\` | ${mdEscape(u.de)} | ${mdEscape(u.lv)} | ${mdEscape(u.currentCs)} | |`);
      }
    } else if (kind === "conjugationTranslation") {
      lines.push(`| ID | LV reference | CURRENT_CS | APPROVED_CS |`);
      lines.push(`|----|--------------|------------|-------------|`);
      for (const u of rows) {
        lines.push(`| \`${u.id}\` | ${mdEscape(u.lv)} | ${mdEscape(u.currentCs)} | |`);
      }
    } else {
      lines.push(`| ID | LV reference | CURRENT_CS | APPROVED_CS |`);
      lines.push(`|----|--------------|------------|-------------|`);
      for (const u of rows) {
        lines.push(`| \`${u.id}\` | ${mdEscape(u.lv)} | ${mdEscape(u.currentCs)} | |`);
      }
    }
    lines.push(``);
  }

  lines.push(`---`);
  lines.push(`Total units: **${units.length}**`);
  return lines.join("\n");
}

function main() {
  const lvWin = loadWindowGlobals("data/courseLessons.js");
  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const csTraining = loadWindowGlobals("data/cs/courseTrainingCards.js");
  const lvTraining = loadLvTrainingCards();

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const index = [];
  for (let n = 1; n <= 21; n++) {
    const key = `kurssLesson${n}`;
    const lvLesson = lvWin.COURSE_LESSON_DATA[key] || {};
    const csLesson = csWin.COURSE_LESSON_DATA[key] || {};
    const units = [];

    if (n <= 7) {
      units.push(...extractLegacyUnits(
        lvWin.COURSE_LESSON_HTML[key] || "",
        csWin.COURSE_LESSON_HTML[key] || "",
        n
      ));
    }
    if (n >= 8 || csLesson.sections) {
      units.push(...extractSectionUnits(lvLesson, csLesson, key));
    }
    units.push(...extractTrainingUnits(n, lvTraining, csTraining));

    const fileName = `lesson-${String(n).padStart(2, "0")}.md`;
    const content = renderLessonFile(n, lvLesson, csLesson, null, null, units);
    fs.writeFileSync(path.join(OUT_DIR, fileName), content, "utf8");
    index.push({ lesson: n, file: fileName, units: units.length });
    console.log(`Wrote ${fileName} (${units.length} units)`);
  }

  const readme = [
    `# CS-DE Kurss — 21 lesson native translation sources`,
    ``,
    `Generated by \`scripts/prepare-cs-kurss-lesson-native-sources.js\`.`,
    ``,
    `## Instructions`,
    ``,
    `1. Open each \`lesson-NN.md\` file.`,
    `2. Use **LV reference** column as meaning source; write Czech in **APPROVED_CS**.`,
    `3. **Never edit DE (locked)** columns — German comes from LV-DE master.`,
    `4. After all APPROVED_CS filled, run apply script (TBD) per lesson.`,
    ``,
    `## Files`,
    ``,
    `| Lesson | File | Units |`,
    `|--------|------|-------|`,
    ...index.map((r) => `| ${r.lesson} | [${r.file}](./${r.file}) | ${r.units} |`),
    ``,
    `**Total units:** ${index.reduce((s, r) => s + r.units, 0)}`,
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "README.md"), readme, "utf8");
  console.log(`\nDone. Output: ${OUT_DIR}`);
  console.log(`Total units: ${index.reduce((s, r) => s + r.units, 0)}`);
}

main();
