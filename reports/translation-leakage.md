# Translation leakage

Šis audits klasificē tulkojumu sakritības. Tas nepiedāvā pareizo tulkojumu un nemaina datus.

## Kontrole C1[553] Wetterleuchten

LV vērtība HEAD: rūsa. de=Wetterleuchten.

| valoda | vērtība | pārbaudes |
|---|---|---|
| bg | Ръжда | FAMILY_COPY |
| bs | Hrđa |  |
| cs | Vzdálené blýskání |  |
| da | Rust |  |
| en | Sheet lightning |  |
| es | resplandor de tormenta |  |
| et | hõõguv välk |  |
| fi | Hõõguv välk | FAMILY_COPY |
| fr | Rouiller |  |
| gr | Λαμπερή αστραπή |  |
| hr | Ръжда | FAMILY_COPY, SCRIPT_MISMATCH |
| hu | Rozsda |  |
| is | Hõõguv välk | FAMILY_COPY |
| it | Rūsa | FAMILY_COPY, LV_DIACRITIC |
| lb | Rūsa | FAMILY_COPY, LV_DIACRITIC |
| lt | rūdys |  |
| mk | Ръжда | FAMILY_COPY |
| nb | Hõõguv välk | FAMILY_COPY |
| nl | Rūsa | FAMILY_COPY, LV_DIACRITIC |
| nn | Hõõguv välk | FAMILY_COPY |
| pl | Rdza | FAMILY_COPY |
| pt | Rusa |  |
| ro | Rugini |  |
| ru | Ржавчина |  |
| sk | Rdza | FAMILY_COPY |
| sl | rūsa | COGNATE_REVIEW, LV_DIACRITIC |
| sq | Rdza | FAMILY_COPY |
| sr | Ръжда | FAMILY_COPY, SCRIPT_MISMATCH_SR_LATIN |
| sv | Hõõguv välk | FAMILY_COPY |
| tr | Rdza | FAMILY_COPY |
| uk | іржа |  |

pt vērtība ir ziņojama arī bez klases: Rusa.

et vērtība `hõõguv välk` nav baitiski vienāda ar fi/sv/nb/nn/is vērtību `Hõõguv välk`, tāpēc et nav šajā FAMILY_COPY grupā. Grupa ir šīs piecas valodas savā starpā.

sr C1[553] kirilicas pieņēmumā nav SCRIPT_MISMATCH, jo vērtība ir kirilicā. Latīņu pieņēmumā tā ir SCRIPT_MISMATCH_SR_LATIN. Abi varianti ir uzrādīti; neviens nav izvēlēts.

## Lauki

Tulkojuma lauks LV un visās 31 mērķvalodā ir `lv`. Vācu lauki ir `de`, `de_article`, `de_plural`. Netiek skatīti `level`, `study` un `id`.

```text
MASTER VERSION: 1.18
AUDIT MODE: TRANSLATION_LEAKAGE
ORIGIN_MAIN_SHA: f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d
BRANCH: cursor/plural-leakage-audit-f86b
DATE: 2026-10-04
DATASET_PRODUCTION_SHA/BLOB: 0db2b98b354f5269a277b288309371c35698c72d711da2ec80b8b090da6e7e39
LAST FINAL CLOSURE: NOT_RECORDED_FOR_LV_DE_WORDLIST
LAST FINAL CLOSURE MAIN SHA:
LAST FINAL CLOSURE DATASET BLOB:
UNMERGED CLOSURE/REPAIR FOUND: #855 #856 #858 #859 OPEN; this branch is origin/main and does not merge them
BASELINE STATUS: PASS
OWNER HISTORY AVAILABLE: NO
OWNER HISTORY FILES LOADED: 0
OWNER APPROVED FIELDS TOTAL/CHECKED/MATCHING/DRIFTED: 0/0/0/0
OWNER HISTORY GATE: NOT_RUN
RAW AUDIT HISTORY GATE: NOT_APPLICABLE
DISCOVERY CHURN RATE: 0
AUDIT_DISCOVERY_NON_REPRODUCIBILITY: 0
DE READ-ONLY: YES
```

Ieraksti katrā valodā: 8618. www salīdzinājums ar data: IDENTICAL.

## Valoda × pārbaude

| valoda | SAME_AS_LV | % | COGNATE_REVIEW | LV_DIACRITIC | % | SCRIPT_MISMATCH | % | FAMILY_COPY | % | problēmu ieraksti |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| bg | 0 | 0.00% | 1 | 0 | 0.00% | 22 | 0.26% | 7622 | 88.44% | 7625 |
| bs | 26 | 0.30% | 2 | 0 | 0.00% | 1 | 0.01% | 661 | 7.67% | 688 |
| cs | 0 | 0.00% | 1 | 1 | 0.01% | 1 | 0.01% | 702 | 8.15% | 703 |
| da | 0 | 0.00% | 1 | 0 | 0.00% | 0 | 0.00% | 796 | 9.24% | 796 |
| en | 1 | 0.01% | 1 | 0 | 0.00% | 0 | 0.00% | 912 | 10.58% | 913 |
| es | 14 | 0.16% | 3 | 0 | 0.00% | 0 | 0.00% | 52 | 0.60% | 66 |
| et | 22 | 0.26% | 2 | 45 | 0.52% | 0 | 0.00% | 56 | 0.65% | 123 |
| fi | 1 | 0.01% | 1 | 51 | 0.59% | 0 | 0.00% | 8580 | 99.56% | 8581 |
| fr | 0 | 0.00% | 1 | 0 | 0.00% | 0 | 0.00% | 634 | 7.36% | 634 |
| gr | 0 | 0.00% | 1 | 0 | 0.00% | 40 | 0.46% | 15 | 0.17% | 40 |
| hr | 0 | 0.00% | 0 | 0 | 0.00% | 7902 | 91.69% | 8607 | 99.87% | 8607 |
| hu | 0 | 0.00% | 1 | 0 | 0.00% | 0 | 0.00% | 188 | 2.18% | 188 |
| is | 0 | 0.00% | 1 | 46 | 0.53% | 0 | 0.00% | 8604 | 99.84% | 8604 |
| it | 8 | 0.09% | 5 | 4687 | 54.39% | 7 | 0.08% | 7474 | 86.73% | 7630 |
| lb | 8 | 0.09% | 6 | 5014 | 58.18% | 2 | 0.02% | 7351 | 85.30% | 7397 |
| lt | 131 | 1.52% | 30 | 0 | 0.00% | 0 | 0.00% | 45 | 0.52% | 176 |
| mk | 0 | 0.00% | 0 | 0 | 0.00% | 20 | 0.23% | 8365 | 97.06% | 8365 |
| nb | 0 | 0.00% | 1 | 46 | 0.53% | 0 | 0.00% | 8614 | 99.95% | 8614 |
| nl | 8 | 0.09% | 6 | 5577 | 64.71% | 0 | 0.00% | 7814 | 90.67% | 8240 |
| nn | 0 | 0.00% | 1 | 46 | 0.53% | 0 | 0.00% | 8612 | 99.93% | 8612 |
| pl | 0 | 0.00% | 0 | 0 | 0.00% | 0 | 0.00% | 6648 | 77.14% | 6648 |
| pt | 1 | 0.01% | 2 | 2809 | 32.59% | 5 | 0.06% | 3883 | 45.06% | 4734 |
| ro | 0 | 0.00% | 1 | 0 | 0.00% | 0 | 0.00% | 578 | 6.71% | 578 |
| ru | 0 | 0.00% | 0 | 0 | 0.00% | 7 | 0.08% | 3444 | 39.96% | 3445 |
| sk | 0 | 0.00% | 1 | 0 | 0.00% | 0 | 0.00% | 6572 | 76.26% | 6572 |
| sl | 7570 | 87.84% | 332 | 5245 | 60.86% | 0 | 0.00% | 177 | 2.05% | 7902 |
| sq | 0 | 0.00% | 1 | 0 | 0.00% | 0 | 0.00% | 7337 | 85.14% | 7337 |
| sr | 0 | 0.00% | 0 | 128 | 1.49% | 713 | 8.27% | 8582 | 99.58% | 8586 |
| sv | 0 | 0.00% | 1 | 51 | 0.59% | 0 | 0.00% | 8573 | 99.48% | 8573 |
| tr | 0 | 0.00% | 1 | 0 | 0.00% | 0 | 0.00% | 7358 | 85.38% | 7358 |
| uk | 44 | 0.51% | 12 | 0 | 0.00% | 117 | 1.36% | 4 | 0.05% | 121 |

sr latīņu pieņēmuma SCRIPT_MISMATCH nav šajā kolonnā. Tas ir atsevišķi:

| sr kā latīņu | 7918 | 91.88% |

## Top 20

| valoda | problēmu ieraksti | karogu summa |
|---|---:|---:|
| nb | 8614 | 8660 |
| nn | 8612 | 8658 |
| hr | 8607 | 16509 |
| is | 8604 | 8650 |
| sr | 8586 | 9423 |
| fi | 8581 | 8632 |
| sv | 8573 | 8624 |
| mk | 8365 | 8385 |
| nl | 8240 | 13399 |
| sl | 7902 | 12992 |
| it | 7630 | 12176 |
| bg | 7625 | 7644 |
| lb | 7397 | 12375 |
| tr | 7358 | 7358 |
| sq | 7337 | 7337 |
| pl | 6648 | 6648 |
| sk | 6572 | 6572 |
| pt | 4734 | 6698 |
| ru | 3445 | 3451 |
| en | 913 | 913 |

Problēmu ieraksts ir level+indekss ar vismaz vienu no SAME_AS_LV, LV_DIACRITIC, SCRIPT_MISMATCH, FAMILY_COPY. COGNATE_REVIEW un sr latīņu pieņēmums šajā skaitā nav.

## Sadalījums pa līmeņiem

Katras pārbaudes skaits ir karogu summa visās 31 valodā. Procenti ir no līmeņa ierakstu skaita reiz 31. Problēmu ieraksti ir unikāli valoda+indekss ar vismaz vienu no SAME_AS_LV, LV_DIACRITIC, SCRIPT_MISMATCH, FAMILY_COPY.

Problēmu ierakstu īpatsvars: A1 39.34%, A2 52.72%, B1 56.29%, B2 60.40%, C1 59.85%, C2 60.01%.

| līmenis | ieraksti | SAME_AS_LV | % | COGNATE_REVIEW | % | LV_DIACRITIC | % | SCRIPT_MISMATCH | % | FAMILY_COPY | % | problēmu ieraksti | % |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| A1 | 702 | 33 | 0.15% | 41 | 0.19% | 548 | 2.52% | 697 | 3.20% | 8243 | 37.88% | 8561 | 39.34% |
| A2 | 1640 | 1594 | 3.14% | 140 | 0.28% | 3532 | 6.95% | 1705 | 3.35% | 24807 | 48.79% | 26802 | 52.72% |
| B1 | 3367 | 3298 | 3.16% | 181 | 0.17% | 8972 | 8.60% | 3429 | 3.29% | 55040 | 52.73% | 58751 | 56.29% |
| B2 | 2118 | 2110 | 3.21% | 49 | 0.07% | 7709 | 11.74% | 2199 | 3.35% | 37086 | 56.48% | 39655 | 60.40% |
| C1 | 572 | 578 | 3.26% | 5 | 0.03% | 2165 | 12.21% | 581 | 3.28% | 9885 | 55.75% | 10613 | 59.85% |
| C2 | 219 | 221 | 3.26% | 0 | 0.00% | 820 | 12.08% | 226 | 3.33% | 3799 | 55.96% | 4074 | 60.01% |

sr latīņu pieņēmums pa līmeņiem (nav iepriekšējā SCRIPT_MISMATCH kolonnā):

| līmenis | SCRIPT_MISMATCH_SR_LATIN | % no līmeņa ierakstiem |
|---|---:|---:|
| A1 | 472 | 67.24% |
| A2 | 1476 | 90.00% |
| B1 | 3168 | 94.09% |
| B2 | 2036 | 96.13% |
| C1 | 554 | 96.85% |
| C2 | 212 | 96.80% |

Valoda × līmenis. Procenti ir no šī līmeņa ierakstiem vienā valodā.

| valoda | līmenis | SAME_AS_LV | % | COGNATE_REVIEW | % | LV_DIACRITIC | % | SCRIPT_MISMATCH | % | FAMILY_COPY | % |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| bg | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 4 | 0.57% | 466 | 66.38% |
| bg | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 0.24% | 1335 | 81.40% |
| bg | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 9 | 0.27% | 2961 | 87.94% |
| bg | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 0.19% | 2089 | 98.63% |
| bg | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.17% | 554 | 96.85% |
| bg | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 217 | 99.09% |
| bs | A1 | 8 | 1.14% | 2 | 0.28% | 0 | 0.00% | 0 | 0.00% | 182 | 25.93% |
| bs | A2 | 18 | 1.10% | 0 | 0.00% | 0 | 0.00% | 1 | 0.06% | 57 | 3.48% |
| bs | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 309 | 9.18% |
| bs | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 95 | 4.49% |
| bs | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 17 | 2.97% |
| bs | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% |
| cs | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 168 | 23.93% |
| cs | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 167 | 10.18% |
| cs | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.03% | 268 | 7.96% |
| cs | B2 | 0 | 0.00% | 0 | 0.00% | 1 | 0.05% | 0 | 0.00% | 84 | 3.97% |
| cs | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 11 | 1.92% |
| cs | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 1.83% |
| da | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 94 | 13.39% |
| da | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 225 | 13.72% |
| da | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 332 | 9.86% |
| da | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 125 | 5.90% |
| da | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 16 | 2.80% |
| da | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 1.83% |
| en | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 85 | 12.11% |
| en | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 208 | 12.68% |
| en | B1 | 1 | 0.03% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 434 | 12.89% |
| en | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 158 | 7.46% |
| en | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 22 | 3.85% |
| en | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 5 | 2.28% |
| es | A1 | 4 | 0.57% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 17 | 2.42% |
| es | A2 | 3 | 0.18% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 22 | 1.34% |
| es | B1 | 3 | 0.09% | 2 | 0.06% | 0 | 0.00% | 0 | 0.00% | 10 | 0.30% |
| es | B2 | 2 | 0.09% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 3 | 0.14% |
| es | C1 | 2 | 0.35% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% |
| es | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% |
| et | A1 | 0 | 0.00% | 1 | 0.14% | 3 | 0.43% | 0 | 0.00% | 16 | 2.28% |
| et | A2 | 7 | 0.43% | 0 | 0.00% | 6 | 0.37% | 0 | 0.00% | 26 | 1.59% |
| et | B1 | 8 | 0.24% | 1 | 0.03% | 22 | 0.65% | 0 | 0.00% | 3 | 0.09% |
| et | B2 | 5 | 0.24% | 0 | 0.00% | 10 | 0.47% | 0 | 0.00% | 7 | 0.33% |
| et | C1 | 1 | 0.17% | 0 | 0.00% | 3 | 0.52% | 0 | 0.00% | 4 | 0.70% |
| et | C2 | 1 | 0.46% | 0 | 0.00% | 1 | 0.46% | 0 | 0.00% | 0 | 0.00% |
| fi | A1 | 0 | 0.00% | 1 | 0.14% | 3 | 0.43% | 0 | 0.00% | 665 | 94.73% |
| fi | A2 | 0 | 0.00% | 0 | 0.00% | 6 | 0.37% | 0 | 0.00% | 1640 | 100.00% |
| fi | B1 | 0 | 0.00% | 0 | 0.00% | 22 | 0.65% | 0 | 0.00% | 3367 | 100.00% |
| fi | B2 | 0 | 0.00% | 0 | 0.00% | 15 | 0.71% | 0 | 0.00% | 2118 | 100.00% |
| fi | C1 | 1 | 0.17% | 0 | 0.00% | 4 | 0.70% | 0 | 0.00% | 571 | 99.83% |
| fi | C2 | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 0 | 0.00% | 219 | 100.00% |
| fr | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 54 | 7.69% |
| fr | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 173 | 10.55% |
| fr | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 294 | 8.73% |
| fr | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 90 | 4.25% |
| fr | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 19 | 3.32% |
| fr | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 1.83% |
| gr | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 2 | 0.28% | 1 | 0.14% |
| gr | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 9 | 0.55% | 7 | 0.43% |
| gr | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 8 | 0.24% | 4 | 0.12% |
| gr | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 17 | 0.80% | 3 | 0.14% |
| gr | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% |
| gr | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 1.83% | 0 | 0.00% |
| hr | A1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 456 | 64.96% | 691 | 98.43% |
| hr | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1476 | 90.00% | 1640 | 100.00% |
| hr | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 3168 | 94.09% | 3367 | 100.00% |
| hr | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 2036 | 96.13% | 2118 | 100.00% |
| hr | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 554 | 96.85% | 572 | 100.00% |
| hr | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 212 | 96.80% | 219 | 100.00% |
| hu | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 31 | 4.42% |
| hu | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 50 | 3.05% |
| hu | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 66 | 1.96% |
| hu | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 35 | 1.65% |
| hu | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 0.70% |
| hu | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 2 | 0.91% |
| is | A1 | 0 | 0.00% | 1 | 0.14% | 1 | 0.14% | 0 | 0.00% | 688 | 98.01% |
| is | A2 | 0 | 0.00% | 0 | 0.00% | 4 | 0.24% | 0 | 0.00% | 1640 | 100.00% |
| is | B1 | 0 | 0.00% | 0 | 0.00% | 21 | 0.62% | 0 | 0.00% | 3367 | 100.00% |
| is | B2 | 0 | 0.00% | 0 | 0.00% | 15 | 0.71% | 0 | 0.00% | 2118 | 100.00% |
| is | C1 | 0 | 0.00% | 0 | 0.00% | 4 | 0.70% | 0 | 0.00% | 572 | 100.00% |
| is | C2 | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 0 | 0.00% | 219 | 100.00% |
| it | A1 | 0 | 0.00% | 1 | 0.14% | 87 | 12.39% | 1 | 0.14% | 344 | 49.00% |
| it | A2 | 0 | 0.00% | 0 | 0.00% | 453 | 27.62% | 4 | 0.24% | 1073 | 65.43% |
| it | B1 | 5 | 0.15% | 0 | 0.00% | 1921 | 57.05% | 1 | 0.03% | 3181 | 94.48% |
| it | B2 | 3 | 0.14% | 3 | 0.14% | 1605 | 75.78% | 1 | 0.05% | 2093 | 98.82% |
| it | C1 | 0 | 0.00% | 1 | 0.17% | 451 | 78.85% | 0 | 0.00% | 565 | 98.78% |
| it | C2 | 0 | 0.00% | 0 | 0.00% | 170 | 77.63% | 0 | 0.00% | 218 | 99.54% |
| lb | A1 | 0 | 0.00% | 1 | 0.14% | 48 | 6.84% | 0 | 0.00% | 84 | 11.97% |
| lb | A2 | 0 | 0.00% | 0 | 0.00% | 813 | 49.57% | 1 | 0.06% | 1310 | 79.88% |
| lb | B1 | 5 | 0.15% | 0 | 0.00% | 1933 | 57.41% | 0 | 0.00% | 3101 | 92.10% |
| lb | B2 | 3 | 0.14% | 4 | 0.19% | 1599 | 75.50% | 1 | 0.05% | 2075 | 97.97% |
| lb | C1 | 0 | 0.00% | 1 | 0.17% | 451 | 78.85% | 0 | 0.00% | 563 | 98.43% |
| lb | C2 | 0 | 0.00% | 0 | 0.00% | 170 | 77.63% | 0 | 0.00% | 218 | 99.54% |
| lt | A1 | 17 | 2.42% | 11 | 1.57% | 0 | 0.00% | 0 | 0.00% | 13 | 1.85% |
| lt | A2 | 30 | 1.83% | 9 | 0.55% | 0 | 0.00% | 0 | 0.00% | 24 | 1.46% |
| lt | B1 | 59 | 1.75% | 6 | 0.18% | 0 | 0.00% | 0 | 0.00% | 7 | 0.21% |
| lt | B2 | 19 | 0.90% | 4 | 0.19% | 0 | 0.00% | 0 | 0.00% | 1 | 0.05% |
| lt | C1 | 5 | 0.87% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% |
| lt | C2 | 1 | 0.46% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% |
| mk | A1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.14% | 601 | 85.61% |
| mk | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 3 | 0.18% | 1575 | 96.04% |
| mk | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 9 | 0.27% | 3297 | 97.92% |
| mk | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 5 | 0.24% | 2105 | 99.39% |
| mk | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.17% | 569 | 99.48% |
| mk | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 218 | 99.54% |
| nb | A1 | 0 | 0.00% | 1 | 0.14% | 1 | 0.14% | 0 | 0.00% | 698 | 99.43% |
| nb | A2 | 0 | 0.00% | 0 | 0.00% | 4 | 0.24% | 0 | 0.00% | 1640 | 100.00% |
| nb | B1 | 0 | 0.00% | 0 | 0.00% | 21 | 0.62% | 0 | 0.00% | 3367 | 100.00% |
| nb | B2 | 0 | 0.00% | 0 | 0.00% | 15 | 0.71% | 0 | 0.00% | 2118 | 100.00% |
| nb | C1 | 0 | 0.00% | 0 | 0.00% | 4 | 0.70% | 0 | 0.00% | 572 | 100.00% |
| nb | C2 | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 0 | 0.00% | 219 | 100.00% |
| nl | A1 | 0 | 0.00% | 1 | 0.14% | 292 | 41.60% | 0 | 0.00% | 244 | 34.76% |
| nl | A2 | 0 | 0.00% | 0 | 0.00% | 962 | 58.66% | 0 | 0.00% | 1405 | 85.67% |
| nl | B1 | 5 | 0.15% | 0 | 0.00% | 2077 | 61.69% | 0 | 0.00% | 3278 | 97.36% |
| nl | B2 | 3 | 0.14% | 4 | 0.19% | 1618 | 76.39% | 0 | 0.00% | 2098 | 99.06% |
| nl | C1 | 0 | 0.00% | 1 | 0.17% | 457 | 79.90% | 0 | 0.00% | 570 | 99.65% |
| nl | C2 | 0 | 0.00% | 0 | 0.00% | 171 | 78.08% | 0 | 0.00% | 219 | 100.00% |
| nn | A1 | 0 | 0.00% | 1 | 0.14% | 1 | 0.14% | 0 | 0.00% | 696 | 99.15% |
| nn | A2 | 0 | 0.00% | 0 | 0.00% | 4 | 0.24% | 0 | 0.00% | 1640 | 100.00% |
| nn | B1 | 0 | 0.00% | 0 | 0.00% | 21 | 0.62% | 0 | 0.00% | 3367 | 100.00% |
| nn | B2 | 0 | 0.00% | 0 | 0.00% | 15 | 0.71% | 0 | 0.00% | 2118 | 100.00% |
| nn | C1 | 0 | 0.00% | 0 | 0.00% | 4 | 0.70% | 0 | 0.00% | 572 | 100.00% |
| nn | C2 | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 0 | 0.00% | 219 | 100.00% |
| pl | A1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 86 | 12.25% |
| pl | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 939 | 57.26% |
| pl | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 2859 | 84.91% |
| pl | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 2009 | 94.85% |
| pl | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 544 | 95.10% |
| pl | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 211 | 96.35% |
| pt | A1 | 0 | 0.00% | 1 | 0.14% | 58 | 8.26% | 1 | 0.14% | 287 | 40.88% |
| pt | A2 | 0 | 0.00% | 0 | 0.00% | 291 | 17.74% | 2 | 0.12% | 790 | 48.17% |
| pt | B1 | 1 | 0.03% | 0 | 0.00% | 842 | 25.01% | 1 | 0.03% | 1393 | 41.37% |
| pt | B2 | 0 | 0.00% | 1 | 0.05% | 1180 | 55.71% | 1 | 0.05% | 1080 | 50.99% |
| pt | C1 | 0 | 0.00% | 0 | 0.00% | 316 | 55.24% | 0 | 0.00% | 233 | 40.73% |
| pt | C2 | 0 | 0.00% | 0 | 0.00% | 122 | 55.71% | 0 | 0.00% | 100 | 45.66% |
| ro | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 43 | 6.13% |
| ro | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 132 | 8.05% |
| ro | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 274 | 8.14% |
| ro | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 111 | 5.24% |
| ro | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 13 | 2.27% |
| ro | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 5 | 2.28% |
| ru | A1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 106 | 15.10% |
| ru | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.06% | 231 | 14.09% |
| ru | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.03% | 482 | 14.32% |
| ru | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 4 | 0.19% | 1917 | 90.51% |
| ru | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.17% | 506 | 88.46% |
| ru | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 202 | 92.24% |
| sk | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 174 | 24.79% |
| sk | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 903 | 55.06% |
| sk | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 2792 | 82.92% |
| sk | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1958 | 92.45% |
| sk | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 539 | 94.23% |
| sk | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 206 | 94.06% |
| sl | A1 | 4 | 0.57% | 5 | 0.71% | 10 | 1.42% | 0 | 0.00% | 177 | 25.21% |
| sl | A2 | 1516 | 92.44% | 124 | 7.56% | 957 | 58.35% | 0 | 0.00% | 0 | 0.00% |
| sl | B1 | 3194 | 94.86% | 168 | 4.99% | 2038 | 60.53% | 0 | 0.00% | 0 | 0.00% |
| sl | B2 | 2068 | 97.64% | 33 | 1.56% | 1598 | 75.45% | 0 | 0.00% | 0 | 0.00% |
| sl | C1 | 569 | 99.48% | 2 | 0.35% | 462 | 80.77% | 0 | 0.00% | 0 | 0.00% |
| sl | C2 | 219 | 100.00% | 0 | 0.00% | 180 | 82.19% | 0 | 0.00% | 0 | 0.00% |
| sq | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 98 | 13.96% |
| sq | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1334 | 81.34% |
| sq | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 3061 | 90.91% |
| sq | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 2062 | 97.36% |
| sq | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 566 | 98.95% |
| sq | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 216 | 98.63% |
| sr | A1 | 0 | 0.00% | 0 | 0.00% | 41 | 5.84% | 230 | 32.76% | 666 | 94.87% |
| sr | A2 | 0 | 0.00% | 0 | 0.00% | 26 | 1.59% | 166 | 10.12% | 1640 | 100.00% |
| sr | B1 | 0 | 0.00% | 0 | 0.00% | 32 | 0.95% | 202 | 6.00% | 3367 | 100.00% |
| sr | B2 | 0 | 0.00% | 0 | 0.00% | 23 | 1.09% | 88 | 4.15% | 2118 | 100.00% |
| sr | C1 | 0 | 0.00% | 0 | 0.00% | 5 | 0.87% | 19 | 3.32% | 572 | 100.00% |
| sr | C2 | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 8 | 3.65% | 219 | 100.00% |
| sv | A1 | 0 | 0.00% | 1 | 0.14% | 3 | 0.43% | 0 | 0.00% | 657 | 93.59% |
| sv | A2 | 0 | 0.00% | 0 | 0.00% | 6 | 0.37% | 0 | 0.00% | 1640 | 100.00% |
| sv | B1 | 0 | 0.00% | 0 | 0.00% | 22 | 0.65% | 0 | 0.00% | 3367 | 100.00% |
| sv | B2 | 0 | 0.00% | 0 | 0.00% | 15 | 0.71% | 0 | 0.00% | 2118 | 100.00% |
| sv | C1 | 0 | 0.00% | 0 | 0.00% | 4 | 0.70% | 0 | 0.00% | 572 | 100.00% |
| sv | C2 | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 0 | 0.00% | 219 | 100.00% |
| tr | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 0 | 0.00% | 110 | 15.67% |
| tr | A2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1341 | 81.77% |
| tr | B1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 3064 | 91.00% |
| tr | B2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 2061 | 97.31% |
| tr | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 566 | 98.95% |
| tr | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 216 | 98.63% |
| uk | A1 | 0 | 0.00% | 1 | 0.14% | 0 | 0.00% | 2 | 0.28% | 1 | 0.14% |
| uk | A2 | 20 | 1.22% | 7 | 0.43% | 0 | 0.00% | 38 | 2.32% | 0 | 0.00% |
| uk | B1 | 17 | 0.50% | 4 | 0.12% | 0 | 0.00% | 29 | 0.86% | 1 | 0.03% |
| uk | B2 | 7 | 0.33% | 0 | 0.00% | 0 | 0.00% | 42 | 1.98% | 1 | 0.05% |
| uk | C1 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 5 | 0.87% | 1 | 0.17% |
| uk | C2 | 0 | 0.00% | 0 | 0.00% | 0 | 0.00% | 1 | 0.46% | 0 | 0.00% |

## INCONSISTENT_DUPLICATE

Pāri: 53. Avots: reports/lv-de-verify.json DUPLICATE_ACROSS_LEVELS SAME_LV on origin/cursor/lv-de-verify-f86b; recomputed on HEAD and matched. Pāru SHA-256: 6ca4069dd6c5a39a1d12033a38fcd5d9e5b5811af6299696726ef94ad0c949be.

PR #858 un PR #859 nav apvienoti ar origin/main. 53 pāri ir saskaitīti HEAD LV datos ar to pašu de un de_article grupēšanu, kas verify JSON. Wetterleuchten un Jagderlaubnis šajos pāros nav. OWNER LV labojums no #859 šajā zarā nav.

Salīdzinājums ir mērķvalodas lauka `lv` baitiskā vienādība bez apgriešanas. SAME nozīmē abas pozīcijas ir vienādas. DIFFERENT nozīmē tās atšķiras; abi varianti ir uzrādīti. DIFFERENT pie identiskas LV ievades liecina par tulkošanas atšķirībām (nestabilitāti), nevis noteikti par kļūdu. Pareizais variants nav izvēlēts. Tabula ir sakārtota pēc % DIFFERENT dilstoši.

| valoda | SAME | DIFFERENT | % DIFFERENT |
|---|---:|---:|---:|
| sl | 25 | 28 | 52.83% |
| bs | 29 | 24 | 45.28% |
| cs | 41 | 12 | 22.64% |
| sv | 45 | 8 | 15.09% |
| en | 47 | 6 | 11.32% |
| fi | 48 | 5 | 9.43% |
| is | 48 | 5 | 9.43% |
| pt | 48 | 5 | 9.43% |
| es | 49 | 4 | 7.55% |
| gr | 49 | 4 | 7.55% |
| nb | 49 | 4 | 7.55% |
| nn | 49 | 4 | 7.55% |
| sr | 49 | 4 | 7.55% |
| et | 50 | 3 | 5.66% |
| bg | 51 | 2 | 3.77% |
| fr | 51 | 2 | 3.77% |
| hu | 51 | 2 | 3.77% |
| it | 51 | 2 | 3.77% |
| sk | 51 | 2 | 3.77% |
| hr | 52 | 1 | 1.89% |
| lb | 52 | 1 | 1.89% |
| lt | 52 | 1 | 1.89% |
| mk | 52 | 1 | 1.89% |
| nl | 52 | 1 | 1.89% |
| pl | 52 | 1 | 1.89% |
| ro | 52 | 1 | 1.89% |
| ru | 52 | 1 | 1.89% |
| sq | 52 | 1 | 1.89% |
| tr | 52 | 1 | 1.89% |
| uk | 52 | 1 | 1.89% |
| da | 53 | 0 | 0.00% |

Augstākais % DIFFERENT: sl. Piemēri:

| de | lv | kreisā | vērtība | labā | vērtība |
|---|---|---|---|---|---|
| sprechen | runāt | A1[5] | govoriti | A2[1627] | runāt |
| klein | mazs | A1[6] | majhen | A2[1630] | mazs |
| auch | arī | A1[48] | tudi | A2[1639] | arī |
| Besucher | apmeklētājs | A1[88] | obiskovalec | A2[245] | apmeklētājs |
| Bitte | lūgums | A1[94] | prošnja | A2[257] | lūgums |
| Geschwister | brāļi un māsas | A1[234] | bratje in sestre | A2[586] | brāļi un māsas |
| groß | liels | A1[250] | velik | A2[1628] | liels |
| hoch | augsts | A1[285] | visok | A2[1629] | augsts |
| höflich | pieklājīgs | A1[286] | prijazen | A2[679] | pieklājīgs |
| hören | dzirdēt • klausīties | A1[287] | slišati • poslušati | A2[1625] | dzirdēt • klausīties |

Līmeņu pāri. SAME un DIFFERENT ir šūnas pa 31 valodai. Procenti ir no pāru skaita reiz 31.

| līmeņu pāris | pāri | SAME | DIFFERENT | % DIFFERENT |
|---|---:|---:|---:|---:|
| A1/A2 | 27 | 755 | 82 | 9.80% |
| A1/B1 | 1 | 28 | 3 | 9.68% |
| A1/B2 | 1 | 29 | 2 | 6.45% |
| A2/B1 | 14 | 405 | 29 | 6.68% |
| B1/B2 | 2 | 51 | 11 | 17.74% |
| B1/C1 | 2 | 60 | 2 | 3.23% |
| B2/C1 | 2 | 62 | 0 | 0.00% |
| C1/C2 | 4 | 116 | 8 | 6.45% |

