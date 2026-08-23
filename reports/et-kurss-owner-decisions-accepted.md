# ET–DE Kurss — OWNER DECISIONS ACCEPTED

**Scope:** ET-KURSS-0001–ET-KURSS-0323  
**Authoritative audit source:** `reports/temp/et-kurss-full-audit.json` (PR #636)  
**DE:** STRICT READ-ONLY  

## Authority rule

This file supersedes the intermediate `complete-323` review as the authoritative OWNER layer.

For rows whose OWNER NEW is written as `OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:NNNN`, the OWNER decision is:

> `Status: LABOT` and `NEW = exact complete findings[id=ET-KURSS-NNNN].proposedEt from reports/temp/et-kurss-full-audit.json`.

This is deterministic source-copy, not Cursor translation. The materializer must write a full accepted mapping with literal CURRENT and literal NEW before production apply.

Broad aggregate `legacyHtml` findings ET-KURSS-0001–0007 are classified FALSE_POSITIVE as duplicate container findings and must not trigger whole-field writes.

| Finding | Status | OWNER NEW / directive | OWNER NOTE |
|---|---|---|---|
| ET-KURSS-0001 | FALSE_POSITIVE |  | Duplicate broad legacyHtml container finding. Resolve only through the granular child findings ET-KURSS-0203–0216 / exact targeted rows; do not write the whole parent field from this finding. |
| ET-KURSS-0002 | FALSE_POSITIVE |  | Duplicate broad legacyHtml container finding. Resolve only through the granular child findings ET-KURSS-0203–0216 / exact targeted rows; do not write the whole parent field from this finding. |
| ET-KURSS-0003 | FALSE_POSITIVE |  | Duplicate broad legacyHtml container finding. Resolve only through the granular child findings ET-KURSS-0203–0216 / exact targeted rows; do not write the whole parent field from this finding. |
| ET-KURSS-0004 | FALSE_POSITIVE |  | Duplicate broad legacyHtml container finding. Resolve only through the granular child findings ET-KURSS-0203–0216 / exact targeted rows; do not write the whole parent field from this finding. |
| ET-KURSS-0005 | FALSE_POSITIVE |  | Duplicate broad legacyHtml container finding. Resolve only through the granular child findings ET-KURSS-0203–0216 / exact targeted rows; do not write the whole parent field from this finding. |
| ET-KURSS-0006 | FALSE_POSITIVE |  | Duplicate broad legacyHtml container finding. Resolve only through the granular child findings ET-KURSS-0203–0216 / exact targeted rows; do not write the whole parent field from this finding. |
| ET-KURSS-0007 | FALSE_POSITIVE |  | Duplicate broad legacyHtml container finding. Resolve only through the granular child findings ET-KURSS-0203–0216 / exact targeted rows; do not write the whole parent field from this finding. |
| ET-KURSS-0008 | LABOT | fragen (Akkusativiga) — küsima |  |
| ET-KURSS-0009 | LABOT | sehr (zeer) — väga |  |
| ET-KURSS-0010 | LABOT | erzählen (ertseelen) — jutustama |  |
| ET-KURSS-0011 | LABOT | der Bäcker (deer beker) — pagar |  |
| ET-KURSS-0012 | LABOT | der Schneider (deer šnaider) — rätsepp |  |
| ET-KURSS-0013 | LABOT | der Gärtner (deer gertner) — aednik |  |
| ET-KURSS-0014 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0014 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0015 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0015 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0016 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0016 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0017 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0017 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0018 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0018 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0019 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0019 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0020 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0020 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0021 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0021 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0022 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0022 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0023 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0023 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0024 | LABOT | Übung / Harjutus |  |
| ET-KURSS-0025 | LABOT | Tõlgi |  |
| ET-KURSS-0026 | LABOT | mehrere (meerere) — mitu, mitmed |  |
| ET-KURSS-0027 | LABOT | hier (hiir) — siin |  |
| ET-KURSS-0028 | LABOT | langsam (langzaam) — aeglaselt |  |
| ET-KURSS-0029 | LABOT | mehr (meer) — rohkem |  |
| ET-KURSS-0030 | LABOT | ruhig (ruu-ih) — rahulikult |  |
| ET-KURSS-0031 | LABOT | dieser (diizer) — see |  |
| ET-KURSS-0032 | LABOT | jener (jeener) — too |  |
| ET-KURSS-0033 | LABOT | der Brief (deer briif) — kiri |  |
| ET-KURSS-0034 | LABOT | Näitavad asesõnad |  |
| ET-KURSS-0035 | LABOT | Übung / Harjutus |  |
| ET-KURSS-0036 | LABOT | Tõlgi |  |
| ET-KURSS-0037 | LABOT | ihr seid (iir zait) — teie olete |  |
| ET-KURSS-0038 | LABOT | der Knabe (deer knaabe) — poiss |  |
| ET-KURSS-0039 | LABOT | der Großvater (deer groosfaater) — vanaisa |  |
| ET-KURSS-0040 | LABOT | das Jahr (jaar) — aasta |  |
| ET-KURSS-0041 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0041 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0042 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0042 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0043 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0043 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0044 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0044 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0045 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0045 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0046 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0046 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0047 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0047 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0048 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0048 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0049 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0049 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0050 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0050 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0051 | LABOT | Tõlgi |  |
| ET-KURSS-0052 | LABOT | der Bruder (deer bruuder) — vend |  |
| ET-KURSS-0053 | LABOT | der Schreibtisch (deer šraiptiiš) — kirjutuslaud |  |
| ET-KURSS-0054 | LABOT | zusammen (tsuzaamen) — koos |  |
| ET-KURSS-0055 | LABOT | der Freund (deer froint) — sõber |  |
| ET-KURSS-0056 | LABOT | der Stuhl (deer štuul) — tool |  |
| ET-KURSS-0057 | LABOT | die Landkarte (dii lantkarte) — maakaart |  |
| ET-KURSS-0058 | LABOT | die Schwester (dii švester) — õde |  |
| ET-KURSS-0059 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0059 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0060 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0060 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0061 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0061 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0062 | LABOT | Eesti daativ ja saksa nominatiiv/akusatiiv |  |
| ET-KURSS-0063 | LABOT | Näited |  |
| ET-KURSS-0064 | LABOT | Võrdlus teiste keeltega |  |
| ET-KURSS-0065 | LABOT | inglise: I have a book; the father has a pencil. |  |
| ET-KURSS-0066 | LABOT | Imperatiiv — näited |  |
| ET-KURSS-0067 | LABOT | habe Geduld! — ole kannatlik! / olgu sul kannatust! |  |
| ET-KURSS-0068 | LABOT | habt Geduld! — olge kannatlikud! / olgu teil kannatust! |  |
| ET-KURSS-0069 | LABOT | Sõnajärg sõnaga denn |  |
| ET-KURSS-0070 | LABOT | Denn — näited |  |
| ET-KURSS-0071 | LABOT | Liitnimisõnad |  |
| ET-KURSS-0072 | LABOT | Liitnimisõnad — näited |  |
| ET-KURSS-0073 | LABOT | Tõlgi |  |
| ET-KURSS-0074 | LABOT | der Vetter (deer feter) — nõbu |  |
| ET-KURSS-0075 | LABOT | das Gummi (das gumii) — kustutuskumm |  |
| ET-KURSS-0076 | LABOT | x hääldatakse nagu ks: Max (maks), Felix (feliks). |  |
| ET-KURSS-0077 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0077 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0078 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0078 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0079 | LABOT | Umlaut ülivõrdes |  |
| ET-KURSS-0080 | LABOT | Võrdlemine sõnadega wie ja als |  |
| ET-KURSS-0081 | LABOT | Ebareeglipärased võrdlusastmed |  |
| ET-KURSS-0082 | LABOT | Tõlgi |  |
| ET-KURSS-0083 | LABOT | Umlaut olevikus |  |
| ET-KURSS-0084 | LABOT | Enesekohane tegusõna |  |
| ET-KURSS-0085 | LABOT | Käskiv kõneviis tegusõnaga sich umkehren |  |
| ET-KURSS-0086 | LABOT | Tegusõna atmen |  |
| ET-KURSS-0087 | LABOT | Käskiv kõneviis tegusõnaga atmen |  |
| ET-KURSS-0088 | LABOT | Liittegusõnad |  |
| ET-KURSS-0089 | LABOT | Lahutamatud eesliited |  |
| ET-KURSS-0090 | LABOT | Asesõna jeder |  |
| ET-KURSS-0091 | LABOT | Naissoost nimisõnad lõpuga -in |  |
| ET-KURSS-0092 | LABOT | Sõnas halten on h kuuldav häälik. |  |
| ET-KURSS-0093 | LABOT | Sõnas fahren märgib h eelneva täishääliku pikkust. |  |
| ET-KURSS-0094 | LABOT | Sõnas halten hääldatakse a lühikeselt: halten. |  |
| ET-KURSS-0095 | LABOT | Sõnas tragen hääldatakse a pikalt: tragen. |  |
| ET-KURSS-0096 | LABOT | äu hääldatakse nagu oi: du läufst, er läuft. |  |
| ET-KURSS-0097 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0097 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0098 | LABOT | Harjutus |  |
| ET-KURSS-0099 | LABOT | Tõlgi |  |
| ET-KURSS-0100 | LABOT | Modaaltegusõnad |  |
| ET-KURSS-0101 | LABOT | 1. ja 3. isik ainsuses |  |
| ET-KURSS-0102 | LABOT | Tüvevokaali muutus |  |
| ET-KURSS-0103 | LABOT | Oluline |  |
| ET-KURSS-0104 | LABOT | ß hääldatakse nagu s. |  |
| ET-KURSS-0105 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0105 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0106 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0106 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0107 | LABOT | Sõnas mögen hääldatakse ö selge ö-häälikuna. |  |
| ET-KURSS-0108 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0108 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0109 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0109 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0110 | LABOT | Tõlgi |  |
| ET-KURSS-0111 | LABOT | Võrdlus |  |
| ET-KURSS-0112 | LABOT | müssen — pidama vajaduse või veendumuse tõttu |  |
| ET-KURSS-0113 | LABOT | sollen — pidama kohustuse tähenduses |  |
| ET-KURSS-0114 | LABOT | Tänapäevane kirjaviis |  |
| ET-KURSS-0115 | LABOT | ä hääldatakse sõnades Äpfel ja schälen nagu kitsast e-d. |  |
| ET-KURSS-0116 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0116 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0117 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0117 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0118 | LABOT | Sõnas gern on e lühike ja avatud. |  |
| ET-KURSS-0119 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0119 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0120 | LABOT | Tõlgi |  |
| ET-KURSS-0121 | LABOT | Daativi -e |  |
| ET-KURSS-0122 | LABOT | Naissoost nimisõnad daativis |  |
| ET-KURSS-0123 | LABOT | Umbmäärane artikkel daativis |  |
| ET-KURSS-0124 | LABOT | Mitmuse daativ |  |
| ET-KURSS-0125 | LABOT | Sõnades wem, dem, den, der |  |
| ET-KURSS-0126 | LABOT | Sõnas gehorchen on h kuulda: ge-hor-chen. |  |
| ET-KURSS-0127 | LABOT | Harjutus |  |
| ET-KURSS-0128 | LABOT | Tõlgi |  |
| ET-KURSS-0129 | LABOT | Mit wem spricht der Bruder? — Kellega vend räägib? |  |
| ET-KURSS-0130 | LABOT | Womit gräbt der Knabe die Grube? — Millega poiss auku kaevab? |  |
| ET-KURSS-0131 | LABOT | Lahutatavad eesliited |  |
| ET-KURSS-0132 | LABOT | fegen — pühkima luuaga |  |
| ET-KURSS-0133 | LABOT | wischen / abwischen — pühkima lapiga, ära pühkima |  |
| ET-KURSS-0134 | LABOT | Sõnas werfen on esimene e avatud: werfen. |  |
| ET-KURSS-0135 | LABOT | Sõnas wieder on e avatud: wieder. |  |
| ET-KURSS-0136 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0136 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0137 | LABOT | Sõnas der Spaten hääldatakse sp nagu šp: der Spaten. |  |
| ET-KURSS-0138 | LABOT | Harjutus |  |
| ET-KURSS-0139 | LABOT | Tõlgi |  |
| ET-KURSS-0140 | LABOT | Tegusõnad küsimusega wohin? |  |
| ET-KURSS-0141 | LABOT | kommen — tulema |  |
| ET-KURSS-0142 | LABOT | springen — hüppama |  |
| ET-KURSS-0143 | LABOT | kriechen — roomama |  |
| ET-KURSS-0144 | LABOT | schleichen — hiilima |  |
| ET-KURSS-0145 | LABOT | hängen — riputama |  |
| ET-KURSS-0146 | LABOT | sich setzen — istuma |  |
| ET-KURSS-0147 | LABOT | sich stellen — seisma asetuma |  |
| ET-KURSS-0148 | LABOT | reiten — ratsutama |  |
| ET-KURSS-0149 | LABOT | Tegusõnad küsimusega wo? |  |
| ET-KURSS-0150 | LABOT | sein — olema |  |
| ET-KURSS-0151 | LABOT | arbeiten — töötama |  |
| ET-KURSS-0152 | LABOT | liegen — lamama / lebama |  |
| ET-KURSS-0153 | LABOT | sitzen — istuma |  |
| ET-KURSS-0154 | LABOT | hängen — rippuma |  |
| ET-KURSS-0155 | LABOT | suchen — otsima |  |
| ET-KURSS-0156 | LABOT | spielen — mängima |  |
| ET-KURSS-0157 | LABOT | Ainenimetused |  |
| ET-KURSS-0158 | LABOT | In dem Eimer ist Wasser. — Ämbris on vesi. |  |
| ET-KURSS-0159 | LABOT | Kindel aine |  |
| ET-KURSS-0160 | LABOT | in dem Eimer — ämbris |  |
| ET-KURSS-0161 | LABOT | in dem Zimmer — toas |  |
| ET-KURSS-0162 | LABOT | Tänapäevased vormid |  |
| ET-KURSS-0163 | LABOT | Sõnas wohin on h kuulda: wo-hin. |  |
| ET-KURSS-0164 | LABOT | Sõnas wo on o pikk: wo. |  |
| ET-KURSS-0165 | LABOT | Harjutus |  |
| ET-KURSS-0166 | LABOT | Tõlgi |  |
| ET-KURSS-0167 | LABOT | Eessõnad |  |
| ET-KURSS-0168 | LABOT | vor — ees |  |
| ET-KURSS-0169 | LABOT | über — kohal / üle |  |
| ET-KURSS-0170 | LABOT | Sõnas vor hääldatakse o pikalt. |  |
| ET-KURSS-0171 | LABOT | Sõnas hinter on h kuulda ja e on avatud. |  |
| ET-KURSS-0172 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0172 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0173 | LABOT | Sõnas der Strauch hääldatakse st nagu št. |  |
| ET-KURSS-0174 | LABOT | Sõnas wachsen hääldatakse ch nagu k. |  |
| ET-KURSS-0175 | LABOT | Harjutus |  |
| ET-KURSS-0176 | LABOT | Tõlgi |  |
| ET-KURSS-0177 | LABOT | an dem Tage / am Tage — päeval |  |
| ET-KURSS-0178 | LABOT | in der Nacht — öösel |  |
| ET-KURSS-0179 | LABOT | in dem Sommer / im Sommer — suvel |  |
| ET-KURSS-0180 | LABOT | in dem Januar / im Januar — jaanuaris |  |
| ET-KURSS-0181 | LABOT | vor drei Tagen — kolm päeva tagasi |  |
| ET-KURSS-0182 | LABOT | Eessõna + artikkel |  |
| ET-KURSS-0183 | LABOT | Liitnimisõnad |  |
| ET-KURSS-0184 | LABOT | Liitnimisõnade moodustamine |  |
| ET-KURSS-0185 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0185 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0186 | LABOT | Sõnades der Ofen, der Boden on o pikk. |  |
| ET-KURSS-0187 | LABOT | sch hääldatakse nagu š: der Schornstein, der Mensch. |  |
| ET-KURSS-0188 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0188 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0189 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0189 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0190 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0190 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0191 | LABOT | Sõnas das Vorhaus hääldatakse v nagu f. |  |
| ET-KURSS-0192 | LABOT | Harjutus |  |
| ET-KURSS-0193 | LABOT | Tõlgi |  |
| ET-KURSS-0194 | LABOT | mit dem Mann — mehega |  |
| ET-KURSS-0195 | LABOT | Tänapäevane vorm: vom Feld, vom Berg. |  |
| ET-KURSS-0196 | LABOT | Materjal |  |
| ET-KURSS-0197 | LABOT | Sõnas die Axt hääldatakse x nagu ks. |  |
| ET-KURSS-0198 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0198 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0199 | LABOT | Sõnas die Scheune hääldatakse eu nagu oi. |  |
| ET-KURSS-0200 | LABOT | Sõnas die Brücke hääldatakse ck nagu kahekordset k-d. |  |
| ET-KURSS-0201 | LABOT | Harjutus |  |
| ET-KURSS-0202 | LABOT | Tõlgi |  |
| ET-KURSS-0203 | LABOT | Sõnas „wir“ hääldatakse i-d pikalt. |  |
| ET-KURSS-0204 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0204 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0205 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0205 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0206 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0206 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0207 | LABOT | Wer? küsib inimeste kohta. |  |
| ET-KURSS-0208 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0208 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0209 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0209 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0210 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0210 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0211 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0211 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0212 | LABOT | Arvsõnad, mitmus, täishäälikumuutused ja nimisõnad |  |
| ET-KURSS-0213 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0213 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0214 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0214 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0215 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0215 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0216 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0216 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0217 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0217 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0218 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0218 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0219 | LABOT | schmutzig (šmucich) — määrdunud |  |
| ET-KURSS-0220 | LABOT | Ainsus |  |
| ET-KURSS-0221 | LABOT | Mitmus |  |
| ET-KURSS-0222 | LABOT | Artiklit ei kasutata |  |
| ET-KURSS-0223 | LABOT | seien Sie gesund — olge terve! |  |
| ET-KURSS-0224 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0224 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0225 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0225 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0226 | NELABOT |  | SOURCE_DE_ISSUE — DE source wording (`Was ist der Lehrer?`) is semantically questionable/ambiguous. DE STRICT READ-ONLY; ET unchanged: Kes on õpetaja? |
| ET-KURSS-0227 | NELABOT |  | SOURCE_DE_ISSUE — DE source wording (`Was ist die Lehrerin?`) is semantically questionable/ambiguous. DE STRICT READ-ONLY; ET unchanged: Kes on õpetajanna? |
| ET-KURSS-0228 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0228 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0229 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0229 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0230 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0230 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0231 | LABOT | vene: я имею тетрадь; отец имеет книгу. |  |
| ET-KURSS-0232 | LABOT | Käskiv kõneviis |  |
| ET-KURSS-0233 | LABOT | Kein — ainsus |  |
| ET-KURSS-0234 | LABOT | Kein — mitmus |  |
| ET-KURSS-0235 | LABOT | heißen — nimeks olema (kutsutud olema) |  |
| ET-KURSS-0236 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0236 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0237 | LABOT | Wie kasutatakse võrdsuse väljendamiseks. Als kasutatakse ebavõrdsuse väljendamiseks. |  |
| ET-KURSS-0238 | LABOT | Ülivõrre |  |
| ET-KURSS-0239 | LABOT | der Fuß — jalg |  |
| ET-KURSS-0240 | LABOT | jeder — iga (meessugu) |  |
| ET-KURSS-0241 | LABOT | jede — iga (naissugu) |  |
| ET-KURSS-0242 | LABOT | jedes — iga (kesksugu) |  |
| ET-KURSS-0243 | LABOT | gerade — sirge |  |
| ET-KURSS-0244 | LABOT | tief — sügav |  |
| ET-KURSS-0245 | LABOT | Grammatika |  |
| ET-KURSS-0246 | LABOT | Mitmus ilma lõputa |  |
| ET-KURSS-0247 | LABOT | Mitmus -e-lõpuga |  |
| ET-KURSS-0248 | LABOT | Mitmus lõpuga -en või -n |  |
| ET-KURSS-0249 | LABOT | Mitmus -er-lõpuga |  |
| ET-KURSS-0250 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0250 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0251 | NELABOT |  | CURRENT_ET is already correct Estonian: Hääldus. |
| ET-KURSS-0252 | LABOT | Grammatika |  |
| ET-KURSS-0253 | LABOT | Tegusõnad müssen, wollen ja mögen on modaalverbid. |  |
| ET-KURSS-0254 | NELABOT |  | CURRENT_ET is already correct and matches the proposed value. |
| ET-KURSS-0255 | LABOT | Datiiv |  |
| ET-KURSS-0256 | LABOT | Datiiv vastab küsimusele: wem? — kellele? |  |
| ET-KURSS-0257 | LABOT | Ainsus |  |
| ET-KURSS-0258 | LABOT | Mitmus |  |
| ET-KURSS-0259 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0259 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0260 | LABOT | Kui mitmus juba lõpeb -n-iga |  |
| ET-KURSS-0261 | LABOT | Umlautiga mitmus |  |
| ET-KURSS-0262 | LABOT | Ilma artiklita |  |
| ET-KURSS-0263 | FALSE_POSITIVE |  | Malformed audit row: lessonId/path/CURRENT/PROPOSED are undefined/empty; no production target exists. |
| ET-KURSS-0264 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0264 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0265 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0265 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0266 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0266 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0267 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0267 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0268 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0268 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0269 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0269 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0270 | LABOT | in + koht |  |
| ET-KURSS-0271 | LABOT | Sõnas wohin on h kuulda: wo-hin. |  |
| ET-KURSS-0272 | LABOT | Nemad otsivad metsas marju. |  |
| ET-KURSS-0273 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0273 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0274 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0274 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0275 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0275 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0276 | LABOT | Kokkuvõte: wohin? |  |
| ET-KURSS-0277 | LABOT | Kokkuvõte: wo? |  |
| ET-KURSS-0278 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0278 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0279 | LABOT | Datiiv koos wann-iga? |  |
| ET-KURSS-0280 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0280 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0281 | LABOT | Paljud eessõnad liituvad artikliga. |  |
| ET-KURSS-0282 | LABOT | -e- tüve ja lõpu vahel |  |
| ET-KURSS-0283 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0283 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0284 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0284 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0285 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0285 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0286 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0286 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0287 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0287 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0288 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0288 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0289 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0289 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0290 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0290 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0291 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0291 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0292 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0292 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0293 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0293 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0294 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0294 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0295 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0295 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0296 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0296 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0297 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0297 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0298 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0298 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0299 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0299 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0300 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0300 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0301 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0301 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0302 | LABOT | fleißig — usin |  |
| ET-KURSS-0303 | LABOT | die Säge — saag |  |
| ET-KURSS-0304 | LABOT | aus — seest |  |
| ET-KURSS-0305 | LABOT | von dem Felde / vom Felde — põllult |  |
| ET-KURSS-0306 | LABOT | Kas naisõpilane vastab halvasti? |  |
| ET-KURSS-0307 | LABOT | OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:0307 | OWNER explicitly accepts the exact complete `proposedEt` value for this Audit ID from `reports/temp/et-kurss-full-audit.json`. Materializer must copy it byte-exactly; no reconstruction from truncated markdown. |
| ET-KURSS-0308 | LABOT | loendama |  |
| ET-KURSS-0309 | LABOT | Tagasi põhiekraanile |  |
| ET-KURSS-0310 | LABOT | Saksa keele häälikute ja häälduse alused. |  |
| ET-KURSS-0311 | LABOT | Der, die, das ja nende kasutamise alused. |  |
| ET-KURSS-0312 | LABOT | Õppetunnid järjekorras 1–21. |  |
| ET-KURSS-0313 | LABOT | Der, die, das ja nende kasutamise alused. |  |
| ET-KURSS-0314 | LABOT | Saksa keele häälikute ja häälduse alused |  |
| ET-KURSS-0315 | LABOT | Õppetunnid järjekorras 1–21. |  |
| ET-KURSS-0316 | LABOT | Harjutus |  |
| ET-KURSS-0317 | NELABOT |  | CURRENT_ET and PROPOSED_ET are identical: Muuda lauset. |
| ET-KURSS-0318 | LABOT | Muuda lauset 3. isikus ainsuses. |  |
| ET-KURSS-0319 | LABOT | Muuda lauset 1. isikus mitmuses. |  |
| ET-KURSS-0320 | LABOT | Harjutus I — kasuta õiget käänet |  |
| ET-KURSS-0321 | LABOT | Vali õige kääne ja moodusta mitmus! |  |
| ET-KURSS-0322 | LABOT | Harjutus II — tõlgi |  |
| ET-KURSS-0323 | LABOT | Daativ, geben, sich nähern. |  |

## Coverage

- SOURCE_FINDINGS: **323**
- OWNER_RESOLVED: **323/323**
- LABOT: **310**
- NELABOT: **5**
- FALSE_POSITIVE: **8**
- NEEDS_SOURCE_REVIEW: **0**
- PENDING: **0**
- OWNER_BACKLOG_FINAL: **0**

## Mandatory materialization before apply

Cursor must produce `reports/et-kurss-owner-decisions-accepted-materialized.md` with 323 literal rows:

- exact Audit ID
- exact path
- exact CURRENT from audit JSON / current production
- exact literal OWNER NEW for every LABOT
- final status

Hard gates:

- no `OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:*` directive may remain in the materialized file
- no truncated `…` values in CURRENT or NEW
- actual production value must equal CURRENT before every write
- mismatch → SKIP only that exact row
- apply only LABOT
- NELABOT / FALSE_POSITIVE untouched
- DE untouched
- mirror / syntax / structure / ID-order PASS

**OWNER VERDICT:** `ET_KURSS_OWNER_REVIEW_323_COMPLETE`

All 323 OWNER rows resolved. 310 LABOT applied via PR #637; 5 NELABOT + 8 FALSE_POSITIVE retained unchanged in production.
