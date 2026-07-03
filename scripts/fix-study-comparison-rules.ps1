param(
  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
  [string[]]$Files
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

$PrepPattern = '^(an|auf|aus|bei|mit|von|zu|in|um|nach|vor|uber|unter|hinter|neben|gegen|durch|ohne|seit|bis|wahrend|trotz|wegen|statt|anstatt|innerhalb|ausserhalb|gegenuber|entlang|oberhalb|unterhalb|infolge|aufgrund|mithilfe|laut|entgegen|samt|minus|pro|via|per|ab|anhand|angesichts|aufseiten|bezuglich|hinsichtlich|kraft|mangels|mittels|seitens|ungeachtet|unwegen|vonseiten|vorbehaltlich|zugunsten|zuungunsten|zwecks)$'
$ConjPattern = '^(aber|sondern|deshalb|deswegen|darum|jedoch|allerdings|trotzdem|weil|dass|wenn|als|obwohl|damit|sodass|bevor|nachdem|seitdem|falls|ob|denn|also|sowohl|weder|noch|entweder|sowie|indem|zwar|hingegen|dafur|dagegen|dennoch|ausserdem|zudem|folglich|somit|inzwischen|mittlerweile|eigentlich|ubrigens|bereits|kaum|fast|sogar|etwa|ungefahr|nur|auch|schon|erst|gleichwohl|indessen|infolgedessen|demnach|demzufolge|folglich|weder|entweder|sodann|insofern|soweit|namlich|zumal|wohingegen|wobei|woraus|worauf|worin|womit|wovon|wozu|sowenig|solang|solange|sooft|sobald|sofern|soweit)$'

function ConvertTo-MutableObject($InputObject) {
  if ($null -eq $InputObject) { return $null }
  if ($InputObject -is [System.Collections.IDictionary]) {
    $hash = [ordered]@{}
    foreach ($key in $InputObject.Keys) {
      $hash[$key] = ConvertTo-MutableObject $InputObject[$key]
    }
    return $hash
  }
  if ($InputObject -is [array] -or ($InputObject -is [System.Collections.IEnumerable] -and -not ($InputObject -is [string]))) {
    return @($InputObject | ForEach-Object { ConvertTo-MutableObject $_ })
  }
  if ($InputObject -is [psobject]) {
    $hash = [ordered]@{}
    foreach ($prop in $InputObject.PSObject.Properties) {
      $hash[$prop.Name] = ConvertTo-MutableObject $prop.Value
    }
    return $hash
  }
  return $InputObject
}

function Get-NormalizedDe([string]$De) {
  return ($De -replace '^(?i)(der|die|das)\s+', '').Trim().ToLowerInvariant()
    .Replace([char]0x00E4, 'ae').Replace([char]0x00F6, 'oe').Replace([char]0x00FC, 'ue').Replace([char]0x00DF, 'ss')
}

function Test-HasStructuralAmbiguity($Entry) {
  return ([string]$Entry.lv).Contains($bullet)
}

function Test-IsPrepOrConjunction($Entry) {
  $de = [string]$Entry.de
  if ($de -match '\s') { return $false }
  if ($de -match '^(?i)(der|die|das)\s+') { return $false }
  $bare = Get-NormalizedDe $de
  if ($bare -match $PrepPattern) { return $true }
  if ($bare -match $ConjPattern) { return $true }
  return $false
}

function Test-NeedsComparison($Entry) {
  return (Test-HasStructuralAmbiguity $Entry) -or (Test-IsPrepOrConjunction $Entry)
}

function Test-NeedsStudy($Entry) {
  return Test-NeedsComparison $Entry
}

function Remove-ComparisonFromStudy($Study) {
  if ($null -eq $Study) { return $Study }
  [void]$Study.Remove('comparison')
  if ($Study.sectionAccents) {
  if ($Study.sectionAccents -is [System.Collections.IDictionary]) {
      [void]$Study.sectionAccents.Remove('comparison')
    }
  }
  return $Study
}

function Load-WordsFile([string]$FilePath) {
  $code = [System.IO.File]::ReadAllText($FilePath)
  if ($code -notmatch 'const\s+(\w+)\s*=') { throw "Could not detect array name in $FilePath" }
  $varName = $Matches[1]
  if ($code -notmatch 'const\s+\w+\s*=\s*(\[[\s\S]*?\])\s*;') {
    throw "Could not extract JSON array from $FilePath"
  }
  $entries = ConvertTo-MutableObject (($Matches[1]) | ConvertFrom-Json)
  return @{ entries = @($entries); varName = $varName }
}

function Save-WordsFile([string]$FilePath, [string]$VarName, $Entries) {
  $json = $Entries | ConvertTo-Json -Depth 20
  $json = $json -replace '\\u003e', '>'
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllText($FilePath, "const $VarName = $json;`n`nwindow.$VarName = $VarName;`n", $utf8)
}

foreach ($target in $Files) {
  $filePath = if ([System.IO.Path]::IsPathRooted($target)) { $target } else { Join-Path $root $target }
  $loaded = Load-WordsFile $filePath
  $removedStudy = 0
  $removedComparison = 0
  $keptWithComparison = 0
  $keptPlain = 0

  foreach ($entry in $loaded.entries) {
    if (-not $entry.study) {
      $keptPlain++
      continue
    }

    if (-not (Test-NeedsStudy $entry)) {
      [void]$entry.Remove('study')
      $removedStudy++
      continue
    }

    if (Test-NeedsComparison $entry) {
      $keptWithComparison++
      continue
    }

    Remove-ComparisonFromStudy $entry.study
    $removedComparison++
  }

  Save-WordsFile $filePath $loaded.varName $loaded.entries
  Write-Output "$target : removedStudy=$removedStudy keptWithComparison=$keptWithComparison keptPlain=$keptPlain"
}
