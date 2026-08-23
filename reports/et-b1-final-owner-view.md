# ET–DE B1 — final OWNER VIEW (33 blockers)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Baseline:** `origin/main` 0eb0b95aaf29
**Production blob:** `16804eec669a…`
**Merged PR #625:** sectionAccents closed

| Navigācija | Saite |
|------------|-------|
| OWNER DECISIONS | [et-b1-final-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-b1-final-owner-decisions.md) |
| GitHub indekss | [et-b1-final-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-b1-final-owner-review-GITHUB.md) |
| Source review | [et-b1-final-source-review.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-b1-final-source-review.md) |

**Coverage:** 33/33 (32 linguistic NSR + 1 parity parent)

---

## ET-B1-0001 — Study parity parent

**Card ID:** `STRUCT`
**Field:** `study.count`
**Severity:** CRITICAL · **Category:** STRUCTURE
**CURRENT (ET study count):** 335
**LV MASTER study count:** 324
**Extra Study objects:** 11
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LV MASTER etalonā 11 indeksos nav study objekta; ET standardStudy ir TRUE_EXTRA. OWNER-approved: noņemt study objektu no 11 kartēm, lai ET study count = 324.

### 11 extra Study objects (individual review)

| ET Study Card ID | ET index | LV counterpart | Class | OWNER action | Evidence |
|------------------|----------|----------------|-------|--------------|----------|
| b1-handarbeit | 1190 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=Handarbeit |
| b1-handwerk | 1197 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=Handwerk |
| b1-heran | 1245 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=heran |
| b1-herbei | 1249 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=herbei |
| b1-nation | 1964 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=Nation |
| b1-rat | 2224 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=Rat |
| b1-testen | 2883 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=testen |
| b1-überreden | 2956 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=überreden |
| b1-überzeugen | 2962 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=überzeugen |
| b1-vernunft | 3080 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=Vernunft |
| b1-verstand | 3115 | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV `study` absent, ET `standardStudy` present; `de`=Verstand |

> Parity classes: **TRUE_EXTRA_STUDY** = ET study nav LV MASTER; **VALID_ET_SPECIFIC_STUDY** = 0; **DUPLICATE_OR_WRONG_SHAPE** = 0; **OWNER_DECISION_REQUIRED** = 0 (sub-objects klasificēti).

---

## ET-B1-4250

**Card ID:** `b1-anrichten-133`
**Field/path:** `etText`
**Severity:** MEDIUM · **Category:** SEMANTICS
**DE (read-only):** anrichten
**LV MASTER reference:** nodarīt
**CURRENT (production main):** tekitama
**PROPOSED_ET (audit — nav auto-accept):** kahju tekitama
**Problēma:** Selles tähenduses tähendab anrichten kahju põhjustamist; tekitama üksi on liiga üldine.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LV nodarīt + DE anrichten (Schaden) nozīme: tekitama ir pārāk vispārīgs; kahju tekitama precizē kahju põhjustamist.
**OWNER NEW:** kahju tekitama

---

## ET-B1-4251

**Card ID:** `b1-anschreiben-141`
**Field/path:** `etText`
**Severity:** MEDIUM · **Category:** TRANSLATION
**DE (read-only):** anschreiben
**LV MASTER reference:** pierakstīt
**CURRENT (production main):** üles kirjutama
**PROPOSED_ET (audit — nav auto-accept):** kirjutama
**Problēma:** Üles kirjutama tähendab saksa keeles pigem aufschreiben; anschreiben tähendab kirjutama või kellelegi kirjutama.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** NELABOT
**OWNER_DECISION:** LV pierakstīt atbilst ET üles kirjutama (üles kirjutama = kirja panema); Luna kirjutama zaudē „üles“ niansi.

---

## ET-B1-4257

**Card ID:** `b1-Begleitung-294`
**Field/path:** `etText`
**Severity:** MEDIUM · **Category:** TRANSLATION
**DE (read-only):** Begleitung
**LV MASTER reference:** pavadījums
**CURRENT (production main):** saatel
**PROPOSED_ET (audit — nav auto-accept):** saatmine
**Problēma:** „Saatel” tähendab „saatel/koos saatjaga” ega ole siin loomulik nimisõnaline vaste sõnale „Begleitung”.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LV pavadījums (pavadīšana/pavadonis); ET saatel ir väärtõlge/moonutus; kaasamine atbilst LV MASTER.
**OWNER NEW:** kaasamine

---

