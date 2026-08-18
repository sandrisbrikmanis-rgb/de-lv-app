# DA–DE Kurss — OWNER preview (group 02: findings 51–95)

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
Avots: `reports/da-kurss-full-audit.md` / `reports/temp/da-kurss-full-audit.json`
Findings: **45** ieraksti

> **PROPOSED_DA** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai DA lauki pēc OWNER lēmuma.

## Finding 51 (Kurss)

**Finding:** 51
**Audit ID:** DA-KURSS-L0025
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Robert und Johann turnen nicht.
**CURRENT_DA:** Nej, Robert og Jan laver ikke gymnastik.
**PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
**Severity:** HIGH
**Category:** NAMES
**Problem:** Det danske navn Jan svarer ikke til Johann i den tyske kildetekst.
**Reason:** Det danske navn Jan svarer ikke til Johann i den tyske kildetekst.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 52 (Kurss)

**Finding:** 52
**Audit ID:** DA-KURSS-L0026
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[13].lv`
**Field type:** `cardLv`
**DE (read-only):** Ja, er will vorwärts kommen.
**CURRENT_DA:** Ja, han vil gerne frem.
**PROPOSED_DA:** Ja, han vil gerne frem.
**Severity:** LOW
**Category:** ORTHOGRAPHY
**Problem:** Kommaet efter "Ja" er korrekt; ingen sproglig rettelse er nødvendig.
**Reason:** Kommaet efter "Ja" er korrekt; ingen sproglig rettelse er nødvendig.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 53 (Kurss)

**Finding:** 53
**Audit ID:** DA-KURSS-L0027
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_DA:** Ord, der ofte bruges uden artiklen: die Milch, das Brot.
**PROPOSED_DA:** Ord, der ofte bruges uden artikel: die Milch, das Brot.
**Severity:** LOW
**Category:** GRAMMAR
**Problem:** Den generiske formulering kræver normalt ubestemt form: “uden artikel”, ikke “uden artiklen”.
**Reason:** Den generiske formulering kræver normalt ubestemt form: “uden artikel”, ikke “uden artiklen”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 54 (Kurss)

**Finding:** 54
**Audit ID:** DA-KURSS-L0028
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** —
**CURRENT_DA:** I ordene wem, dem, den og der udtales e langt og lukket.
**PROPOSED_DA:** I ordene wem, dem, den og der er e-lyden lang og lukket.
**Severity:** LOW
**Category:** NATURALNESS
**Problem:** “udtales e langt” er grammatisk og idiomatisk ufuldstændigt på dansk; “e-lyden” gør formuleringen naturlig.
**Reason:** “udtales e langt” er grammatisk og idiomatisk ufuldstændigt på dansk; “e-lyden” gør formuleringen naturlig.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 55 (Kurss)

**Finding:** 55
**Audit ID:** DA-KURSS-L0029
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** die Diele
**CURRENT_DA:** die Diele — gulv
**PROPOSED_DA:** die Diele — entré
**Severity:** MEDIUM
**Category:** SEMANTICS
**Problem:** På moderne tysk betyder “die Diele” normalt entré eller gang, ikke “gulv”.
**Reason:** På moderne tysk betyder “die Diele” normalt entré eller gang, ikke “gulv”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 56 (Kurss)

**Finding:** 56
**Audit ID:** DA-KURSS-L0030
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[10].prompt`
**Field type:** `cardPrompt`
**DE (read-only):** Dieser Mann geht über die Brücke.
**CURRENT_DA:** Dieser Mann geht über (die Brücke).
**PROPOSED_DA:** Denne mand går over (broen).
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** Prompten er ikke oversat til dansk og indeholder den tyske originalsætning.
**Reason:** Prompten er ikke oversat til dansk og indeholder den tyske originalsætning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 57 (Kurss)

