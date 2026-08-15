#!/usr/bin/env node
/**
 * Restructure kurssPronounsLesson HTML to match kurssArticlesLesson (artikuli-*) UI.
 * UI-only: preserves all text content; changes markup/classes only.
 */
const fs = require("fs");
const path = require("path");

const DATA_ROOTS = [
  path.join(__dirname, "..", "data"),
  path.join(__dirname, "..", "www", "data"),
];

function listCourseLessonFiles() {
  const files = [];
  const seen = new Set();
  for (const dataRoot of DATA_ROOTS) {
    const base = path.join(dataRoot, "courseLessons.js");
    if (fs.existsSync(base) && !seen.has(base)) {
      files.push(base);
      seen.add(base);
    }
    if (!fs.existsSync(dataRoot)) continue;
    for (const entry of fs.readdirSync(dataRoot, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const candidate = path.join(dataRoot, entry.name, "courseLessons.js");
      if (fs.existsSync(candidate) && !seen.has(candidate)) {
        files.push(candidate);
        seen.add(candidate);
      }
    }
  }
  return files.sort();
}

function extractPronounsLesson(code) {
  const match = code.match(/"kurssPronounsLesson":\s*"((?:\\.|[^"\\])*)"/);
  if (!match) return null;
  return JSON.parse(`"${match[1]}"`);
}

function escapeJsString(value) {
  return JSON.stringify(value).slice(1, -1);
}