## Ģimenes

Virziens nav noteikts. Grupa ir valodas ar vienādu vērtību, kas atšķiras no LV.

### fi+is+nb+nn+sv (6720)

- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[13] de=Anfang lv=sākums value=Algus
- A1[14] de=anfangen lv=sākt value=Alustama
- A1[15] de=anders lv=citādi value=Teisiti
- A1[16] de=anrufen lv=zvanīt value=Helistama
- A1[19] de=Abendessen lv=vakariņas value=Õhtusöök
- A1[20] de=abends lv=vakarā value=Õhtul

### sq+tr (4500)

- A1[18] de=Abend lv=vakars value=Akşam
- A1[30] de=anziehen lv=uzvilkt value=Açma
- A1[91] de=bis lv=līdz value=Değin
- A1[228] de=gelb lv=dzeltens value=Sarı
- A1[323] de=lachen lv=smieties value=Gül
- A1[395] de=Marmelade lv=ievārījums value=Reçel
- A1[428] de=nachmittags lv=pēcpusdienā value=PM
- A1[498] de=rosa lv=rozā value=Pembe
- A1[501] de=rund lv=apaļš value=Yuvarlak
- A1[502] de=Rose lv=roze value=Gül

### bg+hr+mk+sr (3871)

- A1[10] de=alt lv=vecs value=Стари
- A1[13] de=Anfang lv=sākums value=Започнете
- A1[14] de=anfangen lv=sākt value=Започнете
- A1[25] de=Album lv=albums value=Албум
- A1[27] de=Ameise lv=skudra value=Мравка
- A1[71] de=Ball lv=bumba value=Топка
- A1[77] de=beginnen lv=sākt value=Започнете
- A1[85] de=besser lv=labāks value=По-добре
- A1[88] de=Besucher lv=apmeklētājs value=Посетител
- A1[95] de=billig lv=lēts value=Евтини

### pl+sk (3698)

- A1[109] de=Brief lv=vēstule value=List
- A1[117] de=Buchstabe lv=burts value=List
- A1[156] de=eins lv=viens value=Jeden
- A1[161] de=Ende lv=beigas value=Koniec
- A1[291] de=ich lv=es value=Ja
- A1[402] de=Mensch lv=cilvēks value=Osoba
- A1[436] de=nein lv=nē value=NIE
- A1[447] de=nicht lv=ne value=NIE
- A1[549] de=sie lv=viņi / viņas value=Oni/ona
- A1[578] de=Straße lv=iela value=Ulica

### it+lb+nl (3305)

- A1[57] de=aus lv=no value=No • Ārā
- A1[243] de=gleich lv=tūlīt value=Tūlīt • Vienāds
- A1[271] de=Handy lv=mobilais tālrunis value=Mobilais tālrunis
- A1[287] de=hören lv=dzirdēt • klausīties value=Dzirdēt • Klausīties
- A1[544] de=Seite lv=lappuse • puse value=Lappuse • Puse
- A1[548] de=sicher lv=drošs • noteikti value=Drošs • Noteikti
- A1[652] de=welcher lv=kurš value=Kurš
- A1[656] de=wer lv=kas • kurš value=Kas • Kurš
- A1[678] de=zwanzigste lv=divdesmitais value=Divdesmitais
- A1[679] de=zwei lv=divi value=Divi

### bg+hr+mk+ru+sr (2956)

- A1[67] de=Sauna lv=sauna value=Сауна
- A1[69] de=bald lv=drīz value=Скоро
- A1[70] de=Balkon lv=balkons value=Балкон
- A1[81] de=Beispiel lv=piemērs value=Пример
- A1[91] de=bis lv=līdz value=До
- A1[116] de=Buch lv=grāmata value=Книга
- A1[126] de=da lv=tur value=Там
- A1[138] de=Dienstag lv=otrdiena value=Вторник
- A1[142] de=dort lv=tur value=Там
- A1[144] de=dreihundert lv=trīssimt value=Триста

### it+lb+nl+pt (2808)

- A1[60] de=aufs lv=uz value=Uz • Virsū • Kurp?
- A1[111] de=bringen lv=atnest value=Atnest • Aiznest
- A1[295] de=in lv=iekšā • uz value=Iekšā • Uz
- A1[299] de=jawohl lv=tieši tā value=Tieši tā
- A1[351] de=Land lv=valsts • zeme value=Valsts • Zeme
- A1[352] de=lang lv=garš • ilgs value=Garš • Ilgs
- A1[491] de=rechts lv=pa labi • labais value=Pa labi • Labais
- A1[663] de=Wind lv=vējš value=Vējš
- A1[665] de=Zimmer lv=istaba value=Istaba
- A1[686] de=zwölfte lv=divpadsmitais value=Divpadsmitais

### pl+sk+sq+tr (2220)

- A2[190] de=Bahnsteig lv=perons value=Platforma
- A2[469] de=Feierabend lv=darba laika beigas value=Koniec godzin pracy
- A2[496] de=Flaschenöffner lv=pudeļu atvērējs value=Otwieracz do butelek
- A2[497] de=Fleck lv=traips • plankums value=Plama • Plama
- A2[502] de=Flug lv=lidojums value=Lot
- A2[510] de=Form lv=forma • veids value=Formularz • Typ
- A2[518] de=Freibad lv=āra peldbaseins value=Odkryty basen
- A2[524] de=Freundschaft lv=draudzība value=Przyjaźń
- A2[526] de=Friedhof lv=kapsēta value=Cmentarz
- A2[528] de=Friseur lv=frizieris value=Fryzjer

### fi+sv (1612)

- A1[0] de=Apfel lv=ābols value=Õun
- A1[3] de=Haus lv=māja value=Maja
- A1[7] de=alle lv=visi value=Kõik
- A1[8] de=allein lv=viens pats value=Üksi
- A1[9] de=alles lv=viss value=Kõik
- A1[10] de=alt lv=vecs value=Vana
- A1[11] de=Alter lv=vecums value=Vanus
- A1[18] de=Abend lv=vakars value=Õhtu
- A1[23] de=Adresse lv=adrese value=Aadress
- A1[24] de=Affe lv=pērtiķis value=Ahv

### is+nb+nn (1492)

- A1[0] de=Apfel lv=ābols value=Un
- A1[3] de=Haus lv=māja value=Maya
- A1[5] de=sprechen lv=runāt value=Pratsom
- A1[7] de=alle lv=visi value=Alt
- A1[8] de=allein lv=viens pats value=Ja
- A1[10] de=alt lv=vecs value=Vane
- A1[11] de=Alter lv=vecums value=Venus
- A1[18] de=Abend lv=vakars value=Høyre
- A1[21] de=aber lv=bet value=Aga
- A1[24] de=Affe lv=pērtiķis value=Oj

### lb+nl (1067)

- A1[58] de=auf dem Boden lv=uz grīdas value=Uz grīdas
- A1[129] de=das lv=vidus dzimtes noteiktais artikuls value=Vidus dzimtes noteiktais artikuls
- A1[134] de=der lv=vīriešu dzimtes noteiktais artikuls value=Vīriešu dzimtes noteiktais artikuls
- A1[137] de=die lv=sieviešu dzimtes noteiktais artikuls value=Sieviešu dzimtes noteiktais artikuls
- A1[156] de=eins lv=viens value=Een
- A1[170] de=euch lv=jūs • jums value=Jūs • Jums
- A1[198] de=Frau lv=sieviete value=Sieviete • Sieva
- A1[229] de=Geld lv=nauda value=Geld
- A1[265] de=halten lv=turēt value=Turēt • Apturēt
- A1[276] de=heißen lv=saukties value=Saukties • Nozīmēt

### hr+mk+sr (1037)

- A1[3] de=Haus lv=māja value=Куќа
- A1[6] de=klein lv=mazs value=Мали
- A1[9] de=alles lv=viss value=Сите
- A1[16] de=anrufen lv=zvanīt value=Јавете ми се
- A1[17] de=ab lv=no value=Од
- A1[19] de=Abendessen lv=vakariņas value=Вечера
- A1[20] de=abends lv=vakarā value=Во вечерните часови
- A1[22] de=achten lv=ievērot value=Набљудувај
- A1[24] de=Affe lv=pērtiķis value=Мајмун
- A1[33] de=angenehm lv=patīkams value=Убаво

### it+pt (675)

- A1[7] de=alle lv=visi value=Visita
- A1[13] de=Anfang lv=sākums value=Sakums
- A1[15] de=anders lv=citādi value=Citadi
- A1[16] de=anrufen lv=zvanīt value=Zvanit
- A1[20] de=abends lv=vakarā value=Vakara
- A1[21] de=aber lv=bet value=SZADZIŃSKA
- A1[22] de=achten lv=ievērot value=Ieverot
- A1[24] de=Affe lv=pērtiķis value=Pērtiˈis
- A1[26] de=also lv=tātad value=Tatad
- A1[29] de=anschauen lv=apskatīt value=Apskatit

### hr+sr (625)

- A1[5] de=sprechen lv=runāt value=Govor
- A1[7] de=alle lv=visi value=Svi
- A1[8] de=allein lv=viens pats value=Jedan
- A1[11] de=Alter lv=vecums value=Godine?
- A1[15] de=anders lv=citādi value=Sicer ...
- A1[18] de=Abend lv=vakars value=Večernje
- A1[21] de=aber lv=bet value=Ampak.
- A1[23] de=Adresse lv=adrese value=Naslov
- A1[28] de=ankommen lv=ierasties value=Dolazak
- A1[29] de=anschauen lv=apskatīt value=Pogledaj

### bg+ru (324)

- A1[17] de=ab lv=no value=От
- A1[23] de=Adresse lv=adrese value=Адрес
- A1[32] de=Angst lv=bailes value=Страх
- A1[37] de=Anzug lv=uzvalks value=Костюм
- A1[72] de=Banane lv=banāns value=Банан
- A1[87] de=Besuch lv=apmeklējums value=посещение
- A1[103] de=blond lv=blonds value=Блондинка
- A1[105] de=Boot lv=laiva value=Лодка
- A1[118] de=Büro lv=birojs value=Офис
- A1[131] de=Datum lv=datums value=Дата

### bg+mk (316)

- A1[4] de=lernen lv=mācīties value=Проучване
- A1[7] de=alle lv=visi value=Всеки
- A1[30] de=anziehen lv=uzvilkt value=Облечете се
- A1[34] de=Antenne lv=antena value=Антена
- A1[39] de=Apfelsine lv=apelsīns value=Портокал
- A1[41] de=April lv=aprīlis value=Април
- A1[43] de=arbeiten lv=strādāt value=Работа
- A1[50] de=aufmachen lv=atvērt value=Отворете
- A1[52] de=aufstehen lv=piecelties value=Стани
- A1[54] de=Auge lv=acs value=Око

### pl+sq+tr (271)

- A2[0] de=ab und zu lv=šad un tad • reizēm value=Od czasu do czasu • Czasami
- A2[3] de=Abfahrt lv=aizbraukšana • atiešana value=Wyjazd • Wyjazd
- A2[44] de=Anhänger lv=piekabe • piekritējs • kulons value=Przyczepa • Wspornik • Zawieszka
- A2[46] de=Anker lv=enkurs value=Kotwica
- A2[76] de=Apotheke lv=aptieka value=Apteka
- A2[97] de=atemlos lv=bez elpas value=Zadyszany
- A2[114] de=Aufgabe lv=uzdevums value=Zadanie
- A2[138] de=aufrichtig lv=patiess • sirsnīgs • atklāts value=Szczery • Szczery • Otwarty
- A2[158] de=außerdem lv=turklāt value=Ponadto
- A2[173] de=Automat lv=automāts value=Maszyna

### it+nl+pt (240)

- A1[14] de=anfangen lv=sākt value=Sākt
- A1[35] de=Antwort lv=atbilde value=Atbilde
- A1[37] de=Anzug lv=uzvalks value=Uzvalks
- A1[44] de=Arm lv=roka value=Roka
- A1[47] de=atmen lv=elpot value=Elpot
- A1[55] de=Augenblick lv=acumirklis value=Acumirklis
- A1[68] de=baden lv=peldēties value=Peldēties
- A1[71] de=Ball lv=bumba value=Bumba
- A1[73] de=Bauch lv=vēders value=Vēders
- A1[77] de=beginnen lv=sākt value=Sākt

### cs+sk (214)

- A1[6] de=klein lv=mazs value=Malý
- A1[8] de=allein lv=viens pats value=Sám
- A1[10] de=alt lv=vecs value=Starý
- A1[18] de=Abend lv=vakars value=Večer
- A1[34] de=Antenne lv=antena value=Anténa
- A1[37] de=Anzug lv=uzvalks value=Oblek
- A1[38] de=Apfelbaum lv=ābele value=Jabloň
- A1[45] de=Armbanduhr lv=rokas pulkstenis value=Náramkové hodinky
- A1[66] de=Schwimmbad lv=peldbaseins value=Bazén
- A1[70] de=Balkon lv=balkons value=Balkón

### it+nl (211)

- A1[17] de=ab lv=no value=No
- A1[19] de=Abendessen lv=vakariņas value=Vakariņas
- A1[32] de=Angst lv=bailes value=Bailes
- A1[62] de=Augenfarbe lv=acu krāsa value=Acu krāsa
- A1[64] de=Bad lv=vannas istaba value=Vannas istaba
- A1[65] de=Badezimmer lv=vannas istaba value=Vannas istaba
- A1[66] de=Schwimmbad lv=peldbaseins value=Peldbaseins
- A1[82] de=bekommen lv=saņemt value=Saņemt
- A1[96] de=Bier lv=alus value=Alus
- A1[101] de=bleiben lv=palikt value=Palikt

### en+fr (194)

- A1[97] de=Bild lv=attēls value=Image
- A1[99] de=Blatt lv=lapa value=Page
- A1[124] de=Cousin lv=brālēns value=Cousin
- A1[125] de=Cousine lv=māsīca value=Cousin
- A1[155] de=einfach lv=vienkāršs value=Simple
- A1[160] de=Eltern lv=vecāki value=Parents
- A1[173] de=falsch lv=nepareizs value=Incorrect
- A1[196] de=Frage lv=jautājums value=Question
- A1[384] de=Luft lv=gaiss value=Air
- A1[497] de=richtig lv=pareizs value=Correct

### da+en (188)

- A1[119] de=Bus lv=autobuss value=Bus
- A1[123] de=Computer lv=dators value=Computer
- A1[182] de=Fernseher lv=televizors value=Television
- A1[188] de=Finger lv=pirksts value=Finger
- A1[265] de=halten lv=turēt value=Hold • Stop
- A1[328] de=Hut lv=cepure value=Hat
- A1[401] de=mein lv=mans value=Mine
- A1[425] de=Mütze lv=cepure value=Hat
- A1[473] de=Person lv=persona value=Person
- A1[485] de=Pullover lv=džemperis value=Sweater

### bs+sl (153)

- A1[2] de=Wasser lv=ūdens value=voda
- A1[5] de=sprechen lv=runāt value=govoriti
- A1[8] de=allein lv=viens pats value=sam
- A1[10] de=alt lv=vecs value=star
- A1[11] de=Alter lv=vecums value=starost
- A1[18] de=Abend lv=vakars value=večer
- A1[29] de=anschauen lv=apskatīt value=pogledati
- A1[32] de=Angst lv=bailes value=strah
- A1[35] de=Antwort lv=atbilde value=odgovor
- A1[36] de=antworten lv=atbildēt value=odgovoriti

### bg+mk+ru (135)

- A1[2] de=Wasser lv=ūdens value=Вода
- A1[18] de=Abend lv=vakars value=Вечер
- A1[21] de=aber lv=bet value=Но
- A1[42] de=Arbeit lv=darbs value=Работа
- A1[56] de=August lv=augusts value=Август
- A1[97] de=Bild lv=attēls value=Изображение
- A1[99] de=Blatt lv=lapa value=Страница
- A1[114] de=Brücke lv=tilts value=Мост
- A1[119] de=Bus lv=autobuss value=Автобус
- A1[120] de=Butter lv=sviests value=Масло

### en+ro (115)

- A1[135] de=deutsch lv=vācu value=German
- A1[397] de=Maus lv=pele value=Mouse
- A1[480] de=Post lv=pasts value=Mail
- A2[33] de=allgemein lv=vispārīgs value=General
- A2[91] de=Arzt lv=ārsts value=Doctor
- A2[345] de=Direktor lv=direktors value=Director
- A2[347] de=Doktor lv=doktors value=Doctor
- A2[373] de=echt lv=īsts value=Real
- A2[405] de=elektrisch lv=elektrisks value=Electric
- A2[441] de=Europäer lv=eiropietis value=European

### da+is+nb+nn (102)

- A1[9] de=alles lv=viss value=Alt
- A1[63] de=Auto lv=automašīna value=Bil
- A1[100] de=blau lv=zils value=Blå
- A1[138] de=Dienstag lv=otrdiena value=Tirsdag
- A1[156] de=eins lv=viens value=En
- A1[166] de=erste lv=pirmais value=Den første
- A1[255] de=Gruppe lv=grupa value=Gruppe
- A1[258] de=Gurke lv=gurķis value=Agurk
- A1[297] de=ja lv=jā value=Ja
- A1[298] de=Januar lv=janvāris value=Januar

### fr+ro (76)

- A1[70] de=Balkon lv=balkons value=Balcon
- A1[193] de=Flugzeug lv=lidmašīna value=Un avion
- A1[199] de=frei lv=brīvs value=Gratuit
- A1[354] de=langsam lv=lēns value=Lent
- A1[470] de=Park lv=parks value=Parc
- A1[598] de=Tier lv=dzīvnieks value=Un animal
- A1[652] de=welcher lv=kurš value=OMS
- A2[32] de=Alkohol lv=alkohols value=Alcool
- A2[167] de=Ausweis lv=apliecība value=Certificat
- A2[308] de=Chemie lv=ķīmija value=Chimie

### fr+it (73)

- A1[452] de=normal lv=normāls value=Normale
- A1[453] de=November lv=novembris value=Novembre
- A1[457] de=ob lv=vai value=Ou
- A2[53] de=Anlass lv=iemesls • gadījums value=Raison • Cas
- A2[95] de=Asthma lv=astma value=Asthme
- A2[128] de=auflösen lv=izšķīdināt value=Dissoudre
- A2[203] de=Batterie lv=baterija value=Batterie
- A2[215] de=Beere lv=oga value=Baie
- A2[231] de=Benzin lv=benzīns value=Essence
- A2[281] de=Braten lv=cepetis value=Rôti

### bs+cs (60)

- B1[8] de=Aktentasche lv=portfelis value=Aktovka
- B1[57] de=Abiturient lv=abiturients value=Maturant
- B1[167] de=Arithmetik lv=aritmētika value=Aritmetika
- B1[174] de=Athletik lv=atlētika value=Atletika
- B1[458] de=Blei lv=svins value=Olovo
- B1[478] de=Bombe lv=bumba value=Bomba
- B1[533] de=Cabriolet lv=kabriolets value=Kabriolet
- B1[542] de=Chip lv=mikroshēma value=Čip
- B1[651] de=Eierkuchen lv=pankūka value=Palačinka
- B1[734] de=Elch lv=alnis value=Los

### da+fr (48)

- A1[107] de=braun lv=brūns value=Brun
- A1[378] de=Limonade lv=limonāde value=Limonade
- A1[666] de=Zitrone lv=citrons value=Citron
- A2[450] de=Fahrgast lv=pasažieris value=Passager
- A2[1061] de=Passagier lv=pasažieris value=Passager
- A2[1442] de=Ticket lv=biļete value=Billet
- B1[71] de=abschaffen lv=atcelt value=Atcelt
- B1[164] de=Appell lv=aicinājums value=Invitation
- B1[177] de=Attribut lv=atribūts value=Attribut
- B1[482] de=Botschaft lv=vēstniecība value=Ambassade

### da+en+fr (40)

- A1[306] de=Jeans lv=džinsi value=Jeans
- A1[616] de=Vase lv=vāze value=Vase
- A2[11] de=absagen lv=atcelt value=Atcelt
- A2[923] de=Mayonnaise lv=majonēze value=Mayonnaise
- A2[984] de=Nachspeise lv=deserts value=Dessert
- A2[1149] de=Reiseführer lv=ceļvedis value=Guide
- A2[1247] de=Schnurrbart lv=ūsas value=Moustache
- A2[1323] de=Ski lv=slēpe value=Ski
- B1[178] de=Aufforderung lv=aicinājums value=Invitation
- B1[538] de=Champagner lv=šampanietis value=Champagne

### cs+pl+sk+sq+tr (38)

- A2[26] de=Aerobic lv=aerobika value=Aerobik
- A2[195] de=Bankautomat lv=bankomāts value=Bankomat
- A2[665] de=Himbeere lv=avene value=Malina
- A2[676] de=Hockey lv=hokejs value=Hokej
- A2[844] de=Krankheit lv=slimība value=Choroba
- A2[969] de=Museum lv=muzejs value=Muzeum
- A2[1107] de=Professor lv=profesors value=Profesor
- A2[1253] de=Schritt lv=solis value=Krok
- A2[1259] de=Schüssel lv=bļoda value=Miska
- A2[1265] de=Schweiß lv=sviedri value=Pot

### cs+pl (29)

- A1[21] de=aber lv=bet value=Ale
- A1[54] de=Auge lv=acs value=Oko
- A1[78] de=bei lv=pie value=Na
- A1[97] de=Bild lv=attēls value=Obraz
- A1[149] de=du lv=tu value=Ty
- A1[162] de=er lv=viņš value=On
- A1[189] de=Fisch lv=zivs value=Ryba
- A1[280] de=Herr lv=kungs value=Pan
- A1[284] de=hinter lv=aiz value=Za
- A1[289] de=hundert lv=simts value=Sto

### bs+pl+sk+sq+tr (27)

- B1[547] de=Code lv=kods value=Kod
- B1[967] de=Funke lv=dzirkstele value=Iskra
- B1[1173] de=Hacker lv=hakers value=Haker
- B1[1175] de=Hagel lv=krusa value=Grad
- B1[1251] de=Herde lv=ganāmpulks value=Stado
- B1[1491] de=Keil lv=ķīlis value=Klin
- B1[1629] de=Kreide lv=krīts value=Kreda
- B1[1782] de=Linde lv=liepa value=Lipa
- B1[1961] de=Narkose lv=narkoze value=Narkoza
- B1[2003] de=Oase lv=oāze value=Oaza

### bs+ro (26)

- B1[31] de=Andenken lv=suvenīrs value=Suvenir
- B1[539] de=Chaos lv=haoss value=Haos
- B1[557] de=Damespiel lv=dambrete value=Dame
- B1[597] de=Disziplin lv=disciplīna value=Disciplina
- B1[787] de=Ergebnis lv=rezultāts value=Rezultat
- B1[1221] de=Heer lv=karaspēks value=Trupe
- B1[1856] de=Maurer lv=mūrnieks value=Zidar
- B1[2102] de=Pflug lv=arkls value=Plug
- B1[2109] de=Pier lv=mols value=Mol
- B1[2141] de=Pollen lv=ziedputekšņi value=Polen

### cs+pl+sk (25)

- A1[32] de=Angst lv=bailes value=Strach
- A1[126] de=da lv=tur value=Tam
- A1[142] de=dort lv=tur value=Tam
- A1[180] de=Fenster lv=logs value=Okno
- A1[283] de=Hilfe lv=palīdzība value=Pomoc
- A1[329] de=Jahr lv=gads value=Rok
- A1[424] de=Mutter lv=māte value=Matka
- A1[429] de=Nacht lv=nakts value=Noc
- A1[430] de=Nase lv=deguns value=Nos
- A1[473] de=Person lv=persona value=Osoba

### bs+et (24)

- A1[56] de=August lv=augusts value=august
- A1[597] de=Text lv=teksts value=tekst
- A2[32] de=Alkohol lv=alkohols value=alkohol
- A2[176] de=Autor lv=autors value=autor
- A2[345] de=Direktor lv=direktors value=direktor
- A2[347] de=Doktor lv=doktors value=doktor
- A2[348] de=Dokument lv=dokuments value=dokument
- A2[711] de=Instrument lv=instruments value=instrument
- A2[715] de=Internet lv=internets value=internet
- A2[737] de=Joghurt / Jogurt lv=jogurts value=jogurt

### da+fi+is+nb+nn+sv (23)

- A1[118] de=Büro lv=birojs value=Kontor
- A1[331] de=Kalender lv=kalendārs value=Kalender
- A1[480] de=Post lv=pasts value=Post
- A1[506] de=Salat lv=salāti value=Salat
- A1[602] de=Tomate lv=tomāts value=Tomat
- A2[853] de=Kunst lv=māksla value=Kunst
- A2[1102] de=Postamt lv=pasts value=Post
- A2[1439] de=Theater lv=teātris value=Teater
- B1[237] de=Faschingsball lv=karnevāls value=Karneval
- B1[544] de=Chirurg lv=ķirurgs value=Kirurg

### lb+nl+pt (23)

- A2[216] de=Beet lv=dobe value=Dobe
- A2[409] de=endlich lv=beidzot value=Beidzot
- A2[469] de=Feierabend lv=darba laika beigas value=Darba laika beigas
- A2[476] de=Fensterbrett lv=palodze value=Palodze
- A2[511] de=formen lv=veidot value=Veidot
- A2[614] de=Haarbürste lv=matu suka value=Matu suka
- A2[620] de=Hahn lv=gailis value=Gailis
- A2[665] de=Himbeere lv=avene value=Avene
- A2[773] de=Kasse lv=kase value=Kase
- A2[822] de=Knie lv=celis value=Celis

### en+fr+ro (21)

- A1[659] de=wichtig lv=svarīgs value=Important
- A2[820] de=Klub lv=klubs value=Club
- A2[830] de=Kontakt lv=kontakts value=Contact
- B1[299] de=Begriff lv=jēdziens value=Concept
- B1[435] de=Bezirk lv=rajons value=District
- B1[603] de=Drachen lv=pūķis value=Dragon
- B1[609] de=dringend lv=steidzams value=Urgent
- B1[659] de=eilig lv=steidzams value=Urgent
- B1[1352] de=indirekt lv=netiešs value=Indirect
- B1[1380] de=Instinkt lv=instinkts value=Instinct

### bs+lt (20)

- A1[422] de=Musik lv=mūzika value=muzika
- A1[561] de=Sofa lv=dīvāns value=sofa
- A1[640] de=wann lv=kad value=kada
- A2[252] de=Bibliothek lv=bibliotēka value=biblioteka
- A2[516] de=Fotografie lv=fotogrāfija value=fotografija
- A2[577] de=Geografie lv=ģeogrāfija value=geografija
- A2[578] de=Geographie lv=ģeogrāfija value=geografija
- A2[610] de=Gummi lv=gumija value=guma
- A2[613] de=Gymnastik lv=vingrošana value=gimnastika
- A2[704] de=Information lv=informācija value=informacija

### hr+mk+ru+sr (19)

- A1[115] de=Bruder lv=brālis value=Брат
- A1[240] de=Giraffe lv=žirafe value=Жирафа
- A1[478] de=Platz lv=vieta value=Место
- A2[539] de=führen lv=vadīt value=Вести
- A2[879] de=leiten lv=vadīt value=Вести
- A2[898] de=Lokal lv=restorāns value=Ресторан
- A2[1047] de=Ort lv=vieta value=Место
- A2[1161] de=Restaurant lv=restorāns value=Ресторан
- A2[1215] de=Schauspieler lv=aktieris value=Актер
- A2[1380] de=Stelle lv=vieta value=Место

### bs+cs+pl+sk+sq+tr (17)

- B1[1055] de=Gen lv=gēns value=Gen
- B1[1199] de=Harfe lv=arfa value=Harfa
- B1[1362] de=Infrastruktur lv=infrastruktūra value=Infrastruktura
- B1[1441] de=Kabine lv=kabīne value=Kabina
- B1[1575] de=Kompromiss lv=kompromiss value=Kompromis
- B1[1587] de=Kontrolle lv=kontrole value=Kontrola
- B1[1656] de=Kultur lv=kultūra value=Kultura
- B1[2448] de=Schlager lv=hīts value=Hit
- B1[2607] de=Sense lv=izkapts value=Kosa
- B1[2706] de=Sprung lv=lēciens value=Skok

### da+ro (17)

- A2[419] de=Erfolg lv=panākumi value=Succes
- A2[445] de=Fächer lv=vēdeklis value=Ventilator
- A2[590] de=getrennt lv=šķirti • atsevišķi value=Separat • Separat
- A2[1423] de=Tapete lv=tapete value=Tapet
- B1[1136] de=Grad lv=grāds value=Grad
- B1[1385] de=intensiv lv=intensīvs value=Intens
- B1[1389] de=intim lv=intīms value=Intim
- B1[1848] de=mäßig lv=mērens value=Moderat
- B1[1892] de=mobil lv=mobils value=Mobil
- B1[2085] de=Pfahl lv=stabs value=Pol

### en+sk (17)

- A1[27] de=Ameise lv=skudra value=Ant
- A1[80] de=Bein lv=kāja value=Leg
- A1[336] de=Katze lv=kaķis value=Cat
- A1[340] de=Koch lv=pavārs value=Cook
- A1[341] de=Köchin lv=pavāre value=Cook
- A1[395] de=Marmelade lv=ievārījums value=Jam
- A2[92] de=Asche lv=pelni value=Ash
- A2[178] de=Bach lv=strauts value=Stream
- A2[181] de=Bäcker lv=maiznieks value=Baker
- B1[531] de=Busch lv=krūms value=Bush

### bs+hr+sr (16)

- B1[30] de=allzu lv=pārāk value=Previše
- B1[39] de=Abbildung lv=attēls value=Slika
- B1[43] de=abermals lv=vēlreiz value=Opet
- B1[191] de=Auftrag lv=uzdevums value=Zadatak
- B1[432] de=Bezeichnung lv=nosaukums value=Ime
- B1[496] de=Breite lv=platums value=Širina
- B1[526] de=Bund lv=savienība value=Sindikat
- B1[1092] de=Gestalt lv=tēls value=Slika
- B1[1371] de=innerhalb lv=iekšpusē value=Unutra
- B1[1393] de=inwendig lv=iekšpusē value=Unutra

### bs+it+lb+nl (16)

- B1[848] de=Explosion lv=eksplozija value=Eksplozija
- B1[1163] de=Gummischuh lv=galoša value=Galoša
- B1[1335] de=Hymne lv=himna value=Himna
- B1[1395] de=Ironie lv=ironija value=Ironija
- B1[1467] de=Kapelle lv=kapela value=Kapela
- B1[1483] de=Kategorie lv=kategorija value=Kategorija
- B1[1565] de=Kolonie lv=kolonija value=Kolonija
- B1[1793] de=Loge lv=loža value=Loža
- B1[1986] de=Nische lv=niša value=Niša
- B1[2628] de=Sinfonie lv=simfonija value=Simfonija

### da+en+ro (16)

- A2[1340] de=sozial lv=sociāls value=Social
- B1[576] de=Denkmal lv=piemineklis value=Monument
- B1[961] de=Führer lv=vadītājs value=Manager
- B1[1225] de=Heftpflaster lv=leikoplasts value=Leucoplast
- B1[1238] de=Heizkörper lv=radiators value=Radiator
- B1[1739] de=Lebenslauf lv=dzīves apraksts (CV) value=Curriculum vitae (CV)
- B1[2113] de=Pistole lv=pistole value=Pistol
- B1[2646] de=solide lv=solīds value=Solid
- B1[2742] de=Steinpilz lv=baravika value=Boletus
- B1[2894] de=tolerant lv=iecietīgs value=Tolerant

### cs+hu (15)

- A1[469] de=Papier lv=papīrs value=Papír
- A2[1440] de=Thema lv=temats value=Téma
- A2[1477] de=Tulpe lv=tulpe value=Tulipán
- B1[547] de=Code lv=kods value=Kód
- B1[550] de=Cursor lv=kursors value=Kurzor
- B1[557] de=Damespiel lv=dambrete value=Dáma
- B1[1238] de=Heizkörper lv=radiators value=Radiátor
- B1[1813] de=Luxus lv=luksuss value=Luxus
- B1[1897] de=Mohn lv=magone value=Mák
- B1[2117] de=Planetarium lv=planetārijs value=Planetárium

### cs+ro (15)

- A1[195] de=Foto lv=fotogrāfija value=Fotografie
- A2[203] de=Batterie lv=baterija value=Baterie
- A2[516] de=Fotografie lv=fotogrāfija value=Fotografie
- A2[1088] de=Pizzeria lv=picērija value=Pizzerie
- A2[1518] de=Verkehrsampel lv=luksofors value=Semafor
- A2[1584] de=Weste lv=veste value=Vesta
- B1[28] de=Allergie lv=alerģija value=Alergie
- B1[1066] de=Geologie lv=ģeoloģija value=Geologie
- B1[2131] de=Poesie lv=dzeja value=Poezie
- B1[3322] de=Energie lv=enerģija value=Energie

