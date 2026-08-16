# DA–DE Verbs OWNER repairs final targeted regression audit

**Date:** 2026-08-16
**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)
**Scope:** Production `data/da/verbs.js` after OWNER signed repair (PR [#560](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/560))
**Decision sources (authoritative):** signed OWNER files `da-verbs-owner-decisions-signed-group01..12.md` (derived from `da-verbs-owner-decisions-group01..12.md`)
**Production changes during audit:** 0

## Summary

| Metric | Value |
|--------|-------|
| OWNER findings reviewed | **569** |
| LABOT findings | **561** |
| Unique LABOT production fields | **497** |
| EXACT MATCH | **322/497** |
| MISMATCH | **175** |
| MISSING CARD | **0** |
| MISSING FIELD | **0** |
| OWNER mapping conflicts | **0** |
| FALSE_POSITIVE | **4** |
| NELABOT | **2** |
| NEEDS_SOURCE_REVIEW | **2** |
| Unauthorized FALSE_POSITIVE changes | **0** |
| Unauthorized NELABOT changes | **0** |
| Unauthorized NEEDS_SOURCE_REVIEW changes | **0** |
| Changed DA fields (lv) | **497** |
| Changed fields audited (LABOT scope) | **497** |

### Finding counts (deduplicated by gate)

| Gate | CRITICAL | HIGH | MEDIUM | LOW | Total |
|------|----------|------|--------|-----|-------|
| Owner exact-match gate (MISMATCH) | **175** | 0 | 0 | 0 | **175** |
| Luna linguistic (322 exact-match + ownerNew review) | **0** | **12** | **5** | **0** | **17** |
| Full-file remnant sweep | **3** | **14** | **0** | 0 | **17** |
| Structural / unauthorized | **0** | **0** | **8** | 0 | **8** |

| Metric | Value |
|--------|-------|
| Validated real findings (unique) | **217** |
| Regression FALSE_POSITIVE (Luna) | **0** |
| LV remnants (full file sweep) | **3** |
| EN remnants | **14** |
| Other foreign remnants | **0** |
| Placeholders | **0** |
| Empty/corrupt DA fields | **0** |
| DE changes | **0** |
| DE READ-ONLY | **PASS** |
| Verb count | **189/189** |
| ID/order | **PASS** |
| Structure | **PASS** |
| Mirror | **PASS** |
| Unexpected production changes | **0** |
| Luna batches | **10** |
| Luna findings loaded | **10/10** |
| Luna quality findings (deduped) | **17** |

### Verdict

**DA–DE VERBS OWNER REPAIRS = NOT CLOSED**

## Root cause: apply parser corruption

All **175** MISMATCH fields contain literal `LABOT` text or parser debris in production instead of the OWNER-approved Danish. This affects verbs roughly **verb-33** through **verb-95** (groups parsed via ASCII blocks during first apply pass). The signed-decisions parser was subsequently fixed in `scripts/lib/da-verbs-signed-decisions.js`, but production was **not** re-applied during this audit.

**Required next step:** Re-run OWNER apply with fixed parser on affected groups, then re-audit. Do not auto-fix in this pass.

## Owner exact-match gate — MISMATCH (175)

_Production value ≠ OWNER_DECISION. All are CRITICAL apply failures._

### DA-VERB-REG-0001 [CRITICAL]

- **Verb/Card ID:** `verb-33`
- **Field:** `infinitiv`
- **DE_CURRENT:** brechen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At bryde

### DA-VERB-REG-0002 [CRITICAL]

- **Verb/Card ID:** `verb-33`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** gebrochen
- **DA_CURRENT:** LABOT salauzts
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Brudt

### DA-VERB-REG-0003 [CRITICAL]

- **Verb/Card ID:** `verb-34`
- **Field:** `imperfektIndikativ`
- **DE_CURRENT:** brannte
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han brændte

### DA-VERB-REG-0004 [CRITICAL]

- **Verb/Card ID:** `verb-34`
- **Field:** `imperfektKonjunktiv`
- **DE_CURRENT:** brannte
- **DA_CURRENT:** LABOT brænde
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han ville brænde

### DA-VERB-REG-0005 [CRITICAL]

- **Verb/Card ID:** `verb-34`
- **Field:** `infinitiv`
- **DE_CURRENT:** brennen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At brænde

### DA-VERB-REG-0006 [CRITICAL]

- **Verb/Card ID:** `verb-34`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** gebrannt
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Brændt

### DA-VERB-REG-0007 [CRITICAL]

- **Verb/Card ID:** `verb-34`
- **Field:** `praesens`
- **DE_CURRENT:** er brennt
- **DA_CURRENT:** LABOT brand
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han brænder

### DA-VERB-REG-0008 [CRITICAL]

- **Verb/Card ID:** `verb-35`
- **Field:** `imperfektIndikativ`
- **DE_CURRENT:** er brachte
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han bragte

### DA-VERB-REG-0009 [CRITICAL]

- **Verb/Card ID:** `verb-35`
- **Field:** `infinitiv`
- **DE_CURRENT:** bringen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At bringe

### DA-VERB-REG-0010 [CRITICAL]

- **Verb/Card ID:** `verb-35`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** gebracht
- **DA_CURRENT:** LABOT atnest
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Bragt

### DA-VERB-REG-0011 [CRITICAL]

- **Verb/Card ID:** `verb-35`
- **Field:** `praesens`
- **DE_CURRENT:** er bringt
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han bringer

### DA-VERB-REG-0012 [CRITICAL]

- **Verb/Card ID:** `verb-36`
- **Field:** `imperfektKonjunktiv`
- **DE_CURRENT:** er dächte
- **DA_CURRENT:** LABOT mene tænke
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han ville tænke

### DA-VERB-REG-0013 [CRITICAL]

- **Verb/Card ID:** `verb-36`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** gedacht
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Tænkt

### DA-VERB-REG-0014 [CRITICAL]

- **Verb/Card ID:** `verb-37`
- **Field:** `imperfektIndikativ`
- **DE_CURRENT:** dingte
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han ansatte

### DA-VERB-REG-0015 [CRITICAL]

- **Verb/Card ID:** `verb-37`
- **Field:** `imperfektKonjunktiv`
- **DE_CURRENT:** dingte
- **DA_CURRENT:** LABOT ansætte ansætte
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han ville

### DA-VERB-REG-0016 [CRITICAL]

- **Verb/Card ID:** `verb-37`
- **Field:** `infinitiv`
- **DE_CURRENT:** dingen
- **DA_CURRENT:** LABOT at blive natural enige Danish form)
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At ansætte

### DA-VERB-REG-0017 [CRITICAL]

- **Verb/Card ID:** `verb-38`
- **Field:** `imperfektKonjunktiv`
- **DE_CURRENT:** er dräsche / er drösche
- **DA_CURRENT:** LABOT er drösche tilbede tærske
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han ville tærske

### DA-VERB-REG-0018 [CRITICAL]

- **Verb/Card ID:** `verb-38`
- **Field:** `infinitiv`
- **DE_CURRENT:** dreschen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At tærske

### DA-VERB-REG-0019 [CRITICAL]

- **Verb/Card ID:** `verb-38`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** gedroschen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Tærsket

### DA-VERB-REG-0020 [CRITICAL]

- **Verb/Card ID:** `verb-39`
- **Field:** `infinitiv`
- **DE_CURRENT:** dringen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At trænge ind

### DA-VERB-REG-0021 [CRITICAL]

- **Verb/Card ID:** `verb-39`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** gedrungen (er ist)
- **DA_CURRENT:** LABOT ist)
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Trængt ind