## ET-B1-4281

**Card ID:** `b1-Einrichtung-700`
**Field/path:** `etText`
**Severity:** MEDIUM · **Category:** SEMANTICS
**DE (read-only):** Einrichtung
**LV MASTER reference:** iekārta
**CURRENT (production main):** seade
**PROPOSED_ET (audit — nav auto-accept):** sisustus
**Problēma:** „Seade“ tähendab peamiselt üksikut aparaati; „Einrichtung“ tähendab siin pigem sisustust või sisseseadet.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** LV iekārta un ET seade ir ekvivalents iekārtas/seadme gloss; Luna sisustus neatbilst LV.

---

## ET-B1-4303

**Card ID:** `b1-halbtags-1182`
**Field/path:** `etText`
**Severity:** MEDIUM · **Category:** SEMANTICS
**DE (read-only):** halbtags
**LV MASTER reference:** nepilnu darba dienu
**CURRENT (production main):** osaajaga
**PROPOSED_ET (audit — nav auto-accept):** poole päeva kaupa
**Problēma:** „Osaajaga” tähendab üldiselt osalise tööajaga; „halbtags” täpsustab poole päeva kestust.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LV nepilnu darba dienu; ET osaajaga ir semantiski neprecīzs halbtags kontekstā; pool tööpäeva atbilst LV.
**OWNER NEW:** pool tööpäeva

---

## ET-B1-4317

**Card ID:** `b1-Kapelle-1467`
**Field/path:** `etText`
**Severity:** HIGH · **Category:** TRANSLATION
**DE (read-only):** Kapelle
**LV MASTER reference:** kapela
**CURRENT (production main):** kapell
**PROPOSED_ET (audit — nav auto-accept):** kabel
**Problēma:** „Kapell” tähendab eesti keeles muusikakollektiivi; saksa Kapelle tähendab siin kabelit.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LV kapela; ET kapell ir DE/LV remnant; kabel = kapeli õige ET gloss.
**OWNER NEW:** kabel

---

## ET-B1-4327

**Card ID:** `b1-Kursbuch-1680`
**Field/path:** `etText`
**Severity:** HIGH · **Category:** TRANSLATION
**DE (read-only):** Kursbuch
**LV MASTER reference:** vilcienu saraksts
**CURRENT (production main):** rongide sõiduplaan
**PROPOSED_ET (audit — nav auto-accept):** kursuseõpik
**Problēma:** Saksa Kursbuch tähendab kursuseõpikut, mitte rongide sõiduplaani; LV allikas on siin vastuolus saksa tähendusega.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** LV vilcienu saraksts un ET rongide sõiduplaan abi sõnastikud vilcienu sõiduplaani jaoks; Luna kursuseõpik ir cita nozīme.

---

## ET-B1-4357

**Card ID:** `b1-Prüfzeit-2178`
**Field/path:** `etText`
**Severity:** MEDIUM · **Category:** SEMANTICS
**DE (read-only):** Prüfzeit
**LV MASTER reference:** pārbaudes laiks
**CURRENT (production main):** katseaeg
**PROPOSED_ET (audit — nav auto-accept):** kontrolliaeg
**Problēma:** „Katseaeg” tähendab eesti keeles peamiselt prooviperioodi või katseaega tööl; „Prüfzeit” on kontrollimise aeg.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** NELABOT
**OWNER_DECISION:** LV pārbaudes laiks un ET katseaeg ir kontekstā ekvivalents; kontrolliaeg nav obligāti labāks.

---

## ET-B1-4416

**Card ID:** `b1-Wasserski-3208`
**Field/path:** `etText`
**Severity:** HIGH · **Category:** TRANSLATION
**DE (read-only):** Wasserski
**LV MASTER reference:** ūdensslēpe
**CURRENT (production main):** veesuusk
**PROPOSED_ET (audit — nav auto-accept):** veesuusatamine
**Problēma:** „Veesuusk” tähendab veesuuska, kuid saksa Wasserski viitab veesuusatamisele kui spordialale.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** NELABOT
**OWNER_DECISION:** LV ūdensslēpe un ET veesuusk atbilst ūdenski sporta/attrakcijas gloss.

---

## ET-B1-4420

