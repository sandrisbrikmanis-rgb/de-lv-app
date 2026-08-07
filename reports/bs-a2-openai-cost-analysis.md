# BS–DE A2 OpenAI API izmaksu un pieprasījumu analīze

**Audita datums:** 2026-08-07  
**Režīms:** Tikai audits — kods, dati un konfigurācija netika mainīti  
**Novērotā kredīta izmaiņa:** ~$98.xx → $70.76 (aptuveni **−$27.2**)

---

## 1. Izmantotais modelis

| Parametrs | Vērtība |
|---|---|
| **Modelis** | `gpt-5.5` |
| **Definīcija** | `scripts/lib/openai-translate.js` → `DEFAULT_MODEL = "gpt-5.5"` |
| **Pārrakstīšana** | `scripts/fix-bs-a2-quality.js` rindā 120: `model: "gpt-5.5"` (galveno tulkojumu batch) |
| **generate-bs-a2-from-lv.js** | Izmanto `translateText()` bez `model` parametra → noklusējums `gpt-5.5` |
| **fix-bs-a2-section-accents.js** | **Nav OpenAI izsaukumu** (tikai lokāla loģika) |
| **Validācijas/audita skripti** | **Nav OpenAI izsaukumu** |

**Secinājums:** Visi BS A2 maksas OpenAI izsaukumi izmantoja **`gpt-5.5`**. Cits modelis netika konstatēts.

---

## 2. Kopējais API pieprasījumu skaits

### Pierādāms no logiem un koda

| Skripts | API pieprasījumi | Avots |
|---|---:|---|
| `generate-bs-a2-from-lv.js` | **4 254** | `/tmp/bs-a2-generate.log`: `4254 to translate via OpenAI` → `4254/4254` |
| `fix-bs-a2-quality.js` — galvenie tulkojumi | **66** | 1 640 ieraksti ÷ 25 (`BATCH_SIZE`) = 66 batch pieprasījumi |
| `fix-bs-a2-quality.js` — LV atlikumi | **134** | `/tmp/bs-a2-quality.log`: `Fixing 134 remnant strings` |
| `fix-bs-a2-section-accents.js` | **0** | Nav OpenAI importu/izsaukumu |
| `audit-language-parity.js` | **0** | Lokāla pārbaude |
| `validate-study-design.js` | **0** | Lokāla pārbaude |
| `audit-mojibake.js` | **0** | Lokāla pārbaude |
| `verify-bs-de-compliance.js` | **0** | Lokāla pārbaude |
| **KOPĀ (pierādāms)** | **4 454** | |

### Svarīgs skaidrojums par skaitļiem

Atskaitē `bs-a2-creation-report.md` minētie skaitļi **nav** tieši API pieprasījumu skaits:

| Metrika | Nozīme | API pieprasījumi? |
|---|---|---|
| 8 200 unikālas virknes | Kopējais unikālo LV/BS virkņu skaits A2 datos | Nē |
| 4 254 OpenAI tulkojumi | `generate` fāzē **nekešotās** virknes | **Jā — 1 pieprasījums = 1 virkne** |
| 1 639 galveno tulkojumu labojumi | Cik ierakstu `lv` lauks tika mainīts pēc kvalitātes labošanas | **Nē — tikai 66 batch pieprasījumi** |
| 134 LV atlikumu labojumi | Unikālas virknes, kas tika pārtulkotas | **Jā — 1 pieprasījums = 1 virkne** |
| 11 242 sectionAccents termini | Lokāli pārbaudīti termini | **Nē — 0 API** |

**4 254 + 1 639 + 134 ≠ API pieprasījumi.**  
Pareizais aprēķins: **4 254 + 66 + 134 = 4 454** atsevišķi OpenAI pieprasījumi.

---

## 3. Kā tiek sūtīti pieprasījumi

### 3.1 `generate-bs-a2-from-lv.js`

| Parametrs | Vērtība |
|---|---|
| Režīms | **Individuāls** — 1 virkne = 1 `client.responses.create()` |
| Batching | **Nav** (tikai 8 paralēli workeri — samazina laiku, ne pieprasījumu skaitu) |
| Vidēji virknes/request | **1.0** |
| Instructions | **~2 273 rakstzīmes** (`buildInstructions()` + CONTEXT) — **atkārtots katrā no 4 254 pieprasījumiem** |
| Input | Viena LV virkne (vidēji ~31 rakstzīme) |
| Kešatmiņa | Pārbauda `cache[text]` pirms API; hit → nav API |
| Retry | **Nav** |

