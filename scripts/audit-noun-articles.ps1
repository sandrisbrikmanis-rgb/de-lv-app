# Read-only audit: extract top-level noun entries from data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

$targets = @(
  "data/a1.js", "data/a2.js", "data/b1.js", "data/b2.js", "data/c1.js", "data/c2.js", "data/comparisonStudy.js"
)

function Repair-Json([string]$Json) {
  $prev = $null
  while ($prev -ne $Json) {
    $prev = $Json
    $Json = $Json -replace ',(\s*[\]}])', '$1'
  }
  return $Json
}

function Extract-TopLevelArray([string]$Code) {
  $start = $Code.IndexOf('[')
  if ($start -lt 0) { throw "No JSON array found" }
  $depth = 0; $inString = $false; $escape = $false
  for ($i = $start; $i -lt $Code.Length; $i++) {
    $ch = $Code[$i]
    if ($inString) {
      if ($escape) { $escape = $false; continue }
      if ($ch -eq '\') { $escape = $true; continue }
      if ($ch -eq '"') { $inString = $false }
      continue
    }
    if ($ch -eq '"') { $inString = $true; continue }
    if ($ch -eq '[') { $depth++ }
    elseif ($ch -eq ']') {
      $depth--
      if ($depth -eq 0) { return $Code.Substring($start, $i - $start + 1) }
    }
  }
  throw "Unterminated JSON array"
}

function Get-StripArticle([string]$De) { return ($De -replace '^(?i)(der|die|das)\s+', '').Trim() }
function Get-Article([string]$De) {
  if ($De -match '^(?i)(der|die|das)\b') { return $Matches[1].ToLowerInvariant() }
  return $null
}

$lookupPath = Join-Path $PSScriptRoot "german-noun-lookup.json"
$lookup = @{}
if (Test-Path $lookupPath) {
  $lookup = @{}
  foreach ($item in ((Get-Content $lookupPath -Raw -Encoding UTF8) | ConvertFrom-Json)) {
    $key = [string]$item.noun
    if ($key) { $lookup[$key.ToLowerInvariant()] = $item }
  }
}

$stats = @{
  totalNouns = 0
  missingDeArticle = 0
  missingDePlural = 0
  wrongArticle = 0
  wrongCapitalization = 0
  wrongPlural = 0
  notInLookup = 0
}
$issues = New-Object System.Collections.Generic.List[object]

foreach ($rel in $targets) {
  $filePath = Join-Path $root $rel
  if (-not (Test-Path $filePath)) { continue }
  $code = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
  $json = Repair-Json (Extract-TopLevelArray $code)
  $entries = @($json | ConvertFrom-Json)
  foreach ($entry in $entries) {
    $de = [string]$entry.de
    if (-not ($de -match '^(?i)(der|die|das)\s+')) { continue }
    $stats.totalNouns++
    $article = Get-Article $de
    $noun = Get-StripArticle $de
    $nounKey = $noun.ToLowerInvariant()

    if (-not $entry.de_article) { $stats.missingDeArticle++ }
    if (-not $entry.de_plural) { $stats.missingDePlural++ }

  if ($noun -and $noun[0] -cmatch '[a-zäöüß]') { $stats.wrongCapitalization++ }

    $currentArticle = if ($entry.de_article) { [string]$entry.de_article } else { $article }
    $lookupHit = $lookup[$nounKey]
    if ($lookupHit) {
      $expectedArticle = [string]$lookupHit.article
      if ($expectedArticle -and $currentArticle -ne $expectedArticle) {
        $stats.wrongArticle++
        $issues.Add([pscustomobject]@{
          file = $rel; de = $de; issue = "article"
          current = $currentArticle; expected = $expectedArticle
          expectedPlural = [string]$lookupHit.plural
        })
      }
      if ($entry.de_plural -and $lookupHit.plural) {
        $pl = [string]$entry.de_plural
        $expPl = "die $($lookupHit.plural)"
        if ($pl -ne $expPl -and $pl -ne $lookupHit.plural) {
          $stats.wrongPlural++
        }
      }
    } else {
      $stats.notInLookup++
    }
  }
}

Write-Output "=== Noun Article Audit (read-only) ==="
Write-Output "Total nouns: $($stats.totalNouns)"
Write-Output "Missing de_article: $($stats.missingDeArticle)"
Write-Output "Missing de_plural: $($stats.missingDePlural)"
Write-Output "Wrong capitalization (de noun): $($stats.wrongCapitalization)"
Write-Output "Wrong article (in lookup): $($stats.wrongArticle)"
Write-Output "Wrong plural (in lookup): $($stats.wrongPlural)"
Write-Output "Not in lookup dictionary: $($stats.notInLookup)"
if ($issues.Count -gt 0) {
  Write-Output ""
  Write-Output "Sample article issues (max 25):"
  $issues | Select-Object -First 25 | ForEach-Object {
    Write-Output "  $($_.file): $($_.de) => $($_.current) should be $($_.expected)"
  }
}