**Card ID:** `b1-Weise-3228`
**Field/path:** `etText`
**Severity:** HIGH · **Category:** TRANSLATION
**DE (read-only):** Weise
**LV MASTER reference:** gudrs
**CURRENT (production main):** tark
**PROPOSED_ET (audit — nav auto-accept):** viis
**Problēma:** Nimisõna „die Weise” tähendab „viis” või „mood”; „tark” vastab omadussõnale „weise”.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** LV gudrs (gudrs adj) un ET tark atbilst Weise adj gloss; Luna viis ir cita nozīme (manner).

---

## ET-B1-4499

**Card ID:** `b1-inhalt`
**Field/path:** `study.examples[2].lv`
**Severity:** MEDIUM · **Category:** SEMANTICS
**DE (read-only):** Inhalt
**LV MASTER reference:** pudeles tilpums ir viens litrs.
**CURRENT (production main):** pudeli maht on üks liiter.
**PROPOSED_ET (audit — nav auto-accept):** pudeli sisu on üks liiter.
**Problēma:** „Maht“ tähendab pudeli ruumala, mitte selle sisu; Inhalt viitab siin pudeli sisule.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** DE Inhalt von einem Liter = tilpums; LV pudeles tilpums un ET pudeli maht on õiged; Luna sisu ir semantiski neprecīzs.

---

## ET-B1-4533

**Card ID:** `b1-ruhen`
**Field/path:** `study.examples[1].lv`
**Severity:** MEDIUM · **Category:** NATURALNESS
**DE (read-only):** ruhen
**LV MASTER reference:** ezers mierīgi guļ saulē.
**CURRENT (production main):** järv lamab rahulikult päikese käes.
**PROPOSED_ET (audit — nav auto-accept):** järv puhkab rahulikult päikese käes.
**Problēma:** Eesti keeles ei kasutata järve kohta tavaliselt verbi lamama; siin sobib puhkama kui rahulikult paigal olema.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** NELABOT
**OWNER_DECISION:** Poētiline ruhen piemērs: LV ezers mierīgi guļ saulē ↔ ET järv lamab rahulikult päikese käes; puhkab nav obligāts.

---

## ET-B1-4544

**Card ID:** `b1-sowie`
**Field/path:** `study.examples[2].lv`
**Severity:** HIGH · **Category:** SEMANTICS
**DE (read-only):** sowie
**LV MASTER reference:** tiklīdz man būs laiks, es tev piezvanīšu.
**CURRENT (production main):** niipea kui mul on aega, helistan sulle.
**PROPOSED_ET (audit — nav auto-accept):** Ma helistan sulle ning saadan sulle ka sõnumi.
**Problēma:** Näide tähendab „niipea kui” ehk sobald, mitte sowie („ning, samuti”).
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET niipea kui mul on aega, helistan sulle atbilst DE/LV tiklīdz formulējumam; Luna pilns teikuma pārveidojums nav vajadzīgs.

---

## ET-B1-4574

**Card ID:** `b1-verletzen`
**Field/path:** `study.examples[2].lv`
**Severity:** MEDIUM · **Category:** SEMANTICS
**DE (read-only):** verletzen
**LV MASTER reference:** viņš aizstāv skaidru viedokli.
**CURRENT (production main):** juht rikkus liikluseeskirju.
**PROPOSED_ET (audit — nav auto-accept):** ta kaitseb selget seisukohta.
**Problēma:** Siin tähendab vertreten seisukoha kaitsmist või pooldamist, mitte lihtsalt selle esindamist.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** Production study.examples[2].lv = juht rikkus liikluseeskirju atbilst DE Verkehrsregeln/LV pārkāpa; audit vertreten segums bija kļūdains.

---

## ET-B1-4606

**Card ID:** `b1-erbe`
**Field/path:** `study.examples[2].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Erbe
**LV MASTER reference:** mantojums sastāv no mājas.
**CURRENT (production main):** pärand koosneb majast.
**PROPOSED_ET (audit — nav auto-accept):** Pärijad jagavad vara.
**Problēma:** This example teaches „pärand“ (inheritance), while the card translation is „pärija“ (heir).
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET pärand koosneb majast atbilst DE Das Erbe besteht aus einem Haus abu indeksā.

---

## ET-B1-4607

**Card ID:** `b1-erbe`
**Field/path:** `study.examples[3].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Erbe
**LV MASTER reference:** viņa saņēma lielu mantojumu.
**CURRENT (production main):** ta sai suure pärandi.
**PROPOSED_ET (audit — nav auto-accept):** Ta on oma onu pärija.
**Problēma:** This example teaches „pärand“ (inheritance), while the card translation is „pärija“ (heir).
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET ta sai suure pärandi atbilst DE Sie hat ein großes Erbe bekommen.

