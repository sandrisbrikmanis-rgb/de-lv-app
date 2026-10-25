#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-015";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = outPath;

function loadFiA1() {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, "../data/fi/a1.js"), "utf8"), ctx);
  return ctx.window.A1_WORDS;
}

function flattenStudyTarget(target) {
  const flat = { lv: target.lv, "study.translation": target.study.translation };
  if (target.study.replaceExplanationArray) {
    flat["study.explanation"] = target.study.explanation;
  } else {
    target.study.explanation.forEach((v, i) => {
      flat[`study.explanation[${i}]`] = v;
    });
  }
  target.study.examples.forEach((ex, i) => {
    flat[`study.examples[${i}].lv`] = ex.lv;
  });
  (target.study.comparison || []).forEach((c, i) => {
    flat[`study.comparison[${i}].meaning`] = c.meaning;
    if (c.example) flat[`study.comparison[${i}].example`] = c.example;
  });
  if (Array.isArray(target.study.tip)) {
    target.study.tip.forEach((t, i) => {
      flat[`study.tip[${i}]`] = t;
    });
  } else if (target.study.tip?.text) {
    flat["study.tip.text"] = target.study.tip.text;
  }
  target.study.important.forEach((v, i) => {
    flat[`study.important[${i}]`] = v;
  });
  if (target.study.sectionAccents) {
    flat["study.sectionAccents"] = target.study.sectionAccents;
  }
  return flat;
}