### DA-VERB-REG-0022 [CRITICAL]

- **Verb/Card ID:** `verb-40`
- **Field:** `imperfektIndikativ`
- **DE_CURRENT:** deuchte
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Det lod til

### DA-VERB-REG-0023 [CRITICAL]

- **Verb/Card ID:** `verb-40`
- **Field:** `imperfektKonjunktiv`
- **DE_CURRENT:** deuchte
- **DA_CURRENT:** LABOT synes
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Det ville synes

### DA-VERB-REG-0024 [CRITICAL]

- **Verb/Card ID:** `verb-41`
- **Field:** `praesens`
- **DE_CURRENT:** er darf
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Han må

### DA-VERB-REG-0025 [CRITICAL]

- **Verb/Card ID:** `verb-42`
- **Field:** `infinitiv`
- **DE_CURRENT:** empfehlen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At anbefale

### DA-VERB-REG-0026 [CRITICAL]

- **Verb/Card ID:** `verb-42`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** empfohlen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Anbefalet

### DA-VERB-REG-0027 [CRITICAL]

- **Verb/Card ID:** `verb-43`
- **Field:** `infinitiv`
- **DE_CURRENT:** empfinden
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At føle

### DA-VERB-REG-0028 [CRITICAL]

- **Verb/Card ID:** `verb-43`
- **Field:** `partizipVergangenheit`
- **DE_CURRENT:** empfunden
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Følt