**Finding:** 57
**Audit ID:** DA-KURSS-L0031
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[11].prompt`
**Field type:** `cardPrompt`
**DE (read-only):** Jener Mann steht unter der Brücke.
**CURRENT_DA:** Jener Mann steht unter (die Brücke).
**PROPOSED_DA:** Den mand står under (broen).
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** Prompten er ikke oversat til dansk og indeholder den tyske originalsætning.
**Reason:** Prompten er ikke oversat til dansk og indeholder den tyske originalsætning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 58 (Kurss)

**Finding:** 58
**Audit ID:** DA-KURSS-L0032
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[9].lv`
**Field type:** `cardLv`
**DE (read-only):** Wo ist der Boden?
**CURRENT_DA:** Hvor er loftet?
**PROPOSED_DA:** Hvor er loftet?
**Severity:** NEEDS_SOURCE_REVIEW
**Category:** SEMANTICS
**Problem:** Det danske betyder 'Wo ist der Dachboden?'. Den tyske tekst 'Boden' stemmer ikke med loft/bēniņi i referencen.
**Reason:** Det danske betyder 'Wo ist der Dachboden?'. Den tyske tekst 'Boden' stemmer ikke med loft/bēniņi i referencen.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 59 (Kurss)

**Finding:** 59
**Audit ID:** DA-KURSS-L0033
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv`
**Field type:** `cardLv`
**DE (read-only):** Ich nehme die Hefte aus der Mappe.
**CURRENT_DA:** Jeg tager notesbøgerne op af min taske.
**PROPOSED_DA:** Jeg tager notesbøgerne ud af tasken.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Problem:** DA ændrer både præpositionen og den bestemte reference; teksten bør svare til at tage notesbøgerne ud af tasken.
**Reason:** DA ændrer både præpositionen og den bestemte reference; teksten bør svare til at tage notesbøgerne ud af tasken.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 60 (Kurss)

**Finding:** 60
**Audit ID:** DA-KURSS-L0034
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: article examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Bilmærker → egnet til BMW, egnet til Mercedes</div>
**PROPOSED_DA:** <div class="kurss-example">Bilmærker → der BMW, der Mercedes</div>
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** The Danish text is malformed and omits the German articles shown in the reference.
**Reason:** The Danish text is malformed and omits the German articles shown in the reference.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 61 (Kurss)

**Finding:** 61
**Audit ID:** DA-KURSS-L0035
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: DIE heading`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <h4 class="artikuli-header"><span>♀</span>DØR ofte</h4>
**PROPOSED_DA:** <h4 class="artikuli-header"><span>♀</span>Ofte DIE</h4>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** DØR is a Danish word, not the German article DIE; the heading is a clear translation error.
**Reason:** DØR is a Danish word, not the German article DIE; the heading is a clear translation error.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 62 (Kurss)

**Finding:** 62
**Audit ID:** DA-KURSS-L0036
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: foreign remnants`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">-er → often DER, for example: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
**PROPOSED_DA:** <div class="kurss-example">-er → ofte DER, fx: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** The sentence contains English remnants in otherwise Danish course content.
**Reason:** The sentence contains English remnants in otherwise Danish course content.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 63 (Kurss)

**Finding:** 63
**Audit ID:** DA-KURSS-L0037
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: rules heading`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <h5 class="artikuli-subtitle">Vilkår</h5>
**PROPOSED_DA:** <h5 class="artikuli-subtitle">Regler</h5>
**Severity:** MEDIUM
**Category:** TRANSLATION
**Problem:** Vilkår means conditions/terms; the Latvian source’s Noteikumi means rules in this instructional context.
**Reason:** Vilkår means conditions/terms; the Latvian source’s Noteikumi means rules in this instructional context.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 64 (Kurss)

**Finding:** 64
**Audit ID:** DA-KURSS-L0038
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: exception explanation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** For nogle ord kan artiklen ikke bestemmes pålideligt af slutningen eller den lettiske oprindelse.
**PROPOSED_DA:** For nogle ord kan artiklen ikke bestemmes pålideligt ud fra endelsen eller andre regler.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** The reference concerns German gender, but the Danish text incorrectly mentions Latvian origin.
**Reason:** The reference concerns German gender, but the Danish text incorrectly mentions Latvian origin.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 65 (Kurss)