const CARD_TARGETS = {
  schwimmen: {
    lv: "Uida",
    study: {
      translation: "Uida",
      explanation: [
        "Pääajatus: schwimmen tarkoittaa uintia liikkeenä tai urheiluna.",
        "Schwimmen käytetään, kun ihminen ui vedessä uintiliikkeillä.",
        "Kun kyse on vedessä oleskelusta tai uimisesta huviksi, käytetään usein baden.",
        "A1-tasolla on tärkeää erottaa: schwimmen = uida, baden = kylpeä/uida huviksi.",
      ],
      examples: [
        { de: "Ich schwimme gern.", lv: "Minä uin mielelläni." },
        { de: "Er schwimmt sehr gut.", lv: "Hän ui erittäin hyvin." },
        { de: "Wir schwimmen im Schwimmbad.", lv: "Me uimme uimahallissa." },
        { de: "Ich gehe baden.", lv: "Menen kylpemään." },
      ],
      comparison: [
        { word: "schwimmen", meaning: "Uida liikkeenä tai urheiluna", example: "Er schwimmt sehr gut." },
        { word: "baden", meaning: "Kylpeä / olla vedessä", example: "Ich gehe baden." },
        { word: "schwimmen gehen", meaning: "Mennä uimaan", example: "Wir gehen schwimmen." },
        { word: "duschen", meaning: "Käydä suihkussa", example: "Ich dusche morgens." },
      ],
      tip: { text: "Muista: uintiliike → schwimmen; lepo vedessä → baden." },
      important: [
        "schwimmen ja baden eivät ole sama asia.",
        "Suomeksi sanotaan usein uida, mutta saksaksi on tarkistettava, onko kyse uintiliikkeestä vai vedessä oleskelusta tai uimisesta huviksi.",
      ],
      sectionAccents: {
        explanation: {
          blue: ["schwimmen"],
          purple: ["uida", "uintiliikkeillä"],
          red: ["baden", "kylpeä"],
        },
        examples: [
          { de: { blue: ["schwimme"] }, lv: { purple: ["uin"] } },
          { de: { blue: ["schwimmt"] }, lv: { purple: ["ui"] } },
          {
            de: { blue: ["schwimmen"], green: ["Schwimmbad"] },
            lv: { purple: ["uimme"], green: ["uimahallissa"] },
          },
          { de: { red: ["baden"] }, lv: { red: ["kylpemään"] } },
        ],
        comparison: [
          { word: { green: ["schwimmen"] }, meaning: { purple: ["uida", "liikkeenä", "urheiluna"] }, example: { blue: ["schwimmt"] } },
          { word: { green: ["baden"] }, meaning: { purple: ["kylpeä", "vedessä"] }, example: { red: ["baden"] } },
          { word: { green: ["schwimmen gehen"] }, meaning: { purple: ["mennä", "uimaan"] }, example: { green: ["schwimmen"] } },
          { word: { green: ["duschen"] }, meaning: { purple: ["käydä", "suihkussa"] }, example: { yellow: ["dusche"] } },
        ],
        tip: { left: { blue: ["schwimmen"], purple: ["Muista"], red: ["baden"] } },
        important: [{ blue: ["schwimmen"], red: ["baden"] }, { purple: ["Suomeksi"], blue: ["uida"] }],
      },
    },
  },
  sehen: {
    lv: "Nähdä",
    study: {
      translation: "Nähdä",
      explanation: [
        "Pääajatus: sehen tarkoittaa näkemistä silmillä.",
        "Kun kyse on siitä, mitä silmät havaitsevat, käytetään sehen.",
        "Tarkoituksellinen katselu on usein schauen tai ansehen.",
        "Hyvin yleinen fraasi on Ich sehe dich. = Näen sinut.",
      ],
      examples: [
        { de: "Ich sehe dich.", lv: "Näen sinut." },
        { de: "Siehst du das Auto?", lv: "Näetkö sen auton?" },
        { de: "Ich sehe nichts.", lv: "En näe mitään." },
        { de: "Wir schauen einen Film.", lv: "Katsomme elokuvaa." },
      ],
      comparison: [
        { word: "sehen", meaning: "Nähdä", example: "Ich sehe dich." },
        { word: "schauen", meaning: "Katsoa", example: "Ich schaue auf das Bild." },
        { word: "ansehen", meaning: "Katsoa / tarkastella", example: "Ich sehe mir den Film an." },
        { word: "hören", meaning: "Kuulla", example: "Ich höre Musik." },
      ],
      tip: { text: "Muista: silmät havaitsevat → sehen; tarkoituksellinen katselu → schauen/ansehen." },
      important: [
        "sehen ei ole sama kuin anschauen.",
        "Ich sehe dich = näen sinut; Ich schaue den Film = katson elokuvan.",
      ],
      sectionAccents: {
        explanation: { blue: ["sehen", "Ich sehe"], purple: ["nähdä", "silmillä"], red: ["schauen", "ansehen"] },
        examples: [
          { de: { blue: ["sehe"] }, lv: { purple: ["näen"] } },
          { de: { blue: ["Siehst"] }, lv: { purple: ["näet"] } },
          { de: { blue: ["sehe"] }, lv: { purple: ["ei näe"] } },
          { de: { red: ["schauen"] }, lv: { red: ["katsomme"] } },
        ],
        comparison: [
          { word: { green: ["sehen"] }, meaning: { purple: ["nähdä"] }, example: { blue: ["sehe"] } },
          { word: { green: ["schauen"] }, meaning: { purple: ["katsoa"] }, example: { red: ["schaue"] } },
          { word: { green: ["ansehen"] }, meaning: { purple: ["katsoa", "tarkastella"] }, example: { yellow: ["sehe", "an"] } },
          { word: { green: ["hören"] }, meaning: { purple: ["kuulla"] }, example: { green: ["höre"] } },
        ],
        tip: { left: { blue: ["sehen"], purple: ["Muista"], red: ["schauen", "ansehen"] } },
        important: [
          { blue: ["sehen"], red: ["anschauen"] },
          { blue: ["sehe"], purple: ["näen"], red: ["schaue"] },
        ],
      },
    },
  },
  sein: {
    lv: "Olla",
    study: {
      translation: "Olla",
      explanation: [
        "Pääajatus: sein tarkoittaa olemista.",
        "Sein on yksi tärkeimmistä saksan verbeistä.",
        "A1-tasolla erityisen tärkeitä ovat muodot ich bin, du bist, er ist ja wir sind.",
        "Sein käytetään myös monissa lauseissa sijainnin tai ominaisuuden kanssa.",
      ],
      examples: [
        { de: "Ich bin hier.", lv: "Olen täällä." },
        { de: "Du bist müde.", lv: "Olet väsynyt." },
        { de: "Er ist Lehrer.", lv: "Hän on opettaja." },
        { de: "Wir sind zu Hause.", lv: "Olemme kotona." },
      ],
      comparison: [
        { word: "sein", meaning: "Olla", example: "Ich bin hier." },
        { word: "haben", meaning: "Minulla on", example: "Ich habe Zeit." },
        { word: "werden", meaning: "Tulla", example: "Ich werde müde." },
        { word: "bleiben", meaning: "Jäädä", example: "Ich bleibe hier." },
      ],
      tip: { text: "Muista: ich bin = olen; du bist = olet." },
      important: [
        "sein-muodot on opittava erikseen: bin, bist, ist, sind.",
        "Ich bin on olen, ei olla.",
      ],
      sectionAccents: {
        explanation: {
          blue: ["sein", "ich bin", "du bist", "er ist", "wir sind"],
          purple: ["olemista"],
        },
        examples: [
          { de: { blue: ["bin"] }, lv: { purple: ["olen"] } },
          { de: { blue: ["bist"] }, lv: { purple: ["olet"] } },
          { de: { blue: ["ist"] }, lv: { purple: ["on"] } },
          { de: { blue: ["sind"] }, lv: { purple: ["olemme"] } },
        ],
        comparison: [
          { word: { green: ["sein"] }, meaning: { purple: ["olla"] }, example: { blue: ["bin"] } },
          { word: { green: ["haben"] }, meaning: { purple: ["minulla", "on"] }, example: { yellow: ["habe"] } },
          { word: { green: ["werden"] }, meaning: { purple: ["tulla"] }, example: { green: ["werde"] } },
          { word: { green: ["bleiben"] }, meaning: { purple: ["jäädä"] }, example: { red: ["bleibe"] } },
        ],
        tip: { left: { blue: ["ich bin", "du bist"], purple: ["olen", "olet"] } },
        important: [
          { blue: ["bin", "bist", "ist", "sind"] },
          { blue: ["Ich bin"], purple: ["olen"], red: ["olla"] },
        ],
      },
    },
  },
  Seite: {
    lv: "Sivu • Puoli",
    study: {
      translation: "Sivu • Puoli",
      explanation: [
        "Pääajatus: die Seite voi tarkoittaa kirjan/dokumentin sivua tai jonkin asian reunaa/puolta.",
        "Kirjassa, lehdessä tai verkkosivulla die Seite = sivu (Seite 5 = 5. sivu).",
        "Paikallisessa merkityksessä die Seite = puoli (auf der linken Seite = vasemmalla puolella).",
        "Siirretyssä merkityksessä die Seite voi tarkoittaa myös puolta konfliktissa tai ajatuksissa (auf meiner Seite = minun puolellani).",
        "Konteksti (kirja/lukeminen tai sijainti/suhteet) osoittaa oikean merkityksen.",
        "Monikossa molemmissa merkityksissä: die Seiten.",
      ],
      examples: [
        { de: "Schlagt die Seite zwanzig auf.", lv: "Avatkaa sivu kaksikymmentä." },
        { de: "Auf der linken Seite ist ein Park.", lv: "Vasemmalla puolella on puisto." },
        { de: "Die Webseite lädt langsam.", lv: "Verkkosivu latautuu hitaasti." },
        { de: "Er steht auf meiner Seite.", lv: "Hän on minun puolellani." },
        { de: "Das Buch hat 200 Seiten.", lv: "Kirjassa on 200 sivua." },
        { de: "Auf der anderen Seite der Straße.", lv: "Kadun toisella puolella." },
      ],
      tip: [
        "Puhutaan kirjasta tai lukemisesta → sivu. Puhutaan sijainnista, suunnasta tai suhteista → puoli.",
        "Sivu X kirjassa on aina sivu, ei puoli.",
      ],
      important: [
        "die Seite = sivu TAI puoli — konteksti ratkaisee.",
        "Monikossa molemmissa merkityksissä: die Seiten.",
      ],
      sectionAccents: {
        explanation: { blue: ["die Seite", "Seite"], purple: ["sivu", "puoli"] },
        examples: [
          { de: { blue: ["Seite"] }, lv: { purple: ["sivu"] } },
          { de: { green: ["Seite"] }, lv: { purple: ["puolella"] } },
          { de: { blue: ["Webseite"] }, lv: { purple: ["verkkosivu"] } },
          { de: { green: ["Seite"] }, lv: { purple: ["puolellani"] } },
          { de: { blue: ["Seiten"] }, lv: { purple: ["sivua"] } },
          { de: { green: ["Seite"] }, lv: { purple: ["puolella"] } },
        ],
        tip: [
          { blue: ["kirjasta"], green: ["sivu"] },
          { blue: ["Seite"], purple: ["sivu"] },
        ],
        important: [{ purple: ["sivu", "puoli"] }, { blue: ["die Seiten"] }],
      },
    },
  },
  sich: {
    lv: "Itseään • Itselleen",
    study: {
      translation: "Itseään • Itselleen",
      explanation: [
        "Pääajatus: sich on heijempronomeni — toiminta kohdistuu tekijään itseensä.",
        "Suomeksi käännetään usein itseään (akkusatiivi) tai itselleen (datiivi) kontekstin mukaan.",
        "Joissakin saksan verbeissä sich on pakollinen osa, esimerkiksi sich waschen.",
        "A1-tasolla: ich wasche mich, du wäschst dich, er wäscht sich.",
      ],
      examples: [
        { de: "Er wäscht sich.", lv: "Hän peseytyy." },
        { de: "Ich setze mich.", lv: "Istun alas." },
        { de: "Sie freut sich.", lv: "Hän iloitsee." },
        { de: "Ich wasche das Auto.", lv: "Pesen auton." },
      ],
      comparison: [
        { word: "sich", meaning: "Itseään / itselleen", example: "Er wäscht sich." },
        { word: "mich", meaning: "itseäni (minua)", example: "Ich wasche mich." },
        { word: "dich", meaning: "itseäsi (sinua)", example: "Du wäschst dich." },
        { word: "ihn", meaning: "Hänet", example: "Ich sehe ihn." },
      ],
      tip: { text: "Muista: toiminta itseen → sich/mich/dich." },
      important: [
        "sich ei ole itsenäinen substantiivi.",
        "Muoto muuttuu: ich → mich, du → dich, er/sie/es → sich.",
      ],
      sectionAccents: {
        explanation: {
          blue: ["sich", "ich wasche mich", "er wäscht sich"],
          purple: ["itseään", "itselleen"],
        },
        examples: [
          { de: { blue: ["sich"] }, lv: { purple: ["peseytyy"] } },
          { de: { green: ["mich"] }, lv: { purple: ["istun"] } },
          { de: { blue: ["sich"] }, lv: { purple: ["iloitsee"] } },
          { de: { red: ["wasche"], yellow: ["Auto"] }, lv: { red: ["pesen"], yellow: ["auton"] } },
        ],
        comparison: [
          { word: { green: ["sich"] }, meaning: { purple: ["itseään", "itselleen"] }, example: { blue: ["sich"] } },
          { word: { green: ["mich"] }, meaning: { purple: ["itseäni", "minua"] }, example: { green: ["mich"] } },
          { word: { green: ["dich"] }, meaning: { purple: ["itseäsi", "sinua"] }, example: { yellow: ["dich"] } },
          { word: { green: ["ihn"] }, meaning: { purple: ["hänet"] }, example: { red: ["ihn"] } },
        ],
        tip: { left: { blue: ["sich"], purple: ["Muista"] } },
        important: [{ blue: ["sich"], red: ["sich"] }, { green: ["mich", "dich"], blue: ["sich"] }],
      },
    },
  },
  sicher: {
    lv: "Turvallinen • Varmasti",
    study: {
      translation: "Turvallinen • Varmasti",
      explanation: [
        "Pääajatus: sicher tarkoittaa adjektiivina turvallista, adverbiaalisena varmasti.",
        "Paikasta, tilanteesta tai ihmisestä puhuttaessa sicher = turvallinen (ein sicherer Ort = turvallinen paikka).",
        "Vahvistuksena tai vakuutuksena lauseessa sicher = varmasti/tietysti (Das ist sicher wahr. = Se on varmasti totta.).",
        "Sicher! erillisenä vastauksena tarkoittaa tietysti!",
      ],
      examples: [
        { de: "Ist das Wasser sicher?", lv: "Onko vesi turvallinen?" },
        { de: "Kommst du morgen? – Sicher!", lv: "Tuletko huomenna? – Tietysti!" },
        { de: "Er ist sicher zu Hause.", lv: "Hän on varmaan kotona." },
        { de: "Das ist eine sichere Lösung.", lv: "Se on turvallinen ratkaisu." },
        { de: "Ich bin mir sicher.", lv: "Olen varma." },
        { de: "Fahr sicher!", lv: "Aja turvallisesti!" },
      ],
      tip: [
        "Paikasta tai tilanteesta (turvallisuus) → turvallinen.",
        "Kun vakuutus tai vahvistus lauseessa → varmasti/tietysti.",
      ],
      important: [
        "sicher = turvallinen (adjektiivi) TAI varmasti/tietysti (adverbi).",
        "sich sicher sein = olla vakuuttunut.",
      ],
      sectionAccents: {
        explanation: { blue: ["sicher"], purple: ["turvallinen", "varmasti"] },
        examples: [
          { de: { blue: ["sicher"] }, lv: { purple: ["turvallinen"] } },
          { de: { green: ["Sicher"] }, lv: { purple: ["tietysti"] } },
          { de: { green: ["sicher"] }, lv: { purple: ["varmaan"] } },
          { de: { blue: ["sichere"] }, lv: { purple: ["turvallinen"] } },
          { de: { green: ["sicher"] }, lv: { purple: ["varma"] } },
          { de: { blue: ["sicher"] }, lv: { purple: ["turvallisesti"] } },
        ],
        tip: [{ blue: ["turvallinen"] }, { green: ["varmasti", "tietysti"] }],
        important: [{ purple: ["turvallinen", "varmasti", "tietysti"] }, { green: ["sich sicher sein"] }],
      },
    },
  },
  sie: {
    lv: "He",
    study: {
      replaceExplanationArray: true,
      translation: "He",
      explanation: [
        "Pääajatus: Monikon muoto — kyse on useasta ihmisestä. Verbi päättyy -en: kochen, essen, gehen.",
        "Pienellä sie monikossa tarkoittaa he (sie kochen = he keittävät).",
        "Pienellä sie yksikössä verbin kanssa (-t) tarkoittaa häntä naisena (sie kocht = hän keittää).",
        "Verbin muoto (-en vs -t) osoittaa, onko kyse heistä vai hänestä.",
        "Iso Sie tarkoittaa kohteliasta te-puhuttelua — ei sekoiteta pienen sie kanssa.",
      ],
      examples: [
        { de: "Sie kochen.", lv: "He keittävät." },
        { de: "Sie kocht.", lv: "Hän keittää." },
        { de: "Sie isst.", lv: "Hän syö." },
        { de: "Sie kochen.", lv: "He keittävät." },
        { de: "Sie spielen Fußball.", lv: "He pelaavat jalkapalloa." },
        { de: "Sie kochen, bitte.", lv: "Keittäkää, olkaa hyvä." },
      ],
      tip: [
        "Monikon muoto — puhutaan useista ihmisistä. Verbi päättyy -en: kochen, essen, gehen.",
        "Käytä sie, kun konteksti vastaa tätä merkitystä.",
      ],
      important: [
        "Kohtelias puhuttelu aina isolla S: Sie, ei sie.",
        "Hän: sie kocht. He: sie kochen. Te: Sie kochen.",
        "He-merkityksessä väärin: sie kocht → oikein: sie kochen.",
        "Te-merkityksessä oikein: Sie kochen.",
      ],
      sectionAccents: {
        explanation: { green: ["sie", "kochen"], purple: ["he", "hän"] },
        examples: [
          { de: { green: ["sie", "kochen"] }, lv: { purple: ["He"] } },
          { de: { blue: ["sie", "kocht"] }, lv: { purple: ["Hän"] } },
          { de: { blue: ["sie", "isst"] }, lv: { purple: ["Hän"] } },
          { de: { green: ["sie", "kochen"] }, lv: { purple: ["He"] } },
          { de: { green: ["sie", "spielen"] }, lv: { purple: ["He"] } },
          { de: { yellow: ["Sie", "kochen"] }, lv: { purple: ["Keittäkää"] } },
        ],
        tip: [{ purple: ["Monikko"] }],
        important: [{ blue: ["Sie"], green: ["sie"], yellow: ["Sie"] }],
      },
    },
  },
  Sie: {
    lv: "Te",
    study: {
      replaceExplanationArray: true,
      translation: "Te",
      explanation: [
        "Pääajatus: Kohtelias puhuttelu — aina isolla S-kirjaimella. Suomeksi: te.",
        "Formaalinen Sie käyttää aina 3. persoonan monikon verbiä: Sie sind, Sie haben, Sie kochen.",
        "Pieni sie yksikössä tarkoittaa häntä (sie kocht = hän keittää).",
        "Pieni sie monikossa tarkoittaa heitä (sie kochen = he keittävät).",
        "Erota: Sie kochen (te) vs sie kochen (he) vs sie kocht (hän).",
        "Esimerkkejä: Sie sind hier. = Olette täällä.; Sie haben Zeit. = Teillä on aikaa.",
      ],
      examples: [
        { de: "Sie kochen, bitte.", lv: "Keittäkää, olkaa hyvä." },
        { de: "Sie kocht.", lv: "Hän keittää." },
        { de: "Sie isst.", lv: "Hän syö." },
        { de: "Sie kochen.", lv: "He keittävät." },
        { de: "Sie spielen Fußball.", lv: "He pelaavat jalkapalloa." },
        { de: "Sie kochen, bitte.", lv: "Keittäkää, olkaa hyvä." },
      ],
      tip: [
        "Kohtelias puhuttelu — aina isolla S. Suomeksi: te. Verbi 3. persoonan monikossa: Sie kochen.",
        "Käytä Sie, kun konteksti on kohtelias te-puhuttelu.",
      ],
      important: [
        "Kohtelias puhuttelu aina isolla S: Sie, ei sie.",
        "Hän: sie kocht. He: sie kochen. Te: Sie kochen (3. pers. monikko).",
        "Väärin: sie kocht (te) → Oikein: Sie kochen",
        "Väärin: Sie kocht (he) → Oikein: sie kochen",
      ],
      sectionAccents: {
        explanation: { yellow: ["Sie", "kochen"], purple: ["te"] },
        examples: [
          { de: { yellow: ["Sie", "kochen"] }, lv: { purple: ["Keittäkää"] } },
          { de: { yellow: ["Sie", "kocht"] }, lv: { purple: ["Hän"] } },
          { de: { yellow: ["Sie", "isst"] }, lv: { purple: ["Hän"] } },
          { de: { yellow: ["sie", "kochen"] }, lv: { purple: ["He"] } },
          { de: { yellow: ["sie", "spielen"] }, lv: { purple: ["He"] } },
          { de: { yellow: ["Sie", "kochen"] }, lv: { purple: ["Keittäkää"] } },
        ],
        tip: [{ purple: ["te"] }],
        important: [{ yellow: ["Sie"], blue: ["sie"] }],
      },
    },
  },
  sitzen: {
    lv: "Istua",
    study: {
      translation: "Istua",
      explanation: [
        "Pääajatus: sitzen tarkoittaa istumista tuolilla tai penkillä.",
        "Sitzen kuvaa sitä, että joku istuu — esimerkiksi tuolissa tai penkillä.",
        "A1-tasolla tärkein merkitys on istua; välillä sitzen voi kuvata myös paikalla olemista.",
        "Muista erottaa: sitzen = istua, stehen = seistä, liegen = maata.",
      ],
      examples: [
        { de: "Ich sitze am Tisch.", lv: "Istun pöydän ääressä." },
        { de: "Die Kinder sitzen im Bus.", lv: "Lapset istuvat bussissa." },
        { de: "Er steht an der Tür.", lv: "Hän seisoo oven vieressä." },
        { de: "Die Katze liegt auf dem Sofa.", lv: "Kissa makaa sohvalla." },
      ],
      comparison: [
        { word: "sitzen", meaning: "Istua", example: "Ich sitze am Tisch." },
        { word: "stehen", meaning: "Seistä", example: "Er steht an der Tür." },
        { word: "liegen", meaning: "Maata / olla makuulla", example: "Die Katze liegt dort." },
        { word: "setzen", meaning: "Istuutua / istua alas", example: "Ich setze mich." },
      ],
      tip: { text: "Muista: kun istuu → sitzen; kun seisoo → stehen; kun makaa → liegen." },
      important: [
        "sitzen kuvaa istumisasentoa.",
        "Istuutua (sich setzen) ≠ istua (sitzen).",
      ],
      sectionAccents: {
        explanation: { blue: ["sitzen"], purple: ["istua", "istuu"], red: ["stehen", "liegen"] },
        examples: [
          { de: { blue: ["sitze"] }, lv: { purple: ["istun"] } },
          { de: { blue: ["sitzen"], green: ["Kinder"] }, lv: { purple: ["istuvat"], green: ["Lapset"] } },
          { de: { red: ["steht"] }, lv: { red: ["seisoo"] } },
          { de: { yellow: ["liegt"] }, lv: { yellow: ["makaa"] } },
        ],
        comparison: [
          { word: { green: ["sitzen"] }, meaning: { purple: ["istua"] }, example: { blue: ["sitze"] } },
          { word: { green: ["stehen"] }, meaning: { purple: ["seistä"] }, example: { red: ["steht"] } },
          { word: { green: ["liegen"] }, meaning: { purple: ["maata", "makuulla"] }, example: { yellow: ["liegt"] } },
          { word: { green: ["setzen"] }, meaning: { purple: ["istuutua"] }, example: { green: ["setze"] } },
        ],
        tip: { left: { blue: ["sitzen"], purple: ["Muista"], red: ["stehen"], yellow: ["liegen"] } },
        important: [{ blue: ["sitzen"], purple: ["istua"] }, { green: ["sich setzen"], blue: ["sitzen"] }],
      },
    },
  },
  sollen: {
    lv: "Pitäisi • Kuuluisi",
    study: {
      translation: "Pitäisi • Kuuluisi",
      explanation: [
        "Pääajatus: sollen tarkoittaa, että jonkun pitäisi tehdä jotain tai hänen kuuluisi tehdä jotain ohjeen mukaan.",
        "Sollen käytetään usein, kun joku muu sanoo, mitä tehdä.",
        "Se ei ole yhtä vahva kuin müssen.",
        "Hyvin yleinen fraasi on Was soll ich machen? = Mitä minun pitäisi tehdä?",
      ],
      examples: [
        { de: "Was soll ich machen?", lv: "Mitä minun pitäisi tehdä?" },
        { de: "Du sollst kommen.", lv: "Sinun pitäisi tulla." },
        { de: "Ich soll zu Hause bleiben.", lv: "Minun pitäisi jäädä kotiin." },
        { de: "Ich muss jetzt gehen.", lv: "Minun täytyy lähteä nyt." },
      ],
      comparison: [
        { word: "sollen", meaning: "Pitäisi / ohjeen mukaan", example: "Was soll ich machen?" },
        { word: "müssen", meaning: "Täytyy / pakko", example: "Ich muss gehen." },
        { word: "können", meaning: "Osata / pystyä", example: "Ich kann kommen." },
        { word: "wollen", meaning: "Haluta", example: "Ich will bleiben." },
      ],
      tip: { text: "Muista: joku sanoo mitä tehdä → sollen; pakko tehdä → müssen." },
      important: [
        "Was soll ich machen? on hyvin yleinen ilmaus.",
        "sollen ja müssen eivät ole täysin identtisiä.",
      ],
      sectionAccents: {
        explanation: {
          blue: ["sollen", "Was soll ich machen"],
          purple: ["pitäisi", "ohjeen"],
          red: ["müssen"],
        },
        examples: [
          { de: { blue: ["soll", "machen"] }, lv: { purple: ["pitäisi", "tehdä"] } },
          { de: { blue: ["sollst", "kommen"] }, lv: { purple: ["pitäisi"] } },
          { de: { blue: ["soll", "bleiben"] }, lv: { purple: ["pitäisi"] } },
          { de: { red: ["muss", "gehen"] }, lv: { red: ["täytyy"] } },
        ],
        comparison: [
          { word: { green: ["sollen"] }, meaning: { purple: ["pitäisi", "ohjeen"] }, example: { blue: ["soll"] } },
          { word: { green: ["müssen"] }, meaning: { purple: ["täytyy", "pakko"] }, example: { red: ["muss"] } },
          { word: { green: ["können"] }, meaning: { purple: ["osata", "pystyä"] }, example: { green: ["kann"] } },
          { word: { green: ["wollen"] }, meaning: { purple: ["haluta"] }, example: { yellow: ["will"] } },
        ],
        tip: { left: { blue: ["sollen"], purple: ["Muista"], red: ["müssen"] } },
        important: [{ blue: ["sollen"] }, { red: ["müssen"] }],
      },
    },
  },
  sprechen: {
    lv: "Puhua",
    study: {
      translation: "Puhua",
      explanation: [
        "Pääajatus: Puhua, keskustella tai käyttää kieltä.",
        "Sprechen tarkoittaa pääasiassa puhumista tai keskustelua.",
        "Usein kuvaa: kieltä/keskustelua.",
        "Sprechen kuvaa puhetta tai kielen käyttöä.",
      ],
      examples: [
        { de: "Ich spreche Deutsch.", lv: "Puhun saksaa." },
        { de: "Wir sprechen über die Arbeit.", lv: "Puhumme työstä." },
        { de: "Sie spricht mit ihrer Lehrerin.", lv: "Hän puhuu naisopettajansa kanssa." },
      ],
      comparison: [
        {
          word: "sprechen",
          meaning: "Puhua (prosessi, kieli)",
          example: "Wir sprechen über die Arbeit. – Puhumme työstä.",
        },
        {
          word: "sagen",
          meaning: "Sanoa (tietty teksti)",
          example: "Sag mir die Wahrheit. – Kerro minulle totuus.",
        },
      ],
      tip: ["sprechen = puhua", "Käytä sprechen, kun konteksti vastaa tätä merkitystä."],
      important: ["sprechen = puhua.", "Puhua, keskustella tai käyttää kieltä."],
      sectionAccents: {
        explanation: { green: ["sprechen"], purple: ["puhua"], orange: ["puhua"] },
        examples: [
          { de: { green: ["spreche"] }, lv: { purple: ["puhun"] } },
          { de: { green: ["sprechen"] }, lv: { purple: ["puhumme"] } },
          { de: { green: ["spricht"] }, lv: { purple: ["puhuu"] } },
        ],
        tip: [{ purple: ["sprechen"] }, { purple: ["puhua"] }],
        important: [{ green: ["sprechen"] }],
      },
    },
  },
};

