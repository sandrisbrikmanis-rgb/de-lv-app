# Fix de_article for German homonyms using Latvian translation context.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$targets = @("data/a1.js","data/a2.js","data/b1.js","data/b2.js","data/c1.js","data/c2.js")

$rulesPath = Join-Path $PSScriptRoot "german-noun-homonyms.json"
$rules = @((Get-Content $rulesPath -Raw -Encoding UTF8) | ConvertFrom-Json)

$fixed = 0
foreach ($rel in $targets) {
  $path = Join-Path $root $rel
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8))
  for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -notmatch '^\s{4}"de":\s*"(?<noun>[^"]+)"') { continue }
    $noun = $Matches['noun']
    $lvLine = ""
    for ($j = $i + 1; $j -lt [Math]::Min($i + 8, $lines.Count); $j++) {
      if ($lines[$j] -match '^\s{4}"lv":\s*"(?<lv>[^"]+)"') { $lvLine = $Matches['lv']; break }
    }
    if (-not $lvLine) { continue }
    $lvLower = $lvLine.ToLowerInvariant()
    foreach ($rule in $rules) {
      if ($noun -ne [string]$rule.noun) { continue }
      $needle = [string]$rule.lv
      if ($lvLower -notlike "*$($needle.ToLowerInvariant())*") { continue }
      for ($j = $i + 1; $j -lt [Math]::Min($i + 6, $lines.Count); $j++) {
        if ($lines[$j] -match '^\s{4}"de_article":\s*"(?<art>der|die|das)"') {
          if ($Matches['art'] -ne [string]$rule.article) {
            $oldArt = $Matches['art']
            $lines[$j] = $lines[$j] -replace '"de_article":\s*"(der|die|das)"', "`"de_article`": `"$($rule.article)`""
            $fixed++
            Write-Output "$rel : $noun [$lvLine] $oldArt => $($rule.article)"
          }
          break
        }
      }
    }
  }
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllLines($path, $lines.ToArray(), $utf8)
}
Write-Output "Homonym article fixes: $fixed"