### 3.2 `fix-bs-a2-quality.js` — galvenie tulkojumi

| Parametrs | Vērtība |
|---|---|
| Režīms | **Batch** — 25 kartītes vienā pieprasījumā (`BATCH_SIZE = 25`) |
| Pieprasījumi | **66** (vienmēr visi, neatkarīgi no tā, vai labojums nepieciešams) |
| Vidēji virknes/request | **~24.8** (1 640 ÷ 66) |
| Instructions | Īss: `"Return only numbered Bosnian base-form translations, one per line."` |
| Input prompt | **~2 237 rakstzīmes** vidēji (noteikumi + 25 rindas ar DE/LV/BS) |
| Kešatmiņa | **Netiek pārbaudīta** pirms API — vienmēr izsauc visus 66 batch |
| Retry | **Nav** |

### 3.3 `fix-bs-a2-quality.js` — LV atlikumi

| Parametrs | Vērtība |
|---|---|
| Režīms | **Individuāls** — 1 virkne = 1 `translateText()` |
| Pieprasījumi | **134** |
| Instructions | Pilns `buildInstructions()` (~2 273 rakstzīmes) — **katrā pieprasījumā** |
| Kešatmiņa | **Netiek pārbaudīta** pirms API (pēc tulkošanas raksta kešā) |
| Retry | **Nav** |

### 3.4 `fix-bs-a2-section-accents.js`

**OpenAI netiek izmantots.** 11 242 termini apstrādāti lokāli (LV→BS mapping, fuzzy match, drop). Šis posms **neveido API izmaksas**.

---

## 4. Kešatmiņas analīze

### Izmantotie keši

| Fails | Loma |
|---|---|
| `scripts/.bs-lv-translation-cache.json` | Google Translate LV→BS (visi līmeņi) — **sēkla** `generate` laikā |
| `scripts/.bs-a2-openai-translation-cache.json` | OpenAI tulkojumu kešs A2 pipeline |
| `scripts/.bs-a1-openai-translation-cache.json` | A1 OpenAI kešs — **netiek izmantots** A2 skriptā |

### `generate-bs-a2-from-lv.js` efektivitāte

| Metrika | Vērtība |
|---|---:|
| Unikālās virknes A2 | 8 200 |
| No Google keša (sēkla) | 3 946 |
| OpenAI tulkošanas (log) | **4 254** |
| Kešatmiņas hit rate generate fāzē | **48.1%** (3 946/8 200) |

### Keša faila izmērs pēc palaišanas

- `.bs-a2-openai-translation-cache.json`: **19 191 atslēgas**
- Iemesls: `seedCacheFromGoogle()` ielādē **visu** `.bs-lv-translation-cache.json` saturu (visi līmeņi), ne tikai A2 virknes
- Tas **neizraisa** papildu API pieprasījumus, bet padara keša failu lielu un mulsinošu

### Atkārtota tulkošana (konstatēta)

| Problēma | Apjoms | Pierādījums |
|---|---|---|
| LV atlikumi jau kešā, bet tulkoti atkārtoti | **134/134** | Visas `remnantFixes.before` virknes eksistēja `.bs-a2-openai-translation-cache.json` pirms `fixRemnantStrings` beigām |
| A1 kešā esošas A2 virknes, bet nav A2 sēklas | **279** no 4 254 pending | A2 skripts nesēklē no `.bs-a1-openai-translation-cache.json` |
| Galveno tulkojumu batch bez keša pārbaudes | **66** pieprasījumi vienmēr | `fixMainTranslations()` nekad neizlaiž batch |
| Case-only labojumi caur API | **854** no 1 639 | `before.toLowerCase() === after.toLowerCase()` |

### Keša atslēgu loģika

- **Precīza virknes atbilstība** (`cache[text]`) — atšķirības whitespace/case/formāta dēļ iespējams cache miss
- `postProcess()` normalizē atstarpes un `•`, bet **ne** reģistru

---

## 5. Token usage dati

### Vai saglabāti?

