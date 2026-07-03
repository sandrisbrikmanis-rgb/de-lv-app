# One-time migration: merge dialogues.js entries into sentences.js
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

function Load-JsArray([string]$FilePath, [string]$VarName) {
  $code = [System.IO.File]::ReadAllText((Join-Path $root $FilePath), [System.Text.Encoding]::UTF8)
  $sandbox = New-Object PSObject
  Add-Member -InputObject $sandbox -MemberType ScriptMethod -Name "eval" -Value { param($c) Invoke-Expression $c }
  # Use regex extraction instead of eval for safety
  return $null
}

# Load via regex parsing
$sentText = [System.IO.File]::ReadAllText((Join-Path $root "data/sentences.js"), [System.Text.Encoding]::UTF8)
$dlgText = [System.IO.File]::ReadAllText((Join-Path $root "data/dialogues.js"), [System.Text.Encoding]::UTF8)

$sentences = [System.Collections.Generic.List[object]]::new()
foreach ($m in [regex]::Matches($sentText, '"de"\s*:\s*"((?:\\.|[^"\\])*)"\s*,\s*"lv"\s*:\s*"((?:\\.|[^"\\])*)"')) {
  $de = [regex]::Unescape($m.Groups[1].Value)
  $lv = [regex]::Unescape($m.Groups[2].Value)
  $sentences.Add([pscustomobject]@{ de = $de; lv = $lv; level = "Sätze" })
}

$dialogues = [System.Collections.Generic.List[object]]::new()
foreach ($m in [regex]::Matches($dlgText, 'de:\s*"((?:\\.|[^"\\])*)"\s*,\s*lv:\s*"((?:\\.|[^"\\])*)"')) {
  $de = [regex]::Unescape($m.Groups[1].Value)
  $lv = [regex]::Unescape($m.Groups[2].Value)
  $dialogues.Add([pscustomobject]@{ de = $de; lv = $lv })
}

Write-Output "sentences before: $($sentences.Count)"
Write-Output "dialogues: $($dialogues.Count)"

$existing = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
foreach ($s in $sentences) {
  [void]$existing.Add("$($s.de)|$($s.lv)")
}

$added = 0
$skipped = 0
foreach ($d in $dialogues) {
  $key = "$($d.de)|$($d.lv)"
  if ($existing.Contains($key)) {
    $skipped++
    continue
  }
  [void]$existing.Add($key)
  $sentences.Add([pscustomobject]@{ de = $d.de; lv = $d.lv; level = "Sätze" })
  $added++
}

Write-Output "added: $added skipped duplicates: $skipped total: $($sentences.Count)"

function Escape-Json([string]$s) {
  return ($s -replace '\\', '\\\\' -replace '"', '\"' -replace "`r", '\r' -replace "`n", '\n' -replace "`t", '\t')
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine("const SENTENCE_ENTRIES = [")
for ($i = 0; $i -lt $sentences.Count; $i++) {
  $e = $sentences[$i]
  [void]$sb.AppendLine("  {")
  [void]$sb.AppendLine('    "de": "' + (Escape-Json $e.de) + '",')
  [void]$sb.AppendLine('    "lv": "' + (Escape-Json $e.lv) + '",')
  [void]$sb.AppendLine('    "level": "Sätze"')
  $comma = if ($i -lt $sentences.Count - 1) { "," } else { "" }
  [void]$sb.AppendLine("  }$comma")
}
[void]$sb.AppendLine("];")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;")
[void]$sb.AppendLine("")

$outPath = Join-Path $root "data/sentences.js"
[System.IO.File]::WriteAllText($outPath, $sb.ToString(), [System.Text.UTF8Encoding]::new($false))
Write-Output "Wrote $outPath"
