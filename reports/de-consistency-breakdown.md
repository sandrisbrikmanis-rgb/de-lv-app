# DE consistency breakdown

Šis sadalījums klasificē esošā `reports/de-consistency-audit.json` rindas. Tas neizvēlas pareizo variantu un nepierāda DE pareizību.

Avots: ORIGIN_MAIN_SHA `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`, MASTER 1.18, audita datums 2026-10-03, verdikts `PARTIAL`.

## a) Valoda × datasets

Skaiti ir visu koku (`data`, `www`, `mirror`) summa, tāpēc TEXT, UNICODE_ONLY, MISSING un EXTRA sakrīt ar audita metrikām. NOT_VERIFIABLE ir tikai `data` + `www`, kā audita metrikā. Tukšas kombinācijas ir 0.

### a1

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 32 | 0 | 0 |
| pl | 0 | 0 | 0 | 32 | 0 | 0 |
| uk | 0 | 0 | 0 | 32 | 0 | 0 |
| lt | 0 | 0 | 0 | 32 | 0 | 0 |
| et | 0 | 0 | 0 | 46 | 0 | 0 |
| en | 2 | 0 | 0 | 8 | 0 | 0 |
| ro | 0 | 0 | 0 | 32 | 0 | 0 |
| bg | 0 | 0 | 0 | 32 | 0 | 0 |
| gr | 0 | 0 | 0 | 46 | 0 | 0 |
| tr | 0 | 0 | 0 | 32 | 0 | 0 |
| sq | 0 | 0 | 0 | 32 | 0 | 0 |
| mk | 0 | 0 | 0 | 32 | 0 | 0 |
| sl | 0 | 0 | 0 | 32 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 2 | 0 | 0 | 60 | 0 | 0 |
| hr | 0 | 0 | 0 | 32 | 0 | 0 |
| sk | 0 | 0 | 0 | 32 | 0 | 0 |
| cs | 4 | 0 | 0 | 16 | 0 | 0 |
| fi | 0 | 0 | 0 | 36 | 0 | 0 |
| sv | 0 | 0 | 0 | 36 | 0 | 0 |
| nb | 0 | 0 | 0 | 36 | 0 | 0 |
| nn | 0 | 0 | 0 | 44 | 0 | 0 |
| da | 6 | 0 | 0 | 26 | 0 | 0 |
| nl | 0 | 0 | 0 | 32 | 0 | 0 |
| lb | 0 | 0 | 0 | 32 | 0 | 0 |
| fr | 0 | 0 | 0 | 32 | 0 | 0 |
| it | 0 | 0 | 0 | 32 | 0 | 0 |
| es | 0 | 0 | 0 | 32 | 0 | 0 |
| pt | 0 | 0 | 0 | 32 | 0 | 0 |
| hu | 0 | 0 | 0 | 32 | 0 | 0 |
| is | 0 | 0 | 0 | 36 | 0 | 0 |

### a2

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

### b1

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

### b2

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 2 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 2 | 0 | 0 |
| sv | 0 | 0 | 0 | 2 | 0 | 0 |
| nb | 0 | 0 | 0 | 2 | 0 | 0 |
| nn | 0 | 0 | 0 | 2 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 2 | 0 | 0 |

### c1

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 32 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 32 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 2 | 0 | 0 |
| sv | 0 | 0 | 0 | 2 | 0 | 0 |
| nb | 0 | 0 | 0 | 2 | 0 | 0 |
| nn | 0 | 0 | 0 | 2 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 2 | 0 | 0 |

### c2

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 6 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 6 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

### sentences

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

### verbs

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

