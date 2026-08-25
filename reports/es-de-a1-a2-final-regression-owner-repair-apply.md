# ES–DE A1+A2 — final regression OWNER COPY-ONLY apply

**Branch:** `cursor/es-de-a1-a2-owner-apply-001-200-3141`
**PR:** #664
**HEAD before:** `41de87a6e82c5c88b193350134322943a7a543b3`
**HEAD after:** `41de87a6e82c5c88b193350134322943a7a543b3`
**DE:** STRICT READ-ONLY

## Apply

| Metrika | Vērtība |
|---------|--------:|
| Requested (LABOT) | **575** |
| Processed | **575** |
| **APPLIED_VERIFIED** | **575** |
| CURRENT_VALUE_MISMATCH | **0** |
| NEW_VALUE_MISMATCH | **0** |
| FAILED | **0** |
| NO_OP_RETAINED | **5/5** |

## Post-apply verification

| Pārbaude | Rezultāts |
|----------|----------:|
| A1 kartītes | **702/702** |
| A2 kartītes | **1640/1640** |
| Kopā | **2342/2342** |
| A1 Study | **134/134** |
| A2 Study | **231/231** |
| Missing Study | **0** |
| Retention Luna OWNER | **1208/1208** |
| Retention foreign LABOT | **537/537** |
| Retention foreign NELABOT | **37/37** |
| Retention 10 Study | **10/10** |
| SUPERSEDED_BY_FINAL_OWNER | **34** |
| DE izmaiņas | **0** |
| Unexpected production changes | **0** |
| Syntax | **true** |
| A1 mirror | **true** |
| A2 mirror | **true** |
| ID/order | **true** |

## Collector

| Metrika | Vērtība |
|---------|--------:|
| Raw foreign candidates | **42** |
| False positives | **42** |
| Validētie REAL | **0** |
| Unresolved | **0** |

## Mikrotargeti

- **a2-abfahren**: PASS — `Recorremos el trayecto lentamente.`
- **a1-vor**: PASS — `Después de comer salimos a pasear.`
- **a1-vom**: PASS — `Es del mercado.`
- **a1-zum meaning**: PASS — `a / hacia (género femenino: zu der)`
- **a1-zum example**: PASS — `zur Schule – a la escuela`
- **a1-sein important[1]**: PASS — `Ich bin significa «yo soy/estoy», no «yo ser/estar».`
- **a1-sein sectionAccents esi**: PASS — `cansado`
- **a1-sein tip purple**: PASS — `yo soy/estoy,tú eres/estás`
- **foreign remnants (13)**: PASS — `13`
- **sectionAccents REAL (1)**: PASS — `1`

## FINAL VERDICT: **PASS — ALL 575 FINAL OWNER TARGETS APPLIED AND VERIFIED**