### ro+sq+tr (15)

- A1[249] de=grau lv=pelēks value=Gri
- A2[579] de=Gepäck lv=bagāža value=Bagaj
- A2[873] de=leeren lv=iztukšot value=Drenaj
- A2[1411] de=System lv=sistēma value=Sistem
- A2[1482] de=Typ lv=tips value=Tip
- A2[1545] de=Vorteil lv=priekšrocība value=Avantaj
- B1[70] de=Absatz lv=rindkopa value=Paragraf
- B1[445] de=Binde lv=apsējs value=Bandaj
- B1[1590] de=Korkenzieher lv=korķviļķis value=Tirbuşon
- B1[1696] de=Lachs lv=lasis value=Somon

### bs+es (13)

- A1[381] de=Liste lv=saraksts value=lista
- A1[477] de=Plan lv=plāns value=plan
- A2[489] de=Figur lv=figūra • augums value=figura
- A2[557] de=Gas lv=gāze value=gas
- A2[686] de=Hotel lv=viesnīca value=hotel
- A2[688] de=Humor lv=humors value=humor
- A2[938] de=Metall lv=metāls value=metal
- A2[955] de=Mode lv=mode value=moda
- A2[963] de=Motor lv=motors value=motor
- A2[1184] de=Saal lv=zāle value=sala

### bs+it+lb+nl+pt (12)

- B1[168] de=Armee lv=armija value=Armija
- B1[370] de=Berühmtheit lv=slava value=Slava
- B1[1366] de=Injektion lv=injekcija value=Injekcija
- B1[1391] de=Intrige lv=intriga value=Intriga
- B1[1401] de=Jacht lv=jahta value=Jahta
- B1[2241] de=Reaktion lv=reakcija value=Reakcija
- B1[2248] de=Redaktion lv=redakcija value=Redakcija
- B1[2255] de=Regie lv=režija value=Režija
- B1[2356] de=Ruhm lv=slava value=Slava
- B2[333] de=Chronik lv=hronika value=Hronika

### bg+hr+mk (11)

- A1[26] de=also lv=tātad value=Ето защо
- A1[49] de=auf lv=uz value=ДО
- A1[417] de=morgen lv=rīt value=Утре
- A1[542] de=sein lv=būt value=Бъди
- A1[544] de=Seite lv=lappuse • puse value=Страница • Странично
- A1[548] de=sicher lv=drošs • noteikti value=Безопасно • Разбира се
- A1[549] de=sie lv=viņi / viņas value=Те/тя
- A1[550] de=Sie lv=jūs value=Вие
- A1[636] de=vor lv=pirms • priekšā value=Преди • Преди
- A1[644] de=was lv=kas • ko value=Кой • Какво

### bs+pt (11)

- B1[1341] de=Illusion lv=ilūzija value=Iluzija
- B1[1477] de=Kartei lv=kartotēka value=Kartoteka
- B1[1632] de=Kreislauf lv=cirkulācija value=Cirkulacija
- B1[1833] de=Marinade lv=marināde value=Marinada
- B1[1903] de=Montage lv=montāža value=Montaža
- B2[90] de=Arie lv=ārija value=Arija
- B2[338] de=Dahlie lv=dālija value=Dalija
- B2[1173] de=Kapitulation lv=kapitulācija value=Kapitulacija
- B2[1540] de=Sabotage lv=sabotāža value=Sabotaža
- B2[1796] de=Umriss lv=kontūra value=Kontura

### es+lt (11)

- A1[483] de=Problem lv=problēma value=problema
- A1[484] de=Programm lv=programma value=programa
- A2[1411] de=System lv=sistēma value=sistema
- B1[96] de=Ader lv=vēna value=vena
- B1[406] de=Betrag lv=summa value=suma
- B1[583] de=Diät lv=diēta value=dieta
- B1[597] de=Disziplin lv=disciplīna value=disciplina
- B1[605] de=Drama lv=drāma value=drama
- B1[2339] de=Routine lv=rutīna value=rutina
- B1[2880] de=Telegramm lv=telegramma value=telegrama

### nl+pt (11)

- A1[105] de=Boot lv=laiva value=Laiva
- A1[164] de=Erde lv=zeme value=Zeme
- A1[284] de=hinter lv=aiz value=Aiz
- A1[334] de=Kartoffel lv=kartupelis value=Kartupelis
- A1[337] de=Kleid lv=kleita value=Kleita
- A1[372] de=Licht lv=gaisma value=Gaisma
- A1[509] de=Schaf lv=aita value=Aita
- A1[601] de=Toilette lv=tualete value=Tualete
- A1[627] de=vierte lv=ceturtais value=Ceturtais
- A2[904] de=lügen lv=melot value=Melot

### bs+en (10)

- B1[11] de=Alarm lv=trauksme value=Alarm
- B1[718] de=eintreten lv=ieiet value=Enter
- B1[1115] de=Gitter lv=režģis value=Grid
- B1[1284] de=Hobel lv=ēvele value=Planer
- B1[2031] de=Operette lv=operete value=Operetta
- B1[2080] de=Periode lv=periods value=Period
- B1[2331] de=rollen lv=ripot value=To roll
- B1[2500] de=Schnitt lv=griezums value=Cut
- B1[3178] de=Wache lv=sardze value=Guard
- B2[410] de=Dock lv=doks value=Dock

### en+hu (10)

- A1[34] de=Antenne lv=antena value=Antenna
- A1[78] de=bei lv=pie value=At
- A1[295] de=in lv=iekšā • uz value=In • To
- A2[206] de=bauen lv=būvēt • celt • izgatavot value=Build • Build • Make
- A2[1636] de=über lv=virs • pāri • par value=Over • Over • For
- B1[1834] de=markieren lv=marķēt value=Mark
- B1[2067] de=Passierschein lv=caurlaide value=Pass
- B2[290] de=Bote lv=vēstnesis • ziņnesis • sūtnis value=Messenger • Messenger • Messenger
- B2[1486] de=Rabbiner lv=rabīns value=Rabbi
- C1[119] de=Partei lv=partija • puse value=Party • Party

### fi+is+nb+nn (10)

- A1[12] de=an lv=pie value=Juures • Peal • Ligi
- A1[78] de=bei lv=pie value=Juures
- A1[357] de=laufen lv=skriet • darboties value=Jooksma • Töötama
- A1[359] de=Laut lv=skaņa value=Heli
- A1[608] de=über lv=virs • par value=Kohal • Kohta
- A1[611] de=um lv=ap • pulksten value=Umbes • Kell
- A1[636] de=vor lv=pirms • priekšā value=Enne • Ees
- A1[644] de=was lv=kas • ko value=Mis • Mida
- A1[655] de=wenn lv=ja • kad value=Kui (tingimus) • Kui (aeg)
- A1[687] de=fernsehen lv=skatīties televizoru value=Telerit vaatama

### it+lb+pt (10)

- A1[33] de=angenehm lv=patīkams value=Patikams
- A1[45] de=Armbanduhr lv=rokas pulkstenis value=Rokas Pulkstis
- A1[311] de=wissen lv=zināt value=Zinat
- A2[79] de=Arbeiter lv=strādnieks value=Stradnieks
- A2[257] de=Bitte lv=lūgums value=Lugums
- A2[789] de=wissen lv=zināt value=Zinat
- A2[1216] de=Scheibe lv=šķēle value=Š .ēle
- B1[121] de=Anliegen lv=lūgums value=Lugums
- B1[154] de=Ansuchen lv=lūgums value=Lugums
- B2[1602] de=Bittschrift lv=lūgums value=Lugums

### bs+cs+sk (9)

- B1[638] de=Dutzend lv=ducis value=Tucet
- B1[1103] de=Gewehr lv=šautene value=Puška
- B1[1513] de=Klang lv=skaņa value=Zvuk
- B1[1736] de=Laut lv=skaņa value=Zvuk
- B1[2339] de=Routine lv=rutīna value=Rutina
- B1[2406] de=Schall lv=skaņa value=Zvuk
- B1[2896] de=Ton lv=skaņa value=Zvuk
- B2[405] de=Diskette lv=diskete value=Disketa
- B2[1784] de=Ultraschall lv=ultraskaņa value=Ultrazvuk

### en+fr+it (9)

- A2[982] de=Nachricht lv=ziņa value=Message
- A2[1425] de=Taube lv=balodis value=Pigeon
- A2[1506] de=Unterschrift lv=paraksts value=Signature
- B1[126] de=annehmbar lv=pieņemams value=Acceptable
- B1[1362] de=Infrastruktur lv=infrastruktūra value=Infrastructure
- B1[1892] de=mobil lv=mobils value=Mobile
- B1[3320] de=Beruf lv=profesija value=Profession
- B2[10] de=akzeptabel lv=pieņemams value=Acceptable
- B2[332] de=Chromosom lv=hromosoma value=Chromosome

### fr+it+pt (9)

- A2[263] de=Blitz lv=zibens value=Foudre
- A2[279] de=Boxen lv=bokss value=Boxe
- A2[532] de=fröhlich lv=priecīgs • jautrs value=Heureux • Joyeux
- A2[754] de=Kamel lv=kamielis value=Chameau
- A2[758] de=Kaninchen lv=trusis value=Lapin
- A2[921] de=Matratze lv=matracis value=Matelas
- A2[1028] de=Nuss lv=rieksts value=Noix
- A2[1067] de=perfekt lv=perfekts value=Parfait
- A2[1360] de=spülen lv=skalot value=Rincer

### nb+nn (9)

- A1[87] de=Besuch lv=apmeklējums value=besøk
- A1[218] de=Fußball lv=futbols value=fotball
- A1[233] de=Geschichte lv=stāsts value=historie
- A1[234] de=Geschwister lv=brāļi un māsas value=søsken
- A1[288] de=hübsch lv=glīts value=vakker
- A1[691] de=Essen lv=ēdiens • maltīte value=Toalett
- A1[692] de=Gemüse lv=dārzeņi value=Kjøkken-elskende
- A1[693] de=Obst lv=augļi value=Uvillig
- A1[694] de=Ferien lv=brīvdienas (skola) value=Vaheag (kul)

### bs+cs+da (8)

- B1[581] de=Detektiv lv=detektīvs value=Detektiv
- B1[1159] de=Grundsatz lv=princips value=Princip
- B1[1532] de=Klima lv=klimats value=Klima
- B1[1628] de=Kredit lv=kredīts value=Kredit
- B1[1698] de=Lack lv=laka value=Lak
- B1[2162] de=Prinzip lv=princips value=Princip
- B2[948] de=Geschoss lv=šāviņš value=Projektil
- B2[1354] de=Nachruf lv=nekrologs value=Nekrolog

### bs+da (8)

- B1[592] de=Diktat lv=diktāts value=Diktat
- B1[860] de=Fakultät lv=fakultāte value=Fakultet
- B1[1337] de=Identität lv=identitāte value=Identitet
- B1[1462] de=Kandidat lv=kandidāts value=Kandidat
- B1[1894] de=Model lv=fotomodelis value=Foto model
- B1[2689] de=Spitze lv=smaile value=Spike
- B1[3177] de=Vulkan lv=vulkāns value=Vulkan
- B2[1066] de=Harn lv=urīns value=Urin

### et+fi+is+nb+nn+sv (8)

- A1[635] de=von lv=no value=-st
- B1[1838] de=Mars lv=marss value=Marss
- B2[316] de=Bundeswehr lv=Vācijas bruņotie spēki value=Saksamaa relvajõud
- B2[669] de=Erdtrabant lv=zemes pavadonis value=Kuu (kaaslane)
- B2[1133] de=HIV lv=HIV (cilvēka imūndeficīta vīruss) value=HIV (inimese immuunpuudulikkuse viirus)
- B2[1134] de=HIV-negativ lv=HIV negatīvs value=HIV-negatiivne
- B2[1135] de=HIV-positiv lv=HIV pozitīvs value=HIV-positiivne
- C1[250] de=Bundesdeutsche lv=VFR pilsonis vai pilsone value=Saksamaa Liitvabariigi kodanik

### pl+ro+sk+sq+tr (8)

- A2[1442] de=Ticket lv=biļete value=Bilet
- B1[253] de=bearbeiten lv=apstrādāt value=Proces
- B1[1465] de=Kantine lv=bufete value=Bufet
- B1[2028] de=Olympiade lv=olimpiāde value=Olimpiada
- B1[2184] de=Pumpe lv=sūknis value=Pompa
- B1[2251] de=Referat lv=referāts value=Raport
- B1[3043] de=verarbeiten lv=apstrādāt value=Proces
- B2[1520] de=Relief lv=reljefs value=Teren

### bs+fi+is+nb+nn+sv (7)

- B1[1062] de=Genre lv=žanrs value=Žanr
- B1[1454] de=Kamin lv=kamīns value=Kamin
- B1[1463] de=Kanister lv=tvertne value=Kanister
- B1[2192] de=Quartal lv=ceturksnis value=Kvartal
- B2[1151] de=Honorar lv=honorārs value=Honorar
- B2[1198] de=Korps lv=korpuss value=Korpus
- C1[115] de=Notar lv=notārs value=Notar

### bs+hr (7)

- A1[0] de=Apfel lv=ābols value=jabuka
- A1[4] de=lernen lv=mācīties value=učiti
- A1[89] de=besuchen lv=apmeklēt value=posjetiti
- A1[218] de=Fußball lv=futbols value=fudbal
- A1[233] de=Geschichte lv=stāsts value=priča
- A1[251] de=Großeltern lv=vecvecāki value=baka i djed
- A1[288] de=hübsch lv=glīts value=lijep

### cs+da (7)

- A2[1060] de=Pass lv=pase value=Pas
- B1[245] de=Baskenmütze lv=berete value=Baret
- B1[1578] de=Konferenz lv=konference value=Konference
- B1[1642] de=Kristall lv=kristāls value=Krystal
- B1[2121] de=Plast lv=plastmasa value=Plast
- B1[3139] de=Videoclip lv=videoklips value=Videoklip
- B2[1179] de=Klappe lv=vārstulis • vārsts value=Ventil • Ventil

### da+en+fr+ro (7)

- A2[898] de=Lokal lv=restorāns value=Restaurant
- A2[1161] de=Restaurant lv=restorāns value=Restaurant
- B1[10] de=Akzent lv=akcents value=Accent
- B1[991] de=Gaststätte lv=restorāns value=Restaurant
- B1[1037] de=geistig lv=garīgs value=Mental
- B1[1439] de=Kabarett lv=kabarē value=Cabaret
- B1[1928] de=mündlich lv=mutisks value=Oral

### da+pl+sk+sq+tr (7)

- B1[1349] de=Inbegriff lv=simbols value=Symbol
- B1[1568] de=Komfort lv=komforts value=Komfort
- B1[1693] de=Labor lv=laboratorija value=Laboratorium
- B1[1694] de=Laboratorium lv=laboratorija value=Laboratorium
- B1[2929] de=trösten lv=mierināt value=Komfort
- B2[740] de=Export lv=eksports • izvedums value=Eksport • Eksport
- B2[1796] de=Umriss lv=kontūra value=Kontur

### en+fi+is+nb+nn+ro+sv (7)

- B1[2040] de=Organismus lv=organisms value=Organism
- B2[409] de=Dividende lv=dividende value=Dividend
- B2[1297] de=Materialismus lv=materiālisms value=Materialism
- B2[1417] de=Orgasmus lv=orgasms value=Orgasm
- B2[1497] de=Realismus lv=reālisms value=Realism
- B2[1640] de=Separatismus lv=separātisms value=Separatism
- C1[29] de=Freikörperkultur lv=nūdisms value=Nudism

### en+fi+is+nb+nn+sv (7)

- A2[624] de=Halle lv=halle value=Hall
- B1[1845] de=Masse lv=masa value=Mass
- B1[1925] de=Mumps lv=cūciņas value=Mumps
- B1[2184] de=Pumpe lv=sūknis value=Pump
- B1[2322] de=Risiko lv=risks value=Risk
- B2[415] de=Doping lv=dopinga līdzeklis value=Doping
- B2[1729] de=Terrorismus lv=terorisms value=Terrorism

### en+hr+sr (7)

- A1[349] de=Laden lv=veikals value=Shop
- A1[595] de=Teller lv=šķīvis value=Plate
- A2[88] de=Art lv=veids value=Way
- A2[582] de=Geschäft lv=veikals value=Shop
- A2[1092] de=Platte lv=plāksne value=Plate
- A2[1575] de=Weise lv=veids value=Way
- B1[2706] de=Sprung lv=lēciens value=Jump

### pl+ro+sk (7)

- A2[1339] de=Soße lv=mērce value=Sos
- B1[438] de=Bibel lv=bībele value=Biblia
- B1[510] de=Brühe lv=buljons value=Bulion
- B1[907] de=Fleischbrühe lv=buljons value=Bulion
- B1[1326] de=Hummer lv=omārs value=Homar
- B1[2830] de=Szene lv=aina value=Scena
- B1[3021] de=Unterführung lv=tunelis value=Tunel

### bs+lt+sl (6)

- A1[195] de=Foto lv=fotogrāfija value=fotografija
- A1[240] de=Giraffe lv=žirafe value=žirafa
- A1[436] de=nein lv=nē value=ne
- A1[591] de=Taxi lv=taksometrs value=taksi
- A1[616] de=Vase lv=vāze value=vaza
- A1[688] de=Fernsehen lv=televīzija value=televizija

### cs+fi+is+nb+nn+sv (6)

- A2[766] de=Karate lv=karatē value=Karate
- B1[594] de=Diplom lv=diploms value=Diplom
- B1[2084] de=Pfadfinder lv=skauts value=Skaut
- B1[2381] de=Samt lv=samts value=Samet
- B1[2881] de=Tempo lv=temps value=Tempo
- B2[92] de=Aster lv=astere value=Astra

### da+pl (6)

- A1[72] de=Banane lv=banāns value=Banan
- A2[291] de=Briefmarke lv=pastmarka value=Stempel
- A2[1381] de=Stempel lv=zīmogs value=Stempel
- B1[620] de=Dummheit lv=muļķība value=Nonsens
- B1[2193] de=Quatsch lv=muļķības value=Nonsens
- B1[2620] de=Siegel lv=zīmogs value=Stempel

### es+et (6)

- A1[343] de=Kraftwagen lv=automašīna value=auto
- A2[1068] de=Personal lv=personāls value=personal
- B1[1137] de=Graffiti lv=publiski sienu zīmējumi value=grafiti
- B1[1399] de=Islam lv=islāms value=islam
- B2[458] de=Dumping lv=dempings value=dumping
- B2[784] de=Festspiele lv=festivāls value=festival

### fr+it+lb+nl (6)

- A2[1055] de=Parfüm lv=smaržas value=Parfums
- B1[1456] de=Kampagne lv=kampaņa value=Campagne
- B1[2760] de=Stiftung lv=fonds value=Fonds
- B2[409] de=Dividende lv=dividende value=Dividende
- B2[814] de=Fonds lv=fonds value=Fonds
- C1[249] de=Botschafter lv=vēstnieks value=Ambassadeur

### hr+mk (6)

- A1[57] de=aus lv=no value=Од • Од
- A1[60] de=aufs lv=uz value=До *къде*?
- A1[130] de=dass lv=ka value=Што
- A1[134] de=der lv=vīriešu dzimtes noteiktais artikuls value=Определен член од машки род
- A1[531] de=schwimmen lv=peldēt value=Пливање
- A1[634] de=vom lv=no value=Од

### hu+sk (6)

- A1[159] de=E-Mail lv=e-pasts value=Email
- A1[601] de=Toilette lv=tualete value=WC
- A1[669] de=Zucker lv=cukurs value=Cukor
- A2[445] de=Fächer lv=vēdeklis value=Ventilátor
- B1[1395] de=Ironie lv=ironija value=Irónia
- B2[359] de=Dattel lv=datele value=Dátum

### bs+cs+ro (5)

- B1[177] de=Attribut lv=atribūts value=Atribut
- B1[428] de=Bewohner lv=iedzīvotājs value=Rezident
- B1[1975] de=Nerv lv=nervs value=Nerv
- B1[2835] de=Tagesordnung lv=darba kārtība value=Agenda
- C1[127] de=Prozessor lv=procesors value=Procesor

### bs+da+en (5)

- B1[1868] de=menschlich lv=cilvēcīgs value=Humane
- B1[2037] de=Ordner lv=mape value=Folder
- B1[2841] de=Tank lv=tvertne value=Tank
- B2[1760] de=Tusch lv=fanfāra value=Fanfare
- B2[1804] de=Umsturz lv=pučs value=Putsch

### bs+da+en+ro (5)

- B1[824] de=Ertrag lv=peļņa value=Profit
- B1[1105] de=Gewinn lv=peļņa value=Profit
- B1[1557] de=Knüller lv=grāvējs value=Blockbuster
- B1[2168] de=Profit lv=peļņa value=Profit
- B1[2325] de=Ritual lv=rituāls value=Ritual

### bs+es+lt (5)

- A2[320] de=Dame lv=dāma value=dama
- A2[925] de=Medizin lv=medicīna value=medicina
- A2[1090] de=Planet lv=planēta value=planeta
- A2[1409] de=Summe lv=summa value=suma
- A2[1440] de=Thema lv=temats value=tema

### bs+hu (5)

- B1[2082] de=Petroleum lv=petroleja value=Kerozin
- B1[2089] de=Pfefferminze lv=piparmētra value=Menta
- B1[2844] de=Tarif lv=tarifs value=Tarifa
- B2[8] de=Akrobatik lv=akrobātika value=Akrobatika
- C1[366] de=Gesichtskreis lv=redzesloks • apvārsnis value=Horizont • Horizont

### bs+pl+ro+sk+sq+tr (5)

- B1[2169] de=Prognose lv=prognoze value=Prognoza
- B2[1486] de=Rabbiner lv=rabīns value=Rabin
- B2[1553] de=Satzung lv=statūti value=Statut
- B2[1567] de=Schauplatz lv=arēna value=Arena
- C1[249] de=Botschafter lv=vēstnieks value=Ambasador

### bs+pl+sk (5)

- B1[225] de=Auszug lv=izraksts value=Ekstrakt
- B1[406] de=Betrag lv=summa value=Suma
- B1[558] de=Dampf lv=tvaiks value=Para
- B1[1095] de=Geste lv=žests value=Gest
- B1[2616] de=Sieb lv=siets value=Sito

### da+en+fi+is+nb+nn+sv (5)

- A1[546] de=September lv=septembris value=September
- A2[361] de=Drucker lv=printeris value=Printer
- A2[1584] de=Weste lv=veste value=Vest
- B1[1850] de=Mast lv=masts value=Mast
- B1[2598] de=Semester lv=semestris value=Semester

### da+en+hu (5)

- A1[216] de=für lv=priekš value=For • For
- A1[608] de=über lv=virs • par value=Over • For
- B1[542] de=Chip lv=mikroshēma value=Chip
- B1[2141] de=Pollen lv=ziedputekšņi value=Pollen
- B1[2687] de=spinnen lv=vērpt value=Spin

### da+en+is+nb+nn (5)

- A2[627] de=Hammer lv=āmurs value=Hammer
- A2[712] de=intelligent lv=inteliģents value=Intelligent
- A2[1022] de=Notiz lv=piezīme value=Note
- B1[124] de=Anmerkung lv=piezīme value=Note
- B1[338] de=Bemerkung lv=piezīme value=Note

### da+en+sk (5)

- A1[262] de=halb lv=pus value=Side
- A1[263] de=Hälfte lv=puse value=Side
- A1[309] de=Keks lv=cepums value=Cookie
- A2[45] de=anheizen lv=iekurt value=Kindle
- A2[262] de=blind lv=akls value=Blind

### da+fr+is+nb+nn (5)

- A1[23] de=Adresse lv=adrese value=Adresse
- A1[350] de=Lampe lv=lampa value=Lampe
- A2[320] de=Dame lv=dāma value=Dame
- A2[1422] de=Tanz lv=deja value=Danse
- B1[142] de=Anschrift lv=adrese value=Adresse

### da+fr+ro (5)

- A1[649] de=Wein lv=vīns value=Vin
- B1[1599] de=Kosmos lv=visums value=Univers
- B1[2060] de=Paradies lv=paradīze value=Paradis
- B1[3236] de=Weltall lv=visums value=Univers
- B2[942] de=Gesamtzahl lv=kopskaits value=Total

### da+sq+tr (5)

- A2[765] de=Karamelle lv=karameles value=Karameller
- A2[1428] de=Technik lv=tehnika value=Teknik
- A2[1517] de=Verkehr lv=satiksme value=Trafik
- B1[167] de=Arithmetik lv=aritmētika value=Aritmetik
- B1[1194] de=Handgriff lv=paņēmiens value=Teknik

### fi+hu+is+nb+nn+sv (5)

- A2[1041] de=Omelett lv=omlete value=Omlett
- B1[1698] de=Lack lv=laka value=Lakk
- B1[2031] de=Operette lv=operete value=Operett
- B1[3139] de=Videoclip lv=videoklips value=Videoklipp
- B2[410] de=Dock lv=doks value=Dokk

### fi+is+nb+nn+pl+sk+sq+sv+tr (5)

- A2[953] de=Mixer lv=mikseris value=Mikser
- B1[846] de=Experte lv=eksperts value=Ekspert
- B1[1660] de=Kunde lv=klients value=Klient
- B1[2877] de=Telefax lv=fakss value=Faks
- B2[53] de=Abonnent lv=abonents value=Abonent

### hr+ro+sr (5)

- A1[297] de=ja lv=jā value=Da
- A1[485] de=Pullover lv=džemperis value=Pulover
- A2[984] de=Nachspeise lv=deserts value=Desert
- A2[1410] de=Sweater lv=svīteris value=Pulover
- B1[972] de=Futter lv=barība value=Hrana

### hu+pl+sk+sq+tr (5)

- A2[1284] de=Sessel lv=atzveltnes krēsls value=Fotel
- B1[1401] de=Jacht lv=jahta value=Jacht
- B1[1618] de=Kranz lv=vainags value=Korona
- B1[1645] de=Krone lv=kronis value=Korona
- B2[91] de=Armsessel lv=atzveltnes krēsls value=Fotel

### lb+sk (5)

- A1[31] de=anhalten lv=apstāties value=Stop
- A1[404] de=Meter lv=metrs value=Meter
- A2[1375] de=stehen bleiben lv=apstāties value=Stop
- A2[1394] de=stoppen lv=apturēt value=Stop
- B1[1188] de=halt machen lv=apstāties value=Stop

### mk+ru (5)

- A1[11] de=Alter lv=vecums value=Возраст
- A1[80] de=Bein lv=kāja value=Нога
- A1[96] de=Bier lv=alus value=Пиво
- A1[121] de=Café lv=kafejnīca value=Кафе
- A2[745] de=Kaffeehaus lv=kafejnīca value=Кафе

### pl+pt+sk+sq+tr (5)

- A2[550] de=Galerie lv=galerija value=Galeria
- A2[923] de=Mayonnaise lv=majonēze value=Majonez
- B1[2146] de=Porzellan lv=porcelāns value=Porcelana
- B2[658] de=Epidemie lv=epidēmija value=Epidemia
- B2[1448] de=Philologie lv=filoloģija value=Filologia

### pl+ro (5)

- A1[406] de=Million lv=miljons value=Milion
- A2[77] de=Apparat lv=aparāts value=Aparat
- A2[170] de=Autobahn lv=autoceļš value=Autostrada
- B1[17] de=Amateur lv=amatieris value=Amator
- B1[1719] de=Landstraße lv=šoseja value=Autostrada

### ro+tr (5)

- A1[151] de=Dusche lv=duša value=Duş
- A1[220] de=Garage lv=garāža value=Garaj
- A1[255] de=Gruppe lv=grupa value=Grup
- A2[1422] de=Tanz lv=deja value=Dans
- B1[494] de=Brause lv=duša value=Duş

### bs+cs+da+fi+is+nb+nn+sv (4)

- B1[867] de=Fasching lv=karnevāls value=Karneval
- B1[1380] de=Instinkt lv=instinkts value=Instinkt
- B1[1474] de=Karneval lv=karnevāls value=Karneval
- B1[2010] de=Objekt lv=objekts value=Objekt

### bs+et+sl (4)

- A1[25] de=Album lv=albums value=album
- A1[185] de=Film lv=filma value=film
- A1[470] de=Park lv=parks value=park
- A1[593] de=Telefon lv=telefons value=telefon

### bs+pl (4)

- B1[417] de=Beutel lv=maisiņš value=Torba
- B1[482] de=Botschaft lv=vēstniecība value=Ambasada
- B2[355] de=dasjenige lv=tas value=To
- C1[357] de=Gesandtschaft lv=sūtniecība value=Ambasada

### bs+sq+tr (4)

- B1[1642] de=Kristall lv=kristāls value=Kristal
- B1[1829] de=Mandel lv=mandele value=Badem
- B1[2336] de=rösten lv=grauzdēt value=Tost
- B1[3265] de=Wimperntusche lv=skropstu tuša value=Maskara

### cs+da+en+fr+pl+sk+sq+tr (4)

- A2[935] de=Menü lv=ēdienkarte value=Menu
- A2[1349] de=Speisekarte lv=ēdienkarte value=Menu
- B1[2382] de=Sanatorium lv=sanatorija value=Sanatorium
- B2[1083] de=Heilstätte lv=sanatorija value=Sanatorium

### cs+da+pl+sk+sq+tr (4)

- B1[836] de=Erzeugnis lv=produkts value=Produkt
- B1[1926] de=Mundart lv=dialekts value=Dialekt
- B2[391] de=Dialekt lv=dialekts value=Dialekt
- B2[410] de=Dock lv=doks value=Dok

### cs+en+fr (4)

- B1[94] de=Abwesenheit lv=prombūtne value=Absence
- B2[354] de=Dasein lv=esamība • eksistence value=Existence • Existence
- B2[736] de=Existenz lv=eksistence value=Existence
- B2[1630] de=Sein lv=esamība value=Existence

### cs+fi+is+nb+nn+pl+sk+sq+sv+tr (4)

- A2[1083] de=Picknick lv=pikniks value=Piknik
- B1[1582] de=Konkurrent lv=konkurents value=Konkurent
- B1[2853] de=Tatsache lv=fakts value=Fakt
- B1[2923] de=Triumph lv=triumfs value=Triumf

### cs+fr (4)

- A2[606] de=Grill lv=grils value=Gril
- B1[2180] de=Psychologie lv=psiholoģija value=Psychologie
- B1[3333] de=Steuer lv=stūre value=Volant
- B2[277] de=Blutarmut lv=mazasinība value=Anémie

### cs+fr+ro (4)

- A2[550] de=Galerie lv=galerija value=Galerie
- B1[1395] de=Ironie lv=ironija value=Ironie
- B1[1816] de=Magie lv=maģija value=Magie
- B2[328] de=Chirurgie lv=ķirurģija value=Chirurgie

### cs+hr+sk+sr (4)

- A1[2] de=Wasser lv=ūdens value=Voda
- A1[509] de=Schaf lv=aita value=Ovce
- A1[587] de=Tante lv=tante value=Teta
- A2[85] de=Arm lv=roka value=Ruka

### cs+hu+sk (4)

- A1[72] de=Banane lv=banāns value=Banán
- A1[616] de=Vase lv=vāze value=Váza
- A2[314] de=Creme lv=krēms value=Krém
- A2[490] de=Filet lv=fileja value=Filé

### da+fi+is+nb+nn+pl+sk+sq+sv+tr (4)

- A2[831] de=Konto lv=konts value=Konto
- A2[1089] de=Plakat lv=plakāts value=Plakat
- B1[1813] de=Luxus lv=luksuss value=Luksus
- C1[565] de=Hektar lv=hektārs value=Hektar

### da+hu+ro (4)

- B1[2555] de=schwellen lv=pampt value=Pamp
- B1[2714] de=stabil lv=stabils value=Stabil
- B2[1222] de=Laufwerk lv=dzinējs • dzinis value=Motor • Motor
- B2[1700] de=steril lv=sterils value=Steril

### es+pt (4)

- A1[89] de=besuchen lv=apmeklēt value=visitar
- A1[93] de=bitte lv=lūdzu value=por favor
- A1[285] de=hoch lv=augsts value=alto
- A1[288] de=hübsch lv=glīts value=bonito

### pl+tr (4)

- A1[23] de=Adresse lv=adrese value=Adres
- A1[70] de=Balkon lv=balkons value=Balkon
- B1[142] de=Anschrift lv=adrese value=Adres
- B1[1731] de=Laube lv=lapene value=Balkon

### bg+hr+mk+ru+sr+uk (3)

