#!/usr/bin/env node
/**
 * Apply approved CS native translations from lesson workbook markdown.
 *
 * Usage:
 *   node scripts/apply-cs-kurss-native-lesson.js --lesson=1
 *   node scripts/apply-cs-kurss-native-lesson.js --lesson=1 --file=path/to/lesson-01-approved.md
 */
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  loadWindowGlobals,
  isSyncedWithWww
} = require("./lib/audit-common");

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

function parseArgs() {
  const argv = process.argv.slice(2);
  let lesson = null;
  let file = null;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--lesson=")) lesson = Number(argv[i].slice("--lesson=".length));
    else if (argv[i] === "--lesson") lesson = Number(argv[i + 1]);
    else if (argv[i].startsWith("--file=")) file = argv[i].slice("--file=".length);
    else if (argv[i] === "--file") file = argv[i + 1];
  }
  if (!lesson || lesson < 1 || lesson > 21) {
    console.error("Usage: node scripts/apply-cs-kurss-native-lesson.js --lesson=N [--file=approved.md]");
    process.exit(1);
  }
  if (!file) {
    file = path.join(
      ROOT,
      "reports/cs-kurss-lesson-sources",
      `lesson-${String(lesson).padStart(2, "0")}-approved.md`
    );
  }
  return { lesson, file: path.resolve(file) };
}

function parseApprovedMarkdown(content) {
  const meta = {};
  const byId = {};
  const lines = content.split("\n");
  let headers = [];

  for (const line of lines) {
    if (!line.startsWith("|")) {
      headers = [];
      continue;
    }
    if (line.includes("---")) continue;

    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim().replace(/\\\|/g, "|"));
    if (!cells.length) continue;

    if (headers.length === 0) {
      headers = cells.map((h) => h.toLowerCase());
      continue;
    }

    const approvedIdx = headers.findIndex((h) => h.includes("approved"));
    if (approvedIdx < 0) continue;
    const approved = cells[approvedIdx];
    if (!approved) continue;

    const idCell = cells[0];
    const idMatch = idCell.match(/`([^`]+)`/);
    if (idMatch) {
      byId[idMatch[1]] = approved;
      continue;
    }

    const fieldIdx = headers.findIndex((h) => h === "field");
    if (fieldIdx >= 0 && cells[fieldIdx]) {
      meta[cells[fieldIdx].toLowerCase()] = approved;
    }
  }

  return { meta, byId };
}

function parseAccordions(html) {
  const blocks = [];
  const re = /<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[0]);
  }
  return blocks;
}

function replaceAccordionBlock(html, index, newBlock) {
  let i = 0;
  return html.replace(/<details class="lesson1-accordion"[^>]*>[\s\S]*?<\/details>/gi, (match) => {
    if (i === index) {
      i += 1;
      return newBlock;
    }
    i += 1;
    return match;
  });
}

function applyLegacyHtml(lessonNum, html, byId) {
  let out = html;
  const key = `kurssLesson${lessonNum}`;

  if (byId["legacy/intro"]) {
    out = out.replace(
      /(<p class="kurss-lesson-intro">)([\s\S]*?)(<\/p>)/i,
      `$1${byId["legacy/intro"]}$3`
    );
  }

  const accordions = parseAccordions(out);
  for (let ai = 0; ai < accordions.length; ai++) {
    let block = accordions[ai];

    const summaryId = `accordion[${ai}]/summary`;
    if (byId[summaryId]) {
      const text = byId[summaryId].replace(/^\d+\.\s*/, "");
      block = block.replace(
        /(<summary>[\s\S]*?<span class="lesson1-number[^"]*">[\s\S]*?<\/span><span>)([\s\S]*?)(<\/span><span class="lesson1-chevron">)/i,
        `$1${text}$3`
      );
    }

    const lvConj = [...block.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)];
    for (let ci = 0; ci < lvConj.length; ci++) {
      const inner = lvConj[ci][1];
      let spanIdx = 0;
      const newInner = inner.replace(/<span>([\s\S]*?)<\/span>/g, (match, content) => {
        const transIdx = Math.floor(spanIdx / 2);
        const isTranslation = spanIdx % 2 === 1;
        spanIdx += 1;
        if (!isTranslation) return match;
        const id = `accordion[${ai}]/conjugation[${ci}]/translation[${transIdx}]`;
        if (!byId[id]) return match;
        return `<span>${byId[id]}</span>`;
      });
      block = block.replace(lvConj[ci][0], `<div class="lesson1-conjugation">${newInner}</div>`);
    }

    const verbH4Re = /<h4><span class="lesson1-verb-icon">[\s\S]*?<\/span>([\s\S]*?)<\/h4>/g;
    let vhi = 0;
    block = block.replace(verbH4Re, (match, body) => {
      const id = `accordion[${ai}]/verbH4[${vhi}]/native`;
      vhi += 1;
      if (!byId[id]) return match;
      const d = findDash(body);
      const sep = d?.sep || " — ";
      const de = d?.de || body.split(sep)[0].trim();
      return match.replace(body, `${de}${sep}${byId[id]}`);
    });

    let exIdx = 0;
    block = block.replace(/<div class="kurss-example">([\s\S]*?)<\/div>/g, (match, inner) => {
      const suffixId = `accordion[${ai}]/example[${exIdx}]/native`;
      const fullId = `accordion[${ai}]/example[${exIdx}]`;
      exIdx += 1;

      if (byId[fullId] && !byId[suffixId]) {
        return `<div class="kurss-example">${byId[fullId]}</div>`;
      }
      if (byId[suffixId]) {
        const plain = inner.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").trim();
        const d = findDash(plain);
        const sep = d?.sep || " — ";
        const de = d?.de || plain;
        let native = byId[suffixId];
        const nd = findDash(native);
        if (nd) native = nd.native;
        if (native.startsWith("en)")) native = native.replace(/^en\)\s*[–—-]\s*/, "");
        const merged = `${de}${sep}${native}`;
        if (inner.includes("<br")) {
          const parts = merged.split(/\s+[–—-]\s+/);
          if (parts.length >= 2) {
            return `<div class="kurss-example">${parts[0]}<br>${parts.slice(1).join(" ")}</div>`;
          }
        }
        return `<div class="kurss-example">${merged}</div>`;
      }
      if (byId[fullId]) {
        return `<div class="kurss-example">${byId[fullId]}</div>`;
      }
      return match;
    });

    let noteIdx = 0;
    block = block.replace(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/g, (match, inner) => {
      const id = `accordion[${ai}]/grammarNote[${noteIdx}]`;
      noteIdx += 1;
      if (!byId[id]) return match;
      return `<div class="lesson1-grammar-note">${byId[id]}</div>`;
    });

    let infoIdx = 0;
    block = block.replace(/class="lesson1-info[^"]*"[^>]*>([\s\S]*?)<\/div>/g, (match, inner) => {
      const id = `accordion[${ai}]/info[${infoIdx}]`;
      infoIdx += 1;
      if (!byId[id]) return match;
      const iconMatch = inner.match(/^<span class="lesson1-info-icon"[\s\S]*?<\/span>/);
      const icon = iconMatch ? iconMatch[0] : "";
      const rest = inner.replace(/^<span class="lesson1-info-icon"[\s\S]*?<\/span>/, "").trim();
      if (rest.startsWith("<span")) {
        return match.replace(inner, `${icon}<span>${byId[id]}</span>`);
      }
      return match.replace(inner, `${icon}${byId[id]}`);
    });

    let hintIdx = 0;
    block = block.replace(/class="lesson1-training-hint">([\s\S]*?)<\/p>/g, (match, inner) => {
      const id = `accordion[${ai}]/trainingHint[${hintIdx}]`;
      hintIdx += 1;
      if (!byId[id]) return match;
      return match.replace(inner, byId[id]);
    });

    out = replaceAccordionBlock(out, ai, block);
  }

  return out;
}

function applySections(lessonKey, sections, byId) {
  return sections.map((section, si) => {
    const out = { ...section };
    const titleId = `section[${si}]/title`;
    if (byId[titleId]) out.title = byId[titleId];

    if (Array.isArray(out.items)) {
      out.items = out.items.map((item, ii) => {
        if (typeof item !== "string") {
          if (item && typeof item === "object") {
            const copy = { ...item };
            const hId = `section[${si}]/item[${ii}]/heading`;
            const tId = `section[${si}]/item[${ii}]/text`;
            if (byId[hId]) copy.heading = byId[hId];
            if (byId[tId]) copy.text = byId[tId];
            return copy;
          }
          return item;
        }
        const suffixId = `section[${si}]/item[${ii}]/native`;
        const fullId = `section[${si}]/item[${ii}]`;
        if (byId[suffixId]) {
          const d = findDash(item);
          const sep = d?.sep || " — ";
          const de = d?.de || item;
          let native = byId[suffixId];
          const nd = findDash(native);
          if (nd) native = nd.native;
          return `${de}${sep}${native}`;
        }
        if (byId[fullId]) return byId[fullId];
        return item;
      });
    }

    if (Array.isArray(out.cards)) {
      out.cards = out.cards.map((card, ci) => {
        const copy = { ...card };
        const frontId = `section[${si}]/card[${ci}]/front`;
        const promptId = `section[${si}]/card[${ci}]/prompt`;
        const taskId = `section[${si}]/card[${ci}]/task`;
        if (byId[frontId]) {
          if (copy.lv !== undefined) copy.lv = byId[frontId];
          if (copy.front !== undefined) copy.front = byId[frontId];
          if (copy.cs !== undefined) copy.cs = byId[frontId];
        }
        if (byId[promptId]) copy.prompt = byId[promptId];
        if (byId[taskId]) copy.task = byId[taskId];
        if (Array.isArray(copy.forms)) {
          copy.forms = copy.forms.map((form, fi) => {
            const fCopy = { ...form };
            const ftId = `section[${si}]/card[${ci}]/forms[${fi}]/task`;
            if (byId[ftId]) fCopy.task = byId[ftId];
            return fCopy;
          });
        }
        return copy;
      });
    }

    return out;
  });
}

function applyTraining(lessonNum, training, byId) {
  const out = { ...training };
  if (lessonNum >= 1 && lessonNum <= 6) {
    const key = `lesson${lessonNum}TrainingCardsCs`;
    const deck = [...(out[key] || [])];
    for (let i = 0; i < deck.length; i++) {
      const id = `training/card[${i}]/front`;
      if (byId[id]) deck[i] = { ...deck[i], front: byId[id] };
    }
    out[key] = deck;
  }
  if (lessonNum === 7) {
    const key = "lesson7ExerciseCardsCs";
    const deck = [...(out[key] || [])];
    for (let i = 0; i < deck.length; i++) {
      const lvId = `training/exercise[${i}]/lv`;
      const frontId = `training/exercise[${i}]/front`;
      if (byId[lvId]) deck[i] = { ...deck[i], lv: byId[lvId] };
      if (byId[frontId]) deck[i] = { ...deck[i], front: byId[frontId] };
      for (const k of ["du", "ihr", "sie"]) {
        const kid = `training/exercise[${i}]/${k}`;
        if (byId[kid]) deck[i] = { ...deck[i], [k]: byId[kid] };
      }
    }
    out[key] = deck;
  }
  return out;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function writeCourseLessons(filePath, html, data) {
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 7; i++) {
    const lessonKey = `kurssLesson${i}`;
    const htmlEscaped = JSON.stringify(html[lessonKey]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${lessonKey}`
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function writeTrainingCards(filePath, cards) {
  const keys = Object.keys(cards).filter((k) => k.endsWith("Cs"));
  const blocks = keys.map((key) => `window.${key} = ${JSON.stringify(cards[key], null, 2)};`);
  const content = `// Czech course training cards for CS-DE Kurss lessons 1-7.\n\n${blocks.join("\n\n")}\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function main() {
  const { lesson, file } = parseArgs();
  if (!fs.existsSync(file)) {
    console.error(`Approved file not found: ${file}`);
    process.exit(1);
  }

  const { meta, byId } = parseApprovedMarkdown(fs.readFileSync(file, "utf8"));
  const lessonKey = `kurssLesson${lesson}`;

  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const csHtml = { ...csWin.COURSE_LESSON_HTML };
  const csData = JSON.parse(JSON.stringify(csWin.COURSE_LESSON_DATA));
  let csTraining = loadWindowGlobals("data/cs/courseTrainingCards.js");

  if (meta.title) csData[lessonKey].title = meta.title;
  if (meta.subtitle) csData[lessonKey].subtitle = meta.subtitle;
  if (meta.intro) csData[lessonKey].intro = meta.intro;

  if (lesson <= 7 && csHtml[lessonKey]) {
    csHtml[lessonKey] = applyLegacyHtml(lesson, csHtml[lessonKey], byId);
    csData[lessonKey].legacyHtml = csHtml[lessonKey];
  }

  if (csData[lessonKey]?.sections) {
    csData[lessonKey].sections = applySections(lessonKey, csData[lessonKey].sections, byId);
  }

  csTraining = applyTraining(lesson, csTraining, byId);

  writeCourseLessons(path.join(ROOT, "data/cs/courseLessons.js"), csHtml, csData);
  writeCourseLessons(path.join(ROOT, "www/data/cs/courseLessons.js"), csHtml, csData);
  writeTrainingCards(path.join(ROOT, "data/cs/courseTrainingCards.js"), csTraining);
  writeTrainingCards(path.join(ROOT, "www/data/cs/courseTrainingCards.js"), csTraining);

  const applied = Object.keys(byId).length + Object.keys(meta).length;
  console.log(`Applied lesson ${lesson} from ${file}`);
  console.log(`Fields applied: ${applied}`);
  console.log(`primary ↔ www courseLessons: ${isSyncedWithWww("data/cs/courseLessons.js") ? "PASS" : "FAIL"}`);
  console.log(`primary ↔ www training: ${isSyncedWithWww("data/cs/courseTrainingCards.js") ? "PASS" : "FAIL"}`);
}

main();