### DA-VERB-REG-0029 [CRITICAL]

- **Verb/Card ID:** `verb-44`
- **Field:** `imperfektKonjunktiv`
- **DE_CURRENT:** er erlösche
- **DA_CURRENT:** LABOT forsvinde slukke slukkes
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** Det ville

### DA-VERB-REG-0030 [CRITICAL]

- **Verb/Card ID:** `verb-44`
- **Field:** `infinitiv`
- **DE_CURRENT:** erlöschen
- **DA_CURRENT:** LABOT
- **Problem:** OWNER_DECISION mismatch vs production
- **Recommended DA:** At gå ud

_… and 145 more MISMATCH entries (see JSON)._

## Luna targeted linguistic regression (17)

_Reviewed all 497 OWNER-changed fields. Luna REGRESSION duplicates of MISMATCH gate excluded. Remaining items are real Danish issues in production (exact-match subset) or in OWNER targets._

### DA-VERB-REG-0201 [MEDIUM]

- **Verb/Card ID:** `verb-29`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gekniffen
- **DA_CURRENT:** Knebet
- **Problem:** Non-standard past participle form
- **Reason:** Standard Danish paradigm for at knibe is kniber, knib, har knibet. 'Knebet' is not a valid participle of knibe and does not match gekniffen (pinched/squeezed).
- **Recommended DA:** Knibet

### DA-VERB-REG-0202 [HIGH]

- **Verb/Card ID:** `verb-37`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** dingte
- **DA_CURRENT:** LABOT ansætte ansætte
- **Problem:** Owner repair not applied; ownerNew truncated
- **Reason:** Production shows LABOT with duplicated infinitive fragments. Owner target 'Han ville' is grammatically incomplete for Konjunktiv II — it lacks the main verb ansætte required to render dingte.
- **Recommended DA:** Han ville ansætte

### DA-VERB-REG-0203 [HIGH]

- **Verb/Card ID:** `verb-44`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er erlösche
- **DA_CURRENT:** LABOT forsvinde slukke slukkes
- **Problem:** Owner repair not applied; truncated Konjunktiv II form
- **Reason:** Production retains LABOT plus wrong verb fragments (forsvinde/slukke). Owner target 'Det ville' is grammatically incomplete for er erlösche — it lacks the main verb (gå ud/slukke) required for Konjunktiv II of erlöschen.
- **Recommended DA:** Det ville gå ud

### DA-VERB-REG-0204 [HIGH]

- **Verb/Card ID:** `verb-45`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** erschrecken
- **DA_CURRENT:** LABOT forvirret bange forskrækket
- **Problem:** Owner repair not applied; incomplete infinitive
- **Reason:** Production shows LABOT plus adjective fragments (forvirret/bange/forskrækket). Owner target 'At blive' is incomplete for erschrecken — German intransitive 'to be startled' needs a complement such as 'at blive forskrækket'.
- **Recommended DA:** At blive forskrækket

