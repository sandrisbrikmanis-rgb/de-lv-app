const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function fixFile(rel) {
  const filePath = path.join(root, rel);
  let text = fs.readFileSync(filePath, "utf8");
  let changes = 0;

  const replacements = [
    [
      `  {
    "de": "Gehalt",
    "de_article": "der",
    "de_plural": "die Gehälter",
    "lv": "saturs",
    "level": "B1"
  }`,
      `  {
    "de": "Gehalt",
    "de_article": "das",
    "de_plural": "die Gehälter",
    "lv": "saturs",
    "level": "B1"
  }`,
      "Gehalt saturs -> das",
    ],
    [
      `  {
    "de": "Gehalt",
    "de_article": "das",
    "de_plural": "die Gehälter",
    "lv": "alga",
    "level": "B1"
  }`,
      `  {
    "de": "Gehalt",
    "de_article": "der",
    "de_plural": "die Gehälter",
    "lv": "alga",
    "level": "B1"
  }`,
      "Gehalt alga -> der",
    ],
    [
      `  {
    "de": "Schwangerschaftstest",
    "de_article": "die",
    "de_plural": "die Schwangerschaftstests",
    "lv": "grūtniecības tests",
    "level": "B1"
  },
`,
      "",
      "remove die Schwangerschaftstest",
    ],
    [
      `  {
    "de": "Virus",
    "de_article": "der",
    "de_plural": "die Viren",
    "lv": "vīruss",
    "level": "B1"
  },
`,
      "",
      "remove der Virus duplicate",
    ],
    [
      `"de_plural": "die Verwandte",
    "lv": "radinieks"`,
      `"de_plural": "die Verwandten",
    "lv": "radinieks"`,
      "Verwandte plural radinieks",
    ],
    [
      `"de_plural": "die Verwandte",
    "lv": "radiniece"`,
      `"de_plural": "die Verwandten",
    "lv": "radiniece"`,
      "Verwandte plural radiniece",
    ],
    [
      `  {
    "de": "der/die Homosexuelle",
    "lv": "homoseksuālis",
    "level": "B1"
  }`,
      `  {
    "de": "Homosexuelle",
    "de_article": "der",
    "de_plural": "die Homosexuellen",
    "lv": "homoseksuālis",
    "level": "B1",
    "study": {
      "id": "b1-homosexuelle",
      "layout": "minimalStudy",
      "translation": "homoseksuālis",
      "accent": "blue",
      "variants": [
        {
          "article": "der",
          "de": "Homosexuelle",
          "plural": "die Homosexuellen"
        },
        {
          "article": "die",
          "de": "Homosexuelle"
        }
      ]
    }
  }`,
      "Homosexuelle minimalStudy",
    ],
  ];

  for (const [from, to, label] of replacements) {
    if (!text.includes(from)) {
      console.log(`${rel}: skip (not found) ${label}`);
      continue;
    }
    text = text.replace(from, to);
    changes += 1;
    console.log(`${rel}: applied ${label}`);
  }

  fs.writeFileSync(filePath, text, "utf8");
  return changes;
}

let total = 0;
for (const rel of ["data/b1.js", "www/data/b1.js"]) {
  total += fixFile(rel);
}
console.log(`Total changes: ${total}`);
