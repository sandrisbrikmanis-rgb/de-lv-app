# ET–DE A2 — NEEDS_SOURCE_REVIEW — OWNER DECISIONS ACCEPTED

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9  
**Scope:** ET–DE A2 final source-review closure  
**Source:** `reports/et-a2-needs-source-review.md` + `reports/et-a2-needs-source-decisions.md`  
**DE:** STRICT READ-ONLY  
**Findings reviewed:** 5/5

## Kopsavilkums

| Statuss | Skaits |
|---|---:|
| **LABOT** | **1** |
| **NELABOT** | **3** |
| **FALSE_POSITIVE** | **1** |
| **NEEDS_SOURCE_REVIEW** | **0** |
| **Kopā** | **5** |

---

## 1. ET-A2-0194 — `a2-Traube-1464`

- **Field/path:** `entry[1464].lv`
- **CURRENT:** `Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta`
- **OWNER STATUS:** **LABOT**
- **NEW:** `viinamari`
- **OWNER_DECISION:** Kartītes objekts ir `Traube` (`die Traube`, plur. `die Trauben`). Šis lauks ir learner-language headword lauks, un ET atbilsme ir `viinamari`. Pašreizējais bilingvālais teikums ir acīmredzams repair/drift artefakts no cita satura un nav saistīts ar `Traube`.

---

## 2. ET-A2-0337 — `a2-ehrlich`

- **Field/path:** `study.examples[4].lv`
- **CURRENT:** `ta on tore.`
- **OWNER STATUS:** **NELABOT**
- **NEW:** —
- **OWNER_DECISION:** Šī konkrētā piemēra DE avots ir `Er ist nett.`, nevis `Er ist ehrlich.`. LV MASTER reference ir `viņš ir jauks.`. ET `ta on tore.` semantiski atbilst avotam. Audita `ta on aus.` kļūdaini piesaistīja piemēru kartes headword `ehrlich`, ignorējot konkrētā example DE teikumu.

---

## 3. ET-A2-0393 — `a2-rasen-study`

- **Field/path:** `study.examples[2].lv`
- **ACTUAL CURRENT on main:** `auto kihutab läbi linna.`
- **OWNER STATUS:** **FALSE_POSITIVE**
- **NEW:** —
- **OWNER_DECISION:** Konkrētā piemēra DE avots ir `Das Auto rast durch die Stadt.`; LV reference ir `auto joņo cauri pilsētai.`. ET `auto kihutab läbi linna.` saglabā `rasen/rast` ātras traukšanās nozīmi un ir korekts. Sākotnējais audits/source-review ieraksts bija nepilnīgs ar tukšu CURRENT/PROPOSED, tāpēc tas nav reāls production defekts.

---

## 4. ET-A2-0402 — `a2-sich-befinden`

- **Field/path:** `study.examples[4].lv`
- **CURRENT:** `ma tunnen end täna hästi.`
- **OWNER STATUS:** **NELABOT**
- **NEW:** —
- **OWNER_DECISION:** Šī konkrētā piemēra DE avots ir `Ich fühle mich heute gut.`; LV MASTER reference ir `es šodien jūtos labi.`. ET `ma tunnen end täna hästi.` ir pareizs. Kartītē šis piemērs apzināti kontrastē `sich befinden` ar `sich fühlen`; audita variants `ma asun täna siin.` mainītu source teikumu un pedagoģisko kontrastu.

---

## 5. ET-A2-0426 — `a2-wiegen`

- **Field/path:** `study.examples[5].lv`
- **CURRENT:** `auto seisab õues.`
- **OWNER STATUS:** **NELABOT**
- **NEW:** —
- **OWNER_DECISION:** Šī konkrētā piemēra DE avots ir `Der Wagen steht draußen.` un tas apzināti ilustrē kontrastu `der Wagen` pret `wiegen`. ET `auto seisab õues.` ir korekts. Audita variants `auto kaalub kaks tonni.` iznīcinātu paredzēto salīdzinājumu un neatbilst konkrētajam DE source teikumam.

---

# FINAL OWNER MAPPING

| Audit ID | Card ID | Field/path | CURRENT | NEW | Statuss |
|---|---|---|---|---|---|
| ET-A2-0194 | `a2-Traube-1464` | `entry[1464].lv` | `Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta` | `viinamari` | **LABOT** |
| ET-A2-0337 | `a2-ehrlich` | `study.examples[4].lv` | `ta on tore.` | — | **NELABOT** |
| ET-A2-0393 | `a2-rasen-study` | `study.examples[2].lv` | `auto kihutab läbi linna.` | — | **FALSE_POSITIVE** |
| ET-A2-0402 | `a2-sich-befinden` | `study.examples[4].lv` | `ma tunnen end täna hästi.` | — | **NELABOT** |
| ET-A2-0426 | `a2-wiegen` | `study.examples[5].lv` | `auto seisab õues.` | — | **NELABOT** |

## COPY-ONLY contract

- Apply tikai **ET-A2-0194**.
- Pirms write: actual `entry[1464].lv` precīzi `=== CURRENT`.
- Ja mismatch → `CURRENT_VALUE_MISMATCH`, SKIP, neimprovizēt.
- Ierakstīt precīzi `viinamari`.
- Pēc write pārlasīt un pierādīt `actual === NEW`.
- `NELABOT` un `FALSE_POSITIVE` laukus neaiztikt.
- DE = STRICT READ-ONLY.
- Pēc micro-repair: mirror PASS, syntax PASS, targeted regression PASS.