### DA-VERB-REG-0205 [HIGH]

- **Verb/Card ID:** `verb-57`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gediehen (er ist)
- **DA_CURRENT:** LABOT ist)
- **Problem:** Owner repair not applied; wrong participle form in ownerNew
- **Reason:** Production retains LABOT plus German '(er ist)' leakage. Owner target 'Trivedes' is the preterite of at trives, not the past participle; for gediehen (er ist) the correct form is 'Trivet' (har trivet).
- **Recommended DA:** Trivet

### DA-VERB-REG-0206 [MEDIUM]

- **Verb/Card ID:** `verb-87`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er quölle
- **DA_CURRENT:** LABOT svulme op op
- **Problem:** Inconsistent particle with card paradigm
- **Reason:** Production shows LABOT with duplicated 'op' and bare infinitive fragments. Owner target 'Det ville svulme' omits 'op' used in all other forms on this card (At svulme op, Det svulmede op, Det svulmer op, Svulmet op) for quellen (swell up).
- **Recommended DA:** Det ville svulme op

### DA-VERB-REG-0207 [HIGH]

- **Verb/Card ID:** `verb-95`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er ränne / er rönne
- **DA_CURRENT:** LABOT er rönne flyde
- **Problem:** Owner repair not applied; German remnant in production
- **Reason:** Production retains LABOT plus German subjunctive fragment 'er rönne' instead of the full Danish Konjunktiv II Det ville flyde for rinnen.
- **Recommended DA:** Det ville flyde

### DA-VERB-REG-0208 [HIGH]

- **Verb/Card ID:** `verb-95`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geronnen (er ist)
- **DA_CURRENT:** LABOT ist) koagulerede
- **Problem:** Owner repair not applied; garbled German remnant in production
- **Reason:** Production retains LABOT plus truncated German auxiliary fragment 'ist)' and a mixed form instead of the owner-approved participle Størknet for geronnen (coagulated).
- **Recommended DA:** Størknet

### DA-VERB-REG-0209 [MEDIUM]

- **Verb/Card ID:** `verb-95`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er rinnt
- **DA_CURRENT:** Det flyder
- **Problem:** Inconsistent verb stem within same card
- **Reason:** Owner-approved infinitiv on this card is At sive (trickle/drip) to distinguish rinnen from fließen, but praesens uses flyde (Det flyder). Learners see two different Danish lemmas for one German verb; align to sive (Det siver) or use flyde throughout.
- **Recommended DA:** Det siver

### DA-VERB-REG-0210 [HIGH]

- **Verb/Card ID:** `verb-133`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gesunken (er ist)
- **DA_CURRENT:** Sunket
- **Problem:** Misspelled past participle.
- **Reason:** Past participle of synke is synket, not sunket; sunket is a non-standard spelling likely influenced by German gesunken.
- **Recommended DA:** Synket

### DA-VERB-REG-0211 [MEDIUM]

- **Verb/Card ID:** `verb-136`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** sollen
- **DA_CURRENT:** At skulle / at burde
- **Problem:** Slash variant in infinitive field.
- **Reason:** Two alternative infinitives in one slot; pick one canonical form (at skulle) for consistent flashcard display.
- **Recommended DA:** At skulle

### DA-VERB-REG-0212 [MEDIUM]

- **Verb/Card ID:** `verb-136`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gesollt
- **DA_CURRENT:** Skullet
- **Problem:** Non-standard or artificial participle.
- **Reason:** Skullet is not natural Danish; modal skulle rarely has a used past participle, and gesollt is itself marginal in German.
- **Recommended DA:** —

### DA-VERB-REG-0213 [HIGH]

