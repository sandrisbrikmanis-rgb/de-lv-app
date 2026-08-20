# ET–DE A1 — OWNER DECISIONS — ACCEPTED

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7  
**Audit PR:** `#603`  
**Scope:** ET–DE A1  
**OWNER review:** 16/16  
**DE:** STRICT READ-ONLY  
**Apply mode:** COPY-ONLY

## Kopsavilkums

| Statuss | Skaits |
|---|---:|
| **LABOT** | **11** |
| **NELABOT** | **2** |
| **FALSE_POSITIVE** | **0** |
| **NEEDS_SOURCE_REVIEW** | **3** |
| **Kopā** | **16** |

> `PROPOSED_ET` nav automātiski pieņemts. Zemāk `NEW` ir OWNER apstiprinātā vērtība tikai rindām ar `Status: LABOT`.
>
> Apply drīkst veikt tikai tad, ja faktiskā production vērtība precīzi sakrīt ar `CURRENT`. Mismatch → SKIP konkrēto ierakstu. DE laukus nemainīt.

---

## ET-A1-0001

**Card ID:** `a1-besuch`  
**Field/path:** `study.examples[2].lv`  
**CURRENT:** `Arst teeb visiidi.`  
**NEW:** `Arst läheb visiidile.`  
**Status:** **LABOT**  
**OWNER_DECISION:** Dāniski neattiecas; igauņu valodā `Arst läheb visiidile.` ir dabiskāks un precīzāk atbilst nozīmei “ārsts dodas vizītē”.

---

## ET-A1-0002

**Card ID:** `a1-besuchen`  
**Field/path:** `study.examples[2].lv`  
**CURRENT:** `Ma külastan oma vanavanemaid.`  
**NEW:** —  
**Status:** **NELABOT**  
**OWNER_DECISION:** `Ma külastan oma vanavanemaid.` ir korekts igauņu tagadnes teikums vācu `besuchen` piemēram. Latviešu `Es apciemoju savus vecvecākus.` nav drošs pagātnes pierādījums, jo forma `apciemoju` var būt arī tagadne. Audita maiņa uz `külastasin` nav pietiekami pamatota.

---

## ET-A1-0003

**Card ID:** `a1-bleiben`  
**Field/path:** `study.examples[0].lv`  
**CURRENT:** `ma jään koju.`  
**NEW:** `Ma jään koju.`  
**Status:** **LABOT**  
**OWNER_DECISION:** Pilna teikuma sākumā nepieciešams lielais burts.

---

## ET-A1-0004

**Card ID:** `a1-bleiben`  
**Field/path:** `study.examples[1].lv`  
**CURRENT:** `jää siia!`  
**NEW:** `Jää siia!`  
**Status:** **LABOT**  
**OWNER_DECISION:** Pilna teikuma sākumā nepieciešams lielais burts.

---

## ET-A1-0005

**Card ID:** `a1-halten`  
**Field/path:** `study.comparison[3].meaning`  
**CURRENT:** `mõtlema`  
**NEW:** `pidama (millekski)`  
**Status:** **LABOT**  
**OWNER_DECISION:** `halten` konstrukcijā `etwas für ... halten` nozīmē uzskatīt/pidada kaut ko par kaut ko. Vienkāršais `mõtlema` ir semantiski neprecīzs; `pidama (millekski)` skaidri saglabā vajadzīgo konstrukciju.

---

## ET-A1-0006

**Card ID:** `a1-hand-study`  
**Field/path:** `study.translation`  
**CURRENT:** `käsi (kämmal)`  
**NEW:** `käsi`  
**Status:** **LABOT**  
**OWNER_DECISION:** Vācu `Hand` pamatatbilsme igauņu valodā ir `käsi`. Papildu `kämmal` šeit nav nepieciešams un sašaurina/komplicē A1 pamatnozīmi.

---

## ET-A1-0007

**Card ID:** `a1-im`  
**Field/path:** `study.comparison[2].meaning`  
**CURRENT:** `sees / sisse (ilma artiklita)`  
**NEW:** `sees / sisse (kindla artikliga)`  
**Status:** **LABOT**  
**OWNER_DECISION:** `im = in + dem`; tas ietver noteikto artikulu. Norāde `ilma artiklita` ir faktoloģiski nepareiza.

---

