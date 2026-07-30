# UK-DE valodas audits

**Standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`
**Audita datums:** 2026-07-30
**Auditētā valoda:** Ukraiņu (UK) → Vācu (DE), avots: LV-DE (PR #201, #215)
**Statuss:** ❌ **NAV GATAVS PRODUKCIJAI** — konstatēti kritiski atradumi

## Kopsavilkums

| Kritērijs (8. sadaļa) | Statuss |
|---|---|
| 0 kritisku atradumu | ❌ **NĒ** — 2 kritiski atradumi |
| 0 augstu atradumu vizuālajā slānī | ❌ **NĒ** — 1 augsts atradums |
| Visi 5. sadaļas automātiskie skripti bez kļūdām | ❌ **NĒ** — sk. tabulu zemāk |
| Native speaker izlases pārbaude | ⚠️ Nav veikta (nepieciešams ukraiņu valodas eksperts) |
| Ekrānuzņēmumu salīdzinājums | ⚠️ Nav veikts (nepieciešama manuāla/vizuāla pārbaude) |
| `registry.js` karodziņi atbilst datu stāvoklim | ✅ **JĀ** — izlabots PR #215 laikā |

### Automātisko skriptu rezultāti (5. sadaļa)

| Skripts | Rezultāts | Piezīme |
|---|---|---|
| `audit-language-parity.js --lang=uk` | ✅ PASS | 8618/8618 ierakstu sakrīt visos līmeņos |
| `audit-mojibake.js --lang=uk` | ✅ PASS | 0 mojibake artefaktu 15 failos |
| `validate-study-design.js --lang=uk` | ❌ FAIL | 7557 `sectionAccents` neatbilstības (skat. 2. atradumu); `rootWwwMismatches` izlabots audita laikā |
| `validate-flashcard-routing.js --lang=uk` | ✅ PASS (strukturāli) | Maršrutēšana atbilst LV; 21 `minimalStudy` karte bez renderējama satura — mantots no LV, nav UK regresija |
| `validate-kurss.js --lang=uk` | ⚠️ PASS ar brīdinājumu | Brīdina tieši par 1. kritisko atradumu (Kurss 1.-6. lekciju treniņa kartītes) |
| `smoke-test-ui.js --lang=uk` | ❌ FAIL (nepatiess pozitīvs) | Skripta pats ierobežojums, skat. piezīmi zemāk |
| `audit-translations.js --lang=uk` | ⚠️ 5 atradumi | `study.translation` neatbilst `lv` laukam (skat. 6. atradumu) |
| `audit-study-cards.js --lang=uk` | ⚠️ Identisks LV/LT bāzes līnijai | 700/755 "fail" — tas pats rezultāts arī LV un LT datiem, tātad NAV UK-specifiska problēma, bet gan skripta sliekšņa īpatnība |

---

## Kritiski atradumi (Kritiska smaguma pakāpe)

### 1. Kurss 1.–6. lekciju "tulkošanas" treniņa kartītes rāda latviešu tekstu ukraiņu lietotājiem

**Fails:** `ui.js` (kopīgais motors), rindas ~1347–1359; trūkst `data/uk/courseTrainingCards.js`
**Standarta punkts:** 28. punkts ("nekur nedrīkst parādīties LV teksts")

`getCourseTranslateCards()` funkcijā `ui.js` ir īpaši zari LT (`lang === "lt"`) un ET (`isEt`) valodām, kas ielādē valodai atbilstošas treniņa kartītes (`lesson1TrainingCardsLt`, `lesson1TrainingCardsEt` u.c.). Visām pārējām valodām — tostarp UK — kods izmanto noklusējuma `lesson1TrainingCards` masīvu, kas ir **cietkodēts latviešu valodā**:

```1677:1689:ui.js
const lesson1TrainingCards = [
  { front: "Vai tu nāc?", back: "Kommst du?" },
  { front: "Jā, es nāku.", back: "Ja, ich komme." },
  ...
];
```

Rezultātā ukraiņu lietotājam Kurss lekciju 1–6 "Übung II — перекладайте" solī vietā, kur jāparādās ukraiņu teikumam priekšā, parādās latviešu teikums ("Vai tu nāc?", "Kas dzied?" u.tml.). Šo apstiprina arī `validate-kurss.js --lang=uk` izvads:

> `data/uk/courseTrainingCards.js` does not exist — lessons 1-6 fall back to the LV-hardcoded lessonNTrainingCards in ui.js for this language (only correct if ui.js explicitly branches on lang="uk" the way it does for "lt").

**Ieteiktais labojums (nav izpildīts šī audita ietvaros):** Izveidot `data/uk/courseTrainingCards.js` (analogi `data/lt/courseTrainingCards.js`) ar ukraiņu tulkojumiem un pievienot `ui.js` attiecīgu zaru (`lesson1TrainingCardsUk` u.tml.), vai vispārināt esošo LT/ET šablonu jebkurai valodai ar datu failu.

---

### 2. `courseLessons.js` — vācu valodas saturs bojāts vairākos dialogu piemēros

**Fails:** `data/uk/courseLessons.js` (un `www/data/uk/courseLessons.js`)
**Standarta punkts:** Uzdevuma pamatprasība "Vācu saturs paliek nemainīgs" + 2.1. sadaļas gars (strukturālā/satura ekvivalence)

Padziļinātā pārbaude atklāja, ka `courseLessons.js` HTML saturs — atšķirībā no 8 strukturētajiem datu failiem (`a1.js`…`verbs.js`, kur `validate-full.js` apstiprina 100% vācu satura neskartību) — **netika pasargāts ar to pašu "piespiedu vācu valoda" mehānismu tulkošanas cauruļvadā**. Rezultātā tīri vācu dialoga teikumi un vārdformas tikuši daļēji mašīntulkoti.

Skenējot 230 patstāvīgus (nesaistītus "DE — LV" pāru formātā) `kurss-example` blokus, **102 no tiem (44%)** satur latīņu vāciski rakstītā teikumā iemontētu kirilicu. Piemēri:

| Fails/atslēga | LV oriģināls (nemainīgs vācu teksts) | UK rezultāts (bojāts) |
|---|---|---|
| `kurssLesson4` | `Paul kommt und nimmt einen Federhalter.` | `Пауль kommt und nimmt einen Федергальтер.` |
| `kurssLesson4` | `Olga antwortet: „Der Federhalter ist schwarz.“` | `Ольга антортет: "Der Федерхальтер ist schwarz."` |
| `kurssLesson5` | `Der Vater lobt das Kind.` | `Der Vater шкірка das Kind.` *(darbības vārds "lobt" nepareizi iztulkots par "шкірка" = "āda")* |
| `kurssLesson7` | `Ich singe ein Lied.` | `Ich об'єднати ein Lied.` *("singe" → "apvienot", teikums vairs negramatisks)* |
| `kurssLesson7` | `Hans, singe ein Lied!` | `Ганс, запікай ein Lied!` *("singe" → "cep")* |
| `kurssLesson2` | `du arbeitest` | `du контрольна робота` |
| `kurssLesson2` | `ich tue` | `ich вт` |
| `kurssLesson1` | `Steht Albert? Ja, er steht.` | `Steht Альберт? Якщо, er steht.` *(vācu "Ja" = "jā" nepareizi uztverts kā latviešu "ja" = "ja" un iztulkots par "Якщо" = "ja/kad")* |

