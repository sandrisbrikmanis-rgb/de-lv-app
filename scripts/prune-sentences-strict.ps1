# Strict prune for data/sentences.js — line-level block removal, never ConvertTo-Json on data.
param(
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $root "data/sentences.js"
$whitelistPath = Join-Path $PSScriptRoot "sentences-strict-whitelist.json"

$whitelistJson = [System.IO.File]::ReadAllText($whitelistPath, [System.Text.Encoding]::UTF8)
$whitelist = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
foreach ($item in ($whitelistJson | ConvertFrom-Json)) {
  [void]$whitelist.Add([string]$item)
}

$archaicPattern = '(?i)(kartotēk|telegrāf|radiotelefons|habilitēt|pa telegrāfu)'
$nounStartPattern = '^(?i)(der|die|das|ein|eine|einen|einem|einer|den|dem|des)\s'
$jemandPattern = '(?i)(jemandem|jemanden|jemand|etwas|sich)\s'
$verbPhrasePattern = '(?i)\s(gehen|machen|tun|werden|haben|sein|lassen|geben|nehmen|stellen|legen|fahren|kommen|stehen|liegen|sitzen|bleiben|finden|halten|bringen|schreiben|lesen|sprechen|hören|sehen|wissen|denken|glauben|heißen|dienen|leisten|erweisen|decken|drehen|laden|reichen|stellen)\s*$'
$timePlacePattern = '(?i)^(im (Herbst|Winter|Sommer|Frühling|Mai|Juni|Juli|August|September|Oktober|November|Dezember|Januar)|am (Abend|Morgen|Nachmittag|Vormittag|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Wochenende)|heute|gestern|morgen|nachts|tagsüber|zu Hause|nach Hause|von Hause|von heute|von dort|bis jetzt|bis dahin|bis bald|bis später|von kurzem|bald darauf|in der Früh)\b'
$idiomPattern = '(?i)(desto|je mehr|umso|wie bitte|was denn|ohne zweifel|und zwar|zum zweiten|wie geht|was gibt|na und|ach so|stimmt das|guten morgen|guten abend|gute nacht|auf wiedersehen|was für|zu viel|ist zu\.|außer zweifel|zutritt|wiedersehen|guten tag)'
$conversationalPattern = '(?i)\b(denn|doch|bitte|schon|mal|ja|wohl|etwa|nur|auch|noch|hätte|wäre|könnte|nicht wahr|oder)\b'

function Get-WordCount([string]$Text) {
  $t = $Text.Trim() -replace '[.!?]$', ''
  $parts = $t -split '\s+' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
  return $parts.Count
}

function Test-FullSentence([string]$De) {
  return $De.Trim() -match '[.!?]$'
}

function Test-KeepEntry([string]$De, [string]$Lv) {
  $de = $De.Trim()
  $lv = $Lv.Trim()

  if ($whitelist.Contains($de)) { return $true }

  if ($de -match $archaicPattern -or $lv -match $archaicPattern) { return $false }
  if ($de -notmatch '\s') { return $false }
  if ($de -match $nounStartPattern) { return $false }
  if ($de -match $jemandPattern) { return $false }
  if ($de -match $verbPhrasePattern) { return $false }

  $words = Get-WordCount $de
  $full = Test-FullSentence $de
  $timePlace = $de -match $timePlacePattern
  $idiom = $de -match $idiomPattern
  $conversational = $de -match $conversationalPattern

  if ($full) {
    if ($idiom) { return $true }
    if ($conversational -and $words -le 8) { return $true }
    if ($words -le 5) { return $true }
    return $false
  }

  if ($timePlace -and $words -le 4) { return $true }
  if ($idiom -and $words -le 4) { return $true }

  return $false
}

function Get-EntryBlocks([System.Collections.Generic.List[string]]$Lines) {
  $blocks = New-Object System.Collections.Generic.List[object]
  $i = 0
  while ($i -lt $Lines.Count) {
    if ($Lines[$i] -match '^\s+\{\s*$') {
      $start = $i
      $de = $null
      $lv = $null
      $j = $i + 1
      while ($j -lt $Lines.Count -and $Lines[$j] -notmatch '^\s+\}\s*,?\s*$') {
        if ($Lines[$j] -match '^\s+"de":\s*"([^"]*)"') { $de = $Matches[1] }
        if ($Lines[$j] -match '^\s+"lv":\s*"([^"]*)"') { $lv = $Matches[1] }
        $j++
      }
      if ($j -lt $Lines.Count) {
        $end = $j
        $blocks.Add([pscustomobject]@{ Start = $start; End = $end; De = $de; Lv = $lv })
        $i = $end + 1
        continue
      }
    }
    $i++
  }
  return $blocks
}

$lines = [System.Collections.Generic.List[string]]::new()
$lines.AddRange([string[]][System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8))
$blocks = Get-EntryBlocks $lines
$totalBefore = $blocks.Count
$toRemove = New-Object System.Collections.Generic.List[int]

foreach ($block in $blocks) {
  if (-not (Test-KeepEntry $block.De $block.Lv)) {
    [void]$toRemove.Add($block.Start)
  }
}

$removed = $toRemove.Count
$kept = $totalBefore - $removed

if ($DryRun) {
  Write-Output "=== DRY RUN: prune-sentences-strict ==="
  Write-Output "totalBefore=$totalBefore kept=$kept removed=$removed removalPct=$([Math]::Round(100.0 * $removed / $totalBefore, 1))%"
  Write-Output ""
  Write-Output "Sample kept (first 15):"
  $n = 0
  foreach ($block in $blocks) {
    if (Test-KeepEntry $block.De $block.Lv) {
      Write-Output "  KEEP: $($block.De)"
      $n++
      if ($n -ge 15) { break }
    }
  }
  Write-Output ""
  Write-Output "Sample removed (first 15):"
  $n = 0
  foreach ($block in $blocks) {
    if (-not (Test-KeepEntry $block.De $block.Lv)) {
      Write-Output "  DEL:  $($block.De)"
      $n++
      if ($n -ge 15) { break }
    }
  }
  exit 0
}

for ($r = $toRemove.Count - 1; $r -ge 0; $r--) {
  $start = $toRemove[$r]
  $end = $start
  while ($end -lt $lines.Count -and $lines[$end] -notmatch '^\s+\}\s*,?\s*$') { $end++ }
  for ($k = $end; $k -ge $start; $k--) { $lines.RemoveAt($k) }
}

$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllLines($filePath, $lines.ToArray(), $utf8)

$removalPct = if ($totalBefore -gt 0) { [Math]::Round(100.0 * $removed / $totalBefore, 1) } else { 0 }
Write-Output "data/sentences.js : totalBefore=$totalBefore totalAfter=$kept removed=$removed removalPct=${removalPct}%"
