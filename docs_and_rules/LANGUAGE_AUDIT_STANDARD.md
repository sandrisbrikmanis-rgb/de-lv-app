# Valodu audita standarts (LT-DE un turpmākajām valodām)

Šis dokuments ir obligāts audita standarts jebkurai jaunai `{LANG}-DE` valodai lietotnē (pirmais pielietojums: LT-DE; tas pats process bez izmaiņām attiecas uz RU-DE, PL-DE, UK-DE, ET-DE un jebkuru nākamo valodu).

Standarts nemaina renderer darbību, dizainu, krāsu sistēmu vai datu formātu. Tas nosaka, KĀ pārbaudīt jaunas valodas kvalitāti, pirms tā tiek uzskatīta par gatavu produkcijai.

Šis dokuments TIKAI definē audita prasības un procesu. Tas neietver labojumu izpildi — audita rezultāts ir ziņojums ar atradumiem, nevis kods.

## 0. Mērķis

Nodrošināt, ka jauna valoda `{LANG}-DE` ir funkcionāli, valodnieciski un vizuāli vienlīdzīga ar oriģinālo `LV-DE` versiju — bez izņēmumiem un bez "otrās klases" valodām lietotnē.

Trīs virsprasības:

1. Nulle vizuālu atšķirību no LV-DE — mainās TIKAI teksts, nekas vizuālais.
2. Pareiza gramatika, pareizrakstība un dabiska valoda — teksts izklausās kā rakstīts dzimtā valodā runājošam, nevis mehāniski tulkots.
3. Profesionāls kopiespaids — nav trūkstošu daļu, tukšu karšu, mojibake, placeholder teksta vai LV atlūzu.

## 1. Audita apjoms

Audits jāveic šādiem apgabaliem, katram gan `data/{lang}/...`, gan `www/data/{lang}/...` slānī:

| Apgabals | Faili |
|---|---|
| Vārdu kartītes A1–C2 | `data/{lang}/a1.js` … `c1.js`, `c2.js` |
| Teikumi | `data/{lang}/sentences.js` |
| Darbības vārdi | `data/{lang}/verbs.js` |
| Kurss/Lekcijas | `data/{lang}/courseLessons.js`, `courseTrainingCards.js` |
| Lietvārdu artikuli | `data/{lang}/nounArticles.js` |
| Dialogu ID karte | `data/{lang}/dialogueIdMap.js` |
| UI virknes/izvēlnes | `languages/{lang}/ui.js` |
| Manifests/datu ceļi | `languages/{lang}/data/manifest.js`, `languages/registry.js` |
| Kopīgais renderer | `ui.js` (motora daļa, NEDRĪKST saturēt teksta tulkojumus konkrētai valodai) |
| Vizuālais slānis | `style.css` (kopīgs visām valodām, nav valodas specifisks) |

## 2. Prasība Nr. 1 — Vizuālā ekvivalence ar LV-DE

### 2.1 Tehniskā/strukturālā ekvivalence

1. Ieraksta skaits katrā `{lang}/aX.js` failā jāatbilst LV oriģinālā faila ieraksta skaitam.
2. Katram ierakstam identiski lauki kā LV oriģinālam: `de`, `de_article`, `de_plural`, `{lang}` tulkojuma lauks, `level`, `study` (ja LV tam ir).
3. Ja LV kartei ir `study.layout: "standardStudy"` vai `"comparisonStudy"`, `{lang}` kartei jābūt tam pašam layout ar tām pašām sadaļām.
4. Katrai study kartei jāpārbauda `sectionAccents` pilnīgums visām sadaļām, kur LV versijai tie ir.
5. Katrai kartei jābūt unikālam `id`; `comparisonStudy` kartēm — `compare-*` prefikss, valodas specifisko diakritiku konvertējot pēc analoga principa kā vācu `ä→ae`.
6. `ui.js` motora funkcijās NEDRĪKST būt iekodēti teksta tulkojumi konkrētai valodai. Ja tas atrasts, tā PAR SEVI ir kritiska vizuālās ekvivalences kļūda, jo valoda faktiski rāda citas valodas tekstu.