- B1[1838] de=Mars lv=marss value=Марс
- B2[1291] de=Marxismus lv=marksisms value=Марксизм
- C1[551] de=Weidenkätzchen lv=pūpols value=Мак

### bs+cs+da+en+fi+is+nb+nn+pl+ro+sk+sv (3)

- B1[285] de=Begabung lv=talants value=Talent
- B1[973] de=Gabe lv=talants value=Talent
- B1[2839] de=Talent lv=talants value=Talent

### bs+cs+da+fi+hu+is+nb+nn+pl+sk+sq+sv+tr (3)

- B1[2170] de=Projektor lv=projektors value=Projektor
- B1[2285] de=Rektor lv=rektors value=Rektor
- B2[1312] de=Mikrofilm lv=mikrofilma value=Mikrofilm

### bs+cs+da+pl+ro+sk+sq+tr (3)

- B1[402] de=Beton lv=betons value=Beton
- B1[2048] de=Ozon lv=ozons value=Ozon
- B1[2182] de=Puls lv=pulss value=Puls

### bs+cs+fi+is+nb+nn+sv (3)

- B2[404] de=Dirigent lv=diriģents value=Dirigent
- B2[1201] de=Kosmonaut lv=kosmonauts value=Kosmonaut
- B2[1205] de=Laie lv=diletants value=Diletant

### bs+cs+hu+pl+sk+sq+tr (3)

- B1[2139] de=Poliklinik lv=poliklīnika value=Poliklinika
- B2[1171] de=Kapitalist lv=kapitālists value=Kapitalista
- B2[1183] de=Klinik lv=klīnika value=Klinika

### bs+es+et (3)

- A1[63] de=Auto lv=automašīna value=auto
- A2[897] de=Logo lv=logotips value=logo
- A2[962] de=Monitor lv=monitors value=monitor

### bs+es+sl (3)

- A1[72] de=Banane lv=banāns value=banana
- A1[393] de=Mandarine lv=mandarīns value=mandarina
- A1[649] de=Wein lv=vīns value=vino

### bs+fi+is+nb+nn+pl+sk+sq+sv+tr (3)

- B1[875] de=Fax lv=fakss value=Faks
- B1[2038] de=Organ lv=orgāns value=Organ
- B1[2611] de=Sex lv=sekss value=Seks

### bs+it+nl (3)

- B1[99] de=Aggression lv=agresija value=Agresija
- B1[1693] de=Labor lv=laboratorija value=Laboratorija
- B1[1694] de=Laboratorium lv=laboratorija value=Laboratorija

### bs+pl+sq+tr (3)

- B1[443] de=Bildschirm lv=ekrāns value=Ekran
- B1[941] de=Frauenarzt lv=ginekologs value=Ginekolog
- B1[1746] de=Lehm lv=māls value=Glina

### cs+da+en (3)

- A2[202] de=Basketball lv=basketbols value=Basketball
- B1[536] de=Casting lv=aktieru atlase value=Casting
- B1[537] de=Cello lv=čells value=Cello

### cs+en+ro (3)

- B1[2247] de=Redakteur lv=redaktors value=Editor
- B1[2611] de=Sex lv=sekss value=Sex
- B2[255] de=Prüfer lv=auditors value=Auditor

### cs+et (3)

- C1[565] de=Hektar lv=hektārs value=hektar
- C1[570] de=Panter lv=pantera value=panter
- C1[571] de=Panther lv=pantera value=panter

### cs+hr+sr (3)

- A1[131] de=Datum lv=datums value=Datum
- A1[407] de=Minute lv=minūte value=Minuta
- B2[359] de=Dattel lv=datele value=Datum

### cs+pl+ro+sk (3)

- A2[191] de=Ballett lv=balets value=Balet
- A2[1478] de=Tunnel lv=tunelis value=Tunel
- B1[544] de=Chirurg lv=ķirurgs value=Chirurg

### da+en+fr+is+nb+nn (3)

- A1[406] de=Million lv=miljons value=Million
- A2[676] de=Hockey lv=hokejs value=Hockey
- A2[1316] de=Signal lv=signāls value=Signal

### da+en+fr+pl+sk+sq+tr (3)

- B1[749] de=Ensemble lv=ansamblis value=Ensemble
- B1[1062] de=Genre lv=žanrs value=Genre
- B1[2645] de=Solarium lv=solārijs value=Solarium

### da+en+pl+ro+sk+sq+tr (3)

- A2[938] de=Metall lv=metāls value=Metal
- B1[990] de=Gasthaus lv=viesnīca value=Hotel
- B2[1713] de=Striptease lv=striptīzs value=Striptease

### da+en+sq+tr (3)

- A2[1084] de=Pille lv=tablete value=Tablet
- A2[1173] de=Roller lv=skrejritenis value=Scooter
- A2[1415] de=Tablette lv=tablete value=Tablet

### da+hu (3)

- A1[652] de=welcher lv=kurš value=WHO
- B2[278] de=Blutspender lv=donors value=Donor
- B2[1574] de=schelten lv=bārt • bārties value=To bart • To bart

### da+is+nb+nn+ro (3)

- A2[1002] de=negativ lv=negatīvs value=Negativ
- A2[1106] de=privat lv=privāts value=Privat
- A2[1280] de=Serie lv=sērija value=Serie

### da+it+lb+nl (3)

- B1[1905] de=Moos lv=sūna value=Mos
- B1[2711] de=Spule lv=spole value=Spole
- B2[1289] de=Marssonde lv=marsa zonde value=Mars sonde

### en+fi+sv (3)

- A1[350] de=Lampe lv=lampa value=Lamp
- A1[455] de=Nummer lv=numurs value=Number
- A2[918] de=Maske lv=maska value=Mask

### en+hu+ro (3)

- B1[2735] de=Stecknadel lv=kniepadata value=Pin
- B2[740] de=Export lv=eksports • izvedums value=Export • Export
- B2[1450] de=Pieper lv=peidžeris value=Pager

### en+lb+nl (3)

- A2[1037] de=offen lv=atvērts value=Open
- B1[242] de=Banknote lv=banknote value=Banknote
- B1[1568] de=Komfort lv=komforts value=Comfort

### en+pl+sk+sq+tr (3)

- B1[1407] de=Jäger lv=mednieks value=Hunter
- B1[3252] de=westlich lv=rietumu- value=Western
- C2[119] de=Fallschirmspringen lv=lēkšana ar izpletni value=Skydiving

### en+pt (3)

- A1[520] de=Schokolade lv=šokolāde value=Chocolate
- A2[609] de=Gulasch lv=gulašs value=Goulash
- A2[1055] de=Parfüm lv=smaržas value=Perfumes

### en+pt+ro (3)

- A2[1099] de=populär lv=populārs value=Popular
- B1[1657] de=kulturell lv=kulturāls value=Cultural
- B1[2605] de=senkrecht lv=vertikāls value=Vertical

### et+sl (3)

- A1[103] de=blond lv=blonds value=blond
- A1[453] de=November lv=novembris value=november
- A1[546] de=September lv=septembris value=september

### fi+hu+sv (3)

- A1[246] de=Gramm lv=grams value=Gramm
- A2[765] de=Karamelle lv=karameles value=Karamell
- B1[28] de=Allergie lv=alerģija value=Allergia

### fi+is+it+lb+nb+nl+nn+sv (3)

- B1[1575] de=Kompromiss lv=kompromiss value=Kompromiss
- B1[2182] de=Puls lv=pulss value=Pulss
- B2[900] de=Geländelauf lv=kross value=Kross

### fi+ro+sv (3)

- A2[699] de=Idee lv=ideja value=Idee
- A2[1068] de=Personal lv=personāls value=Personal
- B1[174] de=Athletik lv=atlētika value=Atletism

### fr+pl+ro+sk+sq+tr (3)

- A2[557] de=Gas lv=gāze value=Gaz
- B1[2870] de=Teig lv=mīkla value=Puzzle
- B2[903] de=gelaunt lv=omā value=Oh

### fr+pt (3)

- A1[158] de=elf lv=vienpadsmit value=Onze
- B1[1441] de=Kabine lv=kabīne value=Cabine
- B1[2598] de=Semester lv=semestris value=Semestre

### hr+sk+sr (3)

- A1[44] de=Arm lv=roka value=Ruka
- A1[143] de=drei lv=trīs value=Tri
- A2[74] de=Anzeige lv=sludinājums • paziņojums value=Reklama • Reklama

### hu+pt (3)

- B1[599] de=Domino lv=domino value=Dominó
- B1[862] de=falls lv=ja value=Ha
- B1[1439] de=Kabarett lv=kabarē value=Kabaré

### hu+ro (3)

- A2[656] de=Hering lv=siļķe value=Hering
- B2[1090] de=Heldentat lv=varoņdarbs value=Feat
- B2[1234] de=leichtsinnig lv=vieglprātīgs value=Frivol

### is+lb+nb+nl+nn (3)

- A2[68] de=Antibiotikum lv=antibiotika value=Antibiotika
- A2[776] de=Kasten lv=kaste value=Kaste
- A2[805] de=Kiste lv=kaste value=Kaste

### pl+sq (3)

- A1[195] de=Foto lv=fotogrāfija value=Fotografia
- A1[527] de=Schüler lv=skolnieks value=Student
- A2[516] de=Fotografie lv=fotogrāfija value=Fotografia

### bs+cs+da+en+fr+pl+ro+sk+sq+tr (2)

- B1[2639] de=Slalom lv=slaloms value=Slalom
- B1[2640] de=Slalomlauf lv=slaloms value=Slalom

### bs+cs+da+en+pl+ro+sk+sq+tr (2)

- B1[2602] de=Senior lv=seniors value=Senior
- B2[301] de=Brettsegeln lv=vindsērfings value=Windsurfing

### bs+cs+da+fi+is+nb+nn+pl+sk+sq+sv+tr (2)

- B1[2174] de=Prospekt lv=prospekts value=Prospekt
- B2[9] de=Akt lv=akts • dokuments value=Akt • Dokument

### bs+cs+da+fi+is+nb+nn+ro+sv (2)

- B1[2760] de=Stiftung lv=fonds value=Fond
- B2[814] de=Fonds lv=fonds value=Fond

### bs+cs+da+pl+sk (2)

- B1[465] de=Block lv=bloks value=Blok
- B1[1539] de=Klotz lv=klucis value=Blok

### bs+cs+fi+is+it+lb+nb+nl+nn+sv (2)

- B1[2068] de=Paste lv=pasta value=Pasta
- B1[2838] de=Taktik lv=taktika value=Taktika

### bs+cs+it+lb+nl+pl+sk+sq+tr (2)

- B1[2052] de=Panik lv=panika value=Panika
- B1[2294] de=Republik lv=republika value=Republika

### bs+cs+pl+sk (2)

- B1[623] de=Duo lv=duets value=Duet
- B2[744] de=Fabel lv=fabula value=Bajka

### bs+cs+pt (2)

- B1[16] de=Alternative lv=alternatīva value=Alternativa
- B1[535] de=Cartoon lv=karikatūra value=Karikatura

### bs+da+en+fi+is+nb+nn+pl+ro+sk+sq+sv+tr (2)

- B1[736] de=Element lv=elements value=Element
- B1[2293] de=Reporter lv=reportieris value=Reporter

### bs+da+en+fr+pl+ro+sk+sq+tr (2)

- B1[1531] de=Klemme lv=spaile value=Terminal
- B2[92] de=Aster lv=astere value=Aster

### bs+da+en+fr+ro (2)

- B1[747] de=Endstation lv=galastacija value=Terminus
- B1[2043] de=Original lv=oriģināls value=Original

### bs+da+fi+is+nb+nn+sk+sv (2)

- C1[570] de=Panter lv=pantera value=Panter
- C1[571] de=Panther lv=pantera value=Panter

### bs+da+fi+is+nb+nn+sv (2)

- B1[1468] de=Kapital lv=kapitāls value=Kapital
- B2[1682] de=Spruchband lv=transparents • plakāts value=Transparent • Plakat

### bs+da+hu (2)

- B1[3189] de=Währung lv=valūta value=Valuta
- B2[1254] de=Lochband lv=perfolente value=Perfolent

### bs+da+pl+ro+sk+sq+tr (2)

- B1[1114] de=Gips lv=ģipsis value=Gips
- B1[2881] de=Tempo lv=temps value=Temp

### bs+da+ro (2)

- B1[2133] de=Pol lv=pols value=Pol
- B1[2693] de=spontan lv=spontāns value=Spontan

### bs+en+pl+sk+sq+tr (2)

- B1[2258] de=Region lv=reģions value=Region
- B2[659] de=Epoche lv=laikmets value=Era

### bs+fi+is+nb+nn+pl+sk+sv (2)

- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[550] de=Cursor lv=kursors value=Kursor

### bs+it+nl+pt (2)

- B1[9] de=Aktion lv=akcija value=Akcija
- C1[33] de=Aktie lv=akcija value=Akcija

### bs+pl+ro+sq+tr (2)

- B1[2145] de=Porträt lv=portrets value=Portret
- B2[1153] de=Hypnose lv=hipnoze value=Hipnoza

### bs+ro+sq+tr (2)

- B1[187] de=Aufschwung lv=uzplaukums value=Bum
- B1[2059] de=Papst lv=pāvests value=Papa

### bs+sk (2)

- B1[877] de=Feder lv=spalva value=Pero
- B1[2572] de=See lv=jūra value=More

### cs+da+en+fr+it+pl+pt+ro+sq+tr (2)

- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton

### cs+da+en+pl+sk+sq+tr (2)

- B1[2827] de=Symbol lv=simbols value=Symbol
- B2[1648] de=Sinnbild lv=simbols value=Symbol

### cs+da+fi+is+lb+nb+nl+nn+pl+sk+sq+sv+tr (2)

- A2[95] de=Asthma lv=astma value=Astma
- A2[750] de=Kakao lv=kakao value=Kakao

### cs+da+is+nb+nn (2)

- A2[772] de=Kasino lv=kazino value=Kasino
- A2[1111] de=Publikum lv=publika value=Publikum

### cs+en+fi+is+nb+nn+sv (2)

- B1[580] de=Detail lv=detaļa value=Detail
- B1[721] de=Einzelheit lv=detaļa value=Detail

### cs+fi+it+lb+nl+sk+sv (2)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[343] de=Kraftwagen lv=automašīna value=Auto

### cs+hu+pl+sk (2)

- A2[1428] de=Technik lv=tehnika value=Technika
- B1[1194] de=Handgriff lv=paņēmiens value=Technika

### cs+hu+pl+sk+sq+tr (2)

- B2[795] de=Flachs lv=lini value=Len
- B2[1172] de=kapitalistisch lv=kapitālistisks value=Kapitalista

### cs+it (2)

- A2[833] de=Kopie lv=kopija value=Kopie
- A2[1040] de=Olive lv=olīva value=Oliva

### cs+it+lb+nl (2)

- B1[2113] de=Pistole lv=pistole value=Pistole
- C1[245] de=Bilanz lv=bilance value=Bilance

### cs+pl+ro+sk+sq+tr (2)

- A2[1404] de=Stress lv=stress value=Stres
- C2[115] de=Erfrischungsraum lv=bufete value=Bufet

### cs+pl+sq+tr (2)

- A2[436] de=Essig lv=etiķis value=Ocet
- B1[1814] de=Macht lv=vara value=Moc

### cs+ro+sk (2)

- A1[23] de=Adresse lv=adrese value=Adresa
- A2[279] de=Boxen lv=bokss value=Box

### da+en+fi+fr+is+nb+nn+sv (2)

- A2[1478] de=Tunnel lv=tunelis value=Tunnel
- B1[3021] de=Unterführung lv=tunelis value=Tunnel

### da+en+fi+is+nb+nn+ro+sv (2)

- A1[56] de=August lv=augusts value=August
- B2[1416] de=Organist lv=ērģelnieks value=Organist

### da+en+fr+it+lb+nl+ro (2)

- B1[2725] de=ständig lv=pastāvīgs value=Permanent
- B1[3038] de=Veilchen lv=vijolīte value=Violet

### da+en+fr+pt+ro (2)

- B1[515] de=brutal lv=brutāls value=Brutal
- B2[1537] de=rührselig lv=sentimentāls value=Sentimental

### da+en+hr+sr (2)

- A1[121] de=Café lv=kafejnīca value=Cafe
- A2[745] de=Kaffeehaus lv=kafejnīca value=Cafe

### da+en+pl (2)

- A1[561] de=Sofa lv=dīvāns value=Sofa
- B1[2652] de=Sonnenschirm lv=saulsargs value=Parasol

### da+en+pl+sk+sq+tr (2)

- B1[1771] de=Lichtung lv=izcirtums value=Clearing
- B1[2117] de=Planetarium lv=planetārijs value=Planetarium

### da+fr+sq+tr (2)

- B1[1191] de=Handbuch lv=rokasgrāmata value=Manuel
- B2[1239] de=Leitfaden lv=rokasgrāmata value=Manuel

### da+fr+tr (2)

- A1[381] de=Liste lv=saraksts value=Liste
- B2[1966] de=Verzeichnis lv=saraksts value=Liste

### da+hu+is+nb+nn (2)

- A1[271] de=Handy lv=mobilais tālrunis value=Mobiltelefon
- A1[382] de=Liter lv=litrs value=Liter

### da+it (2)

- A1[143] de=drei lv=trīs value=Tre
- A1[520] de=Schokolade lv=šokolāde value=Chokolade

### da+pt (2)

- A2[714] de=Interesse lv=interese value=Interesse
- B1[1640] de=Krise lv=krīze value=Krise

### en+es (2)

- A1[436] de=nein lv=nē value=No
- A1[447] de=nicht lv=ne value=No

### en+fr+pl+ro (2)

- A2[959] de=Moment lv=brīdis value=Moment
- B1[3226] de=Weile lv=brīdis value=Moment

### en+gr (2)

- B1[2799] de=Strichkode lv=svītrkods value=Barcode
- B2[529] de=Eilbote lv=ziņnesis • kurjers value=Messenger • Courier

### en+gr+ro (2)

- A2[305] de=CD-Player lv=kompaktdisku atskaņotājs value=CD player
- B1[1917] de=Mousepad lv=peles paliktnis value=Mouse pad

### en+it+lb+nl (2)

- A2[1356] de=Sport lv=sports value=Sports
- B1[939] de=Fortschritt lv=progress value=Progress

### en+nl (2)

- A1[240] de=Giraffe lv=žirafe value=Giraffe
- A1[332] de=Kamera lv=kamera value=Camera

### en+pl+sk (2)

- B1[298] de=begrenzen lv=ierobežot value=Limit
- B1[704] de=einschränken lv=ierobežot value=Limit

### fi+gr+is+nb+nn+sv (2)

- A2[1418] de=Tal lv=ieleja value=Org
- B1[2157] de=Preiselbeere lv=brūklene value=Pohl

### fi+is+it+lb+nb+nl+nn+pt+sv (2)

- B1[1939] de=Nabel lv=naba value=Naba
- C1[184] de=Wettbewerb lv=konkurss value=Konkurss

### fi+is+it+nb+nl+nn+pt+sv (2)

- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto

### fi+is+nb+sv (2)

- A1[439] de=neu lv=jauns (par lietām) value=Uus (asjade kohta)
- A1[660] de=wie lv=kā • cik value=Kuidas • Kui

### fi+lb+nl+sv (2)

- A2[1409] de=Summe lv=summa value=Summa
- B1[406] de=Betrag lv=summa value=Summa

### fr+is+nb+nn (2)

- A1[396] de=März lv=marts value=Mars
- A1[498] de=rosa lv=rozā value=Rose

### fr+it+ro (2)

- A2[750] de=Kakao lv=kakao value=Cacao
- B1[1568] de=Komfort lv=komforts value=Confort

### fr+lb+nl (2)

- A1[151] de=Dusche lv=duša value=Douche
- B1[494] de=Brause lv=duša value=Douche

### fr+nl (2)

- A1[506] de=Salat lv=salāti value=Salade
- A1[587] de=Tante lv=tante value=Tante

### fr+sq+tr (2)

- A2[874] de=Lehrbuch lv=mācību grāmata value=Manuel
- A2[1225] de=Schinken lv=šķiņķis value=Jambon

### gr+is+nb+nn (2)

- A2[274] de=Bonbon lv=konfekte value=Comm
- A2[827] de=Konfekt lv=konfekte value=Comm

### hr+sl (2)

- A1[1] de=Brot lv=maize value=kruh
- A1[267] de=Hand lv=plauksta value=dlan

### hu+pl (2)

- A1[381] de=Liste lv=saraksts value=Lista
- A2[194] de=Bank lv=banka value=Bank

### hu+sq+tr (2)

- A2[1341] de=Spaghetti lv=spageti value=Spagetti
- B1[2137] de=Police lv=polise value=Politika

### is+nb+nn+sq+tr (2)

- A2[78] de=Äquator lv=ekvators value=Ekvator
- A2[314] de=Creme lv=krēms value=Krem

### is+nb+nn+sv (2)

- A1[26] de=also lv=tātad value=Seega
- A1[94] de=Bitte lv=lūgums value=Palve

### it+lb (2)

- A1[94] de=Bitte lv=lūgums value=Lugums
- B1[546] de=Clip lv=klips value=Clips

### it+lb+nl+pl+pt+sq+tr (2)

- C1[570] de=Panter lv=pantera value=Pantera
- C1[571] de=Panther lv=pantera value=Pantera

### it+ro (2)

- A1[236] de=gestern lv=vakar value=Ieri
- A2[794] de=Keyboard lv=tastatūra value=Tastatura

### lb+pt (2)

- A1[502] de=Rose lv=roze value=Rosa
- B2[1287] de=Marketing lv=marketings • tirgzinība value=Marketing • Tirgzinība

### lt+sl (2)

- A1[330] de=Kaffee lv=kafija value=kava
- A1[587] de=Tante lv=tante value=teta

### mk+sr (2)

- A1[87] de=Besuch lv=apmeklējums value=посета
- A1[218] de=Fußball lv=futbols value=фудбал

### pl+pt (2)

- A2[795] de=Kinderarzt lv=bērnu ārsts value=Pediatra
- A2[1434] de=Temperatur lv=temperatūra value=Temperatura

### pl+ro+sq (2)

- A1[131] de=Datum lv=datums value=Data
- B2[359] de=Dattel lv=datele value=Data

### pt+ro (2)

- A2[1004] de=nervös lv=nervozs value=Nervos
- B1[1532] de=Klima lv=klimats value=Clima

### sk+sl (2)

- A1[382] de=Liter lv=litrs value=liter
- A1[671] de=Zug lv=vilciens value=vlak

### sk+tr (2)

- A1[46] de=Ärztin lv=ārste value=Doktor
- A1[182] de=Fernseher lv=televizors value=TV

### bg+da+en+hr+mk+ro+sr (1)

- B1[1852] de=matt lv=blāvs value=Dim

### bg+en (1)

- A2[30] de=aktuell lv=aktuāls • pašreizējs value=Current • Current

### bg+en+hr+mk+pl+ro+sk+sq+sr+tr (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### bg+en+hr+mk+sr (1)

- B1[3213] de=Wechsel lv=maiņa value=Shift

### bg+hr+mk+ru (1)

- A1[459] de=oder lv=vai • jeb value=Или • Или

### bg+ru+uk (1)

- A1[218] de=Fußball lv=futbols value=футбол

### bs+cs+da+en (1)

- B1[1207] de=hauen lv=sist value=Hit

### bs+cs+da+en+fi+fr+hr+is+nb+nn+pl+ro+sk+sq+sr+sv+tr (1)

- B1[1726] de=Laser lv=lāzers value=Laser

### bs+cs+da+en+fi+fr+hu+is+it+lb+nb+nl+nn+pl+ro+sk+sq+sv+tr (1)

- B2[11] de=Alibi lv=alibi value=Alibi

### bs+cs+da+en+fi+fr+hu+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B1[1895] de=Modem lv=modems value=Modem

### bs+cs+da+en+fi+fr+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B2[864] de=Gangster lv=gangsteris value=Gangster

### bs+cs+da+en+fi+fr+is+nb+nn+pl+ro+sk+sv (1)

- B1[92] de=Agent lv=aģents value=Agent

### bs+cs+da+en+fi+fr+is+nb+nn+ro+sv (1)

- B1[1131] de=Glücksbringer lv=talismans value=Talisman

### bs+cs+da+en+fi+hr+hu+is+it+lb+nb+nl+nn+pl+pt+sk+sq+sr+sv+tr (1)

- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### bs+cs+da+en+fi+hu+is+nb+nn+sq+sv+tr (1)

- B1[91] de=Advent lv=advents value=Advent

### bs+cs+da+en+fi+is+it+lb+nb+nl+nn+pt+sv (1)

- B2[1747] de=Trauma lv=trauma value=Trauma

### bs+cs+da+en+fi+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B1[2642] de=Smog lv=smogs value=Smog

### bs+cs+da+en+fi+is+nb+nn+ro+sk+sv (1)

- B1[2608] de=Server lv=serveris value=Server

### bs+cs+da+en+fi+is+nb+nn+ro+sv (1)

- B2[784] de=Festspiele lv=festivāls value=Festival

### bs+cs+da+en+fi+is+nb+nn+sv (1)

- B1[2056] de=Panzer lv=tanks value=Tank

### bs+cs+da+en+fr+hu+lb+nl+pl+sk+sq+tr (1)

- B1[1838] de=Mars lv=marss value=Mars

### bs+cs+da+en+fr+hu+pl+ro+sk+sq+tr (1)

- B1[2840] de=Tampon lv=tampons value=Tampon

### bs+cs+da+en+fr+hu+ro (1)

- B1[2877] de=Telefax lv=fakss value=Fax

### bs+cs+da+en+it+lb+nl+pl+ro+sk+sq+tr (1)

- B2[1441] de=Penis lv=penis value=Penis

### bs+cs+da+en+pl+sk+sq+tr (1)

- B1[2880] de=Telegramm lv=telegramma value=Telegram

### bs+cs+da+en+pt (1)

- B1[605] de=Drama lv=drāma value=Drama

### bs+cs+da+fi+hu+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- C1[118] de=Parlament lv=parlaments value=Parlament

### bs+cs+da+fi+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B2[1282] de=Manifest lv=manifests value=Manifest

### bs+cs+da+fi+is+nb+nn+pl+sq+sv+tr (1)

- B1[2837] de=Takt lv=takts value=Takt

### bs+cs+da+fr+hu+ro (1)

- B1[2825] de=Sülze lv=galerts value=Galert

### bs+cs+da+hu (1)

- B1[1985] de=Nikotin lv=nikotīns value=Nikotin

### bs+cs+da+pl+sk+sq+tr (1)

- B2[1650] de=Skalpell lv=skalpelis value=Skalpel

### bs+cs+da+sq+tr (1)

- B1[2176] de=Protokoll lv=protokols value=Protokol

### bs+cs+en (1)

- B1[2378] de=Salon lv=daž. noz. salons value=Salon

### bs+cs+en+fi+fr+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B1[2882] de=Testament lv=testaments value=Testament

### bs+cs+en+fi+gr+hu+it+pl+pt+ro+sk+sq+sv (1)

- B1[3210] de=Web lv=internets value=Internet

### bs+cs+en+pl+sk (1)

- B1[1781] de=Limit lv=limits value=Limit

### bs+cs+fi+fr+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B2[1906] de=Vermächtnis lv=testaments value=Testament

### bs+cs+fi+hu+is+it+lb+nb+nl+nn+pl+ro+sk+sq+sv+tr (1)

- B2[1667] de=Sperma lv=sperma value=Sperma

### bs+cs+fi+hu+is+nb+nn+sv (1)

- B1[2283] de=Rekord lv=rekords value=Rekord

### bs+cs+fi+is+it+lb+nb+nl+nn+pt+sv (1)

- B2[1228] de=Lehrstuhl lv=katedra value=Katedra

### bs+cs+fi+is+nb+nn+pl+sk+sq+sv+tr (1)

- B2[1458] de=Poltergeist lv=poltergeists value=Poltergeist

### bs+cs+fi+it+lb+nl+sv (1)

- B1[3325] de=Firma lv=firma value=Firma

### bs+cs+hr+sr (1)

- B1[1507] de=Kinn lv=zods value=Brada

### bs+cs+hu (1)

- B1[1310] de=Horizont lv=horizonts value=Horizont

### bs+cs+hu+it+lb+nl (1)

- B1[1643] de=Kritik lv=kritika value=Kritika

### bs+cs+hu+pt (1)

- B1[1738] de=Lawine lv=lavīna value=Lavina

### bs+cs+hu+ro (1)

- B2[1745] de=Transit lv=tranzīts value=Tranzit

### bs+cs+hu+ro+sq+tr (1)

- B1[437] de=Biathlon lv=biatlons value=Biatlon

### bs+cs+it+lb+nl+pl+ro+sk+sq+tr (1)

- B1[1992] de=Norm lv=norma value=Norma

### bs+cs+it+lb+nl+pt (1)

- B1[1431] de=Judo lv=džudo value=Džudo

### bs+cs+lb+nl+pl+ro+sk+sq+tr (1)

- B1[1845] de=Masse lv=masa value=Masa

### bs+cs+lb+nl+pl+sk (1)

- B1[1482] de=Katastrophe lv=katastrofa value=Katastrofa

### bs+cs+nl+pl+sk (1)

- A1[462] de=ohne lv=bez value=Bez

### bs+cs+pl+pt+sq+tr (1)

- B1[1567] de=Komet lv=komēta value=Kometa

### bs+cs+pl+ro+sk+sq+tr (1)

- B2[1698] de=Statut lv=statūti value=Statut

### bs+cs+ro+sk (1)

- B1[142] de=Anschrift lv=adrese value=Adresa

### bs+da+en+fi+fr+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B1[1399] de=Islam lv=islāms value=Islam

### bs+da+en+fi+fr+is+nb+nn+pl+ro+sk+sv (1)

- B1[1824] de=Makler lv=aģents value=Agent

### bs+da+en+fi+is+nb+nn+pl+sk+sv+tr (1)

- B1[522] de=Bude lv=kiosks value=Kiosk

### bs+da+en+fr+hr+pl+ro+sr (1)

- B2[1040] de=Grundriss lv=plāns value=Plan

### bs+da+en+hr+ro+sr (1)

- B2[1646] de=Simulator lv=simulators value=Simulator

### bs+da+en+pl+sk+sq+tr (1)

- B2[850] de=Funkspruch lv=radiogramma value=Radiogram

### bs+da+fi+hu+is+nb+nn+sq+sv+tr (1)

- B1[1315] de=Hubschrauber lv=helikopters value=Helikopter

### bs+da+fr (1)

- B1[1419] de=Jasmin lv=jasmīns value=Jasmin

### bs+da+fr+hu+it+nl+pl+pt+ro+sk+sq+tr (1)

- B1[1138] de=Gräte lv=asaka value=Asaka

### bs+da+fr+hu+ro (1)

- B1[2213] de=Rang lv=rangs value=Rang

### bs+da+fr+ro (1)

- B1[1381] de=Institut lv=institūts value=Institut

### bs+da+hr+hu+sr (1)

- B2[329] de=Cholera lv=holera value=Kolera

### bs+da+hu+lb+nl+pl+sk+sq+tr (1)

- B1[2033] de=Opernhaus lv=opera value=Opera

### bs+da+it+lb+nl (1)

- B2[1485] de=Quote lv=kvota value=Kvota

### bs+da+pt (1)

- B1[1907] de=Moral lv=morāle value=Moral

### bs+en+fi+fr+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- C1[514] de=Verkehrswesen lv=transports value=Transport

### bs+en+hu (1)

- B2[953] de=Geschwulst lv=audzējs value=Tumor

### bs+en+hu+ro (1)

- B1[507] de=Brosche lv=piespraude value=Pin

### bs+en+sq+tr (1)

- B1[594] de=Diplom lv=diploms value=Diploma

### bs+fi+hu+ro+sv (1)

- B1[193] de=Aufzug lv=lifts value=Lift

### bs+fi+is+it+lb+nb+nl+nn+pt+sv (1)

- B1[772] de=Erdöl lv=nafta value=Nafta

### bs+fi+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- C1[158] de=Thermosflasche lv=termoss value=Termos

### bs+fi+is+nb+nn+pt+sv (1)

- B1[3227] de=Weinbrand lv=konjaks value=Konjak

### bs+fi+sv (1)

- B1[991] de=Gaststätte lv=restorāns value=Restoran

### bs+fr+pl+ro+sk+sq+tr (1)

- B1[172] de=Ass lv=dūzis value=As

### bs+hr+pl+sk+sq+sr+tr (1)

- B1[1921] de=Mull lv=marle value=Gaza

### bs+hu+pl (1)

- B2[1966] de=Verzeichnis lv=saraksts value=Lista

### bs+hu+pl+ro+sk+sq+tr (1)

- C1[30] de=Kinderschänder lv=pedofils value=Pedofil

### bs+hu+pl+sk+sq+tr (1)