| Datu avots | `input_tokens` / `output_tokens` / `usage` |
|---|---|
| `openai-translate.js` | **Nav** — atgriež tikai `response.output_text` |
| `fix-bs-a2-quality.js` | **Nav** — nelasa `response.usage` |
| Log faili (`/tmp/bs-a2-*.log`) | **Nav** token datu |
| Kešatmiņa | **Nav** token datu |
| `reports/temp/` | **Nav** usage failu |

**Secinājums:** Faktiski `input_tokens`, `output_tokens`, `cached_input_tokens` un `total_tokens` **nav saglabāti**. Precīzu tokenu statistiku **nevar** atgūt pēc facta.

### Aprēķināts diapazons (ESTIMATE — ne fakts)

Balstīts uz rakstzīmju skaitu analīzi (instrukcijas + input + output):

| Posms | Aprēķinātas input rakstzīmes | Aprēķinātas output rakstzīmes |
|---|---:|---:|
| generate (4 254 req) | ~9 800 000 | ~93 600 |
| quality batch (66 req) | ~148 000 | ~19 680 |
| remnants (134 req) | ~370 000 | ~4 000 |
| **Kopā (estimate)** | **~10 315 000** | **~117 000** |
| **Kopā tokeni (÷4 heuristika)** | **~2 608 000** | |

Vidēji uz vienu pieprasījumu (estimate):

| Posms | Vid. input tokens | Vid. output tokens |
|---|---:|---:|
| generate (1 virkne/req) | ~2 300 | ~6 |
| quality batch (25 virknes/req) | ~8 400 | ~75 |
| remnants (1 virkne/req) | ~2 750 | ~8 |

---

## 6. Izmaksu analīze

### Ko var pierādīt

1. **4 454** atsevišķi OpenAI pieprasījumi ar modeli `gpt-5.5`
2. Galvenais izmaksu dzinējs: **4 254 individuālie generate pieprasījumi** ar garu instrukciju (~2 273 rakstzīmes) katrā
3. Novērotā kredīta samazinājums **~$27.2** labi korelē ar 4 454 pieprasījumiem:

| Vidējās izmaksas uz pieprasījumu (estimate) | Kopējās izmaksas (estimate) |
|---:|---:|
| $0.004 | ~$17.8 |
| **$0.006** | **~$26.7** ← tuvu novērotajam $27.2 |
| $0.008 | ~$35.6 |

### Ko nevar pierādīt

- Precīzu USD summu pa posmiem (nav `usage` datu un nav piekļuves OpenAI billing API)
- Vai visa $27.2 samazinājuma daļa ir **tikai** A2 (iespējami citi konta izsaukumi ārpus šī workspace)
- `gpt-5.5` oficiālo cenu uz megatonu šajā vidē

### Izmaksu sadalījums (estimate, ja ~$27.2 kopā)

| Posms | Pieprasījumi | Aptuvena īpatsvars | Estimate USD |
|---|---:|---:|---:|
| 1. Sākotnējā tulkošana (`generate`) | 4 254 | **~90–93%** | **~$24–25** |
| 2. Galveno tulkojumu labojumi (`quality` batch) | 66 | **~4–6%** | **~$1–1.5** |
| 3. LV atlikumu labojumi (`quality` remnants) | 134 | **~3–5%** | **~$0.8–1.2** |
| 4. sectionAccents | 0 | 0% | $0 |
| 5. AI audits | 0 | 0% | $0 |
| **Kopā** | **4 454** | **100%** | **~$27** |

---

## 7. Galvenais izmaksu cēlonis

**Dominējošais faktors:** `generate-bs-a2-from-lv.js` sūta **4 254 atsevišķus** API pieprasījumus, katrā atkārtoti nosūtot **~2 273 rakstzīmju instrukciju** (17 noteikumi + CONTEXT), pat īsām virknēm:

- **508** no 4 254 pending virknēm ir ≤5 rakstzīmes
- **984** no 8 200 unikālajām virknēm ir ≤5 rakstzīmes
- Katrai īsai virknei (piem., `"reiz"`, `"uz"`, `"kā"`) tiek maksāta pilna instrukcijas cena

**Otrs faktors:** `fix-bs-a2-quality.js` veic **66 obligātus batch** + **134 atkārtotus** remnant pieprasījumus bez keša pārbaudes.

**Nav izmaksu faktors:** `fix-bs-a2-section-accents.js` — pilnībā lokāls.

---

## 8. Nevajadzīgs API patēriņš (konstatēts)