const COMPOSITE_ID_BY_CARD = {
  schwimmen:
    "g2/a1/fi|schwimmen|idx:531|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna",
  sehen:
    "g2/a1/fi|sehen|idx:539|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna",
  sein:
    "g2/a1/fi|sein|idx:542|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna",
  Seite:
    "g2/a1/fi|Seite|idx:544|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna",
  sich:
    "g2/a1/fi|sich|idx:547|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna",
  sicher:
    "g2/a1/fi|sicher|idx:548|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna",
  sie: "g2/a1/fi|sie|idx:549|lv; study.explanation; study.examples|MEANING_MISMATCH|gpt-5.6-luna",
  Sie:
    "g2/a1/fi|Sie|idx:550|lv; study.explanation; study.tip; study.important; study.examples|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna",
  sitzen:
    "g2/a1/fi|sitzen|idx:558|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna",
  sollen:
    "g2/a1/fi|sollen|idx:564|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna",
  sprechen:
    "g2/a1/fi|sprechen|idx:5|lv; study.translation; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna",
};

const NOTES = {
  schwimmen: "full composite: comparison/tip/sectionAccents FI; DE↔FI aligned",
  sehen: "full composite: comparison/tip/sectionAccents FI; DE↔FI aligned",
  sein: "full composite: comparison/tip/sectionAccents FI; DE↔FI aligned",
  Seite: "full composite: comparison/tip/sectionAccents FI; DE↔FI aligned",
  sich: "full composite: comparison/tip/sectionAccents FI; DE↔FI aligned",
  sicher: "full composite: examples/comparison/tip/sectionAccents FI; Sicher!=tietysti",
  sie: "full study.explanation array (5 items); removed semantic dupes [5]/[6]; DE↔FI aligned",
  Sie: "full study.explanation array (6 items); removed semantic dupe [4]; formal Sie 3rd pl verb",
  sitzen: "liegen=makuulla (not pitkin); comparison/sectionAccents FI; sitzen=istua contrast",
  sein: "sectionAccents explanation.purple=olemista; full composite FI",
  sollen: "full composite: comparison/tip/sectionAccents FI; sollen vs müssen",
  sprechen: "full composite: comparison/tip/sectionAccents FI; DE↔FI aligned",
};