- **Verb/Card ID:** `verb-149`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** stob vai stiebte
- **DA_CURRENT:** Det støvede
- **Problem:** Inconsistent verb stem within same card.
- **Reason:** Past indicative uses støve while infinitiv, praesens, and participle use hvirvle; stieben needs one consistent Danish lemma across all forms.
- **Recommended DA:** Det hvirvlede

### DA-VERB-REG-0214 [HIGH]

- **Verb/Card ID:** `verb-149`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** stob vai stiebte
- **DA_CURRENT:** Det ville støve
- **Problem:** Inconsistent verb stem within same card.
- **Reason:** Subjunctive uses støve while other conjugations use hvirvle; learners cannot reconcile mixed lemmas for one German verb.
- **Recommended DA:** Det ville hvirvle

### DA-VERB-REG-0215 [HIGH]

- **Verb/Card ID:** `verb-150`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gestunken
- **DA_CURRENT:** Stinket
- **Problem:** Non-standard past participle for stinke.
- **Reason:** Danish stinke conjugates stinker → stank → har stunket (DDO: -r, stank, -t). 'Stinket' is at best a rare literary variant (ODS: l. br.); the standard teaching form matching gestunken is Stunket.
- **Recommended DA:** Stunket

### DA-VERB-REG-0216 [HIGH]

- **Verb/Card ID:** `verb-162`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** verdrossen
- **DA_CURRENT:** Ærgeret
- **Problem:** Misspelled past participle for ærgre.
- **Reason:** Danish ærgre conjugates ærgrer → ærgrede → har ærgret (DDO: -r, -de, -t). 'Ærgeret' inserts an extra e; the correct participle is Ærgret.
- **Recommended DA:** Ærgret

### DA-VERB-REG-0217 [HIGH]

- **Verb/Card ID:** `verb-178`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gewrungen
- **DA_CURRENT:** Vrundet
- **Problem:** Non-standard participle form for vride.
- **Reason:** Danish vride (wring) conjugates vride → vred → vredet. 'Vrundet' is not a valid participle in standard Danish (ordnet.dk/ddo, DinOrdbog). gewrungen from wringen maps to the same Danish verb vride, so the participle must be Vredet — the same form already used correctly on verb-175 (winden writhe).
- **Recommended DA:** Vredet

## Foreign-language / placeholder sweep (17)

### DA-VERB-REG-0176 [CRITICAL]

- **Verb/Card ID:** `verb-46`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** essen
- **DA_CURRENT:** At spise
- **Problem:** Foreign remnant: LV
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0177 [CRITICAL]

- **Verb/Card ID:** `verb-46`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er äße
- **DA_CURRENT:** Han ville spise
- **Problem:** Foreign remnant: LV
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0178 [HIGH]

- **Verb/Card ID:** `verb-54`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er frisst
- **DA_CURRENT:** LABOT sluger natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0179 [HIGH]

- **Verb/Card ID:** `verb-54`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er frass
- **DA_CURRENT:** LABOT slugte natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0180 [CRITICAL]

- **Verb/Card ID:** `verb-54`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er fräße
- **DA_CURRENT:** LABOT spise / natural morgenmad Danish form)
- **Problem:** Foreign remnant: LV
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0181 [HIGH]

- **Verb/Card ID:** `verb-62`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er heißt
- **DA_CURRENT:** LABOT han kaldes natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0182 [HIGH]

- **Verb/Card ID:** `verb-62`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er hieß
- **DA_CURRENT:** LABOT han blev kaldt natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0183 [HIGH]

- **Verb/Card ID:** `verb-67`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er lädt
- **DA_CURRENT:** LABOT inviterer natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0184 [HIGH]

- **Verb/Card ID:** `verb-67`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er lud
- **DA_CURRENT:** LABOT / inviterede natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0185 [HIGH]

- **Verb/Card ID:** `verb-67`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geladen
- **DA_CURRENT:** LABOT inviteret natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0186 [HIGH]

- **Verb/Card ID:** `verb-68`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er lässt
- **DA_CURRENT:** LABOT lader natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0187 [HIGH]

