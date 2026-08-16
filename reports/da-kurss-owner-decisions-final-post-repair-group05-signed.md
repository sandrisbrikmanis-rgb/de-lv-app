# DA–DE Kurss — OWNER decisions final post-repair — Group 05

**Scope:** Findings 201–248 (**48/48**)

**DE = STRICT READ-ONLY.**

OWNER lēmumi pieņemti lingvistiski. Audita `PROPOSED_DA` nav automātiski pieņemts; `OWNER_DECISION` zemāk ir autoritatīvais variants.

| # | Audit ID | Statuss | OWNER_DECISION |
|--:|----------|---------|----------------|
| 201 | DA-KURSS-FPR-0201 | LABOT | Notesbøgerne er nu i mappen. |
| 202 | DA-KURSS-FPR-0202 | LABOT | Han går ind i klassen. |
| 203 | DA-KURSS-FPR-0203 | LABOT | das Bild — billede |
| 204 | DA-KURSS-FPR-0204 | LABOT | der Großvater — bedstefar |
| 205 | DA-KURSS-FPR-0205 | LABOT | die Großmutter — bedstemor |
| 206 | DA-KURSS-FPR-0206 | LABOT | Han viser eleverne mange lande, byer, bjerge, søer og floder. |
| 207 | DA-KURSS-FPR-0207 | LABOT | Så kalder læreren en elev frem. |
| 208 | DA-KURSS-FPR-0208 | LABOT | das Stockwerk — etage |
| 209 | DA-KURSS-FPR-0209 | LABOT | das Vorhaus — entré / forstue |
| 210 | DA-KURSS-FPR-0210 | NEEDS_SOURCE_REVIEW | `der Boden` er kontekstafhængigt (gulv / jord / loftsrum). Den korrekte danske betydning kan ikke fastlåses sikkert ud fra den forkortede audit-række alene; DE forbliver READ-ONLY. |
| 211 | DA-KURSS-FPR-0211 | LABOT | der Schornsteinfeger — skorstensfejer |
| 212 | DA-KURSS-FPR-0212 | LABOT | bald — snart |
| 213 | DA-KURSS-FPR-0213 | LABOT | licht — lys |
| 214 | DA-KURSS-FPR-0214 | LABOT | Tidsord, der besvarer spørgsmålet wann? i lektion 19 og 20 |
| 215 | DA-KURSS-FPR-0215 | LABOT | -e- mellem stamme og endelse |
| 216 | DA-KURSS-FPR-0216 | LABOT | Hvad er dørene lavet af? |
| 217 | DA-KURSS-FPR-0217 | LABOT | Hvor skal du bære brændet hen? |
| 218 | DA-KURSS-FPR-0218 | LABOT | Hvad brænder lyst? |
| 219 | DA-KURSS-FPR-0219 | LABOT | treten — at træde |
| 220 | DA-KURSS-FPR-0220 | LABOT | er tritt — han træder |
| 221 | DA-KURSS-FPR-0221 | LABOT | holen — at hente |
| 222 | DA-KURSS-FPR-0222 | LABOT | er sieht — han ser |
| 223 | DA-KURSS-FPR-0223 | LABOT | Oversæt |
| 224 | DA-KURSS-FPR-0224 | LABOT | Ofte DIE |
| 225 | DA-KURSS-FPR-0225 | LABOT | Der Montag — mandag |
| 226 | DA-KURSS-FPR-0226 | LABOT | Er — han |
| 227 | DA-KURSS-FPR-0227 | NELABOT | Du — du |
| 228 | DA-KURSS-FPR-0228 | LABOT | Wir danken euch. – Vi takker jer. |
| 229 | DA-KURSS-FPR-0229 | LABOT | gut (gūt) — godt |
| 230 | DA-KURSS-FPR-0230 | LABOT | Bad (bāt) — bad |
| 231 | DA-KURSS-FPR-0231 | LABOT | Was tust du? — Hvad laver du? |
| 232 | DA-KURSS-FPR-0232 | LABOT | Paul fragt nicht. — Paul spørger ikke. |
| 233 | DA-KURSS-FPR-0233 | LABOT | Tæller du? |
| 234 | DA-KURSS-FPR-0234 | LABOT | Paul spørger. |
| 235 | DA-KURSS-FPR-0235 | LABOT | Her ligger en bog. |
| 236 | DA-KURSS-FPR-0236 | LABOT | Der hænger en tavle. |
| 237 | DA-KURSS-FPR-0237 | LABOT | Nej, det er skarpt. |
| 238 | DA-KURSS-FPR-0238 | LABOT | Hvad tager du? |
| 239 | DA-KURSS-FPR-0239 | LABOT | Læreren spørger eleven. |
| 240 | DA-KURSS-FPR-0240 | LABOT | Pigen tager en penneholder, en pen og en kniv. |
| 241 | DA-KURSS-FPR-0241 | LABOT | Hun lægger kniven og penneholderen. |
| 242 | DA-KURSS-FPR-0242 | LABOT | Jeg lægger to nåle. |
| 243 | DA-KURSS-FPR-0243 | NELABOT | Det er låg. |
| 244 | DA-KURSS-FPR-0244 | LABOT | Øvelse |
| 245 | DA-KURSS-FPR-0245 | LABOT | Øvelse I — Brug den rigtige bøjning |
| 246 | DA-KURSS-FPR-0246 | LABOT | Øvelse II — oversæt |
| 247 | DA-KURSS-FPR-0247 | LABOT | Sein, können, sundhed, alder og erhverv. |
| 248 | DA-KURSS-FPR-0248 | LABOT | Haben, kein/keine/keinen, ejedord og sammensatte substantiver. |

## Kopsavilkums

- Pārbaudīti: **48/48**
- LABOT: **45**
- NELABOT: **2**
- FALSE_POSITIVE: **0**
- NEEDS_SOURCE_REVIEW: **1**
- DE izmaiņas: **0**

## Apply note

Apply drīkst izmantot tikai `Statuss: LABOT` un precīzu `OWNER_DECISION`. `NELABOT` saglabā CURRENT. `NEEDS_SOURCE_REVIEW` nepiemērot automātiski.