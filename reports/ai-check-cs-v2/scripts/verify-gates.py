#!/usr/bin/env python3
"""Check v2 batch gates G2-G5, G8 and G10 against generated files."""

from __future__ import annotations

import csv
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from build_batches import (
    LEVELS,
    de_key,
    load_faces,
    load_pairs,
    nfc_cf,
    parse_meanings,
    pick_example,
    show_de,
)

REPO = Path(__file__).resolve().parents[3]
MARKERS = ("NEG_NEAR", "NEG_EASY", "KNOWN_HARD", "control-key", "donor_id", "donor_level", "POSITIVE", "NEGATIVE")


def parse_batch(path):
    rows = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.startswith("| cs-"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if len(cells) != 6:
            raise SystemExit(f"{path.name} cells {len(cells)}")
        rows.append(
            {
                "id": cells[0],
                "de_show": cells[1],
                "cs": cells[2],
                "meanings": cells[3],
                "de_example": cells[4],
                "lv_example": cells[5],
            }
        )
    return rows


def split_show(text):
    parts = text.split(" ", 1)
    if len(parts) == 2 and parts[0].casefold() in {"der", "die", "das"}:
        return parts[1], parts[0]
    return text, ""


def load_csv(path):
    with path.open(encoding="utf-8", newline="") as handle:
        return list(csv.DictReader(handle))


def main():
    out = Path(sys.argv[1] if len(sys.argv) > 1 else REPO / "reports" / "ai-check-cs-v2")
    violations = []

    def fail(message):
        violations.append(message)

    pairs = {pair["id"]: pair for pair in load_pairs()}
    controls = {row["id"]: row for row in load_csv(out / "keys" / "control-key.csv")}
    known = {ident for ident, row in controls.items() if row["known_hard"] == "yes"}
    if known != {"cs-000061", "cs-000064", "cs-000126", "cs-000144"}:
        fail(f"known hard ids {sorted(known)}")
    lv_faces = load_faces(REPO / "data")
    cs_faces = load_faces(REPO / "data" / "cs")
    batch_names = sorted(path.name for path in (out / "batches").glob("batch-*-A.md"))
    numbers = [int(name.split("-")[1]) for name in batch_names]
    if numbers != list(range(1, len(numbers) + 1)):
        fail(f"batch numbers {numbers[:5]}..{numbers[-3:]}")
    catalog_seen = []
    de_dup = 0
    overlap = 0
    percent_fail = 0
    perm_fail = 0
    reverse_fail = 0
    example_fail = 0
    oversize = 0
    for number in numbers:
        versions = {}
        for version in ("A", "B", "C"):
            path = out / "batches" / f"batch-{number:03d}-{version}.md"
            text = path.read_text(encoding="utf-8")
            if path.stat().st_size >= 500 * 1024:
                oversize += 1
            for marker in MARKERS:
                if marker in text:
                    fail(f"marker {marker} in {path.name}")
            versions[version] = parse_batch(path)
            key_path = out / "keys" / f"permutation-{number:03d}-{version}.csv"
            if key_path.stat().st_size >= 500 * 1024:
                oversize += 1
        ids = [row["id"] for row in versions["A"]]
        if [row["id"] for row in versions["B"]] != ids or [row["id"] for row in versions["C"]] != ids:
            fail(f"batch {number} version ids differ")
        if len(ids) != 100:
            fail(f"batch {number} rows {len(ids)}")
        if len(ids) != len(set(ids)):
            fail(f"batch {number} duplicate ids")
        de_seen = {}
        for row in versions["A"]:
            de, article = split_show(row["de_show"])
            key = de_key(de, article)
            if key in de_seen:
                de_dup += 1
            de_seen[key] = row["id"]
            if row["id"] in pairs or (row["id"] in controls and controls[row["id"]]["known_hard"] == "yes"):
                catalog_seen.append(row["id"] if row["id"] in pairs else controls[row["id"]]["base_id"])
        real_rows = []
        control_rows = []
        for row in versions["A"]:
            if row["id"] in controls and not (row["id"] in pairs and controls[row["id"]]["known_hard"] != "yes"):
                if row["id"] in pairs and controls[row["id"]]["known_hard"] == "yes":
                    real_rows.append(row)
                    control_rows.append(row)
                elif row["id"] in controls:
                    control_rows.append(row)
                else:
                    real_rows.append(row)
            elif row["id"] in pairs:
                real_rows.append(row)
            else:
                fail(f"orphan {row['id']}")
        for control in control_rows:
            de, article = split_show(control["de_show"])
            key = de_key(de, article)
            cs = nfc_cf(control["cs"])
            for other in real_rows:
                if other["id"] == control["id"]:
                    continue
                other_de, other_article = split_show(other["de_show"])
                if key == de_key(other_de, other_article) or cs == nfc_cf(other["cs"]):
                    overlap += 1
        counts = {"POS": 0, "NEG_NEAR": 0, "NEG_EASY": 0}
        for row in versions["A"]:
            if row["id"] in controls:
                counts[controls[row["id"]]["control_type"]] += 1
        total = len(ids)
        neg = counts["NEG_NEAR"] + counts["NEG_EASY"]
        if counts["NEG_NEAR"] / total < 0.04 or counts["POS"] / total < 0.04:
            percent_fail += 1
            fail(f"batch {number} percents {counts}")
        if neg / total < 0.06 or counts["NEG_NEAR"] / neg < 0.70:
            percent_fail += 1
            fail(f"batch {number} negative mix {counts}")
        orders = {}
        for version in ("A", "B", "C"):
            perm_rows = load_csv(out / "keys" / f"permutation-{number:03d}-{version}.csv")
            grouped = {}
            for item in perm_rows:
                grouped.setdefault(item["id"], []).append((int(item["canonical"]), int(item["displayed"])))
            if set(grouped) != set(ids):
                perm_fail += 1
                fail(f"batch {number} {version} key ids")
            orders[version] = {}
            for ident, items in grouped.items():
                k = len(items)
                if sorted(canonical for canonical, _ in items) != list(range(1, k + 1)):
                    reverse_fail += 1
                if sorted(shown for _, shown in items) != list(range(1, k + 1)):
                    reverse_fail += 1
                back = {shown: canonical for canonical, shown in items}
                for canonical, shown in items:
                    if back[shown] != canonical:
                        reverse_fail += 1
                order = [back[shown] for shown in range(1, k + 1)]
                orders[version][ident] = order
        multi = [ident for ident in ids if len(orders["A"][ident]) >= 2]
        if multi:
            for left, right in (("A", "B"), ("A", "C"), ("B", "C")):
                differ = sum(1 for ident in multi if orders[left][ident] != orders[right][ident])
                if differ * 2 < len(multi):
                    perm_fail += 1
                    fail(f"batch {number} {left}/{right} differ {differ}/{len(multi)}")
            first_rates = []
            for version in ("A", "B", "C"):
                first = sum(1 for ident in multi if orders[version][ident][0] == 1)
                first_rates.append(first / len(multi))
            if min(first_rates) > 0.40:
                perm_fail += 1
                fail(f"batch {number} first-rate {first_rates}")
        for row in versions["A"]:
            if row["id"] in controls:
                level = controls[row["id"]]["base_level"]
                index = int(controls[row["id"]]["base_index"])
            else:
                level = pairs[row["id"]]["level"]
                index = pairs[row["id"]]["index"]
            de_example, lv_example = pick_example(
                lv_faces[level][index]["examples"],
                cs_faces[level][index]["examples"],
            )
            if row["de_example"] != de_example or row["lv_example"] != lv_example:
                example_fail += 1
                if example_fail <= 5:
                    fail(f"example {row['id']} {row['de_example']!r} != {de_example!r}")
            shown_meanings = parse_meanings(row["meanings"], len(orders["A"][row["id"]]))
            canonical_order = orders["A"][row["id"]]
            if row["id"] in pairs and controls.get(row["id"], {}).get("known_hard") != "yes" and row["id"] not in controls:
                source = pairs[row["id"]]["meanings"]
            elif row["id"] in controls and controls[row["id"]]["known_hard"] == "yes":
                source = pairs[row["id"]]["meanings"]
            elif row["id"] in controls and controls[row["id"]]["control_type"] == "POS":
                source = [part.strip() for part in lv_faces[level][index]["lv"].split("•") if part.strip()]
            else:
                source = pairs[controls[row["id"]]["base_id"]]["meanings"]
            rebuilt = [source[item - 1] for item in canonical_order]
            if rebuilt != shown_meanings:
                fail(f"meaning order {row['id']}")
            de, article = split_show(row["de_show"])
            if row["id"] in pairs and row["id"] not in controls:
                expect_de = show_de(pairs[row["id"]]["de"], pairs[row["id"]]["article"])
                expect_cs = pairs[row["id"]]["cs"]
            elif row["id"] in controls and controls[row["id"]]["known_hard"] == "yes":
                expect_de = show_de(pairs[row["id"]]["de"], pairs[row["id"]]["article"])
                expect_cs = pairs[row["id"]]["cs"]
            elif controls[row["id"]]["control_type"] == "POS":
                face = lv_faces[level][index]
                expect_de = show_de(face["de"], face["article"])
                expect_cs = cs_faces[level][index]["lv"]
            else:
                base = pairs[controls[row["id"]]["base_id"]]
                expect_de = show_de(base["de"], base["article"])
                expect_cs = controls[row["id"]]["donor_cs"]
            if row["de_show"] != expect_de or row["cs"] != expect_cs:
                fail(f"text {row['id']} {row['de_show']!r}/{row['cs']!r} != {expect_de!r}/{expect_cs!r}")
        for version in ("B", "C"):
            for left, right in zip(versions["A"], versions[version]):
                if left["de_example"] != right["de_example"] or left["lv_example"] != right["lv_example"]:
                    example_fail += 1
                if left["cs"] != right["cs"] or left["de_show"] != right["de_show"]:
                    fail(f"version drift {left['id']} {version}")
    if sorted(catalog_seen) != sorted(pairs):
        fail(f"catalog {len(catalog_seen)} unique {len(set(catalog_seen))} expected {len(pairs)}")
    batch1 = parse_batch(out / "batches" / "batch-001-A.md")
    wanted = {
        ("wider", "Vs"),
        ("der Wechsel", "Posun"),
        ("austreten", "Vystěhovat"),
        ("die These", "Práce"),
    }
    found = {(row["de_show"], row["cs"]) for row in batch1}
    if not wanted <= found:
        fail(f"batch 1 missing {wanted - found}")
    for path in (out / "keys").glob("*.csv"):
        if path.stat().st_size >= 500 * 1024:
            oversize += 1
    print(f"G2_DE_DUP {de_dup}")
    print(f"G2_CONTROL_OVERLAP {overlap}")
    print(f"G3_BATCH_FAIL {percent_fail}")
    print(f"G4_PERM_FAIL {perm_fail}")
    print(f"G4_REVERSE_FAIL {reverse_fail}")
    print(f"G5_EXAMPLE_FAIL {example_fail}")
    print(f"G8_REAL {len(pairs)}")
    print(f"G8_SEEN {len(set(catalog_seen))}")
    print(f"G10_OVERSIZE {oversize}")
    print(f"BATCHES {len(numbers)}")
    print(f"CONTROLS {len(controls)}")
    print(f"VIOLATIONS {len(violations)}")
    for message in violations[:30]:
        print("FAIL", message)
    if violations or de_dup or overlap or percent_fail or perm_fail or reverse_fail or example_fail or oversize:
        raise SystemExit(1)
    print("GATES_PASS")


if __name__ == "__main__":
    main()