## ET-A1-0008

**Card ID:** `a1-ins`  
**Field/path:** `study.comparison[2].meaning`  
**CURRENT:** `sees / sisse (eraldi artikliga)`  
**NEW:** `sees / sisse (kokkusulanud kindla artikliga)`  
**Status:** **LABOT**  
**OWNER_DECISION:** `ins = in + das`; artikuls ir saplūdis kontrakcijā, nevis atsevišķs vārds.

---

## ET-A1-0009

**Card ID:** `a1-nehmen`  
**Field/path:** `study.examples[0].lv`  
**CURRENT:** `ma sõidan bussiga.`  
**NEW:** —  
**Status:** **NELABOT**  
**OWNER_DECISION:** Igauņu `Ma sõidan bussiga.` ir dabiska vācu `Ich nehme den Bus.` nozīmes atveide. Tulkojumam nav mehāniski jāatkārto vācu darbības vārds ar `võtma`; audita variants `Ma võtan bussi.` nav obligāti labāks.

---

## ET-A1-0010

**Card ID:** `a1-nehmen`  
**Field/path:** `study.examples[2].lv`  
**CURRENT:** `ma toon sulle raamatu.`  
**NEW:** —  
**Status:** **NEEDS_SOURCE_REVIEW**  
**OWNER_DECISION:** Dotais LV MASTER `es tev atnesu grāmatu` semantiski norāda uz “atnest”, kamēr kartes vācu pamatvārds ir `nehmen`. Audita `Ma võtan raamatu.` izmet arī nozīmi `tev`. Pirms maiņas nepieciešams pārbaudīt precīzo vācu piemēra teikumu un LV MASTER avotu. DE paliek READ-ONLY.

---

## ET-A1-0011

**Card ID:** `a1-sollen`  
**Field/path:** `study.examples[1].lv`  
**CURRENT:** `sa pead tulema.`  
**NEW:** `sa peaksid tulema.`  
**Status:** **LABOT**  
**OWNER_DECISION:** `peaksid` precīzāk māca `sollen` nozīmi “vajadzētu / būtu jānāk” un saglabā atšķirību no tiešāka `pead` (“must/have to”).

---

## ET-A1-0012

**Card ID:** `a1-sollen`  
**Field/path:** `study.examples[2].lv`  
**CURRENT:** `ma pean koju jääma.`  
**NEW:** `ma peaksin koju jääma.`  
**Status:** **LABOT**  
**OWNER_DECISION:** `peaksin` konsekventi atbilst kartes `sollen` mācību nozīmei; `pean` izsaka tiešāku nepieciešamību/pienākumu.

---

## ET-A1-0013

**Card ID:** `a1-sollen`  
**Field/path:** `study.examples[3].lv`  
**CURRENT:** `ma pean nüüd minema.`  
**NEW:** `ma peaksin nüüd minema.`  
**Status:** **LABOT**  
**OWNER_DECISION:** `peaksin` saglabā `sollen` pedagoģisko nozīmi un konsekvenci ar pārējiem kartes piemēriem.

---

## ET-A1-0014

**Card ID:** `a1-über`  
**Field/path:** `study.comparison[3].meaning`  
**CURRENT:** `-st / kohta mingist allikast`  
**NEW:** —  
**Status:** **NEEDS_SOURCE_REVIEW**  
**OWNER_DECISION:** CURRENT ir neveikls, taču no OWNER VIEW nav redzams konkrētās `comparison[3]` rindas vācu elements/konstrukcija. `über` pats par sevi nenozīmē “no avota”. Audita `allikast / mingi allika kohta` nedrīkst COPY-ONLY piemērot bez pilna comparison ieraksta un LV MASTER struktūras pārbaudes.

---

## ET-A1-0015

**Card ID:** `a1-vom`  
**Field/path:** `study.comparison[0].meaning`  
**CURRENT:** `-st (konkreetne asi, Dativ)`  
**NEW:** `-st (konkreetse asja puhul, saksa keeles datiiv)`  
**Status:** **LABOT**  
**OWNER_DECISION:** CURRENT satur igauņu gramatikas kļūdu (`konkreetne asi`) un neskaidri sasaista igauņu elatīvu ar vācu datīvu. NEW formulējums gramatiski korekti paskaidro, ka datīvs attiecas uz vācu konstrukciju.