Cēlonis: `courseLessons.js` apstrādei tika izmantota atsevišķa, no galvenā "forcedLang=de" valodas noteikšanas mehānisma neatkarīga HTML parsēšanas loģika (iepriekšējā sesijā minētā `course-lessons.js` skripta atsevišķā apstrāde), kas nekonsekventi noteica, kuras teksta daļas ir vācu un kuras — latviešu, īpaši īsos dialoga teikumos un personvārdos (Paul, Hans, Marie, Olga, Albert, Marta), kā arī atsevišķos darbības vārdos, kas sakrīt ar biežiem latviešu vārdiem.

Šis ir kritisks atradums, jo tas pārkāpj tiešo uzdevuma prasību "vācu saturs nemainās" tieši lielā daļā Kurss sadaļas dialogu piemēru — lietotājs redz salauztu, negramatisku vācu tekstu.

**Ieteiktais labojums (nav izpildīts šī audita ietvaros):** Pilnībā pārstrādāt `data/uk/courseLessons.js` ar to pašu aizsardzības mehānismu (glosārijs + piespiedu-vācu noteikšana), ko izmantoja 8 strukturētie faili, un manuāli pārbaudīt visus 21 lekciju/sadaļu HTML blokus pēc atkārtotas apstrādes.

---

## Augsti atradumi

### 3. `sectionAccents` (highlight) neatbilstība plašā apjomā

**Fails:** `data/uk/a1.js` … `data/uk/c1.js` (`study.sectionAccents`)
**Standarta punkts:** 43. punkts, 2.2. sadaļa (7.–8. punkts)

`validate-study-design.js --lang=uk` uzrāda **7557** gadījumus, kad `sectionAccents` krāsu terminu vairs neatrod atbilstošajā (iztulkotajā) tekstā — salīdzinājumam, LV oriģinālam pašam ir 2335 šādu neatbilstību (jau iepriekš esoša problēma avota datos), bet LT valodai pēc pilnas LT audita šis skaitlis ir **0**. Tātad UK tulkošana ieviesa ievērojamu papildu neatbilstību apjomu virs jau esošās LV bāzes līnijas.

Piemērs (`data/uk/b2.js`, `sich abfinden`):
```json
"explanation": [...],
"sectionAccents": { "explanation": { "green": ["миритися з"] } }
```
Termins `"миритися з"` sadaļas tekstā vairs precīzi neatrodas (piem., tulkotājs izvēlējies citu sinonīmu skaidrojumā, nekā akcentu sarakstā).

**Ietekme:** highlight iekrāsošana study kartēs nedarbosies pareizi (attiecīgais vārds netiks iekrāsots) daudzās UK kartēs — pārkāpj 2.2. sadaļas prasību par highlight ekvivalenci ar LV.

**Ieteiktais labojums (nav izpildīts):** Pēc pamata tulkojuma pabeigšanas nepieciešams atsevišķs caurskata solis, kas pārbauda un sinhronizē `sectionAccents` terminus ar faktisko (iztulkoto) teksta formu katrā sadaļā — analoģiski darbam, kas tika veikts LT valodai (kur rezultāts ir 0).

---

## Vidējas smaguma pakāpes atradumi

### 4. Latviešu teksta atlūzas atsevišķos `study` laukos (a1, a2, b2)

**Standarta punkts:** 20., 25. punkts

Padziļināta skenēšana (diakritikas + gramatikas terminu meklēšana) 8 strukturētajos failos atrada **15** gadījumus, kur skaidrojuma/padoma laukā palicis neiztulkots latviešu teksts vai latviešu gramatikas termins:

| Fails | Karte | Lauks | Teksts |
|---|---|---|---|
| `a1.js` | `haben` | `study.important[0]` | "латиське «man ir» = німецьке Ich habe + знахідний відмінок..." |
| `a1.js` | `lang` | `study.explanation[4]` | "Латвійські «garš» і «ilgs» — це два різні слова..." |
| `a1.js` | `was` | `study.explanation[3]` | "...латиською мовою він перекладається як kas..." |
| `a2.js` | `Holz` | `study.important.example` | "Dzīvs koks = der Baum. Holz також може означати дрова." |
| `a2.js` | `na gut` | `study.tip.example` | "Piemērs: Na gut, ich probiere es. – Ну, я спробую." |
| `a2.js` | `wahrscheinlich` | `study.important.example` | "...sicher vai bestimmt = однозначно." |
| `b2.js` | `sich betätigen` | `study.explanation` | "sich betätigen вимагали певних прийменник in + де?." |

Un vairāki citi (pilnu sarakstu skatīt audita darba failā `/tmp/uk_pipeline/scan-leftover-lv-v2.js` izvadā). Apjoms ir neliels (15 no ~8600 ierakstiem = 0.17%), bet tas tieši pārkāpj "profesionāla kopiespaida" prasību.

**Ieteiktais labojums:** Manuāli pārtulkot atlikušos 15 gadījumus.

### 5. Kurss izrunas sadaļa — latviešu alfabētā balstīta fonētiskā transkripcija nav adaptēta kirilicai

**Fails:** `data/uk/courseLessons.js` (`kurssPronunciationLesson`, `kurssConsonantsLesson`, lekciju izrunas piezīmes)
**Standarta punkts:** 16. punkts (diakritika/rakstzīmes jārenderē pareizi), netieši arī 25. punkts (dabiskums)

Fonētiskās transkripcijas iekavās (piem., `spielen (špīlen)`, `hier (hīr)`, `zählen (cēlen)`) ir rakstītas ar **latviešu alfabēta burtiem un diakritiku** (š, ī, ā, ē), kas paredzēti latviešu lasītājam, lai parādītu vācu skaņu izrunu. Ukraiņu versijā šī transkripcija palikusi neizmainīta latīņu-latviešu formā, nevis adaptēta kirilicai (piem., "шпілен", "хір"), kas ukraiņu lasītājam ir svešs un mulsinošs formāts — pārkāpj lietotnes iekšējo konsekvenci (visur pārējā UK saskarnē teksts ir kirilicā).

**Ieteiktais labojums:** Pārstrādāt fonētiskās transkripcijas ar kirilicas transliterāciju analogi tam, kā tas tika darīts latviešu oriģinālam.

### 6. `study.translation` bullet-atdalītās nozīmes neatbilst pamatlaukam (5 gadījumi)

**Standarta punkts:** 19. punkts

`audit-translations.js --lang=uk` atrada 5 karšu, kur `study.translation` (ar `•` atdalītas nozīmes) nesakrīt ar galveno tulkojuma lauku:

```
{"de":"an","lv":"at • to • present","translation":"при • на поверхні • на краю", ...}
{"de":"Bank","lv":"банку","translation":"банка • лава • банка", ...}
{"de":"Leiter","lv":"менеджер","translation":"менеджер • драбина", ...}
{"de":"sich bedienen","lv":"служити","translation":"використовувати", ...}
{"de":"Nachdruck","lv":"наголос","translation":"наголос • передрук", ...}
```

**Ieteiktais labojums:** Manuāli saskaņot 5 karšu `translation` lauku ar galveno `lv` (UK) lauku vai otrādi, atkarībā no tā, kura versija ir pareizāka.

---

## Zemas smaguma pakāpes / informatīvi atradumi

### 7. `smoke-test-ui.js` nepatiess pozitīvs UK valodai

Skripts pārbauda, vai `languages/datasets.js` saturā regex veidā parādās valodas kods (`/uk/i`). Šis fails ir **apzināti vispārināts** (neviena valoda nav cietkodēta tajā — pareizi pēc 6. punkta), tāpēc regex neko neatrod tieši priekš "uk", turpretī "lt" un "et" nejauši sakrīt ar apakšvirknēm citos vārdos (piem., "let", "Set"). Tas nav reāls UK trūkums, bet gan skripta ierobežojums, kas vērts pieminēt turpmākai skripta uzlabošanai (piem., pārbaudīt `AppLanguageRegistry` sarakstā, nevis `datasets.js` tekstā).

### 8. `audit-study-cards.js` augstais neveiksmju skaits — nav UK-specifisks

700/755 "fail" rezultāts precīzi sakrīt ar LV un LT bāzes līnijām (identiski skaitļi pa līmeņiem). Tas norāda uz šī skripta stingriem/novecojušiem kritērijiem, nevis UK tulkojuma kvalitātes problēmu. Ieteicams pārskatīt pašu skriptu atsevišķi no valodu auditiem.

### 9. Zināmās, jau iepriekš dokumentētās `accents` map strukturālās atšķirības (a2.js, 5 gadījumi)

`ein`, `dick`, `doktor`, `drücken`, `ehrlich` — šīm kartēm LV/UK struktūrparaksts nedaudz atšķiras tāpēc, ka divi dažādi latviešu vārdi tulkošanā konverģējuši uz vienu un to pašu ukraiņu vārdu, izraisot `accents` map atslēgu apvienošanu (ja krāsa sakrita, dati nezuda; ja nesakrita, saglabāts oriģinālais LV vārds kā atslēga — dokumentēts iepriekšējā sesijā). Nav datu zuduma, tikai strukturālā paraksta atšķirība. Zema prioritāte.

---

## Atradumi, kas izlaboti audita gaitā (nevis tikai ziņoti)

Lai gan standarts nosaka, ka audita fāzē labojumi netiek izpildīti, šie divi atradumi bloķēja jebkādu tālāku audita darbu vai bija jau iepriekš zināmi kā akūti lietotāja ziņoti defekti, tāpēc tika izlaboti nekavējoties:

1. **`www/data/uk/` mape vispār neeksistēja** — visi 9 UK datu faili bija tikai `data/uk/`, bet trūka `www/` kopijā (kas, iespējams, tiek izmantota izvietošanai). Izlabots: nokopēti visi 9 faili uz `www/data/uk/`.
2. **`languages/registry.js` / manifestu `dataStatus`** joprojām rādīja `"fallback"` pēc datu failu izveides (PR #215, jau apvienots pirms šī audita).

---

## Nepilnīgi pārbaudītās jomas (ārpus automatizētā audita iespējām)

- **27. punkts (native speaker izlases pārbaude):** nav veikta — nepieciešams ukraiņu valodas dzimtā runātājs, lai apstiprinātu gramatisko dabiskumu ~30+ nejauši izvēlētās kartēs.
- **17. punkts (ekrānuzņēmumu salīdzinājums):** nav veikts — nepieciešama vizuāla salīdzināšana pārlūkā/ierīcē.
- **29., 31. punkts (pārlūka konsole, audio):** nav pārbaudīts reālā pārlūka vidē šajā audita sesijā.

---

## Kopējais secinājums

UK-DE valoda **strukturāli un tehniski** ir ļoti tuvu LV-DE etalonam (100% ieraksta skaita atbilstība, 100% lauku/layout atbilstība, 0 mojibake, pilnīgs UI virkņu pārklājums, nesatricināts vācu saturs 8 no 9 datu failiem). Tomēr **2 kritiski atradumi** — (1) Kurss 1.–6. lekciju treniņa kartītes joprojām rāda latviešu tekstu un (2) `courseLessons.js` dialogu piemēros bojāts vācu saturs 44% pārbaudīto gadījumu — nozīmē, ka valoda **nav uzskatāma par gatavu produkcijai** pēc šī standarta 8. sadaļas kritērijiem, kamēr šīs divas problēmas netiek novērstas un atkārtoti auditētas.
