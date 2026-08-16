#!/usr/bin/env node
/**
 * Fix DA-DE Kurss UI: CSS classes, verb-basics lesson structure/content.
 * Aligns appearance with LV-DE etalon (kurss-* classes, em-dash format).
 */
const fs = require("fs");
const path = require("path");

const DA_LESSONS = path.join(__dirname, "../data/da/courseLessons.js");
const DA_UI = path.join(__dirname, "../languages/da/ui.js");
const WWW_LESSONS = path.join(__dirname, "../www/data/da/courseLessons.js");
const WWW_UI = path.join(__dirname, "../www/languages/da/ui.js");

function conjugationRows(rows) {
  return rows
    .map(([de, da]) => `<div class="kurss-example">${de} — ${da}</div>`)
    .join("");
}

function verbSection(verb, rows) {
  return `
            <section class="kurss-lesson-section">
              <h4>${verb}</h4>
              <div class="kurss-examples">${conjugationRows(rows)}</div>
            </section>`;
}

function wordList(words) {
  const items = words
    .map(([de, da]) => `<div class="kurss-example">${de} — ${da}</div>`)
    .join("");
  return `
            <section class="kurss-lesson-section">
              <h4>Verber</h4>
              <div class="kurss-examples">${items}</div>
            </section>`;
}

function buildVerbBasicsLesson() {
  const kommen = [
    ["ich komme", "jeg kommer"],
    ["du kommst", "du kommer"],
    ["er kommt", "han kommer"],
    ["sie kommt", "hun kommer"],
    ["wir kommen", "vi kommer"],
    ["ihr kommt", "I kommer"],
    ["sie kommen", "de / De kommer"],
  ];
  const gehen = [
    ["ich gehe", "jeg går"],
    ["du gehst", "du går"],
    ["er geht", "han går"],
    ["sie geht", "hun går"],
    ["wir gehen", "vi går"],
    ["ihr geht", "I går"],
    ["sie gehen", "de / De går"],
  ];
  const stehen = [
    ["ich stehe", "jeg står"],
    ["du stehst", "du står"],
    ["er steht", "han står"],
    ["sie steht", "hun står"],
    ["wir stehen", "vi står"],
    ["ihr steht", "I står"],
    ["sie stehen", "de / De står"],
  ];
  const singen = [
    ["ich singe", "jeg synger"],
    ["du singst", "du synger"],
    ["er singt", "han synger"],
    ["sie singt", "hun synger"],
    ["wir singen", "vi synger"],
    ["ihr singt", "I synger"],
    ["sie singen", "de / De synger"],
  ];
  const lesson2Words = [
    ["spielen", "at lege"],
    ["arbeiten", "at arbejde"],
    ["fragen", "at spørge"],
    ["antworten", "at svare"],
    ["rechnen", "at regne"],
    ["zeichnen", "at tegne"],
    ["tun", "at gøre"],
  ];
  const spielen = [
    ["ich spiele", "jeg leger"],
    ["du spielst", "du leger"],
    ["er spielt", "han leger"],
    ["sie spielt", "hun leger"],
    ["wir spielen", "vi leger"],
    ["ihr spielt", "I leger"],
    ["sie spielen", "de / De leger"],
  ];
  const arbeiten = [
    ["ich arbeite", "jeg arbejder"],
    ["du arbeitest", "du arbejder"],
    ["er arbeitet", "han arbejder"],
    ["sie arbeitet", "hun arbejder"],
    ["wir arbeiten", "vi arbejder"],
    ["ihr arbeitet", "I arbejder"],
    ["sie arbeiten", "de / De arbejder"],
  ];
  const fragen = [
    ["ich frage", "jeg spørger"],
    ["du fragst", "du spørger"],
    ["er fragt", "han spørger"],
    ["sie fragt", "hun spørger"],
    ["wir fragen", "vi spørger"],
    ["ihr fragt", "I spørger"],
    ["sie fragen", "de / De spørger"],
  ];
  const antworten = [
    ["ich antworte", "jeg svarer"],
    ["du antwortest", "du svarer"],
    ["er antwortet", "han svarer"],
    ["sie antwortet", "hun svarer"],
    ["wir antworten", "vi svarer"],
    ["ihr antwortet", "I svarer"],
    ["sie antworten", "de / De svarer"],
  ];
  const rechnen = [
    ["ich rechne", "jeg regner"],
    ["du rechnest", "du regner"],
    ["er rechnet", "han regner"],
    ["sie rechnet", "hun regner"],
    ["wir rechnen", "vi regner"],
    ["ihr rechnet", "I regner"],
    ["sie rechnen", "de / De regner"],
  ];
  const zeichnen = [
    ["ich zeichne", "jeg tegner"],
    ["du zeichnest", "du tegner"],
    ["er zeichnet", "han tegner"],
    ["sie zeichnet", "hun tegner"],
    ["wir zeichnen", "vi tegner"],
    ["ihr zeichnet", "I tegner"],
    ["sie zeichnen", "de / De tegner"],
  ];
  const tun = [
    ["ich tue", "jeg gør"],
    ["du tust", "du gør"],
    ["er tut", "han gør"],
    ["sie tut", "hun gør"],
    ["wir tun", "vi gør"],
    ["ihr tut", "I gør"],
    ["sie tun", "de / De gør"],
  ];

  const lesson2List = `
            <section class="kurss-lesson-section">
              <h4>Verber fra lektion 2</h4>
              <div class="kurss-examples">${lesson2Words.map(([de, da]) => `<div class="kurss-example">${de} — ${da}</div>`).join("")}</div>
            </section>`;

  return `
            <h3>Verbers grundlag</h3>
            <p class="kurss-lesson-intro">1. lektions verber og bøjninger.</p>
${wordList([
    ["kommen", "at komme"],
    ["gehen", "at gå"],
    ["stehen", "at stå"],
    ["singen", "at synge"],
  ])}${verbSection("kommen", kommen)}${verbSection("gehen", gehen)}${verbSection("stehen", stehen)}${verbSection("singen", singen)}${lesson2List}${verbSection("spielen", spielen)}${verbSection("arbeiten", arbeiten)}${verbSection("fragen", fragen)}${verbSection("antworten", antworten)}${verbSection("rechnen", rechnen)}${verbSection("zeichnen", zeichnen)}${verbSection("tun", tun)}`;
}

function fixCourseLessons(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  content = content
    .replace(/course-lesson-section/g, "kurss-lesson-section")
    .replace(/course-examples/g, "kurss-examples")
    .replace(/course-example/g, "kurss-example");

  const newLesson = buildVerbBasicsLesson().replace(/\n/g, " ").replace(/\s+/g, " ").trim();
  content = content.replace(
    /"kurssVerbBasicsLesson": "[^"]*"/,
    `"kurssVerbBasicsLesson": ${JSON.stringify(newLesson)}`
  );

  content = content.replace(
    /Spørgsmål med \\"var\\"/g,
    'Spørgsmål med \\"was\\"'
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Updated", filePath);
}

function fixUi(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  content = content.replace(
    /"verbBasics": "Verbum-grundlag"/,
    '"verbBasics": "Verbers grundlag"'
  );
  fs.writeFileSync(filePath, content, "utf8");
  console.log("Updated", filePath);
}

fixCourseLessons(DA_LESSONS);
fixCourseLessons(WWW_LESSONS);
fixUi(DA_UI);
fixUi(WWW_UI);

console.log("DA Kurss UI fixes applied.");