---

## ET-A1-0016

**Card ID:** `a1-zu`  
**Field/path:** `study.comparison[2].meaning`  
**CURRENT:** `sees / mingisse kohta`  
**NEW:** —  
**Status:** **NEEDS_SOURCE_REVIEW**  
**OWNER_DECISION:** `sees` tiešām apzīmē atrašanos, nevis virzienu, taču audita `sisse / mingisse kohta` nav droši universāla `zu` atbilsme. Vācu `zu` bieži atbilst igauņu `juurde`, `-le` u.c. Pirms COPY-ONLY maiņas jāpārbauda konkrētās comparison rindas vācu konstrukcija un LV MASTER konteksts.

---

# COPY-ONLY APPLY MAPPING

| Audit ID | Card ID | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ET-A1-0001 | `a1-besuch` | `study.examples[2].lv` | `Arst teeb visiidi.` | `Arst läheb visiidile.` | **LABOT** |
| ET-A1-0002 | `a1-besuchen` | `study.examples[2].lv` | `Ma külastan oma vanavanemaid.` | — | **NELABOT** |
| ET-A1-0003 | `a1-bleiben` | `study.examples[0].lv` | `ma jään koju.` | `Ma jään koju.` | **LABOT** |
| ET-A1-0004 | `a1-bleiben` | `study.examples[1].lv` | `jää siia!` | `Jää siia!` | **LABOT** |
| ET-A1-0005 | `a1-halten` | `study.comparison[3].meaning` | `mõtlema` | `pidama (millekski)` | **LABOT** |
| ET-A1-0006 | `a1-hand-study` | `study.translation` | `käsi (kämmal)` | `käsi` | **LABOT** |
| ET-A1-0007 | `a1-im` | `study.comparison[2].meaning` | `sees / sisse (ilma artiklita)` | `sees / sisse (kindla artikliga)` | **LABOT** |
| ET-A1-0008 | `a1-ins` | `study.comparison[2].meaning` | `sees / sisse (eraldi artikliga)` | `sees / sisse (kokkusulanud kindla artikliga)` | **LABOT** |
| ET-A1-0009 | `a1-nehmen` | `study.examples[0].lv` | `ma sõidan bussiga.` | — | **NELABOT** |
| ET-A1-0010 | `a1-nehmen` | `study.examples[2].lv` | `ma toon sulle raamatu.` | — | **NEEDS_SOURCE_REVIEW** |
| ET-A1-0011 | `a1-sollen` | `study.examples[1].lv` | `sa pead tulema.` | `sa peaksid tulema.` | **LABOT** |
| ET-A1-0012 | `a1-sollen` | `study.examples[2].lv` | `ma pean koju jääma.` | `ma peaksin koju jääma.` | **LABOT** |
| ET-A1-0013 | `a1-sollen` | `study.examples[3].lv` | `ma pean nüüd minema.` | `ma peaksin nüüd minema.` | **LABOT** |
| ET-A1-0014 | `a1-über` | `study.comparison[3].meaning` | `-st / kohta mingist allikast` | — | **NEEDS_SOURCE_REVIEW** |
| ET-A1-0015 | `a1-vom` | `study.comparison[0].meaning` | `-st (konkreetne asi, Dativ)` | `-st (konkreetse asja puhul, saksa keeles datiiv)` | **LABOT** |
| ET-A1-0016 | `a1-zu` | `study.comparison[2].meaning` | `sees / mingisse kohta` | — | **NEEDS_SOURCE_REVIEW** |

## Apply drošības prasības

1. OWNER mapping ir vienīgais remonta avots.
2. Mainīt tikai `Status: LABOT` rindas.
3. Pirms katra write: faktiskā vērtība `=== CURRENT`.
4. CURRENT mismatch → SKIP tikai konkrēto ierakstu un ziņot.
5. `NELABOT` un `NEEDS_SOURCE_REVIEW` nedrīkst mainīt.
6. DE = STRICT READ-ONLY.
7. Pēc write atkārtoti nolasīt production un pierādīt `actual === NEW`.
8. `data/et/a1.js` ↔ `www/data/et/a1.js` mirror = PASS.
9. Syntax = PASS.
10. Ziņot `requested / applied / skipped / mismatch / DE changes / unexpected changes`.
