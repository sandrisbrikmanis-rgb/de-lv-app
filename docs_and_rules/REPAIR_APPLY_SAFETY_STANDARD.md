# UNIVERSĀLAIS LABOJUMU APPLY DROŠĪBAS UN VERIFIKĀCIJAS STANDARTS

**Versija:** 1.0  
**Statuss:** AUTHORITATIVE / OBLIGĀTS  
**Fails:** `REPAIR_APPLY_SAFETY_STANDARD.md`

Šis standarts ir obligāts visam repair / COPY-ONLY apply procesam.  
Nevienu repair nedrīkst deklarēt PASS/CLOSED, kamēr nav izpildīti visi šī dokumenta write-to-disk un post-apply verification nosacījumi.

---

## MĒRĶIS

Veikt tikai OWNER apstiprinātos labojumus un tehniski pierādīt, ka tie:

* faktiski ierakstīti production failos;
* pēc ieraksta sakrīt ar OWNER `NEW`;
* nav mainījuši neatļautus laukus;
* nav mainījuši DE pusi;
* nav radījuši strukturālas vai sintakses kļūdas.

Šis bloks ir obligāts pie **visiem turpmākajiem repair / COPY-ONLY apply uzdevumiem**.

---

## 1. OWNER MAPPING IR VIENĪGAIS LABOJUMU AVOTS

Atļauts mainīt tikai tās rindas, kurām OWNER mappingā ir:

* `Status: LABOT`
* precīzs `Card ID`
* precīzs `Field/path`
* precīzs `CURRENT`
* precīzs `NEW`

Aizliegts:

* tulkot pašam;
* pārfrāzēt OWNER `NEW`;
* uzlabot formulējumu;
* veikt cleanup;
* labot blakus laukus;
* labot blakus kartītes;
* piemērot audita `PROPOSED` kā OWNER lēmumu, ja tas nav OWNER apstiprināts.

`NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW`, `PENDING` un citi neapstiprināti statusi production netiek mainīti.

---

## 2. OBLIGĀTS CURRENT EXACT-MATCH

Pirms katra labojuma:

```text
actual current value === OWNER CURRENT
```

Ja sakrīt:

```text
PASS → apply OWNER NEW
```

Ja nesakrīt:

```text
CURRENT_VALUE_MISMATCH → SKIP tikai šo target
```

### KRITISKI

Viens vai vairāki `CURRENT_VALUE_MISMATCH` **NEDRĪKST bloķēt pārējo derīgo OWNER labojumu saglabāšanu**.

Aizliegta loģika:

```text
if mismatches.length > 0:
    nerakstīt nevienu labojumu diskā
```

Pareizā loģika:

```text
valid exact-match targets → APPLY
mismatch targets → SKIP + REPORT
```

---

## 3. WRITE-TO-DISK IR OBLIGĀTS

Labojums nav uzskatāms par `APPLIED`, kamēr tas nav faktiski ierakstīts production failā.

RAM / in-memory izmaiņa pati par sevi nav apply.

Ja ir vismaz viens derīgs labojums:

```text
APPLIED candidates > 0
→ production faili obligāti jāsaglabā diskā
```

`CURRENT_VALUE_MISMATCH`, `SKIPPED` vai citi atsevišķi targeti nedrīkst atcelt pārējo derīgo labojumu write-to-disk.

---

## 4. APPLIED STATUSS TIKAI PĒC DISK VERIFICATION

Nelietot `APPLIED` statusu uzreiz pēc in-memory izmaiņas.

Izmantot šādu secību:

```text
CURRENT MATCH
→ NEW assigned
→ file written to disk
→ file reloaded from disk
→ actual_after verified
→ APPLIED_VERIFIED
```

Katram veiksmīgi labotajam target obligāti:

```text
actual_after === OWNER NEW
```

Ja neatbilst:

```text
APPLY_VERIFICATION_FAIL
```

---

## 5. OBLIGĀTI PĀRLASĪT FAILU NO DISKA

Pēc write:

1. atkārtoti ielādēt production failu no diska;
2. neizmantot iepriekšējo RAM objektu kā verification avotu;
3. katram sagaidītajam labojumam pārbaudīt reālo vērtību no tikko pārlasītā faila.

Verification nedrīkst pārbaudīt tikai in-memory objektu.

---

## 6. OBLIGĀTS GIT DIFF POSTCONDITION

Ja:

```text
APPLIED_VERIFIED > 0
```

tad attiecīgajiem production failiem `git diff` nedrīkst būt tukšs, izņemot gadījumu, kad `NEW` jau bija identisks faktiskajai production vērtībai un tas ir dokumentēts kā atsevišķs SKIP / ALREADY_MATCHED statuss.

Ja sagaidīti production labojumi, bet:

```text
git diff -- <production files>
```

ir tukšs:

```text
HARD FAIL
```

Atskaite nedrīkst deklarēt repair PASS.

---

## 7. OBLIGĀTA SKAITĻU RECONCILIATION

Pirms apply noteikt:

```text
requested OWNER rows
unique targets pēc (Card ID, Field/path)
```

Pēc apply obligāti:

```text
requested_unique
=
APPLIED_VERIFIED
+ CURRENT_VALUE_MISMATCH
+ SKIPPED
+ FAILED
```

Neviena rinda nedrīkst pazust no uzskaites.

Ja vienādība nesakrīt:

```text
HARD FAIL
```

---