**Finding:** 65
**Audit ID:** DA-KURSS-L0039
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: learning example`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Das Lernen - Læring</div>
**PROPOSED_DA:** <div class="kurss-example">Das Lernen - læring</div>
**Severity:** LOW
**Category:** ORTHOGRAPHY
**Problem:** The Danish common noun is incorrectly capitalized.
**Reason:** The Danish common noun is incorrectly capitalized.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 66 (Kurss)

**Finding:** 66
**Audit ID:** DA-KURSS-L0040
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: English examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Passer mandag - mandag</div>
**PROPOSED_DA:** <div class="kurss-example">Der Montag - mandag</div>
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** The example is corrupted and does not contain the German noun phrase from the reference.
**Reason:** The example is corrupted and does not contain the German noun phrase from the reference.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 67 (Kurss)

**Finding:** 67
**Audit ID:** DA-KURSS-L0041
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: Akkusativ forms`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Ihn - hans (v.)</div><div class="kurss-example">Sie - hans (s.)</div><div class="kurss-example">Mig - det</div><div class="kurss-example">Han - os</div><div class="kurss-example">Euch - dig</div>
**PROPOSED_DA:** <div class="kurss-example">Ihn - ham (m.)</div><div class="kurss-example">Sie - hende (f.)</div><div class="kurss-example">Es - det</div><div class="kurss-example">Uns - os</div><div class="kurss-example">Euch - jer</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** Several accusative pronoun forms are mistranslated or replaced by Danish pronouns with the wrong meaning.
**Reason:** Several accusative pronoun forms are mistranslated or replaced by Danish pronouns with the wrong meaning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 68 (Kurss)

**Finding:** 68
**Audit ID:** DA-KURSS-L0042
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: English remnants`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <li><span class="case-blue">Nominativ</span> - subject of the sentence (who does?)</li><li><span class="case-red">Akkusativ</span> - direct object (what?)</li><li><span class="case-green">Dativ</span> - indirect object (to whom?)</li>
**PROPOSED_DA:** <li><span class="case-blue">Nominativ</span> - sætningens grundled (hvem gør noget?)</li><li><span class="case-red">Akkusativ</span> - direkte objekt (hvad? hvem?)</li><li><span class="case-green">Dativ</span> - indirekte objekt (til hvem?)</li>
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** The summary is partly in English and therefore not suitable for Danish learners.
**Reason:** The summary is partly in English and therefore not suitable for Danish learners.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 69 (Kurss)

**Finding:** 69
**Audit ID:** DA-KURSS-L0043
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** Wir mögen <span class="case-red">Euk</span>. – Vi kan lide dig.
**PROPOSED_DA:** Wir mögen <span class="case-red">Euch</span>. – Vi kan lide jer.
**Severity:** CRITICAL
**Category:** ORTHOGRAPHY
**Problem:** Euk is a typo for Euch, and the Danish object pronoun must be jer, not dig.
**Reason:** Euk is a typo for Euch, and the Danish object pronoun must be jer, not dig.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 70 (Kurss)

**Finding:** 70
**Audit ID:** DA-KURSS-L0044
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** Wir danken <span class="case-green">Euk</span>. – Vi takker.
**PROPOSED_DA:** Wir danken <span class="case-green">Euch</span>. – Vi takker jer.
**Severity:** CRITICAL
**Category:** ORTHOGRAPHY
**Problem:** Euk is a typo for Euch; the Danish translation is incomplete.
**Reason:** Euk is a typo for Euch; the Danish translation is incomplete.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 71 (Kurss)

**Finding:** 71
**Audit ID:** DA-KURSS-L0045
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: bottom note`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** The Nominative is always the subject of the sentence, while the Akkusativ and Dativ are the objects. Look at the verb and ask: <span class="case-red">Hvad?</span> or <span class="case-green">Wen?</span>
**PROPOSED_DA:** Nominativ er altid sætningens grundled, mens Akkusativ og Dativ er objekter. Se på verbet, og spørg: <span class="case-red">Hvad?</span> eller <span class="case-green">Hvem?</span>
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** The note is in English and incorrectly leaves the German question word Wen in the Danish explanation.
**Reason:** The note is in English and incorrectly leaves the German question word Wen in the Danish explanation.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 72 (Kurss)

**Finding:** 72
**Audit ID:** DA-KURSS-L0046
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: long-vowel examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Tarm (få) - godt</div><div class="kurss-example">Hytte (hūt) - hat</div><div class="kurss-example">Schlaf — sov</div>
**PROPOSED_DA:** <div class="kurss-example">Gut (gūt) - god</div><div class="kurss-example">Hut (hūt) - hat</div><div class="kurss-example">Schlaf — søvn</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** Several German headwords and Danish meanings are corrupted or mismatched.
**Reason:** Several German headwords and Danish meanings are corrupted or mismatched.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 73 (Kurss)