- B1[2057] de=Pappe lv=kartons value=Karton

### bs+hu+ro (1)

- B2[586] de=eintönig lv=vienmuļš • vienmuļīgs • monotons value=Monoton • Monoton • Monoton

### bs+is+nb+nn+sq+tr (1)

- B1[158] de=Antrieb lv=dzinējs value=Motor

### bs+it+lb+nl+pl+pt+ro+sk+sq+tr (1)

- B1[2935] de=Truppe lv=trupa value=Trupa

### bs+lb+nl (1)

- B1[3320] de=Beruf lv=profesija value=Profesija

### cs+da+en+fi+fr+hu+is+it+nb+nn+pl+ro+sk+sv (1)

- A1[25] de=Album lv=albums value=Album

### cs+da+en+fi+fr+hu+is+nb+nn+ro+sk+sq+sv+tr (1)

- A2[278] de=Bowling lv=boulings value=Bowling

### cs+da+en+fi+fr+hu+lb+nl+ro+sk+sv (1)

- A2[336] de=Paprika lv=paprika value=Paprika

### cs+da+en+fi+fr+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- A2[897] de=Logo lv=logotips value=Logo

### cs+da+en+fi+hu+is+nb+nn+pl+sk+sv (1)

- A2[1058] de=Partner lv=partneris value=Partner

### cs+da+en+fi+is+lb+nb+nl+nn+ro+sq+sv+tr (1)

- A2[1528] de=Video lv=video value=Video

### cs+da+en+fi+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B2[458] de=Dumping lv=dempings value=Dumping

### cs+da+en+fi+is+nb+nn+ro+sq+sv+tr (1)

- A2[335] de=Deo lv=dezodorants value=Deodorant

### cs+da+en+fr+gr+it+lb+nl+pl+pt+ro (1)

- A1[159] de=E-Mail lv=e-pasts value=E-mail

### cs+da+en+fr+hu+is+nb+nn+pl+ro+tr (1)

- A1[476] de=Pizza lv=pica value=Pizza

### cs+da+en+fr+hu+ro (1)

- B1[875] de=Fax lv=fakss value=Fax

### cs+da+en+fr+is+nb+nn+pl+ro+sk (1)

- A2[725] de=Jazz lv=džezs value=Jazz

### cs+da+en+fr+it+nl+pl+pt+ro+sk+tr (1)

- A1[67] de=Sauna lv=sauna value=Sauna

### cs+da+en+fr+pl+sk (1)

- A2[812] de=Kleinbus lv=mikroautobuss value=Minibus

### cs+da+en+gr+ro (1)

- A2[1322] de=Skateboard lv=skrituļdēlis value=Skateboard

### cs+da+en+hr+is+lb+nb+nn+pl+ro+sk+sq+sr+tr (1)

- A1[246] de=Gramm lv=grams value=Gram

### cs+da+en+hr+is+nb+nn+pl+ro+sk+sr+tr (1)

- A1[312] de=Kilogramm lv=kilograms value=Kilogram

### cs+da+en+hu+is+nb+nn+pl+ro+tr (1)

- A2[99] de=Atom lv=atoms value=Atom

### cs+da+en+hu+is+nb+nn+ro+sq+tr (1)

- A2[963] de=Motor lv=motors value=Motor

### cs+da+en+hu+lb+nl+pl+sk+sq+tr (1)

- A2[1042] de=Oper lv=opera value=Opera

### cs+da+en+hu+pl+sk+sq+tr (1)

- A2[688] de=Humor lv=humors value=Humor

### cs+da+en+hu+ro (1)

- B1[1173] de=Hacker lv=hakers value=Hacker

### cs+da+en+is+nb+nn+ro (1)

- A2[1098] de=Popcorn lv=popkorns value=Popcorn

### cs+da+en+pl+ro+sk (1)

- A2[956] de=Modell lv=modelis value=Model

### cs+da+en+pl+ro+sk+sq+tr (1)

- A2[686] de=Hotel lv=viesnīca value=Hotel

### cs+da+en+sq+tr (1)

- B1[733] de=Eiweiß lv=olbaltums value=Protein

### cs+da+fi+fr+hu+is+lb+nb+nl+nn+pl+ro+sv+tr (1)

- A1[185] de=Film lv=filma value=Film

### cs+da+fi+fr+is+nb+nn+sv (1)

- A1[103] de=blond lv=blonds value=Blond

### cs+da+fi+hr+hu+is+nb+nn+pl+sk+sr+sv (1)

- A2[32] de=Alkohol lv=alkohols value=Alkohol

### cs+da+fi+hu+is+it+lb+nb+nl+nn+pl+sk+sq+sv+tr (1)

- B1[1143] de=Grieß lv=manna value=Manna

### cs+da+fi+hu+is+nb+nn+pl+ro+sq+sv+tr (1)

- A1[593] de=Telefon lv=telefons value=Telefon

### cs+da+fi+hu+is+nb+nn+ro+sv (1)

- A2[1356] de=Sport lv=sports value=Sport

### cs+da+fi+hu+is+nb+nn+sk+sv (1)

- A2[1462] de=Traktor lv=traktors value=Traktor

### cs+da+fi+is+lb+nb+nn+pl+sk+sv (1)

- A2[348] de=Dokument lv=dokuments value=Dokument

### cs+da+fi+is+nb+nn+pl+sk+sv (1)

- B1[1579] de=Konflikt lv=konflikts value=Konflikt

### cs+da+fi+is+nb+nn+sv (1)

- B1[2767] de=Stipendium lv=stipendija value=Stipendium

### cs+da+fr (1)

- B1[2844] de=Tarif lv=tarifs value=Tarif

### cs+da+fr+hu+ro (1)

- B2[411] de=Dohle lv=kovārnis value=Covarner

### cs+da+hr+sk+sr (1)

- A2[1603] de=Zirkus lv=cirks value=Cirkus

### cs+da+hu+is+nb+nn+pl+ro+sk (1)

- A1[484] de=Programm lv=programma value=Program

### cs+da+hu+pl+ro+sk+sq+tr (1)

- B2[2066] de=wider lv=pret value=Vs

### cs+da+hu+pl+sk (1)

- A2[820] de=Klub lv=klubs value=Klub

### cs+da+is+lb+nb+nn+pl+sk+sq+tr (1)

- A2[777] de=Katalog lv=katalogs value=Katalog

### cs+da+is+nb+nn+pl+ro+sk (1)

- A2[515] de=Fotograf lv=fotogrāfs value=Fotograf

### cs+da+is+nb+nn+pl+sk (1)

- A2[741] de=Kabel lv=kabelis value=Kabel

### cs+da+pl+ro+sk (1)

- B1[582] de=Dialog lv=dialogs value=Dialog

### cs+da+sq+tr (1)

- B1[546] de=Clip lv=klips value=Klip

### cs+en (1)

- A2[701] de=Imbiss lv=uzkoda value=Snack

### cs+en+es+fi+gr+hu+it+pl+pt+ro+sk+sq+sv (1)

- A2[715] de=Internet lv=internets value=Internet

### cs+en+fi+hu+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- B1[1347] de=Import lv=imports value=Import

### cs+en+fi+hu+pl+ro+sk+sq+sv+tr (1)

- A2[962] de=Monitor lv=monitors value=Monitor

### cs+en+fi+hu+pl+sk+sv+tr (1)

- A1[470] de=Park lv=parks value=Park

### cs+en+fi+is+nb+nn+pl+sk+sv (1)

- A2[1363] de=Start lv=starts value=Start

### cs+en+fr+hu+is+nb+nn+pl+ro+sk (1)

- A1[591] de=Taxi lv=taksometrs value=Taxi

### cs+en+fr+pl+sk (1)

- B1[539] de=Chaos lv=haoss value=Chaos

### cs+en+fr+ro (1)

- B1[2612] de=sexy lv=seksīgs value=Sexy

### cs+en+pl+ro+sk (1)

- A2[1447] de=Toast lv=grauzdiņš value=Toast

### cs+en+pl+sk+sq+tr (1)

- B2[329] de=Cholera lv=holera value=Cholera

### cs+en+ro+sk (1)

- A1[597] de=Text lv=teksts value=Text

### cs+en+sk (1)

- B2[330] de=Cholesterin lv=holesterīns value=Cholesterol

### cs+fi+is+it+lb+nb+nl+nn+sv (1)

- C2[100] de=Dialektik lv=dialektika value=Dialektika

### cs+fi+is+nb+nn+pl+sk+sv (1)

- A2[800] de=Kino lv=kinoteātris value=Kino

### cs+fi+is+nb+nn+pl+sk+sv+tr (1)

- A2[830] de=Kontakt lv=kontakts value=Kontakt

### cs+fi+is+nb+nn+sk+sv+tr (1)

- A2[347] de=Doktor lv=doktors value=Doktor

### cs+fi+pl+sk+sq+sv+tr (1)

- A2[176] de=Autor lv=autors value=Autor

### cs+fi+pl+sk+sv (1)

- A2[737] de=Joghurt / Jogurt lv=jogurts value=Jogurt

### cs+fi+sv+tr (1)

- A2[837] de=Korridor lv=koridors value=Koridor

### cs+fr+hr+it+pl+sk+sr (1)

- A1[119] de=Bus lv=autobuss value=Autobus

### cs+fr+it+lb+nl (1)

- B1[1786] de=Lizenz lv=licence value=Licence

### cs+fr+pt (1)

- A2[1280] de=Serie lv=sērija value=Série

### cs+hr+pl+sk+sr (1)

- A1[114] de=Brücke lv=tilts value=Most

### cs+hu+is+nb+nn+sk (1)

- A2[18] de=Abteil lv=kupeja value=Kupé

### cs+hu+it (1)

- A2[920] de=Mathematik lv=matemātika value=Matematika

### cs+hu+lb+nl+sq+tr (1)

- A2[1095] de=Politik lv=politika value=Politika

### cs+is+nb+nn (1)

- A2[1085] de=Pilot lv=pilots value=Pilot

### cs+is+nb+nn+pl+sk (1)

- A2[1482] de=Typ lv=tips value=Typ

### cs+it+lb+nl+pl+ro+sk+sq+tr (1)

- B1[599] de=Domino lv=domino value=Domino

### cs+it+lb+nl+pl+sk (1)

- A2[918] de=Maske lv=maska value=Maska

### cs+it+lb+nl+pt (1)

- B2[902] de=geläufig lv=zināms • pazīstams • ierasts • tekošs • brīvs value=Zināms • Pazīstams • Ierasts • Tekošs • Brīvs

### cs+it+nl+pl+sk (1)

- A1[481] de=Preis lv=cena value=Cena

### cs+it+pl (1)

- A2[311] de=Comic lv=komikss value=Komiks

### cs+it+pl+pt+sk (1)

- A2[1579] de=Werbung lv=reklāma value=Reklama

### cs+lb+nl+sk+sq+tr (1)

- A2[194] de=Bank lv=banka value=Banka

### cs+nl (1)

- A1[447] de=nicht lv=ne value=Ne

### cs+nl+pl (1)

- A1[350] de=Lampe lv=lampa value=Lampa

### cs+nl+pl+sk+sq+tr (1)

- A1[607] de=U-Bahn lv=metro value=Metro

### cs+nl+sk (1)

- A1[247] de=Grammatik lv=gramatika value=Gramatika

### cs+pl+pt+ro+sk (1)

- B1[583] de=Diät lv=diēta value=Dieta

### cs+pl+pt+sk (1)

- A2[1090] de=Planet lv=planēta value=Planeta

### cs+pl+pt+sk+sq+tr (1)

- A2[894] de=Literatur lv=literatūra value=Literatura

### cs+pl+sq (1)

- A1[581] de=Student lv=students value=Student

### cs+sk+sq+tr (1)

- A2[280] de=Boxer lv=bokseris value=Boxer

### cs+sl (1)

- A1[408] de=mit lv=ar value=s

### da+en+fi+fr+is+it+nb+nn+pl+sk+sv (1)

- A2[933] de=Melone lv=melone value=Melon

### da+en+fi+fr+is+nb+nn+pl+ro+sk+sv (1)

- A2[711] de=Instrument lv=instruments value=Instrument

### da+en+fi+fr+sv (1)

- A2[1155] de=Rente lv=pensija value=Pension

### da+en+fi+hu+is+nb+nn+sv (1)

- A1[453] de=November lv=novembris value=November

### da+en+fi+hu+pl+sk+sv (1)

- A2[606] de=Grill lv=grils value=Grill

### da+en+fi+is+nb+nl+nn+sv (1)

- A2[1404] de=Stress lv=stress value=Stress

### da+en+fi+is+nb+nn+pl+sk+sv+tr (1)

- A2[801] de=Kiosk lv=kiosks value=Kiosk

### da+en+fr+hr+is+nb+nn+pl+ro+sr (1)

- A1[477] de=Plan lv=plāns value=Plan

### da+en+fr+hr+pl+ro+sr (1)

- A2[364] de=dünn lv=plāns value=Plan

### da+en+fr+hu (1)

- B1[2491] de=Schnaps lv=degvīns value=Vodka

### da+en+fr+hu+is+nb+nn+pl+ro+sk (1)

- A2[793] de=Ketchup lv=kečups value=Ketchup

### da+en+fr+hu+is+nb+nn+ro (1)

- A1[393] de=Mandarine lv=mandarīns value=Mandarin

### da+en+fr+hu+it+pl+ro+sk (1)

- A2[1481] de=Tüte lv=tūta value=Tuta

### da+en+fr+hu+pl+sk+sq+tr (1)

- B1[1794] de=Loggia lv=lodžija value=Loggia

### da+en+fr+is+it+lb+nb+nl+nn+pl+ro+sq+tr (1)

- A2[1182] de=Rundfunk lv=radio value=Radio

### da+en+fr+it+lb+nl (1)

- A2[191] de=Ballett lv=balets value=Ballet

### da+en+fr+nl (1)

- A1[220] de=Garage lv=garāža value=Garage

### da+en+fr+pl+ro+sk+sq+tr (1)

- B2[90] de=Arie lv=ārija value=Aria

### da+en+fr+pl+ro+sq+tr (1)

- B1[933] de=formatieren lv=formatēt value=Format

### da+en+fr+ro+sq+tr (1)

- B1[1431] de=Judo lv=džudo value=Judo

### da+en+gr+hu+ro (1)

- B2[417] de=Doppelzentner lv=centners value=Centner

### da+en+hr+hu+sr (1)

- A2[1532] de=Vitamin lv=vitamīns value=Vitamin

### da+en+hr+is+nb+nl+nn+sr (1)

- A1[41] de=April lv=aprīlis value=April

### da+en+hu+is+nb+nn+pl+pt+sq+tr (1)

- A2[784] de=Kefir lv=kefīrs value=Kefir

### da+en+hu+nl (1)

- A1[136] de=Dezember lv=decembris value=December

### da+en+hu+nl+ro+sk (1)

- A1[266] de=Haltestelle lv=pietura value=Stop

### da+en+hu+pl+ro+sk+sq+tr (1)

- A1[226] de=gegen lv=pret value=Vs

### da+en+hu+ro (1)

- A2[195] de=Bankautomat lv=bankomāts value=ATM

### da+en+is+it+nb+nn (1)

- A2[1153] de=Religion lv=reliģija value=Religion

### da+en+is+lb+nb+nl+nn (1)

- A2[1244] de=Schnitzel lv=šnicele value=Schnitzel

### da+en+is+lb+nb+nn+sk (1)

- A1[313] de=Kilometer lv=kilometrs value=Kilometer

### da+en+is+nb+nn+pl (1)

- A1[483] de=Problem lv=problēma value=Problem

### da+en+is+nb+nn+pl+sk (1)

- A2[1411] de=System lv=sistēma value=System

### da+en+is+nb+nn+ro (1)

- A2[404] de=elegant lv=elegants value=Elegant

### da+en+it+lb+nl+pt+ro+sq+tr (1)

- A2[723] de=Jackett lv=žakete value=Blazer

### da+en+it+pl+sk (1)

- A2[1341] de=Spaghetti lv=spageti value=Spaghetti

### da+en+lb+nl (1)

- A2[21] de=Achse lv=ass value=Ass

### da+en+pl+ro+sq+tr (1)

- A2[18] de=Abteil lv=kupeja value=Coupe

### da+en+pl+sk (1)

- A2[1088] de=Pizzeria lv=picērija value=Pizzeria

### da+en+pt (1)

- B1[1129] de=global lv=globāls value=Global

### da+en+pt+ro+tr (1)

- A1[452] de=normal lv=normāls value=Normal

### da+en+ro+sq+tr (1)

- B2[1245] de=liberal lv=liberāls value=Liberal

### da+fi+hr+is+nb+nn+pl+sr+sv (1)

- A1[597] de=Text lv=teksts value=Tekst

### da+fi+hu+is+nb+nn+pl+ro+sk+sq+sv+tr (1)

- C2[78] de=Abgeordnetenhaus lv=parlaments value=Parlament

### da+fi+is+lb+nb+nn+pl+sv (1)

- A1[486] de=Punkt lv=punkts value=Punkt

### da+fi+is+nb+nn+sq+sv+tr (1)

- A2[757] de=Kanal lv=kanāls value=Kanal

### da+fi+sq+sv+tr (1)

- B1[539] de=Chaos lv=haoss value=Kaos

### da+fi+sv (1)

- A2[1413] de=Tabelle lv=tabula value=Tabel

### da+fr+hu (1)

- A2[192] de=Ballon lv=balons value=Ballon

### da+fr+is+nb+nl+nn (1)

- A1[34] de=Antenne lv=antena value=Antenne

### da+fr+is+nb+nn+pl+sq+tr (1)

- A2[490] de=Filet lv=fileja value=Filet

### da+fr+it (1)

- A2[957] de=modern lv=moderns value=Moderne

### da+fr+it+lb+nl (1)

- B1[1987] de=Niveau lv=līmenis value=Niveau

### da+fr+it+lb+nl+pt (1)

- B2[1736] de=Töpferscheibe lv=podnieka ripa value=Podnieka ripa

### da+fr+it+nl (1)

- A2[955] de=Mode lv=mode value=Mode

### da+fr+pt+ro (1)

- B1[3280] de=zivil lv=civils value=Civil

### da+fr+ro+sq+tr (1)

- A2[1175] de=Roman lv=romāns value=Roman

### da+hu+is+lb+nb+nn+pl+tr (1)

- A1[332] de=Kamera lv=kamera value=Kamera

### da+hu+is+nb+nn+pl+ro+sk (1)

- A2[1362] de=Stadion lv=stadions value=Stadion

### da+hu+is+nb+nn+ro (1)

- A2[26] de=Aerobic lv=aerobika value=Aerobic

### da+hu+it+lb+nl+ro (1)

- B1[2079] de=per lv=pa value=Pa

### da+hu+lb+sq+tr (1)

- A2[231] de=Benzin lv=benzīns value=Benzin

### da+hu+pl+sk+sq+tr (1)

- A2[612] de=Gutschein lv=kupons value=Kupon

### da+hu+sq+tr (1)

- A2[307] de=Charakter lv=raksturs value=Karakter

### da+is+lb+nb+nn (1)

- A2[713] de=interessant lv=interesants value=Interessant

### da+is+nb+nn+pl+sk (1)

- A2[1477] de=Tulpe lv=tulpe value=Tulipan

### da+is+nb+nn+ro+sq+tr (1)

- A2[1385] de=Stil lv=stils value=Stil

### da+is+nb+nn+sq+tr (1)

- A2[918] de=Maske lv=maska value=Maske

### da+it+nl+pt (1)

- B1[2187] de=Putz lv=apmetums value=Gips

### da+pl+ro (1)

- A2[1108] de=Prozent lv=procents value=Procent

### da+pl+sq+tr (1)

- B2[1193] de=Konsulat lv=konsulāts value=Konsulat

### da+ro+sq+tr (1)

- A2[1358] de=Sportler lv=sportists value=Atlet

### da+sk (1)

- A1[99] de=Blatt lv=lapa value=Side

### en+fi+hu+sv (1)

- A2[463] de=Farm lv=ferma value=Farm

### en+fr+gr+hu+ro+sq+tr (1)

- A2[1531] de=Visum lv=vīza value=Visa

### en+fr+hr+sr (1)

- A2[188] de=Bahngleis lv=sliedes value=Rails

### en+fr+hu (1)

- A2[349] de=doppelt lv=divkāršs • divkārtīgs • dubults value=Double • Double • Double

### en+fr+it+lb+nl (1)

- B1[597] de=Disziplin lv=disciplīna value=Discipline

### en+fr+it+lb+nl+pt (1)

- B2[1496] de=Rauminhalt lv=tilpums value=Volume

### en+fr+it+nl+ro (1)

- A2[348] de=Dokument lv=dokuments value=Document

### en+fr+it+pl+sk (1)

- B1[437] de=Biathlon lv=biatlons value=Biathlon

### en+fr+pl+ro+sk+sq+tr (1)

- A2[1128] de=Rätsel lv=mīkla value=Puzzle

### en+fr+pl+ro+sk+tr (1)

- A2[618] de=Hafen lv=osta value=Port

### en+fr+ro+sq+tr (1)

- B1[2581] de=Sehne lv=cīpsla value=Tendon

### en+hr+hu+sr (1)

- A1[592] de=Tee lv=tēja value=Tea

### en+hr+sk+sr (1)

- A1[577] de=Stern lv=zvaigzne value=Star

### en+hu+lb+nl+ro (1)

- A2[957] de=modern lv=moderns value=Modern

### en+is+nb+nn (1)

- A1[378] de=Limonade lv=limonāde value=Lemonade

### en+is+nb+nn+pl+sk (1)

- B1[245] de=Baskenmütze lv=berete value=Beret

### en+it (1)

- A2[550] de=Galerie lv=galerija value=Gallery

### en+lb+nl+ro (1)

- B1[441] de=Biskuit lv=biskvīts value=Biscuit

### en+pl+ro (1)

- A1[454] de=Null lv=nulle value=Zero

### en+pl+ro+sk+sq+tr (1)

- A2[1204] de=schälen lv=mizot value=Peeling

### en+ro+sq+tr (1)

- B1[745] de=endgültig lv=galīgs value=Final

### en+sq+tr (1)

- B1[3241] de=wenden lv=pagriezt value=Turn

### es+it (1)

- A1[3] de=Haus lv=māja value=casa

### es+pl+sk+sq+tr (1)

- A2[975] de=na gut lv=nu labi value=OK

### es+ro (1)

- B1[1838] de=Mars lv=marss value=Marte

### es+sl (1)

- A1[378] de=Limonade lv=limonāde value=limonada

### et+fi (1)

- A1[476] de=Pizza lv=pica value=pitsa

### et+fi+is+nb+nn (1)

- A1[634] de=vom lv=no value=-st

### et+fi+sv (1)

- A1[408] de=mit lv=ar value=-ga

### et+is+nb+nn (1)

- A1[17] de=ab lv=no value=-st

### et+lt (1)

- A2[1119] de=Rad lv=ritenis value=ratas

### fi+hr+is+nb+nn+sr+sv (1)

- B1[2112] de=Pionier lv=pionieris value=Pioneer

### fi+hu+is+nb+nn+pl+pt+sk+sq+sv+tr (1)

- B1[3322] de=Energie lv=enerģija value=Energia

### fi+hu+lb+sv (1)

- A1[312] de=Kilogramm lv=kilograms value=Kilogramm

### fi+is+lb+nb+nn+sv (1)

- A1[454] de=Null lv=nulle value=Null

### fi+is+nb+nn+pl+sk+sv (1)

- B1[642] de=Effekt lv=efekts value=Efekt

### fi+is+nb+nn+pt+ro+sv (1)

- B1[726] de=Eisberg lv=aisbergs value=Aisberg

### fi+is+nb+nn+pt+sv (1)

- A2[633] de=Hantel lv=hantele value=Hantel

### fi+is+nb+nn+ro+sv (1)

- A1[389] de=Mai lv=maijs value=Mai

### fi+is+nb+nn+sq+sv+tr (1)

- A2[1457] de=Tourist lv=tūrists value=Turist

### fi+it+lb+nl+sv (1)

- A2[1428] de=Technik lv=tehnika value=Tehnika

### fi+lb+sv (1)

- A1[484] de=Programm lv=programma value=Programm

### fi+nb+nn+sv (1)

- A1[695] de=Urlaub lv=atvaļinājums value=Puhkus

### fi+nl+sv (1)

- A1[72] de=Banane lv=banāns value=Banaan

### fi+pt+sv (1)

- A2[1121] de=Radieschen lv=redīss value=Redis

### fr+hu (1)

- A2[1088] de=Pizzeria lv=picērija value=Pizzéria

### fr+hu+ro (1)

- B2[811] de=Flussarm lv=atteka value=Reflux

### fr+lb (1)

- A1[247] de=Grammatik lv=gramatika value=Grammaire

### fr+pl+sk (1)

- A1[469] de=Papier lv=papīrs value=Papier

### fr+pl+sk+sq+tr (1)

- B1[2113] de=Pistole lv=pistole value=Pistolet

### fr+sq (1)

- B2[1784] de=Ultraschall lv=ultraskaņa value=Ultrason

### fr+tr (1)

- A1[382] de=Liter lv=litrs value=Litre

### gr+ro (1)

- B2[900] de=Geländelauf lv=kross value=Cross country

### hr+nl+sr (1)

- A2[203] de=Batterie lv=baterija value=Baterija

### hr+pl+ro+sq+sr+tr (1)

- A2[192] de=Ballon lv=balons value=Balon

### hr+pl+sq+sr (1)

- A1[34] de=Antenne lv=antena value=Antena

### hr+pl+sr (1)

- A1[80] de=Bein lv=kāja value=Noga

### hu+is+nb+nn (1)

- A2[956] de=Modell lv=modelis value=Modell

### hu+it+lb+nl (1)

- B1[2897] de=Tonne lv=tonna value=Tonna

### hu+it+lb+nl+pt (1)

- A2[1082] de=Physik lv=fizika value=Fizika

### hu+it+pt (1)

- A2[530] de=Frisur lv=frizūra value=Frizura

### hu+pl+ro+sk+sq+tr (1)

- C2[14] de=beaufsichtigen lv=uzraudzīt value=Monitor

### is+it+lb+nb+nl+nn+pt+sv (1)

- C1[322] de=Führunternehmen lv=kravas transporta uzņēmums value=Kravas transporta uzņēmums

### is+it+nb+nn (1)

- A2[807] de=Klavier lv=klavieres value=Piano

### is+it+nb+nn+sk (1)

- A1[502] de=Rose lv=roze value=Rose

### is+lb+nb+nn (1)

- A1[40] de=Aprikose lv=aprikoze value=Aprikos

### is+nb (1)

- A1[621] de=verstehen lv=saprast value=Forstå

### is+nb+nn+pl+sk (1)

- A2[1459] de=Trainer lv=treneris value=Trener

### is+nb+nn+sk+tr (1)

- A2[91] de=Arzt lv=ārsts value=Doktor

### it+lb+nl+ro (1)

- B1[205] de=äußerlich lv=ārējs value=Extern

### it+pl+sq+tr (1)

- A2[320] de=Dame lv=dāma value=Dama

### it+tr (1)

- A1[378] de=Limonade lv=limonāde value=Limonata

### nl+pl (1)

- A1[255] de=Gruppe lv=grupa value=Grupa

### nl+pl+sk (1)

- B1[546] de=Clip lv=klips value=Klips

### nl+ro (1)

- A1[149] de=du lv=tu value=Tu

### nn+sv (1)

- A1[267] de=Hand lv=plauksta value=hand

### pl+pt+ro+sk+sq+tr (1)

- A2[891] de=Linie lv=līnija value=Linia

### pl+pt+sq+tr (1)

- B1[1395] de=Ironie lv=ironija value=Ironia

### pl+sk+tr (1)

- A2[767] de=Karte lv=karte value=Mapa

### pl+sv (1)

- A1[233] de=Geschichte lv=stāsts value=historia

### pt+sk (1)

- A2[1182] de=Rundfunk lv=radio value=Rádio

### pt+sq+tr (1)

- B1[2175] de=protestieren lv=protestēt value=Protesto

### sk+sq+tr (1)

- A1[290] de=hungrig lv=izsalcis value=Issalcis

## Pāri

### nb+nn (8611)

- A1[0] de=Apfel lv=ābols value=Un
- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[3] de=Haus lv=māja value=Maya
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[5] de=sprechen lv=runāt value=Pratsom
- A1[6] de=klein lv=mazs value=Väike
- A1[7] de=alle lv=visi value=Alt
- A1[8] de=allein lv=viens pats value=Ja
- A1[9] de=alles lv=viss value=Alt

### is+nb (8604)

- A1[0] de=Apfel lv=ābols value=Un
- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[3] de=Haus lv=māja value=Maya
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[5] de=sprechen lv=runāt value=Pratsom
- A1[6] de=klein lv=mazs value=Väike
- A1[7] de=alle lv=visi value=Alt
- A1[8] de=allein lv=viens pats value=Ja
- A1[9] de=alles lv=viss value=Alt

### is+nn (8601)

- A1[0] de=Apfel lv=ābols value=Un
- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[3] de=Haus lv=māja value=Maya
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[5] de=sprechen lv=runāt value=Pratsom
- A1[6] de=klein lv=mazs value=Väike
- A1[7] de=alle lv=visi value=Alt
- A1[8] de=allein lv=viens pats value=Ja
- A1[9] de=alles lv=viss value=Alt

### hr+sr (8580)

- A1[2] de=Wasser lv=ūdens value=Voda
- A1[3] de=Haus lv=māja value=Куќа
- A1[5] de=sprechen lv=runāt value=Govor
- A1[6] de=klein lv=mazs value=Мали
- A1[7] de=alle lv=visi value=Svi
- A1[8] de=allein lv=viens pats value=Jedan
- A1[9] de=alles lv=viss value=Сите
- A1[10] de=alt lv=vecs value=Стари
- A1[11] de=Alter lv=vecums value=Godine?
- A1[13] de=Anfang lv=sākums value=Започнете

### fi+sv (8568)

- A1[0] de=Apfel lv=ābols value=Õun
- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[3] de=Haus lv=māja value=Maja
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[7] de=alle lv=visi value=Kõik
- A1[8] de=allein lv=viens pats value=Üksi
- A1[9] de=alles lv=viss value=Kõik
- A1[10] de=alt lv=vecs value=Vana

### hr+mk (7907)

- A1[3] de=Haus lv=māja value=Куќа
- A1[6] de=klein lv=mazs value=Мали
- A1[9] de=alles lv=viss value=Сите
- A1[10] de=alt lv=vecs value=Стари
- A1[13] de=Anfang lv=sākums value=Започнете
- A1[14] de=anfangen lv=sākt value=Започнете
- A1[16] de=anrufen lv=zvanīt value=Јавете ми се
- A1[17] de=ab lv=no value=Од
- A1[19] de=Abendessen lv=vakariņas value=Вечера
- A1[20] de=abends lv=vakarā value=Во вечерните часови

### mk+sr (7891)

- A1[3] de=Haus lv=māja value=Куќа
- A1[6] de=klein lv=mazs value=Мали
- A1[9] de=alles lv=viss value=Сите
- A1[10] de=alt lv=vecs value=Стари
- A1[13] de=Anfang lv=sākums value=Започнете
- A1[14] de=anfangen lv=sākt value=Започнете
- A1[16] de=anrufen lv=zvanīt value=Јавете ми се
- A1[17] de=ab lv=no value=Од
- A1[19] de=Abendessen lv=vakariņas value=Вечера
- A1[20] de=abends lv=vakarā value=Во вечерните часови

### sq+tr (7327)

- A1[18] de=Abend lv=vakars value=Akşam
- A1[30] de=anziehen lv=uzvilkt value=Açma
- A1[91] de=bis lv=līdz value=Değin
- A1[226] de=gegen lv=pret value=Vs
- A1[228] de=gelb lv=dzeltens value=Sarı
- A1[246] de=Gramm lv=grams value=Gram
- A1[249] de=grau lv=pelēks value=Gri
- A1[290] de=hungrig lv=izsalcis value=Issalcis
- A1[323] de=lachen lv=smieties value=Gül
- A1[395] de=Marmelade lv=ievārījums value=Reçel

### lb+nl (7319)

- A1[57] de=aus lv=no value=No • Ārā
- A1[58] de=auf dem Boden lv=uz grīdas value=Uz grīdas
- A1[60] de=aufs lv=uz value=Uz • Virsū • Kurp?
- A1[63] de=Auto lv=automašīna value=Auto
- A1[111] de=bringen lv=atnest value=Atnest • Aiznest
- A1[129] de=das lv=vidus dzimtes noteiktais artikuls value=Vidus dzimtes noteiktais artikuls
- A1[134] de=der lv=vīriešu dzimtes noteiktais artikuls value=Vīriešu dzimtes noteiktais artikuls
- A1[137] de=die lv=sieviešu dzimtes noteiktais artikuls value=Sieviešu dzimtes noteiktais artikuls
- A1[151] de=Dusche lv=duša value=Douche
- A1[156] de=eins lv=viens value=Een

