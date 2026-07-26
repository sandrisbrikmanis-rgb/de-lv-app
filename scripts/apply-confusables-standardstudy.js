#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const blocks = JSON.parse(fs.readFileSync(path.join(__dirname, "confusables-standardstudy-blocks.json"), "utf8"));

function buildStudyBlock(data) {
  return `    "study": {
      "id": "${data.id}",
      "layout": "standardStudy",
      "translation": "${data.translation}",
      "explanation": "${data.explanation.replace(/"/g, '\\"')}",
      "examples": [
${data.examples.map((e) => `        {\n          "de": "${e.de}",\n          "lv": "${e.lv}"\n        }`).join(",\n")}
      ],
      "comparison": [
${data.comparison.map((c) => `        {\n          "word": "${c.word}",\n          "meaning": "${c.meaning}",\n          "example": "${c.example.replace(/"/g, '\\"')}"\n        }`).join(",\n")}
      ],
      "tip": "${data.tip.replace(/"/g, '\\"')}",
      "important": "${data.important.replace(/"/g, '\\"')}",
      "sectionAccents": ${JSON.stringify(data.sectionAccents, null, 8).replace(/\n/g, "\n      ")}
    }`;
}

function injectStudy(fileRel, deWord, studyData, extraFields = "") {
  const filePath = path.join(root, fileRel);
  let content = fs.readFileSync(filePath, "utf8");
  const studyBlock = buildStudyBlock(studyData);

  const patterns = [
    {
      from: `    "de": "${deWord}",\n${extraFields}    "lv": "${studyData.translation}",\n    "level": "B1"\n  }`,
      to: `    "de": "${deWord}",\n${extraFields}    "lv": "${studyData.translation}",\n    "level": "B1",\n${studyBlock}\n  }`,
    },
    {
      from: `    "de": "${deWord}",\n${extraFields}    "lv": "${studyData.translation}",\n    "level": "C2"\n  }`,
      to: `    "de": "${deWord}",\n${extraFields}    "lv": "${studyData.translation}",\n    "level": "C2",\n${studyBlock}\n  }`,
    },
  ];

  for (const { from, to } of patterns) {
    if (content.includes(from)) {
      if (content.includes(`"id": "${studyData.id}"`)) {
        console.log(`SKIP (already exists): ${fileRel} ${deWord}`);
        return false;
      }
      content = content.replace(from, to);
      fs.writeFileSync(filePath, content);
      console.log(`OK: ${fileRel} ${deWord}`);
      return true;
    }
  }
  throw new Error(`Pattern not found for ${fileRel} ${deWord}`);
}

let count = 0;
for (const [file, cards] of Object.entries(blocks)) {
  for (const [deWord, studyData] of Object.entries(cards)) {
    let extra = "";
    if (deWord === "Vernunft") extra = '    "de_article": "die",\n';
    if (deWord === "Verstand") extra = '    "de_article": "der",\n    "de_plural": null,\n';
    if (deWord === "Handarbeit") extra = '    "de_article": "die",\n    "de_plural": "die Handarbeiten",\n';
    if (deWord === "Handwerk") extra = '    "de_article": "das",\n    "de_plural": "die Handwerke",\n';
    if (injectStudy(`data/et/${file}`, deWord, studyData, extra)) count++;
  }
}

console.log(`Injected ${count} StandardStudy blocks.`);