### courseLessons

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 124 | 0 | 0 | 0 | 356 | 138314 |
| pl | 2 | 10 | 0 | 0 | 356 | 138314 |
| uk | 118 | 38 | 0 | 0 | 356 | 138314 |
| lt | 0 | 0 | 0 | 0 | 356 | 138314 |
| et | 42 | 0 | 0 | 0 | 356 | 138314 |
| en | 14 | 228 | 0 | 0 | 356 | 138314 |
| ro | 94 | 28 | 0 | 0 | 356 | 138314 |
| bg | 118 | 8 | 0 | 0 | 356 | 138314 |
| gr | 242 | 0 | 0 | 0 | 356 | 138314 |
| tr | 180 | 6 | 0 | 0 | 356 | 138314 |
| sq | 184 | 6 | 0 | 0 | 356 | 138314 |
| mk | 214 | 0 | 0 | 0 | 356 | 138314 |
| sl | 182 | 2 | 0 | 0 | 356 | 138314 |
| bs | 4 | 50 | 0 | 0 | 356 | 138314 |
| sr | 218 | 0 | 0 | 0 | 356 | 138314 |
| hr | 218 | 0 | 0 | 0 | 356 | 138314 |
| sk | 180 | 6 | 0 | 0 | 356 | 138314 |
| cs | 228 | 58 | 0 | 2 | 356 | 138314 |
| fi | 208 | 0 | 0 | 0 | 356 | 138314 |
| sv | 208 | 0 | 0 | 0 | 356 | 138314 |
| nb | 208 | 0 | 0 | 0 | 356 | 138314 |
| nn | 208 | 0 | 0 | 0 | 356 | 138314 |
| da | 558 | 92 | 0 | 0 | 356 | 138314 |
| nl | 180 | 2 | 0 | 0 | 356 | 138314 |
| lb | 186 | 2 | 0 | 0 | 356 | 138314 |
| fr | 258 | 50 | 204 | 0 | 356 | 138314 |
| it | 184 | 2 | 0 | 0 | 356 | 138314 |
| es | 204 | 76 | 88 | 0 | 356 | 138314 |
| pt | 244 | 40 | 0 | 0 | 356 | 138314 |
| hu | 198 | 56 | 0 | 0 | 356 | 138314 |
| is | 208 | 0 | 0 | 0 | 356 | 138314 |

### courseTrainingCards

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 3 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

### nounArticles

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 3 | 0 | 0 | 0 |
| lt | 0 | 0 | 3 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

### dialogueIdMap

| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 3 | 0 | 0 | 0 |
| lt | 0 | 0 | 3 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 |

## b) TEXT sadalījums

Prioritāte ir viena, bez pārklāšanās: FOREIGN_SCRIPT, tad CASE_ONLY, tad PUNCT_OR_SPACE_ONLY, tad TRANSLATED_GERMAN, pārējais ir OTHER.

- FOREIGN_SCRIPT: audita lauks `foreignScript` nav tukšs (mērķa vērtībā ir alfabēts, kura nav LV vērtībā).
- CASE_ONLY: virknēm ir vienāds garums, atšķiras tikai pirmā koda vienība, un tā atšķiras tikai ar reģistru.
- PUNCT_OR_SPACE_ONLY: pēc tukšumu, `\p{P}` un `\p{S}` izņemšanas atlikušās rakstzīmes sakrīt, ieskaitot reģistru.
- TRANSLATED_GERMAN: pēc NFKC, HTML tagu un apaļo iekavu grupu noņemšanas, reģistra salikuma un malu tukšumu savilkšanas virknes atšķiras, pāris nav identifikators `a1-liter` formā, un vai nu LANG satur burtu ārpus `A–Z a–z äöüß`, vai arī vārdu (vismaz 3 burti) Jaccard ir mazāks par 0.25 un LANG nesatur vācu funkcijas vārdu no fiksētā saraksta (`der/die/das/ein/...`, `ich/er/ist/und/...`).
- OTHER: visas atlikušās TEXT rindas.

| kategorija | skaits |
| --- | ---: |
| CASE_ONLY | 2548 |
| PUNCT_OR_SPACE_ONLY | 0 |
| TRANSLATED_GERMAN | 524 |
| FOREIGN_SCRIPT | 466 |
| OTHER | 1890 |
| SUMMA | 5428 |

### CASE_ONLY (2548)

- bg `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[11]` koks=`data` LV=`"ihn "` LANG=`"Ihn "`
- cs `a1` `a1-kennen-study` `id` koks=`data` LV=`"a1-kennen"` LANG=`"A1-kennen"`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[30]` koks=`data` LV=`"wir arbeiten"` LANG=`"Wir arbeiten"`
- fi `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "`
- gr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "`
- hr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "`
- hu `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[1]` koks=`data` LV=`"die Tür "` LANG=`"Die Tür "`
- is `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "`
- it `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "`
- lb `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "`