**Finding:** 73
**Audit ID:** DA-KURSS-L0047
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: short-vowel examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Skaldet (balt) - snart</div><div class="kurss-example">Scharf (tørklæde) - ass</div>
**PROPOSED_DA:** <div class="kurss-example">Bald (balt) - snart</div><div class="kurss-example">Scharf (šarf) - skarp</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** Skaldet and tørklæde are incorrect substitutions for the German examples bald and scharf.
**Reason:** Skaldet and tørklæde are incorrect substitutions for the German examples bald and scharf.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 74 (Kurss)

**Finding:** 74
**Audit ID:** DA-KURSS-L0048
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: h examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Ihn (īn) - hans</div><div class="kurss-example">Ihm (īm) - for skinke</div><div class="kurss-example">Nahm (nām) - tog</div>
**PROPOSED_DA:** <div class="kurss-example">Ihn (īn) - ham</div><div class="kurss-example">Ihm (īm) - ham</div><div class="kurss-example">Nahm (nām) - tog</div>
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** Ihn and ihm have incorrect Danish meanings; the source meaning of nahm is past-tense tog and is correct.
**Reason:** Ihn and ihm have incorrect Danish meanings; the source meaning of nahm is past-tense tog and is correct.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 75 (Kurss)

**Finding:** 75
**Audit ID:** DA-KURSS-L0049
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: long i section`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <h4>Langt i = dvs</h4><div class="kurss-example">Dø (dī) - artiklen "dø"</div><div class="kurss-example">Hier (hīr) - hende</div>
**PROPOSED_DA:** <h4>Langt i = ie</h4><div class="kurss-example">Die (dī) - artiklen "die"</div><div class="kurss-example">Hier (hīr) - her</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** The heading and examples contain severe mistranslations: dvs/dø and hende do not represent ie, die, and hier.
**Reason:** The heading and examples contain severe mistranslations: dvs/dø and hende do not represent ie, die, and hier.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 76 (Kurss)

**Finding:** 76
**Audit ID:** DA-KURSS-L0050
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: double-vowel examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Saal (græs) - græs</div><div class="kurss-example">Se (se) - sø / hav</div><div class="kurss-example">Roer (bēt) - seng</div><div class="kurss-example">Støvle (bōt) - båd</div>
**PROPOSED_DA:** <div class="kurss-example">Saal (zāl) - sal</div><div class="kurss-example">See (zē) - sø / hav</div><div class="kurss-example">Beet (bēt) - bed</div><div class="kurss-example">Boot (bōt) - båd</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** Multiple German headwords were replaced by Danish words, and Saal, Beet and Boot have incorrect meanings.
**Reason:** Multiple German headwords were replaced by Danish words, and Saal, Beet and Boot have incorrect meanings.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 77 (Kurss)

**Finding:** 77
**Audit ID:** DA-KURSS-L0051
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: umlaut explanations`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** Ä er en tuning af en.
**PROPOSED_DA:** Ä er en omlyd af a.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** Tuning is an English remnant and the linguistic term is omlyd; the source describes ä as an umlaut of a.
**Reason:** Tuning is an English remnant and the linguistic term is omlyd; the source describes ä as an umlaut of a.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 78 (Kurss)