function normalizeVal(v) {
  const t = String(v || "").trim();
  if (t.startsWith("{") || t.startsWith("[")) {
    try {
      return JSON.stringify(JSON.parse(t));
    } catch {
      return t;
    }
  }
  return t;
}

function productionFlatFromA1(words, de) {
  const entry = words.find((w) => w.de === de);
  if (!entry?.study) throw new Error(`Missing study for ${de}`);
  const flat = { lv: entry.lv };
  const s = entry.study;
  flat["study.translation"] = s.translation;
  const explanations = Array.isArray(s.explanation)
    ? s.explanation
    : s.explanation
      ? [s.explanation]
      : [];
  explanations.forEach((v, i) => {
    flat[`study.explanation[${i}]`] = v;
  });
  (s.examples || []).forEach((ex, i) => {
    flat[`study.examples[${i}].lv`] = ex.lv;
  });
  (s.comparison || []).forEach((c, i) => {
    flat[`study.comparison[${i}].meaning`] = c.meaning;
    if (c.example) flat[`study.comparison[${i}].example`] = c.example;
  });
  if (Array.isArray(s.tip)) {
    s.tip.forEach((t, i) => {
      flat[`study.tip[${i}]`] = t;
    });
  } else if (s.tip?.text) {
    flat["study.tip.text"] = s.tip.text;
  }
  const important = Array.isArray(s.important)
    ? s.important
    : s.important
      ? [s.important]
      : [];
  important.forEach((v, i) => {
    flat[`study.important[${i}]`] = v;
  });
  if (s.sectionAccents) flat["study.sectionAccents"] = s.sectionAccents;
  return flat;
}

