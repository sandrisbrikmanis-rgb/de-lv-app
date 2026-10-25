# Pilot lemma verification — `bg`, `bs`, `fr`

Generated: 2026-09-30T16:38:00.000Z

Pilotlemmas (DE): **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier**.

Reverse (production Haus): **fr** `Maison`, **bg** `къща`, **bs** `kuća`.

## Kopsavilkums

| Valoda | Avots | DE→TARGET (6 pilotiem) | Apgriezti (Haus) | Status |
|--------|-------|-------------------------|------------------|--------|
| **fr** | Sachs–Villatte 1906 (IA OCR) | **3/6** | `Maison` → jā | **PARTIAL** |
| **fr** | Mozin 1823 A–K (baseline) | **3/6** | `Maison` → jā | PARTIAL (salīdz.) |
| **bg** | MDZ Miladinov vol.I (IIIF + OCR paraugs) | **2/6** | `къща` — nav pārbaudīts | **PARTIAL** |
| **bs** | — | **0/6** | `kuća` — n/a | **NOT_FOUND** |

## `fr` — detaļas

| Lemma | Sachs–Villatte | Mozin DE A–K |
|-------|----------------|--------------|
| Haus | ✅ | ✅ |
| arbeiten | ✅ | ✅ |
| Kleingeld | ❌ | ❌ |
| bewirten | ✅ | ✅ |
| Grenzkonflikt | ❌ | ❌ |
| Machtgier | ❌ | ❌ |

- **Apgriezts:** `Maison` OCR ✅ (Sachs un Mozin FR vol.1).
- **Secinājums:** abi avoti vienādi **PARTIAL** uz modernajiem salikteņiem; Sachs joprojām labāks kā **digitizēts pilns** avots (round 2/3).

## `bg` — detaļas

| Lemma | MDZ Miladinov vol.I (OCR paraugs) |
|-------|-----------------------------------|
| Haus | ✅ (~lp. 120) |
| arbeiten | ✅ (~lp. 280; iespējams apakšvirkne) |
| Kleingeld | ❌ |
| bewirten | ❌ |
| Grenzkonflikt | ❌ |
| Machtgier | ❌ |

- Avots: https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1
- **Secinājums:** digitizētais skens **strādā** pamata lemmām; pilnam pilotam vajadzīgs pilns MDZ OCR vai HathiTrust vol. II + `къща` reversam.

## `bs` — detaļas

Visi 6 pilotlemmas: **❌** — nav digitizētas DE↔BS vārdnīcas (fiziskās grāmatas netiek skaitītas).