| Problēma | Apjoms | Ietekme |
|---|---|---|
| Garas instrukcijas katrā generate pieprasījumā | 4 254× | **HIGH** izmaksas |
| Īsu virkņu individuāla tulkošana | 508+ pieprasījumi | **HIGH** izmaksas |
| Remnant tulkošana bez keša pārbaudes | 134 lieki pieprasījumi | **MEDIUM** |
| A1 kešs netiek izmantots A2 sēklai | 279 potenciāli lieki generate pieprasījumi | **LOW–MEDIUM** |
| Quality batch vienmēr izpildās (66×) | Pat ja 1/1640 nemainās | **LOW** (batch ir efektīvs) |
| Case-only labojumi caur API | 854 no 1 639 | **MEDIUM** (lokāli atrisināms) |
| sectionAccents caur API | 0 | Nav problēmas |
| Retry cilpas | 0 | Nav konstatēts |
| Validācijas skripti caur API | 0 | Nav problēmas |

---

## 9. Optimizācijas ieteikumi (tikai dokumentācija)

| # | Ieteikums | Ietaupījums | Kvalitātes risks | Standarts |
|---|---|---|---|---|
| 1 | **Batching generate fāzē** (piem., 20–50 virknes/request) | **HIGH** (50–80% generate izmaksu) | LOW–MEDIUM | Saglabā, ja prompts labi strukturēts |
| 2 | **Īsāks instructions / prompt caching** OpenAI Responses API | **HIGH** (30–50% input) | LOW | Saglabā |
| 3 | **Keša pārbaude** `fixRemnantStrings` + sēkla no A1 keša | **MEDIUM** (134+279 lieki req) | Nav | Saglabā |
| 4 | **Lokāla case normalizācija** pirms quality batch | **MEDIUM** (854 lieki API labojumi) | Nav | Uzlabo |
| 5 | **Skip quality batch**, ja `lv` jau pareizā formā | **LOW** | LOW | Saglabā |
| 6 | sectionAccents | Jau lokāls | — | Jau optimāli |
| 7 | Lētāks modelis (piem., GPT-5.6 Luna) generate posmam | **HIGH** izmaksu | **MEDIUM–HIGH** | Jātestē |
| 8 | OpenAI Batch API nakts režīmā | **MEDIUM** (cena) | LOW | Der, ja nav steidzami |

### Vai mainīt pipeline pirms B1?

**JĀ — ieteicams.** B1 (~1 500+ ieraksti, vēl vairāk Study virkņu) ar pašreizējo individuālo generate modeli var izmaksāt **$50–80+** (estimate, balstoties uz A2 mērogu). Pirms B1 obligāti:

1. Ieviest batching generate fāzē
2. Pievienot keša pārbaudes visos posmos
3. Saglabāt `usage` metrikas katrā API atbildē nākotnes auditiem
4. Sēklēt no A1+A2 OpenAI kešiem

---

## 10. Secinājums par $98 → $70.76

| Jautājums | Atbilde |
|---|---|
| Vai A2 pipeline izraisīja ~$27 samazinājumu? | **Ļoti ticami JĀ** — 4 454 pierādāmi pieprasījumi ar `gpt-5.5` labi atbilst ~$27 pie ~$0.006/request |
| Vai 6 027 pieprasījumi? | **NĒ** — pareizais skaits ir **4 454** |
| Vai sectionAccents patērēja API? | **NĒ** |
| Vai auditi patērēja API? | **NĒ** |
| Vai token/usage dati pieejami? | **NĒ** |
| Galvenais cēlonis? | **4 254 individuālie generate pieprasījumi ar atkārtotu garu instrukciju** |

---

## 11. Apliecinājumi

1. Audita laikā **netika veikti** jauni OpenAI API pieprasījumi.
2. **Netika mainīti** skripti, dati, `.env` vai konfigurācija.
3. Analīze balstīta uz: skriptu kodu, `/tmp/bs-a2-generate.log`, `/tmp/bs-a2-quality.log`, `/tmp/bs-a2-section-accents.log`, `.bs-a2-openai-translation-cache.json`, `.bs-a2-quality-fix-report.json`.

---

## 12. Izveidotie faili

| Fails | Git |
|---|---|
| `reports/bs-a2-openai-cost-analysis.md` | Jā (šis dokuments) |

---

*Atskaite izveidota 2026-08-07*