### PUNCT_OR_SPACE_ONLY (0)

Piemēru nav.

### TRANSLATED_GERMAN (524)

- bg `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[4]` koks=`data` LV=`"rechnen (rehnen) "` LANG=`"Rehnen (renen)"`
- bs `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[11]` koks=`data` LV=`"bald (balt) "` LANG=`"ćelav (bijel)"`
- cs `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[35]` koks=`data` LV=`"Villa (villa) "` LANG=`"Vila (vila)"`
- da `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"singen (zingen) "` LANG=`"Synge (zingen)"`
- es `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[27]` koks=`data` LV=`" -t"` LANG=`" -En letón:<br><br>"`
- et `courseLessons` `lesson11` `kurssLesson11.sections[0].items[23]` koks=`data` LV=`"Anna schreibt und fragt: „Franz, schreibst du auch?“"` LANG=`"Anna kirjutab ja küsib: „Franz, kas sina ka kirjutad?“"`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[16]` koks=`data` LV=`"der August "` LANG=`"Convient à août"`
- hr `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[25]` koks=`data` LV=`"Ihnen "` LANG=`"Inen"`
- hu `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[16]` koks=`data` LV=`"der August "` LANG=`"Augusztus"`
- it `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[21]` koks=`data` LV=`" die Wohnung, die Rechnung"` LANG=`" l'appartement, la facture"`

### FOREIGN_SCRIPT (466)

- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[39]` koks=`data` LV=`"die Nation "` LANG=`"Умри нация"`
- gr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[44]` koks=`data` LV=`" das Instrument"` LANG=`" das Όργανο"`
- hr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[14]` koks=`data` LV=`"der Vater "` LANG=`"Дер Ватер"`
- mk `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[14]` koks=`data` LV=`"der Vater "` LANG=`"Дер Ватер"`
- ru `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[13]` koks=`data` LV=`"der Mann "` LANG=`"Дер Манн"`
- sr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[14]` koks=`data` LV=`"der Vater "` LANG=`"Дер Ватер"`
- uk `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` koks=`data` LV=`"die Gabel "` LANG=`"die Габель"`
- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` koks=`data` LV=`"die Gabel "` LANG=`"Ди Габел"`
- gr `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` koks=`data` LV=`"noch (noh) "` LANG=`"Noch (καλά) "`
- hr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[39]` koks=`data` LV=`"die Nation "` LANG=`"Умри нация"`

### OTHER (1890)

- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[13]` koks=`data` LV=`"der Mann "` LANG=`"Der Mann"`
- cs `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[1]` koks=`data` LV=`"die Tür "` LANG=`"Die Tür"`
- da `a1` `a1-besuchen` `study.examples[0].de` koks=`data` LV=`"Ich besuche das Museum."` LANG=`"Ich besuche meine Großeltern."`
- en `a1` `a1-liter` `study.id` koks=`data` LV=`"a1-liter"` LANG=`"a1-litre"`
- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[24]` koks=`data` LV=`" die Mannschaft"` LANG=`" die Polizei, die Bäckerei"`
- et `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- fi `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch"`
- gr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` koks=`data` LV=`"das Auto "` LANG=`"Das Car "`
- hr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[1]` koks=`data` LV=`"die Tür "` LANG=`"Die Tür-vrata"`
- hu `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch"`
- is `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- it `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"der Sommer "` LANG=`"Der zomer "`
- lb `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"der Sommer "` LANG=`"Der zomer "`
- mk `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[13]` koks=`data` LV=`"der Mann "` LANG=`"Der Mann"`
- nb `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- nl `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"der Sommer "` LANG=`"Der zomer "`
- nn `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- pl `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"To jest <span class=\"case-red\">dich</span>. "`
- pt `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch"`

## c) MISSING un EXTRA

MISSING 307. EXTRA 1098. Skaiti iekļauj `data`, `www` un `mirror`.

### MISSING pa valodām un datasetiem

| valoda | a1 | a2 | b1 | b2 | c1 | c2 | sentences | verbs | courseLessons | courseTrainingCards | nounArticles | dialogueIdMap |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 3 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 3 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 204 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 88 | 0 | 0 | 0 |

### MISSING piemēri

- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[63]` koks=`data` LV=`"der Mond "` LANG=`null`
- et `courseTrainingCards` `data/et/courseTrainingCards.js` `file` koks=`data` LV=`"ui.js lesson1-6TrainingCards"` LANG=`null`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[64]` koks=`data` LV=`"das Mädchen "` LANG=`null`
- lt `dialogueIdMap` `data/lt/dialogueIdMap.js` `file` koks=`data` LV=`"data/dialogueIdMap.js"` LANG=`null`
- uk `dialogueIdMap` `data/uk/dialogueIdMap.js` `file` koks=`data` LV=`"data/dialogueIdMap.js"` LANG=`null`
- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[64]` koks=`data` LV=`"das Mädchen "` LANG=`null`
- et `courseTrainingCards` `www/data/et/courseTrainingCards.js` `file` koks=`www` LV=`"ui.js lesson1-6TrainingCards"` LANG=`null`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` koks=`data` LV=`"das Auto "` LANG=`null`
- lt `dialogueIdMap` `www/data/lt/dialogueIdMap.js` `file` koks=`www` LV=`"www/data/dialogueIdMap.js"` LANG=`null`
- uk `dialogueIdMap` `www/data/uk/dialogueIdMap.js` `file` koks=`www` LV=`"www/data/dialogueIdMap.js"` LANG=`null`

### EXTRA pa valodām un datasetiem

| valoda | a1 | a2 | b1 | b2 | c1 | c2 | sentences | verbs | courseLessons | courseTrainingCards | nounArticles | dialogueIdMap |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 46 | 0 | 0 | 2 | 32 | 6 | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 46 | 0 | 0 | 0 | 32 | 6 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 60 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| fi | 36 | 0 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 36 | 0 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 36 | 0 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 44 | 0 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 26 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 36 | 0 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### EXTRA piemēri

- bg `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- cs `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- da `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- en `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- es `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- et `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- fi `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- fr `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- gr `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`
- hr `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"`

## d) LV anomālijas

Kopā 618. ARTICLE_OUTSIDE_SET un PLURAL_WITHOUT_DIE šajā JSON ir 0, tāpēc tās neietilpst 618.

| kategorija | skaits |
| --- | ---: |
| DUPLICATE_ACROSS_LEVELS | 88 |
| DUPLICATE_IN_LEVEL | 6 |
| EMPTY_ARTICLE | 6 |
| EMPTY_PLURAL | 503 |
| SAME_DE_DIFFERENT_ARTICLE | 15 |
| SUMMA | 618 |

### DUPLICATE_ACROSS_LEVELS

- `DUPLICATE_ACROSS_LEVELS` līmenis=`B1,C1` indekss=`` de=`"Aal"` detail=`"B1,C1"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A2,B2` indekss=`` de=`"ändern"` detail=`"A2,B2"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A1,A2` indekss=`` de=`"Arm"` detail=`"A1,A2"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A1,A2` indekss=`` de=`"auch"` detail=`"A1,A2"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A2,B1` indekss=`` de=`"Band"` detail=`"A2,B1"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A1,A2` indekss=`` de=`"Besucher"` detail=`"A1,A2"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`B1,B2` indekss=`` de=`"bieten"` detail=`"B1,B2"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A1,A2` indekss=`` de=`"Bitte"` detail=`"A1,A2"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A1,A2` indekss=`` de=`"bringen"` detail=`"A1,A2"`
- `DUPLICATE_ACROSS_LEVELS` līmenis=`A1,B1` indekss=`` de=`"da"` detail=`"A1,B1"`

### DUPLICATE_IN_LEVEL

- `DUPLICATE_IN_LEVEL` līmenis=`B1` indekss=`` de=`"Erbe"` detail=`"count=2"`
- `DUPLICATE_IN_LEVEL` līmenis=`B1` indekss=`` de=`"Gehalt"` detail=`"count=2"`
- `DUPLICATE_IN_LEVEL` līmenis=`B1` indekss=`` de=`"Kunde"` detail=`"count=2"`
- `DUPLICATE_IN_LEVEL` līmenis=`B1` indekss=`` de=`"Steuer"` detail=`"count=2"`
- `DUPLICATE_IN_LEVEL` līmenis=`B1` indekss=`` de=`"Tau"` detail=`"count=2"`
- `DUPLICATE_IN_LEVEL` līmenis=`B1` indekss=`` de=`"Verwandte"` detail=`"count=2"`

### EMPTY_ARTICLE

- `EMPTY_ARTICLE` līmenis=`B2` indekss=`1134` de=`"HIV-negativ"` detail=`"de_article tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_ARTICLE` līmenis=`B2` indekss=`1135` de=`"HIV-positiv"` detail=`"de_article tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_ARTICLE` līmenis=`A1` indekss=`467` de=`"Ostern"` detail=`"de_article tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_ARTICLE` līmenis=`A1` indekss=`488` de=`"Rad fahren"` detail=`"de_article tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_ARTICLE` līmenis=`A1` indekss=`550` de=`"Sie"` detail=`"de_article tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_ARTICLE` līmenis=`A1` indekss=`648` de=`"Weihnachten"` detail=`"de_article tukšs lietvārdam līdzīgam ierakstam"`

### EMPTY_PLURAL

- `EMPTY_PLURAL` līmenis=`B2` indekss=`39` de=`"Abenteuerlust"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`B2` indekss=`78` de=`"Abzweigung"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`A2` indekss=`22` de=`"Achtung"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`B1` indekss=`90` de=`"Ackerbau"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`A2` indekss=`26` de=`"Aerobic"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`A2` indekss=`32` de=`"Alkohol"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`B2` indekss=`12` de=`"Alkoholismus"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`A1` indekss=`11` de=`"Alter"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`A2` indekss=`34` de=`"Ameisen"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`
- `EMPTY_PLURAL` līmenis=`B2` indekss=`15` de=`"Anbau"` detail=`"de_plural tukšs lietvārdam līdzīgam ierakstam"`

### SAME_DE_DIFFERENT_ARTICLE

- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`A2,B1` indekss=`` de=`"Band"` detail=`"das | der"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`B1` indekss=`` de=`"Erbe"` detail=`"der | das"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`A2,B2` indekss=`` de=`"Flur"` detail=`"der | die"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`B1,B2` indekss=`` de=`"Fremde"` detail=`"der | die"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`B1,B2` indekss=`` de=`"Gefallen"` detail=`"der | das"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`B1` indekss=`` de=`"Gehalt"` detail=`"das | der"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`B1` indekss=`` de=`"Kunde"` detail=`"der | die"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`A2,B2` indekss=`` de=`"Moment"` detail=`"der | das"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`A2,B1` indekss=`` de=`"Schild"` detail=`"das | der"`
- `SAME_DE_DIFFERENT_ARTICLE` līmenis=`A2,B1` indekss=`` de=`"See"` detail=`"der | die"`

## e) Trūkstošo failu ielāde

`languages/datasets.js` `DATASET_DEFINITIONS` iekļauj `nounArticles` (`./data/nounArticles.js`) un `dialogueIdMap` (`./data/dialogueIdMap.js`). `courseTrainingCards` šajā reģistrā nav.

`languages/data-loader.js` `resolveDatasetPath` vispirms pārbauda manifesta primāro ceļu. Ja tā nav vai `HEAD` neatgriež failu, tas ņem `fallbackDatasets[dataset]`, vai arī `AppDatasetRegistry.getLvPath(dataset)`. `lt` manifestā `nounArticles` un `dialogueIdMap` ir tikai `fallbackDatasets` ar `./data/nounArticles.js` un `./data/dialogueIdMap.js`. `uk` manifestā primārie ceļi ir `./data/uk/nounArticles.js` un `./data/uk/dialogueIdMap.js`, bet šo failu nav; `fallbackDatasets` norāda uz tiem pašiem LV failiem. Abām valodām loaderis aizstāj trūkstošo datasetu ar LV failu.

`et` `courseTrainingCards.js` nav ne `data/et/`, ne `www/data/et/`. `loadNativeLanguageData` ielādē `./data/{valoda}/courseTrainingCards.js` tikai tad, ja fails eksistē un valoda ir fiksētajā sarakstā pie `courseLessons` ielādes. `et` šajā sarakstā nav, un atsevišķa LV `data/courseTrainingCards.js` fallback ceļa nav. `ui.js` `getCourseTranslateCards` et valodai ņem `lessonNTrainingCardsEt`, ja globals eksistē; ja ne, ņem `ui.js` iekšējos `lesson1TrainingCards` … `lesson6TrainingCards`. Tātad et treniņa kartītes lietotnē aizstāj LV kartītes no `ui.js`, nevis data-loader LV datu fails.

## f) lesson7 training cards

`ui.js` satur `const lesson1TrainingCards` līdz `const lesson6TrainingCards`. `lesson7TrainingCards` šajā failā nav, tāpēc audita etalonā lesson7 klāja nav un tā netika salīdzināta. `getCourseTranslateCards` arī uzskaita tikai lesson1–lesson6. `lesson7ExerciseCards*` ir cits globals vingrinājumu kartītēm, un training-card salīdzinājums to neizmanto.

## g) NOT_VERIFIABLE un coverage

| valoda | lauki | rakstzīmes |
| --- | ---: | ---: |
| ru | 356 | 138314 |
| pl | 356 | 138314 |
| uk | 356 | 138314 |
| lt | 356 | 138314 |
| et | 356 | 138314 |
| en | 356 | 138314 |
| ro | 356 | 138314 |
| bg | 356 | 138314 |
| gr | 356 | 138314 |
| tr | 356 | 138314 |
| sq | 356 | 138314 |
| mk | 356 | 138314 |
| sl | 356 | 138314 |
| bs | 356 | 138314 |
| sr | 356 | 138314 |
| hr | 356 | 138314 |
| sk | 356 | 138314 |
| cs | 356 | 138314 |
| fi | 356 | 138314 |
| sv | 356 | 138314 |
| nb | 356 | 138314 |
| nn | 356 | 138314 |
| da | 356 | 138314 |
| nl | 356 | 138314 |
| lb | 356 | 138314 |
| fr | 356 | 138314 |
| it | 356 | 138314 |
| es | 356 | 138314 |
| pt | 356 | 138314 |
| hu | 356 | 138314 |
| is | 356 | 138314 |
| SUMMA | 11036 | 4287734 |

| datasets | lauki | rakstzīmes |
| --- | ---: | ---: |
| a1 | 0 | 0 |
| a2 | 0 | 0 |
| b1 | 0 | 0 |
| b2 | 0 | 0 |
| c1 | 0 | 0 |
| c2 | 0 | 0 |
| sentences | 0 | 0 |
| verbs | 0 | 0 |
| courseLessons | 11036 | 4287734 |
| courseTrainingCards | 0 | 0 |
| nounArticles | 0 | 0 |
| dialogueIdMap | 0 | 0 |

COVERAGE_FIELDS = CHECKED_FIELDS / (CHECKED_FIELDS + NOT_VERIFIABLE) = 2386054 / (2386054 + 11036) = 99.5396.

COVERAGE_CHARS no šī JSON nav aprēķināms: ir `NOT_VERIFIABLE_CHARS`, bet nav pārbaudīto DE lauku rakstzīmju summas.

## h) legacyHtml DE izvilkšana

Katram `COURSE_LESSON_HTML` atslēgas HTML tiek ņemts katras `<div class="kurss-example">` iekšējais teksts un katrs `<strong>` iekš `<div class="lesson1-conjugation">`, salīdzinot ar LV pēc sākotnējā indeksa. Ja LV virknē ir `–` vai `—`, vai defise ar tukšumu abās pusēs, DE vērtība ir precīzs griezums pirms šī atdalītāja. Ja tāda atdalītāja nav, bet ir `→` un LV virknē nav latviešu diakritikas `āčēģīķļņšūž` (arī lielajiem burtiem), DE vērtība ir precīzs griezums aiz `→`. Ja nav atdalītāja, diakritikas un sveša alfabēta, visa virkne ir DE vērtība. Ja izvilktajā LV DE pusē tomēr ir latviešu diakritika vai svešs alfabēts, lauks ir NOT_VERIFIABLE. Skaidrojums ar latviešu diakritiku un bez `–`/`—`/`→` nav DE lauks. HTML ārpus šo divu veidu iekšējiem tekstiem paliek NOT_VERIFIABLE; tā rakstzīmju skaits ir HTML garums mīnus piemēru iekšienes un `<strong>` iekšienes garumi. Salīdzinājums ir exact-match, bez normalizācijas.

STAGE RESULT: PARTIAL