- **Verb/Card ID:** `verb-68`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er ließ
- **DA_CURRENT:** LABOT / tilladt natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0188 [HIGH]

- **Verb/Card ID:** `verb-68`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er ließe
- **DA_CURRENT:** LABOT sætte / lade natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0189 [HIGH]

- **Verb/Card ID:** `verb-68`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gelassen
- **DA_CURRENT:** LABOT tilladt natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0190 [HIGH]

- **Verb/Card ID:** `verb-88`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er rät
- **DA_CURRENT:** LABOT min natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0191 [HIGH]

- **Verb/Card ID:** `verb-88`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er riet
- **DA_CURRENT:** LABOT foreslog natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

### DA-VERB-REG-0192 [HIGH]

- **Verb/Card ID:** `verb-88`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er riete
- **DA_CURRENT:** LABOT foreslå / nævne natural Danish form)
- **Problem:** EN/placeholder remnant: EN
- **Recommended DA:** Natural Danish

## Structural findings (8)

### DA-VERB-REG-0193 [MEDIUM]

- **Verb/Card ID:** `verb-54`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er fräße
- **DA_CURRENT:** LABOT spise / natural morgenmad Danish form)
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

### DA-VERB-REG-0194 [MEDIUM]

- **Verb/Card ID:** `verb-62`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er hieße
- **DA_CURRENT:** LABOT kalde / han natural ville blive Danish form) kaldt
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

### DA-VERB-REG-0195 [MEDIUM]

- **Verb/Card ID:** `verb-67`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er lud
- **DA_CURRENT:** LABOT / inviterede natural Danish form)
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

### DA-VERB-REG-0196 [MEDIUM]

- **Verb/Card ID:** `verb-67`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er lüde
- **DA_CURRENT:** LABOT indlæse / natural invitere Danish form)
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

### DA-VERB-REG-0197 [MEDIUM]

- **Verb/Card ID:** `verb-68`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er ließ
- **DA_CURRENT:** LABOT / tilladt natural Danish form)
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

### DA-VERB-REG-0198 [MEDIUM]

- **Verb/Card ID:** `verb-68`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er ließe
- **DA_CURRENT:** LABOT sætte / lade natural Danish form)
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

### DA-VERB-REG-0199 [MEDIUM]

- **Verb/Card ID:** `verb-88`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er riete
- **DA_CURRENT:** LABOT foreslå / nævne natural Danish form)
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

### DA-VERB-REG-0200 [MEDIUM]

- **Verb/Card ID:** `verb-136`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** sollen
- **DA_CURRENT:** At skulle / at burde
- **Problem:** OWNER-repaired field risk: SLASH_VARIANT
- **Recommended DA:** Single natural Danish teaching form

## Closure gate

| Gate | Required | Actual | Status |
|------|----------|--------|--------|
| OWNER exact match | MISMATCH=0 | 175 | FAIL |
| MISSING | 0 | 0 | PASS |
| OWNER conflicts | 0 | 0 | PASS |
| CRITICAL (linguistic) | 0 | 0 | PASS |
| HIGH (linguistic) | 0 | 12 | FAIL |
| MEDIUM (linguistic) | 0 | 5 | FAIL |
| LOW (linguistic) | 0 | 0 | PASS |
| LV remnants | 0 | 3 | FAIL |
| EN remnants | 0 | 14 | FAIL |
| Placeholders | 0 | 0 | PASS |
| Corrupt/empty DA | 0 | 0 | PASS |
| DE changes | 0 | 0 | PASS |
| DE READ-ONLY | PASS | PASS | PASS |
| ID/order | PASS | PASS | PASS |
| Structure | PASS | PASS | PASS |
| Unexpected changes | 0 | 0 | PASS |

**DA–DE VERBS OWNER REPAIRS = NOT CLOSED** — do not apply automatic fixes. Re-apply OWNER repairs with fixed parser, then micro-repair remaining linguistic findings.