### 2.2 Krāsu/highlight ekvivalence

7. `comparisonTable`/`comparison` sadaļās vācu vārdiem jābūt zaļā krāsā, tulkojumiem — purpursarkanā/rozā krāsā, katrai `{lang}` comparisonStudy kartei.
8. Highlight blīvums jāsalīdzina ar atbilstošo LV karti (etalons: `abfahren`, `das Band`, `kleiden`, `Holz`, `dabei`). Manāmi mazāk highlight nekā LV analogam ir defekts, nevis minimālisms.
9. DE apakšvirsrakstam nekur nedrīkst būt pielietota keyword krāsa.
10. Fiksētās krāsas (`#3FA7FF`, `#B565FF`, `#FFD34D`, `#FF5B5B` u.c.) nav mainītas failu līmenī.

### 2.3 Layout/rendering ekvivalence

11. Sadaļu secībai jābūt identiskai neatkarīgi no valodas: LV virsraksts → DE virsraksts → ℹ️ Skaidrojums → ⏳ Piemēri → ⚖️ Salīdzinājums → 💡 Padoms → ❗ Svarīgi.
12. Sadaļa bez datiem NEDRĪKST renderēties kā tukšs bloks.
13. Responsive uzvedība (desktop līdz 4 kolonnas, tablet 2, mobile 1, bez horizontālas pārplūdes) jāpārbauda identiski kā LV.
14. Fonti, padding, border-radius, ikonas jābūt vizuāli identiski, tikai teksts mainās.
15. Jāveic regex meklēšana pēc mojibake artefaktiem (`Ôîä`, `â€`, `Ã©` tipa) visos `{lang}` datu un CSS failos.
16. Valodai specifiskā diakritika/speciālās rakstzīmes (piemēram, LT: ą, č, ę, ė, į, š, ų, ū, ž; PL: ą, ć, ę, ł, ń, ó, ś, ź, ż; RU/UK: kirilica) jāpārbauda, lai renderētos pareizi visās fontu/CSS kontekstos.

### 2.4 Ekrānuzņēmumu salīdzinājums

17. Katrai galvenajai skata formai (A1 saraksts, standardStudy karte, comparisonStudy karte, Kurss lekcija, izvēlne) jāuzņem LV un `{lang}` ekrānuzņēmums blakus un vizuāli jāsalīdzina izkārtojums (ne teksts).

## 3. Prasība Nr. 2 — Gramatika, pareizrakstība, dabiskums

### 3.1 Universālās (valodas neitrālās) automātiskās pārbaudes

18. Nozīmju atdalīšanai jāizmanto tikai `•`, nekad `;`.
19. Ja `study.translation` satur vairākas nozīmes ar `•`, tām jāsakrīt ar pamatlauka (`{lang}`) nozīmēm.
20. Jāmeklē tukši/placeholder lauki (`"..."`, `"TODO"`, `"TBD"`, tukšas virknes, atkārtota LV teksta parādīšanās) — tas signalizē par palaistu garām vai fallback stāvoklī palikušu tulkojumu.
21. `de_article` un `de_plural` obligāti aizpildīti katrā valodas failā.
22. Visi `.js` datu faili jāparsē bez sintakses kļūdām pirms un pēc katras izmaiņas.

### 3.2 Valodai specifiskās pārbaudes

Process ir vienāds visām valodām, bet kritēriji jāsagatavo valodas ekspertam/native speaker atsevišķi katrai valodai:

23. Gramatiskā pareizība — locījumi/padeži/przypadki, darbības vārdu asmenuotes/spriaženije/koniugacja, dzimte, piemēru teikumu gramatiskā saskaņotība ar vācu tulkojumu.
24. Pareizrakstība — diakritikas/burtu pareiza lietošana, lielo/mazo burtu lietojums teikumu sākumā un īpašvārdos.
25. Dabiskums — teikumiem/piemēriem jāskan kā dabiskai ikdienas valodai, nevis burtiskam tulkojumam no vācu/latviešu. Īpaši kritiski Kurss/Lekciju dialogos un piemēru teikumos. Īpašvārdi un kultūras elementi, kas ir LV specifiski (piemēram, Pēteris, Jānis, Rūdolfs, Roberts), jāaizstāj ar valodai atbilstošiem ekvivalentiem, nevis pārkopēti burtiski.
26. Terminoloģijas konsekvence — viens un tas pats vācu gramatikas jēdziens visā lietotnē tulkots ar to pašu terminu visos līmeņos.
27. Native speaker izlases pārbaude — nejauši izvēlēta izlase (~5% no katra līmeņa, min. 30 kartes) jāpārbauda cilvēkam, kurš runā šo valodu dzimtā līmenī.

