# Extract diag_NNN -> {de, lv} mapping before deleting dialogues.js
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$dlgText = [System.IO.File]::ReadAllText((Join-Path $root "data/dialogues.js"), [System.Text.Encoding]::UTF8)

$map = @{}
$pattern = 'id:\s*"(diag_\d+)"'
$idMatches = [regex]::Matches($dlgText, $pattern)
$deLvMatches = [regex]::Matches($dlgText, 'de:\s*"((?:\\.|[^"\\])*)"\s*,\s*lv:\s*"((?:\\.|[^"\\])*)"')

if ($idMatches.Count -ne $deLvMatches.Count) {
  throw "ID count ($($idMatches.Count)) != de/lv count ($($deLvMatches.Count))"
}

for ($i = 0; $i -lt $idMatches.Count; $i++) {
  $id = $idMatches[$i].Groups[1].Value
  $de = [regex]::Unescape($deLvMatches[$i].Groups[1].Value)
  $lv = [regex]::Unescape($deLvMatches[$i].Groups[2].Value)
  $map[$id] = @{ de = $de; lv = $lv }
}

$lines = @("const DIALOGUE_ID_MAP = {")
$keys = $map.Keys | Sort-Object
for ($i = 0; $i -lt $keys.Count; $i++) {
  $k = $keys[$i]
  $de = ($map[$k].de -replace '\\', '\\\\' -replace '"', '\"')
  $lv = ($map[$k].lv -replace '\\', '\\\\' -replace '"', '\"')
  $comma = if ($i -lt $keys.Count - 1) { "," } else { "" }
  $lines += "  `"$k`": { `"de`": `"$de`", `"lv`": `"$lv`" }$comma"
}
$lines += "};"
$lines += ""
$lines += "window.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;"
$lines += ""

$out = Join-Path $root "data/dialogueIdMap.js"
[System.IO.File]::WriteAllText($out, ($lines -join "`n"), [System.Text.UTF8Encoding]::new($false))
Write-Output "Wrote $($map.Count) mappings to data/dialogueIdMap.js"