## 8. DUPLIKĀTU KONTROLE

Ja OWNER mappingā viens `(Card ID, Field/path)` parādās vairākas reizes:

* deduplicēt deterministiski;
* izmantot tikai projekta noteikto OWNER precedence;
* dokumentēt:

  * raw OWNER rows;
  * unique targets;
  * duplicate rows;
  * precedence rezultātu.

Nedrīkst vienu un to pašu target piemērot vairākas reizes nekontrolēti.

---

## 9. DE = STRICT READ-ONLY

Ja uzdevums ir native-language repair:

```text
DE = STRICT READ-ONLY
```

Obligāti pārbaudīt pēc apply:

```text
DE changes = 0
```

Ja ir jebkura neatļauta DE izmaiņa:

```text
HARD FAIL
```

DE izmaiņu nedrīkst automātiski "salabot atpakaļ" un turpināt klusējot. Tā jāuzrāda kā kļūda.

---

## 10. NEGAIDĪTU IZMAIŅU KONTROLE

Pēc apply pārbaudīt, ka nav mainīti:

* blakus lauki;
* blakus kartītes;
* citi dataset;
* ID;
* kartīšu secība;
* renderer loģika;
* UI;
* struktūra ārpus OWNER scope;
* DE saturs;
* faili ārpus atļautā scope.

Obligāti:

```text
unexpected production changes = 0
```

Pretējā gadījumā:

```text
FAIL
```

---

## 11. TEHNISKĀ VALIDĀCIJA

Pēc write-to-disk obligāti izpildīt vismaz:

* syntax check;
* parse/import check;
* ID/order check, ja attiecināms;
* mirror/parity check, ja attiecināms;
* production faila atkārtotu ielādi;
* OWNER target post-apply verification;
* DE read-only diff check;
* unexpected diff check.

Ja mainīti Study objekti, papildus:

* Study structure/parity;
* sectionAccents;
* nepieciešamie Study lauki;
* placeholder / empty-field check.

---

## 12. TARGETED REGRESSION PĒC APPLY

Pēc veiksmīga apply veikt targeted regression uz:

* visām mainītajām kartītēm;
* visiem mainītajiem Study objektiem;
* saistītajiem sectionAccents;
* foreign-language remnants attiecīgajā labotajā scope;
* tieši tiem kļūdu tipiem, kas tika remontēti.

Nevajag automātiski sākt vēl vienu pilnu valodas auditu tikai tāpēc, lai pārbaudītu apply.

Pilnais audits ir closure pārbaude pēc nepieciešamības, ne tikai aizstājējs korektai post-apply verification.

---

## 13. AIZLIEGTA NEPATIESA `APPLIED` ATSKAITE

Atskaite nedrīkst rakstīt:

```text
177 APPLIED
```

ja šie 177 labojumi:

* nav saglabāti diskā;
* nav pārlasīti;
* nav verificēti pret OWNER `NEW`.

Pareizie termini:

```text
MATCHED
STAGED
WRITTEN
APPLIED_VERIFIED
CURRENT_VALUE_MISMATCH
SKIPPED
FAILED
```

Gala `APPLIED` skaitam jānozīmē tikai:

```text
APPLIED_VERIFIED
```

---

## 14. OBLIGĀTS APPLY SUCCESS KRITĒRIJS

Repair/apply drīkst deklarēt **PASS** tikai tad, ja visi šie nosacījumi ir izpildīti:

```text
1. OWNER target identificēts
2. CURRENT exact-match pārbaudīts
3. Derīgie NEW ierakstīti diskā
4. Production fails pārlasīts no diska
5. Katram APPLIED target actual_after === OWNER NEW
6. Git diff apstiprina sagaidāmās production izmaiņas
7. DE changes = 0
8. Unexpected changes = 0
9. Requested totals reconcile exactly
10. Syntax / structure / parity checks PASS
```

Ja kaut viens punkts nav izpildīts:

```text
APPLY = NOT CLOSED
```

---

## 15. OBLIGĀTĀ GALA ATSKAITE

Atgriezt vismaz:

```text
OWNER rows requested:
Unique targets:
Exact CURRENT matches:
APPLIED_VERIFIED:
ALREADY_MATCHED:
CURRENT_VALUE_MISMATCH:
SKIPPED:
FAILED:

Files expected to change:
Files actually changed:

Production git diff:
PASS / FAIL

Post-write actual_after === NEW:
X / X PASS

DE changes:
0 / FAIL

Unexpected changes:
0 / FAIL

Syntax:
PASS / FAIL

ID/order:
PASS / FAIL / N/A

Mirror/parity:
PASS / FAIL / N/A

Study validation:
PASS / FAIL / N/A

Targeted regression:
PASS / FAIL

FINAL VERDICT:
PASS / FAIL
```

Ja `APPLIED_VERIFIED > 0`, bet production failu faktiskās izmaiņas ir `0`, gala verdict obligāti:

```text
HARD FAIL — EXPECTED PRODUCTION WRITE MISSING
```

---

# GALVENAIS PRINCIPS

```text
OWNER lēmums
→ CURRENT exact-match
→ COPY-ONLY NEW
→ WRITE TO DISK
→ RELOAD FROM DISK
→ actual_after === NEW
→ GIT DIFF
→ REGRESSION
→ PASS
```

**Nekad neuzskatīt in-memory izmaiņu vai apply log ierakstu par pierādījumu, ka production ir izlabots.**