**Finding:** 78
**Audit ID:** DA-KURSS-L0052
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: summary`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <li>Dvs ofte betyder lang i</li>
**PROPOSED_DA:** <li>Ie betyder ofte langt i</li>
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** Dvs is an erroneous remnant of the source’s explanation of the spelling ie.
**Reason:** Dvs is an erroneous remnant of the source’s explanation of the spelling ie.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 79 (Kurss)

**Finding:** 79
**Audit ID:** DA-KURSS-L0053
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: consonant examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Dårlig (bāt) - dårlig</div>
**PROPOSED_DA:** <div class="kurss-example">Bad (bāt) - bad</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** Dårlig is Danish, not the German headword Bad; the entry contains a foreign-language substitution.
**Reason:** Dårlig is Danish, not the German headword Bad; the entry contains a foreign-language substitution.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 80 (Kurss)

**Finding:** 80
**Audit ID:** DA-KURSS-L0054
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: ch examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Zeichnen (caihnen) - uafgjort</div><div class="kurss-example">Noch (nej) - stadig</div>
**PROPOSED_DA:** <div class="kurss-example">Zeichnen (caihnen) - tegne</div><div class="kurss-example">Noch (noh) - stadig</div>
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** Zeichnen means tegne, not uafgjort; noch has an incorrect pronunciation hint.
**Reason:** Zeichnen means tegne, not uafgjort; noch has an incorrect pronunciation hint.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 81 (Kurss)

**Finding:** 81
**Audit ID:** DA-KURSS-L0055
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: sp/st examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Stald (štal) - stald</div><div class="kurss-example">Stå (štant) - stilling / sted</div>
**PROPOSED_DA:** <div class="kurss-example">Stall (štal) - stald</div><div class="kurss-example">Stand (štant) - stilling / sted</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** The German headwords Stall and Stand were incorrectly replaced with Danish words.
**Reason:** The German headwords Stall and Stand were incorrectly replaced with Danish words.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 82 (Kurss)

**Finding:** 82
**Audit ID:** DA-KURSS-L0056
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: s/z examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <p>''et' i begyndelsen af ​​et ord lyder ofte som et 'z'.</p><div class="kurss-example">Synge (zingen) - at synge</div><div class="kurss-example">Zahl (kylling) - nummer</div>
**PROPOSED_DA:** <p>'s' i begyndelsen af et ord lyder ofte som 'z'.</p><div class="kurss-example">Singen (zingen) - at synge</div><div class="kurss-example">Zahl (cāl) - tal</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** The rule contains a corrupted quoted letter; singen is misspelled and Zahl has the wrong pronunciation and meaning.
**Reason:** The rule contains a corrupted quoted letter; singen is misspelled and Zahl has the wrong pronunciation and meaning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 83 (Kurss)

**Finding:** 83
**Audit ID:** DA-KURSS-L0057
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: v examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Vater (fäter) - langt</div><div class="kurss-example">Von (fon) - no</div><div class="kurss-example">Vier (fīr) - ild</div>
**PROPOSED_DA:** <div class="kurss-example">Vater (fäter) - far</div><div class="kurss-example">Von (fon) - fra</div><div class="kurss-example">Vier (fīr) - fire</div>
**Severity:** CRITICAL
**Category:** TRANSLATION
**Problem:** All three Danish meanings are wrong: Vater means far, von means fra, and vier means fire.
**Reason:** All three Danish meanings are wrong: Vater means far, von means fra, and vier means fire.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 84 (Kurss)

**Finding:** 84
**Audit ID:** DA-KURSS-L0058
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: x/y examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Mythe (mund) - myte</div>
**PROPOSED_DA:** <div class="kurss-example">Mythe (mūte) - myte</div>
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** The Danish meaning is correct, but the pronunciation hint mund is wrong and conflicts with the source.
**Reason:** The Danish meaning is correct, but the pronunciation hint mund is wrong and conflicts with the source.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 85 (Kurss)

**Finding:** 85
**Audit ID:** DA-KURSS-L0059
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: summary`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <li>SS → s</li>
**PROPOSED_DA:** <li>ß → s</li>
**Severity:** HIGH
**Category:** CONSISTENCY
**Problem:** The summary lists SS although the lesson section teaches the German letter ß.
**Reason:** The summary lists SS although the lesson section teaches the German letter ß.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 86 (Kurss)

**Finding:** 86
**Audit ID:** DA-KURSS-L0060
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: was examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Was tust du? — Was machst du?</div>
**PROPOSED_DA:** <div class="kurss-example">Was tust du? — Hvad laver du?</div>
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Problem:** The Danish translation was replaced by a German sentence, leaving the example untranslated.
**Reason:** The Danish translation was replaced by a German sentence, leaving the example untranslated.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 87 (Kurss)

**Finding:** 87
**Audit ID:** DA-KURSS-L0061
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: negation examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Ich spiele nicht. — Paul spørger ikke.</div><div class="kurss-example">Paul fragt nicht. — Han kommer ikke.</div><div class="kurss-example">Er kommt nicht. — De/de synger ikke.</div>
**PROPOSED_DA:** <div class="kurss-example">Ich spiele nicht. — Jeg spiller ikke.</div><div class="kurss-example">Paul fragt nicht. — Paul spørger ikke.</div><div class="kurss-example">Er kommt nicht. — Han kommer ikke.</div>
**Severity:** CRITICAL
**Category:** SEMANTICS
**Problem:** The Danish translations are shifted to the wrong German sentences, and De/de is inconsistent and ambiguous.
**Reason:** The Danish translations are shifted to the wrong German sentences, and De/de is inconsistent and ambiguous.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 88 (Kurss)

