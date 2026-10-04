# removed-elements

Pilnais noņemto Study elementu saraksts sadalīts daļās, jo viens JSON pārsniedz 500 KB.
Daļas: 2. Kopā elementi: 1358.
Katra daļa satur baseCommit, part, parts, removedTotal, removedInPart un records.
Katrs records: element_id, classification, language, tree, level, card_id, array_path, index, element, file, start, end, source.
Atjaunošana: node scripts/restore-extra-study-elements.js (saliek visas part-*.json un salīdzina SHA-256 ar restore-proof.json).