### bg+mk (7296)

- A1[2] de=Wasser lv=ūdens value=Вода
- A1[4] de=lernen lv=mācīties value=Проучване
- A1[7] de=alle lv=visi value=Всеки
- A1[10] de=alt lv=vecs value=Стари
- A1[13] de=Anfang lv=sākums value=Започнете
- A1[14] de=anfangen lv=sākt value=Започнете
- A1[18] de=Abend lv=vakars value=Вечер
- A1[21] de=aber lv=bet value=Но
- A1[25] de=Album lv=albums value=Албум
- A1[26] de=also lv=tātad value=Ето защо

### fi+nb (6932)

- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[12] de=an lv=pie value=Juures • Peal • Ligi
- A1[13] de=Anfang lv=sākums value=Algus
- A1[14] de=anfangen lv=sākt value=Alustama
- A1[15] de=anders lv=citādi value=Teisiti
- A1[16] de=anrufen lv=zvanīt value=Helistama
- A1[19] de=Abendessen lv=vakariņas value=Õhtusöök

### fi+is (6931)

- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[12] de=an lv=pie value=Juures • Peal • Ligi
- A1[13] de=Anfang lv=sākums value=Algus
- A1[14] de=anfangen lv=sākt value=Alustama
- A1[15] de=anders lv=citādi value=Teisiti
- A1[16] de=anrufen lv=zvanīt value=Helistama
- A1[19] de=Abendessen lv=vakariņas value=Õhtusöök

### fi+nn (6930)

- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[12] de=an lv=pie value=Juures • Peal • Ligi
- A1[13] de=Anfang lv=sākums value=Algus
- A1[14] de=anfangen lv=sākt value=Alustama
- A1[15] de=anders lv=citādi value=Teisiti
- A1[16] de=anrufen lv=zvanīt value=Helistama
- A1[19] de=Abendessen lv=vakariņas value=Õhtusöök

### nb+sv (6924)

- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[13] de=Anfang lv=sākums value=Algus
- A1[14] de=anfangen lv=sākt value=Alustama
- A1[15] de=anders lv=citādi value=Teisiti
- A1[16] de=anrufen lv=zvanīt value=Helistama
- A1[19] de=Abendessen lv=vakariņas value=Õhtusöök
- A1[20] de=abends lv=vakarā value=Õhtul

### is+sv (6923)

- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[13] de=Anfang lv=sākums value=Algus
- A1[14] de=anfangen lv=sākt value=Alustama
- A1[15] de=anders lv=citādi value=Teisiti
- A1[16] de=anrufen lv=zvanīt value=Helistama
- A1[19] de=Abendessen lv=vakariņas value=Õhtusöök
- A1[20] de=abends lv=vakarā value=Õhtul

### nn+sv (6923)

- A1[1] de=Brot lv=maize value=Leib
- A1[2] de=Wasser lv=ūdens value=Vesi
- A1[4] de=lernen lv=mācīties value=Õppima
- A1[6] de=klein lv=mazs value=Väike
- A1[13] de=Anfang lv=sākums value=Algus
- A1[14] de=anfangen lv=sākt value=Alustama
- A1[15] de=anders lv=citādi value=Teisiti
- A1[16] de=anrufen lv=zvanīt value=Helistama
- A1[19] de=Abendessen lv=vakariņas value=Õhtusöök
- A1[20] de=abends lv=vakarā value=Õhtul

### bg+hr (6845)

- A1[10] de=alt lv=vecs value=Стари
- A1[13] de=Anfang lv=sākums value=Започнете
- A1[14] de=anfangen lv=sākt value=Започнете
- A1[25] de=Album lv=albums value=Албум
- A1[26] de=also lv=tātad value=Ето защо
- A1[27] de=Ameise lv=skudra value=Мравка
- A1[49] de=auf lv=uz value=ДО
- A1[67] de=Sauna lv=sauna value=Сауна
- A1[69] de=bald lv=drīz value=Скоро
- A1[70] de=Balkon lv=balkons value=Балкон

### bg+sr (6833)

- A1[10] de=alt lv=vecs value=Стари
- A1[13] de=Anfang lv=sākums value=Започнете
- A1[14] de=anfangen lv=sākt value=Започнете
- A1[25] de=Album lv=albums value=Албум
- A1[27] de=Ameise lv=skudra value=Мравка
- A1[67] de=Sauna lv=sauna value=Сауна
- A1[69] de=bald lv=drīz value=Скоро
- A1[70] de=Balkon lv=balkons value=Балкон
- A1[71] de=Ball lv=bumba value=Топка
- A1[77] de=beginnen lv=sākt value=Започнете

### it+nl (6666)

- A1[14] de=anfangen lv=sākt value=Sākt
- A1[17] de=ab lv=no value=No
- A1[19] de=Abendessen lv=vakariņas value=Vakariņas
- A1[32] de=Angst lv=bailes value=Bailes
- A1[35] de=Antwort lv=atbilde value=Atbilde
- A1[37] de=Anzug lv=uzvalks value=Uzvalks
- A1[44] de=Arm lv=roka value=Roka
- A1[47] de=atmen lv=elpot value=Elpot
- A1[55] de=Augenblick lv=acumirklis value=Acumirklis
- A1[57] de=aus lv=no value=No • Ārā

### pl+sk (6272)

- A1[25] de=Album lv=albums value=Album
- A1[32] de=Angst lv=bailes value=Strach
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[109] de=Brief lv=vēstule value=List
- A1[114] de=Brücke lv=tilts value=Most
- A1[117] de=Buchstabe lv=burts value=List
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[126] de=da lv=tur value=Tam
- A1[142] de=dort lv=tur value=Tam
- A1[156] de=eins lv=viens value=Jeden

### it+lb (6214)

- A1[33] de=angenehm lv=patīkams value=Patikams
- A1[45] de=Armbanduhr lv=rokas pulkstenis value=Rokas Pulkstis
- A1[57] de=aus lv=no value=No • Ārā
- A1[60] de=aufs lv=uz value=Uz • Virsū • Kurp?
- A1[63] de=Auto lv=automašīna value=Auto
- A1[94] de=Bitte lv=lūgums value=Lugums
- A1[111] de=bringen lv=atnest value=Atnest • Aiznest
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[243] de=gleich lv=tūlīt value=Tūlīt • Vienāds
- A1[271] de=Handy lv=mobilais tālrunis value=Mobilais tālrunis

### it+pt (3784)

- A1[7] de=alle lv=visi value=Visita
- A1[13] de=Anfang lv=sākums value=Sakums
- A1[14] de=anfangen lv=sākt value=Sākt
- A1[15] de=anders lv=citādi value=Citadi
- A1[16] de=anrufen lv=zvanīt value=Zvanit
- A1[20] de=abends lv=vakarā value=Vakara
- A1[21] de=aber lv=bet value=SZADZIŃSKA
- A1[22] de=achten lv=ievērot value=Ieverot
- A1[24] de=Affe lv=pērtiķis value=Pērtiˈis
- A1[26] de=also lv=tātad value=Tatad

### bg+ru (3420)

- A1[2] de=Wasser lv=ūdens value=Вода
- A1[17] de=ab lv=no value=От
- A1[18] de=Abend lv=vakars value=Вечер
- A1[21] de=aber lv=bet value=Но
- A1[23] de=Adresse lv=adrese value=Адрес
- A1[32] de=Angst lv=bailes value=Страх
- A1[37] de=Anzug lv=uzvalks value=Костюм
- A1[42] de=Arbeit lv=darbs value=Работа
- A1[56] de=August lv=augusts value=Август
- A1[67] de=Sauna lv=sauna value=Сауна

### mk+ru (3119)

- A1[2] de=Wasser lv=ūdens value=Вода
- A1[11] de=Alter lv=vecums value=Возраст
- A1[18] de=Abend lv=vakars value=Вечер
- A1[21] de=aber lv=bet value=Но
- A1[42] de=Arbeit lv=darbs value=Работа
- A1[56] de=August lv=augusts value=Август
- A1[67] de=Sauna lv=sauna value=Сауна
- A1[69] de=bald lv=drīz value=Скоро
- A1[70] de=Balkon lv=balkons value=Балкон
- A1[80] de=Bein lv=kāja value=Нога

### nl+pt (3118)

- A1[14] de=anfangen lv=sākt value=Sākt
- A1[35] de=Antwort lv=atbilde value=Atbilde
- A1[37] de=Anzug lv=uzvalks value=Uzvalks
- A1[44] de=Arm lv=roka value=Roka
- A1[47] de=atmen lv=elpot value=Elpot
- A1[55] de=Augenblick lv=acumirklis value=Acumirklis
- A1[60] de=aufs lv=uz value=Uz • Virsū • Kurp?
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[68] de=baden lv=peldēties value=Peldēties
- A1[71] de=Ball lv=bumba value=Bumba

### hr+ru (2979)

- A1[67] de=Sauna lv=sauna value=Сауна
- A1[69] de=bald lv=drīz value=Скоро
- A1[70] de=Balkon lv=balkons value=Балкон
- A1[81] de=Beispiel lv=piemērs value=Пример
- A1[91] de=bis lv=līdz value=До
- A1[115] de=Bruder lv=brālis value=Брат
- A1[116] de=Buch lv=grāmata value=Книга
- A1[126] de=da lv=tur value=Там
- A1[138] de=Dienstag lv=otrdiena value=Вторник
- A1[142] de=dort lv=tur value=Там

### ru+sr (2978)

- A1[67] de=Sauna lv=sauna value=Сауна
- A1[69] de=bald lv=drīz value=Скоро
- A1[70] de=Balkon lv=balkons value=Балкон
- A1[81] de=Beispiel lv=piemērs value=Пример
- A1[91] de=bis lv=līdz value=До
- A1[115] de=Bruder lv=brālis value=Брат
- A1[116] de=Buch lv=grāmata value=Книга
- A1[126] de=da lv=tur value=Там
- A1[138] de=Dienstag lv=otrdiena value=Вторник
- A1[142] de=dort lv=tur value=Там

### lb+pt (2872)

- A1[33] de=angenehm lv=patīkams value=Patikams
- A1[45] de=Armbanduhr lv=rokas pulkstenis value=Rokas Pulkstis
- A1[60] de=aufs lv=uz value=Uz • Virsū • Kurp?
- A1[111] de=bringen lv=atnest value=Atnest • Aiznest
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[295] de=in lv=iekšā • uz value=Iekšā • Uz
- A1[299] de=jawohl lv=tieši tā value=Tieši tā
- A1[311] de=wissen lv=zināt value=Zinat
- A1[351] de=Land lv=valsts • zeme value=Valsts • Zeme
- A1[352] de=lang lv=garš • ilgs value=Garš • Ilgs

### pl+tr (2773)

- A1[23] de=Adresse lv=adrese value=Adres
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[70] de=Balkon lv=balkons value=Balkon
- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza

### pl+sq (2766)

- A1[34] de=Antenne lv=antena value=Antena
- A1[131] de=Datum lv=datums value=Data
- A1[195] de=Foto lv=fotogrāfija value=Fotografia
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[527] de=Schüler lv=skolnieks value=Student
- A1[581] de=Student lv=students value=Student
- A1[593] de=Telefon lv=telefons value=Telefon
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[0] de=ab und zu lv=šad un tad • reizēm value=Od czasu do czasu • Czasami

### sk+tr (2479)

- A1[46] de=Ärztin lv=ārste value=Doktor
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[182] de=Fernseher lv=televizors value=TV
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[290] de=hungrig lv=izsalcis value=Issalcis
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[470] de=Park lv=parks value=Park
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[26] de=Aerobic lv=aerobika value=Aerobik

### sk+sq (2469)

- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[290] de=hungrig lv=izsalcis value=Issalcis
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[26] de=Aerobic lv=aerobika value=Aerobik
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[190] de=Bahnsteig lv=perons value=Platforma
- A2[194] de=Bank lv=banka value=Banka
- A2[195] de=Bankautomat lv=bankomāts value=Bankomat

### cs+sk (450)

- A1[2] de=Wasser lv=ūdens value=Voda
- A1[6] de=klein lv=mazs value=Malý
- A1[8] de=allein lv=viens pats value=Sám
- A1[10] de=alt lv=vecs value=Starý
- A1[18] de=Abend lv=vakars value=Večer
- A1[23] de=Adresse lv=adrese value=Adresa
- A1[25] de=Album lv=albums value=Album
- A1[32] de=Angst lv=bailes value=Strach
- A1[34] de=Antenne lv=antena value=Anténa
- A1[37] de=Anzug lv=uzvalks value=Oblek

### da+en (426)

- A1[25] de=Album lv=albums value=Album
- A1[41] de=April lv=aprīlis value=April
- A1[56] de=August lv=augusts value=August
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[119] de=Bus lv=autobuss value=Bus
- A1[121] de=Café lv=kafejnīca value=Cafe
- A1[123] de=Computer lv=dators value=Computer
- A1[136] de=Dezember lv=decembris value=December
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[182] de=Fernseher lv=televizors value=Television

### en+fr (354)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[97] de=Bild lv=attēls value=Image
- A1[99] de=Blatt lv=lapa value=Page
- A1[124] de=Cousin lv=brālēns value=Cousin
- A1[125] de=Cousine lv=māsīca value=Cousin
- A1[155] de=einfach lv=vienkāršs value=Simple
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[160] de=Eltern lv=vecāki value=Parents
- A1[173] de=falsch lv=nepareizs value=Incorrect

### en+ro (287)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[135] de=deutsch lv=vācu value=German
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[393] de=Mandarine lv=mandarīns value=Mandarin

### da+is (258)

- A1[9] de=alles lv=viss value=Alt
- A1[23] de=Adresse lv=adrese value=Adresse
- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenne
- A1[41] de=April lv=aprīlis value=April
- A1[56] de=August lv=augusts value=August
- A1[63] de=Auto lv=automašīna value=Bil
- A1[100] de=blau lv=zils value=Blå
- A1[103] de=blond lv=blonds value=Blond
- A1[118] de=Büro lv=birojs value=Kontor

### da+nb (258)

- A1[9] de=alles lv=viss value=Alt
- A1[23] de=Adresse lv=adrese value=Adresse
- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenne
- A1[41] de=April lv=aprīlis value=April
- A1[56] de=August lv=augusts value=August
- A1[63] de=Auto lv=automašīna value=Bil
- A1[100] de=blau lv=zils value=Blå
- A1[103] de=blond lv=blonds value=Blond
- A1[118] de=Büro lv=birojs value=Kontor

### da+nn (258)

- A1[9] de=alles lv=viss value=Alt
- A1[23] de=Adresse lv=adrese value=Adresse
- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenne
- A1[41] de=April lv=aprīlis value=April
- A1[56] de=August lv=augusts value=August
- A1[63] de=Auto lv=automašīna value=Bil
- A1[100] de=blau lv=zils value=Blå
- A1[103] de=blond lv=blonds value=Blond
- A1[118] de=Büro lv=birojs value=Kontor

### cs+pl (245)

- A1[21] de=aber lv=bet value=Ale
- A1[25] de=Album lv=albums value=Album
- A1[32] de=Angst lv=bailes value=Strach
- A1[54] de=Auge lv=acs value=Oko
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[78] de=bei lv=pie value=Na
- A1[97] de=Bild lv=attēls value=Obraz
- A1[114] de=Brücke lv=tilts value=Most
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[126] de=da lv=tur value=Tam

### da+fr (189)

- A1[23] de=Adresse lv=adrese value=Adresse
- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenne
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[103] de=blond lv=blonds value=Blond
- A1[107] de=braun lv=brūns value=Brun
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[220] de=Garage lv=garāža value=Garage
- A1[306] de=Jeans lv=džinsi value=Jeans

### bs+cs (187)

- A1[462] de=ohne lv=bez value=Bez
- B1[8] de=Aktentasche lv=portfelis value=Aktovka
- B1[16] de=Alternative lv=alternatīva value=Alternativa
- B1[57] de=Abiturient lv=abiturients value=Maturant
- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[142] de=Anschrift lv=adrese value=Adresa
- B1[167] de=Arithmetik lv=aritmētika value=Aritmetika
- B1[174] de=Athletik lv=atlētika value=Atletika
- B1[177] de=Attribut lv=atribūts value=Atribut

### fr+ro (182)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[70] de=Balkon lv=balkons value=Balcon
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[193] de=Flugzeug lv=lidmašīna value=Un avion
- A1[199] de=frei lv=brīvs value=Gratuit
- A1[354] de=langsam lv=lēns value=Lent
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[470] de=Park lv=parks value=Parc

### da+ro (170)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[393] de=Mandarine lv=mandarīns value=Mandarin

### bs+sl (166)

- A1[2] de=Wasser lv=ūdens value=voda
- A1[5] de=sprechen lv=runāt value=govoriti
- A1[8] de=allein lv=viens pats value=sam
- A1[10] de=alt lv=vecs value=star
- A1[11] de=Alter lv=vecums value=starost
- A1[18] de=Abend lv=vakars value=večer
- A1[25] de=Album lv=albums value=album
- A1[29] de=anschauen lv=apskatīt value=pogledati
- A1[32] de=Angst lv=bailes value=strah
- A1[35] de=Antwort lv=atbilde value=odgovor

### cs+tr (156)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza
- A1[593] de=Telefon lv=telefons value=Telefon
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[26] de=Aerobic lv=aerobika value=Aerobik
- A2[95] de=Asthma lv=astma value=Astma

### cs+sq (150)

- A1[246] de=Gramm lv=grams value=Gram
- A1[581] de=Student lv=students value=Student
- A1[593] de=Telefon lv=telefons value=Telefon
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[26] de=Aerobic lv=aerobika value=Aerobik
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[194] de=Bank lv=banka value=Banka
- A2[195] de=Bankautomat lv=bankomāts value=Bankomat

### bs+sk (144)

- A1[462] de=ohne lv=bez value=Bez
- B1[92] de=Agent lv=aģents value=Agent
- B1[142] de=Anschrift lv=adrese value=Adresa
- B1[172] de=Ass lv=dūzis value=As
- B1[225] de=Auszug lv=izraksts value=Ekstrakt
- B1[285] de=Begabung lv=talants value=Talent
- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[402] de=Beton lv=betons value=Beton
- B1[406] de=Betrag lv=summa value=Suma
- B1[465] de=Block lv=bloks value=Blok

### da+pl (144)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[72] de=Banane lv=banāns value=Banan
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[476] de=Pizza lv=pica value=Pizza

### bs+pl (142)

- A1[462] de=ohne lv=bez value=Bez
- B1[92] de=Agent lv=aģents value=Agent
- B1[172] de=Ass lv=dūzis value=As
- B1[225] de=Auszug lv=izraksts value=Ekstrakt
- B1[285] de=Begabung lv=talants value=Talent
- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[402] de=Beton lv=betons value=Beton
- B1[406] de=Betrag lv=summa value=Suma
- B1[417] de=Beutel lv=maisiņš value=Torba
- B1[443] de=Bildschirm lv=ekrāns value=Ekran

### pl+ro (132)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[131] de=Datum lv=datums value=Data
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[406] de=Million lv=miljons value=Milion
- A1[454] de=Null lv=nulle value=Zero

### cs+da (131)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[103] de=blond lv=blonds value=Blond
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[593] de=Telefon lv=telefons value=Telefon

### da+tr (131)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[381] de=Liste lv=saraksts value=Liste
- A1[452] de=normal lv=normāls value=Normal
- A1[476] de=Pizza lv=pica value=Pizza
- A1[593] de=Telefon lv=telefons value=Telefon

### da+sk (129)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[99] de=Blatt lv=lapa value=Side
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[262] de=halb lv=pus value=Side
- A1[263] de=Hälfte lv=puse value=Side
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[309] de=Keks lv=cepums value=Cookie
- A1[312] de=Kilogramm lv=kilograms value=Kilogram

### bs+sq (128)

- B1[91] de=Advent lv=advents value=Advent
- B1[158] de=Antrieb lv=dzinējs value=Motor
- B1[172] de=Ass lv=dūzis value=As
- B1[187] de=Aufschwung lv=uzplaukums value=Bum
- B1[402] de=Beton lv=betons value=Beton
- B1[437] de=Biathlon lv=biatlons value=Biatlon
- B1[443] de=Bildschirm lv=ekrāns value=Ekran
- B1[547] de=Code lv=kods value=Kod
- B1[594] de=Diplom lv=diploms value=Diploma
- B1[736] de=Element lv=elements value=Element

### bs+tr (128)

- B1[91] de=Advent lv=advents value=Advent
- B1[158] de=Antrieb lv=dzinējs value=Motor
- B1[172] de=Ass lv=dūzis value=As
- B1[187] de=Aufschwung lv=uzplaukums value=Bum
- B1[402] de=Beton lv=betons value=Beton
- B1[437] de=Biathlon lv=biatlons value=Biatlon
- B1[443] de=Bildschirm lv=ekrāns value=Ekran
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[547] de=Code lv=kods value=Kod
- B1[594] de=Diplom lv=diploms value=Diploma

### ro+tr (124)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[151] de=Dusche lv=duša value=Duş
- A1[185] de=Film lv=filma value=Film
- A1[220] de=Garage lv=garāža value=Garaj
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[249] de=grau lv=pelēks value=Gri
- A1[255] de=Gruppe lv=grupa value=Grup
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[452] de=normal lv=normāls value=Normal

### fr+it (122)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[452] de=normal lv=normāls value=Normale
- A1[453] de=November lv=novembris value=Novembre
- A1[457] de=ob lv=vai value=Ou
- A2[53] de=Anlass lv=iemesls • gadījums value=Raison • Cas
- A2[95] de=Asthma lv=astma value=Asthme
- A2[128] de=auflösen lv=izšķīdināt value=Dissoudre

### en+sk (121)

- A1[25] de=Album lv=albums value=Album
- A1[27] de=Ameise lv=skudra value=Ant
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[80] de=Bein lv=kāja value=Leg
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[262] de=halb lv=pus value=Side
- A1[263] de=Hälfte lv=puse value=Side
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[309] de=Keks lv=cepums value=Cookie

### da+sq (120)

- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[18] de=Abteil lv=kupeja value=Coupe
- A2[95] de=Asthma lv=astma value=Astma
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[231] de=Benzin lv=benzīns value=Benzin
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[307] de=Charakter lv=raksturs value=Karakter
- A2[335] de=Deo lv=dezodorants value=Deodorant

### ro+sq (116)

- A1[131] de=Datum lv=datums value=Data
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[249] de=grau lv=pelēks value=Gri
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[18] de=Abteil lv=kupeja value=Coupe
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[192] de=Ballon lv=balons value=Balon
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant

### ro+sk (113)

- A1[23] de=Adresse lv=adrese value=Adresa
- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[597] de=Text lv=teksts value=Text

### cs+ro (111)

- A1[23] de=Adresse lv=adrese value=Adresa
- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[195] de=Foto lv=fotogrāfija value=Fotografie
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program

### da+fi (109)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[103] de=blond lv=blonds value=Blond
- A1[118] de=Büro lv=birojs value=Kontor
- A1[185] de=Film lv=filma value=Film
- A1[331] de=Kalender lv=kalendārs value=Kalender
- A1[453] de=November lv=novembris value=November
- A1[480] de=Post lv=pasts value=Post
- A1[486] de=Punkt lv=punkts value=Punkt
- A1[506] de=Salat lv=salāti value=Salat

### da+sv (109)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[103] de=blond lv=blonds value=Blond
- A1[118] de=Büro lv=birojs value=Kontor
- A1[185] de=Film lv=filma value=Film
- A1[331] de=Kalender lv=kalendārs value=Kalender
- A1[453] de=November lv=novembris value=November
- A1[480] de=Post lv=pasts value=Post
- A1[486] de=Punkt lv=punkts value=Punkt
- A1[506] de=Salat lv=salāti value=Salat

### en+pl (109)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[454] de=Null lv=nulle value=Zero
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan

### bs+da (107)

- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[285] de=Begabung lv=talants value=Talent
- B1[402] de=Beton lv=betons value=Beton
- B1[465] de=Block lv=bloks value=Blok
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[581] de=Detektiv lv=detektīvs value=Detektiv
- B1[592] de=Diktat lv=diktāts value=Diktat
- B1[605] de=Drama lv=drāma value=Drama
- B1[736] de=Element lv=elements value=Element

### bs+ro (107)

- B1[31] de=Andenken lv=suvenīrs value=Suvenir
- B1[92] de=Agent lv=aģents value=Agent
- B1[142] de=Anschrift lv=adrese value=Adresa
- B1[172] de=Ass lv=dūzis value=As
- B1[177] de=Attribut lv=atribūts value=Atribut
- B1[187] de=Aufschwung lv=uzplaukums value=Bum
- B1[193] de=Aufzug lv=lifts value=Lift
- B1[285] de=Begabung lv=talants value=Talent
- B1[402] de=Beton lv=betons value=Beton
- B1[428] de=Bewohner lv=iedzīvotājs value=Rezident

### cs+is (95)

- A1[25] de=Album lv=albums value=Album
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[18] de=Abteil lv=kupeja value=Kupé

### cs+nb (95)

- A1[25] de=Album lv=albums value=Album
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[18] de=Abteil lv=kupeja value=Kupé

### cs+nn (95)

- A1[25] de=Album lv=albums value=Album
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[18] de=Abteil lv=kupeja value=Kupé

### is+pl (94)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan
- A1[483] de=Problem lv=problēma value=Problem
- A1[484] de=Programm lv=programma value=Program
- A1[486] de=Punkt lv=punkts value=Punkt

### nb+pl (94)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan
- A1[483] de=Problem lv=problēma value=Problem
- A1[484] de=Programm lv=programma value=Program
- A1[486] de=Punkt lv=punkts value=Punkt

### nn+pl (94)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan
- A1[483] de=Problem lv=problēma value=Problem
- A1[484] de=Programm lv=programma value=Program
- A1[486] de=Punkt lv=punkts value=Punkt

### en+is (92)

- A1[25] de=Album lv=albums value=Album
- A1[41] de=April lv=aprīlis value=April
- A1[56] de=August lv=augusts value=August
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[378] de=Limonade lv=limonāde value=Lemonade
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[406] de=Million lv=miljons value=Million
- A1[453] de=November lv=novembris value=November

### en+nb (92)

- A1[25] de=Album lv=albums value=Album
- A1[41] de=April lv=aprīlis value=April
- A1[56] de=August lv=augusts value=August
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[378] de=Limonade lv=limonāde value=Lemonade
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[406] de=Million lv=miljons value=Million
- A1[453] de=November lv=novembris value=November

### en+nn (92)

- A1[25] de=Album lv=albums value=Album
- A1[41] de=April lv=aprīlis value=April
- A1[56] de=August lv=augusts value=August
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[378] de=Limonade lv=limonāde value=Lemonade
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[406] de=Million lv=miljons value=Million
- A1[453] de=November lv=novembris value=November

### is+sk (91)

- A1[25] de=Album lv=albums value=Album
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[484] de=Programm lv=programma value=Program
- A1[502] de=Rose lv=roze value=Rose
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A2[18] de=Abteil lv=kupeja value=Kupé
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[91] de=Arzt lv=ārsts value=Doktor

### nb+sk (91)

- A1[25] de=Album lv=albums value=Album
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[484] de=Programm lv=programma value=Program
- A1[502] de=Rose lv=roze value=Rose
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A2[18] de=Abteil lv=kupeja value=Kupé
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[91] de=Arzt lv=ārsts value=Doktor

### nn+sk (91)

- A1[25] de=Album lv=albums value=Album
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[484] de=Programm lv=programma value=Program
- A1[502] de=Rose lv=roze value=Rose
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A2[18] de=Abteil lv=kupeja value=Kupé
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[91] de=Arzt lv=ārsts value=Doktor

### cs+en (90)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[597] de=Text lv=teksts value=Text
- A2[99] de=Atom lv=atoms value=Atom

### cs+fi (89)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[470] de=Park lv=parks value=Park
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor

### cs+sv (89)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[470] de=Park lv=parks value=Park
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor

### en+tr (88)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[452] de=normal lv=normāls value=Normal
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza
- A2[18] de=Abteil lv=kupeja value=Coupe
- A2[99] de=Atom lv=atoms value=Atom
- A2[186] de=Badminton lv=badmintons value=Badminton

### fi+sk (82)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[470] de=Park lv=parks value=Park
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[347] de=Doktor lv=doktors value=Doktor

### sk+sv (82)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[470] de=Park lv=parks value=Park
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[347] de=Doktor lv=doktors value=Doktor

### en+sq (81)

- A1[226] de=gegen lv=pret value=Vs
- A1[246] de=Gramm lv=grams value=Gram
- A2[18] de=Abteil lv=kupeja value=Coupe
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[686] de=Hotel lv=viesnīca value=Hotel
- A2[688] de=Humor lv=humors value=Humor
- A2[715] de=Internet lv=internets value=Internet

### pl+sv (79)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[233] de=Geschichte lv=stāsts value=historia
- A1[470] de=Park lv=parks value=Park
- A1[486] de=Punkt lv=punkts value=Punkt
- A1[593] de=Telefon lv=telefons value=Telefon
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor

### da+hu (78)

- A1[25] de=Album lv=albums value=Album
- A1[136] de=Dezember lv=decembris value=December
- A1[185] de=Film lv=filma value=Film
- A1[216] de=für lv=priekš value=For • For
- A1[226] de=gegen lv=pret value=Vs
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[271] de=Handy lv=mobilais tālrunis value=Mobiltelefon
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[382] de=Liter lv=litrs value=Liter
- A1[393] de=Mandarine lv=mandarīns value=Mandarin

### fi+pl (78)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[470] de=Park lv=parks value=Park
- A1[486] de=Punkt lv=punkts value=Punkt
- A1[593] de=Telefon lv=telefons value=Telefon
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[348] de=Dokument lv=dokuments value=Dokument

### cs+hu (76)

- A1[25] de=Album lv=albums value=Album
- A1[72] de=Banane lv=banāns value=Banán
- A1[185] de=Film lv=filma value=Film
- A1[469] de=Papier lv=papīrs value=Papír
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[593] de=Telefon lv=telefons value=Telefon
- A1[616] de=Vase lv=vāze value=Váza

### is+tr (76)

- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[476] de=Pizza lv=pica value=Pizza
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[78] de=Äquator lv=ekvators value=Ekvator
- A2[91] de=Arzt lv=ārsts value=Doktor
- A2[95] de=Asthma lv=astma value=Astma
- A2[99] de=Atom lv=atoms value=Atom

### nb+tr (76)

- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[476] de=Pizza lv=pica value=Pizza
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[78] de=Äquator lv=ekvators value=Ekvator
- A2[91] de=Arzt lv=ārsts value=Doktor
- A2[95] de=Asthma lv=astma value=Astma
- A2[99] de=Atom lv=atoms value=Atom

### nn+tr (76)

- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[476] de=Pizza lv=pica value=Pizza
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[78] de=Äquator lv=ekvators value=Ekvator
- A2[91] de=Arzt lv=ārsts value=Doktor
- A2[95] de=Asthma lv=astma value=Astma
- A2[99] de=Atom lv=atoms value=Atom

### en+fi (73)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[350] de=Lampe lv=lampa value=Lamp
- A1[453] de=November lv=novembris value=November
- A1[455] de=Nummer lv=numurs value=Number
- A1[470] de=Park lv=parks value=Park
- A1[546] de=September lv=septembris value=September
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[336] de=Paprika lv=paprika value=Paprika

### en+sv (73)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[350] de=Lampe lv=lampa value=Lamp
- A1[453] de=November lv=novembris value=November
- A1[455] de=Nummer lv=numurs value=Number
- A1[470] de=Park lv=parks value=Park
- A1[546] de=September lv=septembris value=September
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[336] de=Paprika lv=paprika value=Paprika

### bs+fi (71)

- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[193] de=Aufzug lv=lifts value=Lift
- B1[285] de=Begabung lv=talants value=Talent
- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[550] de=Cursor lv=kursors value=Kursor
- B1[736] de=Element lv=elements value=Element
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[867] de=Fasching lv=karnevāls value=Karneval

### bs+sv (71)

- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[193] de=Aufzug lv=lifts value=Lift
- B1[285] de=Begabung lv=talants value=Talent
- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[550] de=Cursor lv=kursors value=Kursor
- B1[736] de=Element lv=elements value=Element
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[867] de=Fasching lv=karnevāls value=Karneval

### bs+en (69)

- B1[11] de=Alarm lv=trauksme value=Alarm
- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[285] de=Begabung lv=talants value=Talent
- B1[507] de=Brosche lv=piespraude value=Pin
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[594] de=Diplom lv=diploms value=Diploma
- B1[605] de=Drama lv=drāma value=Drama
- B1[718] de=eintreten lv=ieiet value=Enter
- B1[736] de=Element lv=elements value=Element