## 4. Prasība Nr. 3 — Profesionāls kopiespaids

28. Pilna lietotāja plūsma no valodas izvēles ekrāna līdz katrai sadaļai — nekur nedrīkst parādīties LV teksts, tukša karte, kļūdas konsole vai bezgalīgs "loading" stāvoklis.
29. Pārlūka developer console jābūt tīrai (0 JS kļūdu) katrā ekrānā šai valodai.
30. Visas UI virknes `languages/{lang}/ui.js` aizpildītas (nav trūkstošu `t()` atslēgu, kas parāda atslēgas vārdu vietā tekstu).
31. Audio/izruna funkcijas jāpārbauda neatkarīgi no izvēlētās native valodas.
32. `languages/registry.js` ieraksta `dataStatus` un `hasStudyData` laukiem jāatbilst faktiskajam stāvoklim pēc audita.

## 5. Audita rīki un skripti

Visi zemāk minētie skripti **ir izveidoti** (2026-07-30) un pieņem `--lang=<code>` parametru, lai tos var atkārtoti izmantot jebkurai valodai bez pārrakstīšanas. Kopīgā palīgloģika (datu ceļu izšķirtspēja, `--lang` parsēšana, vm-based datu ielāde) atrodas `scripts/lib/audit-common.js`.

| Skripts | Lietojums | Aizstāj (vecais LT-specifiskais) |
|---|---|---|
| `scripts/validate-study-design.js` | `--lang=<code>` — sectionAccents pilnīgums, layout struktūra, `www/` sinhronizācija | `validate-lt-study-design.js` |
| `scripts/validate-flashcard-routing.js` | `--lang=<code>` — pārbauda, ka `ui.js` motors nerāda hardcoded citas valodas datus | `validate-lt-flashcard-routing.js` |
| `scripts/validate-kurss.js` | `--lang=<code>` — Kurss lekciju struktūra, translate/exercise karšu skaits, LV vārdu atlūzas | `validate-lt-kurss.js` |
| `scripts/smoke-test-ui.js` | `--lang=<code>` — end-to-end HTTP/DOM pārbaude | `smoke-test-lt-ui.js` |
| `scripts/audit-translations.js` | `--lang=<code>` (noklusējums `lv`) — semikolu/nesakritības pārbaude jebkurai valodai, visi 6 līmeņi | (paplašināts vietā) |
| `scripts/audit-study-cards.js` | `--lang=<code>` (noklusējums `lv`) — vispārināts uz jebkuru `data/{lang}/*.js` | (paplašināts vietā) |
| `scripts/audit-language-parity.js` | `--lang=<code>` — salīdzina ieraksta skaitu, lauku shēmu un `study.layout` sadalījumu pret LV atbilstošo failu | (jauns) |
| `scripts/audit-mojibake.js` | `--lang=<code>` — regex meklēšana pēc bojātiem kodējuma artefaktiem valodas un koplietotajos failos | (jauns) |

Piemēri:

```bash
node scripts/validate-study-design.js --lang=lt
node scripts/audit-language-parity.js --lang=et
node scripts/audit-mojibake.js --lang=lv
```

`scripts/validate-lt-highlight-density.js` (highlight blīvuma regresijas aizsargs) **netika vispārināts** — tas satur LT-specifiskas, saturam piesaistītas zināšanas (piem., precīzs pieņemamo atlikušo gadījumu skaits konkrētām `sitzen`/`stehen` kartēm), kas nav automātiski pārnesamas uz citām valodām bez tāda paša satura audita.

## 6. Audita procesa posmi