const base = JSON.parse(fs.readFileSync(basePath, "utf8"));
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const words = loadFiA1();

const FULL_COMPOSITE_PATCHES = {};
for (const [card, target] of Object.entries(CARD_TARGETS)) {
  FULL_COMPOSITE_PATCHES[COMPOSITE_ID_BY_CARD[card]] = JSON.stringify(flattenStudyTarget(target));
}

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  const card = id.match(/\|([^|]+)\|/)?.[1];
  if (FULL_COMPOSITE_PATCHES[id] !== undefined) {
    TARGET_FI[id] = FULL_COMPOSITE_PATCHES[id];
  } else if (base[id]?.owner_decision === "LABOT" && base[id].owner_new) {
    TARGET_FI[id] = base[id].owner_new;
  } else {
    const prodCard = card && CARD_TARGETS[card] ? card : null;
    TARGET_FI[id] = prodCard
      ? JSON.stringify(productionFlatFromA1(words, prodCard))
      : String(row.production_current || "").trim();
  }
}

const decisions = {};
let labotCount = 0;
let nelabotCount = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const target = TARGET_FI[id];
  const card = id.match(/\|([^|]+)\|/)?.[1] || id;
  const prod = CARD_TARGETS[card]
    ? JSON.stringify(productionFlatFromA1(words, card))
    : normalizeVal(row.production_current);
  const normTarget = normalizeVal(target);
  const needsChange = prod !== normTarget;

  if (needsChange) {
    labotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: target,
      owner_note: NOTES[card]
        ? `FI ${card} ${NOTES[card]}. DE untouched.`
        : base[id]?.owner_note || `FI ${card} full composite repair from data/fi/a1.js. DE untouched.`,
    };
  } else {
    nelabotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: base[id]?.owner_note || `FI ${card} production already correct. DE untouched.`,
    };
  }
}

if (Object.keys(decisions).length !== 50) {
  console.error("Expected 50 decisions");
  process.exit(1);
}

fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      total: 50,
      labot: labotCount,
      nelabot: nelabotCount,
      pending: 0,
      full_composite_repairs: Object.keys(FULL_COMPOSITE_PATCHES).length,
      source: "data/fi/a1.js",
    },
    null,
    2
  )
);