### is+ro (69)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[389] de=Mai lv=maijs value=Mai
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan
- A1[484] de=Programm lv=programma value=Program

### nb+ro (69)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[389] de=Mai lv=maijs value=Mai
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan
- A1[484] de=Programm lv=programma value=Program

### nn+ro (69)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[389] de=Mai lv=maijs value=Mai
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan
- A1[484] de=Programm lv=programma value=Program

### bs+is (68)

- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[158] de=Antrieb lv=dzinējs value=Motor
- B1[285] de=Begabung lv=talants value=Talent
- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[550] de=Cursor lv=kursors value=Kursor
- B1[736] de=Element lv=elements value=Element
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[867] de=Fasching lv=karnevāls value=Karneval

### bs+nb (68)

- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[158] de=Antrieb lv=dzinējs value=Motor
- B1[285] de=Begabung lv=talants value=Talent
- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[550] de=Cursor lv=kursors value=Kursor
- B1[736] de=Element lv=elements value=Element
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[867] de=Fasching lv=karnevāls value=Karneval

### bs+nn (68)

- B1[91] de=Advent lv=advents value=Advent
- B1[92] de=Agent lv=aģents value=Agent
- B1[158] de=Antrieb lv=dzinējs value=Motor
- B1[285] de=Begabung lv=talants value=Talent
- B1[348] de=Berater lv=konsultants value=Konsultant
- B1[522] de=Bude lv=kiosks value=Kiosk
- B1[550] de=Cursor lv=kursors value=Kursor
- B1[736] de=Element lv=elements value=Element
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[867] de=Fasching lv=karnevāls value=Karneval

### hu+sk (66)

- A1[25] de=Album lv=albums value=Album
- A1[72] de=Banane lv=banāns value=Banán
- A1[159] de=E-Mail lv=e-pasts value=Email
- A1[226] de=gegen lv=pret value=Vs
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[470] de=Park lv=parks value=Park
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[601] de=Toilette lv=tualete value=WC
- A1[616] de=Vase lv=vāze value=Váza

### is+sq (66)

- A1[246] de=Gramm lv=grams value=Gram
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[78] de=Äquator lv=ekvators value=Ekvator
- A2[95] de=Asthma lv=astma value=Astma
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[314] de=Creme lv=krēms value=Krem
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[490] de=Filet lv=fileja value=Filet
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[757] de=Kanal lv=kanāls value=Kanal

### nb+sq (66)

- A1[246] de=Gramm lv=grams value=Gram
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[78] de=Äquator lv=ekvators value=Ekvator
- A2[95] de=Asthma lv=astma value=Astma
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[314] de=Creme lv=krēms value=Krem
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[490] de=Filet lv=fileja value=Filet
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[757] de=Kanal lv=kanāls value=Kanal

### nn+sq (66)

- A1[246] de=Gramm lv=grams value=Gram
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[78] de=Äquator lv=ekvators value=Ekvator
- A2[95] de=Asthma lv=astma value=Astma
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[314] de=Creme lv=krēms value=Krem
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[490] de=Filet lv=fileja value=Filet
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[757] de=Kanal lv=kanāls value=Kanal

### fi+tr (65)

- A1[185] de=Film lv=filma value=Film
- A1[470] de=Park lv=parks value=Park
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[347] de=Doktor lv=doktors value=Doktor
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[757] de=Kanal lv=kanāls value=Kanal

### sv+tr (65)

- A1[185] de=Film lv=filma value=Film
- A1[470] de=Park lv=parks value=Park
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[347] de=Doktor lv=doktors value=Doktor
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[757] de=Kanal lv=kanāls value=Kanal

### en+hu (63)

- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenna
- A1[78] de=bei lv=pie value=At
- A1[136] de=Dezember lv=decembris value=December
- A1[216] de=für lv=priekš value=For • For
- A1[226] de=gegen lv=pret value=Vs
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[295] de=in lv=iekšā • uz value=In • To
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[453] de=November lv=novembris value=November

### fi+sq (60)

- A1[593] de=Telefon lv=telefons value=Telefon
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[715] de=Internet lv=internets value=Internet
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[757] de=Kanal lv=kanāls value=Kanal
- A2[831] de=Konto lv=konts value=Konto
- A2[897] de=Logo lv=logotips value=Logo

### fr+pl (60)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[469] de=Papier lv=papīrs value=Papier
- A1[476] de=Pizza lv=pica value=Pizza
- A1[477] de=Plan lv=plāns value=Plan
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A2[186] de=Badminton lv=badmintons value=Badminton

### hu+pl (60)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[381] de=Liste lv=saraksts value=Lista
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[593] de=Telefon lv=telefons value=Telefon

### sq+sv (60)

- A1[593] de=Telefon lv=telefons value=Telefon
- A2[95] de=Asthma lv=astma value=Astma
- A2[176] de=Autor lv=autors value=Autor
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[715] de=Internet lv=internets value=Internet
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[757] de=Kanal lv=kanāls value=Kanal
- A2[831] de=Konto lv=konts value=Konto
- A2[897] de=Logo lv=logotips value=Logo

### hu+ro (59)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[26] de=Aerobic lv=aerobika value=Aerobic

### bs+nl (57)

- A1[462] de=ohne lv=bez value=Bez
- B1[9] de=Aktion lv=akcija value=Akcija
- B1[99] de=Aggression lv=agresija value=Agresija
- B1[168] de=Armee lv=armija value=Armija
- B1[370] de=Berühmtheit lv=slava value=Slava
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[848] de=Explosion lv=eksplozija value=Eksplozija
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1163] de=Gummischuh lv=galoša value=Galoša
- B1[1335] de=Hymne lv=himna value=Himna

### fi+ro (56)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[185] de=Film lv=filma value=Film
- A1[389] de=Mai lv=maijs value=Mai
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[699] de=Idee lv=ideja value=Idee
- A2[711] de=Instrument lv=instruments value=Instrument

### ro+sv (56)

- A1[25] de=Album lv=albums value=Album
- A1[56] de=August lv=augusts value=August
- A1[185] de=Film lv=filma value=Film
- A1[389] de=Mai lv=maijs value=Mai
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[335] de=Deo lv=dezodorants value=Deodorant
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[699] de=Idee lv=ideja value=Idee
- A2[711] de=Instrument lv=instruments value=Instrument

### hu+tr (54)

- A1[185] de=Film lv=filma value=Film
- A1[226] de=gegen lv=pret value=Vs
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[470] de=Park lv=parks value=Park
- A1[476] de=Pizza lv=pica value=Pizza
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[99] de=Atom lv=atoms value=Atom
- A2[231] de=Benzin lv=benzīns value=Benzin
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[307] de=Charakter lv=raksturs value=Karakter

### bs+it (52)

- B1[9] de=Aktion lv=akcija value=Akcija
- B1[99] de=Aggression lv=agresija value=Agresija
- B1[168] de=Armee lv=armija value=Armija
- B1[370] de=Berühmtheit lv=slava value=Slava
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[848] de=Explosion lv=eksplozija value=Eksplozija
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1163] de=Gummischuh lv=galoša value=Galoša
- B1[1335] de=Hymne lv=himna value=Himna
- B1[1366] de=Injektion lv=injekcija value=Injekcija

### cs+fr (52)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[103] de=blond lv=blonds value=Blond
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[476] de=Pizza lv=pica value=Pizza
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[278] de=Bowling lv=boulings value=Bowling

### fr+tr (52)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[185] de=Film lv=filma value=Film
- A1[381] de=Liste lv=saraksts value=Liste
- A1[382] de=Liter lv=litrs value=Litre
- A1[476] de=Pizza lv=pica value=Pizza
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[490] de=Filet lv=fileja value=Filet
- A2[557] de=Gas lv=gāze value=Gaz

### hu+sq (51)

- A1[226] de=gegen lv=pret value=Vs
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[231] de=Benzin lv=benzīns value=Benzin
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[307] de=Charakter lv=raksturs value=Karakter
- A2[612] de=Gutschein lv=kupons value=Kupon
- A2[688] de=Humor lv=humors value=Humor
- A2[715] de=Internet lv=internets value=Internet
- A2[784] de=Kefir lv=kefīrs value=Kefir
- A2[962] de=Monitor lv=monitors value=Monitor

### bs+lb (50)

- B1[168] de=Armee lv=armija value=Armija
- B1[370] de=Berühmtheit lv=slava value=Slava
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[848] de=Explosion lv=eksplozija value=Eksplozija
- B1[1163] de=Gummischuh lv=galoša value=Galoša
- B1[1335] de=Hymne lv=himna value=Himna
- B1[1366] de=Injektion lv=injekcija value=Injekcija
- B1[1391] de=Intrige lv=intriga value=Intriga
- B1[1395] de=Ironie lv=ironija value=Ironija
- B1[1401] de=Jacht lv=jahta value=Jahta

### fr+sk (49)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[469] de=Papier lv=papīrs value=Papier
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[557] de=Gas lv=gāze value=Gaz
- A2[618] de=Hafen lv=osta value=Port
- A2[711] de=Instrument lv=instruments value=Instrument

### fr+sq (46)

- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[490] de=Filet lv=fileja value=Filet
- A2[557] de=Gas lv=gāze value=Gaz
- A2[874] de=Lehrbuch lv=mācību grāmata value=Manuel
- A2[897] de=Logo lv=logotips value=Logo
- A2[935] de=Menü lv=ēdienkarte value=Menu
- A2[1128] de=Rätsel lv=mīkla value=Puzzle
- A2[1175] de=Roman lv=romāns value=Roman

### hu+is (44)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[271] de=Handy lv=mobilais tālrunis value=Mobiltelefon
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[382] de=Liter lv=litrs value=Liter
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[453] de=November lv=novembris value=November
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi

### hu+nb (44)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[271] de=Handy lv=mobilais tālrunis value=Mobiltelefon
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[382] de=Liter lv=litrs value=Liter
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[453] de=November lv=novembris value=November
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi

### hu+nn (44)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[271] de=Handy lv=mobilais tālrunis value=Mobiltelefon
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[382] de=Liter lv=litrs value=Liter
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[453] de=November lv=novembris value=November
- A1[476] de=Pizza lv=pica value=Pizza
- A1[484] de=Programm lv=programma value=Program
- A1[591] de=Taxi lv=taksometrs value=Taxi

### bs+hu (43)

- B1[91] de=Advent lv=advents value=Advent
- B1[193] de=Aufzug lv=lifts value=Lift
- B1[437] de=Biathlon lv=biatlons value=Biatlon
- B1[507] de=Brosche lv=piespraude value=Pin
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1310] de=Horizont lv=horizonts value=Horizont
- B1[1315] de=Hubschrauber lv=helikopters value=Helikopter
- B1[1643] de=Kritik lv=kritika value=Kritika
- B1[1738] de=Lawine lv=lavīna value=Lavina
- B1[1838] de=Mars lv=marss value=Mars

### cs+nl (43)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[247] de=Grammatik lv=gramatika value=Gramatika
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[350] de=Lampe lv=lampa value=Lampa
- A1[447] de=nicht lv=ne value=Ne
- A1[462] de=ohne lv=bez value=Bez
- A1[481] de=Preis lv=cena value=Cena

### fi+hu (41)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gramm
- A1[312] de=Kilogramm lv=kilograms value=Kilogramm
- A1[453] de=November lv=novembris value=November
- A1[470] de=Park lv=parks value=Park
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika

### hu+sv (41)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gramm
- A1[312] de=Kilogramm lv=kilograms value=Kilogramm
- A1[453] de=November lv=novembris value=November
- A1[470] de=Park lv=parks value=Park
- A1[593] de=Telefon lv=telefons value=Telefon
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika

### bs+pt (40)

- B1[9] de=Aktion lv=akcija value=Akcija
- B1[16] de=Alternative lv=alternatīva value=Alternativa
- B1[168] de=Armee lv=armija value=Armija
- B1[370] de=Berühmtheit lv=slava value=Slava
- B1[535] de=Cartoon lv=karikatūra value=Karikatura
- B1[605] de=Drama lv=drāma value=Drama
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1341] de=Illusion lv=ilūzija value=Iluzija
- B1[1366] de=Injektion lv=injekcija value=Injekcija

### cs+lb (39)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A2[95] de=Asthma lv=astma value=Astma
- A2[194] de=Bank lv=banka value=Banka
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[348] de=Dokument lv=dokuments value=Dokument
- A2[750] de=Kakao lv=kakao value=Kakao

### fr+is (39)

- A1[23] de=Adresse lv=adrese value=Adresse
- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenne
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[350] de=Lampe lv=lampa value=Lampe
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[396] de=März lv=marts value=Mars
- A1[406] de=Million lv=miljons value=Million
- A1[476] de=Pizza lv=pica value=Pizza

### fr+nb (39)

- A1[23] de=Adresse lv=adrese value=Adresse
- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenne
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[350] de=Lampe lv=lampa value=Lampe
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[396] de=März lv=marts value=Mars
- A1[406] de=Million lv=miljons value=Million
- A1[476] de=Pizza lv=pica value=Pizza

### fr+nn (39)

- A1[23] de=Adresse lv=adrese value=Adresse
- A1[25] de=Album lv=albums value=Album
- A1[34] de=Antenne lv=antena value=Antenne
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A1[350] de=Lampe lv=lampa value=Lampe
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[396] de=März lv=marts value=Mars
- A1[406] de=Million lv=miljons value=Million
- A1[476] de=Pizza lv=pica value=Pizza

### cs+it (38)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[481] de=Preis lv=cena value=Cena
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[311] de=Comic lv=komikss value=Komiks
- A2[465] de=Federball lv=badmintons value=Badminton

### da+nl (38)

- A1[34] de=Antenne lv=antena value=Antenne
- A1[41] de=April lv=aprīlis value=April
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[136] de=Dezember lv=decembris value=December
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[220] de=Garage lv=garāža value=Garage
- A1[266] de=Haltestelle lv=pietura value=Stop
- A2[21] de=Achse lv=ass value=Ass
- A2[95] de=Asthma lv=astma value=Astma

### da+lb (36)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[486] de=Punkt lv=punkts value=Punkt
- A2[21] de=Achse lv=ass value=Ass
- A2[95] de=Asthma lv=astma value=Astma
- A2[191] de=Ballett lv=balets value=Ballet
- A2[231] de=Benzin lv=benzīns value=Benzin

### en+it (36)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[191] de=Ballett lv=balets value=Ballet
- A2[348] de=Dokument lv=dokuments value=Document
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[550] de=Galerie lv=galerija value=Gallery
- A2[715] de=Internet lv=internets value=Internet
- A2[723] de=Jackett lv=žakete value=Blazer

### en+nl (34)

- A1[41] de=April lv=aprīlis value=April
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[136] de=Dezember lv=decembris value=December
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[220] de=Garage lv=garāža value=Garage
- A1[240] de=Giraffe lv=žirafe value=Giraffe
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[332] de=Kamera lv=kamera value=Camera
- A2[21] de=Achse lv=ass value=Ass
- A2[191] de=Ballett lv=balets value=Ballet

### is+lb (34)

- A1[40] de=Aprikose lv=aprikoze value=Aprikos
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[454] de=Null lv=nulle value=Null
- A1[486] de=Punkt lv=punkts value=Punkt
- A2[68] de=Antibiotikum lv=antibiotika value=Antibiotika
- A2[95] de=Asthma lv=astma value=Astma
- A2[348] de=Dokument lv=dokuments value=Dokument

### lb+nb (34)

- A1[40] de=Aprikose lv=aprikoze value=Aprikos
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[454] de=Null lv=nulle value=Null
- A1[486] de=Punkt lv=punkts value=Punkt
- A2[68] de=Antibiotikum lv=antibiotika value=Antibiotika
- A2[95] de=Asthma lv=astma value=Astma
- A2[348] de=Dokument lv=dokuments value=Dokument

### lb+nn (34)

- A1[40] de=Aprikose lv=aprikoze value=Aprikos
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[454] de=Null lv=nulle value=Null
- A1[486] de=Punkt lv=punkts value=Punkt
- A2[68] de=Antibiotikum lv=antibiotika value=Antibiotika
- A2[95] de=Asthma lv=astma value=Astma
- A2[348] de=Dokument lv=dokuments value=Dokument

### da+it (32)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[143] de=drei lv=trīs value=Tre
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[520] de=Schokolade lv=šokolāde value=Chokolade
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[191] de=Ballett lv=balets value=Ballet
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[933] de=Melone lv=melone value=Melon

### lb+sv (32)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[185] de=Film lv=filma value=Film
- A1[312] de=Kilogramm lv=kilograms value=Kilogramm
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[454] de=Null lv=nulle value=Null
- A1[484] de=Programm lv=programma value=Programm
- A1[486] de=Punkt lv=punkts value=Punkt
- A2[95] de=Asthma lv=astma value=Astma
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[348] de=Dokument lv=dokuments value=Dokument

### bs+et (31)

- A1[25] de=Album lv=albums value=album
- A1[56] de=August lv=augusts value=august
- A1[63] de=Auto lv=automašīna value=auto
- A1[185] de=Film lv=filma value=film
- A1[470] de=Park lv=parks value=park
- A1[593] de=Telefon lv=telefons value=telefon
- A1[597] de=Text lv=teksts value=tekst
- A2[32] de=Alkohol lv=alkohols value=alkohol
- A2[176] de=Autor lv=autors value=autor
- A2[345] de=Direktor lv=direktors value=direktor

### bs+lt (31)

- A1[195] de=Foto lv=fotogrāfija value=fotografija
- A1[240] de=Giraffe lv=žirafe value=žirafa
- A1[422] de=Musik lv=mūzika value=muzika
- A1[436] de=nein lv=nē value=ne
- A1[561] de=Sofa lv=dīvāns value=sofa
- A1[591] de=Taxi lv=taksometrs value=taksi
- A1[616] de=Vase lv=vāze value=vaza
- A1[640] de=wann lv=kad value=kada
- A1[688] de=Fernsehen lv=televīzija value=televizija
- A2[252] de=Bibliothek lv=bibliotēka value=biblioteka

### fi+lb (31)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[185] de=Film lv=filma value=Film
- A1[312] de=Kilogramm lv=kilograms value=Kilogramm
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[454] de=Null lv=nulle value=Null
- A1[484] de=Programm lv=programma value=Programm
- A1[486] de=Punkt lv=punkts value=Punkt
- A2[95] de=Asthma lv=astma value=Astma
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[348] de=Dokument lv=dokuments value=Dokument

### it+pl (31)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[481] de=Preis lv=cena value=Cena
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[311] de=Comic lv=komikss value=Komiks
- A2[320] de=Dame lv=dāma value=Dama
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[715] de=Internet lv=internets value=Internet

### lb+sk (31)

- A1[31] de=anhalten lv=apstāties value=Stop
- A1[63] de=Auto lv=automašīna value=Auto
- A1[246] de=Gramm lv=grams value=Gram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[404] de=Meter lv=metrs value=Meter
- A2[95] de=Asthma lv=astma value=Astma
- A2[194] de=Bank lv=banka value=Banka
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[348] de=Dokument lv=dokuments value=Dokument

### nl+pl (31)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[255] de=Gruppe lv=grupa value=Grupa
- A1[350] de=Lampe lv=lampa value=Lampa
- A1[462] de=ohne lv=bez value=Bez
- A1[481] de=Preis lv=cena value=Cena
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[95] de=Asthma lv=astma value=Astma
- A2[750] de=Kakao lv=kakao value=Kakao

### nl+sv (31)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[72] de=Banane lv=banāns value=Banaan
- A1[185] de=Film lv=filma value=Film
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A2[95] de=Asthma lv=astma value=Astma
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[1404] de=Stress lv=stress value=Stress

### bs+hr (30)

- A1[0] de=Apfel lv=ābols value=jabuka
- A1[4] de=lernen lv=mācīties value=učiti
- A1[89] de=besuchen lv=apmeklēt value=posjetiti
- A1[218] de=Fußball lv=futbols value=fudbal
- A1[233] de=Geschichte lv=stāsts value=priča
- A1[251] de=Großeltern lv=vecvecāki value=baka i djed
- A1[288] de=hübsch lv=glīts value=lijep
- B1[30] de=allzu lv=pārāk value=Previše
- B1[39] de=Abbildung lv=attēls value=Slika
- B1[43] de=abermals lv=vēlreiz value=Opet

### fi+nl (30)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[72] de=Banane lv=banāns value=Banaan
- A1[185] de=Film lv=filma value=Film
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A2[95] de=Asthma lv=astma value=Astma
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[1404] de=Stress lv=stress value=Stress

### fr+nl (30)

- A1[34] de=Antenne lv=antena value=Antenne
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[151] de=Dusche lv=duša value=Douche
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[220] de=Garage lv=garāža value=Garage
- A1[506] de=Salat lv=salāti value=Salade
- A1[587] de=Tante lv=tante value=Tante
- A2[191] de=Ballett lv=balets value=Ballet
- A2[336] de=Paprika lv=paprika value=Paprika

### is+nl (30)

- A1[34] de=Antenne lv=antena value=Antenne
- A1[41] de=April lv=aprīlis value=April
- A1[185] de=Film lv=filma value=Film
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[68] de=Antibiotikum lv=antibiotika value=Antibiotika
- A2[95] de=Asthma lv=astma value=Astma
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[776] de=Kasten lv=kaste value=Kaste
- A2[805] de=Kiste lv=kaste value=Kaste

### nb+nl (30)

- A1[34] de=Antenne lv=antena value=Antenne
- A1[41] de=April lv=aprīlis value=April
- A1[185] de=Film lv=filma value=Film
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[68] de=Antibiotikum lv=antibiotika value=Antibiotika
- A2[95] de=Asthma lv=astma value=Astma
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[776] de=Kasten lv=kaste value=Kaste
- A2[805] de=Kiste lv=kaste value=Kaste

### nl+nn (30)

- A1[34] de=Antenne lv=antena value=Antenne
- A1[41] de=April lv=aprīlis value=April
- A1[185] de=Film lv=filma value=Film
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[68] de=Antibiotikum lv=antibiotika value=Antibiotika
- A2[95] de=Asthma lv=astma value=Astma
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[776] de=Kasten lv=kaste value=Kaste
- A2[805] de=Kiste lv=kaste value=Kaste

### nl+sk (30)

- A1[63] de=Auto lv=automašīna value=Auto
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[247] de=Grammatik lv=gramatika value=Gramatika
- A1[266] de=Haltestelle lv=pietura value=Stop
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[462] de=ohne lv=bez value=Bez
- A1[481] de=Preis lv=cena value=Cena
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[95] de=Asthma lv=astma value=Astma
- A2[194] de=Bank lv=banka value=Banka

### lb+pl (28)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[332] de=Kamera lv=kamera value=Kamera
- A1[486] de=Punkt lv=punkts value=Punkt
- A2[95] de=Asthma lv=astma value=Astma
- A2[348] de=Dokument lv=dokuments value=Dokument
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[777] de=Katalog lv=katalogs value=Katalog
- A2[918] de=Maske lv=maska value=Maska

### lb+tr (28)

- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A1[332] de=Kamera lv=kamera value=Kamera
- A2[95] de=Asthma lv=astma value=Astma
- A2[194] de=Bank lv=banka value=Banka
- A2[231] de=Benzin lv=benzīns value=Benzin
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[777] de=Katalog lv=katalogs value=Katalog
- A2[1042] de=Oper lv=opera value=Opera

### bs+fr (27)

- B1[92] de=Agent lv=aģents value=Agent
- B1[172] de=Ass lv=dūzis value=As
- B1[747] de=Endstation lv=galastacija value=Terminus
- B1[1131] de=Glücksbringer lv=talismans value=Talisman
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1381] de=Institut lv=institūts value=Institut
- B1[1399] de=Islam lv=islāms value=Islam
- B1[1419] de=Jasmin lv=jasmīns value=Jasmin
- B1[1531] de=Klemme lv=spaile value=Terminal
- B1[1726] de=Laser lv=lāzers value=Laser

### en+lb (27)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[246] de=Gramm lv=grams value=Gram
- A1[313] de=Kilometer lv=kilometrs value=Kilometer
- A2[21] de=Achse lv=ass value=Ass
- A2[191] de=Ballett lv=balets value=Ballet
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[957] de=modern lv=moderns value=Modern
- A2[1037] de=offen lv=atvērts value=Open
- A2[1042] de=Oper lv=opera value=Opera

### nl+tr (27)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[185] de=Film lv=filma value=Film
- A1[607] de=U-Bahn lv=metro value=Metro
- A2[95] de=Asthma lv=astma value=Astma
- A2[194] de=Bank lv=banka value=Banka
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[1042] de=Oper lv=opera value=Opera
- A2[1095] de=Politik lv=politika value=Politika
- A2[1182] de=Rundfunk lv=radio value=Radio

### pl+pt (27)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[550] de=Galerie lv=galerija value=Galeria
- A2[715] de=Internet lv=internets value=Internet
- A2[784] de=Kefir lv=kefīrs value=Kefir
- A2[795] de=Kinderarzt lv=bērnu ārsts value=Pediatra
- A2[891] de=Linie lv=līnija value=Linia
- A2[894] de=Literatur lv=literatūra value=Literatura

### fr+hu (26)

- A1[25] de=Album lv=albums value=Album
- A1[185] de=Film lv=filma value=Film
- A1[393] de=Mandarine lv=mandarīns value=Mandarin
- A1[476] de=Pizza lv=pica value=Pizza
- A1[591] de=Taxi lv=taksometrs value=Taxi
- A2[192] de=Ballon lv=balons value=Ballon
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[349] de=doppelt lv=divkāršs • divkārtīgs • dubults value=Double • Double • Double
- A2[793] de=Ketchup lv=kečups value=Ketchup

### it+ro (26)

- A1[25] de=Album lv=albums value=Album
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[236] de=gestern lv=vakar value=Ieri
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[348] de=Dokument lv=dokuments value=Document
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[715] de=Internet lv=internets value=Internet
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[750] de=Kakao lv=kakao value=Cacao

### it+sk (26)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[67] de=Sauna lv=sauna value=Sauna
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A1[481] de=Preis lv=cena value=Cena
- A1[502] de=Rose lv=roze value=Rose
- A2[715] de=Internet lv=internets value=Internet
- A2[918] de=Maske lv=maska value=Maska
- A2[933] de=Melone lv=melone value=Melon

### it+sv (26)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[715] de=Internet lv=internets value=Internet
- A2[933] de=Melone lv=melone value=Melon
- A2[1428] de=Technik lv=tehnika value=Tehnika
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1143] de=Grieß lv=manna value=Manna

### lb+sq (26)

- A1[246] de=Gramm lv=grams value=Gram
- A2[95] de=Asthma lv=astma value=Astma
- A2[194] de=Bank lv=banka value=Banka
- A2[231] de=Benzin lv=benzīns value=Benzin
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[777] de=Katalog lv=katalogs value=Katalog
- A2[1042] de=Oper lv=opera value=Opera
- A2[1095] de=Politik lv=politika value=Politika
- A2[1182] de=Rundfunk lv=radio value=Radio

### en+hr (25)

- A1[41] de=April lv=aprīlis value=April
- A1[121] de=Café lv=kafejnīca value=Cafe
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[349] de=Laden lv=veikals value=Shop
- A1[477] de=Plan lv=plāns value=Plan
- A1[577] de=Stern lv=zvaigzne value=Star
- A1[592] de=Tee lv=tēja value=Tea
- A1[595] de=Teller lv=šķīvis value=Plate
- A2[88] de=Art lv=veids value=Way

### en+sr (25)

- A1[41] de=April lv=aprīlis value=April
- A1[121] de=Café lv=kafejnīca value=Cafe
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[349] de=Laden lv=veikals value=Shop
- A1[477] de=Plan lv=plāns value=Plan
- A1[577] de=Stern lv=zvaigzne value=Star
- A1[592] de=Tee lv=tēja value=Tea
- A1[595] de=Teller lv=šķīvis value=Plate
- A2[88] de=Art lv=veids value=Way

### fi+it (25)

- A1[25] de=Album lv=albums value=Album
- A1[63] de=Auto lv=automašīna value=Auto
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A1[343] de=Kraftwagen lv=automašīna value=Auto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[715] de=Internet lv=internets value=Internet
- A2[933] de=Melone lv=melone value=Melon
- A2[1428] de=Technik lv=tehnika value=Tehnika
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1143] de=Grieß lv=manna value=Manna

### nl+sq (25)

- A1[607] de=U-Bahn lv=metro value=Metro
- A2[95] de=Asthma lv=astma value=Astma
- A2[194] de=Bank lv=banka value=Banka
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[750] de=Kakao lv=kakao value=Kakao
- A2[1042] de=Oper lv=opera value=Opera
- A2[1095] de=Politik lv=politika value=Politika
- A2[1182] de=Rundfunk lv=radio value=Radio
- A2[1528] de=Video lv=video value=Video
- B1[599] de=Domino lv=domino value=Domino

### bs+es (24)

- A1[63] de=Auto lv=automašīna value=auto
- A1[72] de=Banane lv=banāns value=banana
- A1[381] de=Liste lv=saraksts value=lista
- A1[393] de=Mandarine lv=mandarīns value=mandarina
- A1[477] de=Plan lv=plāns value=plan
- A1[649] de=Wein lv=vīns value=vino
- A2[320] de=Dame lv=dāma value=dama
- A2[489] de=Figur lv=figūra • augums value=figura
- A2[557] de=Gas lv=gāze value=gas
- A2[686] de=Hotel lv=viesnīca value=hotel

### is+it (24)

- A1[25] de=Album lv=albums value=Album
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A1[502] de=Rose lv=roze value=Rose
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[807] de=Klavier lv=klavieres value=Piano
- A2[933] de=Melone lv=melone value=Melon
- A2[1153] de=Religion lv=reliģija value=Religion
- A2[1182] de=Rundfunk lv=radio value=Radio
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1143] de=Grieß lv=manna value=Manna

### it+nb (24)

- A1[25] de=Album lv=albums value=Album
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A1[502] de=Rose lv=roze value=Rose
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[807] de=Klavier lv=klavieres value=Piano
- A2[933] de=Melone lv=melone value=Melon
- A2[1153] de=Religion lv=reliģija value=Religion
- A2[1182] de=Rundfunk lv=radio value=Radio
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1143] de=Grieß lv=manna value=Manna

### it+nn (24)

- A1[25] de=Album lv=albums value=Album
- A1[195] de=Foto lv=fotogrāfija value=Foto
- A1[502] de=Rose lv=roze value=Rose
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[807] de=Klavier lv=klavieres value=Piano
- A2[933] de=Melone lv=melone value=Melon
- A2[1153] de=Religion lv=reliģija value=Religion
- A2[1182] de=Rundfunk lv=radio value=Radio
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1143] de=Grieß lv=manna value=Manna

### nl+ro (24)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[149] de=du lv=tu value=Tu
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[266] de=Haltestelle lv=pietura value=Stop
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[348] de=Dokument lv=dokuments value=Document
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[957] de=modern lv=moderns value=Modern
- A2[1182] de=Rundfunk lv=radio value=Radio

### bs+sr (23)

- B1[30] de=allzu lv=pārāk value=Previše
- B1[39] de=Abbildung lv=attēls value=Slika
- B1[43] de=abermals lv=vēlreiz value=Opet
- B1[191] de=Auftrag lv=uzdevums value=Zadatak
- B1[432] de=Bezeichnung lv=nosaukums value=Ime
- B1[496] de=Breite lv=platums value=Širina
- B1[526] de=Bund lv=savienība value=Sindikat
- B1[1092] de=Gestalt lv=tēls value=Slika
- B1[1371] de=innerhalb lv=iekšpusē value=Unutra
- B1[1393] de=inwendig lv=iekšpusē value=Unutra

### fr+lb (23)

- A1[151] de=Dusche lv=duša value=Douche
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[247] de=Grammatik lv=gramatika value=Grammaire
- A2[191] de=Ballett lv=balets value=Ballet
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[1055] de=Parfüm lv=smaržas value=Parfums
- A2[1182] de=Rundfunk lv=radio value=Radio
- B1[494] de=Brause lv=duša value=Douche
- B1[597] de=Disziplin lv=disciplīna value=Discipline

### fr+pt (23)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[158] de=elf lv=vienpadsmit value=Onze
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[263] de=Blitz lv=zibens value=Foudre
- A2[279] de=Boxen lv=bokss value=Boxe
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[532] de=fröhlich lv=priecīgs • jautrs value=Heureux • Joyeux
- A2[754] de=Kamel lv=kamielis value=Chameau
- A2[758] de=Kaninchen lv=trusis value=Lapin

### en+pt (22)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[452] de=normal lv=normāls value=Normal
- A1[520] de=Schokolade lv=šokolāde value=Chocolate
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[609] de=Gulasch lv=gulašs value=Goulash
- A2[715] de=Internet lv=internets value=Internet
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[784] de=Kefir lv=kefīrs value=Kefir

