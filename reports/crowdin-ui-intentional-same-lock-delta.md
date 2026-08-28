# Crowdin UI — INTENTIONAL_SAME delta (170 → 192)

**Datums:** 2026-08-28  
**Baseline audits commits:** `3812d92b` (pirms placeholder remonta)  
**Pašreizējais stāvoklis:** HEAD (pēc placeholder remonta `ceaae08d`)  
**Apply:** **NĒ**

## Kopsavilkums

| Metrika | Vērtība |
|---|---:|
| BASELINE INTENTIONAL_SAME | **170** |
| CANDIDATES (pašreiz) | **192** |
| DELTA (jauni kandidāti) | **22** |
| Noņemti no baseline | **0** |

## Delta iemesls (kopējais)

Visas **22** jaunās rindas radās, jo placeholder remonts (`ceaae08d`) atjaunoja tehniskos `{...}` tokenus,
un `CURRENT` kļuva **identisks** `LV_SOURCE`. Baseline auditā šīs rindas bija `target !== LV`
(vai ar nepareiziem placeholderiem), tāpēc tās **neietilpa** 170 `INTENTIONAL_SAME` kopā.

**Svarīgi:** šīs 22 rindas **nedrīkst** automātiski apstiprināt kā `NELABOT` — katrai `OWNER_REVIEW_REQUIRED = YES`.

## Delta tabula (22 rindas)

| language | key | LV_SOURCE | CURRENT | iepriekšējais statuss | jaunais statuss | statusa maiņas iemesls | OWNER_REVIEW_REQUIRED |
|---|---|---|---|---|---|---|---|
| ro | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {cod} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| ro | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {current} / {total}. {robinet}` → `{label}: {current} / {total}. {tap}` | YES |
| bg | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {код} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| bg | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {current} / {total}. {докоснете}` → `{label}: {current} / {total}. {tap}` | YES |
| gr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 DE ➔ GR` → `🔄 DE ➔ {code}` | YES |
| gr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 GR ➔ DE` → `🔄 {code} ➔ DE` | YES |
| gr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {current} / {total}. {γίνομαι}` → `{label}: {current} / {total}. {tap}` | YES |
| sq | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {current} / {total}. {faucet}` → `{label}: {current} / {total}. {tap}` | YES |
| mk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {шифра} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| mk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {тековно} / {вкупно}. {допрете}` → `{label}: {current} / {total}. {tap}` | YES |
| sl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {koda} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| sl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {trenutno} / {skupaj}. {tap}` → `{label}: {current} / {total}. {tap}` | YES |
| sr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {koda} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| sr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {trenutno} / {skupaj}. {tap}` → `{label}: {current} / {total}. {tap}` | YES |
| hr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {koda} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| hr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {trenutno} / {skupaj}. {tap}` → `{label}: {current} / {total}. {tap}` | YES |
| pt | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `As filas:` → `🔄 DE ➔ {code}` | YES |
| pt | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {código} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| pt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{tag}: {atual} / {total}. {tocar}` → `{label}: {current} / {total}. {tap}` | YES |
| hu | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 DE ➔ {kód}` → `🔄 DE ➔ {code}` | YES |
| hu | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {code} / virziena kodu: `🔄 {kód} ➔ DE` → `🔄 {code} ➔ DE` | YES |
| hu | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NOT_SAME | INTENTIONAL_SAME | Placeholder remonts atjaunoja {tap} tokenus: `{label}: {current} / {total}. {válik}` → `{label}: {current} / {total}. {tap}` | YES |

### Baseline CURRENT (pirms remonta)

- **ro** `direction.nativeToDe`: `🔄 {cod} ➔ DE` → `🔄 {code} ➔ DE`
- **ro** `verb.hintSessionProgress`: `{label}: {current} / {total}. {robinet}` → `{label}: {current} / {total}. {tap}`
- **bg** `direction.nativeToDe`: `🔄 {код} ➔ DE` → `🔄 {code} ➔ DE`
- **bg** `verb.hintSessionProgress`: `{label}: {current} / {total}. {докоснете}` → `{label}: {current} / {total}. {tap}`
- **gr** `direction.deToNative`: `🔄 DE ➔ GR` → `🔄 DE ➔ {code}`
- **gr** `direction.nativeToDe`: `🔄 GR ➔ DE` → `🔄 {code} ➔ DE`
- **gr** `verb.hintSessionProgress`: `{label}: {current} / {total}. {γίνομαι}` → `{label}: {current} / {total}. {tap}`
- **sq** `verb.hintSessionProgress`: `{label}: {current} / {total}. {faucet}` → `{label}: {current} / {total}. {tap}`
- **mk** `direction.nativeToDe`: `🔄 {шифра} ➔ DE` → `🔄 {code} ➔ DE`
- **mk** `verb.hintSessionProgress`: `{label}: {тековно} / {вкупно}. {допрете}` → `{label}: {current} / {total}. {tap}`
- **sl** `direction.nativeToDe`: `🔄 {koda} ➔ DE` → `🔄 {code} ➔ DE`
- **sl** `verb.hintSessionProgress`: `{label}: {trenutno} / {skupaj}. {tap}` → `{label}: {current} / {total}. {tap}`
- **sr** `direction.nativeToDe`: `🔄 {koda} ➔ DE` → `🔄 {code} ➔ DE`
- **sr** `verb.hintSessionProgress`: `{label}: {trenutno} / {skupaj}. {tap}` → `{label}: {current} / {total}. {tap}`
- **hr** `direction.nativeToDe`: `🔄 {koda} ➔ DE` → `🔄 {code} ➔ DE`
- **hr** `verb.hintSessionProgress`: `{label}: {trenutno} / {skupaj}. {tap}` → `{label}: {current} / {total}. {tap}`
- **pt** `direction.deToNative`: `As filas:` → `🔄 DE ➔ {code}`
- **pt** `direction.nativeToDe`: `🔄 {código} ➔ DE` → `🔄 {code} ➔ DE`
- **pt** `verb.hintSessionProgress`: `{tag}: {atual} / {total}. {tocar}` → `{label}: {current} / {total}. {tap}`
- **hu** `direction.deToNative`: `🔄 DE ➔ {kód}` → `🔄 DE ➔ {code}`
- **hu** `direction.nativeToDe`: `🔄 {kód} ➔ DE` → `🔄 {code} ➔ DE`
- **hu** `verb.hintSessionProgress`: `{label}: {current} / {total}. {válik}` → `{label}: {current} / {total}. {tap}`