**Finding:** 88
**Audit ID:** DA-KURSS-L0062
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: lecture examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Sie singen nicht. — Spiller du?</div>
**PROPOSED_DA:** <div class="kurss-example">Sie singen nicht. — De synger ikke.</div>
**Severity:** CRITICAL
**Category:** SEMANTICS
**Problem:** The Danish translation does not correspond to the German sentence.
**Reason:** The Danish translation does not correspond to the German sentence.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 89 (Kurss)

**Finding:** 89
**Audit ID:** DA-KURSS-L0063
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: lecture examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Spielst du? — Nein, jeg spiller ikke, jeg arbejder.</div>
**PROPOSED_DA:** <div class="kurss-example">Spielst du? — Spiller du?</div>
**Severity:** CRITICAL
**Category:** SEMANTICS
**Problem:** Translations are offset: the Danish answer belongs to the following German sentence, not to Spielst du?
**Reason:** Translations are offset: the Danish answer belongs to the following German sentence, not to Spielst du?
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 90 (Kurss)

**Finding:** 90
**Audit ID:** DA-KURSS-L0064
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: lecture examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Wer arbeitet? — Wen arbejder?</div><div class="kurss-example">Wir rechnen und zeichnen. — Vi zählt og tegner.</div>
**PROPOSED_DA:** <div class="kurss-example">Wer arbeitet? — Hvem arbejder?</div><div class="kurss-example">Wir rechnen und zeichnen. — Vi regner og tegner.</div>
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Problem:** Wen and zählt are German remnants in the Danish translations; the Danish sentences are malformed.
**Reason:** Wen and zählt are German remnants in the Danish translations; the Danish sentences are malformed.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 91 (Kurss)

**Finding:** 91
**Audit ID:** DA-KURSS-L0065
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: final example`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <div class="kurss-example">Sie antworten nicht. — De svarer ikke.</div>
**PROPOSED_DA:** <div class="kurss-example">Sie antworten nicht. — De svarer ikke.</div>
**Severity:** PASS
**Category:** TRANSLATION
**Problem:** The German sentence and Danish translation correspond correctly.
**Reason:** The German sentence and Danish translation correspond correctly.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 92 (Kurss)

**Finding:** 92
**Audit ID:** DA-KURSS-L0066
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**CURRENT_DA:** <h3>Sætningsstruktur</h3>
**PROPOSED_DA:** <h3>Sætningsstruktur</h3>
**Severity:** PASS
**Category:** TRANSLATION
**Problem:** The heading is correct Danish.
**Reason:** The heading is correct Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 93 (Kurss)

**Finding:** 93
**Audit ID:** DA-KURSS-L0067
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[9].front`
**Field type:** `trainingFront`
**DE (read-only):** Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut.
**CURRENT_DA:** Nej, eleven svarer ikke dårligt, hun svarer godt.
**PROPOSED_DA:** Nej, elevinden svarer ikke dårligt, hun svarer godt.
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Problem:** The response refers to the female student as “eleven” instead of matching the feminine noun “elevinden” used in the preceding card.
**Reason:** The response refers to the female student as “eleven” instead of matching the feminine noun “elevinden” used in the preceding card.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 94 (Kurss)

**Finding:** 94
**Audit ID:** DA-KURSS-L0068
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[19].front`
**Field type:** `trainingFront`
**DE (read-only):** Wie ist der Federhalter?
**CURRENT_DA:** Hvordan er fyldepenholderen?
**PROPOSED_DA:** Hvordan er penneholderen?
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Problem:** Terminologien skifter fra penneholder i den foregående sætning til fyldepenholder, selv om den tyske betegnelse er den samme.
**Reason:** Terminologien skifter fra penneholder i den foregående sætning til fyldepenholder, selv om den tyske betegnelse er den samme.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---

## Finding 95 (Kurss)

**Finding:** 95
**Audit ID:** DA-KURSS-L0069
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[20].front`
**Field type:** `trainingFront`
**DE (read-only):** Der Federhalter ist schwarz.
**CURRENT_DA:** Fyldepenholderen er sort.
**PROPOSED_DA:** Penneholderen er sort.
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Problem:** Terminologien bør være den samme som i den foregående sætning: penneholderen, ikke fyldepenholderen.
**Reason:** Terminologien bør være den samme som i den foregående sætning: penneholderen, ikke fyldepenholderen.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-kurss-full-audit.md`) · luna

---