---

## ET-B1-4608

**Card ID:** `b1-erbe`
**Field/path:** `study.examples[5].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Erbe
**LV MASTER reference:** mantojums tiek sadalīts.
**CURRENT (production main):** pärand jagatakse.
**PROPOSED_ET (audit — nav auto-accept):** Pärijad jagavad vara.
**Problēma:** This example teaches „pärand“ (inheritance), not the card’s intended sense „pärija“ (heir).
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET pärand jagatakse atbilst DE Das Erbe wird geteilt.

---

## ET-B1-4609

**Card ID:** `b1-erbe-study`
**Field/path:** `study.examples[1].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Erbe
**LV MASTER reference:** viņš ir savas onkļa mantinieks.
**CURRENT (production main):** ta on oma onu pärija.
**PROPOSED_ET (audit — nav auto-accept):** Pärand koosneb majast.
**Problēma:** This example teaches „pärija“ (heir), while the card translation is „pärand“ (inheritance).
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET ta on oma onu pärija atbilst DE Er ist der Erbe seines Onkels (erbe-study).

---

## ET-B1-4610

**Card ID:** `b1-erbe-study`
**Field/path:** `study.examples[4].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Erbe
**LV MASTER reference:** kas ir mantinieks?
**CURRENT (production main):** kes on pärija?
**PROPOSED_ET (audit — nav auto-accept):** Kui suur on pärand?
**Problēma:** This example teaches „pärija“ (heir), not the card’s intended sense „pärand“ (inheritance).
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET kes on pärija? atbilst DE Wer ist der Erbe?

---

## ET-B1-4611

**Card ID:** `b1-schaden`
**Field/path:** `study.examples[5].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Schaden
**LV MASTER reference:** tas kaitē veselībai.
**CURRENT (production main):** see kahjustab tervist.
**PROPOSED_ET (audit — nav auto-accept):** See tekitab tervisekahju.
**Problēma:** The example uses the verb „kahjustama“, while this card teaches the noun „kahju/ kahjustus“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET see kahjustab tervist atbilst DE Das schadet der Gesundheit.

---

## ET-B1-4612

**Card ID:** `b1-schaden-study`
**Field/path:** `study.examples[1].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** schaden
**LV MASTER reference:** vētra radīja lielus zaudējumus.
**CURRENT (production main):** torm põhjustas suurt kahju.
**PROPOSED_ET (audit — nav auto-accept):** Torm kahjustab hooneid.
**Problēma:** The card teaches the verb „kahjustama“, but the current example uses the noun „kahju“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET torm põhjustas suurt kahju atbilst DE Der Sturm verursachte großen Schaden.

---

## ET-B1-4613

**Card ID:** `b1-schaden-study`
**Field/path:** `study.examples[2].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** schaden
**LV MASTER reference:** automašīnai ir bojājums.
**CURRENT (production main):** autol on kahjustus.
**PROPOSED_ET (audit — nav auto-accept):** Auto on kahjustatud.
**Problēma:** The current sentence uses the noun „kahjustus“; the card’s target is the verb „kahjustama“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET autol on kahjustus atbilst DE Am Auto ist ein Schaden.

---

## ET-B1-4614

**Card ID:** `b1-schaden-study`
**Field/path:** `study.examples[3].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** schaden
**LV MASTER reference:** kas maksā par zaudējumu?
**CURRENT (production main):** kes maksab kahju eest?
**PROPOSED_ET (audit — nav auto-accept):** Keda see kahjustab?
**Problēma:** The current sentence uses the noun „kahju“ rather than the target verb „kahjustama“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET kes maksab kahju eest? atbilst DE Wer zahlt den Schaden?

---

## ET-B1-4615

**Card ID:** `b1-schaden-study`
**Field/path:** `study.examples[4].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** schaden
**LV MASTER reference:** zaudējums ir liels.
**CURRENT (production main):** kahju on suur.
**PROPOSED_ET (audit — nav auto-accept):** See kahjustab tugevalt.
**Problēma:** The current sentence describes the noun „kahju“, not the target verb „kahjustama“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET kahju on suur atbilst DE Der Schaden ist groß.

---

## ET-B1-4616

**Card ID:** `b1-vertrauen-study`
**Field/path:** `study.examples[1].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** vertrauen
**LV MASTER reference:** man ir uzticība savam ārstam.
**CURRENT (production main):** mul on usaldus oma arsti vastu.
**PROPOSED_ET (audit — nav auto-accept):** Ma usaldan oma arsti.
**Problēma:** The current example uses the noun „usaldus“, while this card teaches the verb „usaldama“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET mul on usaldus oma arsti vastu atbilst DE Ich habe Vertrauen zu meinem Arzt.

---

## ET-B1-4617

**Card ID:** `b1-vertrauen-study`
**Field/path:** `study.examples[2].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** vertrauen
**LV MASTER reference:** uzticība ir svarīga.
**CURRENT (production main):** usaldus on tähtis.
**PROPOSED_ET (audit — nav auto-accept):** Teda on tähtis usaldada.
**Problēma:** The current example uses the noun „usaldus“, not the target verb „usaldama“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET usaldus on tähtis atbilst DE Das Vertrauen ist wichtig.

---

## ET-B1-4618

**Card ID:** `b1-vertrauen-study`
**Field/path:** `study.examples[4].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** vertrauen
**LV MASTER reference:** viņš zaudēja manu uzticību.
**CURRENT (production main):** ta kaotas minu usalduse.
**PROPOSED_ET (audit — nav auto-accept):** Ma ei usalda teda enam.
**Problēma:** The current example uses the noun „usalduse“, while this card teaches the verb „usaldama“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET ta kaotas minu usalduse atbilst DE Er hat mein Vertrauen verloren.

---

## ET-B1-4619

**Card ID:** `b1-trotz`
**Field/path:** `study.examples[1].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Trotz
**LV MASTER reference:** neraugoties uz lietu, mēs ejam pastaigā.
**CURRENT (production main):** hoolimata vihmast läheme jalutama.
**PROPOSED_ET (audit — nav auto-accept):** Ta teeb seda jonnist.
**Problēma:** This example teaches the preposition „hoolimata“, not the noun „jonn/kangekaelsus“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET hoolimata vihmast läheme jalutama atbilst DE Trotz des Regens gehen wir spazieren.

---

## ET-B1-4620

**Card ID:** `b1-trotz`
**Field/path:** `study.examples[3].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Trotz
**LV MASTER reference:** neraugoties uz slikto laiku, mēs braucam.
**CURRENT (production main):** hoolimata halvast ilmast me sõidame.
**PROPOSED_ET (audit — nav auto-accept):** Tal on palju jonni.
**Problēma:** This example teaches the preposition „hoolimata“, not the noun „jonn/kangekaelsus“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET hoolimata halvast ilmast me sõidame atbilst DE Trotz des schlechten Wetters fahren wir.

---

## ET-B1-4621

**Card ID:** `b1-trotz`
**Field/path:** `study.examples[5].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** Trotz
**LV MASTER reference:** neraugoties uz slimību, viņš nāk.
**CURRENT (production main):** hoolimata haigusest ta tuleb.
**PROPOSED_ET (audit — nav auto-accept):** Ta teeb seda jonnist.
**Problēma:** This example teaches the preposition „hoolimata“, not the noun „jonn/kangekaelsus“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET hoolimata haigusest ta tuleb atbilst DE Trotz der Krankheit kommt er.

---

## ET-B1-4622

**Card ID:** `b1-trotz-study`
**Field/path:** `study.examples[2].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** trotz
**LV MASTER reference:** viņš to dara spīta pēc.
**CURRENT (production main):** ta teeb seda jonnist.
**PROPOSED_ET (audit — nav auto-accept):** Hoolimata vihmast läheme jalutama.
**Problēma:** This example teaches the noun „jonn“, not the preposition „hoolimata“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET ta teeb seda jonnist atbilst DE Er macht es aus Trotz.

---

## ET-B1-4623

**Card ID:** `b1-trotz-study`
**Field/path:** `study.examples[4].lv`
**Severity:** MEDIUM · **Category:** STUDY
**DE (read-only):** trotz
**LV MASTER reference:** viņai ir daudz spīta.
**CURRENT (production main):** temal on palju jonni.
**PROPOSED_ET (audit — nav auto-accept):** Hoolimata haigusest ta tuleb.
**Problēma:** This example teaches the noun „jonn“, not the preposition „hoolimata“.
**OWNER history:** overlay §D explicit NSR
**OWNER STATUS:** FALSE_POSITIVE
**OWNER_DECISION:** ET temal on palju jonni atbilst DE Sie hat viel Trotz.

---