function normalizeLegacyMarkup(html) {
  return html
    .replace(/class\s*=\s*"/g, 'class="')
    .replace(/class="course-lesson-section"/g, 'class="kurss-lesson-section"')
    .replace(/class="course-examples"/g, 'class="kurss-examples"')
    .replace(/class="course-example"/g, 'class="kurss-example"')
    .replace(/<section class="kurs-[^"]*">/g, '<section class="kurss-lesson-section">')
    .replace(/<\/sekcja>/gi, "</section>")
    .replace(/<\/bölüm>/gi, "</section>");
}

function sectionIcon(headerText, body) {
  const header = headerText.trim();
  if (/^Nominativ/i.test(header) || /^Nominatif/i.test(header) || /^Nominative/i.test(header) || /^Mianownik/i.test(header) || /^Nominatiiv/i.test(header)) {
    return "N";
  }
  if (/^Akkusativ/i.test(header) || /^Accusatif/i.test(header) || /^Accusative/i.test(header) || /^Biernik/i.test(header) || /^Suçlayıcı/i.test(header) || /^Akusatiiv/i.test(header)) {
    return "A";
  }
  if (/^Dativ/i.test(header) || /^Datif/i.test(header) || /^Dative/i.test(header) || /^Celownik/i.test(header) || /^Datiiv/i.test(header)) {
    return "D";
  }
  if (header.includes("?") || body.includes("kurss-summary-list")) {
    return "?";
  }
  return "•";
}

function isRememberSection(headerText, body) {
  const trimmedBody = body.trim();
  if (!/<p[\s>]/i.test(trimmedBody)) return false;
  if (/<div class="(?:kurss-examples|artikuli-grid)"/i.test(trimmedBody)) return false;
  if (/<ul class="kurss-summary-list"/i.test(trimmedBody)) return false;

  const header = headerText.trim();
  if (/Atceries|Remember|Denk|Vergiss|Atgādin|Zapamatuj|Nezapomeň|Pamatuj|Nu uita|N'oublie|No olvides|Husk|Glem ikke|Μην ξεχν|Не забуд|Не забравай|Ne uita|Nu uitați|Pamiętaj|Nezabudni|Ne pozabi|Ne zaboravi|Ne zaboravite|Unutma|Hatırla|Zapamti|Pea meeles|Muista|Husk|Kom ihåg|Lembre|Lembra|N'oubliez|Atcerieties/i.test(header)) {
    return true;
  }

  // Generic fallback: tip-only section (single paragraph, no lists/grids).
  return !/<ul[\s>]/i.test(trimmedBody) && (trimmedBody.match(/<p[\s>]/gi) || []).length === 1;
}

function transformPronounsHtml(html) {
  let result = normalizeLegacyMarkup(html).trim();
  const alreadyArtikuli = result.includes("artikuli-block");

  if (!alreadyArtikuli) {
    result = result.replace(
      /<p class="kurss-lesson-intro">([\s\S]*?)<\/p>/i,
      `<div class="artikuli-info artikuli-intro-info">\n    <span class="artikuli-info-icon">i</span>\n    <div>$1</div>\n  </div>`
    );
  } else if (!result.includes("artikuli-intro-info")) {
    result = result.replace(
      /<p class="kurss-lesson-intro">([\s\S]*?)<\/p>/i,
      `<div class="artikuli-info artikuli-intro-info">\n    <span class="artikuli-info-icon">i</span>\n    <div>$1</div>\n  </div>`
    );
  }

  let bottomInfo = "";
  const sectionPattern = alreadyArtikuli
    ? /<section class="artikuli-block">\s*<h4 class="artikuli-header"><span>[^<]*<\/span>([\s\S]*?)<\/h4>([\s\S]*?)<\/section>/gi
    : /<section class="kurss-lesson-section">\s*<h4>([\s\S]*?)<\/h4>([\s\S]*?)<\/section>/gi;

  result = result.replace(sectionPattern, (match, headerText, body) => {
    if (isRememberSection(headerText, body)) {
      const paragraph = body.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      if (paragraph) {
        bottomInfo = `\n\n  <div class="artikuli-info artikuli-bottom-info">\n    <span class="artikuli-info-icon">i</span>\n    <div>${paragraph[1].trim()}</div>\n  </div>`;
        return "";
      }
    }
    return match;
  });

  if (!alreadyArtikuli) {
    result = result.replace(
      /<section class="kurss-lesson-section">\s*<h4>([\s\S]*?)<\/h4>([\s\S]*?)<\/section>/gi,
      (match, headerText, body) => {
        const icon = sectionIcon(headerText, body);
        const transformedBody = body
          .trim()
          .replace(/<div class="kurss-examples">/gi, '<div class="artikuli-grid">');

        return `\n  <section class="artikuli-block">\n    <h4 class="artikuli-header"><span>${icon}</span>${headerText.trim()}</h4>\n    ${transformedBody}\n  </section>`;
      }
    );
  } else {
    result = result.replace(
      /<section class="artikuli-block">\s*<h4 class="artikuli-header"><span>[^<]*<\/span>([\s\S]*?)<\/h4>([\s\S]*?)<\/section>/gi,
      (match, headerText, body) => {
        const icon = sectionIcon(headerText, body);
        const transformedBody = body
          .trim()
          .replace(/<div class="kurss-examples">/gi, '<div class="artikuli-grid">');

        return `\n  <section class="artikuli-block">\n    <h4 class="artikuli-header"><span>${icon}</span>${headerText.trim()}</h4>\n    ${transformedBody}\n  </section>`;
      }
    );
  }

  result = result.replace(/^\s*<h3>/, "\n  <h3>");

  if (bottomInfo) {
    result = result.replace(/<div class="artikuli-info artikuli-bottom-info">[\s\S]*?<\/div>\s*$/i, "");
    result = result.trimEnd() + bottomInfo + "\n";
  }

  return result;
}

function updateFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const html = extractPronounsLesson(original);
  if (!html) {
    return { filePath, status: "skipped", reason: "no kurssPronounsLesson" };
  }

  const transformed = transformPronounsHtml(html);
  if (transformed === html) {
    return { filePath, status: "unchanged" };
  }

  const escaped = escapeJsString(transformed);
  const updated = original.replace(
    /"kurssPronounsLesson":\s*"(?:\\.|[^"\\])*"/,
    `"kurssPronounsLesson": "${escaped}"`
  );

  if (updated === original) {
    return { filePath, status: "failed", reason: "replace did not apply" };
  }

  fs.writeFileSync(filePath, updated, "utf8");
  return { filePath, status: "updated" };
}

function main() {
  const results = listCourseLessonFiles().map(updateFile);
  const summary = results.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  console.log("Pronouns UI repair summary:", summary);
  for (const item of results) {
    if (item.status === "failed") {
      console.error("FAILED:", item.filePath, item.reason || "");
    }
  }
}

main();