Audits jāveic pa daļām, nevis vienā piegājienā, jo:

- Datu apjoms (A1–C2, teikumi, darbības vārdi, Kurss) ir liels — viens piegājiens palielina risku pēc virspusējas pārbaudes.
- Strukturālas kļūdas (motora maršrutēšana) var maskēt pareizus tulkojuma datus kā "tukšus"; tāpēc secība ir svarīga.
- Katra daļa var ģenerēt savu, izsekojamu ziņojumu un savu labošanas uzdevumu/PR.

Ieteicamā secība:

1. Strukturālais/motora slānis (`ui.js`, maršrutēšana, `manifest.js`) — vienmēr pirmais.
2. A1–A2 dati.
3. B1–B2 dati.
4. C1–C2 dati.
5. Teikumi + darbības vārdi.
6. Kurss/Lekcijas.
7. Vizuālais salīdzinājums (var notikt paralēli 2.–6. posmam).
8. Native speaker izlases pārbaude + gala konsolidētais ziņojums.

## 7. Ziņojuma formāts un smaguma pakāpes

| Smaguma pakāpe | Definīcija | Piemērs |
|---|---|---|
| Kritiska | Lietotājam redzama funkcionāla kļūme vai LV teksts citas valodas UI | Tukša flashkarte, LV teikums LT saskarnē |
| Augsta | Vizuāla neatbilstība LV etalonam | Trūkst highlight krāsas salīdzinājuma tabulā |
| Vidēja | Valodnieciska kļūda, kas nepasliktina funkciju | Nedabiska izteiksme piemēra teikumā |
| Zema | Kosmētika/konsekvence | Termina rakstība nedaudz atšķiras starp līmeņiem |

Katram atradumam ziņojumā jānorāda: fails un rindas numurs, konkrētais teksts/kods, kāpēc tas neatbilst standartam (atsauce uz konkrētu punktu šajā dokumentā vai citiem `docs_and_rules/*.md`), un ieteiktais labojums (bez tā izpildes audita fāzē).

## 8. Pieņemšanas kritēriji

Valoda `{LANG}-DE` tiek uzskatīta par auditētu un gatavu, ja:

- 0 kritisku atradumu.
- 0 augstu atradumu vizuālajā slānī.
- Visi 5. sadaļas automātiskie skripti izpildās bez kļūdām.
- Native speaker izlases pārbaude neuzrāda sistemātiskas gramatikas kļūdas.
- Ekrānuzņēmumu salīdzinājums neuzrāda layout atšķirības no LV.
- `languages/registry.js` karodziņi atbilst faktiskajam datu stāvoklim.

## 9. Piemērošana citām valodām

Process paliek identisks visām valodām — mainās tikai:

1. `{lang}` mainīgais visos skriptu izsaukumos un failu ceļos.
2. Sadaļas 3.2 valodas specifiskie gramatikas kritēriji (jāsagatavo katrai valodai atsevišķi no valodas eksperta).
3. Native speaker recenzents katrai valodai.

RU, PL, UK šobrīd `languages/registry.js` ir `dataStatus: "fallback"` un `hasStudyData: false` — tām nav savu datu failu, un tās pilnībā izmanto LV fallback datus. Šo standartu tām var pilnvērtīgi piemērot tikai pēc tam, kad tiek izveidoti `data/{lang}/*.js` faili (analogi LT un ET). Līdz tam šis dokuments kalpo kā kvalitātes vārti (quality gate) datu izveides uzdevumam.

## 10. Riski un ierobežojumi

- Automātiskie skripti noķer strukturālas un mehāniskas kļūdas, bet ne stilistisku dabiskumu — tas prasa cilvēku ar valodas zināšanām.
- Ekrānuzņēmumu salīdzinājums ir manuāls un laikietilpīgs; automatizācija ar pixel-diff rīku ir ārpus šī standarta un prasa atsevišķu tehnisko uzdevumu.
- Strukturālā/motora slāņa audits vienmēr jāveic pirms datu slāņa audita, lai nesecinātu kļūdaini, ka trūkst tulkojumu, kad patiesībā trūkst maršrutēšanas.