### fi+fr (22)

- A1[25] de=Album lv=albums value=Album
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[711] de=Instrument lv=instruments value=Instrument
- A2[897] de=Logo lv=logotips value=Logo
- A2[933] de=Melone lv=melone value=Melon
- A2[1155] de=Rente lv=pensija value=Pension
- A2[1478] de=Tunnel lv=tunelis value=Tunnel

### fr+sv (22)

- A1[25] de=Album lv=albums value=Album
- A1[103] de=blond lv=blonds value=Blond
- A1[185] de=Film lv=filma value=Film
- A2[278] de=Bowling lv=boulings value=Bowling
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[711] de=Instrument lv=instruments value=Instrument
- A2[897] de=Logo lv=logotips value=Logo
- A2[933] de=Melone lv=melone value=Melon
- A2[1155] de=Rente lv=pensija value=Pension
- A2[1478] de=Tunnel lv=tunelis value=Tunnel

### pt+sq (22)

- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[550] de=Galerie lv=galerija value=Galeria
- A2[715] de=Internet lv=internets value=Internet
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[784] de=Kefir lv=kefīrs value=Kefir
- A2[891] de=Linie lv=līnija value=Linia
- A2[894] de=Literatur lv=literatūra value=Literatura
- A2[923] de=Mayonnaise lv=majonēze value=Majonez
- B1[1138] de=Gräte lv=asaka value=Asaka

### pt+tr (22)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[452] de=normal lv=normāls value=Normal
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[550] de=Galerie lv=galerija value=Galeria
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[784] de=Kefir lv=kefīrs value=Kefir
- A2[891] de=Linie lv=līnija value=Linia
- A2[894] de=Literatur lv=literatūra value=Literatura
- A2[923] de=Mayonnaise lv=majonēze value=Majonez

### cs+pt (21)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[715] de=Internet lv=internets value=Internet
- A2[894] de=Literatur lv=literatūra value=Literatura
- A2[1090] de=Planet lv=planēta value=Planeta
- A2[1280] de=Serie lv=sērija value=Série
- A2[1579] de=Werbung lv=reklāma value=Reklama
- B1[16] de=Alternative lv=alternatīva value=Alternativa

### pt+ro (21)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[452] de=normal lv=normāls value=Normal
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[715] de=Internet lv=internets value=Internet
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[891] de=Linie lv=līnija value=Linia
- A2[1004] de=nervös lv=nervozs value=Nervos
- A2[1099] de=populär lv=populārs value=Popular

### da+pt (20)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[452] de=normal lv=normāls value=Normal
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[714] de=Interesse lv=interese value=Interesse
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[784] de=Kefir lv=kefīrs value=Kefir
- B1[515] de=brutal lv=brutāls value=Brutal
- B1[605] de=Drama lv=drāma value=Drama

### it+sq (20)

- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[320] de=Dame lv=dāma value=Dama
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[715] de=Internet lv=internets value=Internet
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[1182] de=Rundfunk lv=radio value=Radio
- B1[599] de=Domino lv=domino value=Domino
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1143] de=Grieß lv=manna value=Manna
- B1[1992] de=Norm lv=norma value=Norma

### it+tr (20)

- A1[67] de=Sauna lv=sauna value=Sauna
- A1[378] de=Limonade lv=limonāde value=Limonata
- A2[186] de=Badminton lv=badmintons value=Badminton
- A2[320] de=Dame lv=dāma value=Dama
- A2[465] de=Federball lv=badmintons value=Badminton
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[1182] de=Rundfunk lv=radio value=Radio
- B1[599] de=Domino lv=domino value=Domino
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1143] de=Grieß lv=manna value=Manna

### lb+ro (20)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A1[185] de=Film lv=filma value=Film
- A1[246] de=Gramm lv=grams value=Gram
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[723] de=Jackett lv=žakete value=Blazer
- A2[957] de=modern lv=moderns value=Modern
- A2[1182] de=Rundfunk lv=radio value=Radio
- A2[1528] de=Video lv=video value=Video
- B1[205] de=äußerlich lv=ārējs value=Extern
- B1[441] de=Biskuit lv=biskvīts value=Biscuit

### hr+sk (18)

- A1[2] de=Wasser lv=ūdens value=Voda
- A1[44] de=Arm lv=roka value=Ruka
- A1[114] de=Brücke lv=tilts value=Most
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[143] de=drei lv=trīs value=Tri
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[509] de=Schaf lv=aita value=Ovce
- A1[577] de=Stern lv=zvaigzne value=Star
- A1[587] de=Tante lv=tante value=Teta

### hu+lb (18)

- A1[185] de=Film lv=filma value=Film
- A1[312] de=Kilogramm lv=kilograms value=Kilogramm
- A1[332] de=Kamera lv=kamera value=Kamera
- A2[231] de=Benzin lv=benzīns value=Benzin
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[957] de=modern lv=moderns value=Modern
- A2[1042] de=Oper lv=opera value=Opera
- A2[1082] de=Physik lv=fizika value=Fizika
- A2[1095] de=Politik lv=politika value=Politika
- B1[1143] de=Grieß lv=manna value=Manna

### hu+nl (18)

- A1[136] de=Dezember lv=decembris value=December
- A1[185] de=Film lv=filma value=Film
- A1[266] de=Haltestelle lv=pietura value=Stop
- A2[336] de=Paprika lv=paprika value=Paprika
- A2[957] de=modern lv=moderns value=Modern
- A2[1042] de=Oper lv=opera value=Opera
- A2[1082] de=Physik lv=fizika value=Fizika
- A2[1095] de=Politik lv=politika value=Politika
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1143] de=Grieß lv=manna value=Manna

### pt+sk (18)

- A1[67] de=Sauna lv=sauna value=Sauna
- A2[550] de=Galerie lv=galerija value=Galeria
- A2[715] de=Internet lv=internets value=Internet
- A2[891] de=Linie lv=līnija value=Linia
- A2[894] de=Literatur lv=literatūra value=Literatura
- A2[923] de=Mayonnaise lv=majonēze value=Majonez
- A2[1090] de=Planet lv=planēta value=Planeta
- A2[1182] de=Rundfunk lv=radio value=Rádio
- A2[1579] de=Werbung lv=reklāma value=Reklama
- B1[583] de=Diät lv=diēta value=Dieta

### sk+sr (18)

- A1[2] de=Wasser lv=ūdens value=Voda
- A1[44] de=Arm lv=roka value=Ruka
- A1[114] de=Brücke lv=tilts value=Most
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[143] de=drei lv=trīs value=Tri
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[509] de=Schaf lv=aita value=Ovce
- A1[577] de=Stern lv=zvaigzne value=Star
- A1[587] de=Tante lv=tante value=Teta

### da+hr (17)

- A1[41] de=April lv=aprīlis value=April
- A1[121] de=Café lv=kafejnīca value=Cafe
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[364] de=dünn lv=plāns value=Plan
- A2[745] de=Kaffeehaus lv=kafejnīca value=Cafe
- A2[1532] de=Vitamin lv=vitamīns value=Vitamin

### da+sr (17)

- A1[41] de=April lv=aprīlis value=April
- A1[121] de=Café lv=kafejnīca value=Cafe
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[364] de=dünn lv=plāns value=Plan
- A2[745] de=Kaffeehaus lv=kafejnīca value=Cafe
- A2[1532] de=Vitamin lv=vitamīns value=Vitamin

### cs+hr (16)

- A1[2] de=Wasser lv=ūdens value=Voda
- A1[114] de=Brücke lv=tilts value=Most
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[131] de=Datum lv=datums value=Datum
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[407] de=Minute lv=minūte value=Minuta
- A1[509] de=Schaf lv=aita value=Ovce
- A1[587] de=Tante lv=tante value=Teta
- A2[32] de=Alkohol lv=alkohols value=Alkohol

### cs+sr (16)

- A1[2] de=Wasser lv=ūdens value=Voda
- A1[114] de=Brücke lv=tilts value=Most
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[131] de=Datum lv=datums value=Datum
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[407] de=Minute lv=minūte value=Minuta
- A1[509] de=Schaf lv=aita value=Ovce
- A1[587] de=Tante lv=tante value=Teta
- A2[32] de=Alkohol lv=alkohols value=Alkohol

### es+lt (16)

- A1[483] de=Problem lv=problēma value=problema
- A1[484] de=Programm lv=programma value=programa
- A2[320] de=Dame lv=dāma value=dama
- A2[925] de=Medizin lv=medicīna value=medicina
- A2[1090] de=Planet lv=planēta value=planeta
- A2[1409] de=Summe lv=summa value=suma
- A2[1411] de=System lv=sistēma value=sistema
- A2[1440] de=Thema lv=temats value=tema
- B1[96] de=Ader lv=vēna value=vena
- B1[406] de=Betrag lv=summa value=suma

### hr+pl (16)

- A1[34] de=Antenne lv=antena value=Antena
- A1[80] de=Bein lv=kāja value=Noga
- A1[114] de=Brücke lv=tilts value=Most
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[192] de=Ballon lv=balons value=Balon

### pl+sr (16)

- A1[34] de=Antenne lv=antena value=Antena
- A1[80] de=Bein lv=kāja value=Noga
- A1[114] de=Brücke lv=tilts value=Most
- A1[119] de=Bus lv=autobuss value=Autobus
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[192] de=Ballon lv=balons value=Balon

### pt+sv (16)

- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[633] de=Hantel lv=hantele value=Hantel
- A2[715] de=Internet lv=internets value=Internet
- A2[1121] de=Radieschen lv=redīss value=Redis
- B1[726] de=Eisberg lv=aisbergs value=Aisberg
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1939] de=Nabel lv=naba value=Naba
- B1[3210] de=Web lv=internets value=Internet
- B1[3227] de=Weinbrand lv=konjaks value=Konjak

### fi+pt (15)

- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[633] de=Hantel lv=hantele value=Hantel
- A2[715] de=Internet lv=internets value=Internet
- A2[1121] de=Radieschen lv=redīss value=Redis
- B1[726] de=Eisberg lv=aisbergs value=Aisberg
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1939] de=Nabel lv=naba value=Naba
- B1[3210] de=Web lv=internets value=Internet
- B1[3227] de=Weinbrand lv=konjaks value=Konjak

### hr+ro (15)

- A1[246] de=Gramm lv=grams value=Gram
- A1[297] de=ja lv=jā value=Da
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[485] de=Pullover lv=džemperis value=Pulover
- A2[192] de=Ballon lv=balons value=Balon
- A2[364] de=dünn lv=plāns value=Plan
- A2[984] de=Nachspeise lv=deserts value=Desert
- A2[1410] de=Sweater lv=svīteris value=Pulover
- B1[972] de=Futter lv=barība value=Hrana

### hu+it (15)

- A1[25] de=Album lv=albums value=Album
- A2[530] de=Frisur lv=frizūra value=Frizura
- A2[715] de=Internet lv=internets value=Internet
- A2[920] de=Mathematik lv=matemātika value=Matematika
- A2[1082] de=Physik lv=fizika value=Fizika
- A2[1481] de=Tüte lv=tūta value=Tuta
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1143] de=Grieß lv=manna value=Manna
- B1[1643] de=Kritik lv=kritika value=Kritika
- B1[2079] de=per lv=pa value=Pa

### ro+sr (15)

- A1[246] de=Gramm lv=grams value=Gram
- A1[297] de=ja lv=jā value=Da
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[485] de=Pullover lv=džemperis value=Pulover
- A2[192] de=Ballon lv=balons value=Balon
- A2[364] de=dünn lv=plāns value=Plan
- A2[984] de=Nachspeise lv=deserts value=Desert
- A2[1410] de=Sweater lv=svīteris value=Pulover
- B1[972] de=Futter lv=barība value=Hrana

### is+pt (14)

- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[633] de=Hantel lv=hantele value=Hantel
- A2[784] de=Kefir lv=kefīrs value=Kefir
- B1[726] de=Eisberg lv=aisbergs value=Aisberg
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1939] de=Nabel lv=naba value=Naba
- B1[3227] de=Weinbrand lv=konjaks value=Konjak
- B1[3322] de=Energie lv=enerģija value=Energia
- B2[1228] de=Lehrstuhl lv=katedra value=Katedra

### nb+pt (14)

- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[633] de=Hantel lv=hantele value=Hantel
- A2[784] de=Kefir lv=kefīrs value=Kefir
- B1[726] de=Eisberg lv=aisbergs value=Aisberg
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1939] de=Nabel lv=naba value=Naba
- B1[3227] de=Weinbrand lv=konjaks value=Konjak
- B1[3322] de=Energie lv=enerģija value=Energia
- B2[1228] de=Lehrstuhl lv=katedra value=Katedra

### nn+pt (14)

- A1[195] de=Foto lv=fotogrāfija value=Foto
- A2[516] de=Fotografie lv=fotogrāfija value=Foto
- A2[633] de=Hantel lv=hantele value=Hantel
- A2[784] de=Kefir lv=kefīrs value=Kefir
- B1[726] de=Eisberg lv=aisbergs value=Aisberg
- B1[772] de=Erdöl lv=nafta value=Nafta
- B1[1939] de=Nabel lv=naba value=Naba
- B1[3227] de=Weinbrand lv=konjaks value=Konjak
- B1[3322] de=Energie lv=enerģija value=Energia
- B2[1228] de=Lehrstuhl lv=katedra value=Katedra

### hu+pt (12)

- A2[530] de=Frisur lv=frizūra value=Frizura
- A2[715] de=Internet lv=internets value=Internet
- A2[784] de=Kefir lv=kefīrs value=Kefir
- A2[1082] de=Physik lv=fizika value=Fizika
- B1[599] de=Domino lv=domino value=Dominó
- B1[862] de=falls lv=ja value=Ha
- B1[1138] de=Gräte lv=asaka value=Asaka
- B1[1439] de=Kabarett lv=kabarē value=Kabaré
- B1[1738] de=Lawine lv=lavīna value=Lavina
- B1[3210] de=Web lv=internets value=Internet

### et+fi (11)

- A1[408] de=mit lv=ar value=-ga
- A1[476] de=Pizza lv=pica value=pitsa
- A1[634] de=vom lv=no value=-st
- A1[635] de=von lv=no value=-st
- B1[1838] de=Mars lv=marss value=Marss
- B2[316] de=Bundeswehr lv=Vācijas bruņotie spēki value=Saksamaa relvajõud
- B2[669] de=Erdtrabant lv=zemes pavadonis value=Kuu (kaaslane)
- B2[1133] de=HIV lv=HIV (cilvēka imūndeficīta vīruss) value=HIV (inimese immuunpuudulikkuse viirus)
- B2[1134] de=HIV-negativ lv=HIV negatīvs value=HIV-negatiivne
- B2[1135] de=HIV-positiv lv=HIV pozitīvs value=HIV-positiivne

### en+gr (10)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[305] de=CD-Player lv=kompaktdisku atskaņotājs value=CD player
- A2[715] de=Internet lv=internets value=Internet
- A2[1322] de=Skateboard lv=skrituļdēlis value=Skateboard
- A2[1531] de=Visum lv=vīza value=Visa
- B1[1917] de=Mousepad lv=peles paliktnis value=Mouse pad
- B1[2799] de=Strichkode lv=svītrkods value=Barcode
- B1[3210] de=Web lv=internets value=Internet
- B2[417] de=Doppelzentner lv=centners value=Centner
- B2[529] de=Eilbote lv=ziņnesis • kurjers value=Messenger • Courier

### et+is (10)

- A1[17] de=ab lv=no value=-st
- A1[634] de=vom lv=no value=-st
- A1[635] de=von lv=no value=-st
- B1[1838] de=Mars lv=marss value=Marss
- B2[316] de=Bundeswehr lv=Vācijas bruņotie spēki value=Saksamaa relvajõud
- B2[669] de=Erdtrabant lv=zemes pavadonis value=Kuu (kaaslane)
- B2[1133] de=HIV lv=HIV (cilvēka imūndeficīta vīruss) value=HIV (inimese immuunpuudulikkuse viirus)
- B2[1134] de=HIV-negativ lv=HIV negatīvs value=HIV-negatiivne
- B2[1135] de=HIV-positiv lv=HIV pozitīvs value=HIV-positiivne
- C1[250] de=Bundesdeutsche lv=VFR pilsonis vai pilsone value=Saksamaa Liitvabariigi kodanik

### et+nb (10)

- A1[17] de=ab lv=no value=-st
- A1[634] de=vom lv=no value=-st
- A1[635] de=von lv=no value=-st
- B1[1838] de=Mars lv=marss value=Marss
- B2[316] de=Bundeswehr lv=Vācijas bruņotie spēki value=Saksamaa relvajõud
- B2[669] de=Erdtrabant lv=zemes pavadonis value=Kuu (kaaslane)
- B2[1133] de=HIV lv=HIV (cilvēka imūndeficīta vīruss) value=HIV (inimese immuunpuudulikkuse viirus)
- B2[1134] de=HIV-negativ lv=HIV negatīvs value=HIV-negatiivne
- B2[1135] de=HIV-positiv lv=HIV pozitīvs value=HIV-positiivne
- C1[250] de=Bundesdeutsche lv=VFR pilsonis vai pilsone value=Saksamaa Liitvabariigi kodanik

### et+nn (10)

- A1[17] de=ab lv=no value=-st
- A1[634] de=vom lv=no value=-st
- A1[635] de=von lv=no value=-st
- B1[1838] de=Mars lv=marss value=Marss
- B2[316] de=Bundeswehr lv=Vācijas bruņotie spēki value=Saksamaa relvajõud
- B2[669] de=Erdtrabant lv=zemes pavadonis value=Kuu (kaaslane)
- B2[1133] de=HIV lv=HIV (cilvēka imūndeficīta vīruss) value=HIV (inimese immuunpuudulikkuse viirus)
- B2[1134] de=HIV-negativ lv=HIV negatīvs value=HIV-negatiivne
- B2[1135] de=HIV-positiv lv=HIV pozitīvs value=HIV-positiivne
- C1[250] de=Bundesdeutsche lv=VFR pilsonis vai pilsone value=Saksamaa Liitvabariigi kodanik

### es+et (9)

- A1[63] de=Auto lv=automašīna value=auto
- A1[343] de=Kraftwagen lv=automašīna value=auto
- A2[897] de=Logo lv=logotips value=logo
- A2[962] de=Monitor lv=monitors value=monitor
- A2[1068] de=Personal lv=personāls value=personal
- B1[1137] de=Graffiti lv=publiski sienu zīmējumi value=grafiti
- B1[1399] de=Islam lv=islāms value=islam
- B2[458] de=Dumping lv=dempings value=dumping
- B2[784] de=Festspiele lv=festivāls value=festival

### et+sv (9)

- A1[408] de=mit lv=ar value=-ga
- A1[635] de=von lv=no value=-st
- B1[1838] de=Mars lv=marss value=Marss
- B2[316] de=Bundeswehr lv=Vācijas bruņotie spēki value=Saksamaa relvajõud
- B2[669] de=Erdtrabant lv=zemes pavadonis value=Kuu (kaaslane)
- B2[1133] de=HIV lv=HIV (cilvēka imūndeficīta vīruss) value=HIV (inimese immuunpuudulikkuse viirus)
- B2[1134] de=HIV-negativ lv=HIV negatīvs value=HIV-negatiivne
- B2[1135] de=HIV-positiv lv=HIV pozitīvs value=HIV-positiivne
- C1[250] de=Bundesdeutsche lv=VFR pilsonis vai pilsone value=Saksamaa Liitvabariigi kodanik

### gr+ro (9)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[305] de=CD-Player lv=kompaktdisku atskaņotājs value=CD player
- A2[715] de=Internet lv=internets value=Internet
- A2[1322] de=Skateboard lv=skrituļdēlis value=Skateboard
- A2[1531] de=Visum lv=vīza value=Visa
- B1[1917] de=Mousepad lv=peles paliktnis value=Mouse pad
- B1[3210] de=Web lv=internets value=Internet
- B2[417] de=Doppelzentner lv=centners value=Centner
- B2[900] de=Geländelauf lv=kross value=Cross country

### hr+is (9)

- A1[41] de=April lv=aprīlis value=April
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+nb (9)

- A1[41] de=April lv=aprīlis value=April
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+nn (9)

- A1[41] de=April lv=aprīlis value=April
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### is+sr (9)

- A1[41] de=April lv=aprīlis value=April
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### nb+sr (9)

- A1[41] de=April lv=aprīlis value=April
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### nn+sr (9)

- A1[41] de=April lv=aprīlis value=April
- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A1[477] de=Plan lv=plāns value=Plan
- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### lt+sl (8)

- A1[195] de=Foto lv=fotogrāfija value=fotografija
- A1[240] de=Giraffe lv=žirafe value=žirafa
- A1[330] de=Kaffee lv=kafija value=kava
- A1[436] de=nein lv=nē value=ne
- A1[587] de=Tante lv=tante value=teta
- A1[591] de=Taxi lv=taksometrs value=taksi
- A1[616] de=Vase lv=vāze value=vaza
- A1[688] de=Fernsehen lv=televīzija value=televizija

### et+sl (7)

- A1[25] de=Album lv=albums value=album
- A1[103] de=blond lv=blonds value=blond
- A1[185] de=Film lv=filma value=film
- A1[453] de=November lv=novembris value=november
- A1[470] de=Park lv=parks value=park
- A1[546] de=September lv=septembris value=september
- A1[593] de=Telefon lv=telefons value=telefon

### hr+sq (7)

- A1[34] de=Antenne lv=antena value=Antena
- A1[246] de=Gramm lv=grams value=Gram
- A2[192] de=Ballon lv=balons value=Balon
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[1921] de=Mull lv=marle value=Gaza
- B1[2467] de=schlingen lv=vīt value=Twist
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+tr (7)

- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A2[192] de=Ballon lv=balons value=Balon
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[1921] de=Mull lv=marle value=Gaza
- B1[2467] de=schlingen lv=vīt value=Twist
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### sq+sr (7)

- A1[34] de=Antenne lv=antena value=Antena
- A1[246] de=Gramm lv=grams value=Gram
- A2[192] de=Ballon lv=balons value=Balon
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[1921] de=Mull lv=marle value=Gaza
- B1[2467] de=schlingen lv=vīt value=Twist
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### sr+tr (7)

- A1[246] de=Gramm lv=grams value=Gram
- A1[312] de=Kilogramm lv=kilograms value=Kilogram
- A2[192] de=Ballon lv=balons value=Balon
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[1921] de=Mull lv=marle value=Gaza
- B1[2467] de=schlingen lv=vīt value=Twist
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### fr+hr (6)

- A1[119] de=Bus lv=autobuss value=Autobus
- A1[477] de=Plan lv=plāns value=Plan
- A2[188] de=Bahngleis lv=sliedes value=Rails
- A2[364] de=dünn lv=plāns value=Plan
- B1[1726] de=Laser lv=lāzers value=Laser
- B2[1040] de=Grundriss lv=plāns value=Plan

### fr+sr (6)

- A1[119] de=Bus lv=autobuss value=Autobus
- A1[477] de=Plan lv=plāns value=Plan
- A2[188] de=Bahngleis lv=sliedes value=Rails
- A2[364] de=dünn lv=plāns value=Plan
- B1[1726] de=Laser lv=lāzers value=Laser
- B2[1040] de=Grundriss lv=plāns value=Plan

### es+pt (5)

- A1[89] de=besuchen lv=apmeklēt value=visitar
- A1[93] de=bitte lv=lūdzu value=por favor
- A1[285] de=hoch lv=augsts value=alto
- A1[288] de=hübsch lv=glīts value=bonito
- A2[715] de=Internet lv=internets value=Internet

### fi+hr (5)

- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### fi+sr (5)

- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+hu (5)

- A1[592] de=Tee lv=tēja value=Tea
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[1532] de=Vitamin lv=vitamīns value=Vitamin
- B2[329] de=Cholera lv=holera value=Kolera
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+sv (5)

- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hu+sr (5)

- A1[592] de=Tee lv=tēja value=Tea
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- A2[1532] de=Vitamin lv=vitamīns value=Vitamin
- B2[329] de=Cholera lv=holera value=Kolera
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### sr+sv (5)

- A1[597] de=Text lv=teksts value=Tekst
- A2[32] de=Alkohol lv=alkohols value=Alkohol
- B1[1726] de=Laser lv=lāzers value=Laser
- B1[2112] de=Pionier lv=pionieris value=Pioneer
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### bg+en (4)

- A2[30] de=aktuell lv=aktuāls • pašreizējs value=Current • Current
- B1[1852] de=matt lv=blāvs value=Dim
- B1[2467] de=schlingen lv=vīt value=Twist
- B1[3213] de=Wechsel lv=maiņa value=Shift

### bg+uk (4)

- A1[218] de=Fußball lv=futbols value=футбол
- B1[1838] de=Mars lv=marss value=Марс
- B2[1291] de=Marxismus lv=marksisms value=Марксизм
- C1[551] de=Weidenkätzchen lv=pūpols value=Мак

### cs+gr (4)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[715] de=Internet lv=internets value=Internet
- A2[1322] de=Skateboard lv=skrituļdēlis value=Skateboard
- B1[3210] de=Web lv=internets value=Internet

### es+sl (4)

- A1[72] de=Banane lv=banāns value=banana
- A1[378] de=Limonade lv=limonāde value=limonada
- A1[393] de=Mandarine lv=mandarīns value=mandarina
- A1[649] de=Wein lv=vīns value=vino

### fi+gr (4)

- A2[715] de=Internet lv=internets value=Internet
- A2[1418] de=Tal lv=ieleja value=Org
- B1[2157] de=Preiselbeere lv=brūklene value=Pohl
- B1[3210] de=Web lv=internets value=Internet

### gr+hu (4)

- A2[715] de=Internet lv=internets value=Internet
- A2[1531] de=Visum lv=vīza value=Visa
- B1[3210] de=Web lv=internets value=Internet
- B2[417] de=Doppelzentner lv=centners value=Centner

### gr+is (4)

- A2[274] de=Bonbon lv=konfekte value=Comm
- A2[827] de=Konfekt lv=konfekte value=Comm
- A2[1418] de=Tal lv=ieleja value=Org
- B1[2157] de=Preiselbeere lv=brūklene value=Pohl

### gr+nb (4)

- A2[274] de=Bonbon lv=konfekte value=Comm
- A2[827] de=Konfekt lv=konfekte value=Comm
- A2[1418] de=Tal lv=ieleja value=Org
- B1[2157] de=Preiselbeere lv=brūklene value=Pohl

### gr+nn (4)

- A2[274] de=Bonbon lv=konfekte value=Comm
- A2[827] de=Konfekt lv=konfekte value=Comm
- A2[1418] de=Tal lv=ieleja value=Org
- B1[2157] de=Preiselbeere lv=brūklene value=Pohl

### gr+sv (4)

- A2[715] de=Internet lv=internets value=Internet
- A2[1418] de=Tal lv=ieleja value=Org
- B1[2157] de=Preiselbeere lv=brūklene value=Pohl
- B1[3210] de=Web lv=internets value=Internet

### ru+uk (4)

- A1[218] de=Fußball lv=futbols value=футбол
- B1[1838] de=Mars lv=marss value=Марс
- B2[1291] de=Marxismus lv=marksisms value=Марксизм
- C1[551] de=Weidenkätzchen lv=pūpols value=Мак

### cs+et (3)

- C1[565] de=Hektar lv=hektārs value=hektar
- C1[570] de=Panter lv=pantera value=panter
- C1[571] de=Panther lv=pantera value=panter

### da+gr (3)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[1322] de=Skateboard lv=skrituļdēlis value=Skateboard
- B2[417] de=Doppelzentner lv=centners value=Centner

### en+es (3)

- A1[436] de=nein lv=nē value=No
- A1[447] de=nicht lv=ne value=No
- A2[715] de=Internet lv=internets value=Internet

### en+mk (3)

- B1[1852] de=matt lv=blāvs value=Dim
- B1[2467] de=schlingen lv=vīt value=Twist
- B1[3213] de=Wechsel lv=maiņa value=Shift

### gr+it (3)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[715] de=Internet lv=internets value=Internet
- B1[3210] de=Web lv=internets value=Internet

### gr+pl (3)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[715] de=Internet lv=internets value=Internet
- B1[3210] de=Web lv=internets value=Internet

### gr+pt (3)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[715] de=Internet lv=internets value=Internet
- B1[3210] de=Web lv=internets value=Internet

### gr+sq (3)

- A2[715] de=Internet lv=internets value=Internet
- A2[1531] de=Visum lv=vīza value=Visa
- B1[3210] de=Web lv=internets value=Internet

### hr+nl (3)

- A1[41] de=April lv=aprīlis value=April
- A2[203] de=Batterie lv=baterija value=Baterija
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+uk (3)

- B1[1838] de=Mars lv=marss value=Марс
- B2[1291] de=Marxismus lv=marksisms value=Марксизм
- C1[551] de=Weidenkätzchen lv=pūpols value=Мак

### mk+uk (3)

- B1[1838] de=Mars lv=marss value=Марс
- B2[1291] de=Marxismus lv=marksisms value=Марксизм
- C1[551] de=Weidenkätzchen lv=pūpols value=Мак

### nl+sr (3)

- A1[41] de=April lv=aprīlis value=April
- A2[203] de=Batterie lv=baterija value=Baterija
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### sr+uk (3)

- B1[1838] de=Mars lv=marss value=Марс
- B2[1291] de=Marxismus lv=marksisms value=Марксизм
- C1[551] de=Weidenkätzchen lv=pūpols value=Мак

### bg+ro (2)

- B1[1852] de=matt lv=blāvs value=Dim
- B1[2467] de=schlingen lv=vīt value=Twist

### es+it (2)

- A1[3] de=Haus lv=māja value=casa
- A2[715] de=Internet lv=internets value=Internet

### es+pl (2)

- A2[715] de=Internet lv=internets value=Internet
- A2[975] de=na gut lv=nu labi value=OK

### es+ro (2)

- A2[715] de=Internet lv=internets value=Internet
- B1[1838] de=Mars lv=marss value=Marte

### es+sk (2)

- A2[715] de=Internet lv=internets value=Internet
- A2[975] de=na gut lv=nu labi value=OK

### es+sq (2)

- A2[715] de=Internet lv=internets value=Internet
- A2[975] de=na gut lv=nu labi value=OK

### fr+gr (2)

- A1[159] de=E-Mail lv=e-pasts value=E-mail
- A2[1531] de=Visum lv=vīza value=Visa

### gr+sk (2)

- A2[715] de=Internet lv=internets value=Internet
- B1[3210] de=Web lv=internets value=Internet

### hr+it (2)

- A1[119] de=Bus lv=autobuss value=Autobus
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+lb (2)

- A1[246] de=Gramm lv=grams value=Gram
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### hr+sl (2)

- A1[1] de=Brot lv=maize value=kruh
- A1[267] de=Hand lv=plauksta value=dlan

### it+sr (2)

- A1[119] de=Bus lv=autobuss value=Autobus
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### lb+sr (2)

- A1[246] de=Gramm lv=grams value=Gram
- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### mk+ro (2)

- B1[1852] de=matt lv=blāvs value=Dim
- B1[2467] de=schlingen lv=vīt value=Twist

### sk+sl (2)

- A1[382] de=Liter lv=litrs value=liter
- A1[671] de=Zug lv=vilciens value=vlak

### bg+da (1)

- B1[1852] de=matt lv=blāvs value=Dim

### bg+pl (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### bg+sk (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### bg+sq (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### bg+tr (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### bs+gr (1)

- B1[3210] de=Web lv=internets value=Internet

### cs+es (1)

- A2[715] de=Internet lv=internets value=Internet

### cs+sl (1)

- A1[408] de=mit lv=ar value=s

### da+mk (1)

- B1[1852] de=matt lv=blāvs value=Dim

### es+fi (1)

- A2[715] de=Internet lv=internets value=Internet

### es+gr (1)

- A2[715] de=Internet lv=internets value=Internet

### es+hu (1)

- A2[715] de=Internet lv=internets value=Internet

### es+sv (1)

- A2[715] de=Internet lv=internets value=Internet

### es+tr (1)

- A2[975] de=na gut lv=nu labi value=OK

### et+lt (1)

- A2[1119] de=Rad lv=ritenis value=ratas

### gr+lb (1)

- A1[159] de=E-Mail lv=e-pasts value=E-mail

### gr+nl (1)

- A1[159] de=E-Mail lv=e-pasts value=E-mail

### gr+tr (1)

- A2[1531] de=Visum lv=vīza value=Visa

### hr+pt (1)

- B2[1473] de=Propaganda lv=propaganda value=Propaganda

### mk+pl (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### mk+sk (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### mk+sq (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### mk+tr (1)

- B1[2467] de=schlingen lv=vīt value=Twist

### pt+sr (1)

- B2[1473] de=Propaganda lv=propaganda value=Propaganda

## STAGE RESULT

STAGE RESULT: NEEDS OWNER REVIEW